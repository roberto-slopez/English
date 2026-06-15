// Lesson: Top 1000 gerunds — verb-form patterns with gerunds and infinitives.
// 40 exercises split across 4 sub-topics × 10 exercises each:
//   - common_verbs_followed_by_gerund           (10): verbs that take a gerund as the object
//   - common_verbs_followed_by_infinitive       (10): verbs that take a to-infinitive
//   - common_verbs_followed_by_both             (10): verbs whose meaning shifts with form
//   - common_adjective_preposition_gerund_patterns (10): adjective/prep + gerund patterns
//
// Each exercise is a `fill_blank` with a single gap and 4 chip choices. The
// chip pool always contains the correct form, the opposite form, and two
// plausible distractors (bare, -ed, -s, or wrong-verb forms) so the user
// has to actually think about which verb form the governing word requires.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'top-1000-gerunds';

function makeGerundExercise(
  orderIndex: number,
  sentence: string,
  correct: string,
  options: string[],
  subTopic: string
): ReturnType<typeof makeExercise> {
  return makeExercise(
    'fill_blank',
    orderIndex,
    `exercise.${SLUG}.${orderIndex}.prompt`,
    { sentence, options },
    { correct },
    `exercise.${SLUG}.${orderIndex}.explanation`,
    `exercise.${SLUG}.${orderIndex}.pro_tip`,
    subTopic
  );
}

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 350,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── Sub-topic 1: common verbs followed by gerund (exercises 1–10) ──
    // 1
    makeGerundExercise(
      1,
      'I enjoy ____ to classical music after a long day at work.',
      'listening',
      ['listening', 'to listen', 'listen', 'listened'],
      'common_verbs_followed_by_gerund'
    ),
    // 2
    makeGerundExercise(
      2,
      'She avoids ____ late at night because it upsets her stomach.',
      'eating',
      ['eating', 'to eat', 'eat', 'ate'],
      'common_verbs_followed_by_gerund'
    ),
    // 3
    makeGerundExercise(
      3,
      'They finished ____ the report at 5 pm and went home.',
      'writing',
      ['writing', 'to write', 'write', 'wrote'],
      'common_verbs_followed_by_gerund'
    ),
    // 4
    makeGerundExercise(
      4,
      'Would you mind ____ the window? It is quite cold in here.',
      'closing',
      ['closing', 'to close', 'close', 'closed'],
      'common_verbs_followed_by_gerund'
    ),
    // 5
    makeGerundExercise(
      5,
      'He keeps ____ the same mistakes in his essays every week.',
      'making',
      ['making', 'to make', 'make', 'made'],
      'common_verbs_followed_by_gerund'
    ),
    // 6
    makeGerundExercise(
      6,
      'The doctor suggested ____ a short walk after dinner each evening.',
      'taking',
      ['taking', 'to take', 'take', 'took'],
      'common_verbs_followed_by_gerund'
    ),
    // 7
    makeGerundExercise(
      7,
      'I cannot risk ____ the project when the deadline is so close.',
      'losing',
      ['losing', 'to lose', 'lose', 'lost'],
      'common_verbs_followed_by_gerund'
    ),
    // 8
    makeGerundExercise(
      8,
      'We postponed ____ the meeting until everyone is back from holiday.',
      'having',
      ['having', 'to have', 'have', 'had'],
      'common_verbs_followed_by_gerund'
    ),
    // 9
    makeGerundExercise(
      9,
      'She admitted ____ the wrong answer during the oral exam.',
      'giving',
      ['giving', 'to give', 'give', 'gave'],
      'common_verbs_followed_by_gerund'
    ),
    // 10
    makeGerundExercise(
      10,
      'He quit ____ coffee last January and feels much better now.',
      'drinking',
      ['drinking', 'to drink', 'drink', 'drank'],
      'common_verbs_followed_by_gerund'
    ),

    // ── Sub-topic 2: common verbs followed by infinitive (11–20) ──────
    // 11
    makeGerundExercise(
      11,
      'I want ____ a new car before the end of the year.',
      'to buy',
      ['to buy', 'buy', 'buying', 'bought'],
      'common_verbs_followed_by_infinitive'
    ),
    // 12
    makeGerundExercise(
      12,
      'She decided ____ the doctor as soon as she felt the pain.',
      'to call',
      ['to call', 'call', 'calling', 'called'],
      'common_verbs_followed_by_infinitive'
    ),
    // 13
    makeGerundExercise(
      13,
      'He promised ____ on time, but the train was delayed by an hour.',
      'to arrive',
      ['to arrive', 'arrive', 'arriving', 'arrived'],
      'common_verbs_followed_by_infinitive'
    ),
    // 14
    makeGerundExercise(
      14,
      'We need ____ more time to finish the homework carefully.',
      'to find',
      ['to find', 'find', 'finding', 'found'],
      'common_verbs_followed_by_infinitive'
    ),
    // 15
    makeGerundExercise(
      15,
      'They hope ____ the match next Saturday if the weather is good.',
      'to play',
      ['to play', 'play', 'playing', 'played'],
      'common_verbs_followed_by_infinitive'
    ),
    // 16
    makeGerundExercise(
      16,
      'She refused ____ the extra shift even though her manager asked twice.',
      'to take',
      ['to take', 'take', 'taking', 'took'],
      'common_verbs_followed_by_infinitive'
    ),
    // 17
    makeGerundExercise(
      17,
      'The students agreed ____ the new library rules without complaint.',
      'to follow',
      ['to follow', 'follow', 'following', 'followed'],
      'common_verbs_followed_by_infinitive'
    ),
    // 18
    makeGerundExercise(
      18,
      'I expect ____ a reply from the company within two working days.',
      'to receive',
      ['to receive', 'receive', 'receiving', 'received'],
      'common_verbs_followed_by_infinitive'
    ),
    // 19
    makeGerundExercise(
      19,
      'She offered ____ the children home after the school concert.',
      'to drive',
      ['to drive', 'drive', 'driving', 'drove'],
      'common_verbs_followed_by_infinitive'
    ),
    // 20
    makeGerundExercise(
      20,
      'They plan ____ a small house by the lake when they retire.',
      'to build',
      ['to build', 'build', 'building', 'built'],
      'common_verbs_followed_by_infinitive'
    ),

    // ── Sub-topic 3: common verbs followed by both (21–30) ────────────
    // For these verbs, the gerund and the infinitive give different meanings.
    // 21
    makeGerundExercise(
      21,
      'I remember ____ the door, but I am not sure I locked the window.',
      'locking',
      ['locking', 'to lock', 'lock', 'locked'],
      'common_verbs_followed_by_both'
    ),
    // 22
    makeGerundExercise(
      22,
      'He stopped ____ coffee last month and now he sleeps much better.',
      'drinking',
      ['drinking', 'to drink', 'drink', 'drank'],
      'common_verbs_followed_by_both'
    ),
    // 23
    makeGerundExercise(
      23,
      'She tried ____ the lock with a hairpin, but it was impossible.',
      'opening',
      ['opening', 'to open', 'open', 'opened'],
      'common_verbs_followed_by_both'
    ),
    // 24
    makeGerundExercise(
      24,
      'I will never forget ____ the Northern Lights for the first time.',
      'seeing',
      ['seeing', 'to see', 'see', 'saw'],
      'common_verbs_followed_by_both'
    ),
    // 25
    makeGerundExercise(
      25,
      'We regret ____ you that the flight has been cancelled this evening.',
      'informing',
      ['informing', 'to inform', 'inform', 'informed'],
      'common_verbs_followed_by_both'
    ),
    // 26
    makeGerundExercise(
      26,
      'After his injury, the athlete went on ____ three more Olympic medals.',
      'winning',
      ['winning', 'to win', 'win', 'won'],
      'common_verbs_followed_by_both'
    ),
    // 27
    makeGerundExercise(
      27,
      'Taking the new job meant ____ my hometown and my whole family.',
      'leaving',
      ['leaving', 'to leave', 'leave', 'left'],
      'common_verbs_followed_by_both'
    ),
    // 28
    makeGerundExercise(
      28,
      'She stopped ____ to the cashier because she had forgotten her wallet.',
      'to talk',
      ['to talk', 'talking', 'talk', 'talked'],
      'common_verbs_followed_by_both'
    ),
    // 29
    makeGerundExercise(
      29,
      'I do not regret ____ that course; it changed my whole career path.',
      'taking',
      ['taking', 'to take', 'take', 'took'],
      'common_verbs_followed_by_both'
    ),
    // 30
    makeGerundExercise(
      30,
      'After a short pause, the professor went on ____ the next chapter.',
      'to explain',
      ['to explain', 'explaining', 'explain', 'explained'],
      'common_verbs_followed_by_both'
    ),

    // ── Sub-topic 4: adjective/preposition + gerund patterns (31–40) ──
    // 31
    makeGerundExercise(
      31,
      'I am not used to ____ up this early on Monday mornings.',
      'waking',
      ['waking', 'wake', 'to wake', 'woke'],
      'common_adjective_preposition_gerund_patterns'
    ),
    // 32
    makeGerundExercise(
      32,
      'This old novel is definitely worth ____ on a rainy Sunday afternoon.',
      'reading',
      ['reading', 'read', 'to read', 'reads'],
      'common_adjective_preposition_gerund_patterns'
    ),
    // 33
    makeGerundExercise(
      33,
      'I look forward to ____ from you once the interview is over.',
      'hearing',
      ['hearing', 'hear', 'to hear', 'heard'],
      'common_adjective_preposition_gerund_patterns'
    ),
    // 34
    makeGerundExercise(
      34,
      'My mother is always busy ____ dinner for the whole family.',
      'preparing',
      ['preparing', 'prepare', 'to prepare', 'prepared'],
      'common_adjective_preposition_gerund_patterns'
    ),
    // 35
    makeGerundExercise(
      35,
      'We spent the whole afternoon ____ the beach for seashells.',
      'walking',
      ['walking', 'walk', 'to walk', 'walked'],
      'common_adjective_preposition_gerund_patterns'
    ),
    // 36
    makeGerundExercise(
      36,
      'Did you have any trouble ____ the front door this morning?',
      'opening',
      ['opening', 'open', 'to open', 'opened'],
      'common_adjective_preposition_gerund_patterns'
    ),
    // 37
    makeGerundExercise(
      37,
      'There is no point in ____ about the test now; it is already finished.',
      'worrying',
      ['worrying', 'worry', 'to worry', 'worried'],
      'common_adjective_preposition_gerund_patterns'
    ),
    // 38
    makeGerundExercise(
      38,
      'It is no use ____ over spilt milk, so let us move on with the plan.',
      'crying',
      ['crying', 'cry', 'to cry', 'cried'],
      'common_adjective_preposition_gerund_patterns'
    ),
    // 39
    makeGerundExercise(
      39,
      'After ten years abroad, she is fully accustomed to ____ Asian food every day.',
      'eating',
      ['eating', 'eat', 'to eat', 'ate'],
      'common_adjective_preposition_gerund_patterns'
    ),
    // 40
    makeGerundExercise(
      40,
      'We had great fun ____ the new board game with the children last night.',
      'playing',
      ['playing', 'play', 'to play', 'played'],
      'common_adjective_preposition_gerund_patterns'
    ),
  ],
};
