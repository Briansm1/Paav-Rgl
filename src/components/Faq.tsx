"use client";

import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Cuánto dura cada clase?",
    answer: "Nuestras sesiones de prácticas dinámicas duran 50 minutos. Es lo ideal para optimizar tu aprendizaje sin agotarte, permitiéndote fijar los conocimientos de manera efectiva en cada encuentro."
  },
  {
    question: "¿Tengo que tener auto para las prácticas?",
    answer: "No, nosotros te brindamos el vehículo para todas tus clases. Trabajamos con unidades modernas, seguras y equipadas para que tu aprendizaje sea totalmente tranquilo y profesional."
  },
  {
    question: "¿En qué ubicación se dan clases?",
    answer: "Nuestras clases se desarrollan en Río Gallegos, el predio que usamos puede ser atrás de la unpa o el autódromo, dependiendo del horario y de la clase en cuestión."
  },
  {
    question: "¿Es normal que tenga miedo a manejar?",
    answer: "Es totalmente normal. Nuestra metodología se enfoca precisamente en la 'Mentalidad de piloto', ayudándote a gestionar los miedos y ganar confianza progresivamente en un entorno seguro."
  },
  {
    question: "¿Alquilan el auto para poder rendir el examen práctico?",
    answer: "Sí, contamos con el servicio de alquiler de auto para el examen práctico. De hecho, todos nuestros alumnos tienen un descuento especial para que puedan rendir con el mismo vehículo con el que practicaron, ganando así mayor seguridad y confianza en ese momento clave."
  }
];

export const Faq = () => {
  return (
    <section id="faq" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-widest text-primary uppercase bg-primary/10 rounded-full">
            Dudas comunes
          </span>
          <h2 className="text-4xl md:text-6xl font-bold font-headline mb-6 tracking-tight text-foreground">
            Preguntas <span className="text-primary italic">frecuentes</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Todo lo que necesitás saber antes de subirte al auto con nosotros.
          </p>
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
