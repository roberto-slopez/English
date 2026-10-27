import { z } from "zod";
import { VOCABULARY_CATALOG_VERSION } from './catalog-version.js';
const localizedSense = z.object({
  meaning: z.string().min(1),
  example: z.string().min(1),
  alternatives: z.array(z.string().min(1)),
});
const sense = z.object({
  pos: z.string().min(1),
  definition: z.string().min(1),
  meaning: z.string().min(1),
  source: z.string().min(1),
});
export const wordSchema = sense.extend({
  id: z.string().regex(/^ngslgr-\p{L}+(?:[-']\p{L}+)*$/u),
  word: z.string().min(1),
  rank: z.number().int().min(1).max(5000),
  sourceId: z.number().int(),
  alternatives: z.array(sense),
  translations: z.object({ zh: localizedSense, ko: localizedSense, ja: localizedSense }).optional(),
  example: z.object({
    en: z.string().min(1),
    es: z.string().min(1),
    attribution: z.string().min(1),
  }),
});
export type Word = z.infer<typeof wordSchema>;
export const payloadSchema = z.object({
  version: z.literal(VOCABULARY_CATALOG_VERSION),
  words: z.array(wordSchema).length(5000),
  legacy: z.record(z.string()),
});
export type Catalog = z.infer<typeof payloadSchema>;

/** English UI retains the existing English/Spanish study pair. */
export function wordTranslation(word: Word, locale: string) {
  if ((locale === 'zh' || locale === 'ko' || locale === 'ja') && word.translations?.[locale]) {
    return { ...word.translations[locale], lang: locale };
  }
  return { meaning: word.meaning, example: word.example.es,
    alternatives: word.alternatives.map(sense => sense.meaning), lang: 'es' };
}
