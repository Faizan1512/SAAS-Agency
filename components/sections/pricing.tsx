'use client';

import { Check, Sparkles, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Sprint',
    tagline: 'For focused, single-feature builds',
    price: '$8k',
    period: '/ sprint',
    highlight: false,
    features: [
      '1 AI feature or automation system',
      '2-week delivery sprint',
      'Weekly demo & feedback session',
      'Production deployment included',
      '30 days post-launch support',
    ],
  },
  {
    name: 'Retained',
    tagline: 'For ongoing product engineering & AI',
    price: '$12k',
    period: '/ month',
    highlight: true,
    features: [
      'Dedicated senior engineer + AI specialist',
      'Weekly sprints with demos',
      'Unlimited priority requests',
      'Cloud security & QA included',
      'Dedicated Slack channel',
      'Architecture & strategy sessions',
    ],
  },
  {
    name: 'Advisory',
    tagline: 'For leadership needing technical clarity',
    price: '$3k',
    period: '/ month',
    highlight: false,
    features: [
      'AI feasibility & scoping sessions',
      'Technical roadmap planning',
      'Architecture reviews',
      'Vendor & tool evaluation',
      'Bi-weekly strategy calls',
    ],
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-20" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary">Engagement models</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Pricing that scales with your needs.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Whether you need a single sprint or an ongoing technical partner,
            we have a model that fits.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl border p-8 backdrop-blur-sm card-hover ${
                tier.highlight
                  ? 'border-primary/50 bg-card glow'
                  : 'border-border bg-card/40 hover:border-primary/30'
              }`}
            >
              {tier.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1.5 rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                    <Sparkles className="h-3 w-3" />
                    Most popular
                  </div>
                </div>
              )}

              <div>
                <h3 className="font-display text-lg font-semibold">{tier.name}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{tier.tagline}</p>
              </div>

              <div className="mt-6 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold tracking-tight">
                  {tier.price}
                </span>
                <span className="text-sm text-muted-foreground">{tier.period}</span>
              </div>

              <div className="mt-6 h-px bg-border" />

              <ul className="mt-6 flex-1 space-y-3.5">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className="mt-8"
                variant={tier.highlight ? 'default' : 'outline'}
                size="lg"
              >
                <a href="#contact">
                  Get started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
