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
import type { Exercise, ExerciseType } from '../src/types.js';
import { ALL_LESSONS } from '../src/content/lessons.js';
import { validateAnswer } from '../src/lib/exercise-validation.js';

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

function checkSentenceGrammar(row: ExerciseRow, label: string, text: string): void {
  if (/\ba\s+(?:apple|umbrella|hour|honest|extrovert|introvert|unusual|accident|example|option|idiot|idea|issue|event|intern|engineer|artist|athlete|executive)\b/i.test(text)) {
    fail(row, `${label}: article 'a' before vowel sound in "${text}"`);
  }
  if (/\ban\s+[bcdfghjklmnpqrstvwxyz]/i.test(text) && !/\ban\s+(?:hour|honest|honor|heir)/i.test(text)) {
    fail(row, `${label}: article 'an' before consonant sound in "${text}"`);
  }
  if (/\b(?:we|they|you)\s+(?:was|has|does|is)\b/.test(text) && !/["“']/.test(text)) {
    fail(row, `${label}: subject-verb agreement error in "${text}"`);
  }
  if (/\bI\s+(?:is|are|has|does|were)\b/.test(text) && !/\b(?:if|wish)\b/i.test(text) && !/["“']/.test(text)) {
    fail(row, `${label}: subject-verb agreement error in "${text}"`);
  }
  if (
    /\b(?:he|she|it)\s+(?:were|have|do|are)\b/.test(text) &&
    !/\b(?:did|didn't|does|doesn't|will|won't|would|wouldn't|can|can't|could|couldn't|should|shouldn't|must|might|may|let|make|made|help|helped)\s+(?:he|she|it)\s+(?:have|do)\b/i.test(text) &&
    !/\b(?:if|wish|as if|as though|suppose)\b/i.test(text) &&
    !/["“']/.test(text)
  ) {
    fail(row, `${label}: subject-verb agreement error in "${text}"`);
  }
  if (/\bdid(?:\s+not|\s+n't|\s+\w+)?\s+(?:went|saw|ate|drank|wrote|spoke|took|made|drove|rode|ran|swam|gave|sang|began|chose|broke|wore|sold|bought|taught|brought|built|sent|spent|slept|kept|met|sat|studied|planned|stopped|danced|cooked|cleaned|worked|waited|carried|lay)\b/i.test(text)) {
    fail(row, `${label}: 'did' followed by past form in "${text}"`);
  }
  if (/\b(?:have|has|had)(?:\s+not|\s+n't)?\s+(?:went|saw|ate|drank|wrote|spoke|took|drove|rode|swam|gave|sang|began|chose|broke|wore)\b/i.test(text)) {
    fail(row, `${label}: 'have/has/had' followed by V2 instead of V3 in "${text}"`);
  }
  if (/\b(the|a|an|to|in|on|at|for|with|from|by|is|are|was|were|will|would|can|could|should|must)\s+\1\b/i.test(text)) {
    fail(row, `${label}: accidental double word in "${text}"`);
  }
  if (/\ba\s+fast-pace\b/i.test(text)) {
    fail(row, `${label}: hyphenated 'a fast-pace' should be 'a fast pace' in "${text}"`);
  }
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
        break;
      }
      if (!data.sentence.includes('____') && !data.sentence.includes('{{')) {
        fail(row, `fill_blank: data.sentence missing blank marker: "${data.sentence}"`);
      }
      if (typeof answer?.correct !== 'string' || answer.correct.trim() === '') {
        fail(row, 'fill_blank: answer.correct is empty');
        break;
      }
      if (Array.isArray(data?.options) && data.options.length > 0) {
        if (!data.options.includes(answer.correct)) {
          fail(
            row,
            `fill_blank: answer.correct "${answer.correct}" not in options [${data.options.join(', ')}]`
          );
        }
        if (new Set(data.options).size !== data.options.length) {
          fail(row, `fill_blank: duplicate options [${data.options.join(', ')}]`);
        }
      }
      if (/^____\s+[a-z]/.test(data.sentence) && /^[a-z]/.test(answer.correct)) {
        fail(row, `fill_blank: sentence-initial blank answer "${answer.correct}" should be capitalized`);
      }
      const filled = data.sentence.replace(/____|\{\{[^}]+\}\}/, answer.correct);
      checkSentenceGrammar(row, 'fill_blank', filled);
      break;
    }

    case 'multiple_choice': {
      if (!Array.isArray(data?.choices) || data.choices.length < 2) {
        fail(row, 'multiple_choice: data.choices must have >=2 items');
        break;
      }
      if (new Set(data.choices).size !== data.choices.length) {
        fail(row, `multiple_choice: duplicate choices [${data.choices.join(', ')}]`);
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
      let validOrder = true;
      for (const idx of order) {
        if (!Number.isInteger(idx)) {
          fail(row, `${row.type}: correctOrder contains non-integer ${idx}`);
          validOrder = false;
          break;
        }
        if (idx < 0 || idx >= n) {
          fail(row, `${row.type}: correctOrder index ${idx} out of range (0..${n - 1})`);
          validOrder = false;
          break;
        }
        if (seen.has(idx)) {
          fail(row, `${row.type}: correctOrder contains duplicate index ${idx}`);
          validOrder = false;
          break;
        }
        seen.add(idx);
      }
      if (validOrder) {
        const joined = order.map((i: number) => data.tokens[i]).join(' ');
        if (!/^[A-Z"“'¿¡]/.test(joined)) {
          fail(row, `${row.type}: ordered sentence does not start with capital letter: "${joined}"`);
        }
        checkSentenceGrammar(row, row.type, joined);
        // Verify duplicate-token permutations are accepted by validateAnswer
        for (let a = 0; a < n; a++) {
          for (let b = a + 1; b < n; b++) {
            if (data.tokens[order[a]] === data.tokens[order[b]]) {
              const swapped = [...order];
              swapped[a] = order[b]!;
              swapped[b] = order[a]!;
              const exObj = { type: row.type, data, answer } as unknown as Exercise;
              if (!validateAnswer(exObj, swapped)) {
                fail(row, `${row.type}: validateAnswer rejected valid duplicate-token permutation`);
              }
            }
          }
        }
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
      if (new Set(data.left).size !== data.left.length) {
        fail(row, 'matching: data.left contains duplicate labels');
      }
      if (new Set(data.right).size !== data.right.length) {
        fail(row, 'matching: data.right contains duplicate labels');
      }
      const seenLeft = new Set<number>();
      const seenRight = new Set<number>();
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
        if (seenRight.has(p.rightIndex)) {
          fail(row, `matching: duplicate rightIndex ${p.rightIndex}`);
        }
        seenLeft.add(p.leftIndex);
        seenRight.add(p.rightIndex);
      }
      break;
    }

    default:
      fail(row, `unknown exercise type "${row.type}"`);
  }
}

async function main(): Promise<void> {
  let rows: ExerciseRow[];
  if (process.argv.includes('--source')) {
    rows = ALL_LESSONS.flatMap(lesson=>lesson.exercises.map(exercise=>({
      id:exercise.id,lesson_id:exercise.lessonId,order_index:exercise.orderIndex,type:exercise.type,
      lesson_slug:lesson.slug,data_json:JSON.stringify(exercise.data),answer_json:JSON.stringify(exercise.answer),
    } as ExerciseRow)));
  } else {
    await ensureSchema();
    ({ rows } = await getPool().query<ExerciseRow>(
    `SELECT e.*, l.slug AS lesson_slug
       FROM exercises e
       JOIN lessons l ON l.id = e.lesson_id
       WHERE l.is_published = 1
       ORDER BY l.order_index, e.order_index, e.id`
    ));
  }

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
