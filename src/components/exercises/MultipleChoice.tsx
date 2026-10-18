import { useEffect, useMemo } from 'react';
import type { MultipleChoiceData, MultipleChoiceAnswer } from '../../types.js';
import { shuffleArray } from '../../lib/utils/shuffle.js';
import { speakEnglish } from '../../lib/utils/speech.js';
import { uiText } from '../../lib/ui-labels.js';
import { useExerciseDraft, type DraftProps } from '../../lib/use-exercise-draft.js';
interface Props extends DraftProps { data: MultipleChoiceData; answer: MultipleChoiceAnswer; onAnswer: (value: number | number[]) => void; disabled?: boolean; uiLocale?: string }
export default function MultipleChoice({data, answer, onAnswer, disabled=false, uiLocale='en', draft, onDraft}: Props) {
  const choices = useMemo(() => shuffleArray(data.choices.map((text, original) => ({text,original})), JSON.stringify(data.choices)), [data]);
  const [selected,setSelected] = useExerciseDraft<number[]>([], Array.isArray(draft) ? draft : null, onDraft);
  const multi = !!answer.correctIndices;
  useEffect(() => {
    if (disabled) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.repeat || e.ctrlKey || e.altKey || e.metaKey || document.querySelector('dialog[open]')) return;
      const target = e.target as HTMLElement | null;
      if (target?.closest('input,textarea,select,[contenteditable="true"]')) return;
      if (/^[1-9]$/.test(e.key)) {
        const idx = Number(e.key) - 1;
        const item = choices[idx];
        if (!item) return;
        e.preventDefault();
        speakEnglish(item.text);
        setSelected(multi ? selected.includes(item.original) ? selected.filter(v => v !== item.original) : [...selected, item.original] : [item.original]);
      } else if (e.key === 'Enter' && selected.length > 0 && !target?.closest('button,a')) {
        e.preventDefault();
        onAnswer(multi ? selected : selected[0]!);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [disabled, choices, multi, selected, setSelected, onAnswer]);
  return <div className="flex flex-col gap-4">
    {multi && <p>{uiText(uiLocale,'selectAll')}</p>}
    <div role="group" aria-label={uiText(uiLocale,'selectOption')} className="grid gap-3">
      {choices.map(({text,original},i) => <button key={original} type="button" data-cy="choice" aria-pressed={selected.includes(original)} disabled={disabled}
        onClick={() => { speakEnglish(text); setSelected(multi ? selected.includes(original) ? selected.filter(v=>v!==original) : [...selected,original] : [original]); }}
        className={`touch-target flex min-h-[52px] items-center gap-3 rounded-2xl border-2 p-4 text-left font-semibold ${selected.includes(original) ? 'border-primary-600 bg-primary-50 text-primary-900 dark:bg-primary-950 dark:text-primary-100' : 'border-slate-200 bg-white text-slate-900 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100'}`}>
        <span aria-hidden="true">{String.fromCharCode(65+i)}</span><span>{text}</span>
      </button>)}
    </div>
    <div className="exercise-actions"><button className="button-primary" data-cy="check" disabled={disabled || !selected.length} onClick={()=>onAnswer(multi ? selected : selected[0]!)}>{uiText(uiLocale,'check')}</button></div>
  </div>;
}
