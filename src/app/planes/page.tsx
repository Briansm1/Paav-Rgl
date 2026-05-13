import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, UserCheck, Target, Clock, Gift, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';

const programDetails = {
  name: 'Programa seguridad avanzada',
  description: 'Diseñado para personas que buscan aprender maniobras concretas o mejorar el conocimiento actual, prepararse para el examen práctico o conseguir confianza y seguridad al volante.',
  options: [
    {
      name: 'Plan as',
      transferPrice: '$165.999',
      cardPrice: '$255.999',
      savings: 'Ahorro de $90.000',
      sessions: '4 sesiones de prácticas dinámicas',
      whatsappLink: "https://wa.me/5492966265603?text=Hola%2C%20vengo%20desde%20la%20web%20y%20quiero%20contratar%20el%20*plan%20as*%20de%20*4%20sesiones*"
    },
    {
      name: 'Plan diamante',
      transferPrice: '$198.999',
      cardPrice: '$305.999',
      savings: 'Ahorro de $108.000',
      sessions: '5 sesiones de prácticas dinámicas',
      whatsappLink: "https://wa.me/5492966265603?text=Hola%2C%20vengo%20desde%20la%20web%20y%20quiero%20contratar%20el%20*plan%20diamante*%20de%20*5%20sesiones*"
    }
  ],
  targetAudience: [
    'Para personas que ya manejan, pero no se sienten 100% seguras.',
    'Para quienes van a sacar su licencia y necesitan reforzar práctica o maniobras puntuales.',
    'Para quienes tienen licencia pero quieren afianzar técnica y precisión.'
  ],
  outcomes: [
    'Mejorar coordinación y control del vehículo.',
    'Ejecutar maniobras pendientes con la técnica correcta.',
    'Corregir vicios malos de conducción.',
    'Ganar seguridad en situaciones que hoy generan tensión.',
    'Manejar con fluidez y confianza real.'
  ],
  features: [
    'Vehículo para las clases prácticas',
    'Acceso a la comunidad privada',
    'Formación teórica aplicada a situaciones reales y sobre el marco legal',
    'Descuento en el uso del auto para el examen práctico - 10% off',
    'Asesoría sobre los requisitos y trámites para gestionar la licencia de conducir'
  ],
  bonuses: [
    'Como identificar los diferentes fluidos de un auto y como controlarlos',
    'Como realizar un cambio de neumático',
    'Simulador de examen teórico con +85 preguntas',
    'Descuentos exclusivos en nuestros productos digitales',
    'Descuentos exclusivos con nuestros comercios amigos y socios'
  ]
};

export default function PlanesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-8 bg-secondary/30 border-b border-white/5">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#planes" className="inline-flex items-center gap-2 text-primary font-bold mb-4 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Volver a los programas
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold font-headline mb-0 text-foreground text-center">
            Programa <span className="text-primary">seguridad avanzada</span>
          </h1>
        </div>
      </section>

      <section className="py-12 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-10 p-6 md:p-12 rounded-[3rem] border bg-secondary shadow-2xl border-white/5 h-full w-full">
              
              <div id="opciones-plan" className="flex flex-row md:grid md:grid-cols-2 gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 snap-x snap-mandatory scrollbar-hide">
                {programDetails.options.map((option, idx) => (
                  <div 
                    key={idx} 
                    className={cn(
                      "flex flex-col gap-6 p-6 md:p-8 rounded-[2rem] bg-black/40 border transition-all duration-300 shadow-inner relative overflow-hidden group",
                      "min-w-[280px] md:min-w-0 snap-center",
                      idx === 0 ? "border-gold/40 bg-gold/5 ring-1 ring-gold/20" : "border-white/10"
                    )}
                  >
                    {idx === 0 && (
                      <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gold text-gold-foreground px-4 py-1 rounded-b-xl flex items-center shadow-lg z-20">
                        <span className="text-[10px] font-black uppercase tracking-widest whitespace-nowrap">MÁS POPULAR</span>
                      </div>
                    )}

                    <div className="text-center pt-4">
                      <h3 className={cn(
                        "text-2xl font-bold tracking-tight uppercase",
                        idx === 0 ? "text-gold" : "text-white"
                      )}>
                        {option.name}
                      </h3>
                    </div>

                    <div className="space-y-4">
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Transferencia</span>
                        <p className="text-4xl md:text-5xl font-black text-green-500 tracking-tighter">{option.transferPrice}</p>
                        <span className="mt-2 text-[10px] font-bold bg-green-500/20 text-green-500 px-3 py-1 rounded-full border border-green-500/30">
                          {option.savings}
                        </span>
                      </div>

                      <div className="pt-4 border-t border-white/5 flex flex-col items-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">TARJETA DE CRÉDITO</span>
                        <p className="text-4xl md:text-5xl font-black text-primary tracking-tighter">{option.cardPrice}</p>
                        <span className="mt-1 text-[10px] font-bold bg-primary/20 text-primary px-3 py-1 rounded-full text-center border border-primary/30">
                          6 cuotas sin interés
                        </span>
                      </div>

                      <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-primary font-bold">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{option.sessions}</span>
                      </div>

                      <div className="pt-2 flex justify-center">
                        <a href={option.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                          <Button 
                            className={cn(
                              "w-full rounded-xl h-12 font-bold transition-all group-hover:scale-[1.02]",
                              idx === 0 ? "bg-gold hover:bg-gold/90 text-gold-foreground" : "bg-primary hover:bg-primary/90"
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
                    <UserCheck className="w-5 h-5 text-primary" />
                    ¿Para quién es?
                  </h3>
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
                    <Target className="w-5 h-5 text-accent" />
                    ¿Qué vas a lograr?
                  </h3>
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

                <div className="bg-black/20 p-6 rounded-[2rem] border border-white/5">
                  <h3 className="text-lg font-bold mb-4 flex items-center justify-center gap-2 text-foreground text-center">
                    <ShieldCheck className="w-5 h-5 text-green-500" />
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

                <div className="bg-accent/10 p-6 rounded-[2rem] border-2 border-accent/40 shadow-lg shadow-accent/5">
                  <h3 className="text-xl font-bold mb-8 flex items-center justify-center gap-3 text-accent text-center">
                    <Gift className="w-6 h-6" />
                    Bonos de regalo
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {programDetails.bonuses.map((bono, i) => (
                      <div 
                        key={i} 
                        className={cn(
                          "flex flex-col items-center text-center gap-2",
                          i === programDetails.bonuses.length - 1 && i % 2 === 0 && "sm:col-span-2"
                        )}
                      >
                        <div className="relative">
                          <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-75"></span>
                          <div className="relative w-7 h-7 rounded-full bg-accent text-white flex items-center justify-center font-bold text-sm">
                            {i + 1}
                          </div>
                        </div>
                        <span className="text-xs text-foreground/90 font-bold leading-tight">
                          {bono}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-8 flex justify-center">
                <a href={programDetails.options[0].whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full max-w-xs">
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl h-12 font-bold transition-all">
                    Elegir
                    </Button>
                </a>
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
