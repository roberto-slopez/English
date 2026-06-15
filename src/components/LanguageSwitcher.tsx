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
    // Reload so SSR re-renders with the new locale cookie.
    window.location.reload();
  }

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-lg border border-primary-100 bg-white px-3 py-1.5 text-sm font-medium text-primary hover:bg-primary-50 dark:border-primary-800 dark:bg-slate-800"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <Languages size={16} aria-hidden="true" />
        <span>{LOCALE_LABELS[current]}</span>
      </button>
      {open && (
        <ul
          role="listbox"
          className="absolute right-0 z-10 mt-2 w-40 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-800"
        >
          {SUPPORTED_LOCALES.map((loc) => (
            <li key={loc}>
              <button
                type="button"
                role="option"
                aria-selected={current === loc}
                onClick={() => choose(loc)}
                className={`block w-full px-3 py-2 text-left text-sm hover:bg-primary-50 dark:hover:bg-primary-800/30 ${
                  current === loc ? 'font-semibold text-primary' : 'text-slate-700 dark:text-slate-200'
                }`}
              >
                {LOCALE_LABELS[loc]}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
