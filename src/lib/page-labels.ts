import { normalizeUiLocale } from './ui-labels.js';
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
  return slug.startsWith('vocab-chunk-')?'vocabulary':slug.startsWith('wh-words-')?'wh_words':slug==='top-1000-idioms'?'idioms':slug==='top-1000-gerunds'?'gerunds':'grammar';
}
