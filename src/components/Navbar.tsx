'use client';

import React, { useState, useEffect } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioContent';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const NAV_LINKS = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#intro' },
  { name: 'Expertise', href: '#expertise' },
  { name: 'Work', href: '#work' },
  { name: 'Process', href: '#process' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setScrolled(scrollPosition > 50);

      // Track active section
      const sections = ['hero', 'intro', 'expertise', 'work', 'social-showcase', 'impact', 'process', 'about', 'contact'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-ivory/90 backdrop-blur-md border-b border-ivory-border py-4 shadow-[0_2px_20px_rgba(0,0,0,0.03)]'
            : 'bg-transparent py-6 md:py-8'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="group flex items-center gap-2 text-charcoal font-heading font-bold tracking-tight text-lg md:text-xl uppercase transition-opacity hover:opacity-80"
          >
            <span>{PORTFOLIO_DATA.personal.name}</span>
            <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block group-hover:scale-125 transition-transform" />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV_LINKS.map((link) => {
              const isActive =
                activeSection === link.href.replace('#', '') ||
                (link.href === '#about' && (activeSection === 'intro' || activeSection === 'about'));
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative text-xs uppercase tracking-widest font-heading font-medium transition-colors py-1 ${
                    isActive
                      ? 'text-charcoal font-semibold'
                      : 'text-charcoal-400 hover:text-charcoal'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-charcoal" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Desktop CTA Button */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group inline-flex items-center gap-2 bg-charcoal text-ivory text-xs font-heading font-semibold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-charcoal-800 transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              <span>Let&apos;s Work Together</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-charcoal focus:outline-none"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div
        className={`fixed inset-0 z-40 bg-ivory/98 backdrop-blur-xl md:hidden transition-all duration-500 ease-in-out flex flex-col justify-between p-8 pt-28 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex flex-col gap-6">
          <p className="text-[10px] uppercase font-heading tracking-widest text-charcoal-300">
            Navigation
          </p>
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{ transitionDelay: `${idx * 50}ms` }}
              className="text-3xl font-heading font-bold text-charcoal tracking-tight hover:text-charcoal-500 transition-colors flex items-center justify-between group"
            >
              <span>{link.name}</span>
              <span className="text-xs font-mono text-charcoal-300 opacity-0 group-hover:opacity-100 transition-opacity">
                0{idx + 1}
              </span>
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-ivory-border flex flex-col gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="w-full flex items-center justify-center gap-2 bg-charcoal text-ivory py-4 rounded-full text-sm font-heading font-semibold uppercase tracking-wider"
          >
            <span>Let&apos;s Work Together</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
          <div className="flex justify-between items-center text-xs text-charcoal-400 font-heading">
            <span>{PORTFOLIO_DATA.personal.location}</span>
            <span>{PORTFOLIO_DATA.personal.email}</span>
          </div>
        </div>
      </div>
    </>
  );
}
