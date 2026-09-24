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
          Planes
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
    answer: "Si, es el miedo a lo desconocido o por atravesar malas experiencias. Nuestro acompañamiento y metodología progresiva se enfoca precisamente en la mentalidad de piloto, ayudándote a gestionar los miedos y ganar confianza con el vehículo."
  },
  {
    question: "¿Alquilan el auto para poder rendir el examen práctico?",
    answer: "Si. Contamos con el servicio de alquiler del auto con personal para el examen práctico. Escribinos para darte más información."
  }
];

export const Faq = () => {
  return (
    <section id="faq" className="relative py-20 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="kicker text-accent mb-6 inline-block bg-accent/10 px-4 py-1.5 rounded-full font-sans text-eyebrow font-semibold uppercase tracking-[0.12em]">
            PREGUNTAS COMUNES
          </span>
          <h2 className="text-h2 font-display text-foreground mb-6">
            Todo lo que necesitás saber antes de <span className="text-primary">poner primera</span>
          </h2>
        </div>
        <div className="max-w-3xl mx-auto bg-card p-6 md:p-10 rounded-[2.5rem] border border-white/5 shadow-2xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/5 last:border-0">
                <AccordionTrigger className="text-left font-semibold text-h3 hover:text-primary transition-colors py-6 leading-[1.3]">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-h3 text-muted-foreground leading-[1.6] pb-6 max-w-[68ch]">
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
