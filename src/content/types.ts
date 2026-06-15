// Types for content-source lesson definitions. The seed script converts
// these into rows in the lessons / exercises / translations tables.

import type {
  Exercise,
  ExerciseData,
  ExerciseAnswer,
  ExerciseType,
} from '../types.js';

/**
 * Content source view of an exercise. The fields that the runtime stores
 * as i18n keys (promptKey / explanationKey / proTipKey) live on Exercise
 * directly — we just re-export the type and add a subTopic tag for the
 * lessons that group exercises by sub-topic.
 */
export type ExerciseDef = Exercise & {
  /** Optional sub-topic tag (e.g. "regular_verbs" for lesson 5). */
  subTopic?: string;
};

export interface LessonDef {
  slug: string;
  orderIndex: number;
  titleKey: string;
  descriptionKey: string;
  introKey: string;
  exercises: ExerciseDef[];
}

/** Convenience constructor that pins `lessonId`/`points` defaults. */
export function makeExercise(
  type: ExerciseType,
  orderIndex: number,
  promptKey: string,
  data: ExerciseData,
  answer: ExerciseAnswer,
  explanationKey: string,
  proTipKey: string,
  subTopic?: string
): ExerciseDef {
  return {
    id: 0, // assigned by the DB on insert
    lessonId: 0, // assigned by the DB on insert
    orderIndex,
    type,
    promptKey,
    data,
    answer,
    explanationKey,
    proTipKey,
    points: 1,
    subTopic,
  };
}
