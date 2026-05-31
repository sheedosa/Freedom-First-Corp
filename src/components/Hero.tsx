import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { content } from '../content';

export const Hero = () => {
  const { eyebrow, title, subhead, ctaPrimary, bgImage } = content.hero;

  return (
    <section
      id="hero"
      className="relative h-[100svh] min-h-[600px] sm:min-h-[640px] md:min-h-[720px] w-full flex flex-col justify-end overflow-hidden"
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

      {/* Foreground — title block anchored to the bottom of the hero */}
      <div className="relative z-10 max-content-width w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl space-y-5 sm:space-y-6 md:space-y-9 pb-14 sm:pb-20 md:pb-24 lg:pb-28"
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

          <div>
            <Link
              to="/capabilities"
              className="inline-flex items-center justify-center bg-red-freedom text-white px-7 py-4 md:py-3.5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:bg-red-700 hover:shadow-md hover:shadow-red-freedom/30 md:hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.97] text-center"
            >
              {ctaPrimary}
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
