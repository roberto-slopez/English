// Lesson 9: Conditionals (Zero, 1st, 2nd, 3rd)
// 16 exercises across 4 sub-topics:
//   - zero_and_first (1-4)
//   - second_conditional (5-8)
//   - third_conditional (9-12)
//   - mixed_conditionals_review (13-16)

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'conditionals-all';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 9,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: zero_and_first (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'If you heat ice, it ____ (Zero Conditional: scientific fact).',
        options: ['melts', 'will melt', 'melted', 'would melt'],
      },
      { correct: 'melts' },
      EXPLANATION(1),
      PRO_TIP(1),
      'zero_and_first'
    ),
    makeExercise(
      'multiple_choice',
      2,
      PROMPT(2),
      {
        choices: [
          'If it rains tomorrow, we will stay at home.',
          'If it will rain tomorrow, we will stay at home.',
          'If it rains tomorrow, we stayed at home.',
          'If it rain tomorrow, we will stay at home.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(2),
      PRO_TIP(2),
      'zero_and_first'
    ),
    makeExercise(
      'fill_blank',
      3,
      PROMPT(3),
      {
        sentence: 'If you study hard, you ____ the upcoming exam.',
        options: ['will pass', 'pass', 'passed', 'would pass'],
      },
      { correct: 'will pass' },
      EXPLANATION(3),
      PRO_TIP(3),
      'zero_and_first'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'In First Conditional sentences, you can put "will" inside the "if" clause (e.g. "If you will call me, I will answer").',
      },
      { correct: false },
      EXPLANATION(4),
      PRO_TIP(4),
      'zero_and_first'
    ),

    // ── SUB-TOPIC 2: second_conditional (5-8) ──
    makeExercise(
      'multiple_choice',
      5,
      PROMPT(5),
      {
        choices: [
          'If I won the lottery, I would travel around the world.',
          'If I win the lottery, I would travel around the world.',
          'If I won the lottery, I will travel around the world.',
          'If I would win the lottery, I traveled around the world.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(5),
      PRO_TIP(5),
      'second_conditional'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'If I ____ you, I would accept the new job offer.',
        options: ['were', 'was', 'am', 'be'],
      },
      { correct: 'were' },
      EXPLANATION(6),
      PRO_TIP(6),
      'second_conditional'
    ),
    makeExercise(
      'drag_drop',
      7,
      PROMPT(7),
      {
        tokens: ['If', 'she', 'had', 'more', 'time,', 'she', 'would', 'learn', 'Japanese.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      EXPLANATION(7),
      PRO_TIP(7),
      'second_conditional'
    ),
    makeExercise(
      'fill_blank',
      8,
      PROMPT(8),
      {
        sentence: 'What ____ you do if you found a lost dog on the street?',
        options: ['would', 'will', 'did', 'do'],
      },
      { correct: 'would' },
      EXPLANATION(8),
      PRO_TIP(8),
      'second_conditional'
    ),

    // ── SUB-TOPIC 3: third_conditional (9-12) ──
    makeExercise(
      'multiple_choice',
      9,
      PROMPT(9),
      {
        choices: [
          'If I had set my alarm, I would not have been late.',
          'If I set my alarm, I would not have been late.',
          'If I had set my alarm, I will not have been late.',
          'If I would have set my alarm, I had not been late.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(9),
      PRO_TIP(9),
      'third_conditional'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'If we had taken a taxi, we ____ the flight.',
        options: ["wouldn't have missed", "won't miss", "wouldn't miss", "had not missed"],
      },
      { correct: "wouldn't have missed" },
      EXPLANATION(10),
      PRO_TIP(10),
      'third_conditional'
    ),
    makeExercise(
      'sentence_reorder',
      11,
      PROMPT(11),
      {
        tokens: ['She', 'would', 'have', 'passed', 'if', 'she', 'had', 'studied.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(11),
      PRO_TIP(11),
      'third_conditional'
    ),
    makeExercise(
      'true_false',
      12,
      PROMPT(12),
      {
        statement: 'The Third Conditional talks about hypothetical situations in the past that cannot be changed now.',
      },
      { correct: true },
      EXPLANATION(12),
      PRO_TIP(12),
      'third_conditional'
    ),

    // ── SUB-TOPIC 4: mixed_conditionals_review (13-16) ──
    makeExercise(
      'matching',
      13,
      PROMPT(13),
      {
        left: [
          'Zero: If you mix red and blue,',
          '1st: If the weather is nice,',
          '2nd: If I had wings,',
          '3rd: If we had known you were coming,',
        ],
        right: [
          'you get purple.',
          'we will go to the beach.',
          'I would fly to work.',
          'we would have baked a cake.',
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
      'mixed_conditionals_review'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'If you ____ your coat, you will catch a cold.',
        options: ["don't wear", "won't wear", "didn't wear", "wouldn't wear"],
      },
      { correct: "don't wear" },
      EXPLANATION(14),
      PRO_TIP(14),
      'mixed_conditionals_review'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'If he spoke English, he would get that international job.',
          'If he speaks English, he would get that international job.',
          'If he spoke English, he will get that international job.',
          'If he would speak English, he got that international job.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'mixed_conditionals_review'
    ),
    makeExercise(
      'multiple_choice',
      16,
      PROMPT(16),
      {
        choices: [
          'Third Conditional (past regret)',
          'Second Conditional (hypothetical present)',
          'First Conditional (future possibility)',
          'Zero Conditional (universal fact)',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(16),
      PRO_TIP(16),
      'mixed_conditionals_review'
    ),
  ],
};
