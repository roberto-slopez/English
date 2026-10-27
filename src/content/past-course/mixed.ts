import { courseLesson, coursePractice } from './authoring.js';
import { cap, forms, verbs, wasWere } from './verbs.js';
import type { Bilingual } from '../class-notes/authoring.js';

const p = coursePractice('past-tenses-mixed');
const focuses: Bilingual[] = [
  ['Report the completed past event in the simple past (V2).', 'Expresa el hecho pasado terminado en pasado simple (V2).'],
  ['Show the background activity in progress when the other past event happened, using the past continuous (was/were + -ing).', 'Presenta la actividad de fondo en curso cuando ocurrió el otro suceso pasado usando el pasado continuo (was/were + -ing).'],
  ['Look back to an action completed before the other past event, using the past perfect (had + V3).', 'Mira hacia una acción ya terminada antes del otro suceso pasado usando el pasado perfecto (had + V3).'],
  ['Emphasize how long the activity had been going on before the other past event, using the past perfect continuous (had been + -ing).', 'Destaca cuánto tiempo llevaba ocurriendo la actividad antes del otro suceso pasado usando el pasado perfecto continuo (had been + -ing).'],
];
// Interleave tenses in a fixed, non-cyclic order. Every group covers all four.
const pattern = [2, 0, 3, 1, 1, 3, 0, 2, 3, 2, 1, 0, 0, 1, 2, 3, 2, 3, 0, 1];
for (let i = 0; i < 40; i++) {
  const v = verbs[i]!;
  const kind = pattern[i % 20]!;
  const [base, past, participle, ing, , subject, ...clauses] = v;
  const answers = [past, `${wasWere(subject)} ${ing}`, `had ${participle}`, `had been ${ing}`];
  const sentence = `${cap(subject)} ____ ${clauses[kind]}. (${base})`;
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
  ['Train trip: Yesterday morning, Mia ____ to the central station by bus to meet Leo. (go)', 'went', ['Report her completed journey.', 'Cuenta su trayecto terminado.'], ['Go → went → gone. Went reports this event.', 'Go → went → gone. Went cuenta este hecho.']],
  ['Train trip: When Mia reached the platform at nine, Leo ____ on the phone with the ticket office. (talk)', 'was talking', ['Describe the activity in progress, using the continuous.', 'Describe la actividad en curso usando el continuo.'], ['He was in the middle of talking at that past moment.', 'Estaba hablando en ese momento pasado.']],
  ['Train trip: The 8:50 express train ____ by the time Mia arrived at nine. (leave)', 'had left', ['Look back from her arrival using the perfect form.', 'Mira hacia atrás desde su llegada usando el perfecto.'], ['Leave → left → left; departure came first.', 'Leave → left → left; la salida ocurrió primero.']],
  ['Train trip: Leo arrived at eight, so he ____ on the platform for an hour when Mia got there. (wait)', 'had been waiting', ['Emphasize the ongoing duration before nine with the perfect continuous.', 'Destaca la duración acumulada hasta las nueve con el perfecto continuo.'], ['Had been waiting connects the earlier start with the later past point.', 'Had been waiting conecta el inicio anterior con el momento pasado posterior.']],
  ['Dinner: Last night we invited friends over, and I ____ a big pot of vegetable soup. (make)', 'made', ['Report the completed cooking event in simple past.', 'Cuenta la preparación terminada en pasado simple.'], ['Make → made → made; made is V2 here.', 'Make → made → made; aquí made es V2.']],
  ['Dinner: At seven o\'clock, I ____ the soup on the stove when the doorbell rang. (stir)', 'was stirring', ['Present the interrupted background activity in the continuous.', 'Presenta la actividad de fondo interrumpida en continuo.'], ['Was stirring is background; rang is the event. Double r.', 'Was stirring es el fondo; rang es el suceso. Duplica r.']],
  ['Dinner: The homemade bread was already warm on the table because we ____ it before the guests arrived. (bake)', 'had baked', ['Look back to that finished result with the perfect form.', 'Mira hacia ese resultado terminado con la forma perfecta.'], ['Had baked highlights completion before the arrival.', 'Had baked destaca que terminó antes de la llegada.']],
  ['Dinner: The kitchen felt very warm at seven because I ____ for two hours before everyone arrived. (cook)', 'had been cooking', ['Emphasize the preceding activity and duration with the perfect continuous.', 'Destaca actividad previa y duración con el perfecto continuo.'], ['The cooking activity explains the heat at that past point.', 'La actividad de cocinar explica el calor en ese momento pasado.']],
  ['New job: Ana started her new job last Monday and ____ her teammates that morning. (meet)', 'met', ['Report this completed event in simple past.', 'Cuenta este hecho terminado en pasado simple.'], ['Meet → met → met. No auxiliary is needed here.', 'Meet → met → met. Aquí no hace falta auxiliar.']],
  ['New job: At ten o\'clock, Ana ____ a project report when her manager called her into the office. (read)', 'was reading', ['Describe the background activity in the continuous.', 'Describe la actividad de fondo en continuo.'], ['Was reading means the reading was in progress.', 'Was reading indica que la lectura estaba en curso.']],
  ['New job: Ana felt prepared on Monday because she ____ the online training the previous Friday. (complete)', 'had completed', ['Look back to the completed training using the perfect.', 'Mira hacia la formación ya terminada usando el perfecto.'], ['Had completed marks the earlier completed preparation.', 'Had completed marca la preparación anterior ya terminada.']],
  ['New job: Before she got this offer in April, Ana ____ for a new position for three months. (look)', 'had been looking', ['Highlight the search duration before finding the role with the perfect continuous.', 'Destaca la duración de la búsqueda previa con el perfecto continuo.'], ['Had been looking focuses on the search over time.', 'Had been looking se centra en la búsqueda a lo largo del tiempo.']],
  ['Reunion: When the two sisters reunited last Saturday, they ____ coffee together at a quiet café. (drink)', 'drank', ['Report the event in simple past.', 'Cuenta el hecho en pasado simple.'], ['Drink → drank → drunk. Drank is V2; drunk is V3.', 'Drink → drank → drunk. Drank es V2; drunk es V3.']],
  ['Reunion: At three o\'clock, the sisters ____ lunch together when an old neighbor walked into the café. (eat)', 'were eating', ['Describe the activity in progress in the continuous.', 'Describe la actividad en curso en continuo.'], ['Plural they takes were; eat becomes eating.', 'They plural lleva were; eat pasa a eating.']],
  ['Reunion: They moved to different cities in 2010, so they ____ each other in person for fifteen years before that Saturday. (not / see)', 'had not seen', ['Look back from the reunion using the negative perfect form, without contractions.', 'Mira hacia atrás desde el reencuentro con el perfecto negativo, sin contracciones.'], ['Had not + seen (V3), not saw (V2).', 'Had not + seen (V3), no saw (V2).']],
  ['Reunion: Before finally meeting in person, they ____ messages to each other every week for six months. (write)', 'had been writing', ['Emphasize the repeated activity leading up to the reunion with the perfect continuous.', 'Destaca la actividad repetida previa al reencuentro con el perfecto continuo.'], ['Had been writing can describe repeated activity over a period.', 'Had been writing puede describir actividad repetida durante un periodo.']],
  ['Lost bag: Yesterday afternoon Tom searched the café and finally ____ his leather bag under a corner chair. (find)', 'found', ['Report the completed discovery in simple past.', 'Cuenta el hallazgo terminado en pasado simple.'], ['Find → found → found; found reports the discovery.', 'Find → found → found; found cuenta el hallazgo.']],
  ['Lost bag: At noon, Tom ____ lunch at the café when he suddenly noticed his bag was missing. (eat)', 'was eating', ['Describe the background activity in the continuous.', 'Describe la actividad de fondo en continuo.'], ['Was eating was in progress when he noticed the problem.', 'Was eating estaba en curso cuando notó el problema.']],
  ['Lost bag: When he saw the chair, Tom remembered that he ____ his bag there before ordering lunch. (put)', 'had put', ['Look back to that earlier action using the perfect.', 'Mira hacia esa acción anterior usando el perfecto.'], ['Put → put → put; had, not a changed spelling, marks the perfect.', 'Put → put → put; had marca el perfecto, no un cambio de escritura.']],
  ['Lost bag: Tom felt relieved at one o\'clock because he ____ for the bag for a full hour before he found it. (search)', 'had been searching', ['Emphasize the search duration before finding it with the perfect continuous.', 'Destaca la duración de la búsqueda previa al hallazgo con el perfecto continuo.'], ['Had been searching connects the hour-long activity to finding the bag.', 'Had been searching conecta la actividad de una hora con el hallazgo.']],
];
for (const [sentence, answer, focus, why] of stories) p.fill(sentence, answer, why,
  [`${focus[0]} Write only the missing words, without contractions.`, `${focus[1]} Escribe solo lo que falta, sin contracciones.`], 'story');

