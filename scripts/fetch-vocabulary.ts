import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { buildVocab } from "../src/content/vocabulary/top2000-data.js";
import { vocabLessons } from "../src/content/vocabulary/top2000-vocabulary.js";
import manifest from "../src/content/vocabulary/manifest.json";
const cache = new URL("./.vocabulary-cache/", import.meta.url);
await mkdir(cache, { recursive: true });
const sources = [
  [
    "eng-spa.tar.xz",
    "https://download.freedict.org/dictionaries/eng-spa/2025.11.23/freedict-eng-spa-2025.11.23.src.tar.xz",
    manifest.dictionarySha256,
  ],
  [
    "sentences.zip",
    "https://www.manythings.org/anki/spa-eng.zip",
    manifest.sentencesSha256,
  ],
  ...Object.entries(manifest.snapshots).map(([name, sha]) => [
    name,
    "https://downloads.tatoeba.org/exports/per_language/" +
      (name.startsWith("spa") ? "spa" : "eng") +
      "/" +
      name,
    sha,
  ]),
] as string[][];
for (const [name, url, expected] of sources) {
  const file = new URL(name!, cache);
  let data: Buffer;
  try {
    data = await readFile(file);
  } catch {
    const response = await fetch(url!);
    if (!response.ok) throw Error(`Download failed: ${response.status} ${url}`);
    data = Buffer.from(await response.arrayBuffer());
  }
  if (createHash("sha256").update(data).digest("hex") !== expected)
    throw Error(
      `Snapshot mismatch: ${name}. Keep the checked-in catalogue and review a new source edition before updating fingerprints.`,
    );
  await writeFile(file, data);
  console.log(`[vocabulary] verified ${name}`);
}
await writeFile(new URL("legacy.json", cache), JSON.stringify(buildVocab()));
const legacy: Record<string, string> = {};
for (const lesson of vocabLessons)
  for (const exercise of lesson.exercises) {
    let word: string | undefined;
    if (
      exercise.type === "multiple_choice" &&
      "choices" in exercise.data &&
      "correctIndex" in exercise.answer
    )
      word = exercise.data.choices[exercise.answer.correctIndex];
    else if (
      "correct" in exercise.answer &&
      typeof exercise.answer.correct === "string"
    )
      word = exercise.answer.correct;
    if (word) legacy[exercise.promptKey] = "ngslgr-" + word.toLowerCase();
  }
await writeFile(
  new URL("../src/content/vocabulary/legacy-map.json", import.meta.url),
  JSON.stringify(legacy) + "\n",
);
console.log(
  "[vocabulary] Legacy mapping and source snapshot are ready for build-vocabulary.py.",
);
