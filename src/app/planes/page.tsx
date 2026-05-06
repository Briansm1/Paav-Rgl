import React from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, ArrowLeft, Shield, Car, Clock, BookOpen, Star } from 'lucide-react';

const detailedPlans = [
  {
    name: 'Programa experto',
    price: 'Desde $86.999',
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
  },
  {
    name: 'Programa seguridad avanzada',
    price: 'Desde $165.999',
    shortDesc: 'El curso ideal para principiantes.',
    fullDesc: 'Nuestro programa estrella. Te llevamos desde cero hasta la obtención de tu licencia con un enfoque total en la seguridad vial y el manejo defensivo.',
    icon: <Shield className="w-12 h-12 text-primary" />,
    featured: true,
    features: [
      '20 horas de práctica personalizada',
      'Curso teórico presencial completo',
      'Psicología del conductor',
      'Vehículo disponible para el examen oficial',
      'Técnicas de manejo defensivo',
      'Garantía de aprobación (clases extra sin costo)',
      'Kit del conductor Ruta Segura'
    ]
  },
  {
    name: 'Programa fundamentos',
    price: 'Desde $311.999',
    shortDesc: 'Dominio total del vehículo.',
    fullDesc: 'El curso más robusto del mercado. No solo aprendes a conducir, sino que dominas el vehículo en cualquier terreno y condición climática.',
    icon: <Car className="w-12 h-12 text-primary" />,
    features: [
      '30 horas de práctica extensiva',
      'Salidas a carretera intermunicipal',
      'Manejo nocturno y bajo lluvia',
      'Mecánica básica y cambio de llantas',
      'Soporte prioritario 24/7',
      'Prácticas en vehículo premium de última generación',
      'Certificación internacional de conducción segura'
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
            Detalles de nuestros <span className="text-primary">Programas</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Explora a fondo cada uno de nuestros cursos y elige el que transformará tu manera de conducir para siempre.
          </p>
        </div>
      </section>

      {/* Detalle de Planes */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-16">
            {detailedPlans.map((plan, index) => (
              <div 
                key={index} 
                className={`flex flex-col lg:flex-row gap-12 items-stretch p-8 md:p-12 rounded-[3rem] border-2 bg-white dark:bg-slate-900 shadow-2xl transition-all duration-500 ${plan.featured ? 'border-accent ring-4 ring-accent/10' : 'border-border'}`}
              >
                <div className="lg:w-1/2 space-y-8 flex flex-col justify-center text-center lg:text-left">
                  <div className="flex justify-center lg:justify-start">
                    <div className="p-4 bg-primary/10 rounded-3xl">
                      {plan.icon}
                    </div>
                  </div>
                  {plan.featured && (
                    <span className="inline-block px-4 py-1 text-xs font-bold uppercase tracking-widest bg-accent text-white rounded-full self-center lg:self-start">
                      El más elegido por alumnos
                    </span>
                  )}
                  <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{plan.name}</h2>
                  <p className="text-2xl font-bold text-primary">{plan.price}</p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {plan.fullDesc}
                  </p>
                  <div className="pt-4">
                    <Button size="lg" className="rounded-full px-10 h-14 text-lg bg-primary hover:bg-primary/90">
                      Inscribirme Ahora
                    </Button>
                  </div>
                </div>

                <div className="lg:w-1/2 bg-slate-50 dark:bg-slate-800/50 p-8 md:p-12 rounded-[2rem] border border-border/50">
                  <h3 className="text-xl font-bold mb-8 flex items-center gap-2">
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
            Nuestros asesores expertos están listos para ayudarte a elegir el plan perfecto según tus necesidades y presupuesto.
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