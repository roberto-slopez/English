'use client';

import { AnimatePresence, motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface Props {
  /** Stable id of the current slide (e.g. exercise id). When it changes, the transition fires. */
  slideKey: string;
  /**
   * Direction of the transition:
   *   1 = forward (slide enters from right)
   *  -1 = backward (slide enters from left)
   *  Default 0 = fade only.
   */
  direction?: 1 | -1 | 0;
  children: ReactNode;
}

const variants = {
  enter: (dir: number) => ({
    x: dir === 0 ? 0 : dir * 40,
    y: 0,
    opacity: 0,
  }),
  center: {
    x: 0,
    y: 0,
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir === 0 ? 0 : dir * -40,
    y: 0,
    opacity: 0,
  }),
};

/**
 * Wrap any single-screen content (an exercise, the lesson-complete card)
 * in this component to get a smooth horizontal slide + fade when
 * `slideKey` changes. The transition is springy but quick enough not
 * to feel slow.
 */
export default function ExerciseTransition({ slideKey, direction = 1, children }: Props) {
  return (
    <AnimatePresence mode="wait" custom={direction} initial={false}>
      <motion.div
        key={slideKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{ type: 'spring', stiffness: 220, damping: 28, mass: 0.7 }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
