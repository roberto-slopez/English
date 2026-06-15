// Lesson 4: did / was — past simple auxiliary and "to be" in the past.
// 20 exercises in 2 sub-topics:
//   - "did" (1–10): did/didn't + base verb in questions, negatives, short answers
//   - "was_were" (11–20): was/wasn't, were/weren't, questions and short answers
// Distribution per design.md §9: 5 fill_blank, 5 multiple_choice, 3 drag_drop,
//   3 true_false, 2 sentence_reorder, 2 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'did-and-was';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 4,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── PART A: did / didn't (1–10) ───────────────────────────────────
    // 1: fill_blank — "Did you...?"
    makeExercise('fill_blank', 1, PROMPT(1),
      { sentence: '____ you go to school yesterday?', options: ['Did', 'Do', 'Was', 'Are'] },
      { correct: 'Did' }, EXPLANATION(1), PRO_TIP(1), 'did'),
    // 2: multiple_choice — negative past
    makeExercise('multiple_choice', 2, PROMPT(2),
      { choices: [
        "I didn't went to the party.",
        "I didn't go to the party.",
        "I don't went to the party.",
        "I didn't gone to the party.",
      ]},
      { correctIndex: 1 }, EXPLANATION(2), PRO_TIP(2), 'did'),
    // 3: true_false — "did" + base form
    makeExercise('true_false', 3, PROMPT(3),
      { statement: 'After "did" we use the base form of the verb (no -ed).' },
      { correct: true }, EXPLANATION(3), PRO_TIP(3), 'did'),
    // 4: fill_blank — short answer
    makeExercise('fill_blank', 4, PROMPT(4),
      { sentence: '"Did you watch the film?" — "Yes, I ____."', options: ['did', 'do', 'was', 'watched'] },
      { correct: 'did' }, EXPLANATION(4), PRO_TIP(4), 'did'),
    // 5: drag_drop — "Did she call you?"
    makeExercise('drag_drop', 5, PROMPT(5),
      { tokens: ['Did', 'she', 'call', 'you', 'last', 'night'] },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(5), PRO_TIP(5), 'did'),
    // 6: sentence_reorder — "I didn't eat breakfast."
    makeExercise('sentence_reorder', 6, PROMPT(6),
      { tokens: ['I', "didn't", 'eat', 'breakfast', 'this', 'morning'] },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(6), PRO_TIP(6), 'did'),
    // 7: multiple_choice — pick correct question
    makeExercise('multiple_choice', 7, PROMPT(7),
      { choices: [
        'Did you saw the news?',
        'Did you see the news?',
        'Saw you the news?',
        'You did see the news?',
      ]},
      { correctIndex: 1 }, EXPLANATION(7), PRO_TIP(7), 'did'),
    // 8: true_false — "did" in negatives
    makeExercise('true_false', 8, PROMPT(8),
      { statement: 'The negative of "did" is "did not" (or "didn\'t").' },
      { correct: true }, EXPLANATION(8), PRO_TIP(8), 'did'),
    // 9: fill_blank — "They ___ come."
    makeExercise('fill_blank', 9, PROMPT(9),
      { sentence: 'They ____ come to class yesterday.', options: ["didn't", 'wasn\'t', 'don\'t', 'not'] },
      { correct: "didn't" }, EXPLANATION(9), PRO_TIP(9), 'did'),
    // 10: drag_drop — "What did you do?"
    makeExercise('drag_drop', 10, PROMPT(10),
      { tokens: ['What', 'did', 'you', 'do', 'last', 'weekend'] },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(10), PRO_TIP(10), 'did'),

    // ── PART B: was / were (11–20) ────────────────────────────────────
    // 11: fill_blank — "I ___ at home."
    makeExercise('fill_blank', 11, PROMPT(11),
      { sentence: 'I ____ at home last night.', options: ['was', 'were', 'am', 'did'] },
      { correct: 'was' }, EXPLANATION(11), PRO_TIP(11), 'was_were'),
    // 12: multiple_choice — "was" vs "were"
    makeExercise('multiple_choice', 12, PROMPT(12),
      { choices: [
        'They was tired after the trip.',
        'They were tired after the trip.',
        'They was were tired after the trip.',
        'They be tired after the trip.',
      ]},
      { correctIndex: 1 }, EXPLANATION(12), PRO_TIP(12), 'was_were'),
    // 13: true_false — "were" with plural
    makeExercise('true_false', 13, PROMPT(13),
      { statement: 'We use "were" with plural subjects (you, we, they).' },
      { correct: true }, EXPLANATION(13), PRO_TIP(13), 'was_were'),
    // 14: sentence_reorder — "She was happy."
    makeExercise('sentence_reorder', 14, PROMPT(14),
      { tokens: ['She', 'was', 'very', 'happy', 'yesterday'] },
      { correctOrder: [0, 1, 2, 3, 4] },
      EXPLANATION(14), PRO_TIP(14), 'was_were'),
    // 15: fill_blank — "We ___ at the park."
    makeExercise('fill_blank', 15, PROMPT(15),
      { sentence: 'We ____ at the park on Saturday.', options: ['was', 'were', 'are', 'did'] },
      { correct: 'were' }, EXPLANATION(15), PRO_TIP(15), 'was_were'),
    // 16: multiple_choice — negative
    makeExercise('multiple_choice', 16, PROMPT(16),
      { choices: [
        "He wasn't at school.",
        "He weren't at school.",
        "He didn't at school.",
        "He not was at school.",
      ]},
      { correctIndex: 0 }, EXPLANATION(16), PRO_TIP(16), 'was_were'),
    // 17: drag_drop — "Where were you?"
    makeExercise('drag_drop', 17, PROMPT(17),
      { tokens: ['Where', 'were', 'you', 'last', 'night'] },
      { correctOrder: [0, 1, 2, 3, 4] },
      EXPLANATION(17), PRO_TIP(17), 'was_were'),
    // 18: matching — match subjects to "was" / "were"
    makeExercise('matching', 18, PROMPT(18),
      {
        left: ['I', 'You', 'He / She / It', 'We', 'They'],
        right: ['were', 'were', 'was', 'were', 'were'],
      },
      {
        pairs: [
          { leftIndex: 0, rightIndex: 2 },
          { leftIndex: 1, rightIndex: 1 },
          { leftIndex: 2, rightIndex: 2 },
          { leftIndex: 3, rightIndex: 1 },
          { leftIndex: 4, rightIndex: 1 },
        ],
      },
      EXPLANATION(18), PRO_TIP(18), 'was_were'),
    // 19: true_false — short answer
    makeExercise('true_false', 19, PROMPT(19),
      { statement: 'A short answer to "Were you tired?" can be "Yes, I was."' },
      { correct: true }, EXPLANATION(19), PRO_TIP(19), 'was_were'),
    // 20: matching — match pronouns to "was" / "were" negatives
    makeExercise('matching', 20, PROMPT(20),
      {
        left: ['I', 'He', 'She', 'We', 'They'],
        right: ["wasn't", "wasn't", "wasn't", "weren't", "weren't"],
      },
      {
        pairs: [
          { leftIndex: 0, rightIndex: 2 },
          { leftIndex: 1, rightIndex: 0 },
          { leftIndex: 2, rightIndex: 1 },
          { leftIndex: 3, rightIndex: 3 },
          { leftIndex: 4, rightIndex: 4 },
        ],
      },
      EXPLANATION(20), PRO_TIP(20), 'was_were'),
  ],
};
