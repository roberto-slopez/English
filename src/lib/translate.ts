// Server-side lookup: the authored catalog precedes stale database copies.
// Database-only keys remain supported. Requested locale precedes English.
import { getPool } from './db.js';
import { translationCatalog } from '../content/translations/catalog.js';
import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from './i18n-locales.js';
import { I18N_TOKEN } from './i18n-tokens.js';

export interface TranslationLookup {
  key: string;
  value: string;
  resolvedLocale: Locale;
  fallback: boolean;
  source: 'catalog' | 'database';
}

function validTranslation(value: unknown, key: string): value is string {
  return typeof value === 'string' && value.trim().length > 0 && value !== key;
}

async function lookupMany(keys: readonly string[], locale: string): Promise<Map<string, TranslationLookup>> {
  const requestedLocale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const uniqueKeys = [...new Set(keys.filter(Boolean))];
  const result = new Map<string, TranslationLookup>();
  const locales = requestedLocale === DEFAULT_LOCALE
    ? [DEFAULT_LOCALE] : [requestedLocale, DEFAULT_LOCALE];

  for (const loc of locales) {
    for (const key of uniqueKeys) {
      if (result.has(key)) continue;
      const value = translationCatalog[loc][key];
      if (validTranslation(value, key)) {
        result.set(key, { key, value, resolvedLocale: loc, fallback: loc !== requestedLocale, source: 'catalog' });
      }
    }
    const missing = uniqueKeys.filter(key => !result.has(key));
    if (!missing.length) break;
    const { rows } = await getPool().query<{ key: string; value: string }>(
      'SELECT key, value FROM translations WHERE key = ANY($1::text[]) AND locale = $2',
      [missing, loc]
    );
    for (const row of rows) {
      // Earlier seeds stored English under other locales for untranslated keys.
      // Let the real English lookup report its locale instead of mislabelling it.
      if (loc !== DEFAULT_LOCALE && row.value === translationCatalog[DEFAULT_LOCALE][row.key]) continue;
      if (missing.includes(row.key) && validTranslation(row.value, row.key)) {
        result.set(row.key, {
          key: row.key, value: row.value, resolvedLocale: loc,
          fallback: loc !== requestedLocale, source: 'database',
        });
      }
    }
  }
  return result;
}

export async function lookupTranslation(key: string, locale: string): Promise<TranslationLookup | null> {
  return (await lookupMany([key], locale)).get(key) ?? null;
}

export async function tMany(keys: readonly string[], locale: string): Promise<Map<string, string>> {
  const results = await lookupMany(keys, locale);
  return new Map([...results].map(([key, result]) => [key, result.value]));
}

export async function tAsync(key: string, locale: string): Promise<string> {
  return (await lookupTranslation(key, locale))?.value ?? '';
}

export function tFromMap(map: ReadonlyMap<string, string>): (key: string) => string {
  return key => map.get(key) ?? '';
}

/**
 * Recursively walk a JSON-serializable value (object/array/string) and
 * replace any string matching {{i18n:KEY}} with its translation from
 * the precomputed `map`. Pure function — no DB access.
 */
export function resolveI18n<T>(value: T, _locale: string, map: ReadonlyMap<string, string>): T {
  if (typeof value === 'string') {
    return value.replace(I18N_TOKEN, (_m, key: string) => map.get(key) ?? '') as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => resolveI18n(item, _locale, map)) as unknown as T;
  }
  if (value !== null && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = resolveI18n(v, _locale, map);
    }
    return out as unknown as T;
  }
  return value;
}
