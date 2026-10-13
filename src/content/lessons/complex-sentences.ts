// Lesson 25: Complex Sentences
// Key concepts from slides:
//   - Definition: A complex sentence has two clauses: one independent clause and one dependent clause.
//   - Roles: Complex sentences provide more information on the main point (stated in the independent clause).
//   - Relationships: Shows relationships between ideas (cause, purpose, time) more effectively than simple sentences.
//   - Punctuation: When dependent clause comes first, use a comma: "Because of heavy traffic, we arrived late to the meeting."
//   - Subordinating conjunctions & structures:
//       * because + clause               : "He could not swim in the pool because he forgot his bathing suit."
//       * so (that) + purpose clause      : "The presenters shortened their presentation so the audience could ask questions."
//       * as + time clause (simultaneous) : "The teacher insulted me as he left."
//       * before + noun phrase            : "Seniors and students line up outside before the event."
//       * because of + noun phrase        : "Pierre's body was exposed because of the prank."
//       * before + clause                 : "He left the room before the guests arrived."
//
// 20 exercises across 5 sub-topics:
//   - clause_identification (1-4)         : independent vs dependent clause definitions
//   - cause_because_vs_because_of (5-8)   : because + clause vs because of + noun phrase
//   - time_conjunctions_before_and_as (9-12): before (clause/noun) and as (simultaneous)
//   - purpose_so_and_punctuation (13-16)  : so (purpose) and comma rules
//   - complex_sentences_synthesis (17-20) : drag-drop, matching, and sentence recognition
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'complex-sentences';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 25,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: clause_identification (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'A complex sentence has two clauses: one independent clause and one ____ clause.',
        options: ['dependent', 'simple', 'coordinating', 'run-on'],
      },
      { correct: 'dependent' },
      EXPLANATION(1),
      PRO_TIP(1),
      'clause_identification'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'The main point of a complex sentence is always stated in the ____ clause.',
        options: ['independent', 'dependent', 'prepositional', 'subordinate'],
      },
      { correct: 'independent' },
      EXPLANATION(2),
      PRO_TIP(2),
      'clause_identification'
    ),
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          "'Because of heavy traffic'",
          "'we arrived late to the meeting'",
          "'to the meeting'",
          "'arrived late'",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(3),
      PRO_TIP(3),
      'clause_identification'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'A dependent clause cannot exist on its own; it depends on the independent clause to give it meaning.',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'clause_identification'
    ),

    // ── SUB-TOPIC 2: cause_because_vs_because_of (5-8) ──
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: 'He could not swim in the pool ____ he forgot his bathing suit.',
        options: ['because', 'because of', 'despite', 'due'],
      },
      { correct: 'because' },
      EXPLANATION(5),
      PRO_TIP(5),
      'cause_because_vs_because_of'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: "Pierre's body was exposed ____ the prank.",
        options: ['because of', 'because', 'as', 'so'],
      },
      { correct: 'because of' },
      EXPLANATION(6),
      PRO_TIP(6),
      'cause_because_vs_because_of'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          "'Heavy traffic' is a noun phrase, so the two-word preposition 'because of' is required.",
          "'Because of' can only be used at the beginning of a sentence.",
          "'Because' cannot be used with transportation topics.",
          "'Because of' must be followed by a conjugated verb.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'cause_because_vs_because_of'
    ),
    makeExercise(
      'true_false',
      8,
      PROMPT(8),
      {
        statement: "'Because' is followed by a complete clause (subject + verb), while 'because of' is followed by a noun or noun phrase.",
      },
      { correct: true },
      EXPLANATION(8),
      PRO_TIP(8),
      'cause_because_vs_because_of'
    ),

    // ── SUB-TOPIC 3: time_conjunctions_before_and_as (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'The teacher insulted me ____ he left.',
        options: ['as', 'because of', 'so', 'before of'],
      },
      { correct: 'as' },
      EXPLANATION(9),
      PRO_TIP(9),
      'time_conjunctions_before_and_as'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'He left the room ____ the guests arrived.',
        options: ['before', 'so', 'because of', 'during'],
      },
      { correct: 'before' },
      EXPLANATION(10),
      PRO_TIP(10),
      'time_conjunctions_before_and_as'
    ),
    makeExercise(
      'multiple_choice',
      11,
      PROMPT(11),
      {
        choices: [
          "A noun phrase ('the event').",
          "An independent clause with a subject and verb.",
          "A subordinate clause with a modal auxiliary.",
          "An infinitive phrase of purpose.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(11),
      PRO_TIP(11),
      'time_conjunctions_before_and_as'
    ),
    makeExercise(
      'sentence_reorder',
      12,
      PROMPT(12),
      {
        tokens: ['He', 'left', 'the', 'room', 'before', 'the', 'guests', 'arrived.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(12),
      PRO_TIP(12),
      'time_conjunctions_before_and_as'
    ),

    // ── SUB-TOPIC 4: purpose_so_and_punctuation (13-16) ──
    makeExercise(
      'fill_blank',
      13,
      PROMPT(13),
      {
        sentence: 'The presenters shortened their presentation ____ the audience could ask questions.',
        options: ['so', 'because of', 'as', 'before of'],
      },
      { correct: 'so' },
      EXPLANATION(13),
      PRO_TIP(13),
      'purpose_so_and_punctuation'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'When the dependent clause comes first, use a ____ before the independent clause.',
        options: ['comma', 'semicolon', 'period', 'colon'],
      },
      { correct: 'comma' },
      EXPLANATION(14),
      PRO_TIP(14),
      'purpose_so_and_punctuation'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'Because of heavy traffic, we arrived late to the meeting.',
          'Because of heavy traffic we arrived late, to the meeting.',
          'We arrived late to the meeting, because of heavy traffic.',
          'He left the room, before the guests arrived.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'purpose_so_and_punctuation'
    ),
    makeExercise(
      'sentence_reorder',
      16,
      PROMPT(16),
      {
        tokens: ['Because', 'of', 'heavy', 'traffic,', 'we', 'arrived', 'late', 'to', 'the', 'meeting.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      EXPLANATION(16),
      PRO_TIP(16),
      'purpose_so_and_punctuation'
    ),

    // ── SUB-TOPIC 5: complex_sentences_synthesis (17-20) ──
    makeExercise(
      'true_false',
      17,
      PROMPT(17),
      {
        statement: 'A complex sentence shows the relationship between two or more ideas more effectively than a simple sentence.',
      },
      { correct: true },
      EXPLANATION(17),
      PRO_TIP(17),
      'complex_sentences_synthesis'
    ),
    makeExercise(
      'drag_drop',
      18,
      PROMPT(18),
      {
        tokens: ['The', 'presenters', 'shortened', 'their', 'presentation', 'so', 'the', 'audience', 'could', 'ask', 'questions.'],
        slots: ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8', 'slot9', 'slot10', 'slot11'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      EXPLANATION(18),
      PRO_TIP(18),
      'complex_sentences_synthesis'
    ),
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          'He could not swim in the pool because he forgot his bathing suit.',
          'He could not swim in the pool and he forgot his bathing suit.',
          'He could not swim in the pool.',
          'Swimming in the pool on a hot summer afternoon.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'complex_sentences_synthesis'
    ),
    makeExercise(
      'matching',
      20,
      PROMPT(20),
      {
        left: [
          'because (he forgot his suit)',
          'so (the audience could ask questions)',
          'before (the guests arrived)',
          'as (he left)',
        ],
        right: [
          'Reason / Cause (full clause)',
          'Purpose / Goal',
          'Prior time / Preceding event',
          'Simultaneous time / While',
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
      'complex_sentences_synthesis'
    ),
  ],
};
