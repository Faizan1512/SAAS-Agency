'use client';

import { Quote, Play } from 'lucide-react';

const testimonials = [
  {
    quote:
      'DigiMEC provides great design and has a great sense of user experience and aesthetics. They deliver on time and is an overall great communicator. I highly recommend working with them.',
    name: 'Mara Nikolic',
    company: 'Mara99',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      "It doesn't feel like an external team, it feels like we're just working together. One team with one goal. Super happy and highly recommended!",
    name: 'Kate Bagoy',
    company: '5fourdigital',
    image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'DigiMEC transformed how we handle payments globally. Their AI systems reduced our processing time dramatically and the results speak for themselves.',
    name: 'David Strebinger',
    company: 'Paywith',
    image: 'https://images.pexels.com/photos/3760613/pexels-photo-3760613.jpeg?auto=compress&cs=tinysrgb&w=200',
    video: true,
  },
  {
    quote:
      'Excellent development services! I recently had the pleasure of working with DigiMEC on a fintech development project, and I must say that I am thoroughly impressed with the level of service that I received. Really great! Thanks.',
    name: 'Leon Dapoz',
    company: 'Evvvolution',
    image: 'https://images.pexels.com/photos/3760254/pexels-photo-3760254.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'They will exceed your expectations. Super easy to work with their engineering team, incredibly intelligent, and perceptive. They took the fumbled thoughts from my head and turned it all into a beautiful product.',
    name: 'Danaisa Urgelles',
    company: 'BHField',
    image: 'https://images.pexels.com/photos/3760261/pexels-photo-3760261.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'Amazing developers with an eye for aesthetics. We had pretty vigorous requests and they hit every single one. They were patient and highly skilled!',
    name: 'John D Saunders',
    company: '5fourdigital',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'DigiMEC has an incredible remote culture. It really makes working together easy.',
    name: 'Harbik Davidyan',
    company: 'Webk Agency',
    image: 'https://images.pexels.com/photos/3760253/pexels-photo-3760253.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'DigiMEC is clearly the best dev agency I have worked with. The project went smoothly, and we\'re happy with the outcome!',
    name: 'Kam Malik',
    company: 'LeadSense',
    image: 'https://images.pexels.com/photos/3760262/pexels-photo-3760262.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    quote:
      'Working with DigiMEC is always great! We are working with them for over 2 years now and the experience is just out of this planet.',
    name: 'Vincent Arrouet',
    company: 'Sunology',
    image: 'https://images.pexels.com/photos/3760260/pexels-photo-3760260.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-medium text-primary">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-5xl">
            They said it better than we could.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Real clients. Real outcomes. No cherry-picked case studies.
          </p>
        </div>

        <div className="mt-16 columns-1 gap-6 sm:columns-2 lg:columns-3 [&>*]:mb-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="group break-inside-avoid rounded-2xl border border-border bg-card/50 p-6 backdrop-blur-sm card-hover hover:border-primary/30 hover:bg-card"
            >
              <Quote className="mb-4 h-7 w-7 text-primary/30" />
              <p className="text-sm leading-relaxed text-foreground/90">
                {t.quote}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="relative">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="h-10 w-10 rounded-full object-cover ring-2 ring-border"
                  />
                  {t.video && (
                    <div className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                      <Play className="h-2.5 w-2.5 fill-primary-foreground text-primary-foreground" />
                    </div>
                  )}
                </div>
                <div>
                  <p className="text-sm font-medium">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
