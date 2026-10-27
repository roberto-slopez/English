import type { APIRoute } from 'astro';
import words from '../../../content/vocabulary/ngsl-gr.json';
import legacy from '../../../content/vocabulary/legacy-map.json';
import zh from '../../../content/translations/localized/zh.json';
import ko from '../../../content/translations/localized/ko.json';
import ja from '../../../content/translations/localized/ja.json';
import { VOCABULARY_CATALOG_VERSION } from '../../../lib/vocabulary/catalog-version.js';

const VERSION = VOCABULARY_CATALOG_VERSION;
const ETAG = `"${VERSION}"`;
const localizedWords = words.map(word => ({
  ...word,
  translations: {
    zh: zh.vocabulary[word.id as keyof typeof zh.vocabulary],
    ko: ko.vocabulary[word.id as keyof typeof ko.vocabulary],
    ja: ja.vocabulary[word.id as keyof typeof ja.vocabulary],
  },
}));
const SERIALIZED_CATALOG = JSON.stringify({ version: VERSION, words: localizedWords, legacy });
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
