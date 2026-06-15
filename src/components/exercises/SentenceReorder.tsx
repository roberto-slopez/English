'use client';

import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import type { SentenceReorderData, SentenceReorderAnswer } from '../../types.js';
import { usePointerDnd } from '../../lib/use-pointer-dnd.js';

interface Props {
  data: SentenceReorderData;
  answer: SentenceReorderAnswer;
  onAnswer: (userAnswer: number[], correct: boolean) => void;
  disabled?: boolean;
}

const posTargetId = (i: number) => `pos-${i}`;

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

  const dnd = usePointerDnd<string>({
    disabled,
    onDrop: (from, to) => {
      if (from === to) return;
      const fromIdx = Number(from);
      const toIdx = Number(to);
      if (!Number.isInteger(fromIdx) || !Number.isInteger(toIdx)) return;
      move(fromIdx, toIdx);
    },
  });

  const draggingPos = dnd.draggingId != null ? Number(dnd.draggingId) : null;
  const draggingTokenIdx = draggingPos != null ? order[draggingPos] : null;

  const submit = () => onAnswer(order, false);

  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
        Drag the words to form a correct English sentence.
      </p>
      <div className="flex flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed border-primary-200 bg-white p-4 dark:border-primary-800 dark:bg-slate-800">
        {order.map((tokenIdx, position) => {
          const isHover = dnd.hoverId === posTargetId(position);
          const isThisDragging = draggingPos === position;
          return (
            <motion.span
              key={`${tokenIdx}-${position}`}
              layout
              {...dnd.dropTargetProps(posTargetId(position))}
              {...dnd.draggableProps(String(position))}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: position * 0.04, duration: 0.25, ease: 'easeOut' }}
              className={`drag-source inline-flex items-center gap-1 rounded-xl border-2 px-3 py-2 text-base font-semibold transition ${
                isHover
                  ? 'drag-over border-primary-500 bg-primary-100 text-primary-800 dark:bg-primary-800/40 dark:text-primary-100'
                  : 'border-primary-300 bg-white text-slate-900 hover:border-primary-500 hover:bg-primary-50 hover:text-primary-800 dark:border-primary-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-primary-500 dark:hover:bg-primary-800/30 dark:hover:text-primary-100'
              } ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${
                isThisDragging ? 'scale-95 opacity-50' : ''
              }`}
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
          );
        })}
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

      <DragPreview
        isDragging={draggingTokenIdx != null}
        label={draggingTokenIdx != null ? data.tokens[draggingTokenIdx] : null}
      />
    </div>
  );
}

/**
 * Fixed-positioned ghost of the dragged token that follows the
 * pointer. Lives in a portal so it isn't clipped by parent
 * overflow / transform.
 */
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
      className="drag-source rounded-xl border-2 border-primary-500 bg-primary-100 px-3 py-2 text-base font-semibold text-primary-800 shadow-lg dark:border-primary-400 dark:bg-primary-800/60 dark:text-primary-100"
    >
      {label}
    </span>,
    document.body
  );
}
