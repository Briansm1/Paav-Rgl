import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Shield } from 'lucide-react';

const plans = [
  {
    name: 'Programa experto',
    price: 'Desde $86.999',
    description: 'Perfecto para quienes necesitan reforzar conocimientos.',
    features: ['10 horas de práctica', 'Material teórico digital', 'Examen de simulacro', 'Trámites administrativos'],
  },
  {
    name: 'Programa seguridad avanzada',
    price: 'Desde $165.999',
    description: 'Nuestro curso más completo para principiantes.',
    features: ['20 horas de práctica', 'Curso teórico presencial', 'Vehículo para examen', 'Manejo defensivo', 'Garantía de aprobación'],
  },
  {
    name: 'Programa fundamentos',
    price: 'Desde $311.999',
    description: 'Para quienes buscan dominar cada aspecto del volante.',
    features: ['30 horas de práctica', 'Manejo nocturno y carretera', 'Mecánica básica', 'Soporte prioritario', 'Vehículo premium'],
  }
];

export const Pricing = () => {
  return (
    <section id="planes" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full border border-primary/20">
            Nuestras Tarifas
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground text-center">
            Planes diseñados para tu <span className="text-primary italic">éxito</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-center">
            Transparencia total y calidad garantizada. Elige el programa que mejor se adapte a tus metas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="relative p-8 md:p-12 rounded-[2.5rem] border-2 border-accent bg-white dark:bg-slate-800 shadow-xl hover:shadow-accent/20 transition-all duration-500 flex flex-col text-center group overflow-hidden"
            >
              <div className="mb-10 relative z-10">
                <h4 className="text-2xl font-bold mb-4 text-foreground tracking-tight text-center">{plan.name}</h4>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight text-foreground text-center">{plan.price}</span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed font-medium text-center">{plan.description}</p>
              </div>

              <div className="space-y-5 mb-12 flex-grow flex flex-col items-center relative z-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-center">
                    <div className="shrink-0 bg-primary/10 p-1.5 rounded-full">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-base text-foreground/90 font-medium text-center">{feature}</span>
                  </div>
                ))}
              </div>

              <Link href="/planes" className="w-full">
                <Button 
                  className="w-full h-16 rounded-2xl text-lg font-bold transition-all active:scale-95 shadow-lg bg-primary hover:bg-primary/90 text-white relative z-10"
                >
                  Conocer más planes
                </Button>
              </Link>
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
                Todos los planes incluyen un seguro de accidentes personal durante las horas de práctica, sin costo adicional.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};