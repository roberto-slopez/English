'use client';

import { useEffect } from 'react';
import confetti from 'canvas-confetti';

/**
 * One-shot confetti celebration. Mount with `trigger=true` and the
 * burst fires once; when the parent unmounts or `trigger` flips to
 * false, nothing else happens (no animation loop, no DOM).
 *
 * The default pattern is "two side cannons + a top burst" — visually
 * punchier than a single center explosion and reads as "you finished
 * a thing" without feeling overdone.
 */
interface Props {
  trigger: boolean;
  /** Optional override for the particle count. */
  particleCount?: number;
}

export default function ConfettiBurst({ trigger, particleCount = 120 }: Props) {
  useEffect(() => {
    if (!trigger) return;

    // Respect reduced-motion users — confetti can trigger vestibular issues.
    if (typeof window !== 'undefined') {
      const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduced) return;
    }

    const colors = ['#6366f1', '#10b981', '#f43f5e', '#f59e0b', '#3b82f6'];

    const fire = (originX: number) => {
      confetti({
        particleCount,
        angle: 60 + (originX < 0.5 ? 0 : 120),
        spread: 70,
        startVelocity: 55,
        origin: { x: originX, y: 0.7 },
        colors,
        scalar: 0.9,
        ticks: 200,
      });
    };

    // Left + right cannons
    fire(0.2);
    setTimeout(() => fire(0.8), 120);
    // Center burst
    setTimeout(() => {
      confetti({
        particleCount: particleCount / 2,
        spread: 360,
        startVelocity: 30,
        origin: { x: 0.5, y: 0.55 },
        colors,
        scalar: 0.8,
        ticks: 200,
      });
    }, 240);
  }, [trigger, particleCount]);

  return null;
}
