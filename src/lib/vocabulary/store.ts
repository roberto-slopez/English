import { openDB, type DBSchema, type IDBPDatabase } from "idb";
import { z } from "zod";
import {
  defaultSettings,
  emptyCard,
  cardId,
  nextBoundary,
  preview,
  studyDay,
  type Settings,
  type StudyCard,
  type Review,
} from "./scheduler.js";
import type { Grade } from "ts-fsrs";
interface Schema extends DBSchema {
  cards: { key: string; value: StudyCard };
  reviews: { key: string; value: Review; indexes: { at: number; day: string } };
  meta: { key: string; value: unknown };
}
export interface Snapshot {
  canUndo: boolean;
  cards: Record<string, StudyCard>;
  reviews: Review[];
  settings: Settings;
  legacy: Record<string, string>;
  legacyWords: string[];
  totalReviews: number;
  points: number;
  lastBackupAt?: number;
}
export const settingsSchema = z.object({
  newLimit: z.number().int().min(0).max(100),
  retention: z.number().min(0.7).max(0.97),
  production: z.boolean(),
  rollover: z.number().int().min(0).max(23),
  timeZone: z
    .string()
    .max(100)
    .refine((s) => {
      try {
        new Intl.DateTimeFormat("en", { timeZone: s });
        return true;
      } catch {
        return false;
      }
    }),
  onboarded: z.boolean(),
  legacyFirst: z.boolean(),
  includeBasicWords: z.boolean().optional(),
});
export class VocabularyStore {
  private db: Promise<IDBPDatabase<Schema>>;
  constructor(name = "english-vocabulary-fsrs-v1") {
    this.db = openDB<Schema>(name, 1, {
      upgrade(db) {
        db.createObjectStore("cards", { keyPath: "id" });
        const reviews = db.createObjectStore("reviews", { keyPath: "id" });
        reviews.createIndex("at", "at");
        reviews.createIndex("day", "day");
        db.createObjectStore("meta");
      },
    });
  }
  async load(now = new Date()): Promise<Snapshot> {
    const db = await this.db,
      tx = db.transaction(["cards", "reviews", "meta"], "readonly");
    const [
      cards,
      reviews,
      settings,
      legacy,
      legacyWords,
      totalReviews,
      points,
      lastReview,
      lastBackupAt,
    ] = await Promise.all([
      tx.objectStore("cards").getAll(),
      tx
        .objectStore("reviews")
        .index("at")
        .getAll(IDBKeyRange.lowerBound(now.getTime() - 31 * 86400_000)),
      tx.objectStore("meta").get("settings"),
      tx.objectStore("meta").get("legacy"),
      tx.objectStore("meta").get("legacyWords"),
      tx.objectStore("meta").get("totalReviews"),
      tx.objectStore("meta").get("points"),
      tx.objectStore("meta").get("lastReview"),
      tx.objectStore("meta").get("lastBackupAt"),
    ]);
    await tx.done;
    const last = reviews.find(
      (review) => review.id === lastReview && !review.undone,
    );
    const byId = Object.fromEntries(cards.map((c) => [c.id, c]));
    const siblingChanged =
      last &&
      (!last.siblingBefore ||
        last.siblingBefore.state === 0 ||
        last.siblingBefore.state === 2);
    const canUndo =
      !!last &&
      byId[last.cardId]?.revision === last.after.revision &&
      (!siblingChanged ||
        byId[last.siblingId]?.revision ===
          (last.siblingBefore?.revision ?? 0) + 1);
    return {
      canUndo,
      cards: Object.fromEntries(cards.map((c) => [c.id, c])),
      reviews,
      settings: settings
        ? settingsSchema.parse(settings)
        : {
            ...defaultSettings,
            timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          },
      legacy: (legacy ?? {}) as Record<string, string>,
      legacyWords: (legacyWords ?? []) as string[],
      totalReviews: Number(totalReviews ?? 0),
      points: Number(points ?? 0),
      ...(typeof lastBackupAt === "number" ? { lastBackupAt } : {}),
    };
  }
  async configure(settings: Settings) {
    const db = await this.db;
    await db.put("meta", settingsSchema.parse(settings), "settings");
  }
  async archiveLegacy(legacy: Record<string, string>, words: string[]) {
    const tx = (await this.db).transaction("meta", "readwrite");
    if ((await tx.store.get("legacy")) === undefined) {
      await tx.store.put(legacy, "legacy");
      await tx.store.put([...new Set(words)], "legacyWords");
    }
    await tx.done;
  }
  async rate(
    card: StudyCard,
    rating: Grade,
    op: string,
    now: Date,
    duration: number,
  ) {
    if (![1, 2, 3, 4].includes(rating) || !Number.isFinite(now.getTime()))
      throw Error("INVALID");
    const db = await this.db,
      tx = db.transaction(["cards", "reviews", "meta"], "readwrite");
    const cards = tx.objectStore("cards"),
      reviews = tx.objectStore("reviews"),
      meta = tx.objectStore("meta");
    if (await reviews.get(op)) {
      await tx.done;
      return;
    }
    const before = await cards.get(card.id),
      settings = settingsSchema.parse(
        (await meta.get("settings")) ?? {
          ...defaultSettings,
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        },
      );
    const current = before ?? emptyCard(card.wordId, card.direction, now),
      day = studyDay(now, settings);
    const today = (await reviews.index("day").getAll(day)).filter(
      (r) => !r.undone,
    );
    const reject = (reason: string): never => {
      tx.abort();
      void tx.done.catch(() => {});
      throw Error(reason);
    };
    if (
      current.revision !== card.revision ||
      current.suspended ||
      current.buriedUntil > now.getTime() ||
      (current.state !== 0 && current.due.getTime() > now.getTime())
    )
      reject("STALE");
    if (current.direction === "production" && !settings.production)
      reject("STALE");
    if (
      current.state === 0 &&
      today.filter((r) => r.newCard).length >= settings.newLimit
    )
      reject("LIMIT");
    const siblingId = cardId(
        card.wordId,
        card.direction === "recognition" ? "production" : "recognition",
      ),
      siblingBefore = await cards.get(siblingId);
    const sibling =
      siblingBefore ??
      emptyCard(
        card.wordId,
        card.direction === "recognition" ? "production" : "recognition",
        now,
      );
    if (sibling.state === 0 || sibling.state === 2) {
      await cards.put({
        ...sibling,
        buriedUntil: nextBoundary(now, settings),
        revision: sibling.revision + 1,
      });
    }
    const after = preview(current, now, settings)[rating],
      points = today.some((r) => r.wordId === card.wordId) ? 0 : 5;
    const review: Review = {
      id: op,
      cardId: card.id,
      wordId: card.wordId,
      at: now.getTime(),
      day,
      rating,
      before: before ?? null,
      after,
      siblingBefore: siblingBefore ?? null,
      siblingId,
      undone: false,
      newCard: current.state === 0,
      points,
      algorithm: "ts-fsrs@5.4.2",
      retention: settings.retention,
      duration: Math.min(
        300,
        Math.max(0, Number.isFinite(duration) ? duration : 0),
      ),
    };
    await cards.put(after);
    await reviews.put(review);
    await meta.put(op, "lastReview");
    await meta.put(
      Number((await meta.get("totalReviews")) ?? 0) + 1,
      "totalReviews",
    );
    await meta.put(Number((await meta.get("points")) ?? 0) + points, "points");
    await tx.done;
  }
  async undo(_now = new Date()) {
    const db = await this.db,
      tx = db.transaction(["cards", "reviews", "meta"], "readwrite"),
      meta = tx.objectStore("meta"),
      reviews = tx.objectStore("reviews"),
      cards = tx.objectStore("cards");
    const id = (await meta.get("lastReview")) as string | undefined,
      review = id ? await reviews.get(id) : undefined;
    if (!review || review.undone) {
      await tx.done;
      return false;
    }
    const current = await cards.get(review.cardId),
      sibling = await cards.get(review.siblingId);
    const siblingChanged =
      !review.siblingBefore ||
      review.siblingBefore.state === 0 ||
      review.siblingBefore.state === 2;
    // Do not overwrite a subsequent library action or another tab's edit.
    if (
      current?.revision !== review.after.revision ||
      (siblingChanged &&
        sibling?.revision !== (review.siblingBefore?.revision ?? 0) + 1)
    ) {
      tx.abort();
      void tx.done.catch(() => {});
      throw Error("STALE");
    }
    if (review.before)
      await cards.put({ ...review.before, revision: current.revision + 1 });
    else await cards.delete(review.cardId);
    if (siblingChanged) {
      if (review.siblingBefore)
        await cards.put({
          ...review.siblingBefore,
          revision: (sibling?.revision ?? 0) + 1,
        });
      else await cards.delete(review.siblingId);
    }
    await reviews.put({ ...review, undone: true });
    await meta.delete("lastReview");
    await meta.put(
      Math.max(0, Number((await meta.get("totalReviews")) ?? 0) - 1),
      "totalReviews",
    );
    await meta.put(
      Math.max(0, Number((await meta.get("points")) ?? 0) - review.points),
      "points",
    );
    await tx.done;
    return true;
  }
  async change(
    card: StudyCard,
    action: "flag" | "suspend" | "bury",
    now: Date,
  ) {
    const db = await this.db,
      tx = db.transaction(["cards", "meta"], "readwrite"),
      store = tx.objectStore("cards"),
      previous = await store.get(card.id);
    if ((previous?.revision ?? 0) !== card.revision) {
      tx.abort();
      void tx.done.catch(() => {});
      throw Error("STALE");
    }
    const current = previous ?? card,
      settings = (await tx.objectStore("meta").get("settings")) as
        Settings | undefined;
    await store.put({
      ...current,
      revision: current.revision + 1,
      ...(action === "flag"
        ? { flagged: !current.flagged }
        : action === "suspend"
          ? { suspended: !current.suspended }
          : { buriedUntil: nextBoundary(now, settings ?? defaultSettings) }),
    });
    await tx.done;
  }
  async export(now = Date.now()) {
    const db = await this.db;
    await db.put("meta", now, "lastBackupAt");
    const tx = db.transaction(["cards", "reviews", "meta"], "readonly");
    const [cards, reviews, keys, values] = await Promise.all([
      tx.objectStore("cards").getAll(),
      tx.objectStore("reviews").getAll(),
      tx.objectStore("meta").getAllKeys(),
      tx.objectStore("meta").getAll(),
    ]);
    await tx.done;
    return JSON.stringify({
      format: "english-vocabulary",
      version: 1,
      catalog: "ngsl-gr-1.0-5000",
      exportedAt: new Date(now).toISOString(),
      cards,
      reviews,
      meta: Object.fromEntries(keys.map((k, i) => [k, values[i]])),
    });
  }
  async import(raw: string, validWords: ReadonlySet<string>) {
    const backup = validateBackup(raw, validWords);
    const db = await this.db,
      tx = db.transaction(["cards", "reviews", "meta"], "readwrite");
    for (const name of ["cards", "reviews", "meta"] as const)
      await tx.objectStore(name).clear();
    for (const card of backup.cards) await tx.objectStore("cards").put(card);
    for (const review of backup.reviews)
      await tx.objectStore("reviews").put(review);
    for (const [key, value] of Object.entries(backup.meta))
      await tx.objectStore("meta").put(value, key);
    await tx.done;
  }
  async close() {
    (await this.db).close();
  }
}
const finite = z.number().finite().nonnegative().max(Number.MAX_SAFE_INTEGER);
const date = z
  .union([z.string().datetime(), z.date()])
  .transform((v) => new Date(v));
