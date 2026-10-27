import assert from 'node:assert/strict';
import { test } from 'node:test';
import { getUiLabels, uiText } from '../src/lib/ui-labels.js';
import { readUserPreferences, saveUserPreferences, PREFERENCES_EVENT } from '../src/lib/preferences.js';
import { speakEnglish, getEnglishVoice, resetSpeechVoiceCache, stopSpeech } from '../src/lib/utils/speech.js';

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

test('speech synthesis handles Desktop, Android (en_US) and iOS (WebKit) voice quirks and error states', () => {
  const spoken: Array<{ text: string; lang: string; voice: unknown }> = [];
  let cancelCount = 0;
  let resumeCount = 0;
  let voices: Array<Partial<SpeechSynthesisVoice>> = [];
  const fakeSynth = {
    speaking: false,
    pending: false,
    paused: true,
    getVoices: () => voices as SpeechSynthesisVoice[],
    cancel: () => { cancelCount++; },
    resume: () => { resumeCount++; fakeSynth.paused = false; },
    speak: (u: { text: string; lang: string; voice: unknown }) => { spoken.push(u); },
  };
  class FakeUtterance {
    lang = '';
    rate = 1;
    pitch = 1;
    voice: unknown = null;
    onend?: () => void;
    onerror?: (e: { error?: string }) => void;
    constructor(public text: string) {}
  }
  const savedWindow = Object.getOwnPropertyDescriptor(globalThis, 'window');
  const savedUtterance = Object.getOwnPropertyDescriptor(globalThis, 'SpeechSynthesisUtterance');
  Object.defineProperty(globalThis, 'window', { configurable: true, value: { speechSynthesis: fakeSynth } });
  Object.defineProperty(globalThis, 'SpeechSynthesisUtterance', { configurable: true, value: FakeUtterance });
  try {
    // 1. Prioritizes en-US Natural/Samantha over alphabetical en-AU Natural or Apple novelty voices (Albert, Boing)
    resetSpeechVoiceCache();
    voices = [
      { name: 'Albert', lang: 'en-US', localService: true },
      { name: 'Boing', lang: 'en-US', localService: true },
      { name: 'Microsoft Natasha Online (Natural)', lang: 'en-AU', localService: false },
      { name: 'Samantha', lang: 'en-US', localService: true },
    ];
    assert.equal(getEnglishVoice()?.name, 'Samantha');

    // 2. Recognizes Android underscore locale codes (en_US, en_GB) and normalizes utterance.lang to BCP-47
    resetSpeechVoiceCache();
    voices = [{ name: 'Android Google TTS', lang: 'en_GB', localService: true }];
    assert.equal(getEnglishVoice()?.name, 'Android Google TTS');
    let errorCalled = false;
    assert.equal(speakEnglish('____ are you crying?', { explicit: true, onError: () => { errorCalled = true; } }), true);
    assert.equal(cancelCount, 0, 'Does not call cancel() before speak() when idle (avoids iOS/Android race)');
    assert.equal(resumeCount, 1, 'Resumes stuck paused speechSynthesis on mobile/desktop');
    assert.equal(spoken.at(-1)?.text, 'blank are you crying?');
    assert.equal(spoken.at(-1)?.lang, 'en-GB');

    // 3. Ignores normal canceled/interrupted events when user clicks another audio button
    const firstUtterance = spoken.at(-1) as unknown as FakeUtterance;
    firstUtterance.onerror?.({ error: 'canceled' });
    firstUtterance.onerror?.({ error: 'interrupted' });
    assert.equal(errorCalled, false);

    // 4. Retries once without explicit voice when a mobile voice throws synthesis-failed
    firstUtterance.onerror?.({ error: 'synthesis-failed' });
    assert.equal(spoken.length, 2);
    assert.equal(spoken.at(-1)?.voice, null);
    assert.equal(spoken.at(-1)?.lang, 'en-US');
    assert.equal(errorCalled, false);

    // 5. Cancels only when speaking or pending
    fakeSynth.speaking = true;
    stopSpeech();
    assert.equal(cancelCount, 1);
  } finally {
    resetSpeechVoiceCache();
    if (savedWindow) Object.defineProperty(globalThis, 'window', savedWindow); else Reflect.deleteProperty(globalThis, 'window');
    if (savedUtterance) Object.defineProperty(globalThis, 'SpeechSynthesisUtterance', savedUtterance); else Reflect.deleteProperty(globalThis, 'SpeechSynthesisUtterance');
  }
});
