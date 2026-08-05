"use client";

import React from 'react';
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const whatsappUrl = "https://chat.whatsapp.com/BxfXXnPa3gH8KBsnK4lcYv";
  return (
    <section id="contacto" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="kicker text-primary mb-6 inline-block bg-primary/10 px-4 py-1.5 rounded-full">
            NUESTRA COMUNIDAD
          </span>
          <h2 className="text-h2 font-display text-foreground mb-6">
            Formá parte de nuestra <span className="text-primary">comunidad</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-[68ch] mx-auto">
            Recibí información clave sobre conducción, novedades de la autoescuela, consejos para mejorar tu manejo y beneficios exclusivos para alumnos.
          </p>
        </div>
        <div className="max-w-xl mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/5 text-center flex flex-col items-center gap-8">
            <div className="bg-purple/10 p-5 rounded-3xl">
              <Users className="w-10 h-10 text-purple" />
            </div>
            <div className="w-full space-y-6">
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="block w-full">
                <Button size="lg" className="w-full h-16 md:h-20 bg-purple hover:bg-purple/90 text-purple-foreground text-h3 font-bold rounded-2xl animate-heartbeat">
                  Unirme GRATIS
                </Button>
              </a>
              <p className="text-caption text-muted-foreground uppercase font-semibold tracking-[0.12em] max-w-[68ch] mx-auto">
                ACCESO A LA COMUNIDAD DE WHATSAPP - SIN COSTO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
