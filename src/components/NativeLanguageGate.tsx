'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';

// Native language locales (excludes English — that's the default).
const NATIVE_LOCALES = ['es', 'zh', 'ko', 'ja'] as const;
type NativeLocale = (typeof NATIVE_LOCALES)[number];

const SHOWN_KEY = 'english.nativeLocaleShown';
const NATIVE_KEY = 'english.nativeLocale';
// Mirror the native choice in a cookie too — Astro pages render server-side
// and can't read localStorage, so the cookie is what the lesson page uses to
// know which native locale the user picked. 1-year expiry, root path.
const NATIVE_COOKIE = 'english.nativeLocale';

const LABELS: Record<NativeLocale, string> = {
  es: 'Español',
  zh: '中文',
  ko: '한국어',
  ja: '日本語',
};

function persistShown() {
  try {
    localStorage.setItem(SHOWN_KEY, '1');
  } catch {
    /* ignore */
  }
}

function persistNative(locale: NativeLocale) {
  try {
    localStorage.setItem(NATIVE_KEY, locale);
  } catch {
    /* ignore */
  }
  // Cookie is plain `key=value; path=/; max-age=...; SameSite=Lax`. The server
  // reads it via Astro.cookies.get on every request.
  const oneYear = 60 * 60 * 24 * 365;
  document.cookie = `${NATIVE_COOKIE}=${locale}; path=/; max-age=${oneYear}; SameSite=Lax`;
}

export default function NativeLanguageGate() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const alreadyShown = localStorage.getItem(SHOWN_KEY);
      if (!alreadyShown) setVisible(true);
    } catch {
      setVisible(true);
    }
  }, []);

  function close(chosen: NativeLocale | null) {
    if (chosen) persistNative(chosen);
    persistShown();
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="native-gate-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm"
    >
      <div className="w-full max-w-md rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200 dark:bg-slate-800 dark:ring-slate-700">
        <div className="flex items-start justify-between">
          <h2 id="native-gate-title" className="font-display text-xl font-semibold text-primary">
            What's your native language?
          </h2>
          <button
            type="button"
            onClick={() => close(null)}
            className="rounded-lg p-1 text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>
        <p className="mt-2 text-base text-slate-700 dark:text-slate-200">
          We'll use it to show translations that help you learn faster.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          {NATIVE_LOCALES.map((loc) => (
            <button
              key={loc}
              type="button"
              onClick={() => close(loc)}
              className="rounded-lg border border-primary-100 px-3 py-2 text-sm font-medium text-primary hover:bg-primary-50 dark:hover:bg-primary-800/30"
            >
              {LABELS[loc]}
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={() => close(null)}
            className="text-sm text-slate-500 underline-offset-4 hover:underline dark:text-slate-400"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}
