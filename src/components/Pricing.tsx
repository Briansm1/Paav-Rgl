import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Shield, Award } from 'lucide-react';

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
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
            Inversión de Élite
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground">
            Planes diseñados para tu <span className="text-accent italic">éxito</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Transparencia total y calidad garantizada. Elige el programa que mejor se adapte a tus metas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className="relative p-8 md:p-12 rounded-[2.5rem] border-2 border-accent/20 bg-white dark:bg-slate-800 shadow-xl hover:shadow-accent/10 hover:border-accent/40 transition-all duration-500 flex flex-col text-center group overflow-hidden"
            >
              {/* Decorative premium element */}
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <Award className="w-16 h-16 text-accent" />
              </div>

              <div className="mb-10 relative z-10">
                <h4 className="text-2xl font-bold mb-4 text-foreground tracking-tight">{plan.name}</h4>
                <div className="flex items-center justify-center gap-2 mb-4">
                  <span className="text-3xl md:text-4xl font-bold tracking-tight text-accent">{plan.price}</span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed font-medium">{plan.description}</p>
              </div>

              <div className="space-y-5 mb-12 flex-grow flex flex-col items-center relative z-10">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4 text-center">
                    <div className="shrink-0 bg-accent/10 p-1.5 rounded-full shadow-inner">
                      <Check className="w-4 h-4 text-accent" />
                    </div>
                    <span className="text-base text-foreground/90 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                className="w-full h-16 rounded-2xl text-lg font-bold transition-all active:scale-95 shadow-lg bg-accent hover:bg-accent/90 text-white border-b-4 border-accent-foreground/20 relative z-10"
              >
                Elegir este Plan
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-[2rem] border-2 border-dashed border-accent/20 shadow-lg inline-flex flex-col md:flex-row items-center gap-6">
            <div className="shrink-0 bg-accent/10 p-4 rounded-3xl">
              <Shield className="w-10 h-10 text-accent" />
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