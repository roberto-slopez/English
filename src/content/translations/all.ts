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
  "exercise.because-so-that.1.prompt": "Complete the sentence with the correct connector.",
  "exercise.because-so-that.1.token1": "_____",
  "exercise.because-so-that.1.explanation": "\"Because\" introduces the reason or cause: being thirsty explains why I drank water.",
  "exercise.because-so-that.1.pro_tip": "Tip: ask yourself \"why did this happen?\" → use \"because\" + subject + verb.",
  "exercise.because-so-that.2.prompt": "Which sentence uses \"because\" correctly?",
  "exercise.because-so-that.2.explanation": "\"I put on a coat because it was cold.\" places the action first and the reason (\"because it was cold\") after.",
  "exercise.because-so-that.2.pro_tip": "Tip: the most natural structure is \"[action] because [reason]\".",
  "exercise.because-so-that.3.prompt": "Reorder the words to form a correct sentence.",
  "exercise.because-so-that.3.explanation": "\"She was tired because she slept late.\" The main clause states how she felt, and \"because she slept late\" gives the reason.",
  "exercise.because-so-that.3.pro_tip": "Tip: keep the main clause (\"She was tired\") before \"because\" + the reason clause (\"she slept late\").",
  "exercise.because-so-that.4.prompt": "Pick the connector that shows purpose, not cause.",
  "exercise.because-so-that.4.explanation": "\"So that\" introduces a purpose clause (\"she could catch the bus\"). It frequently pairs with modals like \"could\" or \"would\".",
  "exercise.because-so-that.4.pro_tip": "Tip: replace \"so that\" with \"in order to\". If the meaning fits, use \"so that\".",
  "exercise.because-so-that.5.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.because-so-that.5.explanation": "\"I studied hard so that I could pass.\" The action (\"I studied hard\") is followed by \"so that\" and the goal (\"I could pass\").",
  "exercise.because-so-that.5.pro_tip": "Tip: \"so\" + clause = result; \"so that\" + subject + modal = purpose.",
  "exercise.because-so-that.6.prompt": "True or False?",
  "exercise.because-so-that.6.statement": "A sentence can start with \"Because\" when the reason comes first.",
  "exercise.because-so-that.6.explanation": "True. \"Because\" is a subordinating conjunction and can start a sentence when followed by a comma and the main clause.",
  "exercise.because-so-that.6.pro_tip": "Tip: when \"Because\" starts a sentence, add a comma before the main clause: \"Because I was late, I missed the bus.\"",
  "exercise.because-so-that.7.prompt": "Choose the sentence that uses \"because\" correctly.",
  "exercise.because-so-that.7.explanation": "\"He brought an umbrella because it might rain.\" uses \"because\" + a complete clause (\"it might rain\") to give the reason.",
  "exercise.because-so-that.7.pro_tip": "Tip: \"because\" introduces the reason (\"it might rain\"), whereas \"so that\" introduces a desired goal.",
  "exercise.because-so-that.8.prompt": "Complete the sentence with the correct connector.",
  "exercise.because-so-that.8.explanation": "\"Because of\" is followed by a noun phrase (\"the rain\"), not a subject + verb clause.",
  "exercise.because-so-that.8.pro_tip": "Tip: \"because of + noun\" vs. \"because + subject + verb\".",
  "exercise.because-so-that.9.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.because-so-that.9.explanation": "\"I was hungry, so I ate a sandwich.\" Here \"so\" introduces the result or consequence of being hungry.",
  "exercise.because-so-that.9.pro_tip": "Tip: \"[cause], so [result]\" is the standard pattern for consequences.",
  "exercise.because-so-that.10.prompt": "Reorder the words to form a correct \"so that\" sentence.",
  "exercise.because-so-that.10.explanation": "\"He spoke slowly so that everyone could understand.\" The clause after \"so that\" explains his purpose for speaking slowly.",
  "exercise.because-so-that.10.pro_tip": "Tip: pair \"so that\" with modal verbs (could, would, can) for natural purpose clauses.",
  "exercise.because-so-that.11.prompt": "Which sentence correctly explains the reason for going to bed early?",
  "exercise.because-so-that.11.explanation": "\"I went to bed early because I was tired.\" uses \"because\" + a complete clause (\"I was tired\") to state the cause.",
  "exercise.because-so-that.11.pro_tip": "Tip: use \"because + subject + verb\" to give the reason why an action happened.",
  "exercise.because-so-that.12.prompt": "True or False?",
  "exercise.because-so-that.12.statement": "\"So that\" introduces a purpose — the reason someone does something in order to achieve a result.",
  "exercise.because-so-that.12.explanation": "True. \"So that\" expresses purpose or intention — the goal someone wants to achieve.",
  "exercise.because-so-that.12.pro_tip": "Tip: \"so that\" answers \"for what purpose?\", while \"because\" answers \"for what cause?\".",
  "exercise.because-so-that.13.prompt": "Pick the connector that introduces a result.",
  "exercise.because-so-that.13.explanation": "\"So\" introduces a result: it was raining (cause), so we stayed inside (result).",
  "exercise.because-so-that.13.pro_tip": "Tip: \"so\" as a result connector almost always follows a comma.",
  "exercise.because-so-that.14.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.because-so-that.14.explanation": "\"She was happy because she passed the exam.\" The clause \"because she passed the exam\" gives the reason for her happiness.",
  "exercise.because-so-that.14.pro_tip": "Tip: \"[feeling/result] + because + [reason]\" is clear and natural.",
  "exercise.because-so-that.15.prompt": "Choose the sentence that uses \"because\" with the past tense correctly.",
  "exercise.because-so-that.15.explanation": "\"I stayed home because I felt sick.\" keeps both verbs in the past simple (\"stayed\" and \"felt\").",
  "exercise.because-so-that.15.pro_tip": "Tip: keep tenses consistent: if the main clause is past, the reason is also past.",
  "exercise.because-so-that.16.prompt": "Complete the sentence with the connector of purpose.",
  "exercise.because-so-that.16.explanation": "\"So that\" + \"I could buy a bike\" expresses the purpose of saving money.",
  "exercise.because-so-that.16.pro_tip": "Tip: \"so that\" + can/could is the classic pattern for expressing a goal.",
  "exercise.because-so-that.17.prompt": "Which is the grammatically correct sentence?",
  "exercise.because-so-that.17.explanation": "\"The fog\" is a noun phrase (no verb), so we must use \"because of\": \"The flight was delayed because of the fog.\"",
  "exercise.because-so-that.17.pro_tip": "Tip: \"because of\" takes a noun phrase; \"because\" takes a subject + verb.",
  "exercise.because-so-that.18.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.because-so-that.18.explanation": "\"He spoke louder so that everyone could hear.\" Speaking louder is the action; \"so that everyone could hear\" is the purpose.",
  "exercise.because-so-that.18.pro_tip": "Tip: action + \"so that\" + subject + modal (\"could\") + base verb.",
  "exercise.because-so-that.19.prompt": "Which sentence correctly uses \"so\" to show a result?",
  "exercise.because-so-that.19.explanation": "\"I was hungry, so I ate.\" states the cause first (\"I was hungry\") followed by \", so\" and the direct result (\"I ate\").",
  "exercise.because-so-that.19.pro_tip": "Tip: use \"so\" for a direct result and \"so that\" (with can/could/would) for a purpose.",
  "exercise.because-so-that.20.prompt": "Complete the sentence expressing a negative purpose.",
  "exercise.because-so-that.20.explanation": "\"So that\" + \"he wouldn't wake the baby\" expresses a negative purpose — what he wanted to avoid.",
  "exercise.because-so-that.20.pro_tip": "Tip: \"so that\" + wouldn't / won't = purpose of avoiding something.",
};

const adverbsOfFrequencyEnExtras: Record<string, string> = {
  "exercise.adverbs-of-frequency.1.prompt": "Which adverb of frequency means 100% of the time?",
  "exercise.adverbs-of-frequency.1.explanation": "\"Always\" means on every occasion (100% of the time), whereas \"never\" means 0% of the time.",
  "exercise.adverbs-of-frequency.1.pro_tip": "Tip: frequency scale from lowest to highest: never → rarely → sometimes → often → usually → always.",
  "exercise.adverbs-of-frequency.2.prompt": "Complete the sentence with the correct adverb of frequency.",
  "exercise.adverbs-of-frequency.2.explanation": "Because the speaker goes \"every weekend without exception\", the correct adverb is \"always\", placed before the main verb \"go\".",
  "exercise.adverbs-of-frequency.2.pro_tip": "Tip: place frequency adverbs BEFORE the main verb (\"I always go\").",
  "exercise.adverbs-of-frequency.3.prompt": "True or False?",
  "exercise.adverbs-of-frequency.3.statement": "Frequency adverbs usually go BEFORE the main verb.",
  "exercise.adverbs-of-frequency.3.explanation": "True. With action verbs, frequency adverbs go before the main verb (e.g. \"I usually wake up at 7.\").",
  "exercise.adverbs-of-frequency.3.pro_tip": "Tip: action verb → adverb BEFORE the verb (\"I usually drink\"). Verb \"to be\" → adverb AFTER (\"She is usually early\").",
  "exercise.adverbs-of-frequency.4.prompt": "Choose the sentence with the correct adverb placement.",
  "exercise.adverbs-of-frequency.4.explanation": "With the verb \"to be\" (\"is\"), the frequency adverb \"always\" goes AFTER the verb: \"She is always late for class.\"",
  "exercise.adverbs-of-frequency.4.pro_tip": "Tip: am / is / are + frequency adverb + adjective (\"She is always late\").",
  "exercise.adverbs-of-frequency.5.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.adverbs-of-frequency.5.explanation": "\"I usually drink coffee in the morning.\" Place the frequency adverb \"usually\" before the main verb \"drink\".",
  "exercise.adverbs-of-frequency.5.pro_tip": "Tip: subject + adverb + main verb + object is the standard order.",
  "exercise.adverbs-of-frequency.6.prompt": "True or False?",
  "exercise.adverbs-of-frequency.6.statement": "\"Hardly ever\" means almost never.",
  "exercise.adverbs-of-frequency.6.explanation": "True. \"Hardly ever\" means very rarely or almost never.",
  "exercise.adverbs-of-frequency.6.pro_tip": "Tip: never use a negative verb with \"hardly ever\" (say \"I hardly ever go\", not \"I don't hardly ever go\").",
  "exercise.adverbs-of-frequency.7.prompt": "Complete the sentence with the correct adverb of frequency.",
  "exercise.adverbs-of-frequency.7.explanation": "Rarely means not often. “Almost never” in the context makes rarely the intended choice, rather than always.",
  "exercise.adverbs-of-frequency.7.pro_tip": "Rarely has no fixed percentage. Look for clues such as almost never.",
  "exercise.adverbs-of-frequency.8.prompt": "How often does \"never\" happen?",
  "exercise.adverbs-of-frequency.8.explanation": "\"Never\" means 0% of the time — on no occasion at all.",
  "exercise.adverbs-of-frequency.8.pro_tip": "Tip: because \"never\" is already negative, pair it with an affirmative verb (\"I never eat meat\").",
  "exercise.adverbs-of-frequency.9.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.adverbs-of-frequency.9.explanation": "\"They often visit their grandparents.\" With the action verb \"visit\", the adverb \"often\" goes before the verb.",
  "exercise.adverbs-of-frequency.9.pro_tip": "Tip: pattern: subject (\"They\") + adverb (\"often\") + main verb (\"visit\") + object.",
  "exercise.adverbs-of-frequency.10.prompt": "True or False?",
  "exercise.adverbs-of-frequency.10.statement": "\"Sometimes\" means on some occasions, but not every time.",
  "exercise.adverbs-of-frequency.10.explanation": "True. \"Sometimes\" describes an event that happens on some occasions. It does not specify an exact percentage.",
  "exercise.adverbs-of-frequency.10.pro_tip": "Use context to express frequency; percentages are only approximate learning aids.",
  "exercise.adverbs-of-frequency.11.prompt": "What does \"occasionally\" mean?",
  "exercise.adverbs-of-frequency.11.explanation": "\"Occasionally\" means from time to time — less often than \"sometimes\" or \"often\", but more than \"never\".",
  "exercise.adverbs-of-frequency.11.pro_tip": "Tip: \"occasionally\" is similar to \"once in a while\" or \"now and then\".",
  "exercise.adverbs-of-frequency.12.prompt": "Reorder the words to form a correct sentence.",
  "exercise.adverbs-of-frequency.12.explanation": "\"We usually have lunch at noon.\" Place \"usually\" before the main verb \"have\".",
  "exercise.adverbs-of-frequency.12.pro_tip": "Tip: keep the frequency adverb directly before the main verb it modifies.",
  "exercise.adverbs-of-frequency.13.prompt": "Complete the sentence with the correct adverb of frequency.",
  "exercise.adverbs-of-frequency.13.explanation": "\"Never\" is the frequency adverb that fits before the affirmative verb \"eats\": \"She never eats breakfast at 7 a.m.\"",
  "exercise.adverbs-of-frequency.13.pro_tip": "Tip: use \"never\" in statements (\"She never eats\") and \"ever\" in questions (\"Does she ever eat...?\").",
  "exercise.adverbs-of-frequency.14.prompt": "Choose the sentence with the correct word order.",
  "exercise.adverbs-of-frequency.14.explanation": "\"I hardly ever go out on weekdays.\" keeps the two-word adverb \"hardly ever\" together right before the main verb \"go\".",
  "exercise.adverbs-of-frequency.14.pro_tip": "Tip: never split \"hardly\" and \"ever\" — place \"hardly ever\" as a unit before the verb.",
  "exercise.adverbs-of-frequency.15.prompt": "True or False?",
  "exercise.adverbs-of-frequency.15.statement": "With the verb \"to be\", the frequency adverb comes AFTER it.",
  "exercise.adverbs-of-frequency.15.explanation": "True. With forms of \"to be\" (am, is, are, was, were), the frequency adverb goes after the verb (e.g. \"They are always happy\").",
  "exercise.adverbs-of-frequency.15.pro_tip": "Tip: \"She is always happy\" (after \"be\") vs. \"She always smiles\" (before action verb).",
  "exercise.adverbs-of-frequency.16.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.adverbs-of-frequency.16.explanation": "\"They are always happy together.\" Because the verb is \"are\" (\"to be\"), \"always\" comes after \"are\".",
  "exercise.adverbs-of-frequency.16.pro_tip": "Tip: Subject (\"They\") + be (\"are\") + adverb (\"always\") + adjective (\"happy\").",
  "exercise.adverbs-of-frequency.17.prompt": "Complete the sentence with the correct adverb of frequency.",
  "exercise.adverbs-of-frequency.17.explanation": "\"Always\" goes before the main verb \"visit\": \"We always visit them on Sundays.\"",
  "exercise.adverbs-of-frequency.17.pro_tip": "Tip: single-word frequency adverbs like \"always\" go before the main verb.",
  "exercise.adverbs-of-frequency.18.prompt": "Reorder the words to form a correct sentence.",
  "exercise.adverbs-of-frequency.18.explanation": "\"She sometimes walks to work.\" Place \"sometimes\" between the subject \"She\" and the main verb \"walks\".",
  "exercise.adverbs-of-frequency.18.pro_tip": "Tip: keep the third-person -s on the main verb (\"She sometimes walks\").",
  "exercise.adverbs-of-frequency.19.prompt": "Choose the grammatically correct sentence.",
  "exercise.adverbs-of-frequency.19.explanation": "\"He usually drinks coffee in the morning.\" places \"usually\" before the verb and keeps the third-person -s (\"drinks\").",
  "exercise.adverbs-of-frequency.19.pro_tip": "Tip: with he/she/it in the present simple, remember the -s on the verb (\"usually drinks\").",
  "exercise.adverbs-of-frequency.20.prompt": "Choose the sentence with the correct word order.",
  "exercise.adverbs-of-frequency.20.explanation": "\"They never eat meat.\" places the frequency adverb \"never\" directly before the main verb \"eat\".",
  "exercise.adverbs-of-frequency.20.pro_tip": "Tip: never put a frequency adverb between the verb and its object (\"eat never meat\" is wrong).",
};

const timeExpressionsEnExtras: Record<string, string> = {
  "exercise.time-expressions.1.prompt": "Choose the natural frequency expression.",
  "exercise.time-expressions.1.explanation": "\"Once a week\" means 1 time per week.",
  "exercise.time-expressions.1.pro_tip": "Tip: use \"once\" for a single occurrence and \"twice\" for two occurrences.",
  "exercise.time-expressions.2.prompt": "What does the word \"twice\" mean?",
  "exercise.time-expressions.2.explanation": "\"Twice\" means two times (on two occasions).",
  "exercise.time-expressions.2.pro_tip": "Tip: \"once\" = one time, \"twice\" = two times, \"three times\" = 3x.",
  "exercise.time-expressions.3.prompt": "Reorder the words to form a correct sentence.",
  "exercise.time-expressions.3.explanation": "\"I exercise three times a week.\" Multi-word time expressions go at the end of the sentence.",
  "exercise.time-expressions.3.pro_tip": "Tip: Subject + verb + \"[number] times a [period]\".",
  "exercise.time-expressions.4.prompt": "Complete the sentence with the correct word.",
  "exercise.time-expressions.4.explanation": "\"Every day\" means each day. \"Every\" is followed by a singular noun (\"day\").",
  "exercise.time-expressions.4.pro_tip": "Tip: as a time expression, always write \"every day\" as two words.",
  "exercise.time-expressions.5.prompt": "Drag the words into the correct order to form a question.",
  "exercise.time-expressions.5.explanation": "\"How often do you exercise?\" uses \"How often\" + do/does + subject + base verb.",
  "exercise.time-expressions.5.pro_tip": "Tip: start frequency questions with \"How often do/does...?\".",
  "exercise.time-expressions.6.prompt": "True or False?",
  "exercise.time-expressions.6.statement": "\"How often\" is used to ask about frequency.",
  "exercise.time-expressions.6.explanation": "True. \"How often...?\" asks how frequently an action happens (e.g. \"once a week\", \"every day\").",
  "exercise.time-expressions.6.pro_tip": "Tip: \"How often\" = frequency; \"How long\" = duration; \"When\" = specific time.",
  "exercise.time-expressions.7.prompt": "Complete the sentence (4 times per month).",
  "exercise.time-expressions.7.explanation": "For numbers three and higher, use the plural \"times\": \"four times a month\".",
  "exercise.time-expressions.7.pro_tip": "Tip: \"once\", \"twice\", \"three times\", \"four times\" (always plural \"times\").",
  "exercise.time-expressions.8.prompt": "Choose the correct question to ask about frequency.",
  "exercise.time-expressions.8.explanation": "\"How often do you go to the gym?\" is the standard question for asking about routine frequency.",
  "exercise.time-expressions.8.pro_tip": "Tip: \"How much\" asks for uncountable amount; \"How often\" asks for frequency.",
  "exercise.time-expressions.9.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.time-expressions.9.explanation": "\"He plays football twice a week.\" Place the frequency phrase \"twice a week\" at the end.",
  "exercise.time-expressions.9.pro_tip": "Tip: Subject (\"He\") + verb (\"plays\") + object (\"football\") + frequency (\"twice a week\").",
  "exercise.time-expressions.10.prompt": "Reorder the words to form a correct question.",
  "exercise.time-expressions.10.explanation": "\"How often do you eat out?\" follows the pattern: How often + do + subject + base verb.",
  "exercise.time-expressions.10.pro_tip": "Tip: \"eat out\" means eat at a restaurant rather than at home.",
  "exercise.time-expressions.11.prompt": "Complete the sentence with the correct word.",
  "exercise.time-expressions.11.explanation": "\"Every morning\" means each morning as a regular routine.",
  "exercise.time-expressions.11.pro_tip": "Tip: \"every\" + singular noun (\"every morning\", \"every evening\", \"every week\").",
  "exercise.time-expressions.12.prompt": "Which is the best answer to \"How often do you go to the gym?\"",
  "exercise.time-expressions.12.explanation": "\"I go twice a week.\" answers \"How often...?\" by stating the frequency.",
  "exercise.time-expressions.12.pro_tip": "Tip: a \"How often\" question requires a frequency expression, not \"Yes, I do.\"",
  "exercise.time-expressions.13.prompt": "True or False?",
  "exercise.time-expressions.13.statement": "\"Once a day\" and \"one time a day\" mean the same thing.",
  "exercise.time-expressions.13.explanation": "True. Both mean 1 occurrence per day, though \"once a day\" is much more natural.",
  "exercise.time-expressions.13.pro_tip": "Tip: prefer \"once a day\" and \"twice a day\" in natural English.",
  "exercise.time-expressions.14.prompt": "Complete the sentence with the correct number form.",
  "exercise.time-expressions.14.explanation": "Before the plural word \"times\", use the cardinal number \"five\": \"five times\".",
  "exercise.time-expressions.14.pro_tip": "Tip: use cardinal numbers (three, four, five) + \"times\", not ordinal numbers (fifth).",
  "exercise.time-expressions.15.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.time-expressions.15.explanation": "\"She goes to the library every day.\" The place (\"to the library\") comes before the time (\"every day\").",
  "exercise.time-expressions.15.pro_tip": "Tip: in English, place (where) usually comes before time (when/how often).",
  "exercise.time-expressions.16.prompt": "Reorder the words to form a correct sentence.",
  "exercise.time-expressions.16.explanation": "\"We meet once a month.\" Subject (\"We\") + verb (\"meet\") + frequency (\"once a month\").",
  "exercise.time-expressions.16.pro_tip": "Tip: \"once a month\" = 1 time per month.",
  "exercise.time-expressions.17.prompt": "Complete the sentence with the correct word.",
  "exercise.time-expressions.17.explanation": "\"Every week\" means each week (\"I call my parents every week.\").",
  "exercise.time-expressions.17.pro_tip": "Tip: \"every week\" takes no article, whereas \"once/twice a week\" uses \"a\".",
  "exercise.time-expressions.18.prompt": "Choose the grammatically correct sentence.",
  "exercise.time-expressions.18.explanation": "\"He goes fishing every weekend.\" uses third-person \"goes\" and places \"every\" + singular \"weekend\" at the end.",
  "exercise.time-expressions.18.pro_tip": "Tip: keep the verb and activity together (\"goes fishing\") and put the time expression at the end.",
  "exercise.time-expressions.19.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.time-expressions.19.explanation": "\"I check my email three times a day.\" Subject + verb + object + frequency expression at the end.",
  "exercise.time-expressions.19.pro_tip": "Tip: \"three times a day\" = 3 occurrences per day.",
  "exercise.time-expressions.20.prompt": "Which sentence is a natural answer to \"How often do you watch TV?\"",
  "exercise.time-expressions.20.explanation": "\"I never watch TV.\" answers \"How often...?\" by stating the frequency (0% of the time).",
  "exercise.time-expressions.20.pro_tip": "Tip: you can answer \"How often...?\" with a time phrase (\"twice a week\") or a frequency adverb (\"never\").",
};

const didAndWasEnExtras: Record<string, string> = {
  "exercise.did-and-was.1.prompt": "Pick the correct auxiliary for the past simple question.",
  "exercise.did-and-was.1.explanation": "Use \"Did\" to form past simple questions with action verbs like \"go\" (\"Did you go to school yesterday?\").",
  "exercise.did-and-was.1.pro_tip": "Tip: with \"Did\", the main verb stays in the base form (\"go\").",
  "exercise.did-and-was.2.prompt": "Choose the correct negative past sentence.",
  "exercise.did-and-was.2.explanation": "After \"didn't\", always use the base form of the verb (\"go\"): \"I didn't go to the party.\"",
  "exercise.did-and-was.2.pro_tip": "Tip: say \"I didn't go\", never \"I didn't went\".",
  "exercise.did-and-was.3.prompt": "True or False?",
  "exercise.did-and-was.3.statement": "After \"did\" we use the base form of the verb (no -ed).",
  "exercise.did-and-was.3.explanation": "True. Because \"did\" already marks the past tense, the main verb stays in its base form (e.g. \"Did she call?\", not \"Did she called?\").",
  "exercise.did-and-was.3.pro_tip": "Tip: \"did\" carries the past tense; the main verb is bare.",
  "exercise.did-and-was.4.prompt": "Complete the short answer.",
  "exercise.did-and-was.4.explanation": "Questions starting with \"Did you...?\" take the short answer \"Yes, I did.\" (or \"No, I didn't.\").",
  "exercise.did-and-was.4.pro_tip": "Tip: short answers repeat the auxiliary (\"did\"), not the main verb (\"watched\").",
  "exercise.did-and-was.5.prompt": "Drag the words into the correct order to form a question.",
  "exercise.did-and-was.5.explanation": "\"Did she call you last night?\" Question structure: Did + subject (\"she\") + base verb (\"call\") + object + time.",
  "exercise.did-and-was.5.pro_tip": "Tip: in past questions with action verbs, the order is: Did + Subject + Base Verb?",
  "exercise.did-and-was.6.prompt": "Reorder the words to form a correct negative sentence.",
  "exercise.did-and-was.6.explanation": "\"I didn't eat breakfast this morning.\" Pattern: subject (\"I\") + didn't + base verb (\"eat\") + object + time.",
  "exercise.did-and-was.6.pro_tip": "Tip: never use a past verb form after \"didn't\" (\"didn't eat\", not \"didn't ate\").",
  "exercise.did-and-was.7.prompt": "Choose the grammatically correct past simple question.",
  "exercise.did-and-was.7.explanation": "\"Did you see the news?\" uses \"Did\" + subject \"you\" + the base verb \"see\" (not the past form \"saw\").",
  "exercise.did-and-was.7.pro_tip": "Tip: \"did\" already marks the past, so change \"saw\" back to the base form \"see\".",
  "exercise.did-and-was.8.prompt": "True or False?",
  "exercise.did-and-was.8.statement": "The negative of \"did\" is \"did not\" (or \"didn't\").",
  "exercise.did-and-was.8.explanation": "True. In the past simple, negative statements with action verbs use \"did not\" or its contraction \"didn't\" + base verb.",
  "exercise.did-and-was.8.pro_tip": "Tip: \"didn't\" is used for all subjects (I, you, he, she, it, we, they didn't).",
  "exercise.did-and-was.9.prompt": "Complete the negative past sentence.",
  "exercise.did-and-was.9.explanation": "With the base action verb \"come\" and past time marker \"yesterday\", use \"didn't\": \"They didn't come to class yesterday.\"",
  "exercise.did-and-was.9.pro_tip": "Tip: use \"didn't\" before base action verbs; never use \"wasn't/weren't\" before a base verb.",
  "exercise.did-and-was.10.prompt": "Drag the words into the correct order to form a question.",
  "exercise.did-and-was.10.explanation": "\"What did you do last weekend?\" The first \"did\" is the past auxiliary verb, and \"do\" is the main verb.",
  "exercise.did-and-was.10.pro_tip": "Tip: Wh-word (\"What\") + auxiliary (\"did\") + subject (\"you\") + main verb (\"do\").",
  "exercise.did-and-was.11.prompt": "Pick the correct form of \"to be\" in the past.",
  "exercise.did-and-was.11.explanation": "With the subject \"I\" and a location (\"at home\"), use \"was\": \"I was at home last night.\"",
  "exercise.did-and-was.11.pro_tip": "Tip: \"was\" goes with I/he/she/it; \"were\" goes with you/we/they.",
  "exercise.did-and-was.12.prompt": "Choose the sentence that uses \"was\" or \"were\" correctly.",
  "exercise.did-and-was.12.explanation": "The plural subject \"They\" takes \"were\": \"They were tired after the trip.\"",
  "exercise.did-and-was.12.pro_tip": "Tip: memorize \"I was, you were, he/she/it was, we were, they were\".",
  "exercise.did-and-was.13.prompt": "True or False?",
  "exercise.did-and-was.13.statement": "We use \"were\" with plural subjects (you, we, they).",
  "exercise.did-and-was.13.explanation": "True. \"Were\" is the past form of \"to be\" for \"you\", \"we\", and \"they\".",
  "exercise.did-and-was.13.pro_tip": "Tip: \"you\" always takes \"were\" in the past, both singular and plural.",
  "exercise.did-and-was.14.prompt": "Reorder the words to form a correct sentence.",
  "exercise.did-and-was.14.explanation": "\"She was very happy yesterday.\" The singular subject \"She\" takes \"was\" followed by the adjective phrase \"very happy\".",
  "exercise.did-and-was.14.pro_tip": "Tip: Subject (\"She\") + was/were (\"was\") + adjective (\"very happy\") + time (\"yesterday\").",
  "exercise.did-and-was.15.prompt": "Complete the sentence with the correct past form of \"to be\".",
  "exercise.did-and-was.15.explanation": "With the plural subject \"We\" and a past time (\"on Saturday\"), use \"were\": \"We were at the park on Saturday.\"",
  "exercise.did-and-was.15.pro_tip": "Tip: \"We\" always takes \"were\" in the past simple of \"to be\".",
  "exercise.did-and-was.16.prompt": "Choose the correct negative sentence in the past.",
  "exercise.did-and-was.16.explanation": "With the singular subject \"He\" and a prepositional phrase (\"at school\"), use \"wasn't\": \"He wasn't at school.\"",
  "exercise.did-and-was.16.pro_tip": "Tip: never use \"didn't\" without a main verb — use \"wasn't\" or \"weren't\" for states and places.",
  "exercise.did-and-was.17.prompt": "Drag the words into the correct order to form a question.",
  "exercise.did-and-was.17.explanation": "\"Where were you last night?\" With \"to be\", invert \"were\" and the subject \"you\" directly (no \"did\").",
  "exercise.did-and-was.17.pro_tip": "Tip: Wh-word (\"Where\") + was/were (\"were\") + subject (\"you\") + time (\"last night\").",
  "exercise.did-and-was.18.prompt": "Match each subject group or question to its correct \"was / were\" form.",
  "exercise.did-and-was.18.explanation": "I / He / She / It → was; You / We / They → were; \"Was she at work?\" → \"Yes, she was.\"; \"Were they at home?\" → \"No, they weren't.\"",
  "exercise.did-and-was.18.pro_tip": "Tip: match the pronoun and auxiliary (\"was\" vs. \"were\") in both questions and short answers.",
  "exercise.did-and-was.19.prompt": "True or False?",
  "exercise.did-and-was.19.statement": "A short answer to \"Were you tired?\" can be \"Yes, I was.\"",
  "exercise.did-and-was.19.explanation": "True. When someone asks \"Were you...?\", you answer about yourself with \"I\": \"Yes, I was.\" or \"No, I wasn't.\"",
  "exercise.did-and-was.19.pro_tip": "Tip: \"Were you...?\" (singular) → \"Yes, I was.\" / \"No, I wasn't.\"",
  "exercise.did-and-was.20.prompt": "Match each past question to its natural short answer.",
  "exercise.did-and-was.20.explanation": "\"Did you call him?\" → \"No, I didn't.\"; \"Was he tired?\" → \"No, he wasn't.\"; \"Were we late?\" → \"No, we weren't.\"; \"Did she go out?\" → \"Yes, she did.\"",
  "exercise.did-and-was.20.pro_tip": "Tip: a \"Did...?\" question is answered with \"did/didn't\"; a \"Was/Were...?\" question is answered with \"was/were/wasn't/weren't\".",
};

const simplePastEnExtras: Record<string, string> = {
  "exercise.simple-past-and-past-continuous.1.prompt": "Complete the sentence with the past simple form of \"play\".",
  "exercise.simple-past-and-past-continuous.1.explanation": "\"Play\" is a regular verb, so it adds -ed in the past simple: \"I played football yesterday.\"",
  "exercise.simple-past-and-past-continuous.1.pro_tip": "Tip: when a verb ends in vowel + y (\"play\", \"stay\"), simply add -ed (\"played\").",
  "exercise.simple-past-and-past-continuous.2.prompt": "Complete the sentence with the past simple form of \"watch\".",
  "exercise.simple-past-and-past-continuous.2.explanation": "\"Watch\" is a regular verb that adds -ed in the past simple: \"She watched a movie last night.\"",
  "exercise.simple-past-and-past-continuous.2.pro_tip": "Tip: finished time markers like \"last night\" take the past simple.",
  "exercise.simple-past-and-past-continuous.3.prompt": "Choose the sentence that uses the past simple correctly.",
  "exercise.simple-past-and-past-continuous.3.explanation": "\"He studied English last year.\" uses the past simple \"studied\" to match the finished time \"last year\".",
  "exercise.simple-past-and-past-continuous.3.pro_tip": "Tip: for verbs ending in consonant + y (\"study\"), change -y to -ied (\"studied\").",
  "exercise.simple-past-and-past-continuous.4.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.simple-past-and-past-continuous.4.explanation": "\"We worked late last Friday.\" \"Worked\" is the regular past simple form of \"work\".",
  "exercise.simple-past-and-past-continuous.4.pro_tip": "Tip: Subject (\"We\") + past verb (\"worked\") + adverb (\"late\") + time (\"last Friday\").",
  "exercise.simple-past-and-past-continuous.5.prompt": "True or False?",
  "exercise.simple-past-and-past-continuous.5.statement": "For regular verbs ending in -e, we add -d (e.g. \"like\" -> \"liked\").",
  "exercise.simple-past-and-past-continuous.5.explanation": "True. When a regular verb already ends in -e (like, live, arrive), we only add -d.",
  "exercise.simple-past-and-past-continuous.5.pro_tip": "Tip: like → liked, arrive → arrived, dance → danced.",
  "exercise.simple-past-and-past-continuous.6.prompt": "Complete the sentence with the past simple form of \"visit\".",
  "exercise.simple-past-and-past-continuous.6.explanation": "\"Visited\" is the regular past simple form of \"visit\": \"They visited us last weekend.\"",
  "exercise.simple-past-and-past-continuous.6.pro_tip": "Tip: \"last weekend\" is a finished time in the past, so use \"visited\".",
  "exercise.simple-past-and-past-continuous.7.prompt": "Which is the correct past simple spelling of \"study\"?",
  "exercise.simple-past-and-past-continuous.7.explanation": "Because \"study\" ends in a consonant (\"d\") + \"y\", change the \"y\" to \"i\" and add \"-ed\": \"studied\".",
  "exercise.simple-past-and-past-continuous.7.pro_tip": "Tip: consonant + y → -ied (\"study → studied\"), but vowel + y → -yed (\"play → played\").",
  "exercise.simple-past-and-past-continuous.8.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.simple-past-and-past-continuous.8.explanation": "\"I cleaned my room yesterday.\" \"Cleaned\" is the regular past simple form of \"clean\".",
  "exercise.simple-past-and-past-continuous.8.pro_tip": "Tip: Subject (\"I\") + verb (\"cleaned\") + object (\"my room\") + time (\"yesterday\").",
  "exercise.simple-past-and-past-continuous.9.prompt": "Complete the sentence with the past simple form of \"cook\".",
  "exercise.simple-past-and-past-continuous.9.explanation": "\"Cooked\" is the regular past simple form of \"cook\": \"She cooked dinner for her family.\"",
  "exercise.simple-past-and-past-continuous.9.pro_tip": "Tip: past simple forms are identical for all subjects (I, you, she, they cooked).",
  "exercise.simple-past-and-past-continuous.10.prompt": "Reorder the words to form a correct sentence.",
  "exercise.simple-past-and-past-continuous.10.explanation": "\"He walked to school this morning.\" \"Walked\" is the regular past simple of \"walk\".",
  "exercise.simple-past-and-past-continuous.10.pro_tip": "Tip: Subject (\"He\") + verb (\"walked\") + destination (\"to school\") + time (\"this morning\").",
  "exercise.simple-past-and-past-continuous.11.prompt": "Complete the sentence with the irregular past simple of \"go\".",
  "exercise.simple-past-and-past-continuous.11.explanation": "\"Go\" is an irregular verb whose past simple form is \"went\": \"I went to the cinema last night.\"",
  "exercise.simple-past-and-past-continuous.11.pro_tip": "Tip: memorize \"go → went → gone\" (never \"goed\").",
  "exercise.simple-past-and-past-continuous.12.prompt": "Complete the sentence with the irregular past simple of \"see\".",
  "exercise.simple-past-and-past-continuous.12.explanation": "\"See\" is irregular: its past simple form is \"saw\" (\"She saw him at the party.\").",
  "exercise.simple-past-and-past-continuous.12.pro_tip": "Tip: see → saw (past simple) → seen (past participle).",
  "exercise.simple-past-and-past-continuous.13.prompt": "Which is the past simple form of the irregular verb \"take\"?",
  "exercise.simple-past-and-past-continuous.13.explanation": "The past simple of \"take\" is \"took\" (\"taken\" is the past participle, and \"taked\" does not exist).",
  "exercise.simple-past-and-past-continuous.13.pro_tip": "Tip: take → took → taken.",
  "exercise.simple-past-and-past-continuous.14.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.simple-past-and-past-continuous.14.explanation": "\"I had a great time there.\" \"Had\" is the irregular past simple form of \"have\".",
  "exercise.simple-past-and-past-continuous.14.pro_tip": "Tip: have → had → had (\"have a great time\" → \"had a great time\").",
  "exercise.simple-past-and-past-continuous.15.prompt": "True or False?",
  "exercise.simple-past-and-past-continuous.15.statement": "Irregular verbs follow the regular -ed pattern in the past.",
  "exercise.simple-past-and-past-continuous.15.explanation": "False. Irregular verbs do not add -ed; they change in unique ways (e.g. go → went, see → saw, eat → ate).",
  "exercise.simple-past-and-past-continuous.15.pro_tip": "Tip: never add -ed to irregular verbs (say \"went\" and \"ate\", not \"goed\" or \"eated\").",
  "exercise.simple-past-and-past-continuous.16.prompt": "Complete the sentence with the irregular past simple of \"eat\".",
  "exercise.simple-past-and-past-continuous.16.explanation": "\"Eat\" is an irregular verb whose past simple form is \"ate\": \"They ate sushi for dinner.\"",
  "exercise.simple-past-and-past-continuous.16.pro_tip": "Tip: eat → ate → eaten.",
  "exercise.simple-past-and-past-continuous.17.prompt": "Which is the past simple form of the irregular verb \"buy\"?",
  "exercise.simple-past-and-past-continuous.17.explanation": "The past simple of \"buy\" is \"bought\" (\"buyed\" is not a real word).",
  "exercise.simple-past-and-past-continuous.17.pro_tip": "Tip: group \"-ought\" verbs together: buy → bought, bring → brought, think → thought.",
  "exercise.simple-past-and-past-continuous.18.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.simple-past-and-past-continuous.18.explanation": "\"I found my keys under the sofa.\" \"Found\" is the irregular past simple form of \"find\".",
  "exercise.simple-past-and-past-continuous.18.pro_tip": "Tip: find → found → found. Place the object (\"my keys\") before the location (\"under the sofa\").",
  "exercise.simple-past-and-past-continuous.19.prompt": "Complete the sentence with the past simple of \"be\".",
  "exercise.simple-past-and-past-continuous.19.explanation": "For the plural subject \"We\", the past simple of \"be\" is \"were\": \"We were very tired after the trip.\"",
  "exercise.simple-past-and-past-continuous.19.pro_tip": "Tip: I/he/she/it → was; you/we/they → were.",
  "exercise.simple-past-and-past-continuous.20.prompt": "Reorder the words to form a correct sentence.",
  "exercise.simple-past-and-past-continuous.20.explanation": "\"He told me the truth yesterday.\" \"Told\" is the irregular past simple of \"tell\".",
  "exercise.simple-past-and-past-continuous.20.pro_tip": "Tip: tell → told → told (\"told\" is followed by a person: \"told me\").",
  "exercise.simple-past-and-past-continuous.21.prompt": "Complete the sentence with the past continuous form of \"read\".",
  "exercise.simple-past-and-past-continuous.21.explanation": "To describe an action in progress at a specific past time (\"at 9 p.m.\"), use the past continuous: \"I was reading a book at 9 p.m.\"",
  "exercise.simple-past-and-past-continuous.21.pro_tip": "Tip: past continuous = was/were + verb-ing (\"I was reading\").",
  "exercise.simple-past-and-past-continuous.22.prompt": "Complete the sentence with the past continuous form of \"play\".",
  "exercise.simple-past-and-past-continuous.22.explanation": "The plural subject \"They\" takes \"were playing\" to describe an ongoing action (\"all afternoon\").",
  "exercise.simple-past-and-past-continuous.22.pro_tip": "Tip: use \"were + verb-ing\" with plural subjects (you, we, they).",
  "exercise.simple-past-and-past-continuous.23.prompt": "Choose the sentence that correctly forms the past continuous.",
  "exercise.simple-past-and-past-continuous.23.explanation": "\"She was cooking dinner.\" includes both required parts of the past continuous: \"was\" + \"cooking\".",
  "exercise.simple-past-and-past-continuous.23.pro_tip": "Tip: never omit \"was\" or \"were\" before the -ing verb.",
  "exercise.simple-past-and-past-continuous.24.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.simple-past-and-past-continuous.24.explanation": "\"He was sleeping when I called.\" The ongoing action (\"was sleeping\") was interrupted by the short action (\"called\").",
  "exercise.simple-past-and-past-continuous.24.pro_tip": "Tip: past continuous (long background action) + \"when\" + past simple (interruption).",
  "exercise.simple-past-and-past-continuous.25.prompt": "True or False?",
  "exercise.simple-past-and-past-continuous.25.statement": "Past continuous = was/were + verb-ing.",
  "exercise.simple-past-and-past-continuous.25.explanation": "True. The past continuous is formed with \"was\" or \"were\" + the present participle (verb-ing).",
  "exercise.simple-past-and-past-continuous.25.pro_tip": "Tip: check both parts: was/were + verb-ing.",
  "exercise.simple-past-and-past-continuous.26.prompt": "Complete the sentence with the past continuous form of \"walk\".",
  "exercise.simple-past-and-past-continuous.26.explanation": "With the plural subject \"We\", use \"were walking\": \"We were walking home in the rain.\"",
  "exercise.simple-past-and-past-continuous.26.pro_tip": "Tip: use the past continuous to set the scene in a past story.",
  "exercise.simple-past-and-past-continuous.27.prompt": "Choose the grammatically correct past continuous sentence.",
  "exercise.simple-past-and-past-continuous.27.explanation": "\"I was studying at 10 p.m.\" uses \"was studying\" for an action in progress at 10 p.m.",
  "exercise.simple-past-and-past-continuous.27.pro_tip": "Tip: with \"I\", always use \"was\" + verb-ing in the past continuous.",
  "exercise.simple-past-and-past-continuous.28.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.simple-past-and-past-continuous.28.explanation": "\"The sun was shining brightly.\" The singular subject \"The sun\" takes \"was shining\".",
  "exercise.simple-past-and-past-continuous.28.pro_tip": "Tip: drop the silent -e in \"shine\" before adding -ing (\"shining\").",
  "exercise.simple-past-and-past-continuous.29.prompt": "Complete the sentence with the past continuous form of \"play\".",
  "exercise.simple-past-and-past-continuous.29.explanation": "Because \"The kids\" is plural (\"they\"), it takes \"were playing\": \"The kids were playing in the garden.\"",
  "exercise.simple-past-and-past-continuous.29.pro_tip": "Tip: plural noun subjects (\"the kids\") take \"were\", not \"was\".",
  "exercise.simple-past-and-past-continuous.30.prompt": "Reorder the words to form a correct sentence.",
  "exercise.simple-past-and-past-continuous.30.explanation": "\"She was dancing all night.\" \"Was dancing\" describes a continuous activity lasting \"all night\".",
  "exercise.simple-past-and-past-continuous.30.pro_tip": "Tip: expressions like \"all night\" or \"all afternoon\" often pair with the past continuous.",
  "exercise.simple-past-and-past-continuous.31.prompt": "Choose the sentence that correctly combines past continuous and past simple.",
  "exercise.simple-past-and-past-continuous.31.explanation": "\"I was reading a book when the phone rang.\" Reading was in progress (\"was reading\") when the phone interrupted it (\"rang\").",
  "exercise.simple-past-and-past-continuous.31.pro_tip": "Tip: long action in progress = past continuous; short interrupting action = past simple.",
  "exercise.simple-past-and-past-continuous.32.prompt": "Complete the sentence with the correct form of \"cook\" after \"While\".",
  "exercise.simple-past-and-past-continuous.32.explanation": "After \"While\", use the past continuous (\"was cooking\") for the longer action in progress when \"he arrived\".",
  "exercise.simple-past-and-past-continuous.32.pro_tip": "Tip: \"While\" + past continuous (\"While I was cooking\"), followed by past simple (\"he arrived\").",
  "exercise.simple-past-and-past-continuous.33.prompt": "Drag the words into the correct order to form a sentence.",
  "exercise.simple-past-and-past-continuous.33.explanation": "\"I was watching TV when she called.\" Watching TV was in progress (\"was watching\") when her call interrupted it (\"called\").",
  "exercise.simple-past-and-past-continuous.33.pro_tip": "Tip: [Past Continuous] + when + [Past Simple].",
  "exercise.simple-past-and-past-continuous.34.prompt": "True or False?",
  "exercise.simple-past-and-past-continuous.34.statement": "\"While\" is often followed by the past continuous (a long action).",
  "exercise.simple-past-and-past-continuous.34.explanation": "True. \"While\" means \"during the time that\", so it introduces a longer ongoing action in the past continuous.",
  "exercise.simple-past-and-past-continuous.34.pro_tip": "Tip: \"while\" + past continuous (long action); \"when\" + past simple (short action).",
  "exercise.simple-past-and-past-continuous.35.prompt": "Complete the sentence with the past simple form of \"ring\".",
  "exercise.simple-past-and-past-continuous.35.explanation": "The phone ringing is the short action that interrupted \"I was sleeping\", so use the past simple \"rang\".",
  "exercise.simple-past-and-past-continuous.35.pro_tip": "Tip: ring → rang (past simple) → rung (past participle).",
  "exercise.simple-past-and-past-continuous.36.prompt": "Choose the sentence that correctly describes an interrupted past action.",
  "exercise.simple-past-and-past-continuous.36.explanation": "\"She was running when she fell.\" Running was in progress (\"was running\") when the sudden fall happened (\"fell\").",
  "exercise.simple-past-and-past-continuous.36.pro_tip": "Tip: fall → fell → fallen. Use the past simple \"fell\" for the sudden event.",
  "exercise.simple-past-and-past-continuous.37.prompt": "Match each base verb to its irregular past simple form.",
  "exercise.simple-past-and-past-continuous.37.explanation": "go → went, see → saw, take → took, have → had, buy → bought.",
  "exercise.simple-past-and-past-continuous.37.pro_tip": "Tip: practice these five high-frequency irregular verbs until they are automatic.",
  "exercise.simple-past-and-past-continuous.38.prompt": "Reorder the words to form a correct sentence.",
  "exercise.simple-past-and-past-continuous.38.explanation": "\"While I was reading, the dog barked.\" \"While I was reading\" sets the background scene, and \"the dog barked\" is the short interruption.",
  "exercise.simple-past-and-past-continuous.38.pro_tip": "Tip: \"While\" + past continuous, + past simple.",
  "exercise.simple-past-and-past-continuous.39.prompt": "Match each base verb to its irregular past participle (V3) form.",
  "exercise.simple-past-and-past-continuous.39.explanation": "eat → eaten, write → written, drive → driven, speak → spoken, give → given.",
  "exercise.simple-past-and-past-continuous.39.pro_tip": "Tip: many common irregular past participles end in -en (eaten, written, driven, spoken, given).",
  "exercise.simple-past-and-past-continuous.40.prompt": "Choose the sentence that shows a long action interrupted by a short action.",
  "exercise.simple-past-and-past-continuous.40.explanation": "\"I was eating dinner when the doorbell rang.\" Eating dinner was in progress (\"was eating\") when the doorbell rang (\"rang\").",
  "exercise.simple-past-and-past-continuous.40.pro_tip": "Tip: use past continuous for the meal in progress (\"was eating\") and past simple for the sudden ring (\"rang\").",
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
  "exercise.past-perfect.8.prompt": "Analyze the timeline order of events in: \"She had studied for weeks before she took the test.\"",
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
  "exercise.conditionals-all.16.prompt": "Identify which conditional type this sentence belongs to: \"If I had known, I would have told you.\"",
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
  "exercise.relative-clauses.8.prompt": "Identify the type of relative clause in: \"My brother, who lives in Tokyo, is visiting us next week.\"",
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
  "exercise.relative-clauses.12.statement": "In a defining relative clause, you can omit an object pronoun such as \"who\", \"which\", or \"that\" (e.g. \"the movie [that] we watched\").",
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

// ── Lesson 17: Present Real Conditionals (technology theme) ─────────────
const realConditionalsEnExtras: Record<string, string> = {
  'lesson.real-conditionals.title': 'Present Real Conditionals',
  'lesson.real-conditionals.description':
    'Use if-clauses and certain results to talk about how new technology helps people, with can, may, should, and must.',
  'lesson.real-conditionals.intro':
    '### 1. Objective\n' +
    'Use present real conditionals to discuss how new technology can help people.\n\n' +
    '### 2. Form: certain results\n' +
    '• **If + simple present, simple present** → *If you plug in your phone, it charges.*\n' +
    '• Use it for results that are **certain**: when the condition happens, the result is always the same.\n' +
    '• The clauses can switch places: *Your phone charges if you plug it in.*\n' +
    '• Use a **comma** only when the if-clause comes **first**.\n\n' +
    '### 3. Modals in the result clause\n' +
    '• **Future possibility**: *can, may, could* → *If you wear a smartwatch, you can track your health.*\n' +
    '• **Advice**: *should, ought to* → *If your phone is slow, you should delete old apps.*\n' +
    '• **Necessity**: *must, have to* → *If you want to join the class, you have to create an account.*\n\n' +
    '### 4. Spot the clauses\n' +
    '• **Condition clause** (the *if* part) → underline it twice.\n' +
    '• **Result clause** → underline it once.\n' +
    '• ⚠️ Never put *will* in the if-clause (*If it rains...*, not *If it will rain...*).',

  'exercise.real-conditionals.1.prompt': 'Complete the present real conditional:',
  'exercise.real-conditionals.1.explanation': 'Both clauses use the simple present. With "a smart thermostat" (third person), the verb takes -s: "senses".',
  'exercise.real-conditionals.1.pro_tip': 'Tip: If + simple present, simple present. Never "will" in the if-clause.',
  'exercise.real-conditionals.2.prompt': 'Choose the correct present real conditional sentence:',
  'exercise.real-conditionals.2.explanation': 'Present real conditionals use the simple present in both clauses: "If people use video calls, they stay in touch."',
  'exercise.real-conditionals.2.pro_tip': 'Tip: no "will" and no past tense in a present real conditional.',
  'exercise.real-conditionals.3.prompt': 'Complete the sentence with the correct verb form:',
  'exercise.real-conditionals.3.explanation': '"If you wear..." — the subject is "you", so the simple present is "wear" (no -s).',
  'exercise.real-conditionals.3.pro_tip': 'Tip: only he / she / it add -s in the simple present.',
  'exercise.real-conditionals.4.prompt': 'True or False?',
  'exercise.real-conditionals.4.explanation': 'True. That is exactly what present real conditionals are for: certain conditions with results that are always the same.',
  'exercise.real-conditionals.4.pro_tip': 'Tip: think "if X happens, Y always happens".',
  'exercise.real-conditionals.5.prompt': 'True or False?',
  'exercise.real-conditionals.5.explanation': 'False. "If a doctor uses a telehealth app" is the condition (if) clause. The result clause is "patients can get help from home".',
  'exercise.real-conditionals.5.pro_tip': 'Tip: the clause that starts with "if" is the condition.',
  'exercise.real-conditionals.6.prompt': 'Which sentence gives ADVICE?',
  'exercise.real-conditionals.6.explanation': '"Should" gives advice: "you should delete old apps". "May" shows possibility and "must" shows necessity.',
  'exercise.real-conditionals.6.pro_tip': 'Tip: advice = should / ought to.',
  'exercise.real-conditionals.7.prompt': 'Which sentence expresses a future POSSIBILITY?',
  'exercise.real-conditionals.7.explanation': '"Can" (like "may" and "could") expresses possibility: "they can find new places easily".',
  'exercise.real-conditionals.7.pro_tip': 'Tip: possibility = can / may / could.',
  'exercise.real-conditionals.8.prompt': 'Which sentence expresses NECESSITY?',
  'exercise.real-conditionals.8.explanation': '"Have to" (like "must") expresses necessity: you need an account to enroll.',
  'exercise.real-conditionals.8.pro_tip': 'Tip: necessity = must / have to.',
  'exercise.real-conditionals.9.prompt': 'Complete the sentence with a modal of advice:',
  'exercise.real-conditionals.9.explanation': '"Ought to" gives advice, like "should". Remember: "ought" needs "to" before the base verb.',
  'exercise.real-conditionals.9.pro_tip': 'Tip: should + base verb, but ought TO + base verb.',
  'exercise.real-conditionals.10.prompt': 'Complete the sentence with a modal of possibility:',
  'exercise.real-conditionals.10.explanation': '"Can" + base verb expresses possibility. Modals never take "to" or -s.',
  'exercise.real-conditionals.10.pro_tip': 'Tip: modal + base verb (no "to", no -s).',
  'exercise.real-conditionals.11.prompt': 'Put the words in the correct order:',
  'exercise.real-conditionals.11.explanation': '"If you charge your phone at night, it is ready in the morning." The if-clause comes first, followed by a comma.',
  'exercise.real-conditionals.11.pro_tip': 'Tip: if-clause first = comma after it.',
  'exercise.real-conditionals.12.prompt': 'Put the words in the correct order:',
  'exercise.real-conditionals.12.explanation': '"Doctors can help patients if they use video calls." The result comes first, so there is no comma.',
  'exercise.real-conditionals.12.pro_tip': 'Tip: result first = no comma.',
  'exercise.real-conditionals.13.prompt': 'Put the words in the correct order:',
  'exercise.real-conditionals.13.explanation': '"If a robot cleans the floor, people have more free time." Both verbs are in the simple present.',
  'exercise.real-conditionals.13.pro_tip': 'Tip: start with the capitalized word "If" when the condition comes first.',
  'exercise.real-conditionals.14.prompt': 'Put the words in the correct order:',
  'exercise.real-conditionals.14.explanation': '"If you want to learn faster, you should use a language app." "Should" gives advice in the result clause.',
  'exercise.real-conditionals.14.pro_tip': 'Tip: modals in the result clause: can, may, could, should, ought to, must, have to.',
  'exercise.real-conditionals.15.prompt': 'Match each condition with its logical result:',
  'exercise.real-conditionals.15.explanation': 'Each result logically follows its condition, and the modals add meaning: "can" (possibility), "may" (possibility), "should" (advice).',
  'exercise.real-conditionals.15.pro_tip': 'Tip: read both halves aloud — does the result make sense?',
  'exercise.real-conditionals.16.prompt': 'Choose the sentence with the correct punctuation:',
  'exercise.real-conditionals.16.explanation': 'When the if-clause comes first, put a comma after it. Do not use a comma when the if-clause comes last, and do not use a semicolon.',
  'exercise.real-conditionals.16.pro_tip': 'Tip: "If..., result." or "Result if..." (no comma).',
  'exercise.real-conditionals.17.prompt': 'In "If you shop online, you can compare prices quickly," which part is the CONDITION clause (underline it twice)?',
  'exercise.real-conditionals.17.explanation': 'The condition clause is the one with "if": "If you shop online".',
  'exercise.real-conditionals.17.pro_tip': 'Tip: condition = underline twice.',
  'exercise.real-conditionals.18.prompt': 'In "Customers save time if they use self-checkout machines," which part is the RESULT clause (underline it once)?',
  'exercise.real-conditionals.18.explanation': 'The result clause is "Customers save time". The if-clause ("if they use self-checkout machines") is the condition.',
  'exercise.real-conditionals.18.pro_tip': 'Tip: result = underline once.',
  'exercise.real-conditionals.19.prompt': 'Add "should" to the sentence "If your phone gets hot, you turn it off." Put the words in the correct order:',
  'exercise.real-conditionals.19.explanation': '"Should" goes before the base verb in the result clause: "you should turn it off".',
  'exercise.real-conditionals.19.pro_tip': 'Tip: subject + modal + base verb.',
  'exercise.real-conditionals.20.prompt': 'Add "can" to the sentence "If you use a translation app, you talk with people from other countries." Put the words in the correct order:',
  'exercise.real-conditionals.20.explanation': '"Can" goes between the subject and the base verb: "you can talk with people from other countries".',
  'exercise.real-conditionals.20.pro_tip': 'Tip: use a capital letter for the first word of the sentence.',
};

// ── Lesson 18: Comparatives ─────────────────────────────────────────────────
const comparativesEnExtras: Record<string, string> = {
  'lesson.comparatives.title': 'Comparatives',
  'lesson.comparatives.description':
    'Compare two things with -er / more ... than, use less and fewer, and compare actions and nouns with prefer ... rather than.',
  'lesson.comparatives.intro':
    '### 1. Comparing two things\n' +
    'Comparative adjectives compare **two (and only two)** things.\n' +
    '• **[Noun A] + [be or linking verb] + [comparative adjective] + than + [Noun B]**\n' +
    '• *Tom is **taller than** Mike.* / *Mike seems **more talkative than** Tom.*\n\n' +
    '### 2. -er or more?\n' +
    '• **Short adjectives**: add **-er** → *older, taller*.\n' +
    '• **Three or more syllables**: use **more** → *more beautiful, more expensive*.\n' +
    '• **Two syllables**: usually use **more** (*more serious*), **except** those ending in *-er, -ow, -le, -y*, which take **-er** → *shallow → shallower, simple → simpler, happy → happier*.\n' +
    '• You can put **less** before any adjective without changing it → *less serious*.\n' +
    '• With nouns: **fewer** + count nouns (*fewer people*), **less** + non-count nouns (*less coffee*).\n\n' +
    '### 3. Comparing actions and nouns: prefer ... rather than\n' +
    '• **Subject + prefer + infinitive + rather than + infinitive** → *We prefer to watch movies rather than to read books.*\n' +
    '• You can omit the second *to* → *We prefer to watch movies rather than read books.*\n' +
    '• With gerunds, keep **both** gerunds → *We prefer watching movies rather than reading books.*\n' +
    '• With nouns → *We prefer movies rather than books.* or *We prefer movies **to** books.*\n\n' +
    '### 4. Pro Tips\n' +
    '• ⚠️ Use **than** (not *that* or *then*) after a comparative.\n' +
    '• ⚠️ Never mix one gerund and one infinitive with *rather than*.',

  'exercise.comparatives.1.prompt': 'Complete the comparative sentence:',
  'exercise.comparatives.1.explanation': '"Tall" is a short adjective, so we add -er: "taller than".',
  'exercise.comparatives.1.pro_tip': 'Tip: short adjective + -er + than.',
  'exercise.comparatives.2.prompt': 'Choose the correct comparative sentence:',
  'exercise.comparatives.2.explanation': '"Talkative" has three syllables, so it uses "more", followed by "than".',
  'exercise.comparatives.2.pro_tip': 'Tip: more + long adjective + than.',
  'exercise.comparatives.3.prompt': 'True or False?',
  'exercise.comparatives.3.explanation': 'True. Comparatives compare two (and only two) things. For three or more, English uses the superlative.',
  'exercise.comparatives.3.pro_tip': 'Tip: two things = comparative; three or more = superlative.',
  'exercise.comparatives.4.prompt': 'Put the words in the correct order:',
  'exercise.comparatives.4.explanation': '"Ken is older than Doug." Structure: Noun A + be + comparative + than + Noun B.',
  'exercise.comparatives.4.pro_tip': 'Tip: Noun A + be + comparative + than + Noun B.',
  'exercise.comparatives.5.prompt': 'Complete the comparative sentence:',
  'exercise.comparatives.5.explanation': '"Serious" has more than one syllable and does not end in -er, -ow, -le, or -y, so it uses "more".',
  'exercise.comparatives.5.pro_tip': 'Tip: more serious than (not "seriouser").',
  'exercise.comparatives.6.prompt': 'Choose the correct sentence:',
  'exercise.comparatives.6.explanation': '"Expensive" has three syllables, so it needs "more": "more expensive than".',
  'exercise.comparatives.6.pro_tip': 'Tip: three or more syllables = more.',
  'exercise.comparatives.7.prompt': 'Choose the correct sentence:',
  'exercise.comparatives.7.explanation': 'Two-syllable adjectives ending in -ow take -er: "shallow → shallower". Never combine "more" with -er.',
  'exercise.comparatives.7.pro_tip': 'Tip: -ow, -le, -er, -y endings → add -er.',
  'exercise.comparatives.8.prompt': 'Complete the comparative sentence:',
  'exercise.comparatives.8.explanation': '"Simple" ends in -le, so it takes -er: "simpler".',
  'exercise.comparatives.8.pro_tip': 'Tip: simple → simpler (the final -e is not doubled).',
  'exercise.comparatives.9.prompt': 'Complete the comparative sentence:',
  'exercise.comparatives.9.explanation': '"Happy" ends in -y, so it takes -er and changes y to i: "happier".',
  'exercise.comparatives.9.pro_tip': 'Tip: consonant + y → -ier (happy → happier).',
  'exercise.comparatives.10.prompt': 'True or False?',
  'exercise.comparatives.10.explanation': 'True. All adjectives with three or more syllables use "more": more beautiful, more comfortable.',
  'exercise.comparatives.10.pro_tip': 'Tip: count the syllables: 3+ = more.',
  'exercise.comparatives.11.prompt': 'True or False?',
  'exercise.comparatives.11.explanation': 'True. "Less" can go before any adjective and the adjective never changes: less serious, less expensive.',
  'exercise.comparatives.11.pro_tip': 'Tip: less + adjective (no spelling change).',
  'exercise.comparatives.12.prompt': 'Complete the sentence:',
  'exercise.comparatives.12.explanation': '"People" is a count noun, so we use "fewer".',
  'exercise.comparatives.12.pro_tip': 'Tip: fewer + count nouns.',
  'exercise.comparatives.13.prompt': 'Complete the sentence:',
  'exercise.comparatives.13.explanation': '"Coffee" is a non-count noun here, so we use "less".',
  'exercise.comparatives.13.pro_tip': 'Tip: less + non-count nouns.',
  'exercise.comparatives.14.prompt': 'Choose the correct sentence to compare two actions:',
  'exercise.comparatives.14.explanation': 'The structure is: prefer + infinitive + rather than + infinitive.',
  'exercise.comparatives.14.pro_tip': 'Tip: to + verb ... rather than to + verb.',
  'exercise.comparatives.15.prompt': 'Put the words in the correct order (the second "to" is omitted):',
  'exercise.comparatives.15.explanation': '"We prefer to watch movies rather than read books." With this structure, the second "to" can be omitted.',
  'exercise.comparatives.15.pro_tip': 'Tip: prefer to watch ... rather than read.',
  'exercise.comparatives.16.prompt': 'Choose the correct sentence with gerunds:',
  'exercise.comparatives.16.explanation': 'If you use one gerund, the second structure must also be a gerund: "watching ... rather than reading".',
  'exercise.comparatives.16.pro_tip': 'Tip: never mix one gerund and one infinitive.',
  'exercise.comparatives.17.prompt': 'Complete the sentence to compare two nouns:',
  'exercise.comparatives.17.explanation': 'The structure "prefer + noun + rather than + noun" compares two nouns.',
  'exercise.comparatives.17.pro_tip': 'Tip: prefer tea rather than coffee.',
  'exercise.comparatives.18.prompt': 'Complete the sentence (additional structure for nouns):',
  'exercise.comparatives.18.explanation': 'With nouns you can also say "prefer + noun + to + noun": "movies to books".',
  'exercise.comparatives.18.pro_tip': 'Tip: prefer X to Y (with nouns).',
  'exercise.comparatives.19.prompt': 'Match each adjective with its comparative form:',
  'exercise.comparatives.19.explanation': 'Tall → taller (short), serious → more serious (2 syllables, no special ending), simple → simpler (-le), happy → happier (-y).',
  'exercise.comparatives.19.pro_tip': 'Tip: short, -le, -y, -ow, -er → -er; otherwise more.',
  'exercise.comparatives.20.prompt': 'Put the words in the correct order:',
  'exercise.comparatives.20.explanation': '"She prefers dancing rather than singing." Both parts are gerunds.',
  'exercise.comparatives.20.pro_tip': 'Tip: gerund + rather than + gerund.',
};

// ── Lesson 19: Compound Sentences ────────────────────────────────────────
const compoundSentencesEnExtras: Record<string, string> = {
  'lesson.compound-sentences.title': `Compound Sentences`,
  'lesson.compound-sentences.description': `Join two independent clauses with for, and, nor, but, or, yet, and so — including the special word order after nor.`,
  'lesson.compound-sentences.intro':
    `### 1. Structure\n` +
    `• **Independent clause + , + conjunction + independent clause**\n` +
    `• *We took the train home, **for** it was less expensive.*\n` +
    `• Each side of the conjunction is a complete sentence (subject + verb). Put a **comma** before the conjunction.\n\n` +
    `### 2. The seven conjunctions (FANBOYS)\n` +
    `• **for** → reason: *We took the train home, for it was less expensive.*\n` +
    `• **and** → addition: *Mary watched a movie, and she ate dinner at Lucille's.*\n` +
    `• **nor** → negative addition: *Tim doesn't like cookies, nor does he like pies.*\n` +
    `• **but** → contrast: *McDonald's is very cheap, but it is very unhealthy.*\n` +
    `• **or** → choice: *We can buy the car, or we can lease it.*\n` +
    `• **yet** → unexpected contrast: *The house was too expensive, yet the family bought it anyway.*\n` +
    `• **so** → result: *Mark didn't have enough money, so he took out a loan.*\n\n` +
    `### 3. The special case: nor\n` +
    `• **subject + negative aux + verb + object, nor + positive aux + subject + verb**\n` +
    `• *I didn't bring an umbrella, nor **did I** bring a coat.*\n` +
    `• *I won't clean your room, nor **will I** make your breakfast.*\n` +
    `• *I'm not a cheater, nor **am I** a crook.*\n\n` +
    `### 4. Pro Tips\n` +
    `• ⚠️ After *nor*, the auxiliary comes **before** the subject and is **positive** (nor *does* he, not nor *doesn't* he).\n` +
    `• ⚠️ Both clauses need their own subject: *..., so he took out a loan* (not *..., so took out a loan*).`,

  'exercise.compound-sentences.1.prompt': `Which sentence is a compound sentence?`,
  'exercise.compound-sentences.1.explanation': `It joins two independent clauses ("We took the train home" and "it was less expensive") with a comma and "for".`,
  'exercise.compound-sentences.1.pro_tip': `Tip: independent clause + comma + conjunction + independent clause.`,
  'exercise.compound-sentences.2.prompt': `True or False?`,
  'exercise.compound-sentences.2.explanation': `True. A compound sentence = two independent clauses + a comma + a coordinating conjunction.`,
  'exercise.compound-sentences.2.pro_tip': `Tip: each clause could be a complete sentence on its own.`,
  'exercise.compound-sentences.3.prompt': `True or False?`,
  'exercise.compound-sentences.3.explanation': `True. The seven coordinating conjunctions are for, and, nor, but, or, yet, so (FANBOYS).`,
  'exercise.compound-sentences.3.pro_tip': `Tip: remember them with the word FANBOYS.`,
  'exercise.compound-sentences.4.prompt': `Complete the compound sentence:`,
  'exercise.compound-sentences.4.explanation': `"And" adds a second, related action: she watched a movie and she ate dinner.`,
  'exercise.compound-sentences.4.pro_tip': `Tip: and = addition.`,
  'exercise.compound-sentences.5.prompt': `Put the words in the correct order:`,
  'exercise.compound-sentences.5.explanation': `"Mary watched a movie, and she ate dinner at Lucille's." Note the comma before "and".`,
  'exercise.compound-sentences.5.pro_tip': `Tip: put a comma before the conjunction.`,
  'exercise.compound-sentences.6.prompt': `Choose the correctly punctuated compound sentence:`,
  'exercise.compound-sentences.6.explanation': `The comma goes before the conjunction, not after it. Do not use a semicolon with a conjunction, and do not start the second clause with a period.`,
  'exercise.compound-sentences.6.pro_tip': `Tip: clause, conjunction clause.`,
  'exercise.compound-sentences.7.prompt': `Complete the sentence with the conjunction that gives a REASON:`,
  'exercise.compound-sentences.7.explanation': `"For" introduces the reason: we took the train because it was less expensive.`,
  'exercise.compound-sentences.7.pro_tip': `Tip: for = because (in compound sentences).`,
  'exercise.compound-sentences.8.prompt': `Complete the sentence with the conjunction that shows CONTRAST:`,
  'exercise.compound-sentences.8.explanation': `"But" contrasts two ideas: cheap, but unhealthy.`,
  'exercise.compound-sentences.8.pro_tip': `Tip: but = contrast.`,
  'exercise.compound-sentences.9.prompt': `Complete the sentence with the conjunction that shows an UNEXPECTED result:`,
  'exercise.compound-sentences.9.explanation': `"Yet" shows a surprising contrast: it was too expensive, but they bought it anyway.`,
  'exercise.compound-sentences.9.pro_tip': `Tip: yet = unexpected contrast.`,
  'exercise.compound-sentences.10.prompt': `Complete the sentence with the conjunction that shows a RESULT:`,
  'exercise.compound-sentences.10.explanation': `"So" introduces the result: not enough money, so he took out a loan.`,
  'exercise.compound-sentences.10.pro_tip': `Tip: so = result.`,
  'exercise.compound-sentences.11.prompt': `Which conjunction shows a CHOICE between two options?`,
  'exercise.compound-sentences.11.explanation': `"Or" presents alternatives: we can buy the car, or we can lease it.`,
  'exercise.compound-sentences.11.pro_tip': `Tip: or = choice.`,
  'exercise.compound-sentences.12.prompt': `Match each conjunction with its function:`,
  'exercise.compound-sentences.12.explanation': `for = reason, and = addition, but = contrast, so = result.`,
  'exercise.compound-sentences.12.pro_tip': `Tip: ask yourself what the second clause does for the first.`,
  'exercise.compound-sentences.13.prompt': `Put the words in the correct order:`,
  'exercise.compound-sentences.13.explanation': `"We can buy the car, or we can lease it." Two choices joined by "or".`,
  'exercise.compound-sentences.13.pro_tip': `Tip: comma + or + second independent clause.`,
  'exercise.compound-sentences.14.prompt': `True or False?`,
  'exercise.compound-sentences.14.explanation': `True. After "nor" the word order is inverted: positive auxiliary + subject + verb ("nor does he like pies").`,
  'exercise.compound-sentences.14.pro_tip': `Tip: nor + positive aux + subject + verb.`,
  'exercise.compound-sentences.15.prompt': `Complete the sentence with the correct auxiliary after "nor":`,
  'exercise.compound-sentences.15.explanation': `"Nor" already makes the idea negative, so the auxiliary is positive: "nor does he like pies".`,
  'exercise.compound-sentences.15.pro_tip': `Tip: the first clause uses doesn't, so the second uses does.`,
  'exercise.compound-sentences.16.prompt': `Complete the sentence with the correct auxiliary after "nor":`,
  'exercise.compound-sentences.16.explanation': `The first clause is in the simple past (didn't bring), so the second uses "did" before the subject: "nor did I bring a coat".`,
  'exercise.compound-sentences.16.pro_tip': `Tip: match the tense of the first clause.`,
  'exercise.compound-sentences.17.prompt': `Choose the correct sentence with "nor":`,
  'exercise.compound-sentences.17.explanation': `After "nor" put a positive auxiliary before the subject: "nor do I have a dog". Do not repeat the negative.`,
  'exercise.compound-sentences.17.pro_tip': `Tip: nor do I (not nor I do / nor I don't).`,
  'exercise.compound-sentences.18.prompt': `Put the words in the correct order:`,
  'exercise.compound-sentences.18.explanation': `"I won't clean your room, nor will I make your breakfast." The auxiliary "will" comes before the subject "I".`,
  'exercise.compound-sentences.18.pro_tip': `Tip: won't ... nor will I.`,
  'exercise.compound-sentences.19.prompt': `Complete the sentence with the correct verb after "nor":`,
  'exercise.compound-sentences.19.explanation': `With the verb "be" there is no extra auxiliary: "I'm not a cheater, nor am I a crook."`,
  'exercise.compound-sentences.19.pro_tip': `Tip: with be, just move "am / is / are" before the subject.`,
  'exercise.compound-sentences.20.prompt': `Choose the correct compound sentence:`,
  'exercise.compound-sentences.20.explanation': `"So" shows the result and each clause has its own subject and verb. "For" would give the wrong meaning, and the comma goes before the conjunction.`,
  'exercise.compound-sentences.20.pro_tip': 'Tip: join two independent clauses with a comma and a coordinating conjunction.',
};

// ── Lesson 20: Word and Sentence Stress ──────────────────────────────────
const wordAndSentenceStressEnExtras: Record<string, string> = {
  'lesson.word-and-sentence-stress.title': `Word and Sentence Stress`,
  'lesson.word-and-sentence-stress.description': `Master stress notation, distinguish content words from function words, and understand English sentence rhythm and dialogue stress.`,
  'lesson.word-and-sentence-stress.intro':
    `### 1. Stress & Systems of Notation\n` +
    `• **Stress** is a sound that is **longer, louder, or higher-pitched**.\n` +
    `• In words, each syllable can have different stress. Notations include **capital letters** and **bubble sizes**:\n` +
    `  - Example: **PE-di-AT-ric** (the 3rd syllable **-AT-** has the highest stress, followed by **PE-**).\n` +
    `• Patterns of stress exist at both the **word level** and the **sentence level**.\n\n` +
    `### 2. Content Words vs. Function Words\n` +
    `• **Content Words** carry vital meaning and are **STRESSED**:\n` +
    `  - **Nouns**: *computer, board, peace, school*\n` +
    `  - **Verbs**: *say, walk, run, belong*\n` +
    `  - **Adjectives**: *clean, quick, rapid, enormous*\n` +
    `  - **Adverbs**: *quickly, softly, enormously, cheerfully*\n` +
    `  - **Interrogatives**: *who, what, when, where, why, how*\n` +
    `• **Function Words** signal grammar and are **UNSTRESSED**:\n` +
    `  - **Articles**: *the, a/an*\n` +
    `  - **Auxiliaries**: *can, must, might, will, have, be*\n` +
    `  - **Prepositions**: *on, with, to, from*\n` +
    `  - **Pronouns**: *he, she, they, we, you, him*\n` +
    `  - **Conjunctions**: *and, but, or*\n\n` +
    `### 3. Sentence Rhythm & Examples\n` +
    `• **CATS CHASE MICE.**\n` +
    `• **The CATS have CHASED MICE.**\n` +
    `• **The CATS will CHASE the MICE.**\n` +
    `• **The CATS could have been CHASing the MICE.**\n` +
    `*(Notice: English rhythm stays timed to the stressed content words, while function words stay quick and light!)*\n\n` +
    `### 4. Dialogue Stress\n` +
    `• In dialogue, speakers emphasize the key content words:\n` +
    `  - *A: WHAT do YOU have to DO today?*\n` +
    `  - *B: I have to WALK my DOG.*\n` +
    `  - *A: IS he FRIENDLY? — B: HE is VERY friendly.*`,

  'exercise.word-and-sentence-stress.1.prompt': `True or False?`,
  'exercise.word-and-sentence-stress.1.explanation': `True. Stress is produced with more energy: syllables are longer, louder, and higher in pitch.`,
  'exercise.word-and-sentence-stress.1.pro_tip': `Tip: stress = longer, louder, higher pitch.`,
  'exercise.word-and-sentence-stress.2.prompt': `How is syllable stress typically indicated in visual notation systems?`,
  'exercise.word-and-sentence-stress.2.explanation': `Stress systems use capital letters (e.g. PE-di-AT-ric) or bubbles of different sizes above syllables.`,
  'exercise.word-and-sentence-stress.2.pro_tip': `Tip: bigger bubble or capital letters = stressed syllable.`,
  'exercise.word-and-sentence-stress.3.prompt': `In the notation "PE-di-AT-ric", which syllable has the highest (primary) stress?`,
  'exercise.word-and-sentence-stress.3.explanation': `The third syllable (-AT-) has the largest bubble and primary stress, followed by PE- in secondary stress.`,
  'exercise.word-and-sentence-stress.3.pro_tip': `Tip: the largest bubble / full capitalization indicates primary stress.`,
  'exercise.word-and-sentence-stress.4.prompt': `True or False?`,
  'exercise.word-and-sentence-stress.4.explanation': `False. Syllables have varying stress levels: in "PE-di-AT-ric", -AT- has the highest stress, followed by PE-, while -di- and -ric are unstressed.`,
  'exercise.word-and-sentence-stress.4.pro_tip': `Tip: syllables within the same word carry different amounts of stress.`,
  'exercise.word-and-sentence-stress.5.prompt': `Match each category to whether it is a Content Word or a Function Word:`,
  'exercise.word-and-sentence-stress.5.explanation': `Nouns and adjectives are content words (stressed); articles and prepositions are function words (unstressed).`,
  'exercise.word-and-sentence-stress.5.pro_tip': `Tip: content words carry core meaning; function words glue grammar together.`,
  'exercise.word-and-sentence-stress.6.prompt': `Which of the following is a CONTENT word that is typically STRESSED?`,
  'exercise.word-and-sentence-stress.6.explanation': `"Quick" is an adjective, which is a content word. "The", "from", and "they" are function words.`,
  'exercise.word-and-sentence-stress.6.pro_tip': `Tip: nouns, verbs, adjectives, and adverbs = content words.`,
  'exercise.word-and-sentence-stress.7.prompt': `Which of the following is a FUNCTION word that is typically UNSTRESSED?`,
  'exercise.word-and-sentence-stress.7.explanation': `"Must" is an auxiliary verb (function word). "Belong", "peace", and "cheerfully" are content words.`,
  'exercise.word-and-sentence-stress.7.pro_tip': `Tip: auxiliary verbs, articles, pronouns, and prepositions are function words.`,
  'exercise.word-and-sentence-stress.8.prompt': `True or False?`,
  'exercise.word-and-sentence-stress.8.explanation': `True. Interrogative words (who, what, when, where, why, how) are stressed because they initiate information questions.`,
  'exercise.word-and-sentence-stress.8.pro_tip': `Tip: question words (who, what, where) carry stress!`,
  'exercise.word-and-sentence-stress.9.prompt': `Complete the rule:`,
  'exercise.word-and-sentence-stress.9.explanation': `Function words (articles, prepositions, auxiliaries) signal grammatical relationships between words.`,
  'exercise.word-and-sentence-stress.9.pro_tip': `Tip: content words = meaning; function words = grammatical structure.`,
  'exercise.word-and-sentence-stress.10.prompt': `In the sentence "CATS CHASE MICE", which words are stressed?`,
  'exercise.word-and-sentence-stress.10.explanation': `All three words are content words (noun, verb, noun), so all three receive sentence stress: CATS CHASE MICE.`,
  'exercise.word-and-sentence-stress.10.pro_tip': `Tip: when every word is a content word, every word is stressed.`,
  'exercise.word-and-sentence-stress.11.prompt': `Complete the sentence:`,
  'exercise.word-and-sentence-stress.11.explanation': `"The" is an article and "have" is an auxiliary verb, so both are function words that remain unstressed.`,
  'exercise.word-and-sentence-stress.11.pro_tip': `Tip: unstressed words in sentences are usually function words.`,
  'exercise.word-and-sentence-stress.12.prompt': `Put the words in order to form the stressed sentence pattern:`,
  'exercise.word-and-sentence-stress.12.explanation': `"The CATS will CHASE the MICE." Content words (CATS, CHASE, MICE) are stressed.`,
  'exercise.word-and-sentence-stress.12.pro_tip': `Tip: unstressed function words blend quickly between the stressed words.`,
  'exercise.word-and-sentence-stress.13.prompt': `In "The CATS could have been CHASing the MICE", which words carry sentence stress?`,
  'exercise.word-and-sentence-stress.13.explanation': `Only the content words (CATS, CHASing, MICE) carry the primary beats; "The" and "could have been" are function words.`,
  'exercise.word-and-sentence-stress.13.pro_tip': `Tip: even with multiple auxiliaries (could have been), stress stays on the main verb.`,
  'exercise.word-and-sentence-stress.14.prompt': `Complete the sentence:`,
  'exercise.word-and-sentence-stress.14.explanation': `English rhythm is stress-timed: beats land on content words (nouns, main verbs, adjectives, adverbs).`,
  'exercise.word-and-sentence-stress.14.pro_tip': `Tip: stress content words to sound natural in English.`,
  'exercise.word-and-sentence-stress.15.prompt': `Put the words in order to show the sentence rhythm pattern:`,
  'exercise.word-and-sentence-stress.15.explanation': `"The MICE will EAT the CHEESE." MICE, EAT, and CHEESE are the stressed content words.`,
  'exercise.word-and-sentence-stress.15.pro_tip': `Tip: The MICE will EAT the CHEESE.`,
  'exercise.word-and-sentence-stress.16.prompt': `Complete the sentence about the sentence "The MICE will have EATen the CHEESE":`,
  'exercise.word-and-sentence-stress.16.explanation': `"EATen" is the main verb (content word). "Will" and "have" are auxiliary verbs (function words).`,
  'exercise.word-and-sentence-stress.16.pro_tip': `Tip: main verb = content word; auxiliary verb = function word.`,
  'exercise.word-and-sentence-stress.17.prompt': `Complete the sentence about "The MICE will have EATen the CHEESE":`,
  'exercise.word-and-sentence-stress.17.explanation': `"CHEESE" is the object noun, a content word that receives final sentence stress.`,
  'exercise.word-and-sentence-stress.17.pro_tip': `Tip: nouns are content words.`,
  'exercise.word-and-sentence-stress.18.prompt': `Why are WHAT, YOU, and DO stressed in "WHAT do YOU have to DO today?"`,
  'exercise.word-and-sentence-stress.18.explanation': `"WHAT" is an interrogative word, "YOU" is focused in direct dialogue, and "DO" is the main verb.`,
  'exercise.word-and-sentence-stress.18.pro_tip': `Tip: interrogatives and focal content words carry the rhythm in dialogue.`,
  'exercise.word-and-sentence-stress.19.prompt': `Put the words in order for the stressed dialogue response:`,
  'exercise.word-and-sentence-stress.19.explanation': `"I have to WALK my DOG." "WALK" (verb) and "DOG" (noun) are the stressed content words.`,
  'exercise.word-and-sentence-stress.19.pro_tip': `Tip: I have to WALK my DOG.`,
  'exercise.word-and-sentence-stress.20.prompt': `Complete the explanation for the dialogue sentence "HE is VERY friendly":`,
  'exercise.word-and-sentence-stress.20.explanation': `"VERY" is an adverb intensifier that carries stress to emphasize the quality.`,
  'exercise.word-and-sentence-stress.20.pro_tip': `Tip: adverbs that intensify adjectives (very, really) receive strong sentence stress.`,
};

const askingAndProvidingInfoEnExtras: Record<string, string> = {
  'lesson.asking-and-providing-information.title': `Asking for and Providing Information`,
  'lesson.asking-and-providing-information.description': `Learn natural conversational phrases to ask about risks, seek clarification, recommend gear, and highlight key factors.`,
  'lesson.asking-and-providing-information.intro':
    `### 1. Asking for Information\n` +
    `Use these polite and natural formulas when preparing for activities or asking about conditions:\n` +
    `• **Is there any danger of... (+ noun / gerund)** → *Is there any danger of really bad weather?*\n` +
    `• **What exactly do you mean by "[word/phrase]"?** → *What exactly do you mean by "the worst"?* (asking for clarification)\n` +
    `• **Is there a risk of... (+ noun / gerund)** → *Is there a risk of snow?*\n` +
    `• **What sort of [item] would you recommend [gerund]?** → *What sort of coat would you recommend taking?*\n\n` +
    `### 2. Providing Information & Advice\n` +
    `Use these phrases to structure explanations and highlight recommendations:\n` +
    `• **The most important thing to consider is that...** → *The most important thing to consider is that mountain weather is unpredictable.*\n` +
    `• **First and foremost,...** → *First and foremost, you need a good waterproof coat.* (top priority)\n` +
    `• **One thing to keep in mind is that...** → *One thing to keep in mind is that you don't want a thick coat.* (important factor/reminder)\n` +
    `• **Another thing to consider is...** → *Another thing to consider is the kind of T-shirt you wear.* (adding another consideration)\n\n` +
    `### 3. Pro Tips\n` +
    `• ⚠️ Remember: *recommend* is followed by the **-ing form** (*recommend taking*, not *recommend to take*).\n` +
    `• ⚠️ Both *danger of* and *risk of* take the preposition **of** + noun or verb+ing.`,

  'exercise.asking-and-providing-information.1.prompt': `Complete the question asking about potential danger:`,
  'exercise.asking-and-providing-information.1.explanation': `Use the preposition "of": "Is there any danger of really bad weather?"`,
  'exercise.asking-and-providing-information.1.pro_tip': `Tip: danger OF + noun or gerund.`,
  'exercise.asking-and-providing-information.2.prompt': `Complete the question asking about weather risk:`,
  'exercise.asking-and-providing-information.2.explanation': `Use the preposition "of": "Is there a risk of snow?"`,
  'exercise.asking-and-providing-information.2.pro_tip': `Tip: risk OF + noun or gerund.`,
  'exercise.asking-and-providing-information.3.prompt': `Complete the question asking for clarification:`,
  'exercise.asking-and-providing-information.3.explanation': `The standard formula is "What do you mean BY [phrase]?": "What exactly do you mean by 'the worst'?"`,
  'exercise.asking-and-providing-information.3.pro_tip': `Tip: mean BY + word or expression.`,
  'exercise.asking-and-providing-information.4.prompt': `Complete the question asking for a recommendation:`,
  'exercise.asking-and-providing-information.4.explanation': `The verb "recommend" takes a gerund (-ing form): "would you recommend taking?".`,
  'exercise.asking-and-providing-information.4.pro_tip': `Tip: recommend + verb-ing (taking, bringing, wearing).`,
  'exercise.asking-and-providing-information.5.prompt': `True or False?`,
  'exercise.asking-and-providing-information.5.explanation': `True. Both "danger of" and "risk of" are followed by a noun or a gerund (e.g. risk of falling, danger of frostbite).`,
  'exercise.asking-and-providing-information.5.pro_tip': `Tip: preposition "of" + noun or gerund.`,
  'exercise.asking-and-providing-information.6.prompt': `Put the words in order to form the question asking for gear advice:`,
  'exercise.asking-and-providing-information.6.explanation': `"What sort of coat would you recommend taking?"`,
  'exercise.asking-and-providing-information.6.pro_tip': `Tip: What sort of [noun] would you recommend [verb-ing]?`,
  'exercise.asking-and-providing-information.7.prompt': `Complete the phrase introducing the primary consideration:`,
  'exercise.asking-and-providing-information.7.explanation': `"The most important thing to consider is that..." uses the singular verb "is".`,
  'exercise.asking-and-providing-information.7.pro_tip': `Tip: The most important thing ... IS that...`,
  'exercise.asking-and-providing-information.8.prompt': `Which sentence introduces the primary and most important requirement?`,
  'exercise.asking-and-providing-information.8.explanation': `"First and foremost, you need a good waterproof coat." "First and foremost" means the top priority.`,
  'exercise.asking-and-providing-information.8.pro_tip': `Tip: First and foremost = most important of all.`,
  'exercise.asking-and-providing-information.9.prompt': `Complete the phrase meaning "to remember or take into account":`,
  'exercise.asking-and-providing-information.9.explanation': `"One thing to keep in mind is that..." means an important point to remember.`,
  'exercise.asking-and-providing-information.9.pro_tip': `Tip: keep in mind = remember / consider.`,
  'exercise.asking-and-providing-information.10.prompt': `Complete the phrase adding another point to consider:`,
  'exercise.asking-and-providing-information.10.explanation': `"Another thing to consider is..." uses the base verb "consider".`,
  'exercise.asking-and-providing-information.10.pro_tip': `Tip: Another thing TO consider is...`,
  'exercise.asking-and-providing-information.11.prompt': `True or False?`,
  'exercise.asking-and-providing-information.11.explanation': `True. "First and foremost" is a set phrase meaning first in importance and priority.`,
  'exercise.asking-and-providing-information.11.pro_tip': `Tip: First and foremost = top priority.`,
  'exercise.asking-and-providing-information.12.prompt': `Put the words in order to form the advice clause:`,
  'exercise.asking-and-providing-information.12.explanation': `"One thing to keep in mind is that it might rain."`,
  'exercise.asking-and-providing-information.12.pro_tip': `Tip: One thing to keep in mind is that...`,
  'exercise.asking-and-providing-information.13.prompt': `Choose the response that provides helpful information to "Is there any danger of really bad weather?":`,
  'exercise.asking-and-providing-information.13.explanation': `"The most important thing to consider is that mountain weather is unpredictable." gives relevant information in response.`,
  'exercise.asking-and-providing-information.13.pro_tip': `Tip: respond to questions about danger with important considerations.`,
  'exercise.asking-and-providing-information.14.prompt': `Put the words in order to state the top priority:`,
  'exercise.asking-and-providing-information.14.explanation': `"First and foremost, you need a good waterproof coat."`,
  'exercise.asking-and-providing-information.14.pro_tip': `Tip: First and foremost, + sentence.`,
  'exercise.asking-and-providing-information.15.prompt': `What is the speaker doing when asking "What exactly do you mean by 'the worst'?"`,
  'exercise.asking-and-providing-information.15.explanation': `They are asking for clarification about what the other person means by the expression "the worst".`,
  'exercise.asking-and-providing-information.15.pro_tip': `Tip: "What do you mean by..." = request for clarification.`,
  'exercise.asking-and-providing-information.16.prompt': `Complete the sentence:`,
  'exercise.asking-and-providing-information.16.explanation': `Use "that" to introduce the noun clause: "...is that daylight hours are shorter."`,
  'exercise.asking-and-providing-information.16.pro_tip': `Tip: ...is THAT + full clause.`,
  'exercise.asking-and-providing-information.17.prompt': `Choose the correctly phrased sentence:`,
  'exercise.asking-and-providing-information.17.explanation': `"Another thing to consider is the kind of T-shirt you wear." uses "to consider is".`,
  'exercise.asking-and-providing-information.17.pro_tip': `Tip: Another thing to consider is...`,
  'exercise.asking-and-providing-information.18.prompt': `Match each phrase to its conversational function:`,
  'exercise.asking-and-providing-information.18.explanation': `risk of = asking about danger; mean by = clarification; first and foremost = top priority; another thing = additional point.`,
  'exercise.asking-and-providing-information.18.pro_tip': `Tip: identify whether the phrase asks or provides information.`,
  'exercise.asking-and-providing-information.19.prompt': `Which question correctly asks for a recommendation about boots?`,
  'exercise.asking-and-providing-information.19.explanation': `"What sort of boots would you recommend buying?" uses recommend + -ing.`,
  'exercise.asking-and-providing-information.19.pro_tip': `Tip: recommend + buying (not to buy).`,
  'exercise.asking-and-providing-information.20.prompt': `True or False?`,
  'exercise.asking-and-providing-information.20.explanation': `True. "Keep in mind" is an idiom meaning remember or take into consideration.`,
  'exercise.asking-and-providing-information.20.pro_tip': `Tip: keep in mind = don't forget / take into account.`,
};

const superlativeStructuresEnExtras: Record<string, string> = {
  'lesson.superlative-structures.title': `Superlative Structures and Modifying Adjectives`,
  'lesson.superlative-structures.description': `Master advanced superlative patterns, fronted superlatives, relative clauses, extreme adjectives with "absolutely", and perception verb structures.`,
  'lesson.superlative-structures.intro':
    `### 1. One of the Most + Adjective + Plural Noun\n` +
    `When identifying an exceptional item within a broader group, use:\n` +
    `• **Noun phrase + be + one of the most + adjective + PLURAL noun**\n` +
    `• *Nicaragua's Masaya Volcano is one of the most active volcanoes in Central America.*\n` +
    `• *Point Lobos State Natural Reserve is one of the most beautiful state parks in California.*\n` +
    `⚠️ Notice: the noun is always **plural** (*volcanoes*, *parks*).\n\n` +
    `### 2. Fronted Superlatives as Sentence Subjects\n` +
    `Superlatives can be fronted to serve as the subject of the sentence:\n` +
    `• **The + adjective-est / the most + adjective + be verb + noun phrase**\n` +
    `• *The tiniest and most common are microbes.*\n` +
    `• *The largest and most expensive are Clydesdales.*\n` +
    `• The be-verb (*are*) agrees with the plural complement that follows.\n\n` +
    `### 3. Superlatives with Relative Clauses\n` +
    `Qualify or define the scope of a superlative with a *(that)* clause:\n` +
    `• **Noun phrase + be verb + the + most + adjective + noun phrase + (that) + clause**\n` +
    `• *Rats are the most adaptable mammal (that) we know of.*\n` +
    `• *Comedies are the most enjoyable movies (that) we can watch.*\n\n` +
    `### 4. Extreme (Ungradable) Adjectives & Infinitives\n` +
    `Ungradable adjectives (like *awful*, *impossible*) describe absolute limits. Modify them with **absolutely**, never *very*:\n` +
    `• **It + be + article + adverb + adjective + noun + infinitive (to + verb)**\n` +
    `• *It's an absolutely awful place to live.*\n` +
    `• *It's an absolutely impossible language to learn.*\n\n` +
    `### 5. Perception Verbs & Descriptive Modifiers\n` +
    `• Perception/linking verbs (*become*, *appear to be*) take **adjectives**, not adverbs: *They become very hard and appear to be dead.* / *It becomes bright and appears to be alive.*\n` +
    `• Participles function as descriptive adjectives: *A destroyed building has no hope for renovation.*\n` +
    `• Idioms like *"tough cookie"* describe resilient survivors: *The final 'tough cookie' has few limits to its territory.*`,

  'exercise.superlative-structures.1.prompt': `Complete the sentence with the correct adjective form:`,
  'exercise.superlative-structures.1.explanation': `The phrase "one of the most" already contains "most", so it is followed by the base adjective "active": "one of the most active volcanoes".`,
  'exercise.superlative-structures.1.pro_tip': `Tip: one of the most + base adjective + plural noun.`,

  'exercise.superlative-structures.2.prompt': `Choose the correct noun form to complete the superlative phrase:`,
  'exercise.superlative-structures.2.explanation': `The structure "one of the..." always requires a plural noun: "state parks".`,
  'exercise.superlative-structures.2.pro_tip': `Tip: one of the most [adj] + PLURAL noun (parks, not park).`,

  'exercise.superlative-structures.3.prompt': `Which sentence correctly uses the "one of the most" structure?`,
  'exercise.superlative-structures.3.explanation': `"Point Lobos is one of the most beautiful state parks in California" uses "one of the most" + adjective + plural noun "parks".`,
  'exercise.superlative-structures.3.pro_tip': `Tip: always include "the" and use a plural noun.`,

  'exercise.superlative-structures.4.prompt': `Put the words in order to form the superlative statement:`,
  'exercise.superlative-structures.4.explanation': `"Masaya Volcano is one of the most active volcanoes."`,
  'exercise.superlative-structures.4.pro_tip': `Tip: Subject + is + one of the most + adjective + plural noun.`,

  'exercise.superlative-structures.5.prompt': `Complete the sentence with the correct be-verb:`,
  'exercise.superlative-structures.5.explanation': `Use "are" to agree with the plural complement "microbes": "The tiniest and most common are microbes."`,
  'exercise.superlative-structures.5.pro_tip': `Tip: The [superlatives] ARE [plural noun].`,

  'exercise.superlative-structures.6.prompt': `Complete the compound superlative subject:`,
  'exercise.superlative-structures.6.explanation': `Use the base adjective "expensive" after "most": "The largest and most expensive are Clydesdales."`,
  'exercise.superlative-structures.6.pro_tip': `Tip: short adj takes -est (largest), multi-syllable takes most + adj (most expensive).`,

  'exercise.superlative-structures.7.prompt': `True or False?`,
  'exercise.superlative-structures.7.explanation': `True. In "The tiniest and most common are microbes", the fronted superlative adjective phrase acts as the grammatical subject.`,
  'exercise.superlative-structures.7.pro_tip': `Tip: superlative adjectives can stand alone as the subject when referring to a class or group.`,

  'exercise.superlative-structures.8.prompt': `Arrange the words to form the descriptive sentence:`,
  'exercise.superlative-structures.8.explanation': `"The tiniest and most common are microbes."`,
  'exercise.superlative-structures.8.pro_tip': `Tip: The + superlatives + are + noun.`,

  'exercise.superlative-structures.9.prompt': `Complete the sentence describing animal adaptability:`,
  'exercise.superlative-structures.9.explanation': `Use the relative pronoun "that": "Rats are the most adaptable mammal that we know of."`,
  'exercise.superlative-structures.9.pro_tip': `Tip: superlative + noun + (that) + relative clause.`,

  'exercise.superlative-structures.10.prompt': `Complete the sentence with the superlative modifier:`,
  'exercise.superlative-structures.10.explanation': `Use "most" before multi-syllable adjectives: "the most enjoyable movies".`,
  'exercise.superlative-structures.10.pro_tip': `Tip: the MOST enjoyable (enjoyable has 4 syllables).`,

  'exercise.superlative-structures.11.prompt': `True or False?`,
  'exercise.superlative-structures.11.explanation': `True. When "that" is the object of the relative clause, it can be freely omitted: "...mammal we know of."`,
  'exercise.superlative-structures.11.pro_tip': `Tip: relative "that" is optional when followed by subject + verb.`,

  'exercise.superlative-structures.12.prompt': `Put the words in order to complete the sentence:`,
  'exercise.superlative-structures.12.explanation': `"Comedies are the most enjoyable movies we can watch."`,
  'exercise.superlative-structures.12.pro_tip': `Tip: Subject + are + the most + adjective + noun + clause.`,

  'exercise.superlative-structures.13.prompt': `Complete the sentence with the intensifying adverb:`,
  'exercise.superlative-structures.13.explanation': `"Awful" is an ungradable (extreme) adjective, so it is intensified by "absolutely", not "very".`,
  'exercise.superlative-structures.13.pro_tip': `Tip: absolutely + extreme adjective (awful, impossible, furious).`,

  'exercise.superlative-structures.14.prompt': `Which infinitive structure correctly finishes: "It's an absolutely awful place ____"?`,
  'exercise.superlative-structures.14.explanation': `Use the to-infinitive "to live": "It's an absolutely awful place to live."`,
  'exercise.superlative-structures.14.pro_tip': `Tip: place / language / thing + TO + base verb.`,

  'exercise.superlative-structures.15.prompt': `Why is "absolutely awful" preferred over "very awful"?`,
  'exercise.superlative-structures.15.explanation': `Extreme (ungradable) adjectives already express an extreme limit, so they pair with limit adverbs like "absolutely" or "completely", not scale adverbs like "very".`,
  'exercise.superlative-structures.15.pro_tip': `Tip: very cold (gradable) vs. absolutely freezing (ungradable).`,

  'exercise.superlative-structures.16.prompt': `Which sentence correctly pairs an extreme adjective with its modifier and infinitive?`,
  'exercise.superlative-structures.16.explanation': `"It's an absolutely impossible language to learn" correctly pairs the modifier "absolutely", the article "an", and the to-infinitive "to learn".`,
  'exercise.superlative-structures.16.pro_tip': `Tip: It's an absolutely [extreme adj] [noun] to [verb].`,

  'exercise.superlative-structures.17.prompt': `True or False?`,
  'exercise.superlative-structures.17.explanation': `True. "Dead" is an adjective following the perception verb phrase "appear to be".`,
  'exercise.superlative-structures.17.pro_tip': `Tip: appear to be + adjective (dead, alive, real).`,

  'exercise.superlative-structures.18.prompt': `Complete the clause describing the organism:`,
  'exercise.superlative-structures.18.explanation': `Use the predicate adjective "alive": "It becomes bright and appears to be alive."`,
  'exercise.superlative-structures.18.pro_tip': `Tip: appears to be + alive (predicate adjective).`,

  'exercise.superlative-structures.19.prompt': `In "A destroyed building has no hope for renovation", what role does "destroyed" play?`,
  'exercise.superlative-structures.19.explanation': `"Destroyed" is a past participle used as an adjective modifying the noun "building".`,
  'exercise.superlative-structures.19.pro_tip': `Tip: past participles (-ed) frequently serve as descriptive adjectives.`,

  'exercise.superlative-structures.20.prompt': `Match each phrase with its grammatical pattern:`,
  'exercise.superlative-structures.20.explanation': `Match: one of the most... = superlative + plural noun; The largest... = fronted subject; absolutely awful... = extreme modifier + infinitive; appear to be dead = perception verb + adjective.`,
  'exercise.superlative-structures.20.pro_tip': `Tip: identify the sentence constituent and adjective type.`,
};

const comparativeStructuresEnExtras: Record<string, string> = {
  'lesson.comparative-structures.title': `Comparative Structures: Preferences & Sufficiency`,
  'lesson.comparative-structures.description': `Express complex contrasts with "prefer ... rather than", comparison clauses ("more than most realize"), sufficiency ("enough to justify"), and "less/fewer".`,
  'lesson.comparative-structures.intro':
    `### 1. Expressing Preference with "Rather Than"\n` +
    `Use this pattern to compare two actions or destinations and state a distinct preference:\n` +
    `• **Statement A + rather than + base verb + noun phrase**\n` +
    `• *I would definitely prefer to explore space rather than study the ocean.*\n` +
    `• *I would certainly prefer to visit Africa rather than visit France.*\n` +
    `⚠️ Notice: keep parallel structure (*prefer to explore ... rather than study*). The second *to* is typically omitted.\n\n` +
    `### 2. Comparative Clauses ("More than Most Realize")\n` +
    `Contrast an actual quantity or benefit against popular perception:\n` +
    `• **Subject + modal + verb + more + prep phrase + than + most + noun + verb**\n` +
    `• *We can learn more from research into space than most people realize.*\n` +
    `• *They can earn more from a career in business than most people expect.*\n\n` +
    `### 3. Sufficiency & Justification ("Not ... Enough to Justify")\n` +
    `State whether a benefit is sufficient to balance a negative cost or effort:\n` +
    `• **Noun phrase + isn't + adjective + enough + to + verb + noun phrase**\n` +
    `• *Space exploration just isn't useful enough to justify the cost.*\n` +
    `• *Getting a college degree isn't rewarding enough to justify the debt.*\n` +
    `⚠️ Word order rule: *adjective + enough* (never *enough useful*).\n\n` +
    `### 4. Comparing Actions with "Less + Adjective + Infinitive"\n` +
    `Use dummy *It's* to compare two courses of action:\n` +
    `• **It's + less + adjective + infinitive + noun phrase + than (it is) + infinitive + noun phrase**\n` +
    `• *It's less important to fix future problems than (it is) to fix current ones.*\n` +
    `• *It's less costly to buy a new car than (it is) to rent an old one.*\n` +
    `• Use *ones* to avoid repeating a plural noun (*current ones = current problems*).\n\n` +
    `### 5. Countable Contrasts with "Fewer"\n` +
    `• **There are + fewer + plural count noun + to + noun phrase**\n` +
    `• *There are fewer benefits to space exploration.*\n` +
    `• ⚠️ Remember: *fewer* modifies countable plurals (*benefits*), while *less* modifies uncountable nouns (*money, time*).`,

  'exercise.comparative-structures.1.prompt': `Complete the sentence expressing a preference between exploration fields:`,
  'exercise.comparative-structures.1.explanation': `Use the base verb "study" following "rather than": "rather than study the ocean".`,
  'exercise.comparative-structures.1.pro_tip': `Tip: rather than + base verb (parallel with the first action).`,

  'exercise.comparative-structures.2.prompt': `Complete the comparative conjunction expressing preference:`,
  'exercise.comparative-structures.2.explanation': `The set phrase is "rather than" (not "rather then"): "rather than visit France".`,
  'exercise.comparative-structures.2.pro_tip': `Tip: rather THAN (comparison), not then (time).`,

  'exercise.comparative-structures.3.prompt': `Which sentence correctly expresses a strong preference between two actions?`,
  'exercise.comparative-structures.3.explanation': `"I would definitely prefer to explore space rather than study the ocean" uses the correct formula "prefer to [verb] rather than [verb]".`,
  'exercise.comparative-structures.3.pro_tip': `Tip: prefer to [verb] ... rather than [verb].`,

  'exercise.comparative-structures.4.prompt': `Put the words in order to state the travel preference:`,
  'exercise.comparative-structures.4.explanation': `"I would certainly prefer to visit Africa rather than visit France."`,
  'exercise.comparative-structures.4.pro_tip': `Tip: I would certainly prefer to visit... rather than visit...`,

  'exercise.comparative-structures.5.prompt': `Complete the comparative clause indicating unexpected research outcomes:`,
  'exercise.comparative-structures.5.explanation': `Use "than" to link the comparative "more": "more from research into space than most people realize".`,
  'exercise.comparative-structures.5.pro_tip': `Tip: verb + MORE ... THAN [clause].`,

  'exercise.comparative-structures.6.prompt': `Complete the sentence comparing earnings with common perception:`,
  'exercise.comparative-structures.6.explanation': `Use the base plural verb "expect" to agree with the subject "most people": "than most people expect".`,
  'exercise.comparative-structures.6.pro_tip': `Tip: most people + plural verb (expect, realize).`,

  'exercise.comparative-structures.7.prompt': `In "We can learn more from research into space than most people realize", what does the clause do?`,
  'exercise.comparative-structures.7.explanation': `The clause "than most people realize" acts as a comparative baseline showing that reality exceeds popular expectation.`,
  'exercise.comparative-structures.7.pro_tip': `Tip: comparative clauses contrast real facts against expectations.`,

  'exercise.comparative-structures.8.prompt': `True or False?`,
  'exercise.comparative-structures.8.explanation': `True. "More" modifies the verb "earn" indicating a greater quantity or financial return.`,
  'exercise.comparative-structures.8.pro_tip': `Tip: "more" can function as an adverb of degree modifying action verbs.`,

  'exercise.comparative-structures.9.prompt': `Complete the sentence expressing insufficient justification for costs:`,
  'exercise.comparative-structures.9.explanation': `"Enough" follows the adjective: "isn't useful enough to justify the cost".`,
  'exercise.comparative-structures.9.pro_tip': `Tip: adjective + ENOUGH (useful enough, tall enough).`,

  'exercise.comparative-structures.10.prompt': `Complete the sentence with the base verb after the to-infinitive:`,
  'exercise.comparative-structures.10.explanation': `Use the base verb "justify": "isn't rewarding enough to justify the debt".`,
  'exercise.comparative-structures.10.pro_tip': `Tip: to + base verb (to justify).`,

  'exercise.comparative-structures.11.prompt': `Which sentence correctly places the modifier "enough" with an adjective?`,
  'exercise.comparative-structures.11.explanation': `"Space exploration isn't useful enough to justify the cost" places "enough" directly after the adjective "useful".`,
  'exercise.comparative-structures.11.pro_tip': `Tip: adjective + enough + to-infinitive.`,

  'exercise.comparative-structures.12.prompt': `Put the words in order to form the statement about college degrees:`,
  'exercise.comparative-structures.12.explanation': `"Getting a college degree isn't rewarding enough to justify the debt."`,
  'exercise.comparative-structures.12.pro_tip': `Tip: Gerund subject + isn't + adj + enough + to justify + noun.`,

  'exercise.comparative-structures.13.prompt': `Complete the comparison by replacing the repeated plural noun "problems":`,
  'exercise.comparative-structures.13.explanation': `Use the pronoun "ones" to replace the plural noun "problems": "...than it is to fix current ones."`,
  'exercise.comparative-structures.13.pro_tip': `Tip: singular = one; plural = ones (current problems -> current ones).`,

  'exercise.comparative-structures.14.prompt': `True or False?`,
  'exercise.comparative-structures.14.explanation': `True. "(it is)" is an optional element in the second half of the comparative clause: "...than to rent an old one."`,
  'exercise.comparative-structures.14.pro_tip': `Tip: "than (it is) to [verb]" allows omitting "(it is)".`,

  'exercise.comparative-structures.15.prompt': `Which sentence maintains parallel infinitive structures correctly?`,
  'exercise.comparative-structures.15.explanation': `"It's less costly to buy a new car than to rent an old one" keeps both actions in parallel infinitives ("to buy ... to rent").`,
  'exercise.comparative-structures.15.pro_tip': `Tip: maintain parallel verb forms on both sides of "than".`,

  'exercise.comparative-structures.16.prompt': `Arrange the words to compare the two actions:`,
  'exercise.comparative-structures.16.explanation': `"It's less costly to buy a new car than to rent an old one."`,
  'exercise.comparative-structures.16.pro_tip': `Tip: It's less [adj] to [verb A] than to [verb B].`,

  'exercise.comparative-structures.17.prompt': `Complete the statement about countable benefits:`,
  'exercise.comparative-structures.17.explanation': `Use "fewer" before countable plural nouns like "benefits": "There are fewer benefits to space exploration."`,
  'exercise.comparative-structures.17.pro_tip': `Tip: FEWER + countable plural nouns; LESS + uncountable nouns.`,

  'exercise.comparative-structures.18.prompt': `True or False?`,
  'exercise.comparative-structures.18.explanation': `True. "Fewer" is grammatically required for countable nouns (benefits, cars, people), while "less" is for uncountables (money, water, time).`,
  'exercise.comparative-structures.18.pro_tip': `Tip: count = fewer; non-count = less.`,

  'exercise.comparative-structures.19.prompt': `Which preposition correctly links "fewer benefits" to the activity?`,
  'exercise.comparative-structures.19.explanation': `The natural preposition is "to": "fewer benefits to space exploration".`,
  'exercise.comparative-structures.19.pro_tip': `Tip: benefits TO [something].`,

  'exercise.comparative-structures.20.prompt': `Match each example sentence with its comparative pattern:`,
  'exercise.comparative-structures.20.explanation': `Match each structure: prefer to explore... = prefer rather than; learn more... = verb + more than clause; isn't useful enough... = adj + enough + infinitive; less costly... = It's less + adj + infinitive.`,
  'exercise.comparative-structures.20.pro_tip': `Tip: recognize the key comparative connector in each structure.`,
};

const politeIntonationEnExtras: Record<string, string> = {
  'lesson.polite-intonation.title': `Polite versus Impolite Intonation`,
  'lesson.polite-intonation.description': `Learn how vocal pitch contours determine whether your requests sound courteous and cooperative or impatient and demanding.`,
  'lesson.polite-intonation.intro':
    `### 1. What is Intonation?\n` +
    `Intonation is the **rise and fall of the voice** across speech. In English, intonation does more than signal questions vs. statements—it conveys **grammar, certainty, emotions, and politeness**.\n\n` +
    `### 2. The Core Politeness Rule\n` +
    `• **Polite requests:** We **raise our voice at the end (↗)**. This gentle rising pitch leaves the conversation open-ended, showing consideration and giving the listener room to respond or decline comfortably.\n` +
    `• **Impolite / Demanding requests:** When we **drop the voice at the end (↘)** or use a flat, downward tone, the request sounds like an order, signaling impatience, irritation, or authority.\n\n` +
    `### 3. Key Examples from the Slide\n` +
    `• **1a (Polite):** *Is there any chance you could fix the TV now? ↗* (Voice rises gently at the end)\n` +
    `• **1b (Impolite):** *Is there any chance you could fix the TV now? ↘* (Voice drops sharply at the end, sounding demanding)\n` +
    `• **2a (Polite):** *Do you think it would be possible for you to make a doctor's appointment? ↗*\n` +
    `• **2b (Impolite):** *Do you think it would be possible for you to make a doctor's appointment? ↘*\n\n` +
    `### 4. Golden Rule of Spoken English\n` +
    `Polite grammar alone (*"Is there any chance..."*, *"Could you possibly..."*) is **not enough**. If your intonation drops sharply or stays flat, your words will still be perceived as rude.`,

  'exercise.polite-intonation.1.prompt': `Complete the definition of intonation:`,
  'exercise.polite-intonation.1.explanation': `Intonation is the rise and fall of the voice when speaking.`,
  'exercise.polite-intonation.1.pro_tip': `Tip: intonation = pitch melody (rise and fall).`,

  'exercise.polite-intonation.2.prompt': `Complete the rule regarding polite intonation in English:`,
  'exercise.polite-intonation.2.explanation': `When we try to sound polite, we raise our voice at the end of the request.`,
  'exercise.polite-intonation.2.pro_tip': `Tip: polite requests rise at the end (↗).`,

  'exercise.polite-intonation.3.prompt': `According to the lesson, what happens when we drop the voice at the end of a request?`,
  'exercise.polite-intonation.3.explanation': `Dropping the voice at the end (↘) makes a request sound impolite, demanding, or impatient.`,
  'exercise.polite-intonation.3.pro_tip': `Tip: downward pitch at the end = demanding/commanding.`,

  'exercise.polite-intonation.4.prompt': `True or False?`,
  'exercise.polite-intonation.4.explanation': `True. Intonation conveys grammar, certainty, emotions, and politeness.`,
  'exercise.polite-intonation.4.pro_tip': `Tip: pitch shape conveys attitude and social intent.`,

  'exercise.polite-intonation.5.prompt': `Complete the sentence describing polite vocal contour:`,
  'exercise.polite-intonation.5.explanation': `To sound polite, the speaker's voice rises at the end (↗).`,
  'exercise.polite-intonation.5.pro_tip': `Tip: rising tone (↗) = polite inquiry.`,

  'exercise.polite-intonation.6.prompt': `Complete the polite medical request:`,
  'exercise.polite-intonation.6.explanation': `Use the adjective "possible": "Do you think it would be possible for you to make a doctor's appointment?"`,
  'exercise.polite-intonation.6.pro_tip': `Tip: would it be possible for you to [verb]?`,

  'exercise.polite-intonation.7.prompt': `Why does raising your voice at the end make a request sound polite?`,
  'exercise.polite-intonation.7.explanation': `A rising pitch leaves the request open-ended and gives the listener a graceful way to decline or negotiate.`,
  'exercise.polite-intonation.7.pro_tip': `Tip: rising pitch softens requests into cooperative questions.`,

  'exercise.polite-intonation.8.prompt': `True or False?`,
  'exercise.polite-intonation.8.explanation': `True. Rising terminal tone signals consideration and courtesy.`,
  'exercise.polite-intonation.8.pro_tip': `Tip: polite requests invite cooperation.`,

  'exercise.polite-intonation.9.prompt': `Complete the explanation for impolite delivery:`,
  'exercise.polite-intonation.9.explanation': `A sharp voice drop at the end transforms a question into an impatient order.`,
  'exercise.polite-intonation.9.pro_tip': `Tip: sharp drop = impatient order.`,

  'exercise.polite-intonation.10.prompt': `Complete the sentence describing how tone affects polite words:`,
  'exercise.polite-intonation.10.explanation': `Even with polite phrasing, dropping pitch sharply makes you sound impatient or rude.`,
  'exercise.polite-intonation.10.pro_tip': `Tip: intonation overrides polite grammar.`,

  'exercise.polite-intonation.11.prompt': `Compare Example 1a and 1b from the slide: What is the key acoustic difference?`,
  'exercise.polite-intonation.11.explanation': `1a raises the voice at the end (polite), while 1b drops the voice at the end (impolite).`,
  'exercise.polite-intonation.11.pro_tip': `Tip: exact same words, opposite pitch contours!`,

  'exercise.polite-intonation.12.prompt': `Put the words in order to form the indirect question about fixing the TV:`,
  'exercise.polite-intonation.12.explanation': `"Is there any chance you could fix the TV now?"`,
  'exercise.polite-intonation.12.pro_tip': `Tip: Is there any chance you could [verb]...?`,

  'exercise.polite-intonation.13.prompt': `Complete the polite indirect request formula:`,
  'exercise.polite-intonation.13.explanation': `The set phrase is "Is there any chance you could...?"`,
  'exercise.polite-intonation.13.pro_tip': `Tip: Is there any CHANCE you could...`,

  'exercise.polite-intonation.14.prompt': `Complete the indirect request with the correct modal verb:`,
  'exercise.polite-intonation.14.explanation': `Use the hypothetical modal "would": "Do you think it would be possible...?"`,
  'exercise.polite-intonation.14.pro_tip': `Tip: it WOULD be possible.`,

  'exercise.polite-intonation.15.prompt': `Which of the following sentences correctly builds an indirect request with "possible"?`,
  'exercise.polite-intonation.15.explanation': `"Do you think it would be possible for you to make a doctor's appointment?" uses the standard polite formula.`,
  'exercise.polite-intonation.15.pro_tip': `Tip: Do you think it would be possible for [person] to [verb]?`,

  'exercise.polite-intonation.16.prompt': `Put the words in order to form the polite appointment request:`,
  'exercise.polite-intonation.16.explanation': `"Do you think it would be possible for you to make a doctor's appointment?"`,
  'exercise.polite-intonation.16.pro_tip': `Tip: Do you think it would be possible for you to make a doctor's appointment?`,

  'exercise.polite-intonation.17.prompt': `True or False?`,
  'exercise.polite-intonation.17.explanation': `True. Polite vocabulary without polite intonation will still be heard as rude or demanding.`,
  'exercise.polite-intonation.17.pro_tip': `Tip: both grammar and intonation are required for true politeness.`,

  'exercise.polite-intonation.18.prompt': `Arrange the words to state the core pronunciation rule:`,
  'exercise.polite-intonation.18.explanation': `"When we sound polite, we raise our voice at the end."`,
  'exercise.polite-intonation.18.pro_tip': `Tip: When we sound polite, we raise our voice at the end.`,

  'exercise.polite-intonation.19.prompt': `How does dropping pitch at the end of a request change its communicative function?`,
  'exercise.polite-intonation.19.explanation': `Dropping the pitch turns a polite question into an imperative command or an expression of irritation.`,
  'exercise.polite-intonation.19.pro_tip': `Tip: falling pitch removes the listener's choice.`,

  'exercise.polite-intonation.20.prompt': `Match each intonation pattern to its perceived conversational attitude:`,
  'exercise.polite-intonation.20.explanation': `Raising voice at end = polite; dropping voice = impolite; chance = indirect request; possible = indirect request with possible.`,
  'exercise.polite-intonation.20.pro_tip': `Tip: connect vocal pitch and formula to its social effect.`,
};

const complexSentencesEnExtras: Record<string, string> = {
  'lesson.complex-sentences.title': `Complex Sentences`,
  'lesson.complex-sentences.description': `Master complex sentences: combine independent and dependent clauses using subordinating conjunctions ("because", "because of", "so", "before", "as") with proper punctuation.`,
  'lesson.complex-sentences.intro':
    `### 1. What is a Complex Sentence?\n` +
    `• A **complex sentence** contains two clauses: **one independent clause** (the main point) and **one dependent clause** (the subordinate point).\n` +
    `• Complex sentences show the logical relationship between two ideas much more effectively than simple sentences.\n\n` +
    `### 2. Independent vs. Dependent Clauses\n` +
    `• **Independent Clause:** Expresses a complete thought and can stand alone as a sentence (*we arrived late to the meeting*).\n` +
    `• **Dependent Clause:** Cannot exist on its own; it depends on the independent clause to give it meaning (*Because of heavy traffic*).\n\n` +
    `### 3. Punctuation Rule\n` +
    `• If the **dependent clause comes first**, place a **comma** after it:\n` +
    `  *Because of heavy traffic, we arrived late to the meeting.*\n` +
    `• If the **independent clause comes first**, usually **no comma** is needed:\n` +
    `  *He left the room before the guests arrived.*\n\n` +
    `### 4. Key Subordinating Connectors from the Lesson\n` +
    `• **because + clause** (reason/cause) → *He could not swim in the pool because he forgot his bathing suit.*\n` +
    `• **because of + noun phrase** (reason/cause) → *Pierre's body was exposed because of the prank.*\n` +
    `• **so + clause** (purpose/result) → *The presenters shortened their presentation so the audience could ask questions.*\n` +
    `• **as + clause** (simultaneous time / while) → *The teacher insulted me as he left.*\n` +
    `• **before + noun phrase** (time) → *Seniors and students line up outside before the event.*\n` +
    `• **before + clause** (time) → *He left the room before the guests arrived.*`,

  'exercise.complex-sentences.1.prompt': `Complete the definition of a complex sentence:`,
  'exercise.complex-sentences.1.explanation': `A complex sentence has two clauses: one independent clause and one dependent clause.`,
  'exercise.complex-sentences.1.pro_tip': `Tip: complex sentence = 1 independent + 1 dependent clause.`,

  'exercise.complex-sentences.2.prompt': `Identify the clause type that expresses the main point:`,
  'exercise.complex-sentences.2.explanation': `The main point is always stated in the independent clause, which can stand alone as a complete sentence.`,
  'exercise.complex-sentences.2.pro_tip': `Tip: independent clause = main point (can stand alone).`,

  'exercise.complex-sentences.3.prompt': `In "Because of heavy traffic, we arrived late to the meeting", which part is the dependent clause?`,
  'exercise.complex-sentences.3.explanation': `"Because of heavy traffic" is the dependent clause; it cannot stand alone as a complete thought.`,
  'exercise.complex-sentences.3.pro_tip': `Tip: the clause starting with the subordinator is the dependent clause.`,

  'exercise.complex-sentences.4.prompt': `True or False?`,
  'exercise.complex-sentences.4.explanation': `True. A dependent clause depends on the independent clause to give it meaning and cannot stand alone.`,
  'exercise.complex-sentences.4.pro_tip': `Tip: dependent = subordinate (incomplete alone).`,

  'exercise.complex-sentences.5.prompt': `Complete the sentence with the conjunction introducing a full clause:`,
  'exercise.complex-sentences.5.explanation': `Use "because" before a complete clause with subject and verb ("he forgot his bathing suit").`,
  'exercise.complex-sentences.5.pro_tip': `Tip: because + clause (subject + verb); because of + noun phrase.`,

  'exercise.complex-sentences.6.prompt': `Complete the sentence with the prepositional form before a noun phrase:`,
  'exercise.complex-sentences.6.explanation': `Use "because of" before the noun phrase "the prank".`,
  'exercise.complex-sentences.6.pro_tip': `Tip: because OF + noun phrase (no verb).`,

  'exercise.complex-sentences.7.prompt': `Why is "because of" used in "Because of heavy traffic, we arrived late" instead of "because"?`,
  'exercise.complex-sentences.7.explanation': `"Heavy traffic" is a noun phrase, so the preposition "because of" is grammatically required.`,
  'exercise.complex-sentences.7.pro_tip': `Tip: noun phrase = because of; clause = because.`,

  'exercise.complex-sentences.8.prompt': `True or False?`,
  'exercise.complex-sentences.8.explanation': `True. "Because" introduces a clause, while "because of" introduces a noun phrase.`,
  'exercise.complex-sentences.8.pro_tip': `Tip: because + clause vs. because of + noun.`,

  'exercise.complex-sentences.9.prompt': `Complete the sentence describing simultaneous actions:`,
  'exercise.complex-sentences.9.explanation': `Use "as" to show that two actions happened at the same time: "as he left".`,
  'exercise.complex-sentences.9.pro_tip': `Tip: as + clause = at the moment that / while.`,

  'exercise.complex-sentences.10.prompt': `Complete the sentence with the time conjunction before a clause:`,
  'exercise.complex-sentences.10.explanation': `Use "before" to indicate that one event preceded another: "before the guests arrived".`,
  'exercise.complex-sentences.10.pro_tip': `Tip: before + clause (event happened prior).`,

  'exercise.complex-sentences.11.prompt': `In "Seniors and students line up outside before the event", what follows "before"?`,
  'exercise.complex-sentences.11.explanation': `"The event" is a noun phrase functioning as the object of the preposition "before".`,
  'exercise.complex-sentences.11.pro_tip': `Tip: "before" can function as a preposition before a noun phrase.`,

  'exercise.complex-sentences.12.prompt': `Put the words in order to form the complex time sentence:`,
  'exercise.complex-sentences.12.explanation': `"He left the room before the guests arrived."`,
  'exercise.complex-sentences.12.pro_tip': `Tip: Main clause + before + subordinate clause.`,

  'exercise.complex-sentences.13.prompt': `Complete the sentence expressing the purpose of shortening the talk:`,
  'exercise.complex-sentences.13.explanation': `Use "so" to express purpose: "so the audience could ask questions".`,
  'exercise.complex-sentences.13.pro_tip': `Tip: so + clause expressing purpose/result.`,

  'exercise.complex-sentences.14.prompt': `Choose the correct punctuation rule:`,
  'exercise.complex-sentences.14.explanation': `When the dependent clause comes first, follow it with a comma.`,
  'exercise.complex-sentences.14.pro_tip': `Tip: Dependent clause first -> comma!`,

  'exercise.complex-sentences.15.prompt': `Which sentence correctly places the comma in a complex sentence?`,
  'exercise.complex-sentences.15.explanation': `"Because of heavy traffic, we arrived late to the meeting" correctly places a comma after the introductory dependent clause.`,
  'exercise.complex-sentences.15.pro_tip': `Tip: comma goes after the initial dependent clause, before the main clause.`,

  'exercise.complex-sentences.16.prompt': `Put the words in order to state the cause-and-effect relationship:`,
  'exercise.complex-sentences.16.explanation': `"Because of heavy traffic, we arrived late to the meeting."`,
  'exercise.complex-sentences.16.pro_tip': `Tip: Because of + noun phrase, + main clause.`,

  'exercise.complex-sentences.17.prompt': `True or False?`,
  'exercise.complex-sentences.17.explanation': `True. Complex sentences show logical relationships between ideas much more effectively than simple sentences.`,
  'exercise.complex-sentences.17.pro_tip': `Tip: complex sentences clarify cause, time, and purpose.`,

  'exercise.complex-sentences.18.prompt': `Arrange the words to form the complex sentence of purpose:`,
  'exercise.complex-sentences.18.explanation': `"The presenters shortened their presentation so the audience could ask questions."`,
  'exercise.complex-sentences.18.pro_tip': `Tip: Subject + verb + object + so + subordinate clause.`,

  'exercise.complex-sentences.19.prompt': `Which sentence is a complex sentence containing an independent clause and a dependent clause?`,
  'exercise.complex-sentences.19.explanation': `"He could not swim in the pool because he forgot his bathing suit" has one independent clause and one dependent clause introduced by "because".`,
  'exercise.complex-sentences.19.pro_tip': `Tip: look for a subordinating conjunction connecting a dependent clause.`,

  'exercise.complex-sentences.20.prompt': `Match each conjunction to the semantic relationship it expresses in a complex sentence:`,
  'exercise.complex-sentences.20.explanation': `because = reason; so = purpose; before = prior time; as = simultaneous time.`,
  'exercise.complex-sentences.20.pro_tip': `Tip: connect each subordinating word to its logical function.`,
};

const jobCategoriesEnExtras: Record<string, string> = {
  'lesson.job-categories.title': `Job Categories and Personality`,
  'lesson.job-categories.description': `Analyze career paths, personality traits (extrovert, introvert, ambivert), and working style preferences across key job categories.`,
  'lesson.job-categories.intro':
    `### 1. Job Categories & Personality Profiles\n` +
    `Explore how personal qualities, social preferences, and working paces align with different careers:\n\n` +
    `### 2. Category 1: Executive, Athlete, Salesperson (Action & Leadership)\n` +
    `• **Typical qualities:** Extrovert, competitive, comfortable speaking up, socializing, good presentation skills.\n` +
    `• **Enjoys:** Working in teams, leading teams, making an impression, making decisions, a fast pace, discussing problems and solutions.\n\n` +
    `### 3. Category 2: Teacher, Nurse, Personal Shopper (Support & People-Oriented)\n` +
    `• **Typical qualities:** A little bit of an introvert and an extrovert (ambivert), enjoys the company of others, can interact with many different types of people, good listening skills, accepting of others.\n` +
    `• **Enjoys:** Working in teams and individually, helping others, a medium pace, thinking about solutions to personal problems.\n\n` +
    `### 4. Category 3: Writer, Artist, Designer, Chef (Creativity & Independence)\n` +
    `• **Typical qualities:** Introvert, shows off through the things they create, likes to work alone, doesn't mind being weird.\n` +
    `• **Enjoys:** Making things, working with their hands, exploring new ways of doing things, thinking about ideas.\n\n` +
    `### 5. Useful Career Collocations\n` +
    `• *comfortable speaking up* (confident expressing opinions)\n` +
    `• *make an impression* (leave a strong positive memory)\n` +
    `• *make decisions* (take leadership responsibility)\n` +
    `• *work with your hands* (craftsmanship / tactile creativity)`,

  'exercise.job-categories.1.prompt': `Complete the description of an executive or salesperson:`,
  'exercise.job-categories.1.explanation': `Use the gerund "speaking": "comfortable speaking up in public".`,
  'exercise.job-categories.1.pro_tip': `Tip: comfortable + verb-ing (comfortable speaking up).`,

  'exercise.job-categories.2.prompt': `Complete the collocation for career drive:`,
  'exercise.job-categories.2.explanation': `The standard collocation is "making an impression" (not doing/having): "enjoy making an impression".`,
  'exercise.job-categories.2.pro_tip': `Tip: MAKE an impression (set phrase).`,

  'exercise.job-categories.3.prompt': `Which set of qualities best describes an Executive, Athlete, or Salesperson?`,
  'exercise.job-categories.3.explanation': `They are typically extroverted, competitive, comfortable speaking up, and thrive at a fast pace.`,
  'exercise.job-categories.3.pro_tip': `Tip: competitive + extrovert + fast-pace = leadership/action roles.`,

  'exercise.job-categories.4.prompt': `True or False?`,
  'exercise.job-categories.4.explanation': `True. Executives, athletes, and salespeople enjoy making decisions and leading teams in fast-paced environments.`,
  'exercise.job-categories.4.pro_tip': `Tip: decision-making and leadership thrive in fast-paced roles.`,

  'exercise.job-categories.5.prompt': `Complete the description of a teacher or nurse:`,
  'exercise.job-categories.5.explanation': `They are balanced communicators: "a little bit of an introvert and an extrovert".`,
  'exercise.job-categories.5.pro_tip': `Tip: an introvert and an extrovert (ambivert).`,

  'exercise.job-categories.6.prompt': `Complete the quality essential for personal shoppers and nurses:`,
  'exercise.job-categories.6.explanation': `Nurses, teachers, and personal shoppers require "good listening skills".`,
  'exercise.job-categories.6.pro_tip': `Tip: good listening skills = key interpersonal trait.`,

  'exercise.job-categories.7.prompt': `What pace and working style do teachers, nurses, and personal shoppers typically prefer?`,
  'exercise.job-categories.7.explanation': `They prefer a medium pace, balancing team and individual work while helping others.`,
  'exercise.job-categories.7.pro_tip': `Tip: medium-pace + helping others = supportive professions.`,

  'exercise.job-categories.8.prompt': `True or False?`,
  'exercise.job-categories.8.explanation': `True. Teachers and nurses enjoy thinking about solutions to personal problems and are accepting of others.`,
  'exercise.job-categories.8.pro_tip': `Tip: empathy and problem-solving define supportive roles.`,

  'exercise.job-categories.9.prompt': `Complete the creative trait from the slide:`,
  'exercise.job-categories.9.explanation': `Writers and artists are typically introverts who like to work "alone".`,
  'exercise.job-categories.9.pro_tip': `Tip: creative introverts prefer working alone.`,

  'exercise.job-categories.10.prompt': `Complete the unique quality of creative professionals:`,
  'exercise.job-categories.10.explanation': `Creative individuals express their originality and "don't mind being weird".`,
  'exercise.job-categories.10.pro_tip': `Tip: doesn't mind being weird = embraces quirkiness/uniqueness.`,

  'exercise.job-categories.11.prompt': `How do writers, artists, designers, and chefs typically show off their talent?`,
  'exercise.job-categories.11.explanation': `They show off through the things they create rather than through outward boastfulness.`,
  'exercise.job-categories.11.pro_tip': `Tip: shows off through the things they create.`,

  'exercise.job-categories.12.prompt': `Put the words in order to describe the creative working style:`,
  'exercise.job-categories.12.explanation': `"Artists enjoy exploring new ways of doing things."`,
  'exercise.job-categories.12.pro_tip': `Tip: Subject + enjoy + verb-ing + new ways of doing things.`,

  'exercise.job-categories.13.prompt': `Complete the collocation for craftsmanship and manual creativity:`,
  'exercise.job-categories.13.explanation': `Chefs and designers often enjoy "working with their hands".`,
  'exercise.job-categories.13.pro_tip': `Tip: work with one's hands = manual/tactile creation.`,

  'exercise.job-categories.14.prompt': `Complete the collocation for leadership capability:`,
  'exercise.job-categories.14.explanation': `Leaders enjoy "making decisions" and taking strategic responsibility.`,
  'exercise.job-categories.14.pro_tip': `Tip: MAKE decisions (not do decisions).`,

  'exercise.job-categories.15.prompt': `What does the expression "comfortable speaking up" mean?`,
  'exercise.job-categories.15.explanation': `"Speaking up" means having the confidence to state opinions openly in front of others.`,
  'exercise.job-categories.15.pro_tip': `Tip: speak up = express your voice boldly.`,

  'exercise.job-categories.16.prompt': `Put the words in order to form the sentence about helping professions:`,
  'exercise.job-categories.16.explanation': `"Nurses enjoy helping others at a medium pace."`,
  'exercise.job-categories.16.pro_tip': `Tip: Subject + enjoy + helping others + at a medium pace.`,

  'exercise.job-categories.17.prompt': `True or False?`,
  'exercise.job-categories.17.explanation': `True. Personality traits, social preferences, and energy levels naturally correlate with job category fit.`,
  'exercise.job-categories.17.pro_tip': `Tip: career choice benefits from self-awareness of personal traits.`,

  'exercise.job-categories.18.prompt': `Arrange the words to describe an executive's preferred pace and task:`,
  'exercise.job-categories.18.explanation': `"Executives enjoy a fast-pace and discussing problems and solutions."`,
  'exercise.job-categories.18.pro_tip': `Tip: Executives enjoy a fast-pace and discussing problems and solutions.`,

  'exercise.job-categories.19.prompt': `If a person loves working with their hands, thinking about ideas, and likes working alone, which category fits them best?`,
  'exercise.job-categories.19.explanation': `These qualities are the hallmark of creative professionals like writers, artists, designers, and chefs.`,
  'exercise.job-categories.19.pro_tip': `Tip: working alone + with hands + creative ideas = Writer, Artist, Designer, Chef.`,

  'exercise.job-categories.20.prompt': `Match each job category to its typical personality profile:`,
  'exercise.job-categories.20.explanation': `Executive/Athlete = extrovert/fast-pace; Teacher/Nurse = ambivert/helping; Writer/Artist = introvert/works alone; hands/ideas = creative professionals.`,
  'exercise.job-categories.20.pro_tip': `Tip: align job titles with personality traits and work preferences.`,
};

const reducedRelativeClausesEnExtras: Record<string, string> = {
  'lesson.reduced-relative-clauses.title': `Relative Pronouns & Reduced Relative Clauses`,
  'lesson.reduced-relative-clauses.description': `Master defining vs. non-defining relative clauses, punctuation handles, relative pronouns ("who", "whose", "that", "when"), and how to reduce subject relative clauses.`,
  'lesson.reduced-relative-clauses.intro':
    `### 1. Two Purposes of Relative Clauses\n` +
    `• **Non-defining (non-restrictive):** Adds extra, non-essential information. Always enclosed in **commas**.\n` +
    `  *Cain, whose work explores the character of introverts, feels that American society often prefers extroverts.*\n` +
    `  *It's Saturday morning, when we discuss my choice of the week.*\n` +
    `  💡 *Tip:* Think of the commas as "handles" you can use to lift out extra information without breaking the sentence.\n` +
    `• **Defining (restrictive):** Provides essential information required to identify the noun. **No commas** are used.\n` +
    `  *An extrovert is someone who easily attracts attention.*\n` +
    `  *These are the two stereotypes that are accepted by most people.*\n\n` +
    `### 2. Relative Pronoun Rules\n` +
    `• Use **who** for people, **that** or **which** for things, **whose** for possession, and **when** for time.\n` +
    `• ⚠️ Crucial: **that** can NEVER be used in non-defining clauses (clauses with commas).\n\n` +
    `### 3. Reduced Relative Clauses\n` +
    `Subject relative clauses can be shortened by omitting the **relative pronoun** and the **verb be**:\n` +
    `• **With be + adjective:**\n` +
    `  *People who are worried about meeting strangers...* → *People **worried** about meeting strangers...*\n` +
    `• **With be + past participle:**\n` +
    `  *The bus that is parked in front of the office...* → *The bus **parked** in front of the office...*\n` +
    `• **With noun phrases (appositives):**\n` +
    `  *Steven, who is a quick learner, adapts easily...* → *Steven, **a quick learner**, adapts easily...*\n\n` +
    `⚠️ Restriction: You **cannot** reduce object relative clauses (*e.g. The book that I read*).`,

  'exercise.reduced-relative-clauses.1.prompt': `Complete the statement about punctuation in relative clauses:`,
  'exercise.reduced-relative-clauses.1.explanation': `Non-defining relative clauses add extra information and are always enclosed in commas.`,
  'exercise.reduced-relative-clauses.1.pro_tip': `Tip: extra information = set off with commas.`,

  'exercise.reduced-relative-clauses.2.prompt': `Complete the definition of a restrictive clause:`,
  'exercise.reduced-relative-clauses.2.explanation': `A defining relative clause provides essential information needed to identify the noun.`,
  'exercise.reduced-relative-clauses.2.pro_tip': `Tip: defining = essential information (no commas).`,

  'exercise.reduced-relative-clauses.3.prompt': `Which sentence is a non-defining relative clause containing non-essential extra information?`,
  'exercise.reduced-relative-clauses.3.explanation': `"Cain, whose work explores the character of introverts, feels that American society prefers extroverts" uses commas to add non-essential details.`,
  'exercise.reduced-relative-clauses.3.pro_tip': `Tip: look for the commas setting off extra details.`,

  'exercise.reduced-relative-clauses.4.prompt': `True or False?`,
  'exercise.reduced-relative-clauses.4.explanation': `True. Commas act as handles; removing the non-defining clause leaves a complete, grammatical sentence.`,
  'exercise.reduced-relative-clauses.4.pro_tip': `Tip: commas as handles = removable extra info.`,

  'exercise.reduced-relative-clauses.5.prompt': `Complete the sentence with the relative pronoun of possession:`,
  'exercise.reduced-relative-clauses.5.explanation': `Use "whose" to indicate possession or authorship: "whose work explores...".`,
  'exercise.reduced-relative-clauses.5.pro_tip': `Tip: whose + noun (possessive relative pronoun).`,

  'exercise.reduced-relative-clauses.6.prompt': `Complete the sentence describing personal qualities:`,
  'exercise.reduced-relative-clauses.6.explanation': `Use "who" for a person in a defining relative clause: "someone who easily attracts attention".`,
  'exercise.reduced-relative-clauses.6.pro_tip': `Tip: someone WHO (refers to a person).`,

  'exercise.reduced-relative-clauses.7.prompt': `Which sentence correctly uses "when" in a non-defining relative clause referring to time?`,
  'exercise.reduced-relative-clauses.7.explanation': `"It's Saturday morning, when we discuss my choice of the week" correctly uses "when" after a time noun.`,
  'exercise.reduced-relative-clauses.7.pro_tip': `Tip: time expression + , when + clause.`,

  'exercise.reduced-relative-clauses.8.prompt': `True or False?`,
  'exercise.reduced-relative-clauses.8.explanation': `True. "That" is restricted to defining clauses and can never be used in non-defining clauses with commas.`,
  'exercise.reduced-relative-clauses.8.pro_tip': `Tip: never use "that" after a comma in relative clauses.`,

  'exercise.reduced-relative-clauses.9.prompt': `Complete the reduced relative clause with an adjective:`,
  'exercise.reduced-relative-clauses.9.explanation': `Omit "who are" to leave the adjective phrase: "People worried about meeting strangers...".`,
  'exercise.reduced-relative-clauses.9.pro_tip': `Tip: [who are] worried -> worried.`,

  'exercise.reduced-relative-clauses.10.prompt': `Complete the reduced relative clause with a past participle:`,
  'exercise.reduced-relative-clauses.10.explanation': `Omit "that is" to leave the past participle phrase: "The bus parked in front of the office...".`,
  'exercise.reduced-relative-clauses.10.pro_tip': `Tip: [that is] parked -> parked.`,

  'exercise.reduced-relative-clauses.11.prompt': `How was "The bus that is parked in front of the office" reduced?`,
  'exercise.reduced-relative-clauses.11.explanation': `It was reduced by omitting both the relative pronoun "that" and the auxiliary be-verb "is".`,
  'exercise.reduced-relative-clauses.11.pro_tip': `Tip: omit relative pronoun + be verb.`,

  'exercise.reduced-relative-clauses.12.prompt': `Put the words in order to form the reduced relative sentence:`,
  'exercise.reduced-relative-clauses.12.explanation': `"People worried about meeting strangers often get nervous at parties."`,
  'exercise.reduced-relative-clauses.12.pro_tip': `Tip: Noun + reduced adjective phrase + main verb phrase.`,

  'exercise.reduced-relative-clauses.13.prompt': `Complete the reduced sentence with an appositive noun phrase:`,
  'exercise.reduced-relative-clauses.13.explanation': `"Steven, a quick learner, adapts easily..." reduces "who is a quick learner".`,
  'exercise.reduced-relative-clauses.13.pro_tip': `Tip: [who is] a quick learner -> a quick learner.`,

  'exercise.reduced-relative-clauses.14.prompt': `Complete the rule regarding which relative clauses can be reduced:`,
  'exercise.reduced-relative-clauses.14.explanation': `Only subject relative clauses can be reduced; object relative clauses cannot be reduced this way.`,
  'exercise.reduced-relative-clauses.14.pro_tip': `Tip: subject clauses only; object clauses cannot be reduced.`,

  'exercise.reduced-relative-clauses.15.prompt': `Which sentence correctly reduces "Steven, who is a quick learner, adapts easily"?`,
  'exercise.reduced-relative-clauses.15.explanation': `"Steven, a quick learner, adapts easily to new situations" retains the commas around the appositive noun phrase.`,
  'exercise.reduced-relative-clauses.15.pro_tip': `Tip: retain commas around non-defining appositives.`,

  'exercise.reduced-relative-clauses.16.prompt': `Put the words in order to form the sentence with a reduced appositive noun phrase:`,
  'exercise.reduced-relative-clauses.16.explanation': `"Steven, a quick learner, adapts easily to new situations."`,
  'exercise.reduced-relative-clauses.16.pro_tip': `Tip: Name, + a quick learner, + verb + complement.`,

  'exercise.reduced-relative-clauses.17.prompt': `True or False?`,
  'exercise.reduced-relative-clauses.17.explanation': `True. "Parked" is a past participle heading a reduced relative clause modifying "the bus".`,
  'exercise.reduced-relative-clauses.17.pro_tip': `Tip: past participle clauses function as reduced passives.`,

  'exercise.reduced-relative-clauses.18.prompt': `Arrange the words to form the reduced relative clause sentence:`,
  'exercise.reduced-relative-clauses.18.explanation': `"The bus parked in front of the office is the one we'll take."`,
  'exercise.reduced-relative-clauses.18.pro_tip': `Tip: The bus + parked in front of the office + is the one we'll take.`,

  'exercise.reduced-relative-clauses.19.prompt': `Which relative clause CANNOT be reduced?`,
  'exercise.reduced-relative-clauses.19.explanation': `"The book that I read yesterday" is an object relative clause ("I read that"), which cannot be reduced by omitting pronoun and be.`,
  'exercise.reduced-relative-clauses.19.pro_tip': `Tip: you cannot reduce object relative clauses.`,

  'exercise.reduced-relative-clauses.20.prompt': `Match each full relative clause to its correctly reduced counterpart:`,
  'exercise.reduced-relative-clauses.20.explanation': `who are worried -> worried; that is parked -> parked; who is a quick learner -> a quick learner; whose work -> cannot be reduced.`,
  'exercise.reduced-relative-clauses.20.pro_tip': `Tip: match full clause with its reduced form.`,
};

const sentenceTypesEnExtras: Record<string, string> = {
  'lesson.sentence-types.title': `Sentence Types: Simple, Compound, and Complex`,
  'lesson.sentence-types.description': `Master sentence classification: contrast simple sentences (compound subjects/verbs), compound sentences (FANBOYS + comma), and complex sentences (independent + dependent clauses).`,
  'lesson.sentence-types.intro':
    `### 1. Simple Sentences\n` +
    `• Has **only one independent clause** expressing a single complete idea.\n` +
    `• Can have variations in the number of subjects and verbs:\n` +
    `  - *Thomas is handsome.* (1 subject + 1 verb)\n` +
    `  - *Thomas and Mike are handsome.* (2 subjects [compound subject] + 1 verb)\n` +
    `  - *Thomas is handsome and looks confident.* (1 subject + 2 verbs [compound predicate])\n` +
    `  ⚠️ Notice: **No comma** is used before *and* when connecting two verbs with the same subject!\n\n` +
    `### 2. Compound Sentences\n` +
    `• Contains **at least two related independent clauses** joined by a coordinating conjunction (**FANBOYS**: *for, and, nor, but, or, yet, so*).\n` +
    `• **Punctuation rule:** Always place a **comma before the coordinating conjunction**:\n` +
    `  - *Thomas is handsome, and he looks confident.*\n` +
    `  - *Thomas is handsome, but he doesn't have confidence.*\n\n` +
    `### 3. Complex Sentences\n` +
    `• Contains **one independent clause** connected to **one dependent clause**.\n` +
    `• The dependent clause begins with a **subordinating conjunction** (*after, before, when, because, although, if, since*):\n` +
    `  - *Thomas is smart although he sometimes makes mistakes.*\n` +
    `  - *Thomas will get a good grade since he studied hard.*`,

  'exercise.sentence-types.1.prompt': `Complete the definition of a simple sentence:`,
  'exercise.sentence-types.1.explanation': `A simple sentence contains only one independent clause and expresses one complete idea.`,
  'exercise.sentence-types.1.pro_tip': `Tip: simple sentence = exactly ONE independent clause.`,

  'exercise.sentence-types.2.prompt': `Complete the sentence with a compound subject:`,
  'exercise.sentence-types.2.explanation': `Two subjects joined by "and" ("Thomas and Mike") take the plural verb "are".`,
  'exercise.sentence-types.2.pro_tip': `Tip: compound subject = plural agreement (Thomas and Mike ARE).`,

  'exercise.sentence-types.3.prompt': `Why is "Thomas is handsome and looks confident" classified as a SIMPLE sentence?`,
  'exercise.sentence-types.3.explanation': `It contains only one subject ("Thomas") sharing two verbs ("is" and "looks"). There is only one independent clause.`,
  'exercise.sentence-types.3.pro_tip': `Tip: 1 subject + compound verb = simple sentence (no comma before "and").`,

  'exercise.sentence-types.4.prompt': `True or False?`,
  'exercise.sentence-types.4.explanation': `True. A simple sentence can have compound subjects or verbs, as long as there is only one independent clause.`,
  'exercise.sentence-types.4.pro_tip': `Tip: multiple verbs for one subject still equals a simple sentence.`,

  'exercise.sentence-types.5.prompt': `Complete the compound sentence with the contrast conjunction:`,
  'exercise.sentence-types.5.explanation': `Use "but" to contrast two independent clauses in a compound sentence: "Thomas is handsome, but he doesn't have confidence."`,
  'exercise.sentence-types.5.pro_tip': `Tip: comma + BUT introduces a contrasting independent clause.`,

  'exercise.sentence-types.6.prompt': `Choose the correct punctuation before a coordinating conjunction in a compound sentence:`,
  'exercise.sentence-types.6.explanation': `A comma is required before the coordinating conjunction when connecting two independent clauses.`,
  'exercise.sentence-types.6.pro_tip': `Tip: Independent clause + COMMA + conjunction + Independent clause.`,

  'exercise.sentence-types.7.prompt': `Which sentence is a properly punctuated compound sentence?`,
  'exercise.sentence-types.7.explanation': `"Thomas is handsome, and he looks confident" correctly uses a comma before "and" separating two independent clauses.`,
  'exercise.sentence-types.7.pro_tip': `Tip: check for independent clause + comma + coordinating conjunction.`,

  'exercise.sentence-types.8.prompt': `True or False?`,
  'exercise.sentence-types.8.explanation': `True. Compound sentences connect two independent clauses using coordinating conjunctions (FANBOYS).`,
  'exercise.sentence-types.8.pro_tip': `Tip: FANBOYS = for, and, nor, but, or, yet, so.`,

  'exercise.sentence-types.9.prompt': `Complete the complex sentence with the concession conjunction:`,
  'exercise.sentence-types.9.explanation': `Use "although" to introduce the dependent concession clause: "Thomas is smart although he sometimes makes mistakes."`,
  'exercise.sentence-types.9.pro_tip': `Tip: although introduces a dependent concession clause.`,

  'exercise.sentence-types.10.prompt': `Complete the complex sentence expressing cause/reason:`,
  'exercise.sentence-types.10.explanation': `Use "since" as a subordinating conjunction of cause: "since he studied hard".`,
  'exercise.sentence-types.10.pro_tip': `Tip: since = subordinating conjunction of cause/reason.`,

  'exercise.sentence-types.11.prompt': `In "Thomas will get a good grade since he studied hard", which clause is dependent?`,
  'exercise.sentence-types.11.explanation': `"since he studied hard" is the dependent clause introduced by the subordinating conjunction "since".`,
  'exercise.sentence-types.11.pro_tip': `Tip: the clause beginning with the subordinator is dependent.`,

  'exercise.sentence-types.12.prompt': `Put the words in order to form the complex sentence with "although":`,
  'exercise.sentence-types.12.explanation': `"Thomas is smart although he sometimes makes mistakes."`,
  'exercise.sentence-types.12.pro_tip': `Tip: Independent clause + although + dependent clause.`,

  'exercise.sentence-types.13.prompt': `Identify the sentence type of "Thomas is handsome and looks confident":`,
  'exercise.sentence-types.13.explanation': `It is a simple sentence with one subject and a compound predicate (two verbs).`,
  'exercise.sentence-types.13.pro_tip': `Tip: no second subject after "and" = simple sentence.`,

  'exercise.sentence-types.14.prompt': `Identify the sentence type of "Thomas is handsome, and he looks confident":`,
  'exercise.sentence-types.14.explanation': `It is a compound sentence with two complete independent clauses joined by ", and".`,
  'exercise.sentence-types.14.pro_tip': `Tip: subject + verb, AND + subject + verb = compound sentence.`,

  'exercise.sentence-types.15.prompt': `Classify this sentence: "Thomas will get a good grade since he studied hard."`,
  'exercise.sentence-types.15.explanation': `It is a complex sentence consisting of one independent clause and one dependent clause introduced by "since".`,
  'exercise.sentence-types.15.pro_tip': `Tip: independent clause + subordinator clause = complex sentence.`,

  'exercise.sentence-types.16.prompt': `Put the words in order to form the compound sentence with "but":`,
  'exercise.sentence-types.16.explanation': `"Thomas is handsome, but he doesn't have confidence."`,
  'exercise.sentence-types.16.pro_tip': `Tip: Independent clause, + but + independent clause.`,

  'exercise.sentence-types.17.prompt': `True or False?`,
  'exercise.sentence-types.17.explanation': `True. Without the second subject "he", it is a compound predicate in a simple sentence and should NOT take a comma.`,
  'exercise.sentence-types.17.pro_tip': `Tip: never put a comma between two verbs that share the same subject.`,

  'exercise.sentence-types.18.prompt': `Arrange the words to form the complex sentence of cause:`,
  'exercise.sentence-types.18.explanation': `"Thomas will get a good grade since he studied hard."`,
  'exercise.sentence-types.18.pro_tip': `Tip: Thomas will get a good grade since he studied hard.`,

  'exercise.sentence-types.19.prompt': `Which list contains ONLY coordinating conjunctions used in compound sentences (FANBOYS)?`,
  'exercise.sentence-types.19.explanation': `"for, and, nor, but, or, yet, so" are the seven coordinating conjunctions.`,
  'exercise.sentence-types.19.pro_tip': `Tip: remember FANBOYS.`,

  'exercise.sentence-types.20.prompt': `Match each example sentence to its correct sentence structure type:`,
  'exercise.sentence-types.20.explanation': `Thomas and Mike... = simple (compound subject); Thomas is... and looks... = simple (compound verb); Thomas is..., but he... = compound; Thomas is... although... = complex.`,
  'exercise.sentence-types.20.pro_tip': `Tip: analyze the number of clauses and the type of connector.`,
};

const willingnessAndUnwillingnessEnExtras: Record<string, string> = {
  'lesson.willingness-and-unwillingness.title': `Vocabulary: Willingness and Unwillingness`,
  'lesson.willingness-and-unwillingness.description': `Learn advanced functional expressions to convey degrees of willingness, enthusiasm, reluctance, hesitation, and refusal (be dying to, more than happy to, reluctant to, have no intention of, won't/wouldn't).`,
  'lesson.willingness-and-unwillingness.intro':
    `### 1. Expressions of High & Moderate Willingness\n` +
    `• **Be dying to (+ base verb):** Extremely eager, excited, or impatient to do something.\n` +
    `  - *I'm dying to hear the new album!*\n` +
    `• **Be more than happy to (+ base verb):** Delighted and completely willing to help or participate.\n` +
    `  - *We'd be more than happy to show you around the city.*\n` +
    `• **Be eager to / Be prepared to (+ base verb):** Keen, ready, and motivated to take action.\n` +
    `• **Be open to (+ noun / gerund -ing):** Receptive to considering new ideas, suggestions, or changes.\n` +
    `  - *We are open to revising the schedule.* (⚠️ Notice: *to* is a preposition here, so follow with *-ing*!)\n\n` +
    `### 2. Expressions of Reluctance & Unwillingness\n` +
    `• **Be reluctant to (+ base verb):** Hesitant, doubtful, or cautious about taking action.\n` +
    `  - *He was reluctant to sign the contract without legal advice.*\n` +
    `• **Be unwilling to (+ base verb):** Not wanting to do something or refusing to cooperate.\n` +
    `• **Have no desire to (+ base verb):** Showing zero interest or personal motivation.\n` +
    `  - *I have no desire to attend that boring meeting.*\n` +
    `• **Hesitate to (+ base verb):** Pause or delay action due to uncertainty or reluctance.\n\n` +
    `### 3. Preposition Patterns & Absolute Refusal\n` +
    `• **Have no intention of (+ gerund -ing):** Firm, resolute decision *not* to do something.\n` +
    `  - *She has no intention of apologizing when she did nothing wrong.*\n` +
    `• **Be against (+ noun / gerund -ing):** Strongly opposed to an action or plan.\n` +
    `  - *The board is completely against cutting the budget.*\n\n` +
    `### 4. Modals of Willingness & Refusal\n` +
    `• **Will vs. Won't (Present):**\n` +
    `  - *Will:* Instant or spontaneous willingness (*I will carry those bags for you*).\n` +
    `  - *Won't:* Stubborn human refusal or inanimate objects failing to function (*He won't listen!* / *My car won't start!*).\n` +
    `• **Would vs. Wouldn't (Past):**\n` +
    `  - *Would:* Past willingness (*Whenever we called, they would help us immediately*).\n` +
    `  - *Wouldn't:* Past refusal (*I begged him, but he wouldn't change his mind*).`,

  'exercise.willingness-and-unwillingness.1.prompt': `Complete the sentence with the expression of intense eagerness:`,
  'exercise.willingness-and-unwillingness.1.explanation': `"Be dying to" means to be extremely eager, excited, or impatient to do something.`,
  'exercise.willingness-and-unwillingness.1.pro_tip': `Tip: "be dying to + base verb" expresses maximum enthusiasm.`,

  'exercise.willingness-and-unwillingness.2.prompt': `Complete the phrase showing generous willingness to help:`,
  'exercise.willingness-and-unwillingness.2.explanation': `"Be more than happy to" is a courteous expression showing eager and glad willingness to assist.`,
  'exercise.willingness-and-unwillingness.2.pro_tip': `Tip: "more than happy to" = gladly and willingly cooperative.`,

  'exercise.willingness-and-unwillingness.3.prompt': `Which sentence expresses the highest level of enthusiasm or eagerness?`,
  'exercise.willingness-and-unwillingness.3.explanation': `"I am dying to visit Japan" expresses intense, eager excitement far above being open to or not minding.`,
  'exercise.willingness-and-unwillingness.3.pro_tip': `Tip: "dying to" is much more enthusiastic than "open to" or "don't mind".`,

  'exercise.willingness-and-unwillingness.4.prompt': `True or False?`,
  'exercise.willingness-and-unwillingness.4.explanation': `False. "Be open to" means receptive and willing to consider new suggestions, not unwilling.`,
  'exercise.willingness-and-unwillingness.4.pro_tip': `Tip: "be open to" = receptive and flexible.`,

  'exercise.willingness-and-unwillingness.5.prompt': `Complete the sentence expressing hesitation and reluctance:`,
  'exercise.willingness-and-unwillingness.5.explanation': `"Reluctant to" describes someone who is hesitant, cautious, or disinclined to act.`,
  'exercise.willingness-and-unwillingness.5.pro_tip': `Tip: "be reluctant to + base verb" = hesitant or unwilling.`,

  'exercise.willingness-and-unwillingness.6.prompt': `Complete the phrase expressing complete lack of interest or desire:`,
  'exercise.willingness-and-unwillingness.6.explanation': `"Have no desire to" expresses that someone has zero interest or motivation to do something.`,
  'exercise.willingness-and-unwillingness.6.pro_tip': `Tip: "have no desire to + base verb" shows complete disinterest.`,

  'exercise.willingness-and-unwillingness.7.prompt': `What does "She hesitated to accept the promotion" mean?`,
  'exercise.willingness-and-unwillingness.7.explanation': `"Hesitate to" means pausing or being slow to act because of doubt, reluctance, or caution.`,
  'exercise.willingness-and-unwillingness.7.pro_tip': `Tip: "hesitate to" reflects uncertainty or hesitation before deciding.`,

  'exercise.willingness-and-unwillingness.8.prompt': `True or False?`,
  'exercise.willingness-and-unwillingness.8.explanation': `True. Both "be reluctant to" and "be unwilling to" indicate hesitation or a clear refusal to cooperate.`,
  'exercise.willingness-and-unwillingness.8.pro_tip': `Tip: reluctant = hesitant; unwilling = refusal/not wanting to.`,

  'exercise.willingness-and-unwillingness.9.prompt': `Select the correct preposition that accompanies "have no intention":`,
  'exercise.willingness-and-unwillingness.9.explanation': `The set grammatical collocation is "have no intention OF doing something" (followed by a gerund).`,
  'exercise.willingness-and-unwillingness.9.pro_tip': `Tip: intention + OF + verb-ing.`,

  'exercise.willingness-and-unwillingness.10.prompt': `Choose the correct verb form after "be against":`,
  'exercise.willingness-and-unwillingness.10.explanation': `"Against" is a preposition, so any verb that follows must be a gerund in "-ing" ("turning").`,
  'exercise.willingness-and-unwillingness.10.pro_tip': `Tip: preposition "against" + gerund (-ing).`,

  'exercise.willingness-and-unwillingness.11.prompt': `Which sentence uses the correct grammatical pattern for expressing firm refusal?`,
  'exercise.willingness-and-unwillingness.11.explanation': `"have no intention of resigning" correctly uses the preposition "of" followed by the gerund "-ing".`,
  'exercise.willingness-and-unwillingness.11.pro_tip': `Tip: have no intention OF + gerund (-ing).`,

  'exercise.willingness-and-unwillingness.12.prompt': `Reorder the words to form a correct sentence expressing refusal:`,
  'exercise.willingness-and-unwillingness.12.explanation': `"She has no intention of changing her mind."`,
  'exercise.willingness-and-unwillingness.12.pro_tip': `Tip: Subject + has no intention of + gerund + object.`,

  'exercise.willingness-and-unwillingness.13.prompt': `Choose the modal that expresses stubborn refusal in the present:`,
  'exercise.willingness-and-unwillingness.13.explanation': `"Won't" (will not) expresses persistent or stubborn unwillingness/refusal to do something in the present.`,
  'exercise.willingness-and-unwillingness.13.pro_tip': `Tip: "won't" = present refusal or unwillingness.`,

  'exercise.willingness-and-unwillingness.14.prompt': `Which modal is used when an inanimate machine or object refuses to work?`,
  'exercise.willingness-and-unwillingness.14.explanation': `English idiomatically uses "won't" when machines stubbornly refuse to cooperate (e.g., "the printer won't print", "the car won't start").`,
  'exercise.willingness-and-unwillingness.14.pro_tip': `Tip: "it won't start/print/open" conveys mechanical resistance.`,

  'exercise.willingness-and-unwillingness.15.prompt': `In "I asked her for help, but she wouldn't cooperate", what does "wouldn't" express?`,
  'exercise.willingness-and-unwillingness.15.explanation': `"Wouldn't" is the past tense form of refusal, indicating that the person was unwilling to cooperate in the past.`,
  'exercise.willingness-and-unwillingness.15.pro_tip': `Tip: "wouldn't" = past refusal / past unwillingness.`,

  'exercise.willingness-and-unwillingness.16.prompt': `Reorder the words to form a polite sentence expressing willingness:`,
  'exercise.willingness-and-unwillingness.16.explanation': `"I would gladly help you with the project."`,
  'exercise.willingness-and-unwillingness.16.pro_tip': `Tip: "would gladly" expresses enthusiastic and polite willingness.`,

  'exercise.willingness-and-unwillingness.17.prompt': `True or False?`,
  'exercise.willingness-and-unwillingness.17.explanation': `True. In "be open to", "to" is a preposition taking a noun or gerund (e.g., "open to revising"), not an infinitive marker.`,
  'exercise.willingness-and-unwillingness.17.pro_tip': `Tip: "be open to + -ing" because "to" is a preposition.`,

  'exercise.willingness-and-unwillingness.18.prompt': `Arrange the words to form the polite offer of assistance:`,
  'exercise.willingness-and-unwillingness.18.explanation': `"We are more than happy to assist you."`,
  'exercise.willingness-and-unwillingness.18.pro_tip': `Tip: We are more than happy to assist you.`,

  'exercise.willingness-and-unwillingness.19.prompt': `Which expression of unwillingness requires a preposition followed by a gerund (-ing)?`,
  'exercise.willingness-and-unwillingness.19.explanation': `"be against (doing something)" uses the preposition "against" followed by a gerund. In contrast, "reluctant", "eager", and "dying" take "to + base verb".`,
  'exercise.willingness-and-unwillingness.19.pro_tip': `Tip: "be against + gerund (-ing)".`,

  'exercise.willingness-and-unwillingness.20.prompt': `Match each expression to its degree and type of willingness:`,
  'exercise.willingness-and-unwillingness.20.explanation': `dying to = intense eagerness; more than happy = glad cooperation; reluctant = hesitation/doubt; have no intention of = absolute refusal.`,
  'exercise.willingness-and-unwillingness.20.pro_tip': `Tip: compare the degrees from maximum eagerness to outright refusal.`,
};

const presentRealConditionalsEnExtras: Record<string, string> = {
  'lesson.present-real-conditionals.title': `Present Real Conditionals: Statements, Questions, Modals, When & Whenever`,
  'lesson.present-real-conditionals.description': `Master present real conditionals: clause order and comma rules, modals in result clauses (can, may, ought to), Yes/No questions and short answers, Wh-questions, and habitual clauses with when/whenever.`,
  'lesson.present-real-conditionals.intro':
    `### 1. Statements: Clause Order and Punctuation\n` +
    `• **If-Clause First (Comma Required):**\n` +
    `  - *If I shop online, I save time.*\n` +
    `  - *If the mall is closed, I can shop online.*\n` +
    `  - *If the price is right, I may even buy two.*\n` +
    `  - *If the teacher assigns a test, I ought to study.*\n` +
    `• **Result Clause First (No Comma):**\n` +
    `  - *I save time if I shop online.*\n` +
    `  - *I can shop online if the mall is closed.*\n` +
    `  - *I may even buy two if the price is right.*\n` +
    `  - *I ought to study if the teacher assigns a test.*\n\n` +
    `### 2. Modals in the Result Clause\n` +
    `• Modal verbs can be used in the result clause instead of the simple present:\n` +
    `  - **can:** Ability/Possibility (*If the mall is closed, I can shop online.*)\n` +
    `  - **may:** Possibility (*If the price is right, I may even buy two.*)\n` +
    `  - **ought to:** Advice / Moral obligation (*If the teacher assigns a test, I ought to study.*)\n\n` +
    `### 3. Yes/No Questions & Short Answers\n` +
    `• **Question Pattern:** [Auxiliary / Modal] + Subject + Verb + **if**-clause?\n` +
    `  - *Do you save time if you shop online?*\n` +
    `    - Affirmative: *Yes, I do.*\n` +
    `    - Negative: *No, I don't.*\n` +
    `  - *Can you shop online if the mall is closed?*\n` +
    `    - Affirmative: *Yes, I can.*\n` +
    `    - Negative: *No, I can't.*\n\n` +
    `### 4. Wh-Questions\n` +
    `• **Question Pattern:** Wh-word + [Auxiliary / Verb] + **if**-clause?\n` +
    `  - *What happens if I don't like it?*\n\n` +
    `### 5. Other Statements: When and Whenever\n` +
    `• For habits, routines, or recurring situations, use **when** or **whenever** instead of **if**:\n` +
    `  - *Whenever we watch an opera, we get bored.*\n` +
    `  - *When he watches the fights, he cheers loudly.*`,

  'exercise.present-real-conditionals.1.prompt': `Complete the present real conditional result clause:`,
  'exercise.present-real-conditionals.1.explanation': `In a present real conditional statement, both clauses use the simple present tense for general truths or habits: "If I shop online, I save time."`,
  'exercise.present-real-conditionals.1.pro_tip': `Tip: If + present, present = general truth / habit.`,

  'exercise.present-real-conditionals.2.prompt': `Complete the conditional sentence with the result clause first:`,
  'exercise.present-real-conditionals.2.explanation': `When the result clause comes first, join it directly with "if" without a comma: "I save time if I shop online."`,
  'exercise.present-real-conditionals.2.pro_tip': `Tip: Result clause + if + condition clause (no comma).`,

  'exercise.present-real-conditionals.3.prompt': `Which sentence has the correct punctuation?`,
  'exercise.present-real-conditionals.3.explanation': `When the "if"-clause comes first, it must be separated from the result clause by a comma.`,
  'exercise.present-real-conditionals.3.pro_tip': `Tip: If-clause first = comma needed.`,

  'exercise.present-real-conditionals.4.prompt': `True or False?`,
  'exercise.present-real-conditionals.4.explanation': `True. When the result clause comes first ("I save time if I shop online"), no comma is needed before "if".`,
  'exercise.present-real-conditionals.4.pro_tip': `Tip: no comma before "if" when result clause comes first.`,

  'exercise.present-real-conditionals.5.prompt': `Complete the result clause expressing possibility:`,
  'exercise.present-real-conditionals.5.explanation': `"may" expresses possibility in the result clause: "If the price is right, I may even buy two."`,
  'exercise.present-real-conditionals.5.pro_tip': `Tip: "may" indicates possibility in real conditionals.`,

  'exercise.present-real-conditionals.6.prompt': `Complete the sentence with the modal expressing advice/obligation:`,
  'exercise.present-real-conditionals.6.explanation': `"ought to" expresses advice or obligation: "If the teacher assigns a test, I ought to study."`,
  'exercise.present-real-conditionals.6.pro_tip': `Tip: "ought to" is followed by the base verb.`,

  'exercise.present-real-conditionals.7.prompt': `In "If the mall is closed, I can shop online", what does the modal "can" express?`,
  'exercise.present-real-conditionals.7.explanation': `"can" in the result clause expresses present ability or possibility.`,
  'exercise.present-real-conditionals.7.pro_tip': `Tip: "can" = ability/possibility.`,

  'exercise.present-real-conditionals.8.prompt': `True or False?`,
  'exercise.present-real-conditionals.8.explanation': `True. Present real conditionals often use modals like "can", "may", or "ought to" in the result clause.`,
  'exercise.present-real-conditionals.8.pro_tip': `Tip: Modals can replace simple present in the result clause.`,

  'exercise.present-real-conditionals.9.prompt': `Complete the Yes/No question in the present real conditional:`,
  'exercise.present-real-conditionals.9.explanation': `Use the auxiliary "Do" to form a Yes/No question with the simple present verb "save": "Do you save time if you shop online?"`,
  'exercise.present-real-conditionals.9.pro_tip': `Tip: Do/Does + subject + base verb + if-clause?`,

  'exercise.present-real-conditionals.10.prompt': `Complete the affirmative short answer with the matching modal:`,
  'exercise.present-real-conditionals.10.explanation': `When a question begins with "Can you...", the short answer uses the modal "can": "Yes, I can."`,
  'exercise.present-real-conditionals.10.pro_tip': `Tip: match the short answer auxiliary/modal to the question.`,

  'exercise.present-real-conditionals.11.prompt': `What is the correct negative short answer to "Do you save time if you shop online?"`,
  'exercise.present-real-conditionals.11.explanation': `The question uses the auxiliary "Do", so the negative short answer is "No, I don't."`,
  'exercise.present-real-conditionals.11.pro_tip': `Tip: "Do you...?" -> "No, I don't."`,

  'exercise.present-real-conditionals.12.prompt': `Reorder the words to form a correct Yes/No conditional question:`,
  'exercise.present-real-conditionals.12.explanation': `"Can you shop online if the mall is closed?"`,
  'exercise.present-real-conditionals.12.pro_tip': `Tip: Modal + subject + verb + if-clause?`,

  'exercise.present-real-conditionals.13.prompt': `Complete the Wh-question asking about consequence:`,
  'exercise.present-real-conditionals.13.explanation': `"What happens if I don't like it?" uses the third-person singular "happens" with "what".`,
  'exercise.present-real-conditionals.13.pro_tip': `Tip: "What happens if...?" asks about the result.`,

  'exercise.present-real-conditionals.14.prompt': `Complete the sentence expressing a repeated/habitual condition:`,
  'exercise.present-real-conditionals.14.explanation': `"Whenever" means "every time that" and introduces a repeated condition: "Whenever we watch an opera, we get bored."`,
  'exercise.present-real-conditionals.14.pro_tip': `Tip: "Whenever" = every time that / any time that.`,

  'exercise.present-real-conditionals.15.prompt': `Which verb form completes the routine: "When he ____ the fights, he cheers loudly."?`,
  'exercise.present-real-conditionals.15.explanation': `Use the third-person singular simple present "watches" for a habitual action with "he".`,
  'exercise.present-real-conditionals.15.pro_tip': `Tip: third-person singular adds -es (watches).`,

  'exercise.present-real-conditionals.16.prompt': `Reorder the words to form the habitual statement with "When":`,
  'exercise.present-real-conditionals.16.explanation': `"When he watches the fights, he cheers loudly."`,
  'exercise.present-real-conditionals.16.pro_tip': `Tip: When-clause with comma + result clause.`,

  'exercise.present-real-conditionals.17.prompt': `True or False?`,
  'exercise.present-real-conditionals.17.explanation': `True. "When" and "whenever" are commonly used instead of "if" for routines and repeated situations.`,
  'exercise.present-real-conditionals.17.pro_tip': `Tip: when/whenever = habits and recurring events.`,

  'exercise.present-real-conditionals.18.prompt': `Arrange the words to form the conditional sentence with the modal "ought to":`,
  'exercise.present-real-conditionals.18.explanation': `"I ought to study if the teacher assigns a test."`,
  'exercise.present-real-conditionals.18.pro_tip': `Tip: Result clause + if + condition clause.`,

  'exercise.present-real-conditionals.19.prompt': `In "If the price is right, I may even buy two", what does "may" convey?`,
  'exercise.present-real-conditionals.19.explanation': `"may" expresses possibility (it is possible that I will buy two).`,
  'exercise.present-real-conditionals.19.pro_tip': `Tip: "may" = possibility in the result clause.`,

  'exercise.present-real-conditionals.20.prompt': `Match each example sentence from the slides to its grammatical function:`,
  'exercise.present-real-conditionals.20.explanation': `If I shop... = statement with comma; Can you shop... = yes/no question with can; What happens... = Wh-question; Whenever we watch... = habitual condition with whenever.`,
  'exercise.present-real-conditionals.20.pro_tip': `Tip: identify the clause order, question type, and connector.`,
};

const contrastingTransitionsEnExtras: Record<string, string> = {
  'lesson.contrasting-transitions.title': `Contrasting Transitions: On the Contrary, That Said, and At the Same Time`,
  'lesson.contrasting-transitions.description': `Master sophisticated discourse markers of contrast: assert opposites in dialogue (on the contrary), introduce concessions (that said), and balance co-existing perspectives (at the same time).`,
  'lesson.contrasting-transitions.intro':
    `### 1. On the Contrary\n` +
    `• **Meaning:** Asserts that the **exact opposite** of what was said or assumed is true.\n` +
    `• **Between Two Speakers:** Most commonly used in dialogue when one person corrects or rejects the other's assumption:\n` +
    `  - A: *I thought you were happy.* → B: *On the contrary, I am devastated.*\n` +
    `  - A: *Have you finished the homework?* → B: *On the contrary, I just started.*\n` +
    `• **After Negative Statements:** Unlike *that said* and *at the same time*, *on the contrary* can follow a negative statement:\n` +
    `  - A: *You're from Vietnam, right?* → B: *I'm not from Vietnam. On the contrary, I'm from China.*\n` +
    `• **Standalone Ellipsis:** Can omit the contrasting explanation because the opposite meaning is already implied:\n` +
    `  - A: *I'm not angry with you. On the contrary.*\n\n` +
    `### 2. That Said\n` +
    `• **Meaning:** *"Having said that"* / *"Even so"* / *"Nevertheless"*.\n` +
    `• **Function:** Concession that introduces a counter-balancing point.\n` +
    `• **Used by One Speaker:** Typically used by a single person to balance positive and negative aspects about a topic:\n` +
    `  - *English is difficult to learn. That said, it is a rewarding language to learn.*\n` +
    `  - *Our new car is reliable. That said, the monthly payments are too high.*\n\n` +
    `### 3. At the Same Time\n` +
    `• **Meaning:** *"Equally true"* / *"On the other hand"*.\n` +
    `• **Function:** Acknowledges that two contrasting facts or perspectives coexist.\n` +
    `• **Used by One Speaker:** Balances praise with a constructive caveat or two sides of an issue:\n` +
    `  - *Your cooking is very good. At the same time, there's a little room for improvement.*`,

  'exercise.contrasting-transitions.1.prompt': `Complete the contrast marker asserting the complete opposite:`,
  'exercise.contrasting-transitions.1.explanation': `The set idiom is "On the contrary", meaning the exact opposite is true.`,
  'exercise.contrasting-transitions.1.pro_tip': `Tip: "On the contrary" starts with the preposition "On".`,

  'exercise.contrasting-transitions.2.prompt': `Complete Speaker B's response showing the opposite of finishing:`,
  'exercise.contrasting-transitions.2.explanation': `"On the contrary, I just started" emphasizes that instead of finishing, speaker B only just began.`,
  'exercise.contrasting-transitions.2.pro_tip': `Tip: "On the contrary" introduces the polar opposite.`,

  'exercise.contrasting-transitions.3.prompt': `What does "On the contrary, I just started" indicate?`,
  'exercise.contrasting-transitions.3.explanation': `"On the contrary" asserts that the complete opposite of what speaker A assumed is true.`,
  'exercise.contrasting-transitions.3.pro_tip': `Tip: "on the contrary" = the complete opposite is true.`,

  'exercise.contrasting-transitions.4.prompt': `True or False?`,
  'exercise.contrasting-transitions.4.explanation': `False. "On the contrary" contradicts the preceding statement and asserts the opposite.`,
  'exercise.contrasting-transitions.4.pro_tip': `Tip: "on the contrary" asserts the opposite, not agreement.`,

  'exercise.contrasting-transitions.5.prompt': `Complete the transition coming after a negative statement:`,
  'exercise.contrasting-transitions.5.explanation': `"On the contrary" can follow a negative statement: "I'm not from Vietnam. On the contrary, I'm from China."`,
  'exercise.contrasting-transitions.5.pro_tip': `Tip: negative statement + "On the contrary" + positive correction.`,

  'exercise.contrasting-transitions.6.prompt': `Complete the dialogue where the contrasting statement is omitted:`,
  'exercise.contrasting-transitions.6.explanation': `"On the contrary" can stand alone because the phrase itself implies that the opposite holds true.`,
  'exercise.contrasting-transitions.6.pro_tip': `Tip: "On the contrary." can stand as an independent remark.`,

  'exercise.contrasting-transitions.7.prompt': `Unlike "that said" and "at the same time", what unique position can "on the contrary" take?`,
  'exercise.contrasting-transitions.7.explanation': `"On the contrary" can come directly after a negative statement to introduce the correct fact.`,
  'exercise.contrasting-transitions.7.pro_tip': `Tip: only "on the contrary" can follow a negative statement like "I'm not...".`,

  'exercise.contrasting-transitions.8.prompt': `True or False?`,
  'exercise.contrasting-transitions.8.explanation': `True. "On the contrary" can omit the contrasting statement because the opposite meaning is automatically understood.`,
  'exercise.contrasting-transitions.8.pro_tip': `Tip: standalone "On the contrary" implies the opposite.`,

  'exercise.contrasting-transitions.9.prompt': `Complete the concession phrase used to balance a challenge with a benefit:`,
  'exercise.contrasting-transitions.9.explanation': `"That said" is a concession marker meaning "having said that" or "nevertheless".`,
  'exercise.contrasting-transitions.9.pro_tip': `Tip: "That said," balances positive and negative aspects.`,

  'exercise.contrasting-transitions.10.prompt': `Complete the sentence balancing car reliability with high cost:`,
  'exercise.contrasting-transitions.10.explanation': `"too high" contrasts the car's positive reliability with its negative excessive expense.`,
  'exercise.contrasting-transitions.10.pro_tip': `Tip: "That said" shifts from a positive quality to a drawback.`,

  'exercise.contrasting-transitions.11.prompt': `How is "That said" used in the sentence about learning English?`,
  'exercise.contrasting-transitions.11.explanation': `"That said" is used by a single speaker to weigh a drawback (it's difficult) against a benefit (it's rewarding).`,
  'exercise.contrasting-transitions.11.pro_tip': `Tip: one speaker balancing pros and cons uses "That said,".`,

  'exercise.contrasting-transitions.12.prompt': `Reorder the words to form the sentence balancing car reliability and payments:`,
  'exercise.contrasting-transitions.12.explanation': `"Our new car is reliable. That said, the monthly payments are too high."`,
  'exercise.contrasting-transitions.12.pro_tip': `Tip: Positive statement. That said, negative caveat.`,

  'exercise.contrasting-transitions.13.prompt': `Complete the transition phrase used to balance praise with critique:`,
  'exercise.contrasting-transitions.13.explanation': `"At the same time" introduces a balancing observation without completely contradicting the first praise.`,
  'exercise.contrasting-transitions.13.pro_tip': `Tip: "At the same time," = simultaneously true on the other hand.`,

  'exercise.contrasting-transitions.14.prompt': `Complete the balanced view regarding innovation and budget:`,
  'exercise.contrasting-transitions.14.explanation': `"mindful" fits the constructive caution: "At the same time, we must be mindful of the high budget."`,
  'exercise.contrasting-transitions.14.pro_tip': `Tip: "At the same time" introduces a caution.`,

  'exercise.contrasting-transitions.15.prompt': `What is the function of "at the same time" in the cooking example?`,
  'exercise.contrasting-transitions.15.explanation': `It introduces a co-existing, balancing caveat (there's room for improvement) alongside praise.`,
  'exercise.contrasting-transitions.15.pro_tip': `Tip: "at the same time" balances co-existing truths.`,

  'exercise.contrasting-transitions.16.prompt': `Reorder the words to form the balanced sentence about learning English:`,
  'exercise.contrasting-transitions.16.explanation': `"English is difficult to learn. That said, it is a rewarding language."`,
  'exercise.contrasting-transitions.16.pro_tip': `Tip: Hardship statement. That said, positive outcome.`,

  'exercise.contrasting-transitions.17.prompt': `True or False?`,
  'exercise.contrasting-transitions.17.explanation': `True. "At the same time" and "that said" are typically used by one speaker to balance both sides of a topic.`,
  'exercise.contrasting-transitions.17.pro_tip': `Tip: one speaker weighing pros and cons = "That said" / "At the same time".`,

  'exercise.contrasting-transitions.18.prompt': `Arrange the words to form the constructive comment on cooking:`,
  'exercise.contrasting-transitions.18.explanation': `"Your cooking is very good. At the same time, there's room for improvement."`,
  'exercise.contrasting-transitions.18.pro_tip': `Tip: Praise. At the same time, constructive feedback.`,

  'exercise.contrasting-transitions.19.prompt': `Which phrase is BEST when a second speaker wants to reject an assumption and assert the exact opposite?`,
  'exercise.contrasting-transitions.19.explanation': `"On the contrary" is specifically designed to assert the exact opposite in response to another speaker.`,
  'exercise.contrasting-transitions.19.pro_tip': `Tip: correcting another person's assumption with the opposite = "On the contrary".`,

  'exercise.contrasting-transitions.20.prompt': `Match each example sentence from the slides to its discourse function:`,
  'exercise.contrasting-transitions.20.explanation': `On the contrary (devastated) = two speakers correcting assumption; That said (rewarding) = one speaker conceding difficulty; At the same time (improvement) = one speaker balancing praise; On the contrary (alone) = standalone ellipsis.`,
  'exercise.contrasting-transitions.20.pro_tip': `Tip: contrast two speakers vs one speaker and full sentence vs ellipsis.`,
};

const conditionalConjunctionsEnExtras: Record<string, string> = {
  'lesson.conditional-conjunctions.title': `Conditional Conjunctions: As Long As, Provided That, Unless, Even If, and Only If`,
  'lesson.conditional-conjunctions.description': `Master alternative conditional connectors: exclusive conditions (as long as, provided that, on condition that, only if), unchanging outcomes (even if), and negative conditions equivalent to if...not (unless).`,
  'lesson.conditional-conjunctions.intro':
    `### 1. Specific Conditions Required for a Result\n` +
    `• Expressions: **only if**, **provided (that)**, **providing**, **as long as**, **so long as**, **on condition that**.\n` +
    `• **Function:** Shows the result that will happen *only* when a specific condition becomes true. **No other condition will have this effect!**\n` +
    `  - *As long as you promise to pay me back, I will loan you some money.*\n` +
    `  - *On condition that you come back by 10:00 p.m., I will let you go to the party.*\n` +
    `  - *I will allow you to stay provided that you keep your voice down.*\n` +
    `  - *I will let you borrow my car only if you promise to bring it back in one piece.*\n\n` +
    `### 2. Even if (Condition Doesn't Matter)\n` +
    `• **Meaning:** Stresses that the condition does not change anything. Whether the condition happens or not, the result will be the same:\n` +
    `  - *Even if you try to reason with her, she won't come to her senses.*\n` +
    `  - *Even if electric vehicles improve, owning a gas-powered vehicle is more convenient.*\n\n` +
    `### 3. Unless (Equivalent to "If... not")\n` +
    `• **Meaning:** Describes a possible negative condition in the present or future (*a menos que / si no*).\n` +
    `• **Equivalence with If... not:**\n` +
    `  - *If you don't study, you won't get a good grade.* = *Unless you study, you won't get a good grade.*\n` +
    `  - *If you don't eat healthy, you will gain weight.* = *Unless you eat healthy, you will gain weight.*\n` +
    `• **Negotiations & Business:**\n` +
    `  - *We can't move forward in negotiations unless you give some concessions.*\n` +
    `  - *I won't buy the car unless you give me a better price.*\n` +
    `• ⚠️ **Grammar Tip:** Because *unless* already carries the negative meaning (*if not*), do NOT use a negative verb in the *unless*-clause (*Unless you study*, not *Unless you don't study*).`,

  'exercise.conditional-conjunctions.1.prompt': `Complete the condition clause expressing a mutual promise:`,
  'exercise.conditional-conjunctions.1.explanation': `"As long as" introduces a condition requirement: "As long as you promise to pay me back, I will loan you some money."`,
  'exercise.conditional-conjunctions.1.pro_tip': `Tip: "As long as" = provided that / on condition that.`,

  'exercise.conditional-conjunctions.2.prompt': `Complete the clause specifying the condition for staying:`,
  'exercise.conditional-conjunctions.2.explanation': `"provided that" introduces the condition: "I will allow you to stay provided that you keep your voice down."`,
  'exercise.conditional-conjunctions.2.pro_tip': `Tip: "provided that" + condition clause.`,

  'exercise.conditional-conjunctions.3.prompt': `In "On condition that you come back by 10:00 p.m., I will let you go to the party", what does "on condition that" express?`,
  'exercise.conditional-conjunctions.3.explanation': `"On condition that" sets a strict, specific requirement permitting the party only if met.`,
  'exercise.conditional-conjunctions.3.pro_tip': `Tip: "on condition that" sets an explicit requirement.`,

  'exercise.conditional-conjunctions.4.prompt': `True or False?`,
  'exercise.conditional-conjunctions.4.explanation': `True. "Only if", "provided that", and "as long as" indicate that no other condition will produce the outcome.`,
  'exercise.conditional-conjunctions.4.pro_tip': `Tip: exclusive conditional connectors restrict the result to one condition.`,

  'exercise.conditional-conjunctions.5.prompt': `Complete the clause stressing that the condition does not change the outcome:`,
  'exercise.conditional-conjunctions.5.explanation': `"Even if" stresses that regardless of whether you try to reason with her, she won't change her mind.`,
  'exercise.conditional-conjunctions.5.pro_tip': `Tip: "Even if" = whether or not / regardless of whether.`,

  'exercise.conditional-conjunctions.6.prompt': `Choose the correct verb form for the unchanging fact:`,
  'exercise.conditional-conjunctions.6.explanation': `"owning a gas-powered vehicle" is a singular gerund subject and takes "is": "owning a gas-powered vehicle is more convenient."`,
  'exercise.conditional-conjunctions.6.pro_tip': `Tip: gerund subject ("owning...") takes a singular verb.`,

  'exercise.conditional-conjunctions.7.prompt': `What does "Even if" stress in a conditional sentence?`,
  'exercise.conditional-conjunctions.7.explanation': `"Even if" emphasizes that the condition doesn't matter; the result will remain identical regardless.`,
  'exercise.conditional-conjunctions.7.pro_tip': `Tip: "even if" = outcome stays the same no matter what.`,

  'exercise.conditional-conjunctions.8.prompt': `True or False?`,
  'exercise.conditional-conjunctions.8.explanation': `False. "Even if" means her attitude will not change even if you try to reason with her.`,
  'exercise.conditional-conjunctions.8.pro_tip': `Tip: "even if" implies the condition will fail to alter the result.`,

  'exercise.conditional-conjunctions.9.prompt': `Rewrite the conditional sentence using "unless":`,
  'exercise.conditional-conjunctions.9.explanation': `"Unless you study, you won't get a good grade" is exactly equivalent to "If you don't study...".`,
  'exercise.conditional-conjunctions.9.pro_tip': `Tip: Unless = if...not.`,

  'exercise.conditional-conjunctions.10.prompt': `Complete the warning about diet and weight:`,
  'exercise.conditional-conjunctions.10.explanation': `The future result with "will" takes the base verb "gain": "Unless you eat healthy, you will gain weight."`,
  'exercise.conditional-conjunctions.10.pro_tip': `Tip: will + base verb (will gain).`,

  'exercise.conditional-conjunctions.11.prompt': `Which sentence is the exact equivalent of "If you don't eat healthy, you will gain weight"?`,
  'exercise.conditional-conjunctions.11.explanation': `"Unless you eat healthy, you will gain weight" correctly substitutes "If you don't" with "Unless" and an affirmative verb.`,
  'exercise.conditional-conjunctions.11.pro_tip': `Tip: "Unless you eat" replaces "If you don't eat".`,

  'exercise.conditional-conjunctions.12.prompt': `Reorder the words to form the warning with "Unless":`,
  'exercise.conditional-conjunctions.12.explanation': `"Unless you study, you won't get a good grade."`,
  'exercise.conditional-conjunctions.12.pro_tip': `Tip: Unless-clause with comma + result clause.`,

  'exercise.conditional-conjunctions.13.prompt': `Complete the business negotiation sentence:`,
  'exercise.conditional-conjunctions.13.explanation': `"unless" introduces the required condition: "We can't move forward in negotiations unless you give some concessions."`,
  'exercise.conditional-conjunctions.13.pro_tip': `Tip: can't move forward + unless + concessions given.`,

  'exercise.conditional-conjunctions.14.prompt': `Complete the conditional sentence permitting borrowing the car:`,
  'exercise.conditional-conjunctions.14.explanation': `"only if" specifies the single condition that permits borrowing the car.`,
  'exercise.conditional-conjunctions.14.pro_tip': `Tip: "only if" sets the sole acceptable condition.`,

  'exercise.conditional-conjunctions.15.prompt': `What does "I won't buy the car unless you give me a better price" mean?`,
  'exercise.conditional-conjunctions.15.explanation': `It means the speaker will buy the car ONLY IF a better price is given; otherwise, no purchase will happen.`,
  'exercise.conditional-conjunctions.15.pro_tip': `Tip: "won't buy unless" = will only buy if.`,

  'exercise.conditional-conjunctions.16.prompt': `Reorder the words to form the negotiation requirement:`,
  'exercise.conditional-conjunctions.16.explanation': `"I won't buy the car unless you give me a better price."`,
  'exercise.conditional-conjunctions.16.pro_tip': `Tip: Result clause + unless + condition clause.`,

  'exercise.conditional-conjunctions.17.prompt': `True or False?`,
  'exercise.conditional-conjunctions.17.explanation': `True. Because "unless" already contains the negative meaning of "if not", avoid double negatives like "unless you don't study".`,
  'exercise.conditional-conjunctions.17.pro_tip': `Tip: use affirmative verbs after "unless".`,

  'exercise.conditional-conjunctions.18.prompt': `Arrange the words to form the permission sentence with "On condition that":`,
  'exercise.conditional-conjunctions.18.explanation': `"On condition that you come back by 10:00 p.m., I will let you go."`,
  'exercise.conditional-conjunctions.18.pro_tip': `Tip: On condition that + condition clause, + result clause.`,

  'exercise.conditional-conjunctions.19.prompt': `Choose the sentence where the result is guaranteed to stay the same regardless of the condition:`,
  'exercise.conditional-conjunctions.19.explanation': `"Even if electric vehicles improve, owning a gas-powered vehicle is more convenient" uses "even if" to show that the outcome remains the same regardless.`,
  'exercise.conditional-conjunctions.19.pro_tip': `Tip: "even if" marks an outcome that doesn't change.`,

  'exercise.conditional-conjunctions.20.prompt': `Match each example sentence from the slides to its conditional function:`,
  'exercise.conditional-conjunctions.20.explanation': `As long as = required condition; only if = sole permission condition; Even if = result unchanged; Unless = negative condition (if not).`,
  'exercise.conditional-conjunctions.20.pro_tip': `Tip: identify the semantic role of each conditional connector.`,
};

const presentPerfectEverNeverEnExtras: Record<string, string> = {
  "exercise.present-perfect-ever-never.1.prompt": "Choose the correct negative response with \"never\":",
  "exercise.present-perfect-ever-never.1.explanation": "Use \"have never\" for a negative answer. Never say \"haven't never\" (double negative).",
  "exercise.present-perfect-ever-never.1.pro_tip": "Tip: have/has + never + past participle.",
  "exercise.present-perfect-ever-never.2.prompt": "Complete the negative answer with \"never\":",
  "exercise.present-perfect-ever-never.2.explanation": "\"I have never seen them\" correctly places \"never\" between \"have\" and the participle.",
  "exercise.present-perfect-ever-never.2.pro_tip": "Tip: auxiliary + never + past participle.",
  "exercise.present-perfect-ever-never.3.prompt": "Choose the correct 3rd person negative response:",
  "exercise.present-perfect-ever-never.3.explanation": "Third person singular takes \"has\": \"he has never flown in one\".",
  "exercise.present-perfect-ever-never.3.pro_tip": "Tip: he/she/it + has never + participle.",
  "exercise.present-perfect-ever-never.4.prompt": "Arrange the words to form a correct negative sentence:",
  "exercise.present-perfect-ever-never.4.explanation": "\"No, I have never eaten caviar.\"",
  "exercise.present-perfect-ever-never.4.pro_tip": "Tip: No, subject + have never + participle.",
  "exercise.present-perfect-ever-never.5.prompt": "Complete the negative short answer:",
  "exercise.present-perfect-ever-never.5.explanation": "Short answer for she/Elena: \"No, she hasn't.\"",
  "exercise.present-perfect-ever-never.5.pro_tip": "Tip: Has she...? → No, she hasn't.",
  "exercise.present-perfect-ever-never.6.prompt": "True or False?",
  "exercise.present-perfect-ever-never.6.explanation": "True. \"No, never\" is a natural, widely used conversational short answer.",
  "exercise.present-perfect-ever-never.6.pro_tip": "Tip: \"No, never\" is concise and natural in speech.",
  "exercise.present-perfect-ever-never.7.prompt": "Choose the correct affirmative answer with past details:",
  "exercise.present-perfect-ever-never.7.explanation": "Answer \"Yes, I have\" in present perfect, then give specific past details in simple past: \"I went there in 2021.\"",
  "exercise.present-perfect-ever-never.7.pro_tip": "Tip: switch to simple past when mentioning a specific past time.",
  "exercise.present-perfect-ever-never.8.prompt": "Complete the affirmative short answer:",
  "exercise.present-perfect-ever-never.8.explanation": "\"Yes, he has\" uses the auxiliary \"has\" for Carlos.",
  "exercise.present-perfect-ever-never.8.pro_tip": "Tip: Has Carlos...? → Yes, he has.",
  "exercise.present-perfect-ever-never.9.prompt": "Choose the correct affirmative short answer for \"we\":",
  "exercise.present-perfect-ever-never.9.explanation": "\"Yes, we have\" cannot be contracted to \"Yes, we've\" at the end of a sentence.",
  "exercise.present-perfect-ever-never.9.pro_tip": "Tip: never contract short affirmative answers (\"Yes, I have\", not \"Yes, I've\").",
  "exercise.present-perfect-ever-never.10.prompt": "Reorder the words to form the affirmative response with past detail:",
  "exercise.present-perfect-ever-never.10.explanation": "\"Yes, she has. She visited London last May.\"",
  "exercise.present-perfect-ever-never.10.pro_tip": "Tip: Yes, she has. + Past Simple sentence.",
  "exercise.present-perfect-ever-never.11.prompt": "Complete the specific past detail:",
  "exercise.present-perfect-ever-never.11.explanation": "Because a specific time is mentioned (\"two years ago\"), use the Simple Past \"lost\".",
  "exercise.present-perfect-ever-never.11.pro_tip": "Tip: specific time in the past = Simple Past.",
  "exercise.present-perfect-ever-never.12.prompt": "True or False?",
  "exercise.present-perfect-ever-never.12.explanation": "False. You cannot contract \"have\" in short affirmative answers. Say \"Yes, I have\", never \"Yes, I've\".",
  "exercise.present-perfect-ever-never.12.pro_tip": "Tip: no contractions in affirmative short answers.",
  "exercise.present-perfect-ever-never.13.prompt": "Choose the correct question about life experience:",
  "exercise.present-perfect-ever-never.13.explanation": "\"Have you ever eaten sushi?\" uses Have + subject + ever + past participle.",
  "exercise.present-perfect-ever-never.13.pro_tip": "Tip: Have you ever + past participle?",
  "exercise.present-perfect-ever-never.14.prompt": "Choose the correct 3rd person question:",
  "exercise.present-perfect-ever-never.14.explanation": "Maria is 3rd person singular, so the question starts with \"Has\": \"Has Maria ever climbed...?\"",
  "exercise.present-perfect-ever-never.14.pro_tip": "Tip: Has + he/she/name + ever + past participle?",
  "exercise.present-perfect-ever-never.15.prompt": "Complete the question about experience:",
  "exercise.present-perfect-ever-never.15.explanation": "Use \"Have\" with \"you\": \"Have you ever ridden...?\"",
  "exercise.present-perfect-ever-never.15.pro_tip": "Tip: Have with you/they/we.",
  "exercise.present-perfect-ever-never.16.prompt": "Arrange the words to form a correct question:",
  "exercise.present-perfect-ever-never.16.explanation": "\"Has he ever broken his arm?\"",
  "exercise.present-perfect-ever-never.16.pro_tip": "Tip: Has + subject + ever + participle + object?",
  "exercise.present-perfect-ever-never.17.prompt": "Complete the question with the past participle:",
  "exercise.present-perfect-ever-never.17.explanation": "\"driven\" is the past participle of drive (drive - drove - driven).",
  "exercise.present-perfect-ever-never.17.pro_tip": "Tip: drive → drove → driven.",
  "exercise.present-perfect-ever-never.18.prompt": "Choose the correct question format:",
  "exercise.present-perfect-ever-never.18.explanation": "\"Have you ever visited Australia?\" is the standard life experience question.",
  "exercise.present-perfect-ever-never.18.pro_tip": "Tip: \"ever\" means at any time in your life.",
  "exercise.present-perfect-ever-never.19.prompt": "Choose the grammatically correct dialogue:",
  "exercise.present-perfect-ever-never.19.explanation": "A: \"Has your sister ever lived abroad?\" B: \"No, she has never lived abroad.\"",
  "exercise.present-perfect-ever-never.19.pro_tip": "Tip: Has for sister; has never for negative response.",
  "exercise.present-perfect-ever-never.20.prompt": "Complete the question with the participle of \"meet\":",
  "exercise.present-perfect-ever-never.20.explanation": "\"met\" is the past participle of meet (meet - met - met).",
  "exercise.present-perfect-ever-never.20.pro_tip": "Tip: meet → met → met.",
  "exercise.present-perfect-ever-never.21.prompt": "Match each question to its natural response:",
  "exercise.present-perfect-ever-never.21.explanation": "Match each question with its appropriate answer.",
  "exercise.present-perfect-ever-never.21.pro_tip": "Tip: look at subject agreement and affirmative/negative auxiliaries.",
  "exercise.present-perfect-ever-never.22.prompt": "Arrange the words to form the question about camping:",
  "exercise.present-perfect-ever-never.22.explanation": "\"Have you ever slept in a tent?\"",
  "exercise.present-perfect-ever-never.22.pro_tip": "Tip: sleep → slept → slept.",
  "exercise.present-perfect-ever-never.23.prompt": "Complete the negative answer with the participle \"swum\":",
  "exercise.present-perfect-ever-never.23.explanation": "\"No, he has never swum in the ocean.\"",
  "exercise.present-perfect-ever-never.23.pro_tip": "Tip: swim → swam → swum.",
  "exercise.present-perfect-ever-never.24.prompt": "Choose the correct answer with past tense continuation:",
  "exercise.present-perfect-ever-never.24.explanation": "\"Yes, I have. I baked some sourdough last weekend.\"",
  "exercise.present-perfect-ever-never.24.pro_tip": "Tip: Yes, I have + simple past detail.",
};

const top1000IdiomsEnExtras: Record<string, string> = {
  "lesson.top-1000-idioms.title": "Top 1000 idioms",
  "lesson.top-1000-idioms.description": "40 fill-in-the-blank questions on the most common English idioms.",
  "lesson.top-1000-idioms.intro": "**Idioms** are short phrases whose meaning is not obvious from the individual words. The 40 idioms here are among the most common in everyday English; you will hear and read them constantly.",
  "exercise.top-1000-idioms.1.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.1.explanation": "\"Piece of cake\" means something that is very easy to do.",
  "exercise.top-1000-idioms.1.pro_tip": "Tip: body idioms (cold feet, under the weather, keep your chin up) are common in everyday conversation.",
  "exercise.top-1000-idioms.2.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.2.explanation": "\"Get cold feet\" means becoming nervous or hesitant right before doing something important.",
  "exercise.top-1000-idioms.2.pro_tip": "Tip: body idioms (cold feet, under the weather, keep your chin up) are common in everyday conversation.",
  "exercise.top-1000-idioms.3.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.3.explanation": "\"Keep your chin up\" means staying positive and courageous in a difficult situation.",
  "exercise.top-1000-idioms.3.pro_tip": "Tip: body idioms (cold feet, under the weather, keep your chin up) are common in everyday conversation.",
  "exercise.top-1000-idioms.4.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.4.explanation": "\"Pull yourself together\" means calming down and regaining control of your emotions.",
  "exercise.top-1000-idioms.4.pro_tip": "Tip: body idioms (cold feet, under the weather, keep your chin up) are common in everyday conversation.",
  "exercise.top-1000-idioms.5.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.5.explanation": "\"Cost an arm and a leg\" means being extremely expensive.",
  "exercise.top-1000-idioms.5.pro_tip": "Tip: body idioms (cold feet, under the weather, keep your chin up) are common in everyday conversation.",
  "exercise.top-1000-idioms.6.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.6.explanation": "\"Pull someone's leg\" means joking or teasing someone in a friendly way.",
  "exercise.top-1000-idioms.6.pro_tip": "Tip: body idioms (cold feet, under the weather, keep your chin up) are common in everyday conversation.",
  "exercise.top-1000-idioms.7.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.7.explanation": "\"Have a chip on your shoulder\" means holding a grudge or resentment from the past.",
  "exercise.top-1000-idioms.7.pro_tip": "Tip: body idioms (cold feet, under the weather, keep your chin up) are common in everyday conversation.",
  "exercise.top-1000-idioms.8.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.8.explanation": "\"Have your head in the clouds\" means daydreaming and not paying attention to what is happening around you.",
  "exercise.top-1000-idioms.8.pro_tip": "Tip: body idioms (cold feet, under the weather, keep your chin up) are common in everyday conversation.",
  "exercise.top-1000-idioms.9.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.9.explanation": "\"Bite the bullet\" means facing an unpleasant or difficult situation with courage.",
  "exercise.top-1000-idioms.9.pro_tip": "Tip: body idioms (cold feet, under the weather, keep your chin up) are common in everyday conversation.",
  "exercise.top-1000-idioms.10.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.10.explanation": "\"Break a leg!\" is a theatrical idiom used to wish a performer good luck.",
  "exercise.top-1000-idioms.10.pro_tip": "Tip: body idioms (cold feet, under the weather, keep your chin up) are common in everyday conversation.",
  "exercise.top-1000-idioms.11.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.11.explanation": "\"Hit the books\" means studying hard, especially for upcoming exams.",
  "exercise.top-1000-idioms.11.pro_tip": "Tip: business idioms (ballpark figure, back to the drawing board, on the same page) are essential in meetings.",
  "exercise.top-1000-idioms.12.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.12.explanation": "\"Back to the drawing board\" means starting over because the previous plan failed.",
  "exercise.top-1000-idioms.12.pro_tip": "Tip: business idioms (ballpark figure, back to the drawing board, on the same page) are essential in meetings.",
  "exercise.top-1000-idioms.13.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.13.explanation": "\"A ballpark figure\" is a rough numerical estimate rather than an exact figure.",
  "exercise.top-1000-idioms.13.pro_tip": "Tip: business idioms (ballpark figure, back to the drawing board, on the same page) are essential in meetings.",
  "exercise.top-1000-idioms.14.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.14.explanation": "\"The ball is in your court\" means it is now your turn to act or make a decision.",
  "exercise.top-1000-idioms.14.pro_tip": "Tip: business idioms (ballpark figure, back to the drawing board, on the same page) are essential in meetings.",
  "exercise.top-1000-idioms.15.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.15.explanation": "\"Cut to the chase\" means getting straight to the main point without wasting time.",
  "exercise.top-1000-idioms.15.pro_tip": "Tip: business idioms (ballpark figure, back to the drawing board, on the same page) are essential in meetings.",
  "exercise.top-1000-idioms.16.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.16.explanation": "\"Beat around the bush\" means avoiding the main topic by speaking indirectly.",
  "exercise.top-1000-idioms.16.pro_tip": "Tip: business idioms (ballpark figure, back to the drawing board, on the same page) are essential in meetings.",
  "exercise.top-1000-idioms.17.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.17.explanation": "\"Call it a day\" means deciding to stop working for the rest of the day.",
  "exercise.top-1000-idioms.17.pro_tip": "Tip: business idioms (ballpark figure, back to the drawing board, on the same page) are essential in meetings.",
  "exercise.top-1000-idioms.18.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.18.explanation": "\"On the same page\" means being in agreement and sharing the same understanding.",
  "exercise.top-1000-idioms.18.pro_tip": "Tip: business idioms (ballpark figure, back to the drawing board, on the same page) are essential in meetings.",
  "exercise.top-1000-idioms.19.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.19.explanation": "\"Get out of hand\" means becoming chaotic or out of control.",
  "exercise.top-1000-idioms.19.pro_tip": "Tip: business idioms (ballpark figure, back to the drawing board, on the same page) are essential in meetings.",
  "exercise.top-1000-idioms.20.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.20.explanation": "\"Play devil's advocate\" means arguing the opposite view to test an argument thoroughly.",
  "exercise.top-1000-idioms.20.pro_tip": "Tip: business idioms (ballpark figure, back to the drawing board, on the same page) are essential in meetings.",
  "exercise.top-1000-idioms.21.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.21.explanation": "\"Once in a blue moon\" means very rarely or almost never.",
  "exercise.top-1000-idioms.21.pro_tip": "Tip: once in a blue moon, kill two birds with one stone, miss the boat all deal with time or opportunity.",
  "exercise.top-1000-idioms.22.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.22.explanation": "\"In the nick of time\" means just in time, right before it would have been too late.",
  "exercise.top-1000-idioms.22.pro_tip": "Tip: once in a blue moon, kill two birds with one stone, miss the boat all deal with time or opportunity.",
  "exercise.top-1000-idioms.23.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.23.explanation": "\"Around the clock\" means twenty-four hours a day, continuously.",
  "exercise.top-1000-idioms.23.pro_tip": "Tip: once in a blue moon, kill two birds with one stone, miss the boat all deal with time or opportunity.",
  "exercise.top-1000-idioms.24.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.24.explanation": "\"On the spur of the moment\" means spontaneously, without planning ahead.",
  "exercise.top-1000-idioms.24.pro_tip": "Tip: once in a blue moon, kill two birds with one stone, miss the boat all deal with time or opportunity.",
  "exercise.top-1000-idioms.25.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.25.explanation": "\"At the drop of a hat\" means immediately and without any hesitation.",
  "exercise.top-1000-idioms.25.pro_tip": "Tip: once in a blue moon, kill two birds with one stone, miss the boat all deal with time or opportunity.",
  "exercise.top-1000-idioms.26.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.26.explanation": "\"Behind the times\" means old-fashioned or out of date.",
  "exercise.top-1000-idioms.26.pro_tip": "Tip: once in a blue moon, kill two birds with one stone, miss the boat all deal with time or opportunity.",
  "exercise.top-1000-idioms.27.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.27.explanation": "\"For the time being\" means temporarily or for now.",
  "exercise.top-1000-idioms.27.pro_tip": "Tip: once in a blue moon, kill two birds with one stone, miss the boat all deal with time or opportunity.",
  "exercise.top-1000-idioms.28.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.28.explanation": "\"In the long run\" means over a long period of time in the future.",
  "exercise.top-1000-idioms.28.pro_tip": "Tip: once in a blue moon, kill two birds with one stone, miss the boat all deal with time or opportunity.",
  "exercise.top-1000-idioms.29.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.29.explanation": "\"At the eleventh hour\" means at the last possible moment before a deadline.",
  "exercise.top-1000-idioms.29.pro_tip": "Tip: once in a blue moon, kill two birds with one stone, miss the boat all deal with time or opportunity.",
  "exercise.top-1000-idioms.30.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.30.explanation": "\"Down to the wire\" means until the very last second, with an uncertain outcome.",
  "exercise.top-1000-idioms.30.pro_tip": "Tip: once in a blue moon, kill two birds with one stone, miss the boat all deal with time or opportunity.",
  "exercise.top-1000-idioms.31.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.31.explanation": "\"Under the weather\" means feeling slightly sick or unwell.",
  "exercise.top-1000-idioms.31.pro_tip": "Tip: on cloud nine, get out of hand, speak of the devil are common in casual conversation about people and feelings.",
  "exercise.top-1000-idioms.32.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.32.explanation": "\"On cloud nine\" means feeling extremely happy and elated.",
  "exercise.top-1000-idioms.32.pro_tip": "Tip: on cloud nine, get out of hand, speak of the devil are common in casual conversation about people and feelings.",
  "exercise.top-1000-idioms.33.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.33.explanation": "\"Spill the beans\" means revealing a secret, often prematurely.",
  "exercise.top-1000-idioms.33.pro_tip": "Tip: on cloud nine, get out of hand, speak of the devil are common in casual conversation about people and feelings.",
  "exercise.top-1000-idioms.34.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.34.explanation": "\"Let the cat out of the bag\" means accidentally revealing a hidden secret.",
  "exercise.top-1000-idioms.34.pro_tip": "Tip: on cloud nine, get out of hand, speak of the devil are common in casual conversation about people and feelings.",
  "exercise.top-1000-idioms.35.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.35.explanation": "\"In hot water\" means being in trouble or facing difficulty.",
  "exercise.top-1000-idioms.35.pro_tip": "Tip: on cloud nine, get out of hand, speak of the devil are common in casual conversation about people and feelings.",
  "exercise.top-1000-idioms.36.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.36.explanation": "\"See eye to eye\" means agreeing with someone and sharing the same opinion.",
  "exercise.top-1000-idioms.36.pro_tip": "Tip: on cloud nine, get out of hand, speak of the devil are common in casual conversation about people and feelings.",
  "exercise.top-1000-idioms.37.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.37.explanation": "\"Speak of the devil\" is said when the person you were just talking about walks in.",
  "exercise.top-1000-idioms.37.pro_tip": "Tip: on cloud nine, get out of hand, speak of the devil are common in casual conversation about people and feelings.",
  "exercise.top-1000-idioms.38.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.38.explanation": "\"Rain on someone's parade\" means spoiling someone's happy moment or plans.",
  "exercise.top-1000-idioms.38.pro_tip": "Tip: on cloud nine, get out of hand, speak of the devil are common in casual conversation about people and feelings.",
  "exercise.top-1000-idioms.39.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.39.explanation": "\"The best of both worlds\" means enjoying two different advantages at the same time.",
  "exercise.top-1000-idioms.39.pro_tip": "Tip: on cloud nine, get out of hand, speak of the devil are common in casual conversation about people and feelings.",
  "exercise.top-1000-idioms.40.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-idioms.40.explanation": "\"Miss the boat\" means losing an opportunity because you acted too slowly.",
  "exercise.top-1000-idioms.40.pro_tip": "Tip: on cloud nine, get out of hand, speak of the devil are common in casual conversation about people and feelings.",
};

const top1000GerundsEnExtras: Record<string, string> = {
  "lesson.top-1000-gerunds.title": "Top 1000 gerunds (verb + -ing)",
  "lesson.top-1000-gerunds.description": "40 fill-in-the-blank questions on common verbs that take a gerund (verb+ing) or an infinitive (to+verb).",
  "lesson.top-1000-gerunds.intro": "Many common English verbs are followed by a **gerund** (verb+ing) instead of a to-infinitive. Some verbs take both with different meanings. This lesson drills the 1000 most common patterns.",
  "exercise.top-1000-gerunds.1.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.1.explanation": "After the verb \"enjoy\", always use a gerund (-ing): \"enjoy listening\" (never \"enjoy to listen\").",
  "exercise.top-1000-gerunds.1.pro_tip": "Tip: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up all take a gerund.",
  "exercise.top-1000-gerunds.2.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.2.explanation": "The verb \"avoid\" is always followed by a gerund (-ing): \"avoids eating\".",
  "exercise.top-1000-gerunds.2.pro_tip": "Tip: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up all take a gerund.",
  "exercise.top-1000-gerunds.3.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.3.explanation": "The verb \"finish\" takes a gerund (-ing) as its object: \"finished writing\".",
  "exercise.top-1000-gerunds.3.pro_tip": "Tip: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up all take a gerund.",
  "exercise.top-1000-gerunds.4.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.4.explanation": "After \"mind\" (\"Would you mind...?\"), always use the -ing form: \"mind closing\".",
  "exercise.top-1000-gerunds.4.pro_tip": "Tip: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up all take a gerund.",
  "exercise.top-1000-gerunds.5.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.5.explanation": "\"Keep\" meaning \"continue\" is followed by a gerund (-ing): \"keeps making\".",
  "exercise.top-1000-gerunds.5.pro_tip": "Tip: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up all take a gerund.",
  "exercise.top-1000-gerunds.6.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.6.explanation": "\"Suggest\" takes a gerund (-ing) directly after it: \"suggested taking\" (not \"suggested to take\").",
  "exercise.top-1000-gerunds.6.pro_tip": "Tip: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up all take a gerund.",
  "exercise.top-1000-gerunds.7.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.7.explanation": "The verb \"risk\" is always followed by a gerund (-ing): \"risk losing\".",
  "exercise.top-1000-gerunds.7.pro_tip": "Tip: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up all take a gerund.",
  "exercise.top-1000-gerunds.8.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.8.explanation": "\"Postpone\" takes a gerund (-ing) as its object: \"postponed having\".",
  "exercise.top-1000-gerunds.8.pro_tip": "Tip: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up all take a gerund.",
  "exercise.top-1000-gerunds.9.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.9.explanation": "\"Admit\" is followed by a gerund (-ing): \"admitted giving\".",
  "exercise.top-1000-gerunds.9.pro_tip": "Tip: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up all take a gerund.",
  "exercise.top-1000-gerunds.10.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.10.explanation": "\"Quit\" meaning \"give up a habit\" takes a gerund (-ing): \"quit drinking\".",
  "exercise.top-1000-gerunds.10.pro_tip": "Tip: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up all take a gerund.",
  "exercise.top-1000-gerunds.11.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.11.explanation": "The verb \"want\" takes a to-infinitive: \"want to buy\".",
  "exercise.top-1000-gerunds.11.pro_tip": "Tip: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose all take a to-infinitive.",
  "exercise.top-1000-gerunds.12.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.12.explanation": "After \"decide\", use a to-infinitive: \"decided to call\".",
  "exercise.top-1000-gerunds.12.pro_tip": "Tip: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose all take a to-infinitive.",
  "exercise.top-1000-gerunds.13.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.13.explanation": "\"Promise\" is followed by a to-infinitive: \"promised to arrive\".",
  "exercise.top-1000-gerunds.13.pro_tip": "Tip: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose all take a to-infinitive.",
  "exercise.top-1000-gerunds.14.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.14.explanation": "Here \"need\" expresses necessity by the subject and takes a to-infinitive: \"need to find\".",
  "exercise.top-1000-gerunds.14.pro_tip": "Tip: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose all take a to-infinitive.",
  "exercise.top-1000-gerunds.15.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.15.explanation": "\"Hope\" is always followed by a to-infinitive: \"hope to play\".",
  "exercise.top-1000-gerunds.15.pro_tip": "Tip: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose all take a to-infinitive.",
  "exercise.top-1000-gerunds.16.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.16.explanation": "\"Refuse\" takes a to-infinitive: \"refused to take\".",
  "exercise.top-1000-gerunds.16.pro_tip": "Tip: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose all take a to-infinitive.",
  "exercise.top-1000-gerunds.17.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.17.explanation": "\"Agree\" is followed by a to-infinitive: \"agreed to follow\".",
  "exercise.top-1000-gerunds.17.pro_tip": "Tip: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose all take a to-infinitive.",
  "exercise.top-1000-gerunds.18.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.18.explanation": "\"Expect\" takes a to-infinitive: \"expect to receive\".",
  "exercise.top-1000-gerunds.18.pro_tip": "Tip: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose all take a to-infinitive.",
  "exercise.top-1000-gerunds.19.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.19.explanation": "\"Offer\" takes a to-infinitive: \"offered to drive\".",
  "exercise.top-1000-gerunds.19.pro_tip": "Tip: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose all take a to-infinitive.",
  "exercise.top-1000-gerunds.20.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.20.explanation": "\"Plan\" takes a to-infinitive for future intentions: \"plan to build\".",
  "exercise.top-1000-gerunds.20.pro_tip": "Tip: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose all take a to-infinitive.",
  "exercise.top-1000-gerunds.21.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.21.explanation": "\"Remember + -ing\" (\"remember locking\") refers to a memory of an action already done in the past.",
  "exercise.top-1000-gerunds.21.pro_tip": "Tip: remember, forget, stop, try, regret, go on, mean are common. \"Stop smoking\" = quit. \"Stop to smoke\" = paused to smoke.",
  "exercise.top-1000-gerunds.22.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.22.explanation": "\"Stop + -ing\" (\"stopped drinking\") means quitting an activity or habit completely.",
  "exercise.top-1000-gerunds.22.pro_tip": "Tip: remember, forget, stop, try, regret, go on, mean are common. \"Stop smoking\" = quit. \"Stop to smoke\" = paused to smoke.",
  "exercise.top-1000-gerunds.23.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.23.explanation": "\"Try + -ing\" (\"tried opening\") means testing a method or experiment to see whether it works.",
  "exercise.top-1000-gerunds.23.pro_tip": "Tip: remember, forget, stop, try, regret, go on, mean are common. \"Stop smoking\" = quit. \"Stop to smoke\" = paused to smoke.",
  "exercise.top-1000-gerunds.24.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.24.explanation": "\"Forget + -ing\" (\"forget seeing\") looks back at a memorable past experience.",
  "exercise.top-1000-gerunds.24.pro_tip": "Tip: remember, forget, stop, try, regret, go on, mean are common. \"Stop smoking\" = quit. \"Stop to smoke\" = paused to smoke.",
  "exercise.top-1000-gerunds.25.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.25.explanation": "\"Regret to inform\" uses the infinitive when formally announcing bad news right now (whereas \"regret + -ing\" looks back at the past).",
  "exercise.top-1000-gerunds.25.pro_tip": "Tip: remember, forget, stop, try, regret, go on, mean are common. \"Stop smoking\" = quit. \"Stop to smoke\" = paused to smoke.",
  "exercise.top-1000-gerunds.26.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.26.explanation": "\"Go on + to-infinitive\" (\"went on to win\") means moving on to achieve or do something new next.",
  "exercise.top-1000-gerunds.26.pro_tip": "Tip: remember, forget, stop, try, regret, go on, mean are common. \"Stop smoking\" = quit. \"Stop to smoke\" = paused to smoke.",
  "exercise.top-1000-gerunds.27.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.27.explanation": "\"Mean + -ing\" (\"meant leaving\") expresses that one situation involves another as a necessary consequence.",
  "exercise.top-1000-gerunds.27.pro_tip": "Tip: remember, forget, stop, try, regret, go on, mean are common. \"Stop smoking\" = quit. \"Stop to smoke\" = paused to smoke.",
  "exercise.top-1000-gerunds.28.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.28.explanation": "\"Stop + to-infinitive\" (\"stopped to talk\") means pausing one action in order to do another.",
  "exercise.top-1000-gerunds.28.pro_tip": "Tip: remember, forget, stop, try, regret, go on, mean are common. \"Stop smoking\" = quit. \"Stop to smoke\" = paused to smoke.",
  "exercise.top-1000-gerunds.29.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.29.explanation": "\"Regret + -ing\" (\"regret taking\") refers to feeling sorry (or not sorry) about something already done in the past.",
  "exercise.top-1000-gerunds.29.pro_tip": "Tip: remember, forget, stop, try, regret, go on, mean are common. \"Stop smoking\" = quit. \"Stop to smoke\" = paused to smoke.",
  "exercise.top-1000-gerunds.30.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.30.explanation": "\"Go on + to-infinitive\" (\"went on to explain\") means transitioning to the next topic or stage.",
  "exercise.top-1000-gerunds.30.pro_tip": "Tip: remember, forget, stop, try, regret, go on, mean are common. \"Stop smoking\" = quit. \"Stop to smoke\" = paused to smoke.",
  "exercise.top-1000-gerunds.31.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.31.explanation": "In \"be used to\", \"to\" is a preposition, so it must be followed by a gerund (-ing): \"used to waking\".",
  "exercise.top-1000-gerunds.31.pro_tip": "Tip: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to all take a gerund.",
  "exercise.top-1000-gerunds.32.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.32.explanation": "The expression \"be worth\" is always followed by a gerund (-ing): \"worth reading\".",
  "exercise.top-1000-gerunds.32.pro_tip": "Tip: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to all take a gerund.",
  "exercise.top-1000-gerunds.33.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.33.explanation": "In \"look forward to\", \"to\" is a preposition, so it takes a gerund (-ing): \"look forward to hearing\".",
  "exercise.top-1000-gerunds.33.pro_tip": "Tip: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to all take a gerund.",
  "exercise.top-1000-gerunds.34.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.34.explanation": "The adjective \"busy\" is followed directly by a gerund (-ing): \"busy preparing\".",
  "exercise.top-1000-gerunds.34.pro_tip": "Tip: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to all take a gerund.",
  "exercise.top-1000-gerunds.35.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.35.explanation": "\"Spend + time + -ing\" is a fixed pattern: \"spent the whole afternoon walking\".",
  "exercise.top-1000-gerunds.35.pro_tip": "Tip: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to all take a gerund.",
  "exercise.top-1000-gerunds.36.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.36.explanation": "\"Have trouble / difficulty\" is followed by a gerund (-ing): \"have any trouble opening\".",
  "exercise.top-1000-gerunds.36.pro_tip": "Tip: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to all take a gerund.",
  "exercise.top-1000-gerunds.37.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.37.explanation": "\"There is no point in\" ends with the preposition \"in\", which requires a gerund (-ing): \"in worrying\".",
  "exercise.top-1000-gerunds.37.pro_tip": "Tip: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to all take a gerund.",
  "exercise.top-1000-gerunds.38.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.38.explanation": "The fixed expression \"It is no use\" is always followed by a gerund (-ing): \"no use crying\".",
  "exercise.top-1000-gerunds.38.pro_tip": "Tip: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to all take a gerund.",
  "exercise.top-1000-gerunds.39.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.39.explanation": "In \"be accustomed to\", \"to\" is a preposition and takes a gerund (-ing): \"accustomed to eating\".",
  "exercise.top-1000-gerunds.39.pro_tip": "Tip: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to all take a gerund.",
  "exercise.top-1000-gerunds.40.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.top-1000-gerunds.40.explanation": "\"Have fun / a good time\" is followed by a gerund (-ing): \"had great fun playing\".",
  "exercise.top-1000-gerunds.40.pro_tip": "Tip: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to all take a gerund.",
};

const whWordsEnExtras: Record<string, string> = {
  "wh.wh-words-why.title": "Why questions",
  "wh.wh-words-why.description": "20 questions using \"why\" to ask for a reason or cause.",
  "wh.wh-words-why.intro": "**Why** asks for a reason or cause. The expected answer usually starts with \"because\".",
  "exercise.wh-words.1.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.1.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"Because I lost my keys.\") explains why.",
  "exercise.wh-words.1.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.2.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.2.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"I was busy at work.\") explains why.",
  "exercise.wh-words.2.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.3.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.3.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"Because of how light scatters in the atmosphere.\") explains why.",
  "exercise.wh-words.3.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.4.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.4.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"Because the joke was so silly.\") explains why.",
  "exercise.wh-words.4.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.5.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.5.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"To stay healthy.\") explains why.",
  "exercise.wh-words.5.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.6.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.6.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"He got a better offer.\") explains why.",
  "exercise.wh-words.6.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.7.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.7.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"I stayed up late studying.\") explains why.",
  "exercise.wh-words.7.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.8.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.8.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"There was an accident.\") explains why.",
  "exercise.wh-words.8.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.9.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.9.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"Because it’s cold outside.\") explains why.",
  "exercise.wh-words.9.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.10.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.10.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"She didn’t study enough.\") explains why.",
  "exercise.wh-words.10.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.11.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.11.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"The owner is in a meeting.\") explains why.",
  "exercise.wh-words.11.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.12.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.12.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"I got a new job there.\") explains why.",
  "exercise.wh-words.12.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.13.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.13.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"It lost money for years.\") explains why.",
  "exercise.wh-words.13.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.14.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.14.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"I want to travel more.\") explains why.",
  "exercise.wh-words.14.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.15.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.15.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"He has trouble waking up early.\") explains why.",
  "exercise.wh-words.15.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.16.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.16.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"Maybe she had a bad day.\") explains why.",
  "exercise.wh-words.16.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.17.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.17.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"We missed the RSVP date.\") explains why.",
  "exercise.wh-words.17.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.18.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.18.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"There’s construction on Main Street.\") explains why.",
  "exercise.wh-words.18.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.19.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.19.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"I’m a vegetarian.\") explains why.",
  "exercise.wh-words.19.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "exercise.wh-words.20.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.20.explanation": "Use \"why\" to ask for a reason or cause — here the reply (\"The server ran out of memory.\") explains why.",
  "exercise.wh-words.20.pro_tip": "Tip: if the answer would start with \"because...\", the question starts with \"why\".",
  "wh.wh-words-how.title": "How questions",
  "wh.wh-words-how.description": "20 questions using \"how\" to ask about manner, method, or state.",
  "wh.wh-words-how.intro": "**How** asks for a manner, method, or state. The expected answer describes the way something is done.",
  "exercise.wh-words.21.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.21.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"I take the bus.\") explains how.",
  "exercise.wh-words.21.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.22.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.22.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"You tap the button.\") explains how.",
  "exercise.wh-words.22.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.23.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.23.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"I restarted the computer.\") explains how.",
  "exercise.wh-words.23.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.24.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.24.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"I’m looking for a gift.\") explains how.",
  "exercise.wh-words.24.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.25.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.25.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"Slowly, please.\") explains how.",
  "exercise.wh-words.25.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.26.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.26.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"My mom taught me.\") explains how.",
  "exercise.wh-words.26.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.27.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.27.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"In a pot on the stove.\") explains how.",
  "exercise.wh-words.27.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.28.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.28.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"With a spoon.\") explains how.",
  "exercise.wh-words.28.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.29.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.29.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"Much better, thanks.\") explains how.",
  "exercise.wh-words.29.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.30.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.30.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"By text and email.\") explains how.",
  "exercise.wh-words.30.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.31.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.31.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"Double-click the icon.\") explains how.",
  "exercise.wh-words.31.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.32.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.32.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"I read it in the book.\") explains how.",
  "exercise.wh-words.32.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.33.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.33.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"They were surprised.\") explains how.",
  "exercise.wh-words.33.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.34.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.34.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"Use the app or go to the bank.\") explains how.",
  "exercise.wh-words.34.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.35.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.35.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"It has five stars.\") explains how.",
  "exercise.wh-words.35.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.36.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.36.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"He grilled it.\") explains how.",
  "exercise.wh-words.36.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.37.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.37.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"M-A-R-Y.\") explains how.",
  "exercise.wh-words.37.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.38.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.38.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"Press the red button.\") explains how.",
  "exercise.wh-words.38.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.39.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.39.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"With cold water and soap.\") explains how.",
  "exercise.wh-words.39.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "exercise.wh-words.40.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.40.explanation": "Use \"how\" to ask about manner, method, or condition — here the reply (\"From a colleague.\") explains how.",
  "exercise.wh-words.40.pro_tip": "Tip: \"how\" expects a manner or tool, e.g. \"by bus\", \"with a spoon\".",
  "wh.wh-words-how-long.title": "How long questions",
  "wh.wh-words-how-long.description": "20 questions using \"how long\" to ask about a duration of time.",
  "wh.wh-words-how-long.intro": "**How long** asks for a duration: minutes, hours, days, years, or \"since when\".",
  "exercise.wh-words.41.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.41.explanation": "Use \"how long\" to ask about duration — here the reply (\"For ten years.\") gives the length of time.",
  "exercise.wh-words.41.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.42.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.42.explanation": "Use \"how long\" to ask about duration — here the reply (\"About two hours.\") gives the length of time.",
  "exercise.wh-words.42.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.43.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.43.explanation": "Use \"how long\" to ask about duration — here the reply (\"Roughly forty-five minutes.\") gives the length of time.",
  "exercise.wh-words.43.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.44.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.44.explanation": "Use \"how long\" to ask about duration — here the reply (\"Since eight o’clock.\") gives the length of time.",
  "exercise.wh-words.44.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.45.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.45.explanation": "Use \"how long\" to ask about duration — here the reply (\"About seven hours.\") gives the length of time.",
  "exercise.wh-words.45.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.46.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.46.explanation": "Use \"how long\" to ask about duration — here the reply (\"For 30 minutes.\") gives the length of time.",
  "exercise.wh-words.46.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.47.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.47.explanation": "Use \"how long\" to ask about duration — here the reply (\"Two years from purchase.\") gives the length of time.",
  "exercise.wh-words.47.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.48.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.48.explanation": "Use \"how long\" to ask about duration — here the reply (\"A few months.\") gives the length of time.",
  "exercise.wh-words.48.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.49.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.49.explanation": "Use \"how long\" to ask about duration — here the reply (\"Since high school.\") gives the length of time.",
  "exercise.wh-words.49.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.50.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.50.explanation": "Use \"how long\" to ask about duration — here the reply (\"A minimum of one week.\") gives the length of time.",
  "exercise.wh-words.50.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.51.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.51.explanation": "Use \"how long\" to ask about duration — here the reply (\"Twenty-four hours.\") gives the length of time.",
  "exercise.wh-words.51.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.52.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.52.explanation": "Use \"how long\" to ask about duration — here the reply (\"Almost five years.\") gives the length of time.",
  "exercise.wh-words.52.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.53.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.53.explanation": "Use \"how long\" to ask about duration — here the reply (\"Twelve weeks in total.\") gives the length of time.",
  "exercise.wh-words.53.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.54.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.54.explanation": "Use \"how long\" to ask about duration — here the reply (\"Just the weekend.\") gives the length of time.",
  "exercise.wh-words.54.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.55.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.55.explanation": "Use \"how long\" to ask about duration — here the reply (\"Thirty minutes.\") gives the length of time.",
  "exercise.wh-words.55.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.56.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.56.explanation": "Use \"how long\" to ask about duration — here the reply (\"About a week.\") gives the length of time.",
  "exercise.wh-words.56.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.57.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.57.explanation": "Use \"how long\" to ask about duration — here the reply (\"Three more months.\") gives the length of time.",
  "exercise.wh-words.57.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.58.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.58.explanation": "Use \"how long\" to ask about duration — here the reply (\"Two full days.\") gives the length of time.",
  "exercise.wh-words.58.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.59.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.59.explanation": "Use \"how long\" to ask about duration — here the reply (\"At least an hour.\") gives the length of time.",
  "exercise.wh-words.59.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "exercise.wh-words.60.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.60.explanation": "Use \"how long\" to ask about duration — here the reply (\"For six months.\") gives the length of time.",
  "exercise.wh-words.60.pro_tip": "Tip: \"how long\" expects a duration (10 minutes, 3 years), not a number of countable things.",
  "wh.wh-words-how-many.title": "How many / How much questions",
  "wh.wh-words-how-many.description": "20 questions using \"how many\" or \"how much\" to ask about quantity.",
  "wh.wh-words-how-many.intro": "**How many** asks for a count (countable nouns); **how much** asks for an amount (uncountable nouns).",
  "exercise.wh-words.61.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.61.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"About twelve.\".",
  "exercise.wh-words.61.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.62.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.62.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Around two million.\".",
  "exercise.wh-words.62.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.63.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.63.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Three fluently.\".",
  "exercise.wh-words.63.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.64.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.64.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Three or four.\".",
  "exercise.wh-words.64.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.65.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.65.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Two.\".",
  "exercise.wh-words.65.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.66.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.66.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Three.\".",
  "exercise.wh-words.66.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.67.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.67.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Twenty-five.\".",
  "exercise.wh-words.67.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.68.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.68.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"One brother and one sister.\".",
  "exercise.wh-words.68.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.69.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.69.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"A dozen or so.\".",
  "exercise.wh-words.69.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.70.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.70.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Twelve.\".",
  "exercise.wh-words.70.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.71.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.71.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Maybe twenty.\".",
  "exercise.wh-words.71.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.72.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.72.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Six for the table.\".",
  "exercise.wh-words.72.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.73.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.73.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Fifty.\".",
  "exercise.wh-words.73.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.74.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.74.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Seven.\".",
  "exercise.wh-words.74.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.75.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.75.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Twice.\".",
  "exercise.wh-words.75.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.76.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.76.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Eleven.\".",
  "exercise.wh-words.76.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.77.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.77.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Seven.\".",
  "exercise.wh-words.77.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.78.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.78.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Two.\".",
  "exercise.wh-words.78.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.79.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.79.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"One cat and one dog.\".",
  "exercise.wh-words.79.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "exercise.wh-words.80.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.80.explanation": "Use \"how many\" with plural countable nouns to ask for a quantity — here the answer is \"Around fifteen.\".",
  "exercise.wh-words.80.pro_tip": "Tip: \"how many\" + plural countable; \"how much\" + uncountable or money/price.",
  "wh.wh-words-when.title": "When questions",
  "wh.wh-words-when.description": "20 questions using \"when\" to ask about a point or period of time.",
  "wh.wh-words-when.intro": "**When** asks for a time: a date, a year, a time of day, a season, or a frequency.",
  "exercise.wh-words.81.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.81.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"At nine in the morning.\") tells when.",
  "exercise.wh-words.81.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.82.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.82.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"Last night around ten.\") tells when.",
  "exercise.wh-words.82.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.83.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.83.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"Tomorrow at 3 pm.\") tells when.",
  "exercise.wh-words.83.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.84.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.84.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"In July.\") tells when.",
  "exercise.wh-words.84.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.85.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.85.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"In 1995.\") tells when.",
  "exercise.wh-words.85.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.86.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.86.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"Every hour on the hour.\") tells when.",
  "exercise.wh-words.86.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.87.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.87.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"On the 14th of May.\") tells when.",
  "exercise.wh-words.87.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.88.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.88.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"Last weekend.\") tells when.",
  "exercise.wh-words.88.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.89.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.89.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"By Friday.\") tells when.",
  "exercise.wh-words.89.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.90.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.90.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"In September.\") tells when.",
  "exercise.wh-words.90.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.91.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.91.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"In an hour.\") tells when.",
  "exercise.wh-words.91.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.92.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.92.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"After meals.\") tells when.",
  "exercise.wh-words.92.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.93.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.93.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"This morning.\") tells when.",
  "exercise.wh-words.93.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.94.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.94.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"Every two years.\") tells when.",
  "exercise.wh-words.94.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.95.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.95.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"At 6:45.\") tells when.",
  "exercise.wh-words.95.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.96.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.96.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"Around noon.\") tells when.",
  "exercise.wh-words.96.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.97.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.97.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"In 1945.\") tells when.",
  "exercise.wh-words.97.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.98.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.98.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"In a couple of hours.\") tells when.",
  "exercise.wh-words.98.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.99.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.99.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"Spring or fall.\") tells when.",
  "exercise.wh-words.99.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "exercise.wh-words.100.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.100.explanation": "Use \"when\" to ask about a point in time or schedule — here the reply (\"On Mondays.\") tells when.",
  "exercise.wh-words.100.pro_tip": "Tip: \"when\" accepts a time, a date, or a frequency (every Monday).",
  "wh.wh-words-where.title": "Where questions",
  "wh.wh-words-where.description": "20 questions using \"where\" to ask about a place or direction.",
  "wh.wh-words-where.intro": "**Where** asks for a place: a city, a room, a direction, or a location.",
  "exercise.wh-words.101.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.101.explanation": "Use \"where\" to ask about a place or location — here the reply (\"In a small town near the coast.\") tells where.",
  "exercise.wh-words.101.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.102.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.102.explanation": "Use \"where\" to ask about a place or location — here the reply (\"Two blocks away.\") tells where.",
  "exercise.wh-words.102.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.103.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.103.explanation": "Use \"where\" to ask about a place or location — here the reply (\"On the kitchen counter.\") tells where.",
  "exercise.wh-words.103.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.104.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.104.explanation": "Use \"where\" to ask about a place or location — here the reply (\"In conference room B.\") tells where.",
  "exercise.wh-words.104.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.105.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.105.explanation": "Use \"where\" to ask about a place or location — here the reply (\"I’m from Brazil.\") tells where.",
  "exercise.wh-words.105.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.106.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.106.explanation": "Use \"where\" to ask about a place or location — here the reply (\"In a small village.\") tells where.",
  "exercise.wh-words.106.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.107.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.107.explanation": "Use \"where\" to ask about a place or location — here the reply (\"At the counter or online.\") tells where.",
  "exercise.wh-words.107.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.108.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.108.explanation": "Use \"where\" to ask about a place or location — here the reply (\"Just around the corner.\") tells where.",
  "exercise.wh-words.108.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.109.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.109.explanation": "Use \"where\" to ask about a place or location — here the reply (\"In the garage behind the building.\") tells where.",
  "exercise.wh-words.109.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.110.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.110.explanation": "Use \"where\" to ask about a place or location — here the reply (\"In a safe at home.\") tells where.",
  "exercise.wh-words.110.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.111.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.111.explanation": "Use \"where\" to ask about a place or location — here the reply (\"At the corner of 5th and Main.\") tells where.",
  "exercise.wh-words.111.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.112.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.112.explanation": "Use \"where\" to ask about a place or location — here the reply (\"He’s in the backyard.\") tells where.",
  "exercise.wh-words.112.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.113.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.113.explanation": "Use \"where\" to ask about a place or location — here the reply (\"They were on the table.\") tells where.",
  "exercise.wh-words.113.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.114.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.114.explanation": "Use \"where\" to ask about a place or location — here the reply (\"Try the old town.\") tells where.",
  "exercise.wh-words.114.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.115.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.115.explanation": "Use \"where\" to ask about a place or location — here the reply (\"Next to the bank.\") tells where.",
  "exercise.wh-words.115.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.116.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.116.explanation": "Use \"where\" to ask about a place or location — here the reply (\"About ten minutes away.\") tells where.",
  "exercise.wh-words.116.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.117.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.117.explanation": "Use \"where\" to ask about a place or location — here the reply (\"At the office.\") tells where.",
  "exercise.wh-words.117.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.118.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.118.explanation": "Use \"where\" to ask about a place or location — here the reply (\"How about that new place on 5th?\") tells where.",
  "exercise.wh-words.118.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.119.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.119.explanation": "Use \"where\" to ask about a place or location — here the reply (\"The lake up north.\") tells where.",
  "exercise.wh-words.119.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "exercise.wh-words.120.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.120.explanation": "Use \"where\" to ask about a place or location — here the reply (\"By the front door.\") tells where.",
  "exercise.wh-words.120.pro_tip": "Tip: \"where\" expects a place, room, city, or direction.",
  "wh.wh-words-who.title": "Who questions",
  "wh.wh-words-who.description": "20 questions using \"who\" to ask about a person.",
  "wh.wh-words-who.intro": "**Who** asks for a person: the subject, the object, or the agent of an action.",
  "exercise.wh-words.121.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.121.explanation": "Use \"who\" to ask about a person — here the reply (\"My uncle.\") identifies who.",
  "exercise.wh-words.121.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.122.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.122.explanation": "Use \"who\" to ask about a person — here the reply (\"I don’t know the author.\") identifies who.",
  "exercise.wh-words.122.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.123.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.123.explanation": "Use \"who\" to ask about a person — here the reply (\"A couple of friends.\") identifies who.",
  "exercise.wh-words.123.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.124.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.124.explanation": "Use \"who\" to ask about a person — here the reply (\"The manager.\") identifies who.",
  "exercise.wh-words.124.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.125.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.125.explanation": "Use \"who\" to ask about a person — here the reply (\"Our captain.\") identifies who.",
  "exercise.wh-words.125.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.126.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.126.explanation": "Use \"who\" to ask about a person — here the reply (\"I love Adele.\") identifies who.",
  "exercise.wh-words.126.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.127.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.127.explanation": "Use \"who\" to ask about a person — here the reply (\"A friend at work.\") identifies who.",
  "exercise.wh-words.127.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.128.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.128.explanation": "Use \"who\" to ask about a person — here the reply (\"The new neighbor.\") identifies who.",
  "exercise.wh-words.128.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.129.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.129.explanation": "Use \"who\" to ask about a person — here the reply (\"The marketing team.\") identifies who.",
  "exercise.wh-words.129.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.130.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.130.explanation": "Use \"who\" to ask about a person — here the reply (\"I haven’t decided.\") identifies who.",
  "exercise.wh-words.130.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.131.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.131.explanation": "Use \"who\" to ask about a person — here the reply (\"The cat, probably.\") identifies who.",
  "exercise.wh-words.131.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.132.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.132.explanation": "Use \"who\" to ask about a person — here the reply (\"My sister.\") identifies who.",
  "exercise.wh-words.132.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.133.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.133.explanation": "Use \"who\" to ask about a person — here the reply (\"Brazil did.\") identifies who.",
  "exercise.wh-words.133.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.134.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.134.explanation": "Use \"who\" to ask about a person — here the reply (\"My parents.\") identifies who.",
  "exercise.wh-words.134.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.135.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.135.explanation": "Use \"who\" to ask about a person — here the reply (\"Her name is Anna.\") identifies who.",
  "exercise.wh-words.135.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.136.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.136.explanation": "Use \"who\" to ask about a person — here the reply (\"My colleagues.\") identifies who.",
  "exercise.wh-words.136.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.137.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.137.explanation": "Use \"who\" to ask about a person — here the reply (\"A famous artist.\") identifies who.",
  "exercise.wh-words.137.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.138.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.138.explanation": "Use \"who\" to ask about a person — here the reply (\"Our support team.\") identifies who.",
  "exercise.wh-words.138.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.139.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.139.explanation": "Use \"who\" to ask about a person — here the reply (\"My brother.\") identifies who.",
  "exercise.wh-words.139.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "exercise.wh-words.140.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.140.explanation": "Use \"who\" to ask about a person — here the reply (\"My best friend.\") identifies who.",
  "exercise.wh-words.140.pro_tip": "Tip: \"who\" refers only to people, not things.",
  "wh.wh-words-what.title": "What / What kind of questions",
  "wh.wh-words-what.description": "20 questions using \"what\" or \"what kind of\" to ask about a thing or type.",
  "wh.wh-words-what.intro": "**What** asks for a thing, name, color, idea, or piece of information. **What kind of** asks for a type or category.",
  "exercise.wh-words.141.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.141.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"My name is Maria.\".",
  "exercise.wh-words.141.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.142.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.142.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"It’s three o’clock.\".",
  "exercise.wh-words.142.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.143.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.143.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"It’s Friday.\".",
  "exercise.wh-words.143.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.144.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.144.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"I love blue.\".",
  "exercise.wh-words.144.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.145.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.145.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"Sunny and warm.\".",
  "exercise.wh-words.145.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.146.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.146.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"I’m a teacher.\".",
  "exercise.wh-words.146.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.147.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.147.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"555-123-4567.\".",
  "exercise.wh-words.147.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.148.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.148.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"Paris.\".",
  "exercise.wh-words.148.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.149.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.149.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"A sandwich.\".",
  "exercise.wh-words.149.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.150.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.150.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"It’s the dishwasher.\".",
  "exercise.wh-words.150.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.151.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.151.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"The price mainly.\".",
  "exercise.wh-words.151.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.152.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.152.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"Medium.\".",
  "exercise.wh-words.152.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.153.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.153.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"I have a problem.\".",
  "exercise.wh-words.153.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.154.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.154.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"It means \"happy\".\".",
  "exercise.wh-words.154.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.155.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.155.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"123 Main Street.\".",
  "exercise.wh-words.155.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.156.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.156.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"I’m going to study abroad.\".",
  "exercise.wh-words.156.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.157.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.157.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"English and Spanish.\".",
  "exercise.wh-words.157.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.158.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.158.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"I lost my wallet.\".",
  "exercise.wh-words.158.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.159.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.159.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"Reading and hiking.\".",
  "exercise.wh-words.159.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
  "exercise.wh-words.160.prompt": "Complete the sentence with the right word or phrase.",
  "exercise.wh-words.160.explanation": "Use \"what\" to ask for specific information or a thing — here the reply is \"Twenty dollars.\".",
  "exercise.wh-words.160.pro_tip": "Tip: \"what\" is the most general wh-word; it can ask for almost anything that is not a person, place, time, manner, or reason.",
};

const enComplete: Record<string, string> = {
  ...en,
  ...becauseSoThatEnExtras,
  ...presentPerfectEverNeverEnExtras,
  ...top1000IdiomsEnExtras,
  ...top1000GerundsEnExtras,
  ...whWordsEnExtras,
  ...adverbsOfFrequencyEnExtras,
  ...timeExpressionsEnExtras,
  ...didAndWasEnExtras,
  ...simplePastEnExtras,
  ...presentPerfectVsSimplePastEnExtras,
  ...pastPerfectEnExtras,
  ...conditionalsAllEnExtras,
  ...modalVerbsEnExtras,
  ...passiveVoiceEnExtras,
  ...relativeClausesEnExtras,
  ...reportedSpeechEnExtras,
  ...phrasalVerbsEnExtras,
  ...linkingWordsEnExtras,
  ...futureFormsAndUsedToEnExtras,
  ...realConditionalsEnExtras,
  ...comparativesEnExtras,
  ...compoundSentencesEnExtras,
  ...wordAndSentenceStressEnExtras,
  ...askingAndProvidingInfoEnExtras,
  ...superlativeStructuresEnExtras,
  ...comparativeStructuresEnExtras,
  ...politeIntonationEnExtras,
  ...complexSentencesEnExtras,
  ...jobCategoriesEnExtras,
  ...reducedRelativeClausesEnExtras,
  ...sentenceTypesEnExtras,
  ...willingnessAndUnwillingnessEnExtras,
  ...presentRealConditionalsEnExtras,
  ...contrastingTransitionsEnExtras,
  ...conditionalConjunctionsEnExtras,
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
  "exercise.because-so-that.1.prompt": "Completa la oración con el conector correcto.",
  "exercise.because-so-that.1.explanation": "\"Because\" (porque) introduce una causa o razón: tener sed explica por qué bebí agua.",
  "exercise.because-so-that.1.pro_tip": "Consejo: pregúntate \"¿por qué ocurrió esto?\" → usa \"because\" + sujeto + verbo.",
  "exercise.because-so-that.2.prompt": "¿Qué oración usa \"because\" de forma correcta?",
  "exercise.because-so-that.2.explanation": "\"I put on a coat because it was cold.\" coloca primero la acción y después la causa (\"because it was cold\").",
  "exercise.because-so-that.2.pro_tip": "Consejo: la estructura más simple es \"[acción] + because + [razón]\".",
  "exercise.because-so-that.3.prompt": "Reordena las palabras para formar una oración correcta.",
  "exercise.because-so-that.3.explanation": "\"She was tired because she slept late.\" La primera parte indica cómo estaba y \"because she slept late\" explica la causa.",
  "exercise.because-so-that.3.pro_tip": "Consejo: coloca el estado (\"She was tired\") antes de \"because\" + la causa (\"she slept late\").",
  "exercise.because-so-that.4.prompt": "Elige el conector que indica propósito u objetivo, no causa.",
  "exercise.because-so-that.4.explanation": "\"So that\" (para que) introduce una meta o propósito (\"she could catch the bus\"). Se suele usar con \"could\" o \"would\".",
  "exercise.because-so-that.4.pro_tip": "Consejo: si puedes reemplazar el conector por \"para que\", la opción correcta es \"so that\".",
  "exercise.because-so-that.5.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.because-so-that.5.explanation": "\"I studied hard so that I could pass.\" La acción (\"I studied hard\") va seguida de \"so that\" y el propósito (\"I could pass\").",
  "exercise.because-so-that.5.pro_tip": "Consejo: \"so\" solo = resultado; \"so that\" + sujeto + modal = propósito u objetivo.",
  "exercise.because-so-that.6.prompt": "¿Verdadero o Falso?",
  "exercise.because-so-that.6.statement": "Una oración puede comenzar con \"Because\" cuando la razón va primero.",
  "exercise.because-so-that.6.explanation": "Verdadero. \"Because\" puede ir al inicio de la oración si se separa con una coma antes de la cláusula principal.",
  "exercise.because-so-that.6.pro_tip": "Consejo: si \"Because\" inicia la frase, pon una coma antes de la cláusula principal.",
  "exercise.because-so-that.7.prompt": "Elige la oración que usa \"because\" correctamente.",
  "exercise.because-so-that.7.explanation": "\"He brought an umbrella because it might rain.\" usa \"because\" + una cláusula completa (\"it might rain\") para explicar la razón.",
  "exercise.because-so-that.7.pro_tip": "Consejo: \"because\" introduce la causa (\"it might rain\"), mientras que \"so that\" introduce una meta.",
  "exercise.because-so-that.8.prompt": "Completa la oración con el conector correcto.",
  "exercise.because-so-that.8.explanation": "\"Because of\" va seguido de un sustantivo (\"the rain\"), no de un verbo. \"Because of the rain\" es lo correcto.",
  "exercise.because-so-that.8.pro_tip": "Consejo: \"because of + sustantivo\" vs. \"because + sujeto + verbo\".",
  "exercise.because-so-that.9.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.because-so-that.9.explanation": "\"I was hungry, so I ate a sandwich.\" Aquí \"so\" (así que) introduce la consecuencia de tener hambre.",
  "exercise.because-so-that.9.pro_tip": "Consejo: \"[causa], so [resultado]\" es el patrón estándar para mostrar consecuencia.",
  "exercise.because-so-that.10.prompt": "Reordena las palabras para formar una oración correcta con \"so that\".",
  "exercise.because-so-that.10.explanation": "\"He spoke slowly so that everyone could understand.\" La cláusula tras \"so that\" explica el objetivo de hablar despacio.",
  "exercise.because-so-that.10.pro_tip": "Consejo: combina \"so that\" con verbos modales como \"could\" o \"would\".",
  "exercise.because-so-that.11.prompt": "¿Qué oración explica correctamente la razón para irse a dormir temprano?",
  "exercise.because-so-that.11.explanation": "\"I went to bed early because I was tired.\" usa \"because\" + cláusula completa (\"I was tired\") para indicar la causa.",
  "exercise.because-so-that.11.pro_tip": "Consejo: usa \"because + sujeto + verbo\" para expresar la causa o razón.",
  "exercise.because-so-that.12.prompt": "¿Verdadero o Falso?",
  "exercise.because-so-that.12.statement": "\"So that\" introduce un propósito: la razón por la que alguien hace algo para lograr un resultado.",
  "exercise.because-so-that.12.explanation": "Verdadero. \"So that\" se utiliza para expresar la meta o intención de una acción.",
  "exercise.because-so-that.12.pro_tip": "Consejo: si expresa la intención de lograr algo, utiliza \"so that\".",
  "exercise.because-so-that.13.prompt": "Selecciona el conector de resultado.",
  "exercise.because-so-that.13.explanation": "\"So\" (así que / por lo tanto) expresa la consecuencia directa: llovía, así que nos quedamos adentro.",
  "exercise.because-so-that.13.pro_tip": "Consejo: \"so\" como conector de consecuencia suele ir precedido de coma.",
  "exercise.because-so-that.14.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.because-so-that.14.explanation": "\"She was happy because she passed the exam.\" La cláusula con \"because\" explica la causa de su alegría.",
  "exercise.because-so-that.14.pro_tip": "Consejo: \"because\" une el estado o resultado inicial con su causa.",
  "exercise.because-so-that.15.prompt": "Elige la oración que usa \"because\" correctamente en tiempo pasado.",
  "exercise.because-so-that.15.explanation": "\"I stayed home because I felt sick.\" mantiene ambas cláusulas en pasado simple (\"stayed\" y \"felt\").",
  "exercise.because-so-that.15.pro_tip": "Consejo: si la primera acción está en pasado, la causa también va en pasado.",
  "exercise.because-so-that.16.prompt": "Completa la oración con el conector de propósito.",
  "exercise.because-so-that.16.explanation": "\"So that\" indica el propósito de ahorrar dinero (\"I could buy a bike\").",
  "exercise.because-so-that.16.pro_tip": "Consejo: \"so that I could...\" es el patrón clásico de propósito en pasado.",
  "exercise.because-so-that.17.prompt": "¿Cuál es la oración gramaticalmente correcta?",
  "exercise.because-so-that.17.explanation": "\"The fog\" es un sustantivo sin verbo, por lo que se usa \"because of\": \"The flight was delayed because of the fog.\"",
  "exercise.because-so-that.17.pro_tip": "Consejo: si sigue un sustantivo sin verbo, usa \"because of\".",
  "exercise.because-so-that.18.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.because-so-that.18.explanation": "\"He spoke louder so that everyone could hear.\" Hablar más fuerte es la acción y \"so that everyone could hear\" es la meta.",
  "exercise.because-so-that.18.pro_tip": "Consejo: acción + \"so that\" + sujeto + \"could\" + verbo base.",
  "exercise.because-so-that.19.prompt": "¿Qué oración usa correctamente \"so\" para expresar un resultado?",
  "exercise.because-so-that.19.explanation": "\"I was hungry, so I ate.\" expresa primero la causa (\"I was hungry\") y luego el resultado (\"so I ate\").",
  "exercise.because-so-that.19.pro_tip": "Consejo: no confundas \"so\" (resultado) con \"so that\" (propósito).",
  "exercise.because-so-that.20.prompt": "Completa la oración de propósito negativo.",
  "exercise.because-so-that.20.explanation": "\"So that he wouldn't wake the baby\" expresa el propósito de evitar despertar al bebé.",
  "exercise.because-so-that.20.pro_tip": "Consejo: \"so that + wouldn't\" expresa la intención de evitar algo.",
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
  "exercise.past-perfect.8.prompt": "Analiza el orden cronológico de los acontecimientos en: «She had studied for weeks before she took the test.»",
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
  "exercise.conditionals-all.16.prompt": "Identifica a qué tipo de condicional pertenece esta oración: «If I had known, I would have told you.»",
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
  "exercise.relative-clauses.8.prompt": "Identifica el tipo de oración de relativo en: «My brother, who lives in Tokyo, is visiting us next week.»",
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
  "exercise.relative-clauses.12.statement": "En una oración de relativo especificativa, puedes omitir un pronombre objeto como \"who\", \"which\" o \"that\" (ej. \"the movie [that] we watched\").",
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

// ── Lesson 17: Present Real Conditionals (ES) ───────────────────────────
const realConditionalsEsExtras: Record<string, string> = {
  'lesson.real-conditionals.title': 'Condicionales Reales en Presente',
  'lesson.real-conditionals.description':
    'Usa cláusulas con if y resultados seguros para hablar de cómo la nueva tecnología ayuda a las personas, con can, may, should y must.',
  'lesson.real-conditionals.intro':
    '### 1. Objetivo\n' +
    'Usar condicionales reales en presente para hablar de cómo la nueva tecnología puede ayudar a las personas.\n\n' +
    '### 2. Forma: resultados seguros\n' +
    '• **If + presente simple, presente simple** → *If you plug in your phone, it charges.*\n' +
    '• Se usa para resultados **seguros**: cuando ocurre la condición, el resultado es siempre el mismo.\n' +
    '• Las cláusulas pueden cambiar de lugar: *Your phone charges if you plug it in.*\n' +
    '• Usa **coma** solo cuando la cláusula con if va **primero**.\n\n' +
    '### 3. Modales en la cláusula de resultado\n' +
    '• **Posibilidad futura**: *can, may, could* → *If you wear a smartwatch, you can track your health.*\n' +
    '• **Consejo**: *should, ought to* → *If your phone is slow, you should delete old apps.*\n' +
    '• **Necesidad**: *must, have to* → *If you want to join the class, you have to create an account.*\n\n' +
    '### 4. Identifica las cláusulas\n' +
    '• **Cláusula de condición** (la parte con *if*) → subráyala dos veces.\n' +
    '• **Cláusula de resultado** → subráyala una vez.\n' +
    '• ⚠️ Nunca pongas *will* en la cláusula con if (*If it rains...*, no *If it will rain...*).',

  'exercise.real-conditionals.1.prompt': 'Completa el condicional real en presente:',
  'exercise.real-conditionals.1.explanation': 'Ambas cláusulas usan el presente simple. Con "a smart thermostat" (tercera persona) el verbo lleva -s: "senses".',
  'exercise.real-conditionals.1.pro_tip': 'Consejo: If + presente simple, presente simple. Nunca "will" en la cláusula con if.',
  'exercise.real-conditionals.2.prompt': 'Elige la oración correcta de condicional real en presente:',
  'exercise.real-conditionals.2.explanation': 'Los condicionales reales en presente usan presente simple en ambas cláusulas: "If people use video calls, they stay in touch."',
  'exercise.real-conditionals.2.pro_tip': 'Consejo: sin "will" y sin pasado en un condicional real en presente.',
  'exercise.real-conditionals.3.prompt': 'Completa la oración con la forma verbal correcta:',
  'exercise.real-conditionals.3.explanation': '"If you wear..." — el sujeto es "you", así que el presente simple es "wear" (sin -s).',
  'exercise.real-conditionals.3.pro_tip': 'Consejo: solo he / she / it llevan -s en presente simple.',
  'exercise.real-conditionals.4.prompt': '¿Verdadero o Falso?',
  'exercise.real-conditionals.4.explanation': 'Verdadero. Para eso sirven los condicionales reales en presente: condiciones seguras con resultados que son siempre los mismos.',
  'exercise.real-conditionals.4.pro_tip': 'Consejo: piensa "si pasa X, siempre pasa Y".',
  'exercise.real-conditionals.5.prompt': '¿Verdadero o Falso?',
  'exercise.real-conditionals.5.explanation': 'Falso. "If a doctor uses a telehealth app" es la cláusula de condición (if). La cláusula de resultado es "patients can get help from home".',
  'exercise.real-conditionals.5.pro_tip': 'Consejo: la cláusula que empieza con "if" es la condición.',
  'exercise.real-conditionals.6.prompt': '¿Qué oración da un CONSEJO?',
  'exercise.real-conditionals.6.explanation': '"Should" da consejos: "you should delete old apps". "May" indica posibilidad y "must" indica necesidad.',
  'exercise.real-conditionals.6.pro_tip': 'Consejo: consejo = should / ought to.',
  'exercise.real-conditionals.7.prompt': '¿Qué oración expresa una POSIBILIDAD futura?',
  'exercise.real-conditionals.7.explanation': '"Can" (igual que "may" y "could") expresa posibilidad: "they can find new places easily".',
  'exercise.real-conditionals.7.pro_tip': 'Consejo: posibilidad = can / may / could.',
  'exercise.real-conditionals.8.prompt': '¿Qué oración expresa NECESIDAD?',
  'exercise.real-conditionals.8.explanation': '"Have to" (igual que "must") expresa necesidad: necesitas una cuenta para inscribirte.',
  'exercise.real-conditionals.8.pro_tip': 'Consejo: necesidad = must / have to.',
  'exercise.real-conditionals.9.prompt': 'Completa la oración con un modal de consejo:',
  'exercise.real-conditionals.9.explanation': '"Ought to" da consejos, como "should". Recuerda: "ought" necesita "to" antes del verbo base.',
  'exercise.real-conditionals.9.pro_tip': 'Consejo: should + verbo base, pero ought TO + verbo base.',
  'exercise.real-conditionals.10.prompt': 'Completa la oración con un modal de posibilidad:',
  'exercise.real-conditionals.10.explanation': '"Can" + verbo base expresa posibilidad. Los modales nunca llevan "to" ni -s.',
  'exercise.real-conditionals.10.pro_tip': 'Consejo: modal + verbo base (sin "to", sin -s).',
  'exercise.real-conditionals.11.prompt': 'Ordena las palabras correctamente:',
  'exercise.real-conditionals.11.explanation': '"If you charge your phone at night, it is ready in the morning." La cláusula con if va primero, seguida de una coma.',
  'exercise.real-conditionals.11.pro_tip': 'Consejo: cláusula con if primero = coma después.',
  'exercise.real-conditionals.12.prompt': 'Ordena las palabras correctamente:',
  'exercise.real-conditionals.12.explanation': '"Doctors can help patients if they use video calls." El resultado va primero, por eso no hay coma.',
  'exercise.real-conditionals.12.pro_tip': 'Consejo: resultado primero = sin coma.',
  'exercise.real-conditionals.13.prompt': 'Ordena las palabras correctamente:',
  'exercise.real-conditionals.13.explanation': '"If a robot cleans the floor, people have more free time." Ambos verbos están en presente simple.',
  'exercise.real-conditionals.13.pro_tip': 'Consejo: empieza con "If" en mayúscula cuando la condición va primero.',
  'exercise.real-conditionals.14.prompt': 'Ordena las palabras correctamente:',
  'exercise.real-conditionals.14.explanation': '"If you want to learn faster, you should use a language app." "Should" da un consejo en la cláusula de resultado.',
  'exercise.real-conditionals.14.pro_tip': 'Consejo: modales en el resultado: can, may, could, should, ought to, must, have to.',
  'exercise.real-conditionals.15.prompt': 'Relaciona cada condición con su resultado lógico:',
  'exercise.real-conditionals.15.explanation': 'Cada resultado sigue lógicamente a su condición, y los modales añaden significado: "can" (posibilidad), "may" (posibilidad), "should" (consejo).',
  'exercise.real-conditionals.15.pro_tip': 'Consejo: lee ambas mitades en voz alta — ¿tiene sentido el resultado?',
  'exercise.real-conditionals.16.prompt': 'Elige la oración con la puntuación correcta:',
  'exercise.real-conditionals.16.explanation': 'Cuando la cláusula con if va primero, pon una coma después. No uses coma cuando va al final, y no uses punto y coma.',
  'exercise.real-conditionals.16.pro_tip': 'Consejo: "If..., resultado." o "Resultado if..." (sin coma).',
  'exercise.real-conditionals.17.prompt': 'En "If you shop online, you can compare prices quickly," ¿qué parte es la cláusula de CONDICIÓN (subráyala dos veces)?',
  'exercise.real-conditionals.17.explanation': 'La cláusula de condición es la que lleva "if": "If you shop online".',
  'exercise.real-conditionals.17.pro_tip': 'Consejo: condición = subrayar dos veces.',
  'exercise.real-conditionals.18.prompt': 'En "Customers save time if they use self-checkout machines," ¿qué parte es la cláusula de RESULTADO (subráyala una vez)?',
  'exercise.real-conditionals.18.explanation': 'La cláusula de resultado es "Customers save time". La cláusula con if ("if they use self-checkout machines") es la condición.',
  'exercise.real-conditionals.18.pro_tip': 'Consejo: resultado = subrayar una vez.',
  'exercise.real-conditionals.19.prompt': 'Añade "should" a la oración "If your phone gets hot, you turn it off." Ordena las palabras correctamente:',
  'exercise.real-conditionals.19.explanation': '"Should" va antes del verbo base en la cláusula de resultado: "you should turn it off".',
  'exercise.real-conditionals.19.pro_tip': 'Consejo: sujeto + modal + verbo base.',
  'exercise.real-conditionals.20.prompt': 'Añade "can" a la oración "If you use a translation app, you talk with people from other countries." Ordena las palabras correctamente:',
  'exercise.real-conditionals.20.explanation': '"Can" va entre el sujeto y el verbo base: "you can talk with people from other countries".',
  'exercise.real-conditionals.20.pro_tip': 'Consejo: usa mayúscula en la primera palabra de la oración.',
};

// ── Lesson 18: Comparatives (ES) ───────────────────────────────────────
const comparativesEsExtras: Record<string, string> = {
  'lesson.comparatives.title': 'Comparativos',
  'lesson.comparatives.description':
    'Compara dos cosas con -er / more ... than, usa less y fewer, y compara acciones y sustantivos con prefer ... rather than.',
  'lesson.comparatives.intro':
    '### 1. Comparar dos cosas\n' +
    'Los adjetivos comparativos comparan **dos (y solo dos)** cosas.\n' +
    '• **[Sustantivo A] + [be u otro verbo copulativo] + [adjetivo comparativo] + than + [Sustantivo B]**\n' +
    '• *Tom is **taller than** Mike.* / *Mike seems **more talkative than** Tom.*\n\n' +
    '### 2. ¿-er o more?\n' +
    '• **Adjetivos cortos**: añade **-er** → *older, taller*.\n' +
    '• **Tres o más sílabas**: usa **more** → *more beautiful, more expensive*.\n' +
    '• **Dos sílabas**: normalmente usan **more** (*more serious*), **excepto** los que terminan en *-er, -ow, -le, -y*, que llevan **-er** → *shallow → shallower, simple → simpler, happy → happier*.\n' +
    '• Puedes poner **less** antes de cualquier adjetivo sin cambiarlo → *less serious*.\n' +
    '• Con sustantivos: **fewer** + contables (*fewer people*), **less** + incontables (*less coffee*).\n\n' +
    '### 3. Comparar acciones y sustantivos: prefer ... rather than\n' +
    '• **Sujeto + prefer + infinitivo + rather than + infinitivo** → *We prefer to watch movies rather than to read books.*\n' +
    '• Puedes omitir el segundo *to* → *We prefer to watch movies rather than read books.*\n' +
    '• Con gerundios, usa **ambos** gerundios → *We prefer watching movies rather than reading books.*\n' +
    '• Con sustantivos → *We prefer movies rather than books.* o *We prefer movies **to** books.*\n\n' +
    '### 4. Consejos\n' +
    '• ⚠️ Usa **than** (no *that* ni *then*) después de un comparativo.\n' +
    '• ⚠️ Nunca mezcles un gerundio y un infinitivo con *rather than*.',

  'exercise.comparatives.1.prompt': 'Completa la oración comparativa:',
  'exercise.comparatives.1.explanation': '"Tall" es un adjetivo corto, así que añadimos -er: "taller than".',
  'exercise.comparatives.1.pro_tip': 'Consejo: adjetivo corto + -er + than.',
  'exercise.comparatives.2.prompt': 'Elige la oración comparativa correcta:',
  'exercise.comparatives.2.explanation': '"Talkative" tiene tres sílabas, por eso usa "more", seguido de "than".',
  'exercise.comparatives.2.pro_tip': 'Consejo: more + adjetivo largo + than.',
  'exercise.comparatives.3.prompt': '¿Verdadero o Falso?',
  'exercise.comparatives.3.explanation': 'Verdadero. Los comparativos comparan dos (y solo dos) cosas. Para tres o más, el inglés usa el superlativo.',
  'exercise.comparatives.3.pro_tip': 'Consejo: dos cosas = comparativo; tres o más = superlativo.',
  'exercise.comparatives.4.prompt': 'Ordena las palabras correctamente:',
  'exercise.comparatives.4.explanation': '"Ken is older than Doug." Estructura: Sustantivo A + be + comparativo + than + Sustantivo B.',
  'exercise.comparatives.4.pro_tip': 'Consejo: Sustantivo A + be + comparativo + than + Sustantivo B.',
  'exercise.comparatives.5.prompt': 'Completa la oración comparativa:',
  'exercise.comparatives.5.explanation': '"Serious" tiene más de una sílaba y no termina en -er, -ow, -le ni -y, así que usa "more".',
  'exercise.comparatives.5.pro_tip': 'Consejo: more serious than (no "seriouser").',
  'exercise.comparatives.6.prompt': 'Elige la oración correcta:',
  'exercise.comparatives.6.explanation': '"Expensive" tiene tres sílabas, así que necesita "more": "more expensive than".',
  'exercise.comparatives.6.pro_tip': 'Consejo: tres o más sílabas = more.',
  'exercise.comparatives.7.prompt': 'Elige la oración correcta:',
  'exercise.comparatives.7.explanation': 'Los adjetivos de dos sílabas que terminan en -ow llevan -er: "shallow → shallower". Nunca combines "more" con -er.',
  'exercise.comparatives.7.pro_tip': 'Consejo: terminaciones -ow, -le, -er, -y → añade -er.',
  'exercise.comparatives.8.prompt': 'Completa la oración comparativa:',
  'exercise.comparatives.8.explanation': '"Simple" termina en -le, así que lleva -er: "simpler".',
  'exercise.comparatives.8.pro_tip': 'Consejo: simple → simpler (la -e final no se duplica).',
  'exercise.comparatives.9.prompt': 'Completa la oración comparativa:',
  'exercise.comparatives.9.explanation': '"Happy" termina en -y, así que lleva -er y la y cambia a i: "happier".',
  'exercise.comparatives.9.pro_tip': 'Consejo: consonante + y → -ier (happy → happier).',
  'exercise.comparatives.10.prompt': '¿Verdadero o Falso?',
  'exercise.comparatives.10.explanation': 'Verdadero. Todos los adjetivos de tres o más sílabas usan "more": more beautiful, more comfortable.',
  'exercise.comparatives.10.pro_tip': 'Consejo: cuenta las sílabas: 3 o más = more.',
  'exercise.comparatives.11.prompt': '¿Verdadero o Falso?',
  'exercise.comparatives.11.explanation': 'Verdadero. "Less" puede ir antes de cualquier adjetivo y el adjetivo no cambia: less serious, less expensive.',
  'exercise.comparatives.11.pro_tip': 'Consejo: less + adjetivo (sin cambio de ortografía).',
  'exercise.comparatives.12.prompt': 'Completa la oración:',
  'exercise.comparatives.12.explanation': '"People" es un sustantivo contable, así que usamos "fewer".',
  'exercise.comparatives.12.pro_tip': 'Consejo: fewer + sustantivos contables.',
  'exercise.comparatives.13.prompt': 'Completa la oración:',
  'exercise.comparatives.13.explanation': '"Coffee" es aquí un sustantivo incontable, así que usamos "less".',
  'exercise.comparatives.13.pro_tip': 'Consejo: less + sustantivos incontables.',
  'exercise.comparatives.14.prompt': 'Elige la oración correcta para comparar dos acciones:',
  'exercise.comparatives.14.explanation': 'La estructura es: prefer + infinitivo + rather than + infinitivo.',
  'exercise.comparatives.14.pro_tip': 'Consejo: to + verbo ... rather than to + verbo.',
  'exercise.comparatives.15.prompt': 'Ordena las palabras correctamente (se omite el segundo "to"):',
  'exercise.comparatives.15.explanation': '"We prefer to watch movies rather than read books." Con esta estructura se puede omitir el segundo "to".',
  'exercise.comparatives.15.pro_tip': 'Consejo: prefer to watch ... rather than read.',
  'exercise.comparatives.16.prompt': 'Elige la oración correcta con gerundios:',
  'exercise.comparatives.16.explanation': 'Si usas un gerundio, la segunda estructura también debe ser un gerundio: "watching ... rather than reading".',
  'exercise.comparatives.16.pro_tip': 'Consejo: nunca mezcles un gerundio y un infinitivo.',
  'exercise.comparatives.17.prompt': 'Completa la oración para comparar dos sustantivos:',
  'exercise.comparatives.17.explanation': 'La estructura "prefer + sustantivo + rather than + sustantivo" compara dos sustantivos.',
  'exercise.comparatives.17.pro_tip': 'Consejo: prefer tea rather than coffee.',
  'exercise.comparatives.18.prompt': 'Completa la oración (estructura adicional para sustantivos):',
  'exercise.comparatives.18.explanation': 'Con sustantivos también puedes decir "prefer + sustantivo + to + sustantivo": "movies to books".',
  'exercise.comparatives.18.pro_tip': 'Consejo: prefer X to Y (con sustantivos).',
  'exercise.comparatives.19.prompt': 'Relaciona cada adjetivo con su forma comparativa:',
  'exercise.comparatives.19.explanation': 'Tall → taller (corto), serious → more serious (2 sílabas, sin terminación especial), simple → simpler (-le), happy → happier (-y).',
  'exercise.comparatives.19.pro_tip': 'Consejo: cortos, -le, -y, -ow, -er → -er; en otro caso more.',
  'exercise.comparatives.20.prompt': 'Ordena las palabras correctamente:',
  'exercise.comparatives.20.explanation': '"She prefers dancing rather than singing." Ambas partes son gerundios.',
  'exercise.comparatives.20.pro_tip': 'Consejo: gerundio + rather than + gerundio.',
};

// ── Lesson 19: Compound Sentences (ES) ────────────────────────────────
const compoundSentencesEsExtras: Record<string, string> = {
  'lesson.compound-sentences.title': `Oraciones Compuestas`,
  'lesson.compound-sentences.description': `Une dos cláusulas independientes con for, and, nor, but, or, yet y so, incluyendo el orden especial de las palabras después de nor.`,
  'lesson.compound-sentences.intro':
    `### 1. Estructura\n` +
    `• **Cláusula independiente + , + conjunción + cláusula independiente**\n` +
    `• *We took the train home, **for** it was less expensive.*\n` +
    `• Cada lado de la conjunción es una oración completa (sujeto + verbo). Pon una **coma** antes de la conjunción.\n\n` +
    `### 2. Las siete conjunciones (FANBOYS)\n` +
    `• **for** → razón: *We took the train home, for it was less expensive.*\n` +
    `• **and** → adición: *Mary watched a movie, and she ate dinner at Lucille's.*\n` +
    `• **nor** → adición negativa: *Tim doesn't like cookies, nor does he like pies.*\n` +
    `• **but** → contraste: *McDonald's is very cheap, but it is very unhealthy.*\n` +
    `• **or** → elección: *We can buy the car, or we can lease it.*\n` +
    `• **yet** → contraste inesperado: *The house was too expensive, yet the family bought it anyway.*\n` +
    `• **so** → resultado: *Mark didn't have enough money, so he took out a loan.*\n\n` +
    `### 3. El caso especial: nor\n` +
    `• **sujeto + auxiliar negativo + verbo + objeto, nor + auxiliar positivo + sujeto + verbo**\n` +
    `• *I didn't bring an umbrella, nor **did I** bring a coat.*\n` +
    `• *I won't clean your room, nor **will I** make your breakfast.*\n` +
    `• *I'm not a cheater, nor **am I** a crook.*\n\n` +
    `### 4. Consejos\n` +
    `• ⚠️ Después de *nor*, el auxiliar va **antes** del sujeto y es **positivo** (nor *does* he, no nor *doesn't* he).\n` +
    `• ⚠️ Ambas cláusulas necesitan su propio sujeto: *..., so he took out a loan* (no *..., so took out a loan*).`,

  'exercise.compound-sentences.1.prompt': `¿Qué oración es compuesta?`,
  'exercise.compound-sentences.1.explanation': `Une dos cláusulas independientes ("We took the train home" y "it was less expensive") con una coma y "for".`,
  'exercise.compound-sentences.1.pro_tip': `Consejo: cláusula independiente + coma + conjunción + cláusula independiente.`,
  'exercise.compound-sentences.2.prompt': `¿Verdadero o Falso?`,
  'exercise.compound-sentences.2.explanation': `Verdadero. Oración compuesta = dos cláusulas independientes + coma + conjunción coordinante.`,
  'exercise.compound-sentences.2.pro_tip': `Consejo: cada cláusula podría ser una oración completa por sí sola.`,
  'exercise.compound-sentences.3.prompt': `¿Verdadero o Falso?`,
  'exercise.compound-sentences.3.explanation': `Verdadero. Las siete conjunciones coordinantes son for, and, nor, but, or, yet, so (FANBOYS).`,
  'exercise.compound-sentences.3.pro_tip': `Consejo: recuérdalas con la palabra FANBOYS.`,
  'exercise.compound-sentences.4.prompt': `Completa la oración compuesta:`,
  'exercise.compound-sentences.4.explanation': `"And" añade una segunda acción relacionada: vio una película y cenó.`,
  'exercise.compound-sentences.4.pro_tip': `Consejo: and = adición.`,
  'exercise.compound-sentences.5.prompt': `Ordena las palabras correctamente:`,
  'exercise.compound-sentences.5.explanation': `"Mary watched a movie, and she ate dinner at Lucille's." Fíjate en la coma antes de "and".`,
  'exercise.compound-sentences.5.pro_tip': `Consejo: pon una coma antes de la conjunción.`,
  'exercise.compound-sentences.6.prompt': `Elige la oración compuesta con la puntuación correcta:`,
  'exercise.compound-sentences.6.explanation': `La coma va antes de la conjunción, no después. No uses punto y coma con una conjunción ni empieces la segunda cláusula después de un punto.`,
  'exercise.compound-sentences.6.pro_tip': `Consejo: cláusula, conjunción cláusula.`,
  'exercise.compound-sentences.7.prompt': `Completa la oración con la conjunción que da una RAZÓN:`,
  'exercise.compound-sentences.7.explanation': `"For" introduce la razón: tomaron el tren porque era más barato.`,
  'exercise.compound-sentences.7.pro_tip': `Consejo: for = porque (en oraciones compuestas).`,
  'exercise.compound-sentences.8.prompt': `Completa la oración con la conjunción que muestra CONTRASTE:`,
  'exercise.compound-sentences.8.explanation': `"But" contrasta dos ideas: barato, pero poco saludable.`,
  'exercise.compound-sentences.8.pro_tip': `Consejo: but = contraste.`,
  'exercise.compound-sentences.9.prompt': `Completa la oración con la conjunción que muestra un resultado INESPERADO:`,
  'exercise.compound-sentences.9.explanation': `"Yet" muestra un contraste sorprendente: era demasiado cara, pero la compraron de todos modos.`,
  'exercise.compound-sentences.9.pro_tip': `Consejo: yet = contraste inesperado.`,
  'exercise.compound-sentences.10.prompt': `Completa la oración con la conjunción que muestra un RESULTADO:`,
  'exercise.compound-sentences.10.explanation': `"So" introduce el resultado: no tenía suficiente dinero, así que pidió un préstamo.`,
  'exercise.compound-sentences.10.pro_tip': `Consejo: so = resultado.`,
  'exercise.compound-sentences.11.prompt': `¿Qué conjunción muestra una ELECCIÓN entre dos opciones?`,
  'exercise.compound-sentences.11.explanation': `"Or" presenta alternativas: we can buy the car, or we can lease it.`,
  'exercise.compound-sentences.11.pro_tip': `Consejo: or = elección.`,
  'exercise.compound-sentences.12.prompt': `Relaciona cada conjunción con su función:`,
  'exercise.compound-sentences.12.explanation': `for = razón, and = adición, but = contraste, so = resultado.`,
  'exercise.compound-sentences.12.pro_tip': `Consejo: pregúntate qué hace la segunda cláusula respecto a la primera.`,
  'exercise.compound-sentences.13.prompt': `Ordena las palabras correctamente:`,
  'exercise.compound-sentences.13.explanation': `"We can buy the car, or we can lease it." Dos opciones unidas por "or".`,
  'exercise.compound-sentences.13.pro_tip': `Consejo: coma + or + segunda cláusula independiente.`,
  'exercise.compound-sentences.14.prompt': `¿Verdadero o Falso?`,
  'exercise.compound-sentences.14.explanation': `Verdadero. Después de "nor" el orden se invierte: auxiliar positivo + sujeto + verbo ("nor does he like pies").`,
  'exercise.compound-sentences.14.pro_tip': `Consejo: nor + auxiliar positivo + sujeto + verbo.`,
  'exercise.compound-sentences.15.prompt': `Completa la oración con el auxiliar correcto después de "nor":`,
  'exercise.compound-sentences.15.explanation': `"Nor" ya hace negativa la idea, así que el auxiliar es positivo: "nor does he like pies".`,
  'exercise.compound-sentences.15.pro_tip': `Consejo: la primera cláusula usa doesn't, la segunda usa does.`,
  'exercise.compound-sentences.16.prompt': `Completa la oración con el auxiliar correcto después de "nor":`,
  'exercise.compound-sentences.16.explanation': `La primera cláusula está en pasado simple (didn't bring), así que la segunda usa "did" antes del sujeto: "nor did I bring a coat".`,
  'exercise.compound-sentences.16.pro_tip': `Consejo: mantén el tiempo verbal de la primera cláusula.`,
  'exercise.compound-sentences.17.prompt': `Elige la oración correcta con "nor":`,
  'exercise.compound-sentences.17.explanation': `Después de "nor" pon un auxiliar positivo antes del sujeto: "nor do I have a dog". No repitas la negación.`,
  'exercise.compound-sentences.17.pro_tip': `Consejo: nor do I (no nor I do / nor I don't).`,
  'exercise.compound-sentences.18.prompt': `Ordena las palabras correctamente:`,
  'exercise.compound-sentences.18.explanation': `"I won't clean your room, nor will I make your breakfast." El auxiliar "will" va antes del sujeto "I".`,
  'exercise.compound-sentences.18.pro_tip': `Consejo: won't ... nor will I.`,
  'exercise.compound-sentences.19.prompt': `Completa la oración con el verbo correcto después de "nor":`,
  'exercise.compound-sentences.19.explanation': `Con el verbo "be" no hay auxiliar extra: "I'm not a cheater, nor am I a crook."`,
  'exercise.compound-sentences.19.pro_tip': `Consejo: con be, solo mueve "am / is / are" antes del sujeto.`,
  'exercise.compound-sentences.20.prompt': `Elige la oración compuesta correcta:`,
  'exercise.compound-sentences.20.explanation': `"So" muestra el resultado y cada cláusula tiene su propio sujeto y verbo. "For" daría un significado incorrecto y la coma va antes de la conjunción.`,
  'exercise.compound-sentences.20.pro_tip': 'Consejo: une dos proposiciones independientes con coma y conjunción coordinante.',
};

// ── Lesson 20: Word and Sentence Stress (ES) ─────────────────────────────
const wordAndSentenceStressEsExtras: Record<string, string> = {
  'lesson.word-and-sentence-stress.title': `Acentuación en Palabras y Oraciones (Word and Sentence Stress)`,
  'lesson.word-and-sentence-stress.description': `Domina la notación de acento, distingue palabras de contenido vs. función, y comprende el ritmo y la entonación en oraciones en inglés.`,
  'lesson.word-and-sentence-stress.intro':
    `### 1. Acento y Sistemas de Notación\n` +
    `• El **acento (stress)** es un sonido más **largo, fuerte o de tono más alto**.\n` +
    `• En las palabras, cada sílaba tiene un nivel de acentuación distinto. Se nota con **mayúsculas** o **burbujas**:\n` +
    `  - Ejemplo: **PE-di-AT-ric** (la 3.ª sílaba **-AT-** lleva el acento principal, seguida de **PE-**).\n` +
    `• La acentuación existe tanto a nivel de **palabra** como de **oración**.\n\n` +
    `### 2. Palabras de Contenido vs. Palabras de Función\n` +
    `• **Palabras de Contenido (Content Words)** llevan la información clave y van **ACENTUADAS**:\n` +
    `  - **Sustantivos**: *computer, school, peace*\n` +
    `  - **Verbos principales**: *say, walk, run, belong*\n` +
    `  - **Adjetivos**: *clean, quick, enormous*\n` +
    `  - **Adverbios**: *quickly, softly, cheerfully*\n` +
    `  - **Interrogativos**: *who, what, when, where, why, how*\n` +
    `• **Palabras de Función (Function Words)** indican relaciones gramaticales y van **DÉBILES / SIN ACENTO**:\n` +
    `  - **Artículos**: *the, a/an*\n` +
    `  - **Auxiliares**: *can, must, might, will, have, be*\n` +
    `  - **Preposiciones**: *on, with, to, from*\n` +
    `  - **Pronombres**: *he, she, they, we, you, him*\n` +
    `  - **Conjunciones**: *and, but, or*\n\n` +
    `### 3. Ritmo y Ejemplos en Oraciones\n` +
    `• **CATS CHASE MICE.**\n` +
    `• **The CATS have CHASED MICE.**\n` +
    `• **The CATS could have been CHASing the MICE.**\n` +
    `*(En inglés el ritmo se apoya en las palabras de contenido acentuadas, mientras las de función se pronuncian rápido y suaves).* \n\n` +
    `### 4. Acentuación en Diálogos\n` +
    `• En conversaciones se resaltan las palabras informativas clave:\n` +
    `  - *A: WHAT do YOU have to DO today?*\n` +
    `  - *B: I have to WALK my DOG.*\n` +
    `  - *A: IS he FRIENDLY? — B: HE is VERY friendly.*`,

  'exercise.word-and-sentence-stress.1.prompt': `¿Verdadero o Falso?`,
  'exercise.word-and-sentence-stress.1.explanation': `Verdadero. El acento en inglés hace que la sílaba sea más larga, más fuerte y con un tono más alto.`,
  'exercise.word-and-sentence-stress.1.pro_tip': `Consejo: acento = sonido más largo, más fuerte y más alto.`,
  'exercise.word-and-sentence-stress.2.prompt': `¿Cómo se indica visualmente la acentuación de sílabas en los sistemas de notación?`,
  'exercise.word-and-sentence-stress.2.explanation': `Los sistemas usan letras mayúsculas (ej. PE-di-AT-ric) o burbujas de distintos tamaños sobre cada sílaba.`,
  'exercise.word-and-sentence-stress.2.pro_tip': `Consejo: burbuja más grande o mayúsculas = sílaba acentuada.`,
  'exercise.word-and-sentence-stress.3.prompt': `En la notación "PE-di-AT-ric", ¿qué sílaba lleva el acento principal (más fuerte)?`,
  'exercise.word-and-sentence-stress.3.explanation': `La tercera sílaba (-AT-) tiene la burbuja más grande y el acento principal; PE- tiene acento secundario.`,
  'exercise.word-and-sentence-stress.3.pro_tip': `Consejo: la burbuja mayor indica el acento principal.`,
  'exercise.word-and-sentence-stress.4.prompt': `¿Verdadero o Falso?`,
  'exercise.word-and-sentence-stress.4.explanation': `Falso. Las sílabas tienen distintos niveles de acento: en "PE-di-AT-ric", -AT- es la más fuerte, PE- intermedia, y -di- y -ric son suaves.`,
  'exercise.word-and-sentence-stress.4.pro_tip': `Consejo: cada sílaba dentro de una palabra tiene un nivel de acento diferente.`,
  'exercise.word-and-sentence-stress.5.prompt': `Relaciona cada categoría con si es Palabra de Contenido o Palabra de Función:`,
  'exercise.word-and-sentence-stress.5.explanation': `Sustantivos y adjetivos son palabras de contenido (acentuadas); artículos y preposiciones son de función (débiles).`,
  'exercise.word-and-sentence-stress.5.pro_tip': `Consejo: contenido = significado clave; función = nexo gramatical.`,
  'exercise.word-and-sentence-stress.6.prompt': `¿Cuál de las siguientes es una palabra de CONTENIDO que normalmente va ACENTUADA?`,
  'exercise.word-and-sentence-stress.6.explanation': `"Quick" es un adjetivo (palabra de contenido). "The", "from" y "they" son palabras de función.`,
  'exercise.word-and-sentence-stress.6.pro_tip': `Consejo: sustantivos, verbos, adjetivos y adverbios = palabras de contenido.`,
  'exercise.word-and-sentence-stress.7.prompt': `¿Cuál de las siguientes es una palabra de FUNCIÓN que normalmente va SIN ACENTO?`,
  'exercise.word-and-sentence-stress.7.explanation': `"Must" es un verbo auxiliar (palabra de función). "Belong", "peace" y "cheerfully" son de contenido.`,
  'exercise.word-and-sentence-stress.7.pro_tip': `Consejo: auxiliares, artículos, pronombres y preposiciones son palabras de función.`,
  'exercise.word-and-sentence-stress.8.prompt': `¿Verdadero o Falso?`,
  'exercise.word-and-sentence-stress.8.explanation': `Verdadero. Las palabras interrogativas (who, what, when, where, why, how) van acentuadas porque inician preguntas de información.`,
  'exercise.word-and-sentence-stress.8.pro_tip': `Consejo: ¡las palabras de pregunta van acentuadas!`,
  'exercise.word-and-sentence-stress.9.prompt': `Completa la regla:`,
  'exercise.word-and-sentence-stress.9.explanation': `Las palabras de función (function words: artículos, preposiciones, auxiliares) señalan relaciones gramaticales.`,
  'exercise.word-and-sentence-stress.9.pro_tip': `Consejo: content words = significado; function words = gramática.`,
  'exercise.word-and-sentence-stress.10.prompt': `En la oración "CATS CHASE MICE", ¿qué palabras llevan acento?`,
  'exercise.word-and-sentence-stress.10.explanation': `Las tres palabras son de contenido (sustantivo, verbo, sustantivo), por lo que las tres van acentuadas: CATS CHASE MICE.`,
  'exercise.word-and-sentence-stress.10.pro_tip': `Consejo: si todas son palabras de contenido, todas llevan acento.`,
  'exercise.word-and-sentence-stress.11.prompt': `Completa la oración:`,
  'exercise.word-and-sentence-stress.11.explanation': `"The" es un artículo y "have" es un auxiliar, por lo que ambas son palabras de función que no llevan acento.`,
  'exercise.word-and-sentence-stress.11.pro_tip': `Consejo: las palabras débiles en la oración suelen ser de función.`,
  'exercise.word-and-sentence-stress.12.prompt': `Ordena las palabras para formar el patrón de acentuación de la oración:`,
  'exercise.word-and-sentence-stress.12.explanation': `"The CATS will CHASE the MICE." Las palabras de contenido (CATS, CHASE, MICE) van en mayúsculas/acentuadas.`,
  'exercise.word-and-sentence-stress.12.pro_tip': `Consejo: las palabras de función se pronuncian rápido entre los golpes de acento.`,
  'exercise.word-and-sentence-stress.13.prompt': `En "The CATS could have been CHASing the MICE", ¿qué palabras llevan el acento principal?`,
  'exercise.word-and-sentence-stress.13.explanation': `Solo las palabras de contenido (CATS, CHASing, MICE) llevan el golpe de voz; "The" y "could have been" son de función.`,
  'exercise.word-and-sentence-stress.13.pro_tip': `Consejo: aunque haya varios auxiliares (could have been), el acento va en el verbo principal.`,
  'exercise.word-and-sentence-stress.14.prompt': `Completa la oración:`,
  'exercise.word-and-sentence-stress.14.explanation': `El ritmo del inglés se apoya en las palabras de contenido (content words: sustantivos, verbos principales, adjetivos).`,
  'exercise.word-and-sentence-stress.14.pro_tip': `Consejo: acentuar las palabras de contenido da un ritmo natural en inglés.`,
  'exercise.word-and-sentence-stress.15.prompt': `Ordena las palabras para ver el ritmo de la oración:`,
  'exercise.word-and-sentence-stress.15.explanation': `"The MICE will EAT the CHEESE." MICE, EAT y CHEESE son las palabras acentuadas de contenido.`,
  'exercise.word-and-sentence-stress.15.pro_tip': `Consejo: The MICE will EAT the CHEESE.`,
  'exercise.word-and-sentence-stress.16.prompt': `Completa la explicación sobre la oración "The MICE will have EATen the CHEESE":`,
  'exercise.word-and-sentence-stress.16.explanation': `"EATen" es el verbo principal (palabra de contenido). "Will" y "have" son verbos auxiliares (palabras de función).`,
  'exercise.word-and-sentence-stress.16.pro_tip': `Consejo: verbo principal = contenido; verbo auxiliar = función.`,
  'exercise.word-and-sentence-stress.17.prompt': `Completa la explicación sobre "The MICE will have EATen the CHEESE":`,
  'exercise.word-and-sentence-stress.17.explanation': `"CHEESE" es el sustantivo objeto, una palabra de contenido que recibe el acento final.`,
  'exercise.word-and-sentence-stress.17.pro_tip': `Consejo: los sustantivos son palabras de contenido.`,
  'exercise.word-and-sentence-stress.18.prompt': `¿Por qué WHAT, YOU y DO van acentuadas en "WHAT do YOU have to DO today?"`,
  'exercise.word-and-sentence-stress.18.explanation': `"WHAT" es una palabra interrogativa, "YOU" tiene énfasis comunicativo y "DO" es el verbo principal.`,
  'exercise.word-and-sentence-stress.18.pro_tip': `Consejo: los interrogativos y palabras clave llevan el acento en diálogos.`,
  'exercise.word-and-sentence-stress.19.prompt': `Ordena las palabras para la respuesta acentuada del diálogo:`,
  'exercise.word-and-sentence-stress.19.explanation': `"I have to WALK my DOG." "WALK" (verbo) y "DOG" (sustantivo) son las palabras de contenido acentuadas.`,
  'exercise.word-and-sentence-stress.19.pro_tip': `Consejo: I have to WALK my DOG.`,
  'exercise.word-and-sentence-stress.20.prompt': `Completa la explicación para la oración de diálogo "HE is VERY friendly":`,
  'exercise.word-and-sentence-stress.20.explanation': `"VERY" es un adverbio intensificador que lleva acento para enfatizar la cualidad.`,
  'exercise.word-and-sentence-stress.20.pro_tip': `Consejo: los adverbios intensificadores (very, really) llevan un acento fuerte.`,
};

const askingAndProvidingInfoEsExtras: Record<string, string> = {
  'lesson.asking-and-providing-information.title': `Pedir y Dar Información (Asking for and Providing Information)`,
  'lesson.asking-and-providing-information.description': `Aprende frases conversacionales para consultar riesgos, pedir aclaraciones, recomendar equipamiento y señalar factores clave.`,
  'lesson.asking-and-providing-information.intro':
    `### 1. Pedir Información (Asking for information)\n` +
    `Usa estas fórmulas naturales para consultar condiciones o prepararte para una actividad:\n` +
    `• **Is there any danger of... (+ sustantivo / gerundio)** → *Is there any danger of really bad weather?* (¿Hay algún peligro de mal tiempo?)\n` +
    `• **What exactly do you mean by "[término]"?** → *What exactly do you mean by "the worst"?* (¿Qué quieres decir exactamente con...?)\n` +
    `• **Is there a risk of... (+ sustantivo / gerundio)** → *Is there a risk of snow?* (¿Hay riesgo de nieve?)\n` +
    `• **What sort of [objeto] would you recommend [gerundio]?** → *What sort of coat would you recommend taking?* (¿Qué tipo de abrigo recomendarías llevar?)\n\n` +
    `### 2. Dar Información y Consejos (Providing information)\n` +
    `Usa estas frases para estructurar explicaciones y priorizar consejos:\n` +
    `• **The most important thing to consider is that...** → *The most important thing to consider is that mountain weather is unpredictable.* (Lo más importante a considerar es que...)\n` +
    `• **First and foremost,...** → *First and foremost, you need a good waterproof coat.* (Primero y principal...)\n` +
    `• **One thing to keep in mind is that...** → *One thing to keep in mind is that you don't want a thick coat.* (Algo a tener en cuenta es que...)\n` +
    `• **Another thing to consider is...** → *Another thing to consider is the kind of T-shirt you wear.* (Otra cosa a considerar es...)\n\n` +
    `### 3. Consejos clave\n` +
    `• ⚠️ *Recommend* se usa con verbo en **-ing** (*recommend taking*, no *recommend to take*).\n` +
    `• ⚠️ Tanto *danger of* como *risk of* llevan la preposición **of**.`,

  'exercise.asking-and-providing-information.1.prompt': `Completa la pregunta sobre posibles peligros:`,
  'exercise.asking-and-providing-information.1.explanation': `Se usa la preposición "of": "Is there any danger of really bad weather?"`,
  'exercise.asking-and-providing-information.1.pro_tip': `Consejo: danger OF + sustantivo o gerundio.`,
  'exercise.asking-and-providing-information.2.prompt': `Completa la pregunta sobre el riesgo del clima:`,
  'exercise.asking-and-providing-information.2.explanation': `Se usa la preposición "of": "Is there a risk of snow?"`,
  'exercise.asking-and-providing-information.2.pro_tip': `Consejo: risk OF + sustantivo o gerundio.`,
  'exercise.asking-and-providing-information.3.prompt': `Completa la pregunta para pedir una aclaración:`,
  'exercise.asking-and-providing-information.3.explanation': `La fórmula estándar es "What do you mean BY [frase]?": "¿Qué quieres decir con...?"`,
  'exercise.asking-and-providing-information.3.pro_tip': `Consejo: mean BY + palabra o expresión.`,
  'exercise.asking-and-providing-information.4.prompt': `Completa la pregunta para pedir una recomendación:`,
  'exercise.asking-and-providing-information.4.explanation': `El verbo "recommend" va seguido de gerundio (-ing): "would you recommend taking?".`,
  'exercise.asking-and-providing-information.4.pro_tip': `Consejo: recommend + verbo-ing (taking, bringing, wearing).`,
  'exercise.asking-and-providing-information.5.prompt': `¿Verdadero o Falso?`,
  'exercise.asking-and-providing-information.5.explanation': `Verdadero. Tanto "danger of" como "risk of" van seguidos de sustantivo o gerundio (ej. risk of falling, danger of frostbite).`,
  'exercise.asking-and-providing-information.5.pro_tip': `Consejo: preposición "of" + sustantivo o gerundio.`,
  'exercise.asking-and-providing-information.6.prompt': `Ordena las palabras para formar la pregunta que pide consejo sobre qué abrigo llevar:`,
  'exercise.asking-and-providing-information.6.explanation': `"What sort of coat would you recommend taking?"`,
  'exercise.asking-and-providing-information.6.pro_tip': `Consejo: What sort of [sustantivo] would you recommend [verbo-ing]?`,
  'exercise.asking-and-providing-information.7.prompt': `Completa la frase que introduce la consideración principal:`,
  'exercise.asking-and-providing-information.7.explanation': `"The most important thing to consider is that..." usa el verbo singular "is".`,
  'exercise.asking-and-providing-information.7.pro_tip': `Consejo: The most important thing ... IS that...`,
  'exercise.asking-and-providing-information.8.prompt': `¿Qué oración presenta el requisito principal y más importante?`,
  'exercise.asking-and-providing-information.8.explanation': `"First and foremost, you need a good waterproof coat." "First and foremost" significa antes que nada / lo principal.`,
  'exercise.asking-and-providing-information.8.pro_tip': `Consejo: First and foremost = primero y principal.`,
  'exercise.asking-and-providing-information.9.prompt': `Completa la expresión que significa "tener en cuenta / recordar":`,
  'exercise.asking-and-providing-information.9.explanation': `"One thing to keep in mind is that..." significa algo importante a tener en cuenta.`,
  'exercise.asking-and-providing-information.9.pro_tip': `Consejo: keep in mind = tener en cuenta / recordar.`,
  'exercise.asking-and-providing-information.10.prompt': `Completa la frase que añade otro punto a considerar:`,
  'exercise.asking-and-providing-information.10.explanation': `"Another thing to consider is..." usa el verbo base "consider".`,
  'exercise.asking-and-providing-information.10.pro_tip': `Consejo: Another thing TO consider is...`,
  'exercise.asking-and-providing-information.11.prompt': `¿Verdadero o Falso?`,
  'exercise.asking-and-providing-information.11.explanation': `Verdadero. "First and foremost" es una frase hecha que significa primero en orden y más importante de todo.`,
  'exercise.asking-and-providing-information.11.pro_tip': `Consejo: First and foremost = máxima prioridad.`,
  'exercise.asking-and-providing-information.12.prompt': `Ordena las palabras para formar la frase de consejo:`,
  'exercise.asking-and-providing-information.12.explanation': `"One thing to keep in mind is that it might rain."`,
  'exercise.asking-and-providing-information.12.pro_tip': `Consejo: One thing to keep in mind is that...`,
  'exercise.asking-and-providing-information.13.prompt': `Elige la respuesta que da información útil a "Is there any danger of really bad weather?":`,
  'exercise.asking-and-providing-information.13.explanation': `"The most important thing to consider is that mountain weather is unpredictable." responde con información relevante.`,
  'exercise.asking-and-providing-information.13.pro_tip': `Consejo: responde a preguntas de peligro con consideraciones importantes.`,
  'exercise.asking-and-providing-information.14.prompt': `Ordena las palabras para expresar la prioridad principal:`,
  'exercise.asking-and-providing-information.14.explanation': `"First and foremost, you need a good waterproof coat."`,
  'exercise.asking-and-providing-information.14.pro_tip': `Consejo: First and foremost, + oración.`,
  'exercise.asking-and-providing-information.15.prompt': `¿Qué hace el hablante al preguntar "What exactly do you mean by 'the worst'?"`,
  'exercise.asking-and-providing-information.15.explanation': `Pide una aclaración sobre qué quiere decir la otra persona con la expresión "the worst".`,
  'exercise.asking-and-providing-information.15.pro_tip': `Consejo: "What do you mean by..." = petición de aclaración.`,
  'exercise.asking-and-providing-information.16.prompt': `Completa la oración:`,
  'exercise.asking-and-providing-information.16.explanation': `Usa "that" para introducir la proposición: "...is that daylight hours are shorter."`,
  'exercise.asking-and-providing-information.16.pro_tip': `Consejo: ...is THAT + oración completa.`,
  'exercise.asking-and-providing-information.17.prompt': `Elige la oración formulada correctamente:`,
  'exercise.asking-and-providing-information.17.explanation': `"Another thing to consider is the kind of T-shirt you wear." usa "to consider is".`,
  'exercise.asking-and-providing-information.17.pro_tip': `Consejo: Another thing to consider is...`,
  'exercise.asking-and-providing-information.18.prompt': `Relaciona cada frase con su función en la conversación:`,
  'exercise.asking-and-providing-information.18.explanation': `risk of = consultar peligro; mean by = pedir aclaración; first and foremost = prioridad principal; another thing = añadir punto.`,
  'exercise.asking-and-providing-information.18.pro_tip': `Consejo: identifica si la frase pide o da información.`,
  'exercise.asking-and-providing-information.19.prompt': `¿Qué pregunta pide correctamente una recomendación sobre botas?`,
  'exercise.asking-and-providing-information.19.explanation': `"What sort of boots would you recommend buying?" usa recommend + -ing.`,
  'exercise.asking-and-providing-information.19.pro_tip': `Consejo: recommend + buying (no to buy).`,
  'exercise.asking-and-providing-information.20.prompt': `¿Verdadero o Falso?`,
  'exercise.asking-and-providing-information.20.explanation': `Verdadero. "Keep in mind" es un modismo que significa recordar o tomar en consideración.`,
  'exercise.asking-and-providing-information.20.pro_tip': `Consejo: keep in mind = no olvidar / tener en cuenta.`,
};

const superlativeStructuresEsExtras: Record<string, string> = {
  'lesson.superlative-structures.title': `Estructuras Superlativas y Modificadores (Superlative Structures)`,
  'lesson.superlative-structures.description': `Domina patrones superlativos avanzados, superlativos como sujeto, cláusulas relativas, adjetivos extremos con "absolutely" y verbos de percepción.`,
  'lesson.superlative-structures.intro':
    `### 1. One of the Most + Adjetivo + Sustantivo Plural\n` +
    `Para destacar un elemento extraordinario dentro de un grupo:\n` +
    `• **Noun phrase + be + one of the most + adjetivo + SUSTANTIVO PLURAL**\n` +
    `• *Nicaragua's Masaya Volcano is one of the most active volcanoes in Central America.* (Uno de los volcanes más activos...)\n` +
    `• *Point Lobos State Natural Reserve is one of the most beautiful state parks in California.* (Uno de los parques estatales más hermosos...)\n` +
    `⚠️ Recuerda: el sustantivo final siempre va en **plural** (*volcanoes*, *parks*).\n\n` +
    `### 2. Superlativos al Inicio como Sujeto (Fronted Superlatives)\n` +
    `Los superlativos pueden ocupar la posición de sujeto:\n` +
    `• **The + adjetivo-est / the most + adjetivo + be verb + sustantivo**\n` +
    `• *The tiniest and most common are microbes.* (Los más diminutos y comunes son los microbios.)\n` +
    `• *The largest and most expensive are Clydesdales.* (Los más grandes y costosos son los Clydesdales.)\n` +
    `• El verbo *are* concuerda en plural con el sustantivo que le sigue.\n\n` +
    `### 3. Superlativos con Cláusulas Relativas\n` +
    `Delimita o especifica el alcance del superlativo con una proposición con *(that)*:\n` +
    `• **Noun phrase + be verb + the + most + adjetivo + sustantivo + (that) + oración**\n` +
    `• *Rats are the most adaptable mammal (that) we know of.* (Las ratas son el mamífero más adaptable del que tengamos noticia.)\n` +
    `• *Comedies are the most enjoyable movies (that) we can watch.* (Las comedias son las películas más disfrutables que podemos ver.)\n\n` +
    `### 4. Adjetivos Extremos (Ungradable) e Infinitivos\n` +
    `Los adjetivos absolutos o extremos (como *awful*, *impossible*) no admiten *very*; se intensifican con **absolutely**:\n` +
    `• **It + be + artículo + adverbio + adjetivo + sustantivo + infinitivo (to + verbo)**\n` +
    `• *It's an absolutely awful place to live.* (Es un lugar absolutamente espantoso para vivir.)\n` +
    `• *It's an absolutely impossible language to learn.* (Es un idioma absolutamente imposible de aprender.)\n\n` +
    `### 5. Verbos de Percepción y Modificadores\n` +
    `• Los verbos de enlace y percepción (*become*, *appear to be*) van seguidos de **adjetivos**: *They become very hard and appear to be dead.* / *It becomes bright and appears to be alive.*\n` +
    `• Los participios pasados funcionan como adjetivos calificativos: *A destroyed building has no hope for renovation.*\n` +
    `• Modismos como *"tough cookie"* denotan seres u organismos sumamente resistentes: *The final 'tough cookie' has few limits to its territory.*`,

  'exercise.superlative-structures.1.prompt': `Completa la oración con la forma correcta del adjetivo:`,
  'exercise.superlative-structures.1.explanation': `La estructura "one of the most" ya incluye "most", por lo que va seguida del adjetivo base "active": "one of the most active volcanoes".`,
  'exercise.superlative-structures.1.pro_tip': `Consejo: one of the most + adjetivo base + sustantivo plural.`,

  'exercise.superlative-structures.2.prompt': `Elige la forma del sustantivo para completar la frase superlativa:`,
  'exercise.superlative-structures.2.explanation': `La estructura "one of the..." siempre exige un sustantivo en plural: "state parks".`,
  'exercise.superlative-structures.2.pro_tip': `Consejo: one of the most [adj] + sustantivo PLURAL (parks, no park).`,

  'exercise.superlative-structures.3.prompt': `¿Qué oración utiliza correctamente la estructura "one of the most"?`,
  'exercise.superlative-structures.3.explanation': `"Point Lobos is one of the most beautiful state parks in California" utiliza "one of the most" + adjetivo + sustantivo plural "parks".`,
  'exercise.superlative-structures.3.pro_tip': `Consejo: incluye siempre "the" y usa el sustantivo en plural.`,

  'exercise.superlative-structures.4.prompt': `Ordena las palabras para formar la afirmación superlativa:`,
  'exercise.superlative-structures.4.explanation': `"Masaya Volcano is one of the most active volcanoes."`,
  'exercise.superlative-structures.4.pro_tip': `Consejo: Sujeto + is + one of the most + adjetivo + sustantivo plural.`,

  'exercise.superlative-structures.5.prompt': `Completa la oración con la forma adecuada del verbo be:`,
  'exercise.superlative-structures.5.explanation': `Se usa "are" para concordar con el complemento plural "microbes": "The tiniest and most common are microbes."`,
  'exercise.superlative-structures.5.pro_tip': `Consejo: The [superlativos] ARE [sustantivo plural].`,

  'exercise.superlative-structures.6.prompt': `Completa el sujeto superlativo compuesto:`,
  'exercise.superlative-structures.6.explanation': `Usa el adjetivo base "expensive" tras "most": "The largest and most expensive are Clydesdales."`,
  'exercise.superlative-structures.6.pro_tip': `Consejo: adjetivo corto lleva -est (largest), adjetivo largo lleva most + adj (most expensive).`,

  'exercise.superlative-structures.7.prompt': `¿Verdadero o Falso?`,
  'exercise.superlative-structures.7.explanation': `Verdadero. En "The tiniest and most common are microbes", la frase superlativa colocada al inicio actúa como sujeto sintáctico.`,
  'exercise.superlative-structures.7.pro_tip': `Consejo: los adjetivos superlativos pueden funcionar como sujeto al referirse a un grupo o clase.`,

  'exercise.superlative-structures.8.prompt': `Organiza las palabras para formar la oración descriptiva:`,
  'exercise.superlative-structures.8.explanation': `"The tiniest and most common are microbes."`,
  'exercise.superlative-structures.8.pro_tip': `Consejo: The + superlativos + are + sustantivo.`,

  'exercise.superlative-structures.9.prompt': `Completa la oración sobre la adaptabilidad animal:`,
  'exercise.superlative-structures.9.explanation': `Usa el pronombre relativo "that": "Rats are the most adaptable mammal that we know of."`,
  'exercise.superlative-structures.9.pro_tip': `Consejo: superlativo + sustantivo + (that) + cláusula relativa.`,

  'exercise.superlative-structures.10.prompt': `Completa la oración con el modificador superlativo:`,
  'exercise.superlative-structures.10.explanation': `Usa "most" delante de adjetivos polisílabos: "the most enjoyable movies".`,
  'exercise.superlative-structures.10.pro_tip': `Consejo: the MOST enjoyable (adjetivo largo).`,

  'exercise.superlative-structures.11.prompt': `¿Verdadero o Falso?`,
  'exercise.superlative-structures.11.explanation': `Verdadero. Cuando "that" ejerce de objeto en la proposición relativa, se puede omitir libremente: "...mammal we know of."`,
  'exercise.superlative-structures.11.pro_tip': `Consejo: "that" es opcional cuando va seguido de sujeto + verbo.`,

  'exercise.superlative-structures.12.prompt': `Ordena las palabras para completar la oración:`,
  'exercise.superlative-structures.12.explanation': `"Comedies are the most enjoyable movies we can watch."`,
  'exercise.superlative-structures.12.pro_tip': `Consejo: Sujeto + are + the most + adjetivo + sustantivo + cláusula.`,

  'exercise.superlative-structures.13.prompt': `Completa la oración con el adverbio intensificador:`,
  'exercise.superlative-structures.13.explanation': `"Awful" es un adjetivo extremo (ungradable), por lo que se intensifica con "absolutely" y no con "very".`,
  'exercise.superlative-structures.13.pro_tip': `Consejo: absolutely + adjetivo extremo (awful, impossible, furious).`,

  'exercise.superlative-structures.14.prompt': `¿Qué estructura de infinitivo completa: "It's an absolutely awful place ____"?`,
  'exercise.superlative-structures.14.explanation': `Usa el infinitivo con to "to live": "It's an absolutely awful place to live."`,
  'exercise.superlative-structures.14.pro_tip': `Consejo: place / language / thing + TO + verbo base.`,

  'exercise.superlative-structures.15.prompt': `¿Por qué se prefiere "absolutely awful" a "very awful"?`,
  'exercise.superlative-structures.15.explanation': `Los adjetivos extremos ya indican un grado límite, por lo que se combinan con adverbios de totalidad como "absolutely" o "completely", no con "very".`,
  'exercise.superlative-structures.15.pro_tip': `Consejo: very cold (graduable) vs. absolutely freezing (extremo).`,

  'exercise.superlative-structures.16.prompt': `¿Qué oración combina correctamente el adjetivo extremo con su modificador e infinitivo?`,
  'exercise.superlative-structures.16.explanation': `"It's an absolutely impossible language to learn" utiliza correctamente el modificador "absolutely", el artículo "an" y el infinitivo con to "to learn".`,
  'exercise.superlative-structures.16.pro_tip': `Consejo: It's an absolutely [adjetivo extremo] [sustantivo] to [verbo].`,

  'exercise.superlative-structures.17.prompt': `¿Verdadero o Falso?`,
  'exercise.superlative-structures.17.explanation': `Verdadero. "Dead" es un adjetivo atributivo tras el verbo de percepción "appear to be".`,
  'exercise.superlative-structures.17.pro_tip': `Consejo: appear to be + adjetivo (dead, alive, real).`,

  'exercise.superlative-structures.18.prompt': `Completa la cláusula descriptiva del organismo:`,
  'exercise.superlative-structures.18.explanation': `Usa el adjetivo predicativo "alive": "It becomes bright and appears to be alive."`,
  'exercise.superlative-structures.18.pro_tip': `Consejo: appears to be + alive (adjetivo predicativo).`,

  'exercise.superlative-structures.19.prompt': `En "A destroyed building has no hope for renovation", ¿qué función tiene "destroyed"?`,
  'exercise.superlative-structures.19.explanation': `"Destroyed" es un participio pasado que funciona como adjetivo modificando al sustantivo "building".`,
  'exercise.superlative-structures.19.pro_tip': `Consejo: los participios pasados (-ed) se usan habitualmente como adjetivos.`,

  'exercise.superlative-structures.20.prompt': `Empareja cada frase con su patrón gramatical:`,
  'exercise.superlative-structures.20.explanation': `Empareja: one of the most... = superlativo + sustantivo plural; The largest... = superlativo como sujeto; absolutely awful... = modificador extremo + infinitivo; appear to be dead = verbo de percepción + adjetivo.`,
  'exercise.superlative-structures.20.pro_tip': `Consejo: identifica la función oracional y el tipo de adjetivo.`,
};

const comparativeStructuresEsExtras: Record<string, string> = {
  'lesson.comparative-structures.title': `Estructuras Comparativas Avanzadas (Comparative Structures)`,
  'lesson.comparative-structures.description': `Expresa contrastes complejos con "prefer ... rather than", cláusulas comparativas ("more than most realize"), suficiencia ("enough to justify") y "less/fewer".`,
  'lesson.comparative-structures.intro':
    `### 1. Expresar Preferencias con "Rather Than"\n` +
    `Usa este patrón para comparar dos opciones o acciones expresando una clara preferencia:\n` +
    `• **Statement A + rather than + verbo base + sustantivo**\n` +
    `• *I would definitely prefer to explore space rather than study the ocean.* (Preferiría sin duda explorar el espacio en vez de estudiar el océano.)\n` +
    `• *I would certainly prefer to visit Africa rather than visit France.* (Sin duda preferiría visitar África antes que visitar Francia.)\n` +
    `⚠️ Fíjate: se mantiene el paralelismo verbal; el segundo *to* se omite habitualmente.\n\n` +
    `### 2. Cláusulas Comparativas ("More than Most Realize")\n` +
    `Contrasta un beneficio real frente a la creencia o expectativa general:\n` +
    `• **Sujeto + modal + verbo + more + frase preposicional + than + most + sustantivo + verbo**\n` +
    `• *We can learn more from research into space than most people realize.* (Podemos aprender más... de lo que la mayoría cree.)\n` +
    `• *They can earn more from a career in business than most people expect.* (Pueden ganar más... de lo que la mayoría espera.)\n\n` +
    `### 3. Suficiencia y Justificación ("Not ... Enough to Justify")\n` +
    `Indica si una ventaja compensa o no un coste o esfuerzo negativo:\n` +
    `• **Sustantivo + isn't + adjetivo + enough + to + verbo + sustantivo**\n` +
    `• *Space exploration just isn't useful enough to justify the cost.* (La exploración espacial no es lo bastante útil como para justificar su coste.)\n` +
    `• *Getting a college degree isn't rewarding enough to justify the debt.* (Tener un título universitario no compensa lo suficiente como para justificar la deuda.)\n` +
    `⚠️ Regla de orden: *adjetivo + enough* (nunca *enough useful*).\n\n` +
    `### 4. Comparar Acciones con "Less + Adjetivo + Infinitivo"\n` +
    `Usa el sujeto impersonal *It's* para comparar dos cursos de acción:\n` +
    `• **It's + less + adjetivo + infinitivo + sustantivo + than (it is) + infinitivo + sustantivo**\n` +
    `• *It's less important to fix future problems than (it is) to fix current ones.* (Es menos importante arreglar problemas futuros que arreglar los actuales.)\n` +
    `• *It's less costly to buy a new car than (it is) to rent an old one.* (Resulta menos costoso comprar un coche nuevo que alquilar uno viejo.)\n` +
    `• Se usa *ones* para no repetir el sustantivo plural (*current ones = current problems*).\n\n` +
    `### 5. Comparaciones Contables con "Fewer"\n` +
    `• **There are + fewer + sustantivo contable plural + to + sustantivo**\n` +
    `• *There are fewer benefits to space exploration.* (Hay menos beneficios en la exploración espacial.)\n` +
    `• ⚠️ Recuerda: *fewer* acompaña a sustantivos contables en plural (*benefits*), mientras que *less* se usa con incontables (*money, time*).`,

  'exercise.comparative-structures.1.prompt': `Completa la oración que expresa preferencia entre campos de exploración:`,
  'exercise.comparative-structures.1.explanation': `Se usa el verbo en forma base "study" tras "rather than": "rather than study the ocean".`,
  'exercise.comparative-structures.1.pro_tip': `Consejo: rather than + verbo base (paralelo a la primera acción).`,

  'exercise.comparative-structures.2.prompt': `Completa la conjunción comparativa que denota preferencia:`,
  'exercise.comparative-structures.2.explanation': `La locución correcta es "rather than" (y no "rather then"): "rather than visit France".`,
  'exercise.comparative-structures.2.pro_tip': `Consejo: rather THAN (comparación), no then (tiempo).`,

  'exercise.comparative-structures.3.prompt': `¿Qué oración expresa correctamente una preferencia firme entre dos acciones?`,
  'exercise.comparative-structures.3.explanation': `"I would definitely prefer to explore space rather than study the ocean" sigue la fórmula exacta "prefer to [verbo] rather than [verbo]".`,
  'exercise.comparative-structures.3.pro_tip': `Consejo: prefer to [verbo] ... rather than [verbo].`,

  'exercise.comparative-structures.4.prompt': `Ordena las palabras para expresar la preferencia de viaje:`,
  'exercise.comparative-structures.4.explanation': `"I would certainly prefer to visit Africa rather than visit France."`,
  'exercise.comparative-structures.4.pro_tip': `Consejo: I would certainly prefer to visit... rather than visit...`,

  'exercise.comparative-structures.5.prompt': `Completa la cláusula comparativa sobre los resultados de investigación:`,
  'exercise.comparative-structures.5.explanation': `Usa "than" para conectar el comparativo "more": "more from research into space than most people realize".`,
  'exercise.comparative-structures.5.pro_tip': `Consejo: verbo + MORE ... THAN [oración].`,

  'exercise.comparative-structures.6.prompt': `Completa la oración que compara los ingresos con la percepción habitual:`,
  'exercise.comparative-structures.6.explanation': `Usa el verbo base en plural "expect" concordando con "most people": "than most people expect".`,
  'exercise.comparative-structures.6.pro_tip': `Consejo: most people + verbo en plural (expect, realize).`,

  'exercise.comparative-structures.7.prompt': `En "We can learn more from research into space than most people realize", ¿qué función tiene la proposición?`,
  'exercise.comparative-structures.7.explanation': `La proposición "than most people realize" sirve de referencia comparativa para indicar que la realidad supera las expectativas comunes.`,
  'exercise.comparative-structures.7.pro_tip': `Consejo: las cláusulas comparativas contrastan hechos reales frente a suposiciones.`,

  'exercise.comparative-structures.8.prompt': `¿Verdadero o Falso?`,
  'exercise.comparative-structures.8.explanation': `Verdadero. "More" modifica adverbialmente al verbo "earn" denotando una mayor cantidad o ganancia.`,
  'exercise.comparative-structures.8.pro_tip': `Consejo: "more" puede actuar como adverbio que intensifica a un verbo de acción.`,

  'exercise.comparative-structures.9.prompt': `Completa la oración que expresa que el beneficio no justifica el coste:`,
  'exercise.comparative-structures.9.explanation': `"Enough" se coloca después del adjetivo: "isn't useful enough to justify the cost".`,
  'exercise.comparative-structures.9.pro_tip': `Consejo: adjetivo + ENOUGH (useful enough, tall enough).`,

  'exercise.comparative-structures.10.prompt': `Completa la oración con el verbo en forma base tras el infinitivo con to:`,
  'exercise.comparative-structures.10.explanation': `Usa el verbo base "justify": "isn't rewarding enough to justify the debt".`,
  'exercise.comparative-structures.10.pro_tip': `Consejo: to + verbo base (to justify).`,

  'exercise.comparative-structures.11.prompt': `¿Qué oración coloca adecuadamente el modificador "enough" con un adjetivo?`,
  'exercise.comparative-structures.11.explanation': `"Space exploration isn't useful enough to justify the cost" coloca "enough" inmediatamente después del adjetivo "useful".`,
  'exercise.comparative-structures.11.pro_tip': `Consejo: adjetivo + enough + to-infinitivo.`,

  'exercise.comparative-structures.12.prompt': `Ordena las palabras para formar la afirmación sobre los títulos universitarios:`,
  'exercise.comparative-structures.12.explanation': `"Getting a college degree isn't rewarding enough to justify the debt."`,
  'exercise.comparative-structures.12.pro_tip': `Consejo: Sujeto en gerundio + isn't + adjetivo + enough + to justify + sustantivo.`,

  'exercise.comparative-structures.13.prompt': `Completa la comparación sustituyendo el sustantivo plural repetido "problems":`,
  'exercise.comparative-structures.13.explanation': `Usa el pronombre "ones" para reemplazar al plural "problems": "...than it is to fix current ones."`,
  'exercise.comparative-structures.13.pro_tip': `Consejo: singular = one; plural = ones (current problems -> current ones).`,

  'exercise.comparative-structures.14.prompt': `¿Verdadero o Falso?`,
  'exercise.comparative-structures.14.explanation': `Verdadero. "(it is)" es un elemento opcional en la segunda parte de la proposición comparativa: "...than to rent an old one."`,
  'exercise.comparative-structures.14.pro_tip': `Consejo: en "than (it is) to [verbo]", omitir "(it is)" es perfectamente válido.`,

  'exercise.comparative-structures.15.prompt': `¿Qué oración conserva correctamente la estructura paralela de infinitivos?`,
  'exercise.comparative-structures.15.explanation': `"It's less costly to buy a new car than to rent an old one" mantiene ambas acciones en infinitivo paralelo ("to buy ... to rent").`,
  'exercise.comparative-structures.15.pro_tip': `Consejo: conserva la misma forma verbal a ambos lados de "than".`,

  'exercise.comparative-structures.16.prompt': `Organiza las palabras para comparar los dos cursos de acción:`,
  'exercise.comparative-structures.16.explanation': `"It's less costly to buy a new car than to rent an old one."`,
  'exercise.comparative-structures.16.pro_tip': `Consejo: It's less [adjetivo] to [verbo A] than to [verbo B].`,

  'exercise.comparative-structures.17.prompt': `Completa la afirmación sobre beneficios contables:`,
  'exercise.comparative-structures.17.explanation': `Se usa "fewer" delante de sustantivos contables en plural como "benefits": "There are fewer benefits to space exploration."`,
  'exercise.comparative-structures.17.pro_tip': `Consejo: FEWER + sustantivos contables en plural; LESS + incontables.`,

  'exercise.comparative-structures.18.prompt': `¿Verdadero o Falso?`,
  'exercise.comparative-structures.18.explanation': `Verdadero. "Fewer" se reserva para sustantivos contables (benefits, cars, people), mientras que "less" se usa para incontables (money, water, time).`,
  'exercise.comparative-structures.18.pro_tip': `Consejo: contable = fewer; incontable = less.`,

  'exercise.comparative-structures.19.prompt': `¿Qué preposición enlaza de forma natural "fewer benefits" con la actividad?`,
  'exercise.comparative-structures.19.explanation': `La preposición natural es "to": "fewer benefits to space exploration".`,
  'exercise.comparative-structures.19.pro_tip': `Consejo: benefits TO [actividad/asunto].`,

  'exercise.comparative-structures.20.prompt': `Empareja cada ejemplo con su estructura comparativa:`,
  'exercise.comparative-structures.20.explanation': `Empareja: prefer to explore... = prefer rather than; learn more... = verb + more than clause; isn't useful enough... = adj + enough + infinitivo; less costly... = It's less + adj + infinitivo.`,
  'exercise.comparative-structures.20.pro_tip': `Consejo: identifica el conector o modificador comparativo clave en cada patrón.`,
};

const politeIntonationEsExtras: Record<string, string> = {
  'lesson.polite-intonation.title': `Entonación Cortés vs. Descortés (Polite vs. Impolite Intonation)`,
  'lesson.polite-intonation.description': `Aprende cómo la curva de entonación determina si tus peticiones suenan educadas y colaborativas o impacientes y exigentes.`,
  'lesson.polite-intonation.intro':
    `### 1. ¿Qué es la Entonación?\n` +
    `La entonación es la **subida y bajada de la voz** al hablar. En inglés transmite no solo si una frase es pregunta o afirmación, sino también **gramática, grado de certeza, emociones y cortesía**.\n\n` +
    `### 2. La Regla Clave de la Cortesía\n` +
    `• **Peticiones educadas:** **Elevamos la voz al final (↗)**. Esta curva ascendente deja la frase abierta, mostrando consideración y permitiendo que la otra persona responda o rechace con comodidad.\n` +
    `• **Peticiones descorteses / exigentes:** Cuando **bajamos la voz al final (↘)** o usamos un tono plano y seco, la petición suena a orden imperativa, impaciencia o reproche.\n\n` +
    `### 3. Ejemplos de la Diapositiva\n` +
    `• **1a (Cortés):** *Is there any chance you could fix the TV now? ↗* (La voz sube suavemente al final)\n` +
    `• **1b (Descortés):** *Is there any chance you could fix the TV now? ↘* (La voz cae bruscamente al final, sonando a exigencia)\n` +
    `• **2a (Cortés):** *Do you think it would be possible for you to make a doctor's appointment? ↗*\n` +
    `• **2b (Descortés):** *Do you think it would be possible for you to make a doctor's appointment? ↘*\n\n` +
    `### 4. Regla de Oro del Inglés Hablado\n` +
    `Usar estructuras gramaticales educadas (*"Is there any chance..."*, *"Could you possibly..."*) **no basta por sí solo**. Si la entonación cae bruscamente o es monótona, el oyente lo percibirá como una orden descortés.`,

  'exercise.polite-intonation.1.prompt': `Completa la definición de entonación:`,
  'exercise.polite-intonation.1.explanation': `La entonación es la subida ("rise") y bajada ("fall") de la voz al hablar.`,
  'exercise.polite-intonation.1.pro_tip': `Consejo: entonación = melodía del tono de voz (rise and fall).`,

  'exercise.polite-intonation.2.prompt': `Completa la regla sobre la entonación cortés en inglés:`,
  'exercise.polite-intonation.2.explanation': `Al sonar educados, elevamos ("raise") la voz al final de la petición.`,
  'exercise.polite-intonation.2.pro_tip': `Consejo: las peticiones educadas suben al final (↗).`,

  'exercise.polite-intonation.3.prompt': `Según la lección, ¿qué ocurre si bajamos la voz al final de una petición?`,
  'exercise.polite-intonation.3.explanation': `Bajar la voz al final (↘) hace que la petición suene descortés, exigente o impaciente.`,
  'exercise.polite-intonation.3.pro_tip': `Consejo: tono descendente al final = orden o exigencia.`,

  'exercise.polite-intonation.4.prompt': `¿Verdadero o Falso?`,
  'exercise.polite-intonation.4.explanation': `Verdadero. La entonación transmite gramática, certeza, emociones y cortesía.`,
  'exercise.polite-intonation.4.pro_tip': `Consejo: la curva de entonación transmite la actitud del hablante.`,

  'exercise.polite-intonation.5.prompt': `Completa la oración que describe el contorno vocal cortés:`,
  'exercise.polite-intonation.5.explanation': `Para sonar cortés, la voz del hablante sube al final (↗): "Voice rises at the end".`,
  'exercise.polite-intonation.5.pro_tip': `Consejo: tono ascendente (↗) = petición amable y colaborativa.`,

  'exercise.polite-intonation.6.prompt': `Completa la petición cortés para pedir cita médica:`,
  'exercise.polite-intonation.6.explanation': `Usa el adjetivo "possible": "Do you think it would be possible for you to make a doctor's appointment?"`,
  'exercise.polite-intonation.6.pro_tip': `Consejo: would it be possible for you to [verbo]?`,

  'exercise.polite-intonation.7.prompt': `¿Por qué subir la voz al final hace que una petición suene educada?`,
  'exercise.polite-intonation.7.explanation': `El tono ascendente deja la pregunta abierta y da margen al interlocutor para declinar amablemente.`,
  'exercise.polite-intonation.7.pro_tip': `Consejo: el tono ascendente suaviza las peticiones.`,

  'exercise.polite-intonation.8.prompt': `¿Verdadero o Falso?`,
  'exercise.polite-intonation.8.explanation': `Verdadero. El tono ascendente final señala cortesía y consideración.`,
  'exercise.polite-intonation.8.pro_tip': `Consejo: las peticiones educadas invitan a colaborar.`,

  'exercise.polite-intonation.9.prompt': `Completa la explicación sobre la entonación descortés:`,
  'exercise.polite-intonation.9.explanation': `Una caída brusca de la voz al final transforma la pregunta en una orden impaciente.`,
  'exercise.polite-intonation.9.pro_tip': `Consejo: caída brusca de voz = orden imperativa.`,

  'exercise.polite-intonation.10.prompt': `Completa la frase sobre cómo el tono afecta a las palabras amables:`,
  'exercise.polite-intonation.10.explanation': `Incluso con palabras educadas, dejar caer el tono bruscamente te hace sonar impaciente o rudo.`,
  'exercise.polite-intonation.10.pro_tip': `Consejo: la entonación se impone sobre la cortesía gramatical.`,

  'exercise.polite-intonation.11.prompt': `Compara los ejemplos 1a y 1b de la diapositiva: ¿cuál es la diferencia acústica clave?`,
  'exercise.polite-intonation.11.explanation': `1a sube la voz al final (cortés), mientras que 1b baja la voz al final (descortés).`,
  'exercise.polite-intonation.11.pro_tip': `Consejo: ¡mismas palabras exactas con curvas de entonación opuestas!`,

  'exercise.polite-intonation.12.prompt': `Ordena las palabras para formar la pregunta indirecta sobre reparar la televisión:`,
  'exercise.polite-intonation.12.explanation': `"Is there any chance you could fix the TV now?"`,
  'exercise.polite-intonation.12.pro_tip': `Consejo: Is there any chance you could [verbo]...?`,

  'exercise.polite-intonation.13.prompt': `Completa la fórmula de petición indirecta educada:`,
  'exercise.polite-intonation.13.explanation': `La locución fijada es "Is there any chance you could...?" (¿Habría alguna posibilidad de que...?)`,
  'exercise.polite-intonation.13.pro_tip': `Consejo: Is there any CHANCE you could...`,

  'exercise.polite-intonation.14.prompt': `Completa la petición indirecta con el verbo modal adecuado:`,
  'exercise.polite-intonation.14.explanation': `Se usa el condicional hipotético "would": "Do you think it would be possible...?"`,
  'exercise.polite-intonation.14.pro_tip': `Consejo: it WOULD be possible.`,

  'exercise.polite-intonation.15.prompt': `¿Cuál de las siguientes oraciones construye correctamente una petición indirecta con "possible"?`,
  'exercise.polite-intonation.15.explanation': `"Do you think it would be possible for you to make a doctor's appointment?" emplea la fórmula indirecta correcta.`,
  'exercise.polite-intonation.15.pro_tip': `Consejo: Do you think it would be possible for [persona] to [verbo]?`,

  'exercise.polite-intonation.16.prompt': `Ordena las palabras para formar la petición educada de cita médica:`,
  'exercise.polite-intonation.16.explanation': `"Do you think it would be possible for you to make a doctor's appointment?"`,
  'exercise.polite-intonation.16.pro_tip': `Consejo: Do you think it would be possible for you to make a doctor's appointment?`,

  'exercise.polite-intonation.17.prompt': `¿Verdadero o Falso?`,
  'exercise.polite-intonation.17.explanation': `Verdadero. La gramática cortés sin una entonación adecuada se percibe igualmente como ruda o impositiva.`,
  'exercise.polite-intonation.17.pro_tip': `Consejo: para la cortesía real se requiere tanto gramática como entonación.`,

  'exercise.polite-intonation.18.prompt': `Organiza las palabras para expresar la regla básica de pronunciación:`,
  'exercise.polite-intonation.18.explanation': `"When we sound polite, we raise our voice at the end."`,
  'exercise.polite-intonation.18.pro_tip': `Consejo: When we sound polite, we raise our voice at the end.`,

  'exercise.polite-intonation.19.prompt': `¿Cómo cambia la función comunicativa al bajar el tono al final de una petición?`,
  'exercise.polite-intonation.19.explanation': `Bajar el tono transforma la pregunta en una orden imperativa o en una muestra de enfado o impaciencia.`,
  'exercise.polite-intonation.19.pro_tip': `Consejo: el tono descendente elimina la opción de elección del oyente.`,

  'exercise.polite-intonation.20.prompt': `Relaciona cada patrón de entonación con la actitud que transmite:`,
  'exercise.polite-intonation.20.explanation': `Subir la voz = cortés; bajar la voz = descortés; chance = petición con chance; possible = petición con possible.`,
  'exercise.polite-intonation.20.pro_tip': `Consejo: asocia la entonación y la fórmula con su impacto social.`,
};

const complexSentencesEsExtras: Record<string, string> = {
  'lesson.complex-sentences.title': `Oraciones Complejas (Complex Sentences)`,
  'lesson.complex-sentences.description': `Domina las oraciones complejas: combina proposiciones independientes y subordinadas usando conjunciones ("because", "because of", "so", "before", "as") con puntuación correcta.`,
  'lesson.complex-sentences.intro':
    `### 1. ¿Qué es una Oración Compleja?\n` +
    `• Una **oración compleja** consta de dos proposiciones: **una proposición independiente** (la idea principal) y **una proposición subordinada/dependiente** (la idea secundaria).\n` +
    `• Las oraciones complejas muestran las relaciones lógicas entre ideas (causa, propósito, tiempo) con mucha más claridad que las oraciones simples.\n\n` +
    `### 2. Proposición Independiente vs. Dependiente\n` +
    `• **Proposición Independiente (Main Clause):** Expresa una idea completa y tiene sentido por sí sola (*we arrived late to the meeting*).\n` +
    `• **Proposición Dependiente (Subordinate Clause):** No puede existir de forma aislada; depende de la proposición principal para tener significado (*Because of heavy traffic*).\n\n` +
    `### 3. Regla de Puntuación con Coma\n` +
    `• Si la **proposición dependiente va primero**, se coloca una **coma** detrás de ella:\n` +
    `  *Because of heavy traffic, we arrived late to the meeting.*\n` +
    `• Si la **proposición independiente va primero**, normalmente **no se pone coma**:\n` +
    `  *He left the room before the guests arrived.*\n\n` +
    `### 4. Conectores Subordinantes Clave de la Lección\n` +
    `• **because + proposición completa** (causa/motivo) → *He could not swim in the pool because he forgot his bathing suit.*\n` +
    `• **because of + frase nominal** (causa/motivo) → *Pierre's body was exposed because of the prank.*\n` +
    `• **so + proposición** (finalidad/propósito) → *The presenters shortened their presentation so the audience could ask questions.*\n` +
    `• **as + proposición** (tiempo simultáneo / mientras) → *The teacher insulted me as he left.*\n` +
    `• **before + frase nominal** (tiempo anterior) → *Seniors and students line up outside before the event.*\n` +
    `• **before + proposición** (tiempo anterior) → *He left the room before the guests arrived.*`,

  'exercise.complex-sentences.1.prompt': `Completa la definición de oración compleja:`,
  'exercise.complex-sentences.1.explanation': `Una oración compleja tiene dos proposiciones: una independiente y una dependiente ("dependent clause").`,
  'exercise.complex-sentences.1.pro_tip': `Consejo: oración compleja = 1 independiente + 1 dependiente.`,

  'exercise.complex-sentences.2.prompt': `Identifica el tipo de proposición que contiene la idea principal:`,
  'exercise.complex-sentences.2.explanation': `La idea principal siempre se expresa en la proposición independiente ("independent clause"), la cual tiene sentido completo por sí misma.`,
  'exercise.complex-sentences.2.pro_tip': `Consejo: proposición independiente = idea principal.`,

  'exercise.complex-sentences.3.prompt': `En "Because of heavy traffic, we arrived late to the meeting", ¿qué parte es la proposición dependiente?`,
  'exercise.complex-sentences.3.explanation': `"Because of heavy traffic" es la proposición dependiente; no puede sostenerse sola como una oración completa.`,
  'exercise.complex-sentences.3.pro_tip': `Consejo: la parte encabezada por el conector subordinante es la proposición dependiente.`,

  'exercise.complex-sentences.4.prompt': `¿Verdadero o Falso?`,
  'exercise.complex-sentences.4.explanation': `Verdadero. Una proposición dependiente no puede subsistir por sí sola; depende de la proposición principal para cobrar sentido.`,
  'exercise.complex-sentences.4.pro_tip': `Consejo: dependiente = subordinada (incompleta por sí sola).`,

  'exercise.complex-sentences.5.prompt': `Completa la oración con la conjunción que introduce una proposición completa:`,
  'exercise.complex-sentences.5.explanation': `Se usa "because" delante de una proposición con sujeto y verbo ("he forgot his bathing suit").`,
  'exercise.complex-sentences.5.pro_tip': `Consejo: because + proposición (sujeto + verbo); because of + frase nominal.`,

  'exercise.complex-sentences.6.prompt': `Completa la oración con la forma preposicional delante de un sintagma nominal:`,
  'exercise.complex-sentences.6.explanation': `Usa "because of" delante del sustantivo/sintagma nominal "the prank".`,
  'exercise.complex-sentences.6.pro_tip': `Consejo: because OF + sintagma nominal (sin verbo conjugado).`,

  'exercise.complex-sentences.7.prompt': `¿Por qué se usa "because of" en "Because of heavy traffic, we arrived late" en lugar de "because"?`,
  'exercise.complex-sentences.7.explanation': `"Heavy traffic" es un sintagma nominal, por lo que gramaticalmente se requiere la preposición "because of".`,
  'exercise.complex-sentences.7.pro_tip': `Consejo: sintagma nominal = because of; proposición con verbo = because.`,

  'exercise.complex-sentences.8.prompt': `¿Verdadero o Falso?`,
  'exercise.complex-sentences.8.explanation': `Verdadero. "Because" introduce una proposición (oración), mientras que "because of" introduce un sintagma nominal.`,
  'exercise.complex-sentences.8.pro_tip': `Consejo: because + oración vs. because of + sustantivo.`,

  'exercise.complex-sentences.9.prompt': `Completa la oración que describe acciones simultáneas:`,
  'exercise.complex-sentences.9.explanation': `Se usa "as" para indicar que dos acciones ocurren al mismo tiempo: "as he left" (mientras / cuando salía).`,
  'exercise.complex-sentences.9.pro_tip': `Consejo: as + proposición = en el momento en que / mientras.`,

  'exercise.complex-sentences.10.prompt': `Completa la oración con la conjunción de tiempo delante de una proposición:`,
  'exercise.complex-sentences.10.explanation': `Usa "before" para indicar que un evento ocurrió antes que otro: "before the guests arrived".`,
  'exercise.complex-sentences.10.pro_tip': `Consejo: before + proposición (evento cronológicamente anterior).`,

  'exercise.complex-sentences.11.prompt': `En "Seniors and students line up outside before the event", ¿qué sigue a "before"?`,
  'exercise.complex-sentences.11.explanation': `"The event" es un sintagma nominal que funciona como término de la preposición "before".`,
  'exercise.complex-sentences.11.pro_tip': `Consejo: "before" puede actuar como preposición ante un sustantivo.`,

  'exercise.complex-sentences.12.prompt': `Ordena las palabras para formar la oración compleja temporal:`,
  'exercise.complex-sentences.12.explanation': `"He left the room before the guests arrived."`,
  'exercise.complex-sentences.12.pro_tip': `Consejo: Proposición principal + before + proposición subordinada.`,

  'exercise.complex-sentences.13.prompt': `Completa la oración que expresa la finalidad de acortar la presentación:`,
  'exercise.complex-sentences.13.explanation': `Usa "so" para expresar finalidad: "so the audience could ask questions" (para que el público pudiera...).`,
  'exercise.complex-sentences.13.pro_tip': `Consejo: so + proposición modal de finalidad.`,

  'exercise.complex-sentences.14.prompt': `Elige la regla de puntuación correcta:`,
  'exercise.complex-sentences.14.explanation': `Cuando la proposición dependiente va al inicio de la oración, debe seguirse de una coma.`,
  'exercise.complex-sentences.14.pro_tip': `Consejo: si la subordinada va primero -> ¡lleva coma!`,

  'exercise.complex-sentences.15.prompt': `¿Qué oración coloca adecuadamente la coma en una estructura compleja?`,
  'exercise.complex-sentences.15.explanation': `"Because of heavy traffic, we arrived late to the meeting" sitúa la coma justo tras la proposición subordinada inicial.`,
  'exercise.complex-sentences.15.pro_tip': `Consejo: la coma separa la subordinada inicial de la proposición principal.`,

  'exercise.complex-sentences.16.prompt': `Ordena las palabras para expresar la relación de causa y efecto:`,
  'exercise.complex-sentences.16.explanation': `"Because of heavy traffic, we arrived late to the meeting."`,
  'exercise.complex-sentences.16.pro_tip': `Consejo: Because of + sintagma nominal, + proposición principal.`,

  'exercise.complex-sentences.17.prompt': `¿Verdadero o Falso?`,
  'exercise.complex-sentences.17.explanation': `Verdadero. Las oraciones complejas articulan las relaciones lógicas entre ideas mucho mejor que las oraciones simples.`,
  'exercise.complex-sentences.17.pro_tip': `Consejo: la subordinación añade precisión lógica y narrativa.`,

  'exercise.complex-sentences.18.prompt': `Organiza las palabras para formar la oración compleja de propósito:`,
  'exercise.complex-sentences.18.explanation': `"The presenters shortened their presentation so the audience could ask questions."`,
  'exercise.complex-sentences.18.pro_tip': `Consejo: Sujeto + verbo + objeto + so + proposición subordinada.`,

  'exercise.complex-sentences.19.prompt': `¿Qué oración es una oración compleja formada por una proposición independiente y una dependiente?`,
  'exercise.complex-sentences.19.explanation': `"He could not swim in the pool because he forgot his bathing suit" consta de una principal y una subordinada introducida por "because".`,
  'exercise.complex-sentences.19.pro_tip': `Consejo: busca una conjunción subordinante que introduzca una cláusula dependiente.`,

  'exercise.complex-sentences.20.prompt': `Empareja cada conjunción con la relación de significado que expresa:`,
  'exercise.complex-sentences.20.explanation': `because = causa/motivo; so = propósito; before = tiempo anterior; as = tiempo simultáneo.`,
  'exercise.complex-sentences.20.pro_tip': `Consejo: conecta el subordinante con su función lógica.`,
};

const jobCategoriesEsExtras: Record<string, string> = {
  'lesson.job-categories.title': `Categorías de Empleo y Personalidad (Job Categories)`,
  'lesson.job-categories.description': `Analiza trayectorias laborales, rasgos de personalidad (extrovertido, introvertido, ambivertido) y estilos de trabajo en diversas profesiones.`,
  'lesson.job-categories.intro':
    `### 1. Categorías Laborales y Perfiles de Personalidad\n` +
    `Descubre cómo las cualidades personales, preferencias sociales y ritmo de trabajo encajan con distintas profesiones:\n\n` +
    `### 2. Categoría 1: Directivos, Deportistas y Comerciales (Acción y Liderazgo)\n` +
    `• **Cualidades típicas:** Extrovertido, competitivo, seguro para opinar en público (*comfortable speaking up*), sociable, buenas habilidades de presentación.\n` +
    `• **Qué disfrutan:** Trabajar en equipo, liderar equipos, causar una buena impresión (*make an impression*), tomar decisiones (*make decisions*), ritmo rápido (*fast-pace*), debatir problemas y soluciones.\n\n` +
    `### 3. Categoría 2: Profesores, Personal de Enfermería y Asesores de Compras (Apoyo y Personas)\n` +
    `• **Cualidades típicas:** Un poco introvertido y extrovertido a la vez (ambivertido), disfruta de la compañía ajena, interactúa con perfiles muy diversos, escucha activa (*good listening skills*), tolerante con los demás.\n` +
    `• **Qué disfrutan:** Trabajar en equipo e individualmente, ayudar a los demás, ritmo moderado (*medium-pace*), buscar soluciones a problemas personales.\n\n` +
    `### 4. Categoría 3: Escritores, Artistas, Diseñadores y Chefs (Creatividad e Independencia)\n` +
    `• **Cualidades típicas:** Introvertido, destaca a través de sus creaciones, prefiere trabajar en solitario, no le importa ser original/raro (*doesn't mind being weird*).\n` +
    `• **Qué disfrutan:** Crear cosas, trabajar con las manos (*work with hands*), explorar formas innovadoras de hacer las cosas, idear conceptos.\n\n` +
    `### 5. Colocaciones Laborales Clave\n` +
    `• *comfortable speaking up* (confianza para hablar y alzar la voz)\n` +
    `• *make an impression* (causar impresión)\n` +
    `• *make decisions* (tomar decisiones)\n` +
    `• *work with your hands* (trabajo manual/artesanal)`,

  'exercise.job-categories.1.prompt': `Completa la descripción de un ejecutivo o vendedor:`,
  'exercise.job-categories.1.explanation': `Se usa el gerundio "speaking": "comfortable speaking up in public" (cómodo al expresar su opinión).`,
  'exercise.job-categories.1.pro_tip': `Consejo: comfortable + verbo-ing (comfortable speaking up).`,

  'exercise.job-categories.2.prompt': `Completa la locución fija que expresa causar impacto:`,
  'exercise.job-categories.2.explanation': `La colocación estándar es "making an impression" (causar buena impresión).`,
  'exercise.job-categories.2.pro_tip': `Consejo: MAKE an impression (no do an impression).`,

  'exercise.job-categories.3.prompt': `¿Qué conjunto de cualidades define mejor a un Ejecutivo, Deportista o Comercial?`,
  'exercise.job-categories.3.explanation': `Suelen ser extrovertidos, competitivos, seguros al hablar en público y amantes de un ritmo rápido.`,
  'exercise.job-categories.3.pro_tip': `Consejo: competitivo + extrovertido + ritmo rápido = liderazgo y acción.`,

  'exercise.job-categories.4.prompt': `¿Verdadero o Falso?`,
  'exercise.job-categories.4.explanation': `Verdadero. Directivos, deportistas y comerciales disfrutan tomando decisiones y liderando equipos a un ritmo ágil.`,
  'exercise.job-categories.4.pro_tip': `Consejo: la toma de decisiones y el liderazgo definen estos roles.`,

  'exercise.job-categories.5.prompt': `Completa la descripción de docentes y personal de enfermería:`,
  'exercise.job-categories.5.explanation': `Presentan un perfil equilibrado: "a little bit of an introvert and an extrovert".`,
  'exercise.job-categories.5.pro_tip': `Consejo: introvertido y extrovertido a la vez (ambivertido).`,

  'exercise.job-categories.6.prompt': `Completa la habilidad clave en la atención a personas y enfermería:`,
  'exercise.job-categories.6.explanation': `Requieren una gran capacidad de escucha activa: "good listening skills".`,
  'exercise.job-categories.6.pro_tip': `Consejo: good listening skills = habilidad de escucha activa.`,

  'exercise.job-categories.7.prompt': `¿Qué ritmo y dinámica de trabajo prefieren docentes y enfermeros?`,
  'exercise.job-categories.7.explanation': `Prefieren un ritmo moderado ("medium pace"), alternando trabajo en equipo e individual mientras ayudan a otros.`,
  'exercise.job-categories.7.pro_tip': `Consejo: ritmo moderado + vocación de ayuda = profesiones asistenciales.`,

  'exercise.job-categories.8.prompt': `¿Verdadero o Falso?`,
  'exercise.job-categories.8.explanation': `Verdadero. Docentes y enfermeros disfrutan buscando soluciones a problemas personales y aceptan a los demás.`,
  'exercise.job-categories.8.pro_tip': `Consejo: la empatía y la resolución de problemas caracterizan su labor.`,

  'exercise.job-categories.9.prompt': `Completa el rasgo creativo según la diapositiva:`,
  'exercise.job-categories.9.explanation': `Escritores y artistas son habitualmente introvertidos que prefieren trabajar solos ("alone").`,
  'exercise.job-categories.9.pro_tip': `Consejo: los perfiles creativos introvertidos prefieren trabajar a solas.`,

  'exercise.job-categories.10.prompt': `Completa la cualidad singular de los profesionales creativos:`,
  'exercise.job-categories.10.explanation': `Los creativos expresan su originalidad y "don't mind being weird" (no les molesta ser peculiares).`,
  'exercise.job-categories.10.pro_tip': `Consejo: doesn't mind being weird = acepta su singularidad/rareza.`,

  'exercise.job-categories.11.prompt': `¿Cómo demuestran su valía escritores, artistas, diseñadores y cocineros?`,
  'exercise.job-categories.11.explanation': `Destacan y se lucen a través de las obras u objetos que crean, no con exhibicionismo social.`,
  'exercise.job-categories.11.pro_tip': `Consejo: shows off through the things they create.`,

  'exercise.job-categories.12.prompt': `Ordena las palabras para describir el estilo de trabajo creativo:`,
  'exercise.job-categories.12.explanation': `"Artists enjoy exploring new ways of doing things."`,
  'exercise.job-categories.12.pro_tip': `Consejo: Sujeto + enjoy + gerundio + new ways of doing things.`,

  'exercise.job-categories.13.prompt': `Completa la expresión para la artesanía y la creatividad manual:`,
  'exercise.job-categories.13.explanation': `Chefs y diseñadores disfrutan de "working with their hands" (trabajar con las manos).`,
  'exercise.job-categories.13.pro_tip': `Consejo: work with one's hands = creación manual/táctil.`,

  'exercise.job-categories.14.prompt': `Completa la colocación para la capacidad de liderazgo:`,
  'exercise.job-categories.14.explanation': `Los ejecutivos disfrutan de "making decisions" (tomar decisiones).`,
  'exercise.job-categories.14.pro_tip': `Consejo: MAKE decisions (no do decisions).`,

  'exercise.job-categories.15.prompt': `¿Qué significa la expresión "comfortable speaking up"?`,
  'exercise.job-categories.15.explanation': `"Speaking up" significa tener la seguridad de manifestar tu opinión abiertamente en público.`,
  'exercise.job-categories.15.pro_tip': `Consejo: speak up = alzar la voz / expresar tu punto de vista.`,

  'exercise.job-categories.16.prompt': `Ordena las palabras para formar la frase sobre las profesiones asistenciales:`,
  'exercise.job-categories.16.explanation': `"Nurses enjoy helping others at a medium pace."`,
  'exercise.job-categories.16.pro_tip': `Consejo: Sujeto + enjoy + helping others + at a medium pace.`,

  'exercise.job-categories.17.prompt': `¿Verdadero o Falso?`,
  'exercise.job-categories.17.explanation': `Verdadero. Los rasgos de personalidad y las preferencias sociales se alinean de forma natural con los perfiles profesionales.`,
  'exercise.job-categories.17.pro_tip': `Consejo: el autoconocimiento orienta la afinidad laboral.`,

  'exercise.job-categories.18.prompt': `Organiza las palabras para describir el ritmo y las tareas de un directivo:`,
  'exercise.job-categories.18.explanation': `"Executives enjoy a fast-pace and discussing problems and solutions."`,
  'exercise.job-categories.18.pro_tip': `Consejo: Executives enjoy a fast-pace and discussing problems and solutions.`,

  'exercise.job-categories.19.prompt': `Si a alguien le apasiona trabajar con las manos, pensar en ideas y trabajar a solas, ¿qué grupo encaja mejor?`,
  'exercise.job-categories.19.explanation': `Estos rasgos corresponden a profesionales creativos como escritores, artistas, diseñadores y chefs.`,
  'exercise.job-categories.19.pro_tip': `Consejo: trabajar solo + manualidades + ideas = Writer, Artist, Designer, Chef.`,

  'exercise.job-categories.20.prompt': `Empareja cada categoría laboral con su perfil de personalidad característico:`,
  'exercise.job-categories.20.explanation': `Ejecutivo/Atleta = extrovertido/ritmo rápido; Docente/Enfermero = ambivertido/ayuda; Escritor/Artista = introvertido/trabaja solo; manos/ideas = profesionales creativos.`,
  'exercise.job-categories.20.pro_tip': `Consejo: vincula los puestos laborales con los rasgos y estilos de trabajo.`,
};

const reducedRelativeClausesEsExtras: Record<string, string> = {
  'lesson.reduced-relative-clauses.title': `Pronombres Relativos y Cláusulas Reducidas (Reduced Relative Clauses)`,
  'lesson.reduced-relative-clauses.description': `Domina proposiciones explicativas vs. especificativas, el uso de comas, pronombres relativos ("who", "whose", "that", "when") y la reducción de cláusulas relativas de sujeto.`,
  'lesson.reduced-relative-clauses.intro':
    `### 1. Dos Propósitos de las Cláusulas Relativas\n` +
    `• **No explicativas / No especificativas (Non-defining):** Añaden información extra, prescindible. Van **siempre entre comas**.\n` +
    `  *Cain, whose work explores the character of introverts, feels that American society often prefers extroverts.*\n` +
    `  *It's Saturday morning, when we discuss my choice of the week.*\n` +
    `  💡 *Consejo:* Piensa en las comas como "asas" para retirar la información accesoria sin que la oración principal pierda sentido.\n` +
    `• **Especificativas (Defining):** Aportan información esencial para identificar al sustantivo. **No llevan comas**.\n` +
    `  *An extrovert is someone who easily attracts attention.*\n` +
    `  *These are the two stereotypes that are accepted by most people.*\n\n` +
    `### 2. Reglas de Pronombres Relativos\n` +
    `• Usa **who** para personas, **that** o **which** para cosas, **whose** para posesión/autoría y **when** para tiempo.\n` +
    `• ⚠️ Fundamental: **that** NUNCA se utiliza en proposiciones con comas (non-defining).\n\n` +
    `### 3. Cláusulas Relativas Reducidas (Reduced Relative Clauses)\n` +
    `Las proposiciones relativas de sujeto se pueden abreviar omitiendo el **pronombre relativo** y el **verbo be**:\n` +
    `• **Con be + adjetivo:**\n` +
    `  *People who are worried about meeting strangers...* → *People **worried** about meeting strangers...*\n` +
    `• **Con be + participio pasado:**\n` +
    `  *The bus that is parked in front of the office...* → *The bus **parked** in front of the office...*\n` +
    `• **Con sintagmas nominales (aposiciones):**\n` +
    `  *Steven, who is a quick learner, adapts easily...* → *Steven, **a quick learner**, adapts easily...*\n\n` +
    `⚠️ Restricción: **No se pueden reducir** las cláusulas de relativo de objeto (*ej. The book that I read*).`,

  'exercise.reduced-relative-clauses.1.prompt': `Completa la afirmación sobre la puntuación en cláusulas relativas:`,
  'exercise.reduced-relative-clauses.1.explanation': `Las cláusulas relativas no especificativas ("non-defining") añaden información extra y van siempre entre comas ("commas").`,
  'exercise.reduced-relative-clauses.1.pro_tip': `Consejo: información extra = siempre entre comas.`,

  'exercise.reduced-relative-clauses.2.prompt': `Completa la definición de cláusula especificativa:`,
  'exercise.reduced-relative-clauses.2.explanation': `Una cláusula relativa especificativa aporta información esencial ("essential") para identificar al sustantivo.`,
  'exercise.reduced-relative-clauses.2.pro_tip': `Consejo: defining = información esencial (sin comas).`,

  'exercise.reduced-relative-clauses.3.prompt': `¿Qué oración es una cláusula relativa no especificativa con información extra prescindible?`,
  'exercise.reduced-relative-clauses.3.explanation': `"Cain, whose work explores the character of introverts, feels that American society prefers extroverts" usa comas para aportar detalles complementarios.`,
  'exercise.reduced-relative-clauses.3.pro_tip': `Consejo: fíjate en las comas que aíslan la información secundaria.`,

  'exercise.reduced-relative-clauses.4.prompt': `¿Verdadero o Falso?`,
  'exercise.reduced-relative-clauses.4.explanation': `Verdadero. Las comas actúan como "asas"; si retiras la cláusula entre comas, la oración principal sigue siendo completa y correcta.`,
  'exercise.reduced-relative-clauses.4.pro_tip': `Consejo: comas como asas = información extra prescindible.`,

  'exercise.reduced-relative-clauses.5.prompt': `Completa la oración con el pronombre relativo de posesión:`,
  'exercise.reduced-relative-clauses.5.explanation': `Se usa "whose" para indicar posesión o autoría: "whose work explores...".`,
  'exercise.reduced-relative-clauses.5.pro_tip': `Consejo: whose + sustantivo (pronombre relativo posesivo).`,

  'exercise.reduced-relative-clauses.6.prompt': `Completa la oración que describe cualidades personales:`,
  'exercise.reduced-relative-clauses.6.explanation': `Se usa "who" para referirse a personas en una cláusula especificativa: "someone who easily attracts attention".`,
  'exercise.reduced-relative-clauses.6.pro_tip': `Consejo: someone WHO (personas).`,

  'exercise.reduced-relative-clauses.7.prompt': `¿Qué oración utiliza correctamente "when" en una cláusula de relativo temporal?`,
  'exercise.reduced-relative-clauses.7.explanation': `"It's Saturday morning, when we discuss my choice of the week" utiliza correctamente "when" tras una expresión temporal.`,
  'exercise.reduced-relative-clauses.7.pro_tip': `Consejo: expresión temporal + , when + proposición.`,

  'exercise.reduced-relative-clauses.8.prompt': `¿Verdadero o Falso?`,
  'exercise.reduced-relative-clauses.8.explanation': `Verdadero. "That" jamás puede emplearse en cláusulas relativas entre comas (non-defining).`,
  'exercise.reduced-relative-clauses.8.pro_tip': `Consejo: nunca uses "that" tras una coma en cláusulas de relativo.`,

  'exercise.reduced-relative-clauses.9.prompt': `Completa la cláusula relativa reducida con un adjetivo:`,
  'exercise.reduced-relative-clauses.9.explanation': `Se omite "who are" para dejar el sintagma adjetival: "People worried about meeting strangers...".`,
  'exercise.reduced-relative-clauses.9.pro_tip': `Consejo: [who are] worried -> worried.`,

  'exercise.reduced-relative-clauses.10.prompt': `Completa la cláusula relativa reducida con un participio pasado:`,
  'exercise.reduced-relative-clauses.10.explanation': `Se omite "that is" para dejar el participio pasado: "The bus parked in front of the office...".`,
  'exercise.reduced-relative-clauses.10.pro_tip': `Consejo: [that is] parked -> parked.`,

  'exercise.reduced-relative-clauses.11.prompt': `¿Cómo se redujo "The bus that is parked in front of the office"?`,
  'exercise.reduced-relative-clauses.11.explanation': `Se redujo omitiendo tanto el pronombre relativo "that" como la forma verbal "is".`,
  'exercise.reduced-relative-clauses.11.pro_tip': `Consejo: omitir pronombre relativo + verbo be.`,

  'exercise.reduced-relative-clauses.12.prompt': `Ordena las palabras para formar la oración con relativo reducido:`,
  'exercise.reduced-relative-clauses.12.explanation': `"People worried about meeting strangers often get nervous at parties."`,
  'exercise.reduced-relative-clauses.12.pro_tip': `Consejo: Sustantivo + adjetivo reducido + predicado principal.`,

  'exercise.reduced-relative-clauses.13.prompt': `Completa la oración reducida con una aposición nominal:`,
  'exercise.reduced-relative-clauses.13.explanation': `"Steven, a quick learner, adapts easily..." reduce "who is a quick learner".`,
  'exercise.reduced-relative-clauses.13.pro_tip': `Consejo: [who is] a quick learner -> a quick learner.`,

  'exercise.reduced-relative-clauses.14.prompt': `Completa la regla sobre qué cláusulas de relativo pueden reducirse:`,
  'exercise.reduced-relative-clauses.14.explanation': `Solo las cláusulas relativas de sujeto pueden reducirse; las de objeto no se pueden reducir de este modo.`,
  'exercise.reduced-relative-clauses.14.pro_tip': `Consejo: solo relativas de sujeto; las de objeto no se reducen.`,

  'exercise.reduced-relative-clauses.15.prompt': `¿Qué oración reduce correctamente "Steven, who is a quick learner, adapts easily"?`,
  'exercise.reduced-relative-clauses.15.explanation': `"Steven, a quick learner, adapts easily to new situations" conserva las comas de la aposición explicativa.`,
  'exercise.reduced-relative-clauses.15.pro_tip': `Consejo: mantén las comas en las aposiciones explicativas.`,

  'exercise.reduced-relative-clauses.16.prompt': `Ordena las palabras para formar la oración con la aposición nominal reducida:`,
  'exercise.reduced-relative-clauses.16.explanation': `"Steven, a quick learner, adapts easily to new situations."`,
  'exercise.reduced-relative-clauses.16.pro_tip': `Consejo: Nombre, + a quick learner, + verbo + complemento.`,

  'exercise.reduced-relative-clauses.17.prompt': `¿Verdadero o Falso?`,
  'exercise.reduced-relative-clauses.17.explanation': `Verdadero. "Parked" es un participio pasado que encabeza una cláusula relativa reducida modificando a "the bus".`,
  'exercise.reduced-relative-clauses.17.pro_tip': `Consejo: los participios pasados funcionan como reducciones pasivas.`,

  'exercise.reduced-relative-clauses.18.prompt': `Organiza las palabras para formar la oración con relativo reducido:`,
  'exercise.reduced-relative-clauses.18.explanation': `"The bus parked in front of the office is the one we'll take."`,
  'exercise.reduced-relative-clauses.18.pro_tip': `Consejo: The bus + parked in front of the office + is the one we'll take.`,

  'exercise.reduced-relative-clauses.19.prompt': `¿Qué cláusula de relativo NO se puede reducir?`,
  'exercise.reduced-relative-clauses.19.explanation': `"The book that I read yesterday" es una cláusula relativa de objeto ("I read that"), por lo que no puede reducirse eliminando pronombre y be.`,
  'exercise.reduced-relative-clauses.19.pro_tip': `Consejo: las relativas de objeto no se reducen.`,

  'exercise.reduced-relative-clauses.20.prompt': `Empareja cada cláusula completa con su correspondiente forma reducida:`,
  'exercise.reduced-relative-clauses.20.explanation': `who are worried -> worried; that is parked -> parked; who is a quick learner -> a quick learner; whose work -> no se reduce.`,
  'exercise.reduced-relative-clauses.20.pro_tip': `Consejo: empareja la cláusula completa con su reducción directa.`,
};

const sentenceTypesEsExtras: Record<string, string> = {
  'lesson.sentence-types.title': `Tipos de Oraciones: Simples, Compuestas y Complejas (Sentence Types)`,
  'lesson.sentence-types.description': `Domina la clasificación oracional: distingue oraciones simples (con sujetos o predicados compuestos), compuestas (coordinadas FANBOYS con coma) y complejas (subordinadas).`,
  'lesson.sentence-types.intro':
    `### 1. Oraciones Simples (Simple Sentences)\n` +
    `• Consta de **una sola proposición independiente** que expresa una idea completa.\n` +
    `• Puede variar en el número de sujetos y verbos:\n` +
    `  - *Thomas is handsome.* (1 sujeto + 1 verbo)\n` +
    `  - *Thomas and Mike are handsome.* (2 sujetos [sujeto compuesto] + 1 verbo)\n` +
    `  - *Thomas is handsome and looks confident.* (1 sujeto + 2 verbos [predicado compuesto])\n` +
    `  ⚠️ **Atención:** ¡**No se usa coma** antes de *and* cuando dos verbos comparten el mismo sujeto!\n\n` +
    `### 2. Oraciones Compuestas (Compound Sentences)\n` +
    `• Formada por **al menos dos proposiciones independientes relacionadas** unidas por una conjunción coordinante (**FANBOYS**: *for, and, nor, but, or, yet, so*).\n` +
    `• **Regla de puntuación:** Siempre se coloca una **coma antes de la conjunción coordinante**:\n` +
    `  - *Thomas is handsome, and he looks confident.*\n` +
    `  - *Thomas is handsome, but he doesn't have confidence.*\n\n` +
    `### 3. Oraciones Complejas (Complex Sentences)\n` +
    `• Contiene **una proposición independiente** conectada a **una proposición dependiente/subordinada**.\n` +
    `• La proposición dependiente comienza con una conjunción subordinante (*after, before, when, because, although, if, since*):\n` +
    `  - *Thomas is smart although he sometimes makes mistakes.*\n` +
    `  - *Thomas will get a good grade since he studied hard.*`,

  'exercise.sentence-types.1.prompt': `Completa la definición de oración simple:`,
  'exercise.sentence-types.1.explanation': `Una oración simple tiene exactamente una sola ("one") proposición independiente y expresa una idea completa.`,
  'exercise.sentence-types.1.pro_tip': `Consejo: oración simple = exactamente UNA proposición independiente.`,

  'exercise.sentence-types.2.prompt': `Completa la oración con sujeto compuesto:`,
  'exercise.sentence-types.2.explanation': `Dos sujetos unidos por "and" ("Thomas and Mike") concuerdan en plural con "are".`,
  'exercise.sentence-types.2.pro_tip': `Consejo: sujeto compuesto = verbo en plural (Thomas and Mike ARE).`,

  'exercise.sentence-types.3.prompt': `¿Por qué "Thomas is handsome and looks confident" es una oración SIMPLE?`,
  'exercise.sentence-types.3.explanation': `Tiene un solo sujeto ("Thomas") que comparte dos verbos ("is" y "looks"). Sigue siendo una sola proposición independiente.`,
  'exercise.sentence-types.3.pro_tip': `Consejo: 1 sujeto + 2 verbos = predicado compuesto en oración simple (sin coma).`,

  'exercise.sentence-types.4.prompt': `¿Verdadero o Falso?`,
  'exercise.sentence-types.4.explanation': `Verdadero. Una oración simple puede tener varios sujetos y varios verbos, siempre que forme una sola proposición independiente.`,
  'exercise.sentence-types.4.pro_tip': `Consejo: varios verbos para un mismo sujeto sigue siendo oración simple.`,

  'exercise.sentence-types.5.prompt': `Completa la oración compuesta con la conjunción de contraste:`,
  'exercise.sentence-types.5.explanation': `Usa "but" para contrastar dos proposiciones independientes en una oración compuesta: "Thomas is handsome, but he doesn't have confidence."`,
  'exercise.sentence-types.5.pro_tip': `Consejo: coma + BUT introduce una proposición independiente de contraste.`,

  'exercise.sentence-types.6.prompt': `Elige el signo de puntuación antes de una conjunción coordinante en una oración compuesta:`,
  'exercise.sentence-types.6.explanation': `Se requiere una coma antes de la conjunción coordinante al unir dos proposiciones independientes.`,
  'exercise.sentence-types.6.pro_tip': `Consejo: Proposición independiente + COMA + conjunción + Proposición independiente.`,

  'exercise.sentence-types.7.prompt': `¿Qué oración es una oración compuesta con puntuación correcta?`,
  'exercise.sentence-types.7.explanation': `"Thomas is handsome, and he looks confident" coloca adecuadamente la coma antes de "and" separando dos proposiciones independientes.`,
  'exercise.sentence-types.7.pro_tip': `Consejo: busca proposición independiente + coma + conjunción coordinante.`,

  'exercise.sentence-types.8.prompt': `¿Verdadero o Falso?`,
  'exercise.sentence-types.8.explanation': `Verdadero. Las oraciones compuestas unen al menos dos proposiciones independientes con conjunciones coordinantes (FANBOYS).`,
  'exercise.sentence-types.8.pro_tip': `Consejo: FANBOYS = for, and, nor, but, or, yet, so.`,

  'exercise.sentence-types.9.prompt': `Completa la oración compleja con la conjunción de concesión:`,
  'exercise.sentence-types.9.explanation': `Usa "although" para introducir la proposición subordinada concesiva: "Thomas is smart although he sometimes makes mistakes."`,
  'exercise.sentence-types.9.pro_tip': `Consejo: although = conjunción subordinante de concesión.`,

  'exercise.sentence-types.10.prompt': `Completa la oración compleja que expresa causa o motivo:`,
  'exercise.sentence-types.10.explanation': `Usa "since" como conjunción subordinante de causa: "since he studied hard" (dado que estudió mucho).`,
  'exercise.sentence-types.10.pro_tip': `Consejo: since = conjunción subordinante causal.`,

  'exercise.sentence-types.11.prompt': `En "Thomas will get a good grade since he studied hard", ¿qué proposición es la dependiente?`,
  'exercise.sentence-types.11.explanation': `"since he studied hard" es la proposición dependiente encabezada por la conjunción subordinante "since".`,
  'exercise.sentence-types.11.pro_tip': `Consejo: la parte que empieza con el conector subordinante es la dependiente.`,

  'exercise.sentence-types.12.prompt': `Ordena las palabras para formar la oración compleja con "although":`,
  'exercise.sentence-types.12.explanation': `"Thomas is smart although he sometimes makes mistakes."`,
  'exercise.sentence-types.12.pro_tip': `Consejo: Proposición independiente + although + proposición subordinada.`,

  'exercise.sentence-types.13.prompt': `Identifica el tipo de oración de "Thomas is handsome and looks confident":`,
  'exercise.sentence-types.13.explanation': `Es una oración simple con un sujeto y predicado compuesto (dos verbos).`,
  'exercise.sentence-types.13.pro_tip': `Consejo: sin segundo sujeto tras "and" = oración simple.`,

  'exercise.sentence-types.14.prompt': `Identifica el tipo de oración de "Thomas is handsome, and he looks confident":`,
  'exercise.sentence-types.14.explanation': `Es una oración compuesta con dos proposiciones independientes completas unidas por ", and".`,
  'exercise.sentence-types.14.pro_tip': `Consejo: sujeto + verbo, AND + sujeto + verbo = oración compuesta.`,

  'exercise.sentence-types.15.prompt': `Clasifica esta oración: "Thomas will get a good grade since he studied hard."`,
  'exercise.sentence-types.15.explanation': `Es una oración compleja con una proposición independiente y una dependiente encabezada por "since".`,
  'exercise.sentence-types.15.pro_tip': `Consejo: independiente + subordinada = oración compleja.`,

  'exercise.sentence-types.16.prompt': `Ordena las palabras para formar la oración compuesta con "but":`,
  'exercise.sentence-types.16.explanation': `"Thomas is handsome, but he doesn't have confidence."`,
  'exercise.sentence-types.16.pro_tip': `Consejo: Proposición independiente, + but + proposición independiente.`,

  'exercise.sentence-types.17.prompt': `¿Verdadero o Falso?`,
  'exercise.sentence-types.17.explanation': `Verdadero. Al quitar el sujeto "he", pasa a ser un predicado compuesto de oración simple y no debe llevar coma.`,
  'exercise.sentence-types.17.pro_tip': `Consejo: nunca pongas coma entre dos verbos que comparten el mismo sujeto.`,

  'exercise.sentence-types.18.prompt': `Organiza las palabras para formar la oración compleja causal:`,
  'exercise.sentence-types.18.explanation': `"Thomas will get a good grade since he studied hard."`,
  'exercise.sentence-types.18.pro_tip': `Consejo: Thomas will get a good grade since he studied hard.`,

  'exercise.sentence-types.19.prompt': `¿Qué lista contiene ÚNICAMENTE conjunciones coordinantes de oraciones compuestas (FANBOYS)?`,
  'exercise.sentence-types.19.explanation': `"for, and, nor, but, or, yet, so" son las siete conjunciones coordinantes.`,
  'exercise.sentence-types.19.pro_tip': `Consejo: recuerda el acrónimo FANBOYS.`,

  'exercise.sentence-types.20.prompt': `Empareja cada oración con su estructura correspondiente:`,
  'exercise.sentence-types.20.explanation': `Thomas and Mike... = simple (sujeto compuesto); Thomas is... and looks... = simple (predicado compuesto); Thomas is..., but he... = compuesta; Thomas is... although... = compleja.`,
  'exercise.sentence-types.20.pro_tip': `Consejo: analiza el número de cláusulas y el tipo de conector.`,
};

const willingnessAndUnwillingnessEsExtras: Record<string, string> = {
  'lesson.willingness-and-unwillingness.title': `Vocabulario: Disposición y Renuencia (Willingness & Unwillingness)`,
  'lesson.willingness-and-unwillingness.description': `Aprende vocabulario funcional avanzado para expresar grados de disposición, entusiasmo, vacilación, renuencia y negativa tajante (be dying to, more than happy to, reluctant to, have no intention of, won't/wouldn't).`,
  'lesson.willingness-and-unwillingness.intro':
    `### 1. Expresiones de Disposición y Entusiasmo (Willingness)\n` +
    `• **Be dying to (+ verbo base):** Morirse de ganas por hacer algo; sumamente entusiasmado o impaciente.\n` +
    `  - *I'm dying to hear the new album!* (¡Me muero de ganas de escuchar el nuevo álbum!)\n` +
    `• **Be more than happy to (+ verbo base):** Más que encantado de cooperar o ayudar.\n` +
    `  - *We'd be more than happy to show you around the city.* (Estaríamos más que encantados de mostrarte la ciudad).\n` +
    `• **Be eager to / Be prepared to (+ verbo base):** Deseoso, preparado y motivado para actuar.\n` +
    `• **Be open to (+ sustantivo / gerundio -ing):** Abierto y receptivo a considerar sugerencias o cambios.\n` +
    `  - *We are open to revising the schedule.* (⚠️ **Atención:** aquí *to* es preposición, por lo que va seguido de *-ing*).\n\n` +
    `### 2. Expresiones de Renuencia y Falta de Disposición (Unwillingness)\n` +
    `• **Be reluctant to (+ verbo base):** Renuente, reacio o indeciso a actuar por duda o cautela.\n` +
    `  - *He was reluctant to sign the contract without legal advice.* (Se mostraba reacio a firmar el contrato sin asesoría).\n` +
    `• **Be unwilling to (+ verbo base):** No estar dispuesto a / negarse a cooperar.\n` +
    `• **Have no desire to (+ verbo base):** No tener el menor deseo ni interés de hacer algo.\n` +
    `  - *I have no desire to attend that boring meeting.* (No tengo ningún deseo de asistir a esa reunión aburrida).\n` +
    `• **Hesitate to (+ verbo base):** Dudar o vacilar antes de actuar por inseguridad.\n\n` +
    `### 3. Patrones con Preposiciones y Negativa Tajante\n` +
    `• **Have no intention of (+ gerundio -ing):** Resolución firme y absoluta de *no* hacer algo.\n` +
    `  - *She has no intention of apologizing when she did nothing wrong.* (No tiene ninguna intención de disculparse).\n` +
    `• **Be against (+ sustantivo / gerundio -ing):** Estar totalmente en contra de una acción o plan.\n` +
    `  - *The board is completely against cutting the budget.* (La junta está totalmente en contra de recortar el presupuesto).\n\n` +
    `### 4. Verbos Modales de Voluntad y Rechazo (Will & Would)\n` +
    `• **Will vs. Won't (Presente):**\n` +
    `  - *Will:* Disposición espontánea (*I will carry those bags*).\n` +
    `  - *Won't:* Negativa obstinada de una persona o falla de máquinas (*He won't listen!* / *My car won't start!*).\n` +
    `• **Would vs. Wouldn't (Pasado):**\n` +
    `  - *Would:* Disposición constante en el pasado (*They would help us immediately*).\n` +
    `  - *Wouldn't:* Negativa en el pasado (*He wouldn't change his mind*).`,

  'exercise.willingness-and-unwillingness.1.prompt': `Completa la oración con la expresión de entusiasmo o ansias intensas:`,
  'exercise.willingness-and-unwillingness.1.explanation': `"Be dying to" significa morirse de ganas o estar extremadamente impaciente por hacer algo.`,
  'exercise.willingness-and-unwillingness.1.pro_tip': `Consejo: "be dying to + verbo base" expresa máximo entusiasmo.`,

  'exercise.willingness-and-unwillingness.2.prompt': `Completa la frase que muestra una entusiasta disposición a ayudar:`,
  'exercise.willingness-and-unwillingness.2.explanation': `"Be more than happy to" es una expresión cortés que indica que se está más que encantado de ayudar.`,
  'exercise.willingness-and-unwillingness.2.pro_tip': `Consejo: "more than happy to" = más que encantado de colaborar.`,

  'exercise.willingness-and-unwillingness.3.prompt': `¿Qué oración expresa el nivel más alto de entusiasmo o ganas de actuar?`,
  'exercise.willingness-and-unwillingness.3.explanation': `"I am dying to visit Japan" refleja entusiasmo intenso ("morirse de ganas"), muy por encima de "open to" o "don't mind".`,
  'exercise.willingness-and-unwillingness.3.pro_tip': `Consejo: "dying to" es mucho más enfático que "open to".`,

  'exercise.willingness-and-unwillingness.4.prompt': `¿Verdadero o Falso?`,
  'exercise.willingness-and-unwillingness.4.explanation': `Falso. "Be open to" significa estar abierto y receptivo a considerar propuestas, no una negativa.`,
  'exercise.willingness-and-unwillingness.4.pro_tip': `Consejo: "be open to" = receptivo y flexible.`,

  'exercise.willingness-and-unwillingness.5.prompt': `Completa la oración expresando vacilación o renuencia:`,
  'exercise.willingness-and-unwillingness.5.explanation': `"Reluctant to" describe a alguien que se muestra reacio, cauteloso o poco dispuesto a actuar.`,
  'exercise.willingness-and-unwillingness.5.pro_tip': `Consejo: "be reluctant to + verbo base" = reacio / renuente.`,

  'exercise.willingness-and-unwillingness.6.prompt': `Completa la frase que expresa total falta de interés o deseo:`,
  'exercise.willingness-and-unwillingness.6.explanation': `"Have no desire to" indica que la persona no tiene el menor deseo ni interés de hacer algo.`,
  'exercise.willingness-and-unwillingness.6.pro_tip': `Consejo: "have no desire to + verbo base" = cero ganas o interés.`,

  'exercise.willingness-and-unwillingness.7.prompt': `¿Qué significa "She hesitated to accept the promotion"?`,
  'exercise.willingness-and-unwillingness.7.explanation': `"Hesitate to" significa dudar, titubear o tardar en actuar debido a indecisión o cautela.`,
  'exercise.willingness-and-unwillingness.7.pro_tip': `Consejo: "hesitate to" refleja duda o vacilación antes de decidir.`,

  'exercise.willingness-and-unwillingness.8.prompt': `¿Verdadero o Falso?`,
  'exercise.willingness-and-unwillingness.8.explanation': `Verdadero. Tanto "be reluctant to" como "be unwilling to" expresan renuencia, vacilación o falta de disposición a actuar.`,
  'exercise.willingness-and-unwillingness.8.pro_tip': `Consejo: reluctant = reacio; unwilling = no dispuesto.`,

  'exercise.willingness-and-unwillingness.9.prompt': `Elige la preposición correcta que acompaña a "have no intention":`,
  'exercise.willingness-and-unwillingness.9.explanation': `La colocación fija es "have no intention OF doing something" (seguido de gerundio).`,
  'exercise.willingness-and-unwillingness.9.pro_tip': `Consejo: intention + OF + verbo con -ing.`,

  'exercise.willingness-and-unwillingness.10.prompt': `Elige la forma verbal correcta tras la preposición "be against":`,
  'exercise.willingness-and-unwillingness.10.explanation': `"Against" es una preposición, por lo que cualquier verbo que le siga debe ser un gerundio en "-ing" ("turning").`,
  'exercise.willingness-and-unwillingness.10.pro_tip': `Consejo: preposición "against" + gerundio (-ing).`,

  'exercise.willingness-and-unwillingness.11.prompt': `¿Qué oración utiliza el patrón gramatical correcto para expresar negativa tajante?`,
  'exercise.willingness-and-unwillingness.11.explanation': `"have no intention of resigning" usa correctamente la preposición "of" seguida de gerundio "-ing".`,
  'exercise.willingness-and-unwillingness.11.pro_tip': `Consejo: have no intention OF + gerundio (-ing).`,

  'exercise.willingness-and-unwillingness.12.prompt': `Ordena las palabras para formar una oración correcta que exprese negativa tajante:`,
  'exercise.willingness-and-unwillingness.12.explanation': `"She has no intention of changing her mind." (No tiene ninguna intención de cambiar de opinión).`,
  'exercise.willingness-and-unwillingness.12.pro_tip': `Consejo: Sujeto + has no intention of + gerundio + complemento.`,

  'exercise.willingness-and-unwillingness.13.prompt': `Elige el verbo modal que expresa negativa obstinada en presente:`,
  'exercise.willingness-and-unwillingness.13.explanation': `"Won't" (will not) se usa para expresar negativa persistente u obstinación en presente ("no quiere escuchar").`,
  'exercise.willingness-and-unwillingness.13.pro_tip': `Consejo: "won't" = rechazo u obstinación en presente.`,

  'exercise.willingness-and-unwillingness.14.prompt': `¿Qué modal se usa idiomáticamente cuando un objeto o máquina se niega a funcionar?`,
  'exercise.willingness-and-unwillingness.14.explanation': `En inglés se usa "won't" cuando un aparato no responde o no funciona (ej. "the printer won't print", "the car won't start").`,
  'exercise.willingness-and-unwillingness.14.pro_tip': `Consejo: "it won't start/print" expresa fallo o resistencia mecánica.`,

  'exercise.willingness-and-unwillingness.15.prompt': `En "I asked her for help, but she wouldn't cooperate", ¿qué expresa "wouldn't"?`,
  'exercise.willingness-and-unwillingness.15.explanation': `"Wouldn't" es la forma pasada de rechazo u obstinación; indica que la persona se negó o no quiso cooperar en el pasado.`,
  'exercise.willingness-and-unwillingness.15.pro_tip': `Consejo: "wouldn't" = negativa o rechazo en el pasado.`,

  'exercise.willingness-and-unwillingness.16.prompt': `Ordena las palabras para formar una oración cortés que exprese disposición:`,
  'exercise.willingness-and-unwillingness.16.explanation': `"I would gladly help you with the project." (Con mucho gusto te ayudaría con el proyecto).`,
  'exercise.willingness-and-unwillingness.16.pro_tip': `Consejo: "would gladly" expresa disposición amable y entusiasta.`,

  'exercise.willingness-and-unwillingness.17.prompt': `¿Verdadero o Falso?`,
  'exercise.willingness-and-unwillingness.17.explanation': `Verdadero. En "be open to", "to" es una preposición que rige sustantivo o gerundio ("open to revising"), no un infinitivo.`,
  'exercise.willingness-and-unwillingness.17.pro_tip': `Consejo: "be open to + -ing" porque "to" actúa como preposición.`,

  'exercise.willingness-and-unwillingness.18.prompt': `Organiza las palabras para formar el ofrecimiento cortés de ayuda:`,
  'exercise.willingness-and-unwillingness.18.explanation': `"We are more than happy to assist you." (Estamos más que encantados de asistirte).`,
  'exercise.willingness-and-unwillingness.18.pro_tip': `Consejo: We are more than happy to assist you.`,

  'exercise.willingness-and-unwillingness.19.prompt': `¿Qué expresión de renuencia requiere una preposición seguida de gerundio (-ing)?`,
  'exercise.willingness-and-unwillingness.19.explanation': `"be against (doing something)" lleva la preposición "against" y exige gerundio. Las otras usan "to + verbo base".`,
  'exercise.willingness-and-unwillingness.19.pro_tip': `Consejo: "be against + gerundio (-ing)".`,

  'exercise.willingness-and-unwillingness.20.prompt': `Empareja cada expresión con su grado y tipo de disposición:`,
  'exercise.willingness-and-unwillingness.20.explanation': `dying to = entusiasmo intenso; more than happy = disposición encantada; reluctant = vacilación/duda; have no intention of = negativa tajante.`,
  'exercise.willingness-and-unwillingness.20.pro_tip': `Consejo: compara los grados desde el entusiasmo máximo hasta la negativa rotunda.`,
};

const presentRealConditionalsEsExtras: Record<string, string> = {
  'lesson.present-real-conditionals.title': `Condicionales Reales del Presente: Cláusulas, Preguntas, Modales, When y Whenever`,
  'lesson.present-real-conditionals.description': `Domina los condicionales reales del presente: orden de cláusulas y uso de comas, modales en la consecuencia (can, may, ought to), preguntas de Sí/No y respuestas cortas, preguntas informativas y cláusulas habituales con when/whenever.`,
  'lesson.present-real-conditionals.intro':
    `### 1. Oraciones Afirmativas/Negativas: Orden de Cláusulas y Puntuación\n` +
    `• **Cláusula con If al inicio (Lleva coma obligatoria):**\n` +
    `  - *If I shop online, I save time.* (Si compro en línea, ahorro tiempo).\n` +
    `  - *If the mall is closed, I can shop online.* (Si el centro comercial está cerrado, puedo comprar en línea).\n` +
    `  - *If the price is right, I may even buy two.* (Si el precio es adecuado, tal vez compre dos).\n` +
    `  - *If the teacher assigns a test, I ought to study.* (Si el profesor asigna un examen, debería estudiar).\n` +
    `• **Cláusula de resultado al inicio (Sin coma):**\n` +
    `  - *I save time if I shop online.*\n` +
    `  - *I can shop online if the mall is closed.*\n` +
    `  - *I may even buy two if the price is right.*\n` +
    `  - *I ought to study if the teacher assigns a test.*\n\n` +
    `### 2. Verbos Modales en la Cláusula de Resultado\n` +
    `• Se pueden usar verbos modales en la cláusula de resultado según el significado deseado:\n` +
    `  - **can:** Habilidad o posibilidad (*If the mall is closed, I can shop online.*)\n` +
    `  - **may:** Posibilidad (*If the price is right, I may even buy two.*)\n` +
    `  - **ought to:** Consejo u obligación moral (*If the teacher assigns a test, I ought to study.*)\n\n` +
    `### 3. Preguntas de Sí/No y Respuestas Cortas\n` +
    `• **Estructura:** [Auxiliar / Modal] + Sujeto + Verbo + cláusula con **if**?\n` +
    `  - *Do you save time if you shop online?*\n` +
    `    - Afirmativa: *Yes, I do.*\n` +
    `    - Negativa: *No, I don't.*\n` +
    `  - *Can you shop online if the mall is closed?*\n` +
    `    - Afirmativa: *Yes, I can.*\n` +
    `    - Negativa: *No, I can't.*\n\n` +
    `### 4. Preguntas Informativas (Wh-Questions)\n` +
    `• **Estructura:** Wh-word + Verbo + cláusula con **if**?\n` +
    `  - *What happens if I don't like it?* (¿Qué pasa si no me gusta?)\n\n` +
    `### 5. Cláusulas Habituales con When y Whenever\n` +
    `• Para situaciones repetidas, hábitos o rutinas, usa **when** (cuando) o **whenever** (cada vez que / siempre que):\n` +
    `  - *Whenever we watch an opera, we get bored.* (Cada vez que vemos una ópera, nos aburrimos).\n` +
    `  - *When he watches the fights, he cheers loudly.* (Cuando ve las peleas, anima ruidosamente).`,

  'exercise.present-real-conditionals.1.prompt': `Completa la cláusula de resultado del condicional real en presente:`,
  'exercise.present-real-conditionals.1.explanation': `En condicionales reales de presente que expresan hechos generales o hábitos, ambas cláusulas usan presente simple: "If I shop online, I save time."`,
  'exercise.present-real-conditionals.1.pro_tip': `Consejo: If + presente, presente = verdad general / hábito.`,

  'exercise.present-real-conditionals.2.prompt': `Completa la oración condicional con la cláusula de resultado al inicio:`,
  'exercise.present-real-conditionals.2.explanation': `Cuando la cláusula de resultado va primero, se une directamente con "if" sin coma: "I save time if I shop online."`,
  'exercise.present-real-conditionals.2.pro_tip': `Consejo: Resultado + if + condición (sin coma).`,

  'exercise.present-real-conditionals.3.prompt': `¿Qué oración tiene la puntuación correcta?`,
  'exercise.present-real-conditionals.3.explanation': `Cuando la cláusula con "if" va primero, debe separarse de la cláusula de resultado mediante una coma.`,
  'exercise.present-real-conditionals.3.pro_tip': `Consejo: Cláusula con If al inicio = requiere coma.`,

  'exercise.present-real-conditionals.4.prompt': `¿Verdadero o Falso?`,
  'exercise.present-real-conditionals.4.explanation': `Verdadero. Cuando el resultado va primero ("I save time if I shop online"), no se usa coma antes de "if".`,
  'exercise.present-real-conditionals.4.pro_tip': `Consejo: no se pone coma antes de "if" cuando el resultado va al inicio.`,

  'exercise.present-real-conditionals.5.prompt': `Completa la cláusula de resultado que expresa posibilidad:`,
  'exercise.present-real-conditionals.5.explanation': `"may" expresa posibilidad en el resultado: "If the price is right, I may even buy two." (tal vez compre dos).`,
  'exercise.present-real-conditionals.5.pro_tip': `Consejo: "may" indica posibilidad en condicionales reales.`,

  'exercise.present-real-conditionals.6.prompt': `Completa la oración con el verbo modal que expresa consejo u obligación:`,
  'exercise.present-real-conditionals.6.explanation': `"ought to" expresa consejo u obligación moral: "If the teacher assigns a test, I ought to study."`,
  'exercise.present-real-conditionals.6.pro_tip': `Consejo: "ought to" va seguido del verbo base.`,

  'exercise.present-real-conditionals.7.prompt': `En "If the mall is closed, I can shop online", ¿qué expresa el modal "can"?`,
  'exercise.present-real-conditionals.7.explanation': `"can" en la cláusula de resultado expresa habilidad o posibilidad en el presente.`,
  'exercise.present-real-conditionals.7.pro_tip': `Consejo: "can" = habilidad o posibilidad.`,

  'exercise.present-real-conditionals.8.prompt': `¿Verdadero o Falso?`,
  'exercise.present-real-conditionals.8.explanation': `Verdadero. En condicionales reales de presente se pueden usar modales como "can", "may" u "ought to" en el resultado.`,
  'exercise.present-real-conditionals.8.pro_tip': `Consejo: Los modales pueden sustituir al presente simple en la consecuencia.`,

  'exercise.present-real-conditionals.9.prompt': `Completa la pregunta de Sí/No en el condicional real de presente:`,
  'exercise.present-real-conditionals.9.explanation': `Usa el auxiliar "Do" para formar preguntas de Sí/No con verbo principal en presente: "Do you save time if you shop online?"`,
  'exercise.present-real-conditionals.9.pro_tip': `Consejo: Do/Does + sujeto + verbo base + cláusula con if?`,

  'exercise.present-real-conditionals.10.prompt': `Completa la respuesta corta afirmativa con el modal correspondiente:`,
  'exercise.present-real-conditionals.10.explanation': `Cuando la pregunta empieza con "Can you...", la respuesta corta lleva el modal "can": "Yes, I can."`,
  'exercise.present-real-conditionals.10.pro_tip': `Consejo: la respuesta corta coincide con el auxiliar/modal de la pregunta.`,

  'exercise.present-real-conditionals.11.prompt': `¿Cuál es la respuesta corta negativa correcta a "Do you save time if you shop online?"?`,
  'exercise.present-real-conditionals.11.explanation': `La pregunta utiliza el auxiliar "Do", por lo que la respuesta corta negativa es "No, I don't."`,
  'exercise.present-real-conditionals.11.pro_tip': `Consejo: "Do you...?" -> "No, I don't."`,

  'exercise.present-real-conditionals.12.prompt': `Ordena las palabras para formar la pregunta condicional de Sí/No con "can":`,
  'exercise.present-real-conditionals.12.explanation': `"Can you shop online if the mall is closed?"`,
  'exercise.present-real-conditionals.12.pro_tip': `Consejo: Modal + sujeto + verbo + cláusula if?`,

  'exercise.present-real-conditionals.13.prompt': `Completa la pregunta informativa sobre la consecuencia:`,
  'exercise.present-real-conditionals.13.explanation': `"What happens if I don't like it?" usa tercera persona singular "happens" con "what".`,
  'exercise.present-real-conditionals.13.pro_tip': `Consejo: "What happens if...?" indaga sobre el resultado.`,

  'exercise.present-real-conditionals.14.prompt': `Completa la oración que expresa una condición habitual o repetida:`,
  'exercise.present-real-conditionals.14.explanation': `"Whenever" significa "cada vez que" / "siempre que" e introduce una rutina repetida: "Whenever we watch an opera, we get bored."`,
  'exercise.present-real-conditionals.14.pro_tip': `Consejo: "Whenever" = cada vez que.`,

  'exercise.present-real-conditionals.15.prompt': `¿Qué forma verbal completa la rutina: "When he ____ the fights, he cheers loudly."?`,
  'exercise.present-real-conditionals.15.explanation': `Usa la tercera persona singular "watches" para una acción habitual con el sujeto "he".`,
  'exercise.present-real-conditionals.15.pro_tip': `Consejo: tercera persona singular añade -es (watches).`,

  'exercise.present-real-conditionals.16.prompt': `Ordena las palabras para formar la oración habitual con "When":`,
  'exercise.present-real-conditionals.16.explanation': `"When he watches the fights, he cheers loudly."`,
  'exercise.present-real-conditionals.16.pro_tip': `Consejo: Cláusula con When y coma + cláusula de resultado.`,

  'exercise.present-real-conditionals.17.prompt': `¿Verdadero o Falso?`,
  'exercise.present-real-conditionals.17.explanation': `Verdadero. "When" y "whenever" se usan frecuentemente en lugar de "if" para describir rutinas y situaciones recurrentes.`,
  'exercise.present-real-conditionals.17.pro_tip': `Consejo: when/whenever = hábitos y hechos repetidos.`,

  'exercise.present-real-conditionals.18.prompt': `Organiza las palabras para formar la oración condicional con "ought to":`,
  'exercise.present-real-conditionals.18.explanation': `"I ought to study if the teacher assigns a test."`,
  'exercise.present-real-conditionals.18.pro_tip': `Consejo: Cláusula de resultado + if + cláusula de condición.`,

  'exercise.present-real-conditionals.19.prompt': `En "If the price is right, I may even buy two", ¿qué indica "may"?`,
  'exercise.present-real-conditionals.19.explanation': `"may" indica posibilidad (es posible que compre dos).`,
  'exercise.present-real-conditionals.19.pro_tip': `Consejo: "may" = posibilidad en el resultado.`,

  'exercise.present-real-conditionals.20.prompt': `Empareja cada oración de las diapositivas con su función gramatical:`,
  'exercise.present-real-conditionals.20.explanation': `If I shop... = afirmación con coma; Can you shop... = pregunta Sí/No con can; What happens... = pregunta informativa; Whenever we watch... = condición habitual con whenever.`,
  'exercise.present-real-conditionals.20.pro_tip': `Consejo: distingue orden de cláusulas, tipo de pregunta y conector.`,
};

const contrastingTransitionsEsExtras: Record<string, string> = {
  'lesson.contrasting-transitions.title': `Transiciones de Contraste: On the Contrary, That Said y At the Same Time`,
  'lesson.contrasting-transitions.description': `Domina conectores discursivos avanzados de contraste: afirma lo opuesto en diálogos (on the contrary), introduce concesiones (that said) y equilibra perspectivas simultáneas (at the same time).`,
  'lesson.contrasting-transitions.intro':
    `### 1. On the Contrary (Al contrario / Por el contrario)\n` +
    `• **Significado:** Afirma que **lo exactamente opuesto** a lo asumido o dicho es la verdad.\n` +
    `• **Entre dos interlocutores:** Se usa comúnmente en diálogos cuando una persona desmiente o corrige la suposición de otra:\n` +
    `  - A: *I thought you were happy.* → B: *On the contrary, I am devastated.* (Al contrario, estoy devastado).\n` +
    `  - A: *Have you finished the homework?* → B: *On the contrary, I just started.* (Al contrario, apenas comencé).\n` +
    `• **Tras oraciones negativas:** A diferencia de *that said* o *at the same time*, puede colocarse directamente después de una negación:\n` +
    `  - A: *You're from Vietnam, right?* → B: *I'm not from Vietnam. On the contrary, I'm from China.*\n` +
    `• **Elipsis (Uso independiente sin complemento):** Puede omitir la oración contrastante porque la frase ya da a entender lo opuesto:\n` +
    `  - A: *I'm not angry with you. On the contrary.* (No estoy enfadado contigo. Al contrario).\n\n` +
    `### 2. That Said (Dicho esto / Habiendo dicho eso / Aun así)\n` +
    `• **Significado:** Concesión equivalente a *"even so"* o *"nevertheless"*.\n` +
    `• **Función:** Introduce un contrapeso a lo expresado con anterioridad.\n` +
    `• **Usado por un solo hablante:** Lo emplea **una misma persona** para equilibrar aspectos positivos y negativos de un tema:\n` +
    `  - *English is difficult to learn. That said, it is a rewarding language to learn.* (El inglés es difícil. Dicho esto, es muy gratificante).\n` +
    `  - *Our new car is reliable. That said, the monthly payments are too high.* (El auto es confiable. Aun así, las mensualidades son muy altas).\n\n` +
    `### 3. At the Same Time (Al mismo tiempo / A la vez)\n` +
    `• **Significado:** *"Por otra parte"* / *"De igual manera es cierto que"*.\n` +
    `• **Función:** Reconoce que dos hechos o perspectivas aparentemente opuestas coexisten.\n` +
    `• **Usado por un solo hablante:** Equilibra un elogio con una observación constructiva:\n` +
    `  - *Your cooking is very good. At the same time, there's a little room for improvement.* (Cocinas muy bien. Al mismo tiempo, hay margen de mejora).`,

  'exercise.contrasting-transitions.1.prompt': `Completa el conector discursivo que afirma lo exactamente opuesto:`,
  'exercise.contrasting-transitions.1.explanation': `La locución fija es "On the contrary", que significa "al contrario / por el contrario".`,
  'exercise.contrasting-transitions.1.pro_tip': `Consejo: "On the contrary" se construye con la preposición "On".`,

  'exercise.contrasting-transitions.2.prompt': `Completa la respuesta del interlocutor B mostrando lo opuesto a terminar:`,
  'exercise.contrasting-transitions.2.explanation': `"On the contrary, I just started" recalca que en lugar de haber terminado, recién acaba de comenzar ("started").`,
  'exercise.contrasting-transitions.2.pro_tip': `Consejo: "On the contrary" introduce el extremo opuesto.`,

  'exercise.contrasting-transitions.3.prompt': `¿Qué indica "On the contrary, I just started"?`,
  'exercise.contrasting-transitions.3.explanation': `"On the contrary" asegura que lo opuesto a lo que el hablante A asumió es la realidad.`,
  'exercise.contrasting-transitions.3.pro_tip': `Consejo: "on the contrary" = lo opuesto es la verdad.`,

  'exercise.contrasting-transitions.4.prompt': `¿Verdadero o Falso?`,
  'exercise.contrasting-transitions.4.explanation': `Falso. "On the contrary" contradice la suposición previa y afirma lo opuesto, no expresa acuerdo.`,
  'exercise.contrasting-transitions.4.pro_tip': `Consejo: "on the contrary" expresa refutación y oposición.`,

  'exercise.contrasting-transitions.5.prompt': `Completa la transición que sigue a una oración negativa:`,
  'exercise.contrasting-transitions.5.explanation': `"On the contrary" puede posicionarse tras una oración negativa: "I'm not from Vietnam. On the contrary, I'm from China."`,
  'exercise.contrasting-transitions.5.pro_tip': `Consejo: oración negativa + "On the contrary" + corrección positiva.`,

  'exercise.contrasting-transitions.6.prompt': `Completa el diálogo donde se omite la aclaración final:`,
  'exercise.contrasting-transitions.6.explanation': `"On the contrary" puede funcionar de forma independiente porque la frase ya implica que se sobreentiende lo contrario.`,
  'exercise.contrasting-transitions.6.pro_tip': `Consejo: "On the contrary." puede cerrar una intervención.`,

  'exercise.contrasting-transitions.7.prompt': `A diferencia de "that said" y "at the same time", ¿qué posición particular puede tomar "on the contrary"?`,
  'exercise.contrasting-transitions.7.explanation': `"On the contrary" puede seguir inmediatamente a una oración negativa para plantear el hecho correcto.`,
  'exercise.contrasting-transitions.7.pro_tip': `Consejo: solo "on the contrary" sigue a oraciones negativas como "I'm not...".`,

  'exercise.contrasting-transitions.8.prompt': `¿Verdadero o Falso?`,
  'exercise.contrasting-transitions.8.explanation': `Verdadero. "On the contrary" puede usarse solo porque el sentido opuesto ya queda implícito.`,
  'exercise.contrasting-transitions.8.pro_tip': `Consejo: el uso aislado de "On the contrary" sobrentiende lo contrario.`,

  'exercise.contrasting-transitions.9.prompt': `Completa la frase concesiva usada para sopesar un reto frente a un beneficio:`,
  'exercise.contrasting-transitions.9.explanation': `"That said" es un conector concesivo equivalente a "dicho esto" o "aun así".`,
  'exercise.contrasting-transitions.9.pro_tip': `Consejo: "That said," equilibra aspectos positivos y negativos.`,

  'exercise.contrasting-transitions.10.prompt': `Completa la oración que contrasta la fiabilidad del auto con su alto coste:`,
  'exercise.contrasting-transitions.10.explanation': `"too high" (demasiado altas) contrasta la fiabilidad del vehículo con el inconveniente de las cuotas.`,
  'exercise.contrasting-transitions.10.pro_tip': `Consejo: "That said" pasa de una ventaja a un inconveniente.`,

  'exercise.contrasting-transitions.11.prompt': `¿Cómo se emplea "That said" en el ejemplo sobre aprender inglés?`,
  'exercise.contrasting-transitions.11.explanation': `Lo utiliza una sola persona para contrastar una dificultad (es difícil) con una gran ventaja (es gratificante).`,
  'exercise.contrasting-transitions.11.pro_tip': `Consejo: un mismo hablante evaluando pros y contras usa "That said,".`,

  'exercise.contrasting-transitions.12.prompt': `Ordena las palabras para formar la oración que contrasta la fiabilidad del auto con sus mensualidades:`,
  'exercise.contrasting-transitions.12.explanation': `"Our new car is reliable. That said, the monthly payments are too high."`,
  'exercise.contrasting-transitions.12.pro_tip': `Consejo: Oración positiva. That said, matiz negativo.`,

  'exercise.contrasting-transitions.13.prompt': `Completa la expresión que equilibra un elogio con una crítica constructiva:`,
  'exercise.contrasting-transitions.13.explanation': `"At the same time" (al mismo tiempo / a la vez) introduce una observación equilibrada sin contradecir el elogio inicial.`,
  'exercise.contrasting-transitions.13.pro_tip': `Consejo: "At the same time," = a la vez / por otra parte.`,

  'exercise.contrasting-transitions.14.prompt': `Completa la visión equilibrada sobre innovación y presupuesto:`,
  'exercise.contrasting-transitions.14.explanation': `"mindful" (conscientes / cuidadosos) encaja con la precaución constructiva: "At the same time, we must be mindful...".`,
  'exercise.contrasting-transitions.14.pro_tip': `Consejo: "At the same time" introduce una cautela.`,

  'exercise.contrasting-transitions.15.prompt': `¿Cuál es la función de "at the same time" en el ejemplo culinario?`,
  'exercise.contrasting-transitions.15.explanation': `Introduce una observación constructiva simultánea (hay margen de mejora) junto con el elogio previo.`,
  'exercise.contrasting-transitions.15.pro_tip': `Consejo: "at the same time" equilibra verdades que coexisten.`,

  'exercise.contrasting-transitions.16.prompt': `Ordena las palabras para formar la oración reflexiva sobre aprender inglés:`,
  'exercise.contrasting-transitions.16.explanation': `"English is difficult to learn. That said, it is a rewarding language."`,
  'exercise.contrasting-transitions.16.pro_tip': `Consejo: Dificultad. That said, resultado gratificante.`,

  'exercise.contrasting-transitions.17.prompt': `¿Verdadero o Falso?`,
  'exercise.contrasting-transitions.17.explanation': `Verdadero. "At the same time" y "that said" son empleados habitualmente por una sola persona para equilibrar pros y contras.`,
  'exercise.contrasting-transitions.17.pro_tip': `Consejo: un solo hablante sopesando aspectos = "That said" / "At the same time".`,

  'exercise.contrasting-transitions.18.prompt': `Organiza las palabras para formar la observación constructiva sobre la cocina:`,
  'exercise.contrasting-transitions.18.explanation': `"Your cooking is very good. At the same time, there's room for improvement."`,
  'exercise.contrasting-transitions.18.pro_tip': `Consejo: Elogio. At the same time, observación constructiva.`,

  'exercise.contrasting-transitions.19.prompt': `¿Qué conector es MEJOR cuando un segundo interlocutor rechaza una suposición y afirma lo exactamente opuesto?`,
  'exercise.contrasting-transitions.19.explanation': `"On the contrary" está diseñado para refutar y aseverar lo opuesto frente a otro hablante.`,
  'exercise.contrasting-transitions.19.pro_tip': `Consejo: corregir a otra persona con lo opuesto = "On the contrary".`,

  'exercise.contrasting-transitions.20.prompt': `Empareja cada oración de las diapositivas con su función discursiva:`,
  'exercise.contrasting-transitions.20.explanation': `On the contrary (devastated) = dos hablantes corrigiendo suposición; That said (rewarding) = un hablante haciendo concesión; At the same time (improvement) = un hablante equilibrando elogio; On the contrary (solo) = elipsis independiente.`,
  'exercise.contrasting-transitions.20.pro_tip': `Consejo: distingue dos interlocutores vs uno, y oración completa vs elipsis.`,
};

const conditionalConjunctionsEsExtras: Record<string, string> = {
  'lesson.conditional-conjunctions.title': `Conjunciones Condicionales: As Long As, Provided That, Unless, Even If y Only If`,
  'lesson.conditional-conjunctions.description': `Domina conectores condicionales avanzados: condiciones exclusivas (as long as, provided that, on condition that, only if), resultados inmutables (even if) y condiciones negativas equivalentes a if...not (unless).`,
  'lesson.conditional-conjunctions.intro':
    `### 1. Condiciones Específicas Exclusivas\n` +
    `• Expresiones: **only if** (solo si), **provided (that) / providing** (siempre y cuando / con tal de que), **as long as / so long as** (mientras / siempre que), **on condition that** (a condición de que).\n` +
    `• **Función:** Muestran el resultado que ocurrirá *únicamente* si se cumple esa condición específica. **¡Ninguna otra condición surtirá ese efecto!**\n` +
    `  - *As long as you promise to pay me back, I will loan you some money.* (Siempre que prometas devolverme el dinero, te prestaré algo).\n` +
    `  - *On condition that you come back by 10:00 p.m., I will let you go to the party.* (A condición de que regreses para las 10:00 p.m., te dejaré ir a la fiesta).\n` +
    `  - *I will allow you to stay provided that you keep your voice down.* (Te permitiré quedarte con tal de que bajes la voz).\n` +
    `  - *I will let you borrow my car only if you promise to bring it back in one piece.* (Te prestaré mi auto solo si prometes traerlo de vuelta entero).\n\n` +
    `### 2. Even if (Incluso si / Aunque)\n` +
    `• **Significado:** Enfatiza que la condición **no altera el resultado**. La condición puede ocurrir o no, pero el resultado será exactamente el mismo:\n` +
    `  - *Even if you try to reason with her, she won't come to her senses.* (Incluso si intentas razonar con ella, no entrará en razón).\n` +
    `  - *Even if electric vehicles improve, owning a gas-powered vehicle is more convenient.* (Incluso si los autos eléctricos mejoran, tener uno a gasolina es más práctico).\n\n` +
    `### 3. Unless (A menos que / Si no = If... not)\n` +
    `• **Significado y equivalencia:** Describe una condición negativa en presente o futuro:\n` +
    `  - *If you don't study, you won't get a good grade.* = *Unless you study, you won't get a good grade.* (A menos que estudies, no obtendrás buena nota).\n` +
    `  - *If you don't eat healthy, you will gain weight.* = *Unless you eat healthy, you will gain weight.* (A menos que comas sano, subirás de peso).\n` +
    `• **En negociaciones y acuerdos:**\n` +
    `  - *We can't move forward in negotiations unless you give some concessions.* (No podemos avanzar en las negociaciones a menos que hagas concesiones).\n` +
    `  - *I won't buy the car unless you give me a better price.* (No compraré el auto a menos que me des un mejor precio).\n` +
    `• ⚠️ **Regla clave:** Como *unless* ya significa *if... not*, el verbo de la cláusula con *unless* se mantiene en afirmativo (*Unless you study*, nunca *Unless you don't study*).`,

  'exercise.conditional-conjunctions.1.prompt': `Completa la cláusula de condición que expresa una promesa mutua:`,
  'exercise.conditional-conjunctions.1.explanation': `"As long as" introduce el requisito condicional: "As long as you promise to pay me back..." (Siempre que prometas devolvérmelo...).`,
  'exercise.conditional-conjunctions.1.pro_tip': `Consejo: "As long as" = con tal de que / siempre que.`,

  'exercise.conditional-conjunctions.2.prompt': `Completa la cláusula que especifica la condición para quedarse:`,
  'exercise.conditional-conjunctions.2.explanation': `"provided that" introduce la condición necesaria: "provided that you keep your voice down" (con tal de que bajes la voz).`,
  'exercise.conditional-conjunctions.2.pro_tip': `Consejo: "provided that" + cláusula de condición.`,

  'exercise.conditional-conjunctions.3.prompt': `En "On condition that you come back by 10:00 p.m., I will let you go to the party", ¿qué expresa "on condition that"?`,
  'exercise.conditional-conjunctions.3.explanation': `"On condition that" fija un requisito indispensable: solo se permite ir a la fiesta si se cumple esa hora de regreso.`,
  'exercise.conditional-conjunctions.3.pro_tip': `Consejo: "on condition that" = a condición de que.`,

  'exercise.conditional-conjunctions.4.prompt': `¿Verdadero o Falso?`,
  'exercise.conditional-conjunctions.4.explanation': `Verdadero. Conectores como "only if", "provided that" y "as long as" estipulan que ninguna otra condición producirá ese resultado.`,
  'exercise.conditional-conjunctions.4.pro_tip': `Consejo: son condiciones estrictas y exclusivas.`,

  'exercise.conditional-conjunctions.5.prompt': `Completa la cláusula que resalta que la condición no cambiará el desenlace:`,
  'exercise.conditional-conjunctions.5.explanation': `"Even if" recalca que aunque intentes razonar con ella, no cambiará de actitud.`,
  'exercise.conditional-conjunctions.5.pro_tip': `Consejo: "Even if" = incluso si / aunque.`,

  'exercise.conditional-conjunctions.6.prompt': `Elige la forma verbal correcta para el hecho inmutable:`,
  'exercise.conditional-conjunctions.6.explanation': `"owning a gas-powered vehicle" es un sujeto en gerundio singular y concuerda con "is": "is more convenient".`,
  'exercise.conditional-conjunctions.6.pro_tip': `Consejo: el sujeto gerundio ("owning...") rige verbo en singular.`,

  'exercise.conditional-conjunctions.7.prompt': `¿Qué enfatiza "Even if" en una oración condicional?`,
  'exercise.conditional-conjunctions.7.explanation': `"Even if" resalta que la condición no importa; el resultado seguirá siendo el mismo independientemente de ella.`,
  'exercise.conditional-conjunctions.7.pro_tip': `Consejo: "even if" = el resultado no varía pase lo que pase.`,

  'exercise.conditional-conjunctions.8.prompt': `¿Verdadero o Falso?`,
  'exercise.conditional-conjunctions.8.explanation': `Falso. "Even if" indica que ella no cambiará de parecer aunque intentes razonar amablemente con ella.`,
  'exercise.conditional-conjunctions.8.pro_tip': `Consejo: "even if" señala que la condición es ineficaz para cambiar el resultado.`,

  'exercise.conditional-conjunctions.9.prompt': `Reescribe la oración condicional usando "unless":`,
  'exercise.conditional-conjunctions.9.explanation': `"Unless you study, you won't get a good grade" equivale exactamente a "If you don't study...".`,
  'exercise.conditional-conjunctions.9.pro_tip': `Consejo: Unless = if...not (a menos que).`,

  'exercise.conditional-conjunctions.10.prompt': `Completa la advertencia sobre la alimentación y el peso:`,
  'exercise.conditional-conjunctions.10.explanation': `El resultado futuro con "will" va seguido del verbo base "gain": "Unless you eat healthy, you will gain weight."`,
  'exercise.conditional-conjunctions.10.pro_tip': `Consejo: will + verbo base (will gain).`,

  'exercise.conditional-conjunctions.11.prompt': `¿Qué oración es exactamente equivalente a "If you don't eat healthy, you will gain weight"?`,
  'exercise.conditional-conjunctions.11.explanation': `"Unless you eat healthy, you will gain weight" sustituye "If you don't" por "Unless" manteniendo el verbo en afirmativo.`,
  'exercise.conditional-conjunctions.11.pro_tip': `Consejo: "Unless you eat" reemplaza a "If you don't eat".`,

  'exercise.conditional-conjunctions.12.prompt': `Ordena las palabras para formar la advertencia con "Unless":`,
  'exercise.conditional-conjunctions.12.explanation': `"Unless you study, you won't get a good grade."`,
  'exercise.conditional-conjunctions.12.pro_tip': `Consejo: Cláusula Unless con coma + cláusula de resultado.`,

  'exercise.conditional-conjunctions.13.prompt': `Completa la oración de negociación empresarial:`,
  'exercise.conditional-conjunctions.13.explanation': `"unless" introduce la condición necesaria: "We can't move forward in negotiations unless you give some concessions."`,
  'exercise.conditional-conjunctions.13.pro_tip': `Consejo: no podemos avanzar + a menos que (unless) + hagas concesiones.`,

  'exercise.conditional-conjunctions.14.prompt': `Completa la oración que permite tomar prestado el auto:`,
  'exercise.conditional-conjunctions.14.explanation': `"only if" especifica la única condición admisible para prestar el automóvil.`,
  'exercise.conditional-conjunctions.14.pro_tip': `Consejo: "only if" = únicamente si / solo si.`,

  'exercise.conditional-conjunctions.15.prompt': `¿Qué significa "I won't buy the car unless you give me a better price"?`,
  'exercise.conditional-conjunctions.15.explanation': `Significa que solo comprará el vehículo si le ofrecen un mejor precio; de lo contrario, no habrá compra.`,
  'exercise.conditional-conjunctions.15.pro_tip': `Consejo: "won't buy unless" = solo comprará si se mejora el precio.`,

  'exercise.conditional-conjunctions.16.prompt': `Ordena las palabras para formar el requisito de la negociación:`,
  'exercise.conditional-conjunctions.16.explanation': `"I won't buy the car unless you give me a better price."`,
  'exercise.conditional-conjunctions.16.pro_tip': `Consejo: Cláusula de resultado + unless + cláusula de condición.`,

  'exercise.conditional-conjunctions.17.prompt': `¿Verdadero o Falso?`,
  'exercise.conditional-conjunctions.17.explanation': `Verdadero. Puesto que "unless" ya incorpora el sentido negativo de "if not", se debe evitar la doble negación (evita "unless you don't study").`,
  'exercise.conditional-conjunctions.17.pro_tip': `Consejo: usa verbos en afirmativo tras "unless".`,

  'exercise.conditional-conjunctions.18.prompt': `Organiza las palabras para formar la oración de permiso con "On condition that":`,
  'exercise.conditional-conjunctions.18.explanation': `"On condition that you come back by 10:00 p.m., I will let you go."`,
  'exercise.conditional-conjunctions.18.pro_tip': `Consejo: On condition that + condición, + resultado.`,

  'exercise.conditional-conjunctions.19.prompt': `Elige la oración donde el resultado no cambiará independientemente de lo que ocurra:`,
  'exercise.conditional-conjunctions.19.explanation': `"Even if electric vehicles improve, owning a gas-powered vehicle is more convenient" usa "even if" para indicar que el desenlace sigue invariable.`,
  'exercise.conditional-conjunctions.19.pro_tip': `Consejo: "even if" marca un resultado inmutable.`,

  'exercise.conditional-conjunctions.20.prompt': `Empareja cada oración de las diapositivas con su función condicional:`,
  'exercise.conditional-conjunctions.20.explanation': `As long as = condición requerida; only if = condición única permitida; Even if = resultado invariable; Unless = condición negativa (if not).`,
  'exercise.conditional-conjunctions.20.pro_tip': `Consejo: identifica el rol semántico de cada conector condicional.`,
};

const adverbsOfFrequencyEsExtras: Record<string, string> = {
  "exercise.adverbs-of-frequency.1.prompt": "¿Qué adverbio de frecuencia significa el 100% del tiempo?",
  "exercise.adverbs-of-frequency.1.explanation": "\"Always\" (siempre) significa en toda ocasión (100% de las veces), mientras que \"never\" significa nunca (0%).",
  "exercise.adverbs-of-frequency.1.pro_tip": "Consejo: escala de menor a mayor frecuencia: never → rarely → sometimes → often → usually → always.",
  "exercise.adverbs-of-frequency.2.prompt": "Completa la oración con el adverbio de frecuencia correcto.",
  "exercise.adverbs-of-frequency.2.explanation": "Como va \"todos los fines de semana sin excepción\", el adverbio correcto es \"always\", colocado antes del verbo \"go\".",
  "exercise.adverbs-of-frequency.2.pro_tip": "Consejo: coloca los adverbios de frecuencia ANTES del verbo principal (\"I always go\").",
  "exercise.adverbs-of-frequency.3.prompt": "¿Verdadero o Falso?",
  "exercise.adverbs-of-frequency.3.statement": "Los adverbios de frecuencia suelen ir ANTES del verbo principal.",
  "exercise.adverbs-of-frequency.3.explanation": "Verdadero. Con los verbos de acción, el adverbio de frecuencia va antes del verbo principal (ej. \"I usually wake up at 7.\").",
  "exercise.adverbs-of-frequency.3.pro_tip": "Consejo: solo con \"to be\" el adverbio va después: \"She is usually early.\"",
  "exercise.adverbs-of-frequency.4.prompt": "Elige la oración con la posición correcta del adverbio.",
  "exercise.adverbs-of-frequency.4.explanation": "Con el verbo \"to be\" (\"is\"), el adverbio \"always\" va DESPUÉS del verbo: \"She is always late for class.\"",
  "exercise.adverbs-of-frequency.4.pro_tip": "Consejo: am / is / are + adverbio de frecuencia + adjetivo (\"She is always late\").",
  "exercise.adverbs-of-frequency.5.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.adverbs-of-frequency.5.explanation": "\"I usually drink coffee in the morning.\" Coloca el adverbio \"usually\" antes del verbo principal \"drink\".",
  "exercise.adverbs-of-frequency.5.pro_tip": "Consejo: sujeto + adverbio + verbo principal + objeto es el orden más común.",
  "exercise.adverbs-of-frequency.6.prompt": "¿Verdadero o Falso?",
  "exercise.adverbs-of-frequency.6.statement": "\"Hardly ever\" significa casi nunca.",
  "exercise.adverbs-of-frequency.6.explanation": "Verdadero. \"Hardly ever\" significa casi nunca o muy rara vez.",
  "exercise.adverbs-of-frequency.6.pro_tip": "Consejo: no uses doble negación con \"hardly ever\" (di \"I hardly ever go\", nunca \"I don't hardly ever go\").",
  "exercise.adverbs-of-frequency.7.prompt": "Completa la oración con el adverbio de frecuencia correcto.",
  "exercise.adverbs-of-frequency.7.explanation": "Rarely significa con poca frecuencia. Almost never en el contexto permite elegir rarely en vez de always.",
  "exercise.adverbs-of-frequency.7.pro_tip": "Rarely no tiene un porcentaje fijo. Busca pistas como almost never.",
  "exercise.adverbs-of-frequency.8.prompt": "¿Con qué frecuencia ocurre \"never\"?",
  "exercise.adverbs-of-frequency.8.explanation": "\"Never\" (nunca) significa el 0% de las veces, es decir, en ninguna ocasión.",
  "exercise.adverbs-of-frequency.8.pro_tip": "Consejo: como \"never\" ya es negativo, acompáñalo de un verbo en afirmativo (\"I never eat meat\").",
  "exercise.adverbs-of-frequency.9.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.adverbs-of-frequency.9.explanation": "\"They often visit their grandparents.\" Con el verbo de acción \"visit\", el adverbio \"often\" va antes del verbo.",
  "exercise.adverbs-of-frequency.9.pro_tip": "Consejo: patrón: sujeto (\"They\") + adverbio (\"often\") + verbo (\"visit\") + objeto.",
  "exercise.adverbs-of-frequency.10.prompt": "¿Verdadero o Falso?",
  "exercise.adverbs-of-frequency.10.statement": "Sometimes significa en algunas ocasiones, pero no siempre.",
  "exercise.adverbs-of-frequency.10.explanation": "Verdadero. Sometimes describe algo que ocurre en algunas ocasiones; no indica un porcentaje exacto.",
  "exercise.adverbs-of-frequency.10.pro_tip": "Usa el contexto para expresar frecuencia; los porcentajes son solo ayudas aproximadas.",
  "exercise.adverbs-of-frequency.11.prompt": "¿Qué significa \"occasionally\"?",
  "exercise.adverbs-of-frequency.11.explanation": "\"Occasionally\" (ocasionalmente / de vez en cuando) indica menos frecuencia que \"sometimes\", pero más que \"never\".",
  "exercise.adverbs-of-frequency.11.pro_tip": "Consejo: \"occasionally\" equivale a \"de vez en cuando\" (\"once in a while\").",
  "exercise.adverbs-of-frequency.12.prompt": "Ordena las palabras para formar una oración correcta.",
  "exercise.adverbs-of-frequency.12.explanation": "\"We usually have lunch at noon.\" Coloca \"usually\" antes del verbo principal \"have\".",
  "exercise.adverbs-of-frequency.12.pro_tip": "Consejo: mantén el adverbio justo antes del verbo principal que modifica.",
  "exercise.adverbs-of-frequency.13.prompt": "Completa la oración con el adverbio de frecuencia correcto.",
  "exercise.adverbs-of-frequency.13.explanation": "\"Never\" es el adverbio de frecuencia que encaja antes del verbo afirmativo \"eats\": \"She never eats breakfast at 7 a.m.\"",
  "exercise.adverbs-of-frequency.13.pro_tip": "Consejo: usa \"never\" en afirmaciones negativas (\"She never eats\") y \"ever\" en preguntas (\"Does she ever eat...?\").",
  "exercise.adverbs-of-frequency.14.prompt": "Elige la oración con el orden de palabras correcto.",
  "exercise.adverbs-of-frequency.14.explanation": "\"I hardly ever go out on weekdays.\" mantiene la expresión \"hardly ever\" unida justo antes del verbo \"go\".",
  "exercise.adverbs-of-frequency.14.pro_tip": "Consejo: nunca separes \"hardly\" y \"ever\"; colócalos juntos antes del verbo principal.",
  "exercise.adverbs-of-frequency.15.prompt": "¿Verdadero o Falso?",
  "exercise.adverbs-of-frequency.15.statement": "Con el verbo \"to be\", el adverbio de frecuencia va DESPUÉS de él.",
  "exercise.adverbs-of-frequency.15.explanation": "Verdadero. Con las formas de \"to be\" (am, is, are, was, were), el adverbio de frecuencia se coloca después del verbo.",
  "exercise.adverbs-of-frequency.15.pro_tip": "Consejo: \"She is always happy\" (después de \"be\") vs. \"She always smiles\" (antes del verbo de acción).",
  "exercise.adverbs-of-frequency.16.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.adverbs-of-frequency.16.explanation": "\"They are always happy together.\" Como el verbo es \"are\" (\"to be\"), \"always\" va después de \"are\".",
  "exercise.adverbs-of-frequency.16.pro_tip": "Consejo: Sujeto (\"They\") + be (\"are\") + adverbio (\"always\") + adjetivo (\"happy\").",
  "exercise.adverbs-of-frequency.17.prompt": "Completa la oración con el adverbio de frecuencia correcto.",
  "exercise.adverbs-of-frequency.17.explanation": "\"Always\" va antes del verbo principal \"visit\": \"We always visit them on Sundays.\"",
  "exercise.adverbs-of-frequency.17.pro_tip": "Consejo: los adverbios de una palabra como \"always\" van antes del verbo principal.",
  "exercise.adverbs-of-frequency.18.prompt": "Ordena las palabras para formar una oración correcta.",
  "exercise.adverbs-of-frequency.18.explanation": "\"She sometimes walks to work.\" Coloca \"sometimes\" entre el sujeto \"She\" y el verbo \"walks\".",
  "exercise.adverbs-of-frequency.18.pro_tip": "Consejo: conserva la -s de tercera persona en el verbo principal (\"She sometimes walks\").",
  "exercise.adverbs-of-frequency.19.prompt": "Elige la oración gramaticalmente correcta.",
  "exercise.adverbs-of-frequency.19.explanation": "\"He usually drinks coffee in the morning.\" coloca \"usually\" antes del verbo y mantiene la -s de tercera persona (\"drinks\").",
  "exercise.adverbs-of-frequency.19.pro_tip": "Consejo: con he/she/it en presente simple, recuerda añadir -s al verbo (\"usually drinks\").",
  "exercise.adverbs-of-frequency.20.prompt": "Elige la oración con el orden de palabras correcto.",
  "exercise.adverbs-of-frequency.20.explanation": "\"They never eat meat.\" coloca el adverbio \"never\" justo antes del verbo principal \"eat\".",
  "exercise.adverbs-of-frequency.20.pro_tip": "Consejo: nunca pongas el adverbio de frecuencia entre el verbo y su objeto (\"eat never meat\" es incorrecto).",
};

const timeExpressionsEsExtras: Record<string, string> = {
  "exercise.time-expressions.1.prompt": "Elige la expresión de frecuencia natural.",
  "exercise.time-expressions.1.explanation": "\"Once a week\" significa una vez por semana.",
  "exercise.time-expressions.1.pro_tip": "Consejo: usa \"once\" para una vez y \"twice\" para dos veces.",
  "exercise.time-expressions.2.prompt": "¿Qué significa la palabra \"twice\"?",
  "exercise.time-expressions.2.explanation": "\"Twice\" significa dos veces (\"two times\").",
  "exercise.time-expressions.2.pro_tip": "Consejo: \"once\" = una vez, \"twice\" = dos veces, \"three times\" = tres veces.",
  "exercise.time-expressions.3.prompt": "Ordena las palabras para formar una oración correcta.",
  "exercise.time-expressions.3.explanation": "\"I exercise three times a week.\" Las expresiones de frecuencia de varias palabras van al final.",
  "exercise.time-expressions.3.pro_tip": "Consejo: Sujeto + verbo + \"[número] times a [periodo]\".",
  "exercise.time-expressions.4.prompt": "Completa la oración con la palabra correcta.",
  "exercise.time-expressions.4.explanation": "\"Every day\" significa todos los días (cada día). \"Every\" va seguido de un sustantivo singular (\"day\").",
  "exercise.time-expressions.4.pro_tip": "Consejo: como expresión de frecuencia, escribe siempre \"every day\" separado.",
  "exercise.time-expressions.5.prompt": "Arrastra las palabras al orden correcto para formar una pregunta.",
  "exercise.time-expressions.5.explanation": "\"How often do you exercise?\" usa \"How often\" + do/does + sujeto + verbo base.",
  "exercise.time-expressions.5.pro_tip": "Consejo: empieza las preguntas de frecuencia con \"How often do/does...?\".",
  "exercise.time-expressions.6.prompt": "¿Verdadero o Falso?",
  "exercise.time-expressions.6.statement": "\"How often\" se usa para preguntar por la frecuencia.",
  "exercise.time-expressions.6.explanation": "Verdadero. \"How often...?\" pregunta con qué frecuencia ocurre una acción (ej. \"once a week\", \"every day\").",
  "exercise.time-expressions.6.pro_tip": "Consejo: \"How often\" = frecuencia; \"How long\" = duración; \"When\" = momento específico.",
  "exercise.time-expressions.7.prompt": "Completa la oración (4 veces al mes).",
  "exercise.time-expressions.7.explanation": "A partir de tres, se usa la palabra en plural \"times\": \"four times a month\".",
  "exercise.time-expressions.7.pro_tip": "Consejo: \"once\", \"twice\", \"three times\", \"four times\" (siempre con \"times\" en plural).",
  "exercise.time-expressions.8.prompt": "Elige la pregunta correcta para indagar por la frecuencia.",
  "exercise.time-expressions.8.explanation": "\"How often do you go to the gym?\" es la pregunta estándar para conocer la frecuencia de una rutina.",
  "exercise.time-expressions.8.pro_tip": "Consejo: \"How much\" pregunta por cantidad incontable; \"How often\" pregunta por frecuencia.",
  "exercise.time-expressions.9.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.time-expressions.9.explanation": "\"He plays football twice a week.\" La expresión de frecuencia \"twice a week\" se coloca al final.",
  "exercise.time-expressions.9.pro_tip": "Consejo: Sujeto (\"He\") + verbo (\"plays\") + objeto (\"football\") + frecuencia (\"twice a week\").",
  "exercise.time-expressions.10.prompt": "Ordena las palabras para formar una pregunta correcta.",
  "exercise.time-expressions.10.explanation": "\"How often do you eat out?\" sigue el patrón: How often + do + sujeto + verbo base.",
  "exercise.time-expressions.10.pro_tip": "Consejo: \"eat out\" significa comer fuera de casa (en un restaurante).",
  "exercise.time-expressions.11.prompt": "Completa la oración con la palabra correcta.",
  "exercise.time-expressions.11.explanation": "\"Every morning\" significa todas las mañanas como rutina.",
  "exercise.time-expressions.11.pro_tip": "Consejo: \"every\" + sustantivo en singular (\"every morning\", \"every evening\", \"every week\").",
  "exercise.time-expressions.12.prompt": "¿Cuál es la mejor respuesta para \"How often do you go to the gym?\"?",
  "exercise.time-expressions.12.explanation": "\"I go twice a week.\" responde a \"How often...?\" indicando cuántas veces por semana vas.",
  "exercise.time-expressions.12.pro_tip": "Consejo: una pregunta con \"How often\" requiere indicar frecuencia, no responder \"Yes, I do.\"",
  "exercise.time-expressions.13.prompt": "¿Verdadero o Falso?",
  "exercise.time-expressions.13.statement": "\"Once a day\" y \"one time a day\" significan lo mismo.",
  "exercise.time-expressions.13.explanation": "Verdadero. Ambos significan una vez al día, aunque \"once a day\" es mucho más natural.",
  "exercise.time-expressions.13.pro_tip": "Consejo: prefiere siempre \"once a day\" y \"twice a day\" en inglés natural.",
  "exercise.time-expressions.14.prompt": "Completa la oración con la forma numérica correcta.",
  "exercise.time-expressions.14.explanation": "Antes del plural \"times\" (veces), se usa el número cardinal \"five\": \"five times\".",
  "exercise.time-expressions.14.pro_tip": "Consejo: usa números cardinales (three, four, five) + \"times\", no ordinales (fifth).",
  "exercise.time-expressions.15.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.time-expressions.15.explanation": "\"She goes to the library every day.\" El lugar (\"to the library\") va antes del tiempo (\"every day\").",
  "exercise.time-expressions.15.pro_tip": "Consejo: en inglés, el lugar (dónde) suele ir antes que el tiempo (cuándo/con qué frecuencia).",
  "exercise.time-expressions.16.prompt": "Ordena las palabras para formar una oración correcta.",
  "exercise.time-expressions.16.explanation": "\"We meet once a month.\" Sujeto (\"We\") + verbo (\"meet\") + frecuencia (\"once a month\").",
  "exercise.time-expressions.16.pro_tip": "Consejo: \"once a month\" = una vez al mes.",
  "exercise.time-expressions.17.prompt": "Completa la oración con la palabra correcta.",
  "exercise.time-expressions.17.explanation": "\"Every week\" significa todas las semanas (\"I call my parents every week.\").",
  "exercise.time-expressions.17.pro_tip": "Consejo: \"every week\" no lleva artículo, mientras que \"once/twice a week\" lleva \"a\".",
  "exercise.time-expressions.18.prompt": "Elige la oración gramaticalmente correcta.",
  "exercise.time-expressions.18.explanation": "\"He goes fishing every weekend.\" usa \"goes\" en tercera persona y coloca \"every\" + \"weekend\" (singular) al final.",
  "exercise.time-expressions.18.pro_tip": "Consejo: mantén juntos el verbo y la actividad (\"goes fishing\") y pon la expresión temporal al final.",
  "exercise.time-expressions.19.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.time-expressions.19.explanation": "\"I check my email three times a day.\" Sujeto + verbo + objeto + expresión de frecuencia al final.",
  "exercise.time-expressions.19.pro_tip": "Consejo: \"three times a day\" = tres veces al día.",
  "exercise.time-expressions.20.prompt": "¿Qué oración responde con naturalidad a \"How often do you watch TV?\"?",
  "exercise.time-expressions.20.explanation": "\"I never watch TV.\" responde a \"How often...?\" indicando la frecuencia (nunca).",
  "exercise.time-expressions.20.pro_tip": "Consejo: puedes responder a \"How often...?\" con una frase temporal (\"twice a week\") o un adverbio (\"never\").",
};

const didAndWasEsExtras: Record<string, string> = {
  "exercise.did-and-was.1.prompt": "Elige el auxiliar correcto para la pregunta en pasado simple.",
  "exercise.did-and-was.1.explanation": "Usa \"Did\" para formar preguntas en pasado simple con verbos de acción como \"go\" (\"Did you go to school yesterday?\").",
  "exercise.did-and-was.1.pro_tip": "Consejo: con \"Did\", el verbo principal se queda en su forma base (\"go\").",
  "exercise.did-and-was.2.prompt": "Elige la oración negativa correcta en pasado.",
  "exercise.did-and-was.2.explanation": "Después de \"didn't\", usa siempre la forma base del verbo (\"go\"): \"I didn't go to the party.\"",
  "exercise.did-and-was.2.pro_tip": "Consejo: di \"I didn't go\", jamás \"I didn't went\".",
  "exercise.did-and-was.3.prompt": "¿Verdadero o Falso?",
  "exercise.did-and-was.3.statement": "Después de \"did\" usamos la forma base del verbo (sin -ed).",
  "exercise.did-and-was.3.explanation": "Verdadero. Como \"did\" ya marca el pasado, el verbo principal va en forma base (ej. \"Did she call?\", no \"Did she called?\").",
  "exercise.did-and-was.3.pro_tip": "Consejo: \"did\" ya lleva el tiempo pasado; el verbo principal no se conjuga.",
  "exercise.did-and-was.4.prompt": "Completa la respuesta corta.",
  "exercise.did-and-was.4.explanation": "Las preguntas que inician con \"Did you...?\" se responden con \"Yes, I did.\" (o \"No, I didn't.\").",
  "exercise.did-and-was.4.pro_tip": "Consejo: en las respuestas cortas se repite el auxiliar (\"did\"), no el verbo principal (\"watched\").",
  "exercise.did-and-was.5.prompt": "Arrastra las palabras al orden correcto para formar una pregunta.",
  "exercise.did-and-was.5.explanation": "\"Did she call you last night?\" Estructura: Did + sujeto (\"she\") + verbo base (\"call\") + objeto + tiempo.",
  "exercise.did-and-was.5.pro_tip": "Consejo: en preguntas en pasado con verbos de acción, el orden es: Did + Sujeto + Verbo base.",
  "exercise.did-and-was.6.prompt": "Ordena las palabras para formar una oración negativa correcta.",
  "exercise.did-and-was.6.explanation": "\"I didn't eat breakfast this morning.\" Patrón: sujeto (\"I\") + didn't + verbo base (\"eat\") + objeto + tiempo.",
  "exercise.did-and-was.6.pro_tip": "Consejo: nunca uses un verbo en pasado después de \"didn't\" (\"didn't eat\", no \"didn't ate\").",
  "exercise.did-and-was.7.prompt": "Elige la pregunta gramaticalmente correcta en pasado simple.",
  "exercise.did-and-was.7.explanation": "\"Did you see the news?\" usa \"Did\" + sujeto \"you\" + el verbo en forma base \"see\" (no el pasado \"saw\").",
  "exercise.did-and-was.7.pro_tip": "Consejo: como \"did\" ya marca el pasado, \"saw\" vuelve a su forma base \"see\".",
  "exercise.did-and-was.8.prompt": "¿Verdadero o Falso?",
  "exercise.did-and-was.8.statement": "El negativo de \"did\" es \"did not\" (o \"didn't\").",
  "exercise.did-and-was.8.explanation": "Verdadero. En pasado simple, las negaciones con verbos de acción usan \"did not\" o \"didn't\" + el verbo en forma base.",
  "exercise.did-and-was.8.pro_tip": "Consejo: \"didn't\" es invariable para todas las personas (I, you, he, she, it, we, they didn't).",
  "exercise.did-and-was.9.prompt": "Completa la oración negativa en pasado.",
  "exercise.did-and-was.9.explanation": "Con el verbo de acción en forma base \"come\" y \"yesterday\", se usa \"didn't\": \"They didn't come to class yesterday.\"",
  "exercise.did-and-was.9.pro_tip": "Consejo: usa \"didn't\" antes de verbos en forma base; nunca uses \"wasn't/weren't\" con \"come\".",
  "exercise.did-and-was.10.prompt": "Arrastra las palabras al orden correcto para formar una pregunta.",
  "exercise.did-and-was.10.explanation": "\"What did you do last weekend?\" El primer \"did\" es el auxiliar de pasado y \"do\" es el verbo principal (hacer).",
  "exercise.did-and-was.10.pro_tip": "Consejo: Palabra Wh- (\"What\") + auxiliar (\"did\") + sujeto (\"you\") + verbo principal (\"do\").",
  "exercise.did-and-was.11.prompt": "Elige la forma correcta de \"to be\" en pasado.",
  "exercise.did-and-was.11.explanation": "Con el sujeto \"I\" y un lugar (\"at home\"), se usa \"was\": \"I was at home last night.\"",
  "exercise.did-and-was.11.pro_tip": "Consejo: \"was\" va con I/he/she/it; \"were\" va con you/we/they.",
  "exercise.did-and-was.12.prompt": "Elige la oración que usa \"was\" o \"were\" correctamente.",
  "exercise.did-and-was.12.explanation": "El sujeto plural \"They\" lleva \"were\": \"They were tired after the trip.\"",
  "exercise.did-and-was.12.pro_tip": "Consejo: memoriza \"I was, you were, he/she/it was, we were, they were\".",
  "exercise.did-and-was.13.prompt": "¿Verdadero o Falso?",
  "exercise.did-and-was.13.statement": "Usamos \"were\" con sujetos plurales (you, we, they).",
  "exercise.did-and-was.13.explanation": "Verdadero. \"Were\" es la forma de pasado de \"to be\" para \"you\", \"we\" y \"they\".",
  "exercise.did-and-was.13.pro_tip": "Consejo: \"you\" siempre lleva \"were\" en pasado, tanto en singular como en plural.",
  "exercise.did-and-was.14.prompt": "Ordena las palabras para formar una oración correcta.",
  "exercise.did-and-was.14.explanation": "\"She was very happy yesterday.\" El sujeto singular \"She\" lleva \"was\" seguido de \"very happy\".",
  "exercise.did-and-was.14.pro_tip": "Consejo: Sujeto (\"She\") + was/were (\"was\") + adjetivo (\"very happy\") + tiempo (\"yesterday\").",
  "exercise.did-and-was.15.prompt": "Completa la oración con la forma correcta de \"to be\" en pasado.",
  "exercise.did-and-was.15.explanation": "Con el sujeto plural \"We\" y un día pasado (\"on Saturday\"), se usa \"were\": \"We were at the park on Saturday.\"",
  "exercise.did-and-was.15.pro_tip": "Consejo: \"We\" siempre va con \"were\" en el pasado de \"to be\".",
  "exercise.did-and-was.16.prompt": "Elige la oración negativa correcta en pasado.",
  "exercise.did-and-was.16.explanation": "Con el sujeto singular \"He\" y un lugar (\"at school\"), se usa \"wasn't\": \"He wasn't at school.\"",
  "exercise.did-and-was.16.pro_tip": "Consejo: nunca uses \"didn't\" sin un verbo principal; usa \"wasn't\" o \"weren't\" para lugares y estados.",
  "exercise.did-and-was.17.prompt": "Arrastra las palabras al orden correcto para formar una pregunta.",
  "exercise.did-and-was.17.explanation": "\"Where were you last night?\" Con \"to be\", se invierte directamente \"were\" y el sujeto \"you\" (sin \"did\").",
  "exercise.did-and-was.17.pro_tip": "Consejo: Palabra Wh- (\"Where\") + was/were (\"were\") + sujeto (\"you\") + tiempo (\"last night\").",
  "exercise.did-and-was.18.prompt": "Empareja cada grupo de sujetos o pregunta con su forma correcta de \"was / were\".",
  "exercise.did-and-was.18.explanation": "I / He / She / It → was; You / We / They → were; \"Was she at work?\" → \"Yes, she was.\"; \"Were they at home?\" → \"No, they weren't.\"",
  "exercise.did-and-was.18.pro_tip": "Consejo: haz coincidir el pronombre y la forma de \"to be\" (\"was\" vs. \"were\") en preguntas y respuestas.",
  "exercise.did-and-was.19.prompt": "¿Verdadero o Falso?",
  "exercise.did-and-was.19.statement": "Una respuesta corta para \"Were you tired?\" puede ser \"Yes, I was.\"",
  "exercise.did-and-was.19.explanation": "Verdadero. Cuando te preguntan \"Were you...?\", respondes sobre ti mismo con \"I\": \"Yes, I was.\" o \"No, I wasn't.\"",
  "exercise.did-and-was.19.pro_tip": "Consejo: \"Were you...?\" (singular) → \"Yes, I was.\" / \"No, I wasn't.\"",
  "exercise.did-and-was.20.prompt": "Empareja cada pregunta en pasado con su respuesta corta natural.",
  "exercise.did-and-was.20.explanation": "\"Did you call him?\" → \"No, I didn't.\"; \"Was he tired?\" → \"No, he wasn't.\"; \"Were we late?\" → \"No, we weren't.\"; \"Did she go out?\" → \"Yes, she did.\"",
  "exercise.did-and-was.20.pro_tip": "Consejo: una pregunta con \"Did...?\" se responde con \"did/didn't\"; una con \"Was/Were...?\" se responde con \"was/were/wasn't/weren't\".",
};

const simplePastEsExtras: Record<string, string> = {
  "exercise.simple-past-and-past-continuous.1.prompt": "Completa la oración con el pasado simple de \"play\".",
  "exercise.simple-past-and-past-continuous.1.explanation": "\"Play\" es un verbo regular, por lo que añade -ed en pasado simple: \"I played football yesterday.\"",
  "exercise.simple-past-and-past-continuous.1.pro_tip": "Consejo: cuando un verbo termina en vocal + y (\"play\", \"stay\"), solo añade -ed (\"played\").",
  "exercise.simple-past-and-past-continuous.2.prompt": "Completa la oración con el pasado simple de \"watch\".",
  "exercise.simple-past-and-past-continuous.2.explanation": "\"Watch\" es un verbo regular que añade -ed en pasado simple: \"She watched a movie last night.\"",
  "exercise.simple-past-and-past-continuous.2.pro_tip": "Consejo: marcadores como \"last night\" y \"yesterday\" exigen el pasado simple.",
  "exercise.simple-past-and-past-continuous.3.prompt": "Elige la oración que usa el pasado simple correctamente.",
  "exercise.simple-past-and-past-continuous.3.explanation": "\"He studied English last year.\" usa el pasado simple \"studied\" con el marcador de tiempo terminado \"last year\".",
  "exercise.simple-past-and-past-continuous.3.pro_tip": "Consejo: en verbos terminados en consonante + y (\"study\"), cambia la -y por -ied (\"studied\").",
  "exercise.simple-past-and-past-continuous.4.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.simple-past-and-past-continuous.4.explanation": "\"We worked late last Friday.\" \"Worked\" es el pasado simple regular del verbo \"work\".",
  "exercise.simple-past-and-past-continuous.4.pro_tip": "Consejo: Sujeto (\"We\") + verbo en pasado (\"worked\") + adverbio (\"late\") + tiempo (\"last Friday\").",
  "exercise.simple-past-and-past-continuous.5.prompt": "¿Verdadero o Falso?",
  "exercise.simple-past-and-past-continuous.5.statement": "En los verbos regulares terminados en -e, solo añadimos -d (ej. \"like\" -> \"liked\").",
  "exercise.simple-past-and-past-continuous.5.explanation": "Verdadero. Cuando un verbo regular ya termina en -e (like, live, arrive), solo añadimos -d.",
  "exercise.simple-past-and-past-continuous.5.pro_tip": "Consejo: like → liked, arrive → arrived, dance → danced.",
  "exercise.simple-past-and-past-continuous.6.prompt": "Completa la oración con el pasado simple de \"visit\".",
  "exercise.simple-past-and-past-continuous.6.explanation": "\"Visited\" es la forma regular en pasado simple de \"visit\": \"They visited us last weekend.\"",
  "exercise.simple-past-and-past-continuous.6.pro_tip": "Consejo: \"last weekend\" indica un tiempo pasado terminado, por lo que se usa \"visited\".",
  "exercise.simple-past-and-past-continuous.7.prompt": "¿Cuál es la ortografía correcta en pasado simple de \"study\"?",
  "exercise.simple-past-and-past-continuous.7.explanation": "Como \"study\" termina en consonante (\"d\") + \"y\", cambia la \"y\" por \"i\" y añade \"-ed\": \"studied\".",
  "exercise.simple-past-and-past-continuous.7.pro_tip": "Consejo: consonante + y → -ied (\"study → studied\"), pero vocal + y → -yed (\"play → played\").",
  "exercise.simple-past-and-past-continuous.8.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.simple-past-and-past-continuous.8.explanation": "\"I cleaned my room yesterday.\" \"Cleaned\" es el pasado simple regular de \"clean\".",
  "exercise.simple-past-and-past-continuous.8.pro_tip": "Consejo: Sujeto (\"I\") + verbo (\"cleaned\") + objeto (\"my room\") + tiempo (\"yesterday\").",
  "exercise.simple-past-and-past-continuous.9.prompt": "Completa la oración con el pasado simple de \"cook\".",
  "exercise.simple-past-and-past-continuous.9.explanation": "\"Cooked\" es el pasado simple regular de \"cook\": \"She cooked dinner for her family.\"",
  "exercise.simple-past-and-past-continuous.9.pro_tip": "Consejo: las formas de pasado simple son iguales para todos los sujetos (I, you, she, they cooked).",
  "exercise.simple-past-and-past-continuous.10.prompt": "Ordena las palabras para formar una oración correcta.",
  "exercise.simple-past-and-past-continuous.10.explanation": "\"He walked to school this morning.\" \"Walked\" es el pasado simple regular de \"walk\".",
  "exercise.simple-past-and-past-continuous.10.pro_tip": "Consejo: Sujeto (\"He\") + verbo (\"walked\") + destino (\"to school\") + tiempo (\"this morning\").",
  "exercise.simple-past-and-past-continuous.11.prompt": "Completa la oración con el pasado simple irregular de \"go\".",
  "exercise.simple-past-and-past-continuous.11.explanation": "\"Go\" es un verbo irregular cuyo pasado simple es \"went\": \"I went to the cinema last night.\"",
  "exercise.simple-past-and-past-continuous.11.pro_tip": "Consejo: memoriza \"go → went → gone\" (nunca \"goed\").",
  "exercise.simple-past-and-past-continuous.12.prompt": "Completa la oración con el pasado simple irregular de \"see\".",
  "exercise.simple-past-and-past-continuous.12.explanation": "\"See\" es irregular: su pasado simple es \"saw\" (\"She saw him at the party.\").",
  "exercise.simple-past-and-past-continuous.12.pro_tip": "Consejo: see → saw (pasado simple) → seen (participio pasado).",
  "exercise.simple-past-and-past-continuous.13.prompt": "¿Cuál es el pasado simple del verbo irregular \"take\"?",
  "exercise.simple-past-and-past-continuous.13.explanation": "El pasado simple de \"take\" es \"took\" (\"taken\" es el participio pasado y \"taked\" no existe).",
  "exercise.simple-past-and-past-continuous.13.pro_tip": "Consejo: take → took → taken.",
  "exercise.simple-past-and-past-continuous.14.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.simple-past-and-past-continuous.14.explanation": "\"I had a great time there.\" \"Had\" es el pasado simple irregular de \"have\".",
  "exercise.simple-past-and-past-continuous.14.pro_tip": "Consejo: have → had → had (\"have a great time\" → \"had a great time\").",
  "exercise.simple-past-and-past-continuous.15.prompt": "¿Verdadero o Falso?",
  "exercise.simple-past-and-past-continuous.15.statement": "Los verbos irregulares siguen la regla de añadir -ed en el pasado.",
  "exercise.simple-past-and-past-continuous.15.explanation": "Falso. Los verbos irregulares no añaden -ed; cambian de forma propia (ej. go → went, see → saw, eat → ate).",
  "exercise.simple-past-and-past-continuous.15.pro_tip": "Consejo: nunca añadas -ed a verbos irregulares (di \"went\" y \"ate\", no \"goed\" ni \"eated\").",
  "exercise.simple-past-and-past-continuous.16.prompt": "Completa la oración con el pasado simple irregular de \"eat\".",
  "exercise.simple-past-and-past-continuous.16.explanation": "\"Eat\" es un verbo irregular cuyo pasado simple es \"ate\": \"They ate sushi for dinner.\"",
  "exercise.simple-past-and-past-continuous.16.pro_tip": "Consejo: eat → ate → eaten.",
  "exercise.simple-past-and-past-continuous.17.prompt": "¿Cuál es el pasado simple del verbo irregular \"buy\"?",
  "exercise.simple-past-and-past-continuous.17.explanation": "El pasado simple de \"buy\" (comprar) es \"bought\" (\"buyed\" no existe).",
  "exercise.simple-past-and-past-continuous.17.pro_tip": "Consejo: agrupa los verbos terminados en \"-ought\": buy → bought, bring → brought, think → thought.",
  "exercise.simple-past-and-past-continuous.18.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.simple-past-and-past-continuous.18.explanation": "\"I found my keys under the sofa.\" \"Found\" es el pasado simple irregular de \"find\" (encontrar).",
  "exercise.simple-past-and-past-continuous.18.pro_tip": "Consejo: find → found → found. Coloca el objeto (\"my keys\") antes del lugar (\"under the sofa\").",
  "exercise.simple-past-and-past-continuous.19.prompt": "Completa la oración con el pasado simple de \"be\".",
  "exercise.simple-past-and-past-continuous.19.explanation": "Para el sujeto plural \"We\", el pasado simple de \"be\" es \"were\": \"We were very tired after the trip.\"",
  "exercise.simple-past-and-past-continuous.19.pro_tip": "Consejo: I/he/she/it → was; you/we/they → were.",
  "exercise.simple-past-and-past-continuous.20.prompt": "Ordena las palabras para formar una oración correcta.",
  "exercise.simple-past-and-past-continuous.20.explanation": "\"He told me the truth yesterday.\" \"Told\" es el pasado simple irregular de \"tell\" (decir/contar).",
  "exercise.simple-past-and-past-continuous.20.pro_tip": "Consejo: tell → told → told (\"told\" va seguido de la persona: \"told me\").",
  "exercise.simple-past-and-past-continuous.21.prompt": "Completa la oración con el pasado continuo de \"read\".",
  "exercise.simple-past-and-past-continuous.21.explanation": "Para describir una acción en progreso en una hora específica del pasado (\"at 9 p.m.\"), usa el pasado continuo: \"I was reading a book at 9 p.m.\"",
  "exercise.simple-past-and-past-continuous.21.pro_tip": "Consejo: pasado continuo = was/were + verbo con -ing (\"I was reading\").",
  "exercise.simple-past-and-past-continuous.22.prompt": "Completa la oración con el pasado continuo de \"play\".",
  "exercise.simple-past-and-past-continuous.22.explanation": "El sujeto plural \"They\" lleva \"were playing\" para describir una acción continua (\"all afternoon\").",
  "exercise.simple-past-and-past-continuous.22.pro_tip": "Consejo: usa \"were + verbo-ing\" con sujetos plurales (you, we, they).",
  "exercise.simple-past-and-past-continuous.23.prompt": "Elige la oración que forma correctamente el pasado continuo.",
  "exercise.simple-past-and-past-continuous.23.explanation": "\"She was cooking dinner.\" incluye las dos partes obligatorias del pasado continuo: \"was\" + \"cooking\".",
  "exercise.simple-past-and-past-continuous.23.pro_tip": "Consejo: nunca omitas \"was\" o \"were\" antes del verbo con -ing.",
  "exercise.simple-past-and-past-continuous.24.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.simple-past-and-past-continuous.24.explanation": "\"He was sleeping when I called.\" La acción en progreso (\"was sleeping\") fue interrumpida por la acción breve (\"called\").",
  "exercise.simple-past-and-past-continuous.24.pro_tip": "Consejo: pasado continuo (acción larga de fondo) + \"when\" + pasado simple (interrupción).",
  "exercise.simple-past-and-past-continuous.25.prompt": "¿Verdadero o Falso?",
  "exercise.simple-past-and-past-continuous.25.statement": "El pasado continuo se forma con was/were + verbo con -ing.",
  "exercise.simple-past-and-past-continuous.25.explanation": "Verdadero. El pasado continuo siempre se construye con \"was\" o \"were\" + el verbo terminado en -ing.",
  "exercise.simple-past-and-past-continuous.25.pro_tip": "Consejo: verifica siempre ambas partes: was/were + verbo-ing.",
  "exercise.simple-past-and-past-continuous.26.prompt": "Completa la oración con el pasado continuo de \"walk\".",
  "exercise.simple-past-and-past-continuous.26.explanation": "Con el sujeto plural \"We\", se usa \"were walking\": \"We were walking home in the rain.\"",
  "exercise.simple-past-and-past-continuous.26.pro_tip": "Consejo: usa el pasado continuo para ambientar una escena en el pasado.",
  "exercise.simple-past-and-past-continuous.27.prompt": "Elige la oración gramaticalmente correcta en pasado continuo.",
  "exercise.simple-past-and-past-continuous.27.explanation": "\"I was studying at 10 p.m.\" usa \"was studying\" para una acción en curso a las 10 p.m.",
  "exercise.simple-past-and-past-continuous.27.pro_tip": "Consejo: con el sujeto \"I\", usa siempre \"was\" + verbo-ing en pasado continuo.",
  "exercise.simple-past-and-past-continuous.28.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.simple-past-and-past-continuous.28.explanation": "\"The sun was shining brightly.\" El sujeto singular \"The sun\" lleva \"was shining\".",
  "exercise.simple-past-and-past-continuous.28.pro_tip": "Consejo: elimina la -e muda de \"shine\" antes de añadir -ing (\"shining\").",
  "exercise.simple-past-and-past-continuous.29.prompt": "Completa la oración con el pasado continuo de \"play\".",
  "exercise.simple-past-and-past-continuous.29.explanation": "Como \"The kids\" es plural (\"ellos\"), lleva \"were playing\": \"The kids were playing in the garden.\"",
  "exercise.simple-past-and-past-continuous.29.pro_tip": "Consejo: los sujetos plurales (\"the kids\") van con \"were\", nunca con \"was\".",
  "exercise.simple-past-and-past-continuous.30.prompt": "Ordena las palabras para formar una oración correcta.",
  "exercise.simple-past-and-past-continuous.30.explanation": "\"She was dancing all night.\" \"Was dancing\" describe una actividad continua que duró \"all night\" (toda la noche).",
  "exercise.simple-past-and-past-continuous.30.pro_tip": "Consejo: expresiones como \"all night\" o \"all afternoon\" suelen ir con pasado continuo.",
  "exercise.simple-past-and-past-continuous.31.prompt": "Elige la oración que combina correctamente pasado continuo y pasado simple.",
  "exercise.simple-past-and-past-continuous.31.explanation": "\"I was reading a book when the phone rang.\" Leer estaba en progreso (\"was reading\") cuando sonó el teléfono (\"rang\").",
  "exercise.simple-past-and-past-continuous.31.pro_tip": "Consejo: acción larga en curso = pasado continuo; acción puntual que interrumpe = pasado simple.",
  "exercise.simple-past-and-past-continuous.32.prompt": "Completa la oración con la forma correcta de \"cook\" después de \"While\".",
  "exercise.simple-past-and-past-continuous.32.explanation": "Después de \"While\" (mientras), usa el pasado continuo (\"was cooking\") para la acción en curso cuando él llegó (\"he arrived\").",
  "exercise.simple-past-and-past-continuous.32.pro_tip": "Consejo: \"While\" + pasado continuo (\"While I was cooking\"), seguido de pasado simple (\"he arrived\").",
  "exercise.simple-past-and-past-continuous.33.prompt": "Arrastra las palabras al orden correcto para formar la oración.",
  "exercise.simple-past-and-past-continuous.33.explanation": "\"I was watching TV when she called.\" Ver la televisión estaba en curso (\"was watching\") cuando ella llamó (\"called\").",
  "exercise.simple-past-and-past-continuous.33.pro_tip": "Consejo: [Pasado Continuo] + when + [Pasado Simple].",
  "exercise.simple-past-and-past-continuous.34.prompt": "¿Verdadero o Falso?",
  "exercise.simple-past-and-past-continuous.34.statement": "\"While\" suele ir seguido del pasado continuo (una acción larga en curso).",
  "exercise.simple-past-and-past-continuous.34.explanation": "Verdadero. \"While\" (mientras) introduce una acción con duración que estaba ocurriendo en ese momento.",
  "exercise.simple-past-and-past-continuous.34.pro_tip": "Consejo: \"while\" + pasado continuo (acción larga); \"when\" + pasado simple (acción puntual).",
  "exercise.simple-past-and-past-continuous.35.prompt": "Completa la oración con el pasado simple de \"ring\".",
  "exercise.simple-past-and-past-continuous.35.explanation": "El timbre del teléfono es la acción puntual que interrumpió \"I was sleeping\", por lo que se usa el pasado simple \"rang\".",
  "exercise.simple-past-and-past-continuous.35.pro_tip": "Consejo: ring → rang (pasado simple) → rung (participio pasado).",
  "exercise.simple-past-and-past-continuous.36.prompt": "Elige la oración que describe correctamente una acción interrumpida en el pasado.",
  "exercise.simple-past-and-past-continuous.36.explanation": "\"She was running when she fell.\" Correr estaba en progreso (\"was running\") cuando ocurrió la caída repentina (\"fell\").",
  "exercise.simple-past-and-past-continuous.36.pro_tip": "Consejo: fall → fell → fallen. Usa el pasado simple \"fell\" para el evento repentino.",
  "exercise.simple-past-and-past-continuous.37.prompt": "Empareja cada verbo base con su pasado simple irregular.",
  "exercise.simple-past-and-past-continuous.37.explanation": "go → went, see → saw, take → took, have → had, buy → bought.",
  "exercise.simple-past-and-past-continuous.37.pro_tip": "Consejo: practica estos cinco verbos irregulares frecuentes hasta dominarlos automáticamente.",
  "exercise.simple-past-and-past-continuous.38.prompt": "Ordena las palabras para formar una oración correcta.",
  "exercise.simple-past-and-past-continuous.38.explanation": "\"While I was reading, the dog barked.\" \"While I was reading\" describe la acción de fondo y \"the dog barked\" la interrupción.",
  "exercise.simple-past-and-past-continuous.38.pro_tip": "Consejo: \"While\" + pasado continuo, + pasado simple.",
  "exercise.simple-past-and-past-continuous.39.prompt": "Empareja cada verbo base con su participio pasado irregular (3.ª columna).",
  "exercise.simple-past-and-past-continuous.39.explanation": "eat → eaten, write → written, drive → driven, speak → spoken, give → given.",
  "exercise.simple-past-and-past-continuous.39.pro_tip": "Consejo: muchos participios irregulares comunes terminan en -en (eaten, written, driven, spoken, given).",
  "exercise.simple-past-and-past-continuous.40.prompt": "Elige la oración que muestra una acción larga interrumpida por una acción breve.",
  "exercise.simple-past-and-past-continuous.40.explanation": "\"I was eating dinner when the doorbell rang.\" Cenar estaba en progreso (\"was eating\") cuando sonó el timbre (\"rang\").",
  "exercise.simple-past-and-past-continuous.40.pro_tip": "Consejo: usa pasado continuo para la comida en curso (\"was eating\") y pasado simple para el timbre (\"rang\").",
};

const presentPerfectEverNeverEsExtras: Record<string, string> = {
  "exercise.present-perfect-ever-never.1.prompt": "Elige la respuesta negativa correcta con \"never\":",
  "exercise.present-perfect-ever-never.1.explanation": "Usa \"have never\" para respuesta negativa. Nunca uses doble negación (\"haven't never\").",
  "exercise.present-perfect-ever-never.1.pro_tip": "Consejo: have/has + never + participio pasado.",
  "exercise.present-perfect-ever-never.2.prompt": "Completa la respuesta negativa con \"never\":",
  "exercise.present-perfect-ever-never.2.explanation": "\"never\" se coloca entre el auxiliar \"have\" y el participio.",
  "exercise.present-perfect-ever-never.2.pro_tip": "Consejo: auxiliar + never + participio.",
  "exercise.present-perfect-ever-never.3.prompt": "Elige la respuesta negativa correcta en 3ª persona:",
  "exercise.present-perfect-ever-never.3.explanation": "La tercera persona singular lleva \"has\": \"he has never flown\".",
  "exercise.present-perfect-ever-never.3.pro_tip": "Consejo: he/she/it + has never + participio.",
  "exercise.present-perfect-ever-never.4.prompt": "Ordena las palabras para formar la oración negativa:",
  "exercise.present-perfect-ever-never.4.explanation": "\"No, I have never eaten caviar.\"",
  "exercise.present-perfect-ever-never.4.pro_tip": "Consejo: No, sujeto + have never + participio.",
  "exercise.present-perfect-ever-never.5.prompt": "Completa la respuesta corta negativa:",
  "exercise.present-perfect-ever-never.5.explanation": "Respuesta corta para she: \"No, she hasn't.\"",
  "exercise.present-perfect-ever-never.5.pro_tip": "Consejo: Has she...? → No, she hasn't.",
  "exercise.present-perfect-ever-never.6.prompt": "¿Verdadero o Falso?",
  "exercise.present-perfect-ever-never.6.explanation": "Verdadero. \"No, never\" es una respuesta corta conversacional muy natural.",
  "exercise.present-perfect-ever-never.6.pro_tip": "Consejo: \"No, never\" es muy común al hablar.",
  "exercise.present-perfect-ever-never.7.prompt": "Elige la respuesta afirmativa con detalles en pasado:",
  "exercise.present-perfect-ever-never.7.explanation": "Responde \"Yes, I have\" en presente perfecto, y da detalles específicos en pasado simple: \"I went there in 2021.\"",
  "exercise.present-perfect-ever-never.7.pro_tip": "Consejo: cambia a pasado simple al dar fecha o detalles concretos.",
  "exercise.present-perfect-ever-never.8.prompt": "Completa la respuesta corta afirmativa:",
  "exercise.present-perfect-ever-never.8.explanation": "\"Yes, he has\" usa el auxiliar \"has\" para Carlos.",
  "exercise.present-perfect-ever-never.8.pro_tip": "Consejo: Has Carlos...? → Yes, he has.",
  "exercise.present-perfect-ever-never.9.prompt": "Elige la respuesta corta afirmativa para \"we\":",
  "exercise.present-perfect-ever-never.9.explanation": "\"Yes, we have\" nunca se contrae (\"Yes, we've\") al final de una oración.",
  "exercise.present-perfect-ever-never.9.pro_tip": "Consejo: jamás contraigas en respuestas cortas afirmativas.",
  "exercise.present-perfect-ever-never.10.prompt": "Ordena las palabras para formar la respuesta con detalle pasado:",
  "exercise.present-perfect-ever-never.10.explanation": "\"Yes, she has. She visited London last May.\"",
  "exercise.present-perfect-ever-never.10.pro_tip": "Consejo: Yes, she has. + oración en pasado simple.",
  "exercise.present-perfect-ever-never.11.prompt": "Completa el detalle en pasado específico:",
  "exercise.present-perfect-ever-never.11.explanation": "Al mencionar un momento específico (\"two years ago\"), usa el pasado simple \"lost\".",
  "exercise.present-perfect-ever-never.11.pro_tip": "Consejo: momento específico en el pasado = pasado simple.",
  "exercise.present-perfect-ever-never.12.prompt": "¿Verdadero o Falso?",
  "exercise.present-perfect-ever-never.12.explanation": "Falso. No se puede contraer \"have\" en respuestas cortas afirmativas (\"Yes, I have\", nunca \"Yes, I've\").",
  "exercise.present-perfect-ever-never.12.pro_tip": "Consejo: sin contracción en respuestas cortas afirmativas.",
  "exercise.present-perfect-ever-never.13.prompt": "Elige la pregunta correcta sobre experiencia de vida:",
  "exercise.present-perfect-ever-never.13.explanation": "\"Have you ever eaten sushi?\" sigue la estructura Have + sujeto + ever + participio.",
  "exercise.present-perfect-ever-never.13.pro_tip": "Consejo: Have you ever + participio pasado?",
  "exercise.present-perfect-ever-never.14.prompt": "Elige la pregunta correcta en 3ª persona:",
  "exercise.present-perfect-ever-never.14.explanation": "Maria es 3ª persona, la pregunta comienza con \"Has\": \"Has Maria ever climbed...?\"",
  "exercise.present-perfect-ever-never.14.pro_tip": "Consejo: Has + he/she/nombre + ever + participio?",
  "exercise.present-perfect-ever-never.15.prompt": "Completa la pregunta sobre experiencia:",
  "exercise.present-perfect-ever-never.15.explanation": "Usa \"Have\" con \"you\": \"Have you ever ridden...?\"",
  "exercise.present-perfect-ever-never.15.pro_tip": "Consejo: Have con you/they/we.",
  "exercise.present-perfect-ever-never.16.prompt": "Ordena las palabras para formar la pregunta correcta:",
  "exercise.present-perfect-ever-never.16.explanation": "\"Has he ever broken his arm?\"",
  "exercise.present-perfect-ever-never.16.pro_tip": "Consejo: Has + sujeto + ever + participio + objeto?",
  "exercise.present-perfect-ever-never.17.prompt": "Completa la pregunta con el participio pasado:",
  "exercise.present-perfect-ever-never.17.explanation": "\"driven\" es el participio pasado de drive (drive - drove - driven).",
  "exercise.present-perfect-ever-never.17.pro_tip": "Consejo: drive → drove → driven.",
  "exercise.present-perfect-ever-never.18.prompt": "Elige el formato de pregunta correcto:",
  "exercise.present-perfect-ever-never.18.explanation": "\"Have you ever visited Australia?\" es la forma estándar para experiencias de vida.",
  "exercise.present-perfect-ever-never.18.pro_tip": "Consejo: \"ever\" significa en algún momento de tu vida.",
  "exercise.present-perfect-ever-never.19.prompt": "Elige el diálogo gramaticalmente correcto:",
  "exercise.present-perfect-ever-never.19.explanation": "A: \"Has your sister ever lived abroad?\" B: \"No, she has never lived abroad.\"",
  "exercise.present-perfect-ever-never.19.pro_tip": "Consejo: Has para sister; has never para respuesta negativa.",
  "exercise.present-perfect-ever-never.20.prompt": "Completa la pregunta con el participio de \"meet\":",
  "exercise.present-perfect-ever-never.20.explanation": "\"met\" es el participio de meet (meet - met - met).",
  "exercise.present-perfect-ever-never.20.pro_tip": "Consejo: meet → met → met.",
  "exercise.present-perfect-ever-never.21.prompt": "Empareja cada pregunta con su respuesta natural:",
  "exercise.present-perfect-ever-never.21.explanation": "Empareja cada pregunta con su respuesta adecuada.",
  "exercise.present-perfect-ever-never.21.pro_tip": "Consejo: fíjate en la concordancia del sujeto y los auxiliares.",
  "exercise.present-perfect-ever-never.22.prompt": "Ordena las palabras para formar la pregunta sobre acampar:",
  "exercise.present-perfect-ever-never.22.explanation": "\"Have you ever slept in a tent?\"",
  "exercise.present-perfect-ever-never.22.pro_tip": "Consejo: sleep → slept → slept.",
  "exercise.present-perfect-ever-never.23.prompt": "Completa la respuesta negativa con el participio \"swum\":",
  "exercise.present-perfect-ever-never.23.explanation": "\"No, he has never swum in the ocean.\"",
  "exercise.present-perfect-ever-never.23.pro_tip": "Consejo: swim → swam → swum.",
  "exercise.present-perfect-ever-never.24.prompt": "Elige la respuesta correcta con continuación en pasado:",
  "exercise.present-perfect-ever-never.24.explanation": "\"Yes, I have. I baked some sourdough last weekend.\"",
  "exercise.present-perfect-ever-never.24.pro_tip": "Consejo: Yes, I have + detalle en pasado simple.",
};

const top1000IdiomsEsExtras: Record<string, string> = {
  "lesson.top-1000-idioms.title": "Los 1000 modismos más usados",
  "lesson.top-1000-idioms.description": "40 preguntas para completar con los modismos más comunes.",
  "lesson.top-1000-idioms.intro": "Los **modismos** son frases fijas cuyo significado no se deduce de las palabras. Estos 40 son los más comunes.",
  "exercise.top-1000-idioms.1.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.1.explanation": "\"Piece of cake\" significa que algo es muy fácil de hacer («pan comido»).",
  "exercise.top-1000-idioms.1.pro_tip": "Consejo: los modismos del cuerpo (cold feet, under the weather, keep your chin up) son comunes en la conversación diaria.",
  "exercise.top-1000-idioms.2.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.2.explanation": "\"Get cold feet\" significa ponerse nervioso o dudar justo antes de hacer algo importante.",
  "exercise.top-1000-idioms.2.pro_tip": "Consejo: los modismos del cuerpo (cold feet, under the weather, keep your chin up) son comunes en la conversación diaria.",
  "exercise.top-1000-idioms.3.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.3.explanation": "\"Keep his chin up\" significa mantener el ánimo y ser positivo en un momento difícil.",
  "exercise.top-1000-idioms.3.pro_tip": "Consejo: los modismos del cuerpo (cold feet, under the weather, keep your chin up) son comunes en la conversación diaria.",
  "exercise.top-1000-idioms.4.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.4.explanation": "\"Pull yourself together\" significa calmarse y recuperar el control de las emociones.",
  "exercise.top-1000-idioms.4.pro_tip": "Consejo: los modismos del cuerpo (cold feet, under the weather, keep your chin up) son comunes en la conversación diaria.",
  "exercise.top-1000-idioms.5.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.5.explanation": "\"Costs an arm and a leg\" significa que algo es muy caro («cuesta un ojo de la cara»).",
  "exercise.top-1000-idioms.5.pro_tip": "Consejo: los modismos del cuerpo (cold feet, under the weather, keep your chin up) son comunes en la conversación diaria.",
  "exercise.top-1000-idioms.6.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.6.explanation": "\"Pulling your leg\" significa tomarle el pelo a alguien o bromear amistosamente.",
  "exercise.top-1000-idioms.6.pro_tip": "Consejo: los modismos del cuerpo (cold feet, under the weather, keep your chin up) son comunes en la conversación diaria.",
  "exercise.top-1000-idioms.7.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.7.explanation": "\"Has a chip on his shoulder\" significa guardar rencor o resentimiento por algo del pasado.",
  "exercise.top-1000-idioms.7.pro_tip": "Consejo: los modismos del cuerpo (cold feet, under the weather, keep your chin up) son comunes en la conversación diaria.",
  "exercise.top-1000-idioms.8.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.8.explanation": "\"Head in the clouds\" significa estar distraído o soñando despierto («en las nubes»).",
  "exercise.top-1000-idioms.8.pro_tip": "Consejo: los modismos del cuerpo (cold feet, under the weather, keep your chin up) son comunes en la conversación diaria.",
  "exercise.top-1000-idioms.9.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.9.explanation": "\"Bite the bullet\" significa afrontar una situación difícil o desagradable con valentía.",
  "exercise.top-1000-idioms.9.pro_tip": "Consejo: los modismos del cuerpo (cold feet, under the weather, keep your chin up) son comunes en la conversación diaria.",
  "exercise.top-1000-idioms.10.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.10.explanation": "\"Break a leg!\" es una expresión usada para desear «¡mucha suerte!» antes de salir a escena.",
  "exercise.top-1000-idioms.10.pro_tip": "Consejo: los modismos del cuerpo (cold feet, under the weather, keep your chin up) son comunes en la conversación diaria.",
  "exercise.top-1000-idioms.11.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.11.explanation": "\"Hit the books\" significa ponerse a estudiar intensamente, sobre todo para exámenes.",
  "exercise.top-1000-idioms.11.pro_tip": "Consejo: los modismos de negocios (ballpark figure, back to the drawing board, on the same page) son esenciales en reuniones.",
  "exercise.top-1000-idioms.12.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.12.explanation": "\"Back to the drawing board\" significa volver a empezar desde cero porque el plan anterior falló.",
  "exercise.top-1000-idioms.12.pro_tip": "Consejo: los modismos de negocios (ballpark figure, back to the drawing board, on the same page) son esenciales en reuniones.",
  "exercise.top-1000-idioms.13.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.13.explanation": "\"Ballpark figure\" significa una cifra aproximada o estimación general, no exacta.",
  "exercise.top-1000-idioms.13.pro_tip": "Consejo: los modismos de negocios (ballpark figure, back to the drawing board, on the same page) son esenciales en reuniones.",
  "exercise.top-1000-idioms.14.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.14.explanation": "\"The ball is in your court\" significa que ahora te toca a ti actuar o decidir («la pelota está en tu tejado»).",
  "exercise.top-1000-idioms.14.pro_tip": "Consejo: los modismos de negocios (ballpark figure, back to the drawing board, on the same page) son esenciales en reuniones.",
  "exercise.top-1000-idioms.15.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.15.explanation": "\"Cut to the chase\" significa ir directo al grano sin perder tiempo en detalles.",
  "exercise.top-1000-idioms.15.pro_tip": "Consejo: los modismos de negocios (ballpark figure, back to the drawing board, on the same page) son esenciales en reuniones.",
  "exercise.top-1000-idioms.16.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.16.explanation": "\"Beating around the bush\" significa andarse con rodeos y evitar el tema principal.",
  "exercise.top-1000-idioms.16.pro_tip": "Consejo: los modismos de negocios (ballpark figure, back to the drawing board, on the same page) son esenciales en reuniones.",
  "exercise.top-1000-idioms.17.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.17.explanation": "\"Call it a day\" significa dar por terminado el trabajo del día.",
  "exercise.top-1000-idioms.17.pro_tip": "Consejo: los modismos de negocios (ballpark figure, back to the drawing board, on the same page) son esenciales en reuniones.",
  "exercise.top-1000-idioms.18.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.18.explanation": "\"On the same page\" significa estar de acuerdo y tener el mismo entendimiento («en sintonía»).",
  "exercise.top-1000-idioms.18.pro_tip": "Consejo: los modismos de negocios (ballpark figure, back to the drawing board, on the same page) son esenciales en reuniones.",
  "exercise.top-1000-idioms.19.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.19.explanation": "\"Got out of hand\" significa salirse de control o volverse caótico.",
  "exercise.top-1000-idioms.19.pro_tip": "Consejo: los modismos de negocios (ballpark figure, back to the drawing board, on the same page) son esenciales en reuniones.",
  "exercise.top-1000-idioms.20.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.20.explanation": "\"Devil's advocate\" («abogado del diablo») significa defender la postura opuesta para poner a prueba una idea.",
  "exercise.top-1000-idioms.20.pro_tip": "Consejo: los modismos de negocios (ballpark figure, back to the drawing board, on the same page) son esenciales en reuniones.",
  "exercise.top-1000-idioms.21.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.21.explanation": "\"Once in a blue moon\" significa muy rara vez o casi nunca.",
  "exercise.top-1000-idioms.21.pro_tip": "Consejo: once in a blue moon, kill two birds with one stone, miss the boat tratan de tiempo u oportunidad.",
  "exercise.top-1000-idioms.22.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.22.explanation": "\"In the nick of time\" significa justo a tiempo, en el último instante antes de que fuera tarde.",
  "exercise.top-1000-idioms.22.pro_tip": "Consejo: once in a blue moon, kill two birds with one stone, miss the boat tratan de tiempo u oportunidad.",
  "exercise.top-1000-idioms.23.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.23.explanation": "\"Around the clock\" significa las veinticuatro horas del día, de manera continua.",
  "exercise.top-1000-idioms.23.pro_tip": "Consejo: once in a blue moon, kill two birds with one stone, miss the boat tratan de tiempo u oportunidad.",
  "exercise.top-1000-idioms.24.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.24.explanation": "\"On the spur of the moment\" significa de forma espontánea o impulsiva, sin planearlo.",
  "exercise.top-1000-idioms.24.pro_tip": "Consejo: once in a blue moon, kill two birds with one stone, miss the boat tratan de tiempo u oportunidad.",
  "exercise.top-1000-idioms.25.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.25.explanation": "\"At the drop of a hat\" significa de inmediato y sin dudarlo un instante.",
  "exercise.top-1000-idioms.25.pro_tip": "Consejo: once in a blue moon, kill two birds with one stone, miss the boat tratan de tiempo u oportunidad.",
  "exercise.top-1000-idioms.26.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.26.explanation": "\"Behind the times\" significa anticuado o desactualizado.",
  "exercise.top-1000-idioms.26.pro_tip": "Consejo: once in a blue moon, kill two birds with one stone, miss the boat tratan de tiempo u oportunidad.",
  "exercise.top-1000-idioms.27.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.27.explanation": "\"For the time being\" significa por ahora o de manera temporal.",
  "exercise.top-1000-idioms.27.pro_tip": "Consejo: once in a blue moon, kill two birds with one stone, miss the boat tratan de tiempo u oportunidad.",
  "exercise.top-1000-idioms.28.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.28.explanation": "\"In the long run\" significa a largo plazo o con el paso del tiempo.",
  "exercise.top-1000-idioms.28.pro_tip": "Consejo: once in a blue moon, kill two birds with one stone, miss the boat tratan de tiempo u oportunidad.",
  "exercise.top-1000-idioms.29.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.29.explanation": "\"At the eleventh hour\" significa a última hora, justo antes de que venza el plazo.",
  "exercise.top-1000-idioms.29.pro_tip": "Consejo: once in a blue moon, kill two birds with one stone, miss the boat tratan de tiempo u oportunidad.",
  "exercise.top-1000-idioms.30.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.30.explanation": "\"Down to the wire\" significa hasta el último segundo, con un resultado incierto hasta el final.",
  "exercise.top-1000-idioms.30.pro_tip": "Consejo: once in a blue moon, kill two birds with one stone, miss the boat tratan de tiempo u oportunidad.",
  "exercise.top-1000-idioms.31.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.31.explanation": "\"Under the weather\" significa sentirse un poco enfermo o indispuesto.",
  "exercise.top-1000-idioms.31.pro_tip": "Consejo: on cloud nine, get out of hand, speak of the devil son comunes en la conversación informal sobre personas y sentimientos.",
  "exercise.top-1000-idioms.32.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.32.explanation": "\"On cloud nine\" significa estar sumamente feliz («en las nubes de felicidad»).",
  "exercise.top-1000-idioms.32.pro_tip": "Consejo: on cloud nine, get out of hand, speak of the devil son comunes en la conversación informal sobre personas y sentimientos.",
  "exercise.top-1000-idioms.33.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.33.explanation": "\"Spill the beans\" significa revelar un secreto («irse de la lengua»).",
  "exercise.top-1000-idioms.33.pro_tip": "Consejo: on cloud nine, get out of hand, speak of the devil son comunes en la conversación informal sobre personas y sentimientos.",
  "exercise.top-1000-idioms.34.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.34.explanation": "\"Let the cat out of the bag\" significa revelar un secreto por accidente.",
  "exercise.top-1000-idioms.34.pro_tip": "Consejo: on cloud nine, get out of hand, speak of the devil son comunes en la conversación informal sobre personas y sentimientos.",
  "exercise.top-1000-idioms.35.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.35.explanation": "\"In hot water\" significa estar en problemas o metido en un lío.",
  "exercise.top-1000-idioms.35.pro_tip": "Consejo: on cloud nine, get out of hand, speak of the devil son comunes en la conversación informal sobre personas y sentimientos.",
  "exercise.top-1000-idioms.36.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.36.explanation": "\"See eye to eye\" significa estar de acuerdo o coincidir en una opinión.",
  "exercise.top-1000-idioms.36.pro_tip": "Consejo: on cloud nine, get out of hand, speak of the devil son comunes en la conversación informal sobre personas y sentimientos.",
  "exercise.top-1000-idioms.37.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.37.explanation": "\"Speak of the devil\" («hablando del rey de Roma») se dice cuando aparece la persona de la que hablabas.",
  "exercise.top-1000-idioms.37.pro_tip": "Consejo: on cloud nine, get out of hand, speak of the devil son comunes en la conversación informal sobre personas y sentimientos.",
  "exercise.top-1000-idioms.38.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.38.explanation": "\"Rain on your parade\" significa aguar la fiesta o estropear el buen momento de alguien.",
  "exercise.top-1000-idioms.38.pro_tip": "Consejo: on cloud nine, get out of hand, speak of the devil son comunes en la conversación informal sobre personas y sentimientos.",
  "exercise.top-1000-idioms.39.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.39.explanation": "\"The best of both worlds\" significa disfrutar de las ventajas de dos situaciones distintas a la vez.",
  "exercise.top-1000-idioms.39.pro_tip": "Consejo: on cloud nine, get out of hand, speak of the devil son comunes en la conversación informal sobre personas y sentimientos.",
  "exercise.top-1000-idioms.40.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-idioms.40.explanation": "\"Miss the boat\" significa perder una oportunidad por actuar demasiado tarde («perder el tren»).",
  "exercise.top-1000-idioms.40.pro_tip": "Consejo: on cloud nine, get out of hand, speak of the devil son comunes en la conversación informal sobre personas y sentimientos.",
};

const top1000GerundsEsExtras: Record<string, string> = {
  "lesson.top-1000-gerunds.title": "Los 1000 gerundios más usados",
  "lesson.top-1000-gerunds.description": "40 preguntas sobre verbos seguidos de gerundio o infinitivo.",
  "lesson.top-1000-gerunds.intro": "Muchos verbos comunes van seguidos de un **gerundio** (verbo+ing) en vez de infinitivo. Algunos cambian de significado según la forma.",
  "exercise.top-1000-gerunds.1.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.1.explanation": "Después del verbo \"enjoy\", siempre usamos gerundio (-ing): \"enjoy listening\" (nunca \"enjoy to listen\").",
  "exercise.top-1000-gerunds.1.pro_tip": "Consejo: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up van seguidos de gerundio.",
  "exercise.top-1000-gerunds.2.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.2.explanation": "El verbo \"avoid\" siempre va seguido de gerundio (-ing): \"avoids eating\".",
  "exercise.top-1000-gerunds.2.pro_tip": "Consejo: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up van seguidos de gerundio.",
  "exercise.top-1000-gerunds.3.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.3.explanation": "El verbo \"finish\" lleva gerundio (-ing) como complemento: \"finished writing\".",
  "exercise.top-1000-gerunds.3.pro_tip": "Consejo: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up van seguidos de gerundio.",
  "exercise.top-1000-gerunds.4.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.4.explanation": "Después de \"mind\" (\"Would you mind...?\"), siempre se usa la forma en -ing: \"mind closing\".",
  "exercise.top-1000-gerunds.4.pro_tip": "Consejo: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up van seguidos de gerundio.",
  "exercise.top-1000-gerunds.5.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.5.explanation": "\"Keep\" con el sentido de «seguir haciendo algo» va seguido de gerundio (-ing): \"keeps making\".",
  "exercise.top-1000-gerunds.5.pro_tip": "Consejo: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up van seguidos de gerundio.",
  "exercise.top-1000-gerunds.6.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.6.explanation": "\"Suggest\" va seguido directamente de gerundio (-ing): \"suggested taking\" (no \"suggested to take\").",
  "exercise.top-1000-gerunds.6.pro_tip": "Consejo: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up van seguidos de gerundio.",
  "exercise.top-1000-gerunds.7.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.7.explanation": "El verbo \"risk\" siempre va seguido de gerundio (-ing): \"risk losing\".",
  "exercise.top-1000-gerunds.7.pro_tip": "Consejo: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up van seguidos de gerundio.",
  "exercise.top-1000-gerunds.8.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.8.explanation": "\"Postpone\" lleva un gerundio (-ing) como objeto: \"postponed having\".",
  "exercise.top-1000-gerunds.8.pro_tip": "Consejo: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up van seguidos de gerundio.",
  "exercise.top-1000-gerunds.9.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.9.explanation": "\"Admit\" va seguido de gerundio (-ing): \"admitted giving\".",
  "exercise.top-1000-gerunds.9.pro_tip": "Consejo: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up van seguidos de gerundio.",
  "exercise.top-1000-gerunds.10.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.10.explanation": "\"Quit\" con el significado de dejar un hábito lleva gerundio (-ing): \"quit drinking\".",
  "exercise.top-1000-gerunds.10.pro_tip": "Consejo: enjoy, avoid, mind, finish, keep, deny, suggest, recommend, practice, miss, mention, admit, risk, postpone, quit, give up van seguidos de gerundio.",
  "exercise.top-1000-gerunds.11.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.11.explanation": "El verbo \"want\" va seguido de infinitivo con \"to\": \"want to buy\".",
  "exercise.top-1000-gerunds.11.pro_tip": "Consejo: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose van seguidos de infinitivo con \"to\".",
  "exercise.top-1000-gerunds.12.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.12.explanation": "Después de \"decide\", se usa infinitivo con \"to\": \"decided to call\".",
  "exercise.top-1000-gerunds.12.pro_tip": "Consejo: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose van seguidos de infinitivo con \"to\".",
  "exercise.top-1000-gerunds.13.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.13.explanation": "\"Promise\" va seguido de infinitivo con \"to\": \"promised to arrive\".",
  "exercise.top-1000-gerunds.13.pro_tip": "Consejo: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose van seguidos de infinitivo con \"to\".",
  "exercise.top-1000-gerunds.14.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.14.explanation": "Aquí \"need\" expresa una necesidad del sujeto y lleva infinitivo con \"to\": \"need to find\".",
  "exercise.top-1000-gerunds.14.pro_tip": "Consejo: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose van seguidos de infinitivo con \"to\".",
  "exercise.top-1000-gerunds.15.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.15.explanation": "\"Hope\" siempre va seguido de infinitivo con \"to\": \"hope to play\".",
  "exercise.top-1000-gerunds.15.pro_tip": "Consejo: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose van seguidos de infinitivo con \"to\".",
  "exercise.top-1000-gerunds.16.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.16.explanation": "\"Refuse\" lleva infinitivo con \"to\": \"refused to take\".",
  "exercise.top-1000-gerunds.16.pro_tip": "Consejo: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose van seguidos de infinitivo con \"to\".",
  "exercise.top-1000-gerunds.17.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.17.explanation": "\"Agree\" va seguido de infinitivo con \"to\": \"agreed to follow\".",
  "exercise.top-1000-gerunds.17.pro_tip": "Consejo: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose van seguidos de infinitivo con \"to\".",
  "exercise.top-1000-gerunds.18.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.18.explanation": "\"Expect\" lleva infinitivo con \"to\": \"expect to receive\".",
  "exercise.top-1000-gerunds.18.pro_tip": "Consejo: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose van seguidos de infinitivo con \"to\".",
  "exercise.top-1000-gerunds.19.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.19.explanation": "\"Offer\" va seguido de infinitivo con \"to\": \"offered to drive\".",
  "exercise.top-1000-gerunds.19.pro_tip": "Consejo: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose van seguidos de infinitivo con \"to\".",
  "exercise.top-1000-gerunds.20.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.20.explanation": "\"Plan\" lleva infinitivo con \"to\" para expresar planes futuros: \"plan to build\".",
  "exercise.top-1000-gerunds.20.pro_tip": "Consejo: want, need, decide, hope, plan, expect, offer, promise, refuse, learn, agree, choose van seguidos de infinitivo con \"to\".",
  "exercise.top-1000-gerunds.21.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.21.explanation": "\"Remember + -ing\" (\"remember locking\") se refiere al recuerdo de una acción que ya hiciste en el pasado.",
  "exercise.top-1000-gerunds.21.pro_tip": "Consejo: remember, forget, stop, try, regret, go on, mean son comunes. \"Stop smoking\" = dejar de fumar. \"Stop to smoke\" = paró para fumar.",
  "exercise.top-1000-gerunds.22.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.22.explanation": "\"Stop + -ing\" (\"stopped drinking\") significa dejar un hábito o actividad por completo.",
  "exercise.top-1000-gerunds.22.pro_tip": "Consejo: remember, forget, stop, try, regret, go on, mean son comunes. \"Stop smoking\" = dejar de fumar. \"Stop to smoke\" = paró para fumar.",
  "exercise.top-1000-gerunds.23.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.23.explanation": "\"Try + -ing\" (\"tried opening\") significa probar un método o experimento para ver si funciona.",
  "exercise.top-1000-gerunds.23.pro_tip": "Consejo: remember, forget, stop, try, regret, go on, mean son comunes. \"Stop smoking\" = dejar de fumar. \"Stop to smoke\" = paró para fumar.",
  "exercise.top-1000-gerunds.24.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.24.explanation": "\"Forget + -ing\" (\"forget seeing\") se refiere al recuerdo de una experiencia pasada memorable.",
  "exercise.top-1000-gerunds.24.pro_tip": "Consejo: remember, forget, stop, try, regret, go on, mean son comunes. \"Stop smoking\" = dejar de fumar. \"Stop to smoke\" = paró para fumar.",
  "exercise.top-1000-gerunds.25.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.25.explanation": "\"Regret to inform\" usa infinitivo al anunciar formalmente una mala noticia ahora (mientras que \"regret + -ing\" mira hacia el pasado).",
  "exercise.top-1000-gerunds.25.pro_tip": "Consejo: remember, forget, stop, try, regret, go on, mean son comunes. \"Stop smoking\" = dejar de fumar. \"Stop to smoke\" = paró para fumar.",
  "exercise.top-1000-gerunds.26.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.26.explanation": "\"Go on + to-infinitive\" (\"went on to win\") significa pasar a hacer o lograr algo nuevo después.",
  "exercise.top-1000-gerunds.26.pro_tip": "Consejo: remember, forget, stop, try, regret, go on, mean son comunes. \"Stop smoking\" = dejar de fumar. \"Stop to smoke\" = paró para fumar.",
  "exercise.top-1000-gerunds.27.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.27.explanation": "\"Mean + -ing\" (\"meant leaving\") significa implicar o traer como consecuencia necesaria («implicaba dejar»).",
  "exercise.top-1000-gerunds.27.pro_tip": "Consejo: remember, forget, stop, try, regret, go on, mean son comunes. \"Stop smoking\" = dejar de fumar. \"Stop to smoke\" = paró para fumar.",
  "exercise.top-1000-gerunds.28.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.28.explanation": "\"Stop + to-infinitive\" (\"stopped to talk\") significa detenerse con el propósito de hacer otra acción («paró para hablar»).",
  "exercise.top-1000-gerunds.28.pro_tip": "Consejo: remember, forget, stop, try, regret, go on, mean son comunes. \"Stop smoking\" = dejar de fumar. \"Stop to smoke\" = paró para fumar.",
  "exercise.top-1000-gerunds.29.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.29.explanation": "\"Regret + -ing\" (\"regret taking\") se refiere a arrepentirse (o no) de algo que ya se hizo en el pasado.",
  "exercise.top-1000-gerunds.29.pro_tip": "Consejo: remember, forget, stop, try, regret, go on, mean son comunes. \"Stop smoking\" = dejar de fumar. \"Stop to smoke\" = paró para fumar.",
  "exercise.top-1000-gerunds.30.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.30.explanation": "\"Go on + to-infinitive\" (\"went on to explain\") significa pasar a la siguiente etapa o tema («pasó a explicar»).",
  "exercise.top-1000-gerunds.30.pro_tip": "Consejo: remember, forget, stop, try, regret, go on, mean son comunes. \"Stop smoking\" = dejar de fumar. \"Stop to smoke\" = paró para fumar.",
  "exercise.top-1000-gerunds.31.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.31.explanation": "En \"be used to\" («estar acostumbrado a»), \"to\" es preposición, por lo que va seguida de gerundio (-ing): \"used to waking\".",
  "exercise.top-1000-gerunds.31.pro_tip": "Consejo: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to van seguidos de gerundio.",
  "exercise.top-1000-gerunds.32.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.32.explanation": "La expresión \"be worth\" («valer la pena») siempre va seguida de gerundio (-ing): \"worth reading\".",
  "exercise.top-1000-gerunds.32.pro_tip": "Consejo: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to van seguidos de gerundio.",
  "exercise.top-1000-gerunds.33.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.33.explanation": "En \"look forward to\", \"to\" es una preposición, por lo que exige un gerundio (-ing): \"look forward to hearing\".",
  "exercise.top-1000-gerunds.33.pro_tip": "Consejo: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to van seguidos de gerundio.",
  "exercise.top-1000-gerunds.34.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.34.explanation": "El adjetivo \"busy\" va seguido directamente de un gerundio (-ing): \"busy preparing\".",
  "exercise.top-1000-gerunds.34.pro_tip": "Consejo: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to van seguidos de gerundio.",
  "exercise.top-1000-gerunds.35.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.35.explanation": "\"Spend + tiempo + -ing\" es una estructura fija: \"spent the whole afternoon walking\".",
  "exercise.top-1000-gerunds.35.pro_tip": "Consejo: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to van seguidos de gerundio.",
  "exercise.top-1000-gerunds.36.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.36.explanation": "\"Have trouble / difficulty\" va seguido de gerundio (-ing): \"have any trouble opening\".",
  "exercise.top-1000-gerunds.36.pro_tip": "Consejo: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to van seguidos de gerundio.",
  "exercise.top-1000-gerunds.37.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.37.explanation": "\"There is no point in\" termina con la preposición \"in\", que exige gerundio (-ing): \"in worrying\".",
  "exercise.top-1000-gerunds.37.pro_tip": "Consejo: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to van seguidos de gerundio.",
  "exercise.top-1000-gerunds.38.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.38.explanation": "La expresión fija \"It is no use\" («de nada sirve») siempre va seguida de gerundio (-ing): \"no use crying\".",
  "exercise.top-1000-gerunds.38.pro_tip": "Consejo: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to van seguidos de gerundio.",
  "exercise.top-1000-gerunds.39.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.39.explanation": "En \"be accustomed to\" («estar acostumbrado a»), \"to\" es preposición y lleva gerundio (-ing): \"accustomed to eating\".",
  "exercise.top-1000-gerunds.39.pro_tip": "Consejo: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to van seguidos de gerundio.",
  "exercise.top-1000-gerunds.40.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.top-1000-gerunds.40.explanation": "\"Have fun / a good time\" va seguido de gerundio (-ing): \"had great fun playing\".",
  "exercise.top-1000-gerunds.40.pro_tip": "Consejo: be used to, be worth, look forward to, have fun, have trouble, no point in, it is no use, be busy, spend time, be accustomed to van seguidos de gerundio.",
};

const whWordsEsExtras: Record<string, string> = {
  "wh.wh-words-why.title": "Preguntas con Why",
  "wh.wh-words-why.description": "20 preguntas usando \"why\" para preguntar la causa o razón.",
  "wh.wh-words-why.intro": "**Why** se usa para preguntar por una causa o razón. La respuesta esperada suele empezar con \"because\".",
  "exercise.wh-words.1.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.1.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («Because I lost my keys.») explica el motivo.",
  "exercise.wh-words.1.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.2.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.2.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («I was busy at work.») explica el motivo.",
  "exercise.wh-words.2.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.3.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.3.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («Because of how light scatters in the atmosphere.») explica el motivo.",
  "exercise.wh-words.3.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.4.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.4.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («Because the joke was so silly.») explica el motivo.",
  "exercise.wh-words.4.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.5.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.5.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («To stay healthy.») explica el motivo.",
  "exercise.wh-words.5.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.6.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.6.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («He got a better offer.») explica el motivo.",
  "exercise.wh-words.6.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.7.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.7.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («I stayed up late studying.») explica el motivo.",
  "exercise.wh-words.7.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.8.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.8.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («There was an accident.») explica el motivo.",
  "exercise.wh-words.8.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.9.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.9.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («Because it’s cold outside.») explica el motivo.",
  "exercise.wh-words.9.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.10.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.10.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («She didn’t study enough.») explica el motivo.",
  "exercise.wh-words.10.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.11.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.11.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («The owner is in a meeting.») explica el motivo.",
  "exercise.wh-words.11.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.12.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.12.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («I got a new job there.») explica el motivo.",
  "exercise.wh-words.12.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.13.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.13.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («It lost money for years.») explica el motivo.",
  "exercise.wh-words.13.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.14.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.14.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («I want to travel more.») explica el motivo.",
  "exercise.wh-words.14.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.15.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.15.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («He has trouble waking up early.») explica el motivo.",
  "exercise.wh-words.15.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.16.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.16.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («Maybe she had a bad day.») explica el motivo.",
  "exercise.wh-words.16.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.17.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.17.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («We missed the RSVP date.») explica el motivo.",
  "exercise.wh-words.17.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.18.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.18.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («There’s construction on Main Street.») explica el motivo.",
  "exercise.wh-words.18.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.19.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.19.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («I’m a vegetarian.») explica el motivo.",
  "exercise.wh-words.19.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "exercise.wh-words.20.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.20.explanation": "Se usa \"why\" para preguntar por la razón o causa; aquí la respuesta («The server ran out of memory.») explica el motivo.",
  "exercise.wh-words.20.pro_tip": "Consejo: si la respuesta empieza con \"porque...\", la pregunta empieza con \"why\".",
  "wh.wh-words-how.title": "Preguntas con How",
  "wh.wh-words-how.description": "20 preguntas usando \"how\" para preguntar la manera, método o estado.",
  "wh.wh-words-how.intro": "**How** se usa para preguntar la manera, método o estado. La respuesta describe cómo se realiza una acción.",
  "exercise.wh-words.21.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.21.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («I take the bus.») indica cómo.",
  "exercise.wh-words.21.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.22.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.22.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («You tap the button.») indica cómo.",
  "exercise.wh-words.22.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.23.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.23.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («I restarted the computer.») indica cómo.",
  "exercise.wh-words.23.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.24.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.24.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («I’m looking for a gift.») indica cómo.",
  "exercise.wh-words.24.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.25.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.25.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («Slowly, please.») indica cómo.",
  "exercise.wh-words.25.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.26.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.26.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («My mom taught me.») indica cómo.",
  "exercise.wh-words.26.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.27.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.27.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («In a pot on the stove.») indica cómo.",
  "exercise.wh-words.27.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.28.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.28.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («With a spoon.») indica cómo.",
  "exercise.wh-words.28.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.29.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.29.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («Much better, thanks.») indica cómo.",
  "exercise.wh-words.29.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.30.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.30.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («By text and email.») indica cómo.",
  "exercise.wh-words.30.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.31.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.31.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («Double-click the icon.») indica cómo.",
  "exercise.wh-words.31.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.32.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.32.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («I read it in the book.») indica cómo.",
  "exercise.wh-words.32.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.33.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.33.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («They were surprised.») indica cómo.",
  "exercise.wh-words.33.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.34.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.34.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («Use the app or go to the bank.») indica cómo.",
  "exercise.wh-words.34.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.35.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.35.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («It has five stars.») indica cómo.",
  "exercise.wh-words.35.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.36.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.36.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («He grilled it.») indica cómo.",
  "exercise.wh-words.36.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.37.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.37.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («M-A-R-Y.») indica cómo.",
  "exercise.wh-words.37.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.38.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.38.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («Press the red button.») indica cómo.",
  "exercise.wh-words.38.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.39.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.39.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («With cold water and soap.») indica cómo.",
  "exercise.wh-words.39.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "exercise.wh-words.40.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.40.explanation": "Se usa \"how\" para preguntar por la manera, el método o el estado; aquí la respuesta («From a colleague.») indica cómo.",
  "exercise.wh-words.40.pro_tip": "Consejo: \"how\" espera una forma o herramienta, p. ej. \"en autobús\", \"con una cuchara\".",
  "wh.wh-words-how-long.title": "Preguntas con How long",
  "wh.wh-words-how-long.description": "20 preguntas usando \"how long\" para preguntar la duración del tiempo.",
  "wh.wh-words-how-long.intro": "**How long** se usa para preguntar la duración de un evento: minutos, horas, días, años.",
  "exercise.wh-words.41.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.41.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («For ten years.») indica el tiempo.",
  "exercise.wh-words.41.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.42.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.42.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («About two hours.») indica el tiempo.",
  "exercise.wh-words.42.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.43.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.43.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («Roughly forty-five minutes.») indica el tiempo.",
  "exercise.wh-words.43.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.44.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.44.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («Since eight o’clock.») indica el tiempo.",
  "exercise.wh-words.44.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.45.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.45.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («About seven hours.») indica el tiempo.",
  "exercise.wh-words.45.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.46.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.46.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («For 30 minutes.») indica el tiempo.",
  "exercise.wh-words.46.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.47.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.47.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («Two years from purchase.») indica el tiempo.",
  "exercise.wh-words.47.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.48.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.48.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («A few months.») indica el tiempo.",
  "exercise.wh-words.48.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.49.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.49.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («Since high school.») indica el tiempo.",
  "exercise.wh-words.49.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.50.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.50.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («A minimum of one week.») indica el tiempo.",
  "exercise.wh-words.50.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.51.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.51.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («Twenty-four hours.») indica el tiempo.",
  "exercise.wh-words.51.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.52.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.52.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («Almost five years.») indica el tiempo.",
  "exercise.wh-words.52.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.53.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.53.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («Twelve weeks in total.») indica el tiempo.",
  "exercise.wh-words.53.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.54.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.54.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («Just the weekend.») indica el tiempo.",
  "exercise.wh-words.54.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.55.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.55.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («Thirty minutes.») indica el tiempo.",
  "exercise.wh-words.55.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.56.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.56.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («About a week.») indica el tiempo.",
  "exercise.wh-words.56.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.57.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.57.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («Three more months.») indica el tiempo.",
  "exercise.wh-words.57.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.58.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.58.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («Two full days.») indica el tiempo.",
  "exercise.wh-words.58.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.59.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.59.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («At least an hour.») indica el tiempo.",
  "exercise.wh-words.59.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "exercise.wh-words.60.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.60.explanation": "Se usa \"how long\" para preguntar por la duración; aquí la respuesta («For six months.») indica el tiempo.",
  "exercise.wh-words.60.pro_tip": "Consejo: \"how long\" espera una duración (10 minutos, 3 años), no un número de cosas contables.",
  "wh.wh-words-how-many.title": "Preguntas con How many / How much",
  "wh.wh-words-how-many.description": "20 preguntas usando \"how many\" o \"how much\" para preguntar cantidades.",
  "wh.wh-words-how-many.intro": "**How many** se usa para sustantivos contables; **how much** para incontables o precios.",
  "exercise.wh-words.61.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.61.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «About twelve.».",
  "exercise.wh-words.61.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.62.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.62.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Around two million.».",
  "exercise.wh-words.62.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.63.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.63.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Three fluently.».",
  "exercise.wh-words.63.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.64.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.64.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Three or four.».",
  "exercise.wh-words.64.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.65.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.65.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Two.».",
  "exercise.wh-words.65.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.66.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.66.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Three.».",
  "exercise.wh-words.66.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.67.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.67.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Twenty-five.».",
  "exercise.wh-words.67.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.68.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.68.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «One brother and one sister.».",
  "exercise.wh-words.68.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.69.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.69.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «A dozen or so.».",
  "exercise.wh-words.69.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.70.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.70.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Twelve.».",
  "exercise.wh-words.70.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.71.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.71.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Maybe twenty.».",
  "exercise.wh-words.71.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.72.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.72.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Six for the table.».",
  "exercise.wh-words.72.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.73.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.73.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Fifty.».",
  "exercise.wh-words.73.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.74.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.74.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Seven.».",
  "exercise.wh-words.74.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.75.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.75.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Twice.».",
  "exercise.wh-words.75.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.76.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.76.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Eleven.».",
  "exercise.wh-words.76.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.77.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.77.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Seven.».",
  "exercise.wh-words.77.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.78.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.78.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Two.».",
  "exercise.wh-words.78.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.79.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.79.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «One cat and one dog.».",
  "exercise.wh-words.79.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "exercise.wh-words.80.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.80.explanation": "Se usa \"how many\" con sustantivos contables en plural para preguntar la cantidad; aquí la respuesta es «Around fifteen.».",
  "exercise.wh-words.80.pro_tip": "Consejo: \"how many\" + contable en plural; \"how much\" + incontable o dinero/precio.",
  "wh.wh-words-when.title": "Preguntas con When",
  "wh.wh-words-when.description": "20 preguntas usando \"when\" para preguntar el momento o fecha.",
  "wh.wh-words-when.intro": "**When** se usa para preguntar por el tiempo: fecha, año, momento del día o frecuencia.",
  "exercise.wh-words.81.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.81.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («At nine in the morning.») indica cuándo.",
  "exercise.wh-words.81.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.82.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.82.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («Last night around ten.») indica cuándo.",
  "exercise.wh-words.82.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.83.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.83.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («Tomorrow at 3 pm.») indica cuándo.",
  "exercise.wh-words.83.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.84.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.84.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («In July.») indica cuándo.",
  "exercise.wh-words.84.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.85.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.85.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («In 1995.») indica cuándo.",
  "exercise.wh-words.85.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.86.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.86.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («Every hour on the hour.») indica cuándo.",
  "exercise.wh-words.86.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.87.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.87.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («On the 14th of May.») indica cuándo.",
  "exercise.wh-words.87.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.88.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.88.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («Last weekend.») indica cuándo.",
  "exercise.wh-words.88.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.89.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.89.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («By Friday.») indica cuándo.",
  "exercise.wh-words.89.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.90.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.90.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («In September.») indica cuándo.",
  "exercise.wh-words.90.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.91.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.91.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («In an hour.») indica cuándo.",
  "exercise.wh-words.91.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.92.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.92.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («After meals.») indica cuándo.",
  "exercise.wh-words.92.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.93.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.93.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («This morning.») indica cuándo.",
  "exercise.wh-words.93.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.94.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.94.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («Every two years.») indica cuándo.",
  "exercise.wh-words.94.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.95.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.95.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («At 6:45.») indica cuándo.",
  "exercise.wh-words.95.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.96.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.96.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («Around noon.») indica cuándo.",
  "exercise.wh-words.96.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.97.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.97.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («In 1945.») indica cuándo.",
  "exercise.wh-words.97.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.98.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.98.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («In a couple of hours.») indica cuándo.",
  "exercise.wh-words.98.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.99.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.99.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («Spring or fall.») indica cuándo.",
  "exercise.wh-words.99.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "exercise.wh-words.100.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.100.explanation": "Se usa \"when\" para preguntar por el momento o fecha; aquí la respuesta («On Mondays.») indica cuándo.",
  "exercise.wh-words.100.pro_tip": "Consejo: \"when\" acepta una hora, una fecha o una frecuencia (cada lunes).",
  "wh.wh-words-where.title": "Preguntas con Where",
  "wh.wh-words-where.description": "20 preguntas usando \"where\" para preguntar por un lugar o dirección.",
  "wh.wh-words-where.intro": "**Where** se usa para preguntar por un lugar: una ciudad, habitación, dirección o ubicación.",
  "exercise.wh-words.101.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.101.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («In a small town near the coast.») indica dónde.",
  "exercise.wh-words.101.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.102.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.102.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («Two blocks away.») indica dónde.",
  "exercise.wh-words.102.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.103.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.103.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («On the kitchen counter.») indica dónde.",
  "exercise.wh-words.103.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.104.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.104.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («In conference room B.») indica dónde.",
  "exercise.wh-words.104.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.105.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.105.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («I’m from Brazil.») indica dónde.",
  "exercise.wh-words.105.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.106.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.106.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («In a small village.») indica dónde.",
  "exercise.wh-words.106.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.107.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.107.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («At the counter or online.») indica dónde.",
  "exercise.wh-words.107.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.108.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.108.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («Just around the corner.») indica dónde.",
  "exercise.wh-words.108.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.109.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.109.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («In the garage behind the building.») indica dónde.",
  "exercise.wh-words.109.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.110.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.110.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («In a safe at home.») indica dónde.",
  "exercise.wh-words.110.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.111.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.111.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («At the corner of 5th and Main.») indica dónde.",
  "exercise.wh-words.111.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.112.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.112.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («He’s in the backyard.») indica dónde.",
  "exercise.wh-words.112.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.113.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.113.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («They were on the table.») indica dónde.",
  "exercise.wh-words.113.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.114.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.114.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («Try the old town.») indica dónde.",
  "exercise.wh-words.114.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.115.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.115.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («Next to the bank.») indica dónde.",
  "exercise.wh-words.115.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.116.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.116.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («About ten minutes away.») indica dónde.",
  "exercise.wh-words.116.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.117.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.117.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («At the office.») indica dónde.",
  "exercise.wh-words.117.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.118.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.118.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («How about that new place on 5th?») indica dónde.",
  "exercise.wh-words.118.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.119.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.119.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («The lake up north.») indica dónde.",
  "exercise.wh-words.119.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "exercise.wh-words.120.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.120.explanation": "Se usa \"where\" para preguntar por el lugar o ubicación; aquí la respuesta («By the front door.») indica dónde.",
  "exercise.wh-words.120.pro_tip": "Consejo: \"where\" espera un lugar, habitación, ciudad o dirección.",
  "wh.wh-words-who.title": "Preguntas con Who",
  "wh.wh-words-who.description": "20 preguntas usando \"who\" para preguntar por una persona.",
  "wh.wh-words-who.intro": "**Who** se usa para preguntar por una persona: el sujeto, el objeto o el agente de una acción.",
  "exercise.wh-words.121.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.121.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («My uncle.») identifica a quién.",
  "exercise.wh-words.121.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.122.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.122.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («I don’t know the author.») identifica a quién.",
  "exercise.wh-words.122.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.123.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.123.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («A couple of friends.») identifica a quién.",
  "exercise.wh-words.123.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.124.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.124.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («The manager.») identifica a quién.",
  "exercise.wh-words.124.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.125.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.125.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («Our captain.») identifica a quién.",
  "exercise.wh-words.125.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.126.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.126.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («I love Adele.») identifica a quién.",
  "exercise.wh-words.126.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.127.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.127.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («A friend at work.») identifica a quién.",
  "exercise.wh-words.127.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.128.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.128.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («The new neighbor.») identifica a quién.",
  "exercise.wh-words.128.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.129.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.129.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («The marketing team.») identifica a quién.",
  "exercise.wh-words.129.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.130.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.130.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («I haven’t decided.») identifica a quién.",
  "exercise.wh-words.130.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.131.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.131.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («The cat, probably.») identifica a quién.",
  "exercise.wh-words.131.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.132.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.132.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («My sister.») identifica a quién.",
  "exercise.wh-words.132.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.133.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.133.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («Brazil did.») identifica a quién.",
  "exercise.wh-words.133.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.134.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.134.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («My parents.») identifica a quién.",
  "exercise.wh-words.134.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.135.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.135.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («Her name is Anna.») identifica a quién.",
  "exercise.wh-words.135.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.136.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.136.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («My colleagues.») identifica a quién.",
  "exercise.wh-words.136.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.137.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.137.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («A famous artist.») identifica a quién.",
  "exercise.wh-words.137.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.138.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.138.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («Our support team.») identifica a quién.",
  "exercise.wh-words.138.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.139.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.139.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («My brother.») identifica a quién.",
  "exercise.wh-words.139.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "exercise.wh-words.140.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.140.explanation": "Se usa \"who\" para preguntar por una persona; aquí la respuesta («My best friend.») identifica a quién.",
  "exercise.wh-words.140.pro_tip": "Consejo: \"who\" se refiere solo a personas, no a cosas.",
  "wh.wh-words-what.title": "Preguntas con What / What kind of",
  "wh.wh-words-what.description": "20 preguntas usando \"what\" o \"what kind of\" para preguntar cosas o clases.",
  "wh.wh-words-what.intro": "**What** se usa para preguntar por cosas, nombres, colores o datos. **What kind of** pregunta por el tipo o categoría.",
  "exercise.wh-words.141.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.141.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «My name is Maria.».",
  "exercise.wh-words.141.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.142.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.142.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «It’s three o’clock.».",
  "exercise.wh-words.142.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.143.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.143.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «It’s Friday.».",
  "exercise.wh-words.143.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.144.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.144.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «I love blue.».",
  "exercise.wh-words.144.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.145.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.145.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «Sunny and warm.».",
  "exercise.wh-words.145.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.146.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.146.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «I’m a teacher.».",
  "exercise.wh-words.146.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.147.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.147.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «555-123-4567.».",
  "exercise.wh-words.147.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.148.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.148.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «Paris.».",
  "exercise.wh-words.148.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.149.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.149.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «A sandwich.».",
  "exercise.wh-words.149.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.150.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.150.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «It’s the dishwasher.».",
  "exercise.wh-words.150.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.151.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.151.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «The price mainly.».",
  "exercise.wh-words.151.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.152.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.152.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «Medium.».",
  "exercise.wh-words.152.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.153.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.153.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «I have a problem.».",
  "exercise.wh-words.153.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.154.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.154.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «It means \"happy\".».",
  "exercise.wh-words.154.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.155.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.155.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «123 Main Street.».",
  "exercise.wh-words.155.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.156.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.156.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «I’m going to study abroad.».",
  "exercise.wh-words.156.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.157.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.157.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «English and Spanish.».",
  "exercise.wh-words.157.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.158.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.158.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «I lost my wallet.».",
  "exercise.wh-words.158.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.159.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.159.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «Reading and hiking.».",
  "exercise.wh-words.159.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
  "exercise.wh-words.160.prompt": "Completa la oración con la palabra o frase correcta.",
  "exercise.wh-words.160.explanation": "Se usa \"what\" para preguntar por una cosa o dato específico; aquí la respuesta es «Twenty dollars.».",
  "exercise.wh-words.160.pro_tip": "Consejo: \"what\" es la wh-word más general; sirve para casi todo lo que no sea persona, lugar, tiempo, modo o razón.",
};

const es: Record<string, string> = {
  ...becauseSoThatEsExtras,
  ...adverbsOfFrequencyEsExtras,
  ...timeExpressionsEsExtras,
  ...didAndWasEsExtras,
  ...simplePastEsExtras,
  ...presentPerfectEverNeverEsExtras,
  ...top1000IdiomsEsExtras,
  ...top1000GerundsEsExtras,
  ...whWordsEsExtras,
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
  ...realConditionalsEsExtras,
  ...comparativesEsExtras,
  ...compoundSentencesEsExtras,
  ...wordAndSentenceStressEsExtras,
  ...askingAndProvidingInfoEsExtras,
  ...superlativeStructuresEsExtras,
  ...comparativeStructuresEsExtras,
  ...politeIntonationEsExtras,
  ...complexSentencesEsExtras,
  ...jobCategoriesEsExtras,
  ...reducedRelativeClausesEsExtras,
  ...sentenceTypesEsExtras,
  ...willingnessAndUnwillingnessEsExtras,
  ...presentRealConditionalsEsExtras,
  ...contrastingTransitionsEsExtras,
  ...conditionalConjunctionsEsExtras,
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
