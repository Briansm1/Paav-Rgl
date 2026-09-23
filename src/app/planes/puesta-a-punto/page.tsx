'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Clock, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

const programDetails = {
  name: 'Programa puesta a punto',
  description: 'Diseñado para personas que ya tienen conocimientos básicos y quieren mejorar aspectos específicos de su conducción. Trabajamos maniobras, técnica y situaciones reales para que puedas conducir con mayor tranquilidad y control.',
  options: [
    {
      name: 'Plan as',
      originalTransferPrice: '$165.999',
      transferPrice: '$141.099',
      cardPrice: '$255.999',
      savings: '15% OFF EN TRANSFERENCIA (AHORRO DE $114.900 VS TARJETA)',
      sessions: "4 sesiones dinámicas (50' c/u)",
      whatsappLink: "https://wa.me/5492966265603?text=Hola%2C%20vengo%20desde%20la%20web%20y%20quiero%20contratar%20el%20*plan%20as*%20de%20*4%20sesiones*",
      miniChecklist: ["Refuerzo de habilidades"]
    },
    {
      name: 'Plan diamante',
      originalTransferPrice: '$198.999',
      transferPrice: '$169.149',
      cardPrice: '$305.999',
      savings: '15% OFF EN TRANSFERENCIA (AHORRO DE $136.850 VS TARJETA)',
      sessions: "5 sesiones dinámicas (50' c/u)",
      whatsappLink: "https://wa.me/5492966265603?text=Hola%2C%20vengo%20desde%20la%20web%20y%20quiero%20contratar%20el%20*plan%20diamante*%20de%20*5%20sesiones*",
      miniChecklist: ["Perfeccionamiento completo"]
    }
  ],
  targetAudience: [
    'Ya tienen experiencia manejando, pero quieren ganar más confianza al volante.',
    'Necesitan practicar maniobras específicas antes de rendir su examen práctico.',
    'Tienen licencia o conocimientos previos y quieren mejorar su técnica de conducción.'
  ],
  outcomes: [
    'Mejorar el control del vehículo y la coordinación al conducir.',
    'Practicar maniobras específicas con una técnica correcta.',
    'Corregir hábitos de conducción y mejorar tu forma de manejar.',
    'Ganar mayor tranquilidad en situaciones que hoy te generan inseguridad.',
    'Conducir de forma más fluida y segura.'
  ],
  features: [
    'Vehículo disponible para tus clases prácticas.',
    'Prácticas enfocadas en tus necesidades de conducción.',
    'Repaso de aspectos teóricos aplicados a situaciones reales.',
    'Descuento en alquiler del vehículo para el examen práctico.',
    'Orientación sobre requisitos y trámites para gestionar tu licencia.'
  ],
  bonuses: [
    'Aprendé a identificar y revisar los fluidos básicos de un auto.',
    'Conocé cómo actuar ante situaciones comunes, como realizar un cambio de neumático.',
    'Simulador de examen teórico con +85 preguntas.',
    'Accedé a descuentos en nuestros productos digitales.',
    'Beneficios exclusivos con comercios asociados.'
  ]
};

