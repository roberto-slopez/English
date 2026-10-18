// Lesson 32: Conditional Conjunctions (As Long As, Provided That, Unless, Even If, Only If)
// Based on ESL Level 5 / Cambridge Grammar.
// Key concepts from slides:
//   1. Specific conditions required for a result:
//      - "only if", "providing", "provided (that)", "as/so long as", "on condition that"
//      - No other condition will have this effect:
//        * "As long as you promise to pay me back, I will loan you some money."
//        * "On condition that you come back by 10:00 p.m., I will let you go to the party."
//        * "I will allow you to stay provided that you keep your voice down."
//        * "I will let you borrow my car only if you promise to bring it back in one piece."
//   2. "Even if":
//      - Stresses that the condition does NOT matter; the result will remain the same regardless:
//        * "Even if you try to reason with her, she won't come to her senses."
//        * "Even if electric vehicles improve, owning a gas-powered vehicle is more convenient."
//   3. "Unless":
//      - Describes a possible negative condition in present or future.
//      - Equivalent to "if...not":
//        * "If you don't study, you won't get a good grade." = "Unless you study, you won't get a good grade."
//        * "If you don't eat healthy, you will gain weight." = "Unless you eat healthy, you will gain weight."
//      - In negotiations & requirements:
//        * "We can't move forward in negotiations unless you give some concessions."
//        * "I won't buy the car unless you give me a better price."
//
// 20 exercises across 5 sub-topics:
//   - exclusive_conditions_as_long_as_provided_that (1-4)
//   - even_if_unchanging_results (5-8)
//   - unless_as_if_not (9-12)
//   - negotiations_and_negative_conditions (13-16)
//   - conditional_conjunctions_synthesis (17-20)
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'conditional-conjunctions';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 32,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: exclusive_conditions_as_long_as_provided_that (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: '____ long as you promise to pay me back, I will loan you some money.',
        options: ['As', 'Such', 'For', 'By'],
      },
      { correct: 'As' },
      EXPLANATION(1),
      PRO_TIP(1),
      'exclusive_conditions_as_long_as_provided_that'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'I will allow you to stay ____ that you keep your voice down.',
        options: ['provided', 'provide', 'unless', 'even'],
      },
      { correct: 'provided' },
      EXPLANATION(2),
      PRO_TIP(2),
      'exclusive_conditions_as_long_as_provided_that'
    ),
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          'That the party is permitted ONLY if this specific requirement is fulfilled.',
          'That the time you return does not matter at all.',
          'That you are completely forbidden from going to the party.',
          'That the party begins promptly at 10:00 p.m.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(3),
      PRO_TIP(3),
      'exclusive_conditions_as_long_as_provided_that'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: '"Provided that" and "as long as" introduce conditions, while "even if" says the result remains the same despite the condition.',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'exclusive_conditions_as_long_as_provided_that'
    ),

    // ── SUB-TOPIC 2: even_if_unchanging_results (5-8) ──
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: "____ if you try to reason with her, she won't come to her senses.",
        options: ['Even', 'Only', 'Unless', 'Provided'],
      },
      { correct: 'Even' },
      EXPLANATION(5),
      PRO_TIP(5),
      'even_if_unchanging_results'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'Even if electric vehicles improve, owning a gas-powered vehicle ____ more convenient for long road trips.',
        options: ['is', 'are', 'being', 'were'],
      },
      { correct: 'is' },
      EXPLANATION(6),
      PRO_TIP(6),
      'even_if_unchanging_results'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          'That the condition does not matter; the result will remain the same regardless.',
          'That the result can only happen if this one strict rule is followed.',
          'That the condition describes an impossible past event.',
          'That the speaker is asking for polite permission.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'even_if_unchanging_results'
    ),
    makeExercise(
      'true_false',
      8,
      PROMPT(8),
      {
        statement: '"Even if you try to reason with her, she won\'t come to her senses" means she will change her mind if you speak to her politely.',
      },
      { correct: false },
      EXPLANATION(8),
      PRO_TIP(8),
      'even_if_unchanging_results'
    ),

    // ── SUB-TOPIC 3: unless_as_if_not (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: "If you don't study, you won't get a good grade. = ____ you study, you won't get a good grade.",
        options: ['Unless', 'Even if', 'As long as', 'Provided'],
      },
      { correct: 'Unless' },
      EXPLANATION(9),
      PRO_TIP(9),
      'unless_as_if_not'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'Unless you eat healthy, you will ____ weight.',
        options: ['gain', 'lose', 'gained', 'gaining'],
      },
      { correct: 'gain' },
      EXPLANATION(10),
      PRO_TIP(10),
      'unless_as_if_not'
    ),
    makeExercise(
      'multiple_choice',
      11,
      PROMPT(11),
      {
        choices: [
          'Unless you eat healthy, you will gain weight.',
          "Unless you don't eat healthy, you will gain weight.",
          'Even if you eat healthy, you will gain weight.',
          "As long as you don't eat healthy, you will gain weight.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(11),
      PRO_TIP(11),
      'unless_as_if_not'
    ),
    makeExercise(
      'sentence_reorder',
      12,
      PROMPT(12),
      {
        tokens: ['Unless', 'you', 'study,', 'you', "won't", 'get', 'a', 'good', 'grade.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      EXPLANATION(12),
      PRO_TIP(12),
      'unless_as_if_not'
    ),

    // ── SUB-TOPIC 4: negotiations_and_negative_conditions (13-16) ──
    makeExercise(
      'fill_blank',
      13,
      PROMPT(13),
      {
        sentence: "We can't move forward in negotiations ____ you give some concessions.",
        options: ['unless', 'even if', 'provided', 'as long as'],
      },
      { correct: 'unless' },
      EXPLANATION(13),
      PRO_TIP(13),
      'negotiations_and_negative_conditions'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'I will let you borrow my car only ____ you promise to bring it back in one piece.',
        options: ['if', 'that', 'as', 'unless'],
      },
      { correct: 'if' },
      EXPLANATION(14),
      PRO_TIP(14),
      'negotiations_and_negative_conditions'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'I will buy the car only if you give me a better price; otherwise, I will not buy it.',
          'Even if you give me a better price, I refuse to buy the car.',
          'I have already agreed to buy the car at the full price.',
          'I will buy the car as long as the price stays very high.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'negotiations_and_negative_conditions'
    ),
    makeExercise(
      'sentence_reorder',
      16,
      PROMPT(16),
      {
        tokens: ['I', "won't", 'buy', 'the', 'car', 'unless', 'you', 'give', 'me', 'a', 'better', 'price.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
      EXPLANATION(16),
      PRO_TIP(16),
      'negotiations_and_negative_conditions'
    ),

    // ── SUB-TOPIC 5: conditional_conjunctions_synthesis (17-20) ──
    makeExercise(
      'true_false',
      17,
      PROMPT(17),
      {
        statement: 'Because "unless" already contains the negative meaning of "if not", the verb following "unless" is usually affirmative (e.g., "Unless you study", not "Unless you don\'t study").',
      },
      { correct: true },
      EXPLANATION(17),
      PRO_TIP(17),
      'conditional_conjunctions_synthesis'
    ),
    makeExercise(
      'drag_drop',
      18,
      PROMPT(18),
      {
        tokens: ['On', 'condition', 'that', 'you', 'come', 'back', 'by', '10:00', 'p.m.,', 'I', 'will', 'let', 'you', 'go.'],
        slots: ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8', 'slot9', 'slot10', 'slot11', 'slot12', 'slot13', 'slot14'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
      EXPLANATION(18),
      PRO_TIP(18),
      'conditional_conjunctions_synthesis'
    ),
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          'Even if electric vehicles improve, owning a gas-powered vehicle is more convenient.',
          'As long as you promise to pay me back, I will loan you some money.',
          'I will allow you to stay provided that you keep your voice down.',
          'I will let you borrow my car only if you bring it back.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'conditional_conjunctions_synthesis'
    ),
    makeExercise(
      'matching',
      20,
      PROMPT(20),
      {
        left: [
          'As long as you promise to pay me back, I will loan you money.',
          'I will let you borrow my car only if you bring it back in one piece.',
          "Even if you try to reason with her, she won't come to her senses.",
          "Unless you study, you won't get a good grade.",
        ],
        right: [
          'Specific required condition (as long as)',
          'Sole condition permitting the action (only if)',
          "Condition doesn't matter; result remains unchanged (even if)",
          'Negative condition equivalent to if...not (unless)',
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
      'conditional_conjunctions_synthesis'
    ),
  ],
};
