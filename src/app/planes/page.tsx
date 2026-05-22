
import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Pricing } from '@/components/Pricing';
import { ArrowLeft } from 'lucide-react';

export default function PlanesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-28 pb-4 md:pt-40 md:pb-12 bg-secondary/30 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#inicio" className="inline-flex items-center gap-2 text-primary font-bold mb-4 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold font-headline mb-0 text-foreground">
            Nuestros <span className="text-primary">Programas</span>
          </h1>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Seleccioná el programa que mejor se adapte a tu nivel actual y objetivos al volante.
          </p>
        </div>
      </section>

      <section className="py-12 bg-background">
        <Pricing />
      </section>

      <Footer />
    </main>
  );
}
