import assert from 'node:assert/strict';
import { test, mock } from 'node:test';
import type { PoolClient } from 'pg';
import * as seedModule from '../src/lib/seed.js';
import { lesson as conditionals } from '../src/content/lessons/conditionals-all.js';
import { getPool, ensureSchema, closePool } from '../src/lib/db.js';
import * as dbModule from '../src/lib/db.js';
import { getServerMetrics } from '../src/lib/server-metrics.js';
import * as metricsModule from '../src/lib/server-metrics.js';
import { health } from '../src/lib/health.js';
import { onRequest } from '../src/middleware.js';
import type { APIContext } from 'astro';
import { listLessons, getLessonBySlug } from '../src/lib/lessons-repo.js';
import * as lessonsModule from '../src/lib/lessons-repo.js';
import { invalidateContentCache, ContentCache } from '../src/lib/content-cache.js';

process.env.DATABASE_URL = 'postgres://test:test@localhost:5432/test';

test('normal seeding updates stable natural keys without deleting existing content or IDs', async () => {
  const queries: Array<{ sql: string; params: unknown[] }> = [];
  const client = { query: async (sql: string, params: unknown[] = []) => {
    queries.push({ sql, params });
    return { rows: sql.includes('SELECT id, slug') ? [{ id: 42, slug: conditionals.slug }] : [] };
  } } as unknown as PoolClient;
  const seedContent = (seedModule as Record<string, unknown>).seedContent as
    (client: PoolClient, options: { lessons: typeof conditionals[]; translations: string[][] }) => Promise<unknown>;
  await seedContent(client, { lessons: [conditionals], translations: [['custom.prompt', 'en', 'Hello']] });
  assert.ok(queries.every(({ sql }) => !/DELETE|TRUNCATE|RESTART IDENTITY/i.test(sql)));
  assert.ok(queries.some(({ sql }) => /ON CONFLICT \(slug\) DO UPDATE/i.test(sql)));
  assert.ok(queries.some(({ sql, params }) => /ON CONFLICT \(lesson_id, prompt_key\) DO UPDATE/i.test(sql) && params[0] === 42));
  assert.ok(queries.some(({ sql }) => /ON CONFLICT \(key, locale\) DO UPDATE/i.test(sql)));
  assert.ok(queries.every(({ sql }) => !/SET\s+id\s*=/i.test(sql)));
});

test('request middleware reports response timing and counts safe 5xx failures', async () => {
  const before = getServerMetrics().http['5']?.count ?? 0;
  const log = mock.method(console, 'error', () => {});
  try {
    const response = await onRequest({} as APIContext, async () => new Response('Unavailable', { status: 503 }));
    assert.equal(response!.status, 503);
    assert.match(response!.headers.get('server-timing') ?? '', /app;dur=\d/);
    await assert.rejects(Promise.resolve(onRequest({} as APIContext, async () => { throw new Error('private request content'); })));
    assert.equal(getServerMetrics().http['5']!.count - before, 2);
    assert.ok(!JSON.stringify(log.mock.calls).includes('private request content'));
  } finally { log.mock.restore(); }
});

test('Core Web Vitals telemetry stores only three bounded aggregate distributions', () => {
  const record = (metricsModule as Record<string, unknown>).recordWebVital as (name: string, value: number) => void;
  record('LCP', 1000); record('LCP', 3000); record('LCP', 5000);
  record('INP', 100); record('CLS', 0.3);
  record('LCP', NaN); record('LCP', -1); record('unknown', 9000);
  const vitals = (getServerMetrics() as unknown as { vitals: Record<string, { count: number; good: number; needsImprovement: number; poor: number }> }).vitals;
  assert.equal(Object.keys(vitals).length, 3);
  assert.equal(vitals.LCP?.count, 3);
  assert.deepEqual([vitals.LCP?.good, vitals.LCP?.needsImprovement, vitals.LCP?.poor], [1, 1, 1]);
  assert.equal(vitals.INP?.good, 1);
  assert.equal(vitals.CLS?.poor, 1);
});

