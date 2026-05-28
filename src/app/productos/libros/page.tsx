
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Book, ShoppingCart, Info, Star } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

const digitalBooks = [
  {
    id: 'book-novato',
    title: 'Guía del Conductor Novato',
    price: '$9.999',
    description: 'El manual esencial para quienes están dando sus primeros pasos. Enfoque en mentalidad, gestión del miedo y los pilares básicos del control del vehículo.',
    longDescription: 'Este libro digital te llevará de la mano en el proceso de perder el miedo al volante. Descubrirás técnicas psicológicas para mantener la calma y una guía paso a paso sobre los fundamentos técnicos que todo conductor principiante debe dominar antes de salir a la calle.',
    features: ['Control emocional', 'Fundamentos técnicos', 'Checklist pre-conducción'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-novato')?.imageUrl || '',
    whatsappLink: "https://wa.me/5492966265603?text=Hola!%20Quiero%20comprar%20el%20libro%20*Guía%20del%20Conductor%20Novato*"
  },
  {
    id: 'book-maniobras',
    title: 'Maniobras Maestras',
    price: '$12.499',
    description: 'Dominá el estacionamiento y las maniobras más complejas con nuestra técnica de precisión. Incluye gráficos detallados.',
    longDescription: '¿Estacionar es tu pesadilla? En este e-book desglosamos cada maniobra de estacionamiento (paralelo, a 45° y 90°) con puntos de referencia exactos y trucos de instructor que no te enseñan en otros lados. Ganá precisión milimétrica.',
    features: ['Estacionamiento perfecto', 'Giros en espacios reducidos', 'Uso de espejos'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-maniobras')?.imageUrl || '',
    whatsappLink: "https://wa.me/5492966265603?text=Hola!%20Quiero%20comprar%20el%20libro%20*Maniobras%20Maestras*"
  },
  {
    id: 'book-teoria',
    title: 'Teoría Vial Aplicada',
    price: '$8.999',
    description: 'Más que leyes, situaciones reales. Preparate para el examen teórico y para entender la calle con una mirada profesional.',
    longDescription: 'Olvidate de memorizar leyes aburridas. Este manual te enseña el marco legal aplicado a situaciones cotidianas del tráfico en Río Gallegos. Es la herramienta definitiva para aprobar el examen teórico y conducir con conocimiento real de tus derechos y obligaciones.',
    features: ['Simulacros de examen', 'Normativas locales', 'Seguridad vial'],
    imageUrl: PlaceHolderImages.find(img => img.id === 'book-teoria')?.imageUrl || '',
    whatsappLink: "https://wa.me/5492966265603?text=Hola!%20Quiero%20comprar%20el%20libro%20*Teoría%20Vial%20Aplicada*"
  }
];

export default function LibrosDigitalesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Header Section */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-secondary/30 border-b border-white/5 flex items-center justify-center">
        <div className="container mx-auto px-4 text-center">
          <Link href="/#inicio" className="inline-flex items-center gap-2 text-primary font-bold mb-4 hover:underline">
            <ArrowLeft className="w-4 h-4" />
            Volver al inicio
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold font-headline mb-0 text-white">
            Nuestros <span className="text-primary">libros digitales</span>
          </h1>
        </div>
      </section>

      {/* Library Grid Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14 max-w-7xl mx-auto">
            {digitalBooks.map((book) => (
              <div key={book.id} className="group flex flex-col bg-secondary/40 rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5 hover:border-primary/20">
                {/* Book Cover Image Area */}
                <div className="relative aspect-[4/5] w-full bg-secondary overflow-hidden">
                  <Image 
                    src={book.imageUrl} 
                    alt={book.title} 
                    fill 
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <span className="bg-primary text-white text-sm font-bold px-3 py-1 rounded-full shadow-lg">
                      {book.price}
                    </span>
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <Star className="w-4 h-4 text-gold fill-gold" />
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Material Exclusivo</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-primary transition-colors">
                    {book.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                    {book.description}
                  </p>

                  <div className="flex flex-col gap-3">
                    <a href={book.whatsappLink} target="_blank" rel="noopener noreferrer" className="w-full">
                      <Button className="w-full h-12 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold gap-2">
                        <ShoppingCart className="w-4 h-4" />
                        Comprar ahora
                      </Button>
                    </a>
                    <Link href={`#${book.id}`} className="w-full">
                      <Button variant="outline" className="w-full h-12 rounded-xl border-white/10 text-slate-300 hover:bg-white/5 gap-2">
                        <Info className="w-4 h-4" />
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

      {/* Benefits Section */}
      <section className="py-20 bg-secondary/20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-black/40 p-10 md:p-16 rounded-[3rem] border border-white/10 shadow-2xl text-center">
            <div className="inline-flex p-5 bg-primary/10 rounded-3xl mb-8">
              <Book className="w-12 h-12 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">¿Por qué elegir nuestros libros?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left mt-10">
              <div className="space-y-2">
                <p className="font-bold text-white">Acceso Inmediato</p>
                <p className="text-muted-foreground text-sm">Recibís el material en PDF directamente en tu mail o WhatsApp apenas realizás la compra.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-white">Actualización Permanente</p>
                <p className="text-muted-foreground text-sm">Cada vez que actualizamos una norma o técnica, recibís la nueva versión gratis.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-white">Diseño para Móviles</p>
                <p className="text-muted-foreground text-sm">Optimizado para que lo puedas leer cómodamente desde tu celular en cualquier momento.</p>
              </div>
              <div className="space-y-2">
                <p className="font-bold text-white">Puntos de Referencia</p>
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
