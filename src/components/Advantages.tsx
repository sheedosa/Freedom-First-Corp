import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { content } from '../content';

export const Advantages = () => {
  const { header, message, items, ctaPrimary, ctaPrimaryLink, ctaSecondary, ctaSecondaryLink } = content.advantages;

  return (
    <section id="advantages" className="bg-off-white py-16 md:py-24 relative overflow-hidden -mt-12">
      {/* Subtle Background Organic Shapes that cross boundaries */}
      <div className="blob-bg -top-64 -left-48 opacity-[0.06] floating-element" />
      <div className="blob-bg bottom-0 right-0 opacity-[0.04] floating-element" style={{ animationDelay: '-4s' }} />
      
      <div className="max-content-width relative z-20">
        <div className="flex flex-col items-center text-center mb-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="w-12 h-[1px] bg-navy-deep/20" />
            <div className="w-2 h-2 bg-red-freedom rotate-45" />
            <div className="w-12 h-[1px] bg-navy-deep/20" />
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-navy-deep text-4xl md:text-6xl font-display leading-[1] uppercase tracking-tight mb-8"
          >
            {header}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-navy-deep/60 text-lg md:text-xl font-medium leading-relaxed max-w-2xl"
          >
            {message}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className={`group h-full ${index % 2 === 0 ? 'lg:-translate-y-6' : 'lg:translate-y-6'}`}
            >
              <div className="flex flex-col h-full bg-white rounded-[3rem] rounded-tr-[1.5rem] rounded-bl-[1.5rem] overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)] hover:-translate-y-4 transition-all duration-700 ease-out border border-gray-100/50 gpu-accel">
                {/* Image Section */}
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 pointer-events-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/5 to-transparent opacity-40" />
                </div>

                {/* Content Section */}
                <div className="p-8 md:p-10 flex flex-col flex-grow">
                  <h3 className="text-navy-deep text-xl md:text-2xl font-display uppercase tracking-tight leading-[1.15] mb-4">
                    {item.title}
                  </h3>
                  <p className="text-navy-deep/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
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
            className="w-full sm:w-auto inline-flex items-center justify-center bg-navy-deep text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:bg-black hover:shadow-2xl hover:shadow-navy-deep/20 group gpu-accel"
          >
            {ctaPrimary}
          </motion.a>
          
          <motion.a 
            href={ctaSecondaryLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="w-full sm:w-auto inline-flex items-center justify-center border border-gray-200 bg-white text-navy-deep px-10 py-5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:border-navy-deep hover:shadow-xl group"
          >
            {ctaSecondary}
          </motion.a>
        </div>
      </div>
    </section>
  );
};
