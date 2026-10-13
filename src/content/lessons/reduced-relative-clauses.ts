// Lesson 27: Relative Pronouns and Reduced Relative Clauses
// Based on Cambridge Evolve Level 5 Unit 1 / Unit 3.
// Key patterns from slides:
//   1. Defining (Restrictive) vs. Non-Defining (Non-Restrictive) Relative Clauses:
//      - Non-defining: Adds extra information, always has commas ("handles" to remove extra info).
//        * "It's Saturday morning, when we discuss my choice of the week."
//        * "Cain, whose work explores the character of introverts, feels that American society often prefers extroverts."
//      - Defining: Provides essential identification, NO commas.
//        * "An extrovert is someone who easily attracts attention."
//        * "These are the two stereotypes that are accepted by most people."
//   2. Reduced Relative Clauses:
//      - Rule: Subject relative clauses can be reduced by omitting the relative pronoun and the verb "be".
//      - Restriction: Object relative clauses CANNOT be reduced.
//      - Types of reduction:
//        * with be + adjective        : "People who are worried..." -> "People worried about meeting strangers..."
//        * with be + past participle   : "The bus that is parked..." -> "The bus parked in front of the office..."
//        * with noun phrases (appositives): "Steven, who is a quick learner..." -> "Steven, a quick learner, adapts..."
//
// 20 exercises across 5 sub-topics:
//   - defining_vs_non_defining (1-4)              : commas as handles, essential vs extra
//   - relative_pronouns_usage (5-8)               : whose, who, that, when, and rules
//   - reduced_with_adjectives_and_participles (9-12): worried about / parked in front of
//   - reduced_with_noun_phrases (13-16)           : appositives and object clause restriction
//   - reduction_synthesis_and_review (17-20)      : drag-drop, matching, and reduction rules
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'reduced-relative-clauses';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 27,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: defining_vs_non_defining (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'Non-defining relative clauses add extra information and are always enclosed in ____.',
        options: ['commas', 'periods', 'hyphens', 'brackets'],
      },
      { correct: 'commas' },
      EXPLANATION(1),
      PRO_TIP(1),
      'defining_vs_non_defining'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'A defining relative clause provides ____ information needed to identify the noun.',
        options: ['essential', 'optional', 'unnecessary', 'extra'],
      },
      { correct: 'essential' },
      EXPLANATION(2),
      PRO_TIP(2),
      'defining_vs_non_defining'
    ),
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          'Cain, whose work explores the character of introverts, feels that American society prefers extroverts.',
          'An extrovert is someone who easily attracts attention.',
          'These are the two stereotypes that are accepted by most people.',
          'The bus that is parked outside is the one we will take.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(3),
      PRO_TIP(3),
      'defining_vs_non_defining'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: "In non-defining relative clauses, you can think of the commas as 'handles' to remove extra information without making the sentence ungrammatical.",
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'defining_vs_non_defining'
    ),

    // ── SUB-TOPIC 2: relative_pronouns_usage (5-8) ──
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: 'Cain, ____ work explores the character of introverts, feels that American society often prefers extroverts.',
        options: ['whose', 'who', 'which', 'that'],
      },
      { correct: 'whose' },
      EXPLANATION(5),
      PRO_TIP(5),
      'relative_pronouns_usage'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'An extrovert is someone ____ easily attracts attention.',
        options: ['who', 'which', 'whose', 'when'],
      },
      { correct: 'who' },
      EXPLANATION(6),
      PRO_TIP(6),
      'relative_pronouns_usage'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          "It's Saturday morning, when we discuss my choice of the week.",
          "It's Saturday morning, that we discuss my choice of the week.",
          "It's Saturday morning who we discuss my choice of the week.",
          "It's Saturday morning whose we discuss my choice of the week.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'relative_pronouns_usage'
    ),
    makeExercise(
      'true_false',
      8,
      PROMPT(8),
      {
        statement: "The relative pronoun 'that' can never be used in non-defining relative clauses (clauses with commas).",
      },
      { correct: true },
      EXPLANATION(8),
      PRO_TIP(8),
      'relative_pronouns_usage'
    ),

    // ── SUB-TOPIC 3: reduced_with_adjectives_and_participles (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'People ____ about meeting strangers often get nervous at parties.',
        options: ['worried', 'who worried', 'are worried', 'worrying'],
      },
      { correct: 'worried' },
      EXPLANATION(9),
      PRO_TIP(9),
      'reduced_with_adjectives_and_participles'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: "The bus ____ in front of the office is the one we'll take to the conference.",
        options: ['parked', 'is parked', 'parking', 'that parked'],
      },
      { correct: 'parked' },
      EXPLANATION(10),
      PRO_TIP(10),
      'reduced_with_adjectives_and_participles'
    ),
    makeExercise(
      'multiple_choice',
      11,
      PROMPT(11),
      {
        choices: [
          "By omitting the relative pronoun 'that' and the be-verb 'is'.",
          'By changing the passive verb into an active verb.',
          'By turning the main clause into a question.',
          'By removing the prepositional phrase completely.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(11),
      PRO_TIP(11),
      'reduced_with_adjectives_and_participles'
    ),
    makeExercise(
      'sentence_reorder',
      12,
      PROMPT(12),
      {
        tokens: ['People', 'worried', 'about', 'meeting', 'strangers', 'often', 'get', 'nervous', 'at', 'parties.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      EXPLANATION(12),
      PRO_TIP(12),
      'reduced_with_adjectives_and_participles'
    ),

    // ── SUB-TOPIC 4: reduced_with_noun_phrases (13-16) ──
    makeExercise(
      'fill_blank',
      13,
      PROMPT(13),
      {
        sentence: 'Steven, a quick ____, adapts easily to new situations.',
        options: ['learner', 'learn', 'learningly', 'learned'],
      },
      { correct: 'learner' },
      EXPLANATION(13),
      PRO_TIP(13),
      'reduced_with_noun_phrases'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'Only subject relative clauses can be reduced; you cannot reduce ____ relative clauses.',
        options: ['object', 'subject', 'adjective', 'defining'],
      },
      { correct: 'object' },
      EXPLANATION(14),
      PRO_TIP(14),
      'reduced_with_noun_phrases'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'Steven, a quick learner, adapts easily to new situations.',
          'Steven a quick learner adapts easily to new situations.',
          'Steven is a quick learner, adapts easily to new situations.',
          'Steven who quick learner adapts easily to new situations.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'reduced_with_noun_phrases'
    ),
    makeExercise(
      'sentence_reorder',
      16,
      PROMPT(16),
      {
        tokens: ['Steven,', 'a', 'quick', 'learner,', 'adapts', 'easily', 'to', 'new', 'situations.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      EXPLANATION(16),
      PRO_TIP(16),
      'reduced_with_noun_phrases'
    ),

    // ── SUB-TOPIC 5: reduction_synthesis_and_review (17-20) ──
    makeExercise(
      'true_false',
      17,
      PROMPT(17),
      {
        statement: "In 'The bus parked in front of the office', the word 'parked' is a past participle heading a reduced relative clause.",
      },
      { correct: true },
      EXPLANATION(17),
      PRO_TIP(17),
      'reduction_synthesis_and_review'
    ),
    makeExercise(
      'drag_drop',
      18,
      PROMPT(18),
      {
        tokens: ['The', 'bus', 'parked', 'in', 'front', 'of', 'the', 'office', 'is', 'the', 'one', "we'll", 'take.'],
        slots: ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8', 'slot9', 'slot10', 'slot11', 'slot12', 'slot13'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      EXPLANATION(18),
      PRO_TIP(18),
      'reduction_synthesis_and_review'
    ),
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          'The book that I read yesterday was fascinating. (Object relative clause)',
          'The man who is standing over there is my uncle. (Subject relative clause with be)',
          'The documents that are attached to this email are confidential. (Subject relative clause with past participle)',
          'Steven, who is a quick learner, adapts easily. (Subject relative clause with noun phrase)',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'reduction_synthesis_and_review'
    ),
    makeExercise(
      'matching',
      20,
      PROMPT(20),
      {
        left: [
          'who are worried about meeting strangers',
          'that is parked in front of the office',
          'who is a quick learner',
          'whose work explores introverts',
        ],
        right: [
          'worried about meeting strangers (adjective)',
          'parked in front of the office (participle)',
          'a quick learner (noun phrase appositive)',
          "Cannot be reduced (possessive 'whose')",
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
      'reduction_synthesis_and_review'
    ),
  ],
};
