"use client";

import React from 'react';
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Puedo aprender a conducir si nunca manejé antes?",
    answer: (
      <>
        Claro que sí. El programa{" "}
        <Link href="/planes/fundamentos" className="text-primary hover:underline font-bold">
          Fundamentos
        </Link>{" "}
        está pensado para personas que comienzan desde cero o tienen poca experiencia.
      </>
    )
  },
  {
    question: "¿Qué plan debería elegir?",
    answer: "Depende de tu experiencia y objetivo. Contamos con opciones para personas que empiezan, alumnos que quieren mejorar su manejo y quienes buscan prepararse para el examen práctico."
  },
  {
    question: "¿Las clases se adaptan a mis horarios?",
    answer: "Por supuesto. Los horarios se organizan según la disponibilidad de cada alumno/a."
  },
  {
    question: "¿Cómo puedo comenzar?",
    answer: (
      <>
        Podés consultar los planes disponibles en{" "}
        <Link href="/#planes" className="text-primary hover:underline font-bold">
          planes
        </Link>{" "}
        y luego contactarnos para recibir información adicional sobre la opción más adecuada para vos.
      </>
    )
  },
  {
    question: "¿Cuánto dura cada clase?",
    answer: "Nuestras sesiones de prácticas dinámicas duran 50 minutos."
  },
  {
    question: "¿Tengo que tener auto para las clases?",
    answer: "No necesariamente, nosotros te brindamos el vehículo para todas tus clases. Trabajamos con unidades modernas, seguras y equipadas para que tu aprendizaje sea increíble y profesional."
  },
  {
    question: "¿Es normal que tenga miedo a manejar?",
    answer: "Es totalmente normal. Nuestra metodología se enfoca precisamente en la mentalidad de piloto, ayudándote a gestionar los miedos y ganar confianza progresivamente en un entorno seguro."
  },
  {
    question: "¿Alquilan el auto para poder rendir el examen práctico?",
    answer: "Sí, contamos con el servicio de alquiler del auto con personal para el examen práctico. De hecho, todos nuestros alumnos tienen un descuento especial para que puedan rendir con el mismo vehículo con el que practicaron, ganando así mayor seguridad y confianza en ese momento clave. Escribinos para pasarte precios y más información."
  }
];

export const Faq = () => {
  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden bg-background">
      {/* Background with soft transitions */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/15 to-background z-0">
        <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background via-background/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background via-background/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            preguntas comunes
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground">
            Todo lo que necesitás saber antes de <span className="text-primary italic">poner primera</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto bg-card p-6 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/5 last:border-0">
                <AccordionTrigger className="text-left font-bold text-lg hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
