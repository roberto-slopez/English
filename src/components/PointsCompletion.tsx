import { lazy, Suspense, useEffect, useId, useRef, useState } from 'react';
import { Trophy, X } from 'lucide-react';
import Dialog from './Dialog.js';
import { uiText, normalizeUiLocale } from '../lib/ui-labels.js';

const ConfettiBurst = lazy(() => import('./ConfettiBurst.js'));

interface QuestionResult { id: number; label: string; correct: boolean; points: number; }
interface Props {
  open: boolean;
  lessonTitle: string;
  kind: 'vocab' | 'lesson';
  nextLessonSlug: string | null;
  correctCount: number;
  total: number;
  results: QuestionResult[];
  lessonPoints: number;
  onGoNext: () => void;
  onRetry: () => void;
  errorCount?: number;
  onReviewErrors?: () => void;
  uiLocale?: string;
}

export default function PointsCompletion({ open, lessonTitle, kind, nextLessonSlug, correctCount, total, results, lessonPoints, onGoNext, onRetry, errorCount = 0, onReviewErrors, uiLocale = 'en' }: Props) {
  const id = useId();
  const [dismissed, setDismissed] = useState(false);
  const summaryRef = useRef<HTMLElement>(null);
  useEffect(() => { if (open) setDismissed(false); }, [open]);
  useEffect(() => { if (dismissed) summaryRef.current?.querySelector<HTMLElement>('h2')?.focus({ preventScroll: true }); }, [dismissed]);
  const pct = Math.round((correctCount / Math.max(1, total)) * 100);
  const headline = pct === 100 ? 'perfect' : pct >= 80 ? 'great' : pct >= 50 ? 'solid' : 'keepPracticing';
  const number = new Intl.NumberFormat(normalizeUiLocale(uiLocale));
  const content = (
    <div className="dialog-layout">
      <header className="dialog-header">
        <div className="min-w-0">
          <p className="mb-1 flex items-center gap-2 font-semibold text-emerald-700 dark:text-emerald-300">
            <Trophy className="h-5 w-5" aria-hidden="true" />
            {uiText(uiLocale, 'lessonComplete')}
          </p>
          <h2 id={id} tabIndex={-1} data-dialog-autofocus className="font-display text-2xl font-bold">{uiText(uiLocale, headline)}</h2>
          <p className="mt-1 text-base text-slate-600 dark:text-slate-300">{lessonTitle}</p>
        </div>
        {!dismissed && <button type="button" onClick={() => setDismissed(true)} className="touch-target shrink-0 rounded-xl border border-slate-300 text-slate-600 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800" aria-label={uiText(uiLocale, 'close')}><X className="h-5 w-5" aria-hidden="true" /></button>}
      </header>
      <div className="dialog-body space-y-6">
        <div className="rounded-2xl bg-amber-50 p-5 text-center dark:bg-amber-950/40">
          <p className="text-sm font-semibold text-amber-800 dark:text-amber-200">{uiText(uiLocale, 'pointsEarned')}</p>
          <p className="mt-2 font-display text-4xl font-extrabold tabular-nums text-amber-800 dark:text-amber-200">+{number.format(lessonPoints)}</p>
          <p className="mt-2 font-semibold text-slate-700 dark:text-slate-200">{uiText(uiLocale, 'score', { count: number.format(correctCount), total: number.format(total) })}</p>
          <p className="mt-1 text-base font-semibold tabular-nums text-slate-700 dark:text-slate-200">{number.format(pct)}%</p>
        </div>
        <section aria-labelledby={id + '-results'}>
          <h3 id={id + '-results'} className="mb-3 text-base font-bold">{uiText(uiLocale, 'perQuestion')}</h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {results.map((result) => (
              <li key={result.id} className={`flex items-center justify-between gap-2 rounded-xl border p-3 ${result.correct ? 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-100' : 'border-slate-200 bg-slate-50 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200'}`}>
                <span className="min-w-0">
                  <span className="block text-sm font-semibold">{result.label}</span>
                  <span className="block text-sm">{uiText(uiLocale, result.correct ? 'correct' : 'needsPractice')}</span>
                </span>
                <span className="shrink-0 font-bold tabular-nums">+{number.format(result.points)}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <footer className="dialog-footer flex flex-wrap justify-center gap-2">
        {errorCount > 0 && onReviewErrors && (
          <button type="button" data-cy="review-errors" onClick={onReviewErrors} className="touch-target flex-1 rounded-xl border-2 border-amber-500 bg-amber-50 px-4 font-semibold text-amber-900 hover:bg-amber-100 dark:border-amber-600 dark:bg-amber-950/60 dark:text-amber-100 dark:hover:bg-amber-900/60">
            {uiText(uiLocale, 'reviewErrors', { count: number.format(errorCount) })}
          </button>
        )}
        {nextLessonSlug && <a href={`/lessons/${nextLessonSlug}`} onClick={onGoNext} className="button-primary flex-1">{uiText(uiLocale, kind === 'vocab' ? 'nextChunk' : 'nextLesson')}</a>}
        <button type="button" onClick={onRetry} className="touch-target flex-1 rounded-xl border-2 border-primary-300 px-4 font-semibold text-primary-700 hover:bg-primary-50 dark:border-primary-700 dark:text-primary-200 dark:hover:bg-primary-950">{uiText(uiLocale, 'retryLesson')}</button>
        <a href={kind === 'vocab' ? '/vocabulary' : '/lessons'} className="touch-target w-full rounded-xl px-4 font-semibold text-slate-700 underline underline-offset-4 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800">{uiText(uiLocale, kind === 'vocab' ? 'backVocabulary' : 'backLessons')}</a>
      </footer>
    </div>
  );

  if (!open) return null;
  return dismissed ? (
    <section ref={summaryRef} aria-labelledby={id} className="overflow-hidden rounded-3xl border-2 border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-800">{content}</section>
  ) : (
    <Dialog open onClose={() => setDismissed(true)} labelledBy={id} className="max-w-lg">
      <Suspense fallback={null}><ConfettiBurst trigger={open} /></Suspense>
      {content}
    </Dialog>
  );
}
