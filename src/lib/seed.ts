// Seed script: populates lessons, exercises, and translations against
// Postgres. Run with `pnpm db:seed` (tsx src/lib/seed.ts).
// `pnpm db:reset` truncates first, then re-seeds.
//
// Bulk inserts use multi-VALUES `INSERT ... VALUES (...),(...),(...)`
// in 500-row chunks (Postgres allows ~65k params/query, so 500×9=4500
// is well within). The whole thing runs in a single transaction so a
// failure rolls back to a clean state.

import { closePool, withTx } from './db.js';
import { lesson as lesson1 } from '../content/lessons/because-so-that.js';
import { lesson as lesson2 } from '../content/lessons/adverbs-of-frequency.js';
import { lesson as lesson3 } from '../content/lessons/time-expressions.js';
import { lesson as lesson4 } from '../content/lessons/did-and-was.js';
import { lesson as lesson5 } from '../content/lessons/simple-past-and-past-continuous.js';
import { whWordsLessons } from '../content/lessons/wh-words.js';
import { lesson as idiomsLesson } from '../content/lessons/idioms.js';
import { lesson as gerundsLesson } from '../content/lessons/gerunds.js';
import {
  vocabLessons,
  buildVocab,
  CHUNK_SIZE,
} from '../content/vocabulary/top2000-vocabulary.js';
import { translationsByLocale } from '../content/translations/all.js';
import { SUPPORTED_LOCALES, type Locale } from './i18n-locales.js';
import type { PoolClient } from 'pg';

const ALL_LESSONS = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  ...whWordsLessons,
  idiomsLesson,
  gerundsLesson,
  ...vocabLessons,
];

const CHUNK_SIZE_DB = 500;

/**
 * Build a `VALUES ($1,...,$n),($n+1,...),...` fragment and a parallel
 * params array. Returns `{ valuesSql, params }`. Caller is responsible
 * for the surrounding `INSERT INTO ... (cols) VALUES ...`.
 */
function buildMultiValues(rows: ReadonlyArray<readonly unknown[]>): {
  valuesSql: string;
  params: unknown[];
} {
  const cols = rows[0]?.length ?? 0;
  if (cols === 0 || rows.length === 0) return { valuesSql: '', params: [] };
  const tuples: string[] = [];
  const params: unknown[] = [];
  rows.forEach((row, rowIdx) => {
    const placeholders: string[] = [];
    for (let c = 0; c < cols; c++) {
      placeholders.push(`$${rowIdx * cols + c + 1}`);
      params.push(row[c] ?? null);
    }
    tuples.push(`(${placeholders.join(', ')})`);
  });
  return { valuesSql: tuples.join(', '), params };
}

async function insertInChunks(
  client: PoolClient,
  sqlPrefix: string,
  rows: ReadonlyArray<readonly unknown[]>
): Promise<void> {
  for (let i = 0; i < rows.length; i += CHUNK_SIZE_DB) {
    const slice = rows.slice(i, i + CHUNK_SIZE_DB);
    const { valuesSql, params } = buildMultiValues(slice);
    if (!valuesSql) continue;
    await client.query(`${sqlPrefix} ${valuesSql}`, params);
  }
}

