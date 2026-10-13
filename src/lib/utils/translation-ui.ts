import { DEFAULT_LOCALE, isSupportedLocale, type Locale } from '../i18n-locales.js';

const labels = {
  en: {
    show: 'Translate to my language', hide: 'Hide translation', loading: 'Looking up translation…',
    missing: 'No translation available yet.', error: 'Could not load translation.',
    fallback: 'Translation unavailable in your language. Showing English:',
  },
  es: {
    show: 'Traducir a mi idioma', hide: 'Ocultar traducción', loading: 'Buscando traducción…',
    missing: 'Todavía no hay una traducción disponible.', error: 'No se pudo cargar la traducción.',
    fallback: 'No hay traducción en tu idioma. Se muestra la versión en inglés:',
  },
  zh: {
    show: '翻译成我的母语', hide: '隐藏翻译', loading: '正在查找翻译…',
    missing: '暂无翻译。', error: '无法加载翻译。', fallback: '暂无你的语言的翻译，显示英文版本：',
  },
  ko: {
    show: '모국어로 번역', hide: '번역 숨기기', loading: '번역을 찾는 중…',
    missing: '아직 번역이 없습니다.', error: '번역을 불러올 수 없습니다.', fallback: '선택한 언어의 번역이 없어 영어로 표시합니다:',
  },
  ja: {
    show: '母語に翻訳', hide: '翻訳を隠す', loading: '翻訳を検索中…',
    missing: '翻訳はまだありません。', error: '翻訳を読み込めませんでした。', fallback: '選択した言語の翻訳がないため、英語で表示します：',
  },
} satisfies Record<Locale, Record<string, string>>;

export function getTranslationLabels(locale: string) {
  return labels[isSupportedLocale(locale) ? locale : DEFAULT_LOCALE];
}
