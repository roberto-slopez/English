'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { TrueFalseData, TrueFalseAnswer } from '../../types.js';

interface Props {
  data: TrueFalseData;
  answer: TrueFalseAnswer;
  onAnswer: (userAnswer: boolean, correct: boolean) => void;
  disabled?: boolean;
}

export default function TrueFalse({ data, answer, onAnswer, disabled = false }: Props) {
  const [picked, setPicked] = useState<boolean | null>(null);

  const submit = () => {
    if (disabled || picked === null) return;
    onAnswer(picked, picked === answer.correct);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="rounded-2xl border-2 border-primary-100 bg-white p-6 text-center font-display text-lg leading-relaxed text-slate-900 dark:border-primary-800 dark:bg-slate-800 dark:text-slate-100">
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
          whileHover={disabled ? undefined : { scale: 1.02 }}
          whileTap={disabled ? undefined : { scale: 0.98 }}
          className={`rounded-2xl border-2 px-4 py-4 text-base font-semibold transition ${
            picked === true
              ? 'border-success-500 bg-success-500 text-white shadow-md'
              : 'border-success-500/40 bg-white text-success-600 hover:bg-success-500/10 dark:bg-slate-800 dark:hover:bg-success-500/20'
          } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
        >
          ✓ True
        </motion.button>
        <motion.button
          type="button"
          onClick={() => setPicked(false)}
          disabled={disabled}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.25, ease: 'easeOut' }}
          whileHover={disabled ? undefined : { scale: 1.02 }}
          whileTap={disabled ? undefined : { scale: 0.98 }}
          className={`rounded-2xl border-2 px-4 py-4 text-base font-semibold transition ${
            picked === false
              ? 'border-danger-500 bg-danger-500 text-white shadow-md'
              : 'border-danger-500/40 bg-white text-danger-600 hover:bg-danger-500/10 dark:bg-slate-800 dark:hover:bg-danger-500/20'
          } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
        >
          ✗ False
        </motion.button>
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={submit}
          disabled={disabled || picked === null}
          className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Check
        </button>
      </div>
    </div>
  );
}
