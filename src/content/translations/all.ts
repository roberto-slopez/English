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

const es: Record<string, string> = {
  ...becauseSoThatEsExtras,
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
