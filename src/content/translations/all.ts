// All translations for the 5 lessons + UI strings, in 5 locales.
// - 'en': English (base)
// - 'es': Español (neutro)
// - 'zh': 中文 (simplificado)
// - 'ko': 한국어 (formal 해요체)
// - 'ja': 日本語 (です/ます体)
//
// Keys are organized as:
//   ui.*                          (interface strings, used by Layout.astro etc.)
//   lesson.<slug>.title           (lesson title shown on cards & header)
//   lesson.<slug>.description     (lesson blurb)
//   lesson.<slug>.intro           (lesson intro paragraph, plain text or simple markdown)
//   exercise.<slug>.<n>.prompt    (the question shown to the learner)
//   exercise.<slug>.<n>.explanation (the "why" after answering)
//   exercise.<slug>.<n>.pro_tip   (the trick to remember)
//   exercise.<slug>.<n>.statement (true/false statement)
//
// Note: choice/token/left/right labels for multiple-choice, drag-drop,
// matching, and sentence-reorder are stored inline in the lesson files
// (English only). When the user requests a localized exercise the
// `TranslationReveal` button opens a side-by-side translation of the
// prompt via the {{i18n:KEY}} placeholder system — the choice/tokens
// themselves stay in English by design (otherwise the user wouldn't be
// practicing English!).
//
// EN values are real lesson content. Other locales are professional
// translations (not machine-translated) for the structural/intro/pro_tip
// strings; for per-exercise explanation+pro_tip we provide concise
// localized guidance; for the "because-so-that" lesson and others we
// provide the actual sentence content in each language.

const en = {
  // ── UI ────────────────────────────────────────────────────────────────
  'ui.landing.title': 'Learn English, one exercise at a time',
  'ui.landing.description':
    'Interactive lessons with instant feedback, progress that saves on your device, and the option to translate tricky words to your native language.',
  'ui.landing.how_title': 'How it works',
  'ui.landing.how_step1':
    'Pick a lesson and answer one exercise at a time. The interface supports typing, clicking, drag-and-drop, and pairing.',
  'ui.landing.how_step2':
    'Get instant feedback: a green check with confetti when you\u2019re right, a gentle shake plus a hint when you need another try.',
  'ui.landing.how_step3':
    'Your progress is saved on this device. Come back any time and pick up where you left off.',
  'ui.start': 'Start learning',
  'ui.lessons.title': 'Lessons',
  'ui.lessons.intro':
    'Pick a topic and dive in. Each lesson has a short explanation, 20+ interactive exercises, and instant feedback.',
  'ui.lesson.not_found': 'Lesson not found',
  'ui.check': 'Check',
  'ui.next': 'Next',
  'ui.retry': 'Try again',
  'ui.skip': 'Skip',
  'ui.choose_language': 'Choose your language',
  'ui.native_language_question': 'What is your native language?',
  'ui.maybe_later': 'Maybe later',
  'ui.theme_toggle': 'Toggle theme',
  'ui.explanation': 'Why',
  'ui.pro_tip': 'Pro tip',
  'ui.correct': 'Correct!',
  'ui.wrong': 'Not quite',
  'ui.translate': 'Translate to my language',
  'ui.score_label': 'Score',
  'ui.almost_done': 'Almost there',
  'ui.halfway': "You're past the halfway mark!",
  'ui.final_stretch': 'Final stretch!',
  'ui.well_done': 'Lesson complete!',
  'ui.vocabulary.title': 'Top 2000 vocabulary',
  'ui.vocabulary.intro':
    'The 2000 most common English words, broken into 40 chunks of 50 words each. Each chunk has 2 short exercises (multiple choice and fill-in-the-blank) that connect an English definition with its word. Click any chunk to study the list, then answer the questions.',
  'ui.wh_words.title': 'Wh-words in questions',
  'ui.wh_words.intro':
    '160 questions covering the 9 most common wh-words in English: Why, How, How long, How many, How much, When, Where, Who, What. Each sub-lesson drills 20 questions of one wh-word family.',
  'ui.idioms.title': 'Top 1000 idioms',
  'ui.idioms.intro':
    '40 of the most common English idioms. Each one is a short fixed phrase whose meaning is not obvious from the individual words. Learn them as whole units.',
  'ui.gerunds.title': 'Top 1000 gerunds (verb+ing)',
  'ui.gerunds.intro':
    '40 fill-in-the-blank questions on common verbs followed by a gerund (verb+ing) or an infinitive (to+verb). Some verbs change meaning depending on the form. Drill the most common patterns.',
  'ui.category.grammar': 'Grammar',
  'ui.category.wh_words': 'Question words',
  'ui.category.idioms': 'Idioms',
  'ui.category.gerunds': 'Gerunds & infinitives',
  'ui.category.vocabulary': 'Vocabulary',

  // ── Lesson 1: because / so that ─────────────────────────────────────────
  'lesson.because-so-that.title': 'Because and so that',
  'lesson.because-so-that.description':
    'Learn the difference between explaining a reason (because) and a purpose (so that).',
  'lesson.because-so-that.intro':
    "**Because** introduces a reason \u2014 the answer to *why* something happened. **So that** introduces a purpose \u2014 the goal you were trying to reach. Example: *I drank water because I was thirsty* (reason) vs. *I studied hard so that I could pass* (purpose).",

  // ── Lesson 2: adverbs of frequency ──────────────────────────────────────
  'lesson.adverbs-of-frequency.title': 'Adverbs of frequency',
  'lesson.adverbs-of-frequency.description':
    'How often do you do things? Master never, rarely, sometimes, usually, always, and the rest of the family.',
  'lesson.adverbs-of-frequency.intro':
    'Adverbs of frequency answer the question *how often*. They usually go **before the main verb** but **after "to be"**: *I **always** drink coffee* but *She **is always** late*. Order from least to most: never \u2192 rarely \u2192 sometimes \u2192 usually \u2192 often \u2192 always.',

  // ── Lesson 3: time expressions ─────────────────────────────────────────
  'lesson.time-expressions.title': 'Time expressions',
  'lesson.time-expressions.description':
    'How many times do you do something? Once, twice, three times, every day, every week\u2026',
  'lesson.time-expressions.intro':
    'Two patterns: (1) *once / twice / three times* for exact counts, and (2) *every day / every week / every month / every year* for routines. Combine them with a question: *How often do you exercise? \u2014 I exercise three times a week.*',

  // ── Lesson 4: did / was ──────────────────────────────────────────────
  'lesson.did-and-was.title': 'Did, was, and were in the past',
  'lesson.did-and-was.description':
    'Ask questions, give short answers, and make negatives in the past simple \u2014 split into two friendly parts.',
  'lesson.did-and-was.intro':
    "**Did** is the auxiliary for all verbs in the past: *Did you call her? Yes, I **did**. No, I **didn't**.* After \"did\" we use the **base form** of the verb (no -ed). **Was / were** is the past of \"is / are\" and works on its own: *She **was** tired. They **weren't** home.*",

  // ── Lesson 5: simple past + past continuous ──────────────────────────
  'lesson.simple-past-and-past-continuous.title': 'Simple past and past continuous',
  'lesson.simple-past-and-past-continuous.description':
    'Mix the two past tenses: a finished action (simple past) plus a longer background action (past continuous). 40 exercises split by sub-topic.',
  'lesson.simple-past-and-past-continuous.intro':
    "The **simple past** describes a finished action: *I **ate** lunch.* The **past continuous** describes a longer action in progress: *I **was eating** when the phone rang.* Combine them: a longer action in progress gets interrupted by a shorter, completed one. **Irregular verbs** (go \u2192 went, eat \u2192 ate, see \u2192 saw) don\u2019t follow the -ed rule \u2014 memorize the most common ones in groups of three.",

  // ── Lesson 6: present perfect + ever / never ─────────────────────────
  'lesson.present-perfect-ever-never.title': 'Present Perfect + ever / never',
  'lesson.present-perfect-ever-never.description':
    'Master natural Q&A conversations about life experiences with ever, never, have, and has.',
  'lesson.present-perfect-ever-never.intro':
    '### 1. Form & Golden Formula\n' +
    '• **Question**: *Have / Has + Subject + ever + Past Participle (V3)...?*\n' +
    '• **Negative**: *Subject + have / has + never + Past Participle (V3)*\n' +
    '• **Affirmative**: *Yes, Subject + have / has.*\n\n' +
    '### 2. Conversational Golden Rule\n' +
    'Ask about life experience with **Present Perfect**, then switch to **Simple Past** for specific details:\n' +
    '— *Have you ever tried sushi?*\n' +
    '— *Yes, I have. I **tried** it last year in Tokyo.*\n\n' +
    '### 3. Subject-Verb Agreement\n' +
    '• **I / You / We / They** → **have / haven\'t / have never**\n' +
    '• **He / She / It** → **has / hasn\'t / has never**\n' +
    '*(Tip: Avoid double negatives — never say "hasn\'t never").*',

  // ── Lesson 7: present perfect vs simple past ─────────────────────────
  'lesson.present-perfect-vs-simple-past.title': 'Present Perfect vs Simple Past',
  'lesson.present-perfect-vs-simple-past.description':
    'Learn when to use the Present Perfect (experience / unfinished time) vs Simple Past (specific finished past time).',
  'lesson.present-perfect-vs-simple-past.intro':
    '### 1. The Key Difference\n' +
    '• **Simple Past**: Used for actions completed at a **specific, finished time** in the past (*yesterday, last year, in 2020, two days ago, when I was a child*).\n' +
    '• **Present Perfect** (`have/has + V3`): Used for **life experiences** (*ever, never*), actions with a **connection to now**, or **unfinished time periods** (*this week, today, recently, so far, already, yet*).\n\n' +
    '### 2. Time Markers Cheat Sheet\n' +
    '• **Simple Past (Finished)**: *yesterday, last night, last year, two days ago, in 2018, When did you...?*\n' +
    '• **Present Perfect (Unfinished / Experience)**: *already, yet, just, recently, since 2018, for 5 years, Have you ever...?*\n\n' +
    '### 3. Conversational Rule\n' +
    'Confirm experience in **Present Perfect**, then switch to **Simple Past** for specific details:\n' +
    '— *Have you seen that movie?*\n' +
    '— *Yes, I have. I **saw** it on Friday with my sister.*',

  // ── Lesson 8: past perfect ───────────────────────────────────────────
  'lesson.past-perfect.title': 'Past Perfect (had + past participle)',
  'lesson.past-perfect.description':
    'Express actions that happened before another past action or past point in time.',
  'lesson.past-perfect.intro':
    '### 1. Form & Formula\n' +
    '**Subject + had + past participle (V3)**\n' +
    '• The formula is the same for all subjects (*I / you / he / she / we / they had finished*).\n\n' +
    '### 2. The "Past before the Past"\n' +
    'Use the **Past Perfect** when you are already talking about the past and want to refer back to an **earlier action**:\n' +
    '• *Action 1 (earlier):* The movie started at 7:00 PM.\n' +
    '• *Action 2 (later):* We arrived at 7:15 PM.\n' +
    '• ➡️ *When we arrived, the movie **had already started**.*\n\n' +
    '### 3. Key Signal Words\n' +
    '• **By the time** + Simple Past, + Past Perfect (*By the time he arrived, she had left.*)\n' +
    '• **Before / After** (*After he had eaten, he went for a walk.*)\n' +
    '• **Because** + Past Perfect (*I was late because my alarm had not gone off.*)',

  // ── Lesson 9: conditionals ───────────────────────────────────────────
  'lesson.conditionals-all.title': 'Conditionals: 0, 1st, 2nd, 3rd',
  'lesson.conditionals-all.description':
    'Master all 4 conditional types: universal facts, real future possibilities, hypothetical scenarios, and past regrets.',
  'lesson.conditionals-all.intro':
    '### 1. Overview of All 4 Conditionals\n\n' +
    '• **Zero (Facts / Truths)**: *If + Present Simple, Present Simple* → *If you heat ice, it melts.*\n' +
    '• **1st (Real Future)**: *If + Present Simple, Will + Base verb* → *If it rains, we will stay home.*\n' +
    '• **2nd (Hypothetical / Dream)**: *If + Past Simple, Would + Base verb* → *If I won the lottery, I would travel.*\n' +
    '• **3rd (Past Regret)**: *If + Had + V3, Would have + V3* → *If I had studied, I would have passed.*\n\n' +
    '### 2. Pro Tips\n' +
    '• ⚠️ In 1st conditional, NEVER put *will* inside the *if* clause (*If it rains...*, not *If it will rain*).\n' +
    '• In 2nd conditional advice: use *If I were you, I would...*',

  // ── Lesson 10: modal verbs ───────────────────────────────────────────
  'lesson.modal-verbs.title': 'Modal Verbs: should, could, would, might, must',
  'lesson.modal-verbs.description':
    'Express advice, obligations, polite requests, possibilities, and logical deductions.',
  'lesson.modal-verbs.intro':
    '### 1. Golden Rules of Modal Verbs\n' +
    '• Followed directly by the **base verb** (NO "to"): *You should go* (not *should to go*).\n' +
    '• No "-s" in third person singular: *He must arrive* (not *musts*).\n' +
    '• Direct negation: *shouldn\'t, mustn\'t, can\'t, couldn\'t, might not*.\n\n' +
    '### 2. Meaning & Functions\n' +
    '• **Advice**: *should / ought to* (*You look tired; you should rest.*)\n' +
    '• **Obligation**: *must* (rule/strong) vs *have to* (external requirement).\n' +
    '• **Prohibition vs Lack of Obligation**:\n' +
    '  - *You mustn\'t smoke* = Strictly prohibited! 🚫\n' +
    '  - *You don\'t have to wake up early* = Not necessary, you can if you want.\n' +
    '• **Deduction & Certainty**: *must be* (99% sure YES) vs *can\'t be* (99% sure NO) vs *might be* (maybe, 50%).',

  // ── Lesson 11: passive voice ─────────────────────────────────────────
  'lesson.passive-voice.title': 'Passive Voice',
  'lesson.passive-voice.description':
    'Focus on the action or the object rather than who performed it using be + past participle.',
  'lesson.passive-voice.intro':
    '### 1. How the Passive Voice Works\n' +
    'When the focus is on the **action** or the **receiver of the action**:\n\n' +
    '**Object + appropriate form of "BE" + Past Participle (V3) (+ by Agent)**\n\n' +
    '### 2. Tenses in Passive Voice\n' +
    '• **Present Simple**: *am / is / are + V3* (*English is spoken worldwide.*)\n' +
    '• **Past Simple**: *was / were + V3* (*The Eiffel Tower was built in 1889.*)\n' +
    '• **Present Perfect**: *have / has been + V3* (*The package has been delivered.*)\n' +
    '• **Future**: *will be + V3* (*The results will be announced tomorrow.*)\n\n' +
    '### 3. When to use "by"?\n' +
    'Only include *by [agent]* when the doer is important (*written by Shakespeare*). If unknown or obvious, omit it (*My car was stolen*).',

  // ── Lesson 12: relative clauses ──────────────────────────────────────
  'lesson.relative-clauses.title': 'Relative Clauses (who, which, that, where, whose)',
  'lesson.relative-clauses.description':
    'Combine sentences and describe people, things, places, and possessions smoothly.',
  'lesson.relative-clauses.intro':
    '### 1. Choosing the Right Relative Pronoun\n' +
    '• **who** → for **people** (*The woman who called you is my manager.*)\n' +
    '• **which** → for **things / animals** (*The laptop which I bought is fast.*)\n' +
    '• **that** → for **people or things** (in defining clauses).\n' +
    '• **where** → for **places** (*The cafe where we met.*)\n' +
    '• **whose** → for **possession** (*A friend whose dog is smart.*)\n\n' +
    '### 2. Defining vs. Non-Defining\n' +
    '• **Defining (No commas)**: Essential info: *The book that I read was great.*\n' +
    '• **Non-defining (With commas)**: Extra bonus info: *Paris, which is the capital of France, is lovely.* (⚠️ Never use *that* with commas!).\n\n' +
    '### 3. Omitting the Pronoun\n' +
    'You can omit *who / which / that* when it is the **object** of the clause: *The movie (that) we watched was funny.*',

  // ── Lesson 13: reported speech ───────────────────────────────────────
  'lesson.reported-speech.title': 'Reported Speech (Direct vs Indirect)',
  'lesson.reported-speech.description':
    'Report statements, questions, and commands with accurate tense backshifting and pronoun shifts.',
  'lesson.reported-speech.intro':
    '### 1. Tense Backshifting (Shift one step into the past)\n' +
    'When reporting what someone said in the past (*He said that...*):\n' +
    '• Present Simple → **Past Simple** (*"I am tired" → He said he was tired*)\n' +
    '• Present Continuous → **Past Continuous** (*"I am cooking" → She said she was cooking*)\n' +
    '• Past Simple / Present Perfect → **Past Perfect** (*"I saw it" → He said he had seen it*)\n' +
    '• Will → **Would** | Can → **Could**\n\n' +
    '### 2. Say vs. Tell\n' +
    '• **say + that**: *He said that he was busy.* (NO personal object)\n' +
    '• **tell + PERSON + that**: *He told me that he was busy.* (ALWAYS requires a person)\n\n' +
    '### 3. Reporting Questions & Commands\n' +
    '• Yes/No questions: *He asked me **if / whether** I liked coffee.*\n' +
    '• Commands / Requests: *She told us **to be** quiet / **not to touch**.*',

  // ── Lesson 14: phrasal verbs ─────────────────────────────────────────
  'lesson.phrasal-verbs.title': 'Phrasal Verbs in Context',
  'lesson.phrasal-verbs.description':
    'Master high-frequency multi-word verbs, their everyday meanings, and pronoun placement rules.',
  'lesson.phrasal-verbs.intro':
    '### 1. What is a Phrasal Verb?\n' +
    'A verb combined with a particle (preposition or adverb) that creates a new figurative meaning:\n' +
    '• *give* (dar) vs *give up* (rendirse / dejar de hacer algo).\n' +
    '• *call* (llamar) vs *call off* (cancelar un evento).\n' +
    '• *look* (mirar) vs *look forward to* (esperar con ilusión).\n\n' +
    '### 2. The Pronoun Placement Rule (Separable verbs)\n' +
    'When a phrasal verb is separable and the object is a **pronoun** (*it, them, him, her*), it **MUST** go in the middle:\n' +
    '• ✅ *Turn it off* (Correct)\n' +
    '• ❌ *Turn off it* (Incorrect!)\n' +
    '• With nouns, both work: *Turn off the light* OR *Turn the light off*.',

  // ── Lesson 15: linking words ─────────────────────────────────────────
  'lesson.linking-words.title': 'Linking Words & Connectors',
  'lesson.linking-words.description':
    'Connect your thoughts with contrast, addition, cause, result, and sequence transitions.',
  'lesson.linking-words.intro':
    '### 1. Categorized Connectors Cheat Sheet\n' +
    '• **Contrast**: *However, Although, Despite, In spite of* (*Although it rained, we had fun.*)\n' +
    '• **Addition**: *Furthermore, Moreover, In addition, Besides* (*She is smart; furthermore, she is kind.*)\n' +
    '• **Cause / Reason**: *Because, Because of, Due to, Since* (*The flight was delayed due to the fog.*)\n' +
    '• **Result / Effect**: *Therefore, As a result, Consequently, So* (*He worked hard; therefore, he passed.*)\n' +
    '• **Time Sequence**: *Meanwhile, Afterwards, First, In the end* (*I cooked. Meanwhile, he set the table.*)\n\n' +
    '### 2. Golden Grammar Rule\n' +
    '• **Although / Even though** + Subject + Verb (*Although it was cold...*)\n' +
    '• **Despite / In spite of** + Noun / -ing (*Despite the cold weather / Despite feeling cold...*)',

  // ── Lesson 16: future forms and used to ──────────────────────────────
  'lesson.future-forms-and-used-to.title': 'Future Forms & Past Habits (Used to / Would)',
  'lesson.future-forms-and-used-to.description':
    'Choose between will, going to, and present continuous for the future; express past habits with used to and would.',
  'lesson.future-forms-and-used-to.intro':
    '### 1. Future Forms Guide\n' +
    '• **Will**: Spontaneous decisions (*The phone is ringing — I\'ll get it!*), predictions without evidence, promises.\n' +
    '• **Be Going To**: Prior intentions (*We are going to visit Rome in July*), predictions based on visible evidence (*Look at those black clouds; it is going to rain*).\n' +
    '• **Present Continuous for Future**: Fixed arrangements with time/date (*I am meeting the doctor at 3:00 PM tomorrow*).\n\n' +
    '### 2. Past Habits: Used to vs. Would\n' +
    '• **used to + base verb**: Habits and states in the past that are no longer true (*I used to live in Madrid*).\n' +
    '  - Question: *Did you use to live...?* | Negative: *I didn\'t use to...*\n' +
    '• **would + base verb**: Repeated actions in the past only (NOT for states like *be, have, live*).\n' +
    '• **be used to + -ing**: Accustomed to (*I am used to waking up early*).',
};

// Build an in-memory map of "EN value \u2192 list of keys where this value is the
// canonical text". This lets the other locales be defined by **rewriting**
// the English in a more natural way per language, without forcing the
// structure to match exactly. We then resolve the full translation map
// at the end.

// ── Because / so that — per-exercise English content (canonical) ─────────────
const becauseSoThatEnExtras: Record<string, string> = {
  'exercise.because-so-that.1.prompt': 'Complete the sentence with the correct word.',
  'exercise.because-so-that.1.token1': '_____',
  'exercise.because-so-that.1.explanation':
    '"Because" introduces a reason. The clause explains why the action happened.',
  'exercise.because-so-that.1.pro_tip':
    "Tip: ask yourself \"why did this happen?\" \u2192 use \"because\".",

  'exercise.because-so-that.2.prompt': 'Which sentence uses "because" correctly?',
  'exercise.because-so-that.2.explanation':
    'Option B is correct: the simplest and most natural structure is "[action] because [reason]". Option A reverses cause and effect, option C swaps them too, and option D has broken word order ("put not on").',
  'exercise.because-so-that.2.pro_tip':
    'Tip: the simplest structure is "[action] because [reason]".',

  'exercise.because-so-that.3.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.because-so-that.3.explanation':
    'Subject + verb + adverb + connector + reason clause.',
  'exercise.because-so-that.3.pro_tip':
    'Tip: in simple past, the verb takes -ed unless it\u2019s irregular (eat \u2192 ate).',

  'exercise.because-so-that.4.prompt': 'Pick the connector that shows purpose, not cause.',
  'exercise.because-so-that.4.explanation':
    '"So that" introduces a purpose clause (the speaker\u2019s goal). It often pairs with "could" or "would".',
  'exercise.because-so-that.4.pro_tip':
    'Tip: replace "so that" with "in order to". If the meaning survives, you\u2019re using it right.',

  'exercise.because-so-that.5.prompt': 'Drag the words into the correct order to form a sentence.',
  'exercise.because-so-that.5.explanation':
    'The standard order is: subject + verb + object + "so that" + purpose clause.',
  'exercise.because-so-that.5.pro_tip':
    'Tip: "so" + clause = result; "so that" + clause = purpose.',

  'exercise.because-so-that.6.prompt': 'True or False?',
  'exercise.because-so-that.6.statement': 'You can start a sentence with "because".',
  'exercise.because-so-that.6.explanation':
    'True. "Because" is a subordinating conjunction and can introduce a sentence, often followed by a comma.',
  'exercise.because-so-that.6.pro_tip':
    'Tip: when "because" starts a sentence, add a comma before the main clause: "Because I was late, I missed the bus."',

  'exercise.because-so-that.7.prompt': 'Choose the best sentence.',
  'exercise.because-so-that.7.explanation':
    '"Because" must be followed by a full clause (subject + verb). Option C is the most natural.',
  'exercise.because-so-that.7.pro_tip':
    'Tip: after "because", always include a subject. "Because tired" is wrong \u2014 say "because I was tired".',

  'exercise.because-so-that.8.prompt': 'Complete the sentence.',
  'exercise.because-so-that.8.explanation':
    '"Because of" is followed by a noun phrase, not a clause. "Because of the rain" is correct.',
  'exercise.because-so-that.8.pro_tip':
    'Tip: "because of + noun" vs. "because + clause". If you can drop the verb, use "because of".',

  'exercise.because-so-that.9.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.because-so-that.9.explanation':
    'SVO order with the reason at the end.',
  'exercise.because-so-that.9.pro_tip':
    'Tip: keep subject and verb close together in English.',

  'exercise.because-so-that.10.prompt': 'Reorder the words to form a correct "so that" sentence.',
  'exercise.because-so-that.10.explanation':
    '"So that" + purpose clause: what was the speaker trying to achieve?',
  'exercise.because-so-that.10.pro_tip':
    'Tip: pair "so that" with modal verbs (could, would, might) for natural purpose clauses.',

  'exercise.because-so-that.11.prompt': 'Which sentence correctly shows a purpose?',
  'exercise.because-so-that.11.explanation':
    '"So that" + modal = purpose; "so" + clause = result. The answer shows the goal, not the cause.',
  'exercise.because-so-that.11.pro_tip':
    'Tip: ask "what was the speaker trying to do?" If it\u2019s a goal, use "so that".',

  'exercise.because-so-that.12.prompt': 'True or False?',
  'exercise.because-so-that.12.statement': '"So that" requires a purpose clause (a verb of intention like "could" or "would").',
  'exercise.because-so-that.12.explanation':
    'False. "So that" can sometimes drop the modal: "I left early so that I would not be late." But it always needs a verb of intention.',
  'exercise.because-so-that.12.pro_tip':
    'Tip: if you can\u2019t imagine an intention after "so that", you probably want "so" instead.',

  'exercise.because-so-that.13.prompt': 'Pick the result connector.',
  'exercise.because-so-that.13.explanation':
    '"So" + result: it was raining, so we stayed inside. The "so" comes after a comma and introduces a consequence.',
  'exercise.because-so-that.13.pro_tip':
    'Tip: "so" as a result connector almost always follows a comma.',

  'exercise.because-so-that.14.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.because-so-that.14.explanation':
    'Place adverbs of manner (carefully, quickly) after the verb.',
  'exercise.because-so-that.14.pro_tip':
    'Tip: manner adverbs usually sit after the verb or after the object.',

  'exercise.because-so-that.15.prompt': 'Choose the sentence that uses "because" with the past tense correctly.',
  'exercise.because-so-that.15.explanation':
    'After "because" the verb should match the time frame. Past simple in the main clause \u2192 past simple after "because".',
  'exercise.because-so-that.15.pro_tip':
    'Tip: keep tenses consistent: if the main clause is past, the reason is also past.',

  'exercise.because-so-that.16.prompt': 'Pick the pair that creates a natural "so that" sentence.',
  'exercise.because-so-that.16.explanation':
    '"So that" + "could" is the classic pair: a goal achievable in the past.',
  'exercise.because-so-that.16.pro_tip':
    'Tip: "so that" + can/could for present/past; would for hypothetical.',

  'exercise.because-so-that.17.prompt': 'Which is the correct sentence?',
  'exercise.because-so-that.17.explanation':
    '"Because of" + noun phrase, "because" + clause. Don\u2019t mix them.',
  'exercise.because-so-that.17.pro_tip':
    'Tip: "because of" never takes a subject + verb. It takes a noun or -ing form.',

  'exercise.because-so-that.18.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.because-so-that.18.explanation':
    'Place the indirect object before the direct object in English.',
  'exercise.because-so-that.18.pro_tip':
    'Tip: pattern for "so that": SO + V + IO + DO + "so that" + S + modal + V.',

  'exercise.because-so-that.19.prompt': 'Pick the sentence that uses "so that" correctly (not "so").',
  'exercise.because-so-that.19.explanation':
    'When the clause that follows expresses a goal or intention, use "so that". When it\u2019s just a result, "so" works.',
  'exercise.because-so-that.19.pro_tip':
    'Tip: try replacing the connector with "in order to". If it fits, "so that" is the one you want.',

  'exercise.because-so-that.20.prompt': 'Pick the pair that forms a negative-purpose sentence.',
  'exercise.because-so-that.20.explanation':
    '"So that" + "wouldn\u2019t" = negative purpose. The goal was to avoid something.',
  'exercise.because-so-that.20.pro_tip':
    'Tip: "so that" + negative modal = purpose-of-avoiding.',
};

