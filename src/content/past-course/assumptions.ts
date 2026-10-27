import { courseLesson, coursePractice } from './authoring.js';
import type { Bilingual } from '../class-notes/authoring.js';
const p = coursePractice('assumptions-and-responses');
const functions = [
  ['I suppose the shop is closed.', 0, 'I suppose presents a tentative belief.', 'I suppose presenta una creencia tentativa.'],
  ['I assume you have a ticket.', 0, 'I assume treats something as likely/true without checking.', 'I assume da algo por probable/cierto sin comprobarlo.'],
  ['It must have been difficult.', 0, 'Must have been makes a strong deduction about a past situation.', 'Must have been hace una deducción firme sobre una situación pasada.'],
  ['You must have been exhausted.', 0, 'The speaker infers a past feeling from evidence.', 'El hablante deduce un sentimiento pasado a partir de indicios.'],
  ['Absolutely not.', 1, 'This is an emphatic rejection of the assumption.', 'Es un rechazo enfático de la suposición.'],
  ['Not at all.', 1, 'As a response to an assumption, this denies it completely.', 'Como respuesta a una suposición, la niega por completo.'],
  ['Not in the least.', 1, 'In a denial, this means not even a little.', 'En una negación significa ni lo más mínimo.'],
  ['Up to a point.', 2, 'This accepts part of an assumption but sets a limit.', 'Acepta parte de la suposición, pero marca un límite.'],
  ['In a way.', 2, 'This agrees in one respect rather than completely.', 'Da la razón en cierto aspecto, no por completo.'],
  ['To an extent.', 2, 'This accepts the idea to some degree.', 'Acepta la idea hasta cierto grado.'],
] as const;
for (const [phrase, correct, en, es] of functions) p.choose(
  [`In a conversation about assumptions, classify “${phrase}”.`, `En una conversación sobre suposiciones, clasifica «${phrase}».`],
  ['Making an assumption', 'Contradicting an assumption', 'Qualifying / partly accepting an assumption'], correct, [en, es], 'functions');

type Gap = readonly [sentence: string, answer: string, why: Bilingual];
const expressions: Gap[] = [
  ['I ____ the shop is closed; I am guessing. (suppose)', 'suppose', ['Suppose stays in present base form after I.', 'Suppose queda en presente base después de I.']],
  ['I ____ you have already booked; that is my unverified starting belief. (assume)', 'assume', ['Assume states an unverified starting belief, not proof.', 'Assume expresa una creencia de partida sin comprobar, no una prueba.']],
  ['It must have ____ cold outside. (be)', 'been', ['Must have takes V3: be → was/were → been.', 'Must have lleva V3: be → was/were → been.']],
  ['You must have ____ tired after the trip. (be)', 'been', ['Use been before the adjective tired; not was.', 'Usa been antes del adjetivo tired; no was.']],
  ['Absolutely ____. (not)', 'not', ['Absolutely not is a strong denial.', 'Absolutely not es una negación firme.']],
  ['Not ____ all.', 'at', ['The fixed expression is not at all.', 'La expresión fija es not at all.']],
  ['Not in the ____. (least)', 'least', ['Not in the least means not even slightly.', 'Not in the least significa ni lo más mínimo.']],
  ['Up ____ a point.', 'to', ['Up to a point signals limited agreement.', 'Up to a point indica acuerdo limitado.']],
  ['In a ____. (way)', 'way', ['In a way accepts one aspect of the idea.', 'In a way acepta un aspecto de la idea.']],
  ['To ____ extent.', 'an', ['Use an before the vowel sound in extent.', 'Usa an ante el sonido vocálico de extent.']],
];
for (const [sentence, answer, why] of expressions) p.fill(sentence, answer, why,
  ['Complete the expression from the classroom slide.', 'Completa la expresión de la captura de clase.'], 'expression_forms');

