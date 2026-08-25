// Lesson 12: Relative Clauses (who, which, that, where, whose)
// 16 exercises across 4 sub-topics:
//   - relative_pronouns_selection (1-4)
//   - defining_vs_non_defining (5-8)
//   - omitting_relative_pronouns (9-12)
//   - sentence_combining (13-16)

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'relative-clauses';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 12,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: relative_pronouns_selection (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'The woman ____ called you earlier is my manager.',
        options: ['who', 'which', 'where', 'whose'],
      },
      { correct: 'who' },
      EXPLANATION(1),
      PRO_TIP(1),
      'relative_pronouns_selection'
    ),
    makeExercise(
      'multiple_choice',
      2,
      PROMPT(2),
      {
        choices: [
          'This is the laptop which I bought yesterday.',
          'This is the laptop who I bought yesterday.',
          'This is the laptop where I bought yesterday.',
          'This is the laptop whose I bought yesterday.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(2),
      PRO_TIP(2),
      'relative_pronouns_selection'
    ),
    makeExercise(
      'fill_blank',
      3,
      PROMPT(3),
      {
        sentence: 'I met a student ____ father is a famous astronaut.',
        options: ['whose', 'who', 'who\'s', 'which'],
      },
      { correct: 'whose' },
      EXPLANATION(3),
      PRO_TIP(3),
      'relative_pronouns_selection'
    ),
    makeExercise(
      'fill_blank',
      4,
      PROMPT(4),
      {
        sentence: 'That is the Italian restaurant ____ we celebrated our anniversary.',
        options: ['where', 'which', 'who', 'whose'],
      },
      { correct: 'where' },
      EXPLANATION(4),
      PRO_TIP(4),
      'relative_pronouns_selection'
    ),

    // ── SUB-TOPIC 2: defining_vs_non_defining (5-8) ──
    makeExercise(
      'multiple_choice',
      5,
      PROMPT(5),
      {
        choices: [
          'My brother, who lives in Tokyo, is visiting us next week.',
          'My brother, that lives in Tokyo, is visiting us next week.',
          'My brother which lives in Tokyo is visiting us next week.',
          'My brother, whose lives in Tokyo, is visiting us next week.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(5),
      PRO_TIP(5),
      'defining_vs_non_defining'
    ),
    makeExercise(
      'true_false',
      6,
      PROMPT(6),
      {
        statement: 'You can use "that" instead of "who" or "which" in non-defining relative clauses with commas (e.g. "Paris, that is beautiful,...").',
      },
      { correct: false },
      EXPLANATION(6),
      PRO_TIP(6),
      'defining_vs_non_defining'
    ),
    makeExercise(
      'drag_drop',
      7,
      PROMPT(7),
      {
        tokens: ['London,', 'which', 'is', 'the', 'capital,', 'has', 'many', 'parks.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(7),
      PRO_TIP(7),
      'defining_vs_non_defining'
    ),
    makeExercise(
      'multiple_choice',
      8,
      PROMPT(8),
      {
        choices: [
          'Non-defining (provides extra, non-essential information separated by commas)',
          'Defining (essential to identify which person or thing is being talked about)',
          'Conditional clause',
          'Passive clause',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(8),
      PRO_TIP(8),
      'defining_vs_non_defining'
    ),

    // ── SUB-TOPIC 3: omitting_relative_pronouns (9-12) ──
    makeExercise(
      'multiple_choice',
      9,
      PROMPT(9),
      {
        choices: [
          '"The book I read yesterday was fascinating" (correct: "that/which" can be omitted because it is the object)',
          '"The man called you is waiting outside" (incorrect omission: "who" is the subject and cannot be omitted)',
          '"The house was built in 1990 is mine" (incorrect omission: "which" is the subject and cannot be omitted)',
          '"The doctor treated me was very kind" (incorrect omission: "who" is the subject and cannot be omitted)',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(9),
      PRO_TIP(9),
      'omitting_relative_pronouns'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'The song (that) you are listening to ____ written by Adele.',
        options: ['was', 'were', 'has', 'did'],
      },
      { correct: 'was' },
      EXPLANATION(10),
      PRO_TIP(10),
      'omitting_relative_pronouns'
    ),
    makeExercise(
      'sentence_reorder',
      11,
      PROMPT(11),
      {
        tokens: ['This', 'is', 'the', 'car', 'I', 'want', 'to', 'buy.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(11),
      PRO_TIP(11),
      'omitting_relative_pronouns'
    ),
    makeExercise(
      'true_false',
      12,
      PROMPT(12),
      {
        statement: 'You can omit "who", "which", or "that" when it is followed by a subject + verb (e.g. "the movie [that] we watched").',
      },
      { correct: true },
      EXPLANATION(12),
      PRO_TIP(12),
      'omitting_relative_pronouns'
    ),

    // ── SUB-TOPIC 4: sentence_combining (13-16) ──
    makeExercise(
      'matching',
      13,
      PROMPT(13),
      {
        left: [
          'A surgeon is a person',
          'A bakery is a place',
          'A dictionary is a book',
          'An orphan is a child',
        ],
        right: [
          'who performs operations in hospitals.',
          'where you can buy fresh bread.',
          'which defines words and their meanings.',
          'whose parents have passed away.',
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
      'sentence_combining'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'I love people ____ have a good sense of humor.',
        options: ['who', 'which', 'where', 'whose'],
      },
      { correct: 'who' },
      EXPLANATION(14),
      PRO_TIP(14),
      'sentence_combining'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'Combine: "I have a friend. Her dog can do tricks." -> "I have a friend whose dog can do tricks."',
          'Combine: "I have a friend. Her dog can do tricks." -> "I have a friend who her dog can do tricks."',
          'Combine: "I have a friend. Her dog can do tricks." -> "I have a friend which dog can do tricks."',
          'Combine: "I have a friend. Her dog can do tricks." -> "I have a friend that dog can do tricks."',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'sentence_combining'
    ),
    makeExercise(
      'multiple_choice',
      16,
      PROMPT(16),
      {
        choices: [
          'A: "Which cafe do you recommend?" B: "The one that is located near the park."',
          'A: "Which cafe do you recommend?" B: "The one who is located near the park."',
          'A: "Which cafe do you recommend?" B: "The one whose is located near the park."',
          'A: "Which cafe do you recommend?" B: "The one where is located near the park."',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(16),
      PRO_TIP(16),
      'sentence_combining'
    ),
  ],
};