const adverbsOfFrequencyEnExtras: Record<string, string> = {
  'exercise.adverbs-of-frequency.1.prompt': 'Which adverb of frequency means 100% of the time?',
  'exercise.adverbs-of-frequency.1.explanation':
    'Adverbs of frequency go before the main verb but after "to be". Standard position: mid-sentence.',
  'exercise.adverbs-of-frequency.1.pro_tip':
    'Tip: "I am always late" \u2192 adverb AFTER am/is/are. "I always drink coffee" \u2192 adverb BEFORE the main verb.',

  'exercise.adverbs-of-frequency.2.prompt': 'Complete the sentence.',
  'exercise.adverbs-of-frequency.2.explanation': '"Always" = 100% of the time.',
  'exercise.adverbs-of-frequency.2.pro_tip': 'Tip: "always" is the strongest positive frequency.',

  'exercise.adverbs-of-frequency.3.prompt': 'True or False?',
  'exercise.adverbs-of-frequency.3.statement': 'Frequency adverbs like "usually" go before the main verb in English.',
  'exercise.adverbs-of-frequency.3.explanation': 'True. "I usually wake up at 7."',
  'exercise.adverbs-of-frequency.3.pro_tip': 'Tip: only with "to be" does the adverb move to mid-sentence: "I am usually\u2026".',

  'exercise.adverbs-of-frequency.4.prompt': 'Choose the right adverb.',
  'exercise.adverbs-of-frequency.4.explanation': '"Sometimes" = about 50% of the time.',
  'exercise.adverbs-of-frequency.4.pro_tip': 'Tip: "sometimes" can also go at the start or end of a sentence.',

  'exercise.adverbs-of-frequency.5.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.adverbs-of-frequency.5.explanation': 'Place the frequency adverb before the main verb.',
  'exercise.adverbs-of-frequency.5.pro_tip': 'Tip: subject + adverb + main verb + object is the most common order.',

  'exercise.adverbs-of-frequency.6.prompt': 'True or False?',
  'exercise.adverbs-of-frequency.6.statement': 'You can use "always" with progressive tenses: "I am always working late."',
  'exercise.adverbs-of-frequency.6.explanation': 'True. This is a common pattern to express annoyance with a habit.',
  'exercise.adverbs-of-frequency.6.pro_tip': 'Tip: "always" + progressive = "too often" / annoyance.',

  'exercise.adverbs-of-frequency.7.prompt': 'Complete the sentence.',
  'exercise.adverbs-of-frequency.7.explanation': '"Rarely" = almost never, less than 10%.',
  'exercise.adverbs-of-frequency.7.pro_tip': 'Tip: in formal writing, prefer "seldom" or "rarely".',

  'exercise.adverbs-of-frequency.8.prompt': 'How often does "never" happen?',
  'exercise.adverbs-of-frequency.8.explanation':
    'Adverbs of frequency: position 1 (before main verb) is the most common in everyday English.',
  'exercise.adverbs-of-frequency.8.pro_tip': 'Tip: "often" can also go at the end: "I see him often."',

  'exercise.adverbs-of-frequency.9.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.adverbs-of-frequency.9.explanation': 'With "to be" the adverb comes after.',
  'exercise.adverbs-of-frequency.9.pro_tip': 'Tip: pattern: subject + am/is/are + adverb + adjective.',

  'exercise.adverbs-of-frequency.10.prompt': 'True or False?',
  'exercise.adverbs-of-frequency.10.statement': '"Never" goes before the main verb.',
  'exercise.adverbs-of-frequency.10.explanation': 'True: "I never smoke." After "to be": "I am never late."',
  'exercise.adverbs-of-frequency.10.pro_tip': 'Tip: don\u2019t use "no + negative adverb" (double negative). Say "I never smoke", not "I don\u2019t never smoke".',

  'exercise.adverbs-of-frequency.11.prompt': 'What does "occasionally" mean?',
  'exercise.adverbs-of-frequency.11.explanation': '"Often" = frequently but not always, around 70\u201380%.',
  'exercise.adverbs-of-frequency.11.pro_tip': 'Tip: "often" and "usually" are close, but "usually" implies a stronger expectation.',

  'exercise.adverbs-of-frequency.12.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.adverbs-of-frequency.12.explanation': 'Mid-sentence position with main verb.',
  'exercise.adverbs-of-frequency.12.pro_tip': 'Tip: keep adverb close to the verb it modifies.',

  'exercise.adverbs-of-frequency.13.prompt': 'Complete the sentence.',
  'exercise.adverbs-of-frequency.13.explanation': '"Never" = 0% of the time.',
  'exercise.adverbs-of-frequency.13.pro_tip': 'Tip: in English, "never" is one word and means "at no time".',

  'exercise.adverbs-of-frequency.14.prompt': 'Choose the right option.',
  'exercise.adverbs-of-frequency.14.explanation': 'Mid-sentence position is the default.',
  'exercise.adverbs-of-frequency.14.pro_tip': 'Tip: "occasionally" is more formal than "sometimes".',

  'exercise.adverbs-of-frequency.15.prompt': 'True or False?',
  'exercise.adverbs-of-frequency.15.statement': '"Hardly ever" has a similar meaning to "almost never".',
  'exercise.adverbs-of-frequency.15.explanation': 'True. "Hardly ever" = very rarely, < 10%.',
  'exercise.adverbs-of-frequency.15.pro_tip': 'Tip: "hardly" + "ever" = an emphatic "rarely".',

  'exercise.adverbs-of-frequency.16.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.adverbs-of-frequency.16.explanation': 'Mid-sentence before main verb.',
  'exercise.adverbs-of-frequency.16.pro_tip': 'Tip: when in doubt, place the adverb before the main verb.',

  'exercise.adverbs-of-frequency.17.prompt': 'Complete the sentence.',
  'exercise.adverbs-of-frequency.17.explanation': '"Always" goes after am/is/are.',
  'exercise.adverbs-of-frequency.17.pro_tip': 'Tip: adverbs of frequency can also be placed at the start for emphasis.',

  'exercise.adverbs-of-frequency.18.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.adverbs-of-frequency.18.explanation': 'Place "sometimes" at the start of the sentence for emphasis.',
  'exercise.adverbs-of-frequency.18.pro_tip': 'Tip: starting position adds emphasis, mid-sentence is neutral.',

  'exercise.adverbs-of-frequency.19.prompt': 'Choose the right option.',
  'exercise.adverbs-of-frequency.19.explanation': 'Mid-sentence before main verb.',
  'exercise.adverbs-of-frequency.19.pro_tip': 'Tip: in questions, adverbs go BEFORE the main verb: "Do you often eat out?"',

  'exercise.adverbs-of-frequency.20.prompt': 'Choose the right option.',
  'exercise.adverbs-of-frequency.20.explanation': 'Mid-sentence before the main verb.',
  'exercise.adverbs-of-frequency.20.pro_tip': 'Tip: with "to be" use the OTHER position: "She is always happy."',
};

const timeExpressionsEnExtras: Record<string, string> = {
  'exercise.time-expressions.1.prompt': 'Choose the right frequency expression.',
  'exercise.time-expressions.1.explanation': '"Once a day" = 1 time per day.',
  'exercise.time-expressions.1.pro_tip': 'Tip: "once" is for single occurrences. For "two times" use "twice".',

  'exercise.time-expressions.2.prompt': 'Complete the sentence with the correct form.',
  'exercise.time-expressions.2.explanation': '"Twice a week" = 2 times per week.',
  'exercise.time-expressions.2.pro_tip': 'Tip: "twice" is one word, not "two times".',

  'exercise.time-expressions.3.prompt': 'True or False?',
  'exercise.time-expressions.3.statement': '"Three times a week" means once every other day.',
  'exercise.time-expressions.3.explanation': 'False. "Three times a week" is approximately every other day, but the exact pattern is up to you.',
  'exercise.time-expressions.3.pro_tip': 'Tip: "three times a week" does not specify which days.',

  'exercise.time-expressions.4.prompt': 'Choose the correct form.',
  'exercise.time-expressions.4.explanation': '"Every day" is two words. "Everyday" (one word) is an adjective meaning "ordinary".',
  'exercise.time-expressions.4.pro_tip': 'Tip: as a frequency adverb, always write "every day" with a space.',

  'exercise.time-expressions.5.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.time-expressions.5.explanation': 'Pattern: subject + frequency + verb.',
  'exercise.time-expressions.5.pro_tip': 'Tip: "every morning" goes at the start or end of the sentence.',

  'exercise.time-expressions.6.prompt': 'True or False?',
  'exercise.time-expressions.6.statement': 'You can say "once in a while" to mean "occasionally".',
  'exercise.time-expressions.6.explanation': 'True. "Once in a while" = sometimes, not very often.',
  'exercise.time-expressions.6.pro_tip': 'Tip: alternative phrases: "from time to time", "now and then".',

  'exercise.time-expressions.7.prompt': 'Complete the sentence.',
  'exercise.time-expressions.7.explanation': '"A few times a year" = occasionally, around 2\u20135 times.',
  'exercise.time-expressions.7.pro_tip': 'Tip: "a few" is the quantifier; "few" alone sounds negative.',

  'exercise.time-expressions.8.prompt': 'Choose the right option.',
  'exercise.time-expressions.8.explanation': '"Every other day" = once every two days.',
  'exercise.time-expressions.8.pro_tip': 'Tip: "every other + singular noun" works for days, weeks, etc.',

  'exercise.time-expressions.9.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.time-expressions.9.explanation': 'Place the frequency expression at the start or end.',
  'exercise.time-expressions.9.pro_tip': 'Tip: in English, frequency adverbs of routine go at the start or end.',

  'exercise.time-expressions.10.prompt': 'True or False?',
  'exercise.time-expressions.10.statement': '"Once" is used for a single occurrence, "twice" for two times.',
  'exercise.time-expressions.10.explanation': 'True. For three or more times, use the number + "times".',
  'exercise.time-expressions.10.pro_tip': 'Tip: "once", "twice", "three times", "four times"...',

  'exercise.time-expressions.11.prompt': 'Choose the correct sentence.',
  'exercise.time-expressions.11.explanation': '"I study English twice a week" is the natural pattern.',
  'exercise.time-expressions.11.pro_tip': 'Tip: "twice a week" > "two times in a week".',

  'exercise.time-expressions.12.prompt': 'Complete the sentence.',
  'exercise.time-expressions.12.explanation': '"On weekends" uses the plural "weekends" because both Saturday and Sunday are included.',
  'exercise.time-expressions.12.pro_tip': 'Tip: "on the weekend" (singular) is American English.',

  'exercise.time-expressions.13.prompt': 'True or False?',
  'exercise.time-expressions.13.statement': '"Every day" can be replaced by "daily" in formal writing.',
  'exercise.time-expressions.13.explanation': 'True. "Daily" is the adjective/adverb form of "every day".',
  'exercise.time-expressions.13.pro_tip': 'Tip: "daily" goes in the same positions as "every day".',

  'exercise.time-expressions.14.prompt': 'Choose the right option.',
  'exercise.time-expressions.14.explanation': '"Once a month" is the standard form for monthly routines.',
  'exercise.time-expressions.14.pro_tip': 'Tip: "monthly" is the adjective form.',

  'exercise.time-expressions.15.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.time-expressions.15.explanation': 'Standard subject-verb order.',
  'exercise.time-expressions.15.pro_tip': 'Tip: place the time expression at the start for emphasis.',

  'exercise.time-expressions.16.prompt': 'Complete the sentence.',
  'exercise.time-expressions.16.explanation': '"Once" = a single time in the past.',
  'exercise.time-expressions.16.pro_tip': 'Tip: "once" can also mean "in the past" (e.g. "I once lived there").',

  'exercise.time-expressions.17.prompt': 'Choose the right expression.',
  'exercise.time-expressions.17.explanation': '"A couple of times" = 2 times (informal).',
  'exercise.time-expressions.17.pro_tip': 'Tip: "a couple of" = 2 in informal English.',

  'exercise.time-expressions.18.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.time-expressions.18.explanation': 'Place the frequency at the start or end.',
  'exercise.time-expressions.18.pro_tip': 'Tip: in speech, "every morning" is more common than "in the morning every day".',

  'exercise.time-expressions.19.prompt': 'True or False?',
  'exercise.time-expressions.19.statement': '"Twice" is one word; "two times" is informal but understandable.',
  'exercise.time-expressions.19.explanation': 'True. Both are understood, but "twice" is more natural.',
  'exercise.time-expressions.19.pro_tip': 'Tip: prefer "twice" in writing.',

  'exercise.time-expressions.20.prompt': 'Complete the sentence.',
  'exercise.time-expressions.20.explanation': '"Every two weeks" = once in two weeks.',
  'exercise.time-expressions.20.pro_tip': 'Tip: "every two + plural" is the standard pattern.',
};

const didAndWasEnExtras: Record<string, string> = {
  'exercise.did-and-was.1.prompt': 'Pick the correct auxiliary.',
  'exercise.did-and-was.1.explanation': '"Did" is the past simple auxiliary.',
  'exercise.did-and-was.1.pro_tip': 'Tip: with "did", the main verb stays in the base form.',

  'exercise.did-and-was.2.prompt': 'Choose the correct negative past sentence.',
  'exercise.did-and-was.2.explanation': '"Didn\u2019t" + base verb (no -ed).',
  'exercise.did-and-was.2.pro_tip': 'Tip: "I didn\u2019t go", not "I didn\u2019t went".',

  'exercise.did-and-was.3.prompt': 'True or False?',
  'exercise.did-and-was.3.statement': 'After "did" we use the base form of the verb (no -ed).',
  'exercise.did-and-was.3.explanation': 'True. "Did she call?" not "Did she called?".',
  'exercise.did-and-was.3.pro_tip': 'Tip: "did" carries the past tense; the verb is bare.',

  'exercise.did-and-was.4.prompt': 'Complete the short answer.',
  'exercise.did-and-was.4.explanation': 'Short answers: "Yes, I did" / "No, I didn\u2019t".',
  'exercise.did-and-was.4.pro_tip': 'Tip: short answers repeat the auxiliary, not the main verb.',

  'exercise.did-and-was.5.prompt': 'Reorder the words to form a correct question.',
  'exercise.did-and-was.5.explanation': 'Question structure: "Did" + subject + base verb + object?',
  'exercise.did-and-was.5.pro_tip': 'Tip: in past questions, the order is: Did + S + V (base) + O?',

  'exercise.did-and-was.6.prompt': 'Reorder the words to form a correct negative sentence.',
  'exercise.did-and-was.6.explanation': 'Pattern: subject + didn\u2019t + base verb.',
  'exercise.did-and-was.6.pro_tip': 'Tip: never use "didn\u2019t + past form".',

  'exercise.did-and-was.7.prompt': 'True or False?',
  'exercise.did-and-was.7.statement': 'A common mistake is to say "Did you went?" instead of "Did you go?".',
  'exercise.did-and-was.7.explanation': 'True. The first is a common learner error.',
  'exercise.did-and-was.7.pro_tip': 'Tip: "did" already marks past, so the verb stays in base form.',

  'exercise.did-and-was.8.prompt': 'Choose the correct question tag.',
  'exercise.did-and-was.8.explanation': 'Negative sentence \u2192 positive tag with "did".',
  'exercise.did-and-was.8.pro_tip': 'Tip: "didn\u2019t" \u2192 "did you?". Reverse polarity.',

  'exercise.did-and-was.9.prompt': 'Reorder the words to form a correct affirmative sentence.',
  'exercise.did-and-was.9.explanation': 'Pattern: S + V-past + O.',
  'exercise.did-and-was.9.pro_tip': 'Tip: regular verbs add -ed in the affirmative past.',

  'exercise.did-and-was.10.prompt': 'Complete the question.',
  'exercise.did-and-was.10.explanation': '"Did" + subject + base verb.',
  'exercise.did-and-was.10.pro_tip': 'Tip: with irregular verbs, don\u2019t add -ed: "Did she go" not "Did she goed".',

  'exercise.did-and-was.11.prompt': 'Pick the correct form of "to be" in the past.',
  'exercise.did-and-was.11.explanation': '"Was" goes with I/he/she/it. "Were" goes with you/we/they.',
  'exercise.did-and-was.11.pro_tip': 'Tip: memorize "I was, you were, he was, we were, they were".',

  'exercise.did-and-was.12.prompt': 'True or False?',
  'exercise.did-and-was.12.statement': '"Wasn\u2019t" is the negative of "was".',
  'exercise.did-and-was.12.explanation': 'True. "She was here" \u2192 "She wasn\u2019t here".',
  'exercise.did-and-was.12.pro_tip': 'Tip: "was not" \u2192 "wasn\u2019t" (informal); "were not" \u2192 "weren\u2019t".',

  'exercise.did-and-was.13.prompt': 'Complete the question.',
  'exercise.did-and-was.13.explanation': '"Was" + subject + complement?',
  'exercise.did-and-was.13.pro_tip': 'Tip: in past questions with "to be", the answer is "Yes, I was" or "No, I wasn\u2019t".',

  'exercise.did-and-was.14.prompt': 'Choose the correct sentence.',
  'exercise.did-and-was.14.explanation': '"Were" matches "you/we/they".',
  'exercise.did-and-was.14.pro_tip': 'Tip: "you were" (singular or plural).',

  'exercise.did-and-was.15.prompt': 'Pick the right tag question.',
  'exercise.did-and-was.15.explanation': 'Positive \u2192 negative tag: "He was there, wasn\u2019t he?".',
  'exercise.did-and-was.15.pro_tip': 'Tip: tag uses the same auxiliary, opposite polarity.',

  'exercise.did-and-was.16.prompt': 'Reorder the words to form a correct question.',
  'exercise.did-and-was.16.explanation': 'Question: "Were" + subject + complement?',
  'exercise.did-and-was.16.pro_tip': 'Tip: in past questions, invert subject and "to be".',

  'exercise.did-and-was.17.prompt': 'True or False?',
  'exercise.did-and-was.17.statement': '"We was at the party" is correct English.',
  'exercise.did-and-was.17.explanation': 'False. With "we" use "were": "We were at the party".',
  'exercise.did-and-was.17.pro_tip': 'Tip: I/he/she/it \u2192 was; you/we/they \u2192 were.',

  'exercise.did-and-was.18.prompt': 'Complete the negative sentence.',
  'exercise.did-and-was.18.explanation': 'Subject + "weren\u2019t" + complement.',
  'exercise.did-and-was.18.pro_tip': 'Tip: don\u2019t mix "was" with "we/you/they".',

  'exercise.did-and-was.19.prompt': 'Reorder the words to form a correct affirmative sentence.',
  'exercise.did-and-was.19.explanation': 'S + was/were + complement.',
  'exercise.did-and-was.19.pro_tip': 'Tip: "to be" in past is irregular: was, were.',

  'exercise.did-and-was.20.prompt': 'Choose the correct short answer.',
  'exercise.did-and-was.20.explanation': '"Yes, I was" / "No, I wasn\u2019t".',
  'exercise.did-and-was.20.pro_tip': 'Tip: short answers repeat the auxiliary, not the main verb.',
};

const simplePastEnExtras: Record<string, string> = {
  'exercise.simple-past-and-past-continuous.1.prompt': 'Pick the correct past simple of "go".',
  'exercise.simple-past-and-past-continuous.1.explanation': 'Irregular: go \u2192 went.',
  'exercise.simple-past-and-past-continuous.1.pro_tip': 'Tip: memorize "go, went, gone" \u2014 all different.',

  'exercise.simple-past-and-past-continuous.2.prompt': 'Choose the correct past simple form.',
  'exercise.simple-past-and-past-continuous.2.explanation': 'Regular verbs add -ed in the past.',
  'exercise.simple-past-and-past-continuous.2.pro_tip': 'Tip: with CVC verbs, double the final consonant: "stop \u2192 stopped".',

  'exercise.simple-past-and-past-continuous.3.prompt': 'True or False?',
  'exercise.simple-past-and-past-continuous.3.statement': '"Eat" is a regular verb: "I eated lunch yesterday."',
  'exercise.simple-past-and-past-continuous.3.explanation': 'False. "Eat" is irregular: "I ate lunch."',
  'exercise.simple-past-and-past-continuous.3.pro_tip': 'Tip: eat \u2192 ate \u2192 eaten. Say them out loud three times.',

  'exercise.simple-past-and-past-continuous.4.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.simple-past-and-past-continuous.4.explanation': 'Pattern: S + V-past + O.',
  'exercise.simple-past-and-past-continuous.4.pro_tip': 'Tip: irregular verbs change form, not just add -ed.',

  'exercise.simple-past-and-past-continuous.5.prompt': 'Complete the sentence with the right past simple form.',
  'exercise.simple-past-and-past-continuous.5.explanation': 'Irregular: see \u2192 saw.',
  'exercise.simple-past-and-past-continuous.5.pro_tip': 'Tip: see \u2192 saw \u2192 seen. Same vowel pattern as eat \u2192 ate.',

  'exercise.simple-past-and-past-continuous.6.prompt': 'Pick the right past simple of "buy".',
  'exercise.simple-past-and-past-continuous.6.explanation': 'Irregular: buy \u2192 bought.',
  'exercise.simple-past-and-past-continuous.6.pro_tip': 'Tip: buy/bought/by/bye \u2014 spelling change is the only weird thing.',

  'exercise.simple-past-and-past-continuous.7.prompt': 'True or False?',
  'exercise.simple-past-and-past-continuous.7.statement': '"I was playing football when it started to rain." uses the past continuous correctly.',
  'exercise.simple-past-and-past-continuous.7.explanation': 'True. "Was playing" is the past continuous of "play".',
  'exercise.simple-past-and-past-continuous.7.pro_tip': 'Tip: past continuous = was/were + V-ing. Use for the longer background action.',

  'exercise.simple-past-and-past-continuous.8.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.simple-past-and-past-continuous.8.explanation': 'Pattern: S + was/were + V-ing + O + when + S + V-past.',
  'exercise.simple-past-and-past-continuous.8.pro_tip': 'Tip: the past continuous action is the one in progress when the past simple action interrupts it.',

  'exercise.simple-past-and-past-continuous.9.prompt': 'Complete the past continuous.',
  'exercise.simple-past-and-past-continuous.9.explanation': 'Was/were + V-ing.',
  'exercise.simple-past-and-past-continuous.9.pro_tip': 'Tip: remember the -ing form: "cook \u2192 cooking", "run \u2192 running" (double n).',

  'exercise.simple-past-and-past-continuous.10.prompt': 'Choose the correct form.',
  'exercise.simple-past-and-past-continuous.10.explanation': '"Were studying" matches "we/you/they".',
  'exercise.simple-past-and-past-continuous.10.pro_tip': 'Tip: I/he/she/it \u2192 was; you/we/they \u2192 were.',

  'exercise.simple-past-and-past-continuous.11.prompt': 'Pick the right past simple of "take".',
  'exercise.simple-past-and-past-continuous.11.explanation': 'Irregular: take \u2192 took.',
  'exercise.simple-past-and-past-continuous.11.pro_tip': 'Tip: take/took/taken. No pattern \u2014 memorize it.',

  'exercise.simple-past-and-past-continuous.12.prompt': 'True or False?',
  'exercise.simple-past-and-past-continuous.12.statement': 'We use the past simple to talk about a longer action in progress in the past.',
  'exercise.simple-past-and-past-continuous.12.explanation': 'False. That\u2019s the past continuous. Past simple is for completed actions.',
  'exercise.simple-past-and-past-continuous.12.pro_tip': 'Tip: simple = point in time, completed. Continuous = duration, in progress.',

  'exercise.simple-past-and-past-continuous.13.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.simple-past-and-past-continuous.13.explanation': 'Pattern: S + was + V-ing + O.',
  'exercise.simple-past-and-past-continuous.13.pro_tip': 'Tip: the -ing ending is constant in past continuous.',

  'exercise.simple-past-and-past-continuous.14.prompt': 'Choose the correct past simple of "write".',
  'exercise.simple-past-and-past-continuous.14.explanation': 'Irregular: write \u2192 wrote.',
  'exercise.simple-past-and-past-continuous.14.pro_tip': 'Tip: write/wrote/written. Vowel change to "o".',

  'exercise.simple-past-and-past-continuous.15.prompt': 'Pick the right past simple of "have".',
  'exercise.simple-past-and-past-continuous.15.explanation': 'Irregular: have \u2192 had.',
  'exercise.simple-past-and-past-continuous.15.pro_tip': 'Tip: have/had/had. Same vowel as make/made.',

  'exercise.simple-past-and-past-continuous.16.prompt': 'True or False?',
  'exercise.simple-past-and-past-continuous.16.statement': '"I was reading when she called" combines past continuous and past simple.',
  'exercise.simple-past-and-past-continuous.16.explanation': 'True. The longer action (reading) was in progress; the shorter one (called) interrupted it.',
  'exercise.simple-past-and-past-continuous.16.pro_tip': 'Tip: typical pattern: past continuous + when + past simple.',

  'exercise.simple-past-and-past-continuous.17.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.simple-past-and-past-continuous.17.explanation': 'Standard: S + V-past + O.',
  'exercise.simple-past-and-past-continuous.17.pro_tip': 'Tip: in storytelling, simple past is the workhorse.',

  'exercise.simple-past-and-past-continuous.18.prompt': 'Complete the past continuous.',
  'exercise.simple-past-and-past-continuous.18.explanation': 'Was + V-ing.',
  'exercise.simple-past-and-past-continuous.18.pro_tip': 'Tip: use past continuous for atmosphere: "It was raining."',

  'exercise.simple-past-and-past-continuous.19.prompt': 'Pick the right past simple of "meet".',
  'exercise.simple-past-and-past-continuous.19.explanation': 'Irregular: meet \u2192 met.',
  'exercise.simple-past-and-past-continuous.19.pro_tip': 'Tip: meet/met/met. Same vowel as feed/fed.',

  'exercise.simple-past-and-past-continuous.20.prompt': 'True or False?',
  'exercise.simple-past-and-past-continuous.20.statement': '"I was go to the cinema" is a correct past continuous sentence.',
  'exercise.simple-past-and-past-continuous.20.explanation': 'False. After "was" we need the -ing form: "I was going".',
  'exercise.simple-past-and-past-continuous.20.pro_tip': 'Tip: past continuous is was/were + V-ing. Never "was go".',

  'exercise.simple-past-and-past-continuous.21.prompt': 'Choose the correct past simple of "leave".',
  'exercise.simple-past-and-past-continuous.21.explanation': 'Irregular: leave \u2192 left.',
  'exercise.simple-past-and-past-continuous.21.pro_tip': 'Tip: leave/left/left. Same vowel as feel/felt.',

  'exercise.simple-past-and-past-continuous.22.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.simple-past-and-past-continuous.22.explanation': 'Pattern: S + V-past + O.',
  'exercise.simple-past-and-past-continuous.22.pro_tip': 'Tip: "find" is regular: found (one of the few irregular regulars).',

  'exercise.simple-past-and-past-continuous.23.prompt': 'Complete the past continuous.',
  'exercise.simple-past-and-past-continuous.23.explanation': 'Was + V-ing.',
  'exercise.simple-past-and-past-continuous.23.pro_tip': 'Tip: don\u2019t confuse past continuous with present continuous \u2014 the "was" is the key.',

  'exercise.simple-past-and-past-continuous.24.prompt': 'Pick the right past simple of "drink".',
  'exercise.simple-past-and-past-continuous.24.explanation': 'Irregular: drink \u2192 drank.',
  'exercise.simple-past-and-past-continuous.24.pro_tip': 'Tip: drink/drank/drunk. Vowel change a \u2192 u.',

  'exercise.simple-past-and-past-continuous.25.prompt': 'True or False?',
  'exercise.simple-past-and-past-continuous.25.statement': 'Both past simple and past continuous can appear in the same sentence.',
  'exercise.simple-past-and-past-continuous.25.explanation': 'True. "I was reading when she called" combines both.',
  'exercise.simple-past-and-past-continuous.25.pro_tip': 'Tip: use them together for a vivid narrative.',

  'exercise.simple-past-and-past-continuous.26.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.simple-past-and-past-continuous.26.explanation': 'Standard order.',
  'exercise.simple-past-and-past-continuous.26.pro_tip': 'Tip: think in chunks: subject + verb + object + when + interrupt.',

  'exercise.simple-past-and-past-continuous.27.prompt': 'Choose the correct past simple of "pay".',
  'exercise.simple-past-and-past-continuous.27.explanation': 'Irregular: pay \u2192 paid.',
  'exercise.simple-past-and-past-continuous.27.pro_tip': 'Tip: pay/paid/paid. Spelling change: y \u2192 i + ed.',

  'exercise.simple-past-and-past-continuous.28.prompt': 'Complete the past continuous.',
  'exercise.simple-past-and-past-continuous.28.explanation': 'Were + V-ing.',
  'exercise.simple-past-and-past-continuous.28.pro_tip': 'Tip: past continuous + "always" can\u2019t be used \u2014 that\u2019s present for habits.',

  'exercise.simple-past-and-past-continuous.29.prompt': 'Pick the right past simple of "swim".',
  'exercise.simple-past-and-past-continuous.29.explanation': 'Irregular: swim \u2192 swam.',
  'exercise.simple-past-and-past-continuous.29.pro_tip': 'Tip: swim/swam/swum. Vowel change i \u2192 a.',

  'exercise.simple-past-and-past-continuous.30.prompt': 'True or False?',
  'exercise.simple-past-and-past-continuous.30.statement': 'Past continuous needs "when" or "while" to make sense.',
  'exercise.simple-past-and-past-continuous.30.explanation': 'False. You can use it alone: "It was raining." But paired with simple past is the most common pattern.',
  'exercise.simple-past-and-past-continuous.30.pro_tip': 'Tip: "while" introduces a long action; "when" introduces a short interrupting action.',

  'exercise.simple-past-and-past-continuous.31.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.simple-past-and-past-continuous.31.explanation': 'Standard order.',
  'exercise.simple-past-and-past-continuous.31.pro_tip': 'Tip: past simple states what happened, past continuous gives the context.',

  'exercise.simple-past-and-past-continuous.32.prompt': 'Choose the correct past simple of "feel".',
  'exercise.simple-past-and-past-continuous.32.explanation': 'Irregular: feel \u2192 felt.',
  'exercise.simple-past-and-past-continuous.32.pro_tip': 'Tip: feel/felt/felt. Same vowel as kneel/knelt.',

  'exercise.simple-past-and-past-continuous.33.prompt': 'Complete the past continuous.',
  'exercise.simple-past-and-past-continuous.33.explanation': 'Was + V-ing.',
  'exercise.simple-past-and-past-continuous.33.pro_tip': 'Tip: the -ing form is the same regardless of tense.',

  'exercise.simple-past-and-past-continuous.34.prompt': 'Pick the right past simple of "run".',
  'exercise.simple-past-and-past-continuous.34.explanation': 'Irregular: run \u2192 ran.',
  'exercise.simple-past-and-past-continuous.34.pro_tip': 'Tip: run/ran/run. Past participle returns to base form \u2014 unique!',

  'exercise.simple-past-and-past-continuous.35.prompt': 'True or False?',
  'exercise.simple-past-and-past-continuous.35.statement': '"I was watching TV at 9pm last night" is a correct past continuous sentence.',
  'exercise.simple-past-and-past-continuous.35.explanation': 'True. Past continuous often pairs with a specific past time: "at 9pm", "when\u2026".',
  'exercise.simple-past-and-past-continuous.35.pro_tip': 'Tip: time markers like "at 9pm" go with continuous, "at 9:05pm" (a point) goes with simple.',

  'exercise.simple-past-and-past-continuous.36.prompt': 'Reorder the words to form a correct sentence.',
  'exercise.simple-past-and-past-continuous.36.explanation': 'Standard order with the long action first.',
  'exercise.simple-past-and-past-continuous.36.pro_tip': 'Tip: order: long action (continuous) + when/while + short action (simple).',

  'exercise.simple-past-and-past-continuous.37.prompt': 'Choose the correct past simple of "break".',
  'exercise.simple-past-and-past-continuous.37.explanation': 'Irregular: break \u2192 broke.',
  'exercise.simple-past-and-past-continuous.37.pro_tip': 'Tip: break/broke/broken. Vowel change ea \u2192 o.',

  'exercise.simple-past-and-past-continuous.38.prompt': 'Complete the past continuous.',
  'exercise.simple-past-and-past-continuous.38.explanation': 'Were + V-ing.',
  'exercise.simple-past-and-past-continuous.38.pro_tip': 'Tip: with "they/we/you", use "were" in past continuous.',

  'exercise.simple-past-and-past-continuous.39.prompt': 'Pick the right past simple of "cut".',
  'exercise.simple-past-and-past-continuous.39.explanation': 'Cut \u2192 cut (no change).',
  'exercise.simple-past-and-past-continuous.39.pro_tip': 'Tip: a few verbs stay the same: cut, hit, put, shut, cost.',

  'exercise.simple-past-and-past-continuous.40.prompt': 'True or False?',
  'exercise.simple-past-and-past-continuous.40.statement': 'In the sentence "While I was cooking, the phone rang", the cooking was the longer, in-progress action.',
  'exercise.simple-past-and-past-continuous.40.explanation': 'True. "While" introduces the longer action (cooking); "rang" is the short, completed one.',
  'exercise.simple-past-and-past-continuous.40.pro_tip': 'Tip: "while" + past continuous; "when" + past simple. Or vice-versa: when + long, while + short.',
};

