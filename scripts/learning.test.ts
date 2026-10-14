import { test, beforeEach } from 'node:test';
import assert from 'node:assert/strict';
import { awardPoints, getStreak, resetStreak, getGrandTotal } from '../src/lib/points.js';
import { restoreProgress, recordAttempt } from '../src/lib/progress.js';
import { validateAnswer, describeAnswer } from '../src/lib/exercise-validation.js';
import type { Exercise } from '../src/types.js';
import {vocabLessons,chunkEntries} from '../src/content/vocabulary/top2000-vocabulary.js';
import {vocabularySession} from '../src/lib/practice-session.js';

const storage = new Map<string, string>();
Object.assign(globalThis, { window: {}, localStorage: {
  getItem: (key: string) => storage.get(key) ?? null,
  setItem: (key: string, value: string) => storage.set(key, value),
} });
beforeEach(() => storage.clear());

test('two correct answers keep a streak of two, independently of their points', () => {
  awardPoints({ slug: 'test', exerciseId: 1, attempts: 1, previousStreak: 0 });
  assert.equal(getStreak('test'), 1);
  const second = awardPoints({ slug: 'test', exerciseId: 2, attempts: 1, previousStreak: getStreak('test') });
  assert.equal(second.breakdown.streak, 4);
  assert.equal(getStreak('test'), 2);
});

test('a wrong answer breaks the streak and the same run cannot credit twice', () => {
  const args = { slug: 'test', exerciseId: 'stable-key', sessionId: 'run', attempts: 1, previousStreak: 0 };
  awardPoints(args);
  const total = getGrandTotal();
  assert.equal(awardPoints(args).awarded, 0);
  assert.equal(getGrandTotal(), total);
  resetStreak('test');
  assert.equal(getStreak('test'), 0);
});
test('large totals do not wrap at the 32 bit boundary', () => {
  storage.set('english.points.total', String(2 ** 31));
  awardPoints({ slug: 'test', exerciseId: 1, attempts: 1, previousStreak: 0 });
  assert.equal(getGrandTotal(), 2 ** 31 + 17);
});
test('legacy progress migrates known IDs and repeated success counts once', () => {
  const exercises = [{ id: 12, promptKey: 'exercise.first' }, { id: 13, promptKey: 'exercise.second' }];
  const restored = restoreProgress({ completed: 99, lastAnswers: {12: 'correct', 999: 'correct'}, attempts: {12: 2} }, exercises);
  assert.equal(restored.completed, 1);
  assert.equal(recordAttempt(restored, 'exercise.first', true).completed, 1);
  restored.session.index = 1;
  restored.session.feedback = 'wrong';
  restored.session.draft = 'draft';
  assert.deepEqual(restoreProgress(restored, exercises).session, restored.session);
});
test('unselected and malformed answers are rejected instead of coerced into correct answers', () => {
  const exercise = (type: Exercise['type'], answer: Exercise['answer']) => ({ type, answer } as Exercise);
  assert.equal(validateAnswer(exercise('multiple_choice', {correctIndex: 0}), null), false);
  assert.equal(validateAnswer(exercise('true_false', {correct: false}), undefined), false);
  assert.equal(validateAnswer(exercise('matching', {pairs: [{leftIndex:0,rightIndex:0},{leftIndex:1,rightIndex:1}]}), [{leftIndex:0,rightIndex:0},{leftIndex:0,rightIndex:0}]), false);
  assert.equal(describeAnswer({correct:false}, 'true_false'), 'False');
});
test('vocabulary practice covers all fifty words in nine runs and keeps six unique stable questions per run',()=>{
  for(const [index,lesson] of vocabLessons.entries()){
    assert.equal(lesson.exercises.length,50);
    const words=new Set(lesson.exercises.map(e=>e.type==='multiple_choice'?'choices' in e.data && 'correctIndex' in e.answer?e.data.choices[e.answer.correctIndex]:null:'correct' in e.answer?e.answer.correct:null));
    assert.deepEqual(words,new Set(chunkEntries(index).map(e=>e.word)));
    const seen=new Set<string>();for(let round=0;round<9;round++){const session=vocabularySession(lesson.exercises,round);assert.equal(new Set(session.map(e=>e.promptKey)).size,6);session.forEach(e=>seen.add(e.promptKey));}
    assert.equal(seen.size,50);
  }
});
