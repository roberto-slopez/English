'use client';

import { useMemo } from 'react';
import { motion } from 'framer-motion';

interface Props {
  /** Show inline (no positioning) when true. Defaults to overlay. */
  inline?: boolean;
  /** Override the random motivational message. */
  message?: string;
  /** Stable seed so the message doesn't change on every render. */
  seed?: number;
  /**
   * Points earned for this answer. When provided, a "+N" floater rises
   * out of the check, and a small breakdown pill shows underneath.
   * Omit for a clean checkmark (e.g. when no points system is active).
   */
  points?: {
    awarded: number;
    base: number;
    firstTry: number;
    streak: number;
  };
}

const MESSAGES = [
  'Nice!',
  'Awesome!',
  'You got it!',
  'Brilliant!',
  'Great job!',
  'Spot on!',
  'Exactly!',
  'Nailed it!',
  'Perfect!',
  'Well done!',
];

function pickMessage(seed?: number): string {
  if (seed !== undefined) {
    return MESSAGES[seed % MESSAGES.length]!;
  }
  return MESSAGES[Math.floor(Math.random() * MESSAGES.length)]!;
}

const PARTICLE_COUNT = 18;
const COLORS = ['#10b981', '#34d399', '#4f46e5', '#fbbf24', '#f472b6', '#22d3ee', '#a78bfa'];

/** Pre-compute particle offsets so SSR + CSR match. */
function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    return {
      id: i,
      // Spread particles evenly around a 360° ring for a real burst.
      angle,
      distance: 60 + ((i * 17) % 30), // 60–90px ring radius
      delay: (i * 23) % 80,           // 0–80ms stagger
      duration: 700 + ((i * 41) % 400),
      color: COLORS[i % COLORS.length]!,
      size: 4 + ((i * 13) % 6),        // 4–10px
      rot: ((i * 89) % 720) - 360,
    };
  });
}

export default function CorrectFeedback({ inline = false, message, seed, points }: Props) {
  const text = useMemo(() => message ?? pickMessage(seed), [message, seed]);
  const particles = useMemo(() => generateParticles(PARTICLE_COUNT), []);

  const content = (
    <div className="pointer-events-none relative flex flex-col items-center justify-center">
      {/* Outer ring that pulses outward — the "shockwave" of a correct answer */}
      <motion.div
        className="absolute rounded-full border-2 border-emerald-400"
        style={{ width: 72, height: 72 }}
        initial={{ scale: 0.6, opacity: 0.7 }}
        animate={{ scale: 2.4, opacity: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        aria-hidden="true"
      />
      {/* Inner ring — slightly delayed, gives a layered "boom" feel */}
      <motion.div
        className="absolute rounded-full border border-emerald-300"
        style={{ width: 72, height: 72 }}
        initial={{ scale: 0.6, opacity: 0.6 }}
        animate={{ scale: 1.8, opacity: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
        aria-hidden="true"
      />

      {/* Animated checkmark — the green disk drops in with a real spring,
          the tick itself draws along the path with stroke-dashoffset. */}
      <motion.div
        className="relative"
        initial={{ scale: 0, rotate: -25 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: 'spring', stiffness: 380, damping: 16, mass: 0.6 }}
      >
        {/* Soft glow behind the disk */}
        <div
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(16,185,129,0.35) 0%, rgba(16,185,129,0) 70%)',
            filter: 'blur(6px)',
            transform: 'scale(1.4)',
          }}
          aria-hidden="true"
        />
        <svg
          width="72"
          height="72"
          viewBox="0 0 64 64"
          className="relative drop-shadow-lg"
          aria-hidden="true"
        >
          <motion.circle
            cx="32"
            cy="32"
            r="28"
            fill="none"
            stroke="#10b981"
            strokeWidth="4"
            initial={{ pathLength: 0, opacity: 0.4 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          />
          <motion.path
            d="M18 33 L28 43 L46 23"
            fill="none"
            stroke="#10b981"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: 'easeOut', delay: 0.18 }}
          />
        </svg>

        {/* Radial particle burst — tiny dots fly out from the disk center */}
        <div className="absolute inset-0 overflow-visible">
          {particles.map((p) => (
            <motion.span
              key={p.id}
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: `${p.size}px`,
                height: `${p.size}px`,
                backgroundColor: p.color,
                marginLeft: `-${p.size / 2}px`,
                marginTop: `-${p.size / 2}px`,
              }}
              initial={{ x: 0, y: 0, opacity: 1, scale: 1, rotate: 0 }}
              animate={{
                x: Math.cos(p.angle) * p.distance,
                y: Math.sin(p.angle) * p.distance,
                opacity: 0,
                scale: 0.4,
                rotate: p.rot,
              }}
              transition={{
                duration: p.duration / 1000,
                delay: p.delay / 1000,
                ease: [0.2, 0.7, 0.3, 1],
              }}
            />
          ))}
        </div>

        {/* "+N" points floater — rises above the check and fades out */}
        {points && (
          <motion.div
            className="pointer-events-none absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-display text-2xl font-extrabold text-amber-500 drop-shadow-[0_2px_8px_rgba(245,158,11,0.6)] dark:text-amber-300"
            initial={{ y: 0, opacity: 0, scale: 0.5 }}
            animate={{ y: -56, opacity: [0, 1, 1, 0], scale: [0.5, 1.1, 1, 0.95] }}
            transition={{ duration: 1.2, times: [0, 0.2, 0.7, 1], ease: 'easeOut' }}
            aria-live="polite"
          >
            +{points.awarded}
          </motion.div>
        )}
      </motion.div>

      <motion.p
        className="mt-2 text-lg font-semibold text-success-600 dark:text-success-400"
        aria-live="polite"
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.25 }}
      >
        {text}
      </motion.p>

      {/* Bonus breakdown pill — only show when there's something interesting
          to brag about (first-try bonus or active streak). */}
      {points && (points.firstTry > 0 || points.streak > 0) && (
        <motion.div
          className="mt-1 flex items-center gap-1.5 rounded-full bg-amber-100/80 px-2.5 py-0.5 text-xs font-semibold text-amber-700 dark:bg-amber-900/40 dark:text-amber-200"
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.25 }}
        >
          {points.firstTry > 0 && <span>🎯 first try</span>}
          {points.firstTry > 0 && points.streak > 0 && <span aria-hidden="true">·</span>}
          {points.streak > 0 && <span>🔥 streak +{points.streak}</span>}
        </motion.div>
      )}
    </div>
  );

  if (inline) return content;

  return (
    <motion.div
      className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center rounded-2xl bg-success/5"
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
