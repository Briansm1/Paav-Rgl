import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const Footer = () => {
  const logoImg = PlaceHolderImages.find(img => img.id === 'academy-logo');

  return (
    <footer className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12 text-center">
          <div className="flex flex-col items-center space-y-6">
            <Link href="#inicio" className="flex items-center gap-2">
              {logoImg ? (
                <div className="relative h-16 w-64 md:h-20 md:w-80">
                  <Image 
                    src={logoImg.imageUrl} 
                    alt={logoImg.description} 
                    fill
                    className="object-contain"
                    data-ai-hint={logoImg.imageHint}
                  />
                </div>
              ) : (
                <span className="text-2xl font-bold font-headline tracking-tight">
                  Pilotos - <span className="text-primary">ases al volante</span>
                </span>
              )}
            </Link>
            <p className="text-slate-400 max-w-sm">
              Formando conductores responsables con seguridad y excelencia desde el primer día. Tu libertad empieza con una educación vial sólida.
            </p>
            <div className="flex gap-4 justify-center">
              <Instagram className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Facebook className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              {/* Icono de TikTok mediante SVG inline */}
              <svg 
                viewBox="0 0 448 512" 
                className="w-5 h-5 fill-slate-400 hover:fill-primary cursor-pointer transition-colors" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
              </svg>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><Link href="#inicio" className="text-slate-400 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="#servicios" className="text-slate-400 hover:text-white transition-colors">Nuestros métodos</Link></li>
              <li><Link href="#testimonios" className="text-slate-400 hover:text-white transition-colors">Referencias</Link></li>
              <li><Link href="#planes" className="text-slate-400 hover:text-white transition-colors">Planes</Link></li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-4">
              <li className="text-slate-400">Formación para conducir autos</li>
              <li className="text-slate-400">Formación para conducir motos</li>
              <li className="text-slate-400">Programas digitales</li>
              <li className="text-slate-400">Asesoría personalizada para gestionar tu licencia de conducir</li>
              <li className="text-slate-400">Alquiler del auto para rendir el examen práctico</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col items-center gap-6 text-slate-500 text-sm text-center">
          <p>Copyright © 2026 PAAV. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="#" className="hover:text-white transition-colors">Política de Privacidad</Link>
            <Link href="#" className="hover:text-white transition-colors">Términos y Condiciones</Link>
            <Link href="#" className="hover:text-white transition-colors">Política de Cookies</Link>
          </div>
        </div>

        <div className="mt-8 text-center text-[10px] tracking-widest text-slate-600 font-bold uppercase">
          DESARROLLADO POR <a href="https://www.exvolusion.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">WWW.EXVOLUSION.COM</a>
        </div>
      </div>
    </footer>
  );
};
