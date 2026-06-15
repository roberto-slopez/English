'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { DragDropData, DragDropAnswer } from '../../types.js';

interface Props {
  data: DragDropData;
  answer: DragDropAnswer;
  onAnswer: (userAnswer: number[], correct: boolean) => void;
  disabled?: boolean;
}

/**
 * Renders tokens the user drags into a target sentence.
 * - If `data.slots` is present, the user fills slots inside a sentence frame.
 * - Otherwise, the user reorders a stack of tokens.
 */
export default function DragDrop({ data, answer, onAnswer, disabled = false }: Props) {
  const hasSlots = !!data.slots && data.slots.length > 0;

  if (hasSlots) {
    return (
      <SlotsVariant
        data={data}
        answer={answer}
        onAnswer={onAnswer}
        disabled={disabled}
      />
    );
  }
  return (
    <ReorderVariant data={data} answer={answer} onAnswer={onAnswer} disabled={disabled} />
  );
}

/* ──────────────────────────  Slots variant (with sentence frame) ──────────────────── */

function SlotsVariant({ data, onAnswer, disabled }: Props) {
  const [placements, setPlacements] = useState<(number | null)[]>(
    () => data.slots!.map(() => null)
  );
  const [hoverSlot, setHoverSlot] = useState<number | null>(null);
  const [hoverPool, setHoverPool] = useState(false);

  const placed = new Set(placements.filter((p): p is number => p !== null));
  const available = data.tokens.filter((_, i) => !placed.has(i));

  const onDragStart = (e: React.DragEvent, tokenIndex: number) => {
    if (disabled) return;
    e.dataTransfer.setData('text/plain', String(tokenIndex));
    e.dataTransfer.effectAllowed = 'move';
  };
  const onDragEnd = () => {
    setHoverSlot(null);
    setHoverPool(false);
  };

  const onSlotDrop = (e: React.DragEvent, slotIndex: number) => {
    e.preventDefault();
    if (disabled) return;
    const from = e.dataTransfer.getData('text/plain');
    if (from === '') return;
    const tokenIndex = Number(from);

    // If slot already has a token, send it back to pool.
    const next = [...placements];
    if (next[slotIndex] !== null) {
      // swap or just replace
      next[slotIndex] = tokenIndex;
    } else {
      next[slotIndex] = tokenIndex;
    }
    setPlacements(next);
    setHoverSlot(null);
  };

  const onSlotDragOver = (e: React.DragEvent, slotIndex: number) => {
    e.preventDefault();
    setHoverSlot(slotIndex);
  };

  const onPoolDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (disabled) return;
    const from = e.dataTransfer.getData('text/plain');
    if (from === '') return;
    const tokenIndex = Number(from);
    // Remove from any slot
    setPlacements((prev) => prev.map((p) => (p === tokenIndex ? null : p)));
    setHoverPool(false);
  };

  const submit = () => {
    if (disabled) return;
    if (placements.some((p) => p === null)) return;
    onAnswer(placements as number[], false);
  };

  // Build a regex that splits on the slot placeholders. (kept for future expansion)
  // const slotRe = /\{\{slot\}\}/g;

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        Drag the words into the blank spaces to form the sentence.
      </p>

      {/* Sentence with drop targets */}
      <div className="rounded-2xl border-2 border-dashed border-primary-200 bg-white p-5 text-base leading-loose text-slate-900 dark:border-primary-800 dark:bg-slate-800 dark:text-slate-100">
        {data.slots!.map((_, i) => (
          <span
            key={i}
            onDragOver={(e) => onSlotDragOver(e, i)}
            onDragLeave={() => setHoverSlot(null)}
            onDrop={(e) => onSlotDrop(e, i)}
            className={`mx-1 inline-flex h-9 min-w-[80px] items-center justify-center rounded-lg border-2 align-middle text-sm font-semibold transition ${
              hoverSlot === i
                ? 'drag-over border-primary-500 bg-primary-50 text-primary-800 dark:bg-primary-800/40 dark:text-primary-100'
                : placements[i] !== null
                  ? 'border-primary-500 bg-primary-100 text-primary-800 dark:bg-primary-800/40 dark:text-primary-100'
                  : 'border-dashed border-slate-300 bg-slate-50 text-slate-400 dark:border-slate-600 dark:bg-slate-800/40 dark:text-slate-500'
            }`}
          >
            {placements[i] !== null ? data.tokens[placements[i]!] : '____'}
          </span>
        ))}
      </div>

      {/* Word pool */}
      <div
        onDragOver={(e) => {
          e.preventDefault();
          setHoverPool(true);
        }}
        onDragLeave={() => setHoverPool(false)}
        onDrop={onPoolDrop}
        className={`flex flex-wrap gap-2 rounded-2xl border-2 p-4 transition ${
          hoverPool
            ? 'drag-over border-primary-500 bg-primary-50 dark:bg-primary-800/30'
            : 'border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/30'
        }`}
      >
        {available.length === 0 ? (
          <span className="text-sm italic text-slate-400 dark:text-slate-500">All words placed</span>
        ) : (
          available.map((tok) => {
            const originalIndex = data.tokens.findIndex(
              (t, i) => t === tok && !placed.has(i)
            );
            // find first unplaced
            const idx = data.tokens
              .map((t, i) => ({ t, i }))
              .find(({ i }) => !placed.has(i))?.i ?? originalIndex;
            return (
              <span
                key={`${tok}-${idx}`}
                draggable={!disabled}
                onDragStart={(e) => onDragStart(e, idx)}
                onDragEnd={onDragEnd}
                className="drag-source cursor-grab select-none rounded-lg border border-primary-300 bg-white px-3 py-1.5 text-sm font-semibold text-primary-700 shadow-sm transition active:cursor-grabbing hover:border-primary-500 hover:bg-primary-50 hover:text-primary-800 dark:border-primary-700 dark:bg-slate-800 dark:text-primary-300 dark:hover:border-primary-500 dark:hover:bg-primary-800/30 dark:hover:text-primary-100"
              >
                {tok}
              </span>
            );
          })
        )}
      </div>

      <div className="flex justify-end">
        <button
          type="button"
          onClick={submit}
          disabled={disabled || placements.some((p) => p === null)}
          className="rounded-lg bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Check
        </button>
      </div>
    </div>
  );
}

