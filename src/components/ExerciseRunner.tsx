'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import type { Exercise, ExerciseData, ExerciseAnswer } from '../types.js';
import { validateAnswer } from '../lib/exercise-validation.js';
import ProgressBar from './feedback/ProgressBar.js';
import CorrectFeedback from './feedback/CorrectFeedback.js';
import WrongFeedback from './feedback/WrongFeedback.js';
import FillBlank from './exercises/FillBlank.js';
import MultipleChoice from './exercises/MultipleChoice.js';
import DragDrop from './exercises/DragDrop.js';
import TrueFalse from './exercises/TrueFalse.js';
import Matching from './exercises/Matching.js';
import SentenceReorder from './exercises/SentenceReorder.js';
import TranslationReveal from './TranslationReveal.js';
import ExerciseTransition from './ExerciseTransition.js';
import PointsCompletion from './PointsCompletion.js';
import { awardPoints, getStreak } from '../lib/points.js';

interface Props {
  lessonSlug: string;
  lessonTitle: string;
  lessonIntro: string;
  exercises: Exercise[];
  /**
   * Map of translation key → value for the lesson prompt, explanation,
   * pro tip, and the i18n-resolved exercise data/answer strings. Keys not in
   * the map are shown literally (English fallback).
   */
  translations: Record<string, string>;
  /** When provided, the translation reveal button will appear if this locale differs. */
  nativeLocale: string | null;
  /** Lesson shown in this UI locale (used to render translated prose). */
  uiLocale: string;
  /**
   * Slug of the next lesson in the same group, or null if there isn't one.
   * Vocabulary chunks use this to chain to the next chunk; non-vocab
   * lessons typically pass null so the modal shows "Back to lessons".
   */
  nextLessonSlug?: string | null;
  /**
   * 'vocab' → modal shows "Next chunk →" + "Back to vocabulary".
   * 'lesson' → modal shows "Retry" + "Back to lessons".
   */
  lessonKind?: 'vocab' | 'lesson';
}

interface Progress {
  completed: number;
  total: number;
  lastAnswers: Record<number, 'correct' | 'wrong' | 'skipped'>;
  attempts: Record<number, number>;
}

const STORAGE_KEY = (slug: string) => `english.progress.${slug}`;

function readProgress(slug: string): Progress {
  if (typeof window === 'undefined') {
    return { completed: 0, total: 0, lastAnswers: {}, attempts: {} };
  }
  try {
    const raw = localStorage.getItem(STORAGE_KEY(slug));
    if (!raw) return { completed: 0, total: 0, lastAnswers: {}, attempts: {} };
    return JSON.parse(raw);
  } catch {
    return { completed: 0, total: 0, lastAnswers: {}, attempts: {} };
  }
}

function writeProgress(slug: string, p: Progress) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(STORAGE_KEY(slug), JSON.stringify(p));
  } catch {
    /* quota — ignore */
  }
}

function tFor(translations: Record<string, string>, key: string | null | undefined): string {
  if (!key) return '';
  return translations[key] ?? key;
}

function motivationalFor(position: number, total: number): string {
  const pct = (position / Math.max(1, total)) * 100;
  if (pct < 25) return "You've got this — let's start!";
  if (pct < 50) return 'Nice rhythm, keep it up!';
  if (pct < 75) return "You're past the halfway mark!";
  if (pct < 100) return 'Almost there — final stretch!';
  return 'Lesson complete. Brilliant work!';
}

