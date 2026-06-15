// Lesson 2: adverbs of frequency — always, usually, often, sometimes,
// rarely, hardly ever, never, occasionally.
// 20 exercises, mixed types per design.md §9.
// Distribution: 5 fill_blank, 6 multiple_choice, 3 drag_drop,
//               4 true_false, 2 sentence_reorder.
//
// Adverb placement: BEFORE the main verb (I always eat), AFTER "to be"
// (She is always late).

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'adverbs-of-frequency';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 2,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // 1: multiple_choice — order on a scale
    makeExercise('multiple_choice', 1, PROMPT(1),
      { choices: ['always', 'never', 'sometimes', 'usually'] },
      { correctIndex: 0 }, EXPLANATION(1), PRO_TIP(1)),
    // 2: fill_blank — "I ___ go to the gym."
    makeExercise('fill_blank', 2, PROMPT(2),
      { sentence: 'I ____ go to the gym on weekends.', options: ['always', 'never', 'twice', 'once'] },
      { correct: 'always' }, EXPLANATION(2), PRO_TIP(2)),
    // 3: true_false — placement rule
    makeExercise('true_false', 3, PROMPT(3),
      { statement: 'Frequency adverbs usually go BEFORE the main verb.' },
      { correct: true }, EXPLANATION(3), PRO_TIP(3)),
    // 4: multiple_choice — pick the correct sentence
    makeExercise('multiple_choice', 4, PROMPT(4),
      { choices: [
        'She always is late for class.',
        'She is always late for class.',
        'Always she is late for class.',
        'She late is always for class.',
      ]},
      { correctIndex: 1 }, EXPLANATION(4), PRO_TIP(4)),
    // 5: drag_drop — order a sentence
    makeExercise('drag_drop', 5, PROMPT(5),
      { tokens: ['usually', 'I', 'coffee', 'drink', 'in', 'the', 'morning'] },
      { correctOrder: [1, 0, 3, 2, 4, 5, 6] },
      EXPLANATION(5), PRO_TIP(5)),
    // 6: true_false — "hardly ever"
    makeExercise('true_false', 6, PROMPT(6),
      { statement: '"Hardly ever" means almost never.' },
      { correct: true }, EXPLANATION(6), PRO_TIP(6)),
    // 7: fill_blank — "He ___ watches TV."
    makeExercise('fill_blank', 7, PROMPT(7),
      { sentence: 'He ____ watches TV in the evening.', options: ['always', 'rarely', 'twice', 'much'] },
      { correct: 'rarely' }, EXPLANATION(7), PRO_TIP(7)),
    // 8: multiple_choice — frequency adverb meaning
    makeExercise('multiple_choice', 8, PROMPT(8),
      { choices: ['100% of the time', 'about 50% of the time', '0% of the time', 'twice a week'] },
      { correctIndex: 2 }, EXPLANATION(8), PRO_TIP(8)),
    // 9: drag_drop — order sentence with "often"
    makeExercise('drag_drop', 9, PROMPT(9),
      { tokens: ['often', 'They', 'visit', 'their', 'grandparents'] },
      { correctOrder: [1, 0, 2, 3, 4] },
      EXPLANATION(9), PRO_TIP(9)),
    // 10: true_false — "sometimes" frequency
    makeExercise('true_false', 10, PROMPT(10),
      { statement: '"Sometimes" means about 50% of the time.' },
      { correct: false }, EXPLANATION(10), PRO_TIP(10)),
    // 11: multiple_choice — "occasionally" meaning
    makeExercise('multiple_choice', 11, PROMPT(11),
      { choices: ['about 100% of the time', 'less often than sometimes', '0% of the time', 'two times in a day'] },
      { correctIndex: 1 }, EXPLANATION(11), PRO_TIP(11)),
    // 12: sentence_reorder — full sentence
    makeExercise('sentence_reorder', 12, PROMPT(12),
      { tokens: ['We', 'usually', 'have', 'lunch', 'at', 'noon'] },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(12), PRO_TIP(12)),
    // 13: fill_blank — "She ___ eats breakfast."
    makeExercise('fill_blank', 13, PROMPT(13),
      { sentence: 'She ____ eats breakfast at 7 a.m.', options: ['never', 'ever', 'twice', 'much'] },
      { correct: 'never' }, EXPLANATION(13), PRO_TIP(13)),
    // 14: multiple_choice — pick correct sentence
    makeExercise('multiple_choice', 14, PROMPT(14),
      { choices: [
        'I hardly ever go out on weekdays.',
        'I ever hardly go out on weekdays.',
        'I hardly go ever out on weekdays.',
        'Hardly I ever go out on weekdays.',
      ]},
      { correctIndex: 0 }, EXPLANATION(14), PRO_TIP(14)),
    // 15: true_false — "always" position with "to be"
    makeExercise('true_false', 15, PROMPT(15),
      { statement: 'With the verb "to be", the frequency adverb comes AFTER it.' },
      { correct: true }, EXPLANATION(15), PRO_TIP(15)),
    // 16: drag_drop — "They are always happy."
    makeExercise('drag_drop', 16, PROMPT(16),
      { tokens: ['They', 'are', 'always', 'happy', 'together'] },
      { correctOrder: [0, 1, 2, 3, 4] },
      EXPLANATION(16), PRO_TIP(16)),
    // 17: fill_blank — "We ___ visit them."
    makeExercise('fill_blank', 17, PROMPT(17),
      { sentence: 'We ____ visit them on Sundays.', options: ['always', 'ever', 'twice', 'most'] },
      { correct: 'always' }, EXPLANATION(17), PRO_TIP(17)),
    // 18: sentence_reorder — full sentence
    makeExercise('sentence_reorder', 18, PROMPT(18),
      { tokens: ['She', 'sometimes', 'walks', 'to', 'work'] },
      { correctOrder: [0, 1, 2, 3, 4] },
      EXPLANATION(18), PRO_TIP(18)),
    // 19: multiple_choice — best completion
    makeExercise('multiple_choice', 19, PROMPT(19),
      { choices: [
        'He usually drinks coffee in the morning.',
        'He drinks usually coffee in the morning.',
        'He usually drink coffee in the morning.',
        'Usually he coffee drinks in the morning.',
      ]},
      { correctIndex: 0 }, EXPLANATION(19), PRO_TIP(19)),
    // 20: multiple_choice — best completion #2
    makeExercise('multiple_choice', 20, PROMPT(20),
      { choices: [
        'They never eat meat.',
        'They eat never meat.',
        'Never they eat meat.',
        'They meat never eat.',
      ]},
      { correctIndex: 0 }, EXPLANATION(20), PRO_TIP(20)),
  ],
};