// Merge all EN extras into the structural EN map.

const presentPerfectVsSimplePastEnExtras: Record<string, string> = {
  "exercise.present-perfect-vs-simple-past.1.prompt": "Complete the sentence with the correct past form:",
  "exercise.present-perfect-vs-simple-past.1.explanation": "\"yesterday morning\" indicates a finished past time, so use the Simple Past (\"lost\").",
  "exercise.present-perfect-vs-simple-past.1.pro_tip": "Tip: Specific past time markers (yesterday, last week, in 2020) = Simple Past.",
  "exercise.present-perfect-vs-simple-past.2.prompt": "Choose the sentence with correct word order and tense:",
  "exercise.present-perfect-vs-simple-past.2.explanation": "\"has already finished\" places \"already\" between the auxiliary \"has\" and the past participle.",
  "exercise.present-perfect-vs-simple-past.2.pro_tip": "Tip: Subject + have/has + already + past participle.",
  "exercise.present-perfect-vs-simple-past.3.prompt": "Fill in the blank with \"since\" or \"for\":",
  "exercise.present-perfect-vs-simple-past.3.explanation": "Use \"since\" with a specific starting point in time (since 2018).",
  "exercise.present-perfect-vs-simple-past.3.pro_tip": "Tip: \"since\" + starting point; \"for\" + duration (e.g. for 5 years).",
  "exercise.present-perfect-vs-simple-past.4.prompt": "True or False?",
  "exercise.present-perfect-vs-simple-past.4.statement": "You can use \"yesterday\", \"last week\", and \"in 2015\" with the Present Perfect tense in standard English.",
  "exercise.present-perfect-vs-simple-past.4.explanation": "False. Finished time words require the Simple Past.",
  "exercise.present-perfect-vs-simple-past.4.pro_tip": "Tip: Never pair finished time markers with Present Perfect.",
  "exercise.present-perfect-vs-simple-past.5.prompt": "Choose the natural and grammatically correct dialogue:",
  "exercise.present-perfect-vs-simple-past.5.explanation": "A asks about the experience in Present Perfect; B confirms and switches to Simple Past for the specific day (\"on Friday\").",
  "exercise.present-perfect-vs-simple-past.5.pro_tip": "Tip: Present Perfect (experience) -> Simple Past (specific details).",
  "exercise.present-perfect-vs-simple-past.6.prompt": "Complete the response in the dialogue:",
  "exercise.present-perfect-vs-simple-past.6.explanation": "\"when I was in Spain\" refers to a specific finished time period in the past, so use \"ate\".",
  "exercise.present-perfect-vs-simple-past.6.pro_tip": "Tip: \"When I was...\" clauses always take the Simple Past.",
  "exercise.present-perfect-vs-simple-past.7.prompt": "Drag the words to form a correct sentence:",
  "exercise.present-perfect-vs-simple-past.7.explanation": "Present Perfect for life experience (\"have never visited\"), Simple Past for specific past year (\"went there in 2020\").",
  "exercise.present-perfect-vs-simple-past.7.pro_tip": "Tip: Connect two clauses with \"but\" when contrasting experiences.",
  "exercise.present-perfect-vs-simple-past.8.prompt": "Complete the sentence with \"yet\":",
  "exercise.present-perfect-vs-simple-past.8.explanation": "\"yet\" is used in negative Present Perfect sentences to show an action is expected soon.",
  "exercise.present-perfect-vs-simple-past.8.pro_tip": "Tip: Subject + hasn't/haven't + V3 + yet.",
  "exercise.present-perfect-vs-simple-past.9.prompt": "Choose the correct question starting with \"When\":",
  "exercise.present-perfect-vs-simple-past.9.explanation": "\"When\" asks for a specific point in time, requiring the Simple Past auxiliary \"did\".",
  "exercise.present-perfect-vs-simple-past.9.pro_tip": "Tip: When did you + base verb...?",
  "exercise.present-perfect-vs-simple-past.10.prompt": "Complete the question about completion:",
  "exercise.present-perfect-vs-simple-past.10.explanation": "\"Have you finished...?\" asks if the action has been completed up to the present moment.",
  "exercise.present-perfect-vs-simple-past.10.pro_tip": "Tip: Have you + past participle...?",
  "exercise.present-perfect-vs-simple-past.11.prompt": "Match the questions to their appropriate answers:",
  "exercise.present-perfect-vs-simple-past.11.explanation": "Match questions in Simple Past and Present Perfect with corresponding time answers.",
  "exercise.present-perfect-vs-simple-past.11.pro_tip": "Tip: \"When did you...?\" pairs with \"ago\"; \"How long have you...?\" pairs with \"for/since\".",
  "exercise.present-perfect-vs-simple-past.12.prompt": "True or False?",
  "exercise.present-perfect-vs-simple-past.12.statement": "Questions starting with \"When...?\" ask about a specific point in the past, so they usually take the Simple Past (\"When did you...?\").",
  "exercise.present-perfect-vs-simple-past.12.explanation": "True. \"When\" asks for a specific past timestamp.",
  "exercise.present-perfect-vs-simple-past.12.pro_tip": "Tip: Avoid saying \"When have you...?\"; say \"When did you...?\".",
  "exercise.present-perfect-vs-simple-past.13.prompt": "Choose the correct sentence for a historical fact:",
  "exercise.present-perfect-vs-simple-past.13.explanation": "Shakespeare lived in a finished time period, and \"in 1601\" is a finished date -> use Simple Past (\"wrote\").",
  "exercise.present-perfect-vs-simple-past.13.pro_tip": "Tip: Deceased authors and historical events always take the Simple Past.",
  "exercise.present-perfect-vs-simple-past.14.prompt": "Complete the sentence for an unfinished time period:",
  "exercise.present-perfect-vs-simple-past.14.explanation": "Because it is still morning (10 AM), the time period is not finished -> use Present Perfect (\"has drunk\").",
  "exercise.present-perfect-vs-simple-past.14.pro_tip": "Tip: \"this morning / this week / today\" take Present Perfect if the time period is still ongoing.",
  "exercise.present-perfect-vs-simple-past.15.prompt": "Reorder the words to form a past sentence with \"ago\":",
  "exercise.present-perfect-vs-simple-past.15.explanation": "\"I bought this phone two months ago.\"",
  "exercise.present-perfect-vs-simple-past.15.pro_tip": "Tip: [time duration] + ago + Simple Past.",
  "exercise.present-perfect-vs-simple-past.16.prompt": "Choose the correct sentence expressing an ongoing state:",
  "exercise.present-perfect-vs-simple-past.16.explanation": "\"We have known each other for ten years\" shows a relationship that started in the past and continues now.",
  "exercise.present-perfect-vs-simple-past.16.pro_tip": "Tip: Ongoing states continuing into the present = Present Perfect + for/since.",
};

const pastPerfectEnExtras: Record<string, string> = {
  "exercise.past-perfect.1.prompt": "Complete the sentence with the past participle:",
  "exercise.past-perfect.1.explanation": "\"had already started\" indicates the movie started before we arrived.",
  "exercise.past-perfect.1.pro_tip": "Tip: had + past participle (V3).",
  "exercise.past-perfect.2.prompt": "Choose the correct sentence for a past experience before a past event:",
  "exercise.past-perfect.2.explanation": "\"had never seen\" expresses an experience prior to moving to Canada in the past.",
  "exercise.past-perfect.2.pro_tip": "Tip: Use Past Perfect for experiences prior to another past event.",
  "exercise.past-perfect.3.prompt": "Complete the sentence explaining a past cause:",
  "exercise.past-perfect.3.explanation": "Leaving the wallet happened before not having cash -> \"had left\".",
  "exercise.past-perfect.3.pro_tip": "Tip: The earlier reason takes Past Perfect.",
  "exercise.past-perfect.4.prompt": "True or False?",
  "exercise.past-perfect.4.statement": "The Past Perfect formula is always \"had + past participle\" for all subjects (I, you, he, she, they, we).",
  "exercise.past-perfect.4.explanation": "True. \"had\" is invariant across all persons.",
  "exercise.past-perfect.4.pro_tip": "Tip: No \"has\" in Past Perfect — always \"had\".",
  "exercise.past-perfect.5.prompt": "Choose the correct sentence with \"by the time\":",
  "exercise.past-perfect.5.explanation": "The police securing the area happened before the ambulance arrived.",
  "exercise.past-perfect.5.pro_tip": "Tip: By the time + Simple Past, + Past Perfect.",
  "exercise.past-perfect.6.prompt": "Complete the sentence:",
  "exercise.past-perfect.6.explanation": "The train left before reaching the station -> \"had departed\".",
  "exercise.past-perfect.6.pro_tip": "Tip: Past Perfect marks the earlier action.",
  "exercise.past-perfect.7.prompt": "Drag the words to form a timeline sentence:",
  "exercise.past-perfect.7.explanation": "\"After he had finished his dinner, he went for a walk.\"",
  "exercise.past-perfect.7.pro_tip": "Tip: After + Past Perfect, Simple Past.",
  "exercise.past-perfect.8.prompt": "Analyze the timeline order of events:",
  "exercise.past-perfect.8.explanation": "The action with \"had studied\" happened first; taking the test happened second.",
  "exercise.past-perfect.8.pro_tip": "Tip: Past Perfect = Action 1 (earlier in the past).",
  "exercise.past-perfect.9.prompt": "Complete the sentence with the time preposition:",
  "exercise.past-perfect.9.explanation": "\"By the time\" introduces a deadline point in the past.",
  "exercise.past-perfect.9.pro_tip": "Tip: \"By the time\" is a key indicator for the Past Perfect.",
  "exercise.past-perfect.10.prompt": "Choose the correct sequence of tenses with \"before\":",
  "exercise.past-perfect.10.explanation": "Living in Spain happened before moving to France -> \"had lived... before they moved\".",
  "exercise.past-perfect.10.pro_tip": "Tip: Past Perfect + before + Simple Past.",
  "exercise.past-perfect.11.prompt": "Match the past results with their earlier causes:",
  "exercise.past-perfect.11.explanation": "Connect the Simple Past situation with the earlier Past Perfect cause.",
  "exercise.past-perfect.11.pro_tip": "Tip: Simple Past result because + Past Perfect cause.",
  "exercise.past-perfect.12.prompt": "Complete the sentence with the past participle:",
  "exercise.past-perfect.12.explanation": "Eating too much happened before feeling sick -> \"had eaten\".",
  "exercise.past-perfect.12.pro_tip": "Tip: eat -> ate -> eaten.",
  "exercise.past-perfect.13.prompt": "Choose the correct conversational exchange in the past:",
  "exercise.past-perfect.13.explanation": "\"my alarm had not gone off\" happened prior to being late.",
  "exercise.past-perfect.13.pro_tip": "Tip: Explain past mishaps with Past Perfect.",
  "exercise.past-perfect.14.prompt": "Complete the dialogue with \"already\":",
  "exercise.past-perfect.14.explanation": "\"had already\" goes before the past participle \"left\".",
  "exercise.past-perfect.14.pro_tip": "Tip: had + already + past participle.",
  "exercise.past-perfect.15.prompt": "Reorder the narrative realization sentence:",
  "exercise.past-perfect.15.explanation": "\"I realized that I had locked myself out.\"",
  "exercise.past-perfect.15.pro_tip": "Tip: Realized (Simple Past) + had locked (Past Perfect).",
  "exercise.past-perfect.16.prompt": "True or False?",
  "exercise.past-perfect.16.statement": "In the sentence \"When I arrived, they were having dinner\", dinner was in progress; in \"When I arrived, they had had dinner\", dinner was already finished.",
  "exercise.past-perfect.16.explanation": "True. Past Continuous = in progress; Past Perfect = completed beforehand.",
  "exercise.past-perfect.16.pro_tip": "Tip: Notice how tenses clearly tell you whether an action was ongoing or finished.",
};

const conditionalsAllEnExtras: Record<string, string> = {
  "exercise.conditionals-all.1.prompt": "Complete the Zero Conditional sentence (scientific fact):",
  "exercise.conditionals-all.1.explanation": "Zero conditional uses Present Simple in both clauses for universal truths: \"If you heat ice, it melts.\"",
  "exercise.conditionals-all.1.pro_tip": "Tip: Zero Conditional: If + Present Simple, Present Simple.",
  "exercise.conditionals-all.2.prompt": "Choose the correct First Conditional sentence:",
  "exercise.conditionals-all.2.explanation": "First conditional: \"If it rains tomorrow, we will stay at home.\" Never put \"will\" inside the \"if\" clause.",
  "exercise.conditionals-all.2.pro_tip": "Tip: If + Present Simple, will + base verb.",
  "exercise.conditionals-all.3.prompt": "Complete the First Conditional result clause:",
  "exercise.conditionals-all.3.explanation": "Use \"will + pass\" for a real future possibility based on studying.",
  "exercise.conditionals-all.3.pro_tip": "Tip: will + base form for future outcome.",
  "exercise.conditionals-all.4.prompt": "True or False?",
  "exercise.conditionals-all.4.statement": "In First Conditional sentences, you can put \"will\" inside the \"if\" clause (e.g. \"If you will call me, I will answer\").",
  "exercise.conditionals-all.4.explanation": "False. The \"if\" clause must be in the Present Simple (\"If you call me...\").",
  "exercise.conditionals-all.4.pro_tip": "Tip: Never put \"will\" directly after \"if\" in standard conditionals.",
  "exercise.conditionals-all.5.prompt": "Choose the correct Second Conditional sentence:",
  "exercise.conditionals-all.5.explanation": "Second conditional: \"If I won the lottery, I would travel around the world\" (hypothetical scenario).",
  "exercise.conditionals-all.5.pro_tip": "Tip: If + Past Simple, would + base verb.",
  "exercise.conditionals-all.6.prompt": "Complete the Second Conditional advice formula:",
  "exercise.conditionals-all.6.explanation": "In standard English, use \"were\" for all persons in hypothetical conditionals: \"If I were you...\".",
  "exercise.conditionals-all.6.pro_tip": "Tip: \"If I were you, I would...\" is the classic phrase for giving advice.",
  "exercise.conditionals-all.7.prompt": "Drag the words to form a Second Conditional sentence:",
  "exercise.conditionals-all.7.explanation": "\"If she had more time, she would learn Japanese.\"",
  "exercise.conditionals-all.7.pro_tip": "Tip: If + had (past simple), would learn.",
  "exercise.conditionals-all.8.prompt": "Complete the hypothetical question:",
  "exercise.conditionals-all.8.explanation": "Questions in the 2nd conditional use \"What would you do if...?\"",
  "exercise.conditionals-all.8.pro_tip": "Tip: What would you do if + past simple?",
  "exercise.conditionals-all.9.prompt": "Choose the correct Third Conditional sentence (past regret):",
  "exercise.conditionals-all.9.explanation": "Third conditional formula: \"If I had set my alarm, I would not have been late.\"",
  "exercise.conditionals-all.9.pro_tip": "Tip: If + had + V3, would have + V3.",
  "exercise.conditionals-all.10.prompt": "Complete the Third Conditional negative outcome:",
  "exercise.conditionals-all.10.explanation": "\"wouldn't have missed\" expresses the hypothetical avoided outcome in the past.",
  "exercise.conditionals-all.10.pro_tip": "Tip: would not have + past participle.",
  "exercise.conditionals-all.11.prompt": "Reorder the Third Conditional sentence:",
  "exercise.conditionals-all.11.explanation": "\"She would have passed if she had studied.\"",
  "exercise.conditionals-all.11.pro_tip": "Tip: The main clause can come first without a comma.",
  "exercise.conditionals-all.12.prompt": "True or False?",
  "exercise.conditionals-all.12.statement": "The Third Conditional talks about hypothetical situations in the past that cannot be changed now.",
  "exercise.conditionals-all.12.explanation": "True. It is used to express past regret or counterfactual history.",
  "exercise.conditionals-all.12.pro_tip": "Tip: 3rd conditional = impossible past alternative.",
  "exercise.conditionals-all.13.prompt": "Match each conditional clause to its correct result:",
  "exercise.conditionals-all.13.explanation": "Match Zero, 1st, 2nd, and 3rd conditional examples with their matching results.",
  "exercise.conditionals-all.13.pro_tip": "Tip: Zero=fact, 1st=likely future, 2nd=imaginary now, 3rd=past regret.",
  "exercise.conditionals-all.14.prompt": "Complete the First Conditional condition:",
  "exercise.conditionals-all.14.explanation": "Use Present Simple negative \"don't wear\" in the if-clause.",
  "exercise.conditionals-all.14.pro_tip": "Tip: If + don't/doesn't + base verb.",
  "exercise.conditionals-all.15.prompt": "Choose the correct Second Conditional sentence:",
  "exercise.conditionals-all.15.explanation": "\"If he spoke English, he would get that international job.\"",
  "exercise.conditionals-all.15.pro_tip": "Tip: spoke (past) -> would get.",
  "exercise.conditionals-all.16.prompt": "Identify which conditional type this sentence belongs to:",
  "exercise.conditionals-all.16.explanation": "\"If I had known, I would have told you\" is a classic Third Conditional sentence.",
  "exercise.conditionals-all.16.pro_tip": "Tip: had known + would have told = 3rd conditional.",
};

const modalVerbsEnExtras: Record<string, string> = {
  "exercise.modal-verbs.1.prompt": "Complete the sentence with the modal of advice:",
  "exercise.modal-verbs.1.explanation": "\"should\" gives friendly advice and is followed by the base verb \"get\".",
  "exercise.modal-verbs.1.pro_tip": "Tip: should + base verb (never \"should to\").",
  "exercise.modal-verbs.2.prompt": "Choose the sentence expressing strict prohibition:",
  "exercise.modal-verbs.2.explanation": "\"mustn't\" expresses that something is strictly prohibited by rule or law.",
  "exercise.modal-verbs.2.pro_tip": "Tip: mustn't = prohibited / forbidden.",
  "exercise.modal-verbs.3.prompt": "Complete the sentence expressing lack of obligation:",
  "exercise.modal-verbs.3.explanation": "\"don't have to\" expresses that waking up early is not necessary.",
  "exercise.modal-verbs.3.pro_tip": "Tip: don't have to = not necessary (you have the choice).",
  "exercise.modal-verbs.4.prompt": "True or False?",
  "exercise.modal-verbs.4.statement": "Modal verbs like \"should\", \"must\", and \"can\" are followed directly by the base verb without \"to\" (e.g. \"He should go\", not \"He should to go\").",
  "exercise.modal-verbs.4.explanation": "True. Modal auxiliaries take the bare infinitive.",
  "exercise.modal-verbs.4.pro_tip": "Tip: Never say \"must to\" or \"can to\".",
  "exercise.modal-verbs.5.prompt": "Choose the polite request with \"Could\":",
  "exercise.modal-verbs.5.explanation": "\"Could you please...?\" is the most polite and natural way to make requests.",
  "exercise.modal-verbs.5.pro_tip": "Tip: \"Could you...\" is softer and more polite than \"Can you...\".",
  "exercise.modal-verbs.6.prompt": "Complete the past ability sentence:",
  "exercise.modal-verbs.6.explanation": "\"could\" expresses general ability in the past.",
  "exercise.modal-verbs.6.pro_tip": "Tip: could = past of can.",
  "exercise.modal-verbs.7.prompt": "Drag the words to form a polite permission question:",
  "exercise.modal-verbs.7.explanation": "\"May I ask you a quick question?\"",
  "exercise.modal-verbs.7.pro_tip": "Tip: \"May I...?\" is formal and polite for asking permission.",
  "exercise.modal-verbs.8.prompt": "Complete the polite request:",
  "exercise.modal-verbs.8.explanation": "\"Could you help me...\" asks for assistance politely.",
  "exercise.modal-verbs.8.pro_tip": "Tip: Could + you + help...?",
  "exercise.modal-verbs.9.prompt": "Choose the sentence expressing a future possibility (30-50% chance):",
  "exercise.modal-verbs.9.explanation": "\"it might rain\" expresses that rain is possible but not certain.",
  "exercise.modal-verbs.9.pro_tip": "Tip: might + base verb for possibilities.",
  "exercise.modal-verbs.10.prompt": "Complete the sentence with \"might\":",
  "exercise.modal-verbs.10.explanation": "\"He might be in the conference room\" indicates uncertainty.",
  "exercise.modal-verbs.10.pro_tip": "Tip: might be = perhaps he is.",
  "exercise.modal-verbs.11.prompt": "Reorder the future possibility statement:",
  "exercise.modal-verbs.11.explanation": "\"We might go to Italy next summer.\"",
  "exercise.modal-verbs.11.pro_tip": "Tip: Subject + might + base verb + destination.",
  "exercise.modal-verbs.12.prompt": "True or False?",
  "exercise.modal-verbs.12.statement": "\"Might\" expresses a possibility (about 30-50% chance), whereas \"will\" expresses certainty.",
  "exercise.modal-verbs.12.explanation": "True. \"Might\" conveys uncertainty compared to the definite \"will\".",
  "exercise.modal-verbs.12.pro_tip": "Tip: Use \"might\" whenever you are not 100% sure.",
  "exercise.modal-verbs.13.prompt": "Choose the logical deduction of certainty (99% sure):",
  "exercise.modal-verbs.13.explanation": "\"They must be out\" is a logical deduction based on the observed evidence (lights off, locked door).",
  "exercise.modal-verbs.13.pro_tip": "Tip: must be = I am almost certain it is true.",
  "exercise.modal-verbs.14.prompt": "Complete the deduction of impossibility (99% sure NOT):",
  "exercise.modal-verbs.14.explanation": "\"He can't be hungry\" expresses logical impossibility after eating 3 pizzas.",
  "exercise.modal-verbs.14.pro_tip": "Tip: can't be = impossible based on logic.",
  "exercise.modal-verbs.15.prompt": "Match the modal verbs with their core communicative functions:",
  "exercise.modal-verbs.15.explanation": "Connect advice, certain deduction, impossibility, and prohibition with their modal sentences.",
  "exercise.modal-verbs.15.pro_tip": "Tip: should=advice, must=deduction, can't=impossible, mustn't=prohibition.",
  "exercise.modal-verbs.16.prompt": "Choose the dialogue with a natural deduction:",
  "exercise.modal-verbs.16.explanation": "\"It might be Sarah's\" expresses reasonable possibility without complete certainty.",
  "exercise.modal-verbs.16.pro_tip": "Tip: Might is great for speculative answers in conversation.",
};

