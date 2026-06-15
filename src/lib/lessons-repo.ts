// Lesson + exercise queries. data_json / answer_json are parsed and
// surfaced as Exercise.data / Exercise.answer (see src/types.ts).

import { getDb } from './db.js';
import { resolveI18n } from './translate.js';
import { isSupportedLocale, DEFAULT_LOCALE, type Locale } from './i18n-locales.js';
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

function rowToExercise(row: ExerciseRow, locale: Locale): Exercise {
  const data = JSON.parse(row.data_json) as ExerciseData;
  const answer = JSON.parse(row.answer_json) as ExerciseAnswer;
  return {
    id: row.id,
    lessonId: row.lesson_id,
    orderIndex: row.order_index,
    type: row.type,
    promptKey: row.prompt_key,
    data: resolveI18n(data, locale),
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

/** All published lessons, ordered for display. */
export function listLessons(locale: string): LessonListItem[] {
  const db = getDb();
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  const rows = db
    .prepare<[], LessonRow & { count: number }>(
      `SELECT l.*, COALESCE((SELECT COUNT(*) FROM exercises e WHERE e.lesson_id = l.id), 0) AS count
         FROM lessons l
         WHERE l.is_published = 1
         ORDER BY l.order_index ASC, l.id ASC`
    )
    .all();

  return rows.map((row) => {
    const lesson = rowToLesson(row);
    return {
      id: lesson.id,
      slug: lesson.slug,
      title: db
        .prepare<[string, string], { value: string }>(
          'SELECT value FROM translations WHERE key = ? AND locale = ?'
        )
        .get(lesson.titleKey, safeLocale)?.value ?? lesson.titleKey,
      description:
        db
          .prepare<[string, string], { value: string }>(
            'SELECT value FROM translations WHERE key = ? AND locale = ?'
          )
          .get(lesson.descriptionKey, safeLocale)?.value ?? lesson.descriptionKey,
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

/** A single lesson with its exercises, or null if not found / not published. */
export function getLessonBySlug(slug: string, locale: string): LessonWithExercises | null {
  const db = getDb();
  const safeLocale: Locale = isSupportedLocale(locale) ? locale : DEFAULT_LOCALE;

  const row = db
    .prepare<[string], LessonRow>(
      `SELECT * FROM lessons WHERE slug = ? AND is_published = 1`
    )
    .get(slug);

  if (!row) return null;

  const lesson = rowToLesson(row);

  const exerciseRows = db
    .prepare<[number], ExerciseRow>(
      `SELECT * FROM exercises WHERE lesson_id = ? ORDER BY order_index ASC, id ASC`
    )
    .all(lesson.id);

  const introRow = db
    .prepare<[string, string], { value: string }>(
      'SELECT value FROM translations WHERE key = ? AND locale = ?'
    )
    .get(lesson.titleKey.replace(/\.title$/, '.intro'), safeLocale);
  const intro = introRow?.value ?? '';

  return {
    ...lesson,
    title:
      db
        .prepare<[string, string], { value: string }>(
          'SELECT value FROM translations WHERE key = ? AND locale = ?'
        )
        .get(lesson.titleKey, safeLocale)?.value ?? lesson.titleKey,
    description:
      db
        .prepare<[string, string], { value: string }>(
          'SELECT value FROM translations WHERE key = ? AND locale = ?'
        )
        .get(lesson.descriptionKey, safeLocale)?.value ?? lesson.descriptionKey,
    intro,
    exercises: exerciseRows.map((er) => rowToExercise(er, safeLocale)),
  };
}
