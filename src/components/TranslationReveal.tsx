import { useState, useEffect, useId } from 'react';
import { Languages } from 'lucide-react';
import { uiText } from '../lib/ui-labels.js';
import { isSupportedLocale, type Locale } from '../lib/i18n-locales.js';
import { PREFERENCES_EVENT, readUserPreferences, type UserPreferences } from '../lib/preferences.js';

interface Props { uiLocale: string; nativeLocale: string | null; contextKey: string; }
type LookupState =
  | { requestKey: string; status: 'loading' | 'missing' | 'error' }
  | { requestKey: string; status: 'ready'; value: string; resolvedLocale: Locale; fallback: boolean };

export default function TranslationReveal({ uiLocale, nativeLocale: initialNative, contextKey }: Props) {
  const id = useId();
  const [nativeLocale, setNativeLocale] = useState(initialNative);
  const [open, setOpen] = useState(false);
  const [retryNonce, setRetryNonce] = useState(0);
  const [lookup, setLookup] = useState<LookupState | null>(null);
  const canTranslate = isSupportedLocale(nativeLocale);
  const requestKey = `${contextKey}:${nativeLocale}`;
  const current = lookup?.requestKey === requestKey ? lookup : null;

  useEffect(() => {
    setNativeLocale(readUserPreferences().nativeLocale);
    const preferencesChanged = (event: Event) => setNativeLocale((event as CustomEvent<UserPreferences>).detail.nativeLocale);
    window.addEventListener(PREFERENCES_EVENT, preferencesChanged);
    return () => window.removeEventListener(PREFERENCES_EVENT, preferencesChanged);
  }, []);

  useEffect(() => {
    if (!open || !contextKey || !canTranslate || !nativeLocale) return;
    const controller = new AbortController();
    let timedOut = false;
    const timeout = window.setTimeout(() => { timedOut = true; controller.abort(); }, 10000);
    setLookup({ requestKey, status: 'loading' });
    async function load() {
      try {
        const response = await fetch(`/api/translate?key=${encodeURIComponent(contextKey)}&locale=${encodeURIComponent(nativeLocale!)}`, { signal: controller.signal });
        if (controller.signal.aborted) return;
        if (response.status === 404) { setLookup({ requestKey, status: 'missing' }); return; }
        if (!response.ok) throw new Error('Translation request failed');
        const data = await response.json();
        if (controller.signal.aborted) return;
        if (typeof data?.value !== 'string' || !data.value.trim() || data.value === contextKey ||
          !isSupportedLocale(data.resolvedLocale) || typeof data.fallback !== 'boolean') throw new Error('Invalid translation response');
        setLookup({ requestKey, status: 'ready', value: data.value, resolvedLocale: data.resolvedLocale, fallback: data.fallback });
      } catch {
        if (!controller.signal.aborted || timedOut) setLookup({ requestKey, status: 'error' });
      } finally { window.clearTimeout(timeout); }
    }
    void load();
    return () => { window.clearTimeout(timeout); controller.abort(); };
  }, [open, contextKey, nativeLocale, requestKey, canTranslate, retryNonce]);

  if (!canTranslate) return null;
  return (
    <div className="mt-2 flex flex-col gap-2">
      <button type="button" onClick={() => setOpen((value) => !value)}
        className="touch-target pointer-events-auto w-fit gap-2 rounded-xl border border-primary-300 bg-white px-4 text-sm font-semibold text-primary-700 hover:border-primary-500 hover:bg-primary-50 dark:border-primary-700 dark:bg-slate-800 dark:text-primary-200 dark:hover:bg-primary-950"
        aria-expanded={open} aria-controls={id}>
        <Languages className="h-4 w-4" aria-hidden="true" />
        {uiText(uiLocale, open ? 'hideTranslation' : 'showTranslation')}
      </button>
      {open && (
        <section id={id} aria-label={uiText(uiLocale, 'showTranslation')} aria-live="polite" aria-busy={!current || current.status === 'loading'}
          className="slide-down pointer-events-auto rounded-2xl border border-primary-200 bg-primary-50 p-4 dark:border-primary-700 dark:bg-primary-950">
          {(!current || current.status === 'loading') && <p className="text-base text-slate-700 dark:text-slate-200">{uiText(uiLocale, 'translationLoading')}</p>}
          {current?.status === 'error' && (
            <div className="space-y-3">
              <p className="text-base text-slate-700 dark:text-slate-200">{uiText(uiLocale, 'translationError')}</p>
              <button type="button" onClick={() => setRetryNonce((value) => value + 1)} className="touch-target rounded-xl border border-primary-300 bg-white px-4 font-semibold text-primary-700 hover:bg-primary-100 dark:border-primary-700 dark:bg-slate-800 dark:text-primary-200 dark:hover:bg-primary-900">{uiText(uiLocale, 'retry')}</button>
            </div>
          )}
          {current?.status === 'missing' && <p className="text-base text-slate-700 dark:text-slate-200">{uiText(uiLocale, 'translationMissing')}</p>}
          {current?.status === 'ready' && (
            <div className="space-y-2 text-base text-slate-700 dark:text-slate-200">
              {current.fallback && <p className="text-sm">{uiText(uiLocale, 'translationFallback')}</p>}
              <span className="inline-block rounded bg-white px-2 py-1 text-sm font-semibold uppercase text-primary-700 dark:bg-slate-800 dark:text-primary-200" aria-hidden="true">{current.resolvedLocale}</span>
              <p lang={current.resolvedLocale}>{current.value}</p>
            </div>
          )}
        </section>
      )}
    </div>
  );
}
