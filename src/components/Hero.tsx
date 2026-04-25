import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { content } from '../content.ts';

export const Hero = () => {
  const { title, subhead, ctaPrimary, ctaSecondary, bgImage } = content.hero;

  return (
    <section className="relative h-[100svh] w-full flex items-end overflow-hidden">
      {/* Background with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Industrial energy facility" 
          className="w-full h-full object-cover grayscale-[20%]"
          referrerPolicy="no-referrer"
        />
        {/* Gradients for legibility from High Density theme */}
        <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay-dark)' }} />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-left-mask)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-content-width w-full pb-16 md:pb-24">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl space-y-6 md:space-y-8"
        >
          <h1 className="industrial-h1 mb-4 md:mb-6 leading-[1.1] md:leading-[1.05]">
            {title}
          </h1>

          <p className="text-off-white text-base md:text-lg leading-relaxed max-w-[600px] opacity-90 mb-6 md:mb-8">
            {subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-2 md:pt-4">
            <a 
              href="#capabilities" 
              className="inline-block bg-red-freedom text-white px-8 py-5 md:py-4 text-xs font-bold uppercase tracking-[0.08em] square-edges transition-all duration-300 hover:bg-red-700 md:hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] text-center"
            >
              {ctaPrimary}
            </a>
            <a 
              href="#contact" 
              className="inline-block border-[1.5px] border-white text-white px-8 py-5 md:py-4 text-xs font-bold uppercase tracking-[0.08em] square-edges transition-all duration-300 hover:bg-white hover:text-navy-deep md:hover:-translate-y-1 active:translate-y-0 active:scale-[0.98] text-center"
            >
              {ctaSecondary}
            </a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="hidden lg:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 opacity-60"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-white text-[10px] tracking-widest uppercase font-bold">Explore</span>
        <ChevronDown className="text-white w-5 h-5" strokeWidth={2} />
      </motion.div>
    </section>
  );
};
