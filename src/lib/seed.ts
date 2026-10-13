// Seed script: populates lessons, exercises, and translations against
// Postgres. Run with `pnpm db:seed` (tsx src/lib/seed.ts).
// `pnpm db:reset` truncates first, then re-seeds.
//
// Bulk inserts use multi-VALUES `INSERT ... VALUES (...),(...),(...)`
// in 500-row chunks (Postgres allows ~65k params/query, so 500×9=4500
// is well within). The whole thing runs in a single transaction so a
// failure rolls back to a clean state.

import { closePool, withTx } from './db.js';
import { ALL_LESSONS } from '../content/lessons.js';
import { getTranslationRows } from '../content/translations/catalog.js';
import { SUPPORTED_LOCALES, type Locale } from './i18n-locales.js';
import type { PoolClient } from 'pg';

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
  rows: ReadonlyArray<readonly unknown[]>
): Promise<void> {
  for (let i = 0; i < rows.length; i += CHUNK_SIZE_DB) {
    const slice = rows.slice(i, i + CHUNK_SIZE_DB);
    const { valuesSql, params } = buildMultiValues(slice);
    if (!valuesSql) continue;
    await client.query(`${sqlPrefix} ${valuesSql}`, params);
  }
}

async function main(): Promise<void> {
  const cmd = process.argv[2] ?? 'seed';
  const isReset = cmd === 'reset';

  // eslint-disable-next-line no-console
  console.log(`[seed] starting (mode=${cmd}) — clearing tables…`);

  let totalExercises = 0;
  let totalTranslations = 0;

  await withTx(async (client) => {
    // Wipe in FK-safe order. We use DELETE (not TRUNCATE) inside the
    // transaction so the seed can read back the inserted lesson IDs
    // immediately and is_published=1 stays the default. For `reset`
    // we additionally TRUNCATE ... RESTART IDENTITY to reset the
    // SERIAL counters and free the disk space more aggressively.
    if (isReset) {
      await client.query(
        'TRUNCATE lessons, exercises, translations RESTART IDENTITY CASCADE'
      );
    } else {
      await client.query('DELETE FROM exercises');
      await client.query('DELETE FROM lessons');
      await client.query('DELETE FROM translations');
    }

    // 1) lessons — bulk insert in chunks
    const lessonRows: Array<readonly unknown[]> = ALL_LESSONS.map((l) => [
      l.slug,
      l.titleKey,
      l.descriptionKey,
      l.orderIndex,
      1,
    ]);
    await insertInChunks(
      client,
      `INSERT INTO lessons (slug, title_key, description_key, order_index, is_published) VALUES`,
      lessonRows
    );

    // 2) exercises — look up the lesson id by slug, then bulk-insert
    const { rows: lessonRowsBack } = await client.query<{
      id: number;
      slug: string;
    }>(`SELECT id, slug FROM lessons`);
    const slugToId = new Map<string, number>(lessonRowsBack.map((r) => [r.slug, r.id]));

    const exerciseRows: Array<readonly unknown[]> = [];
    for (const lesson of ALL_LESSONS) {
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
      exerciseRows
    );

    // One deduplicated catalog, shared with runtime translation lookups.
    const translationRows = getTranslationRows();
    totalTranslations = translationRows.length;
    await insertInChunks(client, 'INSERT INTO translations (key, locale, value) VALUES', translationRows);
  });

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
  console.log(`  exercises   : ${exerciseCount}  (inserted ${totalExercises})`);
  // eslint-disable-next-line no-console
  console.log(`  translations: ${translationCount}  (inserted ${totalTranslations})`);
  // eslint-disable-next-line no-console
  console.log(`  per locale  : ${JSON.stringify(perLocale)}`);

  await closePool();
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('[seed] FAILED:', (err as Error).message);
  process.exit(1);
});
