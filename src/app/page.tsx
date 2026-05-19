
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { PartnersTicker } from '@/components/PartnersTicker';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { Gallery } from '@/components/Gallery';
import { CtaReady } from '@/components/CtaReady';
import { Faq } from '@/components/Faq';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { AiAssistant } from '@/components/AiAssistant';

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
      <ScrollReveal delay={225}>
        <Gallery />
      </ScrollReveal>
      <ScrollReveal delay={250}>
        <CtaReady />
      </ScrollReveal>
      <ScrollReveal delay={300}>
        <PartnersTicker />
      </ScrollReveal>
      <ScrollReveal delay={350}>
        <Faq />
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <Contact />
      </ScrollReveal>
      <Footer />
      <WhatsAppButton />
      <AiAssistant />
    </main>
  );
}
