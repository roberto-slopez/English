// Lesson + exercise queries against Postgres. data_json / answer_json
// are parsed and surfaced as Exercise.data / Exercise.answer (see
// src/types.ts). All public functions are async and batch their
// translation lookups through tMany — no N+1 round-trips.

import { ensureSchema, queryDb } from './db.js';
import { resolveI18n, tFromMap, tMany } from './translate.js';
import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from './i18n-locales.js';
import { collectI18nTokens } from './i18n-tokens.js';
import { contentCache } from './content-cache.js';
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

function rowToExercise(
  row: ExerciseRow,
  data: ExerciseData,
  answer: ExerciseAnswer,
  _locale: Locale,
  map: Map<string, string>
): Exercise {
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

export interface LessonListOptions { category?: 'all' | 'grammar' | 'vocabulary'; }

/**
 * All published lessons, ordered for display. One round-trip for the
 * lesson list + one batched round-trip for all the title/description
 * translations.
 */
export async function listLessons(locale: string, options: LessonListOptions = {}): Promise<LessonListItem[]> {
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  const category = options.category === 'grammar' || options.category === 'vocabulary' ? options.category : 'all';
  return contentCache.getOrLoad(`list:${safeLocale}:${category}`, () => loadLessonList(safeLocale, category));
}

async function loadLessonList(safeLocale: Locale, category: NonNullable<LessonListOptions['category']>): Promise<LessonListItem[]> {
  await ensureSchema();

  const filter = category === 'vocabulary' ? 'AND l.slug LIKE $1' :
    category === 'grammar' ? 'AND l.slug NOT LIKE $1' : '';
  const { rows } = await queryDb<LessonRow & { count: number }>(
    `SELECT l.*, COUNT(e.id)::int AS count
       FROM lessons l
       LEFT JOIN exercises e ON e.lesson_id = l.id
       WHERE l.is_published = 1 ${filter}
       GROUP BY l.id
       ORDER BY l.order_index ASC, l.id ASC`,
    category === 'all' ? [] : ['vocab-chunk-%'], 'lesson.list'
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
  translations: Record<string, string>;
}

/** Fetch one adjacent chunk, instead of translating/counting the complete library. */
export async function getNextVocabularyLesson(slug: string, locale: string): Promise<LessonListItem | null> {
  if (!/^vocab-chunk-\d+$/.test(slug)) return null;
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;
  return contentCache.getOrLoad(`next:${safeLocale}:${slug}`, async () => {
    await ensureSchema();
    const { rows } = await queryDb<LessonRow & { count: number }>(
      `SELECT l.*, (SELECT COUNT(*)::int FROM exercises e WHERE e.lesson_id = l.id) AS count
       FROM lessons l JOIN lessons current ON current.slug = $1
       WHERE l.is_published = 1 AND current.is_published = 1
         AND l.slug LIKE 'vocab-chunk-%'
         AND (l.order_index, l.id) > (current.order_index, current.id)
       ORDER BY l.order_index ASC, l.id ASC LIMIT 1`, [slug], 'vocabulary.next');
    const row = rows[0];
    if (!row) return null;
    const map = await tMany([row.title_key, row.description_key], safeLocale);
    const t = tFromMap(map);
    return { id: row.id, slug: row.slug, title: t(row.title_key), description: t(row.description_key), count: row.count };
  });
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
  return contentCache.getOrLoad(`lesson:${safeLocale}:${slug}`, () => loadLessonBySlug(slug, safeLocale));
}

async function loadLessonBySlug(slug: string, safeLocale: Locale): Promise<LessonWithExercises | null> {
  await ensureSchema();

  const { rows: lessonRows } = await queryDb<LessonRow>(
    `SELECT * FROM lessons WHERE slug = $1 AND is_published = 1`,
    [slug], 'lesson.detail'
  );
  const row = lessonRows[0];
  if (!row) return null;
  const lesson = rowToLesson(row);

  const { rows: exerciseRows } = await queryDb<ExerciseRow>(
    `SELECT * FROM exercises WHERE lesson_id = $1 ORDER BY order_index ASC, id ASC`,
    [lesson.id], 'exercise.list'
  );
  const parsedExercises = exerciseRows.map(row => ({ row,
    data: JSON.parse(row.data_json) as ExerciseData,
    answer: JSON.parse(row.answer_json) as ExerciseAnswer,
  }));

  // Build the full key set: lesson-level + per-exercise + tokens in data.
  const keys = new Set<string>([
    lesson.titleKey,
    lesson.descriptionKey,
    lesson.titleKey.replace(/\.title$/, '.intro'),
  ]);
  for (const { row: er, data } of parsedExercises) {
    if (er.prompt_key) keys.add(er.prompt_key);
    if (er.explanation_key) keys.add(er.explanation_key);
    if (er.pro_tip_key) keys.add(er.pro_tip_key);
    collectI18nTokens(data, keys);
  }

  const tmap = await tMany([...keys], safeLocale);
  const t = tFromMap(tmap);

  return {
    ...lesson,
    title: t(lesson.titleKey),
    description: t(lesson.descriptionKey),
    intro: t(lesson.titleKey.replace(/\.title$/, '.intro')),
    translations: Object.fromEntries(tmap),
    exercises: parsedExercises.map(({ row, data, answer }) => rowToExercise(row, data, answer, safeLocale, tmap)),
  };
}
