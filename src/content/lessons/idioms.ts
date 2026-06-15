// Lesson: Top 1000 idioms — high-frequency English idioms.
// 40 exercises split across 4 sub-topics × 10 exercises each:
//   - body_idioms            (10): idioms that mention body parts
//   - business_work_idioms   (10): idioms about work, meetings, projects
//   - time_age_idioms        (10): idioms about time, frequency, age
//   - feelings_relationships (10): idioms about emotions and people
//
// Each exercise is a `fill_blank` with 4 chip choices (the correct idiom
// plus 3 plausible distractors from the same sub-topic). The user picks
// the idiom that completes the sentence.
//
// The seed script pulls the prompt/explanation/pro_tip i18n keys below
// and stores their English text in the translations table.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';

const SLUG = 'top-1000-idioms';
const PROMPT = (n: number) => `exercise.${SLUG}.${n}.prompt`;
const EXPLANATION = (n: number) => `exercise.${SLUG}.${n}.explanation`;
const PRO_TIP = (n: number) => `exercise.${SLUG}.${n}.pro_tip`;

function makeIdiomExercise(
  orderIndex: number,
  idiom: string,
  definition: string,
  sentence: string,
  options: string[],
  subTopic: string
): ReturnType<typeof makeExercise> {
  return makeExercise(
    'fill_blank',
    orderIndex,
    PROMPT(orderIndex),
    { sentence, options },
    { correct: idiom },
    EXPLANATION(orderIndex),
    PRO_TIP(orderIndex),
    subTopic
  );
}

