/** In-memory aggregate telemetry. Never record URLs, SQL, values, or error messages. */
export type DatabaseOperation = 'database.query' | 'schema' | 'transaction' | 'seed.write' |
  'lesson.list' | 'lesson.detail' | 'exercise.list' | 'vocabulary.next' | 'translation.lookup' | 'health.ready' | 'pool.error';

interface Timing { count: number; errors: number; totalMs: number; maxMs: number; }
const database = new Map<DatabaseOperation, Timing>();
const http = new Map<number, Timing>();
let lastReportAt = -Infinity;
export type WebVitalName = 'LCP' | 'INP' | 'CLS';
interface VitalDistribution { count: number; sum: number; max: number; good: number; needsImprovement: number; poor: number; }
const vitals: Record<WebVitalName, VitalDistribution> = {
  LCP: { count: 0, sum: 0, max: 0, good: 0, needsImprovement: 0, poor: 0 },
  INP: { count: 0, sum: 0, max: 0, good: 0, needsImprovement: 0, poor: 0 },
  CLS: { count: 0, sum: 0, max: 0, good: 0, needsImprovement: 0, poor: 0 },
};

export function recordWebVital(name: WebVitalName, value: number): void {
  if (!Number.isFinite(value) || value < 0 || !Object.hasOwn(vitals, name)) return;
  const thresholds: Record<WebVitalName, [number, number]> = { LCP: [2500, 4000], INP: [200, 500], CLS: [0.1, 0.25] };
  const entry = vitals[name];
  entry.count++;
  entry.sum += value;
  entry.max = Math.max(entry.max, value);
  const [good, poor] = thresholds[name];
  if (value <= good) entry.good++;
  else if (value <= poor) entry.needsImprovement++;
  else entry.poor++;
}

function add<K>(map: Map<K, Timing>, key: K, duration: number, failed: boolean): void {
  const timing = map.get(key) ?? { count: 0, errors: 0, totalMs: 0, maxMs: 0 };
  const ms = Number.isFinite(duration) ? Math.max(0, duration) : 0;
  timing.count++;
  timing.errors += Number(failed);
  timing.totalMs += ms;
  timing.maxMs = Math.max(timing.maxMs, ms);
  map.set(key, timing);
}

export function safeErrorCode(error: unknown): string {
  const code = error && typeof error === 'object' && 'code' in error ? (error as { code: unknown }).code : undefined;
  return typeof code === 'string' && /^[A-Z0-9_]{2,24}$/.test(code) ? code : 'UNAVAILABLE';
}

export function recordDatabaseQuery(operation: DatabaseOperation, durationMs: number, error?: unknown): void {
  add(database, operation, durationMs, error !== undefined);
  if (error !== undefined) console.error(JSON.stringify({ event: 'database.error', operation, code: safeErrorCode(error) }));
}

export function recordHttpRequest(status: number, durationMs: number): void {
  const family = Math.max(1, Math.min(5, Math.floor(status / 100)));
  add(http, family, durationMs, status >= 500);
  if (status >= 500) console.error(JSON.stringify({ event: 'http.server_error', status, durationMs: Math.round(durationMs) }));
}

export function getServerMetrics(): { database: Record<string, Timing>; http: Record<string, Timing>; vitals: Record<WebVitalName, VitalDistribution> } {
  return structuredClone({ database: Object.fromEntries(database), http: Object.fromEntries(http), vitals });
}

/** Traffic-driven summaries: fixed cardinality, no timers and at most one log/minute. */
export function flushServerMetrics(): void {
  const now = Date.now();
  if (now - lastReportAt < 60_000) return;
  lastReportAt = now;
  console.info(JSON.stringify({ event: 'performance.summary', ...getServerMetrics() }));
}
