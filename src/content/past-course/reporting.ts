import { courseLesson, coursePractice } from './authoring.js';
import type { Bilingual } from '../class-notes/authoring.js';
const p = coursePractice('everyday-reporting');
// Each definition tests a distinct function, rather than interchangeable verbs in one gap.
const targets = [
  ['claim', 'claimed', 'state something as true without necessarily proving it', 'afirmar algo sin necesariamente demostrarlo'],
  ['confirm', 'confirmed', 'verify that information is correct', 'confirmar que una información es correcta'],
  ['estimate', 'estimated', 'give an approximate amount or time', 'dar una cantidad o un tiempo aproximados'],
  ['explain', 'explained', 'make a reason or process clear', 'aclarar un motivo o un proceso'],
  ['insist', 'insisted', 'state something firmly despite disagreement', 'afirmar algo con firmeza pese al desacuerdo'],
  ['say', 'said', 'use the neutral reporting verb with the past form said', 'usar el verbo introductorio neutro cuyo pasado es said'],
  ['swear', 'swore', 'make a solemn statement or promise that something is true', 'afirmar o prometer solemnemente que algo es verdad'],
  ['tell', 'told', 'report words to a named listener with the pattern verb + person + that', 'comunicar palabras a un oyente con el patrón verbo + persona + that'],
] as const;
for (const [base, , meaning, meaningEs] of targets) {
  const choices = [base, ...targets.filter(t => t[0] !== base).slice(0, 3).map(t => t[0])];
  p.choose([`Which reporting verb means “${meaning}”?`, `¿Qué verbo sirve para «${meaningEs}»?`], choices, 0,
    [`${base}: ${meaning}. Choose by the communicative function.`, `${base}: ${meaningEs}. Elige según la función comunicativa.`], 'reporting_meanings');
}
for (const [base, past, meaning, meaningEs] of targets) p.fill(`${base} → ____ (V2)`, past,
  [`${base} → ${past}. It means to ${meaning}.`, `${base} → ${past}: ${meaningEs}.`],
  ['Write the simple-past form of the reporting verb.', 'Escribe el pasado simple del verbo introductorio.'], 'reporting_forms');

type Row = readonly [sentence: string, answer: string, why: Bilingual];
const patterns: Row[] = [
  ['The owner told ____ that the heating worked. (I → object)', 'me', ['Tell someone that: I becomes object me.', 'Tell someone that: I cambia al objeto me.']],
  ['The owner said ____ me that the heating worked.', 'to', ['Say to someone; do not use said me.', 'Say to someone; no uses said me.']],
  ['The technician explained the problem ____ us.', 'to', ['Explain something to someone, not explain someone something.', 'Explain something to someone, no explain someone something.']],
  ['The owner insisted ____ paying for the repair.', 'on', ['Insist on + -ing; another pattern is insist that + clause.', 'Insist on + -ing; otro patrón es insist that + oración.']],
  ['The owner promised ____ repair the heater.', 'to', ['Promise to + base; the owner commits to an action.', 'Promise to + base; el dueño se compromete a una acción.']],
  ['She asked me ____ the rent included water. (use if)', 'if', ['An indirect yes/no question can start with if or whether; this task requests if.', 'Una pregunta indirecta de sí/no admite if o whether; aquí se pide if.']],
  ['He told us ____ touch the broken socket. (negative instruction; full form)', 'not to', ['Tell + person + not to + base reports a negative instruction.', 'Tell + persona + not to + base comunica una instrucción negativa.']],
  ['She suggested ____ the caretaker. (call)', 'calling', ['Suggest + -ing: suggested calling; not suggested to call in this pattern.', 'Suggest + -ing: suggested calling; no suggested to call en este patrón.']],
];
for (const [sentence, answer, why] of patterns) p.fill(sentence, answer, why,
  ['Complete the reporting pattern.', 'Completa el patrón del estilo indirecto.'], 'reporting_patterns');

const backshift: Row[] = [
  ['The owner said, “I can fix it.” → The owner said that he ____ fix it.', 'could', ['In this past report with backshift, can becomes could.', 'En este relato pasado con cambio de tiempo, can pasa a could.']],
  ['The owner said, “I will paint it.” → The owner said that he ____ paint it.', 'would', ['Will becomes would when backshift is requested.', 'Will pasa a would cuando se pide cambio de tiempo.']],
  ['The owner said, “I am repairing it.” → The owner said that he ____ repairing it.', 'was', ['Am repairing becomes was repairing; I becomes he.', 'Am repairing pasa a was repairing; I cambia a he.']],
  ['The owner said, “I have ordered a fridge.” → The owner said that he ____ a fridge. (order)', 'had ordered', ['Have ordered becomes had ordered; use had + V3.', 'Have ordered pasa a had ordered; usa had + V3.']],
  ['The owner said, “I bought a fridge.” → The owner said that he ____ a fridge. (buy)', 'had bought', ['With full backshift, bought becomes had bought; V2 and V3 of buy coincide.', 'Con cambio completo, bought pasa a had bought; V2 y V3 de buy coinciden.']],
  ['The owner said, “I may replace it.” → The owner said that he ____ replace it.', 'might', ['May becomes might in this backshift exercise.', 'May pasa a might en este ejercicio de cambio de tiempo.']],
  ['The owner said, “The neighbors are quiet.” → He said that the neighbors ____ quiet.', 'were', ['Are becomes were in this past report.', 'Are pasa a were en este relato pasado.']],
  ['The owner said, “You must pay on Friday.” → He told me that I ____ pay on Friday.', 'had to', ['Must for obligation normally becomes had to in a past report.', 'Must de obligación normalmente pasa a had to en un relato pasado.']],
];
for (const [sentence, answer, why] of backshift) p.fill(sentence, answer, why,
  ['Report later from a past viewpoint. Apply full backshift and write only the blank.', 'Cuéntalo después desde un punto de vista pasado. Aplica el cambio de tiempo y completa solo el hueco.'], 'backshift');

