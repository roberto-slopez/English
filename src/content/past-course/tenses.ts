import { courseLesson, coursePractice, type Practice } from './authoring.js';
import { cap, forms, verbs, wasWere } from './verbs.js';
import type { Bilingual } from '../class-notes/authoring.js';

const specs = [
  { slug: 'simple-past-practice', name: 'simple past', es: 'pasado simple', form: 1,
    rule: ['Affirmative: V2. Negative: did not + base. Question: Did + subject + base?', 'Afirmativa: V2. Negativa: did not + base. Pregunta: Did + sujeto + base?'],
    intro: ['## Simple past: completed past events\n\n**V1** = base (go), **V2** = past (went), **V3** = past participle (gone). Regular V2 often ends in -ed; irregular verbs must be learned.\n\n- I went / She studied yesterday.\n- I did not go / She did not study. Did carries the past: never did went.\n- Did you go? Yes, I did. / No, I did not.\n- **Be is different:** I/he/she/it was; you/we/they were. Was she tired? They were not late. Do not add did to be.\n\nSpelling: study → studied, play → played, stop → stopped, live → lived. Read has the same spelling but its past sounds like “red”.\n\n**1–20:** V2; **21–30:** affirmative; **31–40:** negatives; **41–50:** questions; **51–60:** corrections and contrasts.',
      '## Pasado simple: hechos terminados en el pasado\n\n**V1** = base (go), **V2** = pasado (went), **V3** = participio pasado (gone). Los regulares suelen llevar -ed; los irregulares se aprenden por familias.\n\n- I went / She studied yesterday: fui / ella estudió ayer.\n- I did not go / She did not study. Did ya marca el pasado: nunca did went.\n- Did you go? Yes, I did. / No, I did not.\n- **Be es diferente:** I/he/she/it was; you/we/they were. Was she tired? They were not late. No añadas did a be.\n\nOrtografía: study → studied, play → played, stop → stopped, live → lived. Read se escribe igual, pero su pasado se pronuncia como “red”.\n\n**1–20:** V2; **21–30:** afirmativas; **31–40:** negativas; **41–50:** preguntas; **51–60:** correcciones y contrastes.'] },
  { slug: 'past-continuous-practice', name: 'past continuous', es: 'pasado continuo', form: 3,
    rule: ['Use was/were + -ing. Negate or invert was/were; do not use did.', 'Usa was/were + -ing. Niega o invierte was/were; no uses did.'],
    intro: ['## Past continuous: an activity in progress then\n\n**Subject + was/were + -ing**: I was writing; they were running. **Was/were** carries past time and agreement; the main verb uses -ing, not V2 or V3.\n\n- I was cooking when the phone rang: background + event.\n- She was not sleeping. Were they studying? Yes, they were.\n- Two simultaneous activities: I was reading while he was cooking. An interruption is not required.\n\nSpelling: make → making; run → running; lie → lying; study → studying. Usually use simple forms for states such as know, own and believe.\n\n**1–20:** -ing; **21–30:** complete phrases; **31–40:** negatives; **41–50:** questions; **51–60:** meaning and corrections.',
      '## Pasado continuo: una actividad en curso en aquel momento\n\n**Sujeto + was/were + -ing**: I was writing; they were running. **Was/were** marca pasado y concordancia; el verbo principal lleva -ing, no V2 ni V3.\n\n- I was cooking when the phone rang: actividad de fondo + suceso.\n- She was not sleeping. Were they studying? Yes, they were.\n- Dos actividades simultáneas: I was reading while he was cooking. No tiene que haber interrupción.\n\nOrtografía: make → making; run → running; lie → lying; study → studying. Los estados como know, own y believe normalmente usan formas simples.\n\n**1–20:** -ing; **21–30:** frases completas; **31–40:** negativas; **41–50:** preguntas; **51–60:** significado y correcciones.'] },
  { slug: 'past-perfect-practice', name: 'past perfect', es: 'pasado perfecto', form: 2,
    rule: ['Use had + V3 for an earlier past situation; had is the same for every subject.', 'Usa had + V3 para una situación anterior a otro momento pasado; had no cambia con el sujeto.'],
    intro: ['## Past perfect: looking back from a past point\n\n**Subject + had + V3**: She had written the email before I arrived. First the email, then my arrival. **Had** is used with every subject.\n\n- They had gone, not had went.\n- She had not eaten. Had you seen it? Yes, I had.\n- Had had is correct: the first had is the auxiliary; the second is V3 of have.\n- A state can continue up to a past point: I had known her for years.\n\nA past reference matters. Do not use had with every past event. Before/after can also make a sequence clear with simple past; the guided exercises explicitly request past perfect.\n\n**1–20:** V3; **21–30:** affirmative; **31–40:** negatives; **41–50:** questions; **51–60:** V2/V3 contrasts and use.',
      '## Pasado perfecto: mirar hacia atrás desde el pasado\n\n**Sujeto + had + V3**: She had written the email before I arrived. Primero el correo, después mi llegada. **Had** sirve con todos los sujetos.\n\n- They had gone, nunca had went.\n- She had not eaten. Had you seen it? Yes, I had.\n- Had had es correcto: el primer had es auxiliar; el segundo es V3 de have.\n- Un estado puede prolongarse hasta ese momento pasado: I had known her for years.\n\nNecesitas una referencia pasada. No pongas had en todos los hechos pasados. Before/after también pueden aclarar la secuencia con pasado simple; los ejercicios guiados piden explícitamente pasado perfecto.\n\n**1–20:** V3; **21–30:** afirmativas; **31–40:** negativas; **41–50:** preguntas; **51–60:** contrastes V2/V3 y uso.'] },
  { slug: 'past-perfect-continuous-practice', name: 'past perfect continuous', es: 'pasado perfecto continuo', form: 3,
    rule: ['Use had been + -ing to emphasize activity or duration leading up to a past point.', 'Usa had been + -ing para destacar actividad o duración hasta un momento pasado.'],
    intro: ['## Past perfect continuous: how long had it been happening?\n\n**Subject + had + been + -ing**: I had been studying for two hours when you called. Had carries past time; been is V3 of be; studying is the main activity. Never had being or had been studied for this active meaning.\n\n- She had not been sleeping well.\n- Had they been waiting long? Yes, they had.\n- His shoes were muddy because he had been walking: a recent activity explains a past result. The activity may have stopped just before that past point. No interruption is required.\n- For two hours = duration; since noon = starting point. Neither word automatically requires a continuous tense.\n- Compare had written three emails (completed result) with had been writing for an hour (activity/duration). Use had known for a state, not had been knowing.\n\n**1–20:** -ing; **21–30:** complete phrases; **31–40:** negatives; **41–50:** questions; **51–60:** contrasts and corrections.',
      '## Pasado perfecto continuo: ¿cuánto tiempo llevaba ocurriendo?\n\n**Sujeto + had + been + -ing**: I had been studying for two hours when you called: llevaba dos horas estudiando cuando llamaste. Had marca pasado; been es V3 de be; studying es la actividad principal. No uses had being ni had been studied con este sentido activo.\n\n- She had not been sleeping well.\n- Had they been waiting long? Yes, they had.\n- His shoes were muddy because he had been walking: una actividad reciente explica un resultado pasado. Puede haber terminado justo antes de ese momento. No requiere una interrupción.\n- For two hours = duración; since noon = inicio. Ninguna de esas palabras exige siempre un continuo.\n- Had written three emails destaca el resultado terminado; had been writing for an hour destaca actividad/duración. Para un estado usa had known, no had been knowing.\n\n**1–20:** -ing; **21–30:** frases completas; **31–40:** negativas; **41–50:** preguntas; **51–60:** contrastes y correcciones.'] },
] as const;

