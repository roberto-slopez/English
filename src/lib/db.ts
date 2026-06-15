// Postgres connection singleton. The DDL lives in src/lib/schema.sql
// and is created idempotently on first connection (every DDL uses
// IF NOT EXISTS).
//
// The DDL is loaded lazily on first call to ensureSchema():
//   - In Astro builds (Vite), the `?raw` import (see src/sql.d.ts)
//     inlines the file content as a string at build time — Astro
//     does not copy .sql files into the bundled output, so a runtime
//     fs read would fail.
//   - In tsx / plain Node (used by `pnpm db:seed` and `db:reset`),
//     the `?raw` suffix is unknown to Node's loader, so we fall
//     through to a filesystem read of the SQL file next to this
//     module.
//
// Connection string comes from process.env.DATABASE_URL — Railway
// injects it automatically when the SSR service is linked to the
// Postgres plugin. Locally, paste the URL into .env (never commit it).

import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { Pool, type PoolClient } from 'pg';

let _pool: Pool | null = null;
let _schemaReady: Promise<void> | null = null;
let _schemaSql: string | null = null;

function getConnectionString(): string {
  // Astro/Vite exposes server-side env vars via `import.meta.env`
  // (loaded from .env automatically in dev), but does NOT populate
  // `process.env` on the server. For scripts (tsx db:seed, prod
  // Node) we fall back to `process.env.DATABASE_URL`, which is
  // injected by Railway or by Node's --env-file flag.
  //
  // `import.meta.env` is Vite-injected; in plain Node (tsx scripts)
  // it is undefined, so we read it via optional chaining through a
  // narrow cast. The fallback to process.env keeps seed/reset and
  // production working.
  const fromVite = (import.meta as { env?: Record<string, string | undefined> })
    .env?.DATABASE_URL;
  const url = fromVite ?? process.env.DATABASE_URL;
  if (!url) {
    throw new Error(
      'DATABASE_URL is not set. On Railway, link the service to the Postgres plugin. ' +
        'Locally, put the URL in .env (DATABASE_URL=postgres://...).'
    );
  }
  return url;
}

/**
 * Returns the process-wide pg.Pool, lazy-initialized on first call.
 * `max: 10` is plenty for a single SSR instance; raise it if you start
 * running more concurrent requests than that.
 */
export function getPool(): Pool {
  if (_pool) return _pool;
  _pool = new Pool({
    connectionString: getConnectionString(),
    max: 10,
  });
  return _pool;
}

/**
 * Loads the DDL once, picking the right loader for the runtime:
 * Vite/Astro uses the `?raw` build-time inlining; tsx/Node reads
 * schema.sql from disk next to this module. Cached for the lifetime
 * of the process.
 */
async function loadSchemaSql(): Promise<string> {
  if (_schemaSql !== null) return _schemaSql;
  try {
    // Vite/Astro: `?raw` is replaced with the file content at build time.
    // The path is a string literal so Vite's analyzer catches it even
    // though the import is dynamic (needed so plain Node can ignore the
    // suffix and fall through to the fs read on catch).
    const mod = (await import('./schema.sql?raw')) as { default: string };
    _schemaSql = mod.default;
  } catch {
    // tsx / plain Node fallback. schema.sql lives next to this module.
    const here = dirname(fileURLToPath(import.meta.url));
    _schemaSql = readFileSync(join(here, 'schema.sql'), 'utf-8');
  }
  return _schemaSql;
}

/**
 * Runs the inlined DDL once. Guarded by a module-level promise so
 * concurrent first-callers share a single bootstrap. Safe to call from
 * any public read function or transaction.
 */
export async function ensureSchema(): Promise<void> {
  if (_schemaReady) return _schemaReady;
  _schemaReady = (async () => {
    const client = await getPool().connect();
    try {
      const sql = await loadSchemaSql();
      await client.query(sql);
    } finally {
      client.release();
    }
  })();
  return _schemaReady;
}

/**
 * Runs `fn` inside a single connection with BEGIN / COMMIT / ROLLBACK.
 * The connection is released back to the pool in `finally`, even on
 * errors. `fn` receives a dedicated `PoolClient` so all queries inside
 * it share the same transaction.
 *
 * Always invokes `ensureSchema()` first so the tables exist before the
 * caller starts INSERTing.
 */
export async function withTx<T>(fn: (client: PoolClient) => Promise<T>): Promise<T> {
  await ensureSchema();
  const client = await getPool().connect();
  try {
    await client.query('BEGIN');
    const result = await fn(client);
    await client.query('COMMIT');
    return result;
  } catch (err) {
    await client.query('ROLLBACK').catch(() => {
      // Connection may be in a bad state; release() below will return
      // it to the pool (and pg will discard it).
    });
    throw err;
  } finally {
    client.release();
  }
}

/**
 * Graceful shutdown — call from a SIGTERM handler in serverless
 * environments. Most Astro deployments don't need this (the platform
 * kills the process on shutdown), but it's here for the seed script
 * and for `pnpm dev`.
 */
export async function closePool(): Promise<void> {
  if (_pool) {
    const p = _pool;
    _pool = null;
    _schemaReady = null;
    await p.end();
  }
}
