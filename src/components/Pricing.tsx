import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Programa experto',
    price: 'Desde $86.999',
    description: 'Perfecto para quienes necesitan reforzar conocimientos.',
    badge: 'NIVEL SUPERIOR',
  },
  {
    name: 'Seguridad avanzada',
    price: 'Desde $199.999',
    description: 'Para conductores que buscan maestría total en cualquier entorno.',
    badge: 'NIVEL INTERMEDIO',
  },
  {
    name: 'Programa fundamentos',
    price: 'Desde $149.999',
    description: 'Ideal para quienes empiezan desde cero y quieren aprender bien.',
    badge: 'NIVEL INICIAL',
  }
];

export const Pricing = () => {
  return (
    <section id="planes" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Nuestra Tarifa
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground text-center">
            Un plan diseñado para tu <span className="text-primary italic">éxito</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            Transparencia total y calidad garantizada en todos nuestros programas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "relative p-8 rounded-[2.5rem] border-2 bg-white dark:bg-slate-800 shadow-xl transition-all duration-500 flex flex-col group overflow-hidden border-border"
              )}
            >
              <div className="absolute top-0 right-0 bg-accent text-white px-6 py-1.5 rounded-bl-2xl text-[10px] font-bold uppercase tracking-widest">
                {plan.badge}
              </div>
              
              <div className="mb-8 relative z-10">
                <h4 className="text-2xl font-bold mb-4 text-foreground tracking-tight">{plan.name}</h4>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-3xl font-bold tracking-tight text-green-600">{plan.price}</span>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium mb-6">{plan.description}</p>
              </div>

              <div className="mt-auto relative z-10">
                <Link href="/planes" className="w-full">
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
        
        <div className="mt-20 text-center max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-[2rem] border border-border shadow-lg inline-flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0 bg-primary/10 p-4 rounded-3xl">
              <Shield className="w-10 h-10 text-primary" />
            </div>
            <div className="text-center md:text-left">
              <h5 className="text-xl font-bold mb-1">Tu seguridad es nuestra prioridad</h5>
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                Todos nuestros planes incluyen un seguro de accidentes personal durante las horas de práctica, sin costo adicional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
