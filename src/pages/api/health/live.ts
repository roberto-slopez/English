import type { APIRoute } from 'astro';
import { health } from '../../../lib/health.js';

export const prerender = false;
export const GET: APIRoute = () => health.live();
