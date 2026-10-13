// Lesson 18: Comparatives (adjectives, less/fewer, and "prefer ... rather than").
// 20 exercises across 5 sub-topics:
//   - comparative_structure (1-5)  : Noun A + be + comparative + than + Noun B
//   - er_vs_more (6-10)            : -er for short adjectives, more for long ones (+ -er/-ow/-le/-y)
//   - less_fewer (11-13)           : less + adjective; fewer (count) vs. less (non-count)
//   - prefer_rather_than (14-18)   : prefer + infinitive/gerund/noun + rather than / to
//   - comparatives_review (19-20)  : mixed review
//
// Distribution: 8 fill_blank, 5 multiple_choice, 3 true_false,
//               1 drag_drop, 2 sentence_reorder, 1 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'comparatives';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 18,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── SUB-TOPIC 1: comparative_structure (1-5) ──
    makeExercise(
      'fill_blank',
      1,
      PROMPT(1),
      {
        sentence: 'Tom is ____ than Mike.',
        options: ['taller', 'more tall', 'tallest', 'tall'],
      },
      { correct: 'taller' },
      EXPLANATION(1),
      PRO_TIP(1),
      'comparative_structure'
    ),
    makeExercise(
      'multiple_choice',
      2,
      PROMPT(2),
      {
        choices: [
          'Mike seems more talkative than Tom.',
          'Mike seems more talkative that Tom.',
          'Mike seems talkativer than Tom.',
          'Mike seems more talkative then Tom.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(2),
      PRO_TIP(2),
      'comparative_structure'
    ),
    makeExercise(
      'true_false',
      3,
      PROMPT(3),
      {
        statement: 'Comparative adjectives are used when comparing two (and only two) things.',
      },
      { correct: true },
      EXPLANATION(3),
      PRO_TIP(3),
      'comparative_structure'
    ),
    makeExercise(
      'sentence_reorder',
      4,
      PROMPT(4),
      {
        tokens: ['Ken', 'is', 'older', 'than', 'Doug.'],
      },
      { correctOrder: [0, 1, 2, 3, 4] },
      EXPLANATION(4),
      PRO_TIP(4),
      'comparative_structure'
    ),
    makeExercise(
      'fill_blank',
      5,
      PROMPT(5),
      {
        sentence: 'Ralph is ____ serious than them.',
        options: ['more', 'most', 'much', 'very'],
      },
      { correct: 'more' },
      EXPLANATION(5),
      PRO_TIP(5),
      'comparative_structure'
    ),

    // ── SUB-TOPIC 2: er_vs_more (6-10) ──
    makeExercise(
      'multiple_choice',
      6,
      PROMPT(6),
      {
        choices: [
          'Travelling by plane is more expensive than travelling by bus.',
          'Travelling by plane is expensiver than travelling by bus.',
          'Travelling by plane is more expensive that travelling by bus.',
          'Travelling by plane is most expensive than travelling by bus.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(6),
      PRO_TIP(6),
      'er_vs_more'
    ),
    makeExercise(
      'multiple_choice',
      7,
      PROMPT(7),
      {
        choices: [
          'The river is shallower than the lake.',
          'The river is more shallow than the lake.',
          'The river is more shallower than the lake.',
          'The river is shallowest than the lake.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(7),
      PRO_TIP(7),
      'er_vs_more'
    ),
    makeExercise(
      'fill_blank',
      8,
      PROMPT(8),
      {
        sentence: 'This exercise is ____ than the last one.',
        options: ['simpler', 'simplest', 'more simpler', 'simple'],
      },
      { correct: 'simpler' },
      EXPLANATION(8),
      PRO_TIP(8),
      'er_vs_more'
    ),
    makeExercise(
      'fill_blank',
      9,
      PROMPT(9),
      {
        sentence: 'My sister is ____ than I am.',
        options: ['happier', 'more happy', 'happyer', 'happiest'],
      },
      { correct: 'happier' },
      EXPLANATION(9),
      PRO_TIP(9),
      'er_vs_more'
    ),
    makeExercise(
      'true_false',
      10,
      PROMPT(10),
      {
        statement: 'Adjectives with three or more syllables need to use "more" (for example, "beautiful" becomes "more beautiful").',
      },
      { correct: true },
      EXPLANATION(10),
      PRO_TIP(10),
      'er_vs_more'
    ),

    // ── SUB-TOPIC 3: less_fewer (11-13) ──
    makeExercise(
      'true_false',
      11,
      PROMPT(11),
      {
        statement: 'You can add "less" before any adjective without changing its spelling (less serious, less expensive).',
      },
      { correct: true },
      EXPLANATION(11),
      PRO_TIP(11),
      'less_fewer'
    ),
    makeExercise(
      'fill_blank',
      12,
      PROMPT(12),
      {
        sentence: 'There are ____ people at the park today than yesterday.',
        options: ['fewer', 'less', 'least', 'few'],
      },
      { correct: 'fewer' },
      EXPLANATION(12),
      PRO_TIP(12),
      'less_fewer'
    ),
    makeExercise(
      'fill_blank',
      13,
      PROMPT(13),
      {
        sentence: 'I drink ____ coffee than my brother does.',
        options: ['less', 'fewer', 'least', 'few'],
      },
      { correct: 'less' },
      EXPLANATION(13),
      PRO_TIP(13),
      'less_fewer'
    ),

    // ── SUB-TOPIC 4: prefer_rather_than (14-18) ──
    makeExercise(
      'multiple_choice',
      14,
      PROMPT(14),
      {
        choices: [
          'We prefer to watch movies rather than to read books.',
          'We prefer to watch movies than to read books.',
          'We prefer watching movies rather than to read books.',
          'We prefer to watch movies rather to read books.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(14),
      PRO_TIP(14),
      'prefer_rather_than'
    ),
    makeExercise(
      'drag_drop',
      15,
      PROMPT(15),
      {
        tokens: ['We', 'prefer', 'to', 'watch', 'movies', 'rather', 'than', 'read', 'books.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6, 7, 8] },
      EXPLANATION(15),
      PRO_TIP(15),
      'prefer_rather_than'
    ),
    makeExercise(
      'multiple_choice',
      16,
      PROMPT(16),
      {
        choices: [
          'We prefer watching movies rather than reading books.',
          'We prefer watching movies rather than to read books.',
          'We prefer to watch movies rather than reading books.',
          'We prefer watching movies rather than read books.',
        ],
      },
      { correctIndex: 0 },
      EXPLANATION(16),
      PRO_TIP(16),
      'prefer_rather_than'
    ),
    makeExercise(
      'fill_blank',
      17,
      PROMPT(17),
      {
        sentence: 'She prefers tea ____ coffee.',
        options: ['rather than', 'more than', 'instead', 'than'],
      },
      { correct: 'rather than' },
      EXPLANATION(17),
      PRO_TIP(17),
      'prefer_rather_than'
    ),
    makeExercise(
      'fill_blank',
      18,
      PROMPT(18),
      {
        sentence: 'We prefer movies ____ books.',
        options: ['to', 'than', 'that', 'of'],
      },
      { correct: 'to' },
      EXPLANATION(18),
      PRO_TIP(18),
      'prefer_rather_than'
    ),

    // ── SUB-TOPIC 5: comparatives_review (19-20) ──
    makeExercise(
      'matching',
      19,
      PROMPT(19),
      {
        left: ['tall', 'serious', 'simple', 'happy'],
        right: ['taller', 'more serious', 'simpler', 'happier'],
      },
      {
        pairs: [
          { leftIndex: 0, rightIndex: 0 },
          { leftIndex: 1, rightIndex: 1 },
          { leftIndex: 2, rightIndex: 2 },
          { leftIndex: 3, rightIndex: 3 },
        ],
      },
      EXPLANATION(19),
      PRO_TIP(19),
      'comparatives_review'
    ),
    makeExercise(
      'sentence_reorder',
      20,
      PROMPT(20),
      {
        tokens: ['She', 'prefers', 'dancing', 'rather', 'than', 'singing.'],
      },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(20),
      PRO_TIP(20),
      'comparatives_review'
    ),
  ],
};
