// Seed script: populates lessons, exercises, and translations against
// Postgres. Run with `pnpm db:seed` (tsx src/lib/seed.ts).
// `pnpm db:reset` truncates first, then re-seeds.
//
// Bulk inserts use multi-VALUES `INSERT ... VALUES (...),(...),(...)`
// in 500-row chunks (Postgres allows ~65k params/query, so 500×9=4500
// is well within). The whole thing runs in a single transaction so a
// failure rolls back to a clean state.

import { closePool, withTx, queryDb } from './db.js';
import { ALL_LESSONS } from '../content/lessons.js';
import { getTranslationRows } from '../content/translations/catalog.js';
import { SUPPORTED_LOCALES, type Locale } from './i18n-locales.js';
import type { PoolClient } from 'pg';
import type { LessonDef } from '../content/types.js';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { invalidateContentCache } from './content-cache.js';
import { lessonReplacements } from './lesson-replacements.js';

const CHUNK_SIZE_DB = 500;

/**
 * Build a `VALUES ($1,...,$n),($n+1,...),...` fragment and a parallel
 * params array. Returns `{ valuesSql, params }`. Caller is responsible
 * for the surrounding `INSERT INTO ... (cols) VALUES ...`.
 */
function buildMultiValues(rows: ReadonlyArray<readonly unknown[]>): {
  valuesSql: string;
  params: unknown[];
} {
  const cols = rows[0]?.length ?? 0;
  if (cols === 0 || rows.length === 0) return { valuesSql: '', params: [] };
  const tuples: string[] = [];
  const params: unknown[] = [];
  rows.forEach((row, rowIdx) => {
    const placeholders: string[] = [];
    for (let c = 0; c < cols; c++) {
      placeholders.push(`$${rowIdx * cols + c + 1}`);
      params.push(row[c] ?? null);
    }
    tuples.push(`(${placeholders.join(', ')})`);
  });
  return { valuesSql: tuples.join(', '), params };
}

async function insertInChunks(
  client: PoolClient,
  sqlPrefix: string,
  rows: ReadonlyArray<readonly unknown[]>,
  sqlSuffix = ''
): Promise<void> {
  for (let i = 0; i < rows.length; i += CHUNK_SIZE_DB) {
    const slice = rows.slice(i, i + CHUNK_SIZE_DB);
    const { valuesSql, params } = buildMultiValues(slice);
    if (!valuesSql) continue;
    await queryDb(`${sqlPrefix} ${valuesSql} ${sqlSuffix}`, params, 'seed.write', client);
  }
}

