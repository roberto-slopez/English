'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  /** Show inline (no positioning) when true. Defaults to overlay. */
  inline?: boolean;
  /** Override the random encouragement message. */
  message?: string;
  /** Stable seed so the message doesn't change on every render. */
  seed?: number;
  /** When true, the parent card should also shake. */
  shake?: boolean;
}

const MESSAGES = [
  'Not quite — try again!',
  'So close! Give it another shot.',
  "Don't worry, you can do it.",
  'Almost! One more try.',
  'Keep going — practice makes progress!',
  "You've got this!",
  'Take a breath and try again.',
];

function pickMessage(seed?: number): string {
  if (seed !== undefined) {
    return MESSAGES[seed % MESSAGES.length]!;
  }
  return MESSAGES[Math.floor(Math.random() * MESSAGES.length)]!;
}

const shakeKeyframes = [0, -8, 8, -8, 8, -4, 4, 0];

export default function WrongFeedback({ inline = false, message, seed, shake = true }: Props) {
  const text = useMemo(() => message ?? pickMessage(seed), [message, seed]);

  const content = (
    <div className="pointer-events-none relative flex flex-col items-center justify-center">
      <motion.svg
        width="60"
        height="60"
        viewBox="0 0 64 64"
        className="drop-shadow"
        aria-hidden="true"
        initial={{ scale: 0, x: 0, rotate: 0 }}
        animate={shake ? { scale: 1, x: shakeKeyframes, rotate: 0 } : { scale: 1, x: 0, rotate: 0 }}
        transition={
          shake
            ? { duration: 0.4, times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 0.9, 1] }
            : { type: 'spring', stiffness: 360, damping: 18 }
        }
      >
        <circle
          cx="32"
          cy="32"
          r="28"
          fill="none"
          stroke="#f43f5e"
          strokeWidth="4"
          className="wrong-circle"
        />
        <path
          d="M22 22 L42 42 M42 22 L22 42"
          fill="none"
          stroke="#f43f5e"
          strokeWidth="5"
          strokeLinecap="round"
          className="wrong-x"
        />
      </motion.svg>
      <motion.p
        className="mt-2 text-base font-semibold text-danger-700 dark:text-danger-300"
        aria-live="polite"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.25 }}
      >
        {text}
      </motion.p>
    </div>
  );

  if (inline) return content;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-danger/5"
      aria-live="polite"
      role="status"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.2 }}
    >
      {content}
    </motion.div>
  );
}
