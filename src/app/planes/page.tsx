import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, UserCheck, Target, Clock } from 'lucide-react';

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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-3xl bg-black/40 p-8 md:p-10 rounded-3xl border border-white/10 shadow-inner">
                    <div className="flex flex-col items-center justify-center gap-4 md:border-r border-white/10 md:pr-8">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Transferencia</span>
                      </div>
                      <p className="text-4xl md:text-6xl font-black text-green-500 text-center tracking-tighter">
                        {plan.transferPrice}
                      </p>
                      <span className="text-xs md:text-sm font-bold bg-green-500/20 text-green-500 px-4 py-1.5 rounded-full text-center border border-green-500/30">
                        Ahorro de $47.000
                      </span>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Tarjetas de crédito</span>
                      </div>
                      <p className="text-4xl md:text-6xl font-black text-primary text-center tracking-tighter">
                        {plan.cardPrice}
                      </p>
                      <span className="text-xs md:text-sm font-bold bg-primary/20 text-primary px-4 py-1.5 rounded-full text-center border border-primary/30">
                        6 cuotas sin interés
                      </span>
                    </div>

                    <div className="col-span-full pt-6 border-t border-white/10 mt-2">
                      <p className="text-center font-bold text-slate-300 flex items-center justify-center gap-2 text-lg">
                        <Clock className="w-5 h-5 text-primary" />
                        2 sesiones de prácticas dinámicas
                      </p>
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
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-7 h-7">
                      <path d="M20 12v10H4V12" />
                      <rect x="2" y="7" width="20" height="5" />
                      <path d="M12 22V7" />
                      <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z" />
                      <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z" />
                    </svg>
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
