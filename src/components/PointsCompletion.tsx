'use client';

import { motion, AnimatePresence } from 'framer-motion';
import ConfettiBurst from './ConfettiBurst.js';

interface QuestionResult {
  id: number;
  /** "Question 1" label. */
  label: string;
  correct: boolean;
  /** Points awarded for this question (0 if not yet answered / skipped). */
  points: number;
}

interface Props {
  open: boolean;
  /** Stable lesson title shown at the top. */
  lessonTitle: string;
  /** 'vocab' shows "Next chunk →" + "Back to vocabulary"; 'lesson' shows "Retry" + "Back to lessons". */
  kind: 'vocab' | 'lesson';
  /** Slug of the next lesson in the same group, if any. When null, no "Next" button. */
  nextLessonSlug: string | null;
  /** Score for the lesson (correct answers on first try, by simple count). */
  correctCount: number;
  total: number;
  /** Per-question breakdown. */
  results: QuestionResult[];
  /** Sum of points awarded for this lesson. */
  lessonPoints: number;
  /** Optional override callback for "Next chunk →" — used to play an exit anim. */
  onGoNext: () => void;
  onRetry: () => void;
}

/**
 * Full-screen "you won something" modal that appears the moment the learner
 * finishes a lesson. Centered, blurred backdrop, big numbers — modeled
 * after the dopamine-hits-you-get from a mobile game level-complete screen,
 * but kept on-brand (indigo + emerald) for this learning app.
 */
export default function PointsCompletion({
  open,
  lessonTitle,
  kind,
  nextLessonSlug,
  correctCount,
  total,
  results,
  lessonPoints,
  onGoNext,
  onRetry,
}: Props) {
  const safeTotal = Math.max(1, total);
  const pct = Math.round((correctCount / safeTotal) * 100);

  // Encourage the learner proportionally to their score, but keep the
  // copy neutral — the points are the real reward, not a lecture.
  const headline =
    pct === 100
      ? 'Perfect run! 🌟'
      : pct >= 80
        ? 'Great work!'
        : pct >= 50
          ? 'Solid effort!'
          : 'Nice try — practice makes progress.';

  const backHref = kind === 'vocab' ? '/vocabulary' : '/lessons';
  const backLabel = kind === 'vocab' ? '← Back to vocabulary' : '← Back to lessons';

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          role="dialog"
          aria-modal="true"
          aria-labelledby="points-completion-title"
        >
          {/* Backdrop — blurs the page so the modal really pops. */}
          <motion.div
            className="absolute inset-0 bg-slate-900/55 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden="true"
          />

          {/* Confetti — fires once when the modal opens. */}
          <ConfettiBurst trigger={open} />

          {/* Card */}
          <motion.div
            className="relative z-10 w-full max-w-lg overflow-hidden rounded-3xl border-2 border-emerald-300 bg-white shadow-2xl dark:border-emerald-700 dark:bg-slate-800"
            initial={{ scale: 0.7, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
          >
            {/* Gradient banner */}
            <div className="relative bg-gradient-to-br from-emerald-500 via-primary-500 to-indigo-600 px-6 pb-10 pt-8 text-center text-white">
              <motion.div
                className="text-5xl"
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 12, delay: 0.05 }}
              >
                {pct === 100 ? '🏆' : '🎉'}
              </motion.div>
              <motion.h2
                id="points-completion-title"
                className="mt-2 font-display text-2xl font-bold drop-shadow"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
              >
                {headline}
              </motion.h2>
              <motion.p
                className="mt-1 text-base font-bold text-white"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.3 }}
              >
                {lessonTitle}
              </motion.p>
            </div>

            {/* Body */}
            <div className="-mt-6 px-6 pb-6">
              {/* Big total points card — sits half-on, half-off the banner. */}
              <motion.div
                className="mx-auto rounded-2xl border border-amber-200 bg-white p-5 text-center shadow-lg dark:border-amber-700 dark:bg-slate-800"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 220, damping: 18 }}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-amber-700 dark:text-amber-300">
                  Points earned this lesson
                </p>
                <motion.p
                  className="mt-1 font-display text-5xl font-extrabold text-amber-500 drop-shadow-sm dark:text-amber-300"
                  initial={{ scale: 0.6 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.45, type: 'spring', stiffness: 300, damping: 14 }}
                >
                  +{lessonPoints}
                </motion.p>

                {/* Mini score ring */}
                <div className="mx-auto mt-3 flex h-16 w-16 items-center justify-center">
                  <svg viewBox="0 0 120 120" className="absolute h-16 w-16 -rotate-90" aria-hidden="true">
                    <circle cx="60" cy="60" r="50" fill="none" stroke="var(--color-primary-100)" strokeWidth="10" />
                    <motion.circle
                      cx="60"
                      cy="60"
                      r="50"
                      fill="none"
                      stroke="var(--color-success-500)"
                      strokeWidth="10"
                      strokeLinecap="round"
                      strokeDasharray={2 * Math.PI * 50}
                      initial={{ strokeDashoffset: 2 * Math.PI * 50 }}
                      animate={{ strokeDashoffset: (2 * Math.PI * 50) * (1 - pct / 100) }}
                      transition={{ delay: 0.5, duration: 0.9, ease: 'easeOut' }}
                    />
                  </svg>
                  <span className="relative font-display text-sm font-bold text-success-700 dark:text-success-400">
                    {pct}%
                  </span>
                </div>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {correctCount} of {total} correct
                </p>
              </motion.div>

              {/* Per-question breakdown — small chips, one per question. */}
              <motion.div
                className="mt-5"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55, duration: 0.3 }}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Per question
                </p>
                <ul className="mt-2 grid grid-cols-1 gap-1.5 sm:grid-cols-2">
                  {results.map((r, i) => (
                    <motion.li
                      key={r.id}
                      className={`flex items-center justify-between rounded-lg border px-3 py-1.5 text-sm ${
                        r.correct
                          ? 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200'
                          : 'border-slate-200 bg-slate-50 text-slate-500 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-400'
                      }`}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.04, duration: 0.2 }}
                    >
                      <span className="flex items-center gap-2">
                        <span aria-hidden="true">{r.correct ? '✓' : '✗'}</span>
                        <span className="text-xs font-medium">{r.label}</span>
                      </span>
                      <span className="font-display text-xs font-bold tabular-nums">
                        {r.correct ? `+${r.points}` : '0'}
                      </span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Actions */}
              <motion.div
                className="mt-6 flex flex-col gap-2 sm:flex-row sm:justify-center"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.85, duration: 0.3 }}
              >
                {nextLessonSlug && (
                  <a
                    href={`/lessons/${nextLessonSlug}`}
                    onClick={onGoNext}
                    className="lift-on-hover inline-flex min-h-[44px] items-center justify-center gap-1 rounded-lg bg-primary px-5 py-2.5 text-base font-semibold text-white shadow-sm transition hover:bg-primary-700"
                  >
                    {kind === 'vocab' ? 'Next chunk' : 'Next lesson'} →
                  </a>
                )}
                <button
                  type="button"
                  onClick={onRetry}
                  className="lift-on-hover rounded-lg border border-primary-300 bg-white px-5 py-2.5 text-sm font-semibold text-primary-700 transition hover:bg-primary-50 dark:border-primary-700 dark:bg-slate-800 dark:text-primary-200 dark:hover:bg-primary-700 dark:hover:text-white"
                >
                  Retry lesson
                </button>
                <a
                  href={backHref}
                  className="lift-on-hover rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
                >
                  {backLabel}
                </a>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
