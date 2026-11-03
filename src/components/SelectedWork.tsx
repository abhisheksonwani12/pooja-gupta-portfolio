'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { PORTFOLIO_DATA, Project } from '@/data/portfolioContent';
import { ArrowUpRight, X, TrendingUp, Sparkles, CheckCircle } from 'lucide-react';

const CATEGORIES = ['ALL', 'STRATEGY', 'CONTENT', 'CAMPAIGNS', 'BRANDING'] as const;

export default function SelectedWork() {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === 'ALL'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter(
        (p) => p.category.toUpperCase() === activeCategory
      );

  return (
    <section id="work" className="py-24 md:py-36 bg-ivory text-charcoal border-b border-ivory-border relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Header & Category Filters */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-ivory-border">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-charcoal" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-charcoal-400">
                Portfolio Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-charcoal">
              SELECTED WORK
            </h2>
            <p className="text-sm md:text-base text-charcoal-500 font-body max-w-lg mt-3">
              A selection of campaigns, content and social stories created for brands.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-heading font-semibold uppercase tracking-wider transition-all duration-300 ${
                    isSelected
                      ? 'bg-charcoal text-ivory shadow-sm'
                      : 'bg-ivory-card text-charcoal-500 hover:text-charcoal hover:bg-ivory-darker border border-ivory-border'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Magazine-Style Asymmetric Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10 pt-12">
          {filteredProjects.map((project, index) => {
            // Calculate asymmetric spans for magazine feel
            // Project 0: 7 cols, Project 1: 5 cols
            // Project 2: 5 cols, Project 3: 7 cols
            // Project 4: 6 cols, Project 5: 6 cols
            const colSpan =
              index % 4 === 0
                ? 'md:col-span-7'
                : index % 4 === 1
                ? 'md:col-span-5'
                : index % 4 === 2
                ? 'md:col-span-5'
                : 'md:col-span-7';

            const heightClass =
              project.aspectRatio === 'tall'
                ? 'h-[480px] md:h-[560px]'
                : project.aspectRatio === 'large'
                ? 'h-[420px] md:h-[500px]'
                : project.aspectRatio === 'square'
                ? 'h-[380px] md:h-[440px]'
                : 'h-[360px] md:h-[420px]';

            return (
              <div
                key={project.id}
                className={`${colSpan} group cursor-pointer flex flex-col justify-between`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container */}
                <div className={`relative w-full ${heightClass} rounded-2xl overflow-hidden bg-charcoal-100 border border-ivory-border`}>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 60vw"
                    className={`object-cover ${project.image.includes('pooja') ? 'object-[center_25%]' : 'object-center'} transition-transform duration-700 ease-out group-hover:scale-105`}
                  />
                  
                  {/* Subtle Gradient & Tag Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Industry & Year Pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-heading font-medium tracking-wider uppercase border border-white/10">
                      {project.industry}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-md text-white/80 text-[10px] font-mono tracking-widest uppercase">
                      {project.year}
                    </span>
                  </div>

                  {/* Bottom Hover Action Pill */}
                  <div className="absolute bottom-4 right-4 flex items-center gap-2 px-4 py-2 rounded-full bg-white text-charcoal font-heading font-semibold text-xs tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 shadow-lg">
                    <span>View Project</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </div>
                </div>

                {/* Project Metadata & Content */}
                <div className="pt-5 pb-2 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl sm:text-2xl font-heading font-bold text-charcoal group-hover:text-charcoal-700 transition-colors flex items-center gap-2">
                      <span>{project.title}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all text-charcoal" />
                    </h3>
                    <span className="text-xs font-heading font-semibold uppercase tracking-widest text-charcoal-400">
                      {project.client}
                    </span>
                  </div>

                  <p className="text-sm text-charcoal-500 font-body leading-relaxed line-clamp-2">
                    {project.description}
                  </p>

                  {/* Services tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.services.map((srv, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-heading font-medium text-charcoal-400 bg-ivory-card border border-ivory-border px-2.5 py-0.5 rounded-full"
                      >
                        {srv}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Interactive Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 md:p-10 animate-fade-in-up"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-ivory text-charcoal rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-ivory-border shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative h-64 sm:h-80 md:h-96 w-full">
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                fill
                className={`object-cover ${selectedProject.image.includes('pooja') ? 'object-[center_25%]' : 'object-center'}`}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-charcoal-900/40 to-transparent" />
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/60 text-white hover:bg-black flex items-center justify-center transition-colors border border-white/20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title inside header banner */}
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <span className="text-xs uppercase font-heading tracking-widest text-accent font-semibold">
                  {selectedProject.industry} · {selectedProject.year}
                </span>
                <h3 className="text-2xl sm:text-4xl font-heading font-bold">
                  {selectedProject.title}
                </h3>
                <p className="text-sm text-white/80 font-body">Client: {selectedProject.client}</p>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 md:p-10 space-y-8">
              {/* Overview */}
              <div>
                <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-charcoal-400 mb-2">
                  Project Overview
                </h4>
                <p className="text-base sm:text-lg text-charcoal-700 font-body leading-relaxed">
                  {selectedProject.longDescription || selectedProject.description}
                </p>
              </div>

              {/* Services Provided */}
              <div>
                <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-charcoal-400 mb-3">
                  Scope of Services
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.services.map((srv, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-1.5 rounded-full text-xs font-heading font-medium bg-ivory-card border border-ivory-border text-charcoal"
                    >
                      {srv}
                    </span>
                  ))}
                </div>
              </div>

              {/* Impact / Metrics */}
              {selectedProject.metrics && (
                <div className="pt-6 border-t border-ivory-border">
                  <h4 className="text-xs font-heading font-bold uppercase tracking-widest text-charcoal-400 mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4 text-charcoal" />
                    <span>Key Performance Results</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {selectedProject.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="p-4 rounded-xl bg-ivory-card border border-ivory-border">
                        <div className="text-2xl font-heading font-bold text-charcoal">{m.value}</div>
                        <div className="text-xs font-body text-charcoal-500 mt-1">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer CTA */}
              <div className="pt-6 border-t border-ivory-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-charcoal-500">
                  Interested in similar results for your brand?
                </p>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-2 bg-charcoal text-ivory px-6 py-3 rounded-full text-xs font-heading font-semibold uppercase tracking-wider hover:bg-charcoal-800 transition-colors"
                >
                  <span>Start a Conversation</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
