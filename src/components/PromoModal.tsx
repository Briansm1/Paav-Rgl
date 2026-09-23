"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Sparkles, CreditCard, Percent, Calendar, ArrowRight, ShieldCheck } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Aparece 1 segundo después de que el usuario abre la página
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (!isMounted || !isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-300">
      {/* Modal Container */}
      <div 
        className="relative w-full max-w-lg bg-zinc-950 border border-primary/40 rounded-3xl p-6 sm:p-8 shadow-[0_0_50px_rgba(37,99,235,0.25)] text-white overflow-hidden transform transition-all animate-in zoom-in-95 duration-300"
        role="dialog"
        aria-modal="true"
        aria-labelledby="promo-modal-title"
      >
        {/* Decorative background glows */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 p-2.5 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors z-10"
          aria-label="Cerrar ventaja promocional"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="flex items-center justify-center mb-4">
          <Badge className="bg-amber-500/10 text-amber-400 border-amber-500/30 px-3.5 py-1.5 text-xs sm:text-sm font-black uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
            <Sparkles className="w-4 h-4 text-amber-400 animate-pulse" />
            ¡Oportunidad Exclusiva!
          </Badge>
        </div>

        {/* Main Discount Headline */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 text-primary font-bold text-xs sm:text-sm uppercase tracking-wider mb-1">
            <Percent className="w-4 h-4 text-primary" /> Oferta Por Tiempo Limitado
          </div>
          <h2 id="promo-modal-title" className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
            <span className="text-primary font-black">15% DE DESCUENTO</span>
          </h2>
          <p className="text-slate-300 font-semibold text-lg sm:text-xl mt-1">
            pagando con transferencia
          </p>
        </div>

        {/* Offer Details Card */}
        <div className="space-y-3.5 bg-white/5 border border-white/10 rounded-2xl p-4 sm:p-5 mb-6">
          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-primary/20 text-primary shrink-0 mt-0.5">
              <CreditCard className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold text-white text-base sm:text-lg leading-snug">
                6 cuotas sin interés
              </p>
              <p className="text-slate-400 text-xs sm:text-sm">
                pagando con tarjeta de crédito
              </p>
            </div>
          </div>

          <div className="h-px bg-white/10 w-full" />

          <div className="flex items-start gap-3">
            <div className="p-2.5 rounded-xl bg-amber-500/20 text-amber-400 shrink-0 mt-0.5">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="font-semibold text-slate-200 text-xs sm:text-sm leading-snug">
                Exclusivo para planes nivel inicial e intermedio
              </p>
            </div>
          </div>
        </div>

        {/* Date validity badge */}
        <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-slate-400 mb-6 bg-zinc-900/90 py-2 px-4 rounded-full border border-white/10 w-fit mx-auto">
          <Calendar className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Válido hasta el <strong className="text-white font-bold">09/10</strong></span>
        </div>

        {/* Action Button */}
        <div className="space-y-2.5">
          <Link
            href="/#planes"
            onClick={closeModal}
            className="w-full py-4 px-6 bg-primary hover:bg-primary/90 text-white font-black text-lg rounded-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-primary/30 uppercase tracking-wide"
          >
            Aprovechar <ArrowRight className="w-5 h-5" />
          </Link>
          <button
            onClick={closeModal}
            className="w-full text-center text-xs text-slate-400 hover:text-slate-200 py-1 transition-colors"
          >
            No, gracias
          </button>
        </div>
      </div>
    </div>
  );
};
