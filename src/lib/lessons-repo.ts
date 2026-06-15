// Lesson + exercise queries against Postgres. data_json / answer_json
// are parsed and surfaced as Exercise.data / Exercise.answer (see
// src/types.ts). All public functions are async and batch their
// translation lookups through tMany — no N+1 round-trips.

import { ensureSchema, getPool } from './db.js';
import { resolveI18n, tFromMap, tMany } from './translate.js';
import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from './i18n-locales.js';
import type {
  Exercise,
  ExerciseAnswer,
  ExerciseData,
  ExerciseType,
  Lesson,
} from '../types.js';

interface LessonRow {
  id: number;
  slug: string;
  title_key: string;
  description_key: string;
  order_index: number;
  is_published: number;
  created_at: string;
}

interface ExerciseRow {
  id: number;
  lesson_id: number;
  order_index: number;
  type: ExerciseType;
  prompt_key: string;
  data_json: string;
  answer_json: string;
  explanation_key: string | null;
  pro_tip_key: string | null;
  points: number;
}

function rowToLesson(row: LessonRow): Lesson {
  return {
    id: row.id,
    slug: row.slug,
    titleKey: row.title_key,
    descriptionKey: row.description_key,
    orderIndex: row.order_index,
    isPublished: row.is_published === 1,
    createdAt: row.created_at,
  };
}

/**
 * Walk a JSON-serializable value and collect every `{{i18n:KEY}}` token
 * into the given Set. Used to build the full key list before issuing a
 * single batched tMany.
 */
function collectI18nTokens(value: unknown, out: Set<string>): void {
  if (typeof value === 'string') {
    for (const m of value.matchAll(I18N_TOKEN)) out.add(m[1]!);
    return;
  }
  if (Array.isArray(value)) {
    for (const v of value) collectI18nTokens(v, out);
    return;
  }
  if (value !== null && typeof value === 'object') {
    for (const v of Object.values(value as Record<string, unknown>)) {
      collectI18nTokens(v, out);
    }
  }
}

const I18N_TOKEN = /\{\{i18n:([a-zA-Z0-9_.\-]+)\}\}/g;

function rowToExercise(
  row: ExerciseRow,
  _locale: Locale,
  map: Map<string, string>
): Exercise {
  const data = JSON.parse(row.data_json) as ExerciseData;
  const answer = JSON.parse(row.answer_json) as ExerciseAnswer;
  return {
    id: row.id,
    lessonId: row.lesson_id,
    orderIndex: row.order_index,
    type: row.type,
    promptKey: row.prompt_key,
    data: resolveI18n(data, _locale, map),
    answer,
    explanationKey: row.explanation_key,
    proTipKey: row.pro_tip_key,
    points: row.points,
  };
}

export interface LessonListItem {
  id: number;
  slug: string;
  title: string;
  description: string;
  count: number;
}

/**
 * All published lessons, ordered for display. One round-trip for the
 * lesson list + one batched round-trip for all the title/description
 * translations.
 */
export async function listLessons(locale: string): Promise<LessonListItem[]> {
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  await ensureSchema();
  const pool = getPool();

  const { rows } = await pool.query<LessonRow & { count: number }>(
    `SELECT l.*, COALESCE((SELECT COUNT(*) FROM exercises e WHERE e.lesson_id = l.id), 0)::int AS count
       FROM lessons l
       WHERE l.is_published = 1
       ORDER BY l.order_index ASC, l.id ASC`
  );

  const keys = rows.flatMap((r) => [r.title_key, r.description_key]);
  const tmap = await tMany(keys, safeLocale);
  const t = tFromMap(tmap);

  return rows.map((row) => {
    const lesson = rowToLesson(row);
    return {
      id: lesson.id,
      slug: lesson.slug,
      title: t(lesson.titleKey),
      description: t(lesson.descriptionKey),
      count: row.count,
    };
  });
}

export interface LessonWithExercises extends Lesson {
  title: string;
  description: string;
  intro: string;
  exercises: Exercise[];
}

/**
 * A single lesson with its exercises, or null if not found / not
 * published. One lesson query + one exercises query + one batched
 * tMany covering every translation key the page will need (lesson
 * title/description/intro + per-exercise prompt/explanation/pro_tip +
 * any {{i18n:...}} tokens found in the exercise data).
 */
export async function getLessonBySlug(
  slug: string,
  locale: string
): Promise<LessonWithExercises | null> {
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  await ensureSchema();
  const pool = getPool();

  const { rows: lessonRows } = await pool.query<LessonRow>(
    `SELECT * FROM lessons WHERE slug = $1 AND is_published = 1`,
    [slug]
  );
  const row = lessonRows[0];
  if (!row) return null;
  const lesson = rowToLesson(row);

  const { rows: exerciseRows } = await pool.query<ExerciseRow>(
    `SELECT * FROM exercises WHERE lesson_id = $1 ORDER BY order_index ASC, id ASC`,
    [lesson.id]
  );

  // Build the full key set: lesson-level + per-exercise + tokens in data.
  const keys = new Set<string>([
    lesson.titleKey,
    lesson.descriptionKey,
    lesson.titleKey.replace(/\.title$/, '.intro'),
  ]);
  for (const er of exerciseRows) {
    if (er.prompt_key) keys.add(er.prompt_key);
    if (er.explanation_key) keys.add(er.explanation_key);
    if (er.pro_tip_key) keys.add(er.pro_tip_key);
    try {
      collectI18nTokens(JSON.parse(er.data_json), keys);
    } catch {
      // ignore malformed JSON — the validator script catches these
    }
  }

  const tmap = await tMany([...keys], safeLocale);
  const t = tFromMap(tmap);

  return {
    ...lesson,
    title: t(lesson.titleKey),
    description: t(lesson.descriptionKey),
    intro: t(lesson.titleKey.replace(/\.title$/, '.intro')),
    exercises: exerciseRows.map((er) => rowToExercise(er, safeLocale, tmap)),
  };
}
