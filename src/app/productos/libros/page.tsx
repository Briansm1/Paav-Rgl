'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const digitalBooks = [
  {
    id: 'book-novato',
    title: 'Programa conductor seguro',
    specialBadge: '9 x 1',
    price: '$17.999',
    originalPrice: '$59.999',
    discount: '70% OFF',
    description: 'El manual esencial para quienes están dando sus primeros pasos. Enfoque en mentalidad, gestión del miedo y los pilares básicos del control del vehículo.',
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
    description: 'Dominá el estacionamiento y las maniobras más complejas con nuestra técnica de precisión. Incluye gráficos detallados.',
    longDescription: '¿Estacionar es tu pesadilla? En este e-book desglosamos cada maniobra de estacionamiento (paralelo, a 45° y 90°) con puntos de referencia exactos y trucos de instructor que no te enseñan en otros lados. Ganá precisión milimétrica.',
    features: ['Estacionamiento perfecto', 'Giros en espacios reducidos', 'Uso de espejos'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-maniobras')?.imageUrl || '',
    whatsappLink: "https://mpago.li/2uCr7Wp"
  },
  {
    id: 'book-teoria',
    title: 'Programa ases de la mecánica',
    price: '$6.999',
    originalPrice: '$23.300',
    discount: '70% OFF',
    description: 'Aprendé lo esencial sobre el cuidado de tu vehículo: fluidos, neumáticos y mantenimiento preventivo para evitar problemas.',
    longDescription: 'En este manual práctico aprenderás a identificar los componentes vitales de tu auto. Desde cómo revisar el aceite y el refrigerante hasta el cambio correcto de un neumático. Es la guía indispensable para que nunca te quedes a pie.',
    features: ['Mantenimiento preventivo', 'Cambio de neumáticos', 'Fluidos y niveles'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-teoria')?.imageUrl || '',
    whatsappLink: "https://mpago.li/2uSG2jd"
  },
  {
    id: 'book-experto',
    title: 'Programa ases de la teoría',
    specialBadge: '10 x 1',
    price: '$13.999',
    originalPrice: '$46.600',
    discount: '70% OFF',
    description: 'Más que leyes, situaciones reales. La guía definitiva para aprobar el examen teórico y conducir con conocimiento real de la calle.',
    longDescription: 'Olvidate de memorizar leyes aburridas. Este manual te enseña el marco legal aplicado a situaciones cotidianas del tráfico. Es la herramienta definitiva para aprobar el examen teórico y conducir con conocimiento real de tus derechos y obligaciones.',
    features: ['Simulacros de examen', 'Normativas locales', 'Seguridad vial'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-experto')?.imageUrl || '',
    whatsappLink: "https://mpago.li/1ochaL6"
  }
];

export default function LibrosDigitalesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      <section className="pt-24 pb-6 md:pt-32 md:pb-6 bg-secondary/30 border-b border-white/5 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#inicio" className="inline-flex items-center gap-2 text-primary font-bold mb-3 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold font-headline mb-0 text-white text-center">
            Nuestros <span className="text-primary">libros digitales</span>
          </h1>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-10 max-w-7xl mx-auto">
            {digitalBooks.map((book) => (
              <div key={book.id} className="group flex flex-col bg-secondary/40 rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20">
                <div className="relative aspect-square w-full bg-secondary overflow-hidden">
                  <Image 
                    src={book.imageUrl} 
                    alt={book.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority
                    data-ai-hint="book cover"
                  />
                </div>

                <div className="p-8 flex flex-col flex-grow items-center text-center">
                  <div className="flex justify-center gap-2 mb-3">
                    {'specialBadge' in book && book.specialBadge && (
                      <div className="bg-primary text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm border border-white/10 uppercase tracking-tighter">
                        {book.specialBadge}
                      </div>
                    )}
                    <div className="bg-accent text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm border border-white/10 uppercase tracking-tighter">
                      {book.discount}
                    </div>
                    <div className="bg-primary text-white text-[10px] font-black px-2.5 py-1 rounded-full shadow-sm border border-white/10 uppercase tracking-tighter">
                      3 CSI
                    </div>
                  </div>

                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Star className="w-4 h-4 text-gold fill-gold" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">MATERIAL EXCLUSIVO</span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-white leading-tight">
                    {book.title}
                  </h3>

                  <div className="flex items-center justify-center gap-3 mb-6">
                    <span className="text-red-500/60 text-sm font-bold line-through">
                      {book.originalPrice}
                    </span>
                    <span className="text-green-500 text-lg font-black tracking-tight">
                      {book.price}
                    </span>
                  </div>

                  <p className="text-muted-foreground text-xs leading-relaxed mb-8 flex-grow">
                    {book.description}
                  </p>

                  <div className="flex flex-col gap-3 w-full">
                    <a href={book.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full h-12 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold transition-colors border-none">
                        Comprar ahora
                      </Button>
                    </a>
                    <Link href={`#${book.id}`} className="w-full">
                      <Button variant="outline" className="w-full h-12 rounded-xl border-white/10 text-slate-300 hover:bg-white/5">
                        Ver más
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary/20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black/40 p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl text-center">
            <div className="inline-flex p-5 bg-primary/10 rounded-3xl mb-8">
              < Book className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegir nuestros libros?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
              <div className="space-y-2">
                <p className="font-bold text-white">Acceso inmediato</p>
                <p className="text-muted-foreground text-sm">Recibís el material directamente por WhatsApp. Apenas realizás la compra, nos avisas y te damos el acceso.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-white">Actualización permanente</p>
                <p className="text-muted-foreground text-sm">Cada vez que actualizamos una norma o técnica, recibís la nueva versión gratis.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-white">Diseño para móviles</p>
                <p className="text-muted-foreground text-sm">Optimizado para que lo puedas leer cómodamente desde tu celular en cualquier momento.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-white">Puntos de referencia</p>
                <p className="text-muted-foreground text-sm">Incluimos los mismos puntos de referencia que usamos en nuestras clases prácticas en Río Gallegos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
