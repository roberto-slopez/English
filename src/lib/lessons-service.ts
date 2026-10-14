// Production always uses PostgreSQL. The explicitly enabled E2E process serves source fixtures.
import * as repository from './lessons-repo.js';
import {ALL_LESSONS} from '../content/lessons.js';
import {tMany,resolveI18n} from './translate.js';
import {collectI18nTokens} from './i18n-tokens.js';
import type {Locale} from './i18n-locales.js';
const testing=()=>process.env.ENGLISH_E2E==='1';
export type {LessonListItem,LessonWithExercises,LessonListOptions} from './lessons-repo.js';
export async function listLessons(locale:Locale,options:repository.LessonListOptions={}):Promise<repository.LessonListItem[]> {
  if(!testing())return repository.listLessons(locale,options);
  const source=ALL_LESSONS.filter(l=>options.category==='vocabulary'?l.slug.startsWith('vocab-chunk-'):options.category==='grammar'?!l.slug.startsWith('vocab-chunk-'):true);
  const texts=await tMany(source.flatMap(l=>[l.titleKey,l.descriptionKey]),locale);
  return source.map((l,i)=>({id:i+1,slug:l.slug,title:texts.get(l.titleKey)??'',description:texts.get(l.descriptionKey)??'',count:l.exercises.length}));
}
export async function getLessonBySlug(slug:string,locale:Locale):Promise<repository.LessonWithExercises|null> {
  if(!testing())return repository.getLessonBySlug(slug,locale);
  const index=ALL_LESSONS.findIndex(l=>l.slug===slug);const lesson=ALL_LESSONS[index];if(!lesson)return null;
  const keys=new Set([lesson.titleKey,lesson.descriptionKey,lesson.introKey]);
  for(const e of lesson.exercises){keys.add(e.promptKey);if(e.explanationKey)keys.add(e.explanationKey);if(e.proTipKey)keys.add(e.proTipKey);collectI18nTokens(e.data,keys);}
  const texts=await tMany([...keys],locale);const translations=Object.fromEntries(texts);
  return {...lesson,id:index+1,isPublished:true,createdAt:'2026-10-13T00:00:00Z',title:texts.get(lesson.titleKey)??'',description:texts.get(lesson.descriptionKey)??'',intro:texts.get(lesson.introKey)??'',
    exercises:lesson.exercises.map((e,i)=>({...e,id:(index+1)*10000+i,lessonId:index+1,data:resolveI18n(e.data,locale,texts)})),translations};
}
export async function getNextVocabularyLesson(slug:string,locale:Locale):Promise<repository.LessonListItem|null> {
  if(!testing())return repository.getNextVocabularyLesson(slug,locale);
  const lessons=(await listLessons(locale,{category:'vocabulary'})).sort((a,b)=>a.slug.localeCompare(b.slug));const index=lessons.findIndex(l=>l.slug===slug);return index>=0?lessons[index+1]??null:null;
}
