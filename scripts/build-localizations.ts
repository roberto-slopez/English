/** Explicit, opt-in authoring tool. Production never calls a translation service.
 * Run only after authorization to send the repository's educational text to Google.
 * Does not read .env, learner storage, database connections or credentials.
 */
import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { translationCatalog } from '../src/content/translations/catalog.js';
import { translationsByLocale } from '../src/content/translations/all.js';
import { vocabLessons, buildVocab, CHUNK_SIZE } from '../src/content/vocabulary/top2000-vocabulary.js';
import words from '../src/content/vocabulary/ngsl-gr.json';

if (!process.argv.includes('--allow-google')) throw new Error('Explicit --allow-google authorization is required.');
const hash = (text: string) => createHash('sha256').update(text).digest('hex');
const cacheDir = new URL('./.translation-cache/', import.meta.url);
const outputDir = new URL('../src/content/translations/localized/', import.meta.url);
await mkdir(cacheDir, { recursive: true });
await mkdir(outputDir, { recursive: true });

type TargetLocale = 'zh' | 'ko' | 'ja';
type Job = { key: string; source: string; en: string };

const catalogJobs: Job[] = Object.entries(translationCatalog.es).map(([key, source]) => ({
  key,
  source,
  en: translationCatalog.en[key] ?? '',
}));
const wordJobs: Job[] = words.flatMap(word => [
  { key: `${word.id}.meaning`, source: word.meaning, en: word.definition },
  { key: `${word.id}.example`, source: word.example.es, en: word.example.en },
  ...word.alternatives.map((sense, i) => ({ key: `${word.id}.alternative.${i}`, source: sense.meaning, en: sense.definition })),
]);

const spanishBoldWords = new Set([
  'coma', 'antes', 'positivo', 'objeto', 'dos (y solo dos)', 'adjetivos cortos',
  'tres o más sílabas', 'dos sílabas', 'excepto', 'ambos', 'subida y bajada de la voz',
  'no basta por sí solo', 'personas', 'cosas / animales', 'personas o cosas',
  'lugares', 'posesión', 'futuro:', 'hábitos pasados:', 'recorrido:', 'plan de estudio:',
  '1–20:', '21–40:',
]);

const glossary = /\b(?:Have you ever|had been|did not|do not have to|have to|has to|had to|ought to|be able to|will be able to drive|had better|would rather|used to|be\/get used to|get used to|be going to|rather than|one of the most|the most|appear to be dead|appear to be|survive a storm|come across|feel left out|left out|manage time|manage to|if not|can't|cannot|mustn't|shouldn't|wouldn't|couldn't|didn't|doesn't|don't|isn't|aren't|wasn't|weren't|haven't|hasn't|hadn't|won't|was|were|had|did|does|been|being|should|would|could|might|must|shall|ought|fewer|less|unless|Unless|Survive|Come|came|Feel|felt|Manage|FSRS|IndexedDB|BroadcastChannel|localStorage|NGSL-GR|V[123])\b|\bhas\b(?!\s+(?:pegado|revuelto|estudiado|visto|hecho|tenido|estado|ido|recibido|vivido|puesto|aprendido|guardado|de\b))|-(?:ing|ed)\b/g;

