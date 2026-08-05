import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const Footer = () => {
  const logoImg = PlaceHolderImages.find(img => img.id === 'academy-logo');
  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 text-center lg:text-left">
          <div className="flex flex-col items-center lg:items-start space-y-6">
            <Link href="/#inicio" className="flex items-center gap-2 py-2">
              {logoImg ? (
                <div className="relative h-12 w-48 md:h-16 md:w-64 lg:h-20 lg:w-80">
                  <Image src={logoImg.imageUrl} alt="Pilotos" fill className="object-contain" />
                </div>
              ) : (
                <span className="text-2xl font-display font-bold text-white uppercase tracking-tight">
                  Pilotos - <span className="text-primary">ases al volante</span>
                </span>
              )}
            </Link>
            <p className="text-slate-400 max-w-[68ch] text-body mx-auto lg:mx-0">
              Formando conductores responsables, seguros y confiados desde el primer día. Tu libertad empieza con una educación vial sólida.
            </p>
            <div className="flex gap-2 justify-center lg:justify-start">
              <a href="https://www.instagram.com/pilotosaav.autoescuela/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"><Instagram className="w-6 h-6" /></a>
              <a href="https://www.facebook.com/autoescuela.riogallegos.pilotosasesalvolante/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"><Facebook className="w-6 h-6" /></a>
              <a href="https://www.youtube.com/@pilotosasesalvolante" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary p-3 min-w-[44px] min-h-[44px] flex items-center justify-center"><Youtube className="w-6 h-6" /></a>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-eyebrow font-bold text-white uppercase tracking-[0.12em] mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><Link href="/#inicio" className="text-[16px] text-slate-400 hover:text-white py-2 block">Inicio</Link></li>
              <li><Link href="/#servicios" className="text-[16px] text-slate-400 hover:text-white py-2 block">Metodología</Link></li>
              <li><Link href="/#testimonios" className="text-[16px] text-slate-400 hover:text-white py-2 block">Experiencias</Link></li>
              <li><Link href="/#planes" className="text-[16px] text-slate-400 hover:text-white py-2 block">Planes</Link></li>
            </ul>
          </div>
          <div className="flex flex-col items-center lg:items-start">
            <h4 className="text-eyebrow font-bold text-white uppercase tracking-[0.12em] mb-6">Servicios</h4>
            <ul className="space-y-4">
              <li className="text-[16px] text-slate-400 py-1">Técnicas de conducción profesional</li>
              <li className="text-[16px] text-slate-400 py-1">Conocimientos viales y del marco legal</li>
              <li className="text-[16px] text-slate-400 py-1">Preparación mental y emocional</li>
              <li className="text-[16px] text-slate-400 py-1">Alquiler del auto para examen</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-slate-800 flex flex-col items-center gap-6 text-caption text-slate-500 text-center pb-24 lg:pb-8">
          <p>Copyright © 2026 PAAV. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-4">
            <Link href="#" className="hover:text-white py-2">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white py-2">Términos y Condiciones</Link>
            <Link href="#" className="hover:text-white py-2">Política de Cookies</Link>
          </div>
          <div className="text-caption font-semibold tracking-widest text-slate-600 uppercase">
            DESARROLLADO POR <a href="https://www.exvolusion.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary py-2 px-1">EXVOLUSIÓN</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
