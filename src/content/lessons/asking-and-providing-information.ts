// Lesson 21: Asking for and Providing Information.
// Key phrases for outdoor preparation, risk assessment, and recommendations:
//   - Asking: "Is there any danger of...?", "What exactly do you mean by...?", "Is there a risk of...?", "What sort of ... would you recommend taking?"
//   - Providing: "The most important thing to consider is that...", "First and foremost,...", "One thing to keep in mind is that...", "Another thing to consider is..."
//
// 20 exercises across 4 sub-topics:
//   - asking_for_information (1-6)    : Danger/risk of, mean by, recommend + -ing
//   - providing_information (7-12)   : Most important thing, first and foremost, keep in mind, another thing to consider
//   - dialogue_combinations (13-17) : Question & answer interactions in weather/outdoor contexts
//   - functional_review (18-20)     : Intent matching and phrase patterns
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'asking-and-providing-information';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 21,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: asking_for_information (1-6) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'Is there any danger ____ really bad weather?',
        options: ['of', 'for', 'about', 'to'],
      },
      { correct: 'of' },
      EXPLANATION(1),
      PRO_TIP(1),
      'asking_for_information'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'Is there a risk ____ snow on the mountain pass?',
        options: ['of', 'with', 'to', 'from'],
      },
      { correct: 'of' },
      EXPLANATION(2),
      PRO_TIP(2),
      'asking_for_information'
    ),
    makeExercise(
      'fill_blank',
      3,
      PROMPT(3),
      {
        sentence: 'What exactly do you mean ____ "the worst"?',
        options: ['by', 'with', 'about', 'for'],
      },
      { correct: 'by' },
      EXPLANATION(3),
      PRO_TIP(3),
      'asking_for_information'
    ),
    makeExercise(
      'fill_blank',
      4,
      PROMPT(4),
      {
        sentence: 'What sort of coat would you recommend ____?',
        options: ['taking', 'to take', 'take', 'took'],
      },
      { correct: 'taking' },
      EXPLANATION(4),
      PRO_TIP(4),
      'asking_for_information'
    ),
    makeExercise(
      'true_false',
      5,
      PROMPT(5),
      {
        statement:
          'Both "Is there any danger of..." and "Is there a risk of..." are followed by a noun or a gerund (-ing form).',
      },
      { correct: true },
      EXPLANATION(5),
      PRO_TIP(5),
      'asking_for_information'
    ),
    makeExercise(
      'sentence_reorder',
      6,
      PROMPT(6),
      {
        tokens: ['What', 'sort', 'of', 'coat', 'would', 'you', 'recommend', 'taking?'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(6),
      PRO_TIP(6),
      'asking_for_information'
    ),

    // ── SUB-TOPIC 2: providing_information (7-12) ──
    makeExercise(
      'fill_blank',
      7,
      PROMPT(7),
      {
        sentence: 'The most important thing to consider ____ that mountain weather is unpredictable.',
        options: ['is', 'are', 'being', 'was'],
      },
      { correct: 'is' },
      EXPLANATION(7),
      PRO_TIP(7),
      'providing_information'
    ),
    makeExercise(
      'multiple_choice',
      8,
      PROMPT(8),
      {
        choices: [
          'First and foremost, you need a good waterproof coat.',
          'Last but not least, ignore the weather.',
          'By the way, forget your coat.',
          'As an afterthought, grab an umbrella.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(8),
      PRO_TIP(8),
      'providing_information'
    ),
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: "One thing to keep in ____ is that you don't want a thick coat.",
        options: ['mind', 'head', 'brain', 'thought'],
      },
      { correct: 'mind' },
      EXPLANATION(9),
      PRO_TIP(9),
      'providing_information'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'Another thing to ____ is the kind of T-shirt you wear.',
        options: ['consider', 'considering', 'considered', 'consideration'],
      },
      { correct: 'consider' },
      EXPLANATION(10),
      PRO_TIP(10),
      'providing_information'
    ),
    makeExercise(
      'true_false',
      11,
      PROMPT(11),
      {
        statement:
          'The phrase "First and foremost" means "first in sequence and most important of all".',
      },
      { correct: true },
      EXPLANATION(11),
      PRO_TIP(11),
      'providing_information'
    ),
    makeExercise(
      'drag_drop',
      12,
      PROMPT(12),
      {
        tokens: ['One', 'thing', 'to', 'keep', 'in', 'mind', 'is', 'that', 'it', 'might', 'rain.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      EXPLANATION(12),
      PRO_TIP(12),
      'providing_information'
    ),

    // ── SUB-TOPIC 3: dialogue_combinations (13-17) ──
    makeExercise(
      'multiple_choice',
      13,
      PROMPT(13),
      {
        choices: [
          'The most important thing to consider is that mountain weather is unpredictable.',
          'What sort of coat would you recommend taking?',
          'Is there a risk of snow?',
          'What exactly do you mean by danger?',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(13),
      PRO_TIP(13),
      'dialogue_combinations'
    ),
    makeExercise(
      'sentence_reorder',
      14,
      PROMPT(14),
      {
        tokens: ['First', 'and', 'foremost,', 'you', 'need', 'a', 'good', 'waterproof', 'coat.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      EXPLANATION(14),
      PRO_TIP(14),
      'dialogue_combinations'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          'Asking for clarification about a specific word or phrase.',
          'Giving strong advice about footwear.',
          'Refusing to answer the question.',
          'Listing secondary items to pack.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'dialogue_combinations'
    ),
    makeExercise(
      'fill_blank',
      16,
      PROMPT(16),
      {
        sentence: 'When hiking in autumn, the most important thing to consider is ____ daylight hours are shorter.',
        options: ['that', 'which', 'what', 'whose'],
      },
      { correct: 'that' },
      EXPLANATION(16),
      PRO_TIP(16),
      'dialogue_combinations'
    ),
    makeExercise(
      'multiple_choice',
      17,
      PROMPT(17),
      {
        choices: [
          'Another thing to consider is the kind of T-shirt you wear.',
          'Another thing to considering is the kind of T-shirt you wear.',
          'Another thing consider is the kind of T-shirt you wear.',
          'Another thing to consider are the kind of T-shirt you wear.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(17),
      PRO_TIP(17),
      'dialogue_combinations'
    ),

    // ── SUB-TOPIC 4: functional_review (18-20) ──
    makeExercise(
      'matching',
      18,
      PROMPT(18),
      {
        left: [
          'Is there a risk of...?',
          'What exactly do you mean by...?',
          'First and foremost...',
          'Another thing to consider is...',
        ],
        right: [
          'Asking about possible danger',
          'Asking for clarification',
          'Stating the top priority',
          'Adding an additional point',
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
      EXPLANATION(18),
      PRO_TIP(18),
      'functional_review'
    ),
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          'What sort of boots would you recommend buying?',
          'What sort of boots would you recommend to buy?',
          'What sort of boots do you recommendation?',
          'What sort of boots are you recommend to buying?',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'functional_review'
    ),
    makeExercise(
      'true_false',
      20,
      PROMPT(20),
      {
        statement:
          'In the phrase "One thing to keep in mind is that...", "keep in mind" means to remember or take into consideration.',
      },
      { correct: true },
      EXPLANATION(20),
      PRO_TIP(20),
      'functional_review'
    ),
  ],
};
