import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, UserCheck } from 'lucide-react';

const detailedPlans = [
  {
    name: 'Plan dominio',
    transferPrice: '$86.999',
    cardPrice: '$133.999',
    shortDesc: 'Refuerzo y perfeccionamiento.',
    fullDesc: 'Diseñado para personas que ya tienen conocimientos básicos o licencia, pero desean ganar más seguridad en maniobras complejas, parqueo o tráfico pesado.',
    targetAudience: [
      'Personas con licencia que no conducen por alguna razón',
      'Conductores que desean perfeccionar el parqueo',
      'Quienes sienten nervios en el tráfico pesado',
      'Estudiantes que necesitan refuerzo antes del examen'
    ],
    features: [
      '2 sesiones de prácticas dinámicas',
      'Auto para las prácticas',
      'Acceso a la comunidad privada',
      'Formación teórica aplicada a situaciones reales y sobre el marco legal',
      'Descuento en el uso del auto para el examen práctico - 5% off',
      'Asesoría sobre los requisitos y trámites para gestionar la licencia de conducir'
    ]
  }
];

export default function PlanesPage() {
  return (
    <main className="min-h-screen bg-slate-50 dark:bg-slate-900">
      <Header />
      
      {/* Hero Section para Planes */}
      <section className="pt-32 pb-20 bg-primary/5 border-b border-primary/10">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#planes" className="inline-flex items-center gap-2 text-primary font-bold mb-8 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-4xl md:text-6xl font-bold font-headline mb-6 text-foreground text-center">
            Nuestros detalles para el <span className="text-primary">programa experto</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-center">
            Explora a fondo nuestro curso especializado y elige el camino que transformará tu manera de conducir para siempre.
          </p>
        </div>
      </section>

      {/* Detalle de Planes */}
      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {detailedPlans.map((plan, index) => (
              <div 
                key={index} 
                className="flex flex-col gap-10 p-6 md:p-10 rounded-[2.5rem] border-2 bg-white dark:bg-slate-900 shadow-2xl border-border"
              >
                <div className="w-full space-y-6 flex flex-col items-center text-center">
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center">Plan dominio</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 w-full max-w-2xl bg-slate-50 dark:bg-slate-800/50 p-6 rounded-2xl border border-border/50">
                    <div className="flex flex-col items-center justify-center gap-2 sm:border-r border-border/50 sm:pr-6">
                      <div className="flex items-center gap-2 text-muted-foreground justify-center">
                        <span className="text-xl">📲</span>
                        <span className="text-sm font-medium">Transferencia</span>
                      </div>
                      <p className="text-3xl font-bold text-green-600 text-center">{plan.transferPrice}</p>
                      <span className="text-xs font-bold bg-green-500/10 text-green-600 px-3 py-1 rounded-full text-center">
                        Ahorro de $47.000
                      </span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-2">
                      <div className="flex items-center gap-2 text-muted-foreground justify-center">
                        <span className="text-xl">💳</span>
                        <span className="text-sm font-medium">Tarjetas de crédito</span>
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
                  <div className="pt-2 w-full sm:w-auto">
                    <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-primary hover:bg-primary/90 w-full text-center">
                      Inscribirme Ahora
                    </Button>
                  </div>
                </div>

                {/* Nueva Sección: ¿Para quién es? */}
                <div className="w-full bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-[2rem] border border-border/50">
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

                <div className="w-full bg-slate-50 dark:bg-slate-800/50 p-6 md:p-8 rounded-[2rem] border border-border/50">
                  <h3 className="text-xl font-bold mb-6 flex items-center justify-center gap-2 text-foreground text-center">
                    ¿Qué incluye este programa?
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3 group">
                        <div className="mt-1 bg-green-500/10 p-1 rounded-full shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-sm md:text-base text-foreground/90 font-medium leading-tight">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-16 bg-white dark:bg-slate-900 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-center">¿Aún tienes dudas?</h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto text-center">
            Nuestros asesores expertos están listos para ayudarte a resolver cualquier inquietud sobre el Plan dominio.
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