function protectCatalog(job: Job) {
  const tokens: string[] = [];
  const token = (value: string) => `ZXQ${tokens.push(value) - 1}QXZ`;
  let text = job.source
    .replace(/\{\{i18n:[^}]+\}\}|\{[a-zA-Z][\w]*\}|https?:\/\/[^\s)]+|(?<=\])\([^)]*\)|`[^`]+`/g, token)
    .replace(/(?:[A-Za-z][A-Za-z'/-]*\s*(?:→|->)\s*)+[A-Za-z][A-Za-z'/-]*/g, token)
    .replace(/«([^»]+)»|“([^”]+)”|"([^"\n]+)"/g, (whole, a, b, c) => {
      const inner = a ?? b ?? c;
      if (job.en.includes(inner) || (job.key.startsWith('exercise.top-1000-idioms.') && job.source.startsWith(whole))) {
        return token(whole);
      }
      return whole;
    });

  const mdSpans = [...job.en.matchAll(/\*\*[^*\n]+\*\*|\*[^*\n]+\*/g)]
    .map(m => m[0])
    .filter(s => {
      const clean = s.replace(/^\*+|\*+$/g, '').trim().toLowerCase();
      return clean.length >= 2 && /[a-z]/i.test(clean) && !spanishBoldWords.has(clean) && job.source.includes(s);
    })
    .sort((a, b) => b.length - a.length);
  for (const span of mdSpans) text = text.replaceAll(span, () => token(span));

  const shared = job.en.split(/(?<=[.!?])\s+|\n/).map(s => s.replace(/^[-*•]\s+/, '').trim())
    .filter(s => s.length > 9 && /[a-zA-Z]/.test(s) && job.source.includes(s)).sort((a, b) => b.length - a.length);
  for (const fragment of shared) text = text.replaceAll(fragment, () => token(fragment));
  text = text.replace(glossary, token);

  return {
    text,
    tokens,
    restore(value: string) {
      for (let i = tokens.length - 1; i >= 0; i--) {
        const re = new RegExp(`ZXQ\\s*${i}\\s*QXZ`, 'gi');
        if (!re.test(value)) throw new Error(`Missing protected token ${i}: ${job.key}`);
        value = value.replace(re, () => tokens[i]!);
      }
      if (/ZXQ\s*\d+\s*QXZ/i.test(value)) throw new Error(`Unrestored token: ${job.key}`);
      // Normalize any fullwidth brackets around markdown links back to [label](/path)
      value = value
        .replace(/【([^】\]]*)[】\]]\s*(?=\()/g, '[$1]')
        .replace(/\[\s*([^】\]]*?)】\s*(?=\()/g, '[$1]');
      return value.trim();
    },
  };
}

function isHandcraftedCatalogKey(key: string): boolean {
  if (key.startsWith('vocab.vocab-chunk-')) return true;
  if (key.startsWith('wh.wh-words-') || key.startsWith('exercise.wh-words-')) return true;
  if (key.startsWith('lesson.top-1000-idioms.') || key.startsWith('lesson.top-1000-gerunds.')) return true;
  if (key.startsWith('exercise.top-1000-idioms.') || key.startsWith('exercise.top-1000-gerunds.')) {
    return !key.endsWith('.explanation');
  }
  return Boolean(translationsByLocale.zh[key] && translationsByLocale.ko[key] && translationsByLocale.ja[key]);
}

const activeCatalogJobs = catalogJobs.filter(job => !isHandcraftedCatalogKey(job.key));
const preparedCatalog = activeCatalogJobs.map(job => ({ job, ...protectCatalog(job) }));
const vocab2000 = buildVocab();
const vocab2000Sources = vocab2000.map(v => v.es);

console.log(
  `[localization] ${catalogJobs.length} catalog keys (${activeCatalogJobs.length} translated from ES, ${catalogJobs.length - activeCatalogJobs.length} structured/handcrafted), ${wordJobs.length} vocabulary fields.`
);

const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

async function translate(text: string, language: string): Promise<string> {
  const url = new URL('https://translate.googleapis.com/translate_a/single');
  for (const [key, value] of Object.entries({ client: 'gtx', sl: 'es', tl: language, dt: 't', q: text })) {
    url.searchParams.set(key, value);
  }
  for (let attempt = 0; attempt < 6; attempt++) {
    try {
      const response = await fetch(url, { signal: AbortSignal.timeout(45000) });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const body = await response.json() as [Array<[string, string]>];
      return body[0].map(segment => segment[0]).join('');
    } catch (error) {
      if (attempt === 5) throw error;
      await sleep(1500 * 2 ** attempt);
    }
  }
  throw new Error('Translation retry exhausted.');
}

function hasAllTokens(source: string, translated: string): boolean {
  const expected = [...source.matchAll(/ZXQ(\d+)QXZ/g)].map(m => m[1]!);
  for (const id of expected) {
    if (!new RegExp(`ZXQ\\s*${id}\\s*QXZ`, 'i').test(translated)) return false;
  }
  return true;
}

const targetScriptRe: Record<TargetLocale, RegExp> = {
  zh: /[\u4e00-\u9fff]/,
  ko: /[\uac00-\ud7af]/,
  ja: /[\u3040-\u30ff\u4e00-\u9fff]/,
};

const catalogOverrides: Record<TargetLocale, Record<string, string>> = {
  zh: {
    'lesson.present-perfect-ever-never.title': '现在完成时（Present Perfect）+ ever / never',
    'exercise.present-real-conditionals.11.pro_tip': '提示："Do you...?" -> "No, I don\'t."',
    'vocabulary.srs.search': '搜索单词或中文释义',
    'vocabulary.srs.meaning': '中文释义',
    'vocabulary.srs.fallback': '闪卡说明、词义和例句均提供中文翻译。',
    'vocabulary.srs.partial': '中文说明与词义',
  },
  ko: {
    'lesson.present-perfect-ever-never.title': '현재완료(Present Perfect) + ever / never',
    'exercise.present-real-conditionals.11.pro_tip': '팁: "Do you...?" -> "No, I don\'t."',
    'vocabulary.srs.search': '단어 또는 한국어 뜻 검색',
    'vocabulary.srs.meaning': '한국어 뜻',
    'vocabulary.srs.fallback': '단어장 안내와 뜻, 예문이 모두 한국어로 제공됩니다.',
    'vocabulary.srs.partial': '한국어 안내 및 뜻',
  },
  ja: {
    'lesson.present-perfect-ever-never.title': '現在完了（Present Perfect）+ ever / never',
    'exercise.present-real-conditionals.11.pro_tip': 'ヒント："Do you...?" -> "No, I don\'t."',
    'vocabulary.srs.search': '単語または日本語の意味を検索',
    'vocabulary.srs.meaning': '日本語の意味',
    'vocabulary.srs.fallback': 'フラッシュカードの説明、意味、例文はすべて日本語で表示されます。',
    'vocabulary.srs.partial': '日本語の説明と意味',
  },
};

const wordFieldOverrides: Record<TargetLocale, Record<string, string>> = {
  zh: {
    'ngslgr-can.alternative.0': '安第斯共同体（CAN）',
    'ngslgr-car.alternative.0': '中非共和国（CAR）',
    'ngslgr-ad.meaning': '公元（AD）',
    'ngslgr-ex.meaning': '字母 X',
    'ngslgr-elephant.alternative.0': '大象（《古兰经》第 105 章《象章》）',
  },
  ko: {
    'ngslgr-a.meaning': '하나의, 어떤(부정관사)',
    'ngslgr-can.alternative.0': '안데스 공동체(CAN)',
    'ngslgr-car.alternative.0': '중앙아프리카 공화국(CAR)',
    'ngslgr-ad.meaning': '서기(AD)',
    'ngslgr-ex.meaning': '알파벳 X',
    'ngslgr-elephant.alternative.0': '코끼리(쿠란 제105장 코끼리 장)',
  },
  ja: {
    'ngslgr-can.alternative.0': 'アンデス共同体（CAN）',
    'ngslgr-car.alternative.0': '中央アフリカ共和国（CAR）',
    'ngslgr-ad.meaning': '西暦・紀元後（AD）',
    'ngslgr-ex.meaning': '文字 X',
    'ngslgr-elephant.alternative.0': '象（クルアーン第105章『象章』）',
    'ngslgr-warrant.alternative.0': '身分証明書、令状',
  },
};

const glossOverrides: Record<TargetLocale, Record<string, string>> = {
  zh: {},
  ko: {
    'un/una': '하나의, 어떤',
  },
  ja: {
    quince: '15（十五）',
    catorce: '14（十四）',
    diecinueve: '19（十九）',
  },
};

function buildVocabChunkEntries(locale: TargetLocale, resolveEsGloss: (es: string) => string): Record<string, string> {
  const out: Record<string, string> = {};
  for (let i = 0; i < vocabLessons.length; i++) {
    const chunk = vocabLessons[i]!;
    const startIdx = i * CHUNK_SIZE;
    out[chunk.titleKey] = translationCatalog[locale][chunk.titleKey]!;
    out[chunk.descriptionKey] = translationCatalog[locale][chunk.descriptionKey]!;
    out[chunk.introKey] = translationCatalog[locale][chunk.introKey]!;

    for (const ex of chunk.exercises) {
      const isMc = ex.type === 'multiple_choice';
      const correctWord = isMc
        ? (ex.data as { choices: string[] }).choices[(ex.answer as { correctIndex: number }).correctIndex]!
        : (ex.answer as { correct: string }).correct;
      const correctEntry = vocab2000.find(v => v.word === correctWord);
      const esText = correctEntry ? correctEntry.es : '';
      const localizedGloss = esText ? resolveEsGloss(esText) : '';
      const rankNum = startIdx + 1 + (correctEntry ? vocab2000.indexOf(correctEntry) - startIdx : 0);

      if (locale === 'zh') {
        out[ex.promptKey] = isMc
          ? `哪个单词的意思是：“${localizedGloss}”？`
          : `写出意思是“${localizedGloss}”的单词`;
        if (ex.explanationKey) out[ex.explanationKey] = `"${correctWord}" — ${localizedGloss}`;
        if (ex.proTipKey) out[ex.proTipKey] = `排名：英语最常用 2000 词（NGSL）中的第 #${rankNum} 位。`;
      } else if (locale === 'ko') {
        out[ex.promptKey] = isMc
          ? `다음 뜻을 가진 단어는 무엇입니까: "${localizedGloss}"?`
          : `다음 뜻을 가진 단어를 쓰세요: "${localizedGloss}"`;
        if (ex.explanationKey) out[ex.explanationKey] = `"${correctWord}" — ${localizedGloss}`;
        if (ex.proTipKey) out[ex.proTipKey] = `순위: 영어에서 가장 흔한 2000단어(NGSL) 중 #${rankNum}위.`;
      } else {
        out[ex.promptKey] = isMc
          ? `「${localizedGloss}」という意味の単語はどれですか？`
          : `「${localizedGloss}」という意味の単語を入力してください`;
        if (ex.explanationKey) out[ex.explanationKey] = `"${correctWord}" — ${localizedGloss}`;
        if (ex.proTipKey) out[ex.proTipKey] = `順位：英語で最もよく使われる2000語（NGSL）の第 #${rankNum} 位。`;
      }
    }
  }
  return out;
}

