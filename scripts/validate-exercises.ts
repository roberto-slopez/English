// Sanity-check every published exercise in the DB against its own contract.
//
// This is the regression net for the bugs we hit earlier: correctOrder arrays
// that didn't form a valid English sentence, matching pairs that referenced
// invalid indices, correctIndex out of bounds, etc. Catches them in CI /
// pre-deploy, not in production.
//
// What it checks (per exercise):
//   - fill_blank:  data.sentence is non-empty, answer.correct is non-empty
//                  and appears in data.options (or data.options is empty).
//   - multiple_choice: data.choices has >=2 items, answer.correctIndex is in
//                  range. (correctIndices not currently used.)
//   - drag_drop / sentence_reorder: data.tokens non-empty, answer.correctOrder
//                  is a permutation of [0..tokens.length-1] (no duplicates,
//                  no out-of-range indices, exact length match).
//   - true_false:  data.statement is non-empty.
//   - matching:    data.left and data.right non-empty, every answer.pairs
//                  reference valid indices, all leftIndices are unique.
//
// Exits with code 1 on any failure.

import { closePool, ensureSchema, getPool } from '../src/lib/db.js';
import type { ExerciseType } from '../src/types.js';

interface ExerciseRow {
  id: number;
  lesson_id: number;
  order_index: number;
  type: ExerciseType;
  data_json: string;
  answer_json: string;
  lesson_slug: string;
}

interface Issue {
  slug: string;
  exId: number;
  orderIndex: number;
  message: string;
}

const issues: Issue[] = [];

function fail(
  row: ExerciseRow,
  message: string
): void {
  issues.push({
    slug: row.lesson_slug,
    exId: row.id,
    orderIndex: row.order_index,
    message,
  });
}

function check(row: ExerciseRow): void {
  let data: any;
  let answer: any;
  try {
    data = JSON.parse(row.data_json);
    answer = JSON.parse(row.answer_json);
  } catch (e) {
    fail(row, `JSON parse failed: ${(e as Error).message}`);
    return;
  }

  switch (row.type) {
    case 'fill_blank': {
      if (typeof data?.sentence !== 'string' || data.sentence.trim() === '') {
        fail(row, 'fill_blank: data.sentence is empty');
      }
      if (typeof answer?.correct !== 'string' || answer.correct.trim() === '') {
        fail(row, 'fill_blank: answer.correct is empty');
      }
      if (Array.isArray(data?.options) && data.options.length > 0) {
        if (!data.options.includes(answer.correct)) {
          fail(
            row,
            `fill_blank: answer.correct "${answer.correct}" not in options [${data.options.join(', ')}]`
          );
        }
      }
      break;
    }

    case 'multiple_choice': {
      if (!Array.isArray(data?.choices) || data.choices.length < 2) {
        fail(row, 'multiple_choice: data.choices must have >=2 items');
        break;
      }
      if (typeof answer?.correctIndex !== 'number' && !Array.isArray(answer?.correctIndices)) {
        fail(row, 'multiple_choice: answer must have correctIndex or correctIndices');
        break;
      }
      if (typeof answer.correctIndex === 'number') {
        if (answer.correctIndex < 0 || answer.correctIndex >= data.choices.length) {
          fail(
            row,
            `multiple_choice: correctIndex ${answer.correctIndex} out of range (0..${data.choices.length - 1})`
          );
        }
      }
      break;
    }

    case 'drag_drop':
    case 'sentence_reorder': {
      if (!Array.isArray(data?.tokens) || data.tokens.length === 0) {
        fail(row, `${row.type}: data.tokens is empty`);
        break;
      }
      const order = answer?.correctOrder;
      if (!Array.isArray(order)) {
        fail(row, `${row.type}: answer.correctOrder missing or not an array`);
        break;
      }
      const n = data.tokens.length;
      if (order.length !== n) {
        fail(
          row,
          `${row.type}: correctOrder length ${order.length} != tokens length ${n}`
        );
        break;
      }
      const seen = new Set<number>();
      for (const idx of order) {
        if (!Number.isInteger(idx)) {
          fail(row, `${row.type}: correctOrder contains non-integer ${idx}`);
          break;
        }
        if (idx < 0 || idx >= n) {
          fail(row, `${row.type}: correctOrder index ${idx} out of range (0..${n - 1})`);
          break;
        }
        if (seen.has(idx)) {
          fail(row, `${row.type}: correctOrder contains duplicate index ${idx}`);
          break;
        }
        seen.add(idx);
      }
      break;
    }

    case 'true_false': {
      if (typeof data?.statement !== 'string' || data.statement.trim() === '') {
        fail(row, 'true_false: data.statement is empty');
      }
      if (typeof answer?.correct !== 'boolean') {
        fail(row, 'true_false: answer.correct must be boolean');
      }
      break;
    }

    case 'matching': {
      if (!Array.isArray(data?.left) || data.left.length === 0) {
        fail(row, 'matching: data.left is empty');
        break;
      }
      if (!Array.isArray(data?.right) || data.right.length === 0) {
        fail(row, 'matching: data.right is empty');
        break;
      }
      const pairs = answer?.pairs;
      if (!Array.isArray(pairs) || pairs.length !== data.left.length) {
        fail(
          row,
          `matching: answer.pairs length ${pairs?.length ?? '?'} != left length ${data.left.length}`
        );
        break;
      }
      const seenLeft = new Set<number>();
      for (const p of pairs) {
        if (typeof p?.leftIndex !== 'number' || typeof p?.rightIndex !== 'number') {
          fail(row, `matching: pair has invalid indices ${JSON.stringify(p)}`);
          continue;
        }
        if (p.leftIndex < 0 || p.leftIndex >= data.left.length) {
          fail(row, `matching: leftIndex ${p.leftIndex} out of range`);
        }
        if (p.rightIndex < 0 || p.rightIndex >= data.right.length) {
          fail(row, `matching: rightIndex ${p.rightIndex} out of range`);
        }
        if (seenLeft.has(p.leftIndex)) {
          fail(row, `matching: duplicate leftIndex ${p.leftIndex}`);
        }
        seenLeft.add(p.leftIndex);
      }
      break;
    }

    default:
      fail(row, `unknown exercise type "${row.type}"`);
  }
}

async function main(): Promise<void> {
  await ensureSchema();
  const { rows } = await getPool().query<ExerciseRow>(
    `SELECT e.*, l.slug AS lesson_slug
       FROM exercises e
       JOIN lessons l ON l.id = e.lesson_id
       WHERE l.is_published = 1
       ORDER BY l.order_index, e.order_index, e.id`
  );

  for (const row of rows) check(row);

  if (issues.length === 0) {
    console.log(`✓ Validated ${rows.length} exercises across all published lessons — no issues.`);
    await closePool();
    return;
  }

  console.error(`✗ Found ${issues.length} issue(s) across ${rows.length} exercises:`);
  for (const i of issues) {
    console.error(`  - [${i.slug}] E${i.orderIndex} (id=${i.exId}): ${i.message}`);
  }
  await closePool();
  process.exit(1);
}

main().catch(async (err) => {
  console.error('[validate-exercises] FAILED:', (err as Error).message);
  await closePool();
  process.exit(1);
});
