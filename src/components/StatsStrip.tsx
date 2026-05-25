import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { content } from '../content';

/**
 * Parses a stat string into prefix + number + suffix so the numeric part can
 * be animated independently. Handles patterns like "1,000+", "1 BSCFD", "$1B+".
 */
const parseStat = (value: string): { prefix: string; num: number; suffix: string } => {
  const match = value.match(/^([^\d]*)([\d,]+)(.*)$/);
  if (!match) return { prefix: '', num: 0, suffix: value };
  const [, prefix, numStr, suffix] = match;
  return {
    prefix,
    num: parseInt(numStr.replace(/,/g, ''), 10),
    suffix,
  };
};

type CounterProps = {
  value: string;
  duration?: number;
  triggerInView: boolean;
};

const Counter = ({ value, duration = 1800, triggerInView }: CounterProps) => {
  const { prefix, num: target, suffix } = parseStat(value);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!triggerInView) return;
    // For very small targets the count-up effect is imperceptible — show static.
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
  }, [triggerInView, target, duration]);

  return (
    <span>
      {prefix}
      {target > 10 ? current.toLocaleString() : target}
      {suffix}
    </span>
  );
};

export const StatsStrip = () => {
  const { stats } = content.about.dataStrip;
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-14 md:py-20 overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #001428 0%, #002341 45%, #002f55 100%)' }}
    >
      {/* Ambient drifting dot pattern */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
        animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
        transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
      />
      {/* Corner glow */}
      <div className="absolute -top-20 left-1/4 w-[500px] h-[500px] bg-blue-freedom/8 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-content-width relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-10 md:gap-x-12 lg:gap-x-20 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
              className="flex flex-col items-center md:items-start text-center md:text-left md:px-6 pt-8 md:pt-0 first:pt-0"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="w-6 h-[1px] bg-red-freedom" />
                <span className="text-white/40 font-mono text-[10px] uppercase tracking-[0.3em]">
                  {`0${i + 1}`}
                </span>
              </div>
              <div className="text-5xl md:text-6xl lg:text-7xl font-display leading-none tracking-[-0.02em] text-white mb-4">
                <Counter value={stat.value} triggerInView={inView} />
              </div>
              <div className="text-white/80 text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-1">
                {stat.label}
              </div>
              {stat.sublabel && (
                <div className="text-white/40 font-mono text-[10px] uppercase tracking-[0.25em]">
                  {stat.sublabel}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
