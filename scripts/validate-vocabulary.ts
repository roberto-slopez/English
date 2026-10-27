import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { wordSchema } from "../src/lib/vocabulary/content.js";
import zhLocalized from "../src/content/translations/localized/zh.json";
import koLocalized from "../src/content/translations/localized/ko.json";
import jaLocalized from "../src/content/translations/localized/ja.json";
import {
  srsEnglish,
  srsSpanish,
} from "../src/content/translations/vocabulary-srs.js";
const base = new URL("../src/content/vocabulary/", import.meta.url);
const data = JSON.parse(
  await readFile(new URL("ngsl-gr.json", base), "utf8"),
) as Array<{
  id: string;
  meaning: string;
  definition: string;
  example: { en: string; es: string };
  alternatives: Array<{ meaning: string; definition: string }>;
}>;
const words = data.map((value) =>
  wordSchema.parse({
    ...value,
    translations: {
      zh: zhLocalized.vocabulary[value.id as keyof typeof zhLocalized.vocabulary],
      ko: koLocalized.vocabulary[value.id as keyof typeof koLocalized.vocabulary],
      ja: jaLocalized.vocabulary[value.id as keyof typeof jaLocalized.vocabulary],
    },
  }),
);
assert.equal(words.length, 5000);
assert.equal(new Set(words.map((w) => w.id)).size, 5000);
assert.equal(
  new Set(words.map((w) => w.word.toLocaleLowerCase("en"))).size,
  5000,
);
const expectedVocabHash = createHash("sha256")
  .update(
    JSON.stringify(
      words.flatMap((w) => [
        [`${w.id}.meaning`, w.meaning],
        [`${w.id}.example`, w.example.es],
        ...w.alternatives.map((s, i) => [`${w.id}.alternative.${i}`, s.meaning]),
      ]),
    ),
  )
  .digest("hex");
const targetScriptRe = {
  zh: /[\u4e00-\u9fff]/,
  ko: /[\uac00-\ud7af]/,
  ja: /[\u3040-\u30ff\u4e00-\u9fff]/,
} as const;
for (const [locale, localized] of [
  ["zh", zhLocalized],
  ["ko", koLocalized],
  ["ja", jaLocalized],
] as const) {
  assert.equal(localized.metadata.vocabularySourceHash, expectedVocabHash, locale);
}
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
  for (const locale of ["zh", "ko", "ja"] as const) {
    const tr = w.translations?.[locale];
    assert.ok(tr, `${w.id}:${locale}`);
    assert.equal(tr.alternatives.length, w.alternatives.length, `${w.id}:${locale}:alternatives`);
    for (const field of [tr.meaning, tr.example, ...tr.alternatives]) {
      assert.ok(field.trim().length > 0, `${w.id}:${locale}:empty`);
      assert.ok(!/ZXQ\s*\d+\s*QXZ/i.test(field), `${w.id}:${locale}:token`);
      assert.ok(targetScriptRe[locale].test(field), `${w.id}:${locale}:script`);
    }
  }
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
  `[vocabulary] OK: ${words.length} unique headwords; English definitions, Spanish/Chinese/Korean/Japanese meanings & examples, source checksum and UI labels.`,
);
