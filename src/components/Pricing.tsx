
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Programa simulacro de examen',
    price: 'Desde $86.999',
    description: 'Para quienes quieren reforzar alguna maniobra puntual o realizar un simulacro de examen práctico con todos los ejercicios',
    badge: 'NIVEL SUPERIOR',
    href: '/planes/experto'
  },
  {
    name: 'Programa puesta a punto',
    price: 'Desde $165.999',
    description: 'Para quienes quieran aprender o reforzar maniobras del examen práctico o mejorar la técnica del día a día',
    badge: 'NIVEL INTERMEDIO',
    href: '/planes/seguridad-avanzada'
  },
  {
    name: 'Programa fundamentos',
    price: 'Desde $311.999',
    description: 'Formación de conductores 100% seguros desde el primer contacto con el volante.  Aprendizaje progresivo y sin estrés. Desarrollamos las habilidades necesarias para mantener el control absoluto del vehículo frente a las exigencias diarias de la región, incluyendo las técnicas correctas para manejar con fuertes ráfagas de viento, transitar con seguridad sobre ripio o lidiar con escarcha en la calzada.',
    badge: 'NIVEL INICIAL',
    href: '/planes/fundamentos'
  }
];

const fontStyles = [
  "italic font-serif", 
  "font-body font-bold", 
  "font-montserrat font-black uppercase tracking-widest", 
  "font-code font-medium tracking-tighter"
];

export const Pricing = () => {
  const [styleIndex, setStyleIndex] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const interval = setInterval(() => {
      setStyleIndex((prev) => (prev + 1) % fontStyles.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="planes" className="relative py-20 md:py-32 bg-background overflow-hidden">
      {/* Background soft transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background z-0">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            TU INVERSIÓN
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground text-center">
            Planes pensados para alcanzar tu mejor{" "}
            <span 
              className={cn(
                "text-primary inline-block transition-all duration-700 min-w-[120px] md:min-w-[180px]",
                isMounted ? fontStyles[styleIndex] : "italic"
              )}
            >
              versión
            </span>{" "}
            al volante
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Al elegirnos tenés transparencia al 100% y calidad asegurada
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-row md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide px-2 md:px-0">
            {plans.map((plan, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative p-8 rounded-[2.5rem] bg-secondary shadow-xl transition-all duration-500 flex flex-col items-center text-center group overflow-hidden border border-white/5",
                  "min-w-[85%] sm:min-w-[280px] md:min-w-0 snap-center"
                )}
              >
                <div className="absolute top-0 right-0 bg-accent text-white px-6 py-1.5 rounded-bl-2xl text-[10px] font-bold uppercase tracking-widest">
                  {plan.badge}
                </div>
                
                <div className="mb-8 relative z-10 w-full">
                  <h4 className="text-2xl font-bold mb-4 text-foreground tracking-tight">{plan.name}</h4>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-3xl font-bold tracking-tight text-green-500">{plan.price}</span>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium mb-6">{plan.description}</p>
                </div>

                <div className="mt-auto relative z-10 w-full px-2">
                  <Link href={plan.href} className="w-full">
                    <Button 
                      className={cn(
                        "w-full h-14 rounded-2xl text-base font-bold transition-all active:scale-95 bg-primary hover:bg-primary/90 text-white shadow-none border-none"
                      )}
                    >
                      Conocer los planes
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="md:hidden text-center mt-6 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black animate-pulse px-4">
            Desliza para comparar los planes →
          </div>
        </div>
      </div>
    </section>
  );
};
