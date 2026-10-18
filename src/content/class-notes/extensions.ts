import type { ExerciseDef, LessonDef } from '../types.js';
import { practice, text } from './authoring.js';

// Append only: original keys and order indices remain available to saved runs.
const past = practice('future-forms-and-used-to', 17);
const relative = practice('relative-clauses', 17);
const reduced = practice('reduced-relative-clauses', 21);
const willing = practice('willingness-and-unwillingness', 21);
const present = practice('present-real-conditionals', 21);
const real = practice('real-conditionals', 21);
const conditions = practice('conditional-conjunctions', 21);
const feelings = practice('class-vocab-strong-feelings', 23);
const personality = practice('class-vocab-personality', 25);

export const notesExtensions: Readonly<Record<string, readonly ExerciseDef[]>> = {
  'future-forms-and-used-to': [
    past.fill('She ____ be able to dance very well, but her injury changed that.', 'used to', ['used to', 'use to', 'was used to', 'used'], ['Used to describes this former ability, a past state. “She used to be able to dance very well” is correct.', 'Used to describe esta antigua capacidad, un estado pasado. «She used to be able to dance very well» es correcto.']),
    past.choose(['Select BOTH correct descriptions of a repeated childhood action.', 'Selecciona AMBAS descripciones correctas de una acción repetida en la infancia.'],
      ['When we were children, we used to text each other every night.', 'When we were children, we would text each other every night.', 'When we were children, we would to text each other every night.', 'When we were children, we were used to text each other every night.'], [0, 1],
      ['Repeated actions can take used to or would. Would uses the base verb without to.', 'Las acciones repetidas admiten used to o would. Would lleva verbo base sin to.']),
    past.fill('I did not ____ to sleep over at my friend’s house.', 'use', ['use', 'used', 'using', 'uses'], ['Did already marks the past; use the base form use.', 'Did ya marca el pasado; se usa use en forma base.']),
    past.fill('Did you ____ to take the bus to school?', 'use', ['use', 'used', 'using', 'uses'], ['Questions use Did + subject + use to + base verb.', 'Las preguntas usan Did + sujeto + use to + verbo base.']),
    past.truth('Used to can describe both a past state and a repeated past action.', true, ['I used to believe in ghosts is a state; I used to walk to school is a repeated action.', 'I used to believe in ghosts es un estado; I used to walk to school es una acción repetida.']),
    past.fill('I ____ wear contacts, but now I wear glasses.', 'used to', ['used to', 'use to', 'am used to', 'used'], ['Used to describes the former situation. Contacts means contact lenses here.', 'Used to describe la situación anterior. Aquí contacts significa lentes de contacto.']),
    past.choose(['Which sentence uses would for a repeated action in a clear past context?', '¿Qué oración usa would para una acción repetida en un contexto pasado claro?'],
      ['As a child, I would wear a life vest every time we went sailing.', 'I would to wear a life vest.', 'I would owned a boat.', 'I would be able to dance tomorrow if I recovered.'], 0,
      ['Every time we went sailing supplies repeated past occasions. The last choice is a hypothetical future ability.', 'Every time we went sailing indica ocasiones pasadas repetidas. La última opción expresa capacidad futura hipotética.']),
    past.match(['I used to own a motorcycle.', 'We would walk along the beach every evening.', 'I am used to wearing braces.', 'I am getting used to wearing a back brace.'],
      ['A former state of possession', 'A repeated past action', 'Being accustomed now', 'Becoming accustomed'],
      ['Used to + base verb describes the past; be/get used to + -ing describes being/becoming accustomed.', 'Used to + verbo base describe el pasado; be/get used to + -ing describe estar/acostumbrarse.']),
    past.order(['My', 'mother', 'would', 'sing', 'to', 'us', 'at', 'bedtime.'], ['Would sing describes a repeated action in a past routine.', 'Would sing describe una acción repetida de una rutina pasada.']),
    past.fill('She ____ to have braces when she was a teenager, but she no longer has them.', 'used', ['used', 'use', 'using', 'uses'], ['Used to have describes that former situation. Braces can mean orthodontic braces in this context.', 'Used to have describe aquella situación anterior. Aquí braces puede referirse a aparatos de ortodoncia.']),
    past.choose(['Which sentence uses have for a repeated ACTION, so habitual would is appropriate?', '¿Qué oración usa have para una ACCIÓN repetida, por lo que admite would habitual?'],
      ['When I was a student, I would have lunch at the same café every day.', 'When I was a student, I would have a car that I owned continuously.', 'When I was a student, I would to have lunch.', 'When I was a student, I would had lunch.'], 0,
      ['Have lunch is an activity. Have a car as possession is a state. Choose by meaning, not just by the verb’s spelling.', 'Have lunch es una actividad. Have a car como posesión es un estado. Decide por significado, no solo por la forma del verbo.']),
    past.fill('They never ____ to ride their bikes to school.', 'used', ['used', 'use', 'using', 'uses'], ['Without did, the past-habit form remains used to, even after never.', 'Sin did, la forma de hábito pasado sigue siendo used to, incluso después de never.']),
  ],
  'relative-clauses': [
    relative.fill('Tom, ____ major is economics, studies here.', 'whose', ['whose', 'who', 'who’s', 'which'], ['Whose + major expresses possession. Who’s means who is or who has.', 'Whose + major expresa posesión. Who’s significa who is o who has.']),
    relative.fill('The country ____ flag has thirteen stripes and fifty stars is the United States.', 'whose', ['whose', 'who', 'who’s', 'where'], ['Whose can refer to things or countries, not only people.', 'Whose puede referirse a cosas o países, no solo a personas.']),
    relative.choose(['Select BOTH valid pronouns for “A life-of-the-party person is someone ____ attracts attention.”', 'Selecciona AMBOS pronombres válidos para «A life-of-the-party person is someone ____ attracts attention».'],
      ['who', 'that', 'whose', 'where'], [0, 1], ['Who and that both work in this defining relative clause about a person.', 'Who y that son válidos en esta relativa especificativa sobre una persona.']),
    relative.order(['Our', 'neighbor', 'Mary,', 'whose', 'cat', 'we', 'take', 'care', 'of,', 'is', 'going', 'on', 'vacation.'], ['Whose cat stays together. Place the clause immediately after Mary, the cat’s owner.', 'Whose cat permanece unido. Coloca la cláusula justo después de Mary, la dueña del gato.']),
    relative.fill('Thursday is the day ____ we have unit quizzes.', 'when', ['when', 'who', 'whose', 'which'], ['When introduces a time relation; which alone cannot fill this gap without changing the structure.', 'When introduce una relación temporal; which solo no encaja en este hueco sin cambiar la estructura.']),
    relative.fill('The class was canceled, ____ disappointed us all.', 'which', ['which', 'that', 'who', 'whose'], ['Which can refer to the preceding event as a whole. That is not used in this non-defining clause.', 'Which puede referirse al hecho anterior completo. That no se usa en esta relativa explicativa.']),
    relative.fill('This is the church ____ my parents were married.', 'where', ['where', 'who', 'whose', 'which'], ['Where gives the place relation: in that church. In which would also work as a whole phrase.', 'Where expresa la relación de lugar: en esa iglesia. La frase completa in which también sería válida.']),
    relative.match(['who', 'whose', 'when', 'where'], ['A person doing an action', 'Possession: whose father / whose work', 'A time relation', 'A place relation'], ['Choose the relation as well as the noun type; whose must be followed by a possessed noun.', 'Elige según la relación y el tipo de sustantivo; whose va seguido de un sustantivo poseído.']),
    relative.truth('You may omit the object relative pronoun in “My sister, whom you met yesterday, lives here.”', false, ['The commas make this non-defining; retain its relative pronoun.', 'Las comas indican una relativa explicativa; conserva el pronombre relativo.']),
    relative.choose(['Combine “My sister lives in San Diego. Her husband is in the navy.”', 'Combina «My sister lives in San Diego. Her husband is in the navy».'],
      ['My sister, whose husband is in the navy, lives in San Diego.', 'My sister lives in San Diego whose husband is in the navy.', 'My sister, whose is her husband in the navy, lives in San Diego.', 'My sister, who husband is in the navy, lives in San Diego.'], 0,
      ['Whose husband describes the sister. Do not attach the relative clause to San Diego.', 'Whose husband describe a la hermana. No unas la relativa a San Diego.']),
  ],
  'reduced-relative-clauses': [
    reduced.fill('Contestants ____ for the competition often do better.', 'prepared', ['prepared', 'are prepared', 'who prepared', 'prepares'], ['Contestants prepared reduces contestants who are prepared; prepared is an adjective/participle modifier here.', 'Contestants prepared reduce contestants who are prepared; prepared modifica al sustantivo.']),
    reduced.choose(['Reduce “The building that was condemned was once a hotel.”', 'Reduce «The building that was condemned was once a hotel».'],
      ['The building condemned was once a hotel.', 'The building was condemned was once a hotel.', 'The building that condemned was once a hotel.', 'The building condemning was once a hotel.'], 0,
      ['Omit that was and retain the passive participle condemned. The main verb remains was.', 'Omite that was y conserva el participio pasivo condemned. El verbo principal sigue siendo was.']),
    reduced.choose(['Select BOTH correct versions with an appositive or its full relative clause.', 'Selecciona AMBAS versiones correctas con una aposición o su relativa completa.'],
      ['Myra, who is a polyglot, learns languages easily.', 'Myra, a polyglot, learns languages easily.', 'Myra, who a polyglot, learns languages easily.', 'Myra is a polyglot, learns languages easily.'], [0, 1],
      ['Who is can be omitted before the noun phrase a polyglot; keep both commas.', 'Puede omitirse who is antes del grupo nominal a polyglot; conserva ambas comas.']),
    reduced.fill('The ranger station ____ at the top of the tramway is closed.', 'located', ['located', 'is located', 'that located', 'locate'], ['Located reduces that is located and modifies the station.', 'Located reduce that is located y modifica station.']),
    reduced.truth('“The defendant whose case was appealed” can be reduced by deleting whose case was.', false, ['Whose case identifies possession and is not a subject-pronoun-plus-be sequence to delete.', 'Whose case expresa posesión; no es una secuencia de pronombre sujeto más be que se pueda eliminar.']),
    reduced.choose(['Which clause cannot be shortened by ONLY deleting the relative pronoun and be?', '¿Qué cláusula no puede acortarse SOLO eliminando el pronombre relativo y be?'],
      ['the actress who stars in my favorite movie', 'the weapons that were confiscated', 'the runners who are exhausted', 'the station that is located on the hill'], 0,
      ['Who stars has no be to delete. A broader active -ing transformation is a separate operation, not this deletion exercise.', 'Who stars no contiene be que eliminar. La transformación activa a -ing es otra operación, distinta de esta eliminación.']),
    reduced.match(['who are exhausted', 'that were confiscated', 'who is a famous architect', 'whose work is admired'],
      ['exhausted', 'confiscated', 'a famous architect', 'Keep the possessive clause; do not delete whose work is.'],
      ['Adjectives, passive participles, and appositives permit these reductions; the possessive relation must remain.', 'Adjetivos, participios pasivos y aposiciones admiten estas reducciones; la relación posesiva debe permanecer.']),
    reduced.order(['The', 'items', 'marked', '50%', 'off', 'are', 'not', 'eligible', 'for', 'a', 'refund.'], ['Marked 50% off modifies items; are is the main verb.', 'Marked 50% off modifica items; are es el verbo principal.']),
  ],
  'willingness-and-unwillingness': [
    willing.fill('I am prepared ____ increase my offer for the house.', 'to', ['to', 'of', 'about', 'with'], ['Be prepared to + base verb expresses being ready or willing.', 'Be prepared to + verbo base expresa estar preparado o dispuesto.']),
    willing.fill('Mary is passionate ____ helping abandoned animals.', 'about', ['about', 'to', 'of', 'for'], ['Be passionate about + noun or gerund; about is a preposition.', 'Be passionate about + sustantivo o gerundio; about es una preposición.']),
    willing.fill('The students are anxious ____ start their summer vacation.', 'to', ['to', 'of', 'about', 'for'], ['Anxious to start means eager to start here, not necessarily worried.', 'Aquí anxious to start significa deseosos de empezar, no necesariamente preocupados.']),
    willing.fill('Be ____ to stop for inspection at the checkpoint.', 'prepared', ['prepared', 'prepare', 'preparing', 'prepares'], ['The imperative is be prepared to, not be prepare to.', 'El imperativo es be prepared to, no be prepare to.']),
    willing.fill('The other team has no intention of ____ up.', 'giving', ['giving', 'give', 'to give', 'gave'], ['Of is a preposition, so use giving. Give up means stop trying.', 'Of es preposición, por eso se usa giving. Give up significa rendirse.']),
    willing.fill('The children are dying ____ open their presents.', 'to', ['to', 'of', 'about', 'for'], ['Be dying to + base verb expresses strong eagerness.', 'Be dying to + verbo base expresa muchas ganas de hacer algo.']),
    willing.match(['be unwilling to pay', 'be reluctant to part with', 'be more than happy to explain', 'be against increasing'],
      ['Not want to pay', 'Hesitate to give up something valued', 'Gladly agree to explain', 'Oppose an increase'],
      ['Reluctance is hesitation, not necessarily final refusal. Against takes a noun or -ing form.', 'Reluctant expresa duda, no necesariamente rechazo definitivo. Against lleva sustantivo o -ing.']),
    willing.choose(['Choose the correct complement after passionate about.', 'Elige el complemento correcto después de passionate about.'],
      ['She is passionate about helping animals.', 'She is passionate about help animals.', 'She is passionate to helping animals.', 'She is passionate of help animals.'], 0,
      ['Use passionate about + helping, not to helping or about help.', 'Usa passionate about + helping, no to helping ni about help.']),
  ],
  'present-real-conditionals': [
    present.fill('My girlfriend ____ scared whenever she sees snakes.', 'gets', ['gets', 'get', 'getting', 'will gets'], ['A repeated condition uses present forms. Girlfriend takes gets; she takes sees.', 'Una condición repetida usa presente. Girlfriend lleva gets y she lleva sees.']),
    present.fill('Mike moves his hands when he ____.', 'talks', ['talks', 'talk', 'talking', 'will talks'], ['He takes talks in a present habitual condition.', 'He lleva talks en una condición habitual presente.']),
    present.fill('Thomas feels sick if he ____ in a moving car.', 'reads', ['reads', 'read', 'reading', 'will reads'], ['He reads is the simple-present condition; feels is the repeated result.', 'He reads es la condición en presente simple; feels es el resultado repetido.']),
    present.fill('If she wants to save money, she must ____ eating out so often.', 'stop', ['stop', 'stops', 'stopped', 'to stop'], ['After must use the base verb stop; wants agrees with she in the if-clause.', 'Después de must usa stop en forma base; wants concuerda con she en la cláusula con if.']),
    present.choose(['Which pair correctly completes “Whenever I ____ coffee, I ____ a book” as a present routine?', '¿Qué pareja completa «Whenever I ____ coffee, I ____ a book» como rutina presente?'],
      ['drink / read', 'drinks / reads', 'drinking / reading', 'will drink / will reads'], 0,
      ['Use I drink and I read; whenever describes repeated occasions.', 'Usa I drink e I read; whenever describe ocasiones repetidas.']),
    present.truth('When and whenever can introduce repeated real conditions in the present.', true, ['Whenever means every time that; when can also describe repeated situations.', 'Whenever significa cada vez que; when también puede describir situaciones repetidas.']),
  ],
  'real-conditionals': [
    real.fill('When you ____ in San Francisco tomorrow, you will see many cable cars.', 'arrive', ['arrive', 'will arrive', 'arrived', 'arriving'], ['For this ordinary future time clause use present arrive after when; will belongs in the result.', 'En esta cláusula temporal futura habitual usa presente arrive después de when; will va en el resultado.']),
    real.fill('Students will get better grades if they ____ hard.', 'study', ['study', 'will study', 'studied', 'studying'], ['If + present, will + base verb describes this possible future result.', 'If + presente, will + verbo base describe este posible resultado futuro.']),
    real.fill('If you eat more fruit, you ____ feel healthier in the coming weeks.', 'will', ['will', 'would have', 'did', 'were'], ['The future result uses will feel; the condition already uses present eat.', 'El resultado futuro usa will feel; la condición ya usa presente eat.']),
    real.match(['If I work in the sun, I get sunburned.', 'If I study tonight, I will be ready tomorrow.', 'If she wants to enter, she must show her pass.'],
      ['A recurring present result', 'A possible future result', 'A requirement expressed with a modal'],
      ['Distinguish a routine, a future outcome, and a requirement rather than forcing will into every result.', 'Distingue rutina, resultado futuro y requisito en vez de imponer will en todos los resultados.']),
  ],
  'conditional-conjunctions': [
    conditions.choose(['Select BOTH words that can complete “____ long as you return it, you can borrow my car.”', 'Selecciona AMBAS palabras que completan «____ long as you return it, you can borrow my car».'],
      ['As', 'So', 'Such', 'For'], [0, 1], ['As long as and so long as both introduce a condition.', 'As long as y so long as introducen una condición.']),
    conditions.choose(['Select BOTH correct conditional connectors.', 'Selecciona AMBOS conectores condicionales correctos.'],
      ['provided that', 'providing that', 'provide that', 'even if that'], [0, 1], ['Provided that and providing that are valid. Even if does not take an extra that before its subject.', 'Provided that y providing that son válidos. Even if no lleva un that adicional antes de su sujeto.']),
    conditions.fill('She cannot open the door ____ you give her the key.', 'unless', ['unless', 'despite', 'because of', 'in spite of'], ['Unless = if not: without the key she cannot open the door.', 'Unless equivale a if not: sin la llave no puede abrir la puerta.']),
    conditions.choose(['Which connector says that trains being available will NOT change the speaker’s preference?', '¿Qué conector indica que la disponibilidad de trenes NO cambiará la preferencia del hablante?'],
      ['Driving is more convenient for me even if trains are available.', 'Driving is more convenient for me only if trains are available.', 'Driving is more convenient for me provided that trains are available.', 'Driving is more convenient for me on condition that trains are available.'], 0,
      ['Even if marks an unchanged result despite the possible condition.', 'Even if señala un resultado que no cambia pese a la posible condición.']),
    conditions.fill('I will donate money provided ____ you give me a receipt.', 'that', ['that', 'if that', 'of', 'to'], ['The pattern is provided that + subject + verb; providing that also works when choosing the whole connector.', 'El patrón es provided that + sujeto + verbo; providing that también sirve como conector completo.']),
    conditions.choose(['Rewrite “If you don’t hurry, we won’t arrive on time” using unless.', 'Reformula «If you don’t hurry, we won’t arrive on time» con unless.'],
      ['Unless you hurry, we won’t arrive on time.', 'Unless you don’t hurry, we won’t arrive on time.', 'Unless you will hurry, we won’t arrive on time.', 'Even if you hurry, we won’t arrive on time.'], 0,
      ['Replace if you don’t hurry with unless you hurry. Do not mechanically keep the original negative.', 'Sustituye if you don’t hurry por unless you hurry. No conserves mecánicamente la negación original.']),
  ],
  'class-vocab-strong-feelings': [
    feelings.match(['uneasy before a speech', 'a satisfying result', 'a bizarre event', 'disgusting food', 'an impressive performance'],
      ['calm', 'unsatisfactory', 'normal', 'delicious', 'mediocre'],
      ['These are contextual opposites from the class sheet, not interchangeable definitions for every use.', 'Son opuestos en los contextos de la hoja de clase, no definiciones intercambiables en todos los usos.']),
    feelings.choose(['Which group has POSITIVE connotations in the class examples?', '¿Qué grupo tiene connotación POSITIVA en los ejemplos de clase?'],
      ['impressive, stunning, satisfying, fabulous', 'creepy, disgusting, irritating, tense', 'uneasy, tense, disgusting, creepy', 'irritating, disgusting, uneasy, bizarre'], 0,
      ['The first group expresses admiration, pleasure, or a good evaluation in these examples.', 'El primer grupo expresa admiración, placer o una valoración favorable en estos ejemplos.']),
    feelings.choose(['Select BOTH words that can mean strange or unusual.', 'Selecciona AMBAS palabras que pueden significar extraño o inusual.'],
      ['bizarre', 'weird', 'satisfying', 'delicious'], [0, 1], ['Bizarre and weird overlap. A single-answer question must not reject one without additional context.', 'Bizarre y weird tienen significados que se solapan. Una pregunta de respuesta única no debe rechazar una sin más contexto.']),
    feelings.choose(['Cross out the word that does NOT fit “I feel ____ before speaking in public” in the sense of being nervous.', 'Descarta la palabra que NO encaja en «I feel ____ before speaking in public» con el sentido de estar nervioso.'],
      ['irritating', 'uneasy', 'tense'], 0,
      ['Uneasy and tense describe nervous feelings. Irritating describes something that causes annoyance; irritated describes the person feeling annoyance.', 'Uneasy y tense describen nervios. Irritating describe algo que causa molestia; irritated describe a quien siente molestia.']),
  ],
  'class-vocab-personality': [
    personality.truth('Only extroverts can enjoy the company of other people or interact with somebody.', false, ['Both introverts and extroverts can enjoy company and interact; these are not exclusive personality tests.', 'Tanto introvertidos como extrovertidos pueden disfrutar de la compañía e interactuar; no son pruebas exclusivas de personalidad.']),
  ],
};

