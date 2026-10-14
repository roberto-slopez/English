import { useState, useEffect, useRef, useCallback, lazy, Suspense, Component, type ComponentType, type ReactNode } from 'react';
import { MotionConfig, LazyMotion } from 'framer-motion';
import type { Exercise, ExerciseType } from '../types.js';
import { validateAnswer } from '../lib/exercise-validation.js';
import { awardPoints, getStreak, resetStreak } from '../lib/points.js';
import { newProgress, readProgress, writeProgress, recordAttempt, type LearningProgress } from '../lib/progress.js';
import { readUserPreferences, PREFERENCES_EVENT, BEFORE_LOCALE_CHANGE_EVENT, type UserPreferences } from '../lib/preferences.js';
import { shuffleArray } from '../lib/utils/shuffle.js';
import { speakEnglish, stopSpeech } from '../lib/utils/speech.js';
import { uiText } from '../lib/ui-labels.js';
import { vocabularySession } from '../lib/practice-session.js';
import ProgressBar from './feedback/ProgressBar.js';
import ExerciseTransition from './ExerciseTransition.js';
import TranslationReveal from './TranslationReveal.js';
const LessonIntroModal = lazy(()=>import('./LessonIntroModal.js'));
const PointsCompletion = lazy(()=>import('./PointsCompletion.js'));
const loadMotion=()=>import('../lib/motion-features.js').then(module=>module.default);
type ExerciseProps = {data:Exercise['data']; answer:Exercise['answer']; onAnswer:(value:unknown)=>void; disabled:boolean; uiLocale:string; draft:unknown; onDraft:(value:unknown)=>void};
const loaders = {
  fill_blank: ()=>import('./exercises/FillBlank.js'), multiple_choice: ()=>import('./exercises/MultipleChoice.js'),
  drag_drop: ()=>import('./exercises/DragDrop.js'), true_false: ()=>import('./exercises/TrueFalse.js'),
  matching: ()=>import('./exercises/Matching.js'), sentence_reorder: ()=>import('./exercises/SentenceReorder.js'),
};
const components = Object.fromEntries(Object.entries(loaders).map(([type,load])=>[type,lazy(load as ()=>Promise<{default:ComponentType<ExerciseProps>}>) ])) as unknown as Record<ExerciseType,ComponentType<ExerciseProps>>;
interface Props {lessonSlug:string;lessonTitle:string;lessonIntro:string;exercises:Exercise[];translations:Record<string,string>;englishPrompts?:Record<string,string>;nativeLocale:string|null;uiLocale:string;nextLessonSlug?:string|null;lessonKind?:'vocab'|'lesson'}
class LoadBoundary extends Component<{children:ReactNode;locale:string},{failed:boolean}> {
  state={failed:false};
  static getDerivedStateFromError(){return {failed:true};}
  render(){return this.state.failed?<div role="alert"><p>{uiText(this.props.locale,'loadingError')}</p><button className="button-primary" onClick={()=>location.reload()}>{uiText(this.props.locale,'retry')}</button></div>:this.props.children;}
}
function practiceProgress(slug:string,exercises:Exercise[],previous?:LearningProgress):LearningProgress {
  let selected=exercises;
  if(slug.startsWith('vocab-chunk-')) {
    let round=0; try {round=Math.max(0,Number.parseInt(localStorage.getItem('english.vocabulary.round.'+slug)??'0',10)||0);} catch {}
    selected=vocabularySession(exercises,round);
  }
  const next=newProgress(selected,previous?.mastered??[]);
  next.total=exercises.length; next.lastAnswers=previous?.lastAnswers??{}; next.attempts=previous?.attempts??{};
  return next;
}
function rightAnswer(exercise:Exercise,locale:string):string {
  const a=exercise.answer;
  if('correct' in a) return typeof a.correct==='boolean'?uiText(locale,a.correct?'true':'false'):a.correct;
  if('choices' in exercise.data && 'correctIndex' in a) return (a.correctIndices??[a.correctIndex]).map(i=>('choices' in exercise.data?exercise.data.choices[i]:'')).join(' · ');
  if('tokens' in exercise.data && 'correctOrder' in a) return a.correctOrder.map(i=>('tokens' in exercise.data?exercise.data.tokens[i]:'')).join(' ');
  if('left' in exercise.data && 'pairs' in a) return a.pairs.map(p=>'left' in exercise.data?exercise.data.left[p.leftIndex]+' → '+exercise.data.right[p.rightIndex]:'').join(' · ');
  return '';
}
export default function ExerciseRunner({lessonSlug,lessonTitle,lessonIntro,exercises,translations,englishPrompts=translations,nativeLocale,uiLocale,nextLessonSlug=null,lessonKind='lesson'}:Props) {
  const [progress,setProgress]=useState(()=>newProgress(exercises));
  const ref=useRef(progress);
  const [ready,setReady]=useState(false);
  const [intro,setIntro]=useState(false);
  const [native,setNative]=useState(nativeLocale);
  const [audio,setAudio]=useState(false);
  const heading=useRef<HTMLHeadingElement>(null);
  const save=useCallback((next:LearningProgress)=>{ref.current=next;setProgress(next);writeProgress(lessonSlug,next);},[lessonSlug]);
  useEffect(()=>{
    const restored=readProgress(lessonSlug,exercises);
    const saved=restored.updatedAt>0?restored:practiceProgress(lessonSlug,exercises,restored);
    const type=exercises.find(e=>e.promptKey===saved.session.order[saved.session.index])?.type;
    if(type)void loaders[type]().catch(()=>{});
    ref.current=saved;setProgress(saved);setReady(true);setIntro(saved.updatedAt===0&&!saved.session.finished);
    const preferences=(event:Event)=>{stopSpeech();const pref=(event as CustomEvent<UserPreferences>).detail;setNative(pref.nativeLocale);setAudio(pref.audioEnabled);};
    const pref=readUserPreferences(true);setNative(pref.nativeLocale);setAudio(pref.audioEnabled);
    const flush=()=>{stopSpeech();writeProgress(lessonSlug,ref.current);};
    window.addEventListener(PREFERENCES_EVENT,preferences);
    window.addEventListener(BEFORE_LOCALE_CHANGE_EVENT,flush);
    window.addEventListener('pagehide',flush);
    return ()=>{stopSpeech();window.removeEventListener(PREFERENCES_EVENT,preferences);window.removeEventListener(BEFORE_LOCALE_CHANGE_EVENT,flush);window.removeEventListener('pagehide',flush);};
  },[lessonSlug,exercises]);
  const session=progress.session;
  const current=exercises.find(e=>e.promptKey===session.order[session.index]);
  const nextType=exercises.find(e=>e.promptKey===session.order[session.index+1])?.type;
  useEffect(()=>{if(nextType) void loaders[nextType]().catch(()=>{});},[nextType]);
  useEffect(()=>{stopSpeech();if(ready&&!intro&&!session.finished)heading.current?.focus({preventScroll:true});return stopSpeech;},[current?.promptKey,ready,intro,session.finished]);
  useEffect(()=>{if(ready&&!intro&&!session.finished&&audio&&current) speakEnglish(englishPrompts[current.promptKey]??'');return stopSpeech;},[current?.promptKey,ready,intro,session.finished,audio,englishPrompts]);
  const onDraft=useCallback((draft:unknown)=>{const p=ref.current;ref.current={...p,session:{...p.session,draft}};writeProgress(lessonSlug,ref.current);},[lessonSlug]);
  const onAnswer=(answer:unknown)=>{
    const p=ref.current;
    if(!current||p.session.feedback!==null||!ready) return;
    const correct=validateAnswer(current,answer);
    const next=recordAttempt(p,current.promptKey,correct);
    let lastPoints:LearningProgress['session']['lastPoints']=null;
    if(correct){
      const award=awardPoints({slug:lessonSlug,exerciseId:current.promptKey,sessionId:p.session.id,exercisePoints:current.points,attempts:next.attempts[current.promptKey]!,previousStreak:getStreak(lessonSlug)});
      lastPoints={awarded:award.awarded,...award.breakdown};
    }else resetStreak(lessonSlug);
    save({...next,session:{...next.session,feedback:correct?'correct':'wrong',lastPoints,points:p.session.points+(lastPoints?.awarded??0)}});
  };
  const advance=(skipped=false)=>{
    const p=ref.current;if(!current||(!skipped&&p.session.feedback!=='correct'))return;
    if(skipped)resetStreak(lessonSlug);
    const finished=p.session.index+1>=p.session.order.length;
    const results=[...p.session.results.filter(r=>r.key!==current.promptKey),{key:current.promptKey,correct:!skipped,points:skipped?0:p.session.lastPoints?.awarded??0}];
    if(finished&&lessonKind==='vocab')try{localStorage.setItem('english.vocabulary.round.'+lessonSlug,String((Number.parseInt(localStorage.getItem('english.vocabulary.round.'+lessonSlug)??'0',10)||0)+1));}catch{}
    save({...p,lastAnswers:skipped?{...p.lastAnswers,[current.promptKey]:'skipped'}:p.lastAnswers,session:{...p.session,results,index:finished?p.session.index:p.session.index+1,feedback:null,lastPoints:null,draft:null,finished}});
  };
  const shuffle=()=>{
    const p=ref.current; const start=p.session.index+(p.session.feedback!==null||p.session.draft!==null?1:0);
    const remaining=p.session.order.slice(start);
    let shuffled=shuffleArray(remaining,crypto.randomUUID());
    if(shuffled.length>1&&shuffled.every((key,i)=>key===remaining[i]))shuffled=[...shuffled.slice(1),shuffled[0]!];
    save({...p,session:{...p.session,order:[...p.session.order.slice(0,start),...shuffled]}});
  };
  const retry=()=>{resetStreak(lessonSlug);save(practiceProgress(lessonSlug,exercises,ref.current));setIntro(false);};
  if(!exercises.length)return <p>{uiText(uiLocale,'emptyExercises')}</p>;
  if(!ready)return <p role="status" className="min-h-96">{uiText(uiLocale,'loading')}</p>;
  const results=session.results.map((r,i)=>({id:i,label:uiText(uiLocale,'question',{count:i+1}),correct:r.correct,points:r.points}));
  const Active=current?components[current.type]:null;
  return <MotionConfig reducedMotion="user"><LazyMotion features={loadMotion} strict><LoadBoundary locale={uiLocale}><Suspense fallback={<p role="status">{uiText(uiLocale,'loading')}</p>}>
    {session.finished?<PointsCompletion open lessonTitle={lessonTitle} kind={lessonKind} nextLessonSlug={nextLessonSlug} correctCount={results.filter(r=>r.correct).length} total={session.order.length} results={results} lessonPoints={session.points} onGoNext={stopSpeech} onRetry={retry} uiLocale={uiLocale}/>:
    <div className="flex flex-col gap-6">
      {intro&&<LessonIntroModal title={lessonTitle} intro={lessonIntro} slug={lessonSlug} onStart={()=>setIntro(false)} onClose={()=>setIntro(false)} isMidLesson={session.index>0||session.feedback!==null} uiLocale={uiLocale}/>}
      <header className="flex flex-wrap items-center justify-between gap-3"><h1 className="font-display text-3xl font-bold">{lessonTitle}</h1><div className="flex gap-2">
        <button data-cy="shuffle" className="touch-target rounded-xl border-2 border-slate-300 px-3 dark:border-slate-600" onClick={shuffle} aria-label={uiText(uiLocale,'shuffleRemaining')}>↻</button>
        <button className="touch-target rounded-xl border-2 border-slate-300 px-3 dark:border-slate-600" onClick={()=>setIntro(true)}>{uiText(uiLocale,'rules')}</button>
      </div></header>
      <ProgressBar current={session.index+1} total={session.order.length} uiLocale={uiLocale} label={uiText(uiLocale,session.index/session.order.length<.25?'motivationStart':session.index/session.order.length<.75?'motivationMiddle':'motivationEnd')}/>
      {current&&Active&&<ExerciseTransition slideKey={session.id+current.promptKey}><article data-cy="exercise" className="space-y-5 rounded-3xl border-2 border-slate-200 bg-white p-5 dark:border-slate-700 dark:bg-slate-900 sm:p-7">
        <p className="text-sm text-slate-600 dark:text-slate-300">{uiText(uiLocale,'questionCount',{count:session.index+1,total:session.order.length})}</p>
        <div className="flex items-center gap-3"><h2 ref={heading} tabIndex={-1} data-cy="prompt" className="flex-1 text-2xl font-bold outline-none">{translations[current.promptKey]||uiText(uiLocale,'loadingError')}</h2>
          <button className="touch-target rounded-xl border-2 border-slate-300 dark:border-slate-600" aria-label={uiText(uiLocale,'audio')} onClick={()=>speakEnglish(englishPrompts[current.promptKey]??'',{explicit:true})}>🔊</button>
        </div>
        <Suspense fallback={<p role="status" className="min-h-64">{uiText(uiLocale,'loading')}</p>}><Active key={session.id+current.promptKey} data={current.data} answer={current.answer} onAnswer={onAnswer} disabled={session.feedback!==null} uiLocale={uiLocale} draft={ref.current.session.draft} onDraft={onDraft}/></Suspense>
        {session.feedback&&<div data-cy="feedback" role="status" className={session.feedback==='correct'?'rounded-xl bg-emerald-50 p-4 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100':'rounded-xl bg-rose-50 p-4 text-rose-900 dark:bg-rose-950 dark:text-rose-100'}>
          <p className="font-bold">{uiText(uiLocale,session.feedback==='correct'?'correct':'incorrect')}{session.lastPoints?' +'+session.lastPoints.awarded:''}</p>
          {session.feedback==='wrong'&&<p>{uiText(uiLocale,'rightAnswer')}: {rightAnswer(current,uiLocale)}</p>}
          {current.explanationKey&&<p className="mt-3">{translations[current.explanationKey]}</p>}
          {current.proTipKey&&<p className="mt-2">{uiText(uiLocale,'proTip')}: {translations[current.proTipKey]}</p>}
          <div className="exercise-actions mt-4 flex flex-wrap gap-3">
            {session.feedback==='correct'?<button data-cy="next" className="button-primary" onClick={()=>advance()}>{uiText(uiLocale,'next')}</button>:<>
              <button className="touch-target rounded-xl border-2 px-4" onClick={()=>advance(true)}>{uiText(uiLocale,'skip')}</button>
              <button data-cy="retry" className="button-primary" onClick={()=>save({...ref.current,session:{...ref.current.session,feedback:null,lastPoints:null}})}>{uiText(uiLocale,'tryAgain')}</button>
            </>}
          </div>
        </div>}
        <TranslationReveal key={current.promptKey+native} uiLocale={uiLocale} nativeLocale={native} contextKey={current.promptKey}/>
      </article></ExerciseTransition>}
    </div>}
  </Suspense></LoadBoundary></LazyMotion></MotionConfig>;
}
