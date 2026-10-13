import { ALL_LESSONS } from '../src/content/lessons.js';
import { translationCatalog, getTranslationRows } from '../src/content/translations/catalog.js';
import { SUPPORTED_LOCALES } from '../src/lib/i18n-locales.js';
import { collectI18nTokens } from '../src/lib/i18n-tokens.js';
import { Pool } from 'pg';

const keys = new Set(Object.keys(translationCatalog.en).filter(key => key.startsWith('ui.')));
for (const lesson of ALL_LESSONS) {
  keys.add(lesson.titleKey).add(lesson.descriptionKey).add(lesson.introKey);
  for (const exercise of lesson.exercises) {
    keys.add(exercise.promptKey);
    if (exercise.explanationKey) keys.add(exercise.explanationKey);
    if (exercise.proTipKey) keys.add(exercise.proTipKey);
    collectI18nTokens(exercise.data, keys);
  }
}

const failures: string[] = [];
for (const locale of SUPPORTED_LOCALES) {
  const missing = [...keys].filter(key => !translationCatalog[locale][key]?.trim());
  console.log(`[i18n] ${locale}: ${keys.size - missing.length}/${keys.size} content keys; ${missing.length} English fallbacks`);
  if (locale === 'en' || locale === 'es') {
    for (const key of missing) failures.push(`${locale}: ${key}`);
  }
}
const rows = getTranslationRows();
const seen = new Set<string>();
for (const [key, locale, value] of rows) {
  const id = `${locale}:${key}`;
  if (seen.has(id)) failures.push(`Duplicate: ${id}`);
  seen.add(id);
  if (!key || !value.trim() || value === key || value.includes('{{i18n:')) {
    failures.push(`Invalid translation: ${id}`);
  }
}
if (failures.length) {
  console.error(failures.join('\n'));
  process.exitCode = 1;
} else {
  console.log(`[i18n] OK: ${ALL_LESSONS.length} lessons, ${rows.length} unique translations.`);
}

// Optional read-only audit of published database content. Never seeds or resets it.
if (process.argv.includes('--db')) {
  const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    connectionTimeoutMillis: 8000,
    query_timeout: 10000,
  });
  try {
    const { rows: lessons } = await pool.query<{ title_key: string; description_key: string }>(
      'SELECT title_key, description_key FROM lessons WHERE is_published = 1'
    );
    const { rows: exercises } = await pool.query<{
      prompt_key: string; explanation_key: string | null; pro_tip_key: string | null; data_json: string;
    }>('SELECT e.prompt_key, e.explanation_key, e.pro_tip_key, e.data_json FROM exercises e JOIN lessons l ON l.id = e.lesson_id WHERE l.is_published = 1');
    const dbKeys = new Set<string>();
    for (const lesson of lessons) {
      dbKeys.add(lesson.title_key).add(lesson.description_key).add(lesson.title_key.replace(/\.title$/, '.intro'));
    }
    for (const exercise of exercises) {
      dbKeys.add(exercise.prompt_key);
      if (exercise.explanation_key) dbKeys.add(exercise.explanation_key);
      if (exercise.pro_tip_key) dbKeys.add(exercise.pro_tip_key);
      collectI18nTokens(JSON.parse(exercise.data_json), dbKeys);
    }
    const { rows: stored } = await pool.query<{ key: string; locale: string; value: string }>(
      'SELECT key, locale, value FROM translations WHERE key = ANY($1::text[])', [[...dbKeys]]
    );
    const dbMap = new Map(stored.map(row => [`${row.locale}:${row.key}`, row.value]));
    for (const locale of ['en', 'es'] as const) {
      const absent = [...dbKeys].filter(key => !dbMap.get(`${locale}:${key}`)?.trim());
      const unresolved = absent.filter(key => !translationCatalog[locale][key]?.trim());
      console.log(`[i18n:db] ${locale}: ${absent.length} missing stored rows; ${unresolved.length} unresolved with catalog fallback`);
      if (unresolved.length) process.exitCode = 1;
    }
    const reportedKey = 'exercise.conditionals-all.2.prompt';
    console.log(`[i18n:db] reported key present: en=${dbMap.has(`en:${reportedKey}`)}, es=${dbMap.has(`es:${reportedKey}`)}`);
    console.log(`[i18n:db] Audited ${lessons.length} published lessons and ${exercises.length} exercises; no writes.`);
  } catch (error) {
    // Do not print connection strings or driver messages that may contain secrets.
    const code = (error as { code?: string }).code ?? 'CONNECTION_FAILED';
    console.error(`[i18n:db] Audit failed (${code}).`);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}