export function extendWithClassNotes(lesson: LessonDef): LessonDef {
  const extra = notesExtensions[lesson.slug];
  return extra ? { ...lesson, exercises: [...lesson.exercises, ...extra] } : lesson;
}

text('lesson.future-forms-and-used-to.intro', [
  '**Future forms:** will for spontaneous decisions and some predictions; be going to for intentions and evidence-based predictions; present continuous for arrangements. **Past habits:** used to + base verb describes former habits or states. Questions: Did you use to…? Negatives: didn’t use to…; without did, never used to. Would + base verb describes repeated past actions in a clear past context, not normally past states. Meaning matters: have a car is a state, have lunch an action. **Be/get used to + noun or -ing** means be/become accustomed. Class words: video calls, text each other, sleep over, bedtime, baggy clothes, life vest, contacts (contact lenses), braces, back brace.',
  '**Futuro:** will para decisiones espontáneas y algunas predicciones; be going to para intenciones y predicciones basadas en indicios; presente continuo para planes acordados. **Hábitos pasados:** used to + verbo base describe hábitos o estados anteriores. Preguntas: Did you use to…? Negativas: didn’t use to…; sin did, never used to. Would + verbo base describe acciones pasadas repetidas en un contexto pasado claro; normalmente no estados pasados. Importa el sentido: have a car es estado, have lunch es acción. **Be/get used to + sustantivo o -ing** significa estar/acostumbrarse. Palabras de clase: video calls, text each other, sleep over, bedtime, baggy clothes, life vest, contacts (lentes de contacto), braces (ortodoncia), back brace (soporte de espalda).',
]);
text('exercise.future-forms-and-used-to.15.explanation', ['Used to have describes the past state of having long hair. Habitual would does not normally describe this continuing past state; this does not ban every action meaning of have.', 'Used to have describe el estado pasado de tener el pelo largo. Would habitual normalmente no describe este estado continuo pasado; esto no prohíbe todos los sentidos de acción de have.']);
text('exercise.future-forms-and-used-to.15.pro_tip', ['Distinguish have as possession from an action such as have lunch every day.', 'Distingue have como posesión de una acción como have lunch every day.']);
text('lesson.reduced-relative-clauses.intro', [
  '**Defining** clauses identify a noun without commas; **non-defining** clauses add information with commas. For reductions by deletion, omit a subject relative pronoun and be: runners who are exhausted → runners exhausted; items that are marked 50% off → items marked 50% off; Myra, who is a polyglot → Myra, a polyglot. Do not delete whose + noun, where, or when by this rule. A clause like who stars has no be to delete; transforming it to an active -ing phrase is a different operation. An object relative in a defining clause can omit its pronoun: the book (that) I read. That is not the same as reducing a subject relative to a participle. Keep essential information next to the correct noun and preserve commas for additional information.',
  '**Defining** identifica un sustantivo sin comas; **non-defining** añade información entre comas. Para reducir por eliminación, omite un pronombre relativo sujeto y be: runners who are exhausted → runners exhausted; items that are marked 50% off → items marked 50% off; Myra, who is a polyglot → Myra, a polyglot. No elimines whose + sustantivo, where ni when mediante esta regla. Who stars no tiene be que eliminar; transformarlo en una frase activa en -ing es otra operación. Una relativa de objeto especificativa puede omitir su pronombre: the book (that) I read. Eso es distinto de reducir una relativa de sujeto a un participio. Mantén la información junto al sustantivo correcto y conserva las comas de la información adicional.',
]);