/* ──────────────────────────  Reorder variant (no sentence frame) ─────────────────── */

function ReorderVariant({ data, onAnswer, disabled }: Props) {
  const [order, setOrder] = useState<number[]>(() => {
    // Shuffle initial order
    const indices = data.tokens.map((_, i) => i);
    for (let i = indices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [indices[i], indices[j]] = [indices[j]!, indices[i]!];
    }
    return indices;
  });
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

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

  const moveUp = (i: number) => {
    if (i === 0 || disabled) return;
    setOrder((prev) => {
      const next = [...prev];
      [next[i - 1], next[i]] = [next[i]!, next[i - 1]!];
      return next;
    });
  };
  const moveDown = (i: number) => {
    if (i === order.length - 1 || disabled) return;
    setOrder((prev) => {
      const next = [...prev];
      [next[i + 1], next[i]] = [next[i]!, next[i + 1]!];
      return next;
    });
  };

  const submit = () => onAnswer(order, false);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        Drag to reorder, or use the arrows. Then check.
      </p>
      <ol className="flex flex-col gap-2">
        {order.map((tokenIdx, position) => (
          <motion.li
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
            className={`drag-source flex items-center gap-3 rounded-2xl border-2 bg-white px-4 py-3 text-base font-medium text-slate-900 transition dark:bg-slate-800 dark:text-slate-100 ${
              hoverIndex === position
                ? 'drag-over border-primary-500'
                : 'border-slate-200 hover:border-primary-300 dark:border-slate-700'
            } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-800/40 dark:text-primary-200">
              {position + 1}
            </span>
            <span className="flex-1">{data.tokens[tokenIdx]}</span>
            <div className="flex gap-1">
              <button
                type="button"
                onClick={() => moveUp(position)}
                disabled={position === 0 || disabled}
                aria-label="Move up"
                className="rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100"
              >
                ▲
              </button>
              <button
                type="button"
                onClick={() => moveDown(position)}
                disabled={position === order.length - 1 || disabled}
                aria-label="Move down"
                className="rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100"
              >
                ▼
              </button>
            </div>
          </motion.li>
        ))}
      </ol>
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
