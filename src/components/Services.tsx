import React from 'react';
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import { BookOpen, Award, ShieldCheck, Brain, Clock } from 'lucide-react';

// Componente para el icono de volante
const SteeringWheel = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="2.5" />
    <path d="M12 14.5v5.5" />
    <path d="M9.5 10.5l-5-2.5" />
    <path d="M14.5 10.5l5-2.5" />
  </svg>
);

const services = [
  {
    title: 'Mentalidad de piloto',
    description: 'Trabajamos la gestión de tus emociones al volante para que logres superar los miedos y conduzcas con total seguridad y confianza.',
    icon: <Brain className="w-10 h-10 text-primary" />,
    imgId: 'mentalidad'
  },
  {
    title: 'Teoría basada en el marco legal y al tráfico real',
    description: 'Profundizamos en las normas de tránsito y el manejo preventivo para que logres anticiparte al entorno y tomes decisiones inteligentes en la calle.',
    icon: <BookOpen className="w-10 h-10 text-primary" />,
    imgId: 'service-theory'
  },
  {
    title: 'Técnica profesional aplicable',
    description: 'Desarrollamos tus habilidades mediante una práctica estructurada para que logres el dominio total del vehículo y conviertas el manejo en algo natural y fluido.',
    icon: <SteeringWheel className="w-10 h-10 text-primary" />,
    imgId: 'tecnica'
  }
];

export const Services = () => {
  return (
    <section id="servicios" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            Nuestros Servicios
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground text-center">
            Conducir es <span className="text-primary italic">más que solo manejar</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Revolucionamos la enseñanza vial combinando conocimiento de vanguardia con <span className="text-primary font-bold">nuestra metodología exclusiva</span> de 3 pilares: <span className="text-primary font-bold">mentalidad</span> para darte confianza, <span className="text-primary font-bold">teoría</span> para un aprendizaje sólido, y <span className="text-primary font-bold">técnica</span> para el dominio total del vehículo. Más que enseñarte a manejar, formamos conductores expertos.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => {
            // Buscamos la imagen por ID en PlaceHolderImages, si no existe usamos un placeholder por defecto
            const img = PlaceHolderImages.find(p => p.id === service.imgId) || PlaceHolderImages[0];
            return (
              <Card key={index} className="group relative overflow-hidden border-none bg-secondary shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="relative aspect-square overflow-hidden bg-black">
                  <Image 
                    src={img?.imageUrl || ''} 
                    alt={service.title} 
                    fill 
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    data-ai-hint={img?.imageHint}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    {service.icon}
                  </div>
                </div>
                <CardHeader className="pt-8">
                  <CardTitle className="text-2xl font-bold group-hover:text-primary transition-colors">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-base leading-relaxed mb-6">{service.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-24 md:mt-40 p-1 md:p-2 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 rounded-[2.5rem] overflow-hidden shadow-2xl">
          <div className="bg-secondary rounded-[2.4rem] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 w-full">
              <h3 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                ¿Por qué somos la mejor opción?
              </h3>
              <div className="grid grid-cols-1 gap-8">
                {[
                  { icon: <ShieldCheck className="w-6 h-6 text-primary" />, text: 'Aprendizaje en un entorno real: Practica en vehículos modernos, seguros y con el máximo confort, exactamente iguales a los que manejarás cuando tengas tu licencia.' },
                  { icon: <Award className="w-6 h-6 text-primary" />, text: 'Guía profesional y experta: Nuestro equipo certificado te acompaña paso a paso, brindándote la tranquilidad y técnica que necesitas para dominar el volante.' },
                  { icon: <Clock className="w-6 h-6 text-primary" />, text: 'A tu propia medida: ¿Trabajas o estudias? No hay problema. Armamos un cronograma de clases que se adapte a tus tiempos.' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-5">
                    <div className="shrink-0 mt-1 bg-primary/10 p-3 rounded-2xl shadow-inner">
                      {item.icon}
                    </div>
                    <p className="text-foreground/80 font-medium text-lg md:text-xl leading-relaxed">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 w-full relative h-[350px] md:h-[550px] rounded-3xl overflow-hidden shadow-2xl">
              <video 
                src="https://i.imgur.com/Ype82Hq.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};