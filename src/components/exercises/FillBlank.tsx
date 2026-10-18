'use client';

import { useRef, useEffect, useMemo } from 'react';
import { uiText } from '../../lib/ui-labels.js';
import { useExerciseDraft, type DraftProps } from '../../lib/use-exercise-draft.js';
import type { FillBlankData, FillBlankAnswer } from '../../types.js';
import { shuffleArray } from '../../lib/utils/shuffle.js';
import { speakEnglish } from '../../lib/utils/speech.js';

interface Props extends DraftProps {
  data: FillBlankData;
  answer: FillBlankAnswer;
  onAnswer: (userAnswer: string) => void;
  disabled?: boolean;
  uiLocale?: string;
}

export default function FillBlank({ data, onAnswer, disabled = false, uiLocale = 'en', draft, onDraft }: Props) {
  const [value, setValue] = useExerciseDraft<string>('', typeof draft === 'string' ? draft : null, onDraft);
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
    inputRef.current?.focus();
  }, []);

  const submit = (override?: string) => {
    if (disabled) return;
    const finalValue = (override ?? value).trim();
    if (!finalValue) return;
    onAnswer(finalValue);
  };

  const handleChipClick = (opt: string) => {
    if (disabled) return;
    setValue(opt);
    speakEnglish(opt);
  };

  useEffect(() => {
    if (disabled || shuffledOptions.length === 0) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat || e.ctrlKey || e.altKey || e.metaKey || document.querySelector('dialog[open]')) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest('input,textarea,select,[contenteditable="true"]')) return;
      if (/^[1-9]$/.test(e.key)) {
        const opt = shuffledOptions[Number(e.key) - 1];
        if (!opt) return;
        e.preventDefault();
        setValue(opt);
        speakEnglish(opt);
      } else if (e.key === 'Enter' && value.trim() && !target?.closest('button,a')) {
        e.preventDefault();
        onAnswer(value.trim());
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [disabled, shuffledOptions, value, setValue, onAnswer]);

  const checkLabel = uiText(uiLocale,'check');
  const hintText = uiText(uiLocale,'enterHint');

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
            {uiText(uiLocale,'selectOption')}
          </span>
          <div className="flex flex-wrap gap-2.5">
            {shuffledOptions.map((opt) => {
              const isSelected = value === opt;
              return (
                <button
                  key={opt}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => handleChipClick(opt)}
                  disabled={disabled}
                  className={`touch-target min-h-[48px] rounded-xl border-2 px-5 py-2.5 text-base font-semibold transition ${
                    isSelected
                      ? 'border-primary-500 bg-primary-600 text-white shadow-sm dark:bg-primary-600'
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
            aria-label={uiText(uiLocale,'answerLabel')}
            placeholder="..."
          />
        </div>
      )}

      {/* Action Bar */}
      <div className="exercise-actions flex items-center justify-between gap-3">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          {hintText}
        </span>
        <button
          type="button"
          data-cy="check" onClick={() => submit()}
          disabled={disabled || !value.trim()}
          className="button-primary w-full sm:w-auto"
        >
          {checkLabel}
        </button>
      </div>
    </div>
  );
}
