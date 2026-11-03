'use client';

import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '@/data/portfolioContent';
import { Mail, Instagram, Linkedin, ArrowUpRight, Send, CheckCircle2, MapPin } from 'lucide-react';

export default function Contact() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      setSelectedServices(selectedServices.filter((s) => s !== service));
    } else {
      setSelectedServices([...selectedServices, service]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 900);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-ivory text-charcoal relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-ivory-border">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-charcoal" />
              <span className="text-xs font-heading font-bold uppercase tracking-widest text-charcoal-400">
                Get In Touch
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold tracking-tight text-charcoal">
              {PORTFOLIO_DATA.contact.heading}
            </h2>
          </div>
          <p className="text-sm md:text-base text-charcoal-500 font-body max-w-md">
            {PORTFOLIO_DATA.contact.subheading}
          </p>
        </div>

        {/* 2-Column Editorial Grid: Info on Left, Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 items-start">
          
          {/* Left Column: Direct Links & Coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <h3 className="text-xl font-heading font-bold text-charcoal">
                Direct Inquiries & Socials
              </h3>
              <p className="text-sm text-charcoal-500 font-body leading-relaxed">
                Prefer email or a casual DM? Feel free to reach out directly through any of the channels below.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              {/* Email */}
              <a
                href={`mailto:${PORTFOLIO_DATA.contact.details.email}`}
                className="p-5 rounded-2xl bg-ivory-card border border-ivory-border hover:border-charcoal transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ivory border border-ivory-border flex items-center justify-center text-charcoal group-hover:bg-charcoal group-hover:text-ivory transition-colors">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-charcoal-400 block">
                      Email
                    </span>
                    <span className="text-sm font-heading font-bold text-charcoal">
                      {PORTFOLIO_DATA.contact.details.email}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Instagram */}
              <a
                href={PORTFOLIO_DATA.personal.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-ivory-card border border-ivory-border hover:border-charcoal transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ivory border border-ivory-border flex items-center justify-center text-charcoal group-hover:bg-charcoal group-hover:text-ivory transition-colors">
                    <Instagram className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-charcoal-400 block">
                      Instagram
                    </span>
                    <span className="text-sm font-heading font-bold text-charcoal">
                      {PORTFOLIO_DATA.contact.details.instagram}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* LinkedIn */}
              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-ivory-card border border-ivory-border hover:border-charcoal transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-ivory border border-ivory-border flex items-center justify-center text-charcoal group-hover:bg-charcoal group-hover:text-ivory transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-heading font-semibold uppercase tracking-wider text-charcoal-400 block">
                      LinkedIn
                    </span>
                    <span className="text-sm font-heading font-bold text-charcoal">
                      {PORTFOLIO_DATA.contact.details.linkedin}
                    </span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-charcoal-400 group-hover:text-charcoal group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Location & Timezone */}
            <div className="p-5 rounded-2xl bg-ivory-card border border-ivory-border flex items-center gap-3">
              <MapPin className="w-5 h-5 text-charcoal-400" />
              <div className="text-xs font-body text-charcoal-600">
                <span className="font-heading font-semibold text-charcoal block">
                  Location & Availability
                </span>
                {PORTFOLIO_DATA.contact.details.location}
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-3xl bg-ivory-card border border-ivory-border shadow-sm">
              {submitted ? (
                <div className="py-16 text-center space-y-4 animate-fade-in-up">
                  <div className="w-16 h-16 rounded-full bg-accent text-charcoal flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-2xl font-heading font-bold text-charcoal">
                    Message Sent Successfully
                  </h4>
                  <p className="text-sm text-charcoal-500 font-body max-w-sm mx-auto">
                    Thank you for reaching out, {formData.name || 'there'}! I&apos;ll review your project details and get back to you within 24–48 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', company: '', message: '' });
                      setSelectedServices([]);
                    }}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-heading font-semibold uppercase tracking-wider bg-charcoal text-ivory hover:bg-charcoal-800 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-charcoal mb-2">
                        {PORTFOLIO_DATA.contact.fields.name} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-ivory-border text-charcoal placeholder:text-charcoal-300 text-sm focus:outline-none focus:border-charcoal transition-colors font-body"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-heading font-bold uppercase tracking-wider text-charcoal mb-2">
                        {PORTFOLIO_DATA.contact.fields.email} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. priya@brand.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-ivory-border text-charcoal placeholder:text-charcoal-300 text-sm focus:outline-none focus:border-charcoal transition-colors font-body"
                      />
                    </div>
                  </div>

                  {/* Company / Brand */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-charcoal mb-2">
                      {PORTFOLIO_DATA.contact.fields.company}
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Acme Lifestyle Co."
                      className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-ivory-border text-charcoal placeholder:text-charcoal-300 text-sm focus:outline-none focus:border-charcoal transition-colors font-body"
                    />
                  </div>

                  {/* What are you looking for? (Multi-select Pills) */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-charcoal mb-2">
                      {PORTFOLIO_DATA.contact.fields.services}
                    </label>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {PORTFOLIO_DATA.contact.serviceOptions.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`px-3.5 py-2 rounded-full text-xs font-heading font-medium tracking-wide transition-all ${
                              isSelected
                                ? 'bg-charcoal text-ivory shadow-sm'
                                : 'bg-ivory border border-ivory-border text-charcoal-600 hover:border-charcoal-300'
                            }`}
                          >
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-heading font-bold uppercase tracking-wider text-charcoal mb-2">
                      {PORTFOLIO_DATA.contact.fields.message} *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me a bit about your brand, timeline, and current social media goals..."
                      className="w-full px-4 py-3.5 rounded-xl bg-ivory border border-ivory-border text-charcoal placeholder:text-charcoal-300 text-sm focus:outline-none focus:border-charcoal transition-colors font-body resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-3 bg-charcoal text-ivory font-heading font-bold text-xs uppercase tracking-widest px-8 py-4 rounded-full hover:bg-charcoal-800 transition-all duration-300 active:scale-98 disabled:opacity-50 shadow-md"
                  >
                    <span>{isSubmitting ? 'SENDING ENQUIRY...' : 'SEND ENQUIRY'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
