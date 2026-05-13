
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, ChevronDown, Instagram, Facebook, Youtube } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  const logoImg = PlaceHolderImages.find(img => img.id === 'academy-logo');

  useEffect(() => {
    // Solo forzar scroll al inicio si NO hay un hash en la URL (evita romper anclajes como #planes)
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
    
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'servicios', 'testimonios', 'planes', 'faq'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -150 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(`/#${current}`);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '/#inicio' },
    { name: 'Nuestra metodología', href: '/#servicios' },
    { name: 'Casos de éxito', href: '/#testimonios' },
    { name: 'Programas', href: '/#planes' },
    { name: 'Preguntas frecuentes', href: '/#faq' },
  ];

  const socialLinks = [
    { name: 'Instagram', href: 'https://www.instagram.com/pilotos.asesalvolante/', icon: <Instagram className="w-4 h-4" /> },
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61576666433315', icon: <Facebook className="w-4 h-4" /> },
    { name: 'YouTube', href: 'https://www.youtube.com/@pilotosasesalvolante', icon: <Youtube className="w-4 h-4" /> },
    { 
      name: 'TikTok', 
      href: 'https://www.tiktok.com/@pilotos_asesalvolante', 
      icon: (
        <svg viewBox="0 0 448 512" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.2-3.2-5.6-.3-8.6 2.4-11.3 2.5-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.6 5.6-9.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 35 2.2 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
        </svg>
      ) 
    },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black border-b border-white/5",
        isScrolled || mobileMenuOpen 
          ? "py-2 shadow-lg" 
          : "py-4"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          href="/#inicio" 
          className="flex items-center gap-2 group relative z-50"
          onClick={() => {
            setActiveSection('/#inicio');
            setMobileMenuOpen(false);
          }}
        >
          {logoImg ? (
            <div className="relative h-12 w-48 md:h-14 md:w-56 transition-all duration-300">
              <Image 
                src={logoImg.imageUrl} 
                alt={logoImg.description} 
                fill
                className="object-contain"
                priority
                data-ai-hint={logoImg.imageHint}
              />
            </div>
          ) : (
            <span className="text-xl md:text-2xl font-bold font-headline tracking-tight text-white">
              Pilotos - <span className="text-primary">ases al volante</span>
            </span>
          )}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.href)}
              className={cn(
                "relative text-sm lg:text-base font-bold transition-colors duration-300",
                activeSection === link.href 
                  ? "text-primary" 
                  : "text-slate-300 hover:text-white"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left",
                activeSection === link.href ? "scale-x-100" : "scale-x-0"
              )} />
            </Link>
          ))}
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm lg:text-base font-bold text-slate-300 hover:text-white outline-none transition-colors">
              Redes
              <ChevronDown className="w-4 h-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-black border-white/10 text-white p-2 min-w-[160px]">
              {socialLinks.map((social) => (
                <DropdownMenuItem key={social.name} asChild>
                  <a 
                    href={social.href} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-2 hover:bg-white/10 rounded-md cursor-pointer transition-colors"
                  >
                    <span className="text-primary">{social.icon}</span>
                    <span className="font-bold text-sm">{social.name}</span>
                  </a>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Link href="/#planes">
            <Button className="bg-green-600 hover:bg-green-700 text-white rounded-full px-6 font-bold shadow-lg shadow-green-600/20 h-10 text-sm">
              Quiero empezar
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-50 p-2 text-white focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden",
        mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
      )}>
        <nav className="flex flex-col items-center gap-6 p-6 w-full max-w-xs text-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-2xl font-bold tracking-tight transition-colors",
                activeSection === link.href ? "text-primary" : "text-white"
              )}
              onClick={() => {
                setActiveSection(link.href);
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
          
          <div className="w-full border-t border-white/10 pt-6 mt-2">
            <p className="text-slate-500 text-xs font-bold uppercase tracking-widest mb-4">Nuestras Redes</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <span className="[&>svg]:w-6 [&>svg]:h-6">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          <Link href="/#planes" onClick={() => setMobileMenuOpen(false)} className="mt-6 w-full">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white w-full h-14 text-lg rounded-xl font-bold">
              Inscribirme ahora
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
