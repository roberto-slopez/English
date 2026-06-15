// Pointer Events based drag-and-drop. The HTML5 D&D API
// (draggable / onDragStart / dataTransfer) does not fire on touch
// devices, so a single Pointer Events + Touch Events implementation
// covers mouse, touch, and pen uniformly.
//
// Why native listeners (not React's onPointerDown)?
//   - React's synthetic onPointerDown is delegated to the root, which
//     means React has to walk up the React tree to dispatch it. On
//     iOS Safari this is occasionally dropped or arrives late.
//   - React's onTouchStart is a *passive* listener, so e.preventDefault
//     is a no-op. We need a non-passive listener to suppress the
//     browser's default scroll-while-dragging behaviour.
//   - Native listeners also let us add the move/up listeners
//     synchronously in the start handler (no useEffect gap where a
//     fast pointerup can be missed).
//
// Usage:
//   const dnd = usePointerDnd<string>({
//     onDrop: (from, to) => …,
//     disabled: someFlag,
//   });
//   <span ref={dnd.draggableRef(id)}>…</span>
//   <div {...dnd.dropTargetProps(id)}>…</div>
//
// The hook is a no-op when `disabled` is true.

import { useCallback, useRef, useState } from 'react';

export type DragId = string | number;

export interface UsePointerDndOptions<T extends DragId> {
  /** Called once when the user drops `from` onto a registered target `to`. */
  onDrop: (from: T, to: T) => void;
  onDragStart?: (id: T) => void;
  onDragEnd?: (id: T | null) => void;
  /** If true, the hook no-ops on drag start. */
  disabled?: boolean;
}

export interface UsePointerDndResult<T extends DragId> {
  /** Id of the item currently being dragged, or null. */
  draggingId: T | null;
  /** Id of the drop target currently under the pointer, or null. */
  hoverId: T | null;
  /** Ref callback to attach to a draggable element. Adds native
   *  pointerdown + touchstart listeners that drive the drag. */
  draggableRef: (id: T) => (el: HTMLElement | null) => void;
  /** Spread these onto a drop target element. */
  dropTargetProps: (id: T) => { 'data-dnd-target-id': string };
}

const DRAG_TARGET_ATTR = 'data-dnd-target-id';

// Walk up from the element at (x, y) to the nearest ancestor that
// registered itself as a drop target. Returns the id, or null if
// the pointer is over non-target content.
function readTargetAt<T extends DragId>(
  x: number,
  y: number,
  coerceToNumeric: boolean
): T | null {
  const el = document.elementFromPoint(x, y);
  if (!el) return null;
  const targetEl = (el as HTMLElement).closest<HTMLElement>(
    `[${DRAG_TARGET_ATTR}]`
  );
  if (!targetEl) return null;
  const raw = targetEl.getAttribute(DRAG_TARGET_ATTR);
  if (raw == null) return null;
  return (coerceToNumeric
    ? (Number(raw) as unknown as T)
    : (raw as unknown as T));
}

