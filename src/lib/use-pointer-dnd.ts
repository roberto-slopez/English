// Pointer Events based drag-and-drop. The HTML5 D&D API
// (draggable / onDragStart / dataTransfer) does not fire on touch
// devices, so a single Pointer Events implementation covers mouse,
// touch, and pen uniformly.
//
// Usage:
//   const dnd = usePointerDnd<number>({
//     onDrop: (from, to) => …,
//     disabled: someFlag,
//   });
//   <span {...dnd.draggableProps(itemId)}>…</span>
//   <div {...dnd.dropTargetProps(targetId)}>…</div>
//
// Behaviour:
//   - pointerdown on a draggable captures the pointer and starts the
//     drag. We listen for pointermove/pointerup on `document` so the
//     drag survives the pointer leaving the source element.
//   - On pointermove we hit-test via document.elementFromPoint and
//     walk up to the nearest [data-dnd-target-id]; the matching id
//     is exposed as `hoverId` for visual feedback.
//   - On pointerup (or pointercancel) we either dispatch onDrop or
//     cancel, then clear state and release the capture.
//   - The hook is a no-op when `disabled` is true.

import { useCallback, useEffect, useRef, useState } from 'react';

export type DragId = string | number;

export interface UsePointerDndOptions<T extends DragId> {
  /** Called once when the user drops `from` onto a registered target `to`. */
  onDrop: (from: T, to: T) => void;
  onDragStart?: (id: T) => void;
  onDragEnd?: (id: T | null) => void;
  /** If true, pointerdown does not start a drag. */
  disabled?: boolean;
}

export interface UsePointerDndResult<T extends DragId> {
  /** Id of the item currently being dragged, or null. */
  draggingId: T | null;
  /** Id of the drop target currently under the pointer, or null. */
  hoverId: T | null;
  /** Spread these onto a draggable element. */
  draggableProps: (id: T) => { onPointerDown: (e: React.PointerEvent) => void };
  /** Spread these onto a drop target element. */
  dropTargetProps: (id: T) => { 'data-dnd-target-id': string };
}

const DRAG_TARGET_ATTR = 'data-dnd-target-id';

export function usePointerDnd<T extends DragId>({
  onDrop,
  onDragStart,
  onDragEnd,
  disabled = false,
}: UsePointerDndOptions<T>): UsePointerDndResult<T> {
  const [draggingId, setDraggingId] = useState<T | null>(null);
  const [hoverId, setHoverId] = useState<T | null>(null);

  // Active pointer + source element for the current drag. Stored in
  // refs (not state) so updates don't re-render and don't lag behind
  // the pointer.
  const activePointerIdRef = useRef<number | null>(null);
  const sourceElRef = useRef<HTMLElement | null>(null);
  const dragStartIdRef = useRef<T | null>(null);

  // Find the closest drop target ancestor at (x, y). Returns the id
  // registered via `dropTargetProps`, or null if the pointer is over
  // non-target content (page background, the source itself when no
  // target wraps it, etc.).
  const findTargetAt = useCallback((x: number, y: number): T | null => {
    const el = document.elementFromPoint(x, y);
    if (!el) return null;
    const targetEl = (el as HTMLElement).closest<HTMLElement>(
      `[${DRAG_TARGET_ATTR}]`
    );
    if (!targetEl) return null;
    const raw = targetEl.getAttribute(DRAG_TARGET_ATTR);
    if (raw == null) return null;
    // The attribute is always a string. Coerce to T — for numeric
    // ids we round-trip via Number(); for string ids we use as-is.
    return (typeof dragStartIdRef.current === 'number'
      ? (Number(raw) as unknown as T)
      : (raw as unknown as T));
  }, []);

  const handlePointerDown = useCallback(
    (e: React.PointerEvent, id: T) => {
      if (disabled) return;
      // Primary button only (mouse); touch/pen always pass.
      if (e.pointerType === 'mouse' && e.button !== 0) return;
      e.preventDefault();
      const el = e.currentTarget as HTMLElement;
      el.setPointerCapture(e.pointerId);
      activePointerIdRef.current = e.pointerId;
      sourceElRef.current = el;
      dragStartIdRef.current = id;
      setDraggingId(id);
      setHoverId(null);
      onDragStart?.(id);
    },
    [disabled, onDragStart]
  );

  // Document-level move/up listeners. Re-attached every time a drag
  // starts; cleaned up when the drag ends or the component unmounts.
  useEffect(() => {
    if (draggingId === null) return;

    const onMove = (e: PointerEvent) => {
      if (e.pointerId !== activePointerIdRef.current) return;
      const target = findTargetAt(e.clientX, e.clientY);
      setHoverId((prev) => (prev === target ? prev : target));
    };

    const finish = (e: PointerEvent, cancelled: boolean) => {
      if (e.pointerId !== activePointerIdRef.current) return;
      const sourceEl = sourceElRef.current;
      if (sourceEl && sourceEl.hasPointerCapture(e.pointerId)) {
        sourceEl.releasePointerCapture(e.pointerId);
      }
      const fromId = dragStartIdRef.current;
      const target = cancelled ? null : findTargetAt(e.clientX, e.clientY);
      activePointerIdRef.current = null;
      sourceElRef.current = null;
      dragStartIdRef.current = null;
      if (!cancelled && fromId !== null && target !== null && target !== fromId) {
        onDrop(fromId, target);
      }
      setDraggingId(null);
      setHoverId(null);
      onDragEnd?.(fromId);
    };

    const onUp = (e: PointerEvent) => finish(e, false);
    const onCancel = (e: PointerEvent) => finish(e, true);

    document.addEventListener('pointermove', onMove);
    document.addEventListener('pointerup', onUp);
    document.addEventListener('pointercancel', onCancel);
    return () => {
      document.removeEventListener('pointermove', onMove);
      document.removeEventListener('pointerup', onUp);
      document.removeEventListener('pointercancel', onCancel);
    };
  }, [draggingId, findTargetAt, onDrop, onDragEnd]);

  const draggableProps = useCallback(
    (id: T) => ({
      onPointerDown: (e: React.PointerEvent) => handlePointerDown(e, id),
    }),
    [handlePointerDown]
  );

  const dropTargetProps = useCallback(
    (id: T) => ({ [DRAG_TARGET_ATTR]: String(id) }) as {
      'data-dnd-target-id': string;
    },
    []
  );

  return { draggingId, hoverId, draggableProps, dropTargetProps };
}