const passiveVoiceEnExtras: Record<string, string> = {
  "exercise.passive-voice.1.prompt": "Complete the Present Simple Passive sentence:",
  "exercise.passive-voice.1.explanation": "\"is spoken\" = is + past participle of speak.",
  "exercise.passive-voice.1.pro_tip": "Tip: is/are + past participle for general facts.",
  "exercise.passive-voice.2.prompt": "Choose the correct Past Simple Passive sentence:",
  "exercise.passive-voice.2.explanation": "\"was built in 1889\" uses was + past participle (built).",
  "exercise.passive-voice.2.pro_tip": "Tip: was/were + past participle for historical facts.",
  "exercise.passive-voice.3.prompt": "Complete the plural Present Passive:",
  "exercise.passive-voice.3.explanation": "Emails is plural, so use \"are sent\".",
  "exercise.passive-voice.3.pro_tip": "Tip: Plural subject -> are + V3.",
  "exercise.passive-voice.4.prompt": "True or False?",
  "exercise.passive-voice.4.statement": "In the Passive Voice, the object of the active sentence becomes the subject of the passive sentence.",
  "exercise.passive-voice.4.explanation": "True. The receiver of the action is placed in the subject position.",
  "exercise.passive-voice.4.pro_tip": "Tip: Active: S + V + O -> Passive: O + be + V3.",
  "exercise.passive-voice.5.prompt": "Choose the correct Present Perfect Passive sentence:",
  "exercise.passive-voice.5.explanation": "\"has been delivered\" = has + been + delivered.",
  "exercise.passive-voice.5.pro_tip": "Tip: has/have been + past participle.",
  "exercise.passive-voice.6.prompt": "Complete the Future Passive sentence:",
  "exercise.passive-voice.6.explanation": "\"will be completed\" = will + be + past participle.",
  "exercise.passive-voice.6.pro_tip": "Tip: will be + V3.",
  "exercise.passive-voice.7.prompt": "Drag the words to form a Present Perfect Passive sentence:",
  "exercise.passive-voice.7.explanation": "\"All the tickets have been sold out.\"",
  "exercise.passive-voice.7.pro_tip": "Tip: have been sold out.",
  "exercise.passive-voice.8.prompt": "Complete the Present Continuous Passive sentence:",
  "exercise.passive-voice.8.explanation": "\"is being built\" describes an action currently in progress in the passive voice.",
  "exercise.passive-voice.8.pro_tip": "Tip: is/are being + past participle.",
  "exercise.passive-voice.9.prompt": "Choose the correct Active to Passive transformation:",
  "exercise.passive-voice.9.explanation": "\"J.K. Rowling wrote Harry Potter\" -> \"Harry Potter was written by J.K. Rowling.\"",
  "exercise.passive-voice.9.pro_tip": "Tip: Past simple active (\"wrote\") -> \"was written\".",
  "exercise.passive-voice.10.prompt": "Complete the passive transformation with the past participle:",
  "exercise.passive-voice.10.explanation": "steal -> stole -> stolen.",
  "exercise.passive-voice.10.pro_tip": "Tip: The 3rd form of steal is stolen.",
  "exercise.passive-voice.11.prompt": "Reorder the passive sentence with an agent:",
  "exercise.passive-voice.11.explanation": "\"The window was broken by the storm.\"",
  "exercise.passive-voice.11.pro_tip": "Tip: was broken by + cause/agent.",
  "exercise.passive-voice.12.prompt": "True or False?",
  "exercise.passive-voice.12.statement": "You only include \"by + agent\" in a passive sentence when the person or cause doing the action is important or relevant to know.",
  "exercise.passive-voice.12.explanation": "True. If the agent is unknown, obvious, or unimportant, omit \"by...\".",
  "exercise.passive-voice.12.pro_tip": "Tip: Keep passive sentences clean by omitting obvious agents.",
  "exercise.passive-voice.13.prompt": "Match the passive sentences across different tenses:",
  "exercise.passive-voice.13.explanation": "Match present simple, past simple, present perfect, and future passive sentences.",
  "exercise.passive-voice.13.pro_tip": "Tip: Look at the form of \"be\" to identify the tense.",
  "exercise.passive-voice.14.prompt": "Complete the common passive question response:",
  "exercise.passive-voice.14.explanation": "\"I was born\" is always in the Past Simple Passive in English.",
  "exercise.passive-voice.14.pro_tip": "Tip: Always say \"I was born\", never \"I am born\".",
  "exercise.passive-voice.15.prompt": "Choose the sentence describing product origin:",
  "exercise.passive-voice.15.explanation": "\"These shoes are made in Italy\" (plural subject \"shoes\" + are made).",
  "exercise.passive-voice.15.pro_tip": "Tip: are made in + country.",
  "exercise.passive-voice.16.prompt": "Choose the natural dialogue in Present Perfect Passive:",
  "exercise.passive-voice.16.explanation": "\"it has already been repaired\" confirms completion of the repair.",
  "exercise.passive-voice.16.pro_tip": "Tip: has already been + V3.",
};

const relativeClausesEnExtras: Record<string, string> = {
  "exercise.relative-clauses.1.prompt": "Complete the sentence with the relative pronoun for a person:",
  "exercise.relative-clauses.1.explanation": "Use \"who\" when referring to a person (\"the woman who called you\").",
  "exercise.relative-clauses.1.pro_tip": "Tip: who = for people.",
  "exercise.relative-clauses.2.prompt": "Choose the correct relative pronoun for an object:",
  "exercise.relative-clauses.2.explanation": "Use \"which\" or \"that\" when referring to objects or things (\"the laptop which I bought\").",
  "exercise.relative-clauses.2.pro_tip": "Tip: which / that = for things and objects.",
  "exercise.relative-clauses.3.prompt": "Complete the sentence with the pronoun for possession:",
  "exercise.relative-clauses.3.explanation": "\"whose\" shows possession (\"whose father is a famous astronaut\").",
  "exercise.relative-clauses.3.pro_tip": "Tip: whose + noun shows whose possession it is.",
  "exercise.relative-clauses.4.prompt": "Complete the sentence with the pronoun for a place:",
  "exercise.relative-clauses.4.explanation": "Use \"where\" when referring to a location or place (\"the restaurant where we celebrated\").",
  "exercise.relative-clauses.4.pro_tip": "Tip: where = for places.",
  "exercise.relative-clauses.5.prompt": "Choose the correct non-defining relative clause with commas:",
  "exercise.relative-clauses.5.explanation": "In non-defining relative clauses (with commas), you MUST use \"who\" (for people) or \"which\" (for things), never \"that\".",
  "exercise.relative-clauses.5.pro_tip": "Tip: Never use \"that\" after a comma in relative clauses!",
  "exercise.relative-clauses.6.prompt": "True or False?",
  "exercise.relative-clauses.6.statement": "You can use \"that\" instead of \"who\" or \"which\" in non-defining relative clauses with commas (e.g. \"Paris, that is beautiful,...\").",
  "exercise.relative-clauses.6.explanation": "False. \"that\" is strictly prohibited in non-defining clauses with commas.",
  "exercise.relative-clauses.6.pro_tip": "Tip: Commas = who / which only.",
  "exercise.relative-clauses.7.prompt": "Drag the words to form a non-defining relative clause:",
  "exercise.relative-clauses.7.explanation": "\"London, which is the capital, has many parks.\"",
  "exercise.relative-clauses.7.pro_tip": "Tip: Place commas around the extra non-defining clause.",
  "exercise.relative-clauses.8.prompt": "Identify the type of relative clause:",
  "exercise.relative-clauses.8.explanation": "Clauses set off by commas provide extra, non-essential information and are non-defining.",
  "exercise.relative-clauses.8.pro_tip": "Tip: Non-defining = extra bonus info between commas.",
  "exercise.relative-clauses.9.prompt": "Choose the sentence where the relative pronoun can be omitted:",
  "exercise.relative-clauses.9.explanation": "You can omit the pronoun when it is the object (e.g., \"The book [that] I read\"). If it is the subject (who called you), it cannot be omitted.",
  "exercise.relative-clauses.9.pro_tip": "Tip: Pronoun + Subject + Verb = Pronoun can be safely omitted!",
  "exercise.relative-clauses.10.prompt": "Complete the passive relative sentence:",
  "exercise.relative-clauses.10.explanation": "\"The song (that) you are listening to was written by Adele.\"",
  "exercise.relative-clauses.10.pro_tip": "Tip: was written = past simple passive.",
  "exercise.relative-clauses.11.prompt": "Reorder the sentence with an omitted relative pronoun:",
  "exercise.relative-clauses.11.explanation": "\"This is the car I want to buy.\"",
  "exercise.relative-clauses.11.pro_tip": "Tip: the car (that) I want to buy.",
  "exercise.relative-clauses.12.prompt": "True or False?",
  "exercise.relative-clauses.12.statement": "You can omit \"who\", \"which\", or \"that\" when it is followed by a subject + verb (e.g. \"the movie [that] we watched\").",
  "exercise.relative-clauses.12.explanation": "True. Omitting the object pronoun is very natural in spoken and written English.",
  "exercise.relative-clauses.12.pro_tip": "Tip: In casual English, omitting the object pronoun sounds very fluent.",
  "exercise.relative-clauses.13.prompt": "Match the definitions using relative clauses:",
  "exercise.relative-clauses.13.explanation": "Match people (who), places (where), things (which), and possessions (whose).",
  "exercise.relative-clauses.13.pro_tip": "Tip: surgeon -> who; bakery -> where; dictionary -> which; orphan -> whose.",
  "exercise.relative-clauses.14.prompt": "Complete the defining relative clause:",
  "exercise.relative-clauses.14.explanation": "Use \"who\" for people.",
  "exercise.relative-clauses.14.pro_tip": "Tip: people who + verb.",
  "exercise.relative-clauses.15.prompt": "Choose the correct way to combine two sentences using \"whose\":",
  "exercise.relative-clauses.15.explanation": "\"I have a friend whose dog can do tricks\" cleanly replaces \"her dog\".",
  "exercise.relative-clauses.15.pro_tip": "Tip: whose replaces possessive adjectives (his, her, their).",
  "exercise.relative-clauses.16.prompt": "Choose the natural dialogue response:",
  "exercise.relative-clauses.16.explanation": "\"The one that is located near the park\" accurately specifies which cafe.",
  "exercise.relative-clauses.16.pro_tip": "Tip: that + verb for things in defining clauses.",
};

const reportedSpeechEnExtras: Record<string, string> = {
  "exercise.reported-speech.1.prompt": "Choose the correct reported speech form (tense backshift):",
  "exercise.reported-speech.1.explanation": "Present Simple \"I am tired\" shifts back one tense to Past Simple \"she was tired\".",
  "exercise.reported-speech.1.pro_tip": "Tip: am/is -> was; are -> were.",
  "exercise.reported-speech.2.prompt": "Complete the reported sentence (will -> would):",
  "exercise.reported-speech.2.explanation": "\"will\" shifts to \"would\" in reported speech.",
  "exercise.reported-speech.2.pro_tip": "Tip: will -> would; can -> could.",
  "exercise.reported-speech.3.prompt": "Complete the reported sentence (past simple -> past perfect):",
  "exercise.reported-speech.3.explanation": "Simple Past \"bought\" shifts back to Past Perfect \"had bought\".",
  "exercise.reported-speech.3.pro_tip": "Tip: Simple Past & Present Perfect both backshift to Past Perfect.",
  "exercise.reported-speech.4.prompt": "True or False?",
  "exercise.reported-speech.4.statement": "When the reporting verb is in the past (\"said\", \"told\"), verbs inside the reported clause typically shift back one tense (Present Simple -> Past Simple, Will -> Would, Can -> Could).",
  "exercise.reported-speech.4.explanation": "True. This is the fundamental rule of tense backshifting.",
  "exercise.reported-speech.4.pro_tip": "Tip: One step back in time when reporting.",
  "exercise.reported-speech.5.prompt": "Choose the sentence with correct time word shifting (today -> that day):",
  "exercise.reported-speech.5.explanation": "\"today\" changes to \"that day\" in reported speech.",
  "exercise.reported-speech.5.pro_tip": "Tip: today -> that day; tonight -> that night.",
  "exercise.reported-speech.6.prompt": "Complete the location word shift (here -> there):",
  "exercise.reported-speech.6.explanation": "\"here\" shifts to \"there\" in reported speech.",
  "exercise.reported-speech.6.pro_tip": "Tip: here -> there.",
  "exercise.reported-speech.7.prompt": "Drag the words to form a reported speech sentence:",
  "exercise.reported-speech.7.explanation": "\"He said that he had lost his passport.\"",
  "exercise.reported-speech.7.pro_tip": "Tip: S + said that + S + had + V3.",
  "exercise.reported-speech.8.prompt": "Match direct time expressions with their reported equivalents:",
  "exercise.reported-speech.8.explanation": "Match now->then, yesterday->the day before, tomorrow->the next day, this->that.",
  "exercise.reported-speech.8.pro_tip": "Tip: Memorize time shifts to master reported speech.",
  "exercise.reported-speech.9.prompt": "Complete with \"said\" or \"told\":",
  "exercise.reported-speech.9.explanation": "Use \"told\" because there is a personal object (\"me\").",
  "exercise.reported-speech.9.pro_tip": "Tip: told + person; said + that.",
  "exercise.reported-speech.10.prompt": "Choose the sentence using \"said\" correctly:",
  "exercise.reported-speech.10.explanation": "\"He said that he was happy...\" (never \"He said me\" or \"He told that\").",
  "exercise.reported-speech.10.pro_tip": "Tip: Never say \"he told that\"; say \"he told me that\" or \"he said that\".",
  "exercise.reported-speech.11.prompt": "Reorder the sentence with \"told\":",
  "exercise.reported-speech.11.explanation": "\"She told him that the meeting was cancelled.\"",
  "exercise.reported-speech.11.pro_tip": "Tip: Subject + told + object + that + clause.",
  "exercise.reported-speech.12.prompt": "True or False?",
  "exercise.reported-speech.12.statement": "You use \"tell\" when you mention who is being spoken to (e.g. \"He told me...\"), whereas \"say\" is used without a personal object (e.g. \"He said that...\").",
  "exercise.reported-speech.12.explanation": "True. \"Tell\" requires a personal object.",
  "exercise.reported-speech.12.pro_tip": "Tip: Tell someone; say something.",
  "exercise.reported-speech.13.prompt": "Choose the correctly reported Yes/No question:",
  "exercise.reported-speech.13.explanation": "Reported Yes/No questions use \"asked + if/whether + subject + verb\" with statement word order (\"if I liked coffee\").",
  "exercise.reported-speech.13.pro_tip": "Tip: No auxiliary \"do/did\" in reported questions; use statement word order.",
  "exercise.reported-speech.14.prompt": "Complete the reported Wh-question:",
  "exercise.reported-speech.14.explanation": "\"She asked me where I lived\" uses statement word order and backshifted past simple.",
  "exercise.reported-speech.14.pro_tip": "Tip: Wh-word + Subject + Verb.",
  "exercise.reported-speech.15.prompt": "Complete the reported request with an infinitive:",
  "exercise.reported-speech.15.explanation": "Requests and commands are reported with \"to + base verb\" (\"asked me to close\").",
  "exercise.reported-speech.15.pro_tip": "Tip: asked/told + person + to + verb.",
  "exercise.reported-speech.16.prompt": "Choose the correctly reported negative command:",
  "exercise.reported-speech.16.explanation": "\"told us not to touch that\" uses \"not to + base verb\" for negative commands.",
  "exercise.reported-speech.16.pro_tip": "Tip: told + person + not to + verb.",
};

const phrasalVerbsEnExtras: Record<string, string> = {
  "exercise.phrasal-verbs.1.prompt": "Complete the sentence with the phrasal verb for dressing:",
  "exercise.phrasal-verbs.1.explanation": "\"put on\" means to dress yourself in an item of clothing.",
  "exercise.phrasal-verbs.1.pro_tip": "Tip: put on (wear) vs take off (remove).",
  "exercise.phrasal-verbs.2.prompt": "Choose the sentence with the correct phrasal verb for lights:",
  "exercise.phrasal-verbs.2.explanation": "\"turn off\" means to deactivate an electrical device or light.",
  "exercise.phrasal-verbs.2.pro_tip": "Tip: turn on / turn off.",
  "exercise.phrasal-verbs.3.prompt": "Complete the sentence for getting out of bed:",
  "exercise.phrasal-verbs.3.explanation": "\"get up\" means to physically rise out of bed.",
  "exercise.phrasal-verbs.3.pro_tip": "Tip: wake up (stop sleeping) vs get up (leave the bed).",
  "exercise.phrasal-verbs.4.prompt": "True or False?",
  "exercise.phrasal-verbs.4.statement": "A phrasal verb consists of a verb + a particle (preposition or adverb), creating a new meaning different from the original verb alone.",
  "exercise.phrasal-verbs.4.explanation": "True. The combination produces an idiomatic meaning.",
  "exercise.phrasal-verbs.4.pro_tip": "Tip: Learn phrasal verbs as single vocabulary items.",
  "exercise.phrasal-verbs.5.prompt": "Complete the sentence for canceling an event:",
  "exercise.phrasal-verbs.5.explanation": "\"call off\" means to cancel an event or meeting.",
  "exercise.phrasal-verbs.5.pro_tip": "Tip: call off = cancel.",
  "exercise.phrasal-verbs.6.prompt": "Choose the sentence for friendly relationships:",
  "exercise.phrasal-verbs.6.explanation": "\"get along with\" means to have a friendly and harmonious relationship with someone.",
  "exercise.phrasal-verbs.6.pro_tip": "Tip: get along with someone.",
  "exercise.phrasal-verbs.7.prompt": "Drag the words to form a sentence expressing anticipation:",
  "exercise.phrasal-verbs.7.explanation": "\"I am really looking forward to my vacation.\"",
  "exercise.phrasal-verbs.7.pro_tip": "Tip: look forward to + noun / -ing.",
  "exercise.phrasal-verbs.8.prompt": "Complete the sentence for discovering information:",
  "exercise.phrasal-verbs.8.explanation": "\"find out\" means to discover a fact or piece of information.",
  "exercise.phrasal-verbs.8.pro_tip": "Tip: find out = discover.",
  "exercise.phrasal-verbs.9.prompt": "Complete the encouraging sentence:",
  "exercise.phrasal-verbs.9.explanation": "\"give up\" means to quit or surrender.",
  "exercise.phrasal-verbs.9.pro_tip": "Tip: Never give up!",
  "exercise.phrasal-verbs.10.prompt": "Choose the sentence meaning to have no more supply left:",
  "exercise.phrasal-verbs.10.explanation": "\"run out of\" means to deplete a supply of something completely.",
  "exercise.phrasal-verbs.10.pro_tip": "Tip: run out of milk / coffee / time.",
  "exercise.phrasal-verbs.11.prompt": "Complete the proverb for postponing:",
  "exercise.phrasal-verbs.11.explanation": "\"put off\" means to postpone or delay an action.",
  "exercise.phrasal-verbs.11.pro_tip": "Tip: put off = postpone.",
  "exercise.phrasal-verbs.12.prompt": "Match the phrasal verbs with their definitions:",
  "exercise.phrasal-verbs.12.explanation": "Match call off, run out of, look after, and figure out.",
  "exercise.phrasal-verbs.12.pro_tip": "Tip: Review definitions to build confidence.",
  "exercise.phrasal-verbs.13.prompt": "Choose the correct pronoun placement for separable phrasal verbs:",
  "exercise.phrasal-verbs.13.explanation": "When the object is a pronoun (\"it\"), it MUST go between the verb and particle (\"turn it off\").",
  "exercise.phrasal-verbs.13.pro_tip": "Tip: Turn it off (never \"turn off it\").",
  "exercise.phrasal-verbs.14.prompt": "Complete the sentence for searching in a reference book:",
  "exercise.phrasal-verbs.14.explanation": "\"look it up\" means to search for information in a dictionary, phonebook, or online.",
  "exercise.phrasal-verbs.14.pro_tip": "Tip: look [something] up.",
  "exercise.phrasal-verbs.15.prompt": "Reorder the sentence with \"take off\":",
  "exercise.phrasal-verbs.15.explanation": "\"She took off her coat and sat down.\"",
  "exercise.phrasal-verbs.15.pro_tip": "Tip: take off = remove clothing.",
  "exercise.phrasal-verbs.16.prompt": "True or False?",
  "exercise.phrasal-verbs.16.statement": "With separable phrasal verbs, when the object is a pronoun (it, him, her, them), it MUST be placed between the verb and the particle (e.g. \"pick it up\", never \"pick up it\").",
  "exercise.phrasal-verbs.16.explanation": "True. Pronouns must be placed in the middle position.",
  "exercise.phrasal-verbs.16.pro_tip": "Tip: Put pronouns in the middle!",
};

const linkingWordsEnExtras: Record<string, string> = {
  "exercise.linking-words.1.prompt": "Complete the contrast sentence before a gerund/feeling:",
  "exercise.linking-words.1.explanation": "\"despite\" is followed by a noun or gerund (\"despite feeling sick\").",
  "exercise.linking-words.1.pro_tip": "Tip: despite + -ing / noun (never \"despite that verb\").",
  "exercise.linking-words.2.prompt": "Choose the correct sentence with \"Although\":",
  "exercise.linking-words.2.explanation": "\"Although\" is followed by a full subject + verb clause (\"Although it was raining...\").",
  "exercise.linking-words.2.pro_tip": "Tip: Although + Subject + Verb.",
  "exercise.linking-words.3.prompt": "Complete the sentence with the transition word:",
  "exercise.linking-words.3.explanation": "\"However\" introduces a contrasting sentence and is followed by a comma.",
  "exercise.linking-words.3.pro_tip": "Tip: However, + sentence.",
  "exercise.linking-words.4.prompt": "True or False?",
  "exercise.linking-words.4.statement": "\"Although\" is followed by a subject + verb clause (e.g. \"Although it rained\"), while \"despite / in spite of\" is followed by a noun or gerund (e.g. \"Despite the rain / Despite raining\").",
  "exercise.linking-words.4.explanation": "True. This is the essential grammatical distinction between them.",
  "exercise.linking-words.4.pro_tip": "Tip: Although + clause vs Despite + noun/-ing.",
  "exercise.linking-words.5.prompt": "Choose the sentence adding supporting information:",
  "exercise.linking-words.5.explanation": "\"Furthermore\" adds an additional supporting point at the start of a sentence.",
  "exercise.linking-words.5.pro_tip": "Tip: Furthermore / Moreover = In addition.",
  "exercise.linking-words.6.prompt": "Complete the addition phrase:",
  "exercise.linking-words.6.explanation": "\"In addition to\" is the standard prepositional phrase for adding items.",
  "exercise.linking-words.6.pro_tip": "Tip: In addition to + noun.",
  "exercise.linking-words.7.prompt": "Drag the words to form a sentence with \"moreover\":",
  "exercise.linking-words.7.explanation": "\"She is smart and, moreover, she is very hardworking.\"",
  "exercise.linking-words.7.pro_tip": "Tip: moreover adds extra emphasis.",
  "exercise.linking-words.8.prompt": "Complete the sentence with \"besides\":",
  "exercise.linking-words.8.explanation": "\"besides\" means \"in addition / moreover\" when giving an extra reason.",
  "exercise.linking-words.8.pro_tip": "Tip: besides = additionally / on top of that.",
  "exercise.linking-words.9.prompt": "Complete the cause sentence before a noun:",
  "exercise.linking-words.9.explanation": "\"due to\" is followed by a noun phrase (\"due to the dense fog\").",
  "exercise.linking-words.9.pro_tip": "Tip: due to / because of + noun phrase.",
  "exercise.linking-words.10.prompt": "Choose the sentence expressing logical result:",
  "exercise.linking-words.10.explanation": "\"Therefore, he won the championship\" expresses the direct result of training hard.",
  "exercise.linking-words.10.pro_tip": "Tip: Therefore = As a result.",
  "exercise.linking-words.11.prompt": "Reorder the result statement:",
  "exercise.linking-words.11.explanation": "\"As a result, sales increased by twenty percent.\"",
  "exercise.linking-words.11.pro_tip": "Tip: As a result, + clause.",
  "exercise.linking-words.12.prompt": "True or False?",
  "exercise.linking-words.12.statement": "\"Therefore\" and \"As a result\" express consequences/conclusions, usually appearing at the beginning of a sentence followed by a comma.",
  "exercise.linking-words.12.explanation": "True. They are formal transition connectors.",
  "exercise.linking-words.12.pro_tip": "Tip: Always place a comma after Therefore and As a result at the start of a sentence.",
  "exercise.linking-words.13.prompt": "Match each connector group with its primary function:",
  "exercise.linking-words.13.explanation": "Match Contrast, Addition, Result, and Cause with their respective connectors.",
  "exercise.linking-words.13.pro_tip": "Tip: Group connectors by meaning to write more effectively.",
  "exercise.linking-words.14.prompt": "Complete the simultaneous time sentence:",
  "exercise.linking-words.14.explanation": "\"Meanwhile\" describes an action happening at the exact same time as another.",
  "exercise.linking-words.14.pro_tip": "Tip: Meanwhile = at the same time.",
  "exercise.linking-words.15.prompt": "Choose the sentence describing sequential actions:",
  "exercise.linking-words.15.explanation": "\"First we visited... afterwards, we had coffee\" describes chronological sequence.",
  "exercise.linking-words.15.pro_tip": "Tip: First... afterwards / then.",
  "exercise.linking-words.16.prompt": "Choose the sentence signaling a conclusion:",
  "exercise.linking-words.16.explanation": "\"In conclusion\" signals the final summarizing thought.",
  "exercise.linking-words.16.pro_tip": "Tip: In conclusion = To summarize.",
};

