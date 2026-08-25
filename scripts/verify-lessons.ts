// Quick verification: load the seed-built DB and read back a few
// lessons/exercises/translations via the same queries the API uses.
// Run with: pnpm tsx scripts/verify-lessons.ts
import { closePool } from '../src/lib/db.js';
import { getLessonBySlug } from '../src/lib/lessons-repo.js';

const SLUGS = [
  'present-perfect-ever-never',
  'wh-words-why',
  'wh-words-how',
  'wh-words-how-long',
  'wh-words-how-many',
  'wh-words-when',
  'wh-words-where',
  'wh-words-who',
  'wh-words-what',
  'top-1000-idioms',
  'top-1000-gerunds',
  'vocab-chunk-01',
];

async function main(): Promise<void> {
  for (const slug of SLUGS) {
    const lessonEn = await getLessonBySlug(slug, 'en');
    const lessonEs = await getLessonBySlug(slug, 'es');
    if (!lessonEn) {
      console.log(`${slug}: ❌ NOT FOUND`);
      continue;
    }
    const ex1Data = lessonEn.exercises[0]?.data
      ? JSON.stringify(lessonEn.exercises[0].data).slice(0, 100)
      : '(no data)';
    const ex1Answer = lessonEn.exercises[0]?.answer
      ? JSON.stringify(lessonEn.exercises[0].answer)
      : '(no answer)';
    console.log(
      `${slug}:\n  [EN] title="${lessonEn.title}" desc="${lessonEn.description}" intro="${lessonEn.intro.slice(0, 80)}..." exercises=${lessonEn.exercises.length}\n` +
      `  [ES] title="${lessonEs?.title}" desc="${lessonEs?.description}" intro="${lessonEs?.intro.slice(0, 80)}..."\n` +
      `  ex1.data=${ex1Data} ex1.answer=${ex1Answer}`
    );
  }
  await closePool();
}

main().catch(async (err) => {
  console.error('[verify-lessons] FAILED:', (err as Error).message);
  await closePool();
  process.exit(1);
});