function finish(p: Practice, kind: number) {
  const f = (sentence: string, answer: string, en: string, es: string) => p.fill(sentence, answer, [en, es],
    ['Complete only the blank. Use full forms, without contractions.', 'Completa solo el hueco. Usa formas completas, sin contracciones.']);
  if (kind === 0) {
    f('Yesterday she ____ at home. (be)', 'was', 'She takes was; be does not need did.', 'She lleva was; be no necesita did.');
    f('We ____ not late yesterday. (be)', 'were', 'We takes were; not follows be directly.', 'We lleva were; not va directamente después de be.');
    f('____ he at work yesterday? (be)', 'Was', 'Invert was and he; do not say Did he be.', 'Invierte was y he; no digas Did he be.');
    f('Did she go? Yes, she ____.', 'did', 'The short answer repeats did, not went.', 'La respuesta corta repite did, no went.');
    p.choose(['Correct “He did not took the bus.”', 'Corrige «He did not took the bus».'], ['He did not take the bus.', 'He did not taken the bus.', 'He not took the bus.'], 0, ['After did not, took returns to take.', 'Después de did not, took vuelve a take.']);
    p.choose(['Choose BOTH correct past questions.', 'Elige AMBAS preguntas pasadas correctas.'], ['Did you see her?', 'Were you tired?', 'Did you saw her?', 'Did you were tired?'], [0, 1], ['See uses did + base; be inverts were directly.', 'See usa did + base; be invierte were directamente.']);
    f('Last night they ____ the game. (win)', 'won', 'Win → won → won; affirmative simple past needs won.', 'Win → won → won; la afirmativa en pasado simple lleva won.');
    f('Yesterday I ____ my keys. (lose)', 'lost', 'Lose → lost → lost; do not add -ed.', 'Lose → lost → lost; no añadas -ed.');
    p.order('Did she have breakfast?', ['After did, have stays in the base form, not had.', 'Después de did, have queda en base, no had.']);
    p.choose(['Which sentence states a finished event yesterday?', '¿Qué oración presenta un hecho terminado ayer?'], ['I sent the form yesterday.', 'I send the form tomorrow.', 'I am sending the form now.'], 0, ['Sent is V2 of send and yesterday anchors past time.', 'Sent es V2 de send y yesterday sitúa el hecho en el pasado.']);
  } else if (kind === 1) {
    f('I ____ cooking when the lights went out.', 'was', 'I takes was; cooking is the activity in progress.', 'I lleva was; cooking es la actividad en curso.');
    f('You ____ reading at eight, not sleeping.', 'were', 'You always takes were in this past continuous pattern.', 'You siempre lleva were en este patrón de pasado continuo.');
    f('Were they working? No, they ____.', 'were not', 'Repeat were and add not in the short negative answer.', 'Repite were y añade not en la respuesta corta negativa.');
    p.choose(['Correct “She was wrote a letter.”', 'Corrige «She was wrote a letter».'], ['She was writing a letter.', 'She was written a letter.', 'She were writing a letter.'], 0, ['Was requires writing for an active continuous action.', 'Was requiere writing para una acción continua activa.']);
    p.choose(['Which form normally describes the state of knowing the answer then?', '¿Qué forma suele describir el estado de saber la respuesta entonces?'], ['I knew the answer.', 'I was knowing the answer.', 'I were knowing the answer.'], 0, ['Know is normally stative, so use knew.', 'Know normalmente es de estado, por eso se usa knew.']);
    f('They were ____ on the grass when I saw them. (lie)', 'lying', 'Lie changes ie to y before -ing: lying.', 'Lie cambia ie por y antes de -ing: lying.');
    p.order('Was he running when you called?', ['Invert was and he; running doubles n.', 'Invierte was y he; running duplica la n.']);
    p.choose(['Which part is the background in “I was washing dishes when the glass broke”?', '¿Qué parte es el fondo en «I was washing dishes when the glass broke»?'], ['I was washing dishes', 'the glass broke', 'Both verbs are simple past'], 0, ['Washing was in progress; broke is the event.', 'Washing estaba en curso; broke es el suceso.']);
    p.choose(['Select BOTH possible uses of past continuous.', 'Selecciona AMBOS usos posibles del pasado continuo.'], ['An activity in progress at a past time', 'Two simultaneous past activities', 'Only activities interrupted by accidents'], [0, 1], ['An interruption is one context, not a requirement.', 'Una interrupción es un contexto posible, no un requisito.']);
    f('She was ____ dinner while we were setting the table. (make)', 'making', 'Drop the silent e in make before adding -ing.', 'Quita la e muda de make antes de añadir -ing.');
  } else if (kind === 2) {
    f('Use past perfect: He ____ before I arrived. (go)', 'had gone', 'Go → went → gone; had requires gone, the earlier departure.', 'Go → went → gone; had requiere gone, la salida anterior.');
    f('Use past perfect: We ____ lunch before the meeting. (have)', 'had had', 'The first had is auxiliary; the second means eaten/had lunch.', 'El primer had es auxiliar; el segundo expresa haber almorzado.');
    f('Had she seen it? No, she ____.', 'had not', 'Repeat had, not did, in this short answer.', 'Repite had, no did, en esta respuesta corta.');
    p.choose(['Correct “They had ate already.”', 'Corrige «They had ate already».'], ['They had eaten already.', 'They had eat already.', 'They have ate already.'], 0, ['Had takes eaten (V3), not ate (V2).', 'Had lleva eaten (V3), no ate (V2).']);
    p.choose(['In “The train had left when we arrived”, what happened first?', 'En «The train had left when we arrived», ¿qué ocurrió primero?'], ['The train left.', 'We arrived.', 'They necessarily happened together.'], 0, ['Had left places departure before our arrival.', 'Had left sitúa la salida antes de nuestra llegada.']);
    f('Use past perfect: By 2020, I ____ her for ten years. (know)', 'had known', 'A state can last until a past point; know → knew → known.', 'Un estado puede durar hasta un momento pasado; know → knew → known.');
    p.order('Had you taken the medicine before dinner?', ['Had + subject + taken; took is V2, taken is V3.', 'Had + sujeto + taken; took es V2, taken es V3.']);
    f('Use past perfect: They ____ the bill before leaving. (pay)', 'had paid', 'Pay → paid → paid; use had paid for the earlier payment.', 'Pay → paid → paid; had paid expresa el pago anterior.');
    p.choose(['Which statement is accurate?', '¿Qué afirmación es correcta?'], ['Before and after can make simple-past sequences clear too.', 'Every verb after before must use had.', 'Had changes to has with she in past perfect.'], 0, ['Past perfect highlights anteriority; it is not automatic after before.', 'El pasado perfecto destaca anterioridad; no es automático con before.']);
    f('Use past perfect: She ____ the password before the test started. (forget)', 'had forgotten', 'Forget → forgot → forgotten; had requires V3.', 'Forget → forgot → forgotten; had exige V3.');
  } else {
    f('Use past perfect continuous: He ____ all morning when I arrived. (work)', 'had been working', 'Had + been + working emphasizes the preceding activity.', 'Had + been + working destaca la actividad anterior.');
    f('Had she been waiting? Yes, she ____.', 'had', 'The short answer repeats only the first auxiliary, had.', 'La respuesta corta repite solo el primer auxiliar, had.');
    p.choose(['Correct “They had being studying.”', 'Corrige «They had being studying».'], ['They had been studying.', 'They had were studying.', 'They had been studied.'], 0, ['Been is V3 of be; studying names the active process.', 'Been es V3 de be; studying expresa el proceso activo.']);
    p.choose(['For a state lasting until a past point, choose the usual form.', 'Para un estado que duró hasta un momento pasado, elige la forma habitual.'], ['I had known her for years.', 'I had been knowing her for years.', 'I had knew her for years.'], 0, ['Know normally takes the simple perfect even with for years.', 'Know normalmente lleva perfecto simple incluso con for years.']);
    f('She had been waiting ____ two hours when the bus came.', 'for', 'For introduces a duration: two hours.', 'For introduce una duración: two hours.');
    f('She had been waiting ____ noon when the bus came at two.', 'since', 'Since introduces the starting point: noon.', 'Since introduce el inicio: noon.');
    p.order('Had they been swimming before lunch?', ['Had moves before the subject; been swimming remains together.', 'Had pasa antes del sujeto; been swimming permanece unido.']);
    p.choose(['Which wording emphasizes a completed count of emails?', '¿Qué expresión destaca una cantidad de correos terminados?'], ['She had written five emails.', 'She had been writing emails.', 'She was writing an email.'], 0, ['Had written five counts completed results; the continuous focuses on activity.', 'Had written five cuenta resultados terminados; el continuo destaca actividad.']);
    p.choose(['His hands were dirty because he had been gardening. Must another event have interrupted him?', 'Tenía las manos sucias porque había estado trabajando en el jardín. ¿Tuvo que interrumpirlo otro suceso?'], ['No; recent activity can explain a past result.', 'Yes; interruption is always required.', 'The sentence describes a future plan.'], 0, ['The dirty hands are a result at a past point, not an interruption.', 'Las manos sucias son un resultado en el pasado, no una interrupción.']);
    f('Use past perfect continuous: We ____ for hours before we took a break. (run)', 'had been running', 'Run doubles n in running; keep both had and been.', 'Run duplica n en running; conserva had y been.');
  }
}

