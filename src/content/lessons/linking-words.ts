// Lesson 15: Linking Words / Connectors
// Contrast, Addition, Cause/Result, Sequence
// 16 exercises across 4 sub-topics:
//   - contrast_connectors (1-4)
//   - addition_and_emphasis (5-8)
//   - cause_and_result (9-12)
//   - time_and_sequence (13-16)

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'linking-words';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 15,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: contrast_connectors (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'He went to work ____ feeling sick and tired.',
        options: ['despite', 'although', 'however', 'whereas'],
      },
      { correct: 'despite' },
      EXPLANATION(1),
      PRO_TIP(1),
      'contrast_connectors'
    ),
    makeExercise(
      'multiple_choice',
      2,
      PROMPT(2),
      {
        choices: [
          'Although it was raining heavily, we enjoyed our hike.',
          'Despite it was raining heavily, we enjoyed our hike.',
          'However it was raining heavily, we enjoyed our hike.',
          'In spite it was raining heavily, we enjoyed our hike.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(2),
      PRO_TIP(2),
      'contrast_connectors'
    ),
    makeExercise(
      'fill_blank',
      3,
      PROMPT(3),
      {
        sentence: 'I love living in the city. ____, the cost of rent is very high.',
        options: ['However', 'Although', 'Despite', 'Because'],
      },
      { correct: 'However' },
      EXPLANATION(3),
      PRO_TIP(3),
      'contrast_connectors'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: '"Although" is followed by a subject + verb clause (e.g. "Although it rained"), while "despite / in spite of" is followed by a noun or gerund (e.g. "Despite the rain / Despite raining").',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'contrast_connectors'
    ),

    // ── SUB-TOPIC 2: addition_and_emphasis (5-8) ──
    makeExercise(
      'multiple_choice',
      5,
      PROMPT(5),
      {
        choices: [
          'The hotel was clean and quiet. Furthermore, the breakfast was delicious.',
          'The hotel was clean and quiet. Although, the breakfast was delicious.',
          'The hotel was clean and quiet. Despite, the breakfast was delicious.',
          'The hotel was clean and quiet. In addition of, the breakfast was delicious.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(5),
      PRO_TIP(5),
      'addition_and_emphasis'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'In ____ to English, she speaks fluent Spanish and French.',
        options: ['addition', 'contrast', 'spite', 'result'],
      },
      { correct: 'addition' },
      EXPLANATION(6),
      PRO_TIP(6),
      'addition_and_emphasis'
    ),
    makeExercise(
      'drag_drop',
      7,
      PROMPT(7),
      {
        tokens: ['She', 'is', 'smart', 'and,', 'moreover,', 'she', 'is', 'very', 'hardworking.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      EXPLANATION(7),
      PRO_TIP(7),
      'addition_and_emphasis'
    ),
    makeExercise(
      'fill_blank',
      8,
      PROMPT(8),
      {
        sentence: 'I don\'t want to go out tonight; ____, it\'s starting to snow.',
        options: ['besides', 'despite', 'because of', 'due to'],
      },
      { correct: 'besides' },
      EXPLANATION(8),
      PRO_TIP(8),
      'addition_and_emphasis'
    ),

    // ── SUB-TOPIC 3: cause_and_result (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'The flight was cancelled ____ the dense morning fog.',
        options: ['due to', 'because', 'as a result', 'therefore'],
      },
      { correct: 'due to' },
      EXPLANATION(9),
      PRO_TIP(9),
      'cause_and_result'
    ),
    makeExercise(
      'multiple_choice',
      10,
      PROMPT(10),
      {
        choices: [
          'He trained hard every day. Therefore, he won the championship.',
          'He trained hard every day. Because of, he won the championship.',
          'He trained hard every day. Due to, he won the championship.',
          'He trained hard every day. Since, he won the championship.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(10),
      PRO_TIP(10),
      'cause_and_result'
    ),
    makeExercise(
      'sentence_reorder',
      11,
      PROMPT(11),
      {
        tokens: ['As', 'a', 'result,', 'sales', 'increased', 'by', 'twenty', 'percent.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(11),
      PRO_TIP(11),
      'cause_and_result'
    ),
    makeExercise(
      'true_false',
      12,
      PROMPT(12),
      {
        statement: '"Therefore" and "As a result" express consequences/conclusions, usually appearing at the beginning of a sentence followed by a comma.',
      },
      { correct: true },
      EXPLANATION(12),
      PRO_TIP(12),
      'cause_and_result'
    ),

    // ── SUB-TOPIC 4: time_and_sequence (13-16) ──
    makeExercise(
      'matching',
      13,
      PROMPT(13),
      {
        left: [
          'Contrast:',
          'Addition:',
          'Result:',
          'Cause:',
        ],
        right: [
          'However / On the other hand',
          'Furthermore / In addition',
          'Therefore / As a result',
          'Due to / Because of',
        ],
      },
      {
        pairs: [
          { leftIndex: 0, rightIndex: 0 },
          { leftIndex: 1, rightIndex: 1 },
          { leftIndex: 2, rightIndex: 2 },
          { leftIndex: 3, rightIndex: 3 },
        ],
      },
      EXPLANATION(13),
      PRO_TIP(13),
      'time_and_sequence'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'I was cooking dinner. ____, my brother was setting the table.',
        options: ['Meanwhile', 'Although', 'Despite', 'Because'],
      },
      { correct: 'Meanwhile' },
      EXPLANATION(14),
      PRO_TIP(14),
      'time_and_sequence'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'First we visited the museum; afterwards, we had coffee by the river.',
          'First we visited the museum; although, we had coffee by the river.',
          'First we visited the museum; despite, we had coffee by the river.',
          'First we visited the museum; due to, we had coffee by the river.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'time_and_sequence'
    ),
    makeExercise(
      'multiple_choice',
      16,
      PROMPT(16),
      {
        choices: [
          'In conclusion, regular practice is the most effective way to learn English.',
          'In addition of, regular practice is the most effective way to learn English.',
          'Despite of, regular practice is the most effective way to learn English.',
          'Whereas, regular practice is the most effective way to learn English.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(16),
      PRO_TIP(16),
      'time_and_sequence'
    ),
  ],
};
