// Lesson 7: Present Perfect vs Simple Past
// Finished time (Simple Past) vs Unfinished/Experience time (Present Perfect)
// 16 exercises across 4 sub-topics:
//   - time_markers (1-4)
//   - dialogue_tenses (5-8)
//   - questions_when_vs_have (9-12)
//   - sentence_transformations (13-16)

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'present-perfect-vs-simple-past';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 7,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: time_markers (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'I ____ my keys yesterday morning.',
        options: ['lost', 'have lost', 'have lose', 'losing'],
      },
      { correct: 'lost' },
      EXPLANATION(1),
      PRO_TIP(1),
      'time_markers'
    ),
    makeExercise(
      'multiple_choice',
      2,
      PROMPT(2),
      {
        choices: [
          'She has already finished her homework.',
          'She finished already her homework yesterday.',
          'She has finished yesterday her homework.',
          'She already has finish her homework.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(2),
      PRO_TIP(2),
      'time_markers'
    ),
    makeExercise(
      'fill_blank',
      3,
      PROMPT(3),
      {
        sentence: 'They have lived in Toronto ____ 2018.',
        options: ['since', 'for', 'ago', 'in'],
      },
      { correct: 'since' },
      EXPLANATION(3),
      PRO_TIP(3),
      'time_markers'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'You can use "yesterday", "last week", and "in 2015" with the Present Perfect tense in standard English.',
      },
      { correct: false },
      EXPLANATION(4),
      PRO_TIP(4),
      'time_markers'
    ),

    // ── SUB-TOPIC 2: dialogue_tenses (5-8) ──
    makeExercise(
      'multiple_choice',
      5,
      PROMPT(5),
      {
        choices: [
          'A: "Have you seen the new movie?" B: "Yes, I watched it on Friday."',
          'A: "Have you seen the new movie?" B: "Yes, I have watched it on Friday."',
          'A: "Did you see the new movie?" B: "Yes, I have seen it on Friday."',
          'A: "Have you saw the new movie?" B: "Yes, I watched it on Friday."',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(5),
      PRO_TIP(5),
      'dialogue_tenses'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'A: "Have you ever tried paella?" — B: "Yes, I ____ it when I was in Spain."',
        options: ['ate', 'have eaten', 'eat', 'had eat'],
      },
      { correct: 'ate' },
      EXPLANATION(6),
      PRO_TIP(6),
      'dialogue_tenses'
    ),
    makeExercise(
      'drag_drop',
      7,
      PROMPT(7),
      {
        tokens: ['I', 'have', 'never', 'visited', 'London,', 'but', 'my', 'brother', 'went', 'there', 'in', '2020.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
      EXPLANATION(7),
      PRO_TIP(7),
      'dialogue_tenses'
    ),
    makeExercise(
      'fill_blank',
      8,
      PROMPT(8),
      {
        sentence: 'Marcus is still at work. He ____ his report yet.',
        options: ["hasn't finished", "didn't finish", "hasn't finish", 'not finished'],
      },
      { correct: "hasn't finished" },
      EXPLANATION(8),
      PRO_TIP(8),
      'dialogue_tenses'
    ),

    // ── SUB-TOPIC 3: questions_when_vs_have (9-12) ──
    makeExercise(
      'multiple_choice',
      9,
      PROMPT(9),
      {
        choices: [
          'When did you buy that computer?',
          'When have you bought that computer?',
          'When did you bought that computer?',
          'When have you buy that computer?',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(9),
      PRO_TIP(9),
      'questions_when_vs_have'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: '____ you finished reading that book, or are you still on chapter 5?',
        options: ['Have', 'Did', 'Were', 'Do'],
      },
      { correct: 'Have' },
      EXPLANATION(10),
      PRO_TIP(10),
      'questions_when_vs_have'
    ),
    makeExercise(
      'matching',
      11,
      PROMPT(11),
      {
        left: [
          'When did you arrive?',
          'How long have you lived here?',
          'Did you enjoy the concert?',
          'Have you eaten lunch yet?',
        ],
        right: [
          'I got here ten minutes ago.',
          'For about five years now.',
          'Yes, the band was amazing!',
          'No, I am still hungry.',
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
      EXPLANATION(11),
      PRO_TIP(11),
      'questions_when_vs_have'
    ),
    makeExercise(
      'true_false',
      12,
      PROMPT(12),
      {
        statement: 'Questions starting with "When...?" ask about a specific point in the past, so they usually take the Simple Past ("When did you...?").',
      },
      { correct: true },
      EXPLANATION(12),
      PRO_TIP(12),
      'questions_when_vs_have'
    ),

    // ── SUB-TOPIC 4: sentence_transformations (13-16) ──
    makeExercise(
      'multiple_choice',
      13,
      PROMPT(13),
      {
        choices: [
          'Shakespeare wrote Hamlet in 1601.',
          'Shakespeare has written Hamlet in 1601.',
          'Shakespeare was written Hamlet in 1601.',
          'Shakespeare has wrote Hamlet in 1601.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(13),
      PRO_TIP(13),
      'sentence_transformations'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'Sofia ____ three cups of coffee this morning (it is still 10 AM).',
        options: ['has drunk', 'drank', 'drinked', 'is drinking'],
      },
      { correct: 'has drunk' },
      EXPLANATION(14),
      PRO_TIP(14),
      'sentence_transformations'
    ),
    makeExercise(
      'sentence_reorder',
      15,
      PROMPT(15),
      {
        tokens: ['I', 'bought', 'this', 'phone', 'two', 'months', 'ago.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6] },
      EXPLANATION(15),
      PRO_TIP(15),
      'sentence_transformations'
    ),
    makeExercise(
      'multiple_choice',
      16,
      PROMPT(16),
      {
        choices: [
          'We have known each other for ten years.',
          'We knew each other for ten years (and we are still best friends).',
          'We have know each other since ten years.',
          'We knowed each other for ten years.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(16),
      PRO_TIP(16),
      'sentence_transformations'
    ),
  ],
};
