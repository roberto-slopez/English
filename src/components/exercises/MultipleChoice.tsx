'use client';

import { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { MultipleChoiceData, MultipleChoiceAnswer } from '../../types.js';
import { shuffleMultipleChoice, shuffleMultipleChoiceMulti } from '../../lib/utils/shuffle.js';
import { speakEnglish } from '../../lib/utils/speech.js';
import { getCheckLabel, getSelectAllCorrectLabel } from '../../lib/utils/i18n-ui.js';

interface Props {
  data: MultipleChoiceData;
  answer: MultipleChoiceAnswer;
  onAnswer: (userAnswer: number | number[], correct: boolean) => void;
  disabled?: boolean;
  uiLocale?: string;
}

export default function MultipleChoice({ data, answer, onAnswer, disabled = false, uiLocale = 'es' }: Props) {
  const isMulti = !!answer.correctIndices;

  // Shuffle options on load so correct answers don't stay in fixed positions (seeded for SSR/CSR consistency)
  const { shuffledChoices, newCorrectIndex, newCorrectIndices } = useMemo(() => {
    const seed = JSON.stringify(data.choices);
    if (isMulti) {
      const { shuffledChoices, newCorrectIndices } = shuffleMultipleChoiceMulti(
        data.choices,
        answer.correctIndices ?? [],
        seed
      );
      return { shuffledChoices, newCorrectIndex: 0, newCorrectIndices };
    } else {
      const { shuffledChoices, newCorrectIndex } = shuffleMultipleChoice(
        data.choices,
        answer.correctIndex ?? 0,
        seed
      );
      return { shuffledChoices, newCorrectIndex, newCorrectIndices: [] };
    }
  }, [data, answer, isMulti]);

  const [picked, setPicked] = useState<number | null>(null);
  const [multiPicked, setMultiPicked] = useState<Set<number>>(new Set());

  useEffect(() => {
    setPicked(null);
    setMultiPicked(new Set());
  }, [data]);

  const selectOption = (i: number, choiceText: string) => {
    if (disabled) return;
    speakEnglish(choiceText);
    if (isMulti) {
      toggleMulti(i);
    } else {
      setPicked(i);
    }
  };

  const submit = () => {
    if (disabled) return;
    if (isMulti) {
      if (multiPicked.size === 0) return;
      const userPickedArray = Array.from(multiPicked).sort((a, b) => a - b);
      const isCorrect =
        userPickedArray.length === newCorrectIndices.length &&
        userPickedArray.every((idx) => newCorrectIndices.includes(idx));
      onAnswer(userPickedArray, isCorrect);
    } else {
      if (picked === null) return;
      const isCorrect = picked === newCorrectIndex;
      onAnswer(picked, isCorrect);
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

  const checkLabel = getCheckLabel(uiLocale);

  return (
    <div className="flex flex-col gap-4">
      {isMulti && (
        <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
          {getSelectAllCorrectLabel(uiLocale)}
        </p>
      )}
      <div className="grid gap-3" role={isMulti ? 'group' : 'radiogroup'}>
        {shuffledChoices.map((choice, i) => {
          const selected = isMulti ? multiPicked.has(i) : picked === i;
          return (
            <motion.button
              key={i}
              type="button"
              role={isMulti ? 'checkbox' : 'radio'}
              aria-checked={selected}
              onClick={() => selectOption(i, choice)}
              disabled={disabled}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.2 }}
              whileTap={disabled ? undefined : { scale: 0.99 }}
              className={`touch-target flex min-h-[52px] w-full items-center gap-3.5 rounded-2xl border-2 px-5 py-3.5 text-left text-base font-semibold transition ${
                selected
                  ? 'border-primary-500 bg-primary-50 text-primary-900 dark:bg-primary-900/60 dark:text-white dark:border-primary-400'
                  : 'border-slate-200 bg-white text-slate-900 hover:border-primary-300 hover:bg-primary-50/30 dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-slate-600 dark:hover:bg-slate-800/80'
              } ${disabled ? 'cursor-not-allowed opacity-65' : ''}`}
            >
              <span
                className={`flex h-7 w-7 shrink-0 items-center justify-center border-2 text-xs font-bold ${
                  isMulti ? 'rounded-md' : 'rounded-full'
                } ${
                  selected
                    ? 'border-primary-500 bg-primary-500 text-white dark:border-primary-400 dark:bg-primary-400 dark:text-slate-950'
                    : 'border-slate-300 text-slate-600 dark:border-slate-600 dark:text-slate-400'
                }`}
                aria-hidden="true"
              >
                {isMulti ? (selected ? '✓' : '') : String.fromCharCode(65 + i)}
              </span>
              <span className="flex-1 leading-snug">{choice}</span>
            </motion.button>
          );
        })}
      </div>

      <div className="mt-2 flex justify-end">
        <button
          type="button"
          onClick={submit}
          disabled={disabled || (isMulti ? multiPicked.size === 0 : picked === null)}
          className="touch-target flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-primary-600 to-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:from-primary-700 hover:to-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-none disabled:bg-slate-300 disabled:text-slate-500 dark:from-primary-500 dark:to-indigo-500 dark:hover:from-primary-600 dark:hover:to-indigo-600 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 sm:w-auto"
        >
          {checkLabel}
        </button>
      </div>
    </div>
  );
}
