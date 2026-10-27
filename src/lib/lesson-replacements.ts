/** Explicit replacements only. Keep old rows/IDs and browser progress as an archive. */
export const lessonReplacements: Readonly<Record<string, string>> = {
  'did-and-was': 'simple-past-practice',
  'simple-past-and-past-continuous': 'past-tenses-mixed',
  'past-perfect': 'past-perfect-practice',
  'modal-verbs': 'everyday-modals',
  'reported-speech': 'everyday-reporting',
};
export function replacementFor(slug: string): string | undefined {
  return Object.hasOwn(lessonReplacements, slug) ? lessonReplacements[slug] : undefined;
}
