"use client";

import React from 'react';
import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselPrevious, 
  CarouselNext 
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Daniela Rojas',
    content: 'Queríamos agradecerles por el acompañamiento en este proceso tan importante para nuestra hija: ayudarla a perder sus miedos, a creer en que podía lograrlo y, sobre todo, sentirse segura en cada movimiento.',
    headerImageId: 'achievement-daniela',
    gender: 'f'
  },
  {
    name: 'Julia Geoia',
    content: '¡Hola! La verdad es que la academia es súper recomendable, tanto por la calidad de la enseñanza como por la atención. Pude superar mis miedos y también los conos jajaja.',
    gender: 'f'
  },
  {
    name: 'Candelaria Pereyra',
    content: '¡Holi! La verdad, súper conforme con las clases. Mi sorprendió haber aprendido un montón en poco tiempo y el hecho de que después practiqué con autos reales y no conos.',
    headerImageId: 'achievement-candelaria',
    gender: 'f'
  },
  {
    name: 'Maria Silisque',
    content: '¡EXCELENTE DIEZ! Recomiendo, super responsable, respetuoso y con una paciencia de oro. Gracias!!',
    gender: 'f'
  },
  {
    name: 'Lautaro Ramirez',
    content: 'Muy recomendable la escuela de manejo. La mejor atención que recibí y todo excelente; pude concretar mi meta de recibir mi licencia de conducir.',
    headerImageId: 'achievement-lautaro',
    gender: 'm'
  },
  {
    name: 'Javier Peña',
    content: '¡Hola! recomiendo, todo excelente y práctico, me sirvió un montón.',
    gender: 'm'
  },
  {
    name: 'Alejandra Merlo',
    content: 'Simplemente quería agradecer de corazón haberme cruzado con la academia. Era algo que me costaba un montón y que procrastiné mucho tiempo.',
    headerImageId: 'achievement-alejandra',
    gender: 'f'
  },
  {
    name: 'Maura Rivero',
    content: 'Brian, excelente profe, gracias por la paciencia y dedicación.',
    gender: 'f'
  },
  {
    name: 'Damaris Peñaloza',
    content: 'Si se pudo 💪🏻, muchísimas gracias por el acompañamiento.',
    headerImageId: 'achievement-damaris',
    gender: 'f'
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonios" className="relative py-20 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <div className="text-center mb-12 md:mb-16 px-4 max-w-4xl">
            <span className="kicker text-accent mb-6 inline-block bg-accent/10 px-4 py-1.5 rounded-full font-sans text-eyebrow font-semibold uppercase tracking-[0.12em]">
              EXPERIENCIAS REALES
            </span>
            <h2 className="text-h2 font-display text-foreground text-center mb-6">
              Historias de quienes confiaron en <span className="text-primary">nosotros</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-[68ch] mx-auto font-sans">
              Personas que llegaron con dudas o nervios y hoy cuentan cómo fue su proceso.
            </p>
          </div>

          <div className="w-full relative px-4 md:px-14">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((t, index) => {
                  const headerImg = t.headerImageId ? PlaceHolderImages.find(p => p.id === t.headerImageId) : null;
                  const hasContent = t.content && t.content.trim().length > 0;
                  return (
                    <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                      <div className="h-full transition-all duration-500 hover:scale-[1.02] active:scale-95 origin-center">
                        <Card className="h-full border border-white/5 shadow-xl rounded-[1.5rem] md:rounded-[2.5rem] bg-card relative overflow-hidden flex flex-col group min-h-[450px]">
                          {headerImg && (
                            <div className={cn("relative w-full overflow-hidden border-b border-white/5 bg-black/20", hasContent ? "aspect-[16/10]" : "aspect-square")}>
                              <Image 
                                src={headerImg.imageUrl} 
                                alt={t.name} 
                                fill 
                                className="object-cover transition-transform duration-700 group-hover:scale-110" 
                              />
                            </div>
                          )}
                          <CardContent className="p-8 md:p-10 flex flex-col flex-grow">
                            {hasContent && (
                              <div className="mb-8">
                                <div className="flex gap-1 mb-5">
                                  {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                                  ))}
                                </div>
                                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                                  "{t.content}"
                                </p>
                              </div>
                            )}
                            <div className="pt-8 border-t border-white/5 mt-auto">
                              <p className="font-bold text-xl md:text-2xl text-foreground truncate">{t.name}</p>
                              <p className="text-xs md:text-sm font-black text-primary uppercase mt-1 tracking-wider">
                                {t.gender === 'm' ? 'ALUMNO' : 'ALUMNA'}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              
              <div className="hidden md:block">
                <CarouselPrevious className="absolute -left-12 top-1/2 h-14 w-14 rounded-full border-primary/20 bg-secondary text-white hover:bg-primary hover:text-white transition-all duration-300" />
                <CarouselNext className="absolute -right-12 top-1/2 h-14 w-14 rounded-full border-primary/20 bg-secondary text-white hover:bg-primary hover:text-white transition-all duration-300" />
              </div>
              
              <div className="flex md:hidden justify-center gap-8 mt-12">
                <CarouselPrevious className="static translate-y-0 h-16 w-16 rounded-full border-primary/20 bg-secondary text-white active:scale-90" />
                <CarouselNext className="static translate-y-0 h-16 w-16 rounded-full border-primary/20 bg-secondary text-white active:scale-90" />
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};