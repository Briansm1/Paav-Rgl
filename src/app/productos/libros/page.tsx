
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { cn } from '@/lib/utils';

const digitalBooks = [
  {
    id: 'book-novato',
    title: 'Programa conductor experto',
    specialBadge: '9 x 1',
    price: '$14.999',
    originalPrice: '$49.999',
    discount: '70% OFF',
    description: 'Mejorá tu seguridad y criterio al volante. Para quienes quieren superar miedos, mejorar su toma de decisiones y conducir con más confianza.',
    longDescription: 'Este libro digital te llevará de la mano en el proceso de perder el miedo al volante. Descubrirás técnicas psicológicas para mantener la calma y una guía paso a paso sobre los fundamentos técnicos que todo conductor principiante debe dominar antes de salir a la calle.',
    features: [
      'Sistema paso a paso para desarrollar criterio y seguridad al volante',
      'Técnicas para reducir nervios y controlar la ansiedad antes de conducir',
      'Herramientas para tomar mejores decisiones en situaciones reales de tránsito',
      'Identificación de errores y trampas comunes que afectan a conductores principiantes',
      'Plan de entrenamiento estructurado para mejorar progresivamente'
    ],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-novato')?.imageUrl || '',
    whatsappLink: "https://mpago.li/1UBsjWk"
  },
  {
    id: 'book-maniobras',
    title: 'Programa aprobar a la primera',
    price: '$3.999',
    originalPrice: '$13.400',
    discount: '70% OFF',
    description: 'Prepará tu mente para rendir con más confianza. Pensado para quienes quieren trabajar sus nervios, mejorar su seguridad y llegar al examen práctico con una mentalidad más preparada.',
    longDescription: '¿Estacionar es tu pesadilla? En este e-book desglosamos cada maniobra de estacionamiento (paralelo, a 45° y 90°) con puntos de referencia exactos y trucos de instructor que no te enseñan en otros lados. Ganá precisión milimétrica.',
    features: [
      'Preparación mental y emocional antes del examen',
      'Estrategias para controlar nervios y presión',
      'Herramientas para afrontar la evaluación con mayor tranquilidad'
    ],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-maniobras')?.imageUrl || '',
    whatsappLink: "https://mpago.li/2uCr7Wp"
  },
  {
    id: 'book-teoria',
    title: 'Programa ases de la mecánica',
    price: '$8.999',
    originalPrice: '$29.999',
    discount: '70% OFF',
    description: 'Conocé mejor tu vehículo. Aprendé los conceptos básicos del funcionamiento del auto y adquirí conocimientos útiles para cuidarlo y entenderlo mejor.',
    longDescription: 'En este manual práctico aprenderás a identificar los componentes vitales de tu auto. Desde cómo revisar el aceite y el refrigerante hasta el cambio correcto de un neumático. Es la guía indispensable para que nunca te quedes a pie.',
    features: [
      'Fundamentos de mecánica básica y avanzada',
      'Identificación de componentes del vehículo',
      'Diagnóstico preciso de fallas',
      'Consejos prácticos de mantenimiento'
    ],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-teoria')?.imageUrl || '',
    whatsappLink: "https://mpago.li/2uSG2jd"
  },
  {
    id: 'book-experto',
    title: 'Programa ases de la teoría',
    specialBadge: '10 x 1',
    price: '$14.999',
    originalPrice: '$49.999',
    discount: '70% OFF',
    description: 'Reforzá tus conocimientos de conducción. Un recurso para estudiar normas, señales y conceptos importantes antes del examen teórico.',
    longDescription: 'Olvidate de memorizar leyes aburridas. Este manual te enseña el marco legal aplicado a situaciones cotidianas del tráfico. Es la herramienta definitiva para aprobar el examen teórico y conducir con conocimiento real de tus derechos y obligaciones.',
    features: [
      'Material de estudio vial',
      'Señales y normas de tránsito',
      'Simulador con +85 preguntas'
    ],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-experto')?.imageUrl || '',
    whatsappLink: "https://mpago.li/1ochaL6"
  }
];

const benefits = [
  {
    title: 'Acceso inmediato',
    desc: 'Recibí el material directamente después de tu compra.'
  },
  {
    title: 'Diseñado para aprender desde cualquier lugar',
    desc: 'Consultá el contenido cómodamente desde tu celular.'
  },
  {
    title: 'Compra segura',
    desc: 'Contás con garantía y soporte durante el proceso. Tenés 30 días para pedir la devolución. Nos escribís por WhatsApp y hacemos el reintegro.'
  }
];

