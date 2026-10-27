import { useId, type KeyboardEvent } from 'react';
import { ArrowRight, Check, Eye, Lightbulb, MessageSquareText, RotateCcw, SkipForward, X } from 'lucide-react';
import Dialog from './Dialog.js';
import { uiText } from '../lib/ui-labels.js';

export type FeedbackResult = 'correct' | 'wrong';
export interface FeedbackPoints { awarded: number; base: number; firstTry: number; streak: number }

interface Props {
  result: FeedbackResult;
  uiLocale: string;
  points: FeedbackPoints | null;
  correctAnswer: string;
  userAnswer: string | null;
  explanation?: string;
  proTip?: string;
  onNext: () => void;
  onRetry: () => void;
  onSkip: () => void;
  /** Hides the modal to look at the question again without leaving the feedback state. */
  onMinimize: () => void;
}

function ResultIcon({ result }: { result: FeedbackResult }) {
  return result === 'correct' ? (
    <span className="feedback-icon flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white dark:bg-emerald-500 dark:text-emerald-950" aria-hidden="true">
      <Check className="h-7 w-7" strokeWidth={3} />
    </span>
  ) : (
    <span className="feedback-icon wrong-shake flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-rose-600 text-white dark:bg-rose-500 dark:text-rose-950" aria-hidden="true">
      <X className="h-7 w-7" strokeWidth={3} />
    </span>
  );
}

/**
 * Result of a checked exercise shown as a modal: bottom sheet on mobile and
 * centered card on desktop, so the outcome never requires scrolling.
 */
export default function FeedbackModal({ result, uiLocale, points, correctAnswer, userAnswer, explanation, proTip, onNext, onRetry, onSkip, onMinimize }: Props) {
  const id = useId();
  const correct = result === 'correct';
  const t = (key: Parameters<typeof uiText>[1], params?: Record<string, string | number>) => uiText(uiLocale, key, params);
  const bonuses = points ? ([['basePoints', points.base], ['firstTryBonus', points.firstTry], ['streakBonus', points.streak]] as const).filter(([, value]) => value > 0) : [];
  // Holding Enter after "Check" must not jump through several questions.
  const guardRepeat = (event: KeyboardEvent) => { if (event.repeat && event.key === 'Enter') event.preventDefault(); };

  return (
    <Dialog open onClose={onMinimize} labelledBy={id + '-title'} describedBy={id + '-body'} className={`feedback-dialog ${correct ? 'feedback-dialog--correct' : 'feedback-dialog--wrong'}`}>
      <div data-cy="feedback" data-result={result} className="dialog-layout" onKeyDown={guardRepeat}>
        <header className={`flex items-start gap-3 p-4 sm:gap-4 sm:p-5 ${correct ? 'bg-emerald-50 dark:bg-emerald-950/60' : 'bg-rose-50 dark:bg-rose-950/60'}`}>
          <ResultIcon result={result} />
          <div className="min-w-0 flex-1 pt-1">
            <h2 id={id + '-title'} className={`font-display text-2xl font-bold ${correct ? 'text-emerald-900 dark:text-emerald-100' : 'text-rose-900 dark:text-rose-100'}`}>
              {t(correct ? 'correct' : 'incorrect')}
            </h2>
            {correct && points && points.awarded > 0 && (
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="rounded-full bg-emerald-600 px-3 py-1 font-bold text-white dark:bg-emerald-500 dark:text-emerald-950">{t('pointsGained', { count: points.awarded })}</span>
                {bonuses.length > 1 && <span className="text-emerald-800 dark:text-emerald-200">{bonuses.map(([key, value]) => `${t(key)} +${value}`).join(' · ')}</span>}
              </div>
            )}
          </div>
          <button type="button" onClick={onMinimize} className="touch-target -mr-2 -mt-2 shrink-0 rounded-xl text-slate-600 hover:bg-white/70 dark:text-slate-300 dark:hover:bg-slate-900/60" aria-label={t('viewQuestion')} title={t('viewQuestion')}>
            <X className="h-5 w-5" aria-hidden="true" />
          </button>
        </header>

        <div id={id + '-body'} className="dialog-body space-y-4">
          {!correct && (
            <dl className="space-y-2">
              {userAnswer && (
                <div className="rounded-2xl border-2 border-rose-200 bg-rose-50/60 px-4 py-3 dark:border-rose-900 dark:bg-rose-950/30">
                  <dt className="text-xs font-semibold uppercase tracking-wide text-rose-700 dark:text-rose-300">{t('yourAnswer')}</dt>
                  <dd className="mt-1 text-lg text-rose-900 line-through decoration-2 dark:text-rose-100">{userAnswer}</dd>
                </div>
              )}
              <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50 px-4 py-3 dark:border-emerald-800 dark:bg-emerald-950/40">
                <dt className="text-xs font-semibold uppercase tracking-wide text-emerald-700 dark:text-emerald-300">{t('rightAnswer')}</dt>
                <dd className="mt-1 text-lg font-bold text-emerald-900 dark:text-emerald-100">{correctAnswer}</dd>
              </div>
            </dl>
          )}
          {explanation && (
            <section aria-labelledby={id + '-why'} className="space-y-1.5">
              <h3 id={id + '-why'} className="flex items-center gap-2 text-sm font-bold text-slate-700 dark:text-slate-200">
                <MessageSquareText className="h-4 w-4 text-primary-700 dark:text-primary-300" aria-hidden="true" />{t('whyWorks')}
              </h3>
              <p className="text-base leading-relaxed text-slate-800 dark:text-slate-100">{explanation}</p>
            </section>
          )}
          {proTip && (
            <aside className="flex gap-3 rounded-2xl border-2 border-amber-200 bg-amber-50 p-4 text-amber-950 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
              <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-amber-600 dark:text-amber-400" aria-hidden="true" />
              <p>{!proTip.trimStart().toLocaleLowerCase().startsWith(t('proTip').toLocaleLowerCase()) && <span className="font-bold">{t('proTip')}: </span>}{proTip}</p>
            </aside>
          )}
        </div>

        <footer className="dialog-footer space-y-2">
          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
            {correct ? (
              <button type="button" data-cy="next" data-dialog-autofocus onClick={onNext} className="button-primary w-full gap-2 sm:w-auto">
                {t('next')}<ArrowRight className="h-5 w-5" aria-hidden="true" />
              </button>
            ) : (
              <>
                <button type="button" onClick={onSkip} className="touch-target gap-2 rounded-xl border-2 border-slate-300 px-4 font-semibold hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800">
                  <SkipForward className="h-4 w-4" aria-hidden="true" />{t('skip')}
                </button>
                <button type="button" data-cy="retry" data-dialog-autofocus onClick={onRetry} className="button-primary w-full gap-2 sm:w-auto">
                  <RotateCcw className="h-5 w-5" aria-hidden="true" />{t('tryAgain')}
                </button>
              </>
            )}
          </div>
          <p className="feedback-key-hint hidden text-right text-xs text-slate-500 dark:text-slate-400">{t(correct ? 'enterContinue' : 'enterRetry')}</p>
        </footer>
      </div>
    </Dialog>
  );
}

