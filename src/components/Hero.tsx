import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { content } from '../content';

export const Hero = () => {
  const { eyebrow, title, subhead, ctaPrimary, bgImage } = content.hero;

  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[720px] w-full flex flex-col overflow-hidden"
    >
      {/* Background with Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImage}
          alt="Industrial energy facility"
          className="w-full h-full object-cover grayscale-[20%]"
          referrerPolicy="no-referrer"
          decoding="sync"
          loading="eager"
          fetchPriority="high"
        />
        {/* Gradients for legibility */}
        <div className="absolute inset-0" style={{ background: 'var(--gradient-overlay-dark)' }} />
        <div className="absolute inset-0" style={{ background: 'var(--gradient-left-mask)' }} />
      </div>

      {/* Foreground — title block sits below the header with clearance */}
      <div className="relative z-10 max-content-width w-full flex flex-col flex-grow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl space-y-7 md:space-y-9 pt-28 md:pt-36 lg:pt-40 pb-16 md:pb-24"
        >
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
    </section>
  );
};
