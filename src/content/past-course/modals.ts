import { courseLesson, coursePractice } from './authoring.js';
import type { Bilingual } from '../class-notes/authoring.js';
const p = coursePractice('everyday-modals');
type Gap = readonly [sentence: string, answer: string, en: string, es: string];
const gaps: Gap[] = [
  ['I can ____ you after work. (help)', 'help', 'Can takes the base help, not helped or to help.', 'Can lleva la base help, no helped ni to help.'],
  ['Could you ____ the window, please? (open)', 'open', 'Could + subject + base makes a polite request.', 'Could + sujeto + base forma una petición cortés.'],
  ['May I ____ here? (sit)', 'sit', 'May I sit asks permission; sit stays in base form.', 'May I sit pide permiso; sit queda en base.'],
  ['She might ____ late tonight. (arrive)', 'arrive', 'Might expresses possibility and takes arrive, not arrives.', 'Might expresa posibilidad y lleva arrive, no arrives.'],
  ['You should ____ a break. (take)', 'take', 'Should gives advice; the next verb is take, not took.', 'Should da consejo; el verbo siguiente es take, no took.'],
  ['You must ____ your seat belt. (wear)', 'wear', 'Must + wear expresses an obligation.', 'Must + wear expresa obligación.'],
  ['Would you ____ some tea? (like)', 'like', 'Would you like is a conventional offer; like stays in base form.', 'Would you like es un ofrecimiento habitual; like queda en base.'],
  ['Shall we ____ at six? (meet)', 'meet', 'Shall we meet makes a suggestion.', 'Shall we meet propone un plan.'],
  ['I will ____ you with those bags. (help)', 'help', 'Will + help can express an immediate offer.', 'Will + help puede expresar un ofrecimiento inmediato.'],
  ['You ought ____ call your grandmother.', 'to', 'Ought to uses to; should does not.', 'Ought to lleva to; should no.'],
  ['She ____ to start work at seven. (have; present)', 'has', 'Have to behaves like an ordinary verb: she has to.', 'Have to se conjuga como verbo ordinario: she has to.'],
  ['____ you have to work tomorrow? (do; present)', 'Do', 'Questions with have to use do/does.', 'Las preguntas con have to usan do/does.'],
  ['Yesterday I ____ to pay for parking. (have)', 'had', 'Use had to for a past obligation, not must have paid.', 'Usa had to para obligación pasada, no must have paid.'],
  ['She does not ____ to wear a uniform. (have)', 'have', 'Does carries agreement, so use have, not has.', 'Does lleva la concordancia; usa have, no has.'],
  ['I will be able ____ drive after the lessons.', 'to', 'Be able to gives can a future equivalent: will be able to drive.', 'Be able to permite expresar la capacidad futura: will be able to drive.'],
  ['We should not ____ so much food. (buy)', 'buy', 'Should not + base; do not use bought.', 'Should not + base; no uses bought.'],
  ['You had better ____ now; the last bus leaves soon. (leave)', 'leave', 'Had better takes base leave and gives strong advice about now/future.', 'Had better lleva leave en base y da consejo firme sobre ahora/el futuro.'],
  ['I would rather ____ at home tonight. (stay)', 'stay', 'Would rather + base expresses preference.', 'Would rather + base expresa preferencia.'],
  ['You should have ____ me yesterday. (tell)', 'told', 'Should have + V3 expresses a missed advisable action; tell → told → told.', 'Should have + V3 expresa algo aconsejable que no se hizo; tell → told → told.'],
  ['She must have ____ the wrong bus. (take)', 'taken', 'Must have + V3 makes a deduction about the past; taken, not took.', 'Must have + V3 deduce algo pasado; taken, no took.'],
];
for (const [sentence, answer, en, es] of gaps) p.fill(sentence, answer, [en, es],
  ['Complete the modal pattern. Write only the missing word.', 'Completa el patrón modal. Escribe solo la palabra que falta.'], 'modal_forms');

