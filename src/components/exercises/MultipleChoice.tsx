'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import type { MultipleChoiceData, MultipleChoiceAnswer } from '../../types.js';

interface Props {
  data: MultipleChoiceData;
  answer: MultipleChoiceAnswer;
  onAnswer: (userAnswer: number | number[], correct: boolean) => void;
  disabled?: boolean;
}

export default function MultipleChoice({ data, answer, onAnswer, disabled = false }: Props) {
  const isMulti = !!answer.correctIndices;
  const [picked, setPicked] = useState<number | null>(null);
  const [multiPicked, setMultiPicked] = useState<Set<number>>(new Set());

  // Reset selection when we move to a new exercise. The component does
  // not unmount between exercises, so the previous picked index would
  // otherwise stay highlighted (and visually it would suggest the wrong
  // option is still selected).
  useEffect(() => {
    setPicked(null);
    setMultiPicked(new Set());
  }, [data]);

  const submit = () => {
    if (disabled) return;
    if (isMulti) {
      if (multiPicked.size === 0) return;
      onAnswer(Array.from(multiPicked).sort((a, b) => a - b), false);
    } else {
      if (picked === null) return;
      onAnswer(picked, false);
    }
  };

  const toggleMulti = (i: number) => {
    if (disabled) return;
    setMultiPicked((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });
  };

  return (
    <div className="flex flex-col gap-4">
      {isMulti && (
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Select all that apply
        </p>
      )}
      <div className="grid gap-3" role={isMulti ? 'group' : 'radiogroup'}>
        {data.choices.map((choice, i) => {
          const selected = isMulti ? multiPicked.has(i) : picked === i;
          return (
            <motion.button
              key={i}
              type="button"
              role={isMulti ? 'checkbox' : 'radio'}
              aria-checked={selected}
              onClick={() => (isMulti ? toggleMulti(i) : setPicked(i))}
              disabled={disabled}
              // Stagger the entrance so choices slide in one after another.
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.25, ease: 'easeOut' }}
              whileHover={disabled ? undefined : { scale: 1.01 }}
              whileTap={disabled ? undefined : { scale: 0.99 }}
              className={`flex items-center gap-3 rounded-2xl border-2 px-5 py-4 text-left text-base font-medium transition ${
                selected
                  ? 'border-primary-500 bg-primary-50 text-primary-800 dark:bg-primary-700 dark:text-white'
                  : 'border-slate-200 bg-white text-slate-900 hover:border-primary-300 hover:bg-primary-50/40 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-primary-800/30'
              } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
            >
              <span
                className={`flex h-6 w-6 shrink-0 items-center justify-center border-2 text-xs font-bold ${
                  isMulti ? 'rounded-sm' : 'rounded-full'
                } ${
                  selected
                    ? 'border-primary-500 bg-primary-500 text-white'
                    : 'border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-300'
                }`}
                aria-hidden="true"
              >
                {isMulti ? (selected ? '✓' : '') : String.fromCharCode(65 + i)}
              </span>
              <span>{choice}</span>
            </motion.button>
          );
        })}
      </div>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={submit}
          disabled={disabled || (isMulti ? multiPicked.size === 0 : picked === null)}
          className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 dark:disabled:bg-slate-700 dark:disabled:text-slate-500"
        >
          Check
        </button>
      </div>
    </div>
  );
}
