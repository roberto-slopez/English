// Lesson 29: Vocabulary - Willingness and Unwillingness
// Based on Cambridge / Passages / Interchange advanced functional vocabulary.
// Focus:
//   1. High and moderate willingness:
//      - "be dying to" (+ base verb): extremely eager / impatient.
//      - "be more than happy to" (+ base verb): gladly willing / pleasure to help.
//      - "be eager to" / "be prepared to" (+ base verb).
//      - "be open to" (+ noun / gerund -ing): receptive / willing to consider.
//   2. Reluctance and unwillingness:
//      - "be reluctant to" (+ base verb): hesitant / cautious.
//      - "be unwilling to" (+ base verb): refusing / not wanting to do something.
//      - "have no desire to" (+ base verb): lacking any interest.
//      - "hesitate to" (+ base verb): pause or delay out of doubt.
//   3. Preposition patterns and gerunds:
//      - "have no intention of" (+ gerund -ing): resolute refusal.
//      - "be against" (+ gerund -ing / noun): strong opposition.
//      - "be open to" (+ gerund -ing / noun): "to" is a preposition here.
//   4. Modals of willingness and refusal:
//      - "will" (present spontaneous willingness) vs "won't" (stubborn refusal / inanimate refusal).
//      - "would" (willingness in past/conditional) vs "wouldn't" (past refusal).
//   5. Synthesis & nuance:
//      - Spectrum from maximum enthusiasm to absolute refusal.
//
// 20 exercises across 5 sub-topics:
//   - high_and_moderate_willingness (1-4)
//   - reluctance_and_unwillingness (5-8)
//   - preposition_patterns_and_gerunds (9-12)
//   - modals_of_willingness_and_refusal (13-16)
//   - willingness_nuance_and_synthesis (17-20)
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'willingness-and-unwillingness';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 29,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: high_and_moderate_willingness (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'I am ____ to see the new movie; I have been waiting for months!',
        options: ['dying', 'reluctant', 'hesitating', 'against'],
      },
      { correct: 'dying' },
      EXPLANATION(1),
      PRO_TIP(1),
      'high_and_moderate_willingness'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'If you need any assistance with the presentation, we are more than ____ to help.',
        options: ['happy', 'reluctant', 'afraid', 'unwilling'],
      },
      { correct: 'happy' },
      EXPLANATION(2),
      PRO_TIP(2),
      'high_and_moderate_willingness'
    ),
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          'I am dying to visit Japan this autumn.',
          'I am open to visiting Japan if tickets are cheap.',
          "I don't mind visiting Japan eventually.",
          'I am reluctant to visit Japan during the rainy season.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(3),
      PRO_TIP(3),
      'high_and_moderate_willingness'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: "The phrase 'be open to' expresses extreme unwillingness to consider new ideas or suggestions.",
      },
      { correct: false },
      EXPLANATION(4),
      PRO_TIP(4),
      'high_and_moderate_willingness'
    ),

    // ── SUB-TOPIC 2: reluctance_and_unwillingness (5-8) ──
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: 'The author was ____ to sign the movie contract because she wanted full creative control.',
        options: ['reluctant', 'eager', 'dying', 'happy'],
      },
      { correct: 'reluctant' },
      EXPLANATION(5),
      PRO_TIP(5),
      'reluctance_and_unwillingness'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'After the tense debate, the candidate made it clear that she had no ____ to speak with the media.',
        options: ['desire', 'eagerness', 'readiness', 'passion'],
      },
      { correct: 'desire' },
      EXPLANATION(6),
      PRO_TIP(6),
      'reluctance_and_unwillingness'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          'She paused and felt doubtful or cautious before accepting.',
          'She accepted immediately with enthusiastic pleasure.',
          'She categorically refused the job offer.',
          'She forgot all about the promotion.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'reluctance_and_unwillingness'
    ),
    makeExercise(
      'true_false',
      8,
      PROMPT(8),
      {
        statement: "'Be reluctant to' and 'be unwilling to' both describe hesitation or a distinct lack of willingness to take action.",
      },
      { correct: true },
      EXPLANATION(8),
      PRO_TIP(8),
      'reluctance_and_unwillingness'
    ),

    // ── SUB-TOPIC 3: preposition_patterns_and_gerunds (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'We have no intention ____ selling our family home.',
        options: ['of', 'to', 'for', 'with'],
      },
      { correct: 'of' },
      EXPLANATION(9),
      PRO_TIP(9),
      'preposition_patterns_and_gerunds'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'Several neighborhood council members are completely against ____ the green park into a commercial parking lot.',
        options: ['turning', 'turn', 'to turn', 'turned'],
      },
      { correct: 'turning' },
      EXPLANATION(10),
      PRO_TIP(10),
      'preposition_patterns_and_gerunds'
    ),
    makeExercise(
      'multiple_choice',
      11,
      PROMPT(11),
      {
        choices: [
          'I have no intention of resigning from my current post.',
          'I have no intention to resigning from my current post.',
          'I have no intention for resign from my current post.',
          'I have no intention of resign from my current post.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(11),
      PRO_TIP(11),
      'preposition_patterns_and_gerunds'
    ),
    makeExercise(
      'sentence_reorder',
      12,
      PROMPT(12),
      {
        tokens: ['She', 'has', 'no', 'intention', 'of', 'changing', 'her', 'mind.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(12),
      PRO_TIP(12),
      'preposition_patterns_and_gerunds'
    ),

    // ── SUB-TOPIC 4: modals_of_willingness_and_refusal (13-16) ──
    makeExercise(
      'fill_blank',
      13,
      PROMPT(13),
      {
        sentence: "I've asked him three times to turn down the music, but he ____ listen!",
        options: ["won't", 'will', 'must', 'might'],
      },
      { correct: "won't" },
      EXPLANATION(13),
      PRO_TIP(13),
      'modals_of_willingness_and_refusal'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'The office printer is completely jammed and it simply ____ print our documents.',
        options: ["won't", 'would', 'should', 'can'],
      },
      { correct: "won't" },
      EXPLANATION(14),
      PRO_TIP(14),
      'modals_of_willingness_and_refusal'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'Past refusal or unwillingness to cooperate.',
          'Past inability due to lack of skills.',
          'A polite conditional request.',
          'A future prediction about cooperation.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'modals_of_willingness_and_refusal'
    ),
    makeExercise(
      'sentence_reorder',
      16,
      PROMPT(16),
      {
        tokens: ['I', 'would', 'gladly', 'help', 'you', 'with', 'the', 'project.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(16),
      PRO_TIP(16),
      'modals_of_willingness_and_refusal'
    ),

    // ── SUB-TOPIC 5: willingness_nuance_and_synthesis (17-20) ──
    makeExercise(
      'true_false',
      17,
      PROMPT(17),
      {
        statement: "In the sentence 'We are open to revising the deadline', 'revising' is a gerund because 'to' functions as a preposition.",
      },
      { correct: true },
      EXPLANATION(17),
      PRO_TIP(17),
      'willingness_nuance_and_synthesis'
    ),
    makeExercise(
      'drag_drop',
      18,
      PROMPT(18),
      {
        tokens: ['We', 'are', 'more', 'than', 'happy', 'to', 'assist', 'you.'],
        slots: ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(18),
      PRO_TIP(18),
      'willingness_nuance_and_synthesis'
    ),
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          'be against (doing something)',
          'be reluctant (to do something)',
          'be eager (to do something)',
          'be dying (to do something)',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'willingness_nuance_and_synthesis'
    ),
    makeExercise(
      'matching',
      20,
      PROMPT(20),
      {
        left: [
          "I'm dying to hear the concert.",
          'We are more than happy to help.',
          'He is reluctant to sign the agreement.',
          'They have no intention of apologizing.',
        ],
        right: [
          'Intense eagerness (maximum willingness)',
          'Glad cooperation (high willingness)',
          'Hesitation and doubt (reluctance)',
          'Absolute refusal (strong unwillingness)',
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
      'willingness_nuance_and_synthesis'
    ),
  ],
};
