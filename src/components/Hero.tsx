import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../content';

export const Hero = () => {
  const { eyebrow, title, subhead, ctaPrimary, bgImage } = content.hero;

  return (
    <section id="hero" className="relative h-[88svh] min-h-[640px] w-full flex items-end overflow-hidden">
      {/* Background with Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Industrial energy facility"
          className="w-full h-full object-cover grayscale-[20%] gpu-accel"
          referrerPolicy="no-referrer"
          decoding="sync"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradients for legibility from High Density theme */}
        <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay-dark)' }} />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-left-mask)' }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-content-width w-full pb-24 md:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-5xl space-y-7 md:space-y-9 gpu-accel"
        >
          {/* Eyebrow */}
          {eyebrow && (
            <div className="inline-flex items-center gap-3">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: 40 }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                className="h-[1px] bg-red-freedom"
              />
              <span className="text-red-freedom font-mono text-[10px] tracking-[0.3em] uppercase">
                {eyebrow}
              </span>
            </div>
          )}

          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-[5rem] leading-[0.98] font-display uppercase tracking-[-0.02em] text-white text-balance">
            {title}
          </h1>

          <p className="text-off-white text-base md:text-lg leading-relaxed max-w-[640px] opacity-90">
            {subhead}
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              to="/capabilities"
              className="inline-flex items-center justify-center bg-red-freedom text-white px-7 py-4 md:py-3.5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:bg-red-700 hover:shadow-md hover:shadow-red-freedom/30 md:hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] text-center"
            >
              {ctaPrimary}
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center text-white border border-white/30 px-7 py-4 md:py-3.5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:bg-white/10 hover:border-white/60 md:hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] text-center"
            >
              Talk to Our Team
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Status readout — bottom right, desktop only */}
      <div className="hidden md:flex absolute bottom-6 right-6 lg:right-12 items-center gap-4 text-white/45 font-mono text-[10px] tracking-[0.3em] uppercase select-none pointer-events-none">
        <span className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-red-freedom rounded-full animate-pulse" />
          Active in 3 Markets
        </span>
        <span className="opacity-50">·</span>
        <span>1,000+ Wells Managed</span>
        <span className="opacity-50">·</span>
        <span>Field-Proven</span>
      </div>

      {/* Scroll Indicator — visible all sizes */}
      <motion.div
        className="absolute bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-60 pointer-events-none"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="hidden lg:inline text-white text-[10px] tracking-widest uppercase font-bold">Explore</span>
        <ChevronDown className="text-white w-5 h-5" strokeWidth={2} />
      </motion.div>
    </section>
  );
};
