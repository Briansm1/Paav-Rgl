
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
import { Star, Instagram, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const testimonials = [
  {
    name: 'Daniela Rojas',
    content: 'Queríamos agradecerte por el acompañamiento en este proceso tan importante para nuestra hija, por ayudarla a perder sus miedos, a creer en que podía lograrlo y, sobre todo, a sentirse segura en cada movimiento. El mérito de esta licencia es de ella, pero sin tu ayuda no hubiese sido posible. Tu paciencia y técnicas son increíbles, y las palabras de aliento ya son de otro nivel. Muchísimas gracias, Brian, por estas semanas acompañándola en este proceso de aprendizaje.',
    headerImageId: 'achievement-daniela',
    gender: 'f',
    role: 'MADRE DE ALUMNA'
  },
  {
    name: 'Julia Geoia',
    content: '¡Hola! La verdad es que la academia es súper recomendable, tanto por la calidad de la enseñanza como por la atención. Pude superar mis miedos y también los conos, jajaja. El profesor es un genio: tiene muchísima paciencia, es muy respetuoso y explica de manera clara y práctica. La academia es muy completa; brindan material teórico y práctico. Fue una excelente experiencia. ¡Millones de gracias! Y les deseo muchísimos éxitos.',
    gender: 'f'
  },
  {
    name: 'Candelaria Pereyra',
    content: 'Holi, la verdad, súper conforme con las clases. Me sorprendió haber aprendido un montón en poco tiempo, y el hecho de que después practiqué con autos reales y no con conos me dejó muy sorprendida por pensar que no estaba lista. Brian, el instructor, tiene súper buena onda, explica re bien, claro y paciente ante todo. Súper seguro y divertido. Tengo amigos que quieren aprender, así que les voy a recomendar a ustedes, 10/10. Muchísimas gracias.',
    headerImageId: 'achievement-candelaria',
    gender: 'f'
  },
  {
    name: 'Agustín Vallejos',
    content: '¡Qué tal, buenas tardes! Mi experiencia en la academia fue bastante positiva. El instructor con paciencia me indicó cómo colocar los espejos, cómo se hacían las maniobras, la observación de los errores que tuve para poder ayudarme, y la forma clara de explicarme. La verdad fue una experiencia bastante buena, sin quejas y muy agradecido, la verdad. 🏁',
    gender: 'm'
  },
  {
    name: 'Maria Silisque',
    content: '¡EXCELENTE DIEZ! Recomiendo, super responsable, respetuoso y con una paciencia de oro. Gracias!!',
    gender: 'f'
  },
  {
    name: 'Lautaro Ramirez',
    content: 'Muchísimas gracias a ustedes que me brindaron lo necesario para saber y comprender desde lo básico y más complejo al manejar. Muy cómodo en todas las clases, buena experiencia con ustedes. Pude aprobar los exámenes y conseguir mi licencia. Muchas gracias por la enseñanza y el acompañamiento. 🏁❤️',
    headerImageId: 'achievement-lautaro',
    gender: 'm'
  },
  {
    name: 'Oscar Benítez',
    content: 'Excelente. Quiero agradecer al instructor de manejo por su profesionalismo, paciencia y compromiso en la formación de mi hija para obtener su licenciad de conducir. No solo enseña a conducir, enseña responsabilidad y seguridad. ¡Gracias por acompañarla en este paso tan importante!',
    gender: 'm',
    role: 'PADRE DE ALUMNA'
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
    name: 'Pablo Ojeda',
    content: 'Bueno. Primero que nada, agradecer a Brian por su paciencia y la facilidad que tiene a la hora de enseñar. Fue una experiencia buenísima, sin ningún inconveniente. Los recomiendo ampliamente, sin la ayuda de ustedes no hubiese podido obtener mi licencia. 🏁',
    gender: 'm'
  },
  {
    isSocial: true,
    name: '¡Ver más historias!',
    content: 'Seguinos en Instagram para conocer más experiencias y el día a día de nuestra academia.',
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

          <div className="w-full relative px-10 md:px-14">
            <Carousel
              opts={{
                align: "start",
                loop: false,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-4">
                {testimonials.map((t: any, index) => {
                  const headerImg = t.headerImageId ? PlaceHolderImages.find(p => p.id === t.headerImageId) : null;
                  const hasContent = t.content && t.content.trim().length > 0;
                  
                  if (t.isSocial) {
                    return (
                      <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2 lg:basis-1/3">
                        <a 
                          href="https://www.instagram.com/pilotosaav.autoescuela/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block h-full transition-all duration-500 hover:scale-[1.02] active:scale-95 origin-center"
                        >
                          <Card className="h-full border-2 border-primary/20 shadow-xl rounded-[1.5rem] md:rounded-[2.5rem] bg-primary/5 relative overflow-hidden flex flex-col group min-h-[450px] justify-center items-center text-center p-8 md:p-12">
                            <div className="bg-primary/10 p-6 rounded-full mb-8 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                              <Instagram className="w-16 h-16 text-primary group-hover:text-white" />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">¿Querés ver más?</h3>
                            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
                              {t.content}
                            </p>
                            <Button className="h-14 px-8 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-lg gap-2">
                              Ir
                              <ChevronRight className="w-5 h-5" />
                            </Button>
                          </Card>
                        </a>
                      </CarouselItem>
                    );
                  }

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
                                {t.role || (t.gender === 'm' ? 'ALUMNO' : 'ALUMNA')}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
              
              <CarouselPrevious className="absolute -left-8 md:-left-12 top-1/2 -translate-y-1/2 h-10 w-10 md:h-14 md:w-14 rounded-full border-primary/20 bg-secondary text-white hover:bg-primary hover:text-white transition-all duration-300" />
              <CarouselNext className="absolute -right-8 md:-right-12 top-1/2 -translate-y-1/2 h-10 w-10 md:h-14 md:w-14 rounded-full border-primary/20 bg-secondary text-white hover:bg-primary hover:text-white transition-all duration-300" />
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};
