
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
    question: "¿Qué requisitos necesito para empezar?",
    answer: "Para comenzar tus clases prácticas, solo necesitás haber iniciado el trámite de tu licencia o tener ganas de aprender. Nosotros te asesoramos paso a paso sobre la documentación necesaria en Río Gallegos."
  },
  {
    question: "¿Ustedes me prestan el auto para el examen?",
    answer: "¡Sí! Contamos con un servicio de alquiler de vehículo especialmente acondicionado para que rindas tu examen práctico con el mismo auto con el que practicaste, dándote mucha más seguridad."
  },
  {
    question: "¿Cuánto tiempo duran las clases?",
    answer: "Nuestras sesiones de prácticas dinámicas están diseñadas para optimizar tu aprendizaje sin agotarte, permitiéndote fijar los conocimientos de manera efectiva en cada encuentro."
  },
  {
    question: "¿Qué pasa si tengo mucho miedo de manejar?",
    answer: "Es totalmente normal. Nuestra metodología se enfoca precisamente en la 'Mentalidad de Piloto', ayudándote a gestionar los miedos y ganar confianza progresivamente en un entorno seguro."
  },
  {
    question: "¿Tienen facilidades de pago?",
    answer: "Ofrecemos importantes descuentos por pago mediante transferencia y también contamos con planes de hasta 6 cuotas sin interés con tarjeta de crédito para que el costo no sea un impedimento."
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
