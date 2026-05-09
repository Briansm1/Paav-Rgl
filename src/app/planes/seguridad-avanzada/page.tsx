import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, UserCheck, Target, Clock, Gift } from 'lucide-react';

const detailedPlans = [
  {
    name: 'Plan as',
    transferPrice: '$165.999',
    cardPrice: '$255.999',
    savings: 'Ahorro de $90.000',
    sessions: '4 sesiones de prácticas dinámicas',
    fullDesc: 'Diseñado para conductores que buscan una formación integral, combinando maniobras avanzadas con una mayor carga horaria de conducción en tráfico real.',
    targetAudience: [
      'Para quienes quieren ganar seguridad total en avenidas y zonas de alto tráfico',
      'Para personas que necesitan consolidar su técnica de manejo defensivo',
      'Para quienes buscan una transformación profunda en su confianza al volante'
    ],
    outcomes: [
      'Dominio fluido en entornos urbanos complejos',
      'Eliminación del miedo a circular en zonas de alta velocidad',
      'Reflejos y anticipación mejorada',
      'Habilidad avanzada en todo tipo de estacionamientos',
      'Sensación de control absoluto del vehículo'
    ],
    features: [
      'Auto para las prácticas',
      'Acceso a la comunidad privada',
      'Formación teórica intensiva sobre manejo preventivo',
      'Descuento en el uso del auto para el examen práctico - 10% off',
      'Asesoría completa sobre trámites de licencia'
    ],
    bonuses: [
      'Mantenimiento preventivo: Fluidos y mecánica ligera',
      'Kit de emergencia: Cambio de neumáticos y seguridad',
      'Simulador de examen teórico premium (+150 preguntas)',
      'Acceso vitalicio a actualizaciones de material digital'
    ]
  },
  {
    name: 'Plan diamante',
    transferPrice: '$165.999',
    cardPrice: '$255.999',
    savings: 'Ahorro de $90.000',
    sessions: '4 sesiones de prácticas dinámicas',
    fullDesc: 'Una versión extendida para quienes buscan consolidar su técnica con más horas al volante y mayor variedad de situaciones de tráfico real.',
    targetAudience: [
      'Para quienes buscan una transformación profunda en su confianza',
      'Para quienes necesitan más tiempo de práctica asistida',
      'Para quienes desean dominar circular en avenidas y zonas de alto tráfico'
    ],
    outcomes: [
      'Dominio total en cualquier entorno urbano',
      'Eliminación completa del miedo a conducir',
      'Reflejos y anticipación mejorada',
      'Habilidad experta en todo tipo de estacionamientos',
      'Seguridad total para el examen y el día a día'
    ],
    features: [
      'Auto para las prácticas',
      'Acceso a la comunidad privada',
      'Formación teórica intensiva sobre manejo preventivo',
      'Descuento en el uso del auto para el examen práctico - 15% off',
      'Asesoría completa sobre trámites de licencia'
    ],
    bonuses: [
      'Mantenimiento preventivo: Fluidos y mecánica ligera',
      'Kit de emergencia: Cambio de neumáticos y seguridad',
      'Simulador de examen teórico premium (+150 preguntas)',
      'Acceso vitalicio a actualizaciones de material digital'
    ]
  }
];

export default function PlanSeguridadAvanzadaPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-32 pb-20 bg-secondary/30 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#planes" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 text-foreground text-center">
            Programa <span className="text-primary">seguridad avanzada</span>
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
            {detailedPlans.map((plan, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-8 p-6 md:p-10 rounded-[2.5rem] border bg-secondary shadow-2xl border-white/5 h-full w-full"
              >
                <div className="w-full space-y-6 flex flex-col items-center text-center">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">{plan.name}</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full bg-black/40 p-6 md:p-8 rounded-3xl border border-white/10 shadow-inner">
                    <div className="flex flex-col items-center justify-center gap-4 sm:border-r border-white/10 sm:pr-6">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Transferencia</span>
                      </div>
                      <p className="text-3xl md:text-5xl font-black text-green-500 text-center tracking-tighter">
                        {plan.transferPrice}
                      </p>
                      <span className="text-[10px] md:text-xs font-bold bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-center border border-green-500/30">
                        {plan.savings}
                      </span>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">Tarjeta</span>
                      </div>
                      <p className="text-3xl md:text-5xl font-black text-primary text-center tracking-tighter">
                        {plan.cardPrice}
                      </p>
                      <span className="text-[10px] md:text-xs font-bold bg-primary/20 text-primary px-3 py-1 rounded-full text-center border border-primary/30">
                        6 cuotas sin interés
                      </span>
                    </div>

                    <div className="col-span-full pt-4 border-t border-white/10 mt-2 flex justify-center">
                      <p className="text-center font-bold text-slate-300 flex items-center justify-center gap-2 text-base md:text-lg">
                        <Clock className="w-5 h-5 text-primary" />
                        {plan.sessions}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed max-w-xl text-center">
                    {plan.fullDesc}
                  </p>
                </div>

                <div className="w-full bg-black/20 p-6 rounded-[2rem] border border-white/5">
                  <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2 text-foreground text-center">
                    ¿Para quién es?
                  </h3>
                  <div className="space-y-3">
                    {plan.targetAudience.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="mt-1 bg-primary/10 p-1 rounded-full shrink-0">
                          <UserCheck className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground/90 font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full bg-black/20 p-6 rounded-[2rem] border border-white/5">
                  <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2 text-foreground text-center">
                    ¿Qué vas a lograr?
                  </h3>
                  <div className="space-y-3">
                    {plan.outcomes.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="mt-1 bg-accent/10 p-1 rounded-full shrink-0">
                          <Target className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm text-foreground/90 font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full bg-black/20 p-6 rounded-[2rem] border border-white/5">
                  <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2 text-foreground text-center">
                    ¿Qué incluye?
                  </h3>
                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="mt-1 bg-green-500/10 p-1 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-sm text-foreground/90 font-medium leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full bg-primary/5 p-6 md:p-8 rounded-[2.5rem] border-2 border-primary/20">
                  <h3 className="text-xl font-bold mb-8 flex items-center justify-center gap-3 text-primary text-center">
                    <Gift className="w-6 h-6" />
                    Bonos de regalo
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {plan.bonuses.map((bono, i) => (
                      <div key={i} className="flex flex-col items-center text-center gap-3 group">
                        <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                          {i + 1}
                        </div>
                        <span className="text-xs md:text-sm text-foreground/90 font-bold leading-snug">
                          {bono}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-auto w-full flex justify-center">
                  <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-primary hover:bg-primary/90 w-full text-center">
                    Quiero este plan
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-center">¿Todavía tenés consultas?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-center">
            Nuestro equipo está listo para ayudarte a resolver cualquier duda que tengas.
          </p>
          <Link href="/#contacto">
            <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary/5 text-center">
              Hablar con un asesor
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
