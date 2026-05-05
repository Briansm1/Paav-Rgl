import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Shield } from 'lucide-react';

const plans = [
  {
    name: 'Programa experto',
    price: '$199',
    description: 'Perfecto para quienes necesitan reforzar conocimientos.',
    features: ['10 horas de práctica', 'Material teórico digital', 'Examen de simulacro', 'Trámites administrativos'],
    isPopular: false
  },
  {
    name: 'Programa seguridad avanzada',
    price: '$299',
    description: 'Nuestro curso más completo para principiantes.',
    features: ['20 horas de práctica', 'Curso teórico presencial', 'Vehículo para examen', 'Manejo defensivo', 'Garantía de aprobación'],
    isPopular: true
  },
  {
    name: 'Programa fundamentos',
    price: '$399',
    description: 'Para quienes buscan dominar cada aspecto del volante.',
    features: ['30 horas de práctica', 'Manejo nocturno y carretera', 'Mecánica básica', 'Soporte prioritario', 'Vehículo premium'],
    isPopular: false
  }
];

export const Pricing = () => {
  return (
    <section id="planes" className="py-20 md:py-32 bg-slate-50 dark:bg-slate-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full">
            Inversión Inteligente
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground">
            Planes diseñados para tu <span className="text-accent underline decoration-accent/30 underline-offset-8">éxito</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Transparencia total. Sin cargos ocultos, solo educación de calidad para tu futuro como conductor.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 md:p-12 rounded-[2.5rem] border transition-all duration-700 flex flex-col text-center ${
                plan.isPopular 
                  ? 'bg-white dark:bg-slate-800 border-primary shadow-2xl scale-100 lg:scale-105 z-10' 
                  : 'bg-white/50 dark:bg-slate-800/50 border-border hover:border-primary/50 shadow-sm'
              }`}
            >
              <div className="mb-10">
                <h4 className="text-2xl font-bold mb-4">{plan.name}</h4>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-5xl md:text-6xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground font-semibold">/total</span>
                </div>
                <p className="text-muted-foreground text-base leading-relaxed font-medium">{plan.description}</p>
              </div>

              <div className="space-y-5 mb-12 flex-grow flex flex-col items-center">
                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="shrink-0 bg-primary/10 p-1.5 rounded-full shadow-inner">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-base text-foreground/90 font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Button 
                variant={plan.isPopular ? 'default' : 'outline'} 
                className={`w-full h-16 rounded-2xl text-lg font-bold transition-all active:scale-95 shadow-md ${
                  plan.isPopular 
                    ? 'bg-primary hover:bg-primary/90 text-white' 
                    : 'border-2 border-primary text-primary hover:bg-primary/5'
                }`}
              >
                Elegir este Plan
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-slate-800 p-6 md:p-8 rounded-[2rem] border-2 border-dashed border-primary/20 shadow-lg inline-flex flex-col md:flex-row items-center gap-6">
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