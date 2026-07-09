
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Medal } from 'lucide-react';

export const CtaReady = () => {
  return (
    <section className="relative py-20 md:py-32 bg-background overflow-hidden px-4">
      {/* Smooth transition overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background z-0">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/80 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/80 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
        <div className="bg-secondary p-8 md:p-12 rounded-[2.5rem] border border-white/5 shadow-2xl inline-flex flex-col items-center gap-8 text-center">
          <div className="shrink-0 bg-primary/10 p-5 rounded-3xl shadow-inner">
            <Medal className="w-12 h-12 text-primary" />
          </div>
          <div className="space-y-4 px-2">
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
              Estás a una sola decisión de convertirte en un/una as al volante
            </h3>
            <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Con nosotros vas a conocer las claves para dominar cualquier camino, bajo cualquier condición y así lograr pilotar las calles con seguridad real
            </p>
          </div>
          <div className="px-4">
            <Link href="#planes">
              <Button size="lg" className="h-14 px-10 rounded-full bg-accent hover:bg-accent/90 text-white font-bold text-lg transition-all active:scale-95 shadow-none border-none animate-heartbeat">
                Quiero empezar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
