// i18n lookup with EN fallback. See docs/design.md §4.
//
// All DB access goes through getPool(). tMany batches a set of keys in
// a single round-trip with `WHERE key = ANY($1::text[]) AND locale = $2`,
// then re-issues a fallback query for keys that missed, against the
// default locale. resolveI18n is a pure function over a precomputed
// map — no DB calls inside the recursion.

import { getPool } from './db.js';
import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from './i18n-locales.js';

const I18N_TOKEN = /\{\{i18n:([a-zA-Z0-9_.\-]+)\}\}/g;

function safeLocale(locale: string): Locale {
  return isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
}

/**
 * Look up many translations at once. Returns a `Map` keyed by the
 * original `keys` so callers can do a constant-time `.get(k)` lookup.
 * Falls back to `DEFAULT_LOCALE` for any key that didn't have a row
 * in the requested locale.
 *
 * Two round-trips in the worst case (one for the requested locale,
 * one for the fallback locale, only when there are misses).
 */
export async function tMany(keys: readonly string[], locale: string): Promise<Map<string, string>> {
  if (keys.length === 0) return new Map();
  const loc = safeLocale(locale);
  const pool = getPool();

  const map = new Map<string, string>();
  const { rows } = await pool.query<{ key: string; value: string }>(
    `SELECT key, value FROM translations WHERE key = ANY($1::text[]) AND locale = $2`,
    [keys as string[], loc]
  );
  for (const r of rows) map.set(r.key, r.value);

  const missing = keys.filter((k) => !map.has(k));
  if (missing.length > 0 && loc !== DEFAULT_LOCALE) {
    const { rows: fb } = await pool.query<{ key: string; value: string }>(
      `SELECT key, value FROM translations WHERE key = ANY($1::text[]) AND locale = $2`,
      [missing, DEFAULT_LOCALE]
    );
    for (const r of fb) map.set(r.key, r.value);
  }

  if (import.meta.env?.DEV) {
    for (const k of keys) {
      if (!map.has(k)) {
        // eslint-disable-next-line no-console
        console.warn(`[i18n] missing translation: key="${k}" locale="${loc}"`);
      }
    }
  }

  return map;
}

/**
 * One-shot lookup for a single key. Implemented in terms of tMany.
 * For UI strings called from a tight loop, prefer tMany + tFromMap.
 */
export async function tAsync(key: string, locale: string): Promise<string> {
  const map = await tMany([key], locale);
  return map.get(key) ?? key;
}

/**
 * Returns a sync selector over a precomputed translation map. The
 * selector does a pure `map.get(k) ?? k` lookup with no I/O. Use this
 * in Astro frontmatter and React components after building the map
 * once with tMany.
 */
export function tFromMap(map: Map<string, string>): (key: string) => string {
  return (key: string) => map.get(key) ?? key;
}

/**
 * Recursively walk a JSON-serializable value (object/array/string) and
 * replace any string matching {{i18n:KEY}} with its translation from
 * the precomputed `map`. Pure function — no DB access.
 */
export function resolveI18n<T>(value: T, _locale: string, map: Map<string, string>): T {
  if (typeof value === 'string') {
    return value.replace(I18N_TOKEN, (_m, key: string) => map.get(key) ?? key) as unknown as T;
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
