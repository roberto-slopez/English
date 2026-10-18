import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { wordSchema } from "../src/lib/vocabulary/content.js";
import {
  srsEnglish,
  srsSpanish,
} from "../src/content/translations/vocabulary-srs.js";
const base = new URL("../src/content/vocabulary/", import.meta.url);
const data = JSON.parse(
  await readFile(new URL("ngsl-gr.json", base), "utf8"),
) as unknown[];
const words = data.map((value) => wordSchema.parse(value));
assert.equal(words.length, 5000);
assert.equal(new Set(words.map((w) => w.id)).size, 5000);
assert.equal(
  new Set(words.map((w) => w.word.toLocaleLowerCase("en"))).size,
  5000,
);
const csv = await readFile(new URL("sources/NGSL-GR_rank.csv", base));
const source = csv
  .toString("utf8")
  .trim()
  .split(/\r?\n/)
  .slice(51)
  .map((line) => line.split(","));
assert.equal(source.length, 5000);
words.forEach((w, i) => {
  assert.equal(w.rank, i + 1);
  assert.equal(w.sourceId, Number(source[i]![0]));
  assert.equal(w.word, source[i]![1]);
  assert.equal(w.id, "ngslgr-" + w.word.toLowerCase());
  for (const text of [w.meaning, w.definition, w.example.en, w.example.es])
    assert.ok(!/^(?:TODO:|TBD\b|\[placeholder\])/u.test(text), w.word);
});
const manifest = JSON.parse(
  await readFile(new URL("manifest.json", base), "utf8"),
);
assert.equal(createHash("sha256").update(csv).digest("hex"), manifest.sha256);
assert.deepEqual(
  Object.keys(srsEnglish).sort(),
  Object.keys(srsSpanish).sort(),
);
for (const labels of [srsEnglish, srsSpanish])
  for (const value of Object.values(labels)) assert.ok(value.trim().length > 0);
console.log(
  `[vocabulary] OK: ${words.length} unique headwords; English definitions, Spanish meanings, bilingual examples, source checksum and UI labels.`,
);
