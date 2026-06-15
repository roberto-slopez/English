// GET /api/lessons → published lessons (id, slug, title, description, count)
import type { APIRoute } from 'astro';
import { listLessons } from '../../lib/lessons-repo.js';
import { isSupportedLocale, DEFAULT_LOCALE } from '../../lib/i18n-locales.js';

export const prerender = false;

export const GET: APIRoute = ({ url }) => {
  const localeParam = url.searchParams.get('locale') ?? DEFAULT_LOCALE;
  const locale = isSupportedLocale(localeParam) ? localeParam : DEFAULT_LOCALE;

  const items = listLessons(locale);

  return new Response(JSON.stringify({ locale, items }), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
  });
};
