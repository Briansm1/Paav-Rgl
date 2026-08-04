
import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Clock, Gift } from 'lucide-react';
import { cn } from '@/lib/utils';

const programDetails = {
  name: 'Programa fundamentos',
  description: 'Diseñado para personas que comienzan desde cero o tienen poca experiencia al volante. Te acompañamos desde tus primeras prácticas hasta desarrollar las bases necesarias para conducir con mayor confianza.',
  options: [
    {
      name: 'Plan oro',
      transferPrice: '$311.999',
      cardPrice: '$479.999',
      savings: 'AHORRO DE $168.000',
      sessions: "8 sesiones dinámicas (50' c/u)",
      whatsappLink: "https://wa.me/5492966265603?text=Hola%2C%20vengo%20desde%20la%20web%20y%20quiero%20contratar%20el%20*plan%20oro*%20de%20*8%20sesiones*",
      miniChecklist: ["Para empezar", "Primer contacto con el vehículo", "Bases de conducción"]
    },
    {
      name: 'Plan rookie',
      transferPrice: '$369.999',
      cardPrice: '$569.999',
      savings: 'AHORRO DE $200.000',
      sessions: "10 sesiones dinámicas (50' c/u)",
      whatsappLink: "https://wa.me/5492966265603?text=Hola%2C%20vengo%20desde%20la%20web%20y%20quiero%20contratar%20el%20*plan%20rookie*%20de%20*10%20sesiones*",
      miniChecklist: ["Más práctica", "Más tiempo de acompañamiento", "Mayor desarrollo de habilidades"]
    }
  ],
  targetAudience: [
    'Nunca manejaron y quieren empezar desde cero.',
    'Tienen poca experiencia y necesitan construir una base sólida.',
    'Tienen licencia, pero todavía no se sienten preparados para conducir solos.'
  ],
  outcomes: [
    'Familiarizarte con el vehículo y sus controles principales.',
    'Realizar maniobras básicas con mayor seguridad y técnica.',
    'Trabajar la confianza para conducir con más tranquilidad.',
    'Llegar mejor preparado a tu examen práctico.',
    'Contar con una base sólida para seguir desarrollando tu conducción.'
  ],
  features: [
    'Vehículo disponible para tus clases prácticas.',
    'Acceso a nuestra comunidad privada de alumnos/as.',
    'Formación teórica aplicada a situaciones reales de conducción.',
    'Descuento en alquiler del vehículo para tu examen práctico.',
    'Orientación sobre requisitos y trámites para gestionar tu licencia.'
  ],
  bonuses: [
    'Aprendé a identificar y revisar los fluidos básicos de un auto.',
    'Conocé cómo actuar ante situaciones comunes, como realizar un cambio de neumático.',
    'Simulador de examen teórico con +85 preguntas',
    'Accedé a descuentos en nuestros productos digitales',
    'Beneficios exclusivos con comercios asociados'
  ]
};