const futureFormsAndUsedToEnExtras: Record<string, string> = {
  "exercise.future-forms-and-used-to.1.prompt": "Complete the prediction based on visible evidence (black clouds):",
  "exercise.future-forms-and-used-to.1.explanation": "When there is clear present evidence (dark clouds), use \"is going to rain\".",
  "exercise.future-forms-and-used-to.1.pro_tip": "Tip: Present evidence = be going to.",
  "exercise.future-forms-and-used-to.2.prompt": "Choose the spontaneous decision at the moment of speaking:",
  "exercise.future-forms-and-used-to.2.explanation": "\"I'll get it!\" is a spontaneous decision made right when the doorbell rings.",
  "exercise.future-forms-and-used-to.2.pro_tip": "Tip: Spontaneous decision = will ('ll).",
  "exercise.future-forms-and-used-to.3.prompt": "Complete the prior plan / intention sentence:",
  "exercise.future-forms-and-used-to.3.explanation": "Because tickets were already bought last week, this is a prior plan -> \"are going to travel\".",
  "exercise.future-forms-and-used-to.3.pro_tip": "Tip: Prior plan / intention = be going to.",
  "exercise.future-forms-and-used-to.4.prompt": "True or False?",
  "exercise.future-forms-and-used-to.4.statement": "Use \"will\" for spontaneous decisions made at the moment of speaking, and \"be going to\" for prior plans and intentions.",
  "exercise.future-forms-and-used-to.4.explanation": "True. This is the key difference between will and going to.",
  "exercise.future-forms-and-used-to.4.pro_tip": "Tip: Instant decision = will; Planned before = going to.",
  "exercise.future-forms-and-used-to.5.prompt": "Choose the fixed arrangement with a specific time (dentist):",
  "exercise.future-forms-and-used-to.5.explanation": "Use Present Continuous (\"am meeting\") for fixed appointments and arrangements with people.",
  "exercise.future-forms-and-used-to.5.pro_tip": "Tip: Fixed appointment in calendar = Present Continuous.",
  "exercise.future-forms-and-used-to.6.prompt": "Complete the question about future plans:",
  "exercise.future-forms-and-used-to.6.explanation": "\"What are you doing this Friday night?\" asks about personal arrangements.",
  "exercise.future-forms-and-used-to.6.pro_tip": "Tip: What are you doing...? is very common for asking about weekend plans.",
  "exercise.future-forms-and-used-to.7.prompt": "Drag the words to form a fixed travel arrangement:",
  "exercise.future-forms-and-used-to.7.explanation": "\"They are flying to New York on Monday morning.\"",
  "exercise.future-forms-and-used-to.7.pro_tip": "Tip: are flying on Monday = fixed flight schedule.",
  "exercise.future-forms-and-used-to.8.prompt": "Complete the scheduled event sentence:",
  "exercise.future-forms-and-used-to.8.explanation": "\"We are having a team dinner tomorrow at 8:00 PM.\"",
  "exercise.future-forms-and-used-to.8.pro_tip": "Tip: are having = arranged dinner.",
  "exercise.future-forms-and-used-to.9.prompt": "Complete the past habit sentence (no longer true):",
  "exercise.future-forms-and-used-to.9.explanation": "\"used to\" expresses a routine habit in the past that is no longer done.",
  "exercise.future-forms-and-used-to.9.pro_tip": "Tip: used to + base verb.",
  "exercise.future-forms-and-used-to.10.prompt": "Choose the correct question form with \"did\":",
  "exercise.future-forms-and-used-to.10.explanation": "In questions with \"did\", \"used to\" drops the -d and becomes \"Did you use to...?\"",
  "exercise.future-forms-and-used-to.10.pro_tip": "Tip: Did you use to...? (no \"d\" on use).",
  "exercise.future-forms-and-used-to.11.prompt": "Complete the negative past habit sentence:",
  "exercise.future-forms-and-used-to.11.explanation": "\"I did not use to like olives\" expresses a past state that changed.",
  "exercise.future-forms-and-used-to.11.pro_tip": "Tip: didn't use to.",
  "exercise.future-forms-and-used-to.12.prompt": "True or False?",
  "exercise.future-forms-and-used-to.12.statement": "In negative and question forms with \"did\", \"used to\" changes to \"use to\" (e.g. \"I didn't use to\", \"Did you use to...?\").",
  "exercise.future-forms-and-used-to.12.explanation": "True. The auxiliary \"did\" already marks the past tense.",
  "exercise.future-forms-and-used-to.12.pro_tip": "Tip: Remember: did + use to (without \"d\").",
  "exercise.future-forms-and-used-to.13.prompt": "Match the expressions with their meaning:",
  "exercise.future-forms-and-used-to.13.explanation": "Match used to (past state/habit), would (repeated action), be used to (accustomed), and get used to (process).",
  "exercise.future-forms-and-used-to.13.pro_tip": "Tip: be used to + -ing means familiar/comfortable with.",
  "exercise.future-forms-and-used-to.14.prompt": "Complete the sentence with \"be used to + -ing\":",
  "exercise.future-forms-and-used-to.14.explanation": "\"am used to driving\" = I am accustomed to driving.",
  "exercise.future-forms-and-used-to.14.pro_tip": "Tip: be used to + V-ing.",
  "exercise.future-forms-and-used-to.15.prompt": "Choose the correct sentence for a past state:",
  "exercise.future-forms-and-used-to.15.explanation": "\"I used to have long hair\" — \"would\" cannot be used with stative verbs (have, be, live, know).",
  "exercise.future-forms-and-used-to.15.pro_tip": "Tip: Stative verbs (have, be, live) require \"used to\", never \"would\".",
  "exercise.future-forms-and-used-to.16.prompt": "Reorder the past habit sentence:",
  "exercise.future-forms-and-used-to.16.explanation": "\"She used to work in a bank.\"",
  "exercise.future-forms-and-used-to.16.pro_tip": "Tip: She used to work...",
};

const enComplete: Record<string, string> = {
  ...en,
  ...becauseSoThatEnExtras,
  ...adverbsOfFrequencyEnExtras,
  ...timeExpressionsEnExtras,
  ...didAndWasEnExtras,
  ...simplePastEnExtras,
};

// ─────────────────────────────────────────────────────────────────────────
// Now we generate the other locales by translating the structural EN strings
// and using targeted per-key overrides for the most user-visible prompts.
// We use a deterministic translation strategy: for the missing keys, we
// provide a localized explanation or the English fallback is shown (the
// runner always has English available). This keeps the volume manageable
// while still delivering real native-language content for the most important
// strings.
// ─────────────────────────────────────────────────────────────────────────

const becauseSoThatEsExtras: Record<string, string> = {
  'exercise.because-so-that.1.prompt': 'Completa la oración con la palabra correcta.',
  'exercise.because-so-that.1.explanation': '"Because" (porque) introduce una causa o razón. Explica por qué ocurrió la acción.',
  'exercise.because-so-that.1.pro_tip': 'Consejo: pregúntate "¿por qué ocurrió esto?" → usa "because".',

  'exercise.because-so-that.2.prompt': '¿Qué oración usa "because" de forma correcta?',
  'exercise.because-so-that.2.explanation': 'La opción B es correcta: la estructura natural es "[acción] because [razón]".',
  'exercise.because-so-that.2.pro_tip': 'Consejo: la estructura más simple es "[acción] + because + [razón]".',

  'exercise.because-so-that.3.prompt': 'Reordena las palabras para formar una oración correcta.',
  'exercise.because-so-that.3.explanation': 'Sujeto + verbo + adjetivo + conector (because) + causa.',
  'exercise.because-so-that.3.pro_tip': 'Consejo: el verbo en pasado regular termina en -ed.',

  'exercise.because-so-that.4.prompt': 'Elige el conector que indica propósito u objetivo, no causa.',
  'exercise.because-so-that.4.explanation': '"So that" (para que / a fin de que) introduce una meta o propósito. Se suele usar con "could" o "would".',
  'exercise.because-so-that.4.pro_tip': 'Consejo: si puedes reemplazar el conector por "para que", la opción correcta es "so that".',

  'exercise.because-so-that.5.prompt': 'Arrastra las palabras al orden correcto para formar la oración.',
  'exercise.because-so-that.5.explanation': 'El orden estándar es: sujeto + verbo + objeto + "so that" + cláusula de propósito.',
  'exercise.because-so-that.5.pro_tip': 'Consejo: "so" solo = resultado; "so that" = propósito u objetivo.',

  'exercise.because-so-that.6.prompt': '¿Verdadero o Falso?',
  'exercise.because-so-that.6.statement': 'Puedes comenzar una oración con "Because" cuando la razón va primero.',
  'exercise.because-so-that.6.explanation': 'Verdadero. "Because" puede ir al inicio si va seguido de una coma antes de la cláusula principal.',
  'exercise.because-so-that.6.pro_tip': 'Consejo: si "Because" inicia la frase, pon una coma antes de la segunda parte.',

  'exercise.because-so-that.7.prompt': 'Elige la mejor oración.',
  'exercise.because-so-that.7.explanation': '"Because" debe ir seguido de una cláusula completa (sujeto + verbo).',
  'exercise.because-so-that.7.pro_tip': 'Consejo: siempre incluye sujeto después de "because". "Because tired" es incorrecto.',

  'exercise.because-so-that.8.prompt': 'Completa la oración.',
  'exercise.because-so-that.8.explanation': '"Because of" va seguido de un sustantivo o nombre (no de un verbo). "Because of the rain" es lo correcto.',
  'exercise.because-so-that.8.pro_tip': 'Consejo: "because of + sustantivo" vs. "because + verbo/oración".',

  'exercise.because-so-that.9.prompt': 'Reordena las palabras para formar una oración correcta.',
  'exercise.because-so-that.9.explanation': 'Sujeto + verbo + adjetivo + "so" + consecuencia.',
  'exercise.because-so-that.9.pro_tip': 'Consejo: "so" introduce la consecuencia o resultado de algo.',

  'exercise.because-so-that.10.prompt': 'Reordena las palabras para formar una oración correcta con "so that".',
  'exercise.because-so-that.10.explanation': '"So that" + cláusula de propósito: explica el objetivo que se busca lograr.',
  'exercise.because-so-that.10.pro_tip': 'Consejo: combina "so that" con verbos modales como "could" o "would".',

  'exercise.because-so-that.11.prompt': '¿Qué oración expresa correctamente un propósito u objetivo?',
  'exercise.because-so-that.11.explanation': '"So that" indica la intención o meta, no solo la causa del hecho.',
  'exercise.because-so-that.11.pro_tip': 'Consejo: pregúntate "¿cuál era la meta?" Si hay una meta, usa "so that".',

  'exercise.because-so-that.12.prompt': '¿Verdadero o Falso?',
  'exercise.because-so-that.12.statement': '"So that" introduce un propósito: la razón por la que alguien hace algo para lograr un resultado.',
  'exercise.because-so-that.12.explanation': 'Verdadero. "So that" se utiliza para expresar la meta o intención de una acción.',
  'exercise.because-so-that.12.pro_tip': 'Consejo: si expresa la intención de lograr algo, utiliza "so that".',

  'exercise.because-so-that.13.prompt': 'Selecciona el conector de resultado.',
  'exercise.because-so-that.13.explanation': '"So" (por lo tanto / así que) expresa la consecuencia directa.',
  'exercise.because-so-that.13.pro_tip': 'Consejo: "so" como conector de consecuencia suele ir precedido de coma.',

  'exercise.because-so-that.14.prompt': 'Reordena las palabras para formar una oración correcta.',
  'exercise.because-so-that.14.explanation': 'Estructura: Sujeto + verbo + adjetivo + "because" + causa.',
  'exercise.because-so-that.14.pro_tip': 'Consejo: "because" une la consecuencia inicial con su causa.',

  'exercise.because-so-that.15.prompt': 'Elige la oración que usa "because" correctamente en tiempo pasado.',
  'exercise.because-so-that.15.explanation': 'Ambas partes de la oración deben mantener concordancia en pasado simple.',
  'exercise.because-so-that.15.pro_tip': 'Consejo: si la primera acción está en pasado, la causa también va en pasado.',

  'exercise.because-so-that.16.prompt': 'Completa la oración con el conector adecuado.',
  'exercise.because-so-that.16.explanation': '"So that" indica el propósito de ahorrar dinero (poder comprar la bicicleta).',
  'exercise.because-so-that.16.pro_tip': 'Consejo: "so that I could" es el patrón clásico de propósito en pasado.',

  'exercise.because-so-that.17.prompt': 'Elige entre "because of" y "because".',
  'exercise.because-so-that.17.explanation': '"Because of" se usa antes de un sustantivo ("the fog"), mientras que "because" necesita un verbo.',
  'exercise.because-so-that.17.pro_tip': 'Consejo: si sigue un sustantivo sin verbo, usa "because of".',

  'exercise.because-so-that.18.prompt': 'Reordena las palabras para formar la oración.',
  'exercise.because-so-that.18.explanation': 'Sujeto + verbo + adjetivo + "so that" + todos + pudiesen + escuchar.',
  'exercise.because-so-that.18.pro_tip': 'Consejo: "so that everyone could hear" es una frase muy común de propósito.',

  'exercise.because-so-that.19.prompt': 'Elige la oración que usa correctamente "so" para resultado.',
  'exercise.because-so-that.19.explanation': '"I was hungry, so I ate" expresa causa y resultado de forma natural.',
  'exercise.because-so-that.19.pro_tip': 'Consejo: no confundas "so" (resultado) con "so that" (propósito).',

  'exercise.because-so-that.20.prompt': 'Completa la oración de propósito negativo.',
  'exercise.because-so-that.20.explanation': '"So that he wouldn\'t..." expresa el propósito de evitar una consecuencia (despertar al bebé).',
  'exercise.because-so-that.20.pro_tip': 'Consejo: "so that + wouldn\'t" expresa la intención de evitar algo.',
};


const presentPerfectVsSimplePastEsExtras: Record<string, string> = {
  "exercise.present-perfect-vs-simple-past.1.prompt": "Completa la oración con la forma de pasado correcta:",
  "exercise.present-perfect-vs-simple-past.1.explanation": "\"yesterday morning\" indica un momento de tiempo terminado en el pasado, por lo que se usa el Pasado Simple (\"lost\").",
  "exercise.present-perfect-vs-simple-past.1.pro_tip": "Consejo: Marcadores de tiempo terminado (yesterday, last week, in 2020) = Pasado Simple.",
  "exercise.present-perfect-vs-simple-past.2.prompt": "Elige la oración con el orden de palabras y tiempo verbal correcto:",
  "exercise.present-perfect-vs-simple-past.2.explanation": "\"has already finished\" coloca \"already\" entre el auxiliar \"has\" y el participio pasado.",
  "exercise.present-perfect-vs-simple-past.2.pro_tip": "Consejo: Sujeto + have/has + already + participio pasado.",
  "exercise.present-perfect-vs-simple-past.3.prompt": "Completa el espacio con \"since\" o \"for\":",
  "exercise.present-perfect-vs-simple-past.3.explanation": "Usa \"since\" para indicar el punto de inicio en el tiempo (since 2018).",
  "exercise.present-perfect-vs-simple-past.3.pro_tip": "Consejo: \"since\" + fecha/momento de inicio; \"for\" + duración (ej. for 5 years).",
  "exercise.present-perfect-vs-simple-past.4.prompt": "¿Verdadero o Falso?",
  "exercise.present-perfect-vs-simple-past.4.statement": "Puedes usar \"yesterday\", \"last week\" y \"in 2015\" con el tiempo Present Perfect en inglés estándar.",
  "exercise.present-perfect-vs-simple-past.4.explanation": "Falso. Las palabras de tiempo terminado exigen el Pasado Simple.",
  "exercise.present-perfect-vs-simple-past.4.pro_tip": "Consejo: Nunca combines marcadores de tiempo terminado con Present Perfect.",
  "exercise.present-perfect-vs-simple-past.5.prompt": "Elige el diálogo natural y gramaticalmente correcto:",
  "exercise.present-perfect-vs-simple-past.5.explanation": "A pregunta por la experiencia en Present Perfect; B confirma y pasa a Pasado Simple para el día específico (\"on Friday\").",
  "exercise.present-perfect-vs-simple-past.5.pro_tip": "Consejo: Present Perfect (experiencia) -> Pasado Simple (detalles específicos).",
  "exercise.present-perfect-vs-simple-past.6.prompt": "Completa la respuesta en el diálogo:",
  "exercise.present-perfect-vs-simple-past.6.explanation": "\"when I was in Spain\" se refiere a un periodo de tiempo terminado en el pasado, por lo que se usa \"ate\".",
  "exercise.present-perfect-vs-simple-past.6.pro_tip": "Consejo: Las cláusulas \"When I was...\" siempre llevan Pasado Simple.",
  "exercise.present-perfect-vs-simple-past.7.prompt": "Arrastra las palabras para formar una oración correcta:",
  "exercise.present-perfect-vs-simple-past.7.explanation": "Present Perfect para experiencia de vida (\"have never visited\"), Pasado Simple para el año terminado (\"went there in 2020\").",
  "exercise.present-perfect-vs-simple-past.7.pro_tip": "Consejo: Une las dos cláusulas con \"but\" al contrastar experiencias.",
  "exercise.present-perfect-vs-simple-past.8.prompt": "Completa la oración con \"yet\":",
  "exercise.present-perfect-vs-simple-past.8.explanation": "\"yet\" (aún/todavía) se usa en oraciones negativas de Present Perfect para indicar que se espera completar la acción pronto.",
  "exercise.present-perfect-vs-simple-past.8.pro_tip": "Consejo: Sujeto + hasn't/haven't + V3 + yet.",
  "exercise.present-perfect-vs-simple-past.9.prompt": "Elige la pregunta correcta con \"When\":",
  "exercise.present-perfect-vs-simple-past.9.explanation": "\"When\" pregunta por un punto específico en el tiempo, requiriendo el auxiliar de Pasado Simple \"did\".",
  "exercise.present-perfect-vs-simple-past.9.pro_tip": "Consejo: When did you + verbo base...?",
  "exercise.present-perfect-vs-simple-past.10.prompt": "Completa la pregunta sobre si algo ya se concluyó:",
  "exercise.present-perfect-vs-simple-past.10.explanation": "\"Have you finished...?\" pregunta si la acción ha sido completada hasta este momento.",
  "exercise.present-perfect-vs-simple-past.10.pro_tip": "Consejo: Have you + participio pasado...?",
  "exercise.present-perfect-vs-simple-past.11.prompt": "Empareja las preguntas con sus respuestas adecuadas:",
  "exercise.present-perfect-vs-simple-past.11.explanation": "Relaciona preguntas en Pasado Simple y Present Perfect con sus respuestas temporales correspondientes.",
  "exercise.present-perfect-vs-simple-past.11.pro_tip": "Consejo: \"When did you...?\" va con \"ago\"; \"How long have you...?\" va con \"for/since\".",
  "exercise.present-perfect-vs-simple-past.12.prompt": "¿Verdadero o Falso?",
  "exercise.present-perfect-vs-simple-past.12.statement": "Las preguntas que inician con \"When...?\" indagan por un momento específico en el pasado, por lo que suelen llevar Pasado Simple (\"When did you...?\").",
  "exercise.present-perfect-vs-simple-past.12.explanation": "Verdadero. \"When\" pide un punto exacto en el tiempo pasado.",
  "exercise.present-perfect-vs-simple-past.12.pro_tip": "Consejo: Evita decir \"When have you...?\"; di \"When did you...?\".",
  "exercise.present-perfect-vs-simple-past.13.prompt": "Elige la oración correcta para un hecho histórico:",
  "exercise.present-perfect-vs-simple-past.13.explanation": "Shakespeare vivió en una época ya concluida y \"in 1601\" es una fecha terminada -> usa Pasado Simple (\"wrote\").",
  "exercise.present-perfect-vs-simple-past.13.pro_tip": "Consejo: Autores fallecidos y hechos históricos siempre van en Pasado Simple.",
  "exercise.present-perfect-vs-simple-past.14.prompt": "Completa la oración para un periodo de tiempo aún en curso:",
  "exercise.present-perfect-vs-simple-past.14.explanation": "Como todavía es de mañana (10 AM), el periodo no ha terminado -> usa Present Perfect (\"has drunk\").",
  "exercise.present-perfect-vs-simple-past.14.pro_tip": "Consejo: \"this morning / this week / today\" llevan Present Perfect si el periodo sigue abierto.",
  "exercise.present-perfect-vs-simple-past.15.prompt": "Reordena las palabras para formar una oración pasada con \"ago\":",
  "exercise.present-perfect-vs-simple-past.15.explanation": "\"I bought this phone two months ago.\"",
  "exercise.present-perfect-vs-simple-past.15.pro_tip": "Consejo: [duración de tiempo] + ago + Pasado Simple.",
  "exercise.present-perfect-vs-simple-past.16.prompt": "Elige la oración que expresa un estado continuo hasta hoy:",
  "exercise.present-perfect-vs-simple-past.16.explanation": "\"We have known each other for ten years\" muestra una relación que comenzó en el pasado y continúa en el presente.",
  "exercise.present-perfect-vs-simple-past.16.pro_tip": "Consejo: Estados que continúan en el presente = Present Perfect + for/since.",
};

const pastPerfectEsExtras: Record<string, string> = {
  "exercise.past-perfect.1.prompt": "Completa la oración con el participio pasado:",
  "exercise.past-perfect.1.explanation": "\"had already started\" indica que la película empezó antes de que llegáramos.",
  "exercise.past-perfect.1.pro_tip": "Consejo: had + participio pasado (V3).",
  "exercise.past-perfect.2.prompt": "Elige la oración que expresa una experiencia previa a otro hecho pasado:",
  "exercise.past-perfect.2.explanation": "\"had never seen\" expresa la experiencia previa al hecho pasado de mudarse a Canadá.",
  "exercise.past-perfect.2.pro_tip": "Consejo: Usa Past Perfect para experiencias previas a otro momento pasado.",
  "exercise.past-perfect.3.prompt": "Completa la oración explicando una causa en el pasado:",
  "exercise.past-perfect.3.explanation": "Haber olvidado la cartera ocurrió antes de no tener efectivo -> \"had left\".",
  "exercise.past-perfect.3.pro_tip": "Consejo: La causa anterior va en Past Perfect.",
  "exercise.past-perfect.4.prompt": "¿Verdadero o Falso?",
  "exercise.past-perfect.4.statement": "La fórmula del Past Perfect es siempre \"had + participio pasado\" para todos los sujetos (I, you, he, she, they, we).",
  "exercise.past-perfect.4.explanation": "Verdadero. \"had\" no cambia con ninguna persona.",
  "exercise.past-perfect.4.pro_tip": "Consejo: No hay \"has\" en Past Perfect — siempre es \"had\".",
  "exercise.past-perfect.5.prompt": "Elige la oración correcta con \"by the time\":",
  "exercise.past-perfect.5.explanation": "Que la policía asegurara la zona ocurrió antes de que llegara la ambulancia.",
  "exercise.past-perfect.5.pro_tip": "Consejo: By the time + Pasado Simple, + Past Perfect.",
  "exercise.past-perfect.6.prompt": "Completa la oración:",
  "exercise.past-perfect.6.explanation": "El tren partió antes de llegar a la estación -> \"had departed\".",
  "exercise.past-perfect.6.pro_tip": "Consejo: Past Perfect marca la acción que ocurrió primero.",
  "exercise.past-perfect.7.prompt": "Arrastra las palabras para formar una oración temporal:",
  "exercise.past-perfect.7.explanation": "\"After he had finished his dinner, he went for a walk.\"",
  "exercise.past-perfect.7.pro_tip": "Consejo: After + Past Perfect, Pasado Simple.",
  "exercise.past-perfect.8.prompt": "Analiza el orden cronológico de los acontecimientos:",
  "exercise.past-perfect.8.explanation": "La acción con \"had studied\" ocurrió primero; hacer el examen ocurrió después.",
  "exercise.past-perfect.8.pro_tip": "Consejo: Past Perfect = Acción 1 (la más antigua en el pasado).",
  "exercise.past-perfect.9.prompt": "Completa la oración con la preposición temporal:",
  "exercise.past-perfect.9.explanation": "\"By the time\" (para cuando / en el momento en que) introduce un límite temporal en el pasado.",
  "exercise.past-perfect.9.pro_tip": "Consejo: \"By the time\" es un indicador clásico de Past Perfect.",
  "exercise.past-perfect.10.prompt": "Elige la secuencia correcta de tiempos con \"before\":",
  "exercise.past-perfect.10.explanation": "Vivir en España ocurrió antes de mudarse a Francia -> \"had lived... before they moved\".",
  "exercise.past-perfect.10.pro_tip": "Consejo: Past Perfect + before + Pasado Simple.",
  "exercise.past-perfect.11.prompt": "Empareja los resultados pasados con sus causas anteriores:",
  "exercise.past-perfect.11.explanation": "Conecta la situación en Pasado Simple con su causa previa en Past Perfect.",
  "exercise.past-perfect.11.pro_tip": "Consejo: Resultado en Pasado Simple because + causa en Past Perfect.",
  "exercise.past-perfect.12.prompt": "Completa la oración con el participio pasado:",
  "exercise.past-perfect.12.explanation": "Comer demasiado ocurrió antes de sentirse mal -> \"had eaten\".",
  "exercise.past-perfect.12.pro_tip": "Consejo: eat -> ate -> eaten.",
  "exercise.past-perfect.13.prompt": "Elige el intercambio conversacional correcto en pasado:",
  "exercise.past-perfect.13.explanation": "\"my alarm had not gone off\" ocurrió antes de llegar tarde.",
  "exercise.past-perfect.13.pro_tip": "Consejo: Explica contratiempos pasados con Past Perfect.",
  "exercise.past-perfect.14.prompt": "Completa el diálogo con \"already\":",
  "exercise.past-perfect.14.explanation": "\"had already\" se coloca antes del participio pasado \"left\".",
  "exercise.past-perfect.14.pro_tip": "Consejo: had + already + participio pasado.",
  "exercise.past-perfect.15.prompt": "Reordena la oración narrativa:",
  "exercise.past-perfect.15.explanation": "\"I realized that I had locked myself out.\"",
  "exercise.past-perfect.15.pro_tip": "Consejo: Realized (Pasado Simple) + had locked (Past Perfect).",
  "exercise.past-perfect.16.prompt": "¿Verdadero o Falso?",
  "exercise.past-perfect.16.statement": "En la oración \"When I arrived, they were having dinner\", la cena estaba en progreso; en \"When I arrived, they had had dinner\", la cena ya había terminado.",
  "exercise.past-perfect.16.explanation": "Verdadero. Past Continuous = en curso; Past Perfect = completada previamente.",
  "exercise.past-perfect.16.pro_tip": "Consejo: Fíjate cómo los tiempos verbales aclaran si la acción seguía en marcha o ya había acabado.",
};

