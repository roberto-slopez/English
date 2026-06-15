// Postgres connection singleton. The DDL lives in src/lib/schema.sql
// and is inlined as a string at build time via Vite's ?raw import; the
// schema is created idempotently on first connection (every DDL uses
// IF NOT EXISTS).
//
// Connection string comes from process.env.DATABASE_URL — Railway
// injects it automatically when the SSR service is linked to the
// Postgres plugin. Locally, paste the URL into .env (never commit it).

import { Pool, type PoolClient } from 'pg';
import schemaSql from './schema.sql?raw';

let _pool: Pool | null = null;
let _schemaReady: Promise<void> | null = null;

function getConnectionString(): string {
  const url = process.env.DATABASE_URL;
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
 * Runs the inlined DDL once. Guarded by a module-level promise so
 * concurrent first-callers share a single bootstrap. Safe to call from
 * any public read function or transaction.
 */
export async function ensureSchema(): Promise<void> {
  if (_schemaReady) return _schemaReady;
  _schemaReady = (async () => {
    const client = await getPool().connect();
    try {
      await client.query(schemaSql);
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