/** Normal seeds preserve lesson/exercise IDs used by saved learner progress. */
export async function seedContent(client: PoolClient, options: {
  reset?: boolean;
  lessons?: readonly LessonDef[];
  translations?: ReadonlyArray<readonly [string, string, string]>;
} = {}): Promise<{ exercises: number; translations: number }> {
  const lessons = options.lessons ?? ALL_LESSONS;
  let totalExercises = 0;
  // Only the explicit reset command replaces content and resets IDs.
  if (options.reset) {
    await client.query(
      'TRUNCATE lessons, exercises, translations RESTART IDENTITY CASCADE'
    );
  }

  // 1) lessons — bulk insert in chunks
  const lessonRows: Array<readonly unknown[]> = lessons.map((l) => [
    l.slug,
    l.titleKey,
    l.descriptionKey,
    l.orderIndex,
    1,
  ]);
  await insertInChunks(
    client,
    `INSERT INTO lessons (slug, title_key, description_key, order_index, is_published) VALUES`,
    lessonRows,
    `ON CONFLICT (slug) DO UPDATE SET
     title_key = EXCLUDED.title_key, description_key = EXCLUDED.description_key,
     order_index = EXCLUDED.order_index, is_published = EXCLUDED.is_published`
  );

  // 2) exercises — look up the lesson id by slug, then bulk-insert
  const { rows: lessonRowsBack } = await client.query<{
    id: number;
    slug: string;
  }>(`SELECT id, slug FROM lessons`);
  const slugToId = new Map<string, number>(lessonRowsBack.map((r) => [r.slug, r.id]));

  const exerciseRows: Array<readonly unknown[]> = [];
  for (const lesson of lessons) {
    const lessonId = slugToId.get(lesson.slug);
    if (lessonId == null) {
      throw new Error(`Lesson slug "${lesson.slug}" not found after insert.`);
    }
    for (const ex of lesson.exercises) {
      exerciseRows.push([
        lessonId,
        ex.orderIndex,
        ex.type,
        ex.promptKey,
        JSON.stringify(ex.data),
        JSON.stringify(ex.answer),
        ex.explanationKey,
        ex.proTipKey,
        ex.points,
      ]);
      totalExercises++;
    }
  }
  await insertInChunks(
    client,
    `INSERT INTO exercises
       (lesson_id, order_index, type, prompt_key, data_json, answer_json,
        explanation_key, pro_tip_key, points)
     VALUES`,
    exerciseRows,
    `ON CONFLICT (lesson_id, prompt_key) DO UPDATE SET
     order_index = EXCLUDED.order_index, type = EXCLUDED.type,
     data_json = EXCLUDED.data_json, answer_json = EXCLUDED.answer_json,
     explanation_key = EXCLUDED.explanation_key, pro_tip_key = EXCLUDED.pro_tip_key,
     points = EXCLUDED.points`
  );

  // Retire only explicitly replaced lessons whose successors were seeded in
  // this transaction. Never delete IDs, old exercises or unrelated content.
  const seededSlugs = new Set(lessons.map(lesson => lesson.slug));
  const retiredSlugs = Object.entries(lessonReplacements)
    .filter(([, successor]) => seededSlugs.has(successor)).map(([slug]) => slug);
  if (retiredSlugs.length) {
    await queryDb('UPDATE lessons SET is_published = 0 WHERE slug = ANY($1::text[])',
      [retiredSlugs], 'seed.write', client);
  }

  // One deduplicated catalog, shared with runtime translation lookups.
  const translationRows = options.translations ?? getTranslationRows();
  await insertInChunks(client, 'INSERT INTO translations (key, locale, value) VALUES', translationRows,
    'ON CONFLICT (key, locale) DO UPDATE SET value = EXCLUDED.value');
  return { exercises: totalExercises, translations: translationRows.length };
}

async function main(): Promise<void> {
  const cmd = process.argv[2] ?? 'seed';
  if (cmd !== 'seed' && cmd !== 'reset') throw new Error('Expected seed or reset.');
  console.log(`[seed] starting (mode=${cmd})`);
  const totals = await withTx(client => seedContent(client, { reset: cmd === 'reset' }));
  invalidateContentCache();

  // Report counts. Use a fresh pool to avoid holding a connection.
  const pool = (await import('./db.js')).getPool();
  const toInt = (v: unknown): number => (typeof v === 'string' ? parseInt(v, 10) : Number(v) || 0);
  const lessonCount = toInt(
    (await pool.query<{ c: number | string }>('SELECT COUNT(*)::int AS c FROM lessons'))
      .rows[0]?.c
  );
  const exerciseCount = toInt(
    (await pool.query<{ c: number | string }>('SELECT COUNT(*)::int AS c FROM exercises'))
      .rows[0]?.c
  );
  const translationCount = toInt(
    (await pool.query<{ c: number | string }>('SELECT COUNT(*)::int AS c FROM translations'))
      .rows[0]?.c
  );
  const perLocale: Record<Locale, number> = { en: 0, es: 0, zh: 0, ko: 0, ja: 0 };
  for (const locale of SUPPORTED_LOCALES) {
    perLocale[locale] = toInt(
      (
        await pool.query<{ c: number | string }>(
          'SELECT COUNT(*)::int AS c FROM translations WHERE locale = $1',
          [locale]
        )
      ).rows[0]?.c
    );
  }

  // eslint-disable-next-line no-console
  console.log('[seed] OK');
  // eslint-disable-next-line no-console
  console.log(`  lessons     : ${lessonCount}`);
  // eslint-disable-next-line no-console
  console.log(`  exercises   : ${exerciseCount}  (synchronized ${totals.exercises})`);
  // eslint-disable-next-line no-console
  console.log(`  translations: ${translationCount}  (synchronized ${totals.translations})`);
  // eslint-disable-next-line no-console
  console.log(`  per locale  : ${JSON.stringify(perLocale)}`);

  await closePool();
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  main().catch(() => {
    console.error('[seed] FAILED: content transaction rolled back.');
    process.exitCode = 1;
  }).finally(closePool);
}