const hasTranslatableLetters = (text: string) => /[A-Za-zÁÉÍÓÚÜÑáéíóúüñ]/.test(text.replace(/ZXQ\d+QXZ/g, ''));

for (const [locale, language] of [['zh', 'zh-CN'], ['ko', 'ko'], ['ja', 'ja']] as const) {
  const cacheFile = new URL(`${locale}.json`, cacheDir);
  let cache: Record<string, string> = {};
  try { cache = JSON.parse(await readFile(cacheFile, 'utf8')); } catch { /* First authoring run. */ }
  const cacheKey = (source: string) => hash(`v1:${locale}:${source}`);

  const allNeededTexts = [
    ...preparedCatalog.map(p => p.text).filter(hasTranslatableLetters),
    ...wordJobs.map(j => j.source),
    ...vocab2000Sources,
  ];
  const unique = [...new Set(allNeededTexts)].filter(source => {
    const cached = cache[cacheKey(source)];
    return !cached || !hasAllTokens(source, cached);
  });

  const batches: string[][] = [];
  for (const text of unique) {
    const batch = batches[batches.length - 1];
    if (!batch || batch.join('').length + text.length > 2800 || batch.length >= 35) batches.push([text]);
    else batch.push(text);
  }
  console.log(`[${locale}] ${unique.length} unique texts missing; ${batches.length} batches.`);
  let next = 0, completed = 0;

  await Promise.all(Array.from({ length: 6 }, async () => {
    while (next < batches.length) {
      const batch = batches[next++]!;
      const combined = batch.map((source, i) => `[${String(i).padStart(6, '0')}]\n${source}`).join('\n\n');
      const translated = await translate(combined, language);
      const markers = [...translated.matchAll(/\[\s*(\d{6})\s*\]/g)];
      for (const [i, source] of batch.entries()) {
        const marker = markers.find(m => Number(m[1]) === i);
        const following = marker ? markers.find(m => m.index! > marker.index!) : undefined;
        let value = marker ? translated.slice(marker.index! + marker[0].length, following?.index).trim() : '';
        if (markers.length !== batch.length || !value || !hasAllTokens(source, value)) {
          value = await translate(source, language);
        }
        cache[cacheKey(source)] = value;
      }
      completed++;
      if (completed % 15 === 0 || completed === batches.length) {
        await writeFile(cacheFile, JSON.stringify(cache));
        console.log(`[${locale}] ${completed}/${batches.length} batches saved.`);
      }
      await sleep(100);
    }
  }));
  await writeFile(cacheFile, JSON.stringify(cache));

  const wordValues: Record<string, string> = {};
  for (const job of wordJobs) {
    wordValues[job.key] = (wordFieldOverrides[locale][job.key] ?? cache[cacheKey(job.source)] ?? '').trim();
    if (!targetScriptRe[locale].test(wordValues[job.key]!)) {
      const retried = (await translate(job.source, language)).trim();
      cache[cacheKey(job.source)] = retried;
      wordValues[job.key] = wordFieldOverrides[locale][job.key] ?? retried;
    }
  }

  const catalogValues: Record<string, string> = {};
  for (const job of catalogJobs) {
    if (isHandcraftedCatalogKey(job.key) && !job.key.startsWith('vocab.vocab-chunk-')) {
      catalogValues[job.key] = translationCatalog[locale][job.key]!;
    }
  }
  Object.assign(
    catalogValues,
    buildVocabChunkEntries(locale, esGloss => {
      const override = Object.hasOwn(glossOverrides[locale], esGloss) ? glossOverrides[locale][esGloss] : undefined;
      return String(override ?? cache[cacheKey(esGloss)] ?? esGloss).trim();
    })
  );

  for (const p of preparedCatalog) {
    if (!hasTranslatableLetters(p.text)) {
      catalogValues[p.job.key] = p.restore(p.text);
      continue;
    }
    let raw = cache[cacheKey(p.text)]!;
    if (!hasAllTokens(p.text, raw)) {
      // Fallback: translate raw Spanish source directly if a token was altered by provider
      raw = await translate(p.job.source, language);
      cache[cacheKey(p.job.source)] = raw;
      catalogValues[p.job.key] = raw.trim();
    } else {
      catalogValues[p.job.key] = p.restore(raw);
    }
  }
  Object.assign(catalogValues, catalogOverrides[locale]);
  await writeFile(cacheFile, JSON.stringify(cache));

  const catalog = Object.fromEntries(catalogJobs.map(job => [job.key, catalogValues[job.key]!]));
  const vocabulary = Object.fromEntries(words.map(word => [word.id, {
    meaning: wordValues[`${word.id}.meaning`]!,
    example: wordValues[`${word.id}.example`]!,
    alternatives: word.alternatives.map((_, i) => wordValues[`${word.id}.alternative.${i}`]!),
  }]));
  const metadata = {
    sourceLocale: 'es',
    targetLocale: locale,
    provider: 'Google Translate; project editorial corrections',
    catalogSourceHash: hash(JSON.stringify(catalogJobs.map(j => [j.key, j.source]))),
    vocabularySourceHash: hash(JSON.stringify(wordJobs.map(j => [j.key, j.source]))),
  };
  await writeFile(new URL(`${locale}.json`, outputDir), JSON.stringify({ metadata, catalog, vocabulary }, null, 2) + '\n');
  console.log(`[${locale}] Wrote ${Object.keys(catalog).length} catalog entries and ${Object.keys(vocabulary).length} localized words.`);
}
