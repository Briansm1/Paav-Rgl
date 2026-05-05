
import React from 'react';
import { Button } from '@/components/ui/button';
import { Check, Shield } from 'lucide-react';

const plans = [
  {
    name: 'Básico',
    price: '$199',
    description: 'Ideal para quienes ya tienen nociones básicas.',
    features: ['10 horas de práctica', 'Acceso a material teórico online', '1 examen simulacro', 'Asesoría para trámites'],
    isPopular: false
  },
  {
    name: 'Pro (Más Elegido)',
    price: '$299',
    description: 'Formación completa para principiantes desde cero.',
    features: ['20 horas de práctica', 'Curso teórico presencial', 'Vehículo para examen oficial', 'Técnicas de manejo defensivo', 'Garantía de aprendizaje'],
    isPopular: true
  },
  {
    name: 'Intensivo',
    price: '$399',
    description: 'Aprende todo en tiempo récord.',
    features: ['30 horas de práctica', 'Prácticas nocturnas y en carretera', 'Curso de mecánica básica', 'Priority support 24/7', 'Vehículo premium para prácticas'],
    isPopular: false
  }
];

export const Pricing = () => {
  return (
    <section id="planes" className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-accent font-bold tracking-widest uppercase text-xs md:text-sm mb-4">Inversión para tu Futuro</h2>
          <h3 className="text-3xl md:text-5xl font-bold font-headline mb-6 text-foreground">Nuestros Planes y Paquetes</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Elige el plan que mejor se adapte a tus necesidades y comienza tu viaje hoy mismo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-3xl border-2 transition-all duration-500 flex flex-col ${
                plan.isPopular 
                  ? 'bg-white dark:bg-slate-800 border-primary shadow-2xl scale-100 lg:scale-105 z-10' 
                  : 'bg-white/40 dark:bg-slate-800/40 border-border hover:border-primary/50'
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-primary text-white px-6 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                  Recomendado
                </div>
              )}
              <div className="mb-8">
                <h4 className="text-2xl font-bold mb-4">{plan.name}</h4>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold tracking-tight">{plan.price}</span>
                  <span className="text-muted-foreground text-sm font-semibold">/total</span>
                </div>
                <p className="mt-4 text-muted-foreground text-sm font-medium leading-relaxed">{plan.description}</p>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="shrink-0 bg-primary/10 p-1 rounded-full">
                      <Check className="w-4 h-4 text-primary shrink-0" />
                    </div>
                    <span className="text-sm md:text-base text-foreground/80 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={plan.isPopular ? 'default' : 'outline'} 
                className={`w-full h-14 rounded-2xl text-lg font-bold transition-transform active:scale-95 ${
                  plan.isPopular ? 'bg-primary hover:bg-primary/90' : 'border-primary text-primary hover:bg-primary/5'
                }`}
              >
                Seleccionar Plan
              </Button>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center px-4">
          <div className="inline-flex items-center gap-3 bg-white dark:bg-slate-800 px-6 py-4 rounded-2xl border border-primary/20 shadow-sm max-w-full">
            <Shield className="w-6 h-6 text-primary shrink-0" />
            <span className="text-sm md:text-base font-semibold text-foreground leading-tight">Todos nuestros planes incluyen seguro contra accidentes durante las prácticas.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
