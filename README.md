# English Learning

An interactive English-learning app built with **Astro 7** (SSR via the Node
adapter, standalone mode), **React 19**, **Framer Motion**, and
**better-sqlite3** for content storage. Practice grammar lessons, drill the
top-2000 vocabulary in 50-word chunks, and earn points for every correct
answer.

## Features

- **Two distinct sections.** `/lessons` for grammar (wh-words, idioms,
  gerunds, etc.) and `/vocabulary` for the top-2000 word list broken into 40
  chunks of 50 words each. The two are kept separate in the UI — chunks
  never appear in the lessons list.
- **Six exercise types** — fill-in-the-blank, multiple choice, drag-and-drop,
  true/false, matching, and sentence reorder. Each lesson ships 2–20
  exercises depending on the topic.
- **Per-question points.** Every correct answer awards points
  (`base + first-try bonus + streak bonus`) and a celebratory animation
  (path-drawn check + ring shockwave + radial burst + `+N` floater). On
  lesson completion a centered modal breaks down the points earned per
  question and totals.
- **Progress tracking** in `localStorage` (per-lesson completion, attempts,
  points, streak). No login required.
- **Multi-locale UI** (English UI with auto-detected native language for
  translation reveal) and a dark/light theme toggle.
- **Vocab chaining.** Finish one chunk and the modal offers
  **"Next chunk →"** and **"← Back to vocabulary"** — no jumping back to
  the lessons list mid-vocab.
- **Internationalized** content (English + Spanish) stored in a SQLite
  database, with first-class support for adding more locales.

## Tech stack

| Layer            | Choice                                                      |
| ---------------- | ----------------------------------------------------------- |
| Framework        | Astro 7.3.8 (SSR, `output: 'server'`)                         |
| Adapter          | `@astrojs/node` standalone                                  |
| UI islands       | React 19 + Framer Motion 14.2.0                             |
| Styling          | Tailwind v4 (via `@tailwindcss/vite`)                       |
| Database         | SQLite via `better-sqlite3`                                 |
| Content authoring| TypeScript files under `src/content/lessons` and `vocabulary` |
| Package manager  | pnpm 10 (locked via `packageManager` + Corepack)            |
| Node             | 22.12.0+ (production uses the maintained Node 22 image)      |
| TypeScript       | 6.0.3, pinned to major 6 for `astro check` compatibility      |

## Project structure

```
src/
├── components/           # React islands
│   ├── ExerciseRunner.tsx    ← main lesson runtime
│   ├── PointsCompletion.tsx  ← centered "you won" modal
│   ├── feedback/             # CorrectFeedback, WrongFeedback, ProgressBar
│   └── exercises/            # one component per exercise type
├── content/
│   ├── lessons/              # grammar / idioms / gerunds / wh-words
│   ├── vocabulary/           # top-2000 words, sliced into 40 chunks
│   └── translations/         # i18n strings (en + es)
├── lib/
│   ├── db.ts                 # better-sqlite3 singleton + schema bootstrap
│   ├── lessons-repo.ts       # lesson + exercise queries
│   ├── points.ts             # points economy (base / streak / first-try)
│   ├── translate.ts          # i18n lookup
│   └── seed.ts               # CLI to (re)seed the database
├── pages/
│   ├── index.astro           # landing page
│   ├── lessons/              # /lessons + /lessons/[slug]
│   └── vocabulary/           # /vocabulary (chunk index)
├── styles/global.css         # Tailwind v4 + design tokens + keyframes
└── types.ts                  # shared TS types
data/                         # SQLite file lives here at runtime
```

## Local development

You'll need **Node 22.12.0+** and **pnpm 10** (the repo's `packageManager` field
is pinned; Corepack will install the right version automatically).

Keep `package.json` and `pnpm-lock.yaml` together when changing dependencies.
Use `pnpm add -w` for production packages or `pnpm add -Dw` for development
packages, then commit both files. CI and Docker install with
`pnpm install --frozen-lockfile`. TypeScript stays on major 6 because the current
`astro check` does not support TypeScript 7.

