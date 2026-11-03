import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioContent';
import { ArrowUpRight, Instagram, Mail } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-36 bg-[#0E0F11] text-ivory relative overflow-hidden border-b border-charcoal-800">
      {/* Subtle Background Accent Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 relative z-10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-xs font-heading font-medium tracking-widest uppercase text-accent">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse-dot" />
            Taking on select projects for Q4 & 2026
          </span>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold tracking-tight text-white leading-[1.08] text-balance">
            HAVE A BRAND THAT DESERVES <span className="underline decoration-accent decoration-2 underline-offset-8">MORE ATTENTION?</span>
          </h2>

          <p className="text-base sm:text-xl text-white/70 font-body max-w-2xl mx-auto leading-relaxed">
            {PORTFOLIO_DATA.finalCta.subtext}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-accent text-charcoal-900 font-heading font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-accent-hover transition-all duration-300 shadow-[0_0_25px_rgba(204,255,0,0.25)] hover:shadow-[0_0_35px_rgba(204,255,0,0.4)] active:scale-95"
            >
              <span>{PORTFOLIO_DATA.finalCta.primaryBtn}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <a
              href={PORTFOLIO_DATA.personal.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white/10 hover:bg-white/15 backdrop-blur-md text-white border border-white/20 font-heading font-semibold text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 active:scale-95"
            >
              <Instagram className="w-4 h-4 text-accent" />
              <span>{PORTFOLIO_DATA.finalCta.secondaryBtn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
