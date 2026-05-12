
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/app/lib/placeholder-images';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  const logoImg = PlaceHolderImages.find(img => img.id === 'academy-logo');

  useEffect(() => {
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
      if (current) setActiveSection(`#${current}`);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Nuestra metodología', href: '#servicios' },
    { name: 'Casos de éxito', href: '#testimonios' },
    { name: 'Planes', href: '#planes' },
    { name: 'Preguntas frecuentes', href: '#faq' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-black border-b border-white/5",
        isScrolled || mobileMenuOpen 
          ? "py-1 shadow-lg" 
          : "py-2"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          href="#inicio" 
          className="flex items-center gap-2 group relative z-50"
          onClick={() => {
            setActiveSection('#inicio');
            setMobileMenuOpen(false);
          }}
        >
          {logoImg ? (
            <div className="relative h-10 w-40 md:h-12 md:w-48 transition-all duration-300">
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
            <span className="text-lg font-bold font-headline tracking-tight text-white">
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
                "relative text-xs font-bold transition-colors duration-300",
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
          <Link href="#planes">
            <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-5 font-bold shadow-lg shadow-primary/20 h-9 text-xs">
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
        <nav className="flex flex-col items-center gap-8 p-6">
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
          <Link href="#planes" onClick={() => setMobileMenuOpen(false)} className="mt-4 w-full">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full h-14 text-lg rounded-xl font-bold">
              Inscribirme ahora
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