const conditionalsAllEsExtras: Record<string, string> = {
  "exercise.conditionals-all.1.prompt": "Completa la oración de Condicional Cero (hecho científico):",
  "exercise.conditionals-all.1.explanation": "El condicional cero usa Presente Simple en ambas partes para verdades universales: \"If you heat ice, it melts.\"",
  "exercise.conditionals-all.1.pro_tip": "Consejo: Condicional Cero: If + Presente Simple, Presente Simple.",
  "exercise.conditionals-all.2.prompt": "Elige la oración correcta de Primer Condicional:",
  "exercise.conditionals-all.2.explanation": "Primer condicional: \"If it rains tomorrow, we will stay at home.\" Nunca pongas \"will\" dentro de la cláusula \"if\".",
  "exercise.conditionals-all.2.pro_tip": "Consejo: If + Presente Simple, will + verbo base.",
  "exercise.conditionals-all.3.prompt": "Completa el resultado en Primer Condicional:",
  "exercise.conditionals-all.3.explanation": "Usa \"will + pass\" para la consecuencia futura real si estudias.",
  "exercise.conditionals-all.3.pro_tip": "Consejo: will + forma base para el resultado futuro.",
  "exercise.conditionals-all.4.prompt": "¿Verdadero o Falso?",
  "exercise.conditionals-all.4.statement": "En oraciones de Primer Condicional, puedes poner \"will\" dentro de la cláusula \"if\" (ej. \"If you will call me, I will answer\").",
  "exercise.conditionals-all.4.explanation": "Falso. La cláusula con \"if\" debe ir en Presente Simple (\"If you call me...\").",
  "exercise.conditionals-all.4.pro_tip": "Consejo: Nunca pongas \"will\" inmediatamente después de \"if\".",
  "exercise.conditionals-all.5.prompt": "Elige la oración correcta de Segundo Condicional:",
  "exercise.conditionals-all.5.explanation": "Segundo condicional: \"If I won the lottery, I would travel around the world\" (situación hipotética/imaginaria).",
  "exercise.conditionals-all.5.pro_tip": "Consejo: If + Pasado Simple, would + verbo base.",
  "exercise.conditionals-all.6.prompt": "Completa la fórmula de consejo en Segundo Condicional:",
  "exercise.conditionals-all.6.explanation": "En inglés estándar se usa \"were\" para todas las personas en condicionales hipotéticos: \"If I were you...\".",
  "exercise.conditionals-all.6.pro_tip": "Consejo: \"If I were you, I would...\" es la frase por excelencia para aconsejar.",
  "exercise.conditionals-all.7.prompt": "Arrastra las palabras para formar una oración de Segundo Condicional:",
  "exercise.conditionals-all.7.explanation": "\"If she had more time, she would learn Japanese.\"",
  "exercise.conditionals-all.7.pro_tip": "Consejo: If + had (pasado simple), would learn.",
  "exercise.conditionals-all.8.prompt": "Completa la pregunta hipotética:",
  "exercise.conditionals-all.8.explanation": "Las preguntas en 2.º condicional usan \"¿What would you do if...?\"",
  "exercise.conditionals-all.8.pro_tip": "Consejo: What would you do if + pasado simple?",
  "exercise.conditionals-all.9.prompt": "Elige la oración de Tercer Condicional (arrepentimiento pasado):",
  "exercise.conditionals-all.9.explanation": "Fórmula de tercer condicional: \"If I had set my alarm, I would not have been late.\"",
  "exercise.conditionals-all.9.pro_tip": "Consejo: If + had + V3, would have + V3.",
  "exercise.conditionals-all.10.prompt": "Completa el resultado negativo en Tercer Condicional:",
  "exercise.conditionals-all.10.explanation": "\"wouldn't have missed\" expresa el resultado que se habría evitado en el pasado.",
  "exercise.conditionals-all.10.pro_tip": "Consejo: would not have + participio pasado.",
  "exercise.conditionals-all.11.prompt": "Reordena la oración de Tercer Condicional:",
  "exercise.conditionals-all.11.explanation": "\"She would have passed if she had studied.\"",
  "exercise.conditionals-all.11.pro_tip": "Consejo: La cláusula principal puede ir primero sin coma.",
  "exercise.conditionals-all.12.prompt": "¿Verdadero o Falso?",
  "exercise.conditionals-all.12.statement": "El Tercer Condicional habla de situaciones hipotéticas en el pasado que ya no se pueden cambiar.",
  "exercise.conditionals-all.12.explanation": "Verdadero. Se utiliza para arrepentimientos y desenlaces pasados alternativos.",
  "exercise.conditionals-all.12.pro_tip": "Consejo: 3.º condicional = alternativa imposible en el pasado.",
  "exercise.conditionals-all.13.prompt": "Empareja cada cláusula condicional con su resultado:",
  "exercise.conditionals-all.13.explanation": "Relaciona ejemplos de Condicional Cero, 1.º, 2.º y 3.º con sus resultados correspondientes.",
  "exercise.conditionals-all.13.pro_tip": "Consejo: Cero=hecho, 1.º=futuro probable, 2.º=imaginario presente, 3.º=arrepentimiento pasado.",
  "exercise.conditionals-all.14.prompt": "Completa la condición en Primer Condicional:",
  "exercise.conditionals-all.14.explanation": "Usa el Presente Simple negativo \"don't wear\" en la parte del if.",
  "exercise.conditionals-all.14.pro_tip": "Consejo: If + don't/doesn't + verbo base.",
  "exercise.conditionals-all.15.prompt": "Elige la oración correcta de Segundo Condicional:",
  "exercise.conditionals-all.15.explanation": "\"If he spoke English, he would get that international job.\"",
  "exercise.conditionals-all.15.pro_tip": "Consejo: spoke (pasado) -> would get.",
  "exercise.conditionals-all.16.prompt": "Identifica a qué tipo de condicional pertenece esta oración:",
  "exercise.conditionals-all.16.explanation": "\"If I had known, I would have told you\" es una oración clásica de Tercer Condicional.",
  "exercise.conditionals-all.16.pro_tip": "Consejo: had known + would have told = 3.º condicional.",
};

const modalVerbsEsExtras: Record<string, string> = {
  "exercise.modal-verbs.1.prompt": "Completa la oración con el modal de consejo:",
  "exercise.modal-verbs.1.explanation": "\"should\" da un consejo amigable y va seguido del verbo base \"get\".",
  "exercise.modal-verbs.1.pro_tip": "Consejo: should + verbo base (nunca \"should to\").",
  "exercise.modal-verbs.2.prompt": "Elige la oración que expresa prohibición estricta:",
  "exercise.modal-verbs.2.explanation": "\"mustn't\" expresa que algo está terminantemente prohibido por norma o ley.",
  "exercise.modal-verbs.2.pro_tip": "Consejo: mustn't = prohibido.",
  "exercise.modal-verbs.3.prompt": "Completa la oración que expresa ausencia de obligación:",
  "exercise.modal-verbs.3.explanation": "\"don't have to\" expresa que levantarse temprano no es necesario.",
  "exercise.modal-verbs.3.pro_tip": "Consejo: don't have to = no es necesario (tienes la opción).",
  "exercise.modal-verbs.4.prompt": "¿Verdadero o Falso?",
  "exercise.modal-verbs.4.statement": "Los verbos modales como \"should\", \"must\" y \"can\" van seguidos directamente del verbo en forma base sin \"to\" (ej. \"He should go\", no \"He should to go\").",
  "exercise.modal-verbs.4.explanation": "Verdadero. Los modales toman el infinitivo sin \"to\".",
  "exercise.modal-verbs.4.pro_tip": "Consejo: Nunca digas \"must to\" ni \"can to\".",
  "exercise.modal-verbs.5.prompt": "Elige la petición educada con \"Could\":",
  "exercise.modal-verbs.5.explanation": "\"Could you please...?\" es la forma más educada y natural de pedir favores.",
  "exercise.modal-verbs.5.pro_tip": "Consejo: \"Could you...\" es más suave y cortés que \"Can you...\".",
  "exercise.modal-verbs.6.prompt": "Completa la oración de habilidad en el pasado:",
  "exercise.modal-verbs.6.explanation": "\"could\" expresa habilidad general en el pasado.",
  "exercise.modal-verbs.6.pro_tip": "Consejo: could = pasado de can (podía/sabía).",
  "exercise.modal-verbs.7.prompt": "Arrastra las palabras para formar una petición de permiso formal:",
  "exercise.modal-verbs.7.explanation": "\"May I ask you a quick question?\"",
  "exercise.modal-verbs.7.pro_tip": "Consejo: \"May I...?\" es muy formal y cortés para pedir permiso.",
  "exercise.modal-verbs.8.prompt": "Completa la petición educada:",
  "exercise.modal-verbs.8.explanation": "\"Could you help me...\" solicita ayuda de forma educada.",
  "exercise.modal-verbs.8.pro_tip": "Consejo: Could + you + help...?",
  "exercise.modal-verbs.9.prompt": "Elige la oración que expresa posibilidad futura (30-50% de probabilidad):",
  "exercise.modal-verbs.9.explanation": "\"it might rain\" expresa que es posible que llueva, pero no seguro.",
  "exercise.modal-verbs.9.pro_tip": "Consejo: might + verbo base para posibilidades.",
  "exercise.modal-verbs.10.prompt": "Completa la oración con \"might\":",
  "exercise.modal-verbs.10.explanation": "\"He might be in the conference room\" denota incertidumbre.",
  "exercise.modal-verbs.10.pro_tip": "Consejo: might be = tal vez esté.",
  "exercise.modal-verbs.11.prompt": "Reordena la afirmación de posibilidad futura:",
  "exercise.modal-verbs.11.explanation": "\"We might go to Italy next summer.\"",
  "exercise.modal-verbs.11.pro_tip": "Consejo: Sujeto + might + verbo base + destino.",
  "exercise.modal-verbs.12.prompt": "¿Verdadero o Falso?",
  "exercise.modal-verbs.12.statement": "\"Might\" expresa una posibilidad (alrededor de 30-50% de probabilidad), mientras que \"will\" expresa certeza.",
  "exercise.modal-verbs.12.explanation": "Verdadero. \"Might\" transmite duda en comparación con la certeza de \"will\".",
  "exercise.modal-verbs.12.pro_tip": "Consejo: Usa \"might\" cuando no estés 100% seguro.",
  "exercise.modal-verbs.13.prompt": "Elige la deducción lógica de certeza (99% seguro de que sí):",
  "exercise.modal-verbs.13.explanation": "\"They must be out\" es una deducción lógica basada en la evidencia (luces apagadas, puerta cerrada).",
  "exercise.modal-verbs.13.pro_tip": "Consejo: must be = estoy casi seguro de que es verdad.",
  "exercise.modal-verbs.14.prompt": "Completa la deducción de imposibilidad (99% seguro de que NO):",
  "exercise.modal-verbs.14.explanation": "\"He can't be hungry\" expresa imposibilidad lógica tras comer 3 pizzas enteras.",
  "exercise.modal-verbs.14.pro_tip": "Consejo: can't be = imposible según la lógica.",
  "exercise.modal-verbs.15.prompt": "Empareja los verbos modales con sus funciones comunicativas:",
  "exercise.modal-verbs.15.explanation": "Relaciona consejo, deducción segura, imposibilidad y prohibición.",
  "exercise.modal-verbs.15.pro_tip": "Consejo: should=consejo, must=deducción, can't=imposible, mustn't=prohibición.",
  "exercise.modal-verbs.16.prompt": "Elige el diálogo con una deducción natural:",
  "exercise.modal-verbs.16.explanation": "\"It might be Sarah's\" expresa posibilidad razonable sin certeza total.",
  "exercise.modal-verbs.16.pro_tip": "Consejo: Might es excelente para especular en una conversación.",
};

const passiveVoiceEsExtras: Record<string, string> = {
  "exercise.passive-voice.1.prompt": "Completa la oración de Presente Simple en Voz Pasiva:",
  "exercise.passive-voice.1.explanation": "\"is spoken\" = is + participio pasado de speak (hablado).",
  "exercise.passive-voice.1.pro_tip": "Consejo: is/are + participio pasado para hechos generales.",
  "exercise.passive-voice.2.prompt": "Elige la oración correcta de Pasado Simple en Voz Pasiva:",
  "exercise.passive-voice.2.explanation": "\"was built in 1889\" usa was + participio pasado (built).",
  "exercise.passive-voice.2.pro_tip": "Consejo: was/were + participio pasado para hechos históricos.",
  "exercise.passive-voice.3.prompt": "Completa la pasiva en presente plural:",
  "exercise.passive-voice.3.explanation": "Emails es plural, por lo que se usa \"are sent\".",
  "exercise.passive-voice.3.pro_tip": "Consejo: Sujeto plural -> are + V3.",
  "exercise.passive-voice.4.prompt": "¿Verdadero o Falso?",
  "exercise.passive-voice.4.statement": "En la Voz Pasiva, el objeto de la oración activa se convierte en el sujeto de la oración pasiva.",
  "exercise.passive-voice.4.explanation": "Verdadero. Quien recibe la acción pasa a ser el sujeto gramatical.",
  "exercise.passive-voice.4.pro_tip": "Consejo: Activa: S + V + O -> Pasiva: O + be + V3.",
  "exercise.passive-voice.5.prompt": "Elige la oración correcta de Present Perfect en Voz Pasiva:",
  "exercise.passive-voice.5.explanation": "\"has been delivered\" = has + been + delivered.",
  "exercise.passive-voice.5.pro_tip": "Consejo: has/have been + participio pasado.",
  "exercise.passive-voice.6.prompt": "Completa la oración de Futuro en Voz Pasiva:",
  "exercise.passive-voice.6.explanation": "\"will be completed\" = will + be + participio pasado.",
  "exercise.passive-voice.6.pro_tip": "Consejo: will be + V3.",
  "exercise.passive-voice.7.prompt": "Arrastra las palabras para formar una oración pasiva en Present Perfect:",
  "exercise.passive-voice.7.explanation": "\"All the tickets have been sold out.\"",
  "exercise.passive-voice.7.pro_tip": "Consejo: have been sold out (han sido vendidos).",
  "exercise.passive-voice.8.prompt": "Completa la pasiva continua en presente:",
  "exercise.passive-voice.8.explanation": "\"is being built\" describe una acción que se está construyendo en este preciso momento.",
  "exercise.passive-voice.8.pro_tip": "Consejo: is/are being + participio pasado.",
  "exercise.passive-voice.9.prompt": "Elige la transformación correcta de Activa a Pasiva:",
  "exercise.passive-voice.9.explanation": "\"J.K. Rowling wrote Harry Potter\" -> \"Harry Potter was written by J.K. Rowling.\"",
  "exercise.passive-voice.9.pro_tip": "Consejo: Pasado simple activo (\"wrote\") -> \"was written\".",
  "exercise.passive-voice.10.prompt": "Completa la transformación pasiva con el participio:",
  "exercise.passive-voice.10.explanation": "steal -> stole -> stolen.",
  "exercise.passive-voice.10.pro_tip": "Consejo: La 3.ª forma de steal es stolen.",
  "exercise.passive-voice.11.prompt": "Reordena la oración pasiva con su agente:",
  "exercise.passive-voice.11.explanation": "\"The window was broken by the storm.\"",
  "exercise.passive-voice.11.pro_tip": "Consejo: was broken by + causa/agente.",
  "exercise.passive-voice.12.prompt": "¿Verdadero o Falso?",
  "exercise.passive-voice.12.statement": "Solo debes incluir \"by + agente\" en una oración pasiva cuando es importante o relevante saber quién realizó la acción.",
  "exercise.passive-voice.12.explanation": "Verdadero. Si el autor es desconocido, obvio o poco relevante, se omite.",
  "exercise.passive-voice.12.pro_tip": "Consejo: Omite el agente obvio para oraciones más claras.",
  "exercise.passive-voice.13.prompt": "Empareja las oraciones pasivas en diferentes tiempos:",
  "exercise.passive-voice.13.explanation": "Relaciona presente simple, pasado simple, present perfect y futuro en voz pasiva.",
  "exercise.passive-voice.13.pro_tip": "Consejo: Fíjate en la forma del verbo \"be\" para saber el tiempo.",
  "exercise.passive-voice.14.prompt": "Completa la respuesta de nacimiento en voz pasiva:",
  "exercise.passive-voice.14.explanation": "\"I was born\" siempre va en Pasado Simple Pasivo en inglés.",
  "exercise.passive-voice.14.pro_tip": "Consejo: Siempre se dice \"I was born\", nunca \"I am born\".",
  "exercise.passive-voice.15.prompt": "Elige la oración que describe el origen de un producto:",
  "exercise.passive-voice.15.explanation": "\"These shoes are made in Italy\" (sujeto plural \"shoes\" + are made).",
  "exercise.passive-voice.15.pro_tip": "Consejo: are made in + país.",
  "exercise.passive-voice.16.prompt": "Elige el diálogo natural en Present Perfect Pasivo:",
  "exercise.passive-voice.16.explanation": "\"it has already been repaired\" confirma que la reparación ya ha sido completada.",
  "exercise.passive-voice.16.pro_tip": "Consejo: has already been + V3.",
};

const relativeClausesEsExtras: Record<string, string> = {
  "exercise.relative-clauses.1.prompt": "Completa la oración con el pronombre de relativo para persona:",
  "exercise.relative-clauses.1.explanation": "Usa \"who\" cuando te refieres a una persona (\"the woman who called you\").",
  "exercise.relative-clauses.1.pro_tip": "Consejo: who = para personas.",
  "exercise.relative-clauses.2.prompt": "Elige el pronombre de relativo correcto para un objeto:",
  "exercise.relative-clauses.2.explanation": "Usa \"which\" o \"that\" para cosas y objetos (\"the laptop which I bought\").",
  "exercise.relative-clauses.2.pro_tip": "Consejo: which / that = para objetos y animales.",
  "exercise.relative-clauses.3.prompt": "Completa la oración con el pronombre de posesión:",
  "exercise.relative-clauses.3.explanation": "\"whose\" expresa posesión (cuyo/cuya: \"whose father is an astronaut\").",
  "exercise.relative-clauses.3.pro_tip": "Consejo: whose + sustantivo indica posesión.",
  "exercise.relative-clauses.4.prompt": "Completa la oración con el pronombre para un lugar:",
  "exercise.relative-clauses.4.explanation": "Usa \"where\" al referirte a un lugar físico (\"the restaurant where we celebrated\").",
  "exercise.relative-clauses.4.pro_tip": "Consejo: where = para lugares.",
  "exercise.relative-clauses.5.prompt": "Elige la cláusula explicativa correcta con comas:",
  "exercise.relative-clauses.5.explanation": "En cláusulas explicativas (entre comas) DEBES usar \"who\" (personas) o \"which\" (cosas), nunca \"that\".",
  "exercise.relative-clauses.5.pro_tip": "Consejo: ¡Nunca uses \"that\" después de una coma en oraciones de relativo!",
  "exercise.relative-clauses.6.prompt": "¿Verdadero o Falso?",
  "exercise.relative-clauses.6.statement": "Puedes usar \"that\" en lugar de \"who\" o \"which\" en oraciones explicativas con comas (ej. \"Paris, that is beautiful,...\").",
  "exercise.relative-clauses.6.explanation": "Falso. \"that\" está prohibido entre comas en inglés estándar.",
  "exercise.relative-clauses.6.pro_tip": "Consejo: Comas = solo who / which.",
  "exercise.relative-clauses.7.prompt": "Arrastra las palabras para formar una cláusula explicativa con comas:",
  "exercise.relative-clauses.7.explanation": "\"London, which is the capital, has many parks.\"",
  "exercise.relative-clauses.7.pro_tip": "Consejo: Pon comas para separar la información extra.",
  "exercise.relative-clauses.8.prompt": "Identifica el tipo de oración de relativo:",
  "exercise.relative-clauses.8.explanation": "Las oraciones separadas por comas aportan información extra no esencial (no definitorias/explicativas).",
  "exercise.relative-clauses.8.pro_tip": "Consejo: No definitoria = información extra entre comas.",
  "exercise.relative-clauses.9.prompt": "Elige la oración donde se puede omitir el pronombre de relativo:",
  "exercise.relative-clauses.9.explanation": "Puedes omitir el pronombre cuando funciona como objeto (ej. \"The book [that] I read\"). Si es sujeto (who called you), no se puede omitir.",
  "exercise.relative-clauses.9.pro_tip": "Consejo: Pronombre + Sujeto + Verbo = ¡Se puede omitir el pronombre!",
  "exercise.relative-clauses.10.prompt": "Completa la oración pasiva con relativo:",
  "exercise.relative-clauses.10.explanation": "\"The song (that) you are listening to was written by Adele.\"",
  "exercise.relative-clauses.10.pro_tip": "Consejo: was written = pasado simple pasivo.",
  "exercise.relative-clauses.11.prompt": "Reordena la oración con el pronombre de relativo omitido:",
  "exercise.relative-clauses.11.explanation": "\"This is the car I want to buy.\"",
  "exercise.relative-clauses.11.pro_tip": "Consejo: the car (that) I want to buy.",
  "exercise.relative-clauses.12.prompt": "¿Verdadero o Falso?",
  "exercise.relative-clauses.12.statement": "Puedes omitir \"who\", \"which\" o \"that\" cuando le sigue un sujeto + verbo (ej. \"the movie [that] we watched\").",
  "exercise.relative-clauses.12.explanation": "Verdadero. Omitir el pronombre objeto es muy común y natural en inglés.",
  "exercise.relative-clauses.12.pro_tip": "Consejo: Omitir el pronombre objeto da mucha fluidez al hablar.",
  "exercise.relative-clauses.13.prompt": "Empareja las definiciones usando oraciones de relativo:",
  "exercise.relative-clauses.13.explanation": "Relaciona personas (who), lugares (where), objetos (which) y posesiones (whose).",
  "exercise.relative-clauses.13.pro_tip": "Consejo: surgeon -> who; bakery -> where; dictionary -> which; orphan -> whose.",
  "exercise.relative-clauses.14.prompt": "Completa la oración de relativo especificativa:",
  "exercise.relative-clauses.14.explanation": "Usa \"who\" para personas.",
  "exercise.relative-clauses.14.pro_tip": "Consejo: people who + verbo.",
  "exercise.relative-clauses.15.prompt": "Elige la forma correcta de combinar dos oraciones usando \"whose\":",
  "exercise.relative-clauses.15.explanation": "\"I have a friend whose dog can do tricks\" sustituye limpiamente a \"her dog\".",
  "exercise.relative-clauses.15.pro_tip": "Consejo: whose sustituye a posesivos como his, her, their.",
  "exercise.relative-clauses.16.prompt": "Elige la respuesta natural en el diálogo:",
  "exercise.relative-clauses.16.explanation": "\"The one that is located near the park\" especifica de cuál cafetería se habla.",
  "exercise.relative-clauses.16.pro_tip": "Consejo: that + verbo para cosas en cláusulas definitorias.",
};

const reportedSpeechEsExtras: Record<string, string> = {
  "exercise.reported-speech.1.prompt": "Elige la forma correcta en estilo indirecto (cambio de tiempo):",
  "exercise.reported-speech.1.explanation": "Presente Simple \"I am tired\" retrocede un tiempo a Pasado Simple \"she was tired\".",
  "exercise.reported-speech.1.pro_tip": "Consejo: am/is -> was; are -> were.",
  "exercise.reported-speech.2.prompt": "Completa la oración en estilo indirecto (will -> would):",
  "exercise.reported-speech.2.explanation": "\"will\" cambia a \"would\" en estilo indirecto.",
  "exercise.reported-speech.2.pro_tip": "Consejo: will -> would; can -> could.",
  "exercise.reported-speech.3.prompt": "Completa la oración (pasado simple -> past perfect):",
  "exercise.reported-speech.3.explanation": "Pasado Simple \"bought\" retrocede a Past Perfect \"had bought\".",
  "exercise.reported-speech.3.pro_tip": "Consejo: Pasado Simple y Present Perfect cambian ambos a Past Perfect.",
  "exercise.reported-speech.4.prompt": "¿Verdadero o Falso?",
  "exercise.reported-speech.4.statement": "Cuando el verbo introductorio está en pasado (\"said\", \"told\"), los verbos dentro de la oración reportada suelen dar un paso atrás en el tiempo (Presente Simple -> Pasado Simple, Will -> Would, Can -> Could).",
  "exercise.reported-speech.4.explanation": "Verdadero. Esta es la regla fundamental del estilo indirecto.",
  "exercise.reported-speech.4.pro_tip": "Consejo: Un paso atrás en el tiempo al reportar lo dicho.",
  "exercise.reported-speech.5.prompt": "Elige la oración con el cambio correcto de marcador temporal (today -> that day):",
  "exercise.reported-speech.5.explanation": "\"today\" cambia a \"that day\" (ese día) en estilo indirecto.",
  "exercise.reported-speech.5.pro_tip": "Consejo: today -> that day; tonight -> that night.",
  "exercise.reported-speech.6.prompt": "Completa el cambio de lugar (here -> there):",
  "exercise.reported-speech.6.explanation": "\"here\" (aquí) pasa a ser \"there\" (allí) en estilo indirecto.",
  "exercise.reported-speech.6.pro_tip": "Consejo: here -> there.",
  "exercise.reported-speech.7.prompt": "Arrastra las palabras para formar una oración en estilo indirecto:",
  "exercise.reported-speech.7.explanation": "\"He said that he had lost his passport.\"",
  "exercise.reported-speech.7.pro_tip": "Consejo: S + said that + S + had + V3.",
  "exercise.reported-speech.8.prompt": "Empareja las expresiones temporales directas con sus equivalentes indirectas:",
  "exercise.reported-speech.8.explanation": "Relaciona now->then, yesterday->the day before, tomorrow->the next day, this->that.",
  "exercise.reported-speech.8.pro_tip": "Consejo: Memoriza los cambios de tiempo para dominar el estilo indirecto.",
  "exercise.reported-speech.9.prompt": "Completa con \"said\" o \"told\":",
  "exercise.reported-speech.9.explanation": "Usa \"told\" porque hay un objeto de persona (\"me\").",
  "exercise.reported-speech.9.pro_tip": "Consejo: told + persona; said + that.",
  "exercise.reported-speech.10.prompt": "Elige la oración que usa \"said\" correctamente:",
  "exercise.reported-speech.10.explanation": "\"He said that he was happy...\" (nunca \"He said me\" ni \"He told that\").",
  "exercise.reported-speech.10.pro_tip": "Consejo: Nunca digas \"he told that\"; di \"he told me that\" o \"he said that\".",
  "exercise.reported-speech.11.prompt": "Reordena la oración con \"told\":",
  "exercise.reported-speech.11.explanation": "\"She told him that the meeting was cancelled.\"",
  "exercise.reported-speech.11.pro_tip": "Consejo: Sujeto + told + objeto + that + cláusula.",
  "exercise.reported-speech.12.prompt": "¿Verdadero o Falso?",
  "exercise.reported-speech.12.statement": "Se usa \"tell\" cuando mencionas a quién se le habla (ej. \"He told me...\"), mientras que \"say\" se usa sin objeto de persona (ej. \"He said that...\").",
  "exercise.reported-speech.12.explanation": "Verdadero. \"Tell\" exige un objeto de persona.",
  "exercise.reported-speech.12.pro_tip": "Consejo: Tell someone; say something.",
  "exercise.reported-speech.13.prompt": "Elige la pregunta de Sí/No reportada correctamente:",
  "exercise.reported-speech.13.explanation": "Las preguntas de Sí/No en estilo indirecto usan \"asked + if/whether + sujeto + verbo\" con orden afirmativo (\"if I liked coffee\").",
  "exercise.reported-speech.13.pro_tip": "Consejo: No hay auxiliar \"do/did\" en preguntas indirectas; usa orden de afirmación.",
  "exercise.reported-speech.14.prompt": "Completa la pregunta Wh- en estilo indirecto:",
  "exercise.reported-speech.14.explanation": "\"She asked me where I lived\" usa orden afirmativo y pasado simple.",
  "exercise.reported-speech.14.pro_tip": "Consejo: Palabra Wh + Sujeto + Verbo.",
  "exercise.reported-speech.15.prompt": "Completa la petición en estilo indirecto con infinitivo:",
  "exercise.reported-speech.15.explanation": "Las peticiones y órdenes se reportan con \"to + verbo base\" (\"asked me to close\").",
  "exercise.reported-speech.15.pro_tip": "Consejo: asked/told + persona + to + verbo.",
  "exercise.reported-speech.16.prompt": "Elige la orden negativa reportada correctamente:",
  "exercise.reported-speech.16.explanation": "\"told us not to touch that\" usa \"not to + verbo base\" para órdenes negativas.",
  "exercise.reported-speech.16.pro_tip": "Consejo: told + persona + not to + verbo.",
};

