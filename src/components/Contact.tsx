
"use client";

import React from 'react';
import { Users } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Contact = () => {
  const whatsappUrl = "https://wa.me/5492966265603?text=Hola!%20Quiero%20unirme%20a%20la%20comunidad%20de%20Pilotos";

  return (
    <section id="contacto" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Soft gradient transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background z-0">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none z-10"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            Nuestra Comunidad
          </span>
          <h2 className="text-3xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground">
            Formá parte de nuestra <span className="text-primary italic">comunidad</span>
          </h2>
          <p className="text-base md:text-xl text-muted-foreground leading-relaxed">
            Recibí información clave sobre conducción, novedades de la autoescuela, consejos para mejorar tu manejo y beneficios exclusivos para alumnos.
          </p>
        </div>

        <div className="max-w-xl mx-auto">
          <div className="bg-card p-8 md:p-12 rounded-[2.5rem] shadow-2xl border border-white/5 text-center flex flex-col items-center gap-8">
            <div className="bg-purple/10 p-5 rounded-3xl">
              <Users className="w-10 h-10 text-purple" />
            </div>
            
            <div className="w-full space-y-6">
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="block w-full"
              >
                <Button 
                  size="lg" 
                  className="w-full h-16 md:h-20 bg-purple hover:bg-purple/90 text-purple-foreground text-xl md:text-2xl font-black rounded-2xl shadow-lg transition-all active:scale-[0.98] flex items-center justify-center animate-heartbeat uppercase tracking-tighter border-none"
                >
                  UNIRME GRATIS
                </Button>
              </a>
              <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-bold">
                ACCESO A LA COMUNIDAD DE WHATSAPP - SIN COSTO
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
