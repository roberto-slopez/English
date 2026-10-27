import { createHash } from 'node:crypto';
import { ALL_LESSONS } from '../src/content/lessons.js';
import { translationCatalog, getTranslationRows } from '../src/content/translations/catalog.js';
import zhLocalized from '../src/content/translations/localized/zh.json';
import koLocalized from '../src/content/translations/localized/ko.json';
import jaLocalized from '../src/content/translations/localized/ja.json';
import { SUPPORTED_LOCALES } from '../src/lib/i18n-locales.js';
import { collectI18nTokens } from '../src/lib/i18n-tokens.js';
import { Pool } from 'pg';

const keys = new Set(
  Object.keys(translationCatalog.en).filter(key => key.startsWith('ui.') || key.startsWith('vocabulary.srs.'))
);
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
  for (const key of missing) failures.push(`${locale}: ${key}`);
}

const expectedCatalogHash = createHash('sha256')
  .update(JSON.stringify(Object.entries(translationCatalog.es)))
  .digest('hex');
const targetScriptRe = {
  zh: /[\u4e00-\u9fff]/,
  ko: /[\uac00-\ud7af]/,
  ja: /[\u3040-\u30ff\u4e00-\u9fff]/,
} as const;
for (const [locale, localized] of [['zh', zhLocalized], ['ko', koLocalized], ['ja', jaLocalized]] as const) {
  if (localized.metadata.sourceLocale !== 'es' || localized.metadata.targetLocale !== locale) {
    failures.push(`Invalid localization metadata for ${locale}`);
  }
  if (localized.metadata.catalogSourceHash !== expectedCatalogHash) {
    failures.push(`Outdated catalogSourceHash in localized/${locale}.json`);
  }
  for (const [key, esVal] of Object.entries(translationCatalog.es)) {
    const val = translationCatalog[locale][key] ?? '';
    const enVal = translationCatalog.en[key] ?? '';
    if (esVal !== enVal && !targetScriptRe[locale].test(val)) {
      failures.push(`Missing target script in ${locale}:${key}`);
    }
  }
}

const rows = getTranslationRows();
const seen = new Set<string>();
for (const [key, locale, value] of rows) {
  const id = `${locale}:${key}`;
  if (seen.has(id)) failures.push(`Duplicate: ${id}`);
  seen.add(id);
  if (!key || !value.trim() || value === key || value.includes('{{i18n:') || /ZXQ\s*\d+\s*QXZ/i.test(value)) {
    failures.push(`Invalid translation: ${id}`);
  }
  if (key.endsWith('.explanation') && /\b(?:option|opción|opcion)\s+[A-D]\b/i.test(value)) {
    failures.push(`Shuffled choices must be explained by content, not a fixed letter: ${id}`);
  }
}
for (const lesson of ALL_LESSONS) {
  for (const exercise of lesson.exercises) {
    const promptEn = translationCatalog.en[exercise.promptKey] ?? '';
    const promptEs = translationCatalog.es[exercise.promptKey] ?? '';
    const expEn = exercise.explanationKey ? (translationCatalog.en[exercise.explanationKey] ?? '') : '';
    const expEs = exercise.explanationKey ? (translationCatalog.es[exercise.explanationKey] ?? '') : '';
    if (exercise.type === 'true_false') {
      const correct = (exercise.answer as { correct: boolean }).correct;
      if (correct && (/^\s*False\b/i.test(expEn) || /^\s*Falso\b/i.test(expEs))) {
        failures.push(`True/False explanation contradicts answer=true: ${lesson.slug}#${exercise.orderIndex}`);
      }
      if (!correct && (/^\s*True\b/i.test(expEn) || /^\s*Verdadero\b/i.test(expEs))) {
        failures.push(`True/False explanation contradicts answer=false: ${lesson.slug}#${exercise.orderIndex}`);
      }
    } else {
      if (/true or false/i.test(promptEn) || /verdadero o falso/i.test(promptEs)) {
        failures.push(`Non-true_false exercise has True/False prompt: ${lesson.slug}#${exercise.orderIndex}`);
      }
      if (/^\s*(?:True|False)\./.test(expEn) || /^\s*(?:Verdadero|Falso)\./.test(expEs)) {
        failures.push(`Non-true_false exercise has True/False explanation prefix: ${lesson.slug}#${exercise.orderIndex}`);
      }
    }
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
    for (const locale of SUPPORTED_LOCALES) {
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
