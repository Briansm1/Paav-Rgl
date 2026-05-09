import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, UserCheck, Target, Sparkles } from 'lucide-react';

const detailedPlans = [
  {
    name: 'Plan dominio',
    transferPrice: '$86.999',
    cardPrice: '$133.999',
    shortDesc: 'Refuerzo y perfeccionamiento.',
    fullDesc: 'Diseñado para personas que ya tienen conocimientos o licencia y quieren ganar más seguridad en maniobras complejas, estacionamiento o circular en tráfico.',
    targetAudience: [
      'Para quienes quieren realizar una simulación completa del examen práctico y ver en que situación está',
      'Para quienes necesitan mejorar alguna maniobra en particular',
      'Para quienes necesiten saber como trabajar la mentalidad a la hora de estar al volante'
    ],
    outcomes: [
      'Presición en maniobras clave',
      'Mayor seguridad en puntos complejos de la conducción',
      'Corrección personalizada',
      'Confianza inmediata en aquello que hoy te genera duda',
      'Salir con sensación de dominio y control del vehículo'
    ],
    features: [
      '2 sesiones de prácticas dinámicas (50 min c/u)',
      'Auto para las prácticas',
      'Acceso a la comunidad privada',
      'Formación teórica aplicada a situaciones reales y sobre el marco legal',
      'Descuento en el uso del auto para el examen práctico - 5% off',
      'Asesoría sobre los requisitos y trámites para gestionar la licencia de conducir'
    ],
    bonuses: [
      'Como identificar los diferentes fluidos de un auto y como controlarlos',
      'Como realizar un cambio de neumático',
      'Simulador de examen teórico con +85 preguntas',
      'Descuentos exclusivos en nuestros productos digitales'
    ]
  }
];

export default function PlanesPage() {
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
            Nuestros detalles para el <span className="text-primary">programa experto</span>
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {detailedPlans.map((plan, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-10 p-6 md:p-10 rounded-[2.5rem] border bg-secondary shadow-2xl border-white/5"
              >
                <div className="w-full space-y-6 flex flex-col items-center text-center">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">{plan.name}</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl bg-black/20 p-6 rounded-2xl border border-white/5">
                    <div className="flex flex-col items-center justify-center gap-2 sm:border-r border-white/10 sm:pr-6">
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <span className="text-xl">📲</span>
                        <span className="text-sm font-medium text-slate-400">Transferencia</span>
                      </div>
                      <p className="text-3xl font-bold text-green-500 text-center">{plan.transferPrice}</p>
                      <span className="text-xs font-bold bg-green-500/10 text-green-500 px-3 py-1 rounded-full text-center">
                        Ahorro de $47.000
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex flex-col items-center gap-2 text-muted-foreground">
                        <span className="text-xl">💳</span>
                        <span className="text-sm font-medium text-slate-400">Tarjetas de crédito</span>
                      </div>
                      <p className="text-3xl font-bold text-primary text-center">{plan.cardPrice}</p>
                      <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full text-center">
                        6 cuotas sin interés
                      </span>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl text-center">
                    {plan.fullDesc}
                  </p>
                </div>

                <div className="w-full bg-black/20 p-6 md:p-8 rounded-[2rem] border border-white/5">
                  <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2 text-foreground text-center">
                    ¿Para quién es?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {plan.targetAudience.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="mt-1 bg-primary/10 p-1 rounded-full shrink-0">
                          <UserCheck className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm md:text-base text-foreground/90 font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full bg-black/20 p-6 md:p-8 rounded-[2rem] border border-white/5">
                  <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2 text-foreground text-center">
                    ¿Qué vas a lograr?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {plan.outcomes.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="mt-1 bg-accent/10 p-1 rounded-full shrink-0">
                          <Target className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm md:text-base text-foreground/90 font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full bg-black/20 p-6 md:p-8 rounded-[2rem] border border-white/5">
                  <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2 text-foreground text-center">
                    ¿Qué incluye este programa?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="mt-1 bg-green-500/10 p-1 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-sm md:text-base text-foreground/90 font-medium leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full bg-primary/5 p-8 md:p-10 rounded-[2.5rem] border-2 border-primary/20">
                  <h3 className="text-2xl font-bold mb-10 flex items-center justify-center gap-3 text-primary text-center">
                    <Sparkles className="w-7 h-7" />
                    Bonos de regalo
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {plan.bonuses.map((bono, i) => (
                      <div key={i} className="flex flex-col items-center text-center gap-5 group">
                        <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl shadow-lg shadow-primary/20 group-hover:scale-110 transition-transform">
                          {i + 1}
                        </div>
                        <span className="text-sm md:text-base text-foreground/90 font-bold leading-snug">
                          {bono}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 w-full flex justify-center">
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
            Nuestros asesores están listos para ayudarte a resolver cualquier duda que tengas sobre el Plan dominio.
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
