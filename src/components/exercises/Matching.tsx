'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { MatchingData, MatchingAnswer } from '../../types.js';
import { shuffleArray } from '../../lib/utils/shuffle.js';
import { getCheckLabel } from '../../lib/utils/i18n-ui.js';

interface Props {
  data: MatchingData;
  answer: MatchingAnswer;
  onAnswer: (userAnswer: { leftIndex: number; rightIndex: number }[], correct: boolean) => void;
  disabled?: boolean;
  uiLocale?: string;
}

export default function Matching({ data, answer, onAnswer, disabled = false, uiLocale = 'es' }: Props) {
  const [pairs, setPairs] = useState<Map<number, number>>(new Map());
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);

  // Randomly shuffle right column order on exercise load (seeded for SSR/CSR consistency)
  const rightOrder = useMemo(() => {
    const indices = Array.from({ length: data.right.length }, (_, i) => i);
    const seed = JSON.stringify(data.left) + JSON.stringify(data.right);
    return shuffleArray(indices, seed);
  }, [data]);

  const toggleLeft = (i: number) => {
    if (disabled) return;
    setSelectedLeft((prev) => (prev === i ? null : i));
  };

  const clickRight = (originalRightIndex: number) => {
    if (disabled || selectedLeft === null) return;
    setPairs((prev) => {
      const next = new Map(prev);
      // Unpair if already assigned elsewhere
      for (const [l, r] of next) {
        if (r === originalRightIndex) next.delete(l);
      }
      next.set(selectedLeft, originalRightIndex);
      return next;
    });
    setSelectedLeft(null);
  };

  const unpair = (leftIndex: number) => {
    if (disabled) return;
    setPairs((prev) => {
      const next = new Map(prev);
      next.delete(leftIndex);
      return next;
    });
  };

  const submit = () => {
    if (disabled || pairs.size !== data.left.length) return;
    const userPairs = Array.from(pairs.entries()).map(([leftIndex, rightIndex]) => ({
      leftIndex,
      rightIndex,
    }));

    // Check correctness against answer.pairs
    const isCorrect =
      userPairs.length === answer.pairs.length &&
      userPairs.every((up) =>
        answer.pairs.some((ap) => ap.leftIndex === up.leftIndex && ap.rightIndex === up.rightIndex)
      );

    onAnswer(userPairs, isCorrect);
  };

  return (
    <div className="flex flex-col gap-5">
      <p className="text-sm font-medium text-slate-600 dark:text-slate-300">
        Toca una palabra de la izquierda y luego toca su pareja correspondiente a la derecha.
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Left column */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Columna A
          </span>
          {data.left.map((item, i) => {
            const isSelected = selectedLeft === i;
            const isPaired = pairs.has(i);
            return (
              <motion.button
                key={i}
                type="button"
                onClick={() => toggleLeft(i)}
                disabled={disabled}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.2 }}
                whileTap={disabled ? undefined : { scale: 0.98 }}
                className={`touch-target flex min-h-[50px] items-center justify-between rounded-2xl border-2 px-4 py-3 text-left text-base font-semibold transition ${
                  isSelected
                    ? 'border-primary-500 bg-primary-100 text-primary-900 dark:border-primary-400 dark:bg-primary-900/80 dark:text-white'
                    : isPaired
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-500/80 dark:bg-emerald-950/60 dark:text-emerald-200'
                    : 'border-slate-200 bg-white text-slate-900 hover:border-primary-300 dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-100'
                } ${disabled ? 'cursor-not-allowed opacity-65' : ''}`}
              >
                <span className="truncate">{item}</span>
                {isPaired && (
                  <span
                    onClick={(e) => {
                      e.stopPropagation();
                      unpair(i);
                    }}
                    role="button"
                    tabIndex={0}
                    aria-label="Eliminar pareja"
                    className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-200/80 text-xs font-bold text-slate-700 hover:bg-rose-100 hover:text-rose-700 dark:bg-slate-700 dark:text-slate-300 dark:hover:bg-rose-900/60 dark:hover:text-rose-200"
                  >
                    ✕
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Right column (shuffled) */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Columna B
          </span>
          {rightOrder.map((originalIndex, displayPos) => {
            const isPaired = Array.from(pairs.values()).includes(originalIndex);
            return (
              <motion.button
                key={originalIndex}
                type="button"
                onClick={() => clickRight(originalIndex)}
                disabled={disabled}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: displayPos * 0.04, duration: 0.2 }}
                whileTap={disabled ? undefined : { scale: 0.98 }}
                className={`touch-target min-h-[50px] rounded-2xl border-2 px-4 py-3 text-left text-base font-semibold transition ${
                  isPaired
                    ? 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:border-emerald-500/80 dark:bg-emerald-950/60 dark:text-emerald-200'
                    : selectedLeft !== null
                    ? 'border-primary-300 bg-white text-slate-900 hover:border-primary-500 hover:bg-primary-50 dark:border-primary-700 dark:bg-slate-800 dark:text-slate-100'
                    : 'border-slate-200 bg-white text-slate-900 hover:border-primary-300 dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-100'
                } ${disabled ? 'cursor-not-allowed opacity-65' : ''}`}
              >
                {data.right[originalIndex]}
              </motion.button>
            );
          })}
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 pt-2">
        <span className="text-sm font-semibold text-slate-600 dark:text-slate-400">
          {pairs.size} / {data.left.length} parejas unidas
        </span>
        <button
          type="button"
          onClick={submit}
          disabled={disabled || pairs.size !== data.left.length}
          className="touch-target flex min-h-[48px] items-center justify-center rounded-2xl bg-gradient-to-r from-primary-600 to-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:from-primary-700 hover:to-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-none disabled:bg-slate-300 disabled:text-slate-500 dark:from-primary-500 dark:to-indigo-500 dark:hover:from-primary-600 dark:hover:to-indigo-600 dark:disabled:bg-slate-800 dark:disabled:text-slate-600"
        >
          {getCheckLabel(uiLocale)}
        </button>
      </div>
    </div>
  );
}
