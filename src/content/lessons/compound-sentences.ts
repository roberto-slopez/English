// Lesson 19: Compound Sentences (independent clause + conjunction + independent clause).
// 20 exercises across 4 sub-topics:
//   - compound_structure (1-6)  : two independent clauses + comma + coordinating conjunction
//   - fanboys_meanings (7-13)   : for / and / nor / but / or / yet / so and what each one does
//   - nor_inversion (14-19)     : "nor" + positive auxiliary + subject + verb
//   - compound_review (20)      : mixed review
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'compound-sentences';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 19,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: compound_structure (1-6) ──
    makeExercise(
      'multiple_choice',
      1,
      PROMPT(1),
      {
        choices: [
          'We took the train home, for it was less expensive.',
          'We took the train home because it was less expensive.',
          'Taking the train home.',
          'The train home was less expensive.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(1),
      PRO_TIP(1),
      'compound_structure'
    ),
    makeExercise(
      'true_false',
      2,
      PROMPT(2),
      {
        statement:
          'A compound sentence joins two independent clauses with a comma and a coordinating conjunction.',
      },
      { correct: true },
      EXPLANATION(2),
      PRO_TIP(2),
      'compound_structure'
    ),
    makeExercise(
      'true_false',
      3,
      PROMPT(3),
      {
        statement: 'The seven coordinating conjunctions are: for, and, nor, but, or, yet, so.',
      },
      { correct: true },
      EXPLANATION(3),
      PRO_TIP(3),
      'compound_structure'
    ),
    makeExercise(
      'fill_blank',
      4,
      PROMPT(4),
      {
        sentence: "Mary watched a movie, ____ she ate dinner at Lucille's.",
        options: ['and', 'nor', 'yet', 'for'],
      },
      { correct: 'and' },
      EXPLANATION(4),
      PRO_TIP(4),
      'compound_structure'
    ),
    makeExercise(
      'sentence_reorder',
      5,
      PROMPT(5),
      {
        tokens: ['Mary', 'watched', 'a', 'movie,', 'and', 'she', 'ate', 'dinner', 'at', "Lucille's."],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      EXPLANATION(5),
      PRO_TIP(5),
      'compound_structure'
    ),
    makeExercise(
      'multiple_choice',
      6,
      PROMPT(6),
      {
        choices: [
          "Tim likes cookies, but he doesn't like pies.",
          "Tim likes cookies but, he doesn't like pies.",
          "Tim likes cookies; but he doesn't like pies.",
          "Tim likes cookies. but he doesn't like pies.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(6),
      PRO_TIP(6),
      'compound_structure'
    ),

    // ── SUB-TOPIC 2: fanboys_meanings (7-13) ──
    makeExercise(
      'fill_blank',
      7,
      PROMPT(7),
      {
        sentence: 'We took the train home, ____ it was less expensive.',
        options: ['for', 'but', 'or', 'nor'],
      },
      { correct: 'for' },
      EXPLANATION(7),
      PRO_TIP(7),
      'fanboys_meanings'
    ),
    makeExercise(
      'fill_blank',
      8,
      PROMPT(8),
      {
        sentence: "McDonald's is very cheap, ____ it is very unhealthy.",
        options: ['but', 'so', 'or', 'nor'],
      },
      { correct: 'but' },
      EXPLANATION(8),
      PRO_TIP(8),
      'fanboys_meanings'
    ),
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'The house was too expensive, ____ the family bought it anyway.',
        options: ['yet', 'so', 'for', 'nor'],
      },
      { correct: 'yet' },
      EXPLANATION(9),
      PRO_TIP(9),
      'fanboys_meanings'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: "Mark didn't have enough money, ____ he took out a loan.",
        options: ['so', 'for', 'yet', 'or'],
      },
      { correct: 'so' },
      EXPLANATION(10),
      PRO_TIP(10),
      'fanboys_meanings'
    ),
    makeExercise(
      'multiple_choice',
      11,
      PROMPT(11),
      {
        choices: ['or', 'so', 'for', 'yet'],
      },
      { correctIndex: 0 },
      EXPLANATION(11),
      PRO_TIP(11),
      'fanboys_meanings'
    ),
    makeExercise(
      'matching',
      12,
      PROMPT(12),
      {
        left: ['for', 'and', 'but', 'so'],
        right: ['gives a reason', 'adds information', 'shows contrast', 'shows a result'],
      },
      {
        pairs: [
          { leftIndex: 0, rightIndex: 0 },
          { leftIndex: 1, rightIndex: 1 },
          { leftIndex: 2, rightIndex: 2 },
          { leftIndex: 3, rightIndex: 3 },
        ],
      },
      EXPLANATION(12),
      PRO_TIP(12),
      'fanboys_meanings'
    ),
    makeExercise(
      'drag_drop',
      13,
      PROMPT(13),
      {
        tokens: ['We', 'can', 'buy', 'the', 'car,', 'or', 'we', 'can', 'lease', 'it.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      EXPLANATION(13),
      PRO_TIP(13),
      'fanboys_meanings'
    ),

    // ── SUB-TOPIC 3: nor_inversion (14-19) ──
    makeExercise(
      'true_false',
      14,
      PROMPT(14),
      {
        statement:
          'After "nor", the second clause uses a positive auxiliary before the subject: "Tim doesn\'t like cookies, nor does he like pies."',
      },
      { correct: true },
      EXPLANATION(14),
      PRO_TIP(14),
      'nor_inversion'
    ),
    makeExercise(
      'fill_blank',
      15,
      PROMPT(15),
      {
        sentence: "Tim doesn't like cookies, nor ____ he like pies.",
        options: ['does', "doesn't", 'do', 'did'],
      },
      { correct: 'does' },
      EXPLANATION(15),
      PRO_TIP(15),
      'nor_inversion'
    ),
    makeExercise(
      'fill_blank',
      16,
      PROMPT(16),
      {
        sentence: "I didn't bring an umbrella, nor ____ I bring a coat.",
        options: ['did', "didn't", 'do', 'will'],
      },
      { correct: 'did' },
      EXPLANATION(16),
      PRO_TIP(16),
      'nor_inversion'
    ),
    makeExercise(
      'multiple_choice',
      17,
      PROMPT(17),
      {
        choices: [
          "I don't have a cat, nor do I have a dog.",
          "I don't have a cat, nor I have a dog.",
          "I don't have a cat, nor I don't have a dog.",
          "I don't have a cat, nor do I not have a dog.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(17),
      PRO_TIP(17),
      'nor_inversion'
    ),
    makeExercise(
      'sentence_reorder',
      18,
      PROMPT(18),
      {
        tokens: ['I', "won't", 'clean', 'your', 'room,', 'nor', 'will', 'I', 'make', 'your', 'breakfast.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      EXPLANATION(18),
      PRO_TIP(18),
      'nor_inversion'
    ),
    makeExercise(
      'fill_blank',
      19,
      PROMPT(19),
      {
        sentence: "I'm not a cheater, nor ____ I a crook.",
        options: ['am', 'do', 'will', 'is'],
      },
      { correct: 'am' },
      EXPLANATION(19),
      PRO_TIP(19),
      'nor_inversion'
    ),

    // ── SUB-TOPIC 4: compound_review (20) ──
    makeExercise(
      'multiple_choice',
      20,
      PROMPT(20),
      {
        choices: [
          "Mark didn't have enough money, so he took out a loan.",
          "Mark didn't have enough money, so took out a loan.",
          "Mark didn't have enough money so, he took out a loan.",
          "Mark didn't have enough money, for he took out a loan.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(20),
      PRO_TIP(20),
      'compound_review'
    ),
  ],
};
