
import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, Gift, Check } from 'lucide-react';

const detailedPlans = [
  {
    name: 'Plan dominio',
    transferPrice: '$86.999',
    cardPrice: '$133.999',
    savings: 'Ahorro de $47.000',
    sessions: "2 sesiones dinámicas (50' c/u)",
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
      'Salir con sensación de dominio and control del vehículo'
    ],
    features: [
      'Vehículo para las clases prácticas',
      'Acceso a la comunidad privada',
      'Formación teórica aplicada a situaciones reales y sobre el marco legal',
      'Descuento en el uso del auto para el examen práctico - 5% off',
      'Asesoría sobre los requisitos y trámites para gestionar la licencia de conducir'
    ],
    bonuses: [
      'Como identificar los diferentes fluidos de un auto y como controlarlos',
      'Como realizar un cambio de neumático',
      'Simulador de examen teórico con +85 preguntas',
      '10% off en nuestros productos digitales'
    ],
    whatsappLink: "https://wa.me/5492966265603?text=Hola%2C%20vengo%20desde%20la%20web%20y%20quiero%20contratar%20el%20*plan%20simulacro%20de%20examen*%20de%20*2%20sesiones*"
  }
];

export default function PlanExpertoPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-4 md:pt-32 md:pb-10 bg-secondary/30 border-b border-white/5 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#planes" className="inline-flex items-center gap-2 text-primary font-bold mb-4 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Volver a los programas
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold font-headline mb-0 text-white">
            Programa <span className="text-primary">simulacro de examen</span>
          </h1>
        </div>
      </section>

      <section className="pt-2 pb-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-center max-w-7xl mx-auto">
            {detailedPlans.map((plan, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-8 p-6 md:p-10 rounded-[2.5rem] border bg-secondary shadow-2xl border-white/5 h-full max-w-2xl w-full"
              >
                <div id="precios" className="w-full space-y-6 flex flex-col items-center text-center">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">{plan.name}</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full bg-black/40 p-6 md:p-8 rounded-3xl border border-white/10 shadow-inner">
                    <div className="flex flex-col items-center justify-center gap-4 sm:border-r border-white/10 sm:pr-6">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">TRANSFERENCIA O EFECTIVO</span>
                      </div>
                      <p className="text-3xl md:text-5xl font-black text-green-500 text-center tracking-tighter">
                        {plan.transferPrice}
                      </p>
                      <span className="text-[10px] md:text-xs font-bold bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-center border border-green-500/30 uppercase tracking-tight">
                        {plan.savings}
                      </span>
                    </div>
                    
                    <div className="flex flex-col items-center justify-center gap-4">
                      <div className="flex flex-col items-center gap-1">
                        <span className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest">TARJETA DE CRÉDITO</span>
                      </div>
                      <p className="text-3xl md:text-5xl font-black text-primary text-center tracking-tighter">
                        {plan.cardPrice}
                      </p>
                      <span className="mt-1 text-[10px] font-bold bg-primary/20 text-primary px-3 py-1 rounded-full text-center border border-primary/30 uppercase tracking-tight">
                        6 CUOTAS SIN INTERÉS
                      </span>
                    </div>

                    <div className="col-span-full pt-4 border-t border-white/10 mt-2 flex flex-col items-center gap-4 px-2">
                      <p className="text-center font-bold text-slate-300 flex items-center justify-center gap-2 text-base md:text-lg">
                        <Clock className="w-5 h-5 text-primary" />
                        {plan.sessions}
                      </p>
                      <a href={plan.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                        <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl h-12 font-bold animate-heartbeat transition-all shadow-none border-none">
                          Elegir
                        </Button>
                      </a>
                    </div>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed max-w-xl text-center">
                    {plan.fullDesc}
                  </p>
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

                <div className="w-full bg-black/20 p-6 rounded-[2rem] border border-white/5">
                  <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2 text-foreground text-center">
                    ¿Este programa es para vos?
                  </h3>
                  <div className="space-y-3">
                    {plan.targetAudience.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="mt-1 bg-primary/10 p-1 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-primary" />
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
                    {detailedPlans[0].outcomes.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="mt-1 bg-accent/10 p-1 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-sm text-foreground/90 font-medium leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full bg-accent/10 p-6 md:p-8 rounded-[2.5rem] border-2 border-accent/40 shadow-lg shadow-accent/5">
                  <h3 className="text-xl font-bold mb-8 flex items-center justify-center gap-3 text-accent text-center">
                    Bonos de regalo
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {detailedPlans[0].bonuses.map((bono, i) => (
                      <div key={i} className="flex flex-col items-center text-center gap-3 group">
                        <Gift className="w-6 h-6 text-accent" />
                        <span className="text-xs md:text-sm text-foreground/90 font-bold leading-snug">
                          {bono}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 flex justify-center px-2">
                  <Link href="#precios" className="w-full max-w-xs">
                    <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl h-12 font-bold animate-heartbeat transition-all shadow-none border-none">
                      Elegir un plan
                    </Button>
                  </Link>
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
          <a href="https://wa.me/5492966265603?text=Hola%2C%20tengo%20algunas%20consultas%20sobre%20el%20Programa%20Simulacro%20de%20Examen" target="_blank" rel="noopener noreferrer">
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