async function main(): Promise<void> {
  const cmd = process.argv[2] ?? 'seed';
  const isReset = cmd === 'reset';

  // eslint-disable-next-line no-console
  console.log(`[seed] starting (mode=${cmd}) — clearing tables…`);

  let totalExercises = 0;
  let totalTranslations = 0;

  await withTx(async (client) => {
    // Wipe in FK-safe order. We use DELETE (not TRUNCATE) inside the
    // transaction so the seed can read back the inserted lesson IDs
    // immediately and is_published=1 stays the default. For `reset`
    // we additionally TRUNCATE ... RESTART IDENTITY to reset the
    // SERIAL counters and free the disk space more aggressively.
    if (isReset) {
      await client.query(
        'TRUNCATE lessons, exercises, translations RESTART IDENTITY CASCADE'
      );
    } else {
      await client.query('DELETE FROM exercises');
      await client.query('DELETE FROM lessons');
      await client.query('DELETE FROM translations');
    }

    // 1) lessons — bulk insert in chunks
    const lessonRows: Array<readonly unknown[]> = ALL_LESSONS.map((l) => [
      l.slug,
      l.titleKey,
      l.descriptionKey,
      l.orderIndex,
      1,
    ]);
    await insertInChunks(
      client,
      `INSERT INTO lessons (slug, title_key, description_key, order_index, is_published) VALUES`,
      lessonRows
    );

    // 2) exercises — look up the lesson id by slug, then bulk-insert
    const { rows: lessonRowsBack } = await client.query<{
      id: number;
      slug: string;
    }>(`SELECT id, slug FROM lessons`);
    const slugToId = new Map<string, number>(lessonRowsBack.map((r) => [r.slug, r.id]));

    const exerciseRows: Array<readonly unknown[]> = [];
    for (const lesson of ALL_LESSONS) {
      const lessonId = slugToId.get(lesson.slug);
      if (lessonId == null) {
        throw new Error(`Lesson slug "${lesson.slug}" not found after insert.`);
      }
      for (const ex of lesson.exercises) {
        exerciseRows.push([
          lessonId,
          ex.orderIndex,
          ex.type,
          ex.promptKey,
          JSON.stringify(ex.data),
          JSON.stringify(ex.answer),
          ex.explanationKey,
          ex.proTipKey,
          ex.points,
        ]);
        totalExercises++;
      }
    }
    await insertInChunks(
      client,
      `INSERT INTO exercises
         (lesson_id, order_index, type, prompt_key, data_json, answer_json,
          explanation_key, pro_tip_key, points)
       VALUES`,
      exerciseRows
    );

    // 3) translations — collect a flat list, then bulk-insert.
    //    3a) Static map: translationsByLocale[locale] = { key: value, ... }
    const translationRows: Array<[string, string, string]> = [];
    for (const locale of SUPPORTED_LOCALES) {
      const map = translationsByLocale[locale];
      if (!map) continue;
      for (const [key, value] of Object.entries(map)) {
        translationRows.push([key, locale, value]);
        totalTranslations++;
      }
    }

    // 3b) Programmatic translations for the 2000-word vocabulary section.
    const vocab = buildVocab();
    for (let i = 0; i < vocabLessons.length; i++) {
      const chunk = vocabLessons[i]!;
      const chunkNum = i + 1;
      const startIdx = i * CHUNK_SIZE;
      const endIdx = Math.min(startIdx + CHUNK_SIZE, vocab.length);

      const vocabIntroI18n: Record<Locale, { title: string; desc: string; intro: string }> = {
        en: {
          title: `Top 2000 words — chunk ${chunkNum} of ${vocabLessons.length}`,
          desc: `Words ${startIdx + 1}–${endIdx} of the 2000 most common English words.`,
          intro: `This chunk covers vocabulary ranks **${startIdx + 1} to ${endIdx}** on the NGSL frequency list. Answer questions to connect each definition with its word.`,
        },
        es: {
          title: `Las 2000 palabras más usadas — bloque ${chunkNum} de ${vocabLessons.length}`,
          desc: `Palabras ${startIdx + 1}–${endIdx} de las 2000 palabras más comunes en inglés.`,
          intro: `Este bloque cubre las palabras de posición **${startIdx + 1} a ${endIdx}** de la lista de frecuencia NGSL. Responde las preguntas para dominar este vocabulario.`,
        },
        zh: {
          title: `最常用 2000 词 — 第 ${chunkNum} 组(共 ${vocabLessons.length} 组)`,
          desc: `英语最常用 2000 词中的第 ${startIdx + 1}–${endIdx} 个单词。`,
          intro: `本组涵盖 NGSL 词频表中排名第 **${startIdx + 1} 至 ${endIdx}** 的单词。通过回答问题掌握这些词汇。`,
        },
        ko: {
          title: `가장 많이 쓰는 2000 단어 — ${chunkNum}/${vocabLessons.length} 묶음`,
          desc: `영어 가장 흔한 2000 단어 중 ${startIdx + 1}–${endIdx}번째 단어.`,
          intro: `이 묶음은 NGSL 빈도 목록의 **${startIdx + 1}~${endIdx}위** 단어를 다룹니다. 문제를 풀어 어휘를 마스터해보세요.`,
        },
        ja: {
          title: `頻出2000単語 — グループ ${chunkNum} / ${vocabLessons.length}`,
          desc: `最もよく使われる2000単語のうち ${startIdx + 1}–${endIdx} 番目。`,
          intro: `このグループはNGSL頻度リストの **${startIdx + 1}〜${endIdx}位** の単語をカバーしています。問題を解いてマスターしましょう。`,
        },
      };

      for (const locale of SUPPORTED_LOCALES) {
        translationRows.push([chunk.titleKey, locale, vocabIntroI18n[locale].title]);
        translationRows.push([chunk.descriptionKey, locale, vocabIntroI18n[locale].desc]);
        translationRows.push([chunk.introKey, locale, vocabIntroI18n[locale].intro]);
        totalTranslations += 3;
      }

      for (const ex of chunk.exercises) {
        const isMc = ex.type === 'multiple_choice';
        const correctWord = isMc
          ? (ex.data as { choices: string[] }).choices[
              (ex.answer as { correctIndex: number }).correctIndex
            ]
          : (ex.answer as { correct: string }).correct;
        const correctEntry = vocab.find((v) => v.word === correctWord);
        const defText = correctEntry ? correctEntry.def : 'see prompt';
        const esText = correctEntry ? correctEntry.es : '';

        const promptEn = isMc
          ? `Which word means: "${defText}"?`
          : `Type the word that means: "${defText}"`;
        const promptEs = isMc
          ? `¿Qué palabra significa: "${esText}"?`
          : `Escribe la palabra que significa: "${esText}"`;

        const explanationEn = `"${correctWord}" — ${defText}`;
        const explanationEs = `"${correctWord}" — ${esText}`;

        const rank = correctEntry ? vocab.indexOf(correctEntry) - startIdx : 0;
        const proTipEn = `Rank: #${startIdx + 1 + rank} of 2000 most common English words (NGSL).`;
        const proTipEs = `Posición: #${startIdx + 1 + rank} de las 2000 palabras más comunes en inglés (NGSL).`;

        for (const locale of SUPPORTED_LOCALES) {
          const prompt = locale === 'es' ? promptEs : promptEn;
          const explanation = locale === 'es' ? explanationEs : explanationEn;
          const proTip = locale === 'es' ? proTipEs : proTipEn;
          translationRows.push([ex.promptKey, locale, prompt]);
          translationRows.push([ex.explanationKey ?? '', locale, explanation]);
          translationRows.push([ex.proTipKey ?? '', locale, proTip]);
          totalTranslations += 3;
        }
      }
    }

    // 3c) Programmatic translations for wh-words, idioms, gerunds.
    const sectionDefs: Array<{
      lesson: {
        slug: string;
        titleKey: string;
        descriptionKey: string;
        introKey: string;
        exercises: Array<{
          promptKey: string;
          subTopic?: string;
          explanationKey: string | null;
          proTipKey: string | null;
        }>;
      };
      meta: { title: string; desc: string; intro: string };
    }> = [
      {
        lesson: {
          slug: 'wh-words-why',
          titleKey: 'wh.wh-words-why.title',
          descriptionKey: 'wh.wh-words-why.description',
          introKey: 'wh.wh-words-why.intro',
          exercises: whWordsLessons[0]!.exercises,
        },
        meta: {
          title: 'Why questions',
          desc: '20 questions using "why" to ask for a reason or cause.',
          intro: '**Why** asks for a reason or cause. The expected answer usually starts with "because".',
        },
      },
      {
        lesson: {
          slug: 'wh-words-how',
          titleKey: 'wh.wh-words-how.title',
          descriptionKey: 'wh.wh-words-how.description',
          introKey: 'wh.wh-words-how.intro',
          exercises: whWordsLessons[1]!.exercises,
        },
        meta: {
          title: 'How questions',
          desc: '20 questions using "how" to ask about manner, method, or state.',
          intro: '**How** asks for a manner, method, or state. The expected answer describes the way something is done.',
        },
      },
      {
        lesson: {
          slug: 'wh-words-how-long',
          titleKey: 'wh.wh-words-how-long.title',
          descriptionKey: 'wh.wh-words-how-long.description',
          introKey: 'wh.wh-words-how-long.intro',
          exercises: whWordsLessons[2]!.exercises,
        },
        meta: {
          title: 'How long questions',
          desc: '20 questions using "how long" to ask about a duration of time.',
          intro: '**How long** asks for a duration: minutes, hours, days, years, or "since when".',
        },
      },
      {
        lesson: {
          slug: 'wh-words-how-many',
          titleKey: 'wh.wh-words-how-many.title',
          descriptionKey: 'wh.wh-words-how-many.description',
          introKey: 'wh.wh-words-how-many.intro',
          exercises: whWordsLessons[3]!.exercises,
        },
        meta: {
          title: 'How many / How much questions',
          desc: '20 questions using "how many" or "how much" to ask about quantity.',
          intro: '**How many** asks for a count (countable nouns); **how much** asks for an amount (uncountable nouns).',
        },
      },
      {
        lesson: {
          slug: 'wh-words-when',
          titleKey: 'wh.wh-words-when.title',
          descriptionKey: 'wh.wh-words-when.description',
          introKey: 'wh.wh-words-when.intro',
          exercises: whWordsLessons[4]!.exercises,
        },
        meta: {
          title: 'When questions',
          desc: '20 questions using "when" to ask about a point or period of time.',
          intro: '**When** asks for a time: a date, a year, a time of day, a season, or a frequency.',
        },
      },
      {
        lesson: {
          slug: 'wh-words-where',
          titleKey: 'wh.wh-words-where.title',
          descriptionKey: 'wh.wh-words-where.description',
          introKey: 'wh.wh-words-where.intro',
          exercises: whWordsLessons[5]!.exercises,
        },
        meta: {
          title: 'Where questions',
          desc: '20 questions using "where" to ask about a place or direction.',
          intro: '**Where** asks for a place: a city, a room, a direction, or a location.',
        },
      },
      {
        lesson: {
          slug: 'wh-words-who',
          titleKey: 'wh.wh-words-who.title',
          descriptionKey: 'wh.wh-words-who.description',
          introKey: 'wh.wh-words-who.intro',
          exercises: whWordsLessons[6]!.exercises,
        },
        meta: {
          title: 'Who questions',
          desc: '20 questions using "who" to ask about a person.',
          intro: '**Who** asks for a person: the subject, the object, or the agent of an action.',
        },
      },
      {
        lesson: {
          slug: 'wh-words-what',
          titleKey: 'wh.wh-words-what.title',
          descriptionKey: 'wh.wh-words-what.description',
          introKey: 'wh.wh-words-what.intro',
          exercises: whWordsLessons[7]!.exercises,
        },
        meta: {
          title: 'What / What kind of questions',
          desc: '20 questions using "what" or "what kind of" to ask about a thing or type.',
          intro: '**What** asks for a thing, name, color, idea, or piece of information. **What kind of** asks for a type or category.',
        },
      },
      {
        lesson: {
          slug: 'top-1000-idioms',
          titleKey: 'lesson.top-1000-idioms.title',
          descriptionKey: 'lesson.top-1000-idioms.description',
          introKey: 'lesson.top-1000-idioms.intro',
          exercises: idiomsLesson.exercises,
        },
        meta: {
          title: 'Top 1000 idioms',
          desc: '40 fill-in-the-blank questions on the most common English idioms.',
          intro: '**Idioms** are short phrases whose meaning is not obvious from the individual words. The 40 idioms here are among the most common in everyday English; you will hear and read them constantly.',
        },
      },
      {
        lesson: {
          slug: 'top-1000-gerunds',
          titleKey: 'lesson.top-1000-gerunds.title',
          descriptionKey: 'lesson.top-1000-gerunds.description',
          introKey: 'lesson.top-1000-gerunds.intro',
          exercises: gerundsLesson.exercises,
        },
        meta: {
          title: 'Top 1000 gerunds (verb + -ing)',
          desc: '40 fill-in-the-blank questions on common verbs that take a gerund (verb+ing) or an infinitive (to+verb).',
          intro: 'Many common English verbs are followed by a **gerund** (verb+ing) instead of a to-infinitive. Some verbs take both with different meanings. This lesson drills the 1000 most common patterns.',
        },
      },
    ];

    // Per-subTopic localized explanation + pro-tip text. Keys are the
    // subTopic string from each exercise; values are 5-locale maps.
    const subTopicI18n: Record<string, Record<Locale, { exp: string; tip: string }>> = {
      why: whyI18n(),
      how: howI18n(),
      how_long: howLongI18n(),
      how_many: howManyI18n(),
      how_much: howMuchI18n(),
      how_old: howOldI18n(),
      how_often: howOftenI18n(),
      when: whenI18n(),
      where: whereI18n(),
      who: whoI18n(),
      what: whatI18n(),
      what_kind_of: whatKindOfI18n(),
      idioms: idiomsI18n(),
      body_idioms: bodyIdiomsI18n(),
      business_work_idioms: businessIdiomsI18n(),
      time_age_idioms: timeAgeIdiomsI18n(),
      feelings_relationships: feelingsIdiomsI18n(),
      common_verbs_followed_by_gerund: gerundI18n(),
      common_verbs_followed_by_infinitive: infinitiveI18n(),
      common_verbs_followed_by_both: bothI18n(),
      common_adjective_preposition_gerund_patterns: adjPrepGerundI18n(),
    };

    for (const sec of sectionDefs) {
      // The original code kept a per-section i18n card (wh-words / idioms /
      // gerunds) in addition to the subTopic explanation/tip. We inline
      // the same 5-locale text here in a small map.
      const cardI18n = cardTextFor(sec.lesson.slug);
      for (const locale of SUPPORTED_LOCALES) {
        const title = (locale === 'en' ? sec.meta.title : cardI18n[locale].title) || sec.meta.title;
        const desc = (locale === 'en' ? sec.meta.desc : cardI18n[locale].desc) || sec.meta.desc;
        const intro = (locale === 'en' ? sec.meta.intro : cardI18n[locale].intro) || sec.meta.intro;
        translationRows.push([sec.lesson.titleKey, locale, title]);
        translationRows.push([sec.lesson.descriptionKey, locale, desc]);
        translationRows.push([sec.lesson.introKey, locale, intro]);
        totalTranslations += 3;
      }

      for (const ex of sec.lesson.exercises) {
        const sub = ex.subTopic ?? 'idioms';
        const localExpTip = subTopicI18n[sub] ?? subTopicI18n['idioms']!;
        for (const locale of SUPPORTED_LOCALES) {
          const expValue = localExpTip[locale].exp;
          const tipValue = localExpTip[locale].tip;
          const promptValue = promptByLocale(locale);
          translationRows.push([ex.promptKey, locale, promptValue]);
          translationRows.push([ex.explanationKey ?? '', locale, expValue]);
          translationRows.push([ex.proTipKey ?? '', locale, tipValue]);
          totalTranslations += 3;
        }
      }
    }

    await insertInChunks(
      client,
      'INSERT INTO translations (key, locale, value) VALUES',
      translationRows
    );
  });

  // Report counts. Use a fresh pool to avoid holding a connection.
  const pool = (await import('./db.js')).getPool();
  const toInt = (v: unknown): number => (typeof v === 'string' ? parseInt(v, 10) : Number(v) || 0);
  const lessonCount = toInt(
    (await pool.query<{ c: number | string }>('SELECT COUNT(*)::int AS c FROM lessons'))
      .rows[0]?.c
  );
  const exerciseCount = toInt(
    (await pool.query<{ c: number | string }>('SELECT COUNT(*)::int AS c FROM exercises'))
      .rows[0]?.c
  );
  const translationCount = toInt(
    (await pool.query<{ c: number | string }>('SELECT COUNT(*)::int AS c FROM translations'))
      .rows[0]?.c
  );
  const perLocale: Record<Locale, number> = { en: 0, es: 0, zh: 0, ko: 0, ja: 0 };
  for (const locale of SUPPORTED_LOCALES) {
    perLocale[locale] = toInt(
      (
        await pool.query<{ c: number | string }>(
          'SELECT COUNT(*)::int AS c FROM translations WHERE locale = $1',
          [locale]
        )
      ).rows[0]?.c
    );
  }

  // eslint-disable-next-line no-console
  console.log('[seed] OK');
  // eslint-disable-next-line no-console
  console.log(`  lessons     : ${lessonCount}`);
  // eslint-disable-next-line no-console
  console.log(`  exercises   : ${exerciseCount}  (inserted ${totalExercises})`);
  // eslint-disable-next-line no-console
  console.log(`  translations: ${translationCount}  (inserted ${totalTranslations})`);
  // eslint-disable-next-line no-console
  console.log(`  per locale  : ${JSON.stringify(perLocale)}`);

  await closePool();
}

