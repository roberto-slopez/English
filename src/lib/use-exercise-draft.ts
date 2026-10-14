import { useState, useEffect } from 'react';

export interface DraftProps { draft?: unknown; onDraft?: (value: unknown) => void }
export function useExerciseDraft<T>(initial: T | (() => T), draft: unknown, onDraft?: (value: unknown) => void) {
  const [value, setValue] = useState<T>(() => draft === undefined || draft === null ? typeof initial === 'function' ? (initial as () => T)() : initial : draft as T);
  useEffect(() => { onDraft?.(value); }, [value, onDraft]);
  return [value, setValue] as const;
}
