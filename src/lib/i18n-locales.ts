export const SUPPORTED_LOCALES = ['en', 'es', 'zh', 'ko', 'ja'] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: '🇺🇸 English',
  es: '🇲🇽 Español',
  zh: '🇨🇳 中文',
  ko: '🇰🇷 한국어',
  ja: '🇯🇵 日本語',
};

export function isSupportedLocale(value: unknown): value is Locale {
  return (
    typeof value === 'string' &&
    (SUPPORTED_LOCALES as readonly string[]).includes(value)
  );
}
