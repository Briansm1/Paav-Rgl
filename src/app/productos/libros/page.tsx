'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Star, CheckCircle2 } from 'lucide-react';
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
    description: 'Dominá el tránsito y eliminá el miedo a manejar. Dejá de sobrepensar cada maniobra. Este programa te entrega protocolos de reacción inmediata para que superes la inseguridad y empieces a operar con control total desde el primer día. Tu transformación en 9 módulos prácticos: Recibís un sistema paso a paso para ganar criterio en la calle, vas a anticipar los movimientos del entorno antes de que sucedan, tendrás una rutina de 3 minutos para anular la ansiedad antes de arrancar, descubrirás cómo esquivar las 12 trampas clásicas del principiante, obtendrás un plan de entrenamiento diario estructurado, incluye herramientas para desbloquearte en pleno tránsito real, un reinicio rápido de confianza tras un choque o un susto, freno automático al pensamiento catastrófico y vas a pasar de dudar de vos mismo a tener la certeza de un conductor entrenado.',
    longDescription: 'Este libro digital te llevará de la mano en el proceso de perder el miedo al volante. Descubrirás técnicas psicológicas para mantener la calma y una guía paso a paso sobre los fundamentos técnicos que todo conductor principiante debe dominar antes de salir a la calle.',
    features: ['Control emocional', 'Fundamentos técnicos', 'Checklist pre-conducción'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-novato')?.imageUrl || '',
    whatsappLink: "https://mpago.li/1UBsjWk"
  },
  {
    id: 'book-maniobras',
    title: 'Programa aprobar a la primera',
    price: '$3.999',
    originalPrice: '$13.400',
    discount: '70% OFF',
    description: 'El sistema definitivo para dominar los nervios y no dejar tu licencia al azar. Este programa unifica táctica mental profunda con ejecución inmediata para que rindas con el control absoluto de la situación. Tu plan de aprobación incluye: 1. El Método (Entrenamiento): Descubrí exactamente cómo piensa el evaluador. Dominá el paso a paso de los 8 escenarios más críticos de la prueba y aprendé el protocolo exacto para recuperarte de cualquier error en vivo, sin entrar en pánico. 2. El Checklist (Tu Botón de Emergencia): Una rutina táctica de 90 segundos para aplicar justo antes de subir al auto. Diseñada para anular la tensión física, enfocar tu mente al 100% y evitar el temido bloqueo en el momento decisivo.',
    longDescription: '¿Estacionar es tu pesadilla? En este e-book desglosamos cada maniobra de estacionamiento (paralelo, a 45° y 90°) con puntos de referencia exactos y trucos de instructor que no te enseñan en otros lados. Ganá precisión milimétrica.',
    features: ['Estacionamiento perfecto', 'Giros en espacios reducidos', 'Uso de espejos'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-maniobras')?.imageUrl || '',
    whatsappLink: "https://mpago.li/2uCr7Wp"
  },
  {
    id: 'book-teoria',
    title: 'Programa ases de la mecánica',
    price: '$8.999',
    originalPrice: '$29.999',
    discount: '70% OFF',
    description: 'Una formación completa diseñada para transformar tu entendimiento automotriz. A través de documentos precisos y material complementario, vas a adquirir el conocimiento técnico para dejar de depender de terceros y desenvolverte con total seguridad en el mundo de la mecánica. Tu transformación con este material: Dominio integral: Aprendé de manera práctica y ordenada el funcionamiento exacto de cada sistema del vehículo. Diagnóstico preciso: Desarrollá la capacidad de detectar fallas y realizar diagnósticos certeros antes de que el problema se agrave. Criterio de reparación: Comprendé a fondo cómo se ejecutan los arreglos para tomar el control de la situación y evitar gastos innecesarios. Seguridad y autonomía: Construí una base sólida de conocimientos aplicables, ya sea para el mantenimiento de tus propios vehículos o para dar tus primeros pasos en el sector.',
    longDescription: 'En este manual práctico aprenderás a identificar los componentes vitales de tu auto. Desde cómo revisar el aceite y el refrigerante hasta el cambio correcto de un neumático. Es la guía indispensable para que nunca te quedes a pie.',
    features: ['Mantenimiento preventivo', 'Cambio de neumáticos', 'Fluidos y niveles'],
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
    description: 'Aprobá tu examen teórico en el primer intento y sin estrés. Olvidate de estudiar con información desordenada o desactualizada. Este paquete de materiales te brinda exactamente lo que necesitás para asimilar el contenido rápido, rendir con total seguridad y asegurar tu licencia. Todo lo que incluye tu preparación: Librería de estudio estructurada (Leyes, manuales, resúmenes y guías optimizadas), Contenido oficial al día (Ley 24.449, señales, seguridad vial y protocolos ante siniestros) y Simulacro de Examen con +85 preguntas para evaluar tu nivel real antes del día clave.',
    longDescription: 'Olvidate de memorizar leyes aburridas. Este manual te enseña el marco legal aplicado a situaciones cotidianas del tráfico. Es la herramienta definitiva para aprobar el examen teórico y conducir con conocimiento real de tus derechos y obligaciones.',
    features: ['Simulacros de examen', 'Normativas locales', 'Seguridad vial'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-experto')?.imageUrl || '',
    whatsappLink: "https://mpago.li/1ochaL6"
  }
];

const benefits = [
  {
    title: 'Acceso inmediato',
    desc: 'Recibís el material directamente por WhatsApp al instante.'
  },
  {
    title: 'Diseño para móviles',
    desc: 'Optimizado para leer cómodamente desde tu celular.'
  },
  {
    title: 'Garantía',
    desc: 'Tenés 30 días para pedir la devolución. Nos escribís por WhatsApp y gestionamos el reintegro. Sin ninguna pregunta.'
  }
];

const ExpandableDescription = ({ text }: { text: string }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <div className="mb-6 md:mb-10 flex-grow">
      <p className={cn(
        "text-muted-foreground text-sm md:text-base leading-relaxed transition-all duration-300",
        !isExpanded && "line-clamp-4 md:line-clamp-5"
      )}>
        {text}
      </p>
      {text.length > 80 && (
        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-primary text-xs md:text-xs font-bold uppercase mt-2 hover:underline tracking-widest"
        >
          {isExpanded ? 'Ver menos' : 'Ver más'}
        </button>
      )}
    </div>
  );
};

