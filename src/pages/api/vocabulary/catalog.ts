import type {APIRoute} from 'astro';
import words from '../../../content/vocabulary/ngsl-gr.json';
import legacy from '../../../content/vocabulary/legacy-map.json';
export const GET:APIRoute=()=>Response.json({version:'ngsl-gr-1.0-5000',words,legacy},{headers:{'Cache-Control':'public, max-age=3600'}});
