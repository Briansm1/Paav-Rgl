
import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Gift, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const detailedPlans = [
  {
    name: 'Plan dominio',
    transferPrice: '$86.999',
    cardPrice: '$133.999',
    savings: 'Ahorro de $47.000',
    sessions: "2 sesiones dinámicas (50' c/u)",
    miniChecklist: ["Preparación final para tu examen práctico"],
    fullDesc: 'Diseñado para personas que están próximas a rendir el examen práctico y quieren reforzar maniobras, estacionamiento y situaciones de circulación antes de la evaluación.',
    targetAudience: [
      'Están próximas a rendir el examen práctico y quieren conocer su nivel antes de presentarse.',
      'Necesitan reforzar una maniobra específica o corregir detalles de su conducción.',
      'Quieren trabajar la confianza y los nervios antes de enfrentarse al examen.'
    ],
    outcomes: [
      'Identificar los aspectos que necesitás mejorar antes del examen.',
      'Practicar maniobras clave y situaciones frecuentes de evaluación.',
      'Corregir errores puntuales con acompañamiento profesional.',
      'Llegar al examen con mayor preparación y tranquilidad.',
      'Tener más claridad sobre qué reforzar antes de rendir.'
    ],
    features: [
      'Vehículo disponible para realizar las prácticas.',
      'Simulación de situaciones del examen práctico.',
      'Corrección de maniobras y aspectos a mejorar.',
      'Repaso de conocimientos necesarios para la conducción.',
      'Descuento en alquiler del vehículo para rendir el examen práctico.',
      'Orientación sobre requisitos y trámites de la licencia.'
    ],
    bonuses: [
      'Aprendé a identificar y revisar los fluidos básicos de un auto.',
      'Conocé cómo actuar ante situaciones comunes, como realizar un cambio de neumático.',
      'Simulador de examen teórico con +85 preguntas.',
      'Accedé a descuentos en nuestros productos digitales.'
    ],
    whatsappLink: "https://wa.me/5492966265603?text=Hola%2C%20vengo%20desde%20la%20web%20y%20quiero%20contratar%20el%20*plan%20simulacro%20de%20examen*%20de%20*2%20sesiones*"
  }
];