export default function PlanPuestaAPuntoPage() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (scrollContainerRef.current && window.innerWidth < 768) {
        scrollContainerRef.current.scrollTo({
          left: 100,
          behavior: 'smooth'
        });
        setTimeout(() => {
          if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollTo({
              left: 0,
              behavior: 'smooth'
            });
          }
        }, 800);
      }
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="min-h-screen bg-background text-body">
      <Header />
      
      <section className="pt-24 pb-4 md:pt-32 md:pb-10 bg-secondary/30 border-b border-white/5 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#planes" className="inline-flex items-center gap-2 text-primary font-bold mb-4 hover:underline text-lg">
            <ArrowLeft className="w-5 h-5" />
            Volver a los programas
          </Link>
        </div>
      </section>

      <section className="pt-2 pb-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-col gap-10 p-6 md:p-12 rounded-[3rem] border bg-secondary shadow-2xl border-white/5 h-full w-full">
              
              <div 
                ref={scrollContainerRef}
                id="opciones-plan" 
                className="flex flex-row md:grid md:grid-cols-2 gap-8 pt-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide px-2"
              >
                {programDetails.options.map((option, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "flex flex-col gap-8 p-8 md:p-10 rounded-[2.5rem] bg-black/40 border transition-all duration-300 shadow-inner relative overflow-hidden group",
                      "min-w-[85%] md:min-w-0 snap-center items-center text-center",
                      idx === 0 ? "border-purple/40 bg-purple/5 ring-1 ring-purple/20" : "border-white/10"
                    )}
                  >
                    {idx === 0 && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-purple text-purple-foreground px-6 py-2 rounded-b-2xl flex items-center shadow-lg z-20">
                        <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap">MÁS POPULAR</span>
                      </div>
                    )}

                    <div className="text-center pt-4">
                      <h3 className={cn(
                        "text-3xl md:text-4xl font-bold tracking-tight uppercase",
                        idx === 0 ? "text-purple" : "text-white"
                      )}>
                        {option.name}
                      </h3>
                    </div>

                    <div className="space-y-6 w-full">
                      <div className="flex flex-col items-center">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">TRANSFERENCIA O EFECTIVO</span>
                        <span className="text-xl md:text-2xl font-bold text-red-500 line-through decoration-red-500 opacity-90">
                          {option.originalTransferPrice}
                        </span>
                        <p className="text-4xl md:text-6xl font-black text-green-500 tracking-tighter mt-1">
                          {option.transferPrice}
                        </p>
                        <span className="mt-3 text-xs md:text-sm font-bold bg-amber-500/20 text-amber-400 px-4 py-1.5 rounded-full border border-amber-500/30 uppercase tracking-tight">
                          15% OFF CON TRANSFERENCIA
                        </span>
                      </div>

                      <div className="pt-6 border-t border-white/5 flex flex-col items-center">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">TARJETA DE CRÉDITO</span>
                        <p className="text-4xl md:text-6xl font-black text-primary tracking-tighter">{option.cardPrice}</p>
                        <span className="mt-2 text-xs md:text-sm font-bold bg-primary/20 text-primary px-4 py-1.5 rounded-full text-center border border-primary/30 uppercase tracking-tight">
                          6 CUOTAS SIN INTERÉS
                        </span>
                      </div>

                      <div className="pt-6 border-t border-white/10 flex flex-col items-center gap-3">
                        <div className="flex items-center justify-center gap-3 text-primary font-bold px-2 text-center">
                          <Clock className="w-5 h-5 shrink-0" />
                          <span className="text-lg md:text-xl leading-tight">{option.sessions}</span>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-2">
                          {option.miniChecklist.map((item, i) => (
                            <div key={i} className="flex items-center gap-2 whitespace-nowrap">
                              <Check className="w-4 h-4 text-green-500" />
                              <span className="text-xs font-bold text-slate-400 uppercase tracking-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-4 flex justify-center px-2">
                        <a href={option.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button 
                            className={cn(
                              "w-full h-14 rounded-xl text-lg font-bold animate-heartbeat transition-all group-hover:scale-[1.02] shadow-none border-none",
                              idx === 0 ? "bg-purple hover:bg-purple/90 text-purple-foreground" : "bg-primary hover:bg-primary/90"
                            )}
                          >
                            Elegir
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center py-6">
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                  {programDetails.description}
                </p>
              </div>

              <div className="flex flex-col gap-10">
                <div className="bg-black/20 p-8 rounded-[2.5rem] border border-white/5">
                  <h3 className="text-2xl font-bold mb-6 flex items-center justify-center gap-3 text-foreground text-center">
                    ¿Qué incluye el programa?
                  </h3>
                  <div className="space-y-4">
                    {programDetails.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-4">
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
                    {programDetails.targetAudience.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
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
                  <p className="text-lg text-foreground/80 mb-5 font-medium text-center italic">Al finalizar el programa vas a:</p>
                  <div className="space-y-4">
                    {programDetails.outcomes.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
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
                    {programDetails.bonuses.map((bono, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "flex flex-col items-center text-center gap-4 group",
                          i === programDetails.bonuses.length - 1 && i % 2 === 0 && "sm:col-span-2"
                        )}
                      >
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
                <Link href="#opciones-plan" className="w-full max-sm:max-w-none">
                  <Button className="w-full h-14 bg-primary hover:bg-primary/90 rounded-xl text-lg font-bold animate-heartbeat transition-all shadow-none border-none">
                    Elegir un plan
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">¿Todavía tenés dudas sobre qué plan elegir?</h2>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-center">
            Nuestro equipo puede ayudarte a encontrar la opción más adecuada según tu experiencia y que queres lograr.
          </p>
          <a href="https://wa.me/5492966265603?text=Hola%2C%20tengo%20algunas%20consultas%20sobre%20el%20Programa%20Puesta%20a%20Punto" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="h-14 px-10 rounded-full border-primary text-primary hover:bg-primary/5 text-center shadow-none text-lg font-bold">
              Conocer mi plan ideal
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
