import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getUiLabels, uiText } from '../src/lib/ui-labels.js';
import { readUserPreferences, saveUserPreferences, PREFERENCES_EVENT } from '../src/lib/preferences.js';

test('all supported interface languages have complete labels and matching placeholders', () => {
  const english = getUiLabels('en');
  for (const locale of ['en', 'es', 'zh', 'ko', 'ja']) {
    const localized = getUiLabels(locale);
    assert.deepEqual(Object.keys(localized).sort(), Object.keys(english).sort());
    for (const [key, value] of Object.entries(localized)) {
      assert.ok(value.trim(), `${locale}.${key} is empty`);
      assert.deepEqual(value.match(/\{\w+\}/g)?.sort() ?? [], english[key as keyof typeof english].match(/\{\w+\}/g)?.sort() ?? [], `${locale}.${key} placeholders differ`);
    }
    assert.ok(!uiText(locale, 'questionCount', { count: 2, total: 16 }).includes('{'));
  }
});

test('legacy preferences, opt-in audio, cookie fallback and live preference updates', () => {
  const values = new Map<string, string>([['english.theme', 'dark'], ['english.nativeLocale', 'es']]);
  const fakeStorage = { getItem: (key: string) => values.get(key) ?? null, setItem: (key: string, value: string) => values.set(key, value), removeItem: (key: string) => values.delete(key) };
  const cookies = new Map<string, string>();
  const fakeDocument = {
    get cookie() { return [...cookies].map(([key, value]) => `${key}=${value}`).join('; '); },
    set cookie(value: string) {
      const [pair] = value.split(';');
      const [key, content] = pair!.split('=');
      if (value.includes('max-age=0;')) cookies.delete(key!); else cookies.set(key!, content!);
    },
  };
  const events: Array<{ type: string; detail: unknown }> = [];
  const saved = ['localStorage', 'document', 'window', 'CustomEvent'].map((key) => [key, Object.getOwnPropertyDescriptor(globalThis, key)] as const);
  Object.defineProperty(globalThis, 'localStorage', { configurable: true, value: fakeStorage });
  Object.defineProperty(globalThis, 'document', { configurable: true, value: fakeDocument });
  Object.defineProperty(globalThis, 'window', { configurable: true, value: { dispatchEvent: (event: { type: string; detail: unknown }) => events.push(event) } });
  Object.defineProperty(globalThis, 'CustomEvent', { configurable: true, value: class { constructor(public type: string, public init: { detail: unknown }) {} get detail() { return this.init.detail; } } });
  try {
    assert.deepEqual(readUserPreferences(true), { theme: 'dark', nativeLocale: 'es', audioEnabled: false });
    const next = saveUserPreferences({ nativeLocale: 'ja', audioEnabled: true, theme: 'system' });
    assert.deepEqual(next, { nativeLocale: 'ja', audioEnabled: true, theme: 'system' });
    assert.equal(events.at(-1)?.type, PREFERENCES_EVENT);
    assert.deepEqual(events.at(-1)?.detail, next);
    values.clear();
    assert.deepEqual(readUserPreferences(true), next);
    assert.equal(saveUserPreferences({ nativeLocale: null, audioEnabled: false }).nativeLocale, null);
    assert.equal(cookies.has('english.nativeLocale'), false);
    Object.defineProperty(globalThis, 'localStorage', { configurable: true, get() { throw new Error('Storage blocked'); } });
    assert.equal(saveUserPreferences({ nativeLocale: 'ko' }).nativeLocale, 'ko');
    assert.equal(readUserPreferences(true).nativeLocale, 'ko');
  } finally {
    for (const [key, descriptor] of saved) {
      if (descriptor) Object.defineProperty(globalThis, key, descriptor); else Reflect.deleteProperty(globalThis, key);
    }
  }
});
