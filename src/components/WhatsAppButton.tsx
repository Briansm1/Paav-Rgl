"use client";

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export const WhatsAppButton = () => {
  const phoneNumber = "573001234567"; // Reemplazar con el número real
  const message = "Hola Ruta Segura! Me gustaría recibir información sobre sus cursos de conducción.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "fixed bottom-8 right-8 z-[100] flex items-center justify-center w-16 h-16 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group",
        "bg-[#25D366] text-white"
      )}
      aria-label="Contactar por WhatsApp"
    >
      <div className="absolute -top-12 right-0 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap border border-slate-100">
        ¿En qué te ayudamos?
        <div className="absolute bottom-[-6px] right-6 w-3 h-3 bg-white border-r border-b border-slate-100 rotate-45"></div>
      </div>
      <MessageCircle className="w-8 h-8 fill-current" />
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25"></span>
    </a>
  );
};
