import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../content';

export const FinalCta = () => {
  const { eyebrow, header, message, ctaLabel, ctaLink } = content.homeCta;

  return (
    <section
      id="home-cta"
      className="relative py-14 sm:py-20 md:py-28 lg:py-32 overflow-hidden text-white"
      style={{ background: 'linear-gradient(135deg, #001428 0%, #002341 45%, #002f55 100%)' }}
    >
      {/* Subtle dot pattern — matches the footer's static treatment at the same opacity */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-content-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center justify-center gap-3 mb-6">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="h-[1px] bg-red-freedom"
            />
            <span className="text-red-freedom font-mono text-[10px] tracking-[0.3em] uppercase">
              {eyebrow}
            </span>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="h-[1px] bg-red-freedom"
            />
          </div>

          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display text-white uppercase leading-[0.95] tracking-[-0.02em] mb-4 sm:mb-6">
            {header}
          </h2>

          {/* Message */}
          <p className="text-white/75 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-8 sm:mb-12">
            {message}
          </p>

          {/* Big CTA button */}
          <Link
            to={ctaLink}
            className="group inline-flex items-center gap-3 bg-red-freedom text-white px-8 sm:px-12 py-4 sm:py-5 text-xs sm:text-sm font-bold uppercase tracking-[0.2em] rounded-full hover:bg-red-700 transition-all duration-300 hover:shadow-2xl hover:shadow-red-freedom/30 hover:-translate-y-0.5"
          >
            {ctaLabel}
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
