import { courseLesson, coursePractice } from './authoring.js';
import { cap, forms, verbs, wasWere } from './verbs.js';
import type { Bilingual } from '../class-notes/authoring.js';

const p = coursePractice('past-tenses-mixed');
const focuses: Bilingual[] = [
  ['Report the completed event yesterday in the simple past.', 'Cuenta el hecho terminado de ayer en pasado simple.'],
  ['Show the activity in progress at eight, using the continuous form.', 'Presenta la actividad en curso a las ocho usando la forma continua.'],
  ['Look back to an already completed action from their arrival, using the perfect form.', 'Mira hacia una acción ya terminada desde su llegada usando la forma perfecta.'],
  ['Emphasize how long the activity had been going on before their arrival, using the perfect continuous form.', 'Destaca cuánto tiempo llevaba ocurriendo la actividad antes de su llegada usando la forma perfecta continua.'],
];
// Interleave tenses in a fixed, non-cyclic order. Every group covers all four.
const pattern = [2, 0, 3, 1, 1, 3, 0, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 3, 0, 1];
for (let i = 0; i < 40; i++) {
  const v = verbs[i]!;
  const kind = pattern[i % 20]!;
  const [base, past, participle, ing, , subject, complement] = v;
  const answers = [past, `${wasWere(subject)} ${ing}`, `had ${participle}`, `had been ${ing}`];
  const times = ['yesterday', 'at eight yesterday evening', 'before the guests arrived', 'for a while before the guests arrived'];
  const sentence = `${cap(subject)} ____ ${complement} ${times[kind]}. (${base})`;
  const why: Bilingual = [
    `${answers[kind]} fits the requested viewpoint. ${forms(v)}. ${['V2 reports the event.', 'Was/were + -ing shows activity in progress.', 'Had + V3 looks back to the completed action.', 'Had been + -ing emphasizes the preceding activity and duration.'][kind]}`,
    `${answers[kind]} expresa el enfoque pedido. ${forms(v)}. ${['V2 cuenta el hecho.', 'Was/were + -ing presenta la actividad en curso.', 'Had + V3 mira hacia la acción ya terminada.', 'Had been + -ing destaca la actividad previa y su duración.'][kind]}`,
  ];
  if (i < 20) {
    p.choose([`${focuses[kind]![0]} ${sentence}`, `${focuses[kind]![1]} ${sentence}`], answers, kind, why, 'viewpoint');
  } else {
    p.fill(sentence, answers[kind]!, why,
      [`${focuses[kind]![0]} Write the whole missing phrase.`, `${focuses[kind]![1]} Escribe toda la frase que falta.`], 'written_mix');
  }
}

