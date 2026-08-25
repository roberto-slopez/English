// Lesson 14: Phrasal Verbs (Everyday Multi-Word Verbs in Context)
// 16 exercises across 4 sub-topics:
//   - daily_routines (1-4)
//   - communication_and_social (5-8)
//   - problem_solving_and_decisions (9-12)
//   - separable_vs_inseparable (13-16)

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'phrasal-verbs';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 14,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: daily_routines (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'It is very cold outside. Make sure to ____ your jacket before going out.',
        options: ['put on', 'take off', 'turn on', 'give up'],
      },
      { correct: 'put on' },
      EXPLANATION(1),
      PRO_TIP(1),
      'daily_routines'
    ),
    makeExercise(
      'multiple_choice',
      2,
      PROMPT(2),
      {
        choices: [
          'Please turn off the lights before you leave the office.',
          'Please turn out the lights before you leave the office.',
          'Please turn away the lights before you leave the office.',
          'Please turn up the lights to save energy.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(2),
      PRO_TIP(2),
      'daily_routines'
    ),
    makeExercise(
      'fill_blank',
      3,
      PROMPT(3),
      {
        sentence: 'My alarm goes off at 6:30 AM, but I usually ____ at 7:00 AM.',
        options: ['get up', 'look for', 'give in', 'call off'],
      },
      { correct: 'get up' },
      EXPLANATION(3),
      PRO_TIP(3),
      'daily_routines'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'A phrasal verb consists of a verb + a particle (preposition or adverb), creating a new meaning different from the original verb alone.',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'daily_routines'
    ),

    // ── SUB-TOPIC 2: communication_and_social (5-8) ──
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: 'Because of the thunderstorm, the organizers had to ____ the outdoor concert.',
        options: ['call off', 'call in', 'look up', 'run into'],
      },
      { correct: 'call off' },
      EXPLANATION(5),
      PRO_TIP(5),
      'communication_and_social'
    ),
    makeExercise(
      'multiple_choice',
      6,
      PROMPT(6),
      {
        choices: [
          'I get along very well with my coworkers.',
          'I get off very well with my coworkers.',
          'I get out very well with my coworkers.',
          'I get up very well with my coworkers.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(6),
      PRO_TIP(6),
      'communication_and_social'
    ),
    makeExercise(
      'drag_drop',
      7,
      PROMPT(7),
      {
        tokens: ['I', 'am', 'really', 'looking', 'forward', 'to', 'my', 'vacation.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(7),
      PRO_TIP(7),
      'communication_and_social'
    ),
    makeExercise(
      'fill_blank',
      8,
      PROMPT(8),
      {
        sentence: 'I need to ____ what time the museum opens tomorrow.',
        options: ['find out', 'look after', 'take after', 'bring up'],
      },
      { correct: 'find out' },
      EXPLANATION(8),
      PRO_TIP(8),
      'communication_and_social'
    ),

    // ── SUB-TOPIC 3: problem_solving_and_decisions (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'Learning English grammar can be challenging, but never ____!',
        options: ['give up', 'give in', 'give away', 'give out'],
      },
      { correct: 'give up' },
      EXPLANATION(9),
      PRO_TIP(9),
      'problem_solving_and_decisions'
    ),
    makeExercise(
      'multiple_choice',
      10,
      PROMPT(10),
      {
        choices: [
          'We have run out of coffee; could you buy some on your way home?',
          'We have run off coffee; could you buy some on your way home?',
          'We have run into coffee; could you buy some on your way home?',
          'We have run down coffee; could you buy some on your way home?',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(10),
      PRO_TIP(10),
      'problem_solving_and_decisions'
    ),
    makeExercise(
      'fill_blank',
      11,
      PROMPT(11),
      {
        sentence: 'Don\'t ____ until tomorrow what you can do today.',
        options: ['put off', 'put on', 'put out', 'put up'],
      },
      { correct: 'put off' },
      EXPLANATION(11),
      PRO_TIP(11),
      'problem_solving_and_decisions'
    ),
    makeExercise(
      'matching',
      12,
      PROMPT(12),
      {
        left: [
          'call off',
          'run out of',
          'look after',
          'figure out',
        ],
        right: [
          'cancel an event or meeting',
          'have no more left of something',
          'take care of a person or pet',
          'solve a problem or understand something',
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
      EXPLANATION(12),
      PRO_TIP(12),
      'problem_solving_and_decisions'
    ),

    // ── SUB-TOPIC 4: separable_vs_inseparable (13-16) ──
    makeExercise(
      'multiple_choice',
      13,
      PROMPT(13),
      {
        choices: [
          'Please turn it off. (Correct: pronoun MUST go between verb and particle)',
          'Please turn off it. (Incorrect pronoun placement)',
          'Please turn it on off.',
          'Please off it turn.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(13),
      PRO_TIP(13),
      'separable_vs_inseparable'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'If you don\'t know this word, you can look it ____ in the dictionary.',
        options: ['up', 'in', 'on', 'at'],
      },
      { correct: 'up' },
      EXPLANATION(14),
      PRO_TIP(14),
      'separable_vs_inseparable'
    ),
    makeExercise(
      'sentence_reorder',
      15,
      PROMPT(15),
      {
        tokens: ['She', 'took', 'off', 'her', 'coat', 'and', 'sat', 'down.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(15),
      PRO_TIP(15),
      'separable_vs_inseparable'
    ),
    makeExercise(
      'true_false',
      16,
      PROMPT(16),
      {
        statement: 'With separable phrasal verbs, when the object is a pronoun (it, him, her, them), it MUST be placed between the verb and the particle (e.g. "pick it up", never "pick up it").',
      },
      { correct: true },
      EXPLANATION(16),
      PRO_TIP(16),
      'separable_vs_inseparable'
    ),
  ],
};
