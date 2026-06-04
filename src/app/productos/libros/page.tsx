'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book, Star, CheckCircle2 } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { cn } from '@/lib/utils';

const digitalBooks = [
  {
    id: 'book-novato',
    title: 'Programa conductor seguro',
    specialBadge: '9 x 1',
    price: '$17.999',
    originalPrice: '$59.999',
    discount: '70% OFF',
    description: 'Eliminá el miedo a manejar y dominá el tránsito real en solo días, aplicando protocolos de reacción inmediata. Dejás de "sobre pensar" y empezás a operar con CONTROL TOTAL. Un programa blindado de 9 módulos prácticos que transforman tu mente y tu manejo: 1. Método ases al volante: El sistema paso a paso para ganar criterio. 2. Lectura de tránsito: Anticipá movimientos de otros antes de que pasen. 3. Checklist de despegue: Rutina de 3 min. para anular la ansiedad inicial. 4. Manual anti-errores: Cómo evitar las 12 trampas del principiante. 5. Hoja de ruta de 7 días: Tu plan de entrenamiento diario. 6. Sistema anti-pánico: Herramientas para desbloquearte en tiempo real. 7. Volver al volante: Reinicio de confianza post-sustos o choques. 8. Adiós a la película mental: Cómo apagar el pensamiento catastrófico. 9. Mentalidad de piloto: El cambio de identidad de "no sirvo" a "estoy entrenado". Probá el método por 7 días. Si aplicando las técnicas no sentís que tenés más control, te devolvemos cada centavo. El riesgo lo corremos nosotros, vos solo conseguís tu libertad.',
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
    description: 'Estrategia + acción rápida El sistema definitivo para dominar los nervios y rendir tu examen práctico con total seguridad. Este combo unifica la táctica mental profunda con la ejecución inmediata para que no dejes tu aprobado al azar: 1. El método (entrenamiento): descubrí exactamente cómo piensa un evaluador, dominá el paso a paso de los 8 escenarios más críticos del examen y aprendé el protocolo exacto para recuperarte de cualquier error sin entrar en pánico. 2. El checklist: tu botón de emergencia. Una rutina táctica de 90 segundos para aplicar justo antes de subir al auto, diseñada para anclar tu cuerpo, enfocar tu mente y evitar el bloqueo en el momento decisivo.',
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
    description: 'Es una formación completa diseñada para llevarte desde cero hasta un nivel avanzado en mecánica de autos y motos. A través de documentos precisos y material complementario, vas a aprender de manera práctica y ordenada cómo funciona cada sistema, cómo detectar fallas, realizar diagnósticos, comprender reparaciones, adquirir conocimientos sólidos para desenvolverte con mayor seguridad en el mundo de la mecánica y mucho más.',
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
    description: 'Leyes, manuales, resúmenes, guías + 1 simulacro de prueba teórica con +85 preguntas, pensados para que aprendas de verdad y llegues al examen teórico con mucha seguridad y apruebes. Vas a encontrar contenidos clave sobre normativa vial, ley 24.449, señales de tránsito, documentación obligatoria, seguridad vial, conducción responsable, actuación ante siniestros, conocimientos prácticos para el conductor y actualizaciones recientes de la legislación. Además, el simulacro teórico te permite poner a prueba lo aprendido, detectar errores y prepararte mejor para rendir con confianza. Es una formación completa para adquirir conocimientos profundos y estudiar de forma más ordenada.',
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
    title: 'Actualización permanente',
    desc: 'Recibís nuevas versiones GRATIS ante cualquier cambio.'
  },
  {
    title: 'Diseño para móviles',
    desc: 'Optimizado para leer cómodamente desde tu celular.'
  },
  {
    title: 'Garantía',
    desc: 'Si el contenido no cumple tus expectativas, tenés 30 días de garantía.'
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
      
      <section className="pt-24 pb-6 md:pt-32 md:pb-10 bg-secondary/30 border-b border-white/5 flex items-center justify-center">
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

                  <div className="flex flex-col gap-3 w-full mt-auto pt-4">
                    <a href={book.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full h-14 md:h-14 rounded-xl bg-green-600 hover:bg-green-700 text-white text-base md:text-base font-bold transition-colors border-none">
                        Comprar ahora
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="max-w-7xl mx-auto pt-10 border-t border-white/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex flex-col items-center sm:items-start text-center sm:text-left gap-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                    <h4 className="font-bold text-white text-lg tracking-tight">{benefit.title}</h4>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed pl-9">
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
