// Shared types for the English learning platform.
// See docs/design.md §3 for the per-type data/answer contracts.

export type ExerciseType =
  | 'fill_blank'
  | 'multiple_choice'
  | 'drag_drop'
  | 'true_false'
  | 'matching'
  | 'sentence_reorder';

export interface Lesson {
  id: number;
  slug: string;
  titleKey: string;
  descriptionKey: string;
  orderIndex: number;
  isPublished: boolean;
  createdAt: string;
}

/**
 * Exercise as exposed by the API: data_json and answer_json are already
 * parsed into their respective shapes (see design.md §3.1–§3.6).
 */
export interface Exercise {
  id: number;
  lessonId: number;
  orderIndex: number;
  type: ExerciseType;
  promptKey: string;
  data: ExerciseData;
  answer: ExerciseAnswer;
  explanationKey: string | null;
  proTipKey: string | null;
  points: number;
}

export type ExerciseData =
  | FillBlankData
  | MultipleChoiceData
  | DragDropData
  | TrueFalseData
  | MatchingData
  | SentenceReorderData;

export type ExerciseAnswer =
  | FillBlankAnswer
  | MultipleChoiceAnswer
  | DragDropAnswer
  | TrueFalseAnswer
  | MatchingAnswer
  | SentenceReorderAnswer;

// §3.1
export interface FillBlankData {
  sentence: string;
  options?: string[];
}
export interface FillBlankAnswer {
  correct: string;
  caseSensitive?: boolean;
}

// §3.2
export interface MultipleChoiceData {
  choices: string[];
}
export interface MultipleChoiceAnswer {
  correctIndex: number;
  correctIndices?: number[];
}

// §3.3
export interface DragDropData {
  tokens: string[];
  slots?: string[];
}
export interface DragDropAnswer {
  correctOrder: number[];
}

// §3.4
export interface TrueFalseData {
  statement: string;
}
export interface TrueFalseAnswer {
  correct: boolean;
}

// §3.5
export interface MatchingData {
  left: string[];
  right: string[];
}
export interface MatchingAnswer {
  pairs: { leftIndex: number; rightIndex: number }[];
}

// §3.6
export interface SentenceReorderData {
  tokens: string[];
}
export interface SentenceReorderAnswer {
  correctOrder: number[];
}

export interface Translation {
  id: number;
  key: string;
  locale: string;
  value: string;
}
