// Lesson 24: Polite versus Impolite Intonation
// Based on Cambridge Evolve Level 5 Unit 1 (Pronunciation: Intonation in Requests).
// Key patterns from slide:
//   - Intonation definition: the rise and fall of the voice.
//   - Functions: conveys grammar, certainty, emotions, and politeness.
//   - Polite rule: raise our voice at the end (↗) -> considerate, cooperative, open-ended.
//   - Impolite rule: drop the voice at the end (↘) -> impatient, demanding, commanding.
//   - Example 1a: "Is there any chance you could fix the TV now? ↗" (polite)
//   - Example 1b: "Is there any chance you could fix the TV now? ↘" (impolite / demanding)
//   - Example 2a: "Do you think it would be possible for you to make a doctor's appointment? ↗" (polite)
//   - Example 2b: "Do you think it would be possible for you to make a doctor's appointment? ↘" (impolite / impatient)
//
// 20 exercises across 5 sub-topics:
//   - intonation_fundamentals (1-4)         : definition, functions, core pitch rules
//   - rising_polite_requests (5-8)          : rising contour (↗) and polite reception
//   - falling_impolite_requests (9-12)      : falling contour (↘) and demanding impression
//   - indirect_request_structures (13-16)   : grammar of "chance you could" & "possible for you to"
//   - intonation_and_attitude_review (17-20): comparing attitudes, matching, and synthesis
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'polite-intonation';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 24,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: intonation_fundamentals (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'Intonation is the ____ and fall of the voice.',
        options: ['rise', 'speed', 'volume', 'loudness'],
      },
      { correct: 'rise' },
      EXPLANATION(1),
      PRO_TIP(1),
      'intonation_fundamentals'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'When we try to sound polite, we ____ our voice at the end.',
        options: ['raise', 'drop', 'mute', 'shout'],
      },
      { correct: 'raise' },
      EXPLANATION(2),
      PRO_TIP(2),
      'intonation_fundamentals'
    ),
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          'We can sound impolite, demanding, or impatient.',
          'It makes the request sound much more polite and considerate.',
          'It changes the sentence from past tense to future tense.',
          'It makes the request grammatically incorrect.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(3),
      PRO_TIP(3),
      'intonation_fundamentals'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement: 'In English, intonation can be used to convey grammar, certainty, emotions, and politeness.',
      },
      { correct: true },
      EXPLANATION(4),
      PRO_TIP(4),
      'intonation_fundamentals'
    ),

    // ── SUB-TOPIC 2: rising_polite_requests (5-8) ──
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: 'Is there any chance you could fix the TV now? (Voice ____ at the end ↗)',
        options: ['rises', 'drops', 'stops', 'falls'],
      },
      { correct: 'rises' },
      EXPLANATION(5),
      PRO_TIP(5),
      'rising_polite_requests'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: "Do you think it would be ____ for you to make a doctor's appointment? ↗",
        options: ['possible', 'possibility', 'possibly', 'possibles'],
      },
      { correct: 'possible' },
      EXPLANATION(6),
      PRO_TIP(6),
      'rising_polite_requests'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          'It leaves the question open-ended and gives the listener space to decline gracefully.',
          'It indicates that you are giving an absolute order.',
          'It shows that you are angry and demand immediate compliance.',
          'It forces the listener to say yes immediately.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'rising_polite_requests'
    ),
    makeExercise(
      'true_false',
      8,
      PROMPT(8),
      {
        statement: "In 'Do you think it would be possible for you to make a doctor's appointment? ↗', the rising terminal tone signals courtesy and consideration.",
      },
      { correct: true },
      EXPLANATION(8),
      PRO_TIP(8),
      'rising_polite_requests'
    ),

    // ── SUB-TOPIC 3: falling_impolite_requests (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: "When someone says 'Is there any chance you could fix the TV now?' with a sharp voice ____ ↘, it sounds like an impatient order.",
        options: ['drop', 'rise', 'lift', 'climb'],
      },
      { correct: 'drop' },
      EXPLANATION(9),
      PRO_TIP(9),
      'falling_impolite_requests'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: "Even with polite words, dropping your pitch sharply on 'now' makes you sound ____.",
        options: ['impatient', 'friendly', 'relaxed', 'grateful'],
      },
      { correct: 'impatient' },
      EXPLANATION(10),
      PRO_TIP(10),
      'falling_impolite_requests'
    ),
    makeExercise(
      'multiple_choice',
      11,
      PROMPT(11),
      {
        choices: [
          '1a raises the voice at the end (polite), while 1b drops the voice at the end (impolite).',
          '1a uses different vocabulary than 1b.',
          '1b is grammatically incorrect.',
          '1a is in the past tense, while 1b is in the present tense.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(11),
      PRO_TIP(11),
      'falling_impolite_requests'
    ),
    makeExercise(
      'sentence_reorder',
      12,
      PROMPT(12),
      {
        tokens: ['Is', 'there', 'any', 'chance', 'you', 'could', 'fix', 'the', 'TV', 'now?'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9] },
      EXPLANATION(12),
      PRO_TIP(12),
      'falling_impolite_requests'
    ),

    // ── SUB-TOPIC 4: indirect_request_structures (13-16) ──
    makeExercise(
      'fill_blank',
      13,
      PROMPT(13),
      {
        sentence: 'Is there any ____ you could help me with this?',
        options: ['chance', 'luck', 'fortune', 'fate'],
      },
      { correct: 'chance' },
      EXPLANATION(13),
      PRO_TIP(13),
      'indirect_request_structures'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence: 'Do you think it ____ be possible for you to reschedule?',
        options: ['would', 'will', 'shall', 'must'],
      },
      { correct: 'would' },
      EXPLANATION(14),
      PRO_TIP(14),
      'indirect_request_structures'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          "Do you think it would be possible for you to make a doctor's appointment?",
          "Do you think it would be possible that you to make a doctor's appointment?",
          "Do you think it would possible for you making a doctor's appointment?",
          "Do you think is possible for you to make doctor's appointment?",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'indirect_request_structures'
    ),
    makeExercise(
      'sentence_reorder',
      16,
      PROMPT(16),
      {
        tokens: ['Do', 'you', 'think', 'it', 'would', 'be', 'possible', 'for', 'you', 'to', 'make', 'a', "doctor's", 'appointment?'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] },
      EXPLANATION(16),
      PRO_TIP(16),
      'indirect_request_structures'
    ),

    // ── SUB-TOPIC 5: intonation_and_attitude_review (17-20) ──
    makeExercise(
      'true_false',
      17,
      PROMPT(17),
      {
        statement: 'In English, polite grammar alone is NOT enough to ensure politeness; intonation plays a decisive role.',
      },
      { correct: true },
      EXPLANATION(17),
      PRO_TIP(17),
      'intonation_and_attitude_review'
    ),
    makeExercise(
      'drag_drop',
      18,
      PROMPT(18),
      {
        tokens: ['When', 'we', 'sound', 'polite,', 'we', 'raise', 'our', 'voice', 'at', 'the', 'end.'],
        slots: ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7', 'slot8', 'slot9', 'slot10', 'slot11'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
      EXPLANATION(18),
      PRO_TIP(18),
      'intonation_and_attitude_review'
    ),
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          'It converts an apparent request into an imperative command or expression of annoyance.',
          'It turns the request into an exclamation of joy.',
          'It signals that the speaker expects no answer at all.',
          'It shows that the speaker is speaking a different dialect.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'intonation_and_attitude_review'
    ),
    makeExercise(
      'matching',
      20,
      PROMPT(20),
      {
        left: [
          'Raising voice at the end (↗)',
          'Dropping voice at the end (↘)',
          'Is there any chance...?',
          'Do you think it would be possible...?',
        ],
        right: [
          'Polite, considerate, open-ended',
          'Impolite, demanding, impatient',
          "Indirect request with 'chance'",
          "Indirect request with 'possible'",
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
      'intonation_and_attitude_review'
    ),
  ],
};
