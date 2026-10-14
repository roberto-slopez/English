import { useMemo, useState } from 'react';
import type { MatchingData, MatchingAnswer } from '../../types.js';
import { shuffleArray } from '../../lib/utils/shuffle.js';
import { useExerciseDraft, type DraftProps } from '../../lib/use-exercise-draft.js';
import { uiText } from '../../lib/ui-labels.js';
type Pair = {leftIndex:number;rightIndex:number};
interface Props extends DraftProps {data: MatchingData; answer: MatchingAnswer; onAnswer:(pairs:Pair[])=>void; disabled?:boolean; uiLocale?:string}
export default function Matching({data,onAnswer,disabled=false,uiLocale='en',draft,onDraft}:Props) {
  const [pairs,setPairs] = useExerciseDraft<Pair[]>([], Array.isArray(draft) ? draft : null,onDraft);
  const [selected,setSelected] = useState<number|null>(null);
  const right = useMemo(()=>shuffleArray(data.right.map((text,index)=>({text,index})),JSON.stringify(data)),[data]);
  return <div className="space-y-4">
    <p>{uiText(uiLocale,'matchingInstructions')}</p>
    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-3"><h3>{uiText(uiLocale,'leftColumn')}</h3>{data.left.map((text,index)=> {
        const pair=pairs.find(p=>p.leftIndex===index);
        return <div key={index} className="flex flex-wrap items-center gap-1">
          <button data-cy="match-left" aria-pressed={selected===index} className={`touch-target min-w-0 flex-1 rounded-xl border-2 p-3 text-left break-words ${selected===index?'border-primary-600 bg-primary-50 text-primary-900 dark:bg-primary-950 dark:text-primary-100':pair?'border-emerald-600':'border-slate-300 dark:border-slate-600'}`} disabled={disabled} onClick={()=>setSelected(index)}>{text}{pair && <span className="block text-sm">→ {data.right[pair.rightIndex]}</span>}</button>
          {pair && <button className="touch-target shrink-0" disabled={disabled} aria-label={uiText(uiLocale,'removePair')+': '+text} onClick={()=>setPairs(pairs.filter(p=>p.leftIndex!==index))}>×</button>}
        </div>;
      })}</div>
      <div className="space-y-3"><h3>{uiText(uiLocale,'rightColumn')}</h3>{right.map(({text,index})=><button key={index} data-cy="match-right" className={`touch-target block w-full rounded-xl border-2 p-3 text-left break-words ${pairs.some(p=>p.rightIndex===index)?'border-emerald-600':'border-slate-300 dark:border-slate-600'}`} disabled={disabled || selected===null} onClick={()=>{ if(selected!==null) setPairs([...pairs.filter(p=>p.leftIndex!==selected&&p.rightIndex!==index),{leftIndex:selected,rightIndex:index}]); setSelected(null); }}>{text}</button>)}</div>
    </div>
    <p role="status">{uiText(uiLocale,'pairsCount',{count:pairs.length,total:data.left.length})}</p>
    <div className="exercise-actions"><button className="button-primary" data-cy="check" disabled={disabled || pairs.length!==data.left.length} onClick={()=>onAnswer(pairs)}>{uiText(uiLocale,'check')}</button></div>
  </div>;
}
