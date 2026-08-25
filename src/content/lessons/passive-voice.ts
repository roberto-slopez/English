// Lesson 11: Passive Voice (be + past participle)
// 16 exercises across 4 sub-topics:
//   - present_and_past_passive (1-4)
//   - perfect_and_future_passive (5-8)
//   - active_to_passive (9-12)
//   - everyday_passive_contexts (13-16)

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'passive-voice';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 11,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: present_and_past_passive (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'English ____ all over the world in business and aviation.',
        options: ['is spoken', 'speaks', 'is speaking', 'spoken'],
      },
      { correct: 'is spoken' },
      EXPLANATION(1),
      PRO_TIP(1),
      'present_and_past_passive'
    ),
    makeExercise(
      'multiple_choice',
      2,
      PROMPT(2),
      {
        choices: [
          'The Eiffel Tower was built in 1889.',
          'The Eiffel Tower was build in 1889.',
          'The Eiffel Tower built in 1889.',
          'The Eiffel Tower is built in 1889.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(2),
      PRO_TIP(2),
      'present_and_past_passive'
    ),
    makeExercise(
      'fill_blank',
      3,
      PROMPT(3),
      {
        sentence: 'Millions of emails ____ sent every single minute.',
        options: ['are', 'is', 'were', 'have'],
      },
      { correct: 'are' },
      EXPLANATION(3),
      PRO_TIP(3),
      'present_and_past_passive'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'In the Passive Voice, the object of the active sentence becomes the subject of the passive sentence.',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'present_and_past_passive'
    ),

    // ── SUB-TOPIC 2: perfect_and_future_passive (5-8) ──
    makeExercise(
      'multiple_choice',
      5,
      PROMPT(5),
      {
        choices: [
          'The package has been delivered to your front door.',
          'The package has delivered to your front door.',
          'The package have been delivered to your front door.',
          'The package was been delivered to your front door.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(5),
      PRO_TIP(5),
      'perfect_and_future_passive'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'The new bridge ____ completed next month.',
        options: ['will be', 'will been', 'is being to', 'will is'],
      },
      { correct: 'will be' },
      EXPLANATION(6),
      PRO_TIP(6),
      'perfect_and_future_passive'
    ),
    makeExercise(
      'drag_drop',
      7,
      PROMPT(7),
      {
        tokens: ['All', 'the', 'tickets', 'have', 'been', 'sold', 'out.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6] },
      EXPLANATION(7),
      PRO_TIP(7),
      'perfect_and_future_passive'
    ),
    makeExercise(
      'fill_blank',
      8,
      PROMPT(8),
      {
        sentence: 'A new hospital ____ built in our town right now (Present Continuous Passive).',
        options: ['is being', 'is been', 'was being', 'has being'],
      },
      { correct: 'is being' },
      EXPLANATION(8),
      PRO_TIP(8),
      'perfect_and_future_passive'
    ),

    // ── SUB-TOPIC 3: active_to_passive (9-12) ──
    makeExercise(
      'multiple_choice',
      9,
      PROMPT(9),
      {
        choices: [
          'Active: "J.K. Rowling wrote Harry Potter." -> Passive: "Harry Potter was written by J.K. Rowling."',
          'Active: "J.K. Rowling wrote Harry Potter." -> Passive: "Harry Potter is written by J.K. Rowling."',
          'Active: "J.K. Rowling wrote Harry Potter." -> Passive: "Harry Potter was write by J.K. Rowling."',
          'Active: "J.K. Rowling wrote Harry Potter." -> Passive: "Harry Potter had written by J.K. Rowling."',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(9),
      PRO_TIP(9),
      'active_to_passive'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'Active: "Someone stole my car." -> Passive: "My car was ____."',
        options: ['stolen', 'stealed', 'steal', 'stole'],
      },
      { correct: 'stolen' },
      EXPLANATION(10),
      PRO_TIP(10),
      'active_to_passive'
    ),
    makeExercise(
      'sentence_reorder',
      11,
      PROMPT(11),
      {
        tokens: ['The', 'window', 'was', 'broken', 'by', 'the', 'storm.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6] },
      EXPLANATION(11),
      PRO_TIP(11),
      'active_to_passive'
    ),
    makeExercise(
      'true_false',
      12,
      PROMPT(12),
      {
        statement: 'You only include "by + agent" in a passive sentence when the person or cause doing the action is important or relevant to know.',
      },
      { correct: true },
      EXPLANATION(12),
      PRO_TIP(12),
      'active_to_passive'
    ),

    // ── SUB-TOPIC 4: everyday_passive_contexts (13-16) ──
    makeExercise(
      'matching',
      13,
      PROMPT(13),
      {
        left: [
          'Present Simple: Coffee beans',
          'Past Simple: The telephone',
          'Present Perfect: The mystery',
          'Future: The results',
        ],
        right: [
          'are grown in Colombia.',
          'was invented by Alexander Graham Bell.',
          'has been solved by detectives.',
          'will be announced tomorrow.',
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
      'everyday_passive_contexts'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'A: "Where were you born?" — B: "I ____ born in Mexico City."',
        options: ['was', 'were', 'am', 'have been'],
      },
      { correct: 'was' },
      EXPLANATION(14),
      PRO_TIP(14),
      'everyday_passive_contexts'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'These shoes are made in Italy.',
          'These shoes is made in Italy.',
          'These shoes are make in Italy.',
          'These shoes have make in Italy.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'everyday_passive_contexts'
    ),
    makeExercise(
      'multiple_choice',
      16,
      PROMPT(16),
      {
        choices: [
          'A: "Is your computer ready?" B: "Yes, it has already been repaired."',
          'A: "Is your computer ready?" B: "Yes, it has already repaired."',
          'A: "Is your computer ready?" B: "Yes, it was already repair."',
          'A: "Is your computer ready?" B: "Yes, it is already been repaired."',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(16),
      PRO_TIP(16),
      'everyday_passive_contexts'
    ),
  ],
};
