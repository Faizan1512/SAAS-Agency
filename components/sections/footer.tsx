'use client';

import { Sparkles, Twitter, Linkedin, Github } from 'lucide-react';

const footerLinks = {
  Services: ['AI Systems', 'Product Engineering', 'Strategy & Scoping', 'Cloud & Security'],
  Industries: ['SaaS', 'E-commerce', 'Fintech', 'Healthcare', 'Agencies', 'Real Estate'],
  Company: ['About', 'Work', 'Process', 'Contact'],
};

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="py-16 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <a href="#" className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 ring-1 ring-primary/30">
                  <Sparkles className="h-4 w-4 text-primary" />
                </div>
                <span className="font-display text-lg font-semibold tracking-tight">
                  FaizanTech
                </span>
              </a>
              <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Your senior engineering team — without the 6-month hire. We
                ship production AI systems, harden cloud infrastructure, and
                scale digital products for growth-stage companies that
                can&apos;t afford to wait. Founded by Faizan Mubarak.
              </p>
              <div className="mt-6 flex gap-3">
                {[Twitter, Linkedin, Github].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h4 className="text-sm font-semibold">{title}</h4>
                <ul className="mt-4 space-y-3">
                  {links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border py-8 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FaizanTech. Senior AI execution for modern
            digital teams.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Privacy
            </a>
            <a href="#" className="text-xs text-muted-foreground transition-colors hover:text-foreground">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