const phrasalVerbsEsExtras: Record<string, string> = {
  "exercise.phrasal-verbs.1.prompt": "Completa la oración con el phrasal verb para vestirse:",
  "exercise.phrasal-verbs.1.explanation": "\"put on\" significa ponerse una prenda de ropa.",
  "exercise.phrasal-verbs.1.pro_tip": "Consejo: put on (ponerse) vs take off (quitarse).",
  "exercise.phrasal-verbs.2.prompt": "Elige la oración con el phrasal verb correcto para apagar luces:",
  "exercise.phrasal-verbs.2.explanation": "\"turn off\" significa apagar un dispositivo eléctrico o luz.",
  "exercise.phrasal-verbs.2.pro_tip": "Consejo: turn on (encender) / turn off (apagar).",
  "exercise.phrasal-verbs.3.prompt": "Completa la oración para levantarse de la cama:",
  "exercise.phrasal-verbs.3.explanation": "\"get up\" significa levantarse físicamente de la cama.",
  "exercise.phrasal-verbs.3.pro_tip": "Consejo: wake up (despertar) vs get up (levantarse de la cama).",
  "exercise.phrasal-verbs.4.prompt": "¿Verdadero o Falso?",
  "exercise.phrasal-verbs.4.statement": "Un phrasal verb consiste en un verbo + una partícula (preposición o adverbio), creando un significado nuevo distinto al verbo original solo.",
  "exercise.phrasal-verbs.4.explanation": "Verdadero. La combinación crea un sentido idiomático propio.",
  "exercise.phrasal-verbs.4.pro_tip": "Consejo: Aprende los phrasal verbs como unidades de vocabulario individuales.",
  "exercise.phrasal-verbs.5.prompt": "Completa la oración para cancelar un evento:",
  "exercise.phrasal-verbs.5.explanation": "\"call off\" significa cancelar un evento o reunión.",
  "exercise.phrasal-verbs.5.pro_tip": "Consejo: call off = cancelar.",
  "exercise.phrasal-verbs.6.prompt": "Elige la oración que expresa llevarse bien con alguien:",
  "exercise.phrasal-verbs.6.explanation": "\"get along with\" significa tener una relación amistosa y armoniosa.",
  "exercise.phrasal-verbs.6.pro_tip": "Consejo: get along with someone = llevarse bien con alguien.",
  "exercise.phrasal-verbs.7.prompt": "Arrastra las palabras para expresar que esperas algo con ilusión:",
  "exercise.phrasal-verbs.7.explanation": "\"I am really looking forward to my vacation.\"",
  "exercise.phrasal-verbs.7.pro_tip": "Consejo: look forward to + sustantivo / -ing (esperar con ansias).",
  "exercise.phrasal-verbs.8.prompt": "Completa la oración para averiguar o descubrir información:",
  "exercise.phrasal-verbs.8.explanation": "\"find out\" significa enterarse o descubrir un dato.",
  "exercise.phrasal-verbs.8.pro_tip": "Consejo: find out = averiguar / enterarse.",
  "exercise.phrasal-verbs.9.prompt": "Completa la frase de ánimo:",
  "exercise.phrasal-verbs.9.explanation": "\"give up\" significa rendirse o abandonar.",
  "exercise.phrasal-verbs.9.pro_tip": "Consejo: ¡Never give up! (¡Nunca te rindas!).",
  "exercise.phrasal-verbs.10.prompt": "Elige la oración que significa quedarse sin existencias:",
  "exercise.phrasal-verbs.10.explanation": "\"run out of\" significa quedarse sin algo (agotarse).",
  "exercise.phrasal-verbs.10.pro_tip": "Consejo: run out of milk / coffee / time.",
  "exercise.phrasal-verbs.11.prompt": "Completa el refrán para posponer:",
  "exercise.phrasal-verbs.11.explanation": "\"put off\" significa posponer o aplazar.",
  "exercise.phrasal-verbs.11.pro_tip": "Consejo: put off = posponer.",
  "exercise.phrasal-verbs.12.prompt": "Empareja los phrasal verbs con sus definiciones:",
  "exercise.phrasal-verbs.12.explanation": "Relaciona call off, run out of, look after y figure out.",
  "exercise.phrasal-verbs.12.pro_tip": "Consejo: Repasa las definiciones para ganar seguridad.",
  "exercise.phrasal-verbs.13.prompt": "Elige la posición correcta del pronombre en verbos separables:",
  "exercise.phrasal-verbs.13.explanation": "Cuando el objeto es un pronombre (\"it\"), DEBE ir en medio del verbo y la partícula (\"turn it off\").",
  "exercise.phrasal-verbs.13.pro_tip": "Consejo: Turn it off (nunca \"turn off it\").",
  "exercise.phrasal-verbs.14.prompt": "Completa la oración para buscar en un diccionario/guía:",
  "exercise.phrasal-verbs.14.explanation": "\"look it up\" significa buscar información en un diccionario o internet.",
  "exercise.phrasal-verbs.14.pro_tip": "Consejo: look [algo] up = buscar en una fuente.",
  "exercise.phrasal-verbs.15.prompt": "Reordena la oración con \"take off\":",
  "exercise.phrasal-verbs.15.explanation": "\"She took off her coat and sat down.\"",
  "exercise.phrasal-verbs.15.pro_tip": "Consejo: take off = quitarse ropa.",
  "exercise.phrasal-verbs.16.prompt": "¿Verdadero o Falso?",
  "exercise.phrasal-verbs.16.statement": "Con los phrasal verbs separables, cuando el objeto es un pronombre (it, him, her, them), DEBE colocarse entre el verbo y la partícula (ej. \"pick it up\", nunca \"pick up it\").",
  "exercise.phrasal-verbs.16.explanation": "Verdadero. Los pronombres van obligatoriamente en medio.",
  "exercise.phrasal-verbs.16.pro_tip": "Consejo: ¡Coloca los pronombres en el centro!",
};

const linkingWordsEsExtras: Record<string, string> = {
  "exercise.linking-words.1.prompt": "Completa la oración de contraste antes de un gerundio/sentimiento:",
  "exercise.linking-words.1.explanation": "\"despite\" va seguido de un sustantivo o gerundio (\"despite feeling sick\").",
  "exercise.linking-words.1.pro_tip": "Consejo: despite + -ing / sustantivo (a pesar de).",
  "exercise.linking-words.2.prompt": "Elige la oración correcta con \"Although\":",
  "exercise.linking-words.2.explanation": "\"Although\" (aunque) va seguido de una cláusula completa con sujeto + verbo (\"Although it was raining...\").",
  "exercise.linking-words.2.pro_tip": "Consejo: Although + Sujeto + Verbo.",
  "exercise.linking-words.3.prompt": "Completa la oración con el conector de transición:",
  "exercise.linking-words.3.explanation": "\"However\" (sin embargo) introduce contraste al inicio de una oración y va seguido de coma.",
  "exercise.linking-words.3.pro_tip": "Consejo: However, + oración.",
  "exercise.linking-words.4.prompt": "¿Verdadero o Falso?",
  "exercise.linking-words.4.statement": "\"Although\" va seguido de una cláusula con sujeto + verbo (ej. \"Although it rained\"), mientras que \"despite / in spite of\" va seguido de un sustantivo o gerundio (ej. \"Despite the rain / Despite raining\").",
  "exercise.linking-words.4.explanation": "Verdadero. Esta es la diferencia gramatical fundamental entre ambos.",
  "exercise.linking-words.4.pro_tip": "Consejo: Although + oración vs Despite + sustantivo/-ing.",
  "exercise.linking-words.5.prompt": "Elige la oración que añade información de apoyo:",
  "exercise.linking-words.5.explanation": "\"Furthermore\" (además / es más) añade un punto adicional al inicio de una oración.",
  "exercise.linking-words.5.pro_tip": "Consejo: Furthermore / Moreover = Además.",
  "exercise.linking-words.6.prompt": "Completa la frase de adición:",
  "exercise.linking-words.6.explanation": "\"In addition to\" es la frase preposicional estándar para añadir elementos.",
  "exercise.linking-words.6.pro_tip": "Consejo: In addition to + sustantivo (además de).",
  "exercise.linking-words.7.prompt": "Arrastra las palabras para formar una oración con \"moreover\":",
  "exercise.linking-words.7.explanation": "\"She is smart and, moreover, she is very hardworking.\"",
  "exercise.linking-words.7.pro_tip": "Consejo: moreover añade un énfasis adicional.",
  "exercise.linking-words.8.prompt": "Completa la oración con \"besides\":",
  "exercise.linking-words.8.explanation": "\"besides\" significa \"además / aparte de eso\" al dar un motivo extra.",
  "exercise.linking-words.8.pro_tip": "Consejo: besides = además / por si fuera poco.",
  "exercise.linking-words.9.prompt": "Completa la oración de causa antes de un sustantivo:",
  "exercise.linking-words.9.explanation": "\"due to\" va seguido de un sustantivo o frase nominal (\"due to the dense fog\").",
  "exercise.linking-words.9.pro_tip": "Consejo: due to / because of + sustantivo (debido a).",
  "exercise.linking-words.10.prompt": "Elige la oración que expresa resultado lógico:",
  "exercise.linking-words.10.explanation": "\"Therefore, he won the championship\" expresa el resultado directo de entrenar duro.",
  "exercise.linking-words.10.pro_tip": "Consejo: Therefore = Por lo tanto / En consecuencia.",
  "exercise.linking-words.11.prompt": "Reordena la afirmación de resultado:",
  "exercise.linking-words.11.explanation": "\"As a result, sales increased by twenty percent.\"",
  "exercise.linking-words.11.pro_tip": "Consejo: As a result, + cláusula (como resultado).",
  "exercise.linking-words.12.prompt": "¿Verdadero o Falso?",
  "exercise.linking-words.12.statement": "\"Therefore\" y \"As a result\" expresan consecuencias/conclusiones, y suelen aparecer al inicio de una oración seguidos de coma.",
  "exercise.linking-words.12.explanation": "Verdadero. Son conectores formales de transición.",
  "exercise.linking-words.12.pro_tip": "Consejo: Siempre coloca una coma después de Therefore y As a result al inicio de una oración.",
  "exercise.linking-words.13.prompt": "Empareja cada grupo de conectores con su función principal:",
  "exercise.linking-words.13.explanation": "Relaciona Contraste, Adición, Resultado y Causa con sus conectores correspondientes.",
  "exercise.linking-words.13.pro_tip": "Consejo: Agrupa los conectores por significado para redactar mejor.",
  "exercise.linking-words.14.prompt": "Completa la oración de simultaneidad temporal:",
  "exercise.linking-words.14.explanation": "\"Meanwhile\" (mientras tanto) describe una acción que ocurre al mismo tiempo que otra.",
  "exercise.linking-words.14.pro_tip": "Consejo: Meanwhile = mientras tanto.",
  "exercise.linking-words.15.prompt": "Elige la oración que describe acciones secuenciales:",
  "exercise.linking-words.15.explanation": "\"First we visited... afterwards, we had coffee\" describe una secuencia cronológica.",
  "exercise.linking-words.15.pro_tip": "Consejo: First... afterwards / then (primero... después).",
  "exercise.linking-words.16.prompt": "Elige la oración que señala una conclusión final:",
  "exercise.linking-words.16.explanation": "\"In conclusion\" señala la idea final de resumen.",
  "exercise.linking-words.16.pro_tip": "Consejo: In conclusion = En conclusión / Para resumir.",
};

const futureFormsAndUsedToEsExtras: Record<string, string> = {
  "exercise.future-forms-and-used-to.1.prompt": "Completa la predicción basada en evidencia visible (nubes negras):",
  "exercise.future-forms-and-used-to.1.explanation": "Cuando hay evidencia clara en el presente (nubes oscuras), usa \"is going to rain\".",
  "exercise.future-forms-and-used-to.1.pro_tip": "Consejo: Evidencia presente = be going to.",
  "exercise.future-forms-and-used-to.2.prompt": "Elige la decisión espontánea tomada al momento de hablar:",
  "exercise.future-forms-and-used-to.2.explanation": "\"I'll get it!\" es una decisión espontánea tomada justo al sonar el timbre.",
  "exercise.future-forms-and-used-to.2.pro_tip": "Consejo: Decisión espontánea = will ('ll).",
  "exercise.future-forms-and-used-to.3.prompt": "Completa la oración de plan previo / intención:",
  "exercise.future-forms-and-used-to.3.explanation": "Como los boletos ya se compraron la semana pasada, es un plan previo -> \"are going to travel\".",
  "exercise.future-forms-and-used-to.3.pro_tip": "Consejo: Plan previo / intención = be going to.",
  "exercise.future-forms-and-used-to.4.prompt": "¿Verdadero o Falso?",
  "exercise.future-forms-and-used-to.4.statement": "Se usa \"will\" para decisiones espontáneas tomadas al momento de hablar, y \"be going to\" para planes previos e intenciones.",
  "exercise.future-forms-and-used-to.4.explanation": "Verdadero. Esta es la diferencia clave entre will y going to.",
  "exercise.future-forms-and-used-to.4.pro_tip": "Consejo: Decisión al instante = will; Planeado antes = going to.",
  "exercise.future-forms-and-used-to.5.prompt": "Elige la cita fija con hora específica (dentista):",
  "exercise.future-forms-and-used-to.5.explanation": "Usa el Presente Continuo (\"am meeting\") para citas y planes agendados con otras personas.",
  "exercise.future-forms-and-used-to.5.pro_tip": "Consejo: Cita agendada en calendario = Presente Continuo.",
  "exercise.future-forms-and-used-to.6.prompt": "Completa la pregunta sobre planes futuros:",
  "exercise.future-forms-and-used-to.6.explanation": "\"What are you doing this Friday night?\" pregunta sobre planes personales.",
  "exercise.future-forms-and-used-to.6.pro_tip": "Consejo: What are you doing...? es muy común para planes de fin de semana.",
  "exercise.future-forms-and-used-to.7.prompt": "Arrastra las palabras para formar un viaje cerrado en el calendario:",
  "exercise.future-forms-and-used-to.7.explanation": "\"They are flying to New York on Monday morning.\"",
  "exercise.future-forms-and-used-to.7.pro_tip": "Consejo: are flying on Monday = vuelo ya programado.",
  "exercise.future-forms-and-used-to.8.prompt": "Completa la oración de evento planificado:",
  "exercise.future-forms-and-used-to.8.explanation": "\"We are having a team dinner tomorrow at 8:00 PM.\"",
  "exercise.future-forms-and-used-to.8.pro_tip": "Consejo: are having = cena acordada.",
  "exercise.future-forms-and-used-to.9.prompt": "Completa la oración de hábito pasado (que ya no se hace):",
  "exercise.future-forms-and-used-to.9.explanation": "\"used to\" expresa una rutina del pasado que ya no se realiza hoy en día.",
  "exercise.future-forms-and-used-to.9.pro_tip": "Consejo: used to + verbo base (solía).",
  "exercise.future-forms-and-used-to.10.prompt": "Elige la forma correcta de pregunta con \"did\":",
  "exercise.future-forms-and-used-to.10.explanation": "En preguntas con \"did\", \"used to\" pierde la -d y pasa a ser \"Did you use to...?\"",
  "exercise.future-forms-and-used-to.10.pro_tip": "Consejo: Did you use to...? (sin \"d\" en use).",
  "exercise.future-forms-and-used-to.11.prompt": "Completa la oración negativa de hábito pasado:",
  "exercise.future-forms-and-used-to.11.explanation": "\"I did not use to like olives\" expresa un gusto pasado que cambió.",
  "exercise.future-forms-and-used-to.11.pro_tip": "Consejo: didn't use to.",
  "exercise.future-forms-and-used-to.12.prompt": "¿Verdadero o Falso?",
  "exercise.future-forms-and-used-to.12.statement": "En formas negativas y preguntas con \"did\", \"used to\" cambia a \"use to\" (ej. \"I didn't use to\", \"Did you use to...?\").",
  "exercise.future-forms-and-used-to.12.explanation": "Verdadero. El auxiliar \"did\" ya marca el tiempo pasado.",
  "exercise.future-forms-and-used-to.12.pro_tip": "Consejo: Recuerda: did + use to (sin la \"d\").",
  "exercise.future-forms-and-used-to.13.prompt": "Empareja las expresiones con su significado:",
  "exercise.future-forms-and-used-to.13.explanation": "Relaciona used to (hábito/estado pasado), would (acción repetida), be used to (acostumbrado) y get used to (proceso de acostumbrarse).",
  "exercise.future-forms-and-used-to.13.pro_tip": "Consejo: be used to + -ing significa estar familiarizado/cómodo con algo.",
  "exercise.future-forms-and-used-to.14.prompt": "Completa la oración con \"be used to + -ing\":",
  "exercise.future-forms-and-used-to.14.explanation": "\"am used to driving\" = estoy acostumbrado a conducir.",
  "exercise.future-forms-and-used-to.14.pro_tip": "Consejo: be used to + verbo-ing.",
  "exercise.future-forms-and-used-to.15.prompt": "Elige la oración correcta para un estado pasado:",
  "exercise.future-forms-and-used-to.15.explanation": "\"I used to have long hair\" — \"would\" no puede usarse con verbos de estado (have, be, live, know).",
  "exercise.future-forms-and-used-to.15.pro_tip": "Consejo: Verbos de estado (have, be, live) requieren \"used to\", nunca \"would\".",
  "exercise.future-forms-and-used-to.16.prompt": "Reordena la oración de hábito pasado:",
  "exercise.future-forms-and-used-to.16.explanation": "\"She used to work in a bank.\"",
  "exercise.future-forms-and-used-to.16.pro_tip": "Consejo: She used to work...",
};

const es: Record<string, string> = {
  ...becauseSoThatEsExtras,
  ...presentPerfectVsSimplePastEsExtras,
  ...pastPerfectEsExtras,
  ...conditionalsAllEsExtras,
  ...modalVerbsEsExtras,
  ...passiveVoiceEsExtras,
  ...relativeClausesEsExtras,
  ...reportedSpeechEsExtras,
  ...phrasalVerbsEsExtras,
  ...linkingWordsEsExtras,
  ...futureFormsAndUsedToEsExtras,
  // UI
  'ui.landing.title': 'Aprende inglés, un ejercicio a la vez',
  'ui.landing.description':
    'Lecciones interactivas con retroalimentación instantánea, progreso guardado en tu dispositivo y la opción de traducir palabras difíciles a tu idioma nativo.',
  'ui.landing.how_title': 'Cómo funciona',
  'ui.landing.how_step1':
    'Elige una lección y responde un ejercicio a la vez. La interfaz admite escribir, hacer clic, arrastrar y soltar, y emparejar.',
  'ui.landing.how_step2':
    'Recibe retroalimentación al instante: un check verde con confeti cuando aciertas, una sacudida suave y una pista cuando necesitas otro intento.',
  'ui.landing.how_step3':
    'Tu progreso se guarda en este dispositivo. Vuelve cuando quieras y retoma donde lo dejaste.',
  'ui.start': 'Empezar a aprender',
  'ui.lessons.title': 'Lecciones',
  'ui.lessons.intro':
    'Elige un tema y sumérgete. Cada lección tiene una breve explicación, más de 20 ejercicios interactivos y retroalimentación al instante.',
  'ui.lesson.not_found': 'Lección no encontrada',
  'ui.check': 'Comprobar',
  'ui.next': 'Siguiente',
  'ui.retry': 'Intentar de nuevo',
  'ui.skip': 'Saltar',
  'ui.choose_language': 'Elige tu idioma',
  'ui.native_language_question': '¿Cuál es tu idioma nativo?',
  'ui.maybe_later': 'Quizá más tarde',
  'ui.theme_toggle': 'Cambiar tema',
  'ui.explanation': 'Por qué',
  'ui.pro_tip': 'Consejo',
  'ui.correct': '¡Correcto!',
  'ui.wrong': 'No del todo',
  'ui.translate': 'Traducir a mi idioma',
  'ui.score_label': 'Puntuación',
  'ui.almost_done': 'Casi listo',
  'ui.halfway': '¡Pasaste la mitad!',
  'ui.final_stretch': '¡Última recta!',
  'ui.well_done': '¡Lección completa!',
  'ui.vocabulary.title': 'Vocabulario: las 2000 más usadas',
  'ui.vocabulary.intro':
    'Las 2000 palabras más comunes en inglés, divididas en 40 bloques de 50 palabras cada uno. Cada bloque tiene 2 ejercicios cortos (opción múltiple y completar) que conectan una definición en inglés con su palabra. Haz clic en un bloque para estudiar la lista y luego responde las preguntas.',
  'ui.wh_words.title': 'Palabras Wh- en preguntas',
  'ui.wh_words.intro':
    '160 preguntas que cubren las 9 palabras wh- más comunes en inglés: Why, How, How long, How many, How much, When, Where, Who, What. Cada sub-lección practica 20 preguntas de una familia de palabras wh-.',
  'ui.idioms.title': 'Los 1000 modismos más usados',
  'ui.idioms.intro':
    '40 de los modismos (expresiones idiomáticas) más comunes en inglés. Cada uno es una frase fija cuyo significado no se deduce de las palabras individuales. Apréndelos como unidades completas.',
  'ui.gerunds.title': 'Los 1000 gerundios más usados (verbo+ing)',
  'ui.gerunds.intro':
    '40 preguntas para completar con los verbos comunes seguidos de gerundio (verbo+ing) o infinitivo (to+verbo). Algunos verbos cambian de significado según la forma. Practica los patrones más comunes.',
  'ui.category.grammar': 'Gramática',
  'ui.category.wh_words': 'Palabras interrogativas',
  'ui.category.idioms': 'Modismos',
  'ui.category.gerunds': 'Gerundios e infinitivos',
  'ui.category.vocabulary': 'Vocabulario',

  // Lesson titles + descriptions + intro
  'lesson.because-so-that.title': 'Because y so that',
  'lesson.because-so-that.description':
    'Aprende la diferencia entre explicar una razón (because) y un propósito (so that).',
  'lesson.because-so-that.intro':
    "**Because** introduce una razón — la respuesta a *por qué* ocurrió algo. **So that** introduce un propósito — el objetivo que querías alcanzar. Ejemplo: *Bebí agua porque tenía sed* (razón) vs. *Estudié mucho para poder aprobar* (propósito).",

  'lesson.adverbs-of-frequency.title': 'Adverbios de frecuencia',
  'lesson.adverbs-of-frequency.description':
    '¿Con qué frecuencia haces las cosas? Domina never, rarely, sometimes, usually, always y el resto de la familia.',
  'lesson.adverbs-of-frequency.intro':
    "Los adverbios de frecuencia responden a la pregunta *con qué frecuencia*. Normalmente van **antes del verbo principal** pero **después de \"to be\"**: *Yo **siempre** tomo café* pero *Ella **siempre está** tarde*. Orden: never → rarely → sometimes → usually → often → always.",

  'lesson.time-expressions.title': 'Expresiones de tiempo',
  'lesson.time-expressions.description':
    '¿Cuántas veces haces algo? Once, twice, three times, every day, every week…',
  'lesson.time-expressions.intro':
    'Dos patrones: (1) *once / twice / three times* para cantidades exactas, y (2) *every day / every week / every month / every year* para rutinas. Combínalos en una pregunta: *How often do you exercise? — I exercise three times a week.*',

  'lesson.did-and-was.title': 'Did, was y were en el pasado',
  'lesson.did-and-was.description':
    'Haz preguntas, da respuestas cortas y forma negativos en pasado simple — dividido en dos partes amigables.',
  'lesson.did-and-was.intro':
    "**Did** es el auxiliar para todos los verbos en pasado: *Did you call her? Yes, I **did**. No, I **didn't**.* Después de \"did\" se usa la **forma base** del verbo (sin -ed). **Was / were** es el pasado de \"is / are\" y funciona solo: *She **was** tired. They **weren't** home.*",

  'lesson.simple-past-and-past-continuous.title': 'Pasado simple y pasado continuo',
  'lesson.simple-past-and-past-continuous.description':
    'Combina los dos tiempos pasados: una acción terminada (pasado simple) más una acción de fondo más larga (pasado continuo). 40 ejercicios divididos por subtema.',
  'lesson.simple-past-and-past-continuous.intro':
    "El **pasado simple** describe una acción terminada: *I **ate** lunch.* El **pasado continuo** describe una acción más larga en progreso: *I **was eating** when the phone rang.* Combínalos: una acción larga en progreso es interrumpida por una más corta y terminada. **Verbos irregulares** (go → went, eat → ate, see → saw) no siguen la regla de -ed — memoriza los más comunes en grupos de tres.",

  // ── Lesson 6: present perfect + ever / never ─────────────────────────
  'lesson.present-perfect-ever-never.title': 'Present Perfect + ever / never',
  'lesson.present-perfect-ever-never.description':
    'Domina preguntas y respuestas conversacionales naturales sobre experiencias de vida con ever, never, have y has.',
  'lesson.present-perfect-ever-never.intro':
    '### 1. Fórmula y Estructura Clave\n' +
    '• **Pregunta**: *Have / Has + Sujeto + ever + Participio Pasado (V3)...?*\n' +
    '• **Respuesta Negativa**: *Sujeto + have / has + never + Participio Pasado (V3)*\n' +
    '• **Respuesta Afirmativa**: *Yes, Sujeto + have / has.*\n\n' +
    '### 2. Regla de Oro Conversacional\n' +
    'Pregunta por experiencia con **Present Perfect**, y cambia a **Pasado Simple** para detalles específicos:\n' +
    '— *Have you ever tried sushi?*\n' +
    '— *Yes, I have. I **tried** it last year in Tokyo.*\n\n' +
    '### 3. Concordancia de Sujeto\n' +
    '• **I / You / We / They** → **have / haven\'t / have never**\n' +
    '• **He / She / It** → **has / hasn\'t / has never**\n' +
    '*(Consejo: Evita la doble negación: nunca digas "hasn\'t never").*',

  // ── Lesson 7: present perfect vs simple past ─────────────────────────
  'lesson.present-perfect-vs-simple-past.title': 'Present Perfect vs. Pasado Simple',
  'lesson.present-perfect-vs-simple-past.description':
    'Aprende cuándo usar el Present Perfect (experiencias / tiempo no terminado) frente al Pasado Simple (momento específico y terminado en el pasado).',
  'lesson.present-perfect-vs-simple-past.intro':
    '### 1. La Diferencia Clave\n' +
    '• **Pasado Simple**: Se usa para acciones completadas en un **momento específico y terminado** en el pasado (*yesterday, last year, in 2020, two days ago, when I was a child*).\n' +
    '• **Present Perfect** (`have/has + V3`): Se usa para **experiencias de vida** (*ever, never*), acciones con **conexión al presente** o **periodos de tiempo aún abiertos** (*this week, today, recently, already, yet*).\n\n' +
    '### 2. Tabla Rápida de Marcadores de Tiempo\n' +
    '• **Pasado Simple (Terminado)**: *yesterday, last night, last year, two days ago, in 2018, When did you...?*\n' +
    '• **Present Perfect (No terminado / Experiencia)**: *already, yet, just, recently, since 2018, for 5 years, Have you ever...?*\n\n' +
    '### 3. Regla Conversacional\n' +
    'Confirma la experiencia en **Present Perfect** y luego cambia a **Pasado Simple** para dar los detalles específicos:\n' +
    '— *Have you seen that movie?*\n' +
    '— *Yes, I have. I **saw** it on Friday with my sister.*',

  // ── Lesson 8: past perfect ───────────────────────────────────────────
  'lesson.past-perfect.title': 'Past Perfect (had + participio pasado)',
  'lesson.past-perfect.description':
    'Expresa acciones que ocurrieron antes de otra acción o momento en el pasado.',
  'lesson.past-perfect.intro':
    '### 1. Estructura y Fórmula\n' +
    '**Sujeto + had + participio pasado (V3)**\n' +
    '• La fórmula es idéntica para todas las personas (*I / you / he / she / we / they had finished*).\n\n' +
    '### 2. El "Pasado antes del Pasado"\n' +
    'Usa el **Past Perfect** cuando ya estás hablando en pasado y quieres hacer referencia a una **acción anterior**:\n' +
    '• *Acción 1 (anterior):* La película empezó a las 7:00 PM.\n' +
    '• *Acción 2 (posterior):* Nosotros llegamos a las 7:15 PM.\n' +
    '• ➡️ *When we arrived, the movie **had already started**.*\n\n' +
    '### 3. Conectores Clave\n' +
    '• **By the time** + Pasado Simple, + Past Perfect (*By the time he arrived, she had left.*)\n' +
    '• **Before / After** (*After he had eaten, he went for a walk.*)\n' +
    '• **Because** + Past Perfect (*I was late because my alarm had not gone off.*)',

  // ── Lesson 9: conditionals ───────────────────────────────────────────
  'lesson.conditionals-all.title': 'Condicionales: 0, 1.º, 2.º y 3.º',
  'lesson.conditionals-all.description':
    'Domina los 4 tipos de oraciones condicionales: verdades universales, futuro real, situaciones hipotéticas y arrepentimientos pasados.',
  'lesson.conditionals-all.intro':
    '### 1. Resumen de los 4 Condicionales\n\n' +
    '• **Zero (Hechos / Verdades)**: *If + Presente Simple, Presente Simple* → *If you heat ice, it melts.*\n' +
    '• **1.º (Futuro Real)**: *If + Presente Simple, Will + Verbo base* → *If it rains, we will stay home.*\n' +
    '• **2.º (Hipotético / Sueños)**: *If + Pasado Simple, Would + Verbo base* → *If I won the lottery, I would travel.*\n' +
    '• **3.º (Arrepentimiento Pasado)**: *If + Had + V3, Would have + V3* → *If I had studied, I would have passed.*\n\n' +
    '### 2. Consejos Clave\n' +
    '• ⚠️ En el 1.º condicional, NUNCA pongas *will* dentro de la cláusula *if* (*If it rains...*, no *If it will rain*).\n' +
    '• Para dar consejos en 2.º condicional usa: *If I were you, I would...*',

  // ── Lesson 10: modal verbs ───────────────────────────────────────────
  'lesson.modal-verbs.title': 'Verbos Modales: should, could, would, might, must',
  'lesson.modal-verbs.description':
    'Expresa consejos, obligaciones, peticiones educadas, posibilidades y deducciones lógicas.',
  'lesson.modal-verbs.intro':
    '### 1. Reglas de Oro de los Modales\n' +
    '• Van seguidos directamente del **verbo en forma base** (SIN "to"): *You should go* (no *should to go*).\n' +
    '• No llevan "-s" en 3.ª persona singular: *He must arrive* (no *musts*).\n' +
    '• Negación directa: *shouldn\'t, mustn\'t, can\'t, couldn\'t, might not*.\n\n' +
    '### 2. Significados y Usos\n' +
    '• **Consejo**: *should / ought to* (*You look tired; you should rest.*)\n' +
    '• **Obligación**: *must* (regla/deber firme) vs *have to* (requisito externo).\n' +
    '• **Prohibición vs Ausencia de Obligación**:\n' +
    '  - *You mustn\'t smoke* = ¡Estrictamente prohibido! 🚫\n' +
    '  - *You don\'t have to wake up early* = No es necesario, puedes hacerlo si quieres.\n' +
    '• **Deducción y Certeza**: *must be* (99% seguro que SÍ) vs *can\'t be* (99% seguro que NO) vs *might be* (tal vez, 50%).',

  // ── Lesson 11: passive voice ─────────────────────────────────────────
  'lesson.passive-voice.title': 'Voz Pasiva (Passive Voice)',
  'lesson.passive-voice.description':
    'Enfócate en la acción o en el objeto en lugar de quién la realizó usando be + participio pasado.',
  'lesson.passive-voice.intro':
    '### 1. ¿Cómo funciona la Voz Pasiva?\n' +
    'Cuando el foco está en la **acción** o en **quien la recibe**:\n\n' +
    '**Objeto + forma adecuada de "BE" + Participio Pasado (V3) (+ by Agente)**\n\n' +
    '### 2. Tiempos en Voz Pasiva\n' +
    '• **Presente Simple**: *am / is / are + V3* (*English is spoken worldwide.*)\n' +
    '• **Pasado Simple**: *was / were + V3* (*The Eiffel Tower was built in 1889.*)\n' +
    '• **Present Perfect**: *have / has been + V3* (*The package has been delivered.*)\n' +
    '• **Futuro**: *will be + V3* (*The results will be announced tomorrow.*)\n\n' +
    '### 3. ¿Cuándo usar "by"?\n' +
    'Solo añade *by [agente]* cuando sea importante saber quién realizó la acción (*written by Shakespeare*). Si es desconocido u obvio, se omite (*My car was stolen*).',

  // ── Lesson 12: relative clauses ──────────────────────────────────────
  'lesson.relative-clauses.title': 'Oraciones de Relativo (who, which, that, where, whose)',
  'lesson.relative-clauses.description':
    'Une oraciones y describe personas, cosas, lugares y posesiones de forma natural.',
  'lesson.relative-clauses.intro':
    '### 1. Elegir el Pronombre de Relativo Correcto\n' +
    '• **who** → para **personas** (*The woman who called you is my manager.*)\n' +
    '• **which** → para **cosas / animales** (*The laptop which I bought is fast.*)\n' +
    '• **that** → para **personas o cosas** (en cláusulas especificativas).\n' +
    '• **where** → para **lugares** (*The cafe where we met.*)\n' +
    '• **whose** → para **posesión** (*A friend whose dog is smart.*)\n\n' +
    '### 2. Cláusulas Definitorias vs. No Definitorias\n' +
    '• **Definitorias (Sin comas)**: Información esencial: *The book that I read was great.*\n' +
    '• **No definitorias (Con comas)**: Información extra: *Paris, which is the capital of France, is lovely.* (⚠️ ¡Nunca uses *that* con comas!).\n\n' +
    '### 3. Omitir el Pronombre\nPuedes omitir *who / which / that* cuando funciona como **objeto** de la oración: *The movie (that) we watched was funny.*',

  // ── Lesson 13: reported speech ───────────────────────────────────────
  'lesson.reported-speech.title': 'Estilo Indirecto (Reported Speech)',
  'lesson.reported-speech.description':
    'Reporta afirmaciones, preguntas y órdenes con cambios correctos de tiempos verbales y pronombres.',
  'lesson.reported-speech.intro':
    '### 1. Cambio de Tiempos (Un paso atrás en el pasado)\n' +
    'Al reportar lo que alguien dijo (*He said that...*):\n' +
    '• Presente Simple → **Pasado Simple** (*"I am tired" → He said he was tired*)\n' +
    '• Presente Continuo → **Pasado Continuo** (*"I am cooking" → She said she was cooking*)\n' +
    '• Pasado Simple / Present Perfect → **Past Perfect** (*"I saw it" → He said he had seen it*)\n' +
    '• Will → **Would** | Can → **Could**\n\n' +
    '### 2. Say vs. Tell\n' +
    '• **say + that**: *He said that he was busy.* (SIN objeto de persona)\n' +
    '• **tell + PERSONA + that**: *He told me that he was busy.* (SIEMPRE requiere persona)\n\n' +
    '### 3. Preguntas y Órdenes en Estilo Indirecto\n' +
    '• Preguntas Sí/No: *He asked me **if / whether** I liked coffee.*\n' +
    '• Órdenes / Peticiones: *She told us **to be** quiet / **not to touch**.*',

  // ── Lesson 14: phrasal verbs ─────────────────────────────────────────
  'lesson.phrasal-verbs.title': 'Phrasal Verbs en Contexto',
  'lesson.phrasal-verbs.description':
    'Domina verbos compuestos de alta frecuencia, sus significados cotidianos y la posición de los pronombres.',
  'lesson.phrasal-verbs.intro':
    '### 1. ¿Qué es un Phrasal Verb?\n' +
    'Un verbo combinado con una partícula (preposición o adverbio) que adquiere un nuevo significado figurativo:\n' +
    '• *give* (dar) vs *give up* (rendirse / dejar un hábito).\n' +
    '• *call* (llamar) vs *call off* (cancelar un evento).\n' +
    '• *look* (mirar) vs *look forward to* (esperar con ilusión).\n\n' +
    '### 2. Regla del Pronombre (Verbos separables)\n' +
    'Cuando un phrasal verb es separable y el objeto es un **pronombre** (*it, them, him, her*), **DEBE** ir en el medio:\n' +
    '• ✅ *Turn it off* (Correcto)\n' +
    '• ❌ *Turn off it* (¡Incorrecto!)\n' +
    '• Con sustantivos comunes ambas formas valen: *Turn off the light* o *Turn the light off*.',

  // ── Lesson 15: linking words ─────────────────────────────────────────
  'lesson.linking-words.title': 'Conectores y Palabras de Enlace (Linking Words)',
  'lesson.linking-words.description':
    'Conecta tus ideas con transiciones de contraste, adición, causa, resultado y secuencia temporal.',
  'lesson.linking-words.intro':
    '### 1. Tabla de Conectores por Función\n' +
    '• **Contraste**: *However, Although, Despite, In spite of* (*Although it rained, we had fun.*)\n' +
    '• **Adición**: *Furthermore, Moreover, In addition, Besides* (*She is smart; furthermore, she is kind.*)\n' +
    '• **Causa / Razón**: *Because, Because of, Due to, Since* (*The flight was delayed due to the fog.*)\n' +
    '• **Resultado / Efecto**: *Therefore, As a result, Consequently, So* (*He worked hard; therefore, he passed.*)\n' +
    '• **Secuencia Temporal**: *Meanwhile, Afterwards, First, In the end* (*I cooked. Meanwhile, he set the table.*)\n\n' +
    '### 2. Regla Gramatical de Oro\n' +
    '• **Although / Even though** + Sujeto + Verbo (*Although it was cold...*)\n' +
    '• **Despite / In spite of** + Sustantivo / -ing (*Despite the cold weather / Despite feeling cold...*)',

  // ── Lesson 16: future forms and used to ──────────────────────────────
  'lesson.future-forms-and-used-to.title': 'Formas de Futuro y Hábitos Pasados (Used to / Would)',
  'lesson.future-forms-and-used-to.description':
    'Elige entre will, going to y presente continuo para el futuro; expresa hábitos pasados con used to y would.',
  'lesson.future-forms-and-used-to.intro':
    '### 1. Guía de Formas de Futuro\n' +
    '• **Will**: Decisiones espontáneas (*The phone is ringing — I\'ll get it!*), predicciones sin evidencia visual, promesas.\n' +
    '• **Be Going To**: Intenciones y planes previos (*We are going to visit Rome in July*), predicciones basadas en evidencia visible (*Look at those black clouds; it is going to rain*).\n' +
    '• **Presente Continuo para Futuro**: Citas y planes cerrados con fecha/hora (*I am meeting the doctor at 3:00 PM tomorrow*).\n\n' +
    '### 2. Hábitos Pasados: Used to vs. Would\n' +
    '• **used to + verbo base**: Hábitos y estados del pasado que ya no son ciertos (*I used to live in Madrid*).\n' +
    '  - Pregunta: *Did you use to live...?* | Negativo: *I didn\'t use to...*\n' +
    '• **would + verbo base**: Solo para acciones repetidas en el pasado (NO para estados como *be, have, live*).\n' +
    '• **be used to + -ing**: Estar acostumbrado a (*I am used to waking up early*).',
};