type Choice = readonly [prompt: Bilingual, choices: string[], answer: number | number[], why: Bilingual];
const responses: Choice[] = [
  [['“I suppose you hated the trip.” You loved every minute. Select ALL complete denials.', '«Supongo que odiaste el viaje». Te encantó de principio a fin. Selecciona TODAS las negaciones completas.'],
    ['Absolutely not.', 'Not at all.', 'Not in the least.', 'Up to a point.'], [0, 1, 2], ['The first three deny the idea; up to a point partly accepts it.', 'Las tres negaciones rechazan la idea; up to a point la acepta parcialmente.']],
  [['“The new job is easier, I assume.” It is easier in some respects only. Select ALL partial agreements.', '«El nuevo trabajo es más fácil, supongo». Solo lo es en algunos aspectos. Selecciona TODOS los acuerdos parciales.'],
    ['Up to a point.', 'In a way.', 'To an extent.', 'Absolutely not.'], [0, 1, 2], ['All three qualifying expressions can fit; none is a unique single answer here.', 'Las tres expresiones matizadas sirven; ninguna es respuesta única aquí.']],
  [['“You must have been nervous.” You were completely calm. Which response clearly contradicts it?', '«Debiste de estar nervioso». Estabas completamente tranquilo. ¿Qué respuesta lo contradice claramente?'],
    ['Not in the least. I felt completely calm.', 'To an extent. I was a little nervous.', 'Exactly. I was terrified.'], 0, ['Not in the least denies any nervousness.', 'Not in the least niega cualquier nerviosismo.']],
  [['“I assume you work from home every day.” You do so only on Mondays. Choose the clarification.', '«Supongo que trabajas desde casa todos los días». Solo lo haces los lunes. Elige la aclaración.'],
    ['Only on Mondays; the other days I go to the office.', 'Yes, every single day.', 'I have never worked from home.'], 0, ['The clarification corrects the scope without denying all remote work.', 'La aclaración corrige el alcance sin negar todo el trabajo remoto.']],
  [['“The project was a complete failure.” Some parts worked. Choose the nuanced response.', '«El proyecto fue un fracaso total». Algunas partes funcionaron. Elige la respuesta matizada.'],
    ['To an extent, but the testing phase went well.', 'Absolutely. Nothing worked.', 'Not at all. Everything was perfect.'], 0, ['To an extent accepts part of the criticism and adds a limit.', 'To an extent acepta parte de la crítica y añade un límite.']],
  [['Which sentence is a deduction about the past, not an obligation?', '¿Qué oración es una deducción sobre el pasado y no una obligación?'],
    ['You must have been busy yesterday.', 'You must finish this today.', 'You had to attend yesterday.'], 0, ['Must have been infers a past state; had to states a past obligation.', 'Must have been deduce un estado pasado; had to expresa obligación pasada.']],
  [['Which wording makes a tentative assumption?', '¿Qué expresión hace una suposición tentativa?'],
    ['I suppose she is at home.', 'I checked: she is definitely at home.', 'Absolutely not.'], 0, ['I suppose marks the idea as a belief rather than verified information.', 'I suppose marca una creencia en vez de información comprobada.']],
  [['Does “in a way” mean complete agreement in every respect?', '¿In a way significa acuerdo completo en todos los aspectos?'],
    ['No; it qualifies agreement.', 'Yes; it means absolutely.', 'It always means a complete denial.'], 0, ['In a way limits agreement to a perspective or aspect.', 'In a way limita el acuerdo a una perspectiva o un aspecto.']],
  [['“Not at all” answers “Thank you” here. What function can it have in this different context?', 'Aquí «Not at all» responde a «Thank you». ¿Qué función puede tener en este otro contexto?'],
    ['A polite response similar to “You are welcome”.', 'It must contradict an assumption.', 'It makes a past deduction.'], 0, ['An expression can serve different functions depending on the conversation.', 'La función de una expresión puede cambiar según la conversación.']],
  [['Choose the grammatical deduction.', 'Elige la deducción gramatical.'],
    ['It must have been expensive.', 'It must had been expensive.', 'It must have was expensive.'], 0, ['Must + base have + V3 been; not had or was.', 'Must + base have + V3 been; no had ni was.']],
];
for (const [prompt, choices, correct, why] of responses) p.choose(prompt, choices, correct, why, 'responses');

