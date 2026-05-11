import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, UserCheck, Target, Clock, Gift, ShieldCheck } from 'lucide-react';

const programDetails = {
  name: 'Programa seguridad avanzada',
  description: 'Diseñado para conductores que buscan una formación integral, combinando maniobras avanzadas con una mayor carga horaria de conducción en tráfico real.',
  options: [
    {
      name: 'Plan as',
      transferPrice: '$165.999',
      cardPrice: '$255.999',
      savings: 'Ahorro de $90.000',
      sessions: '4 sesiones de prácticas dinámicas',
    },
    {
      name: 'Plan diamante',
      transferPrice: '$198.999',
      cardPrice: '$305.999',
      savings: 'Ahorro de $108.000',
      sessions: '5 sesiones de prácticas dinámicas',
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
    'Auto para las prácticas',
    'Acceso a la comunidad privada',
    'Formación teórica aplicada a situaciones reales y sobre el marco legal',
    'Descuento en el uso del auto para el examen práctico - 10% off',
    'Asesoría sobre los requisitos y trámites para gestionar la licencia de conducir'
  ],
  bonuses: [
    'Como identificar los differentes fluidos de un auto y como controlarlos',
    'Como realizar un cambio de neumático',
    'Simulador de examen teórico con +85 preguntas',
    'Descuentos exclusivos en nuestros productos digitales',
    'Descuentos exclusivos con nuestros comercios amigos y socios'
  ]
};

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
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col gap-10 p-6 md:p-12 rounded-[3rem] border bg-secondary shadow-2xl border-white/5 h-full w-full">
              
              {/* Opciones de Plan */}
              <div id="opciones-plan" className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {programDetails.options.map((option, idx) => (
                  <div key={idx} className="flex flex-col gap-6 p-6 md:p-8 rounded-[2rem] bg-black/40 border border-white/10 shadow-inner relative overflow-hidden group">
                    <div className="text-center">
                      <h3 className="text-2xl font-bold tracking-tight text-white uppercase">{option.name}</h3>
                    </div>

                    <div className="space-y-4">
                      {/* Precio Transferencia */}
                      <div className="flex flex-col items-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Transferencia</span>
                        <p className="text-4xl md:text-5xl font-black text-green-500 tracking-tighter">{option.transferPrice}</p>
                        <span className="mt-2 text-[10px] font-bold bg-green-500/20 text-green-500 px-3 py-1 rounded-full border border-green-500/30">
                          {option.savings}
                        </span>
                      </div>

                      {/* Precio Tarjeta */}
                      <div className="pt-4 border-t border-white/5 flex flex-col items-center">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">Tarjeta de crédito</span>
                        <p className="text-4xl md:text-5xl font-black text-primary tracking-tighter">{option.cardPrice}</p>
                        <span className="mt-2 text-[10px] font-bold bg-primary/20 text-primary px-3 py-1 rounded-full border border-primary/30">
                          6 cuotas sin interés
                        </span>
                      </div>

                      {/* Sesiones debajo de los precios */}
                      <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-primary font-bold">
                        <Clock className="w-4 h-4" />
                        <span className="text-sm">{option.sessions}</span>
                      </div>
                    </div>

                    <Button className="w-full mt-4 bg-primary hover:bg-primary/90 rounded-xl h-12 font-bold transition-all group-hover:scale-[1.02]">
                      Elegir
                    </Button>
                  </div>
                ))}
              </div>

              {/* Descripción debajo de los botones de elegir */}
              <div className="text-center py-4">
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {programDetails.description}
                </p>
              </div>

              {/* Contenido Unificado Stacking Vertically */}
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

                <div className="bg-primary/5 p-6 rounded-[2rem] border-2 border-primary/20">
                  <h3 className="text-lg font-bold mb-6 flex items-center justify-center gap-2 text-primary text-center">
                    <Gift className="w-5 h-5" />
                    Bonos de regalo
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {programDetails.bonuses.map((bono, i) => (
                      <div key={i} className="flex flex-col items-center text-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shadow-lg shadow-primary/20">
                          {i + 1}
                        </div>
                        <span className="text-xs text-foreground/90 font-bold leading-tight">
                          {bono}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Botón final para volver a los precios */}
              <div className="pt-8 flex justify-center">
                <Link href="#opciones-plan" className="w-full max-w-xs">
                  <Button className="w-full bg-primary hover:bg-primary/90 rounded-xl h-12 font-bold transition-all">
                    Quiero elegir un plan
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