export default function PlanFundamentosPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-4 md:pt-32 md:pb-10 bg-secondary/30 border-b border-white/5 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#planes" className="inline-flex items-center gap-2 text-primary font-bold mb-4 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Volver a los programas
          </Link>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-5xl font-bold font-headline mb-0 text-white text-center">
              Programa <span className="text-primary">fundamentos</span>
            </h1>
            <p className="text-sm md:text-lg font-bold text-slate-400 uppercase tracking-[0.3em] text-center">
              Empezá a conducir con una base sólida y acompañamiento profesional.
            </p>
          </div>
        </div>
      </section>

      <section className="pt-2 pb-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-10 p-6 md:p-12 rounded-[3rem] border bg-secondary shadow-2xl border-white/5 h-full w-full">
              
              <div id="opciones-plan" className="flex flex-row md:grid md:grid-cols-2 gap-6 pt-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide px-2">
                {programDetails.options.map((option, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "flex flex-col gap-6 p-6 md:p-8 rounded-[2rem] bg-black/40 border transition-all duration-300 shadow-inner relative overflow-hidden group",
                      "min-w-[280px] md:min-w-0 snap-center",
                      idx === 0 ? "border-purple/40 bg-purple/5 ring-1 ring-purple/20" : "border-white/10"
                    )}
                  >
                    {idx === 0 && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-purple text-purple-foreground px-4 py-1 rounded-b-xl flex items-center shadow-lg z-20">
                        <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">MÁS POPULAR</span>
                      </div>
                    )}

                    <div className="text-center pt-4">
                      <h3 className={cn(
                        "text-2xl font-bold tracking-tight uppercase",
                        idx === 0 ? "text-purple" : "text-white"
                      )}>
                        {option.name}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">TRANSFERENCIA O EFECTIVO</span>
                        <p className="text-4xl md:text-5xl font-black text-green-500 tracking-tighter">{option.transferPrice}</p>
                        <span className="mt-2 text-[10px] font-bold bg-green-500/20 text-green-500 px-3 py-1 rounded-full border border-green-500/30 uppercase tracking-tight">
                          {option.savings}
                        </span>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex flex-col items-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">TARJETA DE CRÉDITO</span>
                        <p className="text-4xl md:text-5xl font-black text-primary tracking-tighter">{option.cardPrice}</p>
                        <span className="mt-1 text-[10px] font-bold bg-primary/20 text-primary px-3 py-1 rounded-full text-center border border-primary/30 uppercase tracking-tight">
                          6 CUOTAS SIN INTERÉS
                        </span>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex flex-col items-center gap-2">
                        <div className="flex items-center justify-center gap-2 text-primary font-bold px-2 text-center">
                          <Clock className="w-4 h-4 shrink-0" />
                          <span className="text-sm leading-tight">{option.sessions}</span>
                        </div>
                        
                        <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mt-1">
                          {option.miniChecklist.map((item, i) => (
                            <div key={i} className="flex items-center gap-1.5 whitespace-nowrap">
                              <Check className="w-2.5 h-2.5 text-green-500" />
                              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-tight">{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="pt-2 flex justify-center px-2">
                        <a href={option.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button 
                            className={cn(
                              "w-full rounded-xl h-12 font-bold animate-heartbeat transition-all group-hover:scale-[1.02] shadow-none border-none",
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

              <div className="text-center py-4">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {programDetails.description}
                </p>
              </div>

              <div className="flex flex-col gap-8">
                <div className="bg-black/20 p-6 rounded-[2rem] border border-white/5">
                  <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2 text-foreground text-center">
                    ¿Qué incluye el programa?
                  </h3>
                  <div className="space-y-3">
                    {programDetails.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-green-500/10 p-1 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-green-500" />
                        </div>
                        <span className="text-sm text-foreground/90 font-medium leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black/20 p-6 rounded-[2rem] border border-white/5">
                  <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2 text-foreground text-center">
                    ¿Este programa es para vos?
                  </h3>
                  <p className="text-sm text-foreground/80 mb-4 font-medium text-center italic">Está pensado para personas que:</p>
                  <div className="space-y-3">
                    {programDetails.targetAudience.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-primary/10 p-1 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-foreground/90 font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-black/20 p-6 rounded-[2rem] border border-white/5">
                  <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2 text-foreground text-center">
                    ¿Qué vas a lograr?
                  </h3>
                  <p className="text-sm text-foreground/80 mb-4 font-medium text-center italic">Al finalizar el plan vas a:</p>
                  <div className="space-y-3">
                    {programDetails.outcomes.map((item, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-accent/10 p-1 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm text-foreground/90 font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-accent/10 p-6 rounded-[2.5rem] border-2 border-accent/40 shadow-lg shadow-accent/5">
                  <h3 className="text-xl font-bold mb-2 flex items-center justify-center gap-3 text-accent text-center">
                    BONOS INCLUIDOS
                  </h3>
                  <p className="text-sm text-foreground/80 mb-8 text-center max-w-lg mx-auto leading-relaxed">
                    Además de tus clases, recibís recursos complementarios para prepararte mejor como conductor.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {programDetails.bonuses.map((bono, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "flex flex-col items-center text-center gap-3 group",
                          i === programDetails.bonuses.length - 1 && i % 2 === 0 && "sm:col-span-2"
                        )}
                      >
                        <Gift className="w-6 h-6 text-accent" />
                        <span className="text-xs md:text-sm text-foreground/90 font-bold leading-snug">
                          {bono}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 flex justify-center px-4">
                <Link href="#opciones-plan" className="w-full max-sm:max-w-none">
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl h-12 font-bold animate-heartbeat transition-all shadow-none border-none">
                    Elegir un plan
                  </Button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background border-t border-white/5">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-center">¿Todavía tenés consultas?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-center">
            Nuestro equipo está listo para ayudarte a resolver cualquier duda que tengas.
          </p>
          <a href="https://wa.me/5492966265603?text=Hola%2C%20tengo%20algunas%20consultas%20sobre%20el%20Programa%20Fundamentos" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary/5 text-center shadow-none">
              Hablar con alguien del equipo
            </Button>
          </a>
        </div>
      </section>

      <Footer />
    </main>
  );
}
