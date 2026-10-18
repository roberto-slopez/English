/** Vocabulary families have separate progress totals and next-lesson sequences. */
export function vocabularyFamily(slug: string): 'frequency' | 'class' | null {
  if (/^vocab-chunk-\d{2}$/.test(slug)) return 'frequency';
  if (/^class-vocab-[a-z]+(?:-[a-z]+)*$/.test(slug)) return 'class';
  return null;
}
export const isVocabularyLesson = (slug: string): boolean => vocabularyFamily(slug) !== null;
