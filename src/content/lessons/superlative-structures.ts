// Lesson 22: Superlative Structures and Modifying Adjectives
// Based on Cambridge Evolve Level 5 Unit 2 (Natural Limits / Extreme Life).
// Key patterns from slides:
//   1. Noun phrase + be + one of the most + adjective + plural noun
//      - "Nicaragua's Masaya Volcano is one of the most active volcanoes in Central America."
//      - "Point Lobos State Natural Reserve is one of the most beautiful state parks in California."
//   2. The + adjective-est / the most + adjective + be verb + noun phrase
//      - "The tiniest and most common are microbes."
//      - "The largest and most expensive are Clydesdales."
//   3. Noun phrase + be verb + the + most + adjective + noun phrase + (that) + clause
//      - "Rats are the most adaptable mammal (that) we know of."
//      - "Comedies are the most enjoyable movies (that) we can watch."
//   4. It + be + article + adverb + adjective + noun + infinitive
//      - "It's an absolutely awful place to live."
//      - "It's an absolutely impossible language to learn."
//   5. Clause + adjective (linking/perception verbs) & attributive/participial adjectives
//      - "They become very hard and appear to be dead."
//      - "It becomes bright and appears to be alive."
//      - "The final 'tough cookie' has few limits to its territory."
//      - "A destroyed building has no hope for renovation."
//
// 20 exercises across 5 sub-topics:
//   - one_of_the_most (1-4)                  : one of the most + adj + plural noun
//   - fronted_superlatives (5-8)             : superlative phrase as subject head + are
//   - superlative_relative_clauses (9-12)    : the most + adj + noun + (that) clause
//   - extreme_adjectives_and_infinitives (13-16) : absolutely + ungradable adj + noun + to-infinitive
//   - perception_verbs_and_modifiers (17-20) : appear to be + adj, participial adj
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               2 sentence_reorder, 1 drag_drop, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'superlative-structures';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 22,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: one_of_the_most (1-4) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: "Nicaragua's Masaya Volcano is one of the most ____ volcanoes in Central America.",
        options: ['active', 'actively', 'more active', 'most active'],
      },
      { correct: 'active' },
      EXPLANATION(1),
      PRO_TIP(1),
      'one_of_the_most'
    ),
    makeExercise(
      'fill_blank',
      2,
      PROMPT(2),
      {
        sentence: 'Point Lobos State Natural Reserve is one of the most beautiful state ____ in California.',
        options: ['parks', 'park', 'parking', 'parked'],
      },
      { correct: 'parks' },
      EXPLANATION(2),
      PRO_TIP(2),
      'one_of_the_most'
    ),
    makeExercise(
      'multiple_choice',
      3,
      PROMPT(3),
      {
        choices: [
          'Point Lobos is one of the most beautiful state park in California.',
          'Point Lobos is one of the most beautiful state parks in California.',
          'Point Lobos is one of most beautiful state parks in California.',
          'Point Lobos is one of the more beautiful state park in California.',
        ],
      },
      { correctIndex: 1 },
      EXPLANATION(3),
      PRO_TIP(3),
      'one_of_the_most'
    ),
    makeExercise(
      'sentence_reorder',
      4,
      PROMPT(4),
      {
        tokens: ['Masaya', 'Volcano', 'is', 'one', 'of', 'the', 'most', 'active', 'volcanoes.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      EXPLANATION(4),
      PRO_TIP(4),
      'one_of_the_most'
    ),

    // ── SUB-TOPIC 2: fronted_superlatives (5-8) ──
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: 'The tiniest and most common ____ microbes.',
        options: ['are', 'is', 'being', 'was'],
      },
      { correct: 'are' },
      EXPLANATION(5),
      PRO_TIP(5),
      'fronted_superlatives'
    ),
    makeExercise(
      'fill_blank',
      6,
      PROMPT(6),
      {
        sentence: 'The largest and most ____ are Clydesdales.',
        options: ['expensive', 'expensively', 'more expensive', 'expensivest'],
      },
      { correct: 'expensive' },
      EXPLANATION(6),
      PRO_TIP(6),
      'fronted_superlatives'
    ),
    makeExercise(
      'true_false',
      7,
      PROMPT(7),
      {
        statement: "In sentences like 'The tiniest and most common are microbes', the superlative phrase functions as the subject of the clause.",
      },
      { correct: true },
      EXPLANATION(7),
      PRO_TIP(7),
      'fronted_superlatives'
    ),
    makeExercise(
      'drag_drop',
      8,
      PROMPT(8),
      {
        tokens: ['The', 'tiniest', 'and', 'most', 'common', 'are', 'microbes.'],
        slots: ['slot1', 'slot2', 'slot3', 'slot4', 'slot5', 'slot6', 'slot7'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6] },
      EXPLANATION(8),
      PRO_TIP(8),
      'fronted_superlatives'
    ),

    // ── SUB-TOPIC 3: superlative_relative_clauses (9-12) ──
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'Rats are the most adaptable mammal ____ we know of.',
        options: ['that', 'what', 'who', 'where'],
      },
      { correct: 'that' },
      EXPLANATION(9),
      PRO_TIP(9),
      'superlative_relative_clauses'
    ),
    makeExercise(
      'fill_blank',
      10,
      PROMPT(10),
      {
        sentence: 'Comedies are the ____ enjoyable movies we can watch.',
        options: ['most', 'more', 'much', 'very'],
      },
      { correct: 'most' },
      EXPLANATION(10),
      PRO_TIP(10),
      'superlative_relative_clauses'
    ),
    makeExercise(
      'true_false',
      11,
      PROMPT(11),
      {
        statement: "The relative pronoun 'that' can be omitted in 'Rats are the most adaptable mammal (that) we know of'.",
      },
      { correct: true },
      EXPLANATION(11),
      PRO_TIP(11),
      'superlative_relative_clauses'
    ),
    makeExercise(
      'sentence_reorder',
      12,
      PROMPT(12),
      {
        tokens: ['Comedies', 'are', 'the', 'most', 'enjoyable', 'movies', 'we', 'can', 'watch.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      EXPLANATION(12),
      PRO_TIP(12),
      'superlative_relative_clauses'
    ),

    // ── SUB-TOPIC 4: extreme_adjectives_and_infinitives (13-16) ──
    makeExercise(
      'fill_blank',
      13,
      PROMPT(13),
      {
        sentence: "It's an ____ awful place to live.",
        options: ['absolutely', 'very', 'fairly', 'much'],
      },
      { correct: 'absolutely' },
      EXPLANATION(13),
      PRO_TIP(13),
      'extreme_adjectives_and_infinitives'
    ),
    makeExercise(
      'multiple_choice',
      14,
      PROMPT(14),
      {
        choices: [
          'to live',
          'for living',
          'live',
          'to living',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(14),
      PRO_TIP(14),
      'extreme_adjectives_and_infinitives'
    ),
    makeExercise(
      'multiple_choice',
      15,
      PROMPT(15),
      {
        choices: [
          "'Awful' is an extreme (ungradable) adjective, so it is intensified by 'absolutely' rather than 'very'.",
          "'Awful' is a comparative form, so it cannot take 'very'.",
          "'Absolutely' can only modify positive adjectives.",
          "'Very' can only be used before adverbs, never adjectives.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(15),
      PRO_TIP(15),
      'extreme_adjectives_and_infinitives'
    ),
    makeExercise(
      'multiple_choice',
      16,
      PROMPT(16),
      {
        choices: [
          "It's an absolutely impossible language to learn.",
          "It's a very impossible language to learning.",
          "It's an absolutely impossible language learn.",
          "It's a fairly impossible language to learn.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(16),
      PRO_TIP(16),
      'extreme_adjectives_and_infinitives'
    ),

    // ── SUB-TOPIC 5: perception_verbs_and_modifiers (17-20) ──
    makeExercise(
      'true_false',
      17,
      PROMPT(17),
      {
        statement: "In 'They appear to be dead', the word 'dead' is a predicate adjective describing the subject after the perception verb 'appear to be'.",
      },
      { correct: true },
      EXPLANATION(17),
      PRO_TIP(17),
      'perception_verbs_and_modifiers'
    ),
    makeExercise(
      'fill_blank',
      18,
      PROMPT(18),
      {
        sentence: 'It becomes bright and appears to be ____.',
        options: ['alive', 'live', 'livingly', 'lively'],
      },
      { correct: 'alive' },
      EXPLANATION(18),
      PRO_TIP(18),
      'perception_verbs_and_modifiers'
    ),
    makeExercise(
      'multiple_choice',
      19,
      PROMPT(19),
      {
        choices: [
          "It is a participial adjective modifying the noun 'building'.",
          "It is the main past-tense verb of the sentence.",
          "It is an adverb modifying 'has'.",
          "It is a passive auxiliary verb.",
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(19),
      PRO_TIP(19),
      'perception_verbs_and_modifiers'
    ),
    makeExercise(
      'matching',
      20,
      PROMPT(20),
      {
        left: [
          'one of the most active volcanoes',
          'The largest and most expensive are...',
          'an absolutely awful place to live',
          'appear to be dead',
        ],
        right: [
          'one of the most + adj + plural noun',
          'Superlative phrase functioning as subject',
          'Extreme adverb + adj + noun + to-infinitive',
          'Perception verb + predicate adjective',
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
      'perception_verbs_and_modifiers'
    ),
  ],
};
