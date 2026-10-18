import { z } from "zod";
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
  example: z.object({
    en: z.string().min(1),
    es: z.string().min(1),
    attribution: z.string().min(1),
  }),
});
export type Word = z.infer<typeof wordSchema>;
export const payloadSchema = z.object({
  version: z.literal("ngsl-gr-1.0-5000"),
  words: z.array(wordSchema).length(5000),
  legacy: z.record(z.string()),
});
export type Catalog = z.infer<typeof payloadSchema>;
