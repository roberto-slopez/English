/**
 * Text-to-speech utility for English pronunciation using native Web Speech API.
 * Supports rate control (normal 0.9x vs slow 0.7x) and handles Desktop, Android, and iOS differences.
 */

import { readUserPreferences } from '../preferences.js';

let cachedVoice: SpeechSynthesisVoice | null = null;
/** Keep a strong reference to the active utterance so iOS/macOS WebKit and Chromium GC do not collect it mid-speech. */
let activeUtterance: SpeechSynthesisUtterance | null = null;

const NOVELTY_VOICE_RE =
  /\b(?:Albert|Bad News|Bahh|Bells|Boing|Bubbles|Cellos|Good News|Jester|Organ|Superstar|Trinoids|Whisper|Wobble|Zarvox|Fred|Ralph|Kathy|Junior|Princess)\b/i;

const PREFERRED_VOICE_RE =
  /\b(?:Natural|Neural|Enhanced|Premium|Siri|Samantha|Ava|Allison|Alex|Aaron|Nicky|Daniel|Karen|Moira|Tessa|Aria|Jenny|Guy|Zira|David)\b|Google US English|Google UK English/i;

function normalizeLang(lang: string | undefined): string {
  return (lang ?? '').replace(/_/g, '-').trim().toLowerCase();
}

function scoreEnglishVoice(v: SpeechSynthesisVoice): number {
  const lang = normalizeLang(v.lang);
  if (lang !== 'en' && !lang.startsWith('en-')) return -1;
  if (NOVELTY_VOICE_RE.test(v.name)) return 0;

  let score = 10;
  if (lang === 'en-us' || lang.startsWith('en-us-')) score += 40;
  else if (lang === 'en-gb' || lang.startsWith('en-gb-')) score += 30;
  else if (lang === 'en-ca' || lang === 'en-au' || lang === 'en-ie' || lang === 'en-nz') score += 15;
  else score += 5;

  if (PREFERRED_VOICE_RE.test(v.name)) score += 25;
  if (v.default) score += 5;
  if (v.localService) score += 2;
  return score;
}

export function resetSpeechVoiceCache(): void {
  cachedVoice = null;
}

export function getEnglishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window) || !window.speechSynthesis) {
    return null;
  }
  if (cachedVoice) return cachedVoice;

  const voices = window.speechSynthesis.getVoices?.() ?? [];
  if (!voices.length) return null;

  let best: SpeechSynthesisVoice | null = null;
  let bestScore = 0;
  for (const v of voices) {
    const score = scoreEnglishVoice(v);
    if (score > bestScore) {
      bestScore = score;
      best = v;
    }
  }

  if (best) {
    cachedVoice = best;
  }
  return best;
}

function bindVoicesChanged(): void {
  if (typeof window === 'undefined' || !('speechSynthesis' in window) || !window.speechSynthesis) {
    return;
  }
  const handleVoicesChanged = () => {
    cachedVoice = null;
    getEnglishVoice();
  };
  try {
    if (typeof window.speechSynthesis.addEventListener === 'function') {
      window.speechSynthesis.addEventListener('voiceschanged', handleVoicesChanged);
    } else {
      window.speechSynthesis.onvoiceschanged = handleVoicesChanged;
    }
    window.speechSynthesis.getVoices?.();
  } catch {
    /* Ignore in restricted WebViews. */
  }
}

bindVoicesChanged();

export interface SpeakOptions {
  /** Explicit listen buttons always work; automatic selection audio requires opt-in. */
  explicit?: boolean;
  rate?: number; // 0.9 = normal, 0.7 = slow
  pitch?: number;
  onEnd?: () => void;
  onError?: () => void;
}

export function speakEnglish(text: string, options: SpeakOptions = {}): boolean {
  if (!options.explicit && !readUserPreferences().audioEnabled) return false;
  if (
    typeof window === 'undefined' ||
    !('speechSynthesis' in window) ||
    !window.speechSynthesis ||
    typeof SpeechSynthesisUtterance === 'undefined'
  ) {
    return false;
  }

  try {
    const cleanText = text
      .replace(/__+/g, 'blank')
      .replace(/[*_~`]/g, '')
      .replace(/\{\{i18n:[^}]+\}\}/g, '')
      .replace(/\s+/g, ' ')
      .trim();

    if (!cleanText) return false;

    const synth = window.speechSynthesis;
    if (synth.speaking || synth.pending) {
      synth.cancel();
    }
    if (synth.paused && typeof synth.resume === 'function') {
      synth.resume();
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    const voice = getEnglishVoice();
    if (voice) {
      utterance.voice = voice;
      const bcp47 = (voice.lang || 'en-US').replace(/_/g, '-');
      utterance.lang = /^en(?:-[A-Za-z0-9]+)*$/i.test(bcp47) ? bcp47 : 'en-US';
    } else {
      utterance.lang = 'en-US';
    }
    utterance.rate = options.rate ?? 0.9;
    utterance.pitch = options.pitch ?? 1.0;

    let retriedWithoutVoice = false;
    utterance.onend = () => {
      if (activeUtterance === utterance) activeUtterance = null;
      options.onEnd?.();
    };
    utterance.onerror = (event: SpeechSynthesisErrorEvent | { error?: string }) => {
      if (activeUtterance === utterance) activeUtterance = null;
      const reason = typeof event?.error === 'string' ? event.error : '';
      if (reason === 'canceled' || reason === 'interrupted') {
        return;
      }
      if (
        voice &&
        !retriedWithoutVoice &&
        (reason === 'voice-unavailable' || reason === 'language-unavailable' || reason === 'synthesis-failed')
      ) {
        retriedWithoutVoice = true;
        try {
          const fallback = new SpeechSynthesisUtterance(cleanText);
          fallback.lang = 'en-US';
          fallback.rate = options.rate ?? 0.9;
          fallback.pitch = options.pitch ?? 1.0;
          fallback.onend = () => {
            if (activeUtterance === fallback) activeUtterance = null;
            options.onEnd?.();
          };
          fallback.onerror = (ev: SpeechSynthesisErrorEvent | { error?: string }) => {
            if (activeUtterance === fallback) activeUtterance = null;
            const errCode = typeof ev?.error === 'string' ? ev.error : '';
            if (errCode === 'canceled' || errCode === 'interrupted') return;
            options.onError?.();
          };
          activeUtterance = fallback;
          synth.speak(fallback);
          return;
        } catch {
          /* Fall through to onError. */
        }
      }
      options.onError?.();
    };

    activeUtterance = utterance;
    synth.speak(utterance);
    return true;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Speech synthesis error:', err);
    return false;
  }
}

export function stopSpeech(): void {
  activeUtterance = null;
  if (typeof window !== 'undefined' && 'speechSynthesis' in window && window.speechSynthesis) {
    if (window.speechSynthesis.speaking || window.speechSynthesis.pending) {
      window.speechSynthesis.cancel();
    }
  }
}
