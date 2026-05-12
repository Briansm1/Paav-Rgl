
"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious,
  type CarouselApi
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';

const testimonials = [
  {
    name: 'Daniela Rojas',
    content: 'Queríamos agradecerles por el acompañamiento en este proceso tan importante para nuestra hija: ayudarla a perder sus miedos, a creer en que podía lograrlo y, sobre todo, sentirse segura en cada movimiento. El esfuerzo de esta licencia es de ella, pero sin ayuda no hubiese sido posible. La paciencia y técnicas son increíbles, y las palabras de aliento ya son de otro nivel.',
    headerImageId: 'achievement-daniela'
  },
  {
    name: 'Candelaria Pereyra',
    content: '¡Holi! La verdad, súper conforme con las clases. Me sorprendió haber aprendido un montón en poco tiempo y el hecho de que después practiqué con autos reales y no conos me dejó muy sorprendida. Brian es súper buena onda: explica re bien, es claro, paciente ante todo, súper seguro y divertido. ¡10/10!',
    headerImageId: 'achievement-candelaria'
  },
  {
    name: 'Julia Geoia',
    content: '¡Hola! La verdad es que la academia es súper recomendable, tanto por la calidad de la enseñanza como por la atención. Pude superar mis miedos y también los conos jajaja. El profesor es un genio: tiene muchísima paciencia, es muy respetuoso y explica de manera clara y práctica.',
  },
  {
    name: 'Lautaro Ramirez',
    content: 'Muy recomendable la escuela de manejo. La mejor atención que recibí y todo excelente; pude concretar mi meta de recibir mi licencia de conducir gracias a las clases intensivas que me brindaron. El instructor es una persona muy paciente y profesional.',
    headerImageId: 'achievement-lautaro'
  },
  {
    name: 'Alejandra Merlo',
    content: 'Simplemente quería agradecer de corazón haberme cruzado con la academia. Era algo que me costaba un montón y que procrastiné mucho tiempo; gracias a la confianza, el apoyo y sobre todo la paciencia, pude lograrlo. ¡No se dan una idea de lo importante que esto es para mí!',
    headerImageId: 'achievement-alejandra'
  }
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="testimonios" className="py-20 md:py-32 bg-secondary/50 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
            Casos de éxito
          </span>
          <h3 className="text-4xl md:text-5xl font-bold font-headline text-foreground tracking-tight">
            Nuestros alumnos <span className="text-primary italic">hablan</span>
          </h3>
        </div>

        <div className="relative max-w-7xl mx-auto md:px-12">
          <Carousel 
            setApi={setApi}
            opts={{ 
              align: "start", 
              loop: true,
            }} 
            className="w-full relative"
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((t, index) => {
                const headerImg = t.headerImageId ? PlaceHolderImages.find(p => p.id === t.headerImageId) : null;
                
                return (
                  <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 py-4">
                    <Card className="h-full border-none shadow-xl rounded-[2rem] bg-card border border-white/5 relative overflow-hidden flex flex-col group hover:scale-[1.02] transition-transform duration-300">
                      {headerImg && (
                        <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-white/5">
                          <Image 
                            src={headerImg.imageUrl} 
                            alt={`Logro de ${t.name}`} 
                            fill 
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                            data-ai-hint={headerImg.imageHint}
                          />
                        </div>
                      )}
                      <CardContent className="p-6 md:p-8 flex flex-col flex-grow">
                        <div className="mb-4">
                          <div className="flex gap-0.5 mb-4">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                            ))}
                          </div>
                          <p className="text-sm md:text-base text-muted-foreground leading-relaxed italic">
                            "{t.content}"
                          </p>
                        </div>

                        <div className="mt-auto pt-6 border-t border-white/5">
                          <p className="font-bold text-foreground text-lg tracking-tight">{t.name}</p>
                          <p className="text-xs text-primary font-bold uppercase tracking-widest mt-1">Egresado PAAV</p>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <div className="hidden md:block">
              <CarouselPrevious className="h-12 w-12 -left-6 bg-card border-white/10 text-primary hover:bg-primary hover:text-white transition-all shadow-xl" />
              <CarouselNext className="h-12 w-12 -right-6 bg-card border-white/10 text-primary hover:bg-primary hover:text-white transition-all shadow-xl" />
            </div>

            {/* Pagination Dots for Mobile & Desktop */}
            <div className="flex justify-center gap-2 mt-12">
              {Array.from({ length: count }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={cn(
                    "h-2 transition-all rounded-full",
                    current === i 
                      ? "w-8 bg-primary" 
                      : "w-2 bg-primary/20 hover:bg-primary/40"
                  )}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