type Choice = readonly [prompt: Bilingual, choices: string[], answer: number | number[], why: Bilingual];
const choices: Choice[] = [
  [['Attendance is optional. Which sentence says there is no obligation?', 'La asistencia es opcional. ¿Qué oración indica ausencia de obligación?'],
    ['You do not have to attend.', 'You must not attend.', 'You have to attend.'], 0, ['Do not have to means optional; must not means forbidden.', 'Do not have to significa opcional; must not significa prohibido.']],
  [['The sign says “No smoking”. Which sentence expresses prohibition?', 'El cartel dice «No smoking». ¿Qué oración expresa prohibición?'],
    ['You must not smoke here.', 'You do not have to smoke here.', 'You should have smoked here.'], 0, ['Must not forbids an action; no obligation is a different meaning.', 'Must not prohíbe una acción; no tener obligación es otra cosa.']],
  [['You want a colleague to send a file politely. Choose BOTH requests.', 'Quieres pedir cortésmente un archivo a un compañero. Elige AMBAS peticiones.'],
    ['Could you send me the file?', 'Would you send me the file, please?', 'You must have sent me the file.', 'You could sent me the file.'], [0, 1], ['Both could and would work for polite requests; neither takes sent.', 'Could y would sirven para peticiones corteses; ninguno lleva sent.']],
  [['Which sentence describes general childhood ability?', '¿Qué oración describe capacidad general en la infancia?'],
    ['I could swim when I was six.', 'I may swim tomorrow.', 'I should swim more often.'], 0, ['Could can express general past ability.', 'Could puede expresar capacidad general pasada.']],
  [['One difficult task succeeded yesterday. Choose the explicit successful-achievement wording.', 'Una tarea difícil salió bien ayer. Elige la expresión que afirma el logro.'],
    ['I managed to unlock the door.', 'I might unlock the door.', 'I should unlock the door.'], 0, ['Managed to states that this particular attempt succeeded.', 'Managed to afirma que este intento concreto tuvo éxito.']],
  [['You are unsure whether it will rain. Select BOTH possibilities.', 'No sabes si lloverá. Selecciona AMBAS posibilidades.'],
    ['It might rain.', 'It may rain.', 'It must raining.', 'It might rains.'], [0, 1], ['May and might both express possibility with the base rain.', 'May y might expresan posibilidad con rain en base.']],
  [['Which sentence offers help right now?', '¿Qué oración ofrece ayuda en este momento?'],
    ['I will carry that for you.', 'I had to carry that yesterday.', 'I should have carried that.'], 0, ['Will can express a spontaneous offer.', 'Will puede expresar un ofrecimiento espontáneo.']],
  [['Which wording asks permission to leave?', '¿Qué expresión pide permiso para irse?'],
    ['May I leave early?', 'You must leave early.', 'I should have left early.'], 0, ['May I asks permission; the others state obligation or retrospective advice.', 'May I pide permiso; las otras expresan obligación o consejo retrospectivo.']],
  [['A friend is exhausted. Which wording gives advice?', 'Un amigo está agotado. ¿Qué expresión da consejo?'],
    ['You should rest.', 'You must have rested.', 'Did you rest?'], 0, ['Should rest advises; must have rested deduces a past action.', 'Should rest aconseja; must have rested deduce una acción pasada.']],
  [['Which sentence expresses a past obligation?', '¿Qué oración expresa obligación pasada?'],
    ['I had to work late yesterday.', 'I must have worked late yesterday.', 'I might have worked late yesterday.'], 0, ['Had to = obligation; must have = deduction; might have = possibility.', 'Had to = obligación; must have = deducción; might have = posibilidad.']],
  [['Correct “She can drives.”', 'Corrige «She can drives».'], ['She can drive.', 'She cans drive.', 'She can drove.'], 0, ['No third-person -s after a modal.', 'Después de un modal no se añade -s de tercera persona.']],
  [['Correct “Do you can help?”', 'Corrige «Do you can help?».'], ['Can you help?', 'Do can you help?', 'Can you helped?'], 0, ['Invert can directly; do is unnecessary.', 'Invierte can directamente; do sobra.']],
  [['Correct “You should to go.”', 'Corrige «You should to go».'], ['You should go.', 'You should went.', 'You should going.'], 0, ['Should takes the base without to.', 'Should lleva base sin to.']],
  [['Choose BOTH correct negatives.', 'Elige AMBAS negativas correctas.'], ['I cannot come.', 'I will not come.', 'I do not can come.', 'I should not came.'], [0, 1], ['Negate the modal directly; cannot is normally one word.', 'Niega el modal directamente; cannot normalmente es una palabra.']],
  [['Which sentence correctly gives strong advice not to be late?', '¿Qué oración aconseja firmemente no llegar tarde?'], ['You had better not be late.', 'You had not better to be late.', 'You had better not been late.'], 0, ['Had better not takes the base form be.', 'Had better not lleva be en forma base.']],
  [['Complete the short answer: “Can you cook?” “Yes, I ...”', 'Completa la respuesta corta: «Can you cook?» «Yes, I ...»'], ['can.', 'do.', 'am.'], 0, ['Repeat the modal can in the short answer.', 'Repite el modal can en la respuesta corta.']],
  [['Choose the grammatical future ability form.', 'Elige la forma gramatical de capacidad futura.'], ['She will be able to swim.', 'She will can swim.', 'She will able swim.'], 0, ['Use will be able to; do not stack will and can.', 'Usa will be able to; no combines will y can.']],
  [['Choose the grammatical past regret.', 'Elige el arrepentimiento pasado gramatical.'], ['I should have gone earlier.', 'I should have went earlier.', 'I should had go earlier.'], 0, ['Go → went → gone; after should have use V3.', 'Go → went → gone; después de should have usa V3.']],
  [['Choose the correct question with have to.', 'Elige la pregunta correcta con have to.'], ['Does she have to pay?', 'Does she has to pay?', 'Has she must pay?'], 0, ['Does carries agreement; have stays in the base form.', 'Does lleva la concordancia; have se conserva en forma base.']],
  [['Which pair correctly distinguishes necessity from possibility?', '¿Qué par distingue correctamente necesidad y posibilidad?'], ['I have to leave = necessary; I might leave = possible.', 'I might leave = necessary; I have to leave = optional.', 'I must not leave = optional; I can leave = forbidden.'], 0, ['Choose the modal for the intended meaning, then keep the main verb in base form.', 'Elige el modal por su significado y conserva el verbo principal en base.']],
];
for (const [prompt, options, correct, why] of choices) p.choose(prompt, options, correct, why, 'everyday_use');
export const modalsLesson = courseLesson('everyday-modals', [
  '## Modals you can use every day\n\n**Can/could, may/might, must, should, will/would, shall + base verb.** No -s, no did, and no to after these modals: She can drive. Can she drive? She cannot drive.\n\nUse can for ability/permission, could/would for polite requests, may/might for possibility, should for advice, must/have to for obligation, will for offers and shall we for suggestions. Several modals may be appropriate in one real situation.\n\n**Must not = forbidden; do not have to = optional.** Related patterns: ought to, have to, be able to, had better + base, would rather + base. Have to changes: she has to; did you have to? Past obligation: had to. Past deduction: must have + V3. Past regret: should have + V3.\n\n**1–20:** form the verb phrase. **21–40:** everyday situations and common mistakes.',
  '## Modales para todos los días\n\n**Can/could, may/might, must, should, will/would, shall + verbo base.** No añadas -s, did ni to después de estos modales: She can drive. Can she drive? She cannot drive.\n\nCan expresa capacidad/permiso; could/would, peticiones corteses; may/might, posibilidad; should, consejo; must/have to, obligación; will, ofrecimientos; shall we, sugerencias. En una situación real pueden servir varios modales.\n\n**Must not = prohibido; do not have to = opcional.** Patrones relacionados: ought to, have to, be able to, had better + base, would rather + base. Have to cambia: she has to; did you have to? Obligación pasada: had to. Deducción pasada: must have + V3. Arrepentimiento: should have + V3.\n\n**1–20:** forma la frase verbal. **21–40:** situaciones cotidianas y errores frecuentes.',
], p.exercises);