test('liveness is available without database access or schema writes', async () => {
  const query = mock.method(getPool(), 'query', async () => { throw new Error('Liveness must not use the DB'); });
  const connect = mock.method(getPool(), 'connect', async () => { throw new Error('Liveness must not initialize schema'); });
  try {
    const response = await health.live!();
    assert.equal(response.status, 200);
    assert.deepEqual(await response.json(), { status: 'ok' });
    assert.equal(response.headers.get('cache-control'), 'no-store');
    assert.equal(query.mock.callCount() + connect.mock.callCount(), 0);
  } finally { query.mock.restore(); connect.mock.restore(); }
});

test('readiness checks published content with SELECT only and returns safe 503s on failure', async () => {
  let state: 'empty' | 'ready' | 'failed' = 'empty';
  const query = mock.method(getPool(), 'query', async () => {
    if (state === 'failed') throw Object.assign(new Error('postgres://private:secret@db/customer'), { code: '08006' });
    return { rows: state === 'ready' ? [{ ok: 1 }] : [] };
  });
  const connect = mock.method(getPool(), 'connect', async () => { throw new Error('Readiness must not write schema'); });
  const log = mock.method(console, 'error', () => {});
  try {
    assert.equal((await health.ready()).status, 503);
    state = 'ready';
    assert.equal((await health.ready()).status, 200);
    state = 'failed';
    const failure = await health.ready();
    assert.equal(failure.status, 503);
    assert.equal(failure.headers.get('cache-control'), 'no-store');
    assert.deepEqual(await failure.json(), { status: 'unavailable' });
    assert.equal(connect.mock.callCount(), 0);
    assert.ok(query.mock.calls.every(call => /^SELECT\b/.test(String(call.arguments[0]))));
    assert.ok(!JSON.stringify(log.mock.calls).includes('private:secret'));
  } finally { query.mock.restore(); connect.mock.restore(); log.mock.restore(); }
});

