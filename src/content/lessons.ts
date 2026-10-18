// Shared registry for seeding and translation validation. No database side effects.
import type { LessonDef } from './types.js';
import { classVocabularyLessons } from './class-notes/vocabulary.js';
import { notesGrammarLessons } from './class-notes/grammar.js';
import { extendWithClassNotes } from './class-notes/extensions.js';
import { lesson as lesson1 } from './lessons/because-so-that.js';
import { lesson as lesson2 } from './lessons/adverbs-of-frequency.js';
import { lesson as lesson3 } from './lessons/time-expressions.js';
import { lesson as lesson4 } from './lessons/did-and-was.js';
import { lesson as lesson5 } from './lessons/simple-past-and-past-continuous.js';
import { lesson as lesson6 } from './lessons/present-perfect-ever-never.js';
import { lesson as lesson7 } from './lessons/present-perfect-vs-simple-past.js';
import { lesson as lesson8 } from './lessons/past-perfect.js';
import { lesson as lesson9 } from './lessons/conditionals-all.js';
import { lesson as lesson10 } from './lessons/modal-verbs.js';
import { lesson as lesson11 } from './lessons/passive-voice.js';
import { lesson as lesson12 } from './lessons/relative-clauses.js';
import { lesson as lesson13 } from './lessons/reported-speech.js';
import { lesson as lesson14 } from './lessons/phrasal-verbs.js';
import { lesson as lesson15 } from './lessons/linking-words.js';
import { lesson as lesson16 } from './lessons/future-forms-and-used-to.js';
import { lesson as lesson17 } from './lessons/real-conditionals.js';
import { lesson as lesson18 } from './lessons/comparatives.js';
import { lesson as lesson19 } from './lessons/compound-sentences.js';
import { lesson as lesson20 } from './lessons/word-and-sentence-stress.js';
import { lesson as lesson21 } from './lessons/asking-and-providing-information.js';
import { lesson as lesson22 } from './lessons/superlative-structures.js';
import { lesson as lesson23 } from './lessons/comparative-structures.js';
import { lesson as lesson24 } from './lessons/polite-intonation.js';
import { lesson as lesson25 } from './lessons/complex-sentences.js';
import { lesson as lesson26 } from './lessons/job-categories.js';
import { lesson as lesson27 } from './lessons/reduced-relative-clauses.js';
import { lesson as lesson28 } from './lessons/sentence-types.js';
import { lesson as lesson29 } from './lessons/willingness-and-unwillingness.js';
import { lesson as lesson30 } from './lessons/present-real-conditionals.js';
import { lesson as lesson31 } from './lessons/contrasting-transitions.js';
import { lesson as lesson32 } from './lessons/conditional-conjunctions.js';
import { whWordsLessons } from './lessons/wh-words.js';
import { lesson as idiomsLesson } from './lessons/idioms.js';
import { lesson as gerundsLesson } from './lessons/gerunds.js';
import {
  vocabLessons,
} from './vocabulary/top2000-vocabulary.js';
export const ALL_LESSONS: readonly LessonDef[] = [
  lesson1,
  lesson2,
  lesson3,
  lesson4,
  lesson5,
  lesson6,
  lesson7,
  lesson8,
  lesson9,
  lesson10,
  lesson11,
  lesson12,
  lesson13,
  lesson14,
  lesson15,
  lesson16,
  lesson17,
  lesson18,
  lesson19,
  lesson20,
  lesson21,
  lesson22,
  lesson23,
  lesson24,
  lesson25,
  lesson26,
  lesson27,
  lesson28,
  lesson29,
  lesson30,
  lesson31,
  lesson32,
  ...whWordsLessons,
  idiomsLesson,
  gerundsLesson,
  ...vocabLessons,
  ...classVocabularyLessons,
  ...notesGrammarLessons,
].map(extendWithClassNotes);
