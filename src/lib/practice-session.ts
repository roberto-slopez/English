import type {Exercise} from '../types.js';
/** A saved session keeps its order; subsequent runs advance by six across all words. */
export function vocabularySession(exercises:Exercise[],round:number):Exercise[] {
  if(!exercises.length)return [];
  const safeRound=Number.isSafeInteger(round)&&round>=0?round:0;
  const start=(safeRound%exercises.length)*6%exercises.length;
  return Array.from({length:Math.min(6,exercises.length)},(_,i)=>exercises[(start+i)%exercises.length]!);
}
