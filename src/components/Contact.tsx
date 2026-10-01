
"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const whatsappUrl = "https://chat.whatsapp.com/LOH00Yw2YoXEf4i8NNCzRA?s=cl&p=i&ilr=2";
  return (
    <section id="contacto" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center max-w-3xl mx-auto flex flex-col items-center">
          <span className="kicker text-accent mb-6 inline-block bg-accent/10 px-4 py-1.5 rounded-full font-sans text-eyebrow font-semibold uppercase tracking-[0.12em]">
            ¿QUERÉS SER MIEMBRO?
          </span>
          <h2 className="text-h2 font-display text-foreground mb-6">
            Formá parte de nuestra <span className="text-primary">comunidad</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-[68ch] mx-auto mb-8 md:mb-10">
            Recibí información clave sobre conducción, novedades de la autoescuela, consejos para mejorar tu manejo y beneficios exclusivos para alumnos.
          </p>
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
            <Button size="lg" className="w-full sm:w-auto px-10 h-14 bg-purple hover:bg-purple/90 text-purple-foreground text-lg font-bold rounded-2xl animate-heartbeat shadow-none border-none">
              Unirme GRATIS
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
