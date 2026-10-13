import assert from 'node:assert/strict';
import { test, mock } from 'node:test';
import { getPool } from '../src/lib/db.js';
import { tMany, lookupTranslation, resolveI18n } from '../src/lib/translate.js';
import { GET } from '../src/pages/api/translate.js';
import type { APIContext } from 'astro';
import { getLessonBySlug } from '../src/lib/lessons-repo.js';
import { lesson as conditionals } from '../src/content/lessons/conditionals-all.js';
import { getTranslationRows } from '../src/content/translations/catalog.js';

// No network access: every database query in these regression tests is mocked.
process.env.DATABASE_URL = 'postgres://test:test@localhost:5432/test';

test('a missing database row does not expose the conditional prompt key', async () => {
  const query = mock.method(getPool(), 'query', async () => ({ rows: [] }));
  try {
    const key = 'exercise.conditionals-all.2.prompt';
    const result = await tMany([key], 'en');
    assert.equal(result.get(key), 'Choose the correct First Conditional sentence:');
  } finally {
    query.mock.restore();
  }
});

// Characterization checks protect the refactor's existing integration behavior.
test('database-only translations still use locale priority and ignore empty values', async () => {
  const query = mock.method(getPool(), 'query', async (_sql: string, params: unknown[]) => ({
    rows: [{ key: 'custom.prompt', value: params[1] === 'es' ? '  ' : 'Custom English prompt' }],
  }));
  try {
    const result = await lookupTranslation('custom.prompt', 'es');
    assert.equal(result?.value, 'Custom English prompt');
    assert.equal(result?.resolvedLocale, 'en');
    assert.equal(result?.fallback, true);
    assert.equal(result?.source, 'database');
    assert.equal(query.mock.callCount(), 2);
  } finally {
    query.mock.restore();
  }
});

test('an authored Spanish prompt uses no database query and beats stale seed data', async () => {
  const query = mock.method(getPool(), 'query', async () => {
    throw new Error('An authored prompt must not need the database');
  });
  try {
    const result = await lookupTranslation('exercise.conditionals-all.2.prompt', 'es');
    assert.equal(result?.value, 'Elige la oración correcta de Primer Condicional:');
    assert.equal(result?.fallback, false);
    assert.equal(query.mock.callCount(), 0);
    assert.equal((await tMany([], 'es')).size, 0);
  } finally {
    query.mock.restore();
  }
});

test('lesson loading carries resolved prompts, feedback, and untouched English choices to the runner', async () => {
  const exercise = conditionals.exercises[1]!;
  const query = mock.method(getPool(), 'query', async (sql: string) => {
    if (sql.includes('SELECT * FROM lessons')) return { rows: [{
      id: 9, slug: conditionals.slug, title_key: conditionals.titleKey,
      description_key: conditionals.descriptionKey, order_index: 9, is_published: 1, created_at: '',
    }] };
    if (sql.includes('SELECT * FROM exercises')) return { rows: [{
      id: 2, lesson_id: 9, order_index: 2, type: exercise.type,
      prompt_key: exercise.promptKey, data_json: JSON.stringify(exercise.data),
      answer_json: JSON.stringify(exercise.answer), explanation_key: exercise.explanationKey,
      pro_tip_key: exercise.proTipKey, points: 1,
    }] };
    return { rows: [] };
  });
  const connect = mock.method(getPool(), 'connect', async () => ({ query: async () => ({ rows: [] }), release() {} }));
  try {
    const en = await getLessonBySlug(conditionals.slug, 'en');
    const es = await getLessonBySlug(conditionals.slug, 'es');
    assert.equal(en?.translations[exercise.promptKey], 'Choose the correct First Conditional sentence:');
    assert.equal(es?.translations[exercise.promptKey], 'Elige la oración correcta de Primer Condicional:');
    assert.ok(en?.translations[exercise.explanationKey!]);
    assert.ok(es?.translations[exercise.proTipKey!]);
    assert.deepEqual(en?.exercises[0]?.data, exercise.data);
    assert.deepEqual(es?.exercises[0]?.data, exercise.data);
  } finally {
    query.mock.restore();
    connect.mock.restore();
  }
});

test('nested tokens resolve without mutating exercise content or exposing missing keys', () => {
  const content = { items: ['Text {{i18n:known}}', { text: '{{i18n:unknown}}' }], count: 3 };
  const resolved = resolveI18n(content, 'es', new Map([['known', 'traducido']]));
  assert.deepEqual(resolved, { items: ['Text traducido', { text: '' }], count: 3 });
  assert.equal(content.items[0], 'Text {{i18n:known}}');
});

test('seed rows are unique and preserve specific authored feedback over generated defaults', () => {
  const rows = getTranslationRows();
  assert.equal(new Set(rows.map(([key, locale]) => `${locale}:${key}`)).size, rows.length);
  assert.ok(rows.every(([key, , value]) => key && value.trim() && value !== key));
  assert.equal(rows.find(([key, locale]) => key === 'exercise.conditionals-all.2.prompt' && locale === 'en')?.[2],
    'Choose the correct First Conditional sentence:');
});

test('invalid translation requests are rejected before database access', async () => {
  const query = mock.method(getPool(), 'query', async () => { throw new Error('Unexpected query'); });
  try {
    const response = await GET({ url: new URL('http://localhost/api/translate?key=&locale=es') } as APIContext);
    assert.equal(response.status, 400);
    assert.equal(query.mock.callCount(), 0);
  } finally {
    query.mock.restore();
  }
});

test('an old English database copy is identified as fallback, not a Chinese translation', async () => {
  const key = 'exercise.conditionals-all.2.prompt';
  const query = mock.method(getPool(), 'query', async () => ({
    rows: [{ key, value: 'Choose the correct First Conditional sentence:' }],
  }));
  try {
    const response = await GET({ url: new URL(`http://localhost/api/translate?key=${key}&locale=zh`) } as APIContext);
    const data = await response.json();
    assert.equal(data.fallback, true);
    assert.equal(data.resolvedLocale, 'en');
  } finally {
    query.mock.restore();
  }
});

test('the translation API returns 404 instead of caching an internal key as text', async () => {
  const query = mock.method(getPool(), 'query', async () => ({ rows: [] }));
  try {
    const response = await GET({ url: new URL('http://localhost/api/translate?key=exercise.unknown.prompt&locale=es') } as APIContext);
    assert.equal(response.status, 404);
    assert.equal(response.headers.get('cache-control'), 'no-store');
  } finally {
    query.mock.restore();
  }
});

test('generated vocabulary translations also survive missing database rows', async () => {
  const query = mock.method(getPool(), 'query', async () => ({ rows: [] }));
  try {
    const result = await tMany(['vocab.vocab-chunk-01.1.prompt'], 'es');
    assert.match(result.get('vocab.vocab-chunk-01.1.prompt') ?? '', /¿Qué palabra significa:/);
  } finally {
    query.mock.restore();
  }
});
