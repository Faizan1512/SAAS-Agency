'use client';

import {
  Server,
  ShoppingBag,
  Landmark,
  HeartPulse,
  Megaphone,
  Home,
} from 'lucide-react';

const industries = [
  {
    icon: Server,
    title: 'AI for SaaS',
    subtitle: 'Reduce churn, accelerate growth, and build AI-native features fast.',
    description:
      'SaaS companies face unique AI opportunities — from embedding intelligence into the product itself to automating the growth and support operations that scale it. We help SaaS teams ship AI features, automate support, and convert more trials.',
  },
  {
    icon: ShoppingBag,
    title: 'AI for E-commerce',
    subtitle: 'More conversions. Smarter support. Less manual work.',
    description:
      'E-commerce operations are repetitive, high-volume, and perfect for AI. From customer support to personalisation to inventory operations — we automate the parts that cost you the most time and money.',
  },
  {
    icon: Landmark,
    title: 'AI for Fintech',
    subtitle: 'Faster decisions. Sharper compliance. Smarter customer experience.',
    description:
      'Financial services run on data, decisions, and documentation — all of which AI accelerates dramatically. We build AI systems for fintech companies that improve decision speed, reduce compliance overhead, and deliver better customer outcomes.',
  },
  {
    icon: HeartPulse,
    title: 'AI for Healthcare',
    subtitle: 'Less admin. More care. Better patient outcomes.',
    description:
      'Healthcare teams spend too much time on documentation, scheduling, and administrative tasks. We build HIPAA-conscious AI systems that handle the admin burden so clinical staff can focus on patients.',
  },
  {
    icon: Megaphone,
    title: 'AI for Agencies',
    subtitle: 'Deliver more. Hire less. Scale without the overhead.',
    description:
      'Agencies live and die by their ability to deliver quality at scale. AI lets you produce more output per team member — faster client deliverables, automated reporting, and AI-powered creative tools that give your team a genuine edge.',
  },
  {
    icon: Home,
    title: 'AI for Real Estate',
    subtitle: 'Automate the admin. Close more deals.',
    description:
      'Real estate is driven by relationships, but bogged down by paperwork, follow-up, and manual processes. AI handles the repetitive work so your agents and brokers can focus on what actually closes deals.',
  },
];

export function Industries() {
  return (
    <section id="industries" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary">Industries</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            AI-powered results across six industries.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Purpose-built AI systems that understand your industry&apos;s
            specific workflows, compliance requirements, and growth levers.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry, i) => (
            <div
              key={i}
              className="group rounded-2xl border border-border bg-card/40 p-8 backdrop-blur-sm card-hover hover:border-primary/40 hover:bg-card"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 ring-1 ring-primary/20 transition-colors group-hover:bg-primary/15">
                <industry.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold">
                {industry.title}
              </h3>
              <p className="mt-2 text-sm font-medium text-primary/80">
                {industry.subtitle}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {industry.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