function promptByLocale(locale: Locale): string {
  switch (locale) {
    case 'en':
      return 'Complete the sentence with the right word or phrase.';
    case 'es':
      return 'Completa la oración con la palabra o frase correcta.';
    case 'zh':
      return '用正确的单词或短语完成句子。';
    case 'ko':
      return '올바른 단어나 구로 문장을 완성하세요.';
    case 'ja':
      return '正しい単語またはフレーズで文を完成させましょう。';
  }
}

function whSubtopicCardI18n(slug: string): Record<Locale, { title: string; desc: string; intro: string }> {
  const word = slug.replace('wh-words-', '');
  if (word === 'why') {
    return {
      en: { title: 'Why questions', desc: '20 questions using "why" to ask for a reason or cause.', intro: '**Why** asks for a reason or cause. The expected answer usually starts with "because".' },
      es: { title: 'Preguntas con Why', desc: '20 preguntas usando "why" para preguntar la causa o razón.', intro: '**Why** se usa para preguntar por una causa o razón. La respuesta esperada suele empezar con "because".' },
      zh: { title: 'Why 疑问句', desc: '20 道使用 "why" 询问原因或理由的问题。', intro: '**Why** 用于询问原因。期望的回答通常以 "because" 开头。' },
      ko: { title: 'Why 질문', desc: '이유나 원인을 묻기 위해 "why"를 사용하는 20문제.', intro: '**Why**는 이유나 원인을 묻습니다. 기대하는 답은 보통 "because"로 시작합니다.' },
      ja: { title: 'Why の質問', desc: '理由や原因をたずねる "why" の20問。', intro: '**Why** は理由や原因をたずねます。期待される答えは通常 "because" で始まります。' },
    };
  }
  if (word === 'how') {
    return {
      en: { title: 'How questions', desc: '20 questions using "how" to ask about manner, method, or state.', intro: '**How** asks for a manner, method, or state. The expected answer describes the way something is done.' },
      es: { title: 'Preguntas con How', desc: '20 preguntas usando "how" para preguntar la manera, método o estado.', intro: '**How** se usa para preguntar la manera, método o estado. La respuesta describe cómo se realiza una acción.' },
      zh: { title: 'How 疑问句', desc: '20 道使用 "how" 询问方式、方法或状态的问题。', intro: '**How** 用于询问方式、方法或状态。回答描述做某事的方式。' },
      ko: { title: 'How 질문', desc: '방식, 방법, 상태를 묻기 위해 "how"를 사용하는 20문제.', intro: '**How**는 방식, 방법, 상태를 묻습니다. 기대하는 답은 동작을 수행하는 방식을 설명합니다.' },
      ja: { title: 'How の質問', desc: '方法や手段、状態をたずねる "how" の20問。', intro: '**How** は方法、手段、状態をたずねます。答えはやり方を説明します。' },
    };
  }
  if (word === 'how-long') {
    return {
      en: { title: 'How long questions', desc: '20 questions using "how long" to ask about a duration of time.', intro: '**How long** asks for a duration: minutes, hours, days, years, or "since when".' },
      es: { title: 'Preguntas con How long', desc: '20 preguntas usando "how long" para preguntar la duración del tiempo.', intro: '**How long** se usa para preguntar la duración de un evento: minutos, horas, días, años.' },
      zh: { title: 'How long 疑问句', desc: '20 道使用 "how long" 询问持续时间的问题。', intro: '**How long** 用于询问时长:分钟、小时、天、年或自何时起。' },
      ko: { title: 'How long 질문', desc: '지속 시간을 묻기 위해 "how long"을 사용하는 20문제.', intro: '**How long**은 지속 시간을 묻습니다:분, 시간, 일, 년.' },
      ja: { title: 'How long の質問', desc: '時間の長さをたずねる "how long" の20問。', intro: '**How long** は期間や長さをたずねます:分、時間、日、年。' },
    };
  }
  if (word === 'how-many') {
    return {
      en: { title: 'How many / How much questions', desc: '20 questions using "how many" or "how much" to ask about quantity.', intro: '**How many** asks for a count (countable nouns); **how much** asks for an amount (uncountable nouns).' },
      es: { title: 'Preguntas con How many / How much', desc: '20 preguntas usando "how many" o "how much" para preguntar cantidades.', intro: '**How many** se usa para sustantivos contables; **how much** para incontables o precios.' },
      zh: { title: 'How many / How much 疑问句', desc: '20 道使用 "how many" 或 "how much" 询问数量的问题。', intro: '**How many** 用于可数名词; **how much** 用于不可数名词或价格。' },
      ko: { title: 'How many / How much 질문', desc: '수량이나 가격을 묻기 위해 "how many" 또는 "how much"를 사용하는 20문제.', intro: '**How many**는 셀 수 있는 명사에, **how much**는 셀 수 없는 명사나 가격에 사용합니다.' },
      ja: { title: 'How many / How much の質問', desc: '数量や価格をたずねる "how many" や "how much" の20問。', intro: '**How many** は可算名詞に、**how much** は不可算名詞や価格に使います。' },
    };
  }
  if (word === 'when') {
    return {
      en: { title: 'When questions', desc: '20 questions using "when" to ask about a point or period of time.', intro: '**When** asks for a time: a date, a year, a time of day, a season, or a frequency.' },
      es: { title: 'Preguntas con When', desc: '20 preguntas usando "when" para preguntar el momento o fecha.', intro: '**When** se usa para preguntar por el tiempo: fecha, año, momento del día o frecuencia.' },
      zh: { title: 'When 疑问句', desc: '20 道使用 "when" 询问具体时间或日期的问题。', intro: '**When** 用于询问时间:日期、年份、一天中的时刻或频率。' },
      ko: { title: 'When 질문', desc: '시점이나 날짜를 묻기 위해 "when"을 사용하는 20문제.', intro: '**When**은 시간을 묻습니다:날짜, 연도, 하루 중 시각, 계절.' },
      ja: { title: 'When の質問', desc: '日時や時期をたずねる "when" の20問。', intro: '**When** は時間をたずねます:日付、年、時間帯、季節。' },
    };
  }
  if (word === 'where') {
    return {
      en: { title: 'Where questions', desc: '20 questions using "where" to ask about a place or direction.', intro: '**Where** asks for a place: a city, a room, a direction, or a location.' },
      es: { title: 'Preguntas con Where', desc: '20 preguntas usando "where" para preguntar por un lugar o dirección.', intro: '**Where** se usa para preguntar por un lugar: una ciudad, habitación, dirección o ubicación.' },
      zh: { title: 'Where 疑问句', desc: '20 道使用 "where" 询问地点或方向的问题。', intro: '**Where** 用于询问地点:城市、房间、方向或位置。' },
      ko: { title: 'Where 질문', desc: '장소나 방향을 묻기 위해 "where"를 사용하는 20문제.', intro: '**Where**는 장소를 묻습니다:도시, 방, 방향, 위치.' },
      ja: { title: 'Where の質問', desc: '場所や方向をたずねる "where" の20問。', intro: '**Where** は場所をたずねます:都市、部屋、方向、位置。' },
    };
  }
  if (word === 'who') {
    return {
      en: { title: 'Who questions', desc: '20 questions using "who" to ask about a person.', intro: '**Who** asks for a person: the subject, the object, or the agent of an action.' },
      es: { title: 'Preguntas con Who', desc: '20 preguntas usando "who" para preguntar por una persona.', intro: '**Who** se usa para preguntar por una persona: el sujeto, el objeto o el agente de una acción.' },
      zh: { title: 'Who 疑问句', desc: '20 道使用 "who" 询问人员的问题。', intro: '**Who** 用于询问人:动作的主体、对象或执行者。' },
      ko: { title: 'Who 질문', desc: '사람을 묻기 위해 "who"를 사용하는 20문제.', intro: '**Who**는 사람을 묻습니다:주어, 목적어, 또는 행위자.' },
      ja: { title: 'Who の質問', desc: '人をたずねる "who" の20問。', intro: '**Who** は人をたずねます:主語、目的語、または実行者。' },
    };
  }
  return {
    en: { title: 'What / What kind of questions', desc: '20 questions using "what" or "what kind of" to ask about a thing or type.', intro: '**What** asks for a thing, name, color, idea, or piece of information. **What kind of** asks for a type or category.' },
    es: { title: 'Preguntas con What / What kind of', desc: '20 preguntas usando "what" o "what kind of" para preguntar cosas o clases.', intro: '**What** se usa para preguntar por cosas, nombres, colores o datos. **What kind of** pregunta por el tipo o categoría.' },
    zh: { title: 'What / What kind of 疑问句', desc: '20 道使用 "what" 或 "what kind of" 询问事物或种类的问题。', intro: '**What** 用于询问事物、名称、颜色或信息。**What kind of** 用于询问类型或类别。' },
    ko: { title: 'What / What kind of 질문', desc: '사물이나 종류를 묻기 위해 "what" 또는 "what kind of"를 사용하는 20문제.', intro: '**What**은 사물, 이름, 색상, 정보를 묻습니다. **What kind of**는 유형이나 카테고리를 묻습니다.' },
    ja: { title: 'What / What kind of の質問', desc: '物や種類をたずねる "what" や "what kind of" の20問。', intro: '**What** は物、名前、色、情報をたずねます。**What kind of** は種類やカテゴリをたずねます。' },
  };
}

