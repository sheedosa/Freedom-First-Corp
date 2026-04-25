import React from 'react';
import { motion } from 'motion/react';
import { content } from '../content';

export const Partnerships = () => {
  const { section1, section2, ctaPrimary, ctaPrimaryLink, ctaSecondary, ctaSecondaryLink } = content.partnerships;

  return (
    <section id="partnerships" className="bg-white py-16 md:py-24">
      <div className="max-content-width">
        {/* Top Header */}
        <div className="mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-red-freedom text-xs font-bold uppercase tracking-[0.2em] mb-6"
          >
            Partnerships
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-navy-deep text-3xl md:text-4xl lg:text-5xl font-display leading-[1.1] uppercase tracking-tight max-w-4xl"
          >
            {section1.header}
          </motion.h3>
        </div>

        {/* First Block - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20 mb-20 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <p className="text-navy-deep/80 text-lg leading-relaxed whitespace-pre-line">
              {section1.message}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="aspect-[4/3] bg-off-white relative overflow-hidden square-edges">
              <img 
                src="https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?q=80&w=1200&auto=format&fit=crop" 
                alt="Optimistic landscape"
                className="w-full h-full object-cover opacity-90 sepia-[0.2] hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Second Block Subheading (Centered) */}
        <div className="mb-12 md:mb-16 text-center">
          <motion.h3 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-navy-deep text-2xl md:text-3xl lg:text-4xl font-display leading-[1.1] uppercase tracking-tight max-w-4xl mx-auto"
          >
            {section2.header}
          </motion.h3>
        </div>

        {/* Second Block - Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20 mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <p className="text-navy-deep/80 text-lg leading-relaxed whitespace-pre-line">
              {section2.message}
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2"
          >
            <div className="aspect-[4/3] bg-off-white relative overflow-hidden square-edges">
              <img 
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1200&auto=format&fit=crop" 
                alt="Community collaboration landscape"
                className="w-full h-full object-cover opacity-90 sepia-[0.2] hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-16 md:mt-24">
          <motion.a 
            href={ctaPrimaryLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-navy-deep text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.1em] square-edges transition-all duration-300 hover:bg-black"
          >
            {ctaPrimary}
          </motion.a>
          
          <motion.a 
            href={ctaSecondaryLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full sm:w-auto inline-flex items-center justify-center border border-gray-200 bg-white text-navy-deep px-10 py-5 text-xs font-bold uppercase tracking-[0.1em] square-edges transition-all duration-300 hover:border-navy-deep"
          >
            {ctaSecondary}
          </motion.a>
        </div>
      </div>
    </section>
  );
};
