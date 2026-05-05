
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ShieldCheck } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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
        isScrolled 
          ? "bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-md py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="#inicio" className="flex items-center gap-2">
          <ShieldCheck className="w-8 h-8 text-primary" />
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
              className="text-sm font-medium hover:text-primary transition-colors text-foreground"
            >
              {link.name}
            </Link>
          ))}
          <Button variant="default" className="bg-accent hover:bg-accent/90">
            Inscríbete Hoy
          </Button>
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
              className="text-xl font-semibold border-b border-border pb-4 hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Button size="lg" className="mt-4 bg-accent hover:bg-accent/90 w-full h-14 text-lg">
            Inscríbete Hoy
          </Button>
        </nav>
      </div>
    </header>
  );
};
