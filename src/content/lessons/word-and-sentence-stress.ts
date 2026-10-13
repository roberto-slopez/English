// Lesson 20: Word and Sentence Stress (Systems of Notation, Content vs Function Words, and Rhythm).
// 20 exercises across 5 sub-topics:
//   - systems_of_notation (1-4)       : Stress definition (pitch/loudness/length), bubble/capital notation (PE-di-AT-ric)
//   - content_vs_function_words (5-9) : Nouns, verbs, adjectives, adverbs vs. articles, auxiliaries, prepositions, pronouns
//   - cats_chase_mice (10-14)         : Stress timing and sentence rhythm progression with content vs. function words
//   - mice_eat_cheese (15-17)         : Identifying stressed content words (MICE, EATen, CHEESE) vs. unstressed auxiliaries
//   - dialogue_stress (18-20)         : Conversational question-and-answer stress patterns
//
// Distribution: 7 fill_blank, 6 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'word-and-sentence-stress';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 20,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: systems_of_notation (1-4) ──
    makeExercise(
      'true_false',
      1,
      PROMPT(1),
      {
        statement:
          'Stress is a longer, louder, or higher-pitched sound found in syllables of a word.',
      },
      { correct: true },
      EXPLANATION(1),
      PRO_TIP(1),
      'systems_of_notation'
    ),
    makeExercise(
      'multiple_choice',
      2,
      PROMPT(2),
      {
        choices: [
          'By using capital letters or different-sized bubbles above syllables.',
          'Only by putting an exclamation mark at the end of the sentence.',
          'By adding extra vowels to the normal spelling.',
          'Only by speaking faster.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(2),
      PRO_TIP(2),
      'systems_of_notation'
    ),
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          'The third syllable (-AT-)',
          'The first syllable (PE-)',
          'The second syllable (-di-)',
          'The fourth syllable (-ric)',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(3),
      PRO_TIP(3),
      'systems_of_notation'
    ),
    makeExercise(
      'true_false',
      4,
      PROMPT(4),
      {
        statement:
          'In the word notation PE-di-AT-ric, every syllable carries the exact same amount of stress.',
      },
      { correct: false },
      EXPLANATION(4),
      PRO_TIP(4),
      'systems_of_notation'
    ),

    // ── SUB-TOPIC 2: content_vs_function_words (5-9) ──
    makeExercise(
      'matching',
      5,
      PROMPT(5),
      {
        left: [
          'Nouns (computer, school)',
          'Articles (the, a/an)',
          'Adjectives (clean, quick)',
          'Prepositions (on, with, to)',
        ],
        right: [
          'Content word (carries key information)',
          'Function word (grammatical marker)',
          'Content word (describes qualities)',
          'Function word (signals relationship)',
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
      EXPLANATION(5),
      PRO_TIP(5),
      'content_vs_function_words'
    ),
    makeExercise(
      'multiple_choice',
      6,
      PROMPT(6),
      {
        choices: [
          'quick (adjective)',
          'the (article)',
          'from (preposition)',
          'they (pronoun)',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(6),
      PRO_TIP(6),
      'content_vs_function_words'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          'must (auxiliary verb)',
          'belong (main verb)',
          'peace (noun)',
          'cheerfully (adverb)',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'content_vs_function_words'
    ),
    makeExercise(
      'true_false',
      8,
      PROMPT(8),
      {
        statement:
          'Interrogative words (such as who, what, when, and where) are typically stressed in sentences.',
      },
      { correct: true },
      EXPLANATION(8),
      PRO_TIP(8),
      'content_vs_function_words'
    ),
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence:
          'Content words carry important information, whereas ____ words signal grammatical relationships.',
        options: ['function', 'capital', 'auxiliary', 'silent'],
      },
      { correct: 'function' },
      EXPLANATION(9),
      PRO_TIP(9),
      'content_vs_function_words'
    ),

    // ── SUB-TOPIC 3: cats_chase_mice (10-14) ──
    makeExercise(
      'multiple_choice',
      10,
      PROMPT(10),
      {
        choices: [
          'All three words: CATS, CHASE, and MICE (all are content words).',
          'Only the first word: CATS.',
          'Only the verb: CHASE.',
          'None of them are stressed.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(10),
      PRO_TIP(10),
      'cats_chase_mice'
    ),
    makeExercise(
      'fill_blank',
      11,
      PROMPT(11),
      {
        sentence:
          'In "The CATS have CHASED MICE", the words "The" and "have" are ____ words and remain unstressed.',
        options: ['function', 'content', 'accented', 'primary'],
      },
      { correct: 'function' },
      EXPLANATION(11),
      PRO_TIP(11),
      'cats_chase_mice'
    ),
    makeExercise(
      'drag_drop',
      12,
      PROMPT(12),
      {
        tokens: ['The', 'CATS', 'will', 'CHASE', 'the', 'MICE.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(12),
      PRO_TIP(12),
      'cats_chase_mice'
    ),
    makeExercise(
      'multiple_choice',
      13,
      PROMPT(13),
      {
        choices: [
          'CATS, CHASing, and MICE',
          'The, could, have, and been',
          'could have been',
          'The and the',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(13),
      PRO_TIP(13),
      'cats_chase_mice'
    ),
    makeExercise(
      'fill_blank',
      14,
      PROMPT(14),
      {
        sentence:
          'In English sentence rhythm, we stress ____ words (nouns, verbs) rather than function words.',
        options: ['content', 'short', 'auxiliary', 'silent'],
      },
      { correct: 'content' },
      EXPLANATION(14),
      PRO_TIP(14),
      'cats_chase_mice'
    ),

    // ── SUB-TOPIC 4: mice_eat_cheese (15-17) ──
    makeExercise(
      'sentence_reorder',
      15,
      PROMPT(15),
      {
        tokens: ['The', 'MICE', 'will', 'EAT', 'the', 'CHEESE.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(15),
      PRO_TIP(15),
      'mice_eat_cheese'
    ),
    makeExercise(
      'fill_blank',
      16,
      PROMPT(16),
      {
        sentence:
          'In the sentence "The MICE will have EATen the CHEESE", the main verb receiving stress is ____.',
        options: ['EATen', 'will', 'have', 'the'],
      },
      { correct: 'EATen' },
      EXPLANATION(16),
      PRO_TIP(16),
      'mice_eat_cheese'
    ),
    makeExercise(
      'fill_blank',
      17,
      PROMPT(17),
      {
        sentence:
          'In the sentence "The MICE will have EATen the CHEESE", the final stressed content noun is ____.',
        options: ['CHEESE', 'will', 'have', 'The'],
      },
      { correct: 'CHEESE' },
      EXPLANATION(17),
      PRO_TIP(17),
      'mice_eat_cheese'
    ),

    // ── SUB-TOPIC 5: dialogue_stress (18-20) ──
    makeExercise(
      'multiple_choice',
      18,
      PROMPT(18),
      {
        choices: [
          'WHAT is an interrogative word, and YOU and DO carry the core meaning.',
          'All words in questions must be capitalized equally.',
          'Prepositions always carry more stress than main verbs.',
          'Only single-syllable words are allowed to carry stress.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(18),
      PRO_TIP(18),
      'dialogue_stress'
    ),
    makeExercise(
      'sentence_reorder',
      19,
      PROMPT(19),
      {
        tokens: ['I', 'have', 'to', 'WALK', 'my', 'DOG.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(19),
      PRO_TIP(19),
      'dialogue_stress'
    ),
    makeExercise(
      'fill_blank',
      20,
      PROMPT(20),
      {
        sentence:
          'In "HE is VERY friendly", the word "VERY" is stressed because it is an ____ that emphasizes degree.',
        options: ['adverb', 'article', 'preposition', 'auxiliary'],
      },
      { correct: 'adverb' },
      EXPLANATION(20),
      PRO_TIP(20),
      'dialogue_stress'
    ),
  ],
};
