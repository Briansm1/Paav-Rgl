import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <ScrollReveal>
        <Services />
      </ScrollReveal>
      <ScrollReveal delay={100}>
        <Testimonials />
      </ScrollReveal>
      <ScrollReveal delay={200}>
        <Pricing />
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <Contact />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
