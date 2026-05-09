
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
    name: 'Julia Geoia',
    content: '¡Hola! La verdad es que la academia es súper recomendable, tanto por la calidad de la enseñanza como por la atención. Pude superar mis miedos y también los conos jajaja. El profesor es un genio: tiene muchísima paciencia, es muy respetuoso y explica de manera clara y práctica. La academia es muy completa; brindan material teórico y práctico. Fue una excelente experiencia. ¡Millones de gracias! Y les deseo muchísimos éxitos.',
  },
  {
    name: 'Lautaro Ramirez',
    content: 'Buenas. Muy recomendable la escuela de manejo. La mejor atención que recibí y todo excelente; pude concretar mi meta de recibir mi licencia de conducir gracias a las clases intensivas que me brindaron. El instructor es una persona muy paciente y profesional, dando indicaciones claras. Excelente academia brindándome material teórico y práctico para adquirir mucho más conocimiento. Una experiencia excelente, muchas gracias a Pilotos - ases al volante por la meta que logré conseguir.',
  },
  {
    name: 'Maria Silisque',
    content: '¡EXCELENTE DIEZ! Recomiendo, súper responsable, respetuoso y con una paciencia de oro. ¡Gracias!',
  },
  {
    name: 'Javier Peña',
    content: '¡Hola! Recomiendo, todo excelente y práctico, me sirvió un montón.',
  },
  {
    name: 'Alejandra Merlo',
    content: 'Simplemente quería agradecer de corazón haberme cruzado con la academia. Era algo que me costaba un montón y que procrastiné mucho tiempo; gracias a la confianza, el apoyo, la educación y, sobre todo, la paciencia y empatía recibida, pude lograrlo. ¡No se dan una idea de lo importante que esto es para mí, y fue gracias a la ayuda de ustedes! ¡Gracias, gracias!',
    headerImageId: 'achievement-alejandra'
  },
  {
    name: 'Daniela Rojas',
    content: 'Queríamos agradecerles por el acompañamiento en este proceso tan importante para nuestra hija: ayudarla a perder sus miedos, a creer en que podía lograrlo y, sobre todo, sentirse segura en cada movimiento. El esfuerzo de esta licencia es de ella, pero sin ayuda no hubiese sido posible. La paciencia y técnicas son increíbles, y las palabras de aliento ya son de otro nivel. ¡Muchísimas gracias, Brian, por estas semanas acompañándola en el proceso de aprendizaje!',
    headerImageId: 'achievement-daniela'
  },
  {
    name: 'Maura Rivero',
    content: 'Brian, excelente profe, gracias por la paciencia y dedicación.',
  },
  {
    name: 'Oscar Benítez',
    content: 'Excelente, quiero agradecer al instructor de manejo por su profesionalismo, paciencia y compromiso en la formación de mi hija para obtener su licencia profesional. No solo enseña a conducir, enseña responsabilidad y seguridad. ¡Gracias por acompañarla en este paso tan importante!',
  },
  {
    name: 'Candelaria Pereyra',
    content: '¡Holi! La verdad, súper conforme con las clases. Me sorprendió haber aprendido un montón en poco tiempo y el hecho de que después practiqué con autos reales y no conos me dejó muy sorprendida por pensar que no estaba lista. Brian, el instructor, súper buena onda; explica re bien, claro, paciente ante todo, súper seguro y divertido. Tengo amigos que quieren aprender, así que les voy a recomendar a ustedes. ¡10/10! Muchas gracias.',
    headerImageId: 'achievement-candelaria'
  }
];

export const Testimonials = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-secondary overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
            Lo que dicen de nosotros
          </span>
          <h3 className="text-4xl md:text-5xl font-bold font-headline text-foreground tracking-tight">
            Algunos casos de <span className="text-primary italic">éxito</span>
          </h3>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-12">
          <Carousel 
            setApi={setApi}
            opts={{ 
              align: "center", 
              loop: true,
              dragFree: false
            }} 
            className="w-full relative group"
          >
            <CarouselContent className="-ml-4 md:-ml-6">
              {testimonials.map((t, index) => {
                const headerImg = t.headerImageId ? PlaceHolderImages.find(p => p.id === t.headerImageId) : null;
                const isActive = index === current;

                return (
                  <CarouselItem key={index} className="pl-4 md:pl-6 basis-full sm:basis-1/2 lg:basis-1/3 py-4">
                    <div className={cn(
                      "transition-all duration-700 ease-in-out h-full",
                      isActive 
                        ? "opacity-100 blur-0 scale-[1.01] z-10" 
                        : "opacity-30 blur-[2px] scale-95 grayscale-[50%]"
                    )}>
                      <Card className="h-full border-none shadow-xl rounded-[2rem] group bg-card border border-white/5 relative overflow-hidden flex flex-col">
                        {headerImg && (
                          <div 
                            className="relative w-full overflow-hidden border-b border-white/5"
                            style={{ aspectRatio: '1080 / 680' }}
                          >
                            <Image 
                              src={headerImg.imageUrl} 
                              alt="Logro del estudiante" 
                              fill 
                              className="object-cover"
                              data-ai-hint={headerImg.imageHint}
                            />
                          </div>
                        )}
                        <CardContent className="p-5 md:p-6 flex flex-col flex-grow">
                          <div className="flex-grow mb-4">
                            <p className="text-sm md:text-base italic text-muted-foreground leading-relaxed">
                              {t.content}
                            </p>
                          </div>

                          <div className="flex flex-col border-t border-white/5 pt-4">
                            <div>
                              <p className="font-bold text-foreground text-base tracking-tight">{t.name}</p>
                              <div className="flex gap-0.5 mt-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                ))}
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            <CarouselPrevious className="hidden md:flex -left-4 lg:-left-16 h-12 w-12 bg-card text-primary border-white/10 hover:bg-primary hover:text-white transition-all shadow-lg rounded-xl" />
            <CarouselNext className="hidden md:flex -right-4 lg:-right-16 h-12 w-12 bg-card text-primary border-white/10 hover:bg-primary hover:text-white transition-all shadow-lg rounded-xl" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};
