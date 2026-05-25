import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../content';

/* ---------------- Stat counter helpers (in-hero) ---------------- */

const parseStat = (value: string): { prefix: string; num: number; suffix: string } => {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { prefix: '', num: 0, suffix: value };
  const [, prefix, numStr, suffix] = match;
  return { prefix, num: parseInt(numStr.replace(/,/g, ''), 10), suffix };
};

const Counter = ({ value, duration = 1800 }: { value: string; duration?: number }) => {
  const { prefix, num: target, suffix } = parseStat(value);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    // Small targets snap (count-up is imperceptible)
    if (target <= 10) {
      setCurrent(target);
      return;
    }
    let frame: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      setCurrent(Math.floor(eased * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else setCurrent(target);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);

  return (
    <>
      {prefix}
      {target > 10 ? current.toLocaleString() : target}
      {suffix}
    </>
  );
};

/* ---------------- Hero ---------------- */

export const Hero = () => {
  const { eyebrow, title, subhead, ctaPrimary, bgImage } = content.hero;
  const stats = content.about.dataStrip.stats;

  return (
    <section id="hero" className="relative h-[92svh] min-h-[720px] w-full flex flex-col justify-end overflow-hidden">
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
        {/* Extra darkening at the bottom band to anchor the stats row */}
        <div
          className="absolute inset-x-0 bottom-0 h-[40%]"
          style={{ background: 'linear-gradient(to top, rgba(0,20,40,0.85) 0%, rgba(0,20,40,0.55) 50%, rgba(0,20,40,0) 100%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-content-width w-full">
        {/* Title block (lifted off the stats band) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl space-y-7 md:space-y-9 pb-10 md:pb-14 gpu-accel"
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

        {/* Stats row — pinned to bottom of hero content, full bleed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="border-t border-white/10 pt-8 pb-10 md:pt-10 md:pb-12"
        >
          <div className="grid grid-cols-3 gap-3 md:gap-8 lg:gap-16 divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className="flex flex-col text-left first:pl-0 md:pl-6 lg:pl-8 pl-3"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-3 h-[1px] bg-red-freedom" />
                  <span className="text-white/40 font-mono text-[9px] uppercase tracking-[0.3em]">
                    {`0${i + 1}`}
                  </span>
                </div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-none tracking-[-0.02em] text-white mb-2 md:mb-3">
                  <Counter value={stat.value} />
                </div>
                <div className="text-white/75 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator — small, top of stats area */}
      <motion.div
        className="hidden md:flex absolute bottom-2 left-1/2 -translate-x-1/2 flex-col items-center gap-1 opacity-40 pointer-events-none z-20"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      >
        <ChevronDown className="text-white w-4 h-4" strokeWidth={2} />
      </motion.div>
    </section>
  );
};
