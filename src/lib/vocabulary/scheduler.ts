import { createEmptyCard, fsrs, State, type Card, type Grade } from "ts-fsrs";
export type Direction = "recognition" | "production";
export interface Settings {
  newLimit: number;
  retention: number;
  production: boolean;
  rollover: number;
  timeZone: string;
  onboarded: boolean;
  legacyFirst: boolean;
  includeBasicWords?: boolean;
}
export const defaultSettings: Settings = {
  newLimit: 10,
  retention: 0.9,
  production: false,
  rollover: 4,
  timeZone: "UTC",
  onboarded: false,
  legacyFirst: false,
  includeBasicWords: false,
};
export interface StudyCard extends Card {
  id: string;
  wordId: string;
  direction: Direction;
  revision: number;
  suspended: boolean;
  buriedUntil: number;
  flagged: boolean;
  legacySeen?: boolean;
}
export interface Review {
  id: string;
  cardId: string;
  wordId: string;
  at: number;
  day: string;
  rating: Grade;
  before: StudyCard | null;
  after: StudyCard;
  siblingBefore: StudyCard | null;
  siblingId: string;
  undone: boolean;
  newCard: boolean;
  points: number;
  algorithm: string;
  retention: number;
  duration: number;
}
export const cardId = (wordId: string, direction: Direction) =>
  `${wordId}:${direction}`;
export function emptyCard(
  wordId: string,
  direction: Direction,
  now: Date,
): StudyCard {
  return {
    ...createEmptyCard(now),
    id: cardId(wordId, direction),
    wordId,
    direction,
    revision: 0,
    suspended: false,
    buriedUntil: 0,
    flagged: false,
  };
}
export function preview(
  card: StudyCard,
  now: Date,
  settings: Settings,
): Record<Grade, StudyCard> {
  const scheduler = fsrs({
    request_retention: settings.retention,
    enable_fuzz: false,
    learning_steps: ["1m", "10m"],
    relearning_steps: ["10m"],
  });
  const result = scheduler.repeat(card, now);
  return Object.fromEntries(
    ([1, 2, 3, 4] as Grade[]).map((r) => [
      r,
      { ...card, ...result[r].card, revision: card.revision + 1 },
    ]),
  ) as Record<Grade, StudyCard>;
}
export function studyDay(
  now: Date,
  settings: Pick<Settings, "rollover" | "timeZone">,
): string {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: settings.timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const value = (key: string) =>
    Number(parts.find((p) => p.type === key)!.value);
  const date = new Date(
    Date.UTC(value("year"), value("month") - 1, value("day")),
  );
  if (value("hour") < settings.rollover) date.setUTCDate(date.getUTCDate() - 1);
  return date.toISOString().slice(0, 10);
}
export function nextBoundary(now: Date, settings: Settings): number {
  const day = studyDay(now, settings);
  let lo = now.getTime(),
    hi = lo + 48 * 3600_000;
  while (hi - lo > 1) {
    const mid = Math.floor((lo + hi) / 2);
    if (studyDay(new Date(mid), settings) === day) lo = mid;
    else hi = mid;
  }
  return hi;
}
export interface QueueWord {
  id: string;
  rank: number;
  word: string;
  pos?: string;
}
const MEANINGFUL_CONNECTORS = new Set([
  "because",
  "while",
  "though",
  "whilst",
  "until",
  "whether",
  "although",
  "unless",
  "whereas",
  "till",
  "whenever",
  "wherever",
  "albeit",
  "despite",
  "beyond",
  "amid",
  "versus",
  "amongst",
  "upon",
]);
const ULTRA_BASIC_WORDS = new Set([
  "be",
  "have",
  "do",
  "not",
  "so",
  "there",
  "when",
  "up",
  "out",
  "very",
  "just",
  "now",
  "then",
  "also",
  "only",
  "where",
  "how",
  "back",
  "here",
  "down",
  "too",
  "why",
  "off",
  "away",
  "again",
  "always",
  "never",
  "please",
  "maybe",
  "well",
  "even",
  "still",
  "other",
  "same",
  "own",
  "else",
  "either",
]);
export function isBasicFunctionWord(w: QueueWord): boolean {
  if (!w.pos) return false;
  const key = w.word.toLocaleLowerCase("en");
  if (MEANINGFUL_CONNECTORS.has(key)) return false;
  if (ULTRA_BASIC_WORDS.has(key)) return true;
  return !["v", "adj", "n", "adv"].includes(w.pos);
}
export function queue(
  words: QueueWord[],
  cards: Record<string, StudyCard>,
  reviews: Review[],
  settings: Settings,
  now: Date,
  legacyWords: readonly string[] = [],
): StudyCard[] {
  const day = studyDay(now, settings),
    used = reviews.filter(
      (r) => !r.undone && r.newCard && r.day === day,
    ).length;
  const available = Math.max(0, settings.newLimit - used),
    directions: Direction[] = settings.production
      ? ["recognition", "production"]
      : ["recognition"];
  const all = words
    .flatMap((w) =>
      directions.map((d) => cards[cardId(w.id, d)] ?? emptyCard(w.id, d, now)),
    )
    .filter((c) => !c.suspended && c.buriedUntil <= now.getTime());
  const due = all
    .filter((c) => c.state !== State.New && c.due.getTime() <= now.getTime())
    .sort(
      (a, b) =>
        Number(b.state === State.Learning || b.state === State.Relearning) -
          Number(a.state === State.Learning || a.state === State.Relearning) ||
        a.due.getTime() - b.due.getTime() ||
        a.id.localeCompare(b.id),
    );
  const ranks = new Map(words.map((w) => [w.id, w.rank])),
    basicIds = new Set(
      words.filter((w) => isBasicFunctionWord(w)).map((w) => w.id),
    ),
    seen = new Set(legacyWords);
  const fresh = all
    .filter(
      (c) =>
        c.state === State.New &&
        (settings.includeBasicWords || !basicIds.has(c.wordId)),
    )
    .sort(
      (a, b) =>
        (settings.legacyFirst
          ? Number(seen.has(b.wordId)) - Number(seen.has(a.wordId))
          : 0) ||
        ranks.get(a.wordId)! - ranks.get(b.wordId)! ||
        Number(a.direction === "production") -
          Number(b.direction === "production"),
    );
  // Only introduce one direction of each word today; its sibling is buried on commit.
  const selected: StudyCard[] = [];
  const notes = new Set<string>();
  for (const c of fresh) {
    if (selected.length >= available) break;
    if (!notes.has(c.wordId)) {
      selected.push(c);
      notes.add(c.wordId);
    }
  }
  return [...due, ...selected];
}
export function intervalLabel(due: Date, now: Date, locale: string): string {
  const ms = Math.max(0, due.getTime() - now.getTime()),
    minutes = Math.max(1, Math.round(ms / 60_000));
  const unit = minutes < 60 ? "minute" : minutes < 1440 ? "hour" : "day",
    value =
      unit === "minute"
        ? minutes
        : unit === "hour"
          ? Math.round(minutes / 60)
          : Math.round(minutes / 1440);
  return new Intl.RelativeTimeFormat(locale, {
    numeric: "always",
    style: "short",
  }).format(value, unit);
}