test('database query metrics record outcomes and durations without SQL, values or raw errors', async () => {
  const before = getServerMetrics().database['database.query']?.count ?? 0;
  let calls = 0;
  const query = mock.method(getPool(), 'query', async () => {
    if (++calls === 2) throw Object.assign(new Error('customer-secret in postgres://private'), { code: '08006' });
    return { rows: [{ ok: 1 }] };
  });
  const log = mock.method(console, 'error', () => {});
  try {
    const queryDb = (dbModule as Record<string, unknown>).queryDb as
      (sql: string, values?: unknown[]) => Promise<{ rows: unknown[] }>;
    assert.deepEqual((await queryDb('SELECT $1 AS customer-secret', ['private-value'])).rows, [{ ok: 1 }]);
    await assert.rejects(queryDb('SELECT $1', ['private-value']));
    const metrics = getServerMetrics().database['database.query']!;
    assert.equal(metrics.count - before, 2);
    assert.ok(metrics.errors > 0 && metrics.totalMs >= 0);
    const diagnostic = JSON.stringify({ metrics: getServerMetrics(), logs: log.mock.calls });
    assert.ok(!/customer-secret|private-value|postgres:\/\//.test(diagnostic));
  } finally { query.mock.restore(); log.mock.restore(); }
});

test('lesson details parse exercise JSON once and cache independent localized snapshots', async () => {
  invalidateContentCache();
  const exercise = conditionals.exercises[1]!;
  const dataJson = JSON.stringify(exercise.data);
  const answerJson = JSON.stringify(exercise.answer);
  const query = mock.method(getPool(), 'query', async (sql: string) => ({ rows: sql.includes('SELECT * FROM lessons') ? [{
    id: 42, slug: conditionals.slug, title_key: conditionals.titleKey, description_key: conditionals.descriptionKey,
    order_index: 9, is_published: 1, created_at: '',
  }] : [{ id: 2, lesson_id: 42, type: exercise.type, order_index: 2, prompt_key: exercise.promptKey,
    data_json: dataJson, answer_json: answerJson, explanation_key: exercise.explanationKey, pro_tip_key: exercise.proTipKey, points: 1 }] }));
  const connect = mock.method(getPool(), 'connect', async () => ({ query: async () => ({ rows: [] }), release() {} }));
  const originalParse = JSON.parse;
  let dataParses = 0;
  const parse = mock.method(JSON, 'parse', (value: string) => {
    if (value === dataJson) dataParses++;
    return originalParse(value);
  });
  try {
    const [first, second] = await Promise.all([getLessonBySlug(conditionals.slug, 'en'), getLessonBySlug(conditionals.slug, 'en')]);
    assert.equal(dataParses, 1);
    assert.equal(query.mock.callCount(), 2);
    first!.exercises.length = 0;
    assert.equal(second!.exercises.length, 1);
  } finally { query.mock.restore(); connect.mock.restore(); parse.mock.restore(); invalidateContentCache(); }
});

test('next vocabulary lookup loads only the next published chunk and caches by locale and slug', async () => {
  invalidateContentCache();
  const connect = mock.method(getPool(), 'connect', async () => ({ query: async () => ({ rows: [] }), release() {} }));
  const query = mock.method(getPool(), 'query', async () => ({ rows: [{
    id: 1002, slug: 'vocab-chunk-02', title_key: conditionals.titleKey,
    description_key: conditionals.descriptionKey, count: 6,
  }] }));
  try {
    const getNext = (lessonsModule as Record<string, unknown>).getNextVocabularyLesson as
      (slug: string, locale: string) => Promise<{ slug: string } | null>;
    assert.equal((await getNext('vocab-chunk-01', 'en'))?.slug, 'vocab-chunk-02');
    assert.equal((await getNext('vocab-chunk-01', 'en'))?.slug, 'vocab-chunk-02');
    assert.equal(await getNext('conditionals-all', 'en'), null);
    assert.equal(query.mock.callCount(), 1);
    assert.match(String(query.mock.calls[0]?.arguments[0]), /LIMIT 1/);
    assert.deepEqual(query.mock.calls[0]?.arguments[1], ['vocab-chunk-01']);
  } finally { query.mock.restore(); connect.mock.restore(); invalidateContentCache(); }
});

test('concurrent lesson lists share a bounded locale cache and callers cannot mutate cached content', async () => {
  invalidateContentCache();
  const query = mock.method(getPool(), 'query', async () => ({ rows: [{
    id: 42, slug: conditionals.slug, title_key: conditionals.titleKey,
    description_key: conditionals.descriptionKey, order_index: 9, is_published: 1,
    created_at: '', count: 2,
  }] }));
  const connect = mock.method(getPool(), 'connect', async () => ({ query: async () => ({ rows: [] }), release() {} }));
  try {
    const [first, second] = await Promise.all([listLessons('es'), listLessons('es')]);
    assert.equal(query.mock.callCount(), 1);
    first[0]!.title = 'mutated';
    assert.notEqual(second[0]!.title, 'mutated');
    assert.notEqual((await listLessons('es'))[0]!.title, 'mutated');
    assert.equal(query.mock.callCount(), 1);
  } finally { query.mock.restore(); connect.mock.restore(); }
});

test('grammar and vocabulary lists filter in SQL and use separate cache keys', async () => {
  invalidateContentCache();
  const query = mock.method(getPool(), 'query', async () => ({ rows: [] }));
  try {
    await listLessons('en', { category: 'grammar' });
    await listLessons('en', { category: 'vocabulary' });
    assert.equal(query.mock.callCount(), 2);
    const [grammar, vocabulary] = query.mock.calls;
    assert.match(String(grammar?.arguments[0]), /slug NOT LIKE \$1/);
    assert.match(String(vocabulary?.arguments[0]), /slug LIKE \$1/);
    assert.match(String(grammar?.arguments[0]), /AND l.slug NOT LIKE \$2/);
    assert.match(String(vocabulary?.arguments[0]), /OR l.slug LIKE \$2/);
    assert.deepEqual(grammar?.arguments[1], ['vocab-chunk-%', 'class-vocab-%']);
    assert.deepEqual(vocabulary?.arguments[1], ['vocab-chunk-%', 'class-vocab-%']);
  } finally { query.mock.restore(); invalidateContentCache(); }
});

test('a temporary schema connection failure does not poison future requests', async () => {
  await closePool();
  let calls = 0;
  let releases = 0;
  const connect = mock.method(getPool(), 'connect', async () => {
    if (++calls === 1) throw new Error('temporarily unavailable');
    return { query: async () => ({ rows: [] }), release() { releases++; } };
  });
  try {
    await assert.rejects(ensureSchema(), /temporarily unavailable/);
    await ensureSchema();
    assert.equal(calls, 2);
    assert.equal(releases, 1);
  } finally { connect.mock.restore(); await closePool(); }
});

test('the pool bounds connection/query waits and handles idle errors without logging secrets', async () => {
  await closePool();
  const pool = getPool();
  const log = mock.method(console, 'error', () => {});
  try {
    const options = pool.options;
    assert.ok(options.connectionTimeoutMillis! > 0 && options.connectionTimeoutMillis! <= 10_000);
    assert.ok(options.query_timeout! > 0 && options.query_timeout! <= 15_000);
    assert.ok(typeof options.statement_timeout === 'number' && options.statement_timeout > 0);
    assert.doesNotThrow(() => pool.emit('error', Object.assign(new Error('postgres://private:secret@db/customer'), { code: 'ECONNRESET' })));
    assert.equal(log.mock.callCount(), 1);
    assert.ok(!JSON.stringify(log.mock.calls).includes('private:secret'));
  } finally { log.mock.restore(); await closePool(); }
});

test('schema migrations roll back atomically and retry without rebuilding content IDs', async () => {
  await closePool();
  let fail = true;
  let releases = 0;
  const statements: string[] = [];
  const connect = mock.method(getPool(), 'connect', async () => ({
    query: async (sql: string) => {
      statements.push(sql);
      if (sql.includes('CREATE TABLE') && fail) throw new Error('migration failed');
      return { rows: [] };
    }, release() { releases++; },
  }));
  const log = mock.method(console, 'error', () => {});
  try {
    await assert.rejects(ensureSchema(), /migration failed/);
    assert.ok(statements.includes('BEGIN') && statements.includes('ROLLBACK'));
    assert.ok(!statements.includes('COMMIT'));
    fail = false;
    await ensureSchema();
    assert.ok(statements.includes('COMMIT'));
    assert.ok(!statements.some(sql => /DROP TABLE|TRUNCATE|DELETE FROM|RESTART IDENTITY/.test(sql)));
    assert.equal(releases, 2);
  } finally { log.mock.restore(); connect.mock.restore(); await closePool(); }
});

test('content cache expires, evicts, retries rejected loads, and cannot resurrect invalidated data', async () => {
  let time = 0;
  let calls = 0;
  const cache = new ContentCache(2, 100, () => time);
  const load = async () => ({ value: ++calls });
  assert.deepEqual(await cache.getOrLoad('a', load), { value: 1 });
  assert.deepEqual(await cache.getOrLoad('a', load), { value: 1 });
  time = 101;
  assert.deepEqual(await cache.getOrLoad('a', load), { value: 2 });
  await cache.getOrLoad('b', load); await cache.getOrLoad('c', load);
  assert.equal(cache.size, 2);
  assert.deepEqual(await cache.getOrLoad('a', load), { value: 5 });
  await assert.rejects(cache.getOrLoad('failed', async () => { throw new Error('offline'); }));
  assert.equal(await cache.getOrLoad('failed', async () => 'recovered'), 'recovered');
  let resolve!: (value: string) => void;
  const pending = cache.getOrLoad('slow', () => new Promise<string>(done => { resolve = done; }));
  await Promise.resolve();
  cache.clear(); resolve('old');
  await pending;
  assert.equal(await cache.getOrLoad('slow', async () => 'new'), 'new');
});

test('performance summaries expose aggregates at most once per minute', () => {
  let time = 1_000_000_000_000_000;
  const clock = mock.method(Date, 'now', () => time);
  const log = mock.method(console, 'info', () => {});
  try {
    const flush = (metricsModule as Record<string, unknown>).flushServerMetrics as () => void;
    flush(); flush();
    assert.equal(log.mock.callCount(), 1);
    time += 60_001; flush();
    assert.equal(log.mock.callCount(), 2);
    const report = JSON.parse(String(log.mock.calls[0]?.arguments[0]));
    assert.equal(report.event, 'performance.summary');
    assert.ok(report.vitals.LCP && report.http && report.database);
    assert.ok(!/postgres:\/\/|private-value|customer-secret/.test(JSON.stringify(report)));
  } finally { clock.mock.restore(); log.mock.restore(); }
});
