// Lesson 3: time expressions — once, twice, three times, every day,
// every week, every month, how often.
// 20 exercises, mixed types per design.md §9.
// Distribution: 6 fill_blank, 5 multiple_choice, 4 drag_drop,
//               2 true_false, 3 sentence_reorder.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'time-expressions';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 3,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // 1: fill_blank — "once a week"
    makeExercise('fill_blank', 1, PROMPT(1),
      { sentence: 'I go to the cinema ____ a week.', options: ['once', 'one', 'first', 'one time'] },
      { correct: 'once' }, EXPLANATION(1), PRO_TIP(1)),
    // 2: multiple_choice — meaning of "twice"
    makeExercise('multiple_choice', 2, PROMPT(2),
      { choices: ['one time', 'two times', 'three times', 'zero times'] },
      { correctIndex: 1 }, EXPLANATION(2), PRO_TIP(2)),
    // 3: sentence_reorder — "I exercise three times a week."
    makeExercise('sentence_reorder', 3, PROMPT(3),
      { tokens: ['I', 'exercise', 'three', 'times', 'a', 'week'] },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(3), PRO_TIP(3)),
    // 4: fill_blank — "every day"
    makeExercise('fill_blank', 4, PROMPT(4),
      { sentence: 'She drinks coffee ____ day.', options: ['every', 'all', 'each one', 'once'] },
      { correct: 'every' }, EXPLANATION(4), PRO_TIP(4)),
    // 5: drag_drop — "How often do you...?"
    makeExercise('drag_drop', 5, PROMPT(5),
      { tokens: ['How', 'often', 'do', 'you', 'exercise'] },
      { correctOrder: [0, 1, 2, 3, 4] },
      EXPLANATION(5), PRO_TIP(5)),
    // 6: true_false — "How often" is for frequency
    makeExercise('true_false', 6, PROMPT(6),
      { statement: '"How often" is used to ask about frequency.' },
      { correct: true }, EXPLANATION(6), PRO_TIP(6)),
    // 7: fill_blank — "four times a month"
    makeExercise('fill_blank', 7, PROMPT(7),
      { sentence: 'I visit my family ____ a month.', options: ['four time', 'four times', 'much', 'once'] },
      { correct: 'four times' }, EXPLANATION(7), PRO_TIP(7)),
    // 8: multiple_choice — pick correct question
    makeExercise('multiple_choice', 8, PROMPT(8),
      { choices: [
        'How often do you go to the gym?',
        'How much do you go to the gym?',
        'How long do you go to the gym?',
        'When do you go to the gym often?',
      ]},
      { correctIndex: 0 }, EXPLANATION(8), PRO_TIP(8)),
    // 9: drag_drop — "He plays football twice a week."
    makeExercise('drag_drop', 9, PROMPT(9),
      { tokens: ['plays', 'He', 'football', 'twice', 'a', 'week'] },
      { correctOrder: [1, 0, 2, 3, 4, 5] },
      EXPLANATION(9), PRO_TIP(9)),
    // 10: sentence_reorder — "How often do you eat out?"
    makeExercise('sentence_reorder', 10, PROMPT(10),
      { tokens: ['How', 'often', 'do', 'you', 'eat', 'out'] },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(10), PRO_TIP(10)),
    // 11: fill_blank — "every morning"
    makeExercise('fill_blank', 11, PROMPT(11),
      { sentence: 'I jog ____ morning.', options: ['every', 'all', 'much', 'twice'] },
      { correct: 'every' }, EXPLANATION(11), PRO_TIP(11)),
    // 12: multiple_choice — best answer for "How often...?"
    makeExercise('multiple_choice', 12, PROMPT(12),
      { choices: [
        'Yes, I do.',
        'I go twice a week.',
        'I go to the gym.',
        'At the gym.',
      ]},
      { correctIndex: 1 }, EXPLANATION(12), PRO_TIP(12)),
    // 13: true_false — "once" vs "one time"
    makeExercise('true_false', 13, PROMPT(13),
      { statement: '"Once a day" and "one time a day" mean the same thing.' },
      { correct: true }, EXPLANATION(13), PRO_TIP(13)),
    // 14: fill_blank — "five times"
    makeExercise('fill_blank', 14, PROMPT(14),
      { sentence: 'I have been to Paris ____ times.', options: ['five', 'fifth', 'once', 'all'] },
      { correct: 'five' }, EXPLANATION(14), PRO_TIP(14)),
    // 15: drag_drop — "She goes to the library every day."
    makeExercise('drag_drop', 15, PROMPT(15),
      { tokens: ['She', 'goes', 'to', 'the', 'library', 'every', 'day'] },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6] },
      EXPLANATION(15), PRO_TIP(15)),
    // 16: sentence_reorder — "We meet once a month."
    makeExercise('sentence_reorder', 16, PROMPT(16),
      { tokens: ['We', 'meet', 'once', 'a', 'month'] },
      { correctOrder: [0, 1, 2, 3, 4] },
      EXPLANATION(16), PRO_TIP(16)),
    // 17: fill_blank — "every week"
    makeExercise('fill_blank', 17, PROMPT(17),
      { sentence: 'I call my parents ____ week.', options: ['every', 'all', 'much', 'twice'] },
      { correct: 'every' }, EXPLANATION(17), PRO_TIP(17)),
    // 18: multiple_choice — pick correct sentence
    makeExercise('multiple_choice', 18, PROMPT(18),
      { choices: [
        'He goes fishing every weekend.',
        'He goes fishing every week.',
        'He goes fishing all weekend.',
        'He goes every weekend fishing.',
      ]},
      { correctIndex: 0 }, EXPLANATION(18), PRO_TIP(18)),
    // 19: drag_drop — "I check my email three times a day."
    makeExercise('drag_drop', 19, PROMPT(19),
      { tokens: ['check', 'I', 'my', 'email', 'three', 'times', 'a', 'day'] },
      { correctOrder: [1, 0, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(19), PRO_TIP(19)),
    // 20: multiple_choice — "How often" answer
    makeExercise('multiple_choice', 20, PROMPT(20),
      { choices: [
        'I never watch TV.',
        'I am watching TV.',
        'I like TV very much.',
        'I have a TV at home.',
      ]},
      { correctIndex: 0 }, EXPLANATION(20), PRO_TIP(20)),
  ],
};
