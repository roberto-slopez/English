import type {APIRoute} from 'astro';
import {recordWebVital} from '../../lib/server-metrics.js';
const names=['LCP','INP','CLS'] as const;
/** Same-origin, bounded aggregate samples only; no identity, URL or page content. */
export const POST:APIRoute=async({request,url})=>{
  if(request.headers.get('origin')!==url.origin)return new Response(null,{status:403});
  if(Number(request.headers.get('content-length')??0)>1024)return new Response(null,{status:413});
  const raw=await request.text();if(raw.length>1024)return new Response(null,{status:413});
  try{
    const value=JSON.parse(raw);
    if(!names.includes(value.name)||typeof value.value!=='number'||!Number.isFinite(value.value)||value.value<0||value.value>3600000)return new Response(null,{status:400});
    recordWebVital(value.name,value.value);
    return new Response(null,{status:204});
  }catch{return new Response(null,{status:400});}
};
