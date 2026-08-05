/**
 * Text-to-speech utility for English pronunciation using native Web Speech API.
 * Supports rate control (normal 0.9x vs slow 0.7x) and handles browser differences.
 */

let cachedVoice: SpeechSynthesisVoice | null = null;

function getEnglishVoice(): SpeechSynthesisVoice | null {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return null;
  }
  if (cachedVoice) return cachedVoice;

  const voices = window.speechSynthesis.getVoices();
  const preferred = voices.find(
    (v) =>
      v.lang.startsWith('en') &&
      (v.name.includes('Natural') || v.name.includes('Google') || v.name.includes('Samantha') || v.name.includes('Daniel'))
  ) || voices.find((v) => v.lang.startsWith('en'));

  if (preferred) {
    cachedVoice = preferred;
  }
  return preferred || null;
}

if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => {
    cachedVoice = null;
    getEnglishVoice();
  };
}

export interface SpeakOptions {
  rate?: number; // 0.9 = normal, 0.7 = slow
  pitch?: number;
  onEnd?: () => void;
  onError?: () => void;
}

export function speakEnglish(text: string, options: SpeakOptions = {}): boolean {
  if (typeof window === 'undefined' || !('speechSynthesis' in window)) {
    return false;
  }

  try {
    const cleanText = text
      .replace(/__+/g, 'blank')
      .replace(/[*_~`]/g, '')
      .replace(/\{\{i18n:[^}]+\}\}/g, '')
      .trim();

    if (!cleanText) return false;

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = 'en-US';
    utterance.rate = options.rate ?? 0.9;
    utterance.pitch = options.pitch ?? 1.0;

    const voice = getEnglishVoice();
    if (voice) {
      utterance.voice = voice;
    }

    if (options.onEnd) {
      utterance.onend = options.onEnd;
    }
    if (options.onError) {
      utterance.onerror = options.onError;
    }

    window.speechSynthesis.speak(utterance);
    return true;
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Speech synthesis error:', err);
    return false;
  }
}

export function stopSpeech(): void {
  if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
    window.speechSynthesis.cancel();
  }
}
