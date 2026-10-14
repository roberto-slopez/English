import type { MiddlewareHandler } from 'astro';
import { recordHttpRequest, flushServerMetrics } from './lib/server-metrics.js';

export const onRequest: MiddlewareHandler = async (_context, next) => {
  const started = performance.now();
  try {
    const response = await next();
    const duration = performance.now() - started;
    recordHttpRequest(response.status, duration);
    flushServerMetrics();
    const headers = new Headers(response.headers);
    headers.append('server-timing', `app;dur=${duration.toFixed(1)}`);
    return new Response(response.body, { status: response.status, statusText: response.statusText, headers });
  } catch (error) {
    recordHttpRequest(500, performance.now() - started);
    flushServerMetrics();
    throw error;
  }
};
