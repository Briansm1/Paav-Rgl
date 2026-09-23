import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Services } from '@/components/Services';
import { Testimonials } from '@/components/Testimonials';
import { Pricing } from '@/components/Pricing';
import { Gallery } from '@/components/Gallery';
import { CtaReady } from '@/components/CtaReady';
import { Faq } from '@/components/Faq';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { ScrollReveal } from '@/components/ScrollReveal';
import { PromoModal } from '@/components/PromoModal';

export default function Home() {
  return (
    <main className="min-h-screen">
      <PromoModal />
      {/* SEO Optimized Hidden Content */}
      <section className="sr-only">
        <h1>
          En Pilotos ases al volante Autoescuela de Río Gallegos ofrecemos clases de manejo personalizadas para principiantes y conductores que desean perfeccionar su técnica de conducción. Nuestro objetivo es ayudarte a aprender a manejar de forma segura, práctica y confiable, preparándote para obtener tu licencia de conducir.
        </h1>
        <p>
          Brindamos cursos de manejo adaptados a cada alumno, acompañamiento para examen práctico, clases de estacionamiento, conducción defensiva y formación vial completa. Si buscás una autoescuela en Río Gallegos con atención profesional y enseñanza práctica, Pilotos es tu mejor opción.
        </p>
        <p>
          Nuestros instructores trabajan paso a paso para que ganes seguridad al volante y puedas rendir tu examen con confianza. Ya sea que nunca hayas manejado o quieras mejorar tu conducción, contamos con clases diseñadas para todos los niveles.
        </p>
      </section>

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
      <ScrollReveal delay={350}>
        <Faq />
      </ScrollReveal>
      <ScrollReveal delay={400}>
        <Contact />
      </ScrollReveal>
      <Footer />
    </main>
  );
}
