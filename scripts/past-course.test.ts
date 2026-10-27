import assert from 'node:assert/strict';
import { test } from 'node:test';
import type { PoolClient } from 'pg';
import { ALL_LESSONS } from '../src/content/lessons.js';
import { pastCourseLessons } from '../src/content/past-course/index.js';
import { translationCatalog } from '../src/content/translations/catalog.js';
import { validateAnswer } from '../src/lib/exercise-validation.js';
import { restoreProgress } from '../src/lib/progress.js';
import { lessonReplacements, replacementFor } from '../src/lib/lesson-replacements.js';
import { seedContent } from '../src/lib/seed.js';
import { listLessons, getLessonBySlug } from '../src/lib/lessons-service.js';

test('the replacement course has nine ordered lessons, 460 distinct tasks and full bilingual feedback', () => {
  assert.deepEqual(pastCourseLessons.map(l => l.exercises.length), [40, 60, 60, 60, 60, 60, 40, 40, 40]);
  assert.equal(new Set(ALL_LESSONS.map(l => l.slug)).size, ALL_LESSONS.length);
  const titleSet = new Set<string>();
  const descSet = new Set<string>();
  const keys = new Set<string>();
  for (const lesson of pastCourseLessons) {
    assert.ok(ALL_LESSONS.some(l => l.slug === lesson.slug));
    const titleEn = translationCatalog.en[lesson.titleKey]!;
    const titleEs = translationCatalog.es[lesson.titleKey]!;
    const descEn = translationCatalog.en[lesson.descriptionKey]!;
    const descEs = translationCatalog.es[lesson.descriptionKey]!;
    assert.ok(titleEn.length >= 35, `Expected contextual English title for ${lesson.slug}: ${titleEn}`);
    assert.ok(titleEs.length >= 35, `Expected contextual Spanish title for ${lesson.slug}: ${titleEs}`);
    assert.ok(!titleSet.has(titleEn)); titleSet.add(titleEn);
    assert.ok(!descSet.has(descEn)); descSet.add(descEn);
    assert.notEqual(descEn, descEs);
    assert.equal(new Set(lesson.exercises.map(e => JSON.stringify([e.data, translationCatalog.en[e.promptKey]]))).size, lesson.exercises.length);
    for (const [index, e] of lesson.exercises.entries()) {
      assert.equal(e.orderIndex, index + 1);
      assert.ok(!keys.has(e.promptKey)); keys.add(e.promptKey);
      for (const key of [e.promptKey, e.explanationKey!, lesson.introKey]) {
        assert.ok(translationCatalog.en[key]?.trim(), key);
        assert.ok(translationCatalog.es[key]?.trim(), key);
        assert.notEqual(translationCatalog.en[key], translationCatalog.es[key]);
      }
      if (e.type === 'fill_blank') {
        assert.ok('sentence' in e.data && (e.data.sentence.match(/_{2,}/g) ?? []).length === 1);
        assert.ok('correct' in e.answer);
        assert.equal(validateAnswer(e, e.answer.correct), true);
        assert.equal(validateAnswer(e, ''), false);
        if ('options' in e.data) assert.equal(new Set(e.data.options).size, e.data.options!.length);
      }
      if ('choices' in e.data && 'correctIndex' in e.answer) {
        assert.equal(new Set(e.data.choices).size, e.data.choices.length);
        assert.equal(validateAnswer(e, e.answer.correctIndices ?? e.answer.correctIndex), true);
      }
    }
  }
  assert.equal(keys.size, 460);
});

test('past tense clauses use varied, grammatically congruent temporal unions for each tense', () => {
  for (const [kind, slug] of ['simple-past-practice', 'past-continuous-practice', 'past-perfect-practice', 'past-perfect-continuous-practice'].entries()) {
    const lesson = pastCourseLessons.find(l => l.slug === slug)!;
    const contextualExercises = lesson.exercises.slice(20, 50);
    const sentences = contextualExercises.map(e => (e.data as { sentence: string }).sentence);
    assert.equal(new Set(sentences).size, 30, `${slug} sentences 21-50 must all be distinct`);
    for (const s of sentences) {
      if (kind === 1) assert.match(s, /\b(?:when|while)\b/i, `${slug} should join ongoing action with when/while: ${s}`);
      if (kind === 2) assert.match(s, /\b(?:before|by the time|after|when)\b/i, `${slug} should anchor earlier past action: ${s}`);
      if (kind === 3) assert.match(s, /\b(?:for|since|all)\b.*\b(?:before|when)\b/i, `${slug} should pair duration with a past anchor: ${s}`);
    }
  }
});

