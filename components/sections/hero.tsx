'use client';

import { ArrowRight, Play, Smartphone, Globe, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';

const logos = [
  'AUX Insights',
  'Entertainment',
  'Statista',
  'Microsoft',
  'Shopee',
  'Webk',
  'LeadSense',
  'Sunology',
];

const pillars = [
  { icon: Smartphone, label: 'Mobile Apps' },
  { icon: Globe, label: 'Web Apps' },
  { icon: Cpu, label: 'AI Solutions' },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 lg:pt-40 lg:pb-28">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid mask-fade-b" />
      <div className="absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-primary/10 blur-[120px] animate-pulse-glow" />
      <div className="absolute right-0 top-40 h-[300px] w-[400px] rounded-full bg-chart-2/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Content */}
          <div>
            {/* <div className="mb-8 inline-flex animate-fade-up items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Full-stack AI solutions by Faizan Mubarak
            </div> */}

            <h1
              className="font-display text-4xl font-semibold leading-[1.1] tracking-tight text-balance sm:text-5xl lg:text-6xl animate-fade-up"
              style={{ animationDelay: '0.1s' }}
            >
              We build{' '}
              <span className="bg-gradient-to-r from-primary via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                mobile &amp; web apps
              </span>{' '}
              powered by AI.
            </h1>

            <p
              className="mt-6 max-w-xl text-lg text-muted-foreground text-pretty animate-fade-up"
              style={{ animationDelay: '0.2s' }}
            >
              DigiMEC is a software agency delivering production-ready mobile
              and web applications with AI built in from day one — from
              intelligent automation to full-stack product engineering.
            </p>

            {/* Pillars */}
            <div
              className="mt-8 flex flex-wrap gap-3 animate-fade-up"
              style={{ animationDelay: '0.25s' }}
            >
              {pillars.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-2.5 backdrop-blur-sm transition-colors hover:border-primary/40"
                >
                  <p.icon className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">{p.label}</span>
                </div>
              ))}
            </div>

            <div
              className="mt-10 flex flex-col items-start gap-3 sm:flex-row animate-fade-up"
              style={{ animationDelay: '0.3s' }}
            >
              <Button asChild size="lg" className="group">
                <a href="#contact">
                  Book a discovery call
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#work">
                  <Play className="mr-2 h-4 w-4" />
                  See our work
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Visual */}
          <div
            className="relative animate-scale-in"
            style={{ animationDelay: '0.35s' }}
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Glow behind */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 via-emerald-300/10 to-teal-300/20 blur-2xl" />

              {/* Main dashboard image */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=900"
                    alt="Web application dashboard built by DigiMEC"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card/60 via-transparent to-transparent" />
              </div>

              {/* Floating mobile mockup */}
{/* <div className="absolute -bottom-8 -left-8 w-36 animate-float-drift sm:w-44">
                  <div className="overflow-hidden rounded-[1.5rem] border-2 border-border bg-card shadow-2xl">
                  <img
                    src="https://images.pexels.com/photos/6078120/pexels-photo-6078120.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Mobile app built by DigiMEC"
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div> */}

              {/* Floating AI badge */}
{/* <div className="absolute -top-5 -right-5 flex animate-pulse-drift items-center gap-2 rounded-xl border border-border bg-card/90 px-4 py-2.5 shadow-xl backdrop-blur-md" style={{ animationDelay: '1s' }}>                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15">
                  <Cpu className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-semibold">AI-Powered</p>
                  <p className="text-[10px] text-muted-foreground">Built in</p>
                </div>
              </div> */}



            </div>
          </div>
        </div>

        {/* Trusted by */}
        <div
          className="mt-20 animate-fade-up"
          style={{ animationDelay: '0.4s' }}
        >
          <p className="text-center text-xs font-medium uppercase tracking-widest text-muted-foreground">
            Trusted by ambitious teams
          </p>
          <div className="relative mt-8 overflow-hidden">
            <div className="flex w-max animate-marquee gap-12">
              {[...logos, ...logos].map((logo, i) => (
                <div
                  key={i}
                  className="flex h-10 shrink-0 items-center text-lg font-semibold text-muted-foreground/60 transition-colors hover:text-muted-foreground"
                >
                  {logo}
                </div>
              ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
