'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import type { SentenceReorderData, SentenceReorderAnswer } from '../../types.js';

interface Props {
  data: SentenceReorderData;
  answer: SentenceReorderAnswer;
  onAnswer: (userAnswer: number[], correct: boolean) => void;
  disabled?: boolean;
}

export default function SentenceReorder({ data, answer: _answer, onAnswer, disabled = false }: Props) {
  // Tokens appear in random initial order (seeded for SSR/CSR parity via the
  // index itself, so the order is stable per page).
  const [order, setOrder] = useState<number[]>(() => {
    const indices = data.tokens.map((_, i) => i);
    let seed = 31;
    for (let i = indices.length - 1; i > 0; i--) {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff;
      const j = seed % (i + 1);
      [indices[i], indices[j]] = [indices[j]!, indices[i]!];
    }
    return indices;
  });
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const onDragStart = (e: React.DragEvent, positionIndex: number) => {
    if (disabled) return;
    e.dataTransfer.setData('text/plain', String(positionIndex));
    e.dataTransfer.effectAllowed = 'move';
    setDraggedIndex(positionIndex);
  };
  const onDragOver = (e: React.DragEvent, positionIndex: number) => {
    e.preventDefault();
    if (draggedIndex !== null && positionIndex !== draggedIndex) {
      setHoverIndex(positionIndex);
    }
  };
  const onDrop = (e: React.DragEvent, positionIndex: number) => {
    e.preventDefault();
    if (disabled) return;
    const from = Number(e.dataTransfer.getData('text/plain'));
    if (Number.isNaN(from)) return;
    setOrder((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(positionIndex, 0, moved!);
      return next;
    });
    setDraggedIndex(null);
    setHoverIndex(null);
  };
  const onDragEnd = () => {
    setDraggedIndex(null);
    setHoverIndex(null);
  };

  const move = (from: number, to: number) => {
    if (disabled) return;
    if (to < 0 || to >= order.length) return;
    setOrder((prev) => {
      const next = [...prev];
      const [moved] = next.splice(from, 1);
      next.splice(to, 0, moved!);
      return next;
    });
  };

  const submit = () => onAnswer(order, false);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        Drag the words to form a correct English sentence.
      </p>
      <div ref={trackRef} className="flex flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed border-primary-200 bg-white p-4 dark:border-primary-800 dark:bg-slate-800">
        {order.map((tokenIdx, position) => (
          <motion.span
            key={`${tokenIdx}-${position}`}
            layout
            draggable={!disabled}
            onDragStart={((e: React.DragEvent) => onDragStart(e, position)) as never}
            onDragOver={((e: React.DragEvent) => onDragOver(e, position)) as never}
            onDrop={((e: React.DragEvent) => onDrop(e, position)) as never}
            onDragEnd={onDragEnd as never}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: position * 0.04, duration: 0.25, ease: 'easeOut' }}
            className={`drag-source inline-flex items-center gap-1 rounded-xl border-2 px-3 py-2 text-base font-semibold transition ${
              hoverIndex === position
                ? 'drag-over border-primary-500 bg-primary-100 text-primary-800 dark:bg-primary-800/40 dark:text-primary-100'
                : 'border-primary-300 bg-white text-slate-900 hover:border-primary-500 hover:bg-primary-50 hover:text-primary-800 dark:border-primary-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-primary-500 dark:hover:bg-primary-800/30 dark:hover:text-primary-100'
            } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
          >
            {data.tokens[tokenIdx]}
            <span className="ml-1 flex flex-col text-xs leading-none text-slate-500 dark:text-slate-400">
              <button
                type="button"
                onClick={() => move(position, position - 1)}
                disabled={position === 0 || disabled}
                aria-label="Move left"
                className="hover:text-primary-500 disabled:opacity-30"
              >
                ◀
              </button>
              <button
                type="button"
                onClick={() => move(position, position + 1)}
                disabled={position === order.length - 1 || disabled}
                aria-label="Move right"
                className="hover:text-primary-500 disabled:opacity-30"
              >
                ▶
              </button>
            </span>
          </motion.span>
        ))}
      </div>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        Tip: use the ◀ / ▶ arrows to move one step at a time.
      </p>
      <div className="flex justify-end">
        <button
          type="button"
          onClick={submit}
          disabled={disabled}
          className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Check
        </button>
      </div>
    </div>
  );
}
