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

const enComplete: Record<string, string> = {
  ...en,
  ...becauseSoThatEnExtras,
  ...adverbsOfFrequencyEnExtras,
  ...timeExpressionsEnExtras,
  ...didAndWasEnExtras,
  ...simplePastEnExtras,
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
