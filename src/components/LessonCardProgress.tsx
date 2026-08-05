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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setProgress(readStored(lessonSlug, total));
  }, [lessonSlug, total]);

  if (hide) return null;
  if (!mounted) {
    return (
      <div className="mt-3" aria-hidden="true">
        <div className="h-2 w-full animate-pulse rounded-full bg-slate-100 dark:bg-slate-700/60" />
      </div>
    );
  }

  const completedCount = progress?.completed ?? 0;
  const pct = Math.min(100, Math.round((completedCount / Math.max(1, total)) * 100));
  const isCompleted = pct === 100;

  return (
    <div className="mt-4">
      <div className="flex items-center justify-between text-xs font-bold text-slate-700 dark:text-slate-300">
        <span>
          {completedCount > 0
            ? `${completedCount} / ${total} completados`
            : 'Sin empezar'}
        </span>
        <span className={`tabular-nums ${isCompleted ? 'text-emerald-600 dark:text-emerald-400' : 'text-primary-600 dark:text-primary-400'}`}>
          {isCompleted ? '✓ 100%' : `${pct}%`}
        </span>
      </div>
      <div className="mt-1.5 h-2 w-full overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700/60">
        <div
          className={`h-full rounded-full transition-all duration-500 ease-out ${
            isCompleted
              ? 'bg-emerald-500'
              : pct > 0
              ? 'bg-primary-600 dark:bg-primary-500'
              : 'bg-transparent'
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}
