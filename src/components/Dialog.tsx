import { useEffect, useRef, type ReactNode } from 'react';
import { MotionConfig } from 'framer-motion';

interface Props {
  open: boolean;
  onClose: () => void;
  labelledBy: string;
  describedBy?: string;
  children: ReactNode;
  className?: string;
}

/** Native top-layer modal: browser focus containment, inert background and Escape. */
export default function Dialog({ open, onClose, labelledBy, describedBy, children, className = '' }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const onCloseRef = useRef(onClose);
  onCloseRef.current = onClose;

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog || !open) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    document.body.style.overflow = 'hidden';
    const preferred = dialog.querySelector<HTMLElement>('[data-dialog-autofocus]');
    preferred?.focus({ preventScroll: true });
    const close = () => onCloseRef.current();
    dialog.addEventListener('close', close);
    return () => {
      dialog.removeEventListener('close', close);
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      if (opener?.isConnected) opener.focus({ preventScroll: true });
    };
  }, [open]);

  return (
    <dialog
      ref={dialogRef}
      className={`app-dialog ${className}`}
      aria-labelledby={labelledBy}
      aria-describedby={describedBy}
      onCancel={(event) => { event.preventDefault(); onCloseRef.current(); }}
    >
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </dialog>
  );
}
