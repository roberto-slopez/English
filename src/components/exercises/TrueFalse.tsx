import { useState } from 'react';
import { motion } from 'framer-motion';
import type { TrueFalseData, TrueFalseAnswer } from '../../types.js';
import { getCheckLabel } from '../../lib/utils/i18n-ui.js';

interface Props {
  data: TrueFalseData;
  answer: TrueFalseAnswer;
  onAnswer: (userAnswer: boolean, correct: boolean) => void;
  disabled?: boolean;
  uiLocale?: string;
}

export default function TrueFalse({ data, answer, onAnswer, disabled = false, uiLocale = 'es' }: Props) {
  const [picked, setPicked] = useState<boolean | null>(null);

  const submit = () => {
    if (disabled || picked === null) return;
    onAnswer(picked, picked === answer.correct);
  };

  const isEs = uiLocale === 'es';

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border-2 border-slate-200 bg-white p-6 text-center font-display text-lg font-medium leading-relaxed text-slate-900 shadow-sm dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-100 sm:text-xl">
        {data.statement}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <motion.button
          type="button"
          onClick={() => setPicked(true)}
          disabled={disabled}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.25, ease: 'easeOut' }}
          whileTap={disabled ? undefined : { scale: 0.98 }}
          className={`touch-target flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 px-4 py-4 text-lg font-bold transition ${
            picked === true
              ? 'border-emerald-600 bg-emerald-600 text-white shadow-md'
              : 'border-emerald-500/40 bg-white text-emerald-700 hover:bg-emerald-50 dark:bg-slate-800 dark:hover:bg-emerald-950/40 dark:text-emerald-300'
          } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
        >
          <span>✓</span>
          <span>{isEs ? 'Verdadero' : 'True'}</span>
        </motion.button>
        <motion.button
          type="button"
          onClick={() => setPicked(false)}
          disabled={disabled}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.25, ease: 'easeOut' }}
          whileTap={disabled ? undefined : { scale: 0.98 }}
          className={`touch-target flex min-h-[52px] items-center justify-center gap-2 rounded-2xl border-2 px-4 py-4 text-lg font-bold transition ${
            picked === false
              ? 'border-rose-600 bg-rose-600 text-white shadow-md'
              : 'border-rose-500/40 bg-white text-rose-700 hover:bg-rose-50 dark:bg-slate-800 dark:hover:bg-rose-950/40 dark:text-rose-300'
          } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
        >
          <span>✗</span>
          <span>{isEs ? 'Falso' : 'False'}</span>
        </motion.button>
      </div>
      <div className="mt-2 flex justify-end">
        <button
          type="button"
          onClick={submit}
          disabled={disabled || picked === null}
          className="touch-target flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-primary-600 to-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:from-primary-700 hover:to-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-none disabled:bg-slate-300 disabled:text-slate-500 dark:from-primary-500 dark:to-indigo-500 dark:hover:from-primary-600 dark:hover:to-indigo-600 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 sm:w-auto"
        >
          {getCheckLabel(uiLocale)}
        </button>
      </div>
    </div>
  );
}
