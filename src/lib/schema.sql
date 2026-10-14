-- Postgres DDL and additive migrations. Existing content IDs are retained.
-- Inlined at build time via Vite's ?raw import (see src/lib/db.ts) and
-- executed idempotently on first connection by ensureSchema(). Every
-- Bootstrap is transactional and safe to re-run after a failure.

CREATE TABLE IF NOT EXISTS lessons (
  id              SERIAL PRIMARY KEY,
  slug            TEXT NOT NULL UNIQUE,
  title_key       TEXT NOT NULL,
  description_key TEXT NOT NULL,
  order_index     INTEGER NOT NULL DEFAULT 0,
  is_published    INTEGER NOT NULL DEFAULT 1,
  created_at      TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS exercises (
  id              SERIAL PRIMARY KEY,
  lesson_id       INTEGER NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  order_index     INTEGER NOT NULL,
  type            TEXT NOT NULL CHECK (type IN
                  ('fill_blank','multiple_choice','drag_drop','true_false','matching','sentence_reorder')),
  prompt_key      TEXT NOT NULL,
  data_json       TEXT NOT NULL,
  answer_json     TEXT NOT NULL,
  explanation_key TEXT,
  pro_tip_key     TEXT,
  points          INTEGER NOT NULL DEFAULT 1
);
CREATE INDEX IF NOT EXISTS idx_exercises_lesson ON exercises(lesson_id, order_index);
-- Additive migration for existing installations: no rows/IDs are recreated.
CREATE UNIQUE INDEX IF NOT EXISTS idx_exercises_prompt ON exercises(lesson_id, prompt_key);
CREATE INDEX IF NOT EXISTS idx_lessons_published_order ON lessons(order_index, id)
  WHERE is_published = 1;

CREATE TABLE IF NOT EXISTS translations (
  id     SERIAL PRIMARY KEY,
  key    TEXT NOT NULL,
  locale TEXT NOT NULL CHECK (locale IN ('en','es','zh','ko','ja')),
  value  TEXT NOT NULL,
  UNIQUE(key, locale)
);
-- UNIQUE(key, locale) already supplies this exact lookup index.
DROP INDEX IF EXISTS idx_translations_lookup;

CREATE TABLE IF NOT EXISTS native_locale_visit (
  id          SERIAL PRIMARY KEY,
  visit_token TEXT NOT NULL,
  locale      TEXT NOT NULL,
  created_at  TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
