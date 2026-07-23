'use client';

import { Check, X, Minus } from 'lucide-react';

const rows = [
  { feature: 'Time to first deployment', faizantech: '2–4 weeks', traditional: '3–6 months' },
  { feature: 'AI-first approach', faizantech: 'Built in from day one', traditional: 'Bolted on later' },
  { feature: 'Weekly demos & feedback loops', faizantech: true, traditional: false },
  { feature: 'Direct access to the developer', faizantech: true, traditional: false },
  { feature: 'Fixed-scope pricing', faizantech: true, traditional: false },
  { feature: 'Post-launch optimization', faizantech: '30+ days included', traditional: 'Extra retainer' },
  { feature: 'Cloud security hardening', faizantech: true, traditional: 'minus' },
  { feature: 'Mobile + web + AI in one team', faizantech: true, traditional: false },
  { feature: 'Code & architecture ownership', faizantech: true, traditional: false },
];

function Cell({ value }: { value: string | boolean }) {
  if (value === true)
    return (
      <div className="flex justify-center">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15">
          <Check className="h-4 w-4 text-primary" />
        </div>
      </div>
    );
  if (value === false)
    return (
      <div className="flex justify-center">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-destructive/10">
          <X className="h-4 w-4 text-destructive/70" />
        </div>
      </div>
    );
  if (value === 'minus')
    return (
      <div className="flex justify-center">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary">
          <Minus className="h-4 w-4 text-muted-foreground" />
        </div>
      </div>
    );
  return <span className="text-sm text-muted-foreground">{value}</span>;
}

export function Comparison() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary">Why FaizanTech</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Not just another dev shop.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Here&apos;s what sets us apart from traditional agencies and
            freelancers.
          </p>
        </div>

        <div className="mt-16 overflow-hidden rounded-2xl border border-border">
          {/* Header */}
          <div className="grid grid-cols-3 border-b border-border bg-card/50">
            <div className="p-6">
              <span className="text-sm font-medium text-muted-foreground">Feature</span>
            </div>
            <div className="border-l border-border bg-primary/5 p-6 text-center">
              <span className="font-display text-base font-semibold text-primary">FaizanTech</span>
            </div>
            <div className="border-l border-border p-6 text-center">
              <span className="text-sm font-medium text-muted-foreground">Traditional agencies</span>
            </div>
          </div>

          {/* Rows */}
          {rows.map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 border-b border-border last:border-b-0 ${i % 2 === 0 ? 'bg-background/30' : ''}`}
            >
              <div className="p-5 text-sm font-medium">{row.feature}</div>
              <div className="border-l border-border bg-primary/5 p-5 text-center">
                <Cell value={row.faizantech} />
              </div>
              <div className="border-l border-border p-5 text-center">
                <Cell value={row.traditional} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