export const mixedLesson = courseLesson('past-tenses-mixed', [
  '## Mix the four past viewpoints\n\n**1–20:** choose the form matching the stated viewpoint. **21–40:** write it without options. **41–60:** complete five short stories, one blank at a time, using the verb in parentheses. Each story item repeats enough context to work in shuffled mode.\n\nAsk: Is this the event (V2), activity in progress (was/were + -ing), an earlier result (had + V3), or activity leading up to a past point (had been + -ing)?\n\nReal English sometimes allows more than one tense. These tasks state the intended viewpoint so you are not penalized for a different but possible interpretation. First finish in order, then use shuffle for retrieval practice.',
  '## Mezcla los cuatro enfoques del pasado\n\n**1–20:** elige la forma según el enfoque pedido. **21–40:** escríbela sin opciones. **41–60:** completa cinco historias breves, un hueco cada vez, con el verbo entre paréntesis. Cada pregunta repite el contexto necesario para funcionar también en orden aleatorio.\n\nPregúntate: ¿cuento el hecho (V2), una actividad en curso (was/were + -ing), un resultado anterior (had + V3) o una actividad previa a otro momento pasado (had been + -ing)?\n\nEn inglés real a veces cabe más de un tiempo. Aquí se indica el enfoque para no penalizar una interpretación distinta pero posible. Primero termina en orden; luego usa la mezcla aleatoria para practicar recordar.',
], p.exercises);
