import { isSupportedLocale, type Locale } from './i18n-locales.js';

export type ThemePreference = 'system' | 'light' | 'dark';
export interface UserPreferences {
  nativeLocale: Locale | null;
  audioEnabled: boolean;
  theme: ThemePreference;
}

export const PREFERENCES_EVENT = 'english:preferences';
export const BEFORE_LOCALE_CHANGE_EVENT = 'english:before-locale-change';
let current: UserPreferences | null = null;

function stored(key: string): string | null {
  try { return localStorage.getItem(key); } catch { return null; }
}

function cookie(key: string): string | null {
  if (typeof document === 'undefined') return null;
  const value = document.cookie.split('; ').find((item) => item.startsWith(`${key}=`))?.slice(key.length + 1);
  try { return value ? decodeURIComponent(value) : null; } catch { return null; }
}

export function readUserPreferences(refresh = false): UserPreferences {
  if (current && !refresh) return { ...current };
  const native = stored('english.nativeLocale') ?? cookie('english.nativeLocale');
  const audio = stored('english.audioEnabled') ?? cookie('english.audioEnabled');
  const theme = stored('english.theme') ?? cookie('english.theme');
  current = {
    nativeLocale: isSupportedLocale(native) ? native : null,
    audioEnabled: audio === 'true',
    theme: theme === 'light' || theme === 'dark' ? theme : 'system',
  };
  return { ...current };
}

export function saveUserPreferences(patch: Partial<UserPreferences>): UserPreferences {
  const previous = readUserPreferences();
  const next: UserPreferences = {
    nativeLocale: Object.hasOwn(patch, 'nativeLocale')
      ? (isSupportedLocale(patch.nativeLocale) ? patch.nativeLocale : null) : previous.nativeLocale,
    audioEnabled: typeof patch.audioEnabled === 'boolean' ? patch.audioEnabled : previous.audioEnabled,
    theme: patch.theme === 'light' || patch.theme === 'dark' || patch.theme === 'system' ? patch.theme : previous.theme,
  };
  current = next;
  if (typeof document !== 'undefined') {
    const values = {
      'english.nativeLocale': next.nativeLocale,
      'english.audioEnabled': String(next.audioEnabled),
      'english.theme': next.theme,
    };
    for (const [key, value] of Object.entries(values)) {
      try { if (value === null) localStorage.removeItem(key); else localStorage.setItem(key, value); } catch { /* Cookie and in-memory fallback. */ }
      document.cookie = `${key}=${value === null ? '' : encodeURIComponent(value)}; path=/; max-age=${value === null ? 0 : 31536000}; SameSite=Lax`;
    }
    window.dispatchEvent(new CustomEvent<UserPreferences>(PREFERENCES_EVENT, { detail: { ...next } }));
  }
  return { ...next };
}
