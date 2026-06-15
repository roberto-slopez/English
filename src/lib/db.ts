// better-sqlite3 singleton. Bootstraps the schema on first run.
// See docs/design.md §2 for the canonical DDL.

import Database, { type Database as DB } from 'better-sqlite3';
import { existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const PROJECT_ROOT = resolve(__dirname, '..', '..');
const DATA_DIR = resolve(PROJECT_ROOT, 'data');
const DB_PATH = resolve(DATA_DIR, 'english.db');
const SCHEMA_PATH = resolve(__dirname, 'schema.sql');

let _db: DB | null = null;

function ensureDataDir(): void {
  if (!existsSync(DATA_DIR)) {
    mkdirSync(DATA_DIR, { recursive: true });
  }
}

function bootstrap(db: DB): void {
  const ddl = readFileSync(SCHEMA_PATH, 'utf8');
  db.exec(ddl);
}

/**
 * Returns the singleton better-sqlite3 connection, creating and bootstrapping
 * the database (data/english.db) on first call. WAL mode and foreign keys
 * are always enabled.
 */
export function getDb(): DB {
  if (_db) return _db;

  ensureDataDir();

  const isNew = !existsSync(DB_PATH);
  const db = new Database(DB_PATH);
  db.pragma('journal_mode = WAL');
  db.pragma('foreign_keys = ON');

  if (isNew) {
    bootstrap(db);
  } else {
    // Idempotent: re-running CREATE TABLE IF NOT EXISTS is safe and
    // ensures upgrades pick up new tables/indexes.
    bootstrap(db);
  }

  _db = db;
  return _db;
}

export const DB_PATHS = {
  dataDir: DATA_DIR,
  dbPath: DB_PATH,
  schemaPath: SCHEMA_PATH,
};
