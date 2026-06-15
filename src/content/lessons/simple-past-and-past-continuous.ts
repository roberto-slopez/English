// Lesson 5: simple past (regular & irregular) + past continuous.
// 40 exercises grouped in 4 sub-topics of 10 each:
//   - regular_verbs (1–10)   : play -> played, watch -> watched
//   - irregular_verbs (11–20): go -> went, see -> saw, take -> took
//   - past_continuous (21–30): was/were + verb-ing
//   - mixed (31–40)          : past simple + past continuous together
// Distribution per design.md §9: 12 fill_blank, 10 multiple_choice,
//   6 drag_drop, 4 true_false, 4 sentence_reorder, 4 matching.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'simple-past-and-past-continuous';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 5,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── PART A: regular_verbs (1–10) ─────────────────────────────────
    // 1: fill_blank — play -> played
    makeExercise('fill_blank', 1, PROMPT(1),
      { sentence: 'I ____ football yesterday.', options: ['played', 'play', 'playing', 'plays'] },
      { correct: 'played' }, EXPLANATION(1), PRO_TIP(1), 'regular_verbs'),
    // 2: fill_blank — watch -> watched
    makeExercise('fill_blank', 2, PROMPT(2),
      { sentence: 'She ____ a movie last night.', options: ['watched', 'watch', 'watches', 'watching'] },
      { correct: 'watched' }, EXPLANATION(2), PRO_TIP(2), 'regular_verbs'),
    // 3: multiple_choice — pick correct
    makeExercise('multiple_choice', 3, PROMPT(3),
      { choices: [
        'He studied English last year.',
        'He study English last year.',
        'He studies English last year.',
        'He studying English last year.',
      ]},
      { correctIndex: 0 }, EXPLANATION(3), PRO_TIP(3), 'regular_verbs'),
    // 4: drag_drop — "We worked late."
    makeExercise('drag_drop', 4, PROMPT(4),
      { tokens: ['We', 'worked', 'late', 'last', 'Friday'] },
      { correctOrder: [0, 1, 2, 3, 4] },
      EXPLANATION(4), PRO_TIP(4), 'regular_verbs'),
    // 5: true_false — rule for verbs ending in -e
    makeExercise('true_false', 5, PROMPT(5),
      { statement: 'For regular verbs ending in -e, we add -d (e.g. "like" -> "liked").' },
      { correct: true }, EXPLANATION(5), PRO_TIP(5), 'regular_verbs'),
    // 6: fill_blank — "They ___ (visit) us."
    makeExercise('fill_blank', 6, PROMPT(6),
      { sentence: 'They ____ us last weekend.', options: ['visited', 'visit', 'visits', 'visiting'] },
      { correct: 'visited' }, EXPLANATION(6), PRO_TIP(6), 'regular_verbs'),
    // 7: multiple_choice — consonant + y rule
    makeExercise('multiple_choice', 7, PROMPT(7),
      { choices: ['studyed', 'studied', 'study', 'studyes'] },
      { correctIndex: 1 }, EXPLANATION(7), PRO_TIP(7), 'regular_verbs'),
    // 8: drag_drop — "I cleaned my room."
    makeExercise('drag_drop', 8, PROMPT(8),
      { tokens: ['I', 'cleaned', 'my', 'room', 'yesterday'] },
      { correctOrder: [0, 1, 2, 3, 4] },
      EXPLANATION(8), PRO_TIP(8), 'regular_verbs'),
    // 9: fill_blank — "She ___ (cook) dinner."
    makeExercise('fill_blank', 9, PROMPT(9),
      { sentence: 'She ____ dinner for her family.', options: ['cooked', 'cook', 'cooks', 'cooking'] },
      { correct: 'cooked' }, EXPLANATION(9), PRO_TIP(9), 'regular_verbs'),
    // 10: sentence_reorder — "He walked to school."
    makeExercise('sentence_reorder', 10, PROMPT(10),
      { tokens: ['He', 'walked', 'to', 'school', 'this', 'morning'] },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(10), PRO_TIP(10), 'regular_verbs'),

    // ── PART B: irregular_verbs (11–20) ──────────────────────────────
    // 11: fill_blank — go -> went
    makeExercise('fill_blank', 11, PROMPT(11),
      { sentence: 'I ____ to the cinema last night.', options: ['went', 'goed', 'gone', 'go'] },
      { correct: 'went' }, EXPLANATION(11), PRO_TIP(11), 'irregular_verbs'),
    // 12: fill_blank — see -> saw
    makeExercise('fill_blank', 12, PROMPT(12),
      { sentence: 'She ____ him at the party.', options: ['saw', 'seed', 'seen', 'see'] },
      { correct: 'saw' }, EXPLANATION(12), PRO_TIP(12), 'irregular_verbs'),
    // 13: multiple_choice — take -> took
    makeExercise('multiple_choice', 13, PROMPT(13),
      { choices: ['take', 'taken', 'took', 'taked'] },
      { correctIndex: 2 }, EXPLANATION(13), PRO_TIP(13), 'irregular_verbs'),
    // 14: drag_drop — "I had a great time."
    makeExercise('drag_drop', 14, PROMPT(14),
      { tokens: ['I', 'had', 'a', 'great', 'time', 'there'] },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(14), PRO_TIP(14), 'irregular_verbs'),
    // 15: true_false — irregular verbs follow -ed rule
    makeExercise('true_false', 15, PROMPT(15),
      { statement: 'Irregular verbs follow the regular -ed pattern in the past.' },
      { correct: false }, EXPLANATION(15), PRO_TIP(15), 'irregular_verbs'),
    // 16: fill_blank — "They ___ (eat) sushi."
    makeExercise('fill_blank', 16, PROMPT(16),
      { sentence: 'They ____ sushi for dinner.', options: ['ate', 'eated', 'eaten', 'eat'] },
      { correct: 'ate' }, EXPLANATION(16), PRO_TIP(16), 'irregular_verbs'),
    // 17: multiple_choice — buy -> bought
    makeExercise('multiple_choice', 17, PROMPT(17),
      { choices: ['buyed', 'bought', 'bringed', 'bring'] },
      { correctIndex: 1 }, EXPLANATION(17), PRO_TIP(17), 'irregular_verbs'),
    // 18: drag_drop — "I found my keys."
    makeExercise('drag_drop', 18, PROMPT(18),
      { tokens: ['I', 'found', 'my', 'keys', 'under', 'the', 'sofa'] },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6] },
      EXPLANATION(18), PRO_TIP(18), 'irregular_verbs'),
    // 19: fill_blank — "We ___ (be) tired."
    makeExercise('fill_blank', 19, PROMPT(19),
      { sentence: 'We ____ very tired after the trip.', options: ['were', 'was', 'are', 'beed'] },
      { correct: 'were' }, EXPLANATION(19), PRO_TIP(19), 'irregular_verbs'),
    // 20: sentence_reorder — "He told me the truth."
    makeExercise('sentence_reorder', 20, PROMPT(20),
      { tokens: ['He', 'told', 'me', 'the', 'truth', 'yesterday'] },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(20), PRO_TIP(20), 'irregular_verbs'),

    // ── PART C: past_continuous (21–30) ──────────────────────────────
    // 21: fill_blank — "I was reading."
    makeExercise('fill_blank', 21, PROMPT(21),
      { sentence: 'I ____ a book at 9 p.m.', options: ['was reading', 'read', 'reading', 'am reading'] },
      { correct: 'was reading' }, EXPLANATION(21), PRO_TIP(21), 'past_continuous'),
    // 22: fill_blank — "They were playing."
    makeExercise('fill_blank', 22, PROMPT(22),
      { sentence: 'They ____ football all afternoon.', options: ['were playing', 'played', 'playing', 'was playing'] },
      { correct: 'were playing' }, EXPLANATION(22), PRO_TIP(22), 'past_continuous'),
    // 23: multiple_choice — form
    makeExercise('multiple_choice', 23, PROMPT(23),
      { choices: [
        'She was cooking dinner.',
        'She cooking dinner.',
        'She cook dinner.',
        'She cooks dinner.',
      ]},
      { correctIndex: 0 }, EXPLANATION(23), PRO_TIP(23), 'past_continuous'),
    // 24: drag_drop — "He was sleeping when I called."
    makeExercise('drag_drop', 24, PROMPT(24),
      { tokens: ['He', 'was', 'sleeping', 'when', 'I', 'called'] },
      { correctOrder: [0, 1, 2, 3, 4, 5] },
      EXPLANATION(24), PRO_TIP(24), 'past_continuous'),
    // 25: true_false — past continuous = was/were + verb-ing
    makeExercise('true_false', 25, PROMPT(25),
      { statement: 'Past continuous = was/were + verb-ing.' },
      { correct: true }, EXPLANATION(25), PRO_TIP(25), 'past_continuous'),
    // 26: fill_blank — "We ___ (walk) home."
    makeExercise('fill_blank', 26, PROMPT(26),
      { sentence: 'We ____ home in the rain.', options: ['were walking', 'walked', 'walking', 'walk'] },
      { correct: 'were walking' }, EXPLANATION(26), PRO_TIP(26), 'past_continuous'),
    // 27: multiple_choice — pick correct
    makeExercise('multiple_choice', 27, PROMPT(27),
      { choices: [
        'I was studying at 10 p.m.',
        'I studying at 10 p.m.',
        'I studied at 10 p.m. was.',
        'At 10 p.m. I was study.',
      ]},
      { correctIndex: 0 }, EXPLANATION(27), PRO_TIP(27), 'past_continuous'),
    // 28: drag_drop — "The sun was shining."
    makeExercise('drag_drop', 28, PROMPT(28),
      { tokens: ['The', 'sun', 'was', 'shining', 'brightly'] },
      { correctOrder: [0, 1, 2, 3, 4] },
      EXPLANATION(28), PRO_TIP(28), 'past_continuous'),
    // 29: fill_blank — "The kids ___ (play)."
    makeExercise('fill_blank', 29, PROMPT(29),
      { sentence: 'The kids ____ in the garden.', options: ['were playing', 'was playing', 'played', 'playing'] },
      { correct: 'were playing' }, EXPLANATION(29), PRO_TIP(29), 'past_continuous'),
    // 30: sentence_reorder — "She was dancing all night."
    makeExercise('sentence_reorder', 30, PROMPT(30),
      { tokens: ['She', 'was', 'dancing', 'all', 'night'] },
      { correctOrder: [0, 1, 2, 3, 4] },
      EXPLANATION(30), PRO_TIP(30), 'past_continuous'),

    // ── PART D: mixed (31–40) ────────────────────────────────────────
    // 31: multiple_choice — past simple vs past continuous
    makeExercise('multiple_choice', 31, PROMPT(31),
      { choices: [
        'I was reading a book when the phone rang.',
        'I read a book when the phone was ringing.',
        'I was read a book when the phone rang.',
        'I reading a book when the phone was ringing.',
      ]},
      { correctIndex: 0 }, EXPLANATION(31), PRO_TIP(31), 'mixed'),
    // 32: fill_blank — "While I ___ (cook), he ___ (arrive)."
    makeExercise('fill_blank', 32, PROMPT(32),
      { sentence: 'While I ____, he arrived.', options: ['was cooking', 'cooked', 'cook', 'cooking'] },
      { correct: 'was cooking' }, EXPLANATION(32), PRO_TIP(32), 'mixed'),
    // 33: drag_drop — "I was watching TV when she called."
    makeExercise('drag_drop', 33, PROMPT(33),
      { tokens: ['I', 'was', 'watching', 'TV', 'when', 'she', 'called'] },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6] },
      EXPLANATION(33), PRO_TIP(33), 'mixed'),
    // 34: true_false — "while" + past continuous
    makeExercise('true_false', 34, PROMPT(34),
      { statement: '"While" is often followed by the past continuous (a long action).' },
      { correct: true }, EXPLANATION(34), PRO_TIP(34), 'mixed'),
    // 35: fill_blank — "When the phone ___, I ___ (sleep)."
    makeExercise('fill_blank', 35, PROMPT(35),
      { sentence: 'When the phone ____, I was sleeping.', options: ['rang', 'rung', 'was ringing', 'ring'] },
      { correct: 'rang' }, EXPLANATION(35), PRO_TIP(35), 'mixed'),
    // 36: multiple_choice — pick correct
    makeExercise('multiple_choice', 36, PROMPT(36),
      { choices: [
        'She was running when she fell.',
        'She ran when she was falling.',
        'She was running when she was falling.',
        'She runs when she was falling.',
      ]},
      { correctIndex: 0 }, EXPLANATION(36), PRO_TIP(36), 'mixed'),
    // 37: matching — base form to past simple
    makeExercise('matching', 37, PROMPT(37),
      {
        left: ['go', 'see', 'take', 'have', 'buy'],
        right: ['had', 'went', 'bought', 'took', 'saw'],
      },
      {
        pairs: [
          { leftIndex: 0, rightIndex: 1 },
          { leftIndex: 1, rightIndex: 4 },
          { leftIndex: 2, rightIndex: 3 },
          { leftIndex: 3, rightIndex: 0 },
          { leftIndex: 4, rightIndex: 2 },
        ],
      },
      EXPLANATION(37), PRO_TIP(37), 'mixed'),
    // 38: sentence_reorder — "While I was reading, the dog barked."
    makeExercise('sentence_reorder', 38, PROMPT(38),
      { tokens: ['While', 'I', 'was', 'reading', 'the', 'dog', 'barked'] },
      { correctOrder: [0, 1, 2, 3, 4, 5, 6] },
      EXPLANATION(38), PRO_TIP(38), 'mixed'),
    // 39: matching — base form to past participle (irregular)
    makeExercise('matching', 39, PROMPT(39),
      {
        left: ['eat', 'write', 'drive', 'speak', 'give'],
        right: ['eaten', 'driven', 'written', 'given', 'spoken'],
      },
      {
        pairs: [
          { leftIndex: 0, rightIndex: 0 },
          { leftIndex: 1, rightIndex: 2 },
          { leftIndex: 2, rightIndex: 1 },
          { leftIndex: 3, rightIndex: 4 },
          { leftIndex: 4, rightIndex: 3 },
        ],
      },
      EXPLANATION(39), PRO_TIP(39), 'mixed'),
    // 40: multiple_choice — long action interrupted
    makeExercise('multiple_choice', 40, PROMPT(40),
      { choices: [
        'I was eating dinner when the doorbell rang.',
        'I ate dinner when the doorbell was ringing.',
        'I was eating dinner when the doorbell was ringing.',
        'I eat dinner when the doorbell rang.',
      ]},
      { correctIndex: 0 }, EXPLANATION(40), PRO_TIP(40), 'mixed'),
  ],
};
