'use client';

import { useEffect, useState } from 'react';

interface VocabWord {
  word: string;
  pos: string;
  def: string;
  es: string;
}

interface Props {
  lessonSlug: string;
  chunkIdx: number;
  startWordNum: number;
  endWordNum: number;
  words: VocabWord[];
  totalExercises: number;
}

/**
 * Card shown in /vocabulary for one chunk of 50 words.
 *
 * Renders the full word list (collapsed by default) so the user can study
 * before clicking into the 2 quiz exercises. Progress bar uses the same
 * localStorage key the runner writes to.
 */
export default function VocabularyChunkCard({
  lessonSlug,
  chunkIdx,
  startWordNum,
  endWordNum,
  words,
  totalExercises,
}: Props) {
  const [open, setOpen] = useState(false);
  const [progress, setProgress] = useState<{ completed: number; total: number } | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const raw = localStorage.getItem(`english.progress.${lessonSlug}`);
      if (raw) {
        const parsed = JSON.parse(raw) as { completed?: number; total?: number };
        if (parsed.completed && parsed.completed > 0) {
          setProgress({ completed: parsed.completed, total: parsed.total || totalExercises });
        }
      }
    } catch {
      /* ignore */
    }
  }, [lessonSlug, totalExercises]);

  const pct = progress
    ? Math.min(100, Math.round((progress.completed / Math.max(1, totalExercises)) * 100))
    : 0;

  return (
    <a
      href={`/lessons/${lessonSlug}`}
      className="flex h-full flex-col rounded-2xl border border-primary-100 bg-white p-6 shadow-sm transition hover:border-primary-300 hover:shadow-md dark:border-primary-800 dark:bg-slate-800"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-bold uppercase tracking-wide text-primary-600 dark:text-primary-400">
          Chunk {String(chunkIdx).padStart(2, '0')}
        </span>
        <span className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-semibold text-primary-700 dark:bg-primary-600 dark:text-white">
          Words {startWordNum}&ndash;{endWordNum}
        </span>
      </div>
      <h2 className="mt-2 font-display text-xl font-semibold text-slate-900 dark:text-slate-100">
        Top 2000 &mdash; chunk {chunkIdx}
      </h2>
      <p className="mt-1 line-clamp-2 text-base text-slate-700 dark:text-slate-200">
        Two questions testing this chunk's 50 most-frequent English words.
      </p>

      {/* Mini word preview: show the first 8 words; rest hidden by default */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {words.slice(0, 8).map((w) => (
          <span
            key={w.word}
            className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-xs font-medium text-slate-700 dark:border-slate-600 dark:bg-slate-700 dark:text-slate-200"
          >
            {w.word}
          </span>
        ))}
        {words.length > 8 && (
          <button
            type="button"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setOpen((o) => !o);
            }}
            className="rounded-md border border-dashed border-slate-300 px-2 py-0.5 text-xs font-medium text-slate-500 hover:bg-slate-50 dark:border-slate-600 dark:text-slate-400 dark:hover:bg-slate-700"
          >
            {open ? '− hide' : `+ ${words.length - 8} more`}
          </button>
        )}
      </div>

      {open && (
        <div className="mt-3 grid max-h-64 grid-cols-2 gap-1.5 overflow-y-auto rounded-md border border-slate-200 bg-slate-50 p-2 text-xs dark:border-slate-600 dark:bg-slate-900/40">
          {words.map((w) => (
            <div key={w.word} className="flex flex-col">
              <span className="font-semibold text-slate-800 dark:text-slate-200">{w.word}</span>
              <span className="truncate text-slate-500 dark:text-slate-400" title={w.def}>
                {w.def}
              </span>
            </div>
          ))}
        </div>
      )}

      {progress && (
        <div className="mt-3">
          <div className="flex items-center justify-between text-xs font-medium text-slate-500 dark:text-slate-400">
            <span>
              {progress.completed} / {totalExercises} correct
            </span>
            <span className="tabular-nums">{pct}%</span>
          </div>
          <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-primary-100 dark:bg-primary-800/40">
            <div
              className="h-full rounded-full bg-primary transition-[width] duration-300"
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      )}
    </a>
  );
}
