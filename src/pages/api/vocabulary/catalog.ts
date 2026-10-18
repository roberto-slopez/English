import type { APIRoute } from 'astro';
import words from '../../../content/vocabulary/ngsl-gr.json';
import legacy from '../../../content/vocabulary/legacy-map.json';

const VERSION = 'ngsl-gr-1.0-5000';
const ETAG = `"${VERSION}"`;
const SERIALIZED_CATALOG = JSON.stringify({ version: VERSION, words, legacy });
const HEADERS = {
  'Content-Type': 'application/json; charset=utf-8',
  'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
  ETag: ETAG,
};

export const GET: APIRoute = ({ request }) => {
  if (request.headers.get('if-none-match') === ETAG) {
    return new Response(null, { status: 304, headers: HEADERS });
  }
  return new Response(SERIALIZED_CATALOG, { status: 200, headers: HEADERS });
};
