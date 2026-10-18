import { useEffect } from 'react';
import { uiText } from '../../lib/ui-labels.js';
import { useExerciseDraft, type DraftProps } from '../../lib/use-exercise-draft.js';
import type { TrueFalseData, TrueFalseAnswer } from '../../types.js';

interface Props extends DraftProps {
  data: TrueFalseData;
  answer: TrueFalseAnswer;
  onAnswer: (userAnswer: boolean) => void;
  disabled?: boolean;
  uiLocale?: string;
}

export default function TrueFalse({ data, onAnswer, disabled = false, uiLocale = 'en', draft, onDraft }: Props) {
  const [picked, setPicked] = useExerciseDraft<boolean | null>(null, typeof draft === 'boolean' ? draft : null, onDraft);

  const submit = () => {
    if (disabled || picked === null) return;
    onAnswer(picked);
  };

  useEffect(() => {
    if (disabled) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat || e.ctrlKey || e.altKey || e.metaKey || document.querySelector('dialog[open]')) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest('input,textarea,select,[contenteditable="true"]')) return;
      if (e.key === '1') {
        e.preventDefault();
        setPicked(true);
      } else if (e.key === '2') {
        e.preventDefault();
        setPicked(false);
      } else if (e.key === 'Enter' && picked !== null && !target?.closest('button,a')) {
        e.preventDefault();
        onAnswer(picked);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [disabled, picked, setPicked, onAnswer]);

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 text-center font-display text-lg font-medium leading-relaxed text-slate-900 shadow-sm dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-100 sm:text-xl">
        {data.statement}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          aria-pressed={picked === true}
          onClick={() => setPicked(true)}
          disabled={disabled}
          className={`touch-target flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 px-4 py-4 text-lg font-bold transition ${
            picked === true
              ? 'border-emerald-700 bg-emerald-700 text-white shadow-md'
              : 'border-emerald-500/40 bg-white text-emerald-700 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-emerald-950/40 dark:text-emerald-300'
          } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
        >
          <span>✓</span>
          <span>{uiText(uiLocale,'true')}</span>
        </button>
        <button
          type="button"
          aria-pressed={picked === false}
          onClick={() => setPicked(false)}
          disabled={disabled}
          className={`touch-target flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 px-4 py-4 text-lg font-bold transition ${
            picked === false
              ? 'border-rose-600 bg-rose-600 text-white shadow-md'
              : 'border-rose-500/40 bg-white text-rose-700 hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:text-rose-300'
          } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
        >
          <span>✗</span>
          <span>{uiText(uiLocale,'false')}</span>
        </button>
      </div>
      <div className="exercise-actions">
        <button
          type="button"
          data-cy="check" onClick={submit}
          disabled={disabled || picked === null}
          className="button-primary w-full sm:w-auto"
        >
          {uiText(uiLocale,'check')}
        </button>
      </div>
    </div>
  );
}
