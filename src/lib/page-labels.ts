import { normalizeUiLocale } from './ui-labels.js';
import { isVocabularyLesson } from './lesson-kind.js';
const rows = {
  en: ['Free English practice','Interactive exercises','Words','Lessons','Choose what to practice','Grammar','Wh-questions','Idioms','Gerunds','Vocabulary','Browse six exercise types and explanations.','Learn words with definitions and pronunciation.','Category','Search','Word','Part of speech','English definition','Spanish meaning','Practice covers six words per run; repeat to cover the whole group.'],
  es: ['Practica inglés gratis','Ejercicios interactivos','Palabras','Lecciones','Elige qué practicar','Gramática','Preguntas Wh','Expresiones','Gerundios','Vocabulario','Explora seis tipos de ejercicios y sus explicaciones.','Aprende palabras con definiciones y pronunciación.','Categoría','Buscar','Palabra','Categoría gramatical','Definición en inglés','Significado en español','Cada sesión practica seis palabras; repite para recorrer todo el bloque.'],
  zh: ['免费英语练习','互动练习','单词','课程','选择练习内容','语法','疑问句','习语','动名词','词汇','探索六种练习类型及其解答。','通过定义和发音学习单词。','类别','搜索','单词','词性','英文定义','西班牙语释义','每次练习六个单词，重复练习可覆盖整组。'],
  ko: ['무료 영어 연습','대화형 연습','단어','수업','연습할 내용을 선택하세요','문법','의문문','관용구','동명사','어휘','여섯 가지 연습 유형과 해설을 살펴보세요.','뜻과 발음을 통해 단어를 배우세요.','카테고리','검색','단어','품사','영어 정의','스페인어 의미','한 번에 여섯 단어를 연습합니다. 반복하여 모든 단어를 익히세요.'],
  ja: ['無料の英語練習','インタラクティブな練習','単語','レッスン','練習する内容を選ぶ','文法','疑問文','慣用句','動名詞','語彙','6種類の練習と解説を確認できます。','定義と発音で単語を学びましょう。','カテゴリ','検索','単語','品詞','英語の定義','スペイン語の意味','1回に6単語を練習します。繰り返してグループ全体を学びましょう。'],
} as const;
const keys=['free','exercises','words','lessons','choose','grammar','wh_words','idioms','gerunds','vocabulary','exerciseHelp','vocabularyHelp','category','search','word','pos','definition','meaning','rotationHelp'] as const;
export type PageLabelKey=typeof keys[number];
export const pageText=(locale:string,key:PageLabelKey)=>rows[normalizeUiLocale(locale)][keys.indexOf(key)];
export function lessonCategory(slug:string):'grammar'|'wh_words'|'idioms'|'gerunds'|'vocabulary' {
  return isVocabularyLesson(slug)?'vocabulary':slug.startsWith('wh-words-')?'wh_words':slug==='top-1000-idioms'?'idioms':slug==='top-1000-gerunds'?'gerunds':'grammar';
}

const vocabularyLabels = {
  en: { classVocabulary: 'Class vocabulary', frequencyVocabulary: 'The 2000-word list', classVocabularyHelp: 'Study expressions from class, then practice their meaning and use. Each topic practices its full set of exercises.' },
  es: { classVocabulary: 'Vocabulario de clase', frequencyVocabulary: 'La lista de 2000 palabras', classVocabularyHelp: 'Estudia las expresiones de clase y practica su significado y uso. Cada tema recorre todos sus ejercicios.' },
  zh: { classVocabulary: '课堂词汇', frequencyVocabulary: '2000词列表', classVocabularyHelp: '学习课堂表达，然后练习其含义和用法。每个主题包含该主题的全部练习。' },
  ko: { classVocabulary: '수업 어휘', frequencyVocabulary: '2000단어 목록', classVocabularyHelp: '수업 표현을 공부하고 뜻과 쓰임을 연습하세요. 각 주제의 모든 문제를 연습합니다.' },
  ja: { classVocabulary: '授業の語彙', frequencyVocabulary: '2000語のリスト', classVocabularyHelp: '授業の表現を学び、意味と使い方を練習します。各テーマの全問題を練習できます。' },
} as const;
export const vocabularyText = (locale: string, key: keyof typeof vocabularyLabels.en): string => vocabularyLabels[normalizeUiLocale(locale)][key];
