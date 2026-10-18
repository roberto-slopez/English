import type { APIRoute } from 'astro';
import {chunkEntries,TOTAL_CHUNKS} from '../../../content/vocabulary/top2000-vocabulary.js';
import {classVocabularyEntries} from '../../../content/class-notes/vocabulary.js';
export const GET: APIRoute=({params})=>{
  const words=classVocabularyEntries(params.slug??'');
  if(words)return Response.json({words},{headers:{'Cache-Control':'public, max-age=3600'}});
  const match=/^vocab-chunk-(\d{2})$/.exec(params.slug??'');
  const index=match?Number(match[1])-1:-1;
  if(index<0||index>=TOTAL_CHUNKS)return Response.json({error:'Not found'},{status:404});
  return Response.json({words:chunkEntries(index)},{headers:{'Cache-Control':'public, max-age=3600'}});
};
