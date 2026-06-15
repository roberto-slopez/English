PRAGMA journal_mode = WAL;
PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS lessons (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  slug         TEXT NOT NULL UNIQUE,        -- "because-so-that", "adverbs-of-frequency", etc.
  title_key    TEXT NOT NULL,               -- clave i18n para el título: "lesson.because.title"
  description_key TEXT NOT NULL,            -- clave i18n para descripción corta
  order_index  INTEGER NOT NULL DEFAULT 0,
  is_published INTEGER NOT NULL DEFAULT 1,
  created_at   TEXT NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS exercises (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  lesson_id    INTEGER NOT NULL REFERENCES lessons(id) ON DELETE CASCADE,
  order_index  INTEGER NOT NULL,
  type         TEXT NOT NULL CHECK (type IN
                ('fill_blank','multiple_choice','drag_drop','true_false','matching','sentence_reorder')),
  prompt_key   TEXT NOT NULL,               -- clave i18n del enunciado
  data_json    TEXT NOT NULL,               -- payload específico del tipo (ver §3)
  answer_json  TEXT NOT NULL,               -- respuesta(s) correcta(s) en JSON
  explanation_key TEXT,                     -- clave i18n de la explicación post-respuesta
  pro_tip_key  TEXT,                        -- clave i18n del pro tip
  points       INTEGER NOT NULL DEFAULT 1
);
CREATE INDEX IF NOT EXISTS idx_exercises_lesson ON exercises(lesson_id, order_index);

CREATE TABLE IF NOT EXISTS translations (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  key          TEXT NOT NULL,               -- "lesson.because.title", "exercise.beause.1.prompt", "ui.start"
  locale       TEXT NOT NULL CHECK (locale IN ('en','es','zh','ko','ja')),
  value        TEXT NOT NULL,
  UNIQUE(key, locale)
);
CREATE INDEX IF NOT EXISTS idx_translations_lookup ON translations(key, locale);

CREATE TABLE IF NOT EXISTS native_locale_visit (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  visit_token  TEXT NOT NULL,               -- uuid guardado en localStorage
  locale       TEXT NOT NULL,
  created_at   TEXT NOT NULL DEFAULT (datetime('now'))
);