export default function PlanExpertoPage() {
  return (
    <main className="min-h-screen bg-background text-body">
      <Header />
      
      <section className="pt-24 pb-4 md:pt-32 md:pb-10 bg-secondary/30 border-b border-white/5 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#planes" className="inline-flex items-center gap-2 text-primary font-bold mb-4 hover:underline text-lg">
            <ArrowLeft className="w-5 h-5" />
            Volver a los programas
          </Link>
          <div className="flex flex-col gap-3">
            <h1 className="text-h1 font-bold font-headline mb-0 text-white text-center">
              Programa <span className="text-primary">simulacro de examen</span>
            </h1>
            <p className="text-lg md:text-2xl font-bold text-slate-400 uppercase tracking-[0.3em] text-center">
              EL ÚLTIMO PASO
            </p>
          </div>
        </div>
      </section>

      <section className="pt-2 pb-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {detailedPlans.map((plan, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-10 p-6 md:p-12 rounded-[3rem] border bg-secondary shadow-2xl border-white/5 h-full w-full"
              >
                <div id="precios" className="w-full space-y-8 flex flex-col items-center text-center">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center uppercase">{plan.name}</h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full bg-black/40 p-8 md:p-10 rounded-[2.5rem] border border-white/10 shadow-inner">
                    <div className="flex flex-col items-center justify-center gap-6 md:border-r border-white/10 md:pr-10">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">TRANSFERENCIA O EFECTIVO</span>
                      </div>
                      <p className="text-4xl md:text-6xl font-black text-green-500 text-center tracking-tighter">
                        {plan.transferPrice}
                      </p>
                      <span className="text-xs md:text-sm font-bold bg-green-500/20 text-green-500 px-4 py-1.5 rounded-full text-center border border-green-500/30 uppercase tracking-tight">
                        {plan.savings.toUpperCase()}
                      </span>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center gap-6">
                      <div className="flex flex-col items-center gap-2">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">TARJETA DE CRÉDITO</span>
                      </div>
                      <p className="text-4xl md:text-6xl font-black text-primary text-center tracking-tighter">
                        {plan.cardPrice}
                      </p>
                      <span className="mt-2 text-xs md:text-sm font-bold bg-primary/20 text-primary px-4 py-1.5 rounded-full text-center border border-primary/30 uppercase tracking-tight">
                        6 CUOTAS SIN INTERÉS
                      </span>
                    </div>

                    <div className="col-span-full pt-8 border-t border-white/10 mt-2 flex flex-col items-center gap-6 px-2">
                      <div className="flex flex-col items-center gap-4">
                        <div className="flex items-center justify-center gap-3 text-primary font-bold px-2 text-center">
                          <Clock className="w-6 h-6 shrink-0" />
                          <span className="text-xl md:text-2xl leading-tight">{plan.sessions}</span>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mt-2">
                          {plan.miniChecklist.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
                              <Check className="w-4 h-4 text-green-500" />
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <a href={plan.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-md">
                        <Button className="w-full h-16 md:h-16 bg-primary hover:bg-primary/90 rounded-xl text-xl font-bold animate-heartbeat transition-all shadow-none border-none">
                          Elegir
                        </Button>
                      </a>
                    </div>
                  </div>

                  <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl text-center">
                    {plan.fullDesc}
                  </p>
                </div>

                <div className="w-full space-y-10">
                  <div className="bg-black/20 p-8 rounded-[2.5rem] border border-white/5">
                    <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3 text-foreground text-center">
                      ¿Qué incluye?
                    </h3>
                    <div className="space-y-4">
                      {plan.features.map((feature, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <div className="mt-1 bg-green-500/10 p-1.5 rounded-full shrink-0">
                            <Check className="w-4 h-4 text-green-500" />
                          </div>
                          <span className="text-lg md:text-xl text-foreground/90 font-medium leading-snug">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/20 p-8 rounded-[2.5rem] border border-white/5">
                    <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3 text-foreground text-center">
                      ¿Este programa es para vos?
                    </h3>
                    <p className="text-lg text-foreground/80 mb-5 font-medium text-center italic">Está pensado para personas que:</p>
                    <div className="space-y-4">
                      {plan.targetAudience.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <div className="mt-1 bg-primary/10 p-1.5 rounded-full shrink-0">
                            <Check className="w-4 h-4 text-primary" />
                          </div>
                          <span className="text-lg md:text-xl text-foreground/90 font-medium leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-black/20 p-8 rounded-[2.5rem] border border-white/5">
                    <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3 text-foreground text-center">
                      ¿Qué vas a lograr?
                    </h3>
                    <p className="text-lg text-foreground/80 mb-5 font-medium text-center italic">Con este programa vas a:</p>
                    <div className="space-y-4">
                      {plan.outcomes.map((item, i) => (
                        <div key={i} className="flex items-start gap-4 group">
                          <div className="mt-1 bg-accent/10 p-1.5 rounded-full shrink-0">
                            <Check className="w-4 h-4 text-accent" />
                          </div>
                          <span className="text-lg md:text-xl text-foreground/90 font-medium leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-accent/10 p-8 rounded-[3rem] border-2 border-accent/40 shadow-lg shadow-accent/5">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 flex items-center justify-center gap-4 text-accent text-center">
                      Bonos incluidos
                    </h3>
                    <p className="text-lg md:text-xl text-foreground/80 mb-6 text-center max-w-2xl mx-auto leading-relaxed">
                      Además de tus clases, recibís recursos complementarios para prepararte mejor como conductor.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {detailedPlans[0].bonuses.map((bono, i) => (
                        <div key={i} className="flex flex-col items-center text-center gap-4 group">
                          <Gift className="w-8 h-8 text-accent" />
                          <span className="text-base md:text-lg text-foreground/90 font-bold leading-snug">
                            {bono}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-10 flex justify-center px-4">
                  <Link href="#precios" className="w-full max-md:max-w-none">
                    <Button className="w-full h-16 md:h-16 bg-primary hover:bg-primary/90 rounded-xl text-xl font-bold animate-heartbeat transition-all shadow-none border-none">
                      Elegir un plan
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">¿Todavía tenés dudas sobre qué plan elegir?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-center">
            Nuestro equipo puede ayudarte a encontrar la opción más adecuada según tu experiencia y que queres lograr.
          </p>
          <a href="https://wa.me/5492966265603?text=Hola%2C%20tengo%20algunas%20consultas%20sobre%20el%20Programa%20Simulacro%20de%20Examen" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="h-16 px-12 rounded-full border-primary text-primary hover:bg-primary/5 text-center shadow-none text-xl font-bold">
              Conocer mi plan ideal
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
