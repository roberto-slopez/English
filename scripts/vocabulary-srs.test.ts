import { test } from "node:test";
import assert from "node:assert/strict";
import * as fakeIndexedDB from "fake-indexeddb";
Object.assign(
  globalThis,
  Object.fromEntries(
    Object.entries(fakeIndexedDB).filter(
      ([key]) => key === "indexedDB" || key.startsWith("IDB"),
    ),
  ),
);
test("a forgotten new card is scheduled for relearning, not marked mastered", async () => {
  const { emptyCard, preview, defaultSettings } =
    await import("../src/lib/vocabulary/scheduler.js");
  const now = new Date("2026-10-17T12:00:00Z");
  const card = emptyCard("test", "recognition", now);
  const options = preview(card, now, defaultSettings);
  assert.equal(options[1].reps, 1);
  assert.equal(options[1].state, 1);
  assert.ok(options[1].due.getTime() > now.getTime());
  assert.ok(options[4].due.getTime() > options[1].due.getTime());
});
test("undo does not reject or change an untouched sibling that is still learning", async () => {
  const { VocabularyStore } = await import("../src/lib/vocabulary/store.js");
  const { emptyCard, defaultSettings } =
    await import("../src/lib/vocabulary/scheduler.js");
  const { openDB } = await import("idb");
  const name = "siblings-" + crypto.randomUUID(),
    store = new VocabularyStore(name),
    now = new Date("2026-10-17T12:00:00Z");
  await store.configure({ ...defaultSettings, production: true });
  const db = await openDB(name);
  const sibling = {
    ...emptyCard("ngslgr-test", "production", now),
    reps: 1,
    state: 1,
    revision: 3,
    due: new Date(now.getTime() + 60_000),
  };
  await db.put("cards", sibling);
  db.close();
  await store.rate(
    emptyCard("ngslgr-test", "recognition", now),
    3,
    "sibling-case",
    now,
    2,
  );
  assert.equal(await store.undo(now), true);
  assert.deepEqual((await store.load(now)).cards[sibling.id], sibling);
  await store.close();
});
test("backup rejects a forged sibling ID and restores a valid export", async () => {
  const { VocabularyStore, validateBackup } =
    await import("../src/lib/vocabulary/store.js");
  const { emptyCard } = await import("../src/lib/vocabulary/scheduler.js");
  const store = new VocabularyStore("backup-" + crypto.randomUUID()),
    now = new Date("2026-10-17T12:00:00Z");
  await store.rate(
    emptyCard("ngslgr-test", "recognition", now),
    3,
    "review",
    now,
    4,
  );
  assert.equal((await store.load(now)).lastBackupAt, undefined);
  const raw = await store.export(),
    backup = JSON.parse(raw);
  const exportedAt = (await store.load(now)).lastBackupAt;
  assert.equal(typeof exportedAt, "number");
  backup.reviews[0].siblingId = "ngslgr-different:recognition";
  assert.throws(
    () => validateBackup(JSON.stringify(backup), new Set(["ngslgr-test"])),
    /BACKUP_HISTORY/,
  );
  await store.import(raw, new Set(["ngslgr-test"]));
  const restored = await store.load(now);
  assert.equal(restored.totalReviews, 1);
  assert.equal(restored.lastBackupAt, exportedAt);
  await store.close();
});
test("review commits are atomic, reject stale tabs, and undo restores the quota", async () => {
  const { VocabularyStore } = await import("../src/lib/vocabulary/store.js");
  const { defaultSettings, emptyCard, queue } =
    await import("../src/lib/vocabulary/scheduler.js");
  const store = new VocabularyStore("srs-test-" + crypto.randomUUID());
  const now = new Date("2026-10-17T12:00:00Z");
  await store.configure({ ...defaultSettings, newLimit: 1 });
  const card = emptyCard("ngslgr-test", "recognition", now);
  await store.rate(card, 1, "op1", now, 2);
  await store.rate(card, 1, "op1", now, 2);
  await assert.rejects(() => store.rate(card, 3, "op2", now, 2), /STALE/);
  let snapshot = await store.load(now);
  assert.equal(snapshot.reviews.length, 1);
  assert.equal(snapshot.canUndo, true);
  assert.equal(
    queue(
      [{ id: "ngslgr-other", word: "other", rank: 1 }],
      snapshot.cards,
      snapshot.reviews,
      snapshot.settings,
      now,
    ).length,
    0,
  );
  await store.undo(now);
  snapshot = await store.load(now);
  assert.equal(snapshot.canUndo, false);
  assert.equal(Object.keys(snapshot.cards).length, 0);
  assert.equal(
    queue(
      [{ id: "ngslgr-other", word: "other", rank: 1 }],
      snapshot.cards,
      snapshot.reviews,
      snapshot.settings,
      now,
    ).length,
    1,
  );
  store.close();
});
test("the replacement catalogue has 5000 unique sourced words with bilingual context", async () => {
  const { readFile } = await import("node:fs/promises"),
    { wordSchema } = await import("../src/lib/vocabulary/content.js");
  const rows = JSON.parse(
    await readFile(
      new URL("../src/content/vocabulary/ngsl-gr.json", import.meta.url),
      "utf8",
    ),
  ) as unknown[];
  assert.equal(rows.length, 5000);
  const words = rows.map((w) => wordSchema.parse(w));
  assert.equal(new Set(words.map((w) => w.word.toLowerCase())).size, 5000);
  assert.deepEqual(
    words.map((w) => w.rank),
    Array.from({ length: 5000 }, (_, i) => i + 1),
  );
  assert.equal(words[0]?.word, "the");
  assert.equal(words.at(-1)?.word, "enjoyment");
});
test("daily queue respects the new-card quota and prioritizes overdue learning", async () => {
  const { emptyCard, queue, defaultSettings, studyDay, nextBoundary } =
    await import("../src/lib/vocabulary/scheduler.js");
  const now = new Date("2026-11-01T12:00:00Z"),
    settings = {
      ...defaultSettings,
      newLimit: 1,
      timeZone: "America/Los_Angeles",
    };
  const words = [
    { id: "a", word: "a", rank: 1 },
    { id: "b", word: "b", rank: 2 },
  ];
  const due = {
    ...emptyCard("b", "recognition", now),
    state: 1,
    reps: 1,
    due: new Date(now.getTime() - 60_000),
  };
  assert.deepEqual(
    queue(words, { [due.id]: due }, [], settings, now).map((c) => c.wordId),
    ["b", "a"],
  );
  assert.equal(
    queue(words, {}, [], { ...settings, newLimit: 0 }, now).length,
    0,
  );
  const boundary = nextBoundary(new Date("2026-11-01T08:30:00Z"), settings);
  assert.equal(studyDay(new Date(boundary - 1000), settings), "2026-10-31");
  assert.equal(studyDay(new Date(boundary), settings), "2026-11-01");
});
test("daily queue skips basic non-connector function words by default and keeps content words and connectors", async () => {
  const { queue, defaultSettings, isBasicFunctionWord } =
    await import("../src/lib/vocabulary/scheduler.js");
  const now = new Date("2026-11-01T12:00:00Z");
  const sample = [
    { id: "ngslgr-the", word: "the", rank: 1, pos: "det" },
    { id: "ngslgr-be", word: "be", rank: 2, pos: "v" },
    { id: "ngslgr-a", word: "a", rank: 6, pos: "det" },
    { id: "ngslgr-say", word: "say", rank: 30, pos: "v" },
    { id: "ngslgr-good", word: "good", rank: 56, pos: "adj" },
    { id: "ngslgr-because", word: "because", rank: 62, pos: "conj" },
  ];
  assert.equal(isBasicFunctionWord(sample[0]!), true);
  assert.equal(isBasicFunctionWord(sample[1]!), true);
  assert.equal(isBasicFunctionWord(sample[2]!), true);
  assert.equal(isBasicFunctionWord(sample[3]!), false);
  assert.equal(isBasicFunctionWord(sample[4]!), false);
  assert.equal(isBasicFunctionWord(sample[5]!), false);
  assert.deepEqual(
    queue(sample, {}, [], defaultSettings, now).map((c) => c.wordId),
    ["ngslgr-say", "ngslgr-good", "ngslgr-because"],
  );
  assert.deepEqual(
    queue(
      sample,
      {},
      [],
      { ...defaultSettings, includeBasicWords: true },
      now,
    ).map((c) => c.wordId),
    [
      "ngslgr-the",
      "ngslgr-be",
      "ngslgr-a",
      "ngslgr-say",
      "ngslgr-good",
      "ngslgr-because",
    ],
  );
});
