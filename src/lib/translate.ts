// i18n lookup with EN fallback. See docs/design.md §4.

import type Database from 'better-sqlite3';
import { getDb } from './db.js';
import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from './i18n-locales.js';

type DB = Database.Database;

/**
 * Look up a translation for `key` in `locale`. Falls back to English when
 * the locale-specific row is missing. If neither exists, returns the key
 * literal and logs a warning to the console in dev mode.
 */
export function t(db: DB, key: string, locale: string): string {
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  const stmt = db.prepare<[string, string], { value: string }>(
    'SELECT value FROM translations WHERE key = ? AND locale = ?'
  );

  const row = stmt.get(key, safeLocale);
  if (row) return row.value;

  if (safeLocale !== DEFAULT_LOCALE) {
    const fallback = stmt.get(key, DEFAULT_LOCALE);
    if (fallback) return fallback.value;
  }

  if (import.meta.env?.DEV) {
    // eslint-disable-next-line no-console
    console.warn(`[i18n] missing translation: key="${key}" locale="${safeLocale}"`);
  }

  return key;
}

export function tSync(key: string, locale: string): string {
  return t(getDb(), key, locale);
}

const I18N_TOKEN = /\{\{i18n:([a-zA-Z0-9_.\-]+)\}\}/g;

/**
 * Recursively walk a JSON-serializable value (object/array/string) and
 * replace any string matching {{i18n:KEY}} with its translation for the
 * given locale. Non-string leaves are returned unchanged.
 */
export function resolveI18n<T>(value: T, locale: string): T {
  const db = getDb();
  if (typeof value === 'string') {
    return value.replace(I18N_TOKEN, (_match, key: string) =>
      t(db, key, locale)
    ) as unknown as T;
  }
  if (Array.isArray(value)) {
    return value.map((item) => resolveI18n(item, locale)) as unknown as T;
  }
  if (value !== null && typeof value === 'object') {
    const out: Record<string, unknown> = {};
    for (const [k, v] of Object.entries(value as Record<string, unknown>)) {
      out[k] = resolveI18n(v, locale);
    }
    return out as unknown as T;
  }
  return value;
}
