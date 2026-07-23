'use client';

import {
  Smartphone,
  Globe,
  Brain,
  Compass,
  ShieldCheck,
  ArrowUpRight,
} from 'lucide-react';

const services = [
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native-quality iOS and Android apps built with React Native and Expo. From MVP to App Store launch — smooth, fast, and ready to scale with your users.',
    tags: ['React Native', 'iOS', 'Android', 'Expo'],
  },
  {
    icon: Globe,
    title: 'Web App Development',
    description:
      'Production-grade web applications and dashboards built with Next.js, TypeScript, and modern APIs. Secure, performant, and built for real users at scale.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
  },
  {
    icon: Brain,
    title: 'AI Integration & Automation',
    description:
      'We embed AI into your products — intelligent agents, automation workflows, chatbots, and ML features that plug into real business processes, not demos.',
    tags: ['LLMs', 'AI Agents', 'RAG', 'Automation'],
  },
  {
    icon: Compass,
    title: 'Strategy, Scoping & Feasibility',
    description:
      'Validate ideas, define scope, assess technical feasibility, and sequence roadmaps before budget gets burned on the wrong product or platform.',
    tags: ['Discovery', 'Architecture', 'Roadmap'],
  },
  {
    icon: ShieldCheck,
    title: 'Cloud, Security & Reliability',
    description:
      'Strengthen infrastructure, tighten security posture, improve performance, and install QA systems so your products stay stable as usage grows.',
    tags: ['AWS', 'CI/CD', 'QA', 'Monitoring'],
  },
  {
    icon: ArrowUpRight,
    title: 'Maintenance & Optimization',
    description:
      'Post-launch support, performance tuning, feature iteration, and ongoing optimization to keep your product evolving without technical debt.',
    tags: ['Support', 'Iterate', 'Optimize'],
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary">What we do</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Mobile, web, and AI —{' '}
            <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
              under one roof
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From mobile apps to web platforms to AI-powered automation,
            FaizanTech covers the full spectrum of modern software development.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative card-hover rounded-2xl border border-border bg-card/50 p-8 backdrop-blur-sm hover:border-primary/40 hover:bg-card"
            >
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary/15 to-emerald-500/10 ring-1 ring-primary/20 transition-all group-hover:from-primary/25 group-hover:to-emerald-500/15">
                  <service.icon className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-display text-lg font-semibold leading-snug">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <ArrowUpRight className="absolute right-6 top-6 h-5 w-5 text-muted-foreground/30 transition-all group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
