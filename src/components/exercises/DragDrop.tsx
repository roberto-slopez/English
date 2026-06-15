'use client';

import { useMemo, useState } from 'react';
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  closestCenter,
  useDraggable,
  useDroppable,
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
  verticalListSortingStrategy,
} from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';
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
 *
 * Uses @dnd-kit which handles pointer, touch, and keyboard input
 * uniformly. The HTML5 drag-and-drop API is *not* used (it doesn't
 * fire on touch).
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

const POOL_TARGET = 'pool';
const slotTargetId = (i: number) => `slot-${i}`;

function SlotsVariant({ data, onAnswer, disabled }: Props) {
  const [placements, setPlacements] = useState<(number | null)[]>(
    () => data.slots!.map(() => null)
  );
  const [activeId, setActiveId] = useState<string | null>(null);

  const placed = new Set(placements.filter((p): p is number => p !== null));
  const available = data.tokens.filter((_, i) => !placed.has(i));

  const sensors = useSensors(
    // distance: 8 means a touch must move 8px before a drag starts;
    // this lets taps fall through to clicks (e.g. the Check button).
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor)
  );

  const handleDragStart = (e: DragStartEvent) => {
    setActiveId(String(e.active.id));
  };

  const handleDragEnd = (e: DragEndEvent) => {
    setActiveId(null);
    const { active, over } = e;
    if (!over) return;
    const tokenIdx = Number(active.id);
    if (!Number.isInteger(tokenIdx)) return;
    const overId = String(over.id);
    if (overId === POOL_TARGET) {
      // Dropped back in the pool → remove from any slot.
      setPlacements((prev) => prev.map((p) => (p === tokenIdx ? null : p)));
      return;
    }
    if (overId.startsWith('slot-')) {
      const slotIdx = Number(overId.slice('slot-'.length));
      if (!Number.isInteger(slotIdx)) return;
      setPlacements((prev) => {
        const next = [...prev];
        next[slotIdx] = tokenIdx;
        return next;
      });
    }
  };

  const submit = () => {
    if (disabled) return;
    if (placements.some((p) => p === null)) return;
    onAnswer(placements as number[], false);
  };

  const activeTokenIdx = activeId != null ? Number(activeId) : null;
  const activeLabel =
    activeTokenIdx != null && Number.isInteger(activeTokenIdx)
      ? data.tokens[activeTokenIdx]
      : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Drag the words into the blank spaces to form the sentence.
        </p>

        {/* Sentence with drop targets */}
        <div className="rounded-2xl border-2 border-dashed border-primary-200 bg-white p-5 text-base leading-loose text-slate-900 dark:border-primary-800 dark:bg-slate-800 dark:text-slate-100">
          {data.slots!.map((_, i) => (
            <SlotDrop
              key={i}
              id={slotTargetId(i)}
              filled={placements[i] !== null}
              content={filledLabel(data, placements, i)}
            />
          ))}
        </div>

        {/* Word pool */}
        <PoolDrop id={POOL_TARGET}>
          {available.length === 0 ? (
            <span className="text-sm italic text-slate-400 dark:text-slate-500">
              All words placed
            </span>
          ) : (
            available.map((tok) => {
              const idx = data.tokens
                .map((t, i) => ({ t, i }))
                .find(({ i }) => !placed.has(i))?.i;
              if (idx == null) return null;
              return (
                <DraggableToken
                  key={`${tok}-${idx}`}
                  id={String(idx)}
                  label={tok}
                />
              );
            })
          )}
        </PoolDrop>

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

      {/* Floating ghost that follows the pointer. */}
      <DragOverlay dropAnimation={null}>
        {activeLabel != null ? <TokenGhost label={activeLabel} /> : null}
      </DragOverlay>
    </DndContext>
  );
}

function filledLabel(
  data: DragDropData,
  placements: (number | null)[],
  i: number
): string {
  const idx = placements[i];
  return idx != null ? data.tokens[idx] : '____';
}

function SlotDrop({
  id,
  filled,
  content,
}: {
  id: string;
  filled: boolean;
  content: string;
}) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <span
      ref={setNodeRef}
      className={`mx-1 inline-flex h-9 min-w-[80px] items-center justify-center rounded-lg border-2 align-middle text-sm font-semibold transition ${
        isOver
          ? 'drag-over border-primary-500 bg-primary-50 text-primary-800 dark:bg-primary-800/40 dark:text-primary-100'
          : filled
            ? 'border-primary-500 bg-primary-100 text-primary-800 dark:bg-primary-800/40 dark:text-primary-100'
            : 'border-dashed border-slate-300 bg-slate-50 text-slate-400 dark:border-slate-600 dark:bg-slate-800/40 dark:text-slate-500'
      }`}
    >
      {content}
    </span>
  );
}

