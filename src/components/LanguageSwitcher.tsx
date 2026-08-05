import { useState } from 'react';
import { Languages } from 'lucide-react';
import {
  SUPPORTED_LOCALES,
  LOCALE_LABELS,
  isSupportedLocale,
  DEFAULT_LOCALE,
  type Locale,
} from '../lib/i18n-locales.ts';

const COOKIE_NAME = 'english.uiLocale';

interface Props {
  initialLocale?: Locale | string;
}

function setLocaleCookie(locale: Locale) {
  // 1 year, lax, root path.
  document.cookie = `${COOKIE_NAME}=${locale}; path=/; max-age=31536000; samesite=lax`;
}

function readLocaleCookie(): Locale {
  if (typeof document === 'undefined') return DEFAULT_LOCALE;
  const match = document.cookie
    .split('; ')
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));
  if (!match) return DEFAULT_LOCALE;
  const value = match.split('=')[1];
  return isSupportedLocale(value) ? value : DEFAULT_LOCALE;
}

export default function LanguageSwitcher({ initialLocale }: Props) {
  const [current, setCurrent] = useState<Locale>(
    isSupportedLocale(initialLocale) ? (initialLocale as Locale) : readLocaleCookie()
  );
  const [open, setOpen] = useState(false);

  function choose(locale: Locale) {
    setCurrent(locale);
    setLocaleCookie(locale);
    setOpen(false);
    window.location.reload();
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex min-h-[40px] items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-bold text-slate-800 shadow-xs transition hover:border-primary-400 hover:bg-primary-50 active:scale-[0.98] dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-primary-600 dark:hover:bg-slate-700"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Languages className="h-4 w-4 text-primary-600 dark:text-primary-400" aria-hidden="true" />
        <span>{LOCALE_LABELS[current]}</span>
      </button>
      {open && (
        <>
          <div
            className="fixed inset-0 z-20"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <ul
            role="listbox"
            className="absolute right-0 z-30 mt-2 w-44 overflow-hidden rounded-2xl border-2 border-slate-200 bg-white p-1.5 shadow-xl dark:border-slate-700 dark:bg-slate-800"
          >
            {SUPPORTED_LOCALES.map((loc) => (
              <li key={loc}>
                <button
                  type="button"
                  role="option"
                  aria-selected={current === loc}
                  onClick={() => choose(loc)}
                  className={`flex w-full min-h-[40px] items-center justify-between rounded-xl px-3 py-2 text-left text-sm font-semibold transition ${
                    current === loc
                      ? 'bg-primary-100 text-primary-800 dark:bg-primary-950/80 dark:text-primary-300'
                      : 'text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-700/60'
                  }`}
                >
                  <span>{LOCALE_LABELS[loc]}</span>
                  {current === loc && <span className="text-primary-600 dark:text-primary-400">✓</span>}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
