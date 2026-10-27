import { defineLesson, question, type Bilingual } from '../class-notes/authoring.js';
import type { ExerciseDef } from '../types.js';

/** One blank = one answer. Written tasks explicitly request uncontracted forms. */
export function coursePractice(slug: string) {
  const exercises: ExerciseDef[] = [];
  function add(type: ExerciseDef['type'], data: ExerciseDef['data'], answer: ExerciseDef['answer'],
    prompt: Bilingual, why: Bilingual, topic: string) {
    const ex = question(slug, exercises.length + 1, type, data, answer, prompt, why);
    ex.subTopic = topic;
    exercises.push(ex);
  }
  return {
    exercises,
    fill(sentence: string, correct: string, why: Bilingual, prompt: Bilingual, topic = 'application', options: string[] = []) {
      add('fill_blank', { sentence, options }, { correct }, prompt, why, topic);
    },
    choose(prompt: Bilingual, choices: string[], correct: number | number[], why: Bilingual, topic = 'contrast') {
      add('multiple_choice', { choices }, Array.isArray(correct) ? { correctIndex: correct[0]!, correctIndices: correct } : { correctIndex: correct }, prompt, why, topic);
    },
    order(sentence: string, why: Bilingual, topic = 'word_order') {
      const tokens = sentence.split(' ');
      add('sentence_reorder', { tokens }, { correctOrder: tokens.map((_, i) => i) },
        ['Put the words in order, keeping punctuation attached.', 'Ordena las palabras conservando su puntuación.'], why, topic);
    },
  };
}
export type Practice = ReturnType<typeof coursePractice>;

export const courseSlugs = [
  'past-verb-forms', 'simple-past-practice', 'past-continuous-practice', 'past-perfect-practice',
  'past-perfect-continuous-practice', 'past-tenses-mixed', 'everyday-modals', 'everyday-reporting', 'assumptions-and-responses',
] as const;
const labels: Bilingual[] = [
  ['Verb workshop', 'Taller de verbos'], ['Simple past', 'Pasado simple'], ['Past continuous', 'Pasado continuo'],
  ['Past perfect', 'Pasado perfecto'], ['Past perfect continuous', 'Pasado perfecto continuo'],
  ['Mixed practice', 'Práctica mixta'], ['Everyday modals', 'Modales cotidianos'],
  ['Reporting conversations', 'Contar conversaciones'], ['Assumptions and responses', 'Suposiciones y respuestas'],
];
export function courseLesson(slug: typeof courseSlugs[number], intro: Bilingual, exercises: ExerciseDef[]) {
  const index = courseSlugs.indexOf(slug);
  const links = (locale: 0 | 1) => courseSlugs.map((s, i) => `[${i + 1}. ${labels[i]![locale]}](/lessons/${s})`).join(' · ');
  return defineLesson(slug, index + 4, labels[index]!,
    [`${exercises.length} exercises: verb forms, structure and everyday use. Course step ${index + 1}/9.`,
      `${exercises.length} ejercicios: formas verbales, estructura y uso cotidiano. Paso ${index + 1}/9.`],
    [intro[0] + '\n\n**Study plan:** Work in sets of 10–15; resume here later. Repeat your mistakes, then retry on a different day without hints. This workload is a starting point, not a guarantee of mastery. Aim for 90% on two separate attempts before moving on.\n\n**Course:** ' + links(0),
      intro[1] + '\n\n**Plan de estudio:** Trabaja en tandas de 10–15 y continúa aquí más tarde. Repasa tus errores y vuelve otro día sin pistas. Esta cantidad es un punto de partida, no una garantía de dominio. Como meta práctica, busca 90% en dos intentos separados antes de avanzar.\n\n**Recorrido:** ' + links(1)], exercises);
}
