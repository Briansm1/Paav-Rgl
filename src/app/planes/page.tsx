import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Clock, Star, CreditCard } from 'lucide-react';

const detailedPlans = [
  {
    name: 'Plan dominio',
    transferPrice: '$86.999',
    cardPrice: '$133.999',
    shortDesc: 'Refuerzo y perfeccionamiento.',
    fullDesc: 'Diseñado para personas que ya tienen conocimientos básicos o licencia, pero desean ganar más seguridad en maniobras complejas, parqueo o tráfico pesado.',
    icon: <Clock className="w-12 h-12 text-primary" />,
    features: [
      '10 horas de práctica intensiva',
      'Técnicas de parqueo avanzado',
      'Manejo en pendientes pronunciadas',
      'Material teórico digital actualizado',
      'Examen de simulacro incluido',
      'Asesoría en trámites de renovación'
    ]
  }
];

export default function PlanesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <Header />
      
      {/* Hero Section para Planes */}
      <section className="pt-32 pb-20 bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#planes" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 text-foreground">
            Nuestros planes para el <span className="text-primary">Plan dominio</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora a fondo nuestro curso especializado y elige el camino que transformará tu manera de conducir para siempre.
          </p>
        </div>
      </section>

      {/* Detalle de Planes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {detailedPlans.map((plan, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-12 items-center p-8 md:p-12 rounded-[2.5rem] border-2 bg-white dark:bg-slate-900 shadow-2xl transition-all duration-500 border-border"
              >
                <div className="w-full space-y-8 flex flex-col items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-3xl">
                    {plan.icon}
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{plan.name}</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-border/50">
                    <div className="flex flex-col items-center justify-center gap-2 sm:border-r border-border/50 sm:pr-6">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="text-xl">📲</span>
                        <span className="text-sm font-medium">Transferencia</span>
                      </div>
                      <p className="text-3xl font-bold text-green-600">{plan.transferPrice}</p>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <CreditCard className="w-5 h-5" />
                        <span className="text-sm font-medium">Tarjetas de crédito</span>
                      </div>
                      <p className="text-3xl font-bold text-green-600">{plan.cardPrice}</p>
                      <span className="text-xs font-bold bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full">
                        6 cuotas sin interés
                      </span>
                    </div>
                  </div>

                  <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
                    {plan.fullDesc}
                  </p>
                  <div className="pt-4 w-full sm:w-auto">
                    <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-primary hover:bg-primary/90 w-full">
                      Inscribirme Ahora
                    </Button>
                  </div>
                </div>

                <div className="w-full bg-slate-50 dark:bg-slate-800/50 p-8 md:p-10 rounded-[2rem] border border-border/50">
                  <h3 className="text-xl font-bold mb-8 flex items-center justify-center gap-2">
                    <Star className="w-5 h-5 text-accent fill-accent" />
                    ¿Qué incluye este programa?
                  </h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-5">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="mt-1 bg-green-500/10 p-1 rounded-full shrink-0">
                          <Check className="w-3.5 h-3.5 text-green-600" />
                        </div>
                        <span className="text-sm md:text-base text-foreground/90 font-medium leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-20 bg-white dark:bg-slate-900 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">¿Aún tienes dudas?</h2>
          <p className="text-muted-foreground mb-10 max-w-xl mx-auto">
            Nuestros asesores expertos están listos para ayudarte a resolver cualquier inquietud sobre el Plan dominio.
          </p>
          <Link href="/#contacto">
            <Button variant="outline" size="lg" className="rounded-full border-primary text-primary hover:bg-primary/5">
              Hablar con un asesor
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}