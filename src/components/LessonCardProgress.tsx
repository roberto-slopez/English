'use client';

import { useEffect, useState } from 'react';

interface Props {
  lessonSlug: string;
  total: number;
  /** When true, hides the progress bar (e.g. while loading). */
  hide?: boolean;
}

interface StoredProgress {
  completed: number;
  total: number;
}

function readStored(slug: string, fallback: number): StoredProgress | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(`english.progress.${slug}`);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { completed?: number; total?: number };
    if (!parsed.completed || parsed.completed <= 0) return null;
    return { completed: parsed.completed, total: parsed.total || fallback };
  } catch {
    return null;
  }
}

/** Reads localStorage.english.progress.<slug> and renders a small progress bar. */
export default function LessonCardProgress({ lessonSlug, total, hide = false }: Props) {
  const [progress, setProgress] = useState<StoredProgress | null>(null);
  // `mounted` flips to true on the first client effect tick. We use it to
  // decide between a skeleton (pre-hydration / pre-read) and the real
  // progress bar (or nothing if the user hasn't started this lesson).
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setProgress(readStored(lessonSlug, total));
  }, [lessonSlug, total]);

  // While we don't know yet (SSR or first paint), show a placeholder skeleton
  // so the card height doesn't pop when progress appears.
  if (hide) return null;
  if (!mounted) {
    return (
      <div className="mt-3" aria-hidden="true">
        <div className="skeleton h-3 w-full rounded-full" />
      </div>
    );
  }
  if (!progress) return null;
  const pct = Math.min(100, Math.round((progress.completed / Math.max(1, total)) * 100));

  return (
    <div className="mt-3">
      <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
        <span>
          {progress.completed} / {total} done
        </span>
        <span className="tabular-nums">{pct}%</span>
      </div>
      <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-primary-100 dark:bg-primary-800/40">
        <div
          className="h-full rounded-full bg-gradient-to-r from-primary-500 to-primary-700 transition-[width] duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
