import React from 'react';
import { motion } from 'motion/react';
import { Mail, Linkedin, Send, MapPin } from 'lucide-react';
import { content } from '../content.ts';
import { Logo } from './Logo.tsx';

export const Footer = () => {
  const { navigate, contactForm, company } = content.footer;

  return (
    <footer className="bg-navy-deep text-white pt-20 pb-12 relative overflow-hidden border-t border-white/5">
      {/* Structural pattern background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="max-content-width relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-12">
          
          {/* Column 1: Navigation */}
          <div className="lg:col-span-2 space-y-8">
            <h3 className="text-red-freedom text-xs font-bold uppercase tracking-[0.2em]">
              {navigate.title}
            </h3>
            <nav className="flex flex-col gap-4">
              {navigate.links.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  className="text-gray-cool text-sm font-bold uppercase tracking-widest hover:text-white transition-colors duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 2: Contact Form */}
          <div className="lg:col-span-5 space-y-8">
            <h3 className="text-red-freedom text-xs font-bold uppercase tracking-[0.2em]">
              {contactForm.title}
            </h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactForm.fields.slice(0, 3).map((field) => (
                  <div key={field.name} className={field.name === 'company' ? 'sm:col-span-2' : ''}>
                    <input 
                      type={field.type}
                      placeholder={field.label}
                      className="w-full bg-blue-freedom/10 border border-white/10 px-4 py-3 text-sm square-edges focus:border-red-freedom focus:ring-0 focus:outline-none transition-colors placeholder:text-gray-cool/40"
                    />
                  </div>
                ))}
              </div>
              <div>
                <textarea 
                  placeholder={contactForm.fields[3].label}
                  rows={4}
                  className="w-full bg-blue-freedom/10 border border-white/10 px-4 py-3 text-sm square-edges focus:border-red-freedom focus:ring-0 focus:outline-none transition-colors placeholder:text-gray-cool/40 resize-none"
                />
              </div>
              <button 
                type="submit"
                className="inline-flex items-center justify-center bg-red-freedom text-white px-8 py-4 text-xs font-bold uppercase tracking-widest square-edges hover:bg-red-700 transition-all active:scale-[0.98] group"
              >
                {contactForm.cta}
                <Send className="ml-3 w-3 h-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Column 3: Company Info */}
          <div className="lg:col-span-5 space-y-10 lg:pl-12 lg:border-l lg:border-white/5">
            <div className="space-y-6">
              <Logo variant="white" />
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-8">
                {company.offices.map((office) => (
                  <div key={office.city} className="space-y-2">
                    <div className="flex items-center gap-2 text-red-freedom">
                      <MapPin className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase tracking-widest">{office.city}</span>
                    </div>
                    <p className="text-gray-cool text-xs leading-relaxed whitespace-pre-line font-mono opacity-80">
                      {office.address}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/5 flex flex-wrap gap-8 items-center">
              <a 
                href={`mailto:${company.social.email}`}
                className="flex items-center gap-3 text-gray-cool hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center square-edges group-hover:bg-red-freedom transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase">{company.social.email}</span>
              </a>
              <a 
                href={company.social.linkedin}
                target="_blank"
                rel="no-referrer"
                className="flex items-center gap-3 text-gray-cool hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 bg-white/5 flex items-center justify-center square-edges group-hover:bg-[#0077b5] transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <span className="text-xs font-bold tracking-widest uppercase">LinkedIn</span>
              </a>
            </div>
          </div>

        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
           <p className="text-[10px] text-gray-cool/40 uppercase tracking-[0.2em] font-mono">
            © {new Date().getFullYear()} {company.name} All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#privacy" className="text-[10px] text-gray-cool/40 hover:text-white uppercase tracking-[0.2em] transition-colors">Privacy</a>
            <a href="#terms" className="text-[10px] text-gray-cool/40 hover:text-white uppercase tracking-[0.2em] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
