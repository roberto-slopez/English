import { uiText } from '../../lib/ui-labels.js';
'use client';

import { useId } from 'react';
import { m } from 'framer-motion';

interface Props {
  current: number;
  total: number;
  /** Optional motivational text shown next to the percentage. */
  label?: string;
  /** When true, also render a small numeric label "Exercise 3 of 20". */
  showCount?: boolean;
  uiLocale?: string;
}

export default function ProgressBar({
  current,
  total,
  label,
  showCount = true,
  uiLocale = 'en',
}: Props) {
  const safeTotal = Math.max(1, total);
  const safeCurrent = Math.min(Math.max(0, current), safeTotal);
  const percent = Math.round((safeCurrent / safeTotal) * 100);
  const id = useId();

  return (
    <div className="w-full" aria-label={uiText(uiLocale,'progress')}>
      <div className="flex items-center justify-between text-base font-medium text-primary-700 dark:text-primary-300">
        {showCount && (
          <span>
            {uiText(uiLocale,'exerciseCount',{count:safeCurrent,total:safeTotal})}
          </span>
        )}
        {label && <span className="text-slate-700 dark:text-slate-200">{label}</span>}
        <m.span
          key={percent}
          className="tabular-nums text-slate-700 dark:text-slate-200"
          aria-hidden="true"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25 }}
        >
          {percent}%
        </m.span>
      </div>
      <div
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={safeTotal}
        aria-valuenow={safeCurrent}
        aria-valuetext={uiText(uiLocale,'exerciseCount',{count:safeCurrent,total:safeTotal})}
        id={id}
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-primary-100 dark:bg-primary-800/40"
      >
        <m.div
          className="h-full w-full origin-left rounded-full bg-primary-600"
          // Animate from previous percent → new percent when the prop changes.
          initial={false}
          animate={{ scaleX: percent / 100 }}
          transition={{ type: 'spring', stiffness: 140, damping: 22, mass: 0.6 }}
        />
      </div>
    </div>
  );
}
