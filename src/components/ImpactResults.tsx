import React from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioContent';

export default function ImpactResults() {
  return (
    <section id="impact" className="py-24 md:py-36 bg-ivory text-charcoal border-b border-ivory-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-ivory-border">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-charcoal" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-charcoal-400">
                Performance & Growth
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-charcoal">
              {PORTFOLIO_DATA.impact.heading}
            </h2>
          </div>
          <p className="text-sm md:text-base text-charcoal-500 font-body max-w-md">
            Measurable brand visibility, community loyalty, and tangible conversion outcomes driven across diverse industries.
          </p>
        </div>

        {/* 4 Large Editorial Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 pt-12">
          {PORTFOLIO_DATA.impact.stats.map((stat, idx) => (
            <div
              key={idx}
              className="relative p-8 rounded-2xl bg-ivory-card border border-ivory-border hover:border-charcoal transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Metric Index */}
                <div className="flex justify-between items-center text-xs font-mono text-charcoal-400 mb-6">
                  <span>METRIC // 0{idx + 1}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-charcoal-300 group-hover:bg-accent transition-colors" />
                </div>

                {/* Big Bold Editorial Number */}
                <div className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold tracking-tighter text-charcoal group-hover:text-charcoal-900 transition-colors">
                  {stat.value}
                </div>

                {/* Metric Label */}
                <h3 className="text-lg font-heading font-bold text-charcoal mt-3 tracking-tight">
                  {stat.label}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-charcoal-500 font-body mt-6 pt-4 border-t border-ivory-border leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Closing Statement Callout Banner */}
        <div className="mt-16 sm:mt-24 p-10 sm:p-14 rounded-3xl bg-[#0F1012] text-ivory text-center relative overflow-hidden border border-charcoal-800">
          <div className="relative z-10 max-w-4xl mx-auto space-y-4">
            <span className="text-xs font-heading font-bold uppercase tracking-widest text-accent">
              Core Mantra
            </span>
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
              STRATEGY FIRST. CREATIVITY SECOND. RESULTS ALWAYS.
            </h3>
            <p className="text-sm text-white/60 font-body max-w-xl mx-auto pt-2">
              Every piece of content is engineered with clear intent, tailored for the algorithm, and crafted for human emotion.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
