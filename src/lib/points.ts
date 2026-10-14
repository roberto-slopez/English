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
  perExercise: Record<string, number>;
  best: number; // highest per-exercise award seen (so we can show "best" in UI)
  streak: number;
  credited?: Record<string, number>;
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
    return { total: 0, perExercise: {}, best: 0, streak: 0 };
  }
  try {
    const raw = localStorage.getItem(POINTS_KEY(slug));
    if (!raw) return { total: 0, perExercise: {}, best: 0, streak: 0 };
    const parsed = JSON.parse(raw) as Partial<PerExercisePoints>;
    return {
      total: safeScore(parsed.total),
      perExercise: parsed.perExercise && typeof parsed.perExercise === 'object' ? parsed.perExercise : {},
      best: safeScore(parsed.best),
      streak: safeScore(parsed.streak),
      credited: parsed.credited && typeof parsed.credited === 'object' ? parsed.credited : {},
    };
  } catch {
    return { total: 0, perExercise: {}, best: 0, streak: 0 };
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
    return safeScore(Number(raw));
  } catch {
    return 0;
  }
}

function writeGrandTotal(value: number) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(TOTAL_KEY, String(safeScore(value)));
  } catch {
    /* quota — ignore */
  }
}

/** Returns the current streak (consecutive correct answers in this lesson). */
export function getStreak(slug: string): number {
  return readPerLesson(slug).streak;
}

function safeScore(value: unknown): number {
  return typeof value === 'number' && Number.isFinite(value) ? Math.min(Number.MAX_SAFE_INTEGER, Math.max(0, Math.floor(value))) : 0;
}

export function resetStreak(slug: string): void {
  writePerLesson(slug, { ...readPerLesson(slug), streak: 0 });
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
  exerciseId: number | string;
  /** Stable run id makes retries/reloads idempotent, while a new practice run can earn points. */
  sessionId?: string;
  /** Custom points declared on the exercise row, or 0 to use the base. */
  exercisePoints?: number;
  /** How many times the learner has tried this exercise (1 = first try). */
  attempts: number;
  /** Current streak BEFORE this award (the new value is streak + 1). */
  previousStreak: number;
}): PointsAward {
  const base = args.exercisePoints && args.exercisePoints > 0 ? args.exercisePoints : BASE_POINTS;
  const firstTry = args.attempts <= 1 ? FIRST_TRY_BONUS : 0;
  const streakCount = Math.min(safeScore(args.previousStreak) + 1, Number.MAX_SAFE_INTEGER);
  const streak = Math.min(streakCount, STREAK_CAP / STREAK_BONUS) * STREAK_BONUS;
  const awarded = base + firstTry + streak;

  const current = readPerLesson(args.slug);
  const creditKey = args.sessionId ? `${args.sessionId}:${args.exerciseId}` : null;
  if (creditKey && Object.hasOwn(current.credited ?? {}, creditKey)) {
    return { awarded: 0, breakdown: { base: 0, firstTry: 0, streak: 0 }, lessonTotal: current.total, streak: current.streak, grandTotal: readGrandTotal() };
  }
  const perExercise = { ...current.perExercise, [args.exerciseId]: awarded };
  const total = safeScore(current.total + awarded);
  const best = Math.max(current.best, awarded);
  // Only the current run needs deduplication. This prevents unbounded storage growth.
  const credited = creditKey ? Object.fromEntries(Object.entries(current.credited ?? {}).filter(([key]) => key.startsWith(`${args.sessionId}:`))) : {};
  if (creditKey) credited[creditKey] = awarded;
  writePerLesson(args.slug, { total, perExercise, best, streak: streakCount, credited });

  const grand = readGrandTotal() + awarded;
  writeGrandTotal(grand);

  return { awarded, breakdown: { base, firstTry, streak }, lessonTotal: total, streak: streakCount, grandTotal: safeScore(grand) };
}
