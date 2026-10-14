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
import { Pool, type PoolClient, type QueryResult, type QueryResultRow } from 'pg';
import { recordDatabaseQuery, type DatabaseOperation } from './server-metrics.js';

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
  // Deployment variables take precedence over values loaded during a local build.
  const url = process.env.DATABASE_URL ?? fromVite;
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
    connectionTimeoutMillis: 5_000,
    idleTimeoutMillis: 30_000,
    query_timeout: 8_000,
    statement_timeout: 8_000,
  });
  _pool.on('error', error => recordDatabaseQuery('pool.error', 0, error));
  return _pool;
}

/** Parameterized query with bounded aggregate timing and redacted diagnostics. */
export async function queryDb<T extends QueryResultRow = QueryResultRow>(
  sql: string, params: unknown[] = [], operation: DatabaseOperation = 'database.query',
  client?: PoolClient
): Promise<QueryResult<T>> {
  const started = performance.now();
  try {
    const result = await (client ?? getPool()).query<T>(sql, params);
    recordDatabaseQuery(operation, performance.now() - started);
    return result;
  } catch (error) {
    recordDatabaseQuery(operation, performance.now() - started, error);
    throw error;
  }
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
  const pending = (async () => {
    const started = performance.now();
    let client: PoolClient;
    try { client = await getPool().connect(); }
    catch (error) { recordDatabaseQuery('schema', performance.now() - started, error); throw error; }
    let discard = false;
    try {
      await queryDb('BEGIN', [], 'transaction', client);
      // Serialize additive DDL between SSR replicas sharing this database.
      await queryDb('SELECT pg_advisory_xact_lock(1426417345)', [], 'schema', client);
      const sql = await loadSchemaSql();
      await queryDb(sql, [], 'schema', client);
      await queryDb('COMMIT', [], 'transaction', client);
    } catch (error) {
      await queryDb('ROLLBACK', [], 'transaction', client).catch(() => { discard = true; });
      throw error;
    } finally {
      client.release(discard);
    }
  })().catch(error => {
    if (_schemaReady === pending) _schemaReady = null;
    throw error;
  });
  _schemaReady = pending;
  return pending;
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
  let discard = false;
  try {
    await queryDb('BEGIN', [], 'transaction', client);
    const result = await fn(client);
    await queryDb('COMMIT', [], 'transaction', client);
    return result;
  } catch (err) {
    await queryDb('ROLLBACK', [], 'transaction', client).catch(() => { discard = true; });
    throw err;
  } finally {
    client.release(discard);
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
