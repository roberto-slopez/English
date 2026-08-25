// Lesson 6: Present Perfect + ever/never (have/has + past participle).
// Focus: Interactive Conversational Q&A (Question & Answer dialogues).
// 24 exercises organized in 4 conversational sub-topics (6 exercises each):
//   - answering_negatives_never (1–6)      : Answering "Have you ever...?" with "never" & negative short answers
//   - answering_affirmatives_have_has (7–12): Answering with "Yes, I have / Yes, she has" and Simple Past details
//   - choosing_the_correct_question (13–18) : Given an answer or context, picking the correct "Have/Has... ever...?" question
//   - mixed_dialogues_third_person (19–24) : Full dialogues with 3rd person (has/hasn't), matching pairs, and tense switching
//
// Distribution: 8 fill_blank, 9 multiple_choice, 3 drag_drop,
//               2 true_false, 1 sentence_reorder, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'present-perfect-ever-never';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 6,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: answering_negatives_never (1–6) ───────────────────
    // 1: multiple_choice — pick correct negative response with "never"
    makeExercise(
      'multiple_choice',
      1,
      PROMPT(1),
      {
        choices: [
          'No, I have never tried it.',
          "No, I haven't never tried it.",
          'No, I have ever tried it.',
          "No, I didn't never try it.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(1),
      PRO_TIP(1),
      'answering_negatives_never'
    ),
    // 2: fill_blank — complete negative answer with "never"
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'A: "Have you ever seen the northern lights?" — B: "No, I have ____ seen them."',
        options: ['never', 'ever', 'always', 'not never'],
      },
      { correct: 'never' },
      EXPLANATION(2),
      PRO_TIP(2),
      'answering_negatives_never'
    ),
    // 3: multiple_choice — 3rd person singular negative response (has never)
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          'No, he has never flown in one.',
          "No, he hasn't never flew in one.",
          'No, he have never flown in one.',
          'No, he never has fly in one.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(3),
      PRO_TIP(3),
      'answering_negatives_never'
    ),
    // 4: drag_drop — build a negative response
    makeExercise(
      'drag_drop',
      4,
      PROMPT(4),
      {
        tokens: ['No,', 'I', 'have', 'never', 'eaten', 'caviar.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(4),
      PRO_TIP(4),
      'answering_negatives_never'
    ),
    // 5: fill_blank — 3rd person short negative answer (hasn't)
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: 'A: "Has Elena ever driven a truck?" — B: "No, she ____."',
        options: ["hasn't", "haven't", "didn't", 'not'],
      },
      { correct: "hasn't" },
      EXPLANATION(5),
      PRO_TIP(5),
      'answering_negatives_never'
    ),
    // 6: true_false — "No, never" natural response rule
    makeExercise(
      'true_false',
      6,
      PROMPT(6),
      {
        statement:
          'When answering a "Have you ever...?" question negatively, replying "No, never" is natural and grammatically correct.',
      },
      { correct: true },
      EXPLANATION(6),
      PRO_TIP(6),
      'answering_negatives_never'
    ),

    // ── SUB-TOPIC 2: answering_affirmatives_have_has (7–12) ────────────
    // 7: multiple_choice — affirmative answer with Simple Past detail
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          'Yes, I have. I went there in 2021.',
          'Yes, I have went there in 2021.',
          "Yes, I've.",
          'Yes, I visited there in 2021 already.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'answering_affirmatives_have_has'
    ),
    // 8: fill_blank — 3rd person short affirmative (has)
    makeExercise(
      'fill_blank',
      8,
      PROMPT(8),
      {
        sentence: 'A: "Has Carlos ever won a competition?" — B: "Yes, he ____. He won a medal last year."',
        options: ['has', 'have', 'did', 'is'],
      },
      { correct: 'has' },
      EXPLANATION(8),
      PRO_TIP(8),
      'answering_affirmatives_have_has'
    ),
    // 9: multiple_choice — plural short affirmative answer (no contractions!)
    makeExercise(
      'multiple_choice',
      9,
      PROMPT(9),
      {
        choices: [
          'Yes, we have.',
          "Yes, we've.",
          'Yes, we had.',
          'Yes, we did watched.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(9),
      PRO_TIP(9),
      'answering_affirmatives_have_has'
    ),
    // 10: sentence_reorder — affirmative response with detail in past simple
    makeExercise(
      'sentence_reorder',
      10,
      PROMPT(10),
      {
        tokens: ['Yes,', 'she', 'has.', 'She', 'visited', 'London', 'last', 'May.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(10),
      PRO_TIP(10),
      'answering_affirmatives_have_has'
    ),
    // 11: fill_blank — switching to Simple Past for specific past time
    makeExercise(
      'fill_blank',
      11,
      PROMPT(11),
      {
        sentence: 'A: "Have you ever lost your passport?" — B: "Yes, I have. I ____ it in Rome two years ago."',
        options: ['lost', 'have lost', 'lose', 'losing'],
      },
      { correct: 'lost' },
      EXPLANATION(11),
      PRO_TIP(11),
      'answering_affirmatives_have_has'
    ),
    // 12: true_false — short answer contraction trap ("Yes, I've" is wrong)
    makeExercise(
      'true_false',
      12,
      PROMPT(12),
      {
        statement:
          'In a short affirmative answer, you can contract "have" and say "Yes, I\'ve."',
      },
      { correct: false },
      EXPLANATION(12),
      PRO_TIP(12),
      'answering_affirmatives_have_has'
    ),

    // ── SUB-TOPIC 3: choosing_the_correct_question (13–18) ──────────────
    // 13: multiple_choice — choose the correct question for a negative response
    makeExercise(
      'multiple_choice',
      13,
      PROMPT(13),
      {
        choices: [
          'Have you ever eaten sushi?',
          'Did you ever eaten sushi?',
          'Have you never eaten sushi?',
          'Has you ever ate sushi?',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(13),
      PRO_TIP(13),
      'choosing_the_correct_question'
    ),
    // 14: multiple_choice — choose the correct question for a 3rd person affirmative answer
    makeExercise(
      'multiple_choice',
      14,
      PROMPT(14),
      {
        choices: [
          'Has Maria ever climbed Mount Fuji?',
          'Have Maria ever climbed Mount Fuji?',
          'Did Maria ever climbed Mount Fuji?',
          'Has Maria ever climb Mount Fuji?',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(14),
      PRO_TIP(14),
      'choosing_the_correct_question'
    ),
    // 15: fill_blank — auxiliary in a question with "ever"
    makeExercise(
      'fill_blank',
      15,
      PROMPT(15),
      {
        sentence: 'A: "____ you ever ridden a camel in the desert?" — B: "No, I haven\'t."',
        options: ['Have', 'Has', 'Did', 'Do'],
      },
      { correct: 'Have' },
      EXPLANATION(15),
      PRO_TIP(15),
      'choosing_the_correct_question'
    ),
    // 16: drag_drop — assemble a 3rd person question with "ever"
    makeExercise(
      'drag_drop',
      16,
      PROMPT(16),
      {
        tokens: ['Has', 'he', 'ever', 'broken', 'his', 'arm', '?'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6] },
      EXPLANATION(16),
      PRO_TIP(16),
      'choosing_the_correct_question'
    ),
    // 17: fill_blank — past participle in question
    makeExercise(
      'fill_blank',
      17,
      PROMPT(17),
      {
        sentence: 'A: "Has your friend ever ____ an electric car?" — B: "Yes, he bought one last month."',
        options: ['driven', 'drove', 'drive', 'driving'],
      },
      { correct: 'driven' },
      EXPLANATION(17),
      PRO_TIP(17),
      'choosing_the_correct_question'
    ),
    // 18: multiple_choice — choose the question matching context
    makeExercise(
      'multiple_choice',
      18,
      PROMPT(18),
      {
        choices: [
          'Have you ever visited Australia?',
          'Did you ever visited Australia?',
          'Were you ever visiting Australia?',
          'Have you never visited Australia?',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(18),
      PRO_TIP(18),
      'choosing_the_correct_question'
    ),

    // ── SUB-TOPIC 4: mixed_dialogues_third_person (19–24) ──────────────
    // 19: multiple_choice — pick 100% correct 3rd person dialogue
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          'A: "Has your sister ever lived abroad?" B: "No, she has never lived abroad."',
          'A: "Have your sister ever lived abroad?" B: "No, she haven\'t never lived abroad."',
          'A: "Has your sister ever lived abroad?" B: "No, she hasn\'t never lived abroad."',
          'A: "Did your sister ever lived abroad?" B: "No, she has never lived abroad."',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'mixed_dialogues_third_person'
    ),
    // 20: fill_blank — complete question participle
    makeExercise(
      'fill_blank',
      20,
      PROMPT(20),
      {
        sentence: 'A: "Have you ever ____ a famous person?" — B: "Yes, I met an actor at the airport last year."',
        options: ['met', 'meet', 'meeting', 'meeted'],
      },
      { correct: 'met' },
      EXPLANATION(20),
      PRO_TIP(20),
      'mixed_dialogues_third_person'
    ),
    // 21: matching — match question with its natural response
    makeExercise(
      'matching',
      21,
      PROMPT(21),
      {
        left: [
          'Have you ever tried scuba diving?',
          'Has David ever been to New York?',
          'Have they ever missed a flight?',
          'Has Sarah ever spoken in public?',
        ],
        right: [
          "No, I haven't. I'm afraid of deep water.",
          'Yes, he has. He went there last Christmas.',
          'No, never. They always arrive early.',
          'Yes, she has. She gave a speech yesterday.',
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
      EXPLANATION(21),
      PRO_TIP(21),
      'mixed_dialogues_third_person'
    ),
    // 22: drag_drop — order dialogue question
    makeExercise(
      'drag_drop',
      22,
      PROMPT(22),
      {
        tokens: ['Have', 'you', 'ever', 'slept', 'in', 'a', 'tent', '?'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7] },
      EXPLANATION(22),
      PRO_TIP(22),
      'mixed_dialogues_third_person'
    ),
    // 23: fill_blank — double negative trap check
    makeExercise(
      'fill_blank',
      23,
      PROMPT(23),
      {
        sentence: 'A: "Has he ever swum in the ocean?" — B: "No, he has ____ swum in the ocean."',
        options: ['never', 'not never', 'ever', "didn't"],
      },
      { correct: 'never' },
      EXPLANATION(23),
      PRO_TIP(23),
      'mixed_dialogues_third_person'
    ),
    // 24: multiple_choice — full dialogue with detail
    makeExercise(
      'multiple_choice',
      24,
      PROMPT(24),
      {
        choices: [
          'Yes, I have. I baked some sourdough last weekend.',
          'Yes, I have baked some sourdough last weekend.',
          "Yes, I've. I bake some last weekend.",
          "No, I haven't never baked bread.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(24),
      PRO_TIP(24),
      'mixed_dialogues_third_person'
    ),
  ],
};
