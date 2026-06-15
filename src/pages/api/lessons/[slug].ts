// GET /api/lessons/[slug] → full lesson + exercises (data/answer already parsed)
import type { APIRoute } from 'astro';
import { z } from 'zod';
import { getLessonBySlug } from '../../../lib/lessons-repo.js';
import { DEFAULT_LOCALE } from '../../../lib/i18n-locales.js';

export const prerender = false;

const LocaleEnum = z.enum(['en', 'es', 'zh', 'ko', 'ja']).optional();

export const GET: APIRoute = ({ params, url }) => {
  const slug = params.slug;
  if (typeof slug !== 'string' || slug.length === 0) {
    return new Response(JSON.stringify({ error: 'slug is required' }), {
      status: 400,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }

  const localeParam = url.searchParams.get('locale') ?? DEFAULT_LOCALE;
  const parsed = LocaleEnum.safeParse(localeParam);
  const locale = parsed.success && parsed.data ? parsed.data : DEFAULT_LOCALE;

  const lesson = getLessonBySlug(slug, locale);
  if (!lesson) {
    return new Response(JSON.stringify({ error: 'lesson not found' }), {
      status: 404,
      headers: { 'content-type': 'application/json; charset=utf-8' },
    });
  }

  return new Response(JSON.stringify({ locale, lesson }), {
    status: 200,
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'public, max-age=60',
    },
  });
};
