import type { Exercise } from '../types.js';

export type AnswerState = 'correct' | 'wrong' | 'skipped';
export interface SessionResult { key: string; correct: boolean; points: number }
export interface LearningProgress {
  version: 2; completed: number; total: number; updatedAt: number;
  lastAnswers: Record<string, AnswerState>; attempts: Record<string, number>;
  mastered: string[];
  session: { id: string; order: string[]; index: number; results: SessionResult[];
    feedback: 'correct' | 'wrong' | null; lastPoints: { awarded: number; base: number; firstTry: number; streak: number } | null;
    draft: unknown; finished: boolean; points: number };
}
const keyFor = (slug: string) => `english.progress.${slug}`;
const record = (v: unknown): Record<string, unknown> => v && typeof v === 'object' && !Array.isArray(v) ? v as Record<string, unknown> : {};
const count = (v: unknown) => typeof v === 'number' && Number.isSafeInteger(v) && v >= 0 ? v : 0;
export function newProgress(exercises: Pick<Exercise, 'promptKey'>[], mastered: string[] = []): LearningProgress {
  const order = exercises.map(e => e.promptKey);
  return { version: 2, completed: mastered.length, total: order.length, updatedAt: 0, mastered,
    lastAnswers: {}, attempts: {}, session: { id: typeof crypto !== 'undefined' ? crypto.randomUUID() : `${Date.now()}-${Math.random()}`,
      order, index: 0, results: [], feedback: null, lastPoints: null, draft: null, finished: false, points: 0 } };
}
/** Numeric legacy IDs migrate when they still exist; unknown IDs are never guessed. */
export function restoreProgress(raw: unknown, exercises: Pick<Exercise, 'id' | 'promptKey'>[]): LearningProgress {
  const source = record(raw), next = newProgress(exercises), valid = new Set(next.session.order);
  const mapKey = (key: string) => valid.has(key) ? key : exercises.find(e => String(e.id) === key)?.promptKey;
  for (const [key, value] of Object.entries(record(source.lastAnswers))) {
    const mapped = mapKey(key);
    if (mapped && ['correct', 'wrong', 'skipped'].includes(String(value))) next.lastAnswers[mapped] = value as AnswerState;
  }
  for (const [key, value] of Object.entries(record(source.attempts))) {
    const mapped = mapKey(key);
    if (mapped) next.attempts[mapped] = count(value);
  }
  next.mastered = [...new Set([
    ...(Array.isArray(source.mastered) ? source.mastered.filter((v): v is string => typeof v === 'string' && valid.has(v)) : []),
    ...Object.keys(next.lastAnswers).filter(key => next.lastAnswers[key] === 'correct'),
  ])];
  next.completed = next.mastered.length;
  next.updatedAt = count(source.updatedAt);
  const saved = record(source.session);
  if (typeof saved.id === 'string' && Array.isArray(saved.order) && saved.order.length > 0 && saved.order.length <= valid.size && new Set(saved.order).size === saved.order.length && saved.order.every(k => typeof k === 'string' && valid.has(k))) {
    next.session = { ...next.session, id: saved.id, order: saved.order,
      index: Math.min(count(saved.index), Math.max(0, saved.order.length - 1)), finished: saved.finished === true,
      results: Array.isArray(saved.results) ? saved.results.filter((r): r is SessionResult => typeof r?.key === 'string' && valid.has(r.key) && typeof r.correct === 'boolean' && Number.isFinite(r.points) && r.points >= 0) : [],
      feedback: saved.feedback === 'correct' || saved.feedback === 'wrong' ? saved.feedback : null,
      draft: saved.draft ?? null, points: count(saved.points),
      lastPoints: saved.lastPoints && ['awarded','base','firstTry','streak'].every(k => Number.isFinite(record(saved.lastPoints)[k]) && Number(record(saved.lastPoints)[k]) >= 0) ? saved.lastPoints as LearningProgress['session']['lastPoints'] : null };
  }
  return next;
}
export function readProgress(slug: string, exercises: Pick<Exercise, 'id' | 'promptKey'>[]): LearningProgress {
  try { return restoreProgress(typeof localStorage === 'undefined' ? null : JSON.parse(localStorage.getItem(keyFor(slug)) ?? 'null'), exercises); }
  catch { return newProgress(exercises); }
}
export function writeProgress(slug: string, progress: LearningProgress): void {
  try {
    localStorage.setItem(keyFor(slug), JSON.stringify({ ...progress, updatedAt: Date.now() }));
    if (typeof window !== 'undefined' && typeof window.dispatchEvent === 'function') window.dispatchEvent(new CustomEvent('english:progress', { detail: { slug } }));
  } catch { /* Storage can be unavailable; the in-memory session remains usable. */ }
}
export function recordAttempt(progress: LearningProgress, key: string, correct: boolean): LearningProgress {
  const mastered = correct ? [...new Set([...progress.mastered, key])] : progress.mastered;
  return { ...progress, mastered, completed: mastered.length,
    attempts: { ...progress.attempts, [key]: (progress.attempts[key] ?? 0) + 1 },
    lastAnswers: { ...progress.lastAnswers, [key]: correct ? 'correct' : 'wrong' } };
}
/** Used by the shared DOM controller without loading the exercise payload. */
export function readProgressSummary(slug: string, total: number) {
  try {
    const p = record(JSON.parse(localStorage.getItem(keyFor(slug)) ?? 'null'));
    const completed = Array.isArray(p.mastered) ? new Set(p.mastered.filter(v => typeof v === 'string')).size : count(p.completed);
    return { completed: Math.min(completed, total), total, updatedAt: count(p.updatedAt), started: count(p.updatedAt) > 0 || completed > 0, finished: record(p.session).finished === true };
  } catch { return { completed: 0, total, updatedAt: 0, started: false, finished: false }; }
}
