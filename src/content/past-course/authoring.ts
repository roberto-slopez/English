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
  ['Past Verb Forms Workshop (V1, V2, V3 & -ing)', 'Taller de formas verbales en pasado (V1, V2, V3 e -ing)'],
  ['Simple Past: Completed Actions (V2, Did & Was/Were)', 'Pasado simple: acciones terminadas (V2, did y was/were)'],
  ['Past Continuous: Actions in Progress & Background (Was/Were + -ing)', 'Pasado continuo: acciones en curso y contexto de fondo (was/were + -ing)'],
  ['Past Perfect: Earlier Past Sequence (Had + Past Participle V3)', 'Pasado perfecto: secuencia anterior en el pasado (had + participio V3)'],
  ['Past Perfect Continuous: Prior Duration & Process (Had Been + -ing)', 'Pasado perfecto continuo: duración y proceso previos (had been + -ing)'],
  ['Mixed Past Tenses: Combining All Four Past Forms in Context', 'Práctica mixta de los 4 pasados: combinación y secuencias en contexto'],
  ['Everyday Modal Verbs: Requests, Advice, Obligation & Past Modals', 'Verbos modales de uso cotidiano: peticiones, consejos, obligación y pasado'],
  ['Reported Speech & Reporting Verbs (Say, Tell, Claim, Confirm & Explain)', 'Estilo indirecto y verbos para contar conversaciones (say, tell, claim, confirm y explain)'],
  ['Making, Contradicting & Clarifying Assumptions in Conversation', 'Hacer, contradecir y matizar suposiciones en la conversación'],
];
const descriptions: Bilingual[] = [
  [
    '40 exercises: master regular (-ed) and irregular verb transformations (V1, V2, V3, -ing) and which form follows did, was/were, had, and had been. Course step 1/9.',
    '40 ejercicios: domina los cambios de verbos regulares (-ed) e irregulares (V1, V2, V3, -ing) y qué forma exige cada auxiliar (did, was/were, had, had been). Paso 1/9.',
  ],
  [
    '60 exercises: finished past actions with regular (-ed) and irregular (V2) verbs, negatives with did not + V1, questions with Did + subject + V1, and was/were. Course step 2/9.',
    '60 ejercicios: hechos terminados con verbos regulares (-ed) e irregulares (V2), negativas con did not + V1, preguntas con Did + sujeto + V1 y was/were. Paso 2/9.',
  ],
  [
    '60 exercises: ongoing past activities with was/were + verb-ing, background actions interrupted by when + simple past, and simultaneous actions with while. Course step 3/9.',
    '60 ejercicios: actividades en curso con was/were + verbo-ing, acciones de fondo interrumpidas con when + pasado simple y acciones simultáneas con while. Paso 3/9.',
  ],
  [
    '60 exercises: actions completed before another past moment using had / had not + V3 with before, after, by the time, when, and because. Course step 4/9.',
    '60 ejercicios: acciones completadas antes de otro momento pasado usando had / had not + V3 con before, after, by the time, when y because. Paso 4/9.',
  ],
  [
    '60 exercises: ongoing processes and duration (for/since) leading up to or explaining another past event with had been + verb-ing. Course step 5/9.',
    '60 ejercicios: procesos continuos y duración acumulada (for/since) previos a otro suceso pasado o que explican su causa con had been + verbo-ing. Paso 5/9.',
  ],
  [
    '60 exercises: contrast and connect Simple Past, Past Continuous, Past Perfect, and Past Perfect Continuous in paired clauses and multi-step stories. Course step 6/9.',
    '60 ejercicios: contrasta y une el pasado simple, continuo, perfecto y perfecto continuo en cláusulas conectadas e historias narrativas. Paso 6/9.',
  ],
  [
    '40 exercises: everyday practice with can, could, may, might, should, must, have to, would, had better, would rather, should have + V3, and must have + V3. Course step 7/9.',
    '40 ejercicios: práctica cotidiana con can, could, may, might, should, must, have to, would, had better, would rather, should have + V3 y must have + V3. Paso 7/9.',
  ],
  [
    '40 exercises: report everyday conversations and promises with claim, confirm, estimate, explain, insist, say, swear, tell, tense backshift, and indirect questions. Course step 8/9.',
    '40 ejercicios: cuenta conversaciones y promesas con claim, confirm, estimate, explain, insist, say, swear, tell, cambio de tiempo (backshift) y preguntas indirectas. Paso 8/9.',
  ],
  [
    '40 exercises: make assumptions (I suppose, I assume, must have been), contradict firmly (Absolutely not, Not at all, Not in the least), and qualify (Up to a point, In a way, To an extent). Course step 9/9.',
    '40 ejercicios: haz suposiciones (I suppose, I assume, must have been), contradice con firmeza (Absolutely not, Not at all, Not in the least) y matiza (Up to a point, In a way, To an extent). Paso 9/9.',
  ],
];
export function courseLesson(slug: typeof courseSlugs[number], intro: Bilingual, exercises: ExerciseDef[]) {
  const index = courseSlugs.indexOf(slug);
  const links = (locale: 0 | 1) => courseSlugs.map((s, i) => `[${i + 1}. ${labels[i]![locale]}](/lessons/${s})`).join(' · ');
  return defineLesson(slug, index + 4, labels[index]!,
    descriptions[index]!,
    [intro[0] + '\n\n**Study plan:** Work in sets of 10–15; resume here later. Repeat your mistakes, then retry on a different day without hints. This workload is a starting point, not a guarantee of mastery. Aim for 90% on two separate attempts before moving on.\n\n**Course:** ' + links(0),
      intro[1] + '\n\n**Plan de estudio:** Trabaja en tandas de 10–15 y continúa aquí más tarde. Repasa tus errores y vuelve otro día sin pistas. Esta cantidad es un punto de partida, no una garantía de dominio. Como meta práctica, busca 90% en dos intentos separados antes de avanzar.\n\n**Recorrido:** ' + links(1)], exercises);
}
