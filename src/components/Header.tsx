
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#inicio');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['inicio', 'servicios', 'testimonios', 'planes', 'contacto'];
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
    { name: 'Servicios', href: '#servicios' },
    { name: 'Testimonios', href: '#testimonios' },
    { name: 'Planes', href: '#planes' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "bg-white dark:bg-slate-900 shadow-md border-b border-border/50",
        isScrolled ? "py-3" : "py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link 
          href="#inicio" 
          className="flex items-center gap-2 group"
          onClick={() => setActiveSection('#inicio')}
        >
          <ShieldCheck className="w-8 h-8 text-primary transition-transform group-hover:scale-110" />
          <span className="text-xl font-bold font-headline tracking-tight text-foreground">
            Ruta <span className="text-primary">Segura</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setActiveSection(link.href)}
              className={cn(
                "relative text-sm font-bold py-1 transition-colors duration-300",
                activeSection === link.href 
                  ? "text-primary" 
                  : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute bottom-0 left-0 w-full h-0.5 bg-primary transition-transform duration-300 origin-left",
                activeSection === link.href ? "scale-x-100" : "scale-x-0"
              )} />
            </Link>
          ))}
          <Link href="#planes">
            <Button variant="default" className="bg-accent hover:bg-accent/90 rounded-full px-6 shadow-lg shadow-accent/20 transition-all hover:translate-y-[-2px]">
              Más información
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden p-2 text-foreground focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <div className={cn(
        "fixed inset-0 top-[60px] bg-background z-40 transition-transform duration-300 md:hidden",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col p-6 gap-6 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "text-2xl font-bold border-b border-border pb-4 transition-colors",
                activeSection === link.href ? "text-primary" : "text-foreground"
              )}
              onClick={() => {
                setActiveSection(link.href);
                setMobileMenuOpen(false);
              }}
            >
              {link.name}
            </Link>
          ))}
          <Link href="#planes" onClick={() => setMobileMenuOpen(false)}>
            <Button size="lg" className="mt-4 bg-accent hover:bg-accent/90 w-full h-14 text-lg rounded-2xl">
              Más información
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
};