export const tenseLessons = specs.map((spec, kind) => {
  const p = coursePractice(spec.slug);
  const prompt: Bilingual = [`Use ${spec.name}. Write only the missing words, without contractions.`, `Usa ${spec.es}. Escribe solo lo que falta, sin contracciones.`];
  for (const [i, v] of verbs.slice(0, 20).entries()) {
    const correct = v[spec.form];
    const label = spec.form === 1 ? 'V2' : spec.form === 2 ? 'V3' : '-ing';
    p.fill(`${v[0]} → ____ (${label})`, correct,
      [`${forms(v)}. ${spec.rule[0]}`, `${v[0]} = ${v[4]}. ${forms(v)}. ${spec.rule[1]}`],
      [`Stage ${i < 10 ? 1 : 2}/6 · Write the ${label} form of ${v[0]}.`, `Etapa ${i < 10 ? 1 : 2}/6 · Escribe la forma ${label} de ${v[0]}.`], 'verb_forms',
      i < 10 ? [...new Set([correct, v[0], v[1], v[2], v[3], `${v[0]}${v[0].endsWith('e') ? 'd' : 'ed'}`])] : []);
  }
  for (const [i, v] of verbs.slice(20).entries()) {
    const [base, past, participle, ing, meaning, subject, ...clauses] = v;
    const clause = clauses[kind]!;
    const negative = i >= 10;
    const answer = kind === 0 ? (negative ? `did not ${base}` : past) :
      kind === 1 ? `${wasWere(subject)} ${negative ? 'not ' : ''}${ing}` :
      kind === 2 ? `had ${negative ? 'not ' : ''}${participle}` : `had ${negative ? 'not ' : ''}been ${ing}`;
    p.fill(`${cap(subject)} ____ ${clause}. (${negative ? 'not / ' : ''}${base})`, answer,
      [`${answer}: ${spec.rule[0]} Forms: ${forms(v)}.`, `${answer}: ${spec.rule[1]} ${base} = ${meaning}; ${forms(v)}.`],
      [`Stage ${negative ? 4 : 3}/6 · ${prompt[0]}`, `Etapa ${negative ? 4 : 3}/6 · ${prompt[1]}`], negative ? 'negative' : 'affirmative');
  }
  for (const v of verbs.slice(0, 10)) {
    const [base, , participle, ing, , subject, ...clauses] = v;
    const clause = clauses[kind]!;
    const answer = kind === 0 ? `Did ${subject} ${base}` : kind === 1 ? `${cap(wasWere(subject))} ${subject} ${ing}` :
      kind === 2 ? `Had ${subject} ${participle}` : `Had ${subject} been ${ing}`;
    p.fill(`____ ${clause}? (${subject} / ${base})`, answer,
      [`${answer}: place the auxiliary before ${subject}. ${spec.rule[0]}`, `${answer}: coloca el auxiliar antes de ${subject}. ${spec.rule[1]}`],
      [`Stage 5/6 · Make a ${spec.name} question. Include the subject in the blank.`, `Etapa 5/6 · Forma una pregunta en ${spec.es}. Incluye el sujeto en el hueco.`], 'questions');
  }
  finish(p, kind);
  return courseLesson(spec.slug, spec.intro, p.exercises);
});
