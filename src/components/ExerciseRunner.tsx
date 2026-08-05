'use client';

import { useState, useEffect, useCallback, useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle, RefreshCw, Volume2 } from 'lucide-react';
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
import LessonIntroModal from './LessonIntroModal.js';
import { awardPoints, getStreak } from '../lib/points.js';
import { shuffleArray } from '../lib/utils/shuffle.js';
import { speakEnglish } from '../lib/utils/speech.js';

interface Props {
  lessonSlug: string;
  lessonTitle: string;
  lessonIntro: string;
  exercises: Exercise[];
  translations: Record<string, string>;
  nativeLocale: string | null;
  uiLocale: string;
  nextLessonSlug?: string | null;
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
    /* quota */
  }
}

function tFor(translations: Record<string, string>, key: string | null | undefined): string {
  if (!key) return '';
  return translations[key] ?? key;
}

function motivationalFor(position: number, total: number, isEs: boolean): string {
  const pct = (position / Math.max(1, total)) * 100;
  if (isEs) {
    if (pct < 25) return '¡Tú puedes — empecemos!';
    if (pct < 50) return '¡Buen ritmo, continúa así!';
    if (pct < 75) return '¡Ya pasaste la mitad!';
    if (pct < 100) return '¡Casi lo logras — recta final!';
    return '¡Lección completada. Excelente trabajo!';
  }
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
  exercises: initialExercises,
  translations,
  nativeLocale,
  uiLocale,
  nextLessonSlug = null,
  lessonKind = 'lesson',
}: Props) {
  const isEs = uiLocale === 'es';
  const [showIntroModal, setShowIntroModal] = useState(true);
  const [exercisesList, setExercisesList] = useState<Exercise[]>(initialExercises);
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);
  const [showAnswer, setShowAnswer] = useState(false);
  const [progress, setProgress] = useState<Progress>(() => readProgress(lessonSlug));
  const [showEncouragement, setShowEncouragement] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [lastPoints, setLastPoints] = useState<
    { awarded: number; base: number; firstTry: number; streak: number } | null
  >(null);
  const [results, setResults] = useState<
    { id: number; label: string; correct: boolean; points: number }[]
  >([]);
  const [lessonPoints, setLessonPoints] = useState(0);
  const directionRef = useRef(1);

  useEffect(() => {
    setProgress(readProgress(lessonSlug));
    setResults([]);
    setLessonPoints(0);
    setLastPoints(null);
    setShowIntroModal(true);
    setExercisesList(initialExercises);
  }, [lessonSlug, initialExercises]);

  useEffect(() => {
    if (exercisesList.length > 0) {
      setProgress((p) => ({ ...p, total: exercisesList.length }));
    }
  }, [exercisesList.length]);

  useEffect(() => {
    const halfway = Math.floor(exercisesList.length / 2);
    if (index === halfway && halfway > 0) {
      setShowEncouragement(true);
      const t = setTimeout(() => setShowEncouragement(false), 2500);
      return () => clearTimeout(t);
    }
  }, [index, exercisesList.length]);

  const current = exercisesList[index];

  const onAnswer = useCallback(
    (userAnswer: unknown, directCorrectCheck?: boolean) => {
      if (!current) return;
      const correct =
        typeof directCorrectCheck === 'boolean'
          ? directCorrectCheck
          : validateAnswer(current, userAnswer);
      setFeedback(correct ? 'correct' : 'wrong');
      setShowAnswer(!correct);

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
      const isCorrect = feedback === 'correct';
      setResults((rs) => [
        ...rs,
        {
          id: current.id,
          label: `${isEs ? 'Pregunta' : 'Question'} ${index + 1}`,
          correct: isCorrect,
          points: isCorrect ? lastPoints?.awarded ?? 0 : 0,
        },
      ]);
    }
    setFeedback(null);
    setShowAnswer(false);
    setLastPoints(null);
    if (index + 1 >= exercisesList.length) {
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
    setResults((rs) => [
      ...rs,
      {
        id: current.id,
        label: `${isEs ? 'Pregunta' : 'Question'} ${index + 1}`,
        correct: false,
        points: 0,
      },
    ]);
    goNext(true);
  };

  const restart = (shuffleOrder = false) => {
    directionRef.current = -1;
    if (shuffleOrder) {
      setExercisesList(shuffleArray(initialExercises));
    }
    setIndex(0);
    setFeedback(null);
    setShowAnswer(false);
    setCompleted(false);
    setLastPoints(null);
    setResults([]);
    setLessonPoints(0);
    const reset: Progress = { completed: 0, total: initialExercises.length, lastAnswers: {}, attempts: {} };
    setProgress(reset);
    writeProgress(lessonSlug, reset);
  };

  if (exercisesList.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-8 text-center dark:border-slate-700 dark:bg-slate-800">
        <p className="text-slate-500 dark:text-slate-400">
          {isEs ? 'Esta lección aún no tiene ejercicios.' : 'This lesson has no exercises yet.'}
        </p>
      </div>
    );
  }

  if (completed) {
    const safeResults =
      results.length > 0
        ? results
        : exercisesList.map((e, i) => ({
            id: e.id,
            label: `${isEs ? 'Pregunta' : 'Question'} ${i + 1}`,
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
          total={exercisesList.length}
          results={safeResults}
          lessonPoints={lessonPoints}
          onGoNext={() => {
            setTimeout(() => setCompleted(false), 200);
          }}
          onRetry={() => restart(true)}
        />
        <div className="sr-only" role="status">
          Lesson complete. {correctCount} of {exercisesList.length} correct. +{lessonPoints} points.
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Lesson Welcome & Rules Modal */}
      {showIntroModal && (
        <LessonIntroModal
          title={lessonTitle}
          intro={lessonIntro || translations[`lesson.${lessonSlug}.intro`] || ''}
          slug={lessonSlug}
          onStart={() => setShowIntroModal(false)}
          onClose={() => setShowIntroModal(false)}
          isMidLesson={index > 0 || feedback !== null}
          uiLocale={uiLocale}
        />
      )}

      {/* Header & Controls Bar */}
      <header className="flex flex-col gap-3">
        <div className="flex items-start justify-between gap-4">
          <h1 className="font-display text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
            {lessonTitle}
          </h1>

          {/* Quick Actions: (?) Reglas and Re-shuffle */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => restart(true)}
              title={isEs ? 'Mezclar ejercicios' : 'Shuffle exercises'}
              className="touch-target flex h-10 w-10 items-center justify-center rounded-xl border-2 border-slate-200 bg-white text-slate-600 transition hover:border-primary-300 hover:text-primary-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-slate-600"
            >
              <RefreshCw className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => setShowIntroModal(true)}
              className="touch-target flex items-center gap-1.5 rounded-xl border-2 border-primary-200 bg-primary-50 px-3 py-2 text-xs font-bold text-primary-700 transition hover:bg-primary-100 dark:border-primary-800 dark:bg-primary-950/70 dark:text-primary-300"
            >
              <HelpCircle className="h-4 w-4" />
              <span>{isEs ? 'Reglas' : 'Rules'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Progress Bar */}
      <ProgressBar
        current={index + 1}
        total={exercisesList.length}
        label={motivationalFor(index, exercisesList.length, isEs)}
      />

      {showEncouragement && (
        <motion.div
          className="rounded-2xl border-2 border-primary-300 bg-primary-50 px-4 py-2.5 text-center text-sm font-bold text-primary-800 dark:border-primary-800 dark:bg-primary-950/80 dark:text-primary-200"
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {isEs ? '¡Ya pasaste la mitad! Sigue así 💪' : "You're past the halfway mark! Keep going 💪"}
        </motion.div>
      )}

      {/* Exercise Card */}
      {current && (
        <ExerciseTransition
          slideKey={String(current.id)}
          direction={directionRef.current as 1 | -1 | 0}
        >
          <article
            className={`relative flex flex-col gap-5 rounded-3xl border-2 border-slate-200 bg-white p-5 transition shadow-sm dark:border-slate-700/80 dark:bg-slate-900 sm:p-7 ${
              feedback === 'wrong' ? 'wrong-shake border-rose-500 dark:border-rose-500' : ''
            }`}
          >
            {/* Exercise badge & counter */}
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-1 rounded-full bg-primary-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-700 dark:bg-primary-950 dark:text-primary-300 border border-primary-200 dark:border-primary-800">
                {current.type.replace('_', ' ')}
              </span>
              <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                {isEs ? 'Pregunta' : 'Question'} {index + 1} {isEs ? 'de' : 'of'} {exercisesList.length}
              </span>
            </div>

            {/* Prompt */}
            <div className="flex items-start justify-between gap-3">
              <h2
                className="font-display text-xl font-bold leading-snug text-slate-900 dark:text-slate-100 sm:text-2xl"
                data-testid="exercise-prompt"
              >
                {tFor(translations, current.promptKey) || current.promptKey}
              </h2>
              <button
                type="button"
                onClick={() => speakEnglish(tFor(translations, current.promptKey) || current.promptKey)}
                title={isEs ? 'Escuchar pronunciación' : 'Listen pronunciation'}
                aria-label={isEs ? 'Escuchar pronunciación' : 'Listen pronunciation'}
                className="touch-target flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary-200 bg-primary-50 text-primary-700 transition hover:bg-primary-100 active:scale-95 dark:border-primary-800 dark:bg-primary-950/70 dark:text-primary-300"
              >
                <Volume2 className="h-5 w-5" />
              </button>
            </div>

            {/* Exercise Component */}
            <div className="relative">
              {current.type === 'fill_blank' && (
                <FillBlank
                  data={current.data as Extract<ExerciseData, { sentence: string }>}
                  answer={current.answer as Extract<ExerciseAnswer, { correct: string }>}
                  onAnswer={onAnswer}
                  disabled={feedback !== null}
                  uiLocale={uiLocale}
                />
              )}
              {current.type === 'multiple_choice' && (
                <MultipleChoice
                  data={current.data as Extract<ExerciseData, { choices: string[] }>}
                  answer={current.answer as Extract<ExerciseAnswer, { correctIndex: number }>}
                  onAnswer={onAnswer}
                  disabled={feedback !== null}
                  uiLocale={uiLocale}
                />
              )}
              {current.type === 'drag_drop' && (
                <DragDrop
                  data={current.data as Extract<ExerciseData, { tokens: string[] }>}
                  answer={current.answer as Extract<ExerciseAnswer, { correctOrder: number[] }>}
                  onAnswer={onAnswer}
                  disabled={feedback !== null}
                  uiLocale={uiLocale}
                />
              )}
              {current.type === 'true_false' && (
                <TrueFalse
                  data={current.data as Extract<ExerciseData, { statement: string }>}
                  answer={current.answer as Extract<ExerciseAnswer, { correct: boolean }>}
                  onAnswer={onAnswer}
                  disabled={feedback !== null}
                  uiLocale={uiLocale}
                />
              )}
              {current.type === 'matching' && (
                <Matching
                  data={current.data as Extract<ExerciseData, { left: string[]; right: string[] }>}
                  answer={current.answer as Extract<ExerciseAnswer, { pairs: { leftIndex: number; rightIndex: number }[] }>}
                  onAnswer={onAnswer}
                  disabled={feedback !== null}
                  uiLocale={uiLocale}
                />
              )}
              {current.type === 'sentence_reorder' && (
                <SentenceReorder
                  data={current.data as Extract<ExerciseData, { tokens: string[] }>}
                  answer={current.answer as Extract<ExerciseAnswer, { correctOrder: number[] }>}
                  onAnswer={onAnswer}
                  disabled={feedback !== null}
                  uiLocale={uiLocale}
                />
              )}

              {/* Feedback overlays */}
              {feedback === 'correct' && (
                <CorrectFeedback inline seed={current.id} points={lastPoints ?? undefined} />
              )}
              {feedback === 'wrong' && showAnswer && (
                <div className="pointer-events-none absolute inset-0 z-10 rounded-2xl bg-white/40 dark:bg-slate-900/40" />
              )}
              {feedback === 'wrong' && <WrongFeedback inline seed={current.id} />}
            </div>

            {/* Explanation + pro tip (after wrong answer) */}
            {feedback === 'wrong' && showAnswer && (
              <motion.div
                className="space-y-3 rounded-2xl border-2 border-rose-200 bg-rose-50/80 p-5 dark:border-rose-900/80 dark:bg-rose-950/40"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400">
                    {isEs ? 'Respuesta correcta' : 'The right answer'}
                  </p>
                  <p className="mt-1 font-display text-base font-bold text-slate-900 dark:text-slate-100">
                    {tFor(translations, current.explanationKey ?? null) ||
                      (isEs ? 'Revisa la opción correcta resaltada arriba.' : 'See the correct option highlighted above.')}
                  </p>
                </div>
                {current.proTipKey && translations[current.proTipKey] && (
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-primary-700 dark:text-primary-400">
                      {isEs ? 'Consejo pro' : 'Pro tip'}
                    </p>
                    <p className="mt-1 text-sm italic text-slate-700 dark:text-slate-300">
                      {translations[current.proTipKey]}
                    </p>
                  </div>
                )}
                <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
                  <button
                    type="button"
                    onClick={skip}
                    className="touch-target inline-flex min-h-[48px] w-full items-center justify-center rounded-xl border-2 border-slate-300 bg-white px-4 py-2.5 text-base font-semibold text-slate-700 transition hover:bg-slate-100 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700 sm:w-auto"
                  >
                    {isEs ? 'Omitir' : 'Skip'}
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setFeedback(null);
                      setShowAnswer(false);
                    }}
                    className="touch-target inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 sm:w-auto"
                  >
                    {isEs ? 'Intentar de nuevo' : 'Try again'}
                  </button>
                </div>
              </motion.div>
            )}

            {/* Success explanation card */}
            {feedback === 'correct' && current.explanationKey && translations[current.explanationKey] && (
              <motion.div
                className="space-y-3 rounded-2xl border-2 border-emerald-200 bg-emerald-50/80 p-5 dark:border-emerald-900/80 dark:bg-emerald-950/40"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
              >
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300">
                  {isEs ? '¿Por qué es correcto?' : 'Why it works'}
                </p>
                <p className="text-base font-medium text-slate-800 dark:text-slate-200">
                  {translations[current.explanationKey]}
                </p>
                {current.proTipKey && translations[current.proTipKey] && (
                  <p className="text-sm italic text-slate-700 dark:text-slate-300">
                    <span className="font-bold not-italic text-primary-700 dark:text-primary-300">
                      {isEs ? 'Consejo pro:' : 'Pro tip:'}
                    </span>{' '}
                    {translations[current.proTipKey]}
                  </p>
                )}
                <div className="flex w-full justify-end sm:w-auto">
                  <button
                    type="button"
                    onClick={() => goNext()}
                    className="touch-target inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 sm:w-auto"
                  >
                    {isEs ? 'Siguiente →' : 'Next →'}
                  </button>
                </div>
              </motion.div>
            )}

            {/* "Next" CTA when feedback is correct but no explanation card was rendered */}
            {feedback === 'correct' && (!current.explanationKey || !translations[current.explanationKey]) && (
              <div className="flex w-full justify-end sm:w-auto">
                <button
                  type="button"
                  onClick={() => goNext()}
                  className="touch-target inline-flex min-h-[48px] w-full items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-base font-bold text-white shadow-sm transition hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 sm:w-auto"
                >
                  {isEs ? 'Siguiente →' : 'Next →'}
                </button>
              </div>
            )}

            {/* Translation reveal */}
            <TranslationReveal
              uiLocale={uiLocale}
              nativeLocale={nativeLocale}
              contextKey={current.promptKey}
              contextValue={tFor(translations, current.promptKey)}
              exerciseId={current.id}
            />
          </article>
        </ExerciseTransition>
      )}
    </div>
  );
}
