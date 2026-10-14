import {spawn} from 'node:child_process';
import {once} from 'node:events';
import {setTimeout as delay} from 'node:timers/promises';
import cypress from 'cypress';
const server=spawn(process.execPath,['dist/server/entry.mjs'],{env:{...process.env,NODE_ENV:'production',ENGLISH_E2E:'1',DATABASE_URL:'',HOST:'127.0.0.1',PORT:'4321'},windowsHide:true,stdio:['ignore','pipe','pipe']});
const closed=once(server,'close');let logs='';server.stdout.on('data',chunk=>{logs+=chunk;});server.stderr.on('data',chunk=>{logs+=chunk;});
try{
 let ready=false;
 for(let i=0;i<100;i++){if(server.exitCode!==null)throw new Error(logs);try{if((await fetch('http://127.0.0.1:4321/api/health/live')).ok){ready=true;break;}}catch{}await delay(100);}
 if(!ready)throw new Error('E2E server did not start: '+logs);
 const result=await cypress.run({browser:'chrome'});
 if('failures' in result||result.totalFailed>0)process.exitCode=1;
}finally{if(server.exitCode===null)server.kill('SIGTERM');await closed;}
