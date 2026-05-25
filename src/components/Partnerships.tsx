import { motion } from 'motion/react';
import { content } from '../content';

export const Partnerships = () => {
  const { section1, section2 } = content.partnerships;

  return (
    <section id="partnerships" className="bg-white py-14 md:py-24 relative overflow-hidden">
      <div className="max-content-width relative z-10">
        {/* Block 1 — Text Left, Image Right. Image enters from right, text from left. */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 mb-20 md:mb-28">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full lg:w-[45%] space-y-5"
          >
            <div className="space-y-4 mb-4">
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="h-[1px] bg-red-freedom"
                />
                <span className="text-red-freedom font-mono text-[10px] uppercase tracking-[0.3em]">
                  Economic Empowerment
                </span>
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
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="w-full lg:w-[55%] lg:-translate-y-4"
          >
            <div className="group aspect-[4/3] bg-navy-deep/5 relative overflow-hidden rounded-2xl shadow-xl shadow-navy-deep/10 gpu-accel">
              <img
                src="/images/partnerships-1.jpg"
                alt="Optimistic landscape"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              {/* Red tint on hover */}
              <div className="absolute inset-0 bg-red-freedom opacity-0 group-hover:opacity-10 mix-blend-overlay transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>

        {/* Block 2 — Image Left, Text Right. Image enters from left, text from right. */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="w-full lg:w-[45%] space-y-5"
          >
            <div className="space-y-4 mb-4">
              <div className="flex items-center gap-4">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="h-[1px] bg-red-freedom"
                />
                <span className="text-red-freedom font-mono text-[10px] uppercase tracking-[0.3em]">
                  Synergy & Impact
                </span>
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
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            className="w-full lg:w-[55%] lg:translate-y-4"
          >
            <div className="group aspect-[4/3] bg-navy-deep/5 relative overflow-hidden rounded-2xl shadow-xl shadow-navy-deep/10 gpu-accel">
              <img
                src="/images/partnerships-2.jpg"
                alt="Community collaboration landscape"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-red-freedom opacity-0 group-hover:opacity-10 mix-blend-overlay transition-opacity duration-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
