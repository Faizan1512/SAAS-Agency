import { Navbar } from '@/components/sections/navbar';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { Services } from '@/components/sections/services';
import { Comparison } from '@/components/sections/comparison';
import { Projects } from '@/components/sections/projects';
import { Process } from '@/components/sections/process';
import { ROICalculator } from '@/components/sections/roi-calculator';
import { Testimonials } from '@/components/sections/testimonials';
import { Industries } from '@/components/sections/industries';
import { Pricing } from '@/components/sections/pricing';
import { FAQ } from '@/components/sections/faq';
import { ContactCTA } from '@/components/sections/contact-cta';
import { Footer } from '@/components/sections/footer';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <Comparison />
      <Projects />
      <Process />
      <ROICalculator />
      <Testimonials />
      <Industries />
      <Pricing />
      <FAQ />
      <ContactCTA />
      <Footer />
    </main>
  );
}
