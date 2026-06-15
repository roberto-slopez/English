// Shared answer-validation logic for the 6 exercise types.
// See docs/design.md §3 for the data/answer contracts.
//
// All comparisons:
//   - trim() and collapse internal whitespace
//   - case-insensitive (unless the answer says caseSensitive: true)
//   - for arrays: deep equality (order matters)

import type {
  Exercise,
  ExerciseAnswer,
  ExerciseType,
} from '../types.js';

/** Normalize a string: trim, collapse whitespace, lowercase by default. */
export function normalizeString(
  raw: string,
  options: { caseSensitive?: boolean } = {}
): string {
  const collapsed = raw.replace(/\s+/g, ' ').trim();
  return options.caseSensitive ? collapsed : collapsed.toLowerCase();
}

/** Compare two scalar strings with the design's normalization rules. */
export function isStringCorrect(
  got: string,
  expected: string,
  options: { caseSensitive?: boolean } = {}
): boolean {
  return normalizeString(got, options) === normalizeString(expected, options);
}

/** Compare two arrays of strings element-wise (order matters). */
export function isStringArrayCorrect(got: string[], expected: string[]): boolean {
  if (got.length !== expected.length) return false;
  for (let i = 0; i < expected.length; i++) {
    if (!isStringCorrect(got[i] ?? '', expected[i] ?? '')) return false;
  }
  return true;
}

/** Compare two index-arrays of equal length. */
export function isIndexArrayCorrect(got: number[], expected: number[]): boolean {
  if (got.length !== expected.length) return false;
  for (let i = 0; i < expected.length; i++) {
    if (got[i] !== expected[i]) return false;
  }
  return true;
}

/** Compare a multi-select answer (set equality, order independent). */
export function isIndexSetCorrect(got: number[], expected: number[]): boolean {
  if (got.length !== expected.length) return false;
  const sortedGot = [...got].sort((a, b) => a - b);
  const sortedExp = [...expected].sort((a, b) => a - b);
  return sortedGot.every((v, i) => v === sortedExp[i]);
}

/** Per-type validators. Each returns true if the answer is correct. */
export type AnswerInput = unknown;

export function validateAnswer(
  exercise: Exercise,
  userAnswer: AnswerInput
): boolean {
  switch (exercise.type as ExerciseType) {
    case 'fill_blank':
      return isStringCorrect(
        String(userAnswer ?? ''),
        (exercise.answer as { correct: string; caseSensitive?: boolean }).correct,
        { caseSensitive: (exercise.answer as { caseSensitive?: boolean }).caseSensitive }
      );

    case 'multiple_choice': {
      const a = exercise.answer as { correctIndex: number; correctIndices?: number[] };
      if (a.correctIndices && Array.isArray(a.correctIndices)) {
        const got = Array.isArray(userAnswer) ? (userAnswer as number[]) : [];
        return isIndexSetCorrect(got, a.correctIndices);
      }
      return Number(userAnswer) === a.correctIndex;
    }

    case 'drag_drop':
    case 'sentence_reorder': {
      const a = exercise.answer as { correctOrder: number[] };
      const got = Array.isArray(userAnswer) ? (userAnswer as number[]) : [];
      return isIndexArrayCorrect(got, a.correctOrder);
    }

    case 'true_false': {
      const a = exercise.answer as { correct: boolean };
      // Accept boolean or the literal strings "true"/"false".
      const v =
        typeof userAnswer === 'boolean'
          ? userAnswer
          : String(userAnswer).toLowerCase() === 'true';
      return v === a.correct;
    }

    case 'matching': {
      const a = exercise.answer as {
        pairs: { leftIndex: number; rightIndex: number }[];
      };
      const got = Array.isArray(userAnswer)
        ? (userAnswer as { leftIndex: number; rightIndex: number }[])
        : [];
      if (got.length !== a.pairs.length) return false;
      const expectedMap = new Map(
        a.pairs.map((p) => [p.leftIndex, p.rightIndex])
      );
      return got.every((p) => expectedMap.get(p.leftIndex) === p.rightIndex);
    }

    default: {
      // Exhaustiveness check.
      const _exhaustive: never = exercise.type as never;
      void _exhaustive;
      return false;
    }
  }
}

/** For error feedback: turn an answer JSON into a human-readable hint. */
export function describeAnswer(answer: ExerciseAnswer, type: ExerciseType): string {
  switch (type) {
    case 'fill_blank':
      return (answer as { correct: string }).correct;
    case 'multiple_choice': {
      const a = answer as { correctIndex: number; correctIndices?: number[] };
      return a.correctIndices
        ? `Options ${(a.correctIndices.map((i) => i + 1)).join(', ')}`
        : `Option ${a.correctIndex + 1}`;
    }
    case 'drag_drop':
    case 'sentence_reorder':
      return (answer as { correctOrder: number[] })
        .correctOrder.map((i) => `#${i + 1}`)
        .join(' → ');
    case 'true_false':
      return (answer as { correct: boolean }) ? 'True' : 'False';
    case 'matching': {
      const pairs = (answer as { pairs: { leftIndex: number; rightIndex: number }[] })
        .pairs;
      return pairs.map((p) => `${p.leftIndex + 1}↔${p.rightIndex + 1}`).join(', ');
    }
    default:
      return '';
  }
}
