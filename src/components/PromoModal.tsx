"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, CreditCard, Calendar, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Aparece 1 segundo después de que el usuario abre la página
    const timer = setTimeout(() => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    document.body.style.overflow = 'unset';
    setIsOpen(false);
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-300">
      {/* Modal Container without scroll */}
      <div 
        className="relative w-full max-w-lg bg-zinc-950 border border-primary/40 rounded-3xl p-5 sm:p-7 shadow-[0_0_50px_rgba(37,99,235,0.25)] text-white overflow-hidden my-auto transform transition-all animate-in zoom-in-95 duration-300 max-h-[95vh] flex flex-col justify-between"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-modal-title"
      >
        {/* Decorative background glows */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button (X) */}
        <button
          onClick={closeModal}
          className="absolute top-3 right-3 p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
          aria-label="CERRAR VENTANA PROMOCIONAL"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge (Sin icono) */}
        <div className="flex items-center justify-center mb-3 pt-1">
          <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/30 px-3.5 py-1 text-xs sm:text-sm font-black uppercase tracking-wider shadow-sm text-center">
            ¡OPORTUNIDAD EXCLUSIVA!
          </Badge>
        </div>

        {/* Main Discount Headline */}
        <div className="text-center mb-4">
          <div className="inline-flex items-center justify-center gap-1.5 text-primary font-bold text-xs uppercase tracking-wider mb-0.5">
            OFERTA POR TIEMPO LIMITADO
          </div>
          <h2 id="promo-modal-title" className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight uppercase">
            <span className="text-primary font-black">15% DE DESCUENTO</span>
          </h2>
          <p className="text-slate-300 font-semibold text-base sm:text-lg mt-0.5 uppercase">
            PAGANDO CON TRANSFERENCIA
          </p>
        </div>

        {/* Offer Details Card */}
        <div className="space-y-3 bg-white/5 border border-white/10 rounded-2xl p-3.5 sm:p-4 mb-4 text-center">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="p-2 rounded-xl bg-primary/20 text-primary mb-1.5">
              <CreditCard className="w-4 h-4" />
            </div>
            <p className="font-bold text-white text-sm sm:text-base leading-snug uppercase">
              6 CUOTAS SIN INTERÉS
            </p>
            <p className="text-slate-400 text-xs uppercase mt-0.5">
              PAGANDO CON TARJETA DE CRÉDITO
            </p>
          </div>

          <div className="h-px bg-white/10 w-full" />

          {/* Exclusivo para planes (Sin icono) */}
          <div className="text-center py-0.5">
            <p className="font-bold text-amber-400 text-xs uppercase tracking-wide">
              EXCLUSIVO PARA PLANES NIVEL INICIAL E INTERMEDIO
            </p>
          </div>
        </div>

        {/* Date validity badge */}
        <div className="flex items-center justify-center gap-1.5 text-xs text-slate-400 mb-4 bg-zinc-900/90 py-1.5 px-3.5 rounded-full border border-white/10 w-fit mx-auto uppercase">
          <Calendar className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>VÁLIDO HASTA EL <strong className="text-white font-bold">09/10</strong></span>
        </div>

        {/* Action Buttons (Aprovechar & No Gracias) */}
        <div className="space-y-2">
          <Link
            href="/#planes"
            onClick={closeModal}
            className="w-full py-3.5 px-5 bg-primary hover:bg-primary/90 text-white font-black text-base sm:text-lg rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.01] active:scale-[0.99] shadow-lg shadow-primary/30 uppercase tracking-wide"
          >
            APROVECHAR <ArrowRight className="w-5 h-5" />
          </Link>
          <button
            onClick={closeModal}
            className="w-full text-center text-xs text-slate-400 hover:text-slate-200 py-1 transition-colors uppercase font-medium tracking-wider"
          >
            NO, GRACIAS
          </button>
        </div>
      </div>
    </div>
  );
};