const ExpandableDescription = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="mb-4 flex-grow">
      <p className={cn(
        "text-muted-foreground text-base md:text-lg leading-relaxed transition-all duration-300",
        !isExpanded && "line-clamp-3"
      )}>
        {text}
      </p>
      {text.length > 80 && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary text-sm font-bold uppercase mt-2 hover:underline tracking-widest"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </div>
  );
};

export default function LibrosDigitalesPage() {
  return (
    <main className="min-h-screen bg-background text-body">
      <Header />
      
      {/* Header Section */}
      <section className="pt-24 pb-6 md:pt-32 md:pb-10 bg-secondary/30 border-b border-white/5 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#inicio" className="inline-flex items-center gap-2 text-primary font-bold mb-3 hover:underline text-lg">
            <ArrowLeft className="w-5 h-5" />
            Volver al inicio
          </Link>
          <div className="flex flex-col gap-3">
            <h1 className="text-h1 font-bold font-headline mb-0 text-white text-center">
              Recursos <span className="text-primary">digitales</span>
            </h1>
            <p className="text-lg md:text-2xl font-bold text-slate-400 uppercase tracking-[0.2em] text-center max-w-4xl mx-auto">
              Material práctico para reforzar conocimientos al volante
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-20 bg-background">
        <div className="container mx-auto px-6 md:px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-10 max-w-7xl mx-auto mb-20">
            {digitalBooks.map((book) => (
              <div key={book.id} className="group flex flex-col bg-secondary/40 rounded-[2rem] md:rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20">
                <div className="relative aspect-square w-full bg-secondary overflow-hidden">
                  <Image 
                    src={book.imageUrl} 
                    alt={book.title} 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority
                    data-ai-hint="book cover"
                  />
                </div>

                <div className="p-8 md:p-8 flex flex-col flex-grow items-center text-center">
                  <div className="flex flex-wrap justify-center gap-2 mb-4 md:mb-5">
                    {'specialBadge' in book && book.specialBadge && (
                      <div className="bg-primary text-white text-sm md:text-base font-black px-4 py-2 rounded-full shadow-sm border border-white/10 uppercase tracking-tighter">
                        {book.specialBadge}
                      </div>
                    )}
                    <div className="bg-accent text-white text-sm md:text-base font-black px-4 py-2 rounded-full shadow-sm border border-white/10 uppercase tracking-tighter">
                      {book.discount}
                    </div>
                  </div>

                  <div className="flex items-center justify-center mb-4 md:mb-5">
                    <span className="text-sm md:text-sm font-bold text-slate-400 uppercase tracking-widest">MATERIAL EXCLUSIVO</span>
                  </div>

                  <h3 className="text-4xl md:text-3xl font-bold mb-4 text-white leading-tight h-[3.2em] md:h-auto flex items-center justify-center line-clamp-2 text-center">
                    {book.title}
                  </h3>

                  <div className="flex items-center justify-center gap-4 md:gap-5 mb-8">
                    <span className="text-red-500/60 text-lg md:text-xl font-bold line-through">
                      {book.originalPrice}
                    </span>
                    <span className="text-green-500 text-3xl md:text-4xl font-black tracking-tight">
                      {book.price}
                    </span>
                  </div>

                  <ExpandableDescription text={book.description} />

                  {/* Clean and separated Checklist */}
                  <div className="w-full space-y-3 mb-8 text-left bg-white/5 p-6 rounded-2xl border border-white/10">
                    <p className="text-xs font-black text-primary uppercase tracking-[0.2em] mb-4">Incluye:</p>
                    {book.features.map((feature, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm md:text-base text-foreground/90 font-medium leading-tight">{feature}.</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-col gap-4 w-full mt-auto items-center">
                    <a href={book.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full h-14 rounded-xl bg-green-600 hover:bg-green-700 text-white text-lg font-bold transition-colors border-none shadow-none">
                        Comprar ahora
                      </Button>
                    </a>
                    <div className="flex flex-col items-center gap-3">
                      <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-tight">
                        PAGO SEGURO POR
                      </p>
                      <div className="relative h-10 w-40">
                        <Image 
                          src="https://i.imgur.com/bWGTO94.png" 
                          alt="Mercado Pago" 
                          fill 
                          className="object-contain"
                          data-ai-hint="mercado pago"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto pt-10 border-t border-white/5">
            <h2 className="text-h2 font-bold text-white text-center mb-16">
              ¿Por qué elegir nuestros recursos digitales?
            </h2>
            <div className="flex flex-col gap-12 md:gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4 px-4">
                  <div className="flex flex-col items-center gap-3">
                    <CheckCircle2 className="w-12 h-12 md:w-10 md:h-10 text-primary shrink-0" />
                    <h4 className="font-bold text-white text-2xl md:text-3xl tracking-tight leading-tight">{benefit.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-lg md:text-xl leading-relaxed max-w-2xl">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
