'use client';

import { Search, PencilRuler, Hammer, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Discovery & AI Audit',
    description:
      'We dig into your current workflows, identify the highest-impact automation opportunities, and map out exactly what AI can — and can\'t — solve for your business.',
  },
  {
    icon: PencilRuler,
    title: 'System Design & Scoping',
    description:
      'We architect the solution: tech stack, data flows, integration points, and a clear delivery roadmap. You know exactly what you\'re getting before we write a line of code.',
  },
  {
    icon: Hammer,
    title: 'Build & Iterate',
    description:
      'We build in focused sprints with weekly demos. You stay close to progress without drowning in Slack. Feedback loops are tight. Pivots are cheap.',
  },
  {
    icon: Rocket,
    title: 'Deploy & Optimize',
    description:
      'We ship to production, monitor real-world performance, and optimize based on actual usage data. Most clients see measurable ROI within the first 30 days.',
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary">How we work</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            From idea to production. No surprises.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            A proven process built for speed, clarity, and outcomes that
            actually land in your business.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Connecting line */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent lg:block" />

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => (
              <div key={i} className="relative">
                <div className="flex flex-col items-start">
                  <div className="relative z-10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card">
                    <step.icon className="h-6 w-6 text-primary" />
                    <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
