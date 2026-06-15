'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import type { MatchingData, MatchingAnswer } from '../../types.js';

interface Props {
  data: MatchingData;
  answer: MatchingAnswer;
  onAnswer: (userAnswer: { leftIndex: number; rightIndex: number }[], correct: boolean) => void;
  disabled?: boolean;
}

/** Display the right column in a fixed shuffled order (seeded by index for SSR/CSR parity). */
function shuffleRightIndices(length: number, seed: number): number[] {
  const indices = Array.from({ length }, (_, i) => i);
  for (let i = indices.length - 1; i > 0; i--) {
    const j = (seed * (i + 1) + i) % (i + 1);
    [indices[i], indices[j]] = [indices[j]!, indices[i]!];
  }
  return indices;
}

export default function Matching({ data, onAnswer, disabled = false }: Props) {
  const [pairs, setPairs] = useState<Map<number, number>>(new Map());
  const [selectedLeft, setSelectedLeft] = useState<number | null>(null);
  const rightOrder = shuffleRightIndices(data.right.length, 7);

  const toggleLeft = (i: number) => {
    if (disabled) return;
    setSelectedLeft((prev) => (prev === i ? null : i));
  };

  const clickRight = (displayIndex: number) => {
    if (disabled || selectedLeft === null) return;
    setPairs((prev) => {
      const next = new Map(prev);
      // If this right index is already paired to some other left, unpair it
      for (const [l, r] of next) {
        if (r === displayIndex) next.delete(l);
      }
      next.set(selectedLeft, displayIndex);
      return next;
    });
    setSelectedLeft(null);
  };

  const unpair = (leftIndex: number) => {
    if (disabled) return;
    setPairs((prev) => {
      const next = new Map(prev);
      next.delete(leftIndex);
      return next;
    });
  };

  const submit = () => {
    if (disabled) return;
    if (pairs.size !== data.left.length) return;
    const userPairs = Array.from(pairs.entries()).map(([leftIndex, rightIndex]) => ({
      leftIndex,
      rightIndex,
    }));
    // For "irregular_verbs" matching the right is in a permuted display order,
    // but answer.pairs uses the ORIGINAL right indices. The data.right is in
    // its original order; the display order is the shuffle of rightOrder. The
    // rightIndex stored in `pairs` is the ORIGINAL right index (we store by
    // right.originalIndex, not display position). Adjust this component so
    // that we always store the ORIGINAL right index in `pairs`. Easier: pass
    // `originalIndex` to the click handler.

    onAnswer(userPairs, false);
  };

  // We need to map right.displayIndex back to right.originalIndex when storing.
  // Let's redo state: store by original right index.
  return (
    <PairComponent
      data={data}
      rightOrder={rightOrder}
      selectedLeft={selectedLeft}
      pairs={pairs}
      onToggleLeft={toggleLeft}
      onClickRight={clickRight}
      onUnpair={unpair}
      onSubmit={submit}
      disabled={disabled}
    />
  );
}

function PairComponent({
  data,
  rightOrder,
  selectedLeft,
  pairs,
  onToggleLeft,
  onClickRight,
  onUnpair,
  onSubmit,
  disabled,
}: {
  data: MatchingData;
  rightOrder: number[];
  selectedLeft: number | null;
  pairs: Map<number, number>;
  onToggleLeft: (i: number) => void;
  onClickRight: (originalIndex: number) => void;
  onUnpair: (leftIndex: number) => void;
  onSubmit: () => void;
  disabled: boolean;
}) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-base font-medium text-slate-500 dark:text-slate-400">
        Click a word on the left, then click its match on the right.
      </p>
      <div className="grid grid-cols-2 gap-3">
        {/* Left column */}
        <div className="flex flex-col gap-2">
          {data.left.map((item, i) => {
            const isSelected = selectedLeft === i;
            const isPaired = pairs.has(i);
            return (
              <motion.button
                key={i}
                type="button"
                onClick={() => onToggleLeft(i)}
                disabled={disabled}
                initial={{ opacity: 0, x: -8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04, duration: 0.25, ease: 'easeOut' }}
                whileHover={disabled ? undefined : { scale: 1.01, x: 2 }}
                whileTap={disabled ? undefined : { scale: 0.98 }}
                className={`touch-manipulation flex min-h-[44px] items-center justify-between rounded-2xl border-2 px-4 py-3 text-left text-base font-semibold transition ${
                  isSelected
                    ? 'border-primary-500 bg-primary-100 text-primary-800 dark:bg-primary-800/40 dark:text-primary-100'
                    : isPaired
                      ? 'border-success-500 bg-success-500/10 text-success-700 dark:bg-success-500/20 dark:text-success-200'
                      : 'border-slate-200 bg-white text-slate-900 hover:border-primary-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100'
                } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
              >
                <span className="truncate">{item}</span>
                {isPaired && (
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onUnpair(i);
                    }}
                    aria-label="Remove pair"
                    className="touch-manipulation ml-2 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded p-2 text-base text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
                  >
                    ✕
                  </button>
                )}
              </motion.button>
            );
          })}
        </div>
        {/* Right column (shuffled) */}
        <div className="flex flex-col gap-2">
          {rightOrder.map((originalIndex, displayPos) => {
            const isPaired = Array.from(pairs.values()).includes(originalIndex);
            return (
              <motion.button
                key={originalIndex}
                type="button"
                onClick={() => onClickRight(originalIndex)}
                disabled={disabled}
                initial={{ opacity: 0, x: 8 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: displayPos * 0.04, duration: 0.25, ease: 'easeOut' }}
                whileHover={disabled ? undefined : { scale: 1.01, x: -2 }}
                whileTap={disabled ? undefined : { scale: 0.98 }}
                className={`touch-manipulation min-h-[44px] rounded-2xl border-2 px-4 py-3 text-left text-base font-semibold transition ${
                  isPaired
                    ? 'border-success-500 bg-success-500/10 text-success-700 dark:bg-success-500/20 dark:text-success-200'
                    : selectedLeft !== null
                      ? 'border-primary-300 bg-white text-slate-900 hover:border-primary-500 hover:bg-primary-50 dark:border-primary-700 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-primary-800/30'
                      : 'border-slate-200 bg-white text-slate-900 hover:border-primary-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100'
                } ${disabled ? 'cursor-not-allowed opacity-60' : ''}`}
              >
                {data.right[originalIndex]}
              </motion.button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col items-stretch gap-3 text-sm sm:flex-row sm:items-center sm:justify-between sm:gap-2">
        <span className="font-medium text-slate-500 dark:text-slate-400">
          {pairs.size} / {data.left.length} paired
        </span>
        <button
          type="button"
          onClick={onSubmit}
          disabled={disabled || pairs.size !== data.left.length}
          className="touch-manipulation inline-flex min-h-[44px] w-full items-center justify-center rounded-lg bg-primary px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-primary-700 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
        >
          Check
        </button>
      </div>
    </div>
  );
}