function cardTextFor(slug: string): Record<Locale, { title: string; desc: string; intro: string }> {
  if (slug === 'top-1000-idioms') return idiomsCardI18n();
  if (slug === 'top-1000-gerunds') return gerundsCardI18n();
  if (slug.startsWith('wh-words-')) return whSubtopicCardI18n(slug);
  return sectionCardI18n();
}

// ── i18n helpers (per-subTopic, per-card) ─────────────────────────────────
// Each helper returns a { en, es, zh, ko, ja } map. These were inlined
// into the old seed.ts to keep that file readable; they're hoisted here
// so the main flow is just "collect → insert".

function whyI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: '"Why" asks for a reason. The expected answer explains the cause.', tip: 'Tip: if the answer would start with "because...", the question starts with "why".' },
    es: { exp: '"Why" pide una razón. La respuesta esperada explica la causa.', tip: 'Consejo: si la respuesta empieza con "porque...", la pregunta empieza con "why".' },
    zh: { exp: '"Why" 询问原因。期望的回答解释原因。', tip: '提示:如果回答以 "because..." 开头,问题就以 "why" 开头。' },
    ko: { exp: '"Why"는 이유를 묻습니다. 기대하는 답은 이유를 설명합니다.', tip: '팁: 답이 "because..."로 시작하면 질문은 "why"로 시작합니다.' },
    ja: { exp: '"Why"は理由を聞きます。期待される答えは原因を説明します。', tip: 'ヒント:答えが "because..." で始まるなら、質問は "why" で始まります。' },
  };
}
function howI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: '"How" asks about manner or method. The expected answer describes the way something is done.', tip: 'Tip: "how" expects a manner or tool, e.g. "by bus", "with a spoon".' },
    es: { exp: '"How" pregunta por la manera o el método. La respuesta esperada describe cómo se hace algo.', tip: 'Consejo: "how" espera una forma o herramienta, p. ej. "en autobús", "con una cuchara".' },
    zh: { exp: '"How" 询问方式或方法。期望的回答描述做某事的方式。', tip: '提示:"how" 期待一种方式或工具,例如 "by bus"、"with a spoon"。' },
    ko: { exp: '"How"는 방식이나 방법을 묻습니다. 기대하는 답은 무언가를 하는 방법을 설명합니다.', tip: '팁: "how"는 방식이나 도구를 요구합니다. 예: "by bus", "with a spoon".' },
    ja: { exp: '"How"は方法や手段を聞きます。期待される答えは何かの方法を説明します。', tip: 'ヒント:"how" には方法・手段がきます。例: "by bus"、"with a spoon"。' },
  };
}
function howLongI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: '"How long" asks for a duration. The expected answer is a length of time.', tip: 'Tip: "how long" expects a duration (10 minutes, 3 years), not a number of countable things.' },
    es: { exp: '"How long" pregunta por una duración. La respuesta esperada es un período de tiempo.', tip: 'Consejo: "how long" espera una duración (10 minutos, 3 años), no un número de cosas contables.' },
    zh: { exp: '"How long" 询问持续时间。期望的回答是一个时间段。', tip: '提示:"how long" 期待一个持续时间(10 分钟、3 年),而不是可数事物的数量。' },
    ko: { exp: '"How long"은 지속 시간을 묻습니다. 기대하는 답은 시간의 길이입니다.', tip: '팁: "how long"은 지속 시간(10분, 3년)을 요구합니다. 셀 수 있는 사물의 개수가 아닙니다.' },
    ja: { exp: '"How long"は継続時間を聞きます。期待される答えは時間の長さです。', tip: 'ヒント:"how long" は継続時間(10分、3年)を聞きます。数えられる物の個数ではありません。' },
  };
}
function howManyI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: '"How many" asks for a quantity of countable items.', tip: 'Tip: "how many" + plural countable; "how much" + uncountable or money/price.' },
    es: { exp: '"How many" pregunta por una cantidad de elementos contables.', tip: 'Consejo: "how many" + contable en plural; "how much" + incontable o dinero/precio.' },
    zh: { exp: '"How many" 询问可数事物的数量。', tip: '提示:"how many" + 可数名词复数;"how much" + 不可数名词或金钱/ 价格。' },
    ko: { exp: '"How many"는 셀 수 있는 사물의 수량을 묻습니다.', tip: '팁: "how many" + 셀 수 있는 복수명사; "how much" + 셀 수 없거나 돈/가격.' },
    ja: { exp: '"How many"は数えられる物の数量を聞きます。', tip: 'ヒント:"how many" + 複数形 countable;"how much" + uncountable またはお金・価格。' },
  };
}
function howMuchI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: '"How much" asks for an amount of an uncountable thing (or a price).', tip: 'Tip: "how many" + plural countable; "how much" + uncountable or money/price.' },
    es: { exp: '"How much" pregunta por una cantidad de algo incontable (o un precio).', tip: 'Consejo: "how many" + contable en plural; "how much" + incontable o dinero/precio.' },
    zh: { exp: '"How much" 询问不可数事物的数量(或价格)。', tip: '提示:"how many" + 可数名词复数;"how much" + 不可数名词或金钱/价格。' },
    ko: { exp: '"How much"는 셀 수 없는 것의 양(또는 가격)을 묻습니다.', tip: '팁: "how many" + 셀 수 있는 복수명사; "how much" + 셀 수 없거나 돈/가격.' },
    ja: { exp: '"How much"は数えられない物の量(または価格)を聞きます。', tip: 'ヒント:"how many" + 複数形 countable;"how much" + uncountable またはお金・価格。' },
  };
}
function howOldI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: '"How old" asks for an age.', tip: 'Tip: "how old" expects a number of years (15, 30, 65, ...).' },
    es: { exp: '"How old" pregunta por una edad.', tip: 'Consejo: "how old" espera un número de años (15, 30, 65, ...).' },
    zh: { exp: '"How old" 询问年龄。', tip: '提示:"how old" 期待一个年龄数字(15、30、65、……)。' },
    ko: { exp: '"How old"는 나이를 묻습니다.', tip: '팁: "how old"는 나이 숫자(15, 30, 65, ...)를 요구합니다.' },
    ja: { exp: '"How old"は年齢を聞きます。', tip: 'ヒント:"how old" には年齢の数字(15、30、65、…)がきます。' },
  };
}
function howOftenI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: '"How often" asks for a frequency.', tip: 'Tip: "how often" expects a frequency (every day, twice a week, never, ...).' },
    es: { exp: '"How often" pregunta por una frecuencia.', tip: 'Consejo: "how often" espera una frecuencia (cada día, dos veces por semana, nunca, ...).' },
    zh: { exp: '"How often" 询问频率。', tip: '提示:"how often" 期待一个频率(每天、每周两次、从不、……)。' },
    ko: { exp: '"How often"은 빈도를 묻습니다.', tip: '팁: "how often"은 빈도(매일, 주 2회, 절대, ...)를 요구합니다.' },
    ja: { exp: '"How often"は頻度を聞きます。', tip: 'ヒント:"how often" には頻度(毎日、週2回、決して…)がきます。' },
  };
}
function whenI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: '"When" asks for a time. The expected answer is a date, time of day, or period.', tip: 'Tip: "when" accepts a time, a date, or a frequency (every Monday).' },
    es: { exp: '"When" pregunta por un tiempo. La respuesta esperada es una fecha, hora del día o período.', tip: 'Consejo: "when" acepta una hora, una fecha o una frecuencia (cada lunes).' },
    zh: { exp: '"When" 询问时间。期望的回答是日期、一天中的时间或时间段。', tip: '提示:"when" 接受一个时间、日期或频率(每周一)。' },
    ko: { exp: '"When"은 시간을 묻습니다. 기대하는 답은 날짜, 하루 중 시각, 또는 기간입니다.', tip: '팁: "when"은 시각, 날짜, 또는 빈도(매주 월요일)를 받습니다.' },
    ja: { exp: '"When"は時間を聞きます。期待される答えは日付、時刻、または期間です。', tip: 'ヒント:"when" は時刻、日付、頻度(毎週月曜日など)を受けます。' },
  };
}
function whereI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: '"Where" asks for a place. The expected answer is a location.', tip: 'Tip: "where" expects a place, room, city, or direction.' },
    es: { exp: '"Where" pregunta por un lugar. La respuesta esperada es una ubicación.', tip: 'Consejo: "where" espera un lugar, habitación, ciudad o dirección.' },
    zh: { exp: '"Where" 询问地点。期望的回答是一个位置。', tip: '提示:"where" 期待一个地点、房间、城市或方向。' },
    ko: { exp: '"Where"는 장소를 묻습니다. 기대하는 답은 위치입니다.', tip: '팁: "where"는 장소, 방, 도시, 또는 방향을 요구합니다.' },
    ja: { exp: '"Where"は場所を聞きます。期待される答えは場所です。', tip: 'ヒント:"where" には場所・部屋・都市・方向がきます。' },
  };
}
function whoI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: '"Who" asks for a person. The expected answer is a person or people.', tip: 'Tip: "who" refers only to people, not things.' },
    es: { exp: '"Who" pregunta por una persona. La respuesta esperada es una o más personas.', tip: 'Consejo: "who" se refiere solo a personas, no a cosas.' },
    zh: { exp: '"Who" 询问人。期望的回答是一个或多个人。', tip: '提示:"who" 只指代人,不指代事物。' },
    ko: { exp: '"Who"는 사람을 묻습니다. 기대하는 답은 한 명 또는 여러 명입니다.', tip: '팁: "who"는 사람만 가리킵니다. 사물이 아닙니다.' },
    ja: { exp: '"Who"は人を聞きます。期待される答えは一人または複数の人です。', tip: 'ヒント:"who" は人のみを指します。物には使いません。' },
  };
}
function whatI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: '"What" asks for a thing or a piece of information.', tip: 'Tip: "what" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.' },
    es: { exp: '"What" pregunta por una cosa o un dato.', tip: 'Consejo: "what" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.' },
    zh: { exp: '"What" 询问事物或信息。', tip: '提示:"what" 是最通用的 wh- 疑问词;除了人、地点、时间、方式或原因,几乎可以问任何事。' },
    ko: { exp: '"What"는 사물이나 정보를 묻습니다.', tip: '팁: "what"은 가장 일반적인 wh- 의문사입니다. 사람, 장소, 시간, 방식, 이유가 아닌 거의 모든 것을 물을 수 있습니다.' },
    ja: { exp: '"What"は物や情報を聞きます。', tip: 'ヒント:"what" は最も一般的な疑問詞。人・場所・時間・方法・理由以外のほぼ全てに使えます。' },
  };
}
function whatKindOfI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: '"What kind of" asks for a type or category.', tip: 'Tip: "what kind of" expects a category or class (e.g. "jazz", "small hybrid", "office work").' },
    es: { exp: '"What kind of" pregunta por un tipo o categoría.', tip: 'Consejo: "what kind of" espera una categoría o clase (p. ej. "jazz", "híbrido pequeño", "trabajo de oficina").' },
    zh: { exp: '"What kind of" 询问类型或类别。', tip: '提示:"what kind of" 期待一个类别或种类(例如 "jazz"、"小型混合动力"、"办公室工作")。' },
    ko: { exp: '"What kind of"는 종류나 범주를 묻습니다.', tip: '팁: "what kind of"는 종류나 부류를 요구합니다. 예: "jazz", "소형 하이브리드", "사무직".' },
    ja: { exp: '"What kind of"は種類やカテゴリを聞きます。', tip: 'ヒント:"what kind of" には種類・カテゴリ(例:"jazz"、"小型ハイブリッド"、"オフィスワーク")がきます。' },
  };
}
function idiomsI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: 'Idioms are fixed phrases. The correct answer matches the meaning of the whole idiom, not its individual words.', tip: 'Tip: idioms rarely translate literally. Learn the whole phrase as a single unit.' },
    es: { exp: 'Los modismos son frases fijas. La respuesta correcta coincide con el significado del modismo completo, no de cada palabra.', tip: 'Consejo: los modismos casi nunca se traducen literalmente. Aprende la frase completa como una unidad.' },
    zh: { exp: '习语是固定短语。正确答案匹配整个习语的意思,而不是单个单词。', tip: '提示:习语很少能字面翻译。把整句当一个整体来记。' },
    ko: { exp: '관용구는 고정 표현입니다. 정답은 개별 단어가 아니라 전체 관용구의 뜻과 일치합니다.', tip: '팁: 관용구는 거의 문자 그대로 번역되지 않습니다. 전체 구문을 한 단위로 외우세요.' },
    ja: { exp: 'イディオムは固定表現です。正解は単語一つ一つではなく、イディオム全体の意味に合います。', tip: 'ヒント:イディオムは文字通りには翻訳できません。フレーズ全体をまとめて覚えましょう。' },
  };
}
function bodyIdiomsI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: 'Body idioms use body parts metaphorically. Learn them as whole phrases.', tip: 'Tip: body idioms (cold feet, under the weather, keep your chin up) are common in everyday conversation.' },
    es: { exp: 'Los modismos del cuerpo usan partes del cuerpo metafóricamente. Apréndelos como frases completas.', tip: 'Consejo: los modismos del cuerpo (cold feet, under the weather, keep your chin up) son comunes en la conversación diaria.' },
    zh: { exp: '身体类习语隐喻性地使用身体部位。把它们作为整体短语来记。', tip: '提示:身体类习语(cold feet、under the weather、keep your chin up)在日常对话中很常见。' },
    ko: { exp: '신체 관련 관용구는 신체 부위를 비유적으로 사용합니다. 전체 구문으로 외우세요.', tip: '팁: 신체 관련 관용구(cold feet, under the weather, keep your chin up)는 일상 회화에서 흔히 사용됩니다.' },
    ja: { exp: '身体のイディオムは身体部位を比喩的に使います。フレーズ全体をまとめて覚えましょう。', tip: 'ヒント:身体のイディオム(cold feet、under the weather、keep your chin up)は日常会話で頻繁に使われます。' },
  };
}
function businessIdiomsI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: 'Work and business idioms describe how we communicate in the office.', tip: 'Tip: business idioms (ballpark figure, back to the drawing board, on the same page) are essential in meetings.' },
    es: { exp: 'Los modismos de trabajo y negocios describen cómo nos comunicamos en la oficina.', tip: 'Consejo: los modismos de negocios (ballpark figure, back to the drawing board, on the same page) son esenciales en reuniones.' },
    zh: { exp: '工作/商业类习语描述我们在办公室中的沟通方式。', tip: '提示:商业类习语(ballpark figure、back to the drawing board、on the same page)在会议中必不可少。' },
    ko: { exp: '업무/비즈니스 관용구는 사무실에서 어떻게 소통하는지 설명합니다.', tip: '팁: 비즈니스 관용구(ballpark figure, back to the drawing board, on the same page)는 회의에서 필수입니다.' },
    ja: { exp: '仕事・ビジネスのイディオムはオフィスでのコミュニケーションを表します。', tip: 'ヒント:ビジネスのイディオム(ballpark figure、back to the drawing board、on the same page)は会議で必須です。' },
  };
}
function timeAgeIdiomsI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: 'Time and age idioms talk about how often or how long things happen.', tip: 'Tip: once in a blue moon, kill two birds with one stone, miss the boat all deal with time or opportunity.' },
    es: { exp: 'Los modismos de tiempo y edad hablan de la frecuencia o duración de las cosas.', tip: 'Consejo: once in a blue moon, kill two birds with one stone, miss the boat tratan de tiempo u oportunidad.' },
    zh: { exp: '时间/年龄类习语谈论事情发生的频率或持续时间。', tip: '提示:once in a blue moon、kill two birds with one stone、miss the boat 都与时间或机会相关。' },
    ko: { exp: '시간/나이 관용구는 일이 얼마나 자주 또는 얼마나 오래 일어나는지 말합니다.', tip: '팁: once in a blue moon, kill two birds with one stone, miss the boat 모두 시간이나 기회와 관련됩니다.' },
    ja: { exp: '時間・年齢のイディオムは物事の頻度や長さを表します。', tip: 'ヒント:once in a blue moon、kill two birds with one stone、miss the boat はすべて時間や機会を表します。' },
  };
}
function feelingsIdiomsI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: 'Feelings and relationship idioms talk about emotions and how people interact.', tip: 'Tip: on cloud nine, get out of hand, speak of the devil are common in casual conversation about people and feelings.' },
    es: { exp: 'Los modismos de sentimientos y relaciones hablan de emociones y de cómo las personas interactúan.', tip: 'Consejo: on cloud nine, get out of hand, speak of the devil son comunes en la conversación informal sobre personas y sentimientos.' },
    zh: { exp: '情感/人际关系类习语谈论情绪和人们如何互动。', tip: '提示:on cloud nine、get out of hand、speak of the devil 在日常谈论人和情感时很常见。' },
    ko: { exp: '감정/관계 관용구는 감정과 사람들의 상호작용에 대해 말합니다.', tip: '팁: on cloud nine, get out of hand, speak of the devil는 사람과 감정에 관한 일상 대화에서 흔히 사용됩니다.' },
    ja: { exp: '感情・人間関係のイディオムは感情や人々の交流を表します。', tip: 'ヒント:on cloud nine、get out of hand、speak of the devil は人と感情についての日常会話で頻繁に使われます。' },
  };
}
function gerundI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: 'This verb takes a gerund (verb+ing) as its object. It is one of the most common patterns in English.', tip: 'Tip: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up all take a gerund.' },
    es: { exp: 'Este verbo toma un gerundio (verbo+ing) como objeto. Es uno de los patrones más comunes del inglés.', tip: 'Consejo: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up van seguidos de gerundio.' },
    zh: { exp: '这个动词以动名词 (verb+ing) 作宾语。这是英语中最常见的模式之一。', tip: '提示:enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up 后面都接动名词。' },
    ko: { exp: '이 동사는 목적어로 동명사(verb+ing)를 취합니다. 영어에서 가장 흔한 패턴 중 하나입니다.', tip: '팁: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up 모두 동명사를 목적어로 취합니다.' },
    ja: { exp: 'この動詞は目的語に動名詞 (verb+ing)をとります。英語で最もよく使われるパターンの1つです。', tip: 'ヒント:enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up はすべて動名詞を目的語にとります。' },
  };
}
function infinitiveI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: 'This verb takes a to-infinitive (to + base form) as its object.', tip: 'Tip: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose all take a to-infinitive.' },
    es: { exp: 'Este verbo toma un infinitivo con "to" (to + forma base) como objeto.', tip: 'Consejo: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose van seguidos de infinitivo con "to".' },
    zh: { exp: '这个动词以 to + 原形的不定式作宾语。', tip: '提示:want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose 后面都接 to + 原形。' },
    ko: { exp: '이 동사는 목적어로 to부정사(to + 원형)를 취합니다.', tip: '팁: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose 모두 to부정사를 목적어로 취합니다.' },
    ja: { exp: 'この動詞は目的語に to + 原形の不定詞をとります。', tip: 'ヒント:want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose はすべて to + 原形を目的語にとります。' },
  };
}
function bothI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: 'This verb can take a gerund OR a to-infinitive — and the meaning changes!', tip: 'Tip: remember, forget, stop, try, regret, go on, mean are common. "Stop smoking" = quit. "Stop to smoke" = paused to smoke.' },
    es: { exp: '¡Este verbo puede ir seguido de gerundio O de infinitivo, y el significado cambia!', tip: 'Consejo: remember, forget, stop, try, regret, go on, mean son comunes. "Stop smoking" = dejar de fumar. "Stop to smoke" = paró para fumar.' },
    zh: { exp: '这个动词既可以接动名词,也可以接 to + 原形,意思不同!', tip: '提示:remember, forget, stop, try, regret, go on, mean 是常见例子。"Stop smoking" = 戒烟。"Stop to smoke" = 停下来去抽烟。' },
    ko: { exp: '이 동사는 동명사 또는 to부정사 모두 가능하며 의미가 달라집니다!', tip: '팁: remember, forget, stop, try, regret, go on, mean이 흔합니다. "Stop smoking" = 끊다. "Stop to smoke" = 쉬다.' },
    ja: { exp: 'この動詞は動名詞と to + 原形のどちらもとれ、意味が変わります!', tip: 'ヒント:remember, forget, stop, try, regret, go on, mean が代表的。"Stop smoking" = 禁煙する。"Stop to smoke" = 一服するために立ち止まる。' },
  };
}
function adjPrepGerundI18n(): Record<Locale, { exp: string; tip: string }> {
  return {
    en: { exp: 'Adjective / preposition + gerund: a fixed English pattern. The "to" here is NOT the infinitive marker.', tip: 'Tip: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to all take a gerund.' },
    es: { exp: 'Adjetivo / preposición + gerundio: un patrón fijo en inglés. El "to" aquí NO es marca de infinitivo.', tip: 'Consejo: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to van seguidos de gerundio.' },
    zh: { exp: '形容词 / 介词 + 动名词:英语的固定模式。这里的 "to" 不是不定式标记。', tip: '提示:be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to 后面都接动名词。' },
    ko: { exp: '형용사/전치사 + 동명사: 영어의 고정 패턴. 여기서 "to"는 부정사 표시가 아닙니다.', tip: '팁: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to 모두 동명사를 목적어로 취합니다.' },
    ja: { exp: '形容詞 / 前置詞 + 動名詞:英語の固定パターンです。ここでの "to" は不定詞の目印ではありません。', tip: 'ヒント:be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to はすべて動名詞を目的語にとります。' },
  };
}
function sectionCardI18n(): Record<Locale, { title: string; desc: string; intro: string }> {
  return {
    en: { title: '', desc: '', intro: '' },
    es: { title: 'Preguntas con Wh-words', desc: '160 preguntas con las wh-words más comunes en inglés.', intro: '**Why, How, How long, How many, How much, When, Where, Who, What**. Practica 20 preguntas por cada familia.' },
    zh: { title: 'Wh- 疑问词问题', desc: '涵盖英语最常见的 9 个 wh- 疑问词的 160 道问题。', intro: '**Why, How, How long, How many, How much, When, Where, Who, What**。每个疑问词家族练习 20 题。' },
    ko: { title: 'Wh- 의문사 문제', desc: '영어에서 가장 흔한 wh- 의문사를 다루는 160문제.', intro: '**Why, How, How long, How many, How much, When, Where, Who, What**. 각 의문사군마다 20문제씩 연습합니다.' },
    ja: { title: 'Wh- 疑問詞の問題', desc: '英語で最もよく使われる9つの疑問詞をカバーする160問。', intro: '**Why, How, How long, How many, How much, When, Where, Who, What**。各疑問詞グループにつき20問練習します。' },
  };
}
function idiomsCardI18n(): Record<Locale, { title: string; desc: string; intro: string }> {
  return {
    en: { title: '', desc: '', intro: '' },
    es: { title: 'Los 1000 modismos más usados', desc: '40 preguntas para completar con los modismos más comunes.', intro: 'Los **modismos** son frases fijas cuyo significado no se deduce de las palabras. Estos 40 son los más comunes.' },
    zh: { title: '最常用 1000 习语', desc: '40 道填空题,涵盖最常见的英语习语。', intro: '**习语**是固定短语,意思不能从单词字面理解。这 40 个是最常见的。' },
    ko: { title: '가장 많이 쓰는 1000 관용구', desc: '가장 흔한 영어 관용구 40개의 빈칸 채우기.', intro: '**관용구**는 단어의 문자 뜻만으로 이해할 수 없는 고정 표현입니다. 이 40개가 가장 흔합니다.' },
    ja: { title: '頻出1000イディオム', desc: '最もよく使われる英語のイディオム40問の穴埋め。', intro: '**イディオム**は単語の文字通りの意味からでは理解できない固定表現です。この40問が最も頻出です。' },
  };
}
function gerundsCardI18n(): Record<Locale, { title: string; desc: string; intro: string }> {
  return {
    en: { title: '', desc: '', intro: '' },
    es: { title: 'Los 1000 gerundios más usados', desc: '40 preguntas sobre verbos seguidos de gerundio o infinitivo.', intro: 'Muchos verbos comunes van seguidos de un **gerundio** (verbo+ing) en vez de infinitivo. Algunos cambian de significado según la forma.' },
    zh: { title: '最常用 1000 动名词', desc: '40 道关于动词后接动名词还是不定式的填空题。', intro: '很多常用动词后接 **动名词** (verb+ing) 而不是不定式。有些动词两种形式意思不同。' },
    ko: { title: '가장 많이 쓰는 1000 동명사', desc: '동명사 또는 부정사를 목적어로 취하는 동사 40문제.', intro: '많은 흔한 동사가 **동명사** (verb+ing)를 목적어로 취하지 부정사를 취하지 않습니다. 동사에 따라 형태가 달라지면 뜻도 달라집니다.' },
    ja: { title: '頻出1000動名詞', desc: '動名詞または不定詞を目的語にとる動詞に関する40問。', intro: '多くの一般的な動詞は **動名詞** (verb+ing)を後置し、不定詞はとりません。動詞によっては形で意味が変わるものもあります。' },
  };
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error('[seed] FAILED:', (err as Error).message);
  process.exit(1);
});