test('past tense practice rejects the learners common auxiliary and verb-form confusions', () => {
  const cases = [
    ['simple-past-practice', 31, 'did not study', 'did not studied'],
    ['simple-past-practice', 41, 'Did she write', 'Did she wrote'],
    ['past-continuous-practice', 31, 'was not studying', 'did not studying'],
    ['past-continuous-practice', 42, 'Were they reading', 'Was they reading'],
    ['past-perfect-practice', 41, 'Had she written', 'Had she wrote'],
    ['past-perfect-practice', 52, 'had had', 'had have'],
    ['past-perfect-continuous-practice', 31, 'had not been studying', 'had not being studying'],
    ['past-perfect-continuous-practice', 41, 'Had she been writing', 'Had she been written'],
    ['everyday-modals', 20, 'taken', 'took'],
    ['everyday-reporting', 28, 'had ordered', 'had order'],
    ['assumptions-and-responses', 32, 'gone', 'went'],
  ] as const;
  for (const [slug, number, right, wrong] of cases) {
    const e = pastCourseLessons.find(l => l.slug === slug)!.exercises[number - 1]!;
    assert.equal(validateAnswer(e, right), true, `${slug} #${number}: ${right}`);
    assert.equal(validateAnswer(e, wrong), false, `${slug} #${number}: ${wrong}`);
  }
  for (const lesson of pastCourseLessons.slice(1, 5)) {
    assert.equal(lesson.exercises.filter(e => e.subTopic === 'negative').length, 10);
    assert.equal(lesson.exercises.filter(e => e.subTopic === 'questions').length, 10);
    assert.ok(lesson.exercises.filter(e => 'options' in e.data && e.data.options?.length === 0).length >= 40);
  }
});

test('synonymous conversational responses require all valid answers and reject partial selection', () => {
  const lesson = pastCourseLessons.find(l => l.slug === 'assumptions-and-responses')!;
  for (const number of [21, 22]) {
    const e = lesson.exercises[number - 1]!;
    assert.equal(validateAnswer(e, [2, 0, 1]), true);
    assert.equal(validateAnswer(e, [0]), false);
    assert.equal(validateAnswer(e, [0, 1, 2, 3]), false);
  }
  const intro = translationCatalog.en['lesson.past-perfect-continuous-practice.intro']!;
  assert.match(intro, /No interruption is required/);
  assert.match(intro, /had known/);
});

test('retired lessons redirect to distinct successors without reusing old progress keys', () => {
  for (const [oldSlug, newSlug] of Object.entries(lessonReplacements)) {
    assert.equal(ALL_LESSONS.some(l => l.slug === oldSlug), false);
    assert.equal(replacementFor(oldSlug), newSlug);
    const lesson = ALL_LESSONS.find(l => l.slug === newSlug)!;
    assert.ok(lesson);
    const oldKey = `exercise.${oldSlug}.1.prompt`;
    const saved = { version: 2, mastered: [oldKey], lastAnswers: { [oldKey]: 'correct' } };
    assert.equal(restoreProgress(saved, lesson.exercises).completed, 0);
    assert.deepEqual(saved.mastered, [oldKey]);
  }
  assert.equal(replacementFor('toString'), undefined);
  assert.equal(replacementFor('conditionals-all'), undefined);
});

test('partial seeding retires only predecessors with a seeded successor and never deletes content', async () => {
  const lesson = pastCourseLessons.find(l => l.slug === 'past-perfect-practice')!;
  const queries: { sql: string; params: unknown[] }[] = [];
  const client = { query: async (sql: string, params: unknown[] = []) => {
    queries.push({ sql, params });
    return { rows: sql.includes('SELECT id, slug') ? [{ id: 52, slug: lesson.slug }] : [] };
  } } as unknown as PoolClient;
  await seedContent(client, { lessons: [lesson], translations: [] });
  const retired = queries.filter(q => q.sql.startsWith('UPDATE lessons SET is_published = 0'));
  assert.equal(retired.length, 1);
  assert.deepEqual(retired[0]!.params, [['past-perfect']]);
  assert.ok(queries.every(q => !/DELETE|TRUNCATE|RESTART IDENTITY/.test(q.sql)));
});

test('the learner catalog loads the nine steps with their exact counts and translated instructions', async () => {
  const before = process.env.ENGLISH_E2E;
  process.env.ENGLISH_E2E = '1';
  try {
    const listed = await listLessons('es', { category: 'grammar' });
    assert.deepEqual(listed.slice(3, 12).map(l => l.slug), pastCourseLessons.map(l => l.slug));
    for (const source of pastCourseLessons) {
      const loaded = await getLessonBySlug(source.slug, 'es');
      assert.equal(loaded?.exercises.length, source.exercises.length);
      assert.match(loaded!.intro, /Plan de estudio/);
      assert.ok(loaded!.translations[source.exercises[0]!.promptKey]);
    }
  } finally {
    if (before === undefined) delete process.env.ENGLISH_E2E; else process.env.ENGLISH_E2E = before;
  }
});
