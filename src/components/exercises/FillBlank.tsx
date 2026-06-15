'use client';

import { useState, useRef, useEffect } from 'react';
import type { FillBlankData, FillBlankAnswer } from '../../types.js';

interface Props {
  data: FillBlankData;
  answer: FillBlankAnswer;
  onAnswer: (userAnswer: string, correct: boolean) => void;
  disabled?: boolean;
}

/**
 * FillBlank
 * ─────────
 * Renders a sentence with a single blank for the user to fill in.
 *
 * Two input modes:
 *   - With `data.options`: chips the user clicks to select. The selected chip
 *     is highlighted, the sentence shows the chosen word inline, and there is
 *     also a "Check" button (Enter / Space works as well). This replaces the
 *     previous native <select> which was easy to miss.
 *   - Without `options`: a free-text <input> inline in the sentence.
 *
 * The blank marker can be either:
 *   - `{{i18n:KEY}}`  (the i18n placeholder resolved upstream)
 *   - `____`          (four underscores — used in authored content)
 * We split the sentence on whichever marker is present so the input always
 * shows up in the right place.
 */
export default function FillBlank({ data, answer, onAnswer, disabled = false }: Props) {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Detect either the i18n placeholder or the literal `____` blank.
  const i18nRe = /\{\{i18n:[^}]+\}\}/g;
  const blankRe = /_{2,}/g;
  const sentence = data.sentence;
  const i18nMatches = sentence.match(i18nRe);
  const blankMarkerRe = i18nMatches ? i18nRe : blankRe;

  const parts = sentence.split(blankMarkerRe);
  const matches = sentence.match(blankMarkerRe) ?? [];

  // Reset the input value whenever we move to a new exercise. Without this,
  // the previous question's selection is still on the controlled <select>,
  // which is confusing (the user sees an old option pre-selected) and
  // breaks the auto-submit because clicking the same option doesn't fire
  // onChange.
  useEffect(() => {
    setValue('');
  }, [sentence]);

  useEffect(() => {
    // Focus only on first mount; subsequent resets (above) intentionally
    // do not steal focus.
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

  return (
    <div className="flex flex-col gap-4">
      <div
        className="rounded-2xl border border-slate-200 bg-white p-6 font-display text-lg leading-relaxed text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100"
        style={{ lineHeight: '2' }}
      >
        {parts.map((part, i) => (
          <span key={i}>
            {part}
            {i < matches.length && (
              <>
                {data.options && data.options.length > 0 ? (
                  <select
                    className="mx-2 inline-block min-w-[7rem] cursor-pointer rounded-lg border-2 border-primary-500 bg-white px-3 py-1.5 text-base font-semibold text-primary focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:border-primary-500 dark:bg-slate-800"
                    value={value}
                    onChange={(e) => {
                      setValue(e.target.value);
                      // Auto-submit when a chip is chosen — feels like a quiz, not a form.
                      submit(e.target.value);
                    }}
                    disabled={disabled}
                    aria-label="Fill in the blank"
                  >
                    <option value="" disabled>
                      — pick —
                    </option>
                    {data.options.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                ) : (
                  <input
                    ref={inputRef}
                    type="text"
                    className="mx-2 inline-block w-40 rounded-md border-b-2 border-primary-500 bg-transparent text-center text-lg font-semibold text-primary outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && submit()}
                    disabled={disabled}
                    aria-label="Fill in the blank"
                    placeholder="type here"
                  />
                )}
              </>
            )}
          </span>
        ))}
      </div>
      <div className="flex items-center justify-end gap-3">
        <span className="text-xs text-slate-500 dark:text-slate-400">
          Press <kbd className="rounded border border-slate-300 bg-white px-1.5 py-0.5 font-mono text-[10px] dark:border-slate-600 dark:bg-slate-800">Enter</kbd> to check
        </span>
        <button
          type="button"
          onClick={() => submit()}
          disabled={disabled || !value.trim()}
          className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 dark:disabled:bg-slate-700 dark:disabled:text-slate-500"
        >
          Check
        </button>
      </div>
    </div>
  );
}
