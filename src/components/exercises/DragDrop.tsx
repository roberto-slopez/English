'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import type { DragDropData, DragDropAnswer } from '../../types.js';
import { usePointerDnd } from '../../lib/use-pointer-dnd.js';

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
 *
 * Drag-and-drop is implemented with Pointer Events (via usePointerDnd),
 * not the HTML5 D&D API, so the same gesture works on touch devices.
 * The ▲/▼ buttons on the reorder variant stay as a keyboard /
 * screen-reader fallback.
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

// Drop targets are namespaced: `slot-${i}` for sentence slots, `pool`
// for the word pool. The draggables always use the token's index in
// `data.tokens`, so the hook can route drops correctly.
const POOL_TARGET = 'pool';
const slotTargetId = (i: number) => `slot-${i}`;

function SlotsVariant({ data, onAnswer, disabled }: Props) {
  const [placements, setPlacements] = useState<(number | null)[]>(
    () => data.slots!.map(() => null)
  );

  const placed = new Set(placements.filter((p): p is number => p !== null));
  const available = data.tokens.filter((_, i) => !placed.has(i));

  const dnd = usePointerDnd<string>({
    disabled,
    onDrop: (from, to) => {
      const tokenIdx = Number(from);
      if (!Number.isInteger(tokenIdx)) return;
      if (to === POOL_TARGET) {
        // Remove the token from any slot it currently occupies.
        setPlacements((prev) => prev.map((p) => (p === tokenIdx ? null : p)));
        return;
      }
      // target looks like `slot-${i}`.
      const slotMatch = /^slot-(\d+)$/.exec(to);
      if (!slotMatch) return;
      const slotIndex = Number(slotMatch[1]);
      setPlacements((prev) => {
        const next = [...prev];
        next[slotIndex] = tokenIdx;
        return next;
      });
    },
  });

  // Token currently being dragged — dim the source.
  const draggingTokenIdx =
    dnd.draggingId != null ? Number(dnd.draggingId) : null;
  const isDragging = draggingTokenIdx !== null;

  const submit = () => {
    if (disabled) return;
    if (placements.some((p) => p === null)) return;
    onAnswer(placements as number[], false);
  };

  // Drag preview: a fixed-positioned clone of the source token that
  // follows the pointer. Only mounted on the client.
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        Drag the words into the blank spaces to form the sentence.
      </p>

      {/* Sentence with drop targets */}
      <div className="rounded-2xl border-2 border-dashed border-primary-200 bg-white p-5 text-base leading-loose text-slate-900 dark:border-primary-800 dark:bg-slate-800 dark:text-slate-100">
        {data.slots!.map((_, i) => {
          const isHover = dnd.hoverId === slotTargetId(i);
          const filled = placements[i] !== null;
          return (
            <span
              key={i}
              {...dnd.dropTargetProps(slotTargetId(i))}
              className={`mx-1 inline-flex h-9 min-w-[80px] items-center justify-center rounded-lg border-2 align-middle text-sm font-semibold transition ${
                isHover
                  ? 'drag-over border-primary-500 bg-primary-50 text-primary-800 dark:bg-primary-800/40 dark:text-primary-100'
                  : filled
                    ? 'border-primary-500 bg-primary-100 text-primary-800 dark:bg-primary-800/40 dark:text-primary-100'
                    : 'border-dashed border-slate-300 bg-slate-50 text-slate-400 dark:border-slate-600 dark:bg-slate-800/40 dark:text-slate-500'
              }`}
            >
              {filled ? data.tokens[placements[i]!] : '____'}
            </span>
          );
        })}
      </div>

      {/* Word pool */}
      <div
        {...dnd.dropTargetProps(POOL_TARGET)}
        className={`flex flex-wrap gap-2 rounded-2xl border-2 p-4 transition ${
          dnd.hoverId === POOL_TARGET
            ? 'drag-over border-primary-500 bg-primary-50 dark:bg-primary-800/30'
            : 'border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/30'
        }`}
      >
        {available.length === 0 ? (
          <span className="text-sm italic text-slate-400 dark:text-slate-500">All words placed</span>
        ) : (
          available.map((tok) => {
            const idx = data.tokens
              .map((t, i) => ({ t, i }))
              .find(({ i }) => !placed.has(i))?.i;
            if (idx == null) return null;
            const isThisDragging = draggingTokenIdx === idx;
            return (
              <span
                key={`${tok}-${idx}`}
                {...dnd.draggableProps(String(idx))}
                className={`drag-source cursor-grab select-none rounded-lg border border-primary-300 bg-white px-3 py-1.5 text-sm font-semibold text-primary-700 shadow-sm transition active:cursor-grabbing hover:border-primary-500 hover:bg-primary-50 hover:text-primary-800 dark:border-primary-700 dark:bg-slate-800 dark:text-primary-300 dark:hover:border-primary-500 dark:hover:bg-primary-800/30 dark:hover:text-primary-100 ${
                  isThisDragging ? 'scale-95 opacity-40' : ''
                }`}
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

      <DragPreview
        isDragging={isDragging}
        label={draggingTokenIdx != null ? data.tokens[draggingTokenIdx] : null}
      />
    </div>
  );
}

/* ──────────────────────────  Reorder variant (no sentence frame) ─────────────────── */

const posTargetId = (i: number) => `pos-${i}`;

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

  const dnd = usePointerDnd<string>({
    disabled,
    onDrop: (from, to) => {
      if (from === to) return;
      const fromIdx = Number(from);
      const toIdx = Number(to);
      if (!Number.isInteger(fromIdx) || !Number.isInteger(toIdx)) return;
      setOrder((prev) => {
        const next = [...prev];
        const [moved] = next.splice(fromIdx, 1);
        next.splice(toIdx, 0, moved!);
        return next;
      });
    },
  });

  // Position currently being dragged, derived from the hook's id.
  const draggingPos = dnd.draggingId != null ? Number(dnd.draggingId) : null;
  const draggingTokenIdx = draggingPos != null ? order[draggingPos] : null;

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
        {order.map((tokenIdx, position) => {
          const isHover = dnd.hoverId === posTargetId(position);
          const isThisDragging = draggingPos === position;
          return (
            <motion.li
              key={`${tokenIdx}-${position}`}
              layout
              {...dnd.dropTargetProps(posTargetId(position))}
              {...dnd.draggableProps(String(position))}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: position * 0.04, duration: 0.25, ease: 'easeOut' }}
              className={`drag-source flex items-center gap-3 rounded-2xl border-2 bg-white px-4 py-3 text-base font-medium text-slate-900 transition dark:bg-slate-800 dark:text-slate-100 ${
                isHover
                  ? 'drag-over border-primary-500'
                  : 'border-slate-200 hover:border-primary-300 dark:border-slate-700'
              } ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${
                isThisDragging ? 'scale-[0.98] opacity-50' : ''
              }`}
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
          );
        })}
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

      <DragPreview
        isDragging={draggingTokenIdx != null}
        label={draggingTokenIdx != null ? data.tokens[draggingTokenIdx] : null}
      />
    </div>
  );
}

/* ──────────────────────────  Drag preview (portal) ─────────────────── */

// Renders a fixed-positioned "ghost" of the source element that
// follows the pointer while a drag is in progress. Lives in a portal
// so it's not clipped by parent overflow / transform.
function DragPreview({
  isDragging,
  label,
}: {
  isDragging: boolean;
  label: string | null;
}) {
  const [pos, setPos] = useState<{ x: number; y: number } | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!isDragging) {
      setPos(null);
      return;
    }
    const onMove = (e: PointerEvent) => setPos({ x: e.clientX, y: e.clientY });
    document.addEventListener('pointermove', onMove);
    return () => document.removeEventListener('pointermove', onMove);
  }, [isDragging]);

  if (!mounted || !isDragging || !pos || label == null) return null;
  return createPortal(
    <span
      aria-hidden
      style={{
        position: 'fixed',
        left: 0,
        top: 0,
        transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
        pointerEvents: 'none',
        zIndex: 9999,
      }}
      className="drag-source rounded-lg border border-primary-500 bg-primary-100 px-3 py-1.5 text-sm font-semibold text-primary-800 shadow-lg dark:border-primary-400 dark:bg-primary-800/60 dark:text-primary-100"
    >
      {label}
    </span>,
    document.body
  );
}
