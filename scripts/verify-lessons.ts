// Quick verification: load the seed-built DB and read back a few
// lessons/exercises/translations via the same queries the API uses.
// Run with: pnpm tsx scripts/verify-lessons.ts
import { getDb, DB_PATHS } from '../src/lib/db.js';
import { getLessonBySlug } from '../src/lib/lessons-repo.js';

const SLUGS = [
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

// Touch the DB so it gets opened
getDb();
console.log('DB at:', DB_PATHS.dbPath);

for (const slug of SLUGS) {
  const lesson = getLessonBySlug(slug, 'en');
  if (!lesson) {
    console.log(`${slug}: ❌ NOT FOUND`);
    continue;
  }
  const ex1Data = lesson.exercises[0]?.data
    ? JSON.stringify(lesson.exercises[0].data).slice(0, 100)
    : '(no data)';
  const ex1Answer = lesson.exercises[0]?.answer
    ? JSON.stringify(lesson.exercises[0].answer)
    : '(no answer)';
  console.log(
    `${slug}: title="${lesson.title}" desc="${lesson.description}" ` +
      `exercises=${lesson.exercises.length} ` +
      `ex1.data=${ex1Data} ex1.answer=${ex1Answer}`
  );
}
