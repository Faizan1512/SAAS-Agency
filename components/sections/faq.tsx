'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'How quickly can you start on a project?',
    a: 'For sprint engagements, we typically start within 1–2 weeks of the discovery call. For retained engagements, we can usually onboard within a week. Advisory engagements can begin immediately after the first session is booked.',
  },
  {
    q: 'Do you work with existing codebases or only greenfield projects?',
    a: 'Both. A significant portion of our work involves modernizing existing systems, adding AI capabilities to current products, and hardening infrastructure. We do a full codebase audit during discovery to understand what we are working with.',
  },
  {
    q: 'What AI technologies do you specialize in?',
    a: 'We work across LLM integration (OpenAI, Anthropic, open-source models), RAG systems, AI agent workflows, computer vision, ML model deployment, and decision intelligence layers. We pick the right tool for the job rather than forcing one approach.',
  },
  {
    q: 'Who owns the code and IP after the project?',
    a: 'You do — 100%. All code, architecture, and intellectual property is yours from day one. We do not hold code hostage or charge access fees. You get full repository access and documentation.',
  },
  {
    q: 'What happens after launch?',
    a: 'Every sprint engagement includes 30 days of post-launch optimization. For retained clients, ongoing optimization is part of the engagement. We monitor performance, fix issues, and tune based on real usage data.',
  },
  {
    q: 'Can you work with our internal team?',
    a: 'Absolutely. We frequently embed alongside internal engineering teams, providing senior-level support, AI expertise, and architecture guidance. We use your tools, attend your standups, and work within your workflows.',
  },
  {
    q: 'What if the project scope changes mid-sprint?',
    a: 'We build in focused sprints specifically to handle this. Scope changes are expected — pivots are cheap when you are working in weekly iterations. We reprioritize at each sprint boundary so you always get the most valuable work first.',
  },
];

export function FAQ() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-xs text-muted-foreground">
            <HelpCircle className="h-3.5 w-3.5 text-primary" />
            FAQ
          </div>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Everything you need to know before booking a call.
          </p>
        </div>

        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-card/40 px-6 backdrop-blur-sm transition-colors hover:border-primary/30 data-[state=open]:border-primary/40"
              >
                <AccordionTrigger className="text-left text-base font-medium hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
