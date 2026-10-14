import { isSupportedLocale } from '../lib/i18n-locales.js';
import { BEFORE_LOCALE_CHANGE_EVENT, PREFERENCES_EVENT, readUserPreferences, saveUserPreferences, type ThemePreference } from '../lib/preferences.js';

const root = document.documentElement;
const media = window.matchMedia('(prefers-color-scheme: dark)');
const themeSelect = document.querySelector<HTMLSelectElement>('[data-theme-select]');
const localeSelect = document.querySelector<HTMLSelectElement>('[data-ui-locale-select]');
const dialog = document.querySelector<HTMLDialogElement>('#learning-preferences');
const form = document.querySelector<HTMLFormElement>('[data-preferences-form]');
const nativeSelect = form?.querySelector<HTMLSelectElement>('[name="nativeLocale"]');
const audioCheckbox = form?.querySelector<HTMLInputElement>('[name="audioEnabled"]');
const prompt = document.querySelector<HTMLElement>('[data-native-prompt]');

function applyTheme(theme: ThemePreference) {
  const dark = theme === 'dark' || (theme === 'system' && media.matches);
  root.classList.toggle('dark', dark);
  root.classList.toggle('light', !dark);
  root.style.colorScheme = dark ? 'dark' : 'light';
  const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
  if (themeColor) themeColor.content = dark ? '#0b0f19' : '#f8fafc';
  if (themeSelect) themeSelect.value = theme;
}

function dismissPrompt() {
  if (prompt) prompt.hidden = true;
  try { localStorage.setItem('english.nativeLocaleShown', '1'); } catch { /* Preferences remain accessible. */ }
}

function sync() {
  const prefs = readUserPreferences();
  applyTheme(prefs.theme);
  if (nativeSelect) nativeSelect.value = prefs.nativeLocale ?? '';
  if (audioCheckbox) audioCheckbox.checked = prefs.audioEnabled;
}

sync();
try {
  if (prompt) prompt.hidden = !!localStorage.getItem('english.nativeLocaleShown') || !!readUserPreferences().nativeLocale;
} catch { if (prompt) prompt.hidden = !!readUserPreferences().nativeLocale; }

themeSelect?.addEventListener('change', () => {
  const theme = themeSelect.value;
  if (theme === 'system' || theme === 'light' || theme === 'dark') saveUserPreferences({ theme });
});
media.addEventListener('change', () => applyTheme(readUserPreferences().theme));
window.addEventListener(PREFERENCES_EVENT, sync);
window.addEventListener('storage', (event) => {
  if (event.key && !['english.theme', 'english.nativeLocale', 'english.audioEnabled'].includes(event.key)) return;
  const prefs = readUserPreferences(true);
  window.dispatchEvent(new CustomEvent(PREFERENCES_EVENT, { detail: prefs }));
});

localeSelect?.addEventListener('change', () => {
  const locale = localeSelect.value;
  if (!isSupportedLocale(locale) || locale === root.lang) return;
  // Synchronous subscribers can persist an in-flight exercise before SSR reloads.
  window.dispatchEvent(new CustomEvent(BEFORE_LOCALE_CHANGE_EVENT, { detail: { locale } }));
  document.cookie = `english.uiLocale=${locale}; path=/; max-age=31536000; SameSite=Lax`;
  window.location.reload();
});

let opener: HTMLElement | null = null;
let priorOverflow = '';
document.querySelectorAll<HTMLButtonElement>('[data-preferences-open]').forEach((button) => {
  button.addEventListener('click', () => {
    if (!dialog || dialog.open || document.querySelector('dialog[open]')) return;
    sync();
    if (nativeSelect && !readUserPreferences().nativeLocale) {
      const suggested = navigator.languages.map((language) => language.toLowerCase().split('-')[0]).find(isSupportedLocale);
      if (suggested) nativeSelect.value = suggested;
    }
    opener = button;
    priorOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    nativeSelect?.focus({ preventScroll: true });
  });
});
document.querySelectorAll<HTMLButtonElement>('[data-preferences-close]').forEach((button) => {
  button.addEventListener('click', () => dialog?.close());
});
document.querySelector<HTMLButtonElement>('[data-native-dismiss]')?.addEventListener('click', dismissPrompt);
dialog?.addEventListener('close', () => {
  document.body.style.overflow = priorOverflow;
  if (opener?.isConnected) opener.focus({ preventScroll: true });
});
form?.addEventListener('submit', (event) => {
  event.preventDefault();
  saveUserPreferences({
    nativeLocale: isSupportedLocale(nativeSelect?.value) ? nativeSelect.value : null,
    audioEnabled: !!audioCheckbox?.checked,
  });
  dismissPrompt();
  dialog?.close();
});
