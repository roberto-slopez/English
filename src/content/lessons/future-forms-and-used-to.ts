// Lesson 16: Future Forms & Past Habits (Will vs Going to vs Present Continuous & Used to / Would)
// 16 exercises across 4 sub-topics:
//   - will_vs_going_to (1-4)
//   - present_continuous_for_future (5-8)
//   - used_to_for_past_habits (9-12)
//   - used_to_vs_would_vs_be_used_to (13-16)

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'future-forms-and-used-to';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 16,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: will_vs_going_to (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'Look at those dark black clouds! It ____ rain.',
        options: ['is going to', 'will', 'goes to', 'shall'],
      },
      { correct: 'is going to' },
      EXPLANATION(1),
      PRO_TIP(1),
      'will_vs_going_to'
    ),
    makeExercise(
      'multiple_choice',
      2,
      PROMPT(2),
      {
        choices: [
          'A: "The doorbell is ringing." B: "I\'ll get it!" (spontaneous decision)',
          'A: "The doorbell is ringing." B: "I am going to get it yesterday."',
          'A: "The doorbell is ringing." B: "I getting it now."',
          'A: "The doorbell is ringing." B: "I will to get it."',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(2),
      PRO_TIP(2),
      'will_vs_going_to'
    ),
    makeExercise(
      'fill_blank',
      3,
      PROMPT(3),
      {
        sentence: 'We bought the tickets last week. We ____ travel to Rome in July.',
        options: ['are going to', 'will', 'shall to', 'would to'],
      },
      { correct: 'are going to' },
      EXPLANATION(3),
      PRO_TIP(3),
      'will_vs_going_to'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'Use "will" for spontaneous decisions made at the moment of speaking, and "be going to" for prior plans and intentions.',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'will_vs_going_to'
    ),

    // ── SUB-TOPIC 2: present_continuous_for_future (5-8) ──
    makeExercise(
      'multiple_choice',
      5,
      PROMPT(5),
      {
        choices: [
          'I am meeting the dentist at 3:00 PM tomorrow (fixed arrangement).',
          'I meet the dentist at 3:00 PM tomorrow.',
          'I am meet the dentist at 3:00 PM tomorrow.',
          'I was meeting the dentist at 3:00 PM tomorrow.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(5),
      PRO_TIP(5),
      'present_continuous_for_future'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'What ____ you doing this Friday night?',
        options: ['are', 'will', 'do', 'have'],
      },
      { correct: 'are' },
      EXPLANATION(6),
      PRO_TIP(6),
      'present_continuous_for_future'
    ),
    makeExercise(
      'drag_drop',
      7,
      PROMPT(7),
      {
        tokens: ['They', 'are', 'flying', 'to', 'New', 'York', 'on', 'Monday', 'morning.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      EXPLANATION(7),
      PRO_TIP(7),
      'present_continuous_for_future'
    ),
    makeExercise(
      'fill_blank',
      8,
      PROMPT(8),
      {
        sentence: 'We ____ having a team dinner tomorrow at 8:00 PM.',
        options: ['are', 'will', 'do', 'have'],
      },
      { correct: 'are' },
      EXPLANATION(8),
      PRO_TIP(8),
      'present_continuous_for_future'
    ),

    // ── SUB-TOPIC 3: used_to_for_past_habits (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'I ____ play video games every day, but now I don\'t have time.',
        options: ['used to', 'use to', 'was used to', 'got used to'],
      },
      { correct: 'used to' },
      EXPLANATION(9),
      PRO_TIP(9),
      'used_to_for_past_habits'
    ),
    makeExercise(
      'multiple_choice',
      10,
      PROMPT(10),
      {
        choices: [
          'Did you use to live in Spain when you were a child?',
          'Did you used to live in Spain when you were a child?',
          'Were you use to live in Spain when you were a child?',
          'Have you used to live in Spain when you were a child?',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(10),
      PRO_TIP(10),
      'used_to_for_past_habits'
    ),
    makeExercise(
      'fill_blank',
      11,
      PROMPT(11),
      {
        sentence: 'I ____ not use to like olives, but now I love them.',
        options: ['did', 'was', 'have', 'do'],
      },
      { correct: 'did' },
      EXPLANATION(11),
      PRO_TIP(11),
      'used_to_for_past_habits'
    ),
    makeExercise(
      'true_false',
      12,
      PROMPT(12),
      {
        statement: 'In negative and question forms with "did", "used to" changes to "use to" (e.g. "I didn\'t use to", "Did you use to...?").',
      },
      { correct: true },
      EXPLANATION(12),
      PRO_TIP(12),
      'used_to_for_past_habits'
    ),

    // ── SUB-TOPIC 4: used_to_vs_would_vs_be_used_to (13-16) ──
    makeExercise(
      'matching',
      13,
      PROMPT(13),
      {
        left: [
          'Past habit/state (no longer true):',
          'Repeated past action (nostalgic):',
          'Accustomed to (familiar with):',
          'In the process of getting accustomed:',
        ],
        right: [
          'I used to live in London.',
          'Every summer, we would swim in the lake.',
          'I am used to the noisy traffic.',
          'I am getting used to the cold weather.',
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
      'used_to_vs_would_vs_be_used_to'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'Living in London was difficult at first, but now I am used to ____ on the left.',
        options: ['driving', 'drive', 'drove', 'driven'],
      },
      { correct: 'driving' },
      EXPLANATION(14),
      PRO_TIP(14),
      'used_to_vs_would_vs_be_used_to'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'I used to have long hair when I was a teenager (state: "would" cannot be used with stative verbs like "have").',
          'I would have long hair when I was a teenager.',
          'I was used to have long hair when I was a teenager.',
          'I am used to long hair when I was a teenager.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'used_to_vs_would_vs_be_used_to'
    ),
    makeExercise(
      'sentence_reorder',
      16,
      PROMPT(16),
      {
        tokens: ['She', 'used', 'to', 'work', 'in', 'a', 'bank.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6] },
      EXPLANATION(16),
      PRO_TIP(16),
      'used_to_vs_would_vs_be_used_to'
    ),
  ],
};
