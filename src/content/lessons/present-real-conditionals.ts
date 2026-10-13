// Lesson 30: Present Real Conditionals (Statements, Questions, Modals, When & Whenever)
// Based on ESL Level 5 / Cambridge Grammar.
// Key concepts from slides:
//   1. Statements (Clause Order & Punctuation):
//      - If-Clause first (comma required):
//        * "If I shop online, I save time."
//        * "If the mall is closed, I can shop online."
//        * "If the price is right, I may even buy two."
//        * "If the teacher assigns a test, I ought to study."
//      - Result Clause first (no comma):
//        * "I save time if I shop online."
//        * "I can shop online if the mall is closed."
//        * "I may even buy two if the price is right."
//        * "I ought to study if the teacher assigns a test."
//   2. Modals in Result Clause:
//      - "can" (ability/possibility), "may" (possibility), "ought to" (advice/obligation).
//   3. Yes/No Questions & Short Answers:
//      - "Do you save time if you shop online?" -> "Yes, I do." / "No, I don't."
//      - "Can you shop online if the mall is closed?" -> "Yes, I can." / "No, I can't."
//   4. Wh-Questions:
//      - "What happens if I don't like it?"
//   5. When & Whenever (Habitual / Repeated conditions):
//      - "Whenever we watch an opera, we get bored."
//      - "When he watches the fights, he cheers loudly."
//
// 20 exercises across 5 sub-topics:
//   - clause_order_and_punctuation (1-4)
//   - modals_in_result_clause (5-8)
//   - yes_no_questions_and_short_answers (9-12)
//   - wh_questions_and_when_whenever (13-16)
//   - real_conditionals_synthesis (17-20)
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'present-real-conditionals';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 30,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: clause_order_and_punctuation (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'If I shop online, I ____ time.',
        options: ['save', 'saved', 'will be saved', 'saving'],
      },
      { correct: 'save' },
      EXPLANATION(1),
      PRO_TIP(1),
      'clause_order_and_punctuation'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'I save time ____ I shop online.',
        options: ['if', 'so', 'although', 'unless'],
      },
      { correct: 'if' },
      EXPLANATION(2),
      PRO_TIP(2),
      'clause_order_and_punctuation'
    ),
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          'If I shop online, I save time.',
          'I save time, if I shop online.',
          'If I shop online I save time.',
          'If I shop online; I save time.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(3),
      PRO_TIP(3),
      'clause_order_and_punctuation'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'When the result clause comes first (e.g., "I save time if I shop online"), no comma is used before "if".',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'clause_order_and_punctuation'
    ),

    // ── SUB-TOPIC 2: modals_in_result_clause (5-8) ──
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: 'If the price is right, I ____ even buy two.',
        options: ['may', 'must to', 'ought', 'shall to'],
      },
      { correct: 'may' },
      EXPLANATION(5),
      PRO_TIP(5),
      'modals_in_result_clause'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'If the teacher assigns a test, I ____ to study.',
        options: ['ought', 'should', 'must', 'can'],
      },
      { correct: 'ought' },
      EXPLANATION(6),
      PRO_TIP(6),
      'modals_in_result_clause'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          'Ability or possibility in the present.',
          'Past obligation.',
          'An impossible hypothetical situation.',
          'A command or order.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'modals_in_result_clause'
    ),
    makeExercise(
      'true_false',
      8,
      PROMPT(8),
      {
        statement: 'In present real conditionals, the result clause can use modals such as "can", "may", or "ought to" instead of a simple present verb.',
      },
      { correct: true },
      EXPLANATION(8),
      PRO_TIP(8),
      'modals_in_result_clause'
    ),

    // ── SUB-TOPIC 3: yes_no_questions_and_short_answers (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: '____ you save time if you shop online?',
        options: ['Do', 'Are', 'Did', 'Have'],
      },
      { correct: 'Do' },
      EXPLANATION(9),
      PRO_TIP(9),
      'yes_no_questions_and_short_answers'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'Can you shop online if the mall is closed? — Yes, I ____.',
        options: ['can', 'do', 'am', 'could'],
      },
      { correct: 'can' },
      EXPLANATION(10),
      PRO_TIP(10),
      'yes_no_questions_and_short_answers'
    ),
    makeExercise(
      'multiple_choice',
      11,
      PROMPT(11),
      {
        choices: [
          "No, I don't.",
          "No, I can't.",
          "No, I haven't.",
          'No, I am not.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(11),
      PRO_TIP(11),
      'yes_no_questions_and_short_answers'
    ),
    makeExercise(
      'sentence_reorder',
      12,
      PROMPT(12),
      {
        tokens: ['Can', 'you', 'shop', 'online', 'if', 'the', 'mall', 'is', 'closed?'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      EXPLANATION(12),
      PRO_TIP(12),
      'yes_no_questions_and_short_answers'
    ),

    // ── SUB-TOPIC 4: wh_questions_and_when_whenever (13-16) ──
    makeExercise(
      'fill_blank',
      13,
      PROMPT(13),
      {
        sentence: "What ____ if I don't like it?",
        options: ['happens', 'happen', 'happened', 'is happening'],
      },
      { correct: 'happens' },
      EXPLANATION(13),
      PRO_TIP(13),
      'wh_questions_and_when_whenever'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: '____ we watch an opera, we get bored.',
        options: ['Whenever', 'Unless', 'Despite', 'Although'],
      },
      { correct: 'Whenever' },
      EXPLANATION(14),
      PRO_TIP(14),
      'wh_questions_and_when_whenever'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'watches',
          'watched',
          'will watch',
          'watching',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'wh_questions_and_when_whenever'
    ),
    makeExercise(
      'sentence_reorder',
      16,
      PROMPT(16),
      {
        tokens: ['When', 'he', 'watches', 'the', 'fights,', 'he', 'cheers', 'loudly.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(16),
      PRO_TIP(16),
      'wh_questions_and_when_whenever'
    ),

    // ── SUB-TOPIC 5: real_conditionals_synthesis (17-20) ──
    makeExercise(
      'true_false',
      17,
      PROMPT(17),
      {
        statement: '"Whenever" and "when" can introduce real condition clauses describing habits, routines, or recurring situations.',
      },
      { correct: true },
      EXPLANATION(17),
      PRO_TIP(17),
      'real_conditionals_synthesis'
    ),
    makeExercise(
      'drag_drop',
      18,
      PROMPT(18),
      {
        tokens: ['I', 'ought', 'to', 'study', 'if', 'the', 'teacher', 'assigns', 'a', 'test.'],
        slots: ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8', 'slot9', 'slot10'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      EXPLANATION(18),
      PRO_TIP(18),
      'real_conditionals_synthesis'
    ),
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          'Possibility (it is possible that I will buy two).',
          'Definite past fact.',
          'Strict legal prohibition.',
          'Physical strength.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'real_conditionals_synthesis'
    ),
    makeExercise(
      'matching',
      20,
      PROMPT(20),
      {
        left: [
          'If I shop online, I save time.',
          'Can you shop online if the mall is closed?',
          "What happens if I don't like it?",
          'Whenever we watch an opera, we get bored.',
        ],
        right: [
          'Statement with If-clause first (uses comma)',
          'Yes/No question with modal "can"',
          'Wh-question asking about consequence',
          'Habitual condition introduced by "whenever"',
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
      EXPLANATION(20),
      PRO_TIP(20),
      'real_conditionals_synthesis'
    ),
  ],
};