export const lesson: LessonDef = {
  slug: SLUG,
  orderIndex: 300,
  titleKey: `lesson.${SLUG}.title`,
  descriptionKey: `lesson.${SLUG}.description`,
  introKey: `lesson.${SLUG}.intro`,
  exercises: [
    // ── Sub-topic 1: body idioms (exercises 1–10) ────────────────────
    // 1
    makeIdiomExercise(
      1,
      'piece of cake',
      'something that is very easy',
      'Studying for this exam is going to be a ____.',
      ['piece of cake', 'cold feet', 'a ballpark figure', 'under the weather'],
      'body_idioms'
    ),
    // 2
    makeIdiomExercise(
      2,
      'cold feet',
      'becoming nervous or afraid right before doing something',
      'She got ____ before her wedding speech and almost cancelled it.',
      ['a chip on her shoulder', 'cold feet', 'the ball in her court', 'back to the drawing board'],
      'body_idioms'
    ),
    // 3
    makeIdiomExercise(
      3,
      'keep his chin up',
      'stay positive and confident in a hard situation',
      'After losing his job, his mother told him to ____ and keep trying.',
      ['keep his chin up', 'bite the bullet', 'hit the books', 'pull his leg'],
      'body_idioms'
    ),
    // 4
    makeIdiomExercise(
      4,
      'pull yourself together',
      'calm down and regain control of your emotions',
      'Take a deep breath and ____ — panicking won\'t help.',
      ['pull yourself together', 'break a leg', 'spill the beans', 'jump on the bandwagon'],
      'body_idioms'
    ),
    // 5
    makeIdiomExercise(
      5,
      'costs an arm and a leg',
      'very expensive',
      'That new phone ____ — I can\'t afford it right now.',
      ['costs an arm and a leg', 'breaks a leg', 'has a chip on its shoulder', 'is on cloud nine'],
      'body_idioms'
    ),
    // 6
    makeIdiomExercise(
      6,
      'pulling your leg',
      'joke with someone in a friendly way',
      'Don\'t worry, I\'m just ____ — your presentation was fine.',
      ['pulling your leg', 'pulling your arm', 'biting the bullet', 'breaking the ice'],
      'body_idioms'
    ),
    // 7
    makeIdiomExercise(
      7,
      'has a chip on his shoulder',
      'holding a grudge from a past event',
      'He still ____ about not getting the promotion five years ago.',
      ['has a chip on his shoulder', 'has a leg to stand on', 'has his head in the clouds', 'has the ball in his court'],
      'body_idioms'
    ),
    // 8
    makeIdiomExercise(
      8,
      'head in the clouds',
      'not paying attention to what is happening around you',
      'Stop daydreaming and listen — you always have your ____.',
      ['head in the clouds', 'nose to the grindstone', 'back against the wall', 'feet on the ground'],
      'body_idioms'
    ),
    // 9
    makeIdiomExercise(
      9,
      'bite the bullet',
      'face an unpleasant situation with courage',
      'I hate going to the dentist, but I\'ll just have to ____.',
      ['bite the bullet', 'spit it out', 'hit the books', 'miss the boat'],
      'body_idioms'
    ),
    // 10
    makeIdiomExercise(
      10,
      'Break a leg!',
      'good luck (said to a performer)',
      'You\'re on in five minutes — ____!',
      ['Break a leg!', 'Break the ice!', 'Break the news!', 'Break a promise!'],
      'body_idioms'
    ),

    // ── Sub-topic 2: business / work idioms (exercises 11–20) ───────
    // 11
    makeIdiomExercise(
      11,
      'hit the books',
      'study hard, usually for an exam',
      'Finals are next week, so I need to ____ this weekend.',
      ['hit the books', 'hit the road', 'hit the nail on the head', 'hit the sack'],
      'business_work_idioms'
    ),
    // 12
    makeIdiomExercise(
      12,
      'back to the drawing board',
      'start over because the previous plan failed',
      'The client rejected our proposal, so it\'s ____ for us.',
      ['back to the drawing board', 'out of our hands', 'down to the wire', 'in hot water'],
      'business_work_idioms'
    ),
    // 13
    makeIdiomExercise(
      13,
      'ballpark figure',
      'a rough numerical estimate, not exact',
      'I don\'t have the final invoice, but a ____ would be about $5,000.',
      ['ballpark figure', 'long shot', 'cold feet', 'raw deal'],
      'business_work_idioms'
    ),
    // 14
    makeIdiomExercise(
      14,
      'the ball is in your court',
      'it is your turn to act or decide',
      'I\'ve sent you the contract — now ____.',
      ['the ball is in your court', 'the world is your oyster', 'the chips are down', 'the heat is on'],
      'business_work_idioms'
    ),
    // 15
    makeIdiomExercise(
      15,
      'cut to the chase',
      'get to the point, skip the details',
      'We don\'t have much time, so let\'s ____ and talk about the budget.',
      ['cut to the chase', 'beat around the bush', 'call it a day', 'jump on the bandwagon'],
      'business_work_idioms'
    ),
    // 16
    makeIdiomExercise(
      16,
      'beating around the bush',
      'avoid the main topic, talk indirectly',
      'Stop ____ and just tell me what you want.',
      ['beating around the bush', 'running the show', 'jumping on the bandwagon', 'calling it a day'],
      'business_work_idioms'
    ),
    // 17
    makeIdiomExercise(
      17,
      'call it a day',
      'stop working, decide to end the work for now',
      'It\'s already 7 p.m. — let\'s ____ and finish the report tomorrow.',
      ['call it a day', 'hit the books', 'break the ice', 'go back to the drawing board'],
      'business_work_idioms'
    ),
    // 18
    makeIdiomExercise(
      18,
      'on the same page',
      'in agreement, sharing the same understanding',
      'Let\'s review the plan once more to make sure we\'re all ____.',
      ['on the same page', 'in the same boat', 'out of our depth', 'under the weather'],
      'business_work_idioms'
    ),
    // 19
    makeIdiomExercise(
      19,
      'got out of hand',
      'become uncontrollable or chaotic',
      'The meeting started calmly, but things quickly ____.',
      ['got out of hand', 'got off the ground', 'got the ball rolling', 'got cold feet'],
      'business_work_idioms'
    ),
    // 20
    makeIdiomExercise(
      20,
      'devil\'s advocate',
      'a person who argues the opposite view to test the argument',
      'I disagree with you, but I\'m just playing ____ to make sure we\'ve thought this through.',
      ['devil\'s advocate', 'second fiddle', 'the talking head', 'a fast learner'],
      'business_work_idioms'
    ),

    // ── Sub-topic 3: time / age idioms (exercises 21–30) ────────────
    // 21
    makeIdiomExercise(
      21,
      'once in a blue moon',
      'very rarely, almost never',
      'She only visits her old school friends ____ these days.',
      ['once in a blue moon', 'around the clock', 'in the nick of time', 'on the spur of the moment'],
      'time_age_idioms'
    ),
    // 22
    makeIdiomExercise(
      22,
      'in the nick of time',
      'just before it would have been too late',
      'The paramedics arrived ____ and saved the patient.',
      ['in the nick of time', 'in hot water', 'in the same boat', 'in the dark'],
      'time_age_idioms'
    ),
    // 23
    makeIdiomExercise(
      23,
      'around the clock',
      'twenty-four hours a day, continuously',
      'The news channel covered the election ____ for two days.',
      ['around the clock', 'once in a blue moon', 'at the drop of a hat', 'behind the times'],
      'time_age_idioms'
    ),
    // 24
    makeIdiomExercise(
      24,
      'on the spur of the moment',
      'spontaneously, without planning ahead',
      'We didn\'t book a hotel — we just decided to travel ____.',
      ['on the spur of the moment', 'at the eleventh hour', 'in the long run', 'for the time being'],
      'time_age_idioms'
    ),
    // 25
    makeIdiomExercise(
      25,
      'at the drop of a hat',
      'immediately, without hesitation',
      'She\'d help anyone in need ____.',
      ['at the drop of a hat', 'on the spur of the moment', 'once in a blue moon', 'down to the wire'],
      'time_age_idioms'
    ),
    // 26
    makeIdiomExercise(
      26,
      'behind the times',
      'old-fashioned, out of date',
      'My grandfather still uses a flip phone — he\'s a bit ____.',
      ['behind the times', 'ahead of his time', 'in the nick of time', 'on cloud nine'],
      'time_age_idioms'
    ),
    // 27
    makeIdiomExercise(
      27,
      'for the time being',
      'temporarily, for now',
      'I\'m living with my parents ____, until I find an apartment.',
      ['for the time being', 'once in a blue moon', 'in the long run', 'at the drop of a hat'],
      'time_age_idioms'
    ),
    // 28
    makeIdiomExercise(
      28,
      'in the long run',
      'over a long period of time, eventually',
      'The new system is expensive now, but ____ it will save us money.',
      ['in the long run', 'on the spur of the moment', 'at the eleventh hour', 'around the clock'],
      'time_age_idioms'
    ),
    // 29
    makeIdiomExercise(
      29,
      'at the eleventh hour',
      'at the last possible moment',
      'They submitted the application ____, just minutes before the deadline.',
      ['at the eleventh hour', 'in the long run', 'once in a blue moon', 'behind the times'],
      'time_age_idioms'
    ),
    // 30
    makeIdiomExercise(
      30,
      'down to the wire',
      'until the very end, with an uncertain outcome',
      'It was ____ — we didn\'t know who would win until the final vote.',
      ['down to the wire', 'around the clock', 'off the hook', 'out of the blue'],
      'time_age_idioms'
    ),

    // ── Sub-topic 4: feelings / relationships idioms (31–40) ────────
    // 31
    makeIdiomExercise(
      31,
      'under the weather',
      'feeling slightly sick',
      'I won\'t come to work today — I\'m feeling ____.',
      ['under the weather', 'on cloud nine', 'over the moon', 'down to earth'],
      'feelings_relationships'
    ),
    // 32
    makeIdiomExercise(
      32,
      'on cloud nine',
      'extremely happy, elated',
      'She passed all her exams — she\'s been ____ all week.',
      ['on cloud nine', 'under the weather', 'in hot water', 'off the hook'],
      'feelings_relationships'
    ),
    // 33
    makeIdiomExercise(
      33,
      'spill the beans',
      'reveal a secret, often by accident',
      'Don\'t ____ about the surprise party — it\'s supposed to be a secret.',
      ['spill the beans', 'spill the milk', 'spill your heart', 'spill the news'],
      'feelings_relationships'
    ),
    // 34
    makeIdiomExercise(
      34,
      'let the cat out of the bag',
      'accidentally reveal a hidden secret',
      'I didn\'t mean to ____ — I thought everyone already knew.',
      ['let the cat out of the bag', 'put all your eggs in one basket', 'hit the nail on the head', 'jump on the bandwagon'],
      'feelings_relationships'
    ),
    // 35
    makeIdiomExercise(
      35,
      'in hot water',
      'in trouble or difficulty',
      'He was late to the meeting again and is now ____ with his boss.',
      ['in hot water', 'in the same boat', 'in the dark', 'in the long run'],
      'feelings_relationships'
    ),
    // 36
    makeIdiomExercise(
      36,
      'see eye to eye',
      'agree with someone, share the same opinion',
      'My sister and I rarely ____ on politics.',
      ['see eye to eye', 'talk behind each other\'s backs', 'speak of the devil', 'pull each other\'s legs'],
      'feelings_relationships'
    ),
    // 37
    makeIdiomExercise(
      37,
      'Speak of the devil',
      'said when a person you were just talking about walks up',
      'Hey, look who just walked in — ____!',
      ['Speak of the devil', 'Break a leg', 'Hit the nail on the head', 'Pull someone\'s leg'],
      'feelings_relationships'
    ),
    // 38
    makeIdiomExercise(
      38,
      'rain on your parade',
      'spoil someone\'s good mood or moment',
      'I didn\'t want to ____, but the report has some serious errors.',
      ['rain on your parade', 'spoil your fun', 'burst your bubble', 'crash your party'],
      'feelings_relationships'
    ),
    // 39
    makeIdiomExercise(
      39,
      'the best of both worlds',
      'a situation where you enjoy two different advantages at once',
      'Working from home gives her ____ — flexibility and a steady salary.',
      ['the best of both worlds', 'the time of her life', 'a blessing in disguise', 'a match made in heaven'],
      'feelings_relationships'
    ),
    // 40
    makeIdiomExercise(
      40,
      'miss the boat',
      'miss an opportunity because you were too slow',
      'If you don\'t apply today, you\'ll ____.',
      ['miss the boat', 'miss the point', 'miss the mark', 'miss the train'],
      'feelings_relationships'
    ),
  ],
};
