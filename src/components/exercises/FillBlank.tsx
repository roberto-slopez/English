'use client';

import { useState, useRef, useEffect, useMemo } from 'react';
import { Volume2 } from 'lucide-react';
import type { FillBlankData, FillBlankAnswer } from '../../types.js';
import { shuffleArray } from '../../lib/utils/shuffle.js';
import { speakEnglish } from '../../lib/utils/speech.js';
import { getCheckLabel, getSelectOptionLabel, getEnterOrCheckHint } from '../../lib/utils/i18n-ui.js';

interface Props {
  data: FillBlankData;
  answer: FillBlankAnswer;
  onAnswer: (userAnswer: string, correct: boolean) => void;
  disabled?: boolean;
  uiLocale?: string;
}

export default function FillBlank({ data, answer, onAnswer, disabled = false, uiLocale = 'es' }: Props) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Shuffle option chips on load so option order is deterministic across SSR/CSR
  const shuffledOptions = useMemo(() => {
    return data.options ? shuffleArray(data.options, data.sentence) : [];
  }, [data.options, data.sentence]);

  const i18nRe = /\{\{i18n:[^}]+\}\}/g;
  const blankRe = /_{2,}/g;
  const sentence = data.sentence;
  const i18nMatches = sentence.match(i18nRe);
  const blankMarkerRe = i18nMatches ? i18nRe : blankRe;

  const parts = sentence.split(blankMarkerRe);
  const matches = sentence.match(blankMarkerRe) ?? [];

  useEffect(() => {
    setValue('');
  }, [sentence]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const submit = (override?: string) => {
    if (disabled) return;
    const finalValue = (override ?? value).trim();
    if (!finalValue) return;
    const correct = answer.caseSensitive
      ? finalValue === answer.correct.trim()
      : finalValue.toLowerCase() === answer.correct.trim().toLowerCase();
    onAnswer(finalValue, correct);
  };

  const handleChipClick = (opt: string) => {
    if (disabled) return;
    setValue(opt);
    speakEnglish(opt);
  };

  const checkLabel = getCheckLabel(uiLocale);
  const hintText = getEnterOrCheckHint(uiLocale);

  return (
    <div className="flex flex-col gap-5">
      {/* Sentence Box */}
      <div
        className="rounded-2xl border-2 border-slate-200 bg-white p-6 font-display text-lg font-medium leading-relaxed text-slate-900 shadow-sm dark:border-slate-700/80 dark:bg-slate-800 dark:text-slate-100 sm:text-xl"
        style={{ lineHeight: '2.2' }}
      >
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < matches.length && (
              <span className="mx-1 inline-flex items-center">
                {value ? (
                  <span className="inline-block rounded-lg border-2 border-primary-500 bg-primary-50 px-3 py-1 font-bold text-primary-700 dark:bg-primary-950/80 dark:text-primary-300">
                    {value}
                  </span>
                ) : (
                  <span className="inline-block min-w-[5rem] border-b-4 border-dashed border-primary-400 text-center font-bold text-primary-500 dark:border-primary-400">
                    _____
                  </span>
                )}
              </span>
            )}
          </span>
        ))}
      </div>

      {/* Option Chips for Mobile & Desktop */}
      {shuffledOptions.length > 0 ? (
        <div className="flex flex-col gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {getSelectOptionLabel(uiLocale)}
          </span>
          <div className="flex flex-wrap gap-2.5">
            {shuffledOptions.map((opt) => {
              const isSelected = value === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  onClick={() => handleChipClick(opt)}
                  disabled={disabled}
                  className={`touch-target min-h-[48px] rounded-xl border-2 px-5 py-2.5 text-base font-semibold transition ${
                    isSelected
                      ? 'border-primary-500 bg-primary-600 text-white shadow-sm dark:bg-primary-500'
                      : 'border-slate-200 bg-white text-slate-800 hover:border-primary-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100'
                  } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
                >
                  {opt}
                </button>
              );
            })}
          </div>
        </div>
      ) : (
        /* Manual input fallback */
        <div className="flex flex-col gap-2">
          <input
            ref={inputRef}
            type="text"
            className="touch-target min-h-[48px] w-full rounded-xl border-2 border-slate-300 bg-white px-4 text-lg font-semibold text-slate-900 outline-none focus:border-primary-500 dark:border-slate-700 dark:bg-slate-800 dark:text-white"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && submit()}
            disabled={disabled}
            aria-label="Escribe tu respuesta"
            placeholder="..."
          />
        </div>
      )}

      {/* Action Bar */}
      <div className="flex items-center justify-between gap-3 pt-2">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {hintText}
        </span>
        <button
          type="button"
          onClick={() => submit()}
          disabled={disabled || !value.trim()}
          className="touch-target flex min-h-[48px] items-center justify-center rounded-2xl bg-gradient-to-r from-primary-600 to-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:from-primary-700 hover:to-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-none disabled:bg-slate-300 disabled:text-slate-500 dark:from-primary-500 dark:to-indigo-500 dark:hover:from-primary-600 dark:hover:to-indigo-600 dark:disabled:bg-slate-800 dark:disabled:text-slate-600"
        >
          {checkLabel}
        </button>
      </div>
    </div>
  );
}