export function usePointerDnd<T extends DragId>({
  onDrop,
  onDragStart,
  onDragEnd,
  disabled = false,
}: UsePointerDndOptions<T>): UsePointerDndResult<T> {
  const [draggingId, setDraggingId] = useState<T | null>(null);
  const [hoverId, setHoverId] = useState<T | null>(null);

  // Mirror the latest options in a ref so the start handler (which
  // is attached once) always sees fresh onDrop / onDragStart.
  const optsRef = useRef({ onDrop, onDragStart, onDragEnd, disabled });
  optsRef.current = { onDrop, onDragStart, onDragEnd, disabled };

  // Active gesture state. Kept in a ref (not state) so the listeners
  // we add in `startDrag` see consistent values without a render.
  const gestureRef = useRef<{
    pointerId: number | null;
    touchId: number | null;
    startId: T | null;
    cleanup: () => void;
  }>({
    pointerId: null,
    touchId: null,
    startId: null,
    cleanup: () => {},
  });

  // Hit-test helper that uses the kind of id the consumer passed in
  // to decide whether to coerce the string attribute to a number.
  const findTargetAt = useCallback(
    (x: number, y: number) =>
      readTargetAt<T>(x, y, typeof gestureRef.current.startId === 'number'),
    []
  );

  const draggableRef = useCallback(
    (id: T) => (el: HTMLElement | null) => {
      if (!el) return;

      // Belt-and-suspenders: ensure the browser doesn't hijack the
      // touch for scroll/pan, even if a global stylesheet missed
      // this element. The same styles are also in `.drag-source`.
      el.style.touchAction = 'none';
      el.style.userSelect = 'none';
      (el.style as CSSStyleDeclaration & { webkitUserSelect?: string }).webkitUserSelect =
        'none';

      const startDrag = (
        _x: number,
        _y: number,
        pointerId: number | null,
        touchId: number | null
      ) => {
        gestureRef.current.pointerId = pointerId;
        gestureRef.current.touchId = touchId;
        gestureRef.current.startId = id;
        setDraggingId(id);
        setHoverId(null);
        optsRef.current.onDragStart?.(id);

        const onMove = (ev: Event) => {
          let cx: number;
          let cy: number;
          if (typeof TouchEvent !== 'undefined' && ev instanceof TouchEvent) {
            // Find the right touch (by identifier if we have one).
            const list = ev.touches;
            const t =
              touchId !== null
                ? Array.from(list).find((tt) => tt.identifier === touchId)
                : list[0];
            if (!t) return;
            cx = t.clientX;
            cy = t.clientY;
          } else {
            const pe = ev as PointerEvent;
            if (pointerId !== null && pe.pointerId !== pointerId) return;
            cx = pe.clientX;
            cy = pe.clientY;
          }
          const target = findTargetAt(cx, cy);
          setHoverId((prev) => (prev === target ? prev : target));
        };

        const finish = (ev: Event, cancelled: boolean) => {
          let cx = 0;
          let cy = 0;
          if (typeof TouchEvent !== 'undefined' && ev instanceof TouchEvent) {
            const list = ev.changedTouches;
            const t =
              touchId !== null
                ? Array.from(list).find((tt) => tt.identifier === touchId)
                : list[0];
            if (!t) return;
            cx = t.clientX;
            cy = t.clientY;
          } else {
            const pe = ev as PointerEvent;
            if (pointerId !== null && pe.pointerId !== pointerId) return;
            cx = pe.clientX;
            cy = pe.clientY;
          }

          const fromId = gestureRef.current.startId;
          const target = cancelled ? null : findTargetAt(cx, cy);
          gestureRef.current.pointerId = null;
          gestureRef.current.touchId = null;
          gestureRef.current.startId = null;
          if (
            !cancelled &&
            fromId !== null &&
            target !== null &&
            target !== fromId
          ) {
            optsRef.current.onDrop(fromId, target);
          }
          setDraggingId(null);
          setHoverId(null);
          optsRef.current.onDragEnd?.(fromId);
          teardown();
        };

        const onUp = (ev: Event) => finish(ev, false);
        const onCancel = (ev: Event) => finish(ev, true);

        const teardown = () => {
          document.removeEventListener('pointermove', onMove);
          document.removeEventListener('pointerup', onUp);
          document.removeEventListener('pointercancel', onCancel);
          document.removeEventListener('touchmove', onMove);
          document.removeEventListener('touchend', onUp);
          document.removeEventListener('touchcancel', onCancel);
        };
        gestureRef.current.cleanup = teardown;

        // Listen for both pointer and touch on the document so the
        // rest of the gesture is caught regardless of which event
        // family the browser uses.
        document.addEventListener('pointermove', onMove);
        document.addEventListener('pointerup', onUp);
        document.addEventListener('pointercancel', onCancel);
        document.addEventListener('touchmove', onMove, { passive: false });
        document.addEventListener('touchend', onUp, { passive: false });
        document.addEventListener('touchcancel', onCancel, { passive: false });
      };

      const onPointerDown = (e: PointerEvent) => {
        if (optsRef.current.disabled) return;
        if (e.pointerType === 'mouse' && e.button !== 0) return;
        e.preventDefault();
        startDrag(e.clientX, e.clientY, e.pointerId, null);
      };

      const onTouchStart = (e: TouchEvent) => {
        if (optsRef.current.disabled) return;
        if (e.touches.length === 0) return;
        e.preventDefault();
        const t = e.touches[0];
        if (!t) return;
        startDrag(t.clientX, t.clientY, null, t.identifier);
      };

      el.addEventListener('pointerdown', onPointerDown);
      el.addEventListener('touchstart', onTouchStart, { passive: false });

      // No React unmount callback for ref callbacks in the typical
      // case, but if React re-uses the same DOM node with a new id
      // we want to clean up the old listeners. We stash the cleanup
      // on the element itself and run it from the next ref callback
      // for the same node, plus on a beforeunload for safety.
      const prevCleanup = (el as unknown as { __dndCleanup?: () => void })
        .__dndCleanup;
      if (prevCleanup) prevCleanup();
      (el as unknown as { __dndCleanup?: () => void }).__dndCleanup = () => {
        el.removeEventListener('pointerdown', onPointerDown);
        el.removeEventListener('touchstart', onTouchStart);
        gestureRef.current.cleanup();
      };
    },
    [findTargetAt]
  );

  const dropTargetProps = useCallback(
    (id: T) => ({ [DRAG_TARGET_ATTR]: String(id) }) as {
      'data-dnd-target-id': string;
    },
    []
  );

  return { draggingId, hoverId, draggableRef, dropTargetProps };
}
