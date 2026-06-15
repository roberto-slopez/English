// GET /api/translate?key=...&locale=... → { key, locale, value }
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { tAsync } from '../../lib/translate.js';
import { isSupportedLocale, DEFAULT_LOCALE } from '../../lib/i18n-locales.js';

export const prerender = false;

const QuerySchema = z.object({
  key: z.string().min(1).max(500),
  locale: z.string().min(2).max(5),
});

export const GET: APIRoute = async ({ url }) => {
  const raw = {
    key: url.searchParams.get('key') ?? '',
    locale: url.searchParams.get('locale') ?? DEFAULT_LOCALE,
  };

  const parsed = QuerySchema.safeParse(raw);
  if (!parsed.success) {
    return new Response(
      JSON.stringify({ error: 'invalid query', details: parsed.error.flatten() }),
      { status: 400, headers: { 'content-type': 'application/json; charset=utf-8' } }
    );
  }

  const locale = isSupportedLocale(parsed.data.locale)
    ? parsed.data.locale
    : DEFAULT_LOCALE;

  const value = await tAsync(parsed.data.key, locale);

  return new Response(
    JSON.stringify({ key: parsed.data.key, locale, value }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'public, max-age=3600', // 1h
      },
    }
  );
};
