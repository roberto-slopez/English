/** Health responders deliberately avoid credentials and diagnostic details. */
import { queryDb } from './db.js';
function response(status: number, state: string): Response {
  return new Response(JSON.stringify({ status: state }), {
    status, headers: { 'content-type': 'application/json; charset=utf-8', 'cache-control': 'no-store' },
  });
}

export const health = {
  async live(): Promise<Response> { return response(200, 'ok'); },
  async ready(): Promise<Response> {
    try {
      // Read-only: this endpoint neither creates tables nor seeds content.
      const { rows } = await queryDb('SELECT 1 AS ok FROM lessons l JOIN exercises e ON e.lesson_id = l.id WHERE l.is_published = 1 LIMIT 1', [], 'health.ready');
      return rows.length ? response(200, 'ready') : response(503, 'unavailable');
    } catch {
      return response(503, 'unavailable');
    }
  },
};
