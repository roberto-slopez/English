// Start the built production server and check the same page Railway probes.
// This deliberately needs no database credentials, source files, or dev tooling.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { createServer } from 'node:net';
import { resolve } from 'node:path';
import { setTimeout as delay } from 'node:timers/promises';

const runtimeDir = resolve(process.argv[2] ?? '.');
const reservation = createServer();
reservation.listen(0, '127.0.0.1');
await once(reservation, 'listening');
const port = reservation.address().port;
await new Promise((resolveClose, reject) => reservation.close(error => error ? reject(error) : resolveClose()));

const server = spawn(process.execPath, [resolve(runtimeDir, 'dist/server/entry.mjs')], {
  cwd: runtimeDir,
  env: { ...process.env, NODE_ENV: 'production', HOST: '127.0.0.1', PORT: String(port), DATABASE_URL: '' },
  windowsHide: true,
  stdio: ['ignore', 'pipe', 'pipe'],
});
let logs = '';
let startupError;
const closed = once(server, 'close');
server.on('error', error => { startupError = error; });
for (const output of [server.stdout, server.stderr]) {
  output.on('data', chunk => { logs = (logs + chunk.toString()).slice(-16000); });
}

try {
  const baseUrl = `http://127.0.0.1:${port}`;
  const deadline = Date.now() + 15000;
  let response;
  while (Date.now() < deadline) {
    if (startupError) throw startupError;
    assert.equal(server.exitCode, null, `Production server exited before its healthcheck:\n${logs}`);
    try {
      response = await fetch(baseUrl, { signal: AbortSignal.timeout(1500) });
      break;
    } catch {
      await delay(100);
    }
  }
  assert.ok(response, `Production server did not respond within 15 seconds:\n${logs}`);
  assert.equal(response.status, 200, `Healthcheck returned ${response.status}:\n${logs}`);
  const html = await response.text();
  assert.match(html, /Learn English, one exercise at a time/);
  const stylesheet = html.match(/href="([^"\s]+\.css)"/);
  assert.ok(stylesheet, 'Production HTML must reference a built stylesheet');
  const asset = await fetch(new URL(stylesheet[1], baseUrl), { signal: AbortSignal.timeout(3000) });
  assert.equal(asset.status, 200, 'The standalone server must serve its client assets');
  assert.match(asset.headers.get('content-type') ?? '', /text\/css/);

  const translation = await fetch(`${baseUrl}/api/translate?key=exercise.conditionals-all.2.prompt&locale=en`, {
    signal: AbortSignal.timeout(3000),
  });
  assert.equal(translation.status, 200);
  assert.equal((await translation.json()).value, 'Choose the correct First Conditional sentence:');
  const vocabulary=await fetch(`${baseUrl}/api/vocabulary/catalog`,{signal:AbortSignal.timeout(5000)});
  assert.equal(vocabulary.status,200,'Flashcards must be available without a database');
  const deck=await vocabulary.json();assert.equal(deck.words.length,5000);assert.equal(new Set(deck.words.map(word=>word.id)).size,5000);
  const studyPage=await fetch(`${baseUrl}/vocabulary`,{signal:AbortSignal.timeout(5000)});
  assert.equal(studyPage.status,200,'The vocabulary shell must be available without a database');
  // Catch a delayed startup crash after the socket opened, such as getLogger().
  await delay(100);
  assert.equal(server.exitCode, null, `Production server crashed after startup:\n${logs}`);
  console.log(`[runtime] OK: Node ${process.version}; production startup, GET /, CSS, translation API, vocabulary and 5,000-word catalogue.`);
} catch (error) {
  console.error(`[runtime] FAILED: ${error instanceof Error ? error.message : String(error)}`);
  process.exitCode = 1;
} finally {
  if (server.exitCode === null && server.signalCode === null) server.kill('SIGTERM');
  await closed;
}
