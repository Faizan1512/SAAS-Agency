'use client';

import { useEffect, useState } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';

const stats = [
  { value: 5, suffix: '+', label: 'Years of experience' },
  { value: 15, suffix: '+', label: 'Apps & products shipped' },
  { value: 100, suffix: '%', label: 'Code ownership, always yours' },
  { value: 2, suffix: '-4 wks', label: 'From kickoff to working MVP' },
];

function CountUp({ end, start, duration = 1200 }: { end: number; start: boolean; duration?: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    let frame: number;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frame = requestAnimationFrame(animate);
      else setCount(end);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [start, end, duration]);

  return <>{count}</>;
}

export function Stats() {
  const { ref, visible } = useScrollReveal<HTMLDivElement>();
  const [checkedCount, setCheckedCount] = useState(0);

  useEffect(() => {
    if (!visible) return;
    stats.forEach((_, i) => {
      setTimeout(() => setCheckedCount((c) => Math.max(c, i + 1)), i * 350 + 200);
    });
  }, [visible]);

  return (
    <section className="relative py-16 lg:py-24">
      <div ref={ref} className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-xl">
          {stats.map((stat, i) => {
            const checked = checkedCount > i;
            return (
              <div
                key={i}
                className={`flex items-center gap-5 border-b border-border px-6 py-6 last:border-b-0 transition-opacity duration-500 sm:px-8 ${
                  checked ? 'opacity-100' : 'opacity-40'
                }`}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-primary/5">
                  {checked && (
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none">
                      <path
                        d="M4 12l5 5L20 6"
                        stroke="hsl(var(--primary))"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="animate-draw-check"
                      />
                    </svg>
                  )}
                </span>
                <div className="flex flex-1 flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <span className="text-base font-medium text-foreground/80">{stat.label}</span>
                  <span className="font-display text-2xl font-bold text-foreground sm:text-3xl">
                    <CountUp end={stat.value} start={checked} />
                    {stat.suffix}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}