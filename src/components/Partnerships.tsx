import { motion } from 'motion/react';
import { content } from '../content';

export const Partnerships = () => {
  const { section1, section2, ctaPrimary, ctaPrimaryLink, ctaSecondary, ctaSecondaryLink } = content.partnerships;

  return (
    <section id="partnerships" className="bg-white py-10 md:py-16">
      <div className="max-content-width">
        {/* First Block - Text Left, Image Right */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-freedom" />
                <span className="text-red-freedom text-[10px] font-bold uppercase tracking-[0.3em]">Operational Excellence</span>
              </div>
              <h2 className="text-navy-deep text-2xl sm:text-3xl md:text-4xl font-display leading-[1.1] uppercase tracking-tight">
                {section1.header}
              </h2>
            </div>
            <p className="text-navy-deep/80 text-base md:text-lg leading-relaxed whitespace-pre-line">
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
            <div className="aspect-[4/3] bg-navy-deep/5 relative overflow-hidden rounded-[3rem] shadow-xl shadow-navy-deep/10 gpu-accel">
              <img 
                src="https://lh3.googleusercontent.com/d/1kroLaWjvwK_OgROMCFh2v2ZSVAC6ImqQ" 
                alt="Optimistic landscape"
                className="w-full h-full object-cover opacity-90 sepia-[0.2] hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Second Block - Image Left, Text Right */}
        <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-20 mb-10 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-red-freedom" />
                <span className="text-red-freedom text-[10px] font-bold uppercase tracking-[0.3em]">Synergy & Impact</span>
              </div>
              <h2 className="text-navy-deep text-2xl sm:text-3xl md:text-4xl font-display leading-[1.1] uppercase tracking-tight">
                {section2.header}
              </h2>
            </div>
            <p className="text-navy-deep/80 text-base md:text-lg leading-relaxed whitespace-pre-line">
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
            <div className="aspect-[4/3] bg-navy-deep/5 relative overflow-hidden rounded-[3rem] shadow-xl shadow-navy-deep/10 gpu-accel">
              <img 
                src="https://lh3.googleusercontent.com/d/1V3jOstphVvSI79E12m1Z-R7MeUvL436l" 
                alt="Community collaboration landscape"
                className="w-full h-full object-cover opacity-90 sepia-[0.2] hover:scale-105 transition-transform duration-1000"
                referrerPolicy="no-referrer"
                loading="lazy"
                decoding="async"
              />
            </div>
          </motion.div>
        </div>

        {/* Action Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-12 md:mt-16">
          <motion.a 
            href={ctaPrimaryLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-auto inline-flex items-center justify-center bg-navy-deep text-white px-10 py-5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:bg-black hover:shadow-xl shadow-navy-deep/20"
          >
            {ctaPrimary}
          </motion.a>
          
          <motion.a 
            href={ctaSecondaryLink}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full sm:w-auto inline-flex items-center justify-center border border-gray-200 bg-white text-navy-deep px-10 py-5 text-xs font-bold uppercase tracking-[0.1em] rounded-full transition-all duration-300 hover:border-navy-deep hover:shadow-lg"
          >
            {ctaSecondary}
          </motion.a>
        </div>
      </div>
    </section>
  );
};