const deductions: Gap[] = [
  ['The floor was wet and her umbrella was dripping. She must have ____ in the rain. (walk)', 'walked', ['Must have + walked infers the previous activity from evidence.', 'Must have + walked deduce la actividad previa a partir de indicios.']],
  ['The lights were off. They might have ____ to bed. (go)', 'gone', ['Might have + gone expresses a possible past event; went is V2.', 'Might have + gone expresa una posibilidad pasada; went es V2.']],
  ['The receipt is in his name. He must have ____ for dinner. (pay)', 'paid', ['Pay → paid → paid; have requires V3.', 'Pay → paid → paid; have exige V3.']],
  ['Perhaps she did not hear us. She may not have ____ the phone. (hear)', 'heard', ['May not have heard expresses possible non-occurrence, not certainty.', 'May not have heard expresa que quizá no lo oyó, no certeza.']],
  ['He was abroad at the time. He cannot have ____ this photo here yesterday. (take)', 'taken', ['Cannot have + taken rejects a past possibility.', 'Cannot have + taken rechaza una posibilidad pasada.']],
  ['The cake is gone. Someone must have ____ it. (eat)', 'eaten', ['Eat → ate → eaten; use V3 after have.', 'Eat → ate → eaten; usa V3 después de have.']],
  ['She may have ____ the wrong address. (write)', 'written', ['Write → wrote → written; may have needs written.', 'Write → wrote → written; may have necesita written.']],
  ['You must have ____ very relieved when the test ended. (feel)', 'felt', ['Feel → felt → felt; this deduces a past feeling.', 'Feel → felt → felt; se deduce un sentimiento pasado.']],
  ['It might have ____ during the night. (freeze)', 'frozen', ['Freeze → froze → frozen; might have takes V3.', 'Freeze → froze → frozen; might have lleva V3.']],
  ['She must have ____ the keys at work. (leave)', 'left', ['Leave → left → left; must have left is a strong deduction, not a fact checked directly.', 'Leave → left → left; must have left es una deducción firme, no un hecho comprobado directamente.']],
];
for (const [sentence, answer, why] of deductions) p.fill(sentence, answer, why,
  ['Complete the past deduction with the past participle (V3).', 'Completa la deducción pasada con el participio pasado (V3).'], 'past_deductions');

export const assumptionsLesson = courseLesson('assumptions-and-responses', [
  '## Make, contradict and clarify assumptions\n\n**Make:** I suppose… / I assume…; It must have been… / You must have been… infer a past situation. Must have + V3 expresses a strong deduction, not past obligation (had to). May/might have + V3 expresses possibility; cannot/could not have + V3 rejects a past possibility.\n\n**Contradict:** Absolutely not. / Not at all. / Not in the least. These can be interchangeable denials; tone matters. Absolutely not is emphatic.\n\n**Qualify:** Up to a point. / In a way. / To an extent. These accept something partly. Add a reason: “In a way, but the hours are longer.” They do not automatically request clarification.\n\nThe classroom heading “Clarifying assumptions” groups these qualifying responses. In context, not at all can also respond politely to thanks. Do not learn expressions as having only one function.\n\n**1–10:** functions; **11–20:** expression forms; **21–30:** conversational responses; **31–40:** deductions and irregular V3. Equivalent responses use explicit multiple selection.',
  '## Hacer, contradecir y matizar suposiciones\n\n**Suponer:** I suppose… = supongo; I assume… = doy por hecho. It must have been… / You must have been… deducen una situación pasada. Must have + V3 expresa una deducción firme, no obligación pasada (had to). May/might have + V3 expresa posibilidad; cannot/could not have + V3 rechaza una posibilidad pasada.\n\n**Contradecir:** Absolutely not = en absoluto; Not at all = para nada; Not in the least = ni lo más mínimo. Pueden servir como negaciones equivalentes; importa el tono. Absolutely not es enfático.\n\n**Matizar:** Up to a point = hasta cierto punto; In a way = en cierto modo; To an extent = hasta cierto grado. Aceptan algo parcialmente. Añade el motivo: “In a way, but the hours are longer.” No son automáticamente peticiones de aclaración.\n\nLa captura agrupa estos matices bajo “Clarifying assumptions”. Not at all también puede responder cortésmente a un agradecimiento. No aprendas cada expresión como si tuviera una sola función.\n\n**1–10:** funciones; **11–20:** formas; **21–30:** respuestas conversacionales; **31–40:** deducciones y V3 irregular. Las respuestas equivalentes usan selección múltiple explícita.',
], p.exercises);
