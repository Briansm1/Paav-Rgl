
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Programa experto',
    price: 'Desde $86.999',
    description: 'Para quienes quieren reforzar alguna maniobra puntual o realizar un simulacro de examen práctico con todos los ejercicios',
    badge: 'NIVEL SUPERIOR',
    href: '/planes/experto'
  },
  {
    name: 'Programa seguridad avanzada',
    price: 'Desde $165.999',
    description: 'Para quienes quieran aprender o reforzar maniobras del examen práctico o mejorar la técnica del día a día',
    badge: 'NIVEL INTERMEDIO',
    href: '/planes/seguridad-avanzada'
  },
  {
    name: 'Programa fundamentos',
    price: 'Desde $311.999',
    description: 'Ideal para quienes quieren empezar desde cero y aprender con técnica profesional desde el comienzo',
    badge: 'NIVEL INICIAL',
    href: '/planes/fundamentos'
  }
];

export const Pricing = () => {
  return (
    <section id="planes" className="relative pt-20 pb-8 md:pt-32 md:pb-12 bg-background overflow-hidden">
      {/* Top and Bottom fades */}
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background via-background/50 to-transparent pointer-events-none z-10"></div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background via-background/50 to-transparent pointer-events-none z-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            TU INVERSIÓN
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground text-center">
            Planes pensados para alcanzar tu <span className="text-primary italic">mejor versión al volante</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Al elegirnos tenés transparencia al 100% y calidad asegurada
          </p>
        </div>

        <div className="flex flex-row md:grid md:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto overflow-x-auto md:overflow-x-visible pb-8 md:pb-0 snap-x snap-mandatory scrollbar-hide">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "relative p-8 rounded-[2.5rem] border-2 bg-secondary shadow-xl transition-all duration-500 flex flex-col items-center text-center group overflow-hidden border-white/5",
                "min-w-[280px] md:min-w-0 snap-center"
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

              <div className="mt-auto relative z-10 w-full">
                <Link href={plan.href} className="w-full">
                  <Button 
                    className={cn(
                      "w-full h-14 rounded-2xl text-base font-bold transition-all active:scale-95 shadow-lg bg-primary hover:bg-primary/90 text-white"
                    )}
                  >
                    Conocer los planes
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
