import assert from 'node:assert/strict';
import { test } from 'node:test';
import { ALL_LESSONS } from '../src/content/lessons.js';
import { translationCatalog } from '../src/content/translations/catalog.js';
import { validateAnswer } from '../src/lib/exercise-validation.js';
import { lesson as originalHabits } from '../src/content/lessons/future-forms-and-used-to.js';
import { lessonCategory } from '../src/lib/page-labels.js';
import { listLessons, getNextVocabularyLesson } from '../src/lib/lessons-service.js';
import { GET as vocabularyWords } from '../src/pages/api/vocabulary/[slug].js';
import type { APIContext } from 'astro';

test('conditional single-answer gaps never offer two equivalent correct connectors', () => {
  const lesson = ALL_LESSONS.find(l => l.slug === 'conditional-conjunctions')!;
  for (const [number, valid] of [[1, ['As', 'So']], [2, ['provided', 'providing']]] as const) {
    const exercise = lesson.exercises.find(e => e.orderIndex === number)!;
    assert.ok('options' in exercise.data);
    assert.equal(exercise.data.options!.filter(option => (valid as readonly string[]).includes(option)).length, 1);
  }
});

test('class vocabulary stays out of grammar, exposes study words, and never interrupts the 40-chunk sequence', async () => {
  const previous = process.env.ENGLISH_E2E;
  process.env.ENGLISH_E2E = '1';
  try {
    assert.equal(lessonCategory('class-vocab-annoying-things'), 'vocabulary');
    const grammar = await listLessons('en', { category: 'grammar' });
    const vocabulary = await listLessons('en', { category: 'vocabulary' });
    assert.equal(grammar.some(l => l.slug.startsWith('class-vocab-')), false);
    assert.equal(vocabulary.filter(l => l.slug.startsWith('class-vocab-')).length, 7);
    assert.equal(vocabulary.filter(l => l.slug.startsWith('vocab-chunk-')).length, 40);
    assert.equal((await getNextVocabularyLesson('vocab-chunk-01', 'en'))?.slug, 'vocab-chunk-02');
    assert.equal(await getNextVocabularyLesson('vocab-chunk-40', 'en'), null);
    assert.equal((await getNextVocabularyLesson('class-vocab-annoying-things', 'en'))?.slug, 'class-vocab-facing-challenges');
    const response = await vocabularyWords({ params: { slug: 'class-vocab-annoying-things' } } as unknown as APIContext) as Response;
    assert.equal(response.status, 200);
    const { words } = await response.json();
    assert.equal(words.length, 12);
    assert.ok(words.some((word: { word: string }) => word.word === "get on somebody's nerves"));
  } finally {
    if (previous === undefined) delete process.env.ENGLISH_E2E; else process.env.ENGLISH_E2E = previous;
  }
});

test('class extensions preserve existing progress keys and cover photographed gaps', () => {
  const updated = ALL_LESSONS.find(l => l.slug === originalHabits.slug)!;
  assert.deepEqual(updated.exercises.slice(0, originalHabits.exercises.length).map(e => e.promptKey), originalHabits.exercises.map(e => e.promptKey));
  assert.ok(updated.exercises.length > originalHabits.exercises.length);
  const text = JSON.stringify(updated.exercises);
  assert.match(text, /be able to dance/);
  assert.match(text, /contacts|braces/);
  const willingness = ALL_LESSONS.find(l => l.slug === 'willingness-and-unwillingness')!;
  assert.match(JSON.stringify(willingness.exercises), /passionate/);
  assert.match(JSON.stringify(willingness.exercises), /anxious/);
  for (const lesson of ALL_LESSONS) {
    assert.equal(new Set(lesson.exercises.map(e => e.promptKey)).size, lesson.exercises.length);
    assert.equal(new Set(lesson.exercises.map(e => e.orderIndex)).size, lesson.exercises.length);
  }
});

test('announcing bad news uses regret to inform and explains the intended meaning', () => {
  const exercise = ALL_LESSONS.find(l => l.slug === 'top-1000-gerunds')!.exercises.find(e => e.orderIndex === 25)!;
  assert.equal(validateAnswer(exercise, 'to inform'), true);
  assert.equal(validateAnswer(exercise, 'informing'), false);
  assert.match(translationCatalog.en[exercise.explanationKey!]!, /announc|bad news/i);
  assert.match(translationCatalog.es[exercise.explanationKey!]!, /anunci|noticia/i);
});

test('new grammar distinguishes habitual will, participles, and valid alternative answers', () => {
  for (const slug of ['present-habits', 'present-participles']) {
    const lesson = ALL_LESSONS.find(l => l.slug === slug);
    assert.ok(lesson, slug);
    assert.equal(lesson.exercises.length, 20);
    assert.ok(new Set(lesson.exercises.map(e => e.type)).size >= 4);
    const intro = translationCatalog.en[lesson.introKey]!;
    assert.match(intro, slug === 'present-habits' ? /tend to/ : /same subject/);
    const multi = lesson.exercises.find(e => 'correctIndices' in e.answer)!;
    assert.ok(multi, 'Notes sometimes permit both forms');
    assert.equal(validateAnswer(multi, (multi.answer as { correctIndices: number[] }).correctIndices), true);
    assert.equal(validateAnswer(multi, []), false);
  }
});

test('all seven photographed vocabulary sets offer meaning and context practice for every target', () => {
  const expected = { 'annoying-things': 12, 'facing-challenges': 14, personality: 12,
    'strong-feelings': 11, 'dealing-with-emotions': 12, exploration: 10, 'campus-and-social': 10 };
  for (const [name, entries] of Object.entries(expected)) {
    const lesson = ALL_LESSONS.find(l => l.slug === `class-vocab-${name}`);
    assert.ok(lesson, `Missing class vocabulary: ${name}`);
    assert.ok(lesson.exercises.length >= entries * 2, `Incomplete practice: ${name}`);
    for (const exercise of lesson.exercises) {
      assert.ok(translationCatalog.en[exercise.promptKey]);
      assert.ok(translationCatalog.es[exercise.promptKey]);
      assert.ok(translationCatalog.en[exercise.explanationKey!]);
      assert.ok(translationCatalog.es[exercise.explanationKey!]);
      if (exercise.type === 'fill_blank' && 'options' in exercise.data && exercise.data.options) {
        assert.equal(new Set(exercise.data.options).size, 4);
        assert.equal(exercise.data.options.some(opt => opt.includes(' ')), false);
      }
    }
    const fillPositions = new Set(
      lesson.exercises
        .filter(e => e.type === 'fill_blank' && 'options' in e.data && e.data.options)
        .map(e => (e.data as { options: string[] }).options.indexOf((e.answer as { correct: string }).correct))
    );
    assert.ok(fillPositions.size >= 3, `Expected rotated fill_blank options in ${name}`);
  }
});

test('frequency feedback explains its own question and frequency gaps provide deciding context', () => {
  const lesson = ALL_LESSONS.find(l => l.slug === 'adverbs-of-frequency')!;
  for (const [number, context] of [[2, /every|each/i], [7, /almost never|once a year/i]] as const) {
    const exercise = lesson.exercises.find(e => e.orderIndex === number)!;
    assert.ok('sentence' in exercise.data);
    assert.match(exercise.data.sentence, context);
  }
  const exercise = lesson.exercises.find(e => e.orderIndex === 10)!;
  assert.equal(validateAnswer(exercise, true), true);
  assert.match(translationCatalog.en[exercise.explanationKey!]!, /sometimes/i);
  assert.match(translationCatalog.es[exercise.explanationKey!]!, /sometimes/i);
});
