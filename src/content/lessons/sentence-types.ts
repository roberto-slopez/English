// Lesson 28: Sentence Types (Simple, Compound, and Complex)
// Based on ESL Level 5 / Cambridge Grammar.
// Key concepts from slides:
//   1. Simple Sentences:
//      - 1 independent clause expressing 1 complete idea.
//      - Variations in subjects and verbs:
//        * 1 subject + 1 verb: "Thomas is handsome."
//        * 2 subjects + 1 verb (compound subject): "Thomas and Mike are handsome."
//        * 1 subject + 2 verbs (compound predicate): "Thomas is handsome and looks confident." (NO comma before 'and')
//   2. Compound Sentences:
//      - At least 2 related independent clauses joined by a coordinating conjunction (FANBOYS: for, and, nor, but, or, yet, so).
//      - Punctuation: comma before the coordinating conjunction:
//        * "Thomas is handsome, and he looks confident."
//        * "Thomas is handsome, but he doesn't have confidence."
//   3. Complex Sentences:
//      - 1 independent clause connected to a dependent clause.
//      - Dependent clause begins with a subordinating conjunction (after, before, when, because, although, if, since).
//        * "Thomas is smart although he sometimes makes mistakes."
//        * "Thomas will get a good grade since he studied hard."
//
// 20 exercises across 5 sub-topics:
//   - simple_sentence_structures (1-4)       : 1S+1V, compound subject, compound verb
//   - compound_sentence_structures (5-8)     : 2 independent clauses, FANBOYS, comma rules
//   - complex_sentence_structures (9-12)     : independent + dependent, subordinators
//   - identifying_sentence_types (13-16)     : classification and structural contrasts
//   - sentence_types_synthesis (17-20)       : drag-drop, matching, and synthesis review
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'sentence-types';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 28,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: simple_sentence_structures (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'A simple sentence contains only ____ independent clause and expresses one complete idea.',
        options: ['one', 'two', 'three', 'zero'],
      },
      { correct: 'one' },
      EXPLANATION(1),
      PRO_TIP(1),
      'simple_sentence_structures'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'Thomas and Mike ____ handsome.',
        options: ['are', 'is', 'being', 'was'],
      },
      { correct: 'are' },
      EXPLANATION(2),
      PRO_TIP(2),
      'simple_sentence_structures'
    ),
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          'It has only one independent clause with one subject sharing two verbs (compound predicate).',
          'It contains a subordinating conjunction.',
          'It has two separate independent clauses joined by a comma.',
          'It does not contain a main verb.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(3),
      PRO_TIP(3),
      'simple_sentence_structures'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'A simple sentence can have multiple subjects and multiple verbs, as long as it contains only one independent clause.',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'simple_sentence_structures'
    ),

    // ── SUB-TOPIC 2: compound_sentence_structures (5-8) ──
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: "Thomas is handsome, ____ he doesn't have confidence.",
        options: ['but', 'although', 'because', 'since'],
      },
      { correct: 'but' },
      EXPLANATION(5),
      PRO_TIP(5),
      'compound_sentence_structures'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'Thomas is handsome____ and he looks confident.',
        options: [',', ';', '.', ':'],
      },
      { correct: ',' },
      EXPLANATION(6),
      PRO_TIP(6),
      'compound_sentence_structures'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          'Thomas is handsome, and he looks confident.',
          'Thomas is handsome and he looks confident.',
          'Thomas is handsome, and looks confident.',
          'Thomas is handsome; and he looks confident.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'compound_sentence_structures'
    ),
    makeExercise(
      'true_false',
      8,
      PROMPT(8),
      {
        statement: 'A compound sentence joins at least two independent clauses with a coordinating conjunction like and, but, or so.',
      },
      { correct: true },
      EXPLANATION(8),
      PRO_TIP(8),
      'compound_sentence_structures'
    ),

    // ── SUB-TOPIC 3: complex_sentence_structures (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'Thomas is smart ____ he sometimes makes mistakes.',
        options: ['although', 'and', 'but', 'so'],
      },
      { correct: 'although' },
      EXPLANATION(9),
      PRO_TIP(9),
      'complex_sentence_structures'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'Thomas will get a good grade ____ he studied hard.',
        options: ['since', 'but', 'nor', 'or'],
      },
      { correct: 'since' },
      EXPLANATION(10),
      PRO_TIP(10),
      'complex_sentence_structures'
    ),
    makeExercise(
      'multiple_choice',
      11,
      PROMPT(11),
      {
        choices: [
          "'since he studied hard'",
          "'Thomas will get a good grade'",
          "'Thomas will get'",
          "'a good grade'",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(11),
      PRO_TIP(11),
      'complex_sentence_structures'
    ),
    makeExercise(
      'sentence_reorder',
      12,
      PROMPT(12),
      {
        tokens: ['Thomas', 'is', 'smart', 'although', 'he', 'sometimes', 'makes', 'mistakes.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(12),
      PRO_TIP(12),
      'complex_sentence_structures'
    ),

    // ── SUB-TOPIC 4: identifying_sentence_types (13-16) ──
    makeExercise(
      'fill_blank',
      13,
      PROMPT(13),
      {
        sentence: "'Thomas is handsome and looks confident' is a ____ sentence.",
        options: ['simple', 'compound', 'complex', 'compound-complex'],
      },
      { correct: 'simple' },
      EXPLANATION(13),
      PRO_TIP(13),
      'identifying_sentence_types'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: "'Thomas is handsome, and he looks confident' is a ____ sentence.",
        options: ['compound', 'simple', 'complex', 'fragment'],
      },
      { correct: 'compound' },
      EXPLANATION(14),
      PRO_TIP(14),
      'identifying_sentence_types'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          "Complex sentence (1 independent clause + 1 dependent clause introduced by 'since').",
          'Compound sentence (2 independent clauses joined by a coordinating conjunction).',
          'Simple sentence with a compound subject.',
          'Sentence fragment lacking a main verb.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'identifying_sentence_types'
    ),
    makeExercise(
      'sentence_reorder',
      16,
      PROMPT(16),
      {
        tokens: ['Thomas', 'is', 'handsome,', 'but', 'he', "doesn't", 'have', 'confidence.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(16),
      PRO_TIP(16),
      'identifying_sentence_types'
    ),

    // ── SUB-TOPIC 5: sentence_types_synthesis (17-20) ──
    makeExercise(
      'true_false',
      17,
      PROMPT(17),
      {
        statement: "If you omit the second subject 'he' from 'Thomas is handsome, and he looks confident', the comma must be removed: 'Thomas is handsome and looks confident'.",
      },
      { correct: true },
      EXPLANATION(17),
      PRO_TIP(17),
      'sentence_types_synthesis'
    ),
    makeExercise(
      'drag_drop',
      18,
      PROMPT(18),
      {
        tokens: ['Thomas', 'will', 'get', 'a', 'good', 'grade', 'since', 'he', 'studied', 'hard.'],
        slots: ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8', 'slot9', 'slot10'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      EXPLANATION(18),
      PRO_TIP(18),
      'sentence_types_synthesis'
    ),
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          'for, and, nor, but, or, yet, so',
          'after, before, when, because, although, if',
          'since, although, because, whereas, while',
          'which, who, that, whose, where',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'sentence_types_synthesis'
    ),
    makeExercise(
      'matching',
      20,
      PROMPT(20),
      {
        left: [
          'Thomas and Mike are handsome.',
          'Thomas is handsome and looks confident.',
          "Thomas is handsome, but he doesn't have confidence.",
          'Thomas is smart although he sometimes makes mistakes.',
        ],
        right: [
          'Simple sentence (compound subject: 2S + 1V)',
          'Simple sentence (compound predicate: 1S + 2V)',
          'Compound sentence (2 independent clauses + but)',
          'Complex sentence (independent + dependent clause)',
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
      'sentence_types_synthesis'
    ),
  ],
};
