// Lesson 13: Reported Speech (Direct vs Indirect Speech)
// 16 exercises across 4 sub-topics:
//   - tense_backshifting (1-4)
//   - pronouns_and_time_shifts (5-8)
//   - reporting_verbs_say_vs_tell (9-12)
//   - reporting_questions_and_requests (13-16)

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'reported-speech';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 13,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: tense_backshifting (1-4) ──
    makeExercise(
      'multiple_choice',
      1,
      PROMPT(1),
      {
        choices: [
          'Direct: "I am tired." -> Reported: She said that she was tired.',
          'Direct: "I am tired." -> Reported: She said that she is tired.',
          'Direct: "I am tired." -> Reported: She said that she had tired.',
          'Direct: "I am tired." -> Reported: She said that she were tired.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(1),
      PRO_TIP(1),
      'tense_backshifting'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'Direct: "I will call you." -> Reported: He told me that he ____ call me.',
        options: ['would', 'will', 'shall', 'can'],
      },
      { correct: 'would' },
      EXPLANATION(2),
      PRO_TIP(2),
      'tense_backshifting'
    ),
    makeExercise(
      'fill_blank',
      3,
      PROMPT(3),
      {
        sentence: 'Direct: "I bought a new car." -> Reported: David said that he ____ a new car.',
        options: ['had bought', 'has bought', 'boughted', 'was bought'],
      },
      { correct: 'had bought' },
      EXPLANATION(3),
      PRO_TIP(3),
      'tense_backshifting'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'When the reporting verb is in the past ("said", "told"), verbs inside the reported clause typically shift back one tense (Present Simple -> Past Simple, Will -> Would, Can -> Could).',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'tense_backshifting'
    ),

    // ── SUB-TOPIC 2: pronouns_and_time_shifts (5-8) ──
    makeExercise(
      'multiple_choice',
      5,
      PROMPT(5),
      {
        choices: [
          'Direct: "I am leaving today." -> Reported: Maria said she was leaving that day.',
          'Direct: "I am leaving today." -> Reported: Maria said she is leaving today.',
          'Direct: "I am leaving today." -> Reported: Maria said she was leaving tomorrow.',
          'Direct: "I am leaving today." -> Reported: Maria said she had left yesterday.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(5),
      PRO_TIP(5),
      'pronouns_and_time_shifts'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'Direct: "We will meet here tomorrow." -> Reported: They said they would meet ____ the next day.',
        options: ['there', 'here', 'now', 'where'],
      },
      { correct: 'there' },
      EXPLANATION(6),
      PRO_TIP(6),
      'pronouns_and_time_shifts'
    ),
    makeExercise(
      'drag_drop',
      7,
      PROMPT(7),
      {
        tokens: ['He', 'said', 'that', 'he', 'had', 'lost', 'his', 'passport.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(7),
      PRO_TIP(7),
      'pronouns_and_time_shifts'
    ),
    makeExercise(
      'matching',
      8,
      PROMPT(8),
      {
        left: [
          'Direct: "now"',
          'Direct: "yesterday"',
          'Direct: "tomorrow"',
          'Direct: "this"',
        ],
        right: [
          'Reported: "then / at that moment"',
          'Reported: "the day before"',
          'Reported: "the next day / following day"',
          'Reported: "that"',
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
      EXPLANATION(8),
      PRO_TIP(8),
      'pronouns_and_time_shifts'
    ),

    // ── SUB-TOPIC 3: reporting_verbs_say_vs_tell (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'She ____ me that she was moving to New York.',
        options: ['told', 'said', 'said to', 'spoke'],
      },
      { correct: 'told' },
      EXPLANATION(9),
      PRO_TIP(9),
      'reporting_verbs_say_vs_tell'
    ),
    makeExercise(
      'multiple_choice',
      10,
      PROMPT(10),
      {
        choices: [
          'He said that he was happy with his new job.',
          'He told that he was happy with his new job.',
          'He said me that he was happy with his new job.',
          'He spoke that he was happy with his new job.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(10),
      PRO_TIP(10),
      'reporting_verbs_say_vs_tell'
    ),
    makeExercise(
      'sentence_reorder',
      11,
      PROMPT(11),
      {
        tokens: ['She', 'told', 'him', 'that', 'the', 'meeting', 'was', 'cancelled.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(11),
      PRO_TIP(11),
      'reporting_verbs_say_vs_tell'
    ),
    makeExercise(
      'true_false',
      12,
      PROMPT(12),
      {
        statement: 'You use "tell" when you mention who is being spoken to (e.g. "He told me..."), whereas "say" is used without a personal object (e.g. "He said that...").',
      },
      { correct: true },
      EXPLANATION(12),
      PRO_TIP(12),
      'reporting_verbs_say_vs_tell'
    ),

    // ── SUB-TOPIC 4: reporting_questions_and_requests (13-16) ──
    makeExercise(
      'multiple_choice',
      13,
      PROMPT(13),
      {
        choices: [
          'Direct: "Do you like coffee?" -> Reported: He asked me if I liked coffee.',
          'Direct: "Do you like coffee?" -> Reported: He asked me do I like coffee.',
          'Direct: "Do you like coffee?" -> Reported: He asked me if did I like coffee.',
          'Direct: "Do you like coffee?" -> Reported: He asked me that I liked coffee.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(13),
      PRO_TIP(13),
      'reporting_questions_and_requests'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'Direct: "Where do you live?" -> Reported: She asked me where I ____.',
        options: ['lived', 'live', 'do live', 'did live'],
      },
      { correct: 'lived' },
      EXPLANATION(14),
      PRO_TIP(14),
      'reporting_questions_and_requests'
    ),
    makeExercise(
      'fill_blank',
      15,
      PROMPT(15),
      {
        sentence: 'Direct: "Please close the window." -> Reported: He asked me ____ close the window.',
        options: ['to', 'that', 'if', 'for'],
      },
      { correct: 'to' },
      EXPLANATION(15),
      PRO_TIP(15),
      'reporting_questions_and_requests'
    ),
    makeExercise(
      'multiple_choice',
      16,
      PROMPT(16),
      {
        choices: [
          'Direct: "Don\'t touch that!" -> Reported: The teacher told us not to touch that.',
          'Direct: "Don\'t touch that!" -> Reported: The teacher told us to not touch that.',
          'Direct: "Don\'t touch that!" -> Reported: The teacher told us don\'t touch that.',
          'Direct: "Don\'t touch that!" -> Reported: The teacher said us not to touch that.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(16),
      PRO_TIP(16),
      'reporting_questions_and_requests'
    ),
  ],
};
