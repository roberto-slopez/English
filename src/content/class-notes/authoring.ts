import { makeExercise, type ExerciseDef, type LessonDef } from '../types.js';
import type { ExerciseData, ExerciseAnswer, ExerciseType } from '../../types.js';

export type Bilingual = readonly [en: string, es: string];
export type AuthoredTranslations = Record<'en' | 'es', Record<string, string>>;
export const classTranslations: AuthoredTranslations = { en: {}, es: {} };

export function text(key: string, values: Bilingual): void {
  classTranslations.en[key] = values[0];
  classTranslations.es[key] = values[1];
}

export function question(slug: string, number: number, type: ExerciseType,
  data: ExerciseData, answer: ExerciseAnswer, prompt: Bilingual,
  explanation: Bilingual, tip?: Bilingual, id = String(number)): ExerciseDef {
  const key = `exercise.${slug}.${id}`;
  text(`${key}.prompt`, prompt);
  text(`${key}.explanation`, explanation);
  if (tip) text(`${key}.pro_tip`, tip);
  const exercise = makeExercise(type, number, `${key}.prompt`, data, answer,
    `${key}.explanation`, `${key}.pro_tip`);
  if (!tip) exercise.proTipKey = null;
  return exercise;
}

export function metadata(slug: string, title: Bilingual, description: Bilingual, intro: Bilingual): void {
  text(`lesson.${slug}.title`, title);
  text(`lesson.${slug}.description`, description);
  text(`lesson.${slug}.intro`, intro);
}

export function defineLesson(slug: string, orderIndex: number, title: Bilingual,
  description: Bilingual, intro: Bilingual, exercises: ExerciseDef[]): LessonDef {
  metadata(slug, title, description, intro);
  return { slug, orderIndex, titleKey: `lesson.${slug}.title`,
    descriptionKey: `lesson.${slug}.description`, introKey: `lesson.${slug}.intro`, exercises };
}

/** Numbered authoring helpers; existing lessons pass their next unused number. */
export function practice(slug: string, start = 1) {
  let number = start;
  return {
    fill(sentence: string, correct: string, options: string[], explanation: Bilingual,
      prompt: Bilingual = ['Complete the sentence.', 'Completa la oración.']) {
      return question(slug, number++, 'fill_blank', { sentence, options }, { correct }, prompt, explanation);
    },
    choose(prompt: Bilingual, choices: string[], correct: number | number[], explanation: Bilingual) {
      return question(slug, number++, 'multiple_choice', { choices },
        Array.isArray(correct) ? { correctIndex: correct[0]!, correctIndices: correct } : { correctIndex: correct }, prompt, explanation);
    },
    truth(statement: string, correct: boolean, explanation: Bilingual) {
      return question(slug, number++, 'true_false', { statement }, { correct },
        ['True or false?', '¿Verdadero o falso?'], explanation);
    },
    order(tokens: string[], explanation: Bilingual) {
      return question(slug, number++, 'sentence_reorder', { tokens }, { correctOrder: tokens.map((_, i) => i) },
        ['Put all the words in order. Keep the punctuation attached to its word.', 'Ordena todas las palabras. Conserva la puntuación unida a su palabra.'], explanation);
    },
    match(left: string[], right: string[], explanation: Bilingual) {
      return question(slug, number++, 'matching', { left, right }, { pairs: left.map((_, i) => ({ leftIndex: i, rightIndex: i })) },
        ['Match each expression with its meaning or continuation.', 'Relaciona cada expresión con su significado o continuación.'], explanation);
    },
  };
}
