// Lesson 23: Comparative Structures (Preferences, Sufficiency, and Proportions)
// Based on Cambridge Evolve Level 5 Unit 2 (Natural Limits: Space vs. Earth / Priorities).
// Key patterns from slides:
//   1. Statement A + rather than + verb + noun phrase
//      - "I would definitely prefer to explore space rather than study the ocean."
//      - "I would certainly prefer to visit Africa rather than visit France."
//   2. Subject + modal + verb + more + prep phrase + than + most + noun + verb
//      - "We can learn more from research into space than most people realize."
//      - "They can earn more from a career in business than most people expect."
//   3. Noun phrase + isn't + adjective + enough + to + verb + noun phrase
//      - "Space exploration just isn't useful enough to justify the cost."
//      - "Getting a college degree isn't rewarding enough to justify the debt."
//   4. It + is + less + adjective + infinitive + noun phrase + than (it is) + infinitive + noun phrase
//      - "It's less important to fix future problems than (it is) to fix current ones."
//      - "It's less costly to buy a new car than (it is) to rent an old one."
//   5. There are + fewer + noun + to + noun phrase
//      - "There are fewer benefits to space exploration."
//
// 20 exercises across 5 sub-topics:
//   - prefer_rather_than (1-4)             : prefer to [verb] rather than [verb]
//   - more_than_clause (5-8)               : verb + more ... than most people realize/expect
//   - not_adj_enough_to_justify (9-12)     : isn't [adj] enough to justify [noun]
//   - less_adj_infinitive_than (13-16)     : It's less [adj] to [verb] than to [verb]
//   - fewer_benefits_and_review (17-20)    : There are fewer [count noun] to [activity]
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'comparative-structures';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 23,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: prefer_rather_than (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'I would definitely prefer to explore space rather than ____ the ocean.',
        options: ['study', 'studying', 'to study', 'studied'],
      },
      { correct: 'study' },
      EXPLANATION(1),
      PRO_TIP(1),
      'prefer_rather_than'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'I would certainly prefer to visit Africa rather ____ visit France.',
        options: ['than', 'then', 'to', 'that'],
      },
      { correct: 'than' },
      EXPLANATION(2),
      PRO_TIP(2),
      'prefer_rather_than'
    ),
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          'I would definitely prefer to explore space rather than study the ocean.',
          'I would definitely prefer to explore space rather to study the ocean.',
          'I would definitely prefer explore space rather than studying the ocean.',
          'I would definitely prefer to explore space instead study the ocean.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(3),
      PRO_TIP(3),
      'prefer_rather_than'
    ),
    makeExercise(
      'sentence_reorder',
      4,
      PROMPT(4),
      {
        tokens: ['I', 'would', 'certainly', 'prefer', 'to', 'visit', 'Africa', 'rather', 'than', 'visit', 'France.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      EXPLANATION(4),
      PRO_TIP(4),
      'prefer_rather_than'
    ),

    // ── SUB-TOPIC 2: more_than_clause (5-8) ──
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: 'We can learn more from research into space ____ most people realize.',
        options: ['than', 'then', 'as', 'that'],
      },
      { correct: 'than' },
      EXPLANATION(5),
      PRO_TIP(5),
      'more_than_clause'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'They can earn more from a career in business than most people ____.',
        options: ['expect', 'expects', 'expecting', 'expectedly'],
      },
      { correct: 'expect' },
      EXPLANATION(6),
      PRO_TIP(6),
      'more_than_clause'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          'It sets up a comparative baseline indicating that the actual benefit exceeds common perception.',
          'It describes when people first began doing space research.',
          'It explains the ultimate cause of why research is funded.',
          'It is a conditional requirement that must be met before learning.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'more_than_clause'
    ),
    makeExercise(
      'true_false',
      8,
      PROMPT(8),
      {
        statement: "In 'They can earn more from a career in business than most people expect', 'more' functions adverbially to modify the verb 'earn'.",
      },
      { correct: true },
      EXPLANATION(8),
      PRO_TIP(8),
      'more_than_clause'
    ),

    // ── SUB-TOPIC 3: not_adj_enough_to_justify (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: "Space exploration just isn't useful ____ to justify the cost.",
        options: ['enough', 'too', 'very', 'so'],
      },
      { correct: 'enough' },
      EXPLANATION(9),
      PRO_TIP(9),
      'not_adj_enough_to_justify'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: "Getting a college degree isn't rewarding enough to ____ the debt.",
        options: ['justify', 'justifies', 'justifying', 'justified'],
      },
      { correct: 'justify' },
      EXPLANATION(10),
      PRO_TIP(10),
      'not_adj_enough_to_justify'
    ),
    makeExercise(
      'multiple_choice',
      11,
      PROMPT(11),
      {
        choices: [
          "Space exploration isn't useful enough to justify the cost.",
          "Space exploration isn't enough useful to justify the cost.",
          "Space exploration isn't useful enough for justify the cost.",
          "Space exploration isn't too useful to justify the cost.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(11),
      PRO_TIP(11),
      'not_adj_enough_to_justify'
    ),
    makeExercise(
      'sentence_reorder',
      12,
      PROMPT(12),
      {
        tokens: ['Getting', 'a', 'college', 'degree', "isn't", 'rewarding', 'enough', 'to', 'justify', 'the', 'debt.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      EXPLANATION(12),
      PRO_TIP(12),
      'not_adj_enough_to_justify'
    ),

    // ── SUB-TOPIC 4: less_adj_infinitive_than (13-16) ──
    makeExercise(
      'fill_blank',
      13,
      PROMPT(13),
      {
        sentence: "It's less important to fix future problems than it is to fix current ____.",
        options: ['ones', 'one', 'problem', 'them'],
      },
      { correct: 'ones' },
      EXPLANATION(13),
      PRO_TIP(13),
      'less_adj_infinitive_than'
    ),
    makeExercise(
      'true_false',
      14,
      PROMPT(14),
      {
        statement: "In 'It's less costly to buy a new car than (it is) to rent an old one', the phrase '(it is)' is optional and can be omitted.",
      },
      { correct: true },
      EXPLANATION(14),
      PRO_TIP(14),
      'less_adj_infinitive_than'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          "It's less costly to buy a new car than to rent an old one.",
          "It's less costly to buy a new car than renting an old one.",
          "It's less costly buying a new car than to rent an old one.",
          "It's less costly to buying a new car than rent an old one.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'less_adj_infinitive_than'
    ),
    makeExercise(
      'drag_drop',
      16,
      PROMPT(16),
      {
        tokens: ["It's", 'less', 'costly', 'to', 'buy', 'a', 'new', 'car', 'than', 'to', 'rent', 'an', 'old', 'one.'],
        slots: ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8', 'slot9', 'slot10', 'slot11', 'slot12', 'slot13', 'slot14'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
      EXPLANATION(16),
      PRO_TIP(16),
      'less_adj_infinitive_than'
    ),

    // ── SUB-TOPIC 5: fewer_benefits_and_review (17-20) ──
    makeExercise(
      'fill_blank',
      17,
      PROMPT(17),
      {
        sentence: 'There are ____ benefits to space exploration.',
        options: ['fewer', 'less', 'little', 'least'],
      },
      { correct: 'fewer' },
      EXPLANATION(17),
      PRO_TIP(17),
      'fewer_benefits_and_review'
    ),
    makeExercise(
      'true_false',
      18,
      PROMPT(18),
      {
        statement: "'Fewer' is used with plural countable nouns (such as 'benefits'), whereas 'less' is used with uncountable nouns (such as 'funding' or 'debt').",
      },
      { correct: true },
      EXPLANATION(18),
      PRO_TIP(18),
      'fewer_benefits_and_review'
    ),
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          "to ('There are fewer benefits to space exploration.')",
          "on ('There are fewer benefits on space exploration.')",
          "at ('There are fewer benefits at space exploration.')",
          "by ('There are fewer benefits by space exploration.')",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'fewer_benefits_and_review'
    ),
    makeExercise(
      'matching',
      20,
      PROMPT(20),
      {
        left: [
          'prefer to explore space rather than study...',
          'learn more ... than most people realize',
          "isn't useful enough to justify the cost",
          'less costly to buy ... than to rent...',
        ],
        right: [
          'prefer to [verb] rather than [verb]',
          'verb + more + than [clause]',
          'not + adjective + enough + to-infinitive',
          "It's less + adj + to-infinitive + than...",
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
      'fewer_benefits_and_review'
    ),
  ],
};