export default function ExerciseRunner({
  lessonSlug,
  lessonTitle,
  lessonIntro,
  exercises,
  translations,
  nativeLocale,
  uiLocale,
  nextLessonSlug = null,
  lessonKind = 'lesson',
}: Props) {
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [progress, setProgress] = useState<Progress>(() => readProgress(lessonSlug));
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [completed, setCompleted] = useState(false);
  // Live points breakdown for the current answer (drives the "+N" floater
  // in CorrectFeedback). Resets on every new question / next click.
  const [lastPoints, setLastPoints] = useState<
    { awarded: number; base: number; firstTry: number; streak: number } | null
  >(null);
  // Per-exercise results accumulated across the lesson (for the modal).
  const [results, setResults] = useState<
    { id: number; label: string; correct: boolean; points: number }[]
  >([]);
  const [lessonPoints, setLessonPoints] = useState(0);
  // When the user advances exercises we want the slide to come from the
  // right (direction=1). On a "try again" the same slide stays put (no
  // direction change), so we keep a ref-based direction counter that the
  // goNext/skip functions can flip.
  const directionRef = useRef(1);

  useEffect(() => {
    setProgress(readProgress(lessonSlug));
    // Reset per-lesson state when the slug changes (e.g. nav between
    // lessons without a full remount).
    setResults([]);
    setLessonPoints(0);
    setLastPoints(null);
  }, [lessonSlug]);

  useEffect(() => {
    if (exercises.length > 0) {
      setProgress((p) => ({ ...p, total: exercises.length }));
    }
  }, [exercises.length]);

  // Reveal a "you're almost there" pulse at the halfway point.
  useEffect(() => {
    const halfway = Math.floor(exercises.length / 2);
    if (index === halfway && halfway > 0) {
      setShowEncouragement(true);
      const t = setTimeout(() => setShowEncouragement(false), 2500);
      return () => clearTimeout(t);
    }
  }, [index, exercises.length]);

  const current = exercises[index];

  const onAnswer = useCallback(
    (userAnswer: unknown, _correct: boolean) => {
      if (!current) return;
      const correct = validateAnswer(current, userAnswer);
      setFeedback(correct ? 'correct' : 'wrong');
      setShowAnswer(!correct);

      // Compute attempts from the latest progress snapshot so the
      // "first try" bonus is awarded correctly even on the first click.
      const freshProgress = readProgress(lessonSlug);
      const attemptsSoFar = freshProgress.attempts[current.id] ?? 0;
      const previousStreak = correct ? getStreak(lessonSlug) : 0;

      setProgress((p) => {
        const next: Progress = {
          ...p,
          lastAnswers: { ...p.lastAnswers, [current.id]: correct ? 'correct' : 'wrong' },
          attempts: { ...p.attempts, [current.id]: (p.attempts[current.id] ?? 0) + 1 },
          completed: p.completed + (correct ? 1 : 0),
        };
        writeProgress(lessonSlug, next);
        return next;
      });

      if (correct) {
        // Credit points for this correct answer. The runner is the source
        // of truth for awarding; the floater reads `lastPoints`.
        const award = awardPoints({
          slug: lessonSlug,
          exerciseId: current.id,
          exercisePoints: current.points,
          attempts: attemptsSoFar + 1,
          previousStreak,
        });
        setLastPoints({
          awarded: award.awarded,
          base: award.breakdown.base,
          firstTry: award.breakdown.firstTry,
          streak: award.breakdown.streak,
        });
        setLessonPoints((lp) => lp + award.awarded);
      } else {
        setLastPoints(null);
      }
    },
    [current, lessonSlug]
  );

  const goNext = (skipResultRecord = false) => {
    if (current && !skipResultRecord) {
      // Record the result for the question we're leaving so the modal
      // can show a per-question breakdown at the end. `skip()` already
      // records the skipped result before calling goNext, so it tells
      // us to skip this step.
      const isCorrect = feedback === 'correct';
      setResults((rs) => [
        ...rs,
        {
          id: current.id,
          label: `Question ${index + 1}`,
          correct: isCorrect,
          points: isCorrect ? lastPoints?.awarded ?? 0 : 0,
        },
      ]);
    }
    setFeedback(null);
    setShowAnswer(false);
    setLastPoints(null);
    if (index + 1 >= exercises.length) {
      setCompleted(true);
      return;
    }
    directionRef.current = 1;
    setIndex(index + 1);
  };

  const skip = () => {
    if (!current) return;
    setProgress((p) => {
      const next: Progress = {
        ...p,
        lastAnswers: { ...p.lastAnswers, [current.id]: 'skipped' },
      };
      writeProgress(lessonSlug, next);
      return next;
    });
    // Skipped questions count as wrong in the per-question breakdown.
    setResults((rs) => [
      ...rs,
      { id: current.id, label: `Question ${index + 1}`, correct: false, points: 0 },
    ]);
    goNext(true);
  };

  const restart = () => {
    directionRef.current = -1;
    setIndex(0);
    setFeedback(null);
    setShowAnswer(false);
    setCompleted(false);
    setLastPoints(null);
    setResults([]);
    setLessonPoints(0);
    const reset: Progress = { completed: 0, total: exercises.length, lastAnswers: {}, attempts: {} };
    setProgress(reset);
    writeProgress(lessonSlug, reset);
  };

  if (exercises.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-800">
        <p className="text-slate-500 dark:text-slate-400">This lesson has no exercises yet.</p>
      </div>
    );
  }

  if (completed) {
    // Use the per-question results we've been accumulating. Falls back to
    // a derived summary from localStorage if for any reason a refresh
    // landed us here without a results array.
    const safeResults =
      results.length > 0
        ? results
        : exercises.map((e, i) => ({
            id: e.id,
            label: `Question ${i + 1}`,
            correct: progress.lastAnswers?.[e.id] === 'correct',
            points: 0,
          }));
    const correctCount = safeResults.filter((r) => r.correct).length;
    return (
      <>
        <PointsCompletion
          open={completed}
          lessonTitle={lessonTitle}
          kind={lessonKind}
          nextLessonSlug={nextLessonSlug}
          correctCount={correctCount}
          total={exercises.length}
          results={safeResults}
          lessonPoints={lessonPoints}
          onGoNext={() => {
            // No-op: the link navigates. We just want a small delay so
            // the exit anim can play.
            setTimeout(() => setCompleted(false), 200);
          }}
          onRetry={restart}
        />
        {/* Hidden fallback for screen readers / no-JS users. The modal is
            the primary surface for sighted users. */}
        <div className="sr-only" role="status">
          Lesson complete. {correctCount} of {exercises.length} correct. +{lessonPoints} points.
        </div>
      </>
    );
  }

  if (!current) return null;

  return (
    <div className="flex flex-col gap-6">
      <header className="flex flex-col gap-3">
        <h1 className="font-display text-3xl font-bold text-primary-700 dark:text-primary-300">{lessonTitle}</h1>
        {lessonIntro && (
          <div
            className="prose max-w-none text-base leading-relaxed text-slate-700 dark:text-slate-200 dark:prose-invert"
            // The intro is HTML produced by `marked` on the server; we trust our own content.
            dangerouslySetInnerHTML={{ __html: lessonIntro }}
          />
        )}
      </header>

      <ProgressBar
        current={index + 1}
        total={exercises.length}
        label={motivationalFor(index, exercises.length)}
      />

      {showEncouragement && (
        <motion.div
          className="soft-pulse rounded-2xl border border-primary-200 bg-primary-50 px-4 py-2 text-center text-sm font-medium text-primary-700"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          You're past the halfway mark! Keep going 💪
        </motion.div>
      )}

      <ExerciseTransition
        slideKey={String(current.id)}
        direction={directionRef.current as 1 | -1 | 0}
      >
        <article
          className={`relative flex flex-col gap-5 rounded-2xl border-2 border-primary-100 bg-white p-6 transition dark:border-primary-800 dark:bg-slate-800 ${
            feedback === 'wrong' ? 'wrong-shake border-danger-500' : ''
          }`}
        >
          {/* Header: type badge + exercise number */}
          <div className="flex items-center justify-between">
            <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary-700 dark:bg-primary-800/30 dark:text-primary-200">
              {current.type.replace('_', ' ')}
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              Question {index + 1} of {exercises.length}
            </span>
          </div>

          {/* Prompt */}
          <h2
            className="font-display text-xl font-semibold leading-snug text-slate-900 dark:text-slate-100"
            data-testid="exercise-prompt"
          >
            {tFor(translations, current.promptKey) || '⚠️ Prompt not found: ' + current.promptKey}
          </h2>

          {/* Exercise component */}
          <div className="relative">
            {current.type === 'fill_blank' && (
              <FillBlank
                data={current.data as Extract<ExerciseData, { sentence: string }>}
                answer={current.answer as Extract<ExerciseAnswer, { correct: string }>}
                onAnswer={onAnswer}
                disabled={feedback !== null}
              />
            )}
            {current.type === 'multiple_choice' && (
              <MultipleChoice
                data={current.data as Extract<ExerciseData, { choices: string[] }>}
                answer={current.answer as Extract<ExerciseAnswer, { correctIndex: number }>}
                onAnswer={onAnswer}
                disabled={feedback !== null}
              />
            )}
            {current.type === 'drag_drop' && (
              <DragDrop
                data={current.data as Extract<ExerciseData, { tokens: string[] }>}
                answer={current.answer as Extract<ExerciseAnswer, { correctOrder: number[] }>}
                onAnswer={onAnswer}
                disabled={feedback !== null}
              />
            )}
            {current.type === 'true_false' && (
              <TrueFalse
                data={current.data as Extract<ExerciseData, { statement: string }>}
                answer={current.answer as Extract<ExerciseAnswer, { correct: boolean }>}
                onAnswer={onAnswer}
                disabled={feedback !== null}
              />
            )}
            {current.type === 'matching' && (
              <Matching
                data={current.data as Extract<ExerciseData, { left: string[]; right: string[] }>}
                answer={current.answer as Extract<ExerciseAnswer, { pairs: { leftIndex: number; rightIndex: number }[] }>}
                onAnswer={onAnswer}
                disabled={feedback !== null}
              />
            )}
            {current.type === 'sentence_reorder' && (
              <SentenceReorder
                data={current.data as Extract<ExerciseData, { tokens: string[] }>}
                answer={current.answer as Extract<ExerciseAnswer, { correctOrder: number[] }>}
                onAnswer={onAnswer}
                disabled={feedback !== null}
              />
            )}

            {/* Feedback overlays */}
            {feedback === 'correct' && (
              <CorrectFeedback inline seed={current.id} points={lastPoints ?? undefined} />
            )}
            {feedback === 'wrong' && showAnswer && (
              <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-white/30 dark:bg-slate-800/30" />
            )}
            {feedback === 'wrong' && <WrongFeedback inline seed={current.id} />}
          </div>

          {/* Explanation + pro tip (after wrong answer) */}
          {feedback === 'wrong' && showAnswer && (
            <motion.div
              className="space-y-3 rounded-2xl border border-danger-200 bg-danger-500/10 p-5 dark:border-danger-700/60"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-wide text-danger-600 dark:text-danger-400">
                  The right answer
                </p>
                <p className="mt-1 font-display text-lg font-semibold text-slate-900 dark:text-slate-100">
                  {tFor(translations, current.explanationKey ?? null) || 'See the correct option highlighted above.'}
                </p>
              </div>
              {current.proTipKey && translations[current.proTipKey] && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-wide text-primary-600 dark:text-primary-400">
                    Pro tip
                  </p>
                  <p className="mt-1 text-sm italic text-slate-700 dark:text-slate-200">
                    {translations[current.proTipKey]}
                  </p>
                </div>
              )}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={skip}
                  className="rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:opacity-80 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
                >
                  Skip
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setFeedback(null);
                    setShowAnswer(false);
                  }}
                  className="glow-pulse rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
                >
                  Try again
                </button>
              </div>
            </motion.div>
          )}

          {/* Success explanation card */}
          {feedback === 'correct' && current.explanationKey && translations[current.explanationKey] && (
            <motion.div
              className="space-y-3 rounded-2xl border border-success-200 bg-success-500/10 p-5 dark:border-success-700/60"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-xs font-bold uppercase tracking-wide text-success-600 dark:text-success-400">
                Why it works
              </p>
              <p className="text-sm text-slate-700 dark:text-slate-200">
                {translations[current.explanationKey]}
              </p>
              {current.proTipKey && translations[current.proTipKey] && (
                <p className="text-sm italic text-slate-500 dark:text-slate-400">
                  <span className="font-semibold not-italic text-primary-600 dark:text-primary-400">Pro tip:</span>{' '}
                  {translations[current.proTipKey]}
                </p>
              )}
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => goNext()}
                  className="glow-pulse rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
                >
                  Next →
                </button>
              </div>
            </motion.div>
          )}

          {/* "Next" CTA when feedback is correct but no explanation card was rendered */}
          {feedback === 'correct' && (!current.explanationKey || !translations[current.explanationKey]) && (
            <div className="flex justify-end">
              <button
                type="button"
                onClick={() => goNext()}
                className="glow-pulse rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700"
              >
                Next →
              </button>
            </div>
          )}

          {/* Translation reveal (native locale only) */}
          <TranslationReveal
            uiLocale={uiLocale}
            nativeLocale={nativeLocale}
            contextKey={current.promptKey}
            contextValue={tFor(translations, current.promptKey)}
            exerciseId={current.id}
          />
        </article>
      </ExerciseTransition>
    </div>
  );
}