The [Astro 7 migration guide](https://docs.astro.build/en/guides/upgrade-to/v7/)
changes the default whitespace handling; `astro.config.mjs` explicitly keeps
`compressHTML: true` to preserve existing spacing. The project uses plain
`motion` elements and `AnimatePresence`, so the
[Motion upgrade guide](https://motion.dev/docs/react-upgrade-guide)
requires no component API migration for the move to Framer Motion 14.

```bash
# 1. Install dependencies
pnpm install --frozen-lockfile

# 2. Seed the SQLite database (creates data/english.db from content/)
pnpm db:seed

# 3. Start the dev server
pnpm dev          # → http://localhost:4321

# Optional: validate every exercise against its own contract
pnpm validate

# Optional: type-check the whole project
pnpm typecheck
```

The first request after `db:seed` bootstraps the schema if it's missing.
`data/english.db` is gitignored.

## Production build

```bash
pnpm build         # → dist/server/entry.mjs
node ./dist/server/entry.mjs
```

The Node adapter reads `HOST` and `PORT` from the environment (defaults to
`0.0.0.0` and `4321`). The Astro app talks to `data/english.db` at runtime,
relative to the working directory — so make sure `data/` is writable by the
process user.

## Database

The schema lives in `src/lib/schema.sql` and is applied idempotently on
first contact by `getDb()`. Two main tables:

- `lessons` — every published lesson (grammar topics + vocab chunks share
  this table; chunks are identified by the `vocab-chunk-NN` slug
  convention).
- `exercises` — exercises belonging to a lesson, with `data_json` /
  `answer_json` blobs and a `points` column for the points economy.
- `translations` — locale-keyed strings referenced by `*.Key` columns on
  lessons and exercises.

To rebuild from scratch:

```bash
rm -rf data
pnpm db:seed
```

## Deployment (Railway)

`pnpm build` now checks production startup with `pnpm verify:runtime` after
compilation. The Docker image runs this check again after pruning development
dependencies and removing source files, as the non-root runtime user. See
[deployment validation](docs/deployment.md) for the adapter compatibility fix
and the checks to run before deployment.

The repo ships a multi-stage `Dockerfile` (Node 22, pnpm 10, non-root
runtime user) and a `railway.toml` that wires it up:

- **Build:** `Dockerfile` (multi-stage — builder installs the native
  `better-sqlite3` module, runtime is a slim image with only production
  dependencies).
- **Start command:** `node ./dist/server/entry.mjs`.
- **Health check:** `GET /`.
- **Volume:** `/app/data` is mounted as a persistent Railway Volume named
  `english-volume` so the SQLite file survives redeploys.
- **Restart policy:** `ON_FAILURE` with up to 5 retries.

### One-time setup

1. Push the repo to GitHub.
2. In Railway, click **New Project → Deploy from GitHub repo** and pick it.
3. In the service settings, create a volume named `english-volume` and
   mount it at `/app/data`. (If you'd rather skip the manual step, the
   app will still run, but the database will reset on every redeploy.)
4. Set any required env vars (none today, but Railway injects `PORT`
   automatically and the Dockerfile binds `HOST=0.0.0.0`).
5. Deploy. The first request bootstraps the schema; the seed script is
   then run via `railway run pnpm db:seed` to load content.

### Custom domain

In the service settings → **Networking**, add your domain and follow the
DNS instructions Railway shows.

## License

This project is released under a **source-available, no-redistribution**
license — see [`LICENSE.md`](./LICENSE.md) for the full text. In short:

- ✅ You may view, run, and modify the code for personal study, evaluation,
  and non-commercial experimentation.
- ❌ You may **not** fork, mirror, republish, or redistribute this
  repository (in whole or in part) without the copyright holder's
  permission.
- Contributions submitted back to the original repo are welcome and
  licensed back to the project as described in the license file.
