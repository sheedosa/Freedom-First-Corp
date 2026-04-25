import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { content } from '../content';

export const Advantages = () => {
  const { header, message, items, ctaPrimary, ctaPrimaryLink, ctaSecondary, ctaSecondaryLink } = content.advantages;

  return (
    <section id="advantages" className="bg-off-white py-16 md:py-24">
      <div className="max-content-width">
        <div className="flex flex-col items-center text-center mb-16 max-w-4xl mx-auto space-y-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-navy-deep text-3xl md:text-5xl font-display leading-[1.1] uppercase tracking-tight"
          >
            {header}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-navy-deep/80 text-lg md:text-xl leading-relaxed max-w-3xl"
          >
            {message}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 xl:gap-10">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col group"
            >
              {/* Arched Image */}
              <div className="relative w-full aspect-[2/3] md:aspect-[3/4] overflow-hidden rounded-t-[1000px] mb-6">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Title Block */}
              <div className="mb-6 px-2 md:min-h-[4.5rem] flex flex-col justify-end">
                <h3 className="text-navy-deep text-xl md:text-2xl font-display uppercase tracking-tight leading-[1.15]">
                  {item.title}
                </h3>
              </div>

              {/* Description Bordered Rectangle */}
              <div className="border border-gray-200 p-6 flex-grow flex items-center square-edges bg-white">
                <p className="text-navy-deep/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 md:mt-24 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
          <motion.a 
            href={ctaPrimaryLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-navy-deep text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.1em] square-edges transition-all duration-300 hover:bg-black group"
          >
            {ctaPrimary}
          </motion.a>
          
          <motion.a 
            href={ctaSecondaryLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full sm:w-auto inline-flex items-center justify-center border border-gray-200 bg-white text-navy-deep px-10 py-5 text-xs font-bold uppercase tracking-[0.1em] square-edges transition-all duration-300 hover:border-navy-deep group"
          >
            {ctaSecondary}
          </motion.a>
        </div>
      </div>
    </section>
  );
};
