
"use client";

import React from 'react';
import Image from 'next/image';
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import Autoscroll from 'embla-carousel-auto-scroll';

const testimonials = [
  {
    name: 'Daniela Rojas',
    content: 'Queríamos agradecerles por el acompañamiento en este proceso tan importante para nuestra hija: ayudarla a perder sus miedos, a creer en que podía lograrlo y, sobre todo, sentirse segura en cada movimiento. El esfuerzo de esta licencia es de ella, pero sin ayuda no hubiese sido posible. La paciencia y técnicas son increíbles, y las palabras de aliento ya son de otro nivel.',
    headerImageId: 'achievement-daniela',
    gender: 'f'
  },
  {
    name: 'Julia Geoia',
    content: '¡Hola! La verdad es que la academia es súper recomendable, tanto por la calidad de la enseñanza como por la atención. Pude superar mis miedos y también los conos jajaja. El profesor es un genio: tiene muchísima paciencia, es muy respetuoso y explica de manera clara y práctica.',
    gender: 'f'
  },
  {
    name: 'Candelaria Pereyra',
    content: '¡Holi! La verdad, súper conforme con las clases. Mi sorprendió haber aprendido un montón en poco tiempo y el hecho de que después practiqué con autos reales y no conos me dejó muy sorprendida. Brian es súper buena onda: explica re bien, es claro, paciente ante todo, súper seguro y divertido. ¡10/10!',
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
    content: 'Muy recomendable la escuela de manejo. La mejor atención que recibí y todo excelente; pude concretar mi meta de recibir mi licencia de conducir gracias a las clases intensivas que me brindaron. El instructor es una persona muy paciente y profesional.',
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
    content: 'Simplemente quería agradecer de corazón haberme cruzado con la academia. Era algo que me costaba un montón y que procrastiné mucho tiempo; gracias a la confianza, el apoyo y sobre todo la paciencia, pude lograrlo. ¡No se dan una idea de lo importante que esto es para mí!',
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
          <div className="text-center mb-16 md:mb-20 px-4 max-w-4xl">
            <span className="kicker text-accent mb-6 inline-block bg-accent/10 px-4 py-1.5 rounded-full font-sans text-eyebrow font-semibold uppercase tracking-[0.12em]">
              EXPERIENCIAS REALES
            </span>
            <h2 className="text-h2 font-display text-foreground text-center mb-6">
              Historias de quienes confiaron en <span className="text-primary">nosotros</span>
            </h2>
            <p className="text-body-lg text-muted-foreground max-w-[68ch] mx-auto font-sans">
              Personas que llegaron con dudas, nervios o poca experiencia y hoy cuentan cómo fue su proceso de aprendizaje.
            </p>
          </div>

          <div className="w-full max-w-7xl px-4 md:px-6">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              plugins={[
                Autoscroll({
                  speed: 1,
                  stopOnInteraction: false,
                  stopOnMouseEnter: true,
                }),
              ]}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((t, index) => {
                  const headerImg = t.headerImageId ? PlaceHolderImages.find(p => p.id === t.headerImageId) : null;
                  const hasContent = t.content && t.content.trim().length > 0;
                  return (
                    <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 h-full">
                      <Card className="h-full border-none shadow-xl rounded-[2.5rem] bg-card relative overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl">
                        {headerImg && (
                          <div className={cn("relative w-full overflow-hidden border-b border-white/5 bg-black/20", hasContent ? "aspect-[16/10]" : "aspect-[4/5]")}>
                            <Image 
                              src={headerImg.imageUrl} 
                              alt={t.name} 
                              fill 
                              className="transition-transform duration-500 group-hover:scale-105 object-cover" 
                            />
                          </div>
                        )}
                        <CardContent className={cn("p-8 flex flex-col relative", hasContent ? "flex-grow" : "absolute bottom-0 left-0 right-0 z-20 text-white")}>
                          {hasContent && (
                            <div className="mb-6">
                              <div className="flex gap-0.5 mb-4">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />)}
                              </div>
                              <p className="text-body text-muted-foreground leading-[1.65] max-w-[68ch] font-sans">
                                "{t.content}"
                              </p>
                            </div>
                          )}
                          <div className="pt-6 border-t border-white/5 mt-auto">
                            <p className="font-semibold text-body-lg text-foreground font-sans">{t.name}</p>
                            <p className="text-eyebrow font-bold text-primary uppercase mt-1 font-sans">
                              {t.gender === 'm' ? 'ALUMNO' : 'ALUMNA'}
                            </p>
                          </div>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