// Original short narratives inspired by the worksheet format, not a transcription.
// Each item repeats its context so it remains answerable when the queue is shuffled.
type StoryRow = readonly [sentence: string, answer: string, focus: Bilingual, why: Bilingual];
const stories: StoryRow[] = [
  ['Train trip: Mia reached the station at nine. Yesterday she ____ there by bus. (go)', 'went', ['Report her completed journey.', 'Cuenta su trayecto terminado.'], ['Go → went → gone. Went reports this event.', 'Go → went → gone. Went cuenta este hecho.']],
  ['Train trip: At nine, Mia saw Leo halfway through a call. Leo ____ on the phone. (talk)', 'was talking', ['Describe the activity in progress, using the continuous.', 'Describe la actividad en curso usando el continuo.'], ['He was in the middle of talking at that past moment.', 'Estaba hablando en ese momento pasado.']],
  ['Train trip: Departure was at 8:50; Mia arrived at 9:00. The train ____ by the time she arrived. (leave)', 'had left', ['Look back from her arrival using the perfect form.', 'Mira hacia atrás desde su llegada usando el perfecto.'], ['Leave → left → left; departure came first.', 'Leave → left → left; la salida ocurrió primero.']],
  ['Train trip: Leo started waiting at eight. At nine, he ____ for an hour. (wait)', 'had been waiting', ['Emphasize the ongoing duration before nine with the perfect continuous.', 'Destaca la duración acumulada hasta las nueve con el perfecto continuo.'], ['Had been waiting connects the earlier start with the later past point.', 'Had been waiting conecta el inicio anterior con el momento pasado posterior.']],
  ['Dinner: We invited friends yesterday. I ____ soup for them. (make)', 'made', ['Report the completed cooking event in simple past.', 'Cuenta la preparación terminada en pasado simple.'], ['Make → made → made; made is V2 here.', 'Make → made → made; aquí made es V2.']],
  ['Dinner: At seven, the soup was still on the stove. I ____ it when the doorbell rang. (stir)', 'was stirring', ['Present the interrupted background activity in the continuous.', 'Presenta la actividad de fondo interrumpida en continuo.'], ['Was stirring is background; rang is the event. Double r.', 'Was stirring es el fondo; rang es el suceso. Duplica r.']],
  ['Dinner: The bread was already finished before the guests arrived. We ____ it earlier. (bake)', 'had baked', ['Look back to that finished result with the perfect form.', 'Mira hacia ese resultado terminado con la forma perfecta.'], ['Had baked highlights completion before the arrival.', 'Had baked destaca que terminó antes de la llegada.']],
  ['Dinner: The kitchen was hot at seven because I ____ for two hours. (cook)', 'had been cooking', ['Emphasize the preceding activity and duration with the perfect continuous.', 'Destaca actividad previa y duración con el perfecto continuo.'], ['The cooking activity explains the heat at that past point.', 'La actividad de cocinar explica el calor en ese momento pasado.']],
  ['New job: Ana started a new job last Monday. She ____ her team that morning. (meet)', 'met', ['Report this completed event in simple past.', 'Cuenta este hecho terminado en pasado simple.'], ['Meet → met → met. No auxiliary is needed here.', 'Meet → met → met. Aquí no hace falta auxiliar.']],
  ['New job: At ten, Ana was halfway through a report. She ____ it when her manager called. (read)', 'was reading', ['Describe the background activity in the continuous.', 'Describe la actividad de fondo en continuo.'], ['Was reading means the reading was in progress.', 'Was reading indica que la lectura estaba en curso.']],
  ['New job: Ana finished the training on Friday and started work on Monday. She ____ the training before her first day. (complete)', 'had completed', ['Look back to the completed training using the perfect.', 'Mira hacia la formación ya terminada usando el perfecto.'], ['Had completed marks the earlier completed preparation.', 'Had completed marca la preparación anterior ya terminada.']],
  ['New job: Ana started job hunting in January and found this role in April. She ____ for three months. (look)', 'had been looking', ['Highlight the search duration before finding the role with the perfect continuous.', 'Destaca la duración de la búsqueda previa con el perfecto continuo.'], ['Had been looking focuses on the search over time.', 'Had been looking se centra en la búsqueda a lo largo del tiempo.']],
  ['Reunion: Two old friends met last Saturday. They ____ coffee together. (drink)', 'drank', ['Report the event in simple past.', 'Cuenta el hecho en pasado simple.'], ['Drink → drank → drunk. Drank is V2; drunk is V3.', 'Drink → drank → drunk. Drank es V2; drunk es V3.']],
  ['Reunion: At three, the friends were halfway through lunch. They ____ when I walked in. (eat)', 'were eating', ['Describe the activity in progress in the continuous.', 'Describe la actividad en curso en continuo.'], ['Plural they takes were; eat becomes eating.', 'They plural lleva were; eat pasa a eating.']],
  ['Reunion: They moved apart in 2010 and met again in 2025. They ____ each other for fifteen years. (not / see)', 'had not seen', ['Look back from the reunion using the negative perfect form, without contractions.', 'Mira hacia atrás desde el reencuentro con el perfecto negativo, sin contracciones.'], ['Had not + seen (V3), not saw (V2).', 'Had not + seen (V3), no saw (V2).']],
  ['Reunion: Before meeting in person, they exchanged messages every week for six months. They ____ regularly for six months. (write)', 'had been writing', ['Emphasize the repeated activity leading up to the reunion with the perfect continuous.', 'Destaca la actividad repetida previa al reencuentro con el perfecto continuo.'], ['Had been writing can describe repeated activity over a period.', 'Had been writing puede describir actividad repetida durante un periodo.']],
  ['Lost bag: Yesterday Tom searched the cafe. Eventually he ____ his bag under a chair. (find)', 'found', ['Report the completed discovery in simple past.', 'Cuenta el hallazgo terminado en pasado simple.'], ['Find → found → found; found reports the discovery.', 'Find → found → found; found cuenta el hallazgo.']],
  ['Lost bag: At noon, Tom was halfway through lunch. He ____ when he noticed the missing bag. (eat)', 'was eating', ['Describe the background activity in the continuous.', 'Describe la actividad de fondo en continuo.'], ['Was eating was in progress when he noticed the problem.', 'Was eating estaba en curso cuando notó el problema.']],
  ['Lost bag: Before lunch, Tom put his bag under a chair. He later remembered he ____ it there. (put)', 'had put', ['Look back to that earlier action using the perfect.', 'Mira hacia esa acción anterior usando el perfecto.'], ['Put → put → put; had, not a changed spelling, marks the perfect.', 'Put → put → put; had marca el perfecto, no un cambio de escritura.']],
  ['Lost bag: Tom started searching at noon and found the bag at one. He ____ for an hour. (search)', 'had been searching', ['Emphasize the search duration before finding it with the perfect continuous.', 'Destaca la duración de la búsqueda previa al hallazgo con el perfecto continuo.'], ['Had been searching connects the hour-long activity to finding the bag.', 'Had been searching conecta la actividad de una hora con el hallazgo.']],
];
for (const [sentence, answer, focus, why] of stories) p.fill(sentence, answer, why,
  [`${focus[0]} Write only the missing words, without contractions.`, `${focus[1]} Escribe solo lo que falta, sin contracciones.`], 'story');

export const mixedLesson = courseLesson('past-tenses-mixed', [
  '## Mix the four past viewpoints\n\n**1–20:** choose the form matching the stated viewpoint. **21–40:** write it without options. **41–60:** complete five short stories, one blank at a time, using the verb in parentheses. Each story item repeats enough context to work in shuffled mode.\n\nAsk: Is this the event (V2), activity in progress (was/were + -ing), an earlier result (had + V3), or activity leading up to a past point (had been + -ing)?\n\nReal English sometimes allows more than one tense. These tasks state the intended viewpoint so you are not penalized for a different but possible interpretation. First finish in order, then use shuffle for retrieval practice.',
  '## Mezcla los cuatro enfoques del pasado\n\n**1–20:** elige la forma según el enfoque pedido. **21–40:** escríbela sin opciones. **41–60:** completa cinco historias breves, un hueco cada vez, con el verbo entre paréntesis. Cada pregunta repite el contexto necesario para funcionar también en orden aleatorio.\n\nPregúntate: ¿cuento el hecho (V2), una actividad en curso (was/were + -ing), un resultado anterior (had + V3) o una actividad previa a otro momento pasado (had been + -ing)?\n\nEn inglés real a veces cabe más de un tiempo. Aquí se indica el enfoque para no penalizar una interpretación distinta pero posible. Primero termina en orden; luego usa la mezcla aleatoria para practicar recordar.',
], p.exercises);