const cardSchema = z.object({
  id: z.string(),
  wordId: z.string(),
  direction: z.enum(["recognition", "production"]),
  revision: finite.int(),
  suspended: z.boolean(),
  buriedUntil: finite,
  flagged: z.boolean(),
  legacySeen: z.boolean().optional(),
  due: date,
  last_review: date.optional(),
  stability: finite,
  difficulty: z.number().finite().min(0).max(10),
  elapsed_days: finite,
  scheduled_days: finite,
  learning_steps: finite.int(),
  reps: finite.int(),
  lapses: finite.int(),
  state: z.union([z.literal(0), z.literal(1), z.literal(2), z.literal(3)]),
});
const reviewSchema = z.object({
  id: z.string().max(100),
  cardId: z.string(),
  wordId: z.string(),
  at: finite,
  day: z.string().regex(/^\d{4}-\d{2}-\d{2}$/),
  rating: z.union([z.literal(1), z.literal(2), z.literal(3), z.literal(4)]),
  before: cardSchema.nullable(),
  after: cardSchema,
  siblingBefore: cardSchema.nullable(),
  siblingId: z.string(),
  undone: z.boolean(),
  newCard: z.boolean(),
  points: z.union([z.literal(0), z.literal(5)]),
  algorithm: z.string(),
  retention: z.number().min(0.7).max(0.97),
  duration: finite.max(300),
});
export function validateBackup(raw: string, words: ReadonlySet<string>) {
  if (raw.length > 100_000_000) throw Error("BACKUP_SIZE");
  const result = z
    .object({
      format: z.literal("english-vocabulary"),
      version: z.literal(1),
      catalog: z.literal("ngsl-gr-1.0-5000"),
      cards: z.array(cardSchema).max(10000),
      reviews: z.array(reviewSchema).max(300000),
      meta: z.object({
        settings: settingsSchema.optional(),
        legacy: z.record(z.string()).optional(),
        legacyWords: z.array(z.string()).optional(),
        totalReviews: finite.int().optional(),
        points: finite.int().optional(),
        lastReview: z.string().optional(),
        lastBackupAt: finite.int().optional(),
      }),
    })
    .parse(JSON.parse(raw));
  const valid = (c: StudyCard) =>
    words.has(c.wordId) && c.id === cardId(c.wordId, c.direction);
  if (
    result.cards.some((c) => !valid(c)) ||
    new Set(result.cards.map((c) => c.id)).size !== result.cards.length ||
    new Set(result.reviews.map((r) => r.id)).size !== result.reviews.length
  )
    throw Error("BACKUP_CARDS");
  for (const r of result.reviews) {
    if (
      !valid(r.after) ||
      r.cardId !== r.after.id ||
      r.wordId !== r.after.wordId ||
      r.siblingId !==
        cardId(
          r.wordId,
          r.after.direction === "recognition" ? "production" : "recognition",
        ) ||
      (r.before && (!valid(r.before) || r.before.id !== r.cardId)) ||
      (r.siblingBefore &&
        (!valid(r.siblingBefore) || r.siblingBefore.id !== r.siblingId))
    )
      throw Error("BACKUP_HISTORY");
  }
  const active = result.reviews.filter((r) => !r.undone);
  result.meta.totalReviews = active.length;
  result.meta.points = active.reduce((s, r) => s + r.points, 0);
  return result;
}
