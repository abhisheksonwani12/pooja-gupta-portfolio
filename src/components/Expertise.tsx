import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioContent';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

export default function Expertise() {
  return (
    <section id="expertise" className="py-24 md:py-36 bg-ivory text-charcoal border-b border-ivory-border relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-ivory-border">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-charcoal" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-charcoal-400">
                Core Capabilities
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-charcoal">
              WHAT I BRING TO THE TABLE
            </h2>
          </div>
          <p className="text-sm md:text-base text-charcoal-500 font-body max-w-md">
            End-to-end social media architecture combining high-aesthetic content execution with analytical performance tracking.
          </p>
        </div>

        {/* 6 Minimal Service Blocks in Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-12">
          {PORTFOLIO_DATA.services.map((service) => (
            <div
              key={service.number}
              className="group relative bg-ivory-card border border-ivory-border rounded-2xl p-8 transition-all duration-300 hover:border-charcoal hover:shadow-[0_12px_32px_rgba(0,0,0,0.06)] hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                {/* Number & Accent Icon */}
                <div className="flex items-center justify-between pb-6 border-b border-ivory-border/80">
                  <span className="text-2xl font-heading font-bold text-charcoal group-hover:text-charcoal-900 transition-colors">
                    {service.number}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-ivory border border-ivory-border flex items-center justify-center text-charcoal group-hover:bg-accent group-hover:border-accent group-hover:text-charcoal-900 transition-all">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Service Title */}
                <h3 className="text-xl font-heading font-bold text-charcoal mt-6 mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-sm text-charcoal-500 font-body leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Key Deliverables */}
                <div className="space-y-2 pt-4 border-t border-ivory-border/60">
                  {service.deliverables.map((item, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-charcoal-600 font-body">
                      <CheckCircle2 className="w-3.5 h-3.5 text-charcoal-400 mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Highlight Pill */}
              <div className="mt-8 pt-4 border-t border-ivory-border/60">
                <span className="text-[11px] font-heading font-medium text-charcoal-400 italic">
                  {service.highlight}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Strategy Callout */}
        <div className="mt-16 p-8 rounded-2xl bg-[#0F1012] text-ivory flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-heading font-bold text-white">
              Need a bespoke engagement model or tailored campaign?
            </h4>
            <p className="text-sm text-white/70 font-body">
              From one-off viral launch sprints to dedicated monthly strategic retainers.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-accent text-charcoal-900 px-6 py-3 rounded-full text-xs font-heading font-bold uppercase tracking-wider hover:bg-accent-hover transition-colors whitespace-nowrap"
          >
            <span>Discuss Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </section>
  );
}
