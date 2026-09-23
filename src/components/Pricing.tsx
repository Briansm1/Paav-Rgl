"use client";

import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Programa fundamentos',
    originalPrice: 'Desde $311.999',
    price: 'Desde $265.199',
    hasDiscount: true,
    description: 'Ideal para quienes empiezan desde cero o tienen poca experiencia al volante. Aprendé las bases de la conducción, familiarizate con el vehículo y ganá seguridad paso a paso.',
    badge: 'NIVEL INICIAL',
    href: '/planes/fundamentos',
    buttonText: 'Elegir plan de 8 o 10 clases'
  },
  {
    name: 'Programa puesta a punto',
    originalPrice: 'Desde $165.999',
    price: 'Desde $141.099',
    hasDiscount: true,
    description: 'Pensado para quienes ya tienen experiencia y quieren mejorar su manejo. Trabajá aspectos específicos de la conducción y reforzá tus habilidades.',
    badge: 'NIVEL INTERMEDIO',
    href: '/planes/puesta-a-punto',
    buttonText: 'Elegir plan de 4 o 5 clases'
  },
  {
    name: 'Programa simulacro de examen',
    originalPrice: null,
    price: 'Desde $86.999',
    hasDiscount: false,
    description: 'Para alumnos que quieren prepararse antes de rendir el examen práctico. Practicá maniobras y situaciones reales del examen.',
    badge: 'NIVEL SUPERIOR',
    href: '/planes/simulacro-de-examen',
    buttonText: 'Elegir plan de 2 clases'
  }
];

export const Pricing = () => {
  return (
    <section id="planes" className="relative py-20 md:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 px-4">
          <span className="kicker text-primary mb-6 inline-block bg-primary/10 px-4 py-1.5 rounded-full">
            TU INVERSIÓN
          </span>
          <h2 className="text-h2 font-display text-foreground text-center mb-6">
            Elegí el plan ideal para tu <span className="text-primary">nivel</span>
          </h2>
          <p className="text-body-lg text-muted-foreground max-w-[68ch] mx-auto">
            Encontrá la opción que mejor se ajusta a tu experiencia y al objetivo que querés alcanzar al volante.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="relative p-8 rounded-[2.5rem] bg-secondary shadow-xl transition-all duration-500 flex flex-col items-center text-center group border border-white/5 w-full">
                <div className="absolute top-0 right-0 bg-accent text-white px-6 py-1.5 rounded-bl-2xl text-eyebrow font-bold uppercase">
                  {plan.badge}
                </div>
                
                <div className="mb-8 w-full flex-grow">
                  <h4 className="text-h3 font-display font-semibold mb-4 text-foreground uppercase">{plan.name}</h4>
                  
                  {/* Prices display */}
                  <div className="flex flex-col items-center justify-center gap-1 mb-6">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">CON TRANSFERENCIA O EFECTIVO</span>
                    
                    {plan.hasDiscount ? (
                      <div className="flex flex-col items-center justify-center">
                        <span className="text-lg sm:text-xl font-bold text-red-500 line-through decoration-red-500 opacity-90">
                          {plan.originalPrice}
                        </span>
                        <span className="text-3xl sm:text-5xl font-black text-green-500 tracking-tight leading-none mt-1">
                          {plan.price}
                        </span>
                        <span className="text-[11px] font-black bg-amber-500/20 text-amber-400 border border-amber-500/40 px-3 py-1 rounded-full uppercase mt-2 tracking-wide">
                          15% OFF APLICADO
                        </span>
                      </div>
                    ) : (
                      <span className="text-3xl sm:text-5xl font-black text-green-500 text-tabular leading-none mt-1">
                        {plan.price}
                      </span>
                    )}
                  </div>

                  <p className="text-body text-muted-foreground font-medium mb-6 max-w-[68ch]">{plan.description}</p>
                </div>

                <div className="mt-auto w-full px-2">
                  <Link href={plan.href} className="w-full">
                    <Button className="w-full h-14 rounded-2xl text-lg font-bold bg-primary hover:bg-primary/90 text-white border-none shadow-none uppercase">
                      {plan.buttonText}
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
