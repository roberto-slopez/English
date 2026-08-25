// Lesson 10: Modal Verbs (Should, Could, Would, Might, Must, Have to)
// 16 exercises across 4 sub-topics:
//   - advice_and_obligation (1-4)
//   - ability_and_permission (5-8)
//   - possibility_and_probability (9-12)
//   - logical_deduction (13-16)

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'modal-verbs';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 10,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: advice_and_obligation (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'You look tired. You ____ get some sleep.',
        options: ['should', 'must to', 'ought', 'should to'],
      },
      { correct: 'should' },
      EXPLANATION(1),
      PRO_TIP(1),
      'advice_and_obligation'
    ),
    makeExercise(
      'multiple_choice',
      2,
      PROMPT(2),
      {
        choices: [
          'You mustn\'t smoke inside the hospital (it is strictly prohibited).',
          'You don\'t have to smoke inside the hospital.',
          'You shouldn\'t to smoke inside the hospital.',
          'You might not smoke inside the hospital.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(2),
      PRO_TIP(2),
      'advice_and_obligation'
    ),
    makeExercise(
      'fill_blank',
      3,
      PROMPT(3),
      {
        sentence: 'Tomorrow is Sunday! I ____ wake up early.',
        options: ["don't have to", "mustn't", "shouldn't to", "cannot to"],
      },
      { correct: "don't have to" },
      EXPLANATION(3),
      PRO_TIP(3),
      'advice_and_obligation'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'Modal verbs like "should", "must", and "can" are followed directly by the base verb without "to" (e.g. "He should go", not "He should to go").',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'advice_and_obligation'
    ),

    // ── SUB-TOPIC 2: ability_and_permission (5-8) ──
    makeExercise(
      'multiple_choice',
      5,
      PROMPT(5),
      {
        choices: [
          'Could you please pass the salt? (polite request)',
          'Must you please pass the salt?',
          'Should you please pass the salt?',
          'Might you please pass the salt?',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(5),
      PRO_TIP(5),
      'ability_and_permission'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'When she was five, she ____ already swim very fast.',
        options: ['could', 'can', 'should', 'might'],
      },
      { correct: 'could' },
      EXPLANATION(6),
      PRO_TIP(6),
      'ability_and_permission'
    ),
    makeExercise(
      'drag_drop',
      7,
      PROMPT(7),
      {
        tokens: ['May', 'I', 'ask', 'you', 'a', 'quick', 'question', '?'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(7),
      PRO_TIP(7),
      'ability_and_permission'
    ),
    makeExercise(
      'fill_blank',
      8,
      PROMPT(8),
      {
        sentence: 'Excuse me, ____ you help me carry this heavy box?',
        options: ['could', 'should', 'must', 'might'],
      },
      { correct: 'could' },
      EXPLANATION(8),
      PRO_TIP(8),
      'ability_and_permission'
    ),

    // ── SUB-TOPIC 3: possibility_and_probability (9-12) ──
    makeExercise(
      'multiple_choice',
      9,
      PROMPT(9),
      {
        choices: [
          'Take an umbrella with you; it might rain later this afternoon.',
          'Take an umbrella with you; it musts rain later this afternoon.',
          'Take an umbrella with you; it should to rain later this afternoon.',
          'Take an umbrella with you; it can to rain later this afternoon.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(9),
      PRO_TIP(9),
      'possibility_and_probability'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'Where is Lucas? He ____ be in the conference room, but I am not certain.',
        options: ['might', 'must to', 'shall', 'has to'],
      },
      { correct: 'might' },
      EXPLANATION(10),
      PRO_TIP(10),
      'possibility_and_probability'
    ),
    makeExercise(
      'sentence_reorder',
      11,
      PROMPT(11),
      {
        tokens: ['We', 'might', 'go', 'to', 'Italy', 'next', 'summer.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6] },
      EXPLANATION(11),
      PRO_TIP(11),
      'possibility_and_probability'
    ),
    makeExercise(
      'true_false',
      12,
      PROMPT(12),
      {
        statement: '"Might" expresses a possibility (about 30-50% chance), whereas "will" expresses certainty.',
      },
      { correct: true },
      EXPLANATION(12),
      PRO_TIP(12),
      'possibility_and_probability'
    ),

    // ── SUB-TOPIC 4: logical_deduction (13-16) ──
    makeExercise(
      'multiple_choice',
      13,
      PROMPT(13),
      {
        choices: [
          'The lights are off and the door is locked. They must be out.',
          'The lights are off and the door is locked. They can be out.',
          'The lights are off and the door is locked. They should to be out.',
          'The lights are off and the door is locked. They must to be out.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(13),
      PRO_TIP(13),
      'logical_deduction'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'He just ate three whole pizzas! He ____ be hungry now.',
        options: ["can't", "mustn't to", 'shouldn', 'might not to'],
      },
      { correct: "can't" },
      EXPLANATION(14),
      PRO_TIP(14),
      'logical_deduction'
    ),
    makeExercise(
      'matching',
      15,
      PROMPT(15),
      {
        left: [
          'Advice: You look sick;',
          'Deduction (certain): His car is outside;',
          'Impossibility: He is in Tokyo today;',
          'Prohibition: In an airport, you',
        ],
        right: [
          'you should see a doctor.',
          'he must be at home.',
          'he can\'t be the thief.',
          'mustn\'t leave luggage unattended.',
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
      EXPLANATION(15),
      PRO_TIP(15),
      'logical_deduction'
    ),
    makeExercise(
      'multiple_choice',
      16,
      PROMPT(16),
      {
        choices: [
          'A: "Whose coat is this?" B: "It might be Sarah\'s, but she usually wears blue."',
          'A: "Whose coat is this?" B: "It must to be Sarah\'s, but she usually wears blue."',
          'A: "Whose coat is this?" B: "It can\'t to be Sarah\'s."',
          'A: "Whose coat is this?" B: "It shoulds be Sarah\'s."',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(16),
      PRO_TIP(16),
      'logical_deduction'
    ),
  ],
};
