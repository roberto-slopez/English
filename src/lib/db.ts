// better-sqlite3 singleton. Bootstraps the schema on first run.
// See docs/design.md §2 for the canonical DDL.
//
// Path resolution note: Astro's server bundle puts our code under
// dist/server/chunks/*.mjs, so resolving from `import.meta.url` would
// point at /app/dist — neither the data dir nor schema.sql live there.
// We resolve DATA_DIR from process.cwd() (the CMD is launched with
// /app as cwd) and inline the schema at build time via Vite's ?raw
// import. Both fixes are required for the runtime image to work.

import Database, { type Database as DB } from 'better-sqlite3';
import { existsSync, mkdirSync } from 'node:fs';
import { resolve } from 'node:path';
import schemaSql from './schema.sql?raw';

// DATA_DIR: optional env override (handy for tests) → <cwd>/data.
// On Railway the cwd is /app, so this resolves to /app/data, which is
// where the persistent volume is mounted.
const DATA_DIR = resolve(process.env.DATA_DIR ?? resolve(process.cwd(), 'data'));
const DB_PATH = resolve(DATA_DIR, 'english.db');

let _db: DB | null = null;

function ensureDataDir(): void {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
}

/**
 * Returns the singleton better-sqlite3 connection, bootstrapping the
 * schema (idempotent: every statement uses IF NOT EXISTS) on first
 * call. WAL mode and foreign keys are always enabled.
 */
export function getDb(): DB {
  if (_db) return _db;

  ensureDataDir();

  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');
  db.exec(schemaSql);

  _db = db;
  return _db;
}

export const DB_PATHS = {
  dataDir: DATA_DIR,
  dbPath: DB_PATH,
};
