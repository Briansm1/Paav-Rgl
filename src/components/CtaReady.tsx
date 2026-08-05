import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Medal } from 'lucide-react';

export const CtaReady = () => {
  return (
    <section className="relative py-12 md:py-32 bg-background overflow-hidden px-4">
      <div className="container mx-auto px-1 sm:px-4 text-center max-w-4xl relative z-10">
        <div className="bg-secondary p-5 min-[375px]:p-8 md:p-12 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 shadow-2xl inline-flex flex-col items-center gap-6 md:gap-8 text-center w-full">
          <div className="shrink-0 bg-primary/10 p-4 md:p-5 rounded-2xl md:rounded-3xl">
            <Medal className="w-10 h-10 md:w-12 md:h-12 text-primary" />
          </div>
          <div className="space-y-4 px-1 md:px-2">
            <h3 className="text-xl min-[375px]:text-2xl md:text-h2 font-display font-semibold tracking-tight leading-tight">
              Estás a un paso de convertirte en un/una as al volante
            </h3>
            <p className="text-sm md:text-body-lg text-muted-foreground max-w-[68ch] mx-auto">
              ¡No hay excusas, nada ni nadie puede detenerte, estamos para acompañarte hasta el final y lograr el resultado que esperas!
            </p>
          </div>
          <div className="px-2 w-full sm:w-auto">
            <Link href="#planes">
              <Button size="lg" className="h-12 md:h-14 px-8 md:px-10 rounded-full bg-accent hover:bg-accent/90 text-white font-bold text-base md:text-lg animate-heartbeat w-full sm:w-auto shadow-none border-none">
                Quiero empezar
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
