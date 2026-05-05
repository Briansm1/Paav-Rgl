
import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Link href="#inicio" className="flex items-center gap-2">
              <ShieldCheck className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold font-headline tracking-tight">
                Ruta <span className="text-primary">Segura</span>
              </span>
            </Link>
            <p className="text-slate-400">
              Formando conductores responsables con seguridad y excelencia desde el primer día. Tu libertad empieza con una educación vial sólida.
            </p>
            <div className="flex gap-4">
              <Facebook className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Instagram className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
              <Youtube className="w-5 h-5 text-slate-400 hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><Link href="#inicio" className="text-slate-400 hover:text-white transition-colors">Inicio</Link></li>
              <li><Link href="#servicios" className="text-slate-400 hover:text-white transition-colors">Nuestra Solución</Link></li>
              <li><Link href="#testimonios" className="text-slate-400 hover:text-white transition-colors">Testimonios</Link></li>
              <li><Link href="#planes" className="text-slate-400 hover:text-white transition-colors">Planes y Precios</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Servicios</h4>
            <ul className="space-y-4">
              <li className="text-slate-400">Licencia de Auto</li>
              <li className="text-slate-400">Licencia de Moto</li>
              <li className="text-slate-400">Cursos de Refuerzo</li>
              <li className="text-slate-400">Asesoría de Trámites</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Horarios de Atención</h4>
            <ul className="space-y-4 text-slate-400">
              <li className="flex justify-between"><span>Lunes - Viernes:</span> <span>7:00 - 19:00</span></li>
              <li className="flex justify-between"><span>Sábados:</span> <span>8:00 - 16:00</span></li>
              <li className="flex justify-between"><span>Domingos:</span> <span>Cerrado</span></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} Ruta Segura Academia de Conducción. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