function PoolDrop({ id, children }: { id: string; children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={`flex flex-wrap gap-2 rounded-2xl border-2 p-4 transition ${
        isOver
          ? 'drag-over border-primary-500 bg-primary-50 dark:bg-primary-800/30'
          : 'border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/30'
      }`}
    >
      {children}
    </div>
  );
}

function DraggableToken({ id, label }: { id: string; label: string }) {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id });
  return (
    <span
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`drag-source inline-flex cursor-grab select-none items-center rounded-lg border border-primary-300 bg-white px-3 py-1.5 text-sm font-semibold text-primary-700 shadow-sm transition active:cursor-grabbing hover:border-primary-500 hover:bg-primary-50 hover:text-primary-800 dark:border-primary-700 dark:bg-slate-800 dark:text-primary-300 dark:hover:border-primary-500 dark:hover:bg-primary-800/30 dark:hover:text-primary-100 ${
        isDragging ? 'opacity-30' : ''
      }`}
    >
      {label}
    </span>
  );
}

function TokenGhost({ label }: { label: string }) {
  return (
    <span className="drag-source inline-flex cursor-grabbing items-center rounded-lg border border-primary-500 bg-primary-100 px-3 py-1.5 text-sm font-semibold text-primary-800 shadow-lg dark:border-primary-400 dark:bg-primary-800/60 dark:text-primary-100">
      {label}
    </span>
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
  const [activeId, setActiveId] = useState<string | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, { activationConstraint: { distance: 8 } }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  // SortableContext needs stable string ids. We key by the current
  // position (0..n-1) and look up the original token via `order`.
  const itemIds = useMemo(() => order.map((_, i) => posTargetId(i)), [order]);

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

  const activePos = activeId != null ? itemIds.indexOf(activeId) : -1;
  const activeLabel =
    activePos >= 0 ? data.tokens[order[activePos]!] : null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <div className="flex flex-col gap-4">
        <p className="text-sm font-medium text-slate-500 dark:text-slate-400">
          Drag to reorder, or use the arrows. Then check.
        </p>
        <SortableContext items={itemIds} strategy={verticalListSortingStrategy}>
          <ol className="flex flex-col gap-2">
            {order.map((tokenIdx, position) => (
              <SortableRow
                key={`${tokenIdx}-${position}`}
                id={posTargetId(position)}
                index={position + 1}
                label={data.tokens[tokenIdx]!}
                disabled={disabled ?? false}
                onMoveUp={() => moveUp(position)}
                onMoveDown={() => moveDown(position)}
                isFirst={position === 0}
                isLast={position === order.length - 1}
              />
            ))}
          </ol>
        </SortableContext>
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
          <span className="drag-source flex items-center gap-3 rounded-2xl border-2 border-primary-500 bg-white px-4 py-3 text-base font-medium text-slate-900 shadow-lg dark:bg-slate-800 dark:text-slate-100">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-800/40 dark:text-primary-200">
              {activePos + 1}
            </span>
            <span className="flex-1">{activeLabel}</span>
          </span>
        ) : null}
      </DragOverlay>
    </DndContext>
  );
}

function SortableRow({
  id,
  index,
  label,
  disabled,
  onMoveUp,
  onMoveDown,
  isFirst,
  isLast,
}: {
  id: string;
  index: number;
  label: string;
  disabled: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
  isFirst: boolean;
  isLast: boolean;
}) {
  const { attributes, listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id });
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <motion.li
      ref={setNodeRef}
      style={style}
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
      className={`drag-source flex items-center gap-3 rounded-2xl border-2 bg-white px-4 py-3 text-base font-medium text-slate-900 transition dark:bg-slate-800 dark:text-slate-100 ${
        isDragging
          ? 'border-primary-500 opacity-30'
          : 'border-slate-200 hover:border-primary-300 dark:border-slate-700'
      } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
      {...attributes}
      {...listeners}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-800/40 dark:text-primary-200">
        {index}
      </span>
      <span className="flex-1">{label}</span>
      <div className="flex gap-1">
        <button
          type="button"
          onClick={onMoveUp}
          disabled={isFirst || disabled}
          aria-label="Move up"
          className="rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100"
        >
          ▲
        </button>
        <button
          type="button"
          onClick={onMoveDown}
          disabled={isLast || disabled}
          aria-label="Move down"
          className="rounded p-1 text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100"
        >
          ▼
        </button>
      </div>
    </motion.li>
  );
}
