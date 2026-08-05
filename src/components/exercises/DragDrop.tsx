'use client';

import { useMemo, useState } from 'react';
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  PointerSensor,
  TouchSensor,
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
import type { DragDropData, DragDropAnswer } from '../../types.js';
import { getCheckLabel } from '../../lib/utils/i18n-ui.js';

interface Props {
  data: DragDropData;
  answer: DragDropAnswer;
  onAnswer: (userAnswer: number[], correct: boolean) => void;
  disabled?: boolean;
  uiLocale?: string;
}

export default function DragDrop({ data, answer, onAnswer, disabled = false, uiLocale = 'es' }: Props) {
  const hasSlots = !!data.slots && data.slots.length > 0;

  if (hasSlots) {
    return (
      <SlotsVariant
        data={data}
        answer={answer}
        onAnswer={onAnswer}
        disabled={disabled}
        uiLocale={uiLocale}
      />
    );
  }
  return (
    <ReorderVariant data={data} answer={answer} onAnswer={onAnswer} disabled={disabled} uiLocale={uiLocale} />
  );
}

/* ──────────────────────────  Slots variant (with sentence frame) ──────────────────── */

const POOL_TARGET = 'pool';
const slotTargetId = (i: number) => `slot-${i}`;

function SlotsVariant({ data, onAnswer, disabled, uiLocale }: Props) {
  const [placements, setPlacements] = useState<(number | null)[]>(
    () => data.slots!.map(() => null)
  );
  const [activeId, setActiveId] = useState<string | null>(null);

  const placed = new Set(placements.filter((p): p is number => p !== null));

  // Sensors: TouchSensor first so iOS Safari uses its native
  // touchstart/touchmove path (iOS has known bugs with
  // `setPointerCapture`, which the PointerSensor relies on).
  // The `delay: 150, tolerance: 8` constraint lets short taps
  // fall through to button presses while a deliberate press-and-
  // hold starts a drag; if the finger scrolls more than 8px
  // before 150ms elapse, the drag cancels and the page scrolls
  // normally. On desktop the PointerSensor handles mouse drags.
  const sensors = useSensors(
    useSensor(TouchSensor, {
      activationConstraint: { delay: 150, tolerance: 8 },
    }),
    useSensor(PointerSensor, { activationConstraint: { distance: 12 } }),
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
        <p className="text-base font-medium text-slate-500 dark:text-slate-400">
          Drag the words into the blank spaces to form the sentence.
        </p>

        {/* Sentence with drop targets. `flex flex-wrap` so the slots
            reflow onto multiple lines on narrow viewports and don't
            overflow horizontally. */}
        <div className="flex flex-wrap items-center gap-2 rounded-2xl border-2 border-dashed border-primary-200 bg-white p-4 text-base leading-loose text-slate-900 dark:border-primary-800 dark:bg-slate-800 dark:text-slate-100">
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
          {placed.size === data.tokens.length ? (
            <span className="text-base italic text-slate-400 dark:text-slate-500">
              All words placed
            </span>
          ) : (
            // Enumerate SOURCE indices directly so each token's key
            // and dnd-kit id stay stable across re-renders. (Earlier
            // versions used `available.map(...)` with a `.find()`
            // lookup that returned the wrong id after any placement
            // change, which is why drop landed on the wrong slot.)
            data.tokens.map((tok, idx) =>
              placed.has(idx) ? null : (
                <DraggableToken key={idx} id={String(idx)} label={tok} />
              )
            )
          )}
        </PoolDrop>

        <div className="flex w-full justify-end sm:w-auto">
          <button
            type="button"
            onClick={submit}
            disabled={disabled || placements.some((p) => p === null)}
            className="touch-target flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-primary-600 to-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:from-primary-700 hover:to-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-none disabled:bg-slate-300 disabled:text-slate-500 dark:from-primary-500 dark:to-indigo-500 dark:hover:from-primary-600 dark:hover:to-indigo-600 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 sm:w-auto"
          >
            {getCheckLabel(uiLocale)}
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
  // `<div>` (not `<span>`) so we get real block geometry — a proper
  // bounding rect for `closestCenter` hit-testing on touch, and a
  // 44px-tall drop target.
  return (
    <div
      ref={setNodeRef}
      style={{ minWidth: '4.5rem' }}
      className={`inline-flex h-11 flex-1 basis-auto items-center justify-center rounded-lg border-2 align-middle text-sm font-semibold transition sm:text-base ${
        isOver
          ? 'drag-over border-primary-500 bg-primary-50 text-primary-800 dark:bg-primary-700 dark:text-white'
          : filled
            ? 'border-primary-500 bg-primary-100 text-primary-800 dark:bg-primary-700 dark:text-white'
            : 'border-dashed border-slate-300 bg-slate-50 text-slate-400 dark:border-slate-600 dark:bg-slate-800/40 dark:text-slate-500'
      }`}
    >
      {content}
    </div>
  );
}

function PoolDrop({ id, children }: { id: string; children: React.ReactNode }) {
  const { setNodeRef, isOver } = useDroppable({ id });
  return (
    <div
      ref={setNodeRef}
      className={`flex flex-wrap gap-2 rounded-2xl border-2 p-3 transition sm:p-4 ${
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
  // `<div>` (not `<span>`) so the hit area is the full 44x44 box, not
  // just the glyph extents. iOS Safari's inline-element hit-testing
  // is unreliable for narrow text spans.
  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={`drag-source touch-manipulation inline-flex min-h-[44px] min-w-[44px] cursor-grab select-none items-center justify-center rounded-lg border border-primary-300 bg-white px-3 py-2 text-sm font-semibold text-primary-700 shadow-sm transition active:cursor-grabbing hover:border-primary-500 hover:bg-primary-50 hover:text-primary-800 sm:text-base dark:border-primary-700 dark:bg-slate-800 dark:text-primary-300 dark:hover:border-primary-500 dark:hover:bg-primary-700 dark:hover:text-white ${
        isDragging ? 'opacity-30' : ''
      }`}
    >
      {label}
    </div>
  );
}

function TokenGhost({ label }: { label: string }) {
  return (
    <span className="drag-source touch-manipulation inline-flex cursor-grabbing items-center rounded-lg border border-primary-500 bg-primary-100 px-3 py-2 text-base font-semibold text-primary-800 shadow-lg dark:border-primary-500 dark:bg-primary-700 dark:text-white">
      {label}
    </span>
  );
}

/* ──────────────────────────  Reorder variant (no sentence frame) ─────────────────── */

const posTargetId = (i: number) => `pos-${i}`;

function ReorderVariant({ data, onAnswer, disabled, uiLocale }: Props) {
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
    useSensor(TouchSensor, {
      activationConstraint: { delay: 150, tolerance: 8 },
    }),
    useSensor(PointerSensor, { activationConstraint: { distance: 12 } }),
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
        <p className="text-base font-medium text-slate-500 dark:text-slate-400">
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
        <div className="flex w-full justify-end sm:w-auto">
          <button
            type="button"
            onClick={submit}
            disabled={disabled}
            className="touch-target flex min-h-[48px] w-full items-center justify-center rounded-2xl bg-gradient-to-r from-primary-600 to-indigo-600 px-6 py-3.5 text-base font-bold text-white shadow-md transition hover:from-primary-700 hover:to-indigo-700 active:scale-[0.98] disabled:cursor-not-allowed disabled:bg-none disabled:bg-slate-300 disabled:text-slate-500 dark:from-primary-500 dark:to-indigo-500 dark:hover:from-primary-600 dark:hover:to-indigo-600 dark:disabled:bg-slate-800 dark:disabled:text-slate-600 sm:w-auto"
          >
            {getCheckLabel(uiLocale)}
          </button>
        </div>
      </div>

      <DragOverlay dropAnimation={null}>
        {activeLabel != null ? (
          <span className="drag-source touch-manipulation flex min-h-[44px] items-center gap-3 rounded-2xl border-2 border-primary-500 bg-white px-4 py-2 text-base font-medium text-slate-900 shadow-lg dark:bg-slate-800 dark:text-slate-100">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-700 dark:text-white">
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
  // NOTE: no `framer-motion` wrapper here. framer-motion's inline
  // `style.transform` collided with @dnd-kit's inline transform and
  // broke `setPointerCapture` / `elementFromPoint` on touch. The
  // entry animation now lives on the inner `<span>` below, which
  // doesn't carry the dnd-kit ref.
  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };
  return (
    <li
      ref={setNodeRef}
      style={style}
      className={`drag-source touch-manipulation flex min-h-[44px] items-center gap-2 rounded-2xl border-2 bg-white px-3 py-2 text-base font-medium text-slate-900 transition sm:gap-3 sm:px-4 sm:py-3 dark:bg-slate-800 dark:text-slate-100 ${
        isDragging
          ? 'border-primary-500 opacity-30'
          : 'border-slate-200 hover:border-primary-300 dark:border-slate-700'
      } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
      {...attributes}
      {...listeners}
    >
      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700 dark:bg-primary-700 dark:text-white">
        {index}
      </span>
      <span className="flex-1">{label}</span>
      <div className="flex gap-1">
        <button
          type="button"
          onClick={onMoveUp}
          disabled={isFirst || disabled}
          aria-label="Move up"
          className="touch-manipulation inline-flex h-11 w-11 items-center justify-center rounded p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100"
        >
          ▲
        </button>
        <button
          type="button"
          onClick={onMoveDown}
          disabled={isLast || disabled}
          aria-label="Move down"
          className="touch-manipulation inline-flex h-11 w-11 items-center justify-center rounded p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-700 disabled:opacity-30 dark:text-slate-400 dark:hover:bg-slate-700 dark:hover:text-slate-100"
        >
          ▼
        </button>
      </div>
    </li>
  );
}
