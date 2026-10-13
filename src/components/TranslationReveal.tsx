'use client';

import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { getTranslationLabels } from '../lib/utils/translation-ui.js';
import { isSupportedLocale, type Locale } from '../lib/i18n-locales.js';

interface Props {
  uiLocale: string;
  nativeLocale: string | null;
  /** A representative key for this exercise (promptKey). The fetch happens server-side via /api/translate. */
  contextKey: string;
}

type LookupState =
  | { requestKey: string; status: 'loading' | 'missing' | 'error' }
  | { requestKey: string; status: 'ready'; value: string; resolvedLocale: Locale; fallback: boolean };

/**
 * Floating "Translate" button. When clicked, opens a slide-down panel that
 * shows the current exercise context translated into the user's native locale.
 *
 * The actual translation is fetched from /api/translate?key=...&locale=... —
 * this means the panel works for any key the user clicks, and exercises are
 * already pre-translated. The API reports the actual language and whether
 * English was used as fallback.
 */
export default function TranslationReveal({
  uiLocale,
  nativeLocale,
  contextKey,
}: Props) {
  const [open, setOpen] = useState(false);
  const [lookup, setLookup] = useState<LookupState | null>(null);
  const canTranslate = !!nativeLocale && nativeLocale !== uiLocale;
  const requestKey = `${contextKey}:${nativeLocale}`;
  const labels = getTranslationLabels(uiLocale);
  // A changed question must never show the preceding question's response.
  const current = lookup?.requestKey === requestKey ? lookup : null;

  useEffect(() => {
    if (!open || !contextKey || !canTranslate || !nativeLocale) return;
    const controller = new AbortController();
    setLookup({ requestKey, status: 'loading' });
    async function load() {
      try {
        const response = await fetch(`/api/translate?key=${encodeURIComponent(contextKey)}&locale=${encodeURIComponent(nativeLocale!)}`, {
          signal: controller.signal,
        });
        if (controller.signal.aborted) return;
        if (response.status === 404) {
          setLookup({ requestKey, status: 'missing' });
          return;
        }
        if (!response.ok) throw new Error('Translation request failed');
        const data = await response.json();
        if (controller.signal.aborted) return;
        if (typeof data?.value !== 'string' || !data.value.trim() || data.value === contextKey ||
          !isSupportedLocale(data.resolvedLocale) || typeof data.fallback !== 'boolean') {
          throw new Error('Invalid translation response');
        }
        setLookup({ requestKey, status: 'ready', value: data.value, resolvedLocale: data.resolvedLocale, fallback: data.fallback });
      } catch {
        if (!controller.signal.aborted) setLookup({ requestKey, status: 'error' });
      }
    }
    void load();
    return () => controller.abort();
  }, [open, contextKey, nativeLocale, requestKey, canTranslate]);

  // Hooks remain unconditional when the native language changes.
  if (!canTranslate) return null;

  return (
    <div className="mt-2 flex flex-col gap-2">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="pointer-events-auto inline-flex w-fit items-center gap-1.5 rounded-full border border-primary-200 bg-white px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm transition hover:border-primary-400 hover:bg-primary-50 dark:border-primary-700 dark:bg-slate-800 dark:text-primary-200 dark:hover:bg-primary-700 dark:hover:text-white"
        aria-expanded={open}
        aria-label={open ? labels.hide : labels.show}
      >
        <Languages className="h-3.5 w-3.5" aria-hidden="true" />
        {open ? labels.hide : labels.show}
      </button>
      {open && (
        <div aria-live="polite" className="slide-down pointer-events-auto rounded-2xl border border-primary-200 bg-primary-50 p-4 dark:bg-primary-800/20">
          {(!current || current.status === 'loading') && (
            <p className="text-base italic text-slate-700 dark:text-slate-200">{labels.loading}</p>
          )}
          {current?.status === 'error' && (
            <p className="text-base text-slate-700 dark:text-slate-200">{labels.error}</p>
          )}
          {current?.status === 'missing' && (
            <p className="text-base text-slate-700 dark:text-slate-200">{labels.missing}</p>
          )}
          {current?.status === 'ready' && (
            <p className="text-base text-slate-700 dark:text-slate-200">
              {current.fallback && <span className="mb-2 block text-sm">{labels.fallback}</span>}
              <span className="mr-2 inline-block rounded bg-white px-1.5 py-0.5 text-xs font-bold uppercase text-primary-700 dark:bg-slate-800 dark:text-primary-200">
                {current.resolvedLocale}
              </span>
              <span lang={current.resolvedLocale}>{current.value}</span>
            </p>
          )}
        </div>
      )}
    </div>
  );
}
