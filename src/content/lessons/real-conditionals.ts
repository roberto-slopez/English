// Lesson 17: Grammar — Present Real Conditionals.
// Objective: use conditionals to discuss how new technology can help people.
// 20 exercises across 5 sub-topics (mirrors the Canvas lesson flow:
// Presentation → Sentence Scramble → Shop Smart → Evaluation):
//   - present_real_form (1-5)        : If + simple present, simple present (certain results)
//   - modals_in_result (6-10)        : can/may/could, should/ought to, must/have to
//   - sentence_scramble (11-15)      : put each sentence in the proper order / match clauses
//   - shop_smart_clauses (16-18)     : commas + condition clause vs. result clause
//   - evaluation_add_words (19-20)   : add the given word to the correct place
//
// Distribution: 4 fill_blank, 7 multiple_choice, 2 true_false,
//               3 drag_drop, 3 sentence_reorder, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'real-conditionals';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 17,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: present_real_form (1-5) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'If a smart thermostat ____ that the room is empty, it turns off the heat.',
        options: ['senses', 'will sense', 'sensed', 'would sense'],
      },
      { correct: 'senses' },
      EXPLANATION(1),
      PRO_TIP(1),
      'present_real_form'
    ),
    makeExercise(
      'multiple_choice',
      2,
      PROMPT(2),
      {
        choices: [
          'If people use video calls, they stay in touch with their families.',
          'If people will use video calls, they stay in touch with their families.',
          'If people used video calls, they stay in touch with their families.',
          'If people use video calls, they stayed in touch with their families.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(2),
      PRO_TIP(2),
      'present_real_form'
    ),
    makeExercise(
      'fill_blank',
      3,
      PROMPT(3),
      {
        sentence: 'If you ____ a fitness tracker, it counts your steps automatically.',
        options: ['wear', 'wore', 'will wear', 'would wear'],
      },
      { correct: 'wear' },
      EXPLANATION(3),
      PRO_TIP(3),
      'present_real_form'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement:
          'A present real conditional describes a condition and a result that is certain: when the condition happens, the result is always the same.',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'present_real_form'
    ),
    makeExercise(
      'true_false',
      5,
      PROMPT(5),
      {
        statement:
          'In "If a doctor uses a telehealth app, patients can get help from home," the result clause is "If a doctor uses a telehealth app."',
      },
      { correct: false },
      EXPLANATION(5),
      PRO_TIP(5),
      'present_real_form'
    ),

    // ── SUB-TOPIC 2: modals_in_result (6-10) ──
    makeExercise(
      'multiple_choice',
      6,
      PROMPT(6),
      {
        choices: [
          'If your phone is slow, you should delete old apps.',
          'If you use solar panels, you may save money on electricity.',
          'If you want to enter the lab, you must wear a badge.',
          'If you freeze water, it turns into ice.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(6),
      PRO_TIP(6),
      'modals_in_result'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          'If you want to join the online class, you have to create an account.',
          'If people use online maps, they can find new places easily.',
          'If your computer crashes, you ought to save your files more often.',
          'If you press the power button, the screen turns on.',
        ],
      },
      { correctIndex: 1 },
      EXPLANATION(7),
      PRO_TIP(7),
      'modals_in_result'
    ),
    makeExercise(
      'multiple_choice',
      8,
      PROMPT(8),
      {
        choices: [
          'If students have tablets, they may read books anywhere.',
          'If a website asks for your password by email, you should ignore it.',
          'If you want to enroll in the online course, you have to create an account.',
          'If the sun shines, solar panels make electricity.',
        ],
      },
      { correctIndex: 2 },
      EXPLANATION(8),
      PRO_TIP(8),
      'modals_in_result'
    ),
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'If a website asks for your password by email, you ____ ignore it.',
        options: ['ought to', 'ought', 'should to', 'must to'],
      },
      { correct: 'ought to' },
      EXPLANATION(9),
      PRO_TIP(9),
      'modals_in_result'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'If you download the map before your trip, you ____ use it without internet.',
        options: ['can', 'can to', 'cans', 'are can'],
      },
      { correct: 'can' },
      EXPLANATION(10),
      PRO_TIP(10),
      'modals_in_result'
    ),

    // ── SUB-TOPIC 3: sentence_scramble (11-15) ──
    makeExercise(
      'drag_drop',
      11,
      PROMPT(11),
      {
        tokens: ['If', 'you', 'charge', 'your', 'phone', 'at', 'night,', 'it', 'is', 'ready', 'in', 'the', 'morning.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] },
      EXPLANATION(11),
      PRO_TIP(11),
      'sentence_scramble'
    ),
    makeExercise(
      'drag_drop',
      12,
      PROMPT(12),
      {
        tokens: ['Doctors', 'can', 'help', 'patients', 'if', 'they', 'use', 'video', 'calls.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      EXPLANATION(12),
      PRO_TIP(12),
      'sentence_scramble'
    ),
    makeExercise(
      'sentence_reorder',
      13,
      PROMPT(13),
      {
        tokens: ['If', 'a', 'robot', 'cleans', 'the', 'floor,', 'people', 'have', 'more', 'free', 'time.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      EXPLANATION(13),
      PRO_TIP(13),
      'sentence_scramble'
    ),
    makeExercise(
      'sentence_reorder',
      14,
      PROMPT(14),
      {
        tokens: ['If', 'you', 'want', 'to', 'learn', 'faster,', 'you', 'should', 'use', 'a', 'language', 'app.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
      EXPLANATION(14),
      PRO_TIP(14),
      'sentence_scramble'
    ),
    makeExercise(
      'matching',
      15,
      PROMPT(15),
      {
        left: [
          'If you press the button on a smart speaker,',
          'If a smartwatch detects a fall,',
          'If students have a tablet,',
          'If you lose your phone,',
        ],
        right: [
          'it listens to your voice command.',
          'it can call for help automatically.',
          'they may read books anywhere.',
          'you should use a tracking app to find it.',
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
      'sentence_scramble'
    ),

    // ── SUB-TOPIC 4: shop_smart_clauses (16-18) ──
    makeExercise(
      'multiple_choice',
      16,
      PROMPT(16),
      {
        choices: [
          'If it rains, solar panels produce less energy.',
          'If it rains solar panels produce less energy.',
          'Solar panels produce less energy, if it rains.',
          'If it rains; solar panels produce less energy.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(16),
      PRO_TIP(16),
      'shop_smart_clauses'
    ),
    makeExercise(
      'multiple_choice',
      17,
      PROMPT(17),
      {
        choices: [
          'If you shop online',
          'you can compare prices quickly',
          'compare prices',
          'shop online, you can',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(17),
      PRO_TIP(17),
      'shop_smart_clauses'
    ),
    makeExercise(
      'multiple_choice',
      18,
      PROMPT(18),
      {
        choices: [
          'Customers save time',
          'if they use self-checkout machines',
          'they use self-checkout',
          'self-checkout machines',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(18),
      PRO_TIP(18),
      'shop_smart_clauses'
    ),

    // ── SUB-TOPIC 5: evaluation_add_words (19-20) ──
    makeExercise(
      'sentence_reorder',
      19,
      PROMPT(19),
      {
        tokens: ['If', 'your', 'phone', 'gets', 'hot,', 'you', 'should', 'turn', 'it', 'off.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      EXPLANATION(19),
      PRO_TIP(19),
      'evaluation_add_words'
    ),
    makeExercise(
      'sentence_reorder',
      20,
      PROMPT(20),
      {
        tokens: ['If', 'you', 'use', 'a', 'translation', 'app,', 'you', 'can', 'talk', 'with', 'people', 'from', 'other', 'countries.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
      EXPLANATION(20),
      PRO_TIP(20),
      'evaluation_add_words'
    ),
  ],
};