export default function LibrosDigitalesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="pt-24 pb-6 md:pt-32 md:pb-10 bg-secondary/30 border-b border-white/5 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#inicio" className="inline-flex items-center gap-2 text-primary font-bold mb-3 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl md:text-5xl font-bold font-headline mb-0 text-white text-center">
              Recursos <span className="text-primary">digitales</span> para aprender y mejorar tu conducción
            </h1>
            <p className="text-sm md:text-lg font-bold text-slate-400 uppercase tracking-[0.2em] text-center max-w-4xl mx-auto">
              Material práctico para reforzar conocimientos, prepararte para el examen y desarrollar mejores hábitos al volante
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
                      <div className="bg-primary text-white text-xs md:text-sm font-black px-3 py-1.5 rounded-full shadow-sm border border-white/10 uppercase tracking-tighter">
                        {book.specialBadge}
                      </div>
                    )}
                    <div className="bg-accent text-white text-xs md:text-sm font-black px-3 py-1.5 rounded-full shadow-sm border border-white/10 uppercase tracking-tighter">
                      {book.discount}
                    </div>
                    <div className="bg-primary/20 text-primary text-xs md:text-sm font-black px-3 py-1.5 rounded-full shadow-sm border border-primary/20 uppercase tracking-tighter">
                      3 CSI
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-4 md:mb-5">
                    <Star className="w-5 h-5 text-gold fill-gold" />
                    <span className="text-xs md:text-xs font-bold text-slate-400 uppercase tracking-widest">MATERIAL EXCLUSIVO</span>
                  </div>

                  <h3 className="text-2xl md:text-2xl font-bold mb-3 md:mb-4 text-white leading-tight h-[2.8em] md:h-auto flex items-center justify-center line-clamp-2">
                    {book.title}
                  </h3>

                  <div className="flex items-center justify-center gap-4 md:gap-5 mb-6 md:mb-8">
                    <span className="text-red-500/60 text-base md:text-lg font-bold line-through">
                      {book.originalPrice}
                    </span>
                    <span className="text-green-500 text-3xl md:text-3xl font-black tracking-tight">
                      {book.price}
                    </span>
                  </div>

                  <ExpandableDescription text={book.description} />

                  <div className="flex flex-col gap-4 w-full mt-auto pt-4 items-center">
                    <a href={book.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full h-14 md:h-14 rounded-xl bg-green-600 hover:bg-green-700 text-white text-base md:text-base font-bold transition-colors border-none shadow-none">
                        Comprar ahora
                      </Button>
                    </a>
                    <div className="flex flex-col items-center gap-2">
                      <p className="text-[10px] md:text-[11px] font-bold text-slate-500 uppercase tracking-tight">
                        PAGO SEGURO POR
                      </p>
                      <div className="relative h-8 w-32">
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
            <div className="flex flex-col gap-12 md:gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col items-center text-center gap-4 px-4">
                  <div className="flex flex-col items-center gap-3">
                    <CheckCircle2 className="w-10 h-10 md:w-8 md:h-8 text-primary shrink-0" />
                    <h4 className="font-bold text-white text-xl md:text-2xl tracking-tight leading-tight">{benefit.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-lg">
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
