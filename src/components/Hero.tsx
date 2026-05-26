import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
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
    if (target <= 10) {
      setCurrent(target);
      return;
    }
    let frame: number;
    const startTime = performance.now();
    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
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
        {/* Extra darkening at the bottom band to anchor the stats row */}
        <div
          className="absolute inset-x-0 bottom-0 h-[35%]"
          style={{
            background:
              'linear-gradient(to top, rgba(0,20,40,0.85) 0%, rgba(0,20,40,0.5) 60%, rgba(0,20,40,0) 100%)',
          }}
        />
      </div>

      {/* Foreground — flex column. Title block sits below header; stats anchored to bottom. */}
      <div className="relative z-10 max-content-width w-full flex flex-col flex-grow">
        {/* Title block — top, with explicit header clearance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-5xl space-y-7 md:space-y-9 pt-28 md:pt-36 lg:pt-40"
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

        {/* Stats row — pushed to the bottom of the hero
            Mobile: stacked rows with horizontal layout per stat
            sm+:    3-column grid with vertical dividers */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: 'easeOut' }}
          className="mt-auto border-t border-white/10 pt-4 pb-6 sm:pt-8 sm:pb-8 md:pt-10 md:pb-10"
        >
          <div className="flex flex-col sm:grid sm:grid-cols-3 sm:gap-3 md:gap-8 lg:gap-16 sm:divide-x sm:divide-white/10">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={[
                  // MOBILE: horizontal row layout — eyebrow / value / label
                  'flex items-center gap-3 py-3 border-t border-white/10 first:border-t-0 first:pt-2',
                  // sm+: column layout, vertical dividers handled by parent
                  'sm:flex sm:flex-col sm:items-start sm:gap-0 sm:py-0 sm:border-t-0 sm:first:pt-0',
                  'sm:first:pl-0 sm:pl-3 md:pl-6 lg:pl-8',
                ].join(' ')}
              >
                {/* Eyebrow (mobile: tiny "01" on left, sm+: above the value) */}
                <div className="flex items-center gap-2 sm:mb-2 shrink-0 w-7 sm:w-auto">
                  <span className="hidden sm:inline-block w-3 h-[1px] bg-red-freedom" />
                  <span className="text-white/40 font-mono text-[9px] uppercase tracking-[0.3em]">
                    {`0${i + 1}`}
                  </span>
                </div>

                {/* Value (BIG number) */}
                <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display leading-none tracking-[-0.02em] text-white sm:mb-2 md:mb-3 shrink-0">
                  <Counter value={stat.value} />
                </div>

                {/* Label */}
                <div className="text-white/75 text-[10px] md:text-xs font-bold uppercase tracking-[0.18em] leading-tight ml-auto sm:ml-0 text-right sm:text-left max-w-[55%] sm:max-w-none">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
