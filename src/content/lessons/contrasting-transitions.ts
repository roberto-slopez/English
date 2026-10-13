// Lesson 31: Contrasting Transitions (On the Contrary, That Said, At the Same Time)
// Based on ESL Level 5 / Cambridge Grammar.
// Key concepts from slides:
//   1. "On the contrary":
//      - Asserts that the exact opposite of what was just said is true.
//      - Often used between two speakers (dialogue):
//        * A: "I thought you were happy." -> B: "On the contrary, I am devastated."
//        * A: "Have you finished the homework?" -> B: "On the contrary, I just started."
//      - Can come after a negative statement:
//        * "I'm not from Vietnam. On the contrary, I'm from China."
//      - Can omit the contrasting statement (standalone ellipsis):
//        * "I'm not angry with you. On the contrary."
//   2. "That said":
//      - A concession introducing a counter-balancing point.
//      - Typically used by ONE person to balance positive and negative aspects:
//        * "English is difficult to learn. That said, it is a rewarding language to learn."
//        * "Our new car is reliable. That said, the monthly payments are too high."
//   3. "At the same time":
//      - Balances two co-existing perspectives (pros and cons).
//      - Typically used by ONE person:
//        * "Your cooking is very good. At the same time, there's a little room for improvement."
//
// 20 exercises across 5 sub-topics:
//   - on_the_contrary_dialogue_and_opposites (1-4)
//   - on_the_contrary_after_negatives_and_ellipsis (5-8)
//   - that_said_concessions (9-12)
//   - at_the_same_time_balanced_views (13-16)
//   - contrasting_transitions_synthesis (17-20)
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'contrasting-transitions';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 31,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: on_the_contrary_dialogue_and_opposites (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'A: I thought you were happy. — B: ____ the contrary, I am devastated.',
        options: ['On', 'In', 'By', 'At'],
      },
      { correct: 'On' },
      EXPLANATION(1),
      PRO_TIP(1),
      'on_the_contrary_dialogue_and_opposites'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'A: Have you finished the homework? — B: On the contrary, I just ____.',
        options: ['started', 'finished', 'refused', 'forgot'],
      },
      { correct: 'started' },
      EXPLANATION(2),
      PRO_TIP(2),
      'on_the_contrary_dialogue_and_opposites'
    ),
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          'That the exact opposite of what speaker A asked or assumed is true.',
          'That speaker B completely agrees with speaker A.',
          'That speaker B is changing the topic entirely.',
          'That speaker B finished the assignment hours ago.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(3),
      PRO_TIP(3),
      'on_the_contrary_dialogue_and_opposites'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: '"On the contrary" is used to show agreement and confirm the other person\'s assumption.',
      },
      { correct: false },
      EXPLANATION(4),
      PRO_TIP(4),
      'on_the_contrary_dialogue_and_opposites'
    ),

    // ── SUB-TOPIC 2: on_the_contrary_after_negatives_and_ellipsis (5-8) ──
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: "I'm not from Vietnam. On the ____, I'm from China.",
        options: ['contrary', 'same', 'said', 'addition'],
      },
      { correct: 'contrary' },
      EXPLANATION(5),
      PRO_TIP(5),
      'on_the_contrary_after_negatives_and_ellipsis'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: "A: Are you upset with me? — B: I'm not angry with you. On the ____.",
        options: ['contrary', 'same time', 'that said', 'meanwhile'],
      },
      { correct: 'contrary' },
      EXPLANATION(6),
      PRO_TIP(6),
      'on_the_contrary_after_negatives_and_ellipsis'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          'It can directly follow a negative statement (e.g., "I\'m not from Vietnam. On the contrary...").',
          'It can only be used at the very end of questions.',
          'It can never be followed by a comma.',
          'It is exclusively used to express simultaneous actions.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'on_the_contrary_after_negatives_and_ellipsis'
    ),
    makeExercise(
      'true_false',
      8,
      PROMPT(8),
      {
        statement: '"On the contrary" can be used alone without repeating the contrasting statement because it already implies that the opposite meaning follows.',
      },
      { correct: true },
      EXPLANATION(8),
      PRO_TIP(8),
      'on_the_contrary_after_negatives_and_ellipsis'
    ),

    // ── SUB-TOPIC 3: that_said_concessions (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'English is difficult to learn. That ____, it is a rewarding language to learn.',
        options: ['said', 'saying', 'says', 'told'],
      },
      { correct: 'said' },
      EXPLANATION(9),
      PRO_TIP(9),
      'that_said_concessions'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'Our new car is reliable. That said, the monthly payments are ____ high.',
        options: ['too', 'neither', 'hardly', 'barely'],
      },
      { correct: 'too' },
      EXPLANATION(10),
      PRO_TIP(10),
      'that_said_concessions'
    ),
    makeExercise(
      'multiple_choice',
      11,
      PROMPT(11),
      {
        choices: [
          'By a single speaker to balance a negative aspect with a positive aspect.',
          'By two speakers to correct a geographical error.',
          'To introduce an exact opposite following a negative statement.',
          'To ask for clarification about a price.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(11),
      PRO_TIP(11),
      'that_said_concessions'
    ),
    makeExercise(
      'sentence_reorder',
      12,
      PROMPT(12),
      {
        tokens: ['Our', 'new', 'car', 'is', 'reliable.', 'That', 'said,', 'the', 'monthly', 'payments', 'are', 'too', 'high.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      EXPLANATION(12),
      PRO_TIP(12),
      'that_said_concessions'
    ),

    // ── SUB-TOPIC 4: at_the_same_time_balanced_views (13-16) ──
    makeExercise(
      'fill_blank',
      13,
      PROMPT(13),
      {
        sentence: "Your cooking is very good. At the same ____, there's a little room for improvement.",
        options: ['time', 'moment', 'day', 'hour'],
      },
      { correct: 'time' },
      EXPLANATION(13),
      PRO_TIP(13),
      'at_the_same_time_balanced_views'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'The project is innovative. At the same time, we must be ____ of the high budget.',
        options: ['mindful', 'angry', 'contrary', 'devastated'],
      },
      { correct: 'mindful' },
      EXPLANATION(14),
      PRO_TIP(14),
      'at_the_same_time_balanced_views'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'To introduce a contrasting, counter-balancing aspect by the same speaker.',
          'To describe two events happening at the exact same second on a clock.',
          'To state that the cooking is completely awful and inedible.',
          'To correct an error made by a second speaker.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'at_the_same_time_balanced_views'
    ),
    makeExercise(
      'sentence_reorder',
      16,
      PROMPT(16),
      {
        tokens: ['English', 'is', 'difficult', 'to', 'learn.', 'That', 'said,', 'it', 'is', 'a', 'rewarding', 'language.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
      EXPLANATION(16),
      PRO_TIP(16),
      'at_the_same_time_balanced_views'
    ),

    // ── SUB-TOPIC 5: contrasting_transitions_synthesis (17-20) ──
    makeExercise(
      'true_false',
      17,
      PROMPT(17),
      {
        statement: '"At the same time" and "that said" are typically used by one person to introduce a positive and negative aspect about a topic.',
      },
      { correct: true },
      EXPLANATION(17),
      PRO_TIP(17),
      'contrasting_transitions_synthesis'
    ),
    makeExercise(
      'drag_drop',
      18,
      PROMPT(18),
      {
        tokens: ['Your', 'cooking', 'is', 'very', 'good.', 'At', 'the', 'same', 'time,', "there's", 'room', 'for', 'improvement.'],
        slots: ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8', 'slot9', 'slot10', 'slot11', 'slot12', 'slot13'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      EXPLANATION(18),
      PRO_TIP(18),
      'contrasting_transitions_synthesis'
    ),
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          'On the contrary',
          'That said',
          'At the same time',
          'Furthermore',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'contrasting_transitions_synthesis'
    ),
    makeExercise(
      'matching',
      20,
      PROMPT(20),
      {
        left: [
          'I thought you were happy. — On the contrary, I am devastated.',
          'English is difficult to learn. That said, it is rewarding.',
          "Your cooking is very good. At the same time, there's room for improvement.",
          "I'm not angry with you. On the contrary.",
        ],
        right: [
          'Two speakers: correcting an assumption with the exact opposite',
          'One speaker: conceding a difficulty while noting a positive benefit',
          'One speaker: balancing praise with a constructive caveat',
          'Standalone ellipsis: implying the opposite without repeating the clause',
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
      'contrasting_transitions_synthesis'
    ),
  ],
};
