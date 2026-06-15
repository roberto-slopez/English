// Vocabulary section: 2000 most frequent English words, organized as
// 40 chunks of 50 words. Each chunk is its own lesson (slug
// `vocab-chunk-NN`) with 6 exercises:
//   - 3× multiple_choice: pick the word that matches the given definition
//   - 3× fill_blank: type the word that matches the given definition
// This is the same shape as the other lessons so the existing ExerciseRunner
// renders them without changes.
//
// 6 per chunk × 40 chunks = 240 vocab exercises (was 2 × 40 = 80), so 12% of
// the corpus is tested per pass instead of 4%. The shuffle is deterministic
// per-chunk so the answer position is stable across SSR/CSR.

import type { LessonDef } from '../types.js';
import { makeExercise } from '../types.js';
import { TOP_2000, buildVocab, type VocabEntry } from './top2000-data.js';

const CHUNK_SIZE = 50;
export const TOTAL_CHUNKS = Math.ceil(TOP_2000.length / CHUNK_SIZE); // 40
const EXERCISES_PER_CHUNK = 6; // 3 mc + 3 fill_blank, alternating

function chunkEntries(chunkIdx: number): VocabEntry[] {
  const start = chunkIdx * CHUNK_SIZE;
  return buildVocab().slice(start, start + CHUNK_SIZE);
}

/**
 * Pick `count` distinct entries from the chunk at evenly-spread offsets.
 * We start from a stable seed and skip duplicates / the entry itself.
 * Spread-out indices (not just 0..count) so we cover the chunk, not just
 * the start.
 */
function pickN(chunk: VocabEntry[], count: number): VocabEntry[] {
  const total = chunk.length;
  if (count >= total) return chunk.slice();
  const step = Math.max(1, Math.floor(total / count));
  const out: VocabEntry[] = [];
  const seen = new Set<string>();
  for (let i = 0; i < count && out.length < count; i++) {
    const idx = (i * step) % total;
    const candidate = chunk[idx]!;
    if (seen.has(candidate.word)) continue;
    seen.add(candidate.word);
    out.push(candidate);
  }
  return out;
}

/**
 * Pick `count` distinct entries from the chunk that are NOT the answer.
 * Used to build the distractor set for multiple-choice questions.
 */
function pickDistractors(chunk: VocabEntry[], answer: VocabEntry, count: number): VocabEntry[] {
  const total = chunk.length;
  const distractors: VocabEntry[] = [];
  for (let step = 7; distractors.length < count && step < total * 3; step += 7) {
    const i = (step) % total;
    const candidate = chunk[i]!;
    if (candidate.word === answer.word) continue;
    if (distractors.some((d) => d.word === candidate.word)) continue;
    distractors.push(candidate);
  }
  return distractors;
}

/**
 * Shuffle 4 entries deterministically by seed. The correct answer moves
 * around the 4 positions across exercises (not always #0) but stays
 * reproducible per seed.
 */
function shuffleFour(seed: number, items: VocabEntry[]): VocabEntry[] {
  const order = [0, 1, 2, 3];
  let s = (seed * 31 + 7) | 0;
  for (let i = order.length - 1; i > 0; i--) {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    const j = s % (i + 1);
    [order[i], order[j]] = [order[j]!, order[i]!];
  }
  return [items[order[0]!]!, items[order[1]!]!, items[order[2]!]!, items[order[3]!]!];
}

function buildChunkLesson(chunkIdx: number): LessonDef {
  const chunkNum = chunkIdx + 1;
  const slug = `vocab-chunk-${String(chunkNum).padStart(2, '0')}`;
  const chunk = chunkEntries(chunkIdx);

  // Pick EXERCISES_PER_CHUNK distinct entries, spread evenly across the chunk.
  // The first 3 entries go to multiple_choice; the next 3 go to fill_blank.
  // Alternating is intentional: it feels less repetitive to the learner.
  const picks = pickN(chunk, EXERCISES_PER_CHUNK);
  const mcEntries = picks.slice(0, 3);
  const fbEntries = picks.slice(3, 6);

  const exercises = [
    // 3 × multiple_choice
    ...mcEntries.map((entry, i) => {
      const order = i * 2 + 1; // exercise order 1, 3, 5
      const four = [entry, ...pickDistractors(chunk, entry, 3)];
      const shuffled = shuffleFour(chunkIdx * 100 + order, four);
      const correctIndex = shuffled.findIndex((e) => e.word === entry.word);
      return makeExercise(
        'multiple_choice',
        order,
        `vocab.${slug}.${order}.prompt`,
        { choices: shuffled.map((e) => e.word) },
        { correctIndex },
        `vocab.${slug}.${order}.explanation`,
        `vocab.${slug}.${order}.pro_tip`,
        `mc_def_to_word_chunk${String(chunkNum).padStart(2, '0')}`
      );
    }),
    // 3 × fill_blank
    ...fbEntries.map((entry, i) => {
      const order = i * 2 + 2; // exercise order 2, 4, 6
      return makeExercise(
        'fill_blank',
        order,
        `vocab.${slug}.${order}.prompt`,
        { sentence: `The word for "${entry.def}" is: ____` },
        { correct: entry.word },
        `vocab.${slug}.${order}.explanation`,
        `vocab.${slug}.${order}.pro_tip`,
        `fb_def_to_word_chunk${String(chunkNum).padStart(2, '0')}`
      );
    }),
  ];

  return {
    slug,
    orderIndex: 100 + chunkNum, // sits after the 5 grammar lessons
    titleKey: `vocab.${slug}.title`,
    descriptionKey: `vocab.${slug}.description`,
    introKey: `vocab.${slug}.intro`,
    exercises,
  };
}

// Export all 40 chunk lessons.
export const vocabLessons: readonly LessonDef[] = Array.from(
  { length: TOTAL_CHUNKS },
  (_, i) => buildChunkLesson(i)
);

// And re-export the data so the UI can show "X / 2000 words learned".
export { TOP_2000, buildVocab, type VocabEntry, CHUNK_SIZE };
export { chunkEntries };

// Keep the old single-lesson export for backward-compat with seed.ts
// (which iterates ALL_LESSONS = [lesson1..lesson5]). The vocabulary
// section uses a separate ALL_VOCAB constant — see seed.ts.
export const lesson: LessonDef = vocabLessons[0]!;
