'use client';

import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioContent';
import { ArrowUp, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0C0D0E] text-ivory py-16 md:py-24 border-t border-charcoal-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Main Footer Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 pb-16 border-b border-charcoal-800">
          
          {/* Left Column: Brand & Tagline */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="text-2xl sm:text-3xl font-heading font-extrabold tracking-tight text-white uppercase">
                {PORTFOLIO_DATA.footer.brandName}
              </span>
              <span className="w-2 h-2 rounded-full bg-accent" />
            </div>
            <p className="text-xs sm:text-sm font-heading text-white/60 tracking-wider">
              {PORTFOLIO_DATA.footer.tagline}
            </p>
          </div>

          {/* Right Column: Social Links */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs font-heading font-semibold uppercase tracking-widest text-white/70">
            <a
              href={PORTFOLIO_DATA.personal.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1 group"
            >
              <span>Instagram</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={PORTFOLIO_DATA.personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors flex items-center gap-1 group"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href={`mailto:${PORTFOLIO_DATA.personal.email}`}
              className="hover:text-accent transition-colors flex items-center gap-1 group"
            >
              <span>Email</span>
              <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>

        </div>

        {/* Bottom Row: Copyright & Back To Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-heading text-white/40">
          <p>{PORTFOLIO_DATA.footer.copyright}</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-2 hover:text-white transition-colors cursor-pointer"
          >
            <span>{PORTFOLIO_DATA.footer.backToTop}</span>
            <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-1 transition-transform text-accent" />
          </button>
        </div>

      </div>
    </footer>
  );
}