p.choose(['Choose the correct report of “I can repaint the walls,” said the owner. Apply backshift.', 'Elige el relato correcto de «I can repaint the walls», dicho por el dueño. Aplica cambio de tiempo.'],
  ['The owner claimed that he could repaint the walls.', 'The owner claimed me that he can repainted the walls.', 'The owner claimed that I could repaint the walls.'], 0,
  ['He refers to the owner; can becomes could; repaint stays in base form.', 'He se refiere al dueño; can pasa a could; repaint queda en base.']);
p.choose(['The owner has checked the booking and verifies it. Which verb specifically expresses verification?', 'El dueño ha revisado la reserva y la verifica. ¿Qué verbo expresa específicamente verificación?'],
  ['confirmed', 'estimated', 'wondered'], 0, ['Confirmed reports verified information; estimated gives an approximation.', 'Confirmed comunica información verificada; estimated da una aproximación.']);
p.choose(['The repair time is approximate, not a promise. Which verb marks an approximation?', 'El tiempo de reparación es aproximado, no una promesa. ¿Qué verbo marca aproximación?'],
  ['estimated', 'swore', 'promised'], 0, ['Estimated signals an approximate time or amount.', 'Estimated señala un tiempo o una cantidad aproximados.']);
p.choose(['Select BOTH grammatically correct reports.', 'Selecciona AMBOS relatos gramaticalmente correctos.'],
  ['He said that the garden was shared.', 'He told me that the garden was shared.', 'He said me that the garden was shared.', 'He told that the garden was shared.'], [0, 1],
  ['Say that; tell someone that. The object me belongs after told.', 'Say that; tell someone that. El objeto me va después de told.']);
p.choose(['Correct the indirect question “She asked where was the fridge.”', 'Corrige la pregunta indirecta «She asked where was the fridge».'],
  ['She asked where the fridge was.', 'She asked where did the fridge was.', 'She asked where the fridge were.'], 0,
  ['Indirect questions use statement word order: the fridge was.', 'Las preguntas indirectas usan orden afirmativo: the fridge was.']);
p.choose(['Choose the correct report of “Do not block the entrance,” he told us.', 'Elige cómo contar correctamente «Do not block the entrance», que nos dijo él.'],
  ['He told us not to block the entrance.', 'He said us not block the entrance.', 'He told us do not blocked the entrance.'], 0,
  ['Tell + us + not to + block reports the instruction.', 'Tell + us + not to + block comunica la instrucción.']);
p.choose(['Is backshift always obligatory when information is still true and relevant?', '¿Es obligatorio cambiar siempre el tiempo cuando la información sigue siendo cierta y pertinente?'],
  ['No; keeping a present tense can be appropriate.', 'Yes; every reported verb must be past perfect.', 'No; reported speech never changes a tense.'], 0,
  ['Context controls backshift. The earlier drills explicitly requested a past viewpoint.', 'El contexto determina el cambio. Los ejercicios anteriores pedían explícitamente una perspectiva pasada.']);
p.order('The owner explained that the fridge had broken.',
  ['Explain that + clause. Had broken places the breakdown before the explanation; break → broke → broken.', 'Explain that + oración. Had broken sitúa la avería antes de la explicación; break → broke → broken.']);

export const reportingLesson = courseLesson('everyday-reporting', [
  '## Tell someone what another person said\n\nPractice the eight verbs from the classroom slide: **claim, confirm, estimate, explain, insist, say, swear, tell**. Their meanings may overlap; a claim is not automatically a lie.\n\n**Patterns:** say (that) / say to someone; tell someone (that); explain something to someone / explain that; insist on -ing / insist that; estimate that. Say → said, tell → told, swear → swore → sworn.\n\n**Past reporting with backshift:** can → could; will → would; am/is → was; are → were; have done → had done; did → had done; may → might. Could, would, should and might usually stay unchanged. Change pronouns and time/place words only as the context requires: I → he/she; tomorrow → the next day when reporting from a later day.\n\nBackshift is not always necessary for information that is still true. Here it is explicitly requested when tested. Indirect questions use statement order: She asked where the fridge was.\n\n**1–8:** meaning; **9–16:** reporting-verb past forms; **17–24:** patterns; **25–32:** backshift; **33–40:** everyday reports inspired by the rental conversation.',
  '## Contar a alguien lo que dijo otra persona\n\nPractica los ocho verbos de la captura: **claim, confirm, estimate, explain, insist, say, swear, tell**. Sus significados pueden solaparse; claim no implica necesariamente una mentira.\n\n**Patrones:** say (that) / say to someone; tell someone (that); explain something to someone / explain that; insist on -ing / insist that; estimate that. Say → said, tell → told, swear → swore → sworn.\n\n**Relato pasado con cambio de tiempo:** can → could; will → would; am/is → was; are → were; have done → had done; did → had done; may → might. Could, would, should y might normalmente se conservan. Cambia pronombres y referencias de tiempo/lugar según el contexto: I → he/she; tomorrow → the next day al contarlo otro día.\n\nNo siempre hace falta cambiar el tiempo si la información sigue siendo cierta. Aquí se pide expresamente cuando se evalúa. Las preguntas indirectas usan orden afirmativo: She asked where the fridge was.\n\n**1–8:** significado; **9–16:** pasado del verbo introductorio; **17–24:** patrones; **25–32:** cambio de tiempo; **33–40:** relatos cotidianos inspirados en la conversación del alquiler.',
], p.exercises);
