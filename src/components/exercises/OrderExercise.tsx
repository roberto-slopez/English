import { useState } from 'react';
import { DndContext, MouseSensor, TouchSensor, KeyboardSensor, useSensors, useSensor, closestCenter, type DragEndEvent } from '@dnd-kit/core';
import { SortableContext, useSortable, sortableKeyboardCoordinates, arrayMove } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { shuffleArray } from '../../lib/utils/shuffle.js';
import { uiText } from '../../lib/ui-labels.js';
import { useExerciseDraft, type DraftProps } from '../../lib/use-exercise-draft.js';
import type { DragDropData } from '../../types.js';
export interface OrderProps extends DraftProps { data: DragDropData; answer: {correctOrder:number[]}; onAnswer:(order:number[])=>void; disabled?:boolean; uiLocale?:string }
export default function OrderExercise({data,onAnswer,disabled=false,uiLocale='en',draft,onDraft}:OrderProps) {
  const slots=!!data.slots?.length;
  const [order,setOrder]=useExerciseDraft<number[]>(()=>slots?[]:shuffleArray(data.tokens.map((_,i)=>i),JSON.stringify(data.tokens)),Array.isArray(draft)?draft:null,onDraft);
  const [active,setActive]=useState<number|null>(null);
  const sensors=useSensors(useSensor(MouseSensor,{activationConstraint:{distance:8}}),useSensor(TouchSensor,{activationConstraint:{delay:150,tolerance:8}}),useSensor(KeyboardSensor,{coordinateGetter:sortableKeyboardCoordinates}));
  const move=(from:number,to:number)=>{if(!disabled&&from>=0&&to>=0&&to<order.length)setOrder(arrayMove(order,from,to));};
  const end=(e:DragEndEvent)=>{setActive(null);if(e.over)move(order.indexOf(Number(e.active.id)),order.indexOf(Number(e.over.id)));};
  return <div className="space-y-4">
    <p>{uiText(uiLocale,'dragInstructions')}</p>
    {slots && <div className="flex flex-wrap gap-2" role="group" aria-label={uiText(uiLocale,'selectOption')}>
      {data.tokens.map((text,index)=><button key={index} data-cy="pool-token" disabled={disabled||order.includes(index)} className="touch-target rounded-xl border-2 border-slate-300 px-3 dark:border-slate-600" onClick={()=>setOrder([...order,index])}>{text}</button>)}
    </div>}
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragStart={e=>setActive(Number(e.active.id))} onDragEnd={end} onDragCancel={()=>setActive(null)}>
      <SortableContext items={order}>
        <ol className="space-y-2 rounded-2xl border-2 border-dashed border-primary-300 p-3" aria-live="polite">
          {order.map((token,position)=><Token key={token} id={token} text={data.tokens[token]!} position={position} total={order.length} disabled={disabled} uiLocale={uiLocale} active={active===token} move={move} remove={slots?()=>setOrder(order.filter(v=>v!==token)):undefined}/>)}
          {slots && order.length<data.slots!.length && <li className="min-h-12 text-slate-600 dark:text-slate-300">{uiText(uiLocale,'selectOption')}</li>}
        </ol>
      </SortableContext>
    </DndContext>
    <p>{uiText(uiLocale,'orderTip')}</p>
    <div className="exercise-actions"><button data-cy="check" className="button-primary" disabled={disabled || (slots&&order.length!==data.slots!.length)} onClick={()=>onAnswer(order)}>{uiText(uiLocale,'check')}</button></div>
  </div>;
}
function Token({id,text,position,total,disabled,uiLocale,active,move,remove}:{id:number;text:string;position:number;total:number;disabled:boolean;uiLocale:string;active:boolean;move:(from:number,to:number)=>void;remove?:()=>void}) {
  const {attributes,listeners,setNodeRef,setActivatorNodeRef,transform,transition}=useSortable({id,disabled});
  return <li ref={setNodeRef} style={{transform:CSS.Transform.toString(transform),transition}} data-cy="order-token" data-token={id} className={`drag-source flex flex-wrap items-center gap-2 rounded-xl border-2 border-slate-300 bg-white p-2 dark:border-slate-600 dark:bg-slate-800 ${active?'opacity-60':''}`}>
    <span className="min-w-0 flex-1 break-words">{text}</span>
    <button ref={setActivatorNodeRef} {...attributes} {...listeners} className="drag-handle touch-target cursor-grab" disabled={disabled} aria-label={uiText(uiLocale,'dragHandle')+': '+text}>⠿</button>
    <button data-cy="move-up" className="touch-target" aria-label={uiText(uiLocale,'moveUp')+': '+text} disabled={disabled||position===0} onClick={()=>move(position,position-1)}>↑</button>
    <button data-cy="move-down" className="touch-target" aria-label={uiText(uiLocale,'moveDown')+': '+text} disabled={disabled||position===total-1} onClick={()=>move(position,position+1)}>↓</button>
    {remove && <button className="touch-target" aria-label={uiText(uiLocale,'removePair')+': '+text} disabled={disabled} onClick={remove}>×</button>}
  </li>;
}
