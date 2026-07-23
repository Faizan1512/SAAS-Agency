'use client';

import { ArrowUpRight, Smartphone, Globe, Brain } from 'lucide-react';

const projects = [
  {
    name: 'AI Sales Assistant',
    category: 'AI · Web App',
    description:
      'Conversational AI agent that qualifies leads and books meetings 24/7.',
    image:
      'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'web',
  },
  {
    name: 'Fitness Tracker',
    category: 'Mobile · iOS + Android',
    description:
      'Cross-platform mobile app with workout tracking and AI form analysis.',
    image:
      'https://images.pexels.com/photos/4753986/pexels-photo-4753986.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'mobile',
  },
  {
    name: 'Analytics Dashboard',
    category: 'Web App · SaaS',
    description:
      'Real-time business intelligence dashboard with AI-powered insights.',
    image:
      'https://images.pexels.com/photos/7681091/pexels-photo-7681091.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'web',
  },
  {
    name: 'E-Commerce Platform',
    category: 'Web + Mobile',
    description:
      'Full-stack commerce platform with AI product recommendations.',
    image:
      'https://images.pexels.com/photos/4467687/pexels-photo-4467687.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'web',
  },
  {
    name: 'AI Document Processor',
    category: 'AI · Automation',
    description:
      'Automated document extraction and classification powered by LLMs.',
    image:
      'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'ai',
  },
  {
    name: 'Telemedicine App',
    category: 'Mobile · Healthcare',
    description:
      'Patient-facing mobile app with AI symptom checking and video calls.',
    image:
      'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
    type: 'mobile',
  },
];

const typeIcon = {
  mobile: Smartphone,
  web: Globe,
  ai: Brain,
};

export function Projects() {
  return (
    <section id="work" className="relative py-24 lg:py-32">
      <div className="absolute inset-0 bg-dots opacity-30" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary">Our work</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Products we&apos;ve{' '}
            <span className="bg-gradient-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
              shipped
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            A selection of mobile apps, web platforms, and AI systems delivered
            across healthcare, commerce, fintech, and SaaS.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => {
            const Icon = typeIcon[project.type as keyof typeof typeIcon];
            return (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card/50 card-hover hover:border-primary/40"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
                  <div className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    <ArrowUpRight className="h-4 w-4 text-primary" />
                  </div>
                  <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-lg bg-background/80 px-2.5 py-1.5 backdrop-blur-sm">
                    <Icon className="h-3.5 w-3.5 text-primary" />
                    <span className="text-xs font-medium capitalize">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">
                    {project.category}
                  </p>
                  <h3 className="mt-1.5 font-display text-xl font-semibold">
                    {project.name}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {project.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
