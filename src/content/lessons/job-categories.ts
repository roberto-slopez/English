// Lesson 26: Job Categories and Personality
// Based on Cambridge Evolve Level 5 Unit 1 (Personality and Career Categories).
// Key patterns from slide:
//   1. Executive, Athlete, Salesperson:
//      - Qualities: extrovert, competitive, comfortable speaking up, socializing, good presentation skills
//      - Enjoys: working in teams, leading teams, making an impression, making decisions, a fast-pace, discussing problems and solutions
//   2. Teacher, Nurse, Personal Shopper:
//      - Qualities: a little bit of an introvert and an extrovert, enjoys the company of others, can interact with many different types of people, good listening skills, accepting of others
//      - Enjoys: working in teams and individually, helping others, a medium-pace, thinking about solutions to personal problems
//   3. Writer, Artist, Designer, Chef:
//      - Qualities: introvert, shows off through the things they create, likes to work alone, doesn't mind being weird
//      - Enjoys: making things, working with their hands, exploring new ways of doing things, thinking about ideas
//
// 20 exercises across 5 sub-topics:
//   - executive_athlete_salesperson (1-4)    : leadership, competitive, fast-paced
//   - teacher_nurse_personal_shopper (5-8)   : people-oriented, listening skills, helping
//   - writer_artist_designer_chef (9-12)     : introverted, creative, working alone/hands
//   - working_preferences_and_collocations (13-16) : key phrases (speak up, make decisions, work with hands)
//   - job_matching_and_synthesis (17-20)     : matching, synthesis, and personality-job alignment
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'job-categories';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 26,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: executive_athlete_salesperson (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'Executives and salespeople are typically extroverted and comfortable ____ up in public.',
        options: ['speaking', 'speakingly', 'to spoke', 'spoken'],
      },
      { correct: 'speaking' },
      EXPLANATION(1),
      PRO_TIP(1),
      'executive_athlete_salesperson'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'Athletes and sales leaders thrive in a competitive environment and enjoy ____ an impression.',
        options: ['making', 'doing', 'taking', 'having'],
      },
      { correct: 'making' },
      EXPLANATION(2),
      PRO_TIP(2),
      'executive_athlete_salesperson'
    ),
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          'Extrovert, competitive, comfortable speaking up, and thrives at a fast pace.',
          'Introvert, prefers working alone, and enjoys working with their hands.',
          'A little bit of both, prefers a slow pace, and dislikes making decisions.',
          'Hesitant to socialize and avoids leading teams.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(3),
      PRO_TIP(3),
      'executive_athlete_salesperson'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'Executives, athletes, and salespeople generally enjoy making quick decisions and leading teams in a fast-paced environment.',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'executive_athlete_salesperson'
    ),

    // ── SUB-TOPIC 2: teacher_nurse_personal_shopper (5-8) ──
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: 'A nurse or teacher is often a little bit of an introvert and an ____.',
        options: ['extrovert', 'artist', 'executive', 'athlete'],
      },
      { correct: 'extrovert' },
      EXPLANATION(5),
      PRO_TIP(5),
      'teacher_nurse_personal_shopper'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'They can interact with many different types of people and have good ____ skills.',
        options: ['listening', 'athletic', 'solo', 'weird'],
      },
      { correct: 'listening' },
      EXPLANATION(6),
      PRO_TIP(6),
      'teacher_nurse_personal_shopper'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          'A medium pace, working both in teams and individually while helping others.',
          'A chaotic, ultra-fast pace where they always work alone.',
          'Working exclusively with their hands without speaking to anyone.',
          'Leading large corporate boards and focusing strictly on profits.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'teacher_nurse_personal_shopper'
    ),
    makeExercise(
      'true_false',
      8,
      PROMPT(8),
      {
        statement: 'Teachers and nurses enjoy thinking about solutions to personal problems and are typically accepting of others.',
      },
      { correct: true },
      EXPLANATION(8),
      PRO_TIP(8),
      'teacher_nurse_personal_shopper'
    ),

    // ── SUB-TOPIC 3: writer_artist_designer_chef (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'A writer or artist is usually an introvert who likes to work ____.',
        options: ['alone', 'in crowds', 'noisily', 'competitively'],
      },
      { correct: 'alone' },
      EXPLANATION(9),
      PRO_TIP(9),
      'writer_artist_designer_chef'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: "Creative types express themselves through their creations and don't mind being ____.",
        options: ['weird', 'angry', 'boring', 'careless'],
      },
      { correct: 'weird' },
      EXPLANATION(10),
      PRO_TIP(10),
      'writer_artist_designer_chef'
    ),
    makeExercise(
      'multiple_choice',
      11,
      PROMPT(11),
      {
        choices: [
          'They show off through the things they create rather than through loud socializing.',
          'They show off by winning corporate athletic competitions.',
          'They give aggressive sales presentations to large crowds.',
          'They manage large hospital teams at a fast pace.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(11),
      PRO_TIP(11),
      'writer_artist_designer_chef'
    ),
    makeExercise(
      'sentence_reorder',
      12,
      PROMPT(12),
      {
        tokens: ['Artists', 'enjoy', 'exploring', 'new', 'ways', 'of', 'doing', 'things.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(12),
      PRO_TIP(12),
      'writer_artist_designer_chef'
    ),

    // ── SUB-TOPIC 4: working_preferences_and_collocations (13-16) ──
    makeExercise(
      'fill_blank',
      13,
      PROMPT(13),
      {
        sentence: 'Chefs and designers often enjoy working with their ____.',
        options: ['hands', 'feet', 'voice', 'teams'],
      },
      { correct: 'hands' },
      EXPLANATION(13),
      PRO_TIP(13),
      'working_preferences_and_collocations'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'Executives enjoy making ____ and leading teams.',
        options: ['decisions', 'hands', 'pranks', 'introverts'],
      },
      { correct: 'decisions' },
      EXPLANATION(14),
      PRO_TIP(14),
      'working_preferences_and_collocations'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'Feeling confident when expressing opinions or addressing groups.',
          'Talking very loudly because you cannot hear properly.',
          'Preferring to remain completely silent during all meetings.',
          "Refusing to listen to other team members' suggestions.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'working_preferences_and_collocations'
    ),
    makeExercise(
      'sentence_reorder',
      16,
      PROMPT(16),
      {
        tokens: ['Nurses', 'enjoy', 'helping', 'others', 'at', 'a', 'medium', 'pace.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(16),
      PRO_TIP(16),
      'working_preferences_and_collocations'
    ),

    // ── SUB-TOPIC 5: job_matching_and_synthesis (17-20) ──
    makeExercise(
      'true_false',
      17,
      PROMPT(17),
      {
        statement: 'According to the job categories chart, different personality traits naturally align with different career environments and work paces.',
      },
      { correct: true },
      EXPLANATION(17),
      PRO_TIP(17),
      'job_matching_and_synthesis'
    ),
    makeExercise(
      'drag_drop',
      18,
      PROMPT(18),
      {
        tokens: ['Executives', 'enjoy', 'a', 'fast-pace', 'and', 'discussing', 'problems', 'and', 'solutions.'],
        slots: ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8', 'slot9'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      EXPLANATION(18),
      PRO_TIP(18),
      'job_matching_and_synthesis'
    ),
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          'Writer, Artist, Designer, Chef',
          'Executive, Athlete, Salesperson',
          'Teacher, Nurse, Personal Shopper',
          'Military Commander, Police Officer',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'job_matching_and_synthesis'
    ),
    makeExercise(
      'matching',
      20,
      PROMPT(20),
      {
        left: [
          'Executive, Athlete, Salesperson',
          'Teacher, Nurse, Personal Shopper',
          'Writer, Artist, Designer, Chef',
          'Working with their hands / ideas',
        ],
        right: [
          'Extrovert, competitive, fast-pace',
          'Ambivert, good listener, helping others',
          'Introvert, works alone, makes things',
          'Creative professionals (chefs, artists)',
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
      'job_matching_and_synthesis'
    ),
  ],
};
