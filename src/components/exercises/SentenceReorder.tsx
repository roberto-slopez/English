'use client';

import { useMemo, useState } from 'react';
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
import type { SentenceReorderData, SentenceReorderAnswer } from '../../types.js';

interface Props {
  data: SentenceReorderData;
  answer: SentenceReorderAnswer;
  onAnswer: (userAnswer: number[], correct: boolean) => void;
  disabled?: boolean;
}

const posTargetId = (i: number) => `pos-${i}`;

/**
 * Reorders sentence tokens into a horizontal strip. Uses @dnd-kit,
 * which handles mouse, touch, and keyboard input uniformly.
 *
 * The ◀ / ▶ arrow buttons remain as a one-step keyboard / a11y
 * fallback (and remain useful on touch).
 */
export default function SentenceReorder({
  data,
  answer: _answer,
  onAnswer,
  disabled = false,
}: Props) {
  // Seeded shuffle so SSR/CSR see the same initial order.
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
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const itemIds = useMemo(() => order.map((_, i) => posTargetId(i)), [order]);

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

  const handleDragStart = (e: DragStartEvent) => {
    setActiveId(String(e.active.id));
  };

  const handleDragEnd = (e: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = e;
    if (!over || active.id === over.id) return;
    const oldIndex = itemIds.indexOf(String(active.id));
    const newIndex = itemIds.indexOf(String(over.id));
    if (oldIndex < 0 || newIndex < 0) return;
    setOrder((prev) => arrayMove(prev, oldIndex, newIndex));
  };

  const submit = () => onAnswer(order, false);

  const activePos = activeId != null ? itemIds.indexOf(activeId) : -1;
  const activeTokenIdx = activePos >= 0 ? order[activePos]! : null;
  const activeLabel = activeTokenIdx != null ? data.tokens[activeTokenIdx] : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Drag the words to form a correct English sentence.
        </p>
        <SortableContext items={itemIds} strategy={horizontalListSortingStrategy}>
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed border-primary-200 bg-white p-4 dark:border-primary-800 dark:bg-slate-800">
            {order.map((tokenIdx, position) => (
              <SortableChip
                key={`${tokenIdx}-${position}`}
                id={posTargetId(position)}
                label={data.tokens[tokenIdx]!}
                isFirst={position === 0}
                isLast={position === order.length - 1}
                disabled={disabled}
                onMoveLeft={() => move(position, position - 1)}
                onMoveRight={() => move(position, position + 1)}
              />
            ))}
          </div>
        </SortableContext>
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

      <DragOverlay dropAnimation={null}>
        {activeLabel != null ? (
          <span className="drag-source rounded-xl border-2 border-primary-500 bg-primary-100 px-3 py-2 text-base font-semibold text-primary-800 shadow-lg dark:border-primary-400 dark:bg-primary-800/60 dark:text-primary-100">
            {activeLabel}
          </span>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

function SortableChip({
  id,
  label,
  isFirst,
  isLast,
  disabled,
  onMoveLeft,
  onMoveRight,
}: {
  id: string;
  label: string;
  isFirst: boolean;
  isLast: boolean;
  disabled: boolean;
  onMoveLeft: () => void;
  onMoveRight: () => void;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <motion.span
      ref={setNodeRef}
      style={style}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`drag-source inline-flex items-center gap-1 rounded-xl border-2 px-3 py-2 text-base font-semibold transition ${
        isDragging
          ? 'border-primary-500 opacity-40'
          : 'border-primary-300 bg-white text-slate-900 hover:border-primary-500 hover:bg-primary-50 hover:text-primary-800 dark:border-primary-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-primary-500 dark:hover:bg-primary-800/30 dark:hover:text-primary-100'
      } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
      {...attributes}
      {...listeners}
    >
      {label}
      <span className="ml-1 flex flex-col text-xs leading-none text-slate-500 dark:text-slate-400">
        <button
          type="button"
          onClick={onMoveLeft}
          disabled={isFirst || disabled}
          aria-label="Move left"
          className="hover:text-primary-500 disabled:opacity-30"
        >
          ◀
        </button>
        <button
          type="button"
          onClick={onMoveRight}
          disabled={isLast || disabled}
          aria-label="Move right"
          className="hover:text-primary-500 disabled:opacity-30"
        >
          ▶
        </button>
      </span>
    </motion.span>
  );
}
