import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, resolve } from 'node:path';
import { test } from 'node:test';

test('production verification rejects the reported startup crash before a healthcheck can pass', () => {
  const fixture = mkdtempSync(join(tmpdir(), 'english-runtime-crash-'));
  try {
    const entryDir = join(fixture, 'dist/server');
    mkdirSync(entryDir, { recursive: true });
    writeFileSync(join(entryDir, 'entry.mjs'), "throw new TypeError('app.getLogger is not a function');\n");
    const result = spawnSync(process.execPath, ['scripts/verify-runtime.mjs', fixture], {
      cwd: resolve('.'), encoding: 'utf8', windowsHide: true, timeout: 10000,
    });
    assert.equal(result.error, undefined);
    assert.equal(result.status, 1, 'A failed production startup must fail the verification command');
    assert.match(result.stderr, /Production server exited before its healthcheck/);
    assert.match(result.stderr, /app\.getLogger is not a function/);
  } finally {
    // Only remove the fresh temporary fixture created by this test.
    assert.equal(dirname(resolve(fixture)), resolve(tmpdir()));
    rmSync(fixture, { recursive: true, force: true });
  }
});
