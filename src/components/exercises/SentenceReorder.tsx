'use client';

import { useMemo, useState } from 'react';
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
  closestCenter,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
} from '@dnd-kit/core';
import {
  SortableContext,
  arrayMove,
  sortableKeyboardCoordinates,
  useSortable,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
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
 * fallback (and remain useful on touch). All interactive controls
 * have a 44x44 minimum hit area and `touch-manipulation` so taps
 * respond immediately.
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

  // Sensors: TouchSensor first so iOS Safari's native touchstart/
  // touchmove path is used (iOS has known bugs with
  // `setPointerCapture`, which the PointerSensor relies on).
  // The TouchSensor's `delay: 150, tolerance: 8` constraint means
  // the user must hold for 150ms and then move less than 8px; if
  // they start scrolling (move > 8px before 150ms), the drag
  // cancels and the browser scrolls as normal. On desktop the
  // PointerSensor handles mouse drags via the 12px distance
  // threshold.
  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: { delay: 150, tolerance: 8 },
    }),
    useSensor(PointerSensor, { activationConstraint: { distance: 12 } }),
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
        <p className="text-base font-medium text-slate-500 dark:text-slate-400">
          Drag the words to form a correct English sentence.
        </p>
        <SortableContext items={itemIds}>
          {/* `flex-wrap` so the chips reflow onto multiple rows on
              narrow viewports (a 5-word sentence on a 360px phone
              would otherwise overflow horizontally). */}
          <div className="flex flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed border-primary-200 bg-white p-3 sm:p-4 dark:border-primary-800 dark:bg-slate-800">
            {order.map((tokenIdx, position) => (
              <SortableChip
                key={`${tokenIdx}-${position}`}
                id={posTargetId(position)}
                label={data.tokens[tokenIdx]!}
                isFirst={position === 0}
                isLast={position === order.length - 1}
                disabled={disabled ?? false}
                onMoveLeft={() => move(position, position - 1)}
                onMoveRight={() => move(position, position + 1)}
              />
            ))}
          </div>
        </SortableContext>
        <p className="text-base text-slate-700 dark:text-slate-200">
          Tip: use the ◀ / ▶ arrows to move one step at a time.
        </p>
        <div className="flex w-full justify-end sm:w-auto">
          <button
            type="button"
            onClick={submit}
            disabled={disabled}
            className="touch-manipulation inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 sm:w-auto dark:disabled:bg-slate-700 dark:disabled:text-slate-500"
          >
            Check
          </button>
        </div>
      </div>

      <DragOverlay dropAnimation={null}>
        {activeLabel != null ? (
          <span className="drag-source touch-manipulation inline-flex min-h-[44px] cursor-grabbing items-center rounded-xl border-2 border-primary-500 bg-primary-100 px-3 py-2 text-base font-semibold text-primary-800 shadow-lg dark:border-primary-500 dark:bg-primary-700 dark:text-white">
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
  // Plain `<div>` (not `motion.div`) so the dnd-kit inline
  // `style.transform` isn't clobbered by framer-motion's inline
  // style. The className still does the visual lift.
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`drag-source touch-manipulation inline-flex min-h-[44px] items-center gap-1 rounded-xl border-2 px-2 py-1.5 text-sm font-semibold transition sm:px-3 sm:py-2 sm:text-base ${
        isDragging
          ? 'border-primary-500 opacity-40'
          : 'border-primary-300 bg-white text-slate-900 hover:border-primary-500 hover:bg-primary-50 hover:text-primary-800 dark:border-primary-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-primary-500 dark:hover:bg-primary-700 dark:hover:text-white'
      } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
      {...attributes}
      {...listeners}
    >
      <span className="px-1 sm:px-0">{label}</span>
      <span className="ml-0.5 flex flex-col sm:ml-1">
        <button
          type="button"
          onClick={onMoveLeft}
          disabled={isFirst || disabled}
          aria-label="Move left"
          className="touch-manipulation inline-flex h-7 w-7 items-center justify-center rounded text-xs text-slate-500 hover:bg-slate-100 hover:text-primary-500 disabled:opacity-30 sm:h-11 sm:w-11 sm:text-base dark:text-slate-400 dark:hover:bg-slate-700"
        >
          ◀
        </button>
        <button
          type="button"
          onClick={onMoveRight}
          disabled={isLast || disabled}
          aria-label="Move right"
          className="touch-manipulation inline-flex h-7 w-7 items-center justify-center rounded text-xs text-slate-500 hover:bg-slate-100 hover:text-primary-500 disabled:opacity-30 sm:h-11 sm:w-11 sm:text-base dark:text-slate-400 dark:hover:bg-slate-700"
        >
          ▶
        </button>
      </span>
    </div>
  );
}