interface BarProps { result: FeedbackResult; uiLocale: string; onShow: () => void; onNext: () => void; onRetry: () => void }

/** Compact, always-visible result bar shown while the user reviews the question. */
export function FeedbackBar({ result, uiLocale, onShow, onNext, onRetry }: BarProps) {
  const correct = result === 'correct';
  return (
    <div role="region" aria-label={uiText(uiLocale, correct ? 'correct' : 'incorrect')} className={`feedback-bar fade-in-up ${correct ? 'border-emerald-300 dark:border-emerald-800' : 'border-rose-300 dark:border-rose-800'}`}>
      <div className="mx-auto flex max-w-3xl items-center gap-3">
        <span className={`h-3 w-3 shrink-0 rounded-full ${correct ? 'bg-emerald-500' : 'bg-rose-500'}`} aria-hidden="true" />
        <p className={`min-w-0 flex-1 font-bold ${correct ? 'text-emerald-800 dark:text-emerald-200' : 'text-rose-800 dark:text-rose-200'}`}>{uiText(uiLocale, correct ? 'correct' : 'incorrect')}</p>
        <button type="button" onClick={onShow} className="touch-target gap-2 rounded-xl border-2 border-slate-300 px-3 text-sm font-semibold hover:bg-slate-100 dark:border-slate-600 dark:hover:bg-slate-800" aria-label={uiText(uiLocale, 'showFeedback')}>
          <Eye className="h-4 w-4" aria-hidden="true" /><span className="hidden sm:inline">{uiText(uiLocale, 'showFeedback')}</span>
        </button>
        {correct
          ? <button type="button" data-cy="next" onClick={onNext} className="button-primary gap-2">{uiText(uiLocale, 'next')}<ArrowRight className="h-5 w-5" aria-hidden="true" /></button>
          : <button type="button" data-cy="retry" onClick={onRetry} className="button-primary gap-2"><RotateCcw className="h-5 w-5" aria-hidden="true" />{uiText(uiLocale, 'tryAgain')}</button>}
      </div>
    </div>
  );
}
