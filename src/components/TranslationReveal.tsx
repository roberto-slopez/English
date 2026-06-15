'use client';

import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';

interface Props {
  uiLocale: string;
  nativeLocale: string | null;
  /** A representative key for this exercise (promptKey). The fetch happens server-side via /api/translate. */
  contextKey: string;
  contextValue: string;
  exerciseId: number;
}

/**
 * Floating "Translate" button. When clicked, opens a slide-down panel that
 * shows the current exercise context translated into the user's native locale.
 *
 * The actual translation is fetched from /api/translate?key=...&locale=... —
 * this means the panel works for any key the user clicks, and exercises are
 * already pre-translated. If the server has no translation, we just show
 * the English fallback.
 */
export default function TranslationReveal({
  uiLocale,
  nativeLocale,
  contextKey,
  contextValue,
}: Props) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [nativeText, setNativeText] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Don't render at all if no native locale is set, or if user is already
  // browsing in their native locale (no translation needed).
  if (!nativeLocale || nativeLocale === uiLocale) return null;

  useEffect(() => {
    if (!open || !contextKey) return;
    setLoading(true);
    setError(null);
    fetch(`/api/translate?key=${encodeURIComponent(contextKey)}&locale=${encodeURIComponent(nativeLocale)}`)
      .then((r) => r.json())
      .then((d) => {
        if (d && typeof d.value === 'string') {
          setNativeText(d.value === contextKey ? null : d.value);
        } else {
          setError('No translation available yet.');
        }
      })
      .catch(() => setError('Could not load translation.'))
      .finally(() => setLoading(false));
  }, [open, contextKey, nativeLocale]);

  return (
    <div className="mt-2 flex flex-col gap-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="pointer-events-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-primary-200 bg-white px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm transition hover:border-primary-400 hover:bg-primary-50 dark:border-primary-700 dark:bg-slate-800 dark:text-primary-200 dark:hover:bg-primary-800/30"
        aria-expanded={open}
        aria-label="Translate to your native language"
      >
        <Languages className="h-3.5 w-3.5" aria-hidden="true" />
        {open ? 'Hide translation' : 'Translate to my language'}
      </button>
      {open && (
        <div className="slide-down pointer-events-auto rounded-2xl border border-primary-200 bg-primary-50 p-4 dark:bg-primary-800/20">
          {loading && (
            <p className="text-sm italic text-slate-500 dark:text-slate-400">Looking up translation…</p>
          )}
          {!loading && error && (
            <p className="text-sm text-slate-500 dark:text-slate-400">{error}</p>
          )}
          {!loading && !error && nativeText === null && (
            <p className="text-sm text-slate-700 dark:text-slate-200">
              The English version of this question is: <em>{contextValue}</em>
            </p>
          )}
          {!loading && !error && nativeText !== null && (
            <p className="text-sm text-slate-700 dark:text-slate-200">
              <span className="mr-2 inline-block rounded bg-white px-1.5 py-0.5 text-xs font-bold uppercase text-primary-700 dark:bg-slate-800 dark:text-primary-200">
                {nativeLocale}
              </span>
              {nativeText}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
