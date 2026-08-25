// Lesson 8: Past Perfect (had + past participle)
// Action completed before another past action or past time
// 16 exercises across 4 sub-topics:
//   - past_perfect_form (1-4)
//   - timeline_sequencing (5-8)
//   - time_connectors (9-12)
//   - dialogues_and_narratives (13-16)

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'past-perfect';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 8,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: past_perfect_form (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'When we arrived at the cinema, the movie had already ____.',
        options: ['started', 'start', 'starting', 'starts'],
      },
      { correct: 'started' },
      EXPLANATION(1),
      PRO_TIP(1),
      'past_perfect_form'
    ),
    makeExercise(
      'multiple_choice',
      2,
      PROMPT(2),
      {
        choices: [
          'She had never seen snow before she moved to Canada.',
          'She has never seen snow before she moved to Canada.',
          'She had never saw snow before she moved to Canada.',
          'She was never seen snow before she moved to Canada.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(2),
      PRO_TIP(2),
      'past_perfect_form'
    ),
    makeExercise(
      'fill_blank',
      3,
      PROMPT(3),
      {
        sentence: 'I didn\'t have cash because I ____ my wallet at home.',
        options: ['had left', 'have left', 'lefted', 'was leaving'],
      },
      { correct: 'had left' },
      EXPLANATION(3),
      PRO_TIP(3),
      'past_perfect_form'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'The Past Perfect formula is always "had + past participle" for all subjects (I, you, he, she, they, we).',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'past_perfect_form'
    ),

    // ── SUB-TOPIC 2: timeline_sequencing (5-8) ──
    makeExercise(
      'multiple_choice',
      5,
      PROMPT(5),
      {
        choices: [
          'By the time the ambulance arrived, the police had already secured the area.',
          'By the time the ambulance had arrived, the police secured the area.',
          'By the time the ambulance arrived, the police has secured the area.',
          'By the time the ambulance was arriving, the police had secured the area.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(5),
      PRO_TIP(5),
      'timeline_sequencing'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'The train ____ by the time we reached the station.',
        options: ['had departed', 'has departed', 'departed already', 'was departed'],
      },
      { correct: 'had departed' },
      EXPLANATION(6),
      PRO_TIP(6),
      'timeline_sequencing'
    ),
    makeExercise(
      'drag_drop',
      7,
      PROMPT(7),
      {
        tokens: ['After', 'he', 'had', 'finished', 'his', 'dinner,', 'he', 'went', 'for', 'a', 'walk.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      EXPLANATION(7),
      PRO_TIP(7),
      'timeline_sequencing'
    ),
    makeExercise(
      'multiple_choice',
      8,
      PROMPT(8),
      {
        choices: [
          'Action 1 (earlier): had studied; Action 2 (later): took the test',
          'Action 1 (earlier): took the test; Action 2 (later): had studied',
          'Both actions happened at exactly the same time',
          'Action 1 is present; Action 2 is past',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(8),
      PRO_TIP(8),
      'timeline_sequencing'
    ),

    // ── SUB-TOPIC 3: time_connectors (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: '____ the time she was 25, she had already written two novels.',
        options: ['By', 'At', 'In', 'During'],
      },
      { correct: 'By' },
      EXPLANATION(9),
      PRO_TIP(9),
      'time_connectors'
    ),
    makeExercise(
      'multiple_choice',
      10,
      PROMPT(10),
      {
        choices: [
          'They had lived in Spain for 3 years before they moved to France.',
          'They lived in Spain for 3 years before they had moved to France.',
          'They have lived in Spain for 3 years before they moved to France.',
          'They had live in Spain for 3 years before they move to France.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(10),
      PRO_TIP(10),
      'time_connectors'
    ),
    makeExercise(
      'matching',
      11,
      PROMPT(11),
      {
        left: [
          'She was exhausted because',
          'The road was wet because',
          'He could not find his keys because',
          'I recognized her because',
        ],
        right: [
          'she had worked all night.',
          'it had rained heavily.',
          'he had dropped them in the park.',
          'we had met before in Boston.',
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
      'time_connectors'
    ),
    makeExercise(
      'fill_blank',
      12,
      PROMPT(12),
      {
        sentence: 'He felt sick because he ____ too much fast food.',
        options: ['had eaten', 'has eaten', 'eats', 'was eaten'],
      },
      { correct: 'had eaten' },
      EXPLANATION(12),
      PRO_TIP(12),
      'time_connectors'
    ),

    // ── SUB-TOPIC 4: dialogues_and_narratives (13-16) ──
    makeExercise(
      'multiple_choice',
      13,
      PROMPT(13),
      {
        choices: [
          'A: "Why were you late?" B: "Because my alarm had not gone off."',
          'A: "Why were you late?" B: "Because my alarm has not gone off."',
          'A: "Why were you late?" B: "Because my alarm had not go off."',
          'A: "Why did you late?" B: "Because my alarm was not gone off."',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(13),
      PRO_TIP(13),
      'dialogues_and_narratives'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'A: "Did you talk to David?" — B: "No, he ____ left the office when I called."',
        options: ['had already', 'has already', 'was already', 'already had'],
      },
      { correct: 'had already' },
      EXPLANATION(14),
      PRO_TIP(14),
      'dialogues_and_narratives'
    ),
    makeExercise(
      'sentence_reorder',
      15,
      PROMPT(15),
      {
        tokens: ['I', 'realized', 'that', 'I', 'had', 'locked', 'myself', 'out.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(15),
      PRO_TIP(15),
      'dialogues_and_narratives'
    ),
    makeExercise(
      'true_false',
      16,
      PROMPT(16),
      {
        statement: 'In the sentence "When I arrived, they were having dinner", dinner was in progress; in "When I arrived, they had had dinner", dinner was already finished.',
      },
      { correct: true },
      EXPLANATION(16),
      PRO_TIP(16),
      'dialogues_and_narratives'
    ),
  ],
};
