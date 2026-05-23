import { motion } from 'motion/react';
import { content } from '../content';

export const Partnerships = () => {
  const { section1, section2, ctaPrimary, ctaPrimaryLink, ctaSecondary, ctaSecondaryLink } = content.partnerships;

  return (
    <section id="partnerships" className="bg-white py-14 md:py-24">
      <div className="max-content-width">
        {/* First Block - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-5"
          >
            <div className="space-y-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-red-freedom" />
                <span className="text-red-freedom font-mono text-[10px] uppercase tracking-[0.3em]">01 — Operational Excellence</span>
              </div>
              <h2 className="text-navy-deep text-2xl sm:text-3xl md:text-4xl font-display leading-[1.05] uppercase tracking-[-0.02em]">
                {section1.header}
              </h2>
            </div>
            <p className="text-navy-deep/85 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {section1.message}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="aspect-[4/3] bg-navy-deep/5 relative overflow-hidden rounded-2xl gpu-accel">
              <img
                src="/images/partnerships-1.jpg"
                alt="Optimistic landscape"
                className="w-full h-full object-cover grayscale-[15%] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Second Block - Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-5"
          >
            <div className="space-y-4 mb-4">
              <div className="flex items-center gap-4">
                <div className="w-10 h-[1px] bg-red-freedom" />
                <span className="text-red-freedom font-mono text-[10px] uppercase tracking-[0.3em]">02 — Synergy & Impact</span>
              </div>
              <h2 className="text-navy-deep text-2xl sm:text-3xl md:text-4xl font-display leading-[1.05] uppercase tracking-[-0.02em]">
                {section2.header}
              </h2>
            </div>
            <p className="text-navy-deep/85 text-base md:text-lg leading-relaxed whitespace-pre-line">
              {section2.message}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="aspect-[4/3] bg-navy-deep/5 relative overflow-hidden rounded-2xl gpu-accel">
              <img
                src="/images/partnerships-2.jpg"
                alt="Community collaboration landscape"
                className="w-full h-full object-cover grayscale-[15%] hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-5 mt-12">
          <motion.a
            href={ctaPrimaryLink}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-navy-deep text-white px-7 py-3.5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:bg-black"
          >
            {ctaPrimary}
          </motion.a>

          <motion.a
            href={ctaSecondaryLink}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.05 }}
            className="w-full sm:w-auto inline-flex items-center justify-center text-navy-deep px-7 py-3.5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:text-red-freedom"
          >
            {ctaSecondary}
          </motion.a>
        </div>
      </div>
    </section>
  );
};