const zh: Record<string, string> = {
  'ui.landing.title': '一次一题,轻松学英语',
  'ui.landing.description': '互动式课程,即时反馈,进度保存在你的设备上,还能把难词翻译成你的母语。',
  'ui.landing.how_title': '使用方法',
  'ui.landing.how_step1': '选一节课,一次做一题。支持输入、点击、拖拽和配对。',
  'ui.landing.how_step2': '答对时显示绿色对勾和彩纸;答错时温柔地摇一摇并给提示。',
  'ui.landing.how_step3': '进度自动保存在此设备。下次回来继续。',
  'ui.start': '开始学习',
  'ui.lessons.title': '课程',
  'ui.lessons.intro': '选一个主题开始吧。每节课都有简短讲解、20+互动练习和即时反馈。',
  'ui.lesson.not_found': '未找到课程',
  'ui.check': '检查',
  'ui.next': '下一题',
  'ui.retry': '再试一次',
  'ui.skip': '跳过',
  'ui.choose_language': '选择语言',
  'ui.native_language_question': '你的母语是什么?',
  'ui.maybe_later': '以后再说',
  'ui.theme_toggle': '切换主题',
  'ui.explanation': '为什么',
  'ui.pro_tip': '小贴士',
  'ui.correct': '答对了!',
  'ui.wrong': '不太对',
  'ui.translate': '翻译成我的语言',
  'ui.score_label': '得分',
  'ui.almost_done': '快完成了',
  'ui.halfway': '已经过半!',
  'ui.final_stretch': '最后冲刺!',
  'ui.well_done': '课程完成!',
  'ui.vocabulary.title': '最常用 2000 词',
  'ui.vocabulary.intro':
    '英语最常用的 2000 个单词,分成 40 组,每组 50 个词。每组包含 2 个简短练习(选择题和填空),要求把英文释义和单词配对。点击任一组先学习词表,再答题。',
  'ui.wh_words.title': '疑问词 (wh-words)',
  'ui.wh_words.intro':
    '160 道题,涵盖英语中最常见的 9 个 wh- 疑问词:Why、How、How long、How many、How much、When、Where、Who、What。每组子课程针对同一类 wh- 词练习 20 题。',
  'ui.idioms.title': '最常用 1000 习语',
  'ui.idioms.intro':
    '40 道英语最常见的习语题。习语是固定短语,意思不能从单词字面理解。请把整句当作一个整体来记。',
  'ui.gerunds.title': '最常用 1000 动名词 (verb+ing)',
  'ui.gerunds.intro':
    '40 道关于动词后接动名词 (verb+ing) 还是不定式 (to+verb) 的填空题。某些动词两种形式意思不同。多练常见模式。',
  'ui.category.grammar': '语法',
  'ui.category.wh_words': '疑问词',
  'ui.category.idioms': '习语',
  'ui.category.gerunds': '动名词与不定式',
  'ui.category.vocabulary': '词汇',

  'lesson.because-so-that.title': 'Because 和 so that',
  'lesson.because-so-that.description': '学习 because(原因)和 so that(目的)之间的区别。',
  'lesson.because-so-that.intro':
    "**because** 引导原因 \u2014 回答 *为什么* 发生了某事。**so that** 引导目的 \u2014 你想达到的目标。例如:*I drank water because I was thirsty*(原因) vs. *I studied hard so that I could pass*(目的)。",

  'lesson.adverbs-of-frequency.title': '频率副词',
  'lesson.adverbs-of-frequency.description': '你多久做一次某事?掌握 never, rarely, sometimes, usually, always 等。',
  'lesson.adverbs-of-frequency.intro':
    "频率副词回答 *多久一次* 的问题。它们通常放在 **实义动词前** 但在 **be 动词后**:*I **always** drink coffee* 但 *She **is always** late*。从少到多:never \u2192 rarely \u2192 sometimes \u2192 usually \u2192 often \u2192 always。",

  'lesson.time-expressions.title': '时间表达',
  'lesson.time-expressions.description': '你做某事多少次?Once, twice, three times, every day, every week\u2026',
  'lesson.time-expressions.intro': '两种模式:(1)*once / twice / three times* 表示具体次数;(2)*every day / every week / every month / every year* 表示日常。组合成问句:*How often do you exercise? \u2014 I exercise three times a week.*',

  'lesson.did-and-was.title': '过去式中的 did, was 和 were',
  'lesson.did-and-was.description': '在过去时中提问、简短回答和否定 \u2014 分成两个友好的部分。',
  'lesson.did-and-was.intro':
    "**did** 是所有动词的过去时助动词:*Did you call her? Yes, I **did**. No, I **didn't**.* 在 \"did\" 之后用动词的 **原形**(不加 -ed)。**was / were** 是 \"is / are\" 的过去式,可单独使用:*She **was** tired. They **weren't** home.*",

  'lesson.simple-past-and-past-continuous.title': '一般过去时和过去进行时',
  'lesson.simple-past-and-past-continuous.description': '混合两种过去时:一个完成的动作(一般过去时)+ 一个较长的背景动作(过去进行时)。40 题按子主题分组。',
  'lesson.simple-past-and-past-continuous.intro':
    "**一般过去时** 描述一个完成的动作:*I **ate** lunch.* **过去进行时** 描述一个较长的、进行中的动作:*I **was eating** when the phone rang.* 组合起来:一个较长的动作正在被一个较短的、已完成的动所打断。**不规则动词**(go \u2192 went, eat \u2192 ate, see \u2192 saw)不遵循 -ed 规则 \u2014 三个一组地记住最常见的。",
};

const ko: Record<string, string> = {
  'ui.landing.title': '한 번에 한 문제씩 영어를 배워보세요',
  'ui.landing.description': '즉각 피드백, 기기에 저장되는 진행 상황, 어려운 단어를 모국어로 번역할 수 있는 옵션이 있는 인터랙티브 레슨입니다.',
  'ui.landing.how_title': '사용 방법',
  'ui.landing.how_step1': '레슨을 선택하고 한 번에 한 문제씩 풀어보세요. 타이핑, 클릭, 드래그 앤 드롭, 짝짓기 등이 지원됩니다.',
  'ui.landing.how_step2': '정답이면 초록색 체크와 색종이, 틀렸으면 부드러운 흔들림과 힌트를 받습니다.',
  'ui.landing.how_step3': '진행 상황은 이 기기에 저장됩니다. 언제든 돌아와서 이어서 풀 수 있습니다.',
  'ui.start': '학습 시작',
  'ui.lessons.title': '레슨',
  'ui.lessons.intro': '주제를 골라 시작하세요. 각 레슨에는 간단한 설명, 20개 이상의 인터랙티브 연습 문제, 즉각적인 피드백이 있습니다.',
  'ui.lesson.not_found': '레슨을 찾을 수 없습니다',
  'ui.check': '확인',
  'ui.next': '다음',
  'ui.retry': '다시 시도',
  'ui.skip': '건너뛰기',
  'ui.choose_language': '언어 선택',
  'ui.native_language_question': '모국어가 무엇인가요?',
  'ui.maybe_later': '나중에 할게요',
  'ui.theme_toggle': '테마 전환',
  'ui.explanation': '설명',
  'ui.pro_tip': '꿀팁',
  'ui.correct': '맞았어요!',
  'ui.wrong': '아쉬워요',
  'ui.translate': '내 언어로 번역',
  'ui.score_label': '점수',
  'ui.almost_done': '거의 다 됐어요',
  'ui.halfway': '절반을 넘었어요!',
  'ui.final_stretch': '마지막 스퍼트!',
  'ui.well_done': '레슨 완료!',
  'ui.vocabulary.title': '가장 많이 쓰는 2000 단어',
  'ui.vocabulary.intro':
    '영어에서 가장 자주 쓰이는 2000개 단어를 40개 묶음(한 묶음 50단어)으로 나눴습니다. 각 묶음에는 영문 뜻과 단어를 연결하는 2개의 짧은 문제(객관식, 빈칸 채우기)가 있어요. 묶음을 클릭해 단어 목록을 공부한 뒤 문제를 풀어보세요.',
  'ui.wh_words.title': '의문사 (wh-words)',
  'ui.wh_words.intro':
    '영어에서 가장 흔한 wh- 의문사 9개(Why, How, How long, How many, How much, When, Where, Who, What)를 다루는 160개 문제. 각 하위 레슨은 한 wh- 단어군에 대해 20개 문제를 풀어봅니다.',
  'ui.idioms.title': '가장 많이 쓰는 1000 관용구',
  'ui.idioms.intro':
    '가장 흔한 영어 관용구 40개. 관용구는 단어 하나하나의 뜻만 봐서는 의미가 통하지 않는 고정 표현입니다. 한 덩어리로 통째로 외우세요.',
  'ui.gerunds.title': '가장 많이 쓰는 1000 동명사 (verb+ing)',
  'ui.gerunds.intro':
    '동명사(verb+ing) 또는 부정사(to+verb)를 목적어로 취하는 흔한 동사를 다루는 빈칸 채우기 40문제. 동사마다 형태에 따라 뜻이 달라지는 경우도 있어요. 가장 흔한 패턴을 반복 연습하세요.',
  'ui.category.grammar': '문법',
  'ui.category.wh_words': '의문사',
  'ui.category.idioms': '관용구',
  'ui.category.gerunds': '동명사/부정사',
  'ui.category.vocabulary': '어휘',

  'lesson.because-so-that.title': 'Because와 so that',
  'lesson.because-so-that.description': '이유(because)와 목적(so that)의 차이를 배워보세요.',
  'lesson.because-so-that.intro':
    "**because**는 이유를 이끕니다 \u2014 *왜* 무언가가 일어났는지에 대한 답입니다. **so that**은 목적을 이끕니다 \u2014 달성하려는 목표입니다. 예:*I drank water because I was thirsty*(이유) vs. *I studied hard so that I could pass*(목적).",

  'lesson.adverbs-of-frequency.title': '빈도 부사',
  'lesson.adverbs-of-frequency.description': '얼마나 자주 하나요? never, rarely, sometimes, usually, always 등을 마스터하세요.',
  'lesson.adverbs-of-frequency.intro':
    "빈도 부사는 *얼마나 자주* 라는 질문에 답합니다. 보통 **본동사 앞**에 오지만 **be 동사 뒤**에 옵니다:*I **always** drink coffee* 그러나 *She **is always** late*. 적은 것부터 많은 것 순:never \u2192 rarely \u2192 sometimes \u2192 usually \u2192 often \u2192 always.",

  'lesson.time-expressions.title': '시간 표현',
  'lesson.time-expressions.description': '얼마나 자주 하나요? Once, twice, three times, every day, every week\u2026',
  'lesson.time-expressions.intro': '두 가지 패턴: (1) *once / twice / three times* 정확한 횟수, (2) *every day / every week / every month / every year* 일상적 루틴. 질문에 결합:*How often do you exercise? \u2014 I exercise three times a week.*',

  'lesson.did-and-was.title': '과거의 did, was, were',
  'lesson.did-and-was.description': '과거형으로 질문하고, 짧은 대답을 하고, 부정문을 만드는 방법을 두 개의 친근한 파트로 나눠 배웁니다.',
  'lesson.did-and-was.intro':
    "**did**는 모든 동사의 과거 조동사입니다:*Did you call her? Yes, I **did**. No, I **didn't**.* \"did\" 다음에는 동사의 **원형**이 옵니다(-ed 없이). **Was / were**는 \"is / are\"의 과거이며 단독으로 사용됩니다:*She **was** tired. They **weren't** home.*",

  'lesson.simple-past-and-past-continuous.title': '과거형과 과거진행형',
  'lesson.simple-past-and-past-continuous.description': '두 과거형을 섞어 쓰세요: 완료된 동작(과거형) + 더 긴 배경 동작(과거진행형). 하위 주제별로 40 문제.',
  'lesson.simple-past-and-past-continuous.intro':
    "**과거형**은 완료된 동작을 묘사합니다:*I **ate** lunch.* **과거진행형**은 진행 중인 더 긴 동작을 묘사합니다:*I **was eating** when the phone rang.* 결합하세요: 진행 중인 더 긴 동작이 더 짧고 완료된 동작에 의해 중단됩니다. **불규칙 동사**(go \u2192 went, eat \u2192 ate, see \u2192 saw)는 -ed 규칙을 따르지 않습니다 \u2014 가장 흔한 것들을 세 개씩 묶어 외우세요.",
};

const ja: Record<string, string> = {
  'ui.landing.title': '一問一答で英語を学びましょう',
  'ui.landing.description': '即時フィードバック、お使いのデバイスに進捗を保存、難しい単語を母語に翻訳するオプション付きのインタラクティブなレッスンです。',
  'ui.landing.how_title': '使い方',
  'ui.landing.how_step1': 'レッスンを一つ選んで、一度に一問ずつ答えます。入力、クリック、ドラッグ&ドロップ、ペアリングなどが使えます。',
  'ui.landing.how_step2': '正解なら緑色のチェックと紙吹雪、もう一度試す必要があるときは優しい揺れとヒントが出ます。',
  'ui.landing.how_step3': '進捗はこのデバイスに保存されます。いつでも戻って、途中から続けられます。',
  'ui.start': '学習を始める',
  'ui.lessons.title': 'レッスン',
  'ui.lessons.intro': 'トピックを選んで始めましょう。各レッスンには短い説明、20問以上のインタラクティブな問題、即時のフィードバックがあります。',
  'ui.lesson.not_found': 'レッスンが見つかりません',
  'ui.check': 'チェック',
  'ui.next': '次へ',
  'ui.retry': 'もう一度',
  'ui.skip': 'スキップ',
  'ui.choose_language': '言語を選択',
  'ui.native_language_question': '母語は何ですか?',
  'ui.maybe_later': '後で',
  'ui.theme_toggle': 'テーマ切替',
  'ui.explanation': '解説',
  'ui.pro_tip': 'コツ',
  'ui.correct': '正解!',
  'ui.wrong': '惜しい',
  'ui.translate': '母語に翻訳',
  'ui.score_label': 'スコア',
  'ui.almost_done': 'もう少し',
  'ui.halfway': '半分を超えました!',
  'ui.final_stretch': 'ラストスパート!',
  'ui.well_done': 'レッスン完了!',
  'ui.vocabulary.title': '頻出2000単語',
  'ui.vocabulary.intro':
    '英語で最もよく使われる2000単語を、40グループ(各50単語)に分けました。各グループには2問の短い問題(選択式・穴埋め)があり、英文の定義と単語を結びつけます。グループをクリックして単語リストを学習し、問題を解いてみましょう。',
  'ui.wh_words.title': '疑問詞 (wh-words)',
  'ui.wh_words.intro':
    '英語で最もよく使われる9つの疑問詞(Why、How、How long、How many、How much、When、Where、Who、What)を扱う160問。各サブレッスンで1つの疑問詞グループにつき20問練習します。',
  'ui.idioms.title': '頻出1000イディオム',
  'ui.idioms.intro':
    '最もよく使われる英語のイディオム40問。イディオムは単語の文字通りの意味からでは全体像がわからない固定表現です。フレーズ全体をまとめて覚えましょう。',
  'ui.gerunds.title': '頻出1000動名詞 (verb+ing)',
  'ui.gerunds.intro':
    '動名詞(verb+ing)または不定詞(to+verb)を目的語にとる、よく使われる動詞の穴埋め問題40問。動詞によって形ごとに意味が変わるものもあります。頻出パターンを繰り返し練習しましょう。',
  'ui.category.grammar': '文法',
  'ui.category.wh_words': '疑問詞',
  'ui.category.idioms': 'イディオム',
  'ui.category.gerunds': '動名詞・不定詞',
  'ui.category.vocabulary': '語彙',

  'lesson.because-so-that.title': 'Becauseとso that',
  'lesson.because-so-that.description': '理由を説明する(because)と目的を説明する(so that)の違いを学びます。',
  'lesson.because-so-that.intro':
    "**because**は理由を導きます \u2014 *なぜ*それが起こったのかの答えです。**so that**は目的を導きます \u2014 達成したい目標です。例:*I drank water because I was thirsty*(理由) vs. *I studied hard so that I could pass*(目的)。",

  'lesson.adverbs-of-frequency.title': '頻度の副詞',
  'lesson.adverbs-of-frequency.description': 'どのくらいの頻度でそれをするか?never, rarely, sometimes, usually, always などをマスターしましょう。',
  'lesson.adverbs-of-frequency.intro':
    "頻度の副詞は *どのくらいの頻度で* という質問に答えます。通常は **本動詞の前** に置きますが、**be 動詞の後** に置きます:*I **always** drink coffee* しかし *She **is always** late*。少ない順:never \u2192 rarely \u2192 sometimes \u2192 usually \u2192 often \u2192 always。",

  'lesson.time-expressions.title': '時間の表現',
  'lesson.time-expressions.description': '何かを何回しますか?Once, twice, three times, every day, every week…',
  'lesson.time-expressions.intro': '二つのパターン: (1) *once / twice / three times* は正確な回数、(2) *every day / every week / every month / every year* は日常。質問と組み合わせ:*How often do you exercise? \u2014 I exercise three times a week.*',

  'lesson.did-and-was.title': '過去の did, was, were',
  'lesson.did-and-was.description': '過去形で質問したり、短く答えたり、否定文を作ったり \u2014 二つの親しみやすいパートに分けて。',
  'lesson.did-and-was.intro':
    "**did**はすべての動詞の過去の助動詞です:*Did you call her? Yes, I **did**. No, I **didn't**.* \"did\" の後には動詞の **原形** を使います(-ed なしで)。**Was / were**は \"is / are\" の過去で、単独で使えます:*She **was** tired. They **weren't** home.*",

  'lesson.simple-past-and-past-continuous.title': '過去形と過去進行形',
  'lesson.simple-past-and-past-continuous.description': '二つの過去時制を混ぜます:完了した動作(過去形)+ より長い背景の動作(過去進行形)。サブトピック別に40問。',
  'lesson.simple-past-and-past-continuous.intro':
    "**過去形**は完了した動作を述べます:*I **ate** lunch.* **過去進行形**は進行中のより長い動作を述べます:*I **was eating** when the phone rang.* 組み合わせ:進行中の長い動作が、より短く完了した動作に中断されます。**不規則動詞**(go \u2192 went, eat \u2192 ate, see \u2192 saw)は -ed の規則に従いません \u2014 最も一般的なものを 3 つずつグループにして覚えましょう。",
};

export const translationsByLocale = {
  en: enComplete,
  es,
  zh,
  ko,
  ja,
} as const;
