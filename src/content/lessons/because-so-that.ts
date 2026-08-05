// Lesson 1: because / so that — cause and result.
// 20 exercises, mixed types per design.md §9.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'because-so-that';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 1,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // 1: fill_blank — basic "because" reason
    makeExercise('fill_blank', 1, PROMPT(1),
      { sentence: 'I drank some water ____ I was thirsty.', options: ['because', 'so', 'so that', 'although'] },
      { correct: 'because' }, EXPLANATION(1), PRO_TIP(1)),
    // 2: multiple_choice — "because" vs "so" placement
    makeExercise('multiple_choice', 2, PROMPT(2),
      { choices: [
        'It was cold, because I put on a coat.',
        'I put on a coat because it was cold.',
        'I put on a coat, so I was cold.',
        'Because I was cold, I put not on a coat.',
      ]},
      { correctIndex: 1 }, EXPLANATION(2), PRO_TIP(2)),
    // 3: sentence_reorder — basic "because" sentence
    makeExercise('sentence_reorder', 3, PROMPT(3),
      { tokens: ['She', 'was', 'tired', 'because', 'she', 'slept', 'late.'] },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6] },
      EXPLANATION(3), PRO_TIP(3)),
    // 4: fill_blank — "so that" for purpose
    makeExercise('fill_blank', 4, PROMPT(4),
      { sentence: 'She woke up early ____ she could catch the bus.', options: ['so that', 'because', 'so', 'although'] },
      { correct: 'so that' }, EXPLANATION(4), PRO_TIP(4)),
    // 5: drag_drop — "so that" sentence with slots
    makeExercise('drag_drop', 5, PROMPT(5),
      {
        tokens: ['I', 'studied', 'hard', 'so', 'that', 'I', 'could', 'pass'],
        slots: ['____', '____', '____', '____', '____', '____', '____', '____'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(5), PRO_TIP(5)),
    // 6: true_false — "because" at the start of a sentence
    makeExercise('true_false', 6, PROMPT(6),
      { statement: 'A sentence can start with "Because" when the reason comes first.' },
      { correct: true }, EXPLANATION(6), PRO_TIP(6)),
    // 7: multiple_choice — pick the right connector
    makeExercise('multiple_choice', 7, PROMPT(7),
      { choices: [
        'He brought an umbrella because it might rain.',
        'He brought an umbrella so that it might rain.',
        'He brought an umbrella so it was raining.',
        'He brought an umbrella because of rain.',
      ]},
      { correctIndex: 0 }, EXPLANATION(7), PRO_TIP(7)),
    // 8: fill_blank — "because of" + noun
    makeExercise('fill_blank', 8, PROMPT(8),
      { sentence: 'The match was cancelled ____ the rain.', options: ['because of', 'because', 'so that', 'so'] },
      { correct: 'because of' }, EXPLANATION(8), PRO_TIP(8)),
    // 9: drag_drop — order tokens for a "so" sentence
    makeExercise('drag_drop', 9, PROMPT(9),
      { tokens: ['I', 'was', 'hungry,', 'so', 'I', 'ate', 'a', 'sandwich.'] },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(9), PRO_TIP(9)),
    // 10: sentence_reorder — "so that" sentence
    makeExercise('sentence_reorder', 10, PROMPT(10),
      { tokens: ['He', 'spoke', 'slowly', 'so', 'that', 'everyone', 'could', 'understand.'] },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(10), PRO_TIP(10)),
    // 11: multiple_choice — cause vs purpose
    makeExercise('multiple_choice', 11, PROMPT(11),
      { choices: [
        'I went to bed early so I was tired.',
        'I went to bed early because I was tired.',
        'I went to bed early so that I could rest.',
        'I went to bed early because of rest.',
      ]},
      { correctIndex: 1 }, EXPLANATION(11), PRO_TIP(11)),
    // 12: true_false — "so that" requires a purpose clause
    makeExercise('true_false', 12, PROMPT(12),
      { statement: '"So that" introduces a purpose — the reason someone does something in order to achieve a result.' },
      { correct: true }, EXPLANATION(12), PRO_TIP(12)),
    // 13: fill_blank — "so" to show result
    makeExercise('fill_blank', 13, PROMPT(13),
      { sentence: 'It was raining, ____ we stayed inside.', options: ['so', 'because', 'so that', 'although'] },
      { correct: 'so' }, EXPLANATION(13), PRO_TIP(13)),
    // 14: drag_drop — "because" sentence with adjectives
    makeExercise('drag_drop', 14, PROMPT(14),
      { tokens: ['She', 'was', 'happy', 'because', 'she', 'passed', 'the', 'exam.'] },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(14), PRO_TIP(14)),
    // 15: multiple_choice — context: "because" + past tense
    makeExercise('multiple_choice', 15, PROMPT(15),
      { choices: [
        'I stayed home because I felt sick.',
        'I stayed home so that I felt sick.',
        'I stayed home so I sick felt.',
        'I because stayed home I felt sick.',
      ]},
      { correctIndex: 0 }, EXPLANATION(15), PRO_TIP(15)),
    // 16: fill_blank — "so that" + could
    makeExercise('fill_blank', 16, PROMPT(16),
      { sentence: 'I saved money ____ I could buy a bike.', options: ['so that', 'because', 'so', 'although'] },
      { correct: 'so that' }, EXPLANATION(16), PRO_TIP(16)),
    // 17: multiple_choice — "because of" vs "because"
    makeExercise('multiple_choice', 17, PROMPT(17),
      { choices: [
        'The flight was delayed because the fog.',
        'The flight was delayed because of the fog.',
        'The flight was delayed so the fog.',
        'The flight was delayed so that the fog.',
      ]},
      { correctIndex: 1 }, EXPLANATION(17), PRO_TIP(17)),
    // 18: drag_drop — "so that everyone could hear" sentence
    makeExercise('drag_drop', 18, PROMPT(18),
      { tokens: ['He', 'spoke', 'louder', 'so', 'that', 'everyone', 'could', 'hear.'] },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(18), PRO_TIP(18)),
    // 19: multiple_choice — "so" vs "so that"
    makeExercise('multiple_choice', 19, PROMPT(19),
      { choices: [
        'I was hungry, so that I ate.',
        'I was hungry, so I ate.',
        'I ate so that I was hungry.',
        'I ate so I was hungry.',
      ]},
      { correctIndex: 1 }, EXPLANATION(19), PRO_TIP(19)),
    // 20: fill_blank — negative purpose with "so that...wouldn't"
    makeExercise('fill_blank', 20, PROMPT(20),
      { sentence: "He whispered ____ he wouldn't wake the baby.", options: ['so that', 'because', 'so', 'although'] },
      { correct: 'so that' }, EXPLANATION(20), PRO_TIP(20)),
  ],
};
