// Points awarded for correct answers.
//
// Storage layout (all in localStorage):
//   english.points.<slug>            → { total, perExercise: Record<id, number>, best: number }
//   english.points.total             → number (cross-lesson grand total, capped at Number.MAX_SAFE_INTEGER)
//
// Rules:
//   - Base award is 10 per correct answer (or `exercise.points` if the
//     exercise row specifies a custom value, falling back to 10).
//   - First-try bonus: when the learner gets it right on the very first
//     attempt, they earn +5.
//   - Streak bonus: every consecutive correct answer adds +2 (capped at
//     +20 so a long streak doesn't break the economy).
//   - We store the streak count per-lesson in localStorage so a refresh
//     mid-lesson keeps the streak.

const POINTS_KEY = (slug: string) => `english.points.${slug}`;
const TOTAL_KEY = 'english.points.total';

export const BASE_POINTS = 10;
export const FIRST_TRY_BONUS = 5;
export const STREAK_BONUS = 2;
export const STREAK_CAP = 20;

export interface PerExercisePoints {
  total: number;
  perExercise: Record<number, number>;
  best: number; // highest per-exercise award seen (so we can show "best" in UI)
}

export interface PointsAward {
  /** Final points credited for this single answer. */
  awarded: number;
  /** Breakdown so the UI can show "10 + 5 + 2 = 17". */
  breakdown: { base: number; firstTry: number; streak: number };
  /** Running lesson total after this award. */
  lessonTotal: number;
  /** Running streak count after this award. */
  streak: number;
  /** Running grand total across all lessons. */
  grandTotal: number;
}

function readPerLesson(slug: string): PerExercisePoints {
  if (typeof window === 'undefined') {
    return { total: 0, perExercise: {}, best: 0 };
  }
  try {
    const raw = localStorage.getItem(POINTS_KEY(slug));
    if (!raw) return { total: 0, perExercise: {}, best: 0 };
    const parsed = JSON.parse(raw) as Partial<PerExercisePoints>;
    return {
      total: parsed.total ?? 0,
      perExercise: parsed.perExercise ?? {},
      best: parsed.best ?? 0,
    };
  } catch {
    return { total: 0, perExercise: {}, best: 0 };
  }
}

function writePerLesson(slug: string, value: PerExercisePoints) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(POINTS_KEY(slug), JSON.stringify(value));
  } catch {
    /* quota — ignore */
  }
}

function readGrandTotal(): number {
  if (typeof window === 'undefined') return 0;
  try {
    const raw = localStorage.getItem(TOTAL_KEY);
    return raw ? Number.parseInt(raw, 10) || 0 : 0;
  } catch {
    return 0;
  }
}

function writeGrandTotal(value: number) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(TOTAL_KEY, String(Math.max(0, value | 0)));
  } catch {
    /* quota — ignore */
  }
}

/** Returns the current streak (consecutive correct answers in this lesson). */
export function getStreak(slug: string): number {
  return readPerLesson(slug).best > 0 ? readPerLesson(slug).best : 0;
}

/** Read-only snapshot for components that just want to display scores. */
export function getLessonPoints(slug: string): PerExercisePoints {
  return readPerLesson(slug);
}

export function getGrandTotal(): number {
  return readGrandTotal();
}

/**
 * Credit points for one correct answer. Returns the breakdown so the UI
 * can show "+10 base · +5 first try · +2 streak" without re-deriving it.
 */
export function awardPoints(args: {
  slug: string;
  exerciseId: number;
  /** Custom points declared on the exercise row, or 0 to use the base. */
  exercisePoints?: number;
  /** How many times the learner has tried this exercise (1 = first try). */
  attempts: number;
  /** Current streak BEFORE this award (the new value is streak + 1). */
  previousStreak: number;
}): PointsAward {
  const base = args.exercisePoints && args.exercisePoints > 0 ? args.exercisePoints : BASE_POINTS;
  const firstTry = args.attempts <= 1 ? FIRST_TRY_BONUS : 0;
  const streak = Math.min(args.previousStreak + 1, STREAK_CAP / STREAK_BONUS) * STREAK_BONUS;
  const awarded = base + firstTry + streak;

  const current = readPerLesson(args.slug);
  const perExercise = { ...current.perExercise, [args.exerciseId]: awarded };
  const total = current.total + awarded;
  const best = Math.max(current.best, awarded);
  writePerLesson(args.slug, { total, perExercise, best });

  const grand = readGrandTotal() + awarded;
  writeGrandTotal(grand);

  return { awarded, breakdown: { base, firstTry, streak }, lessonTotal: total, streak, grandTotal: grand };
}
