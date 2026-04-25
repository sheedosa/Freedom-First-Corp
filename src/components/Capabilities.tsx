import React from 'react';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { content } from '../content';

export const Capabilities = () => {
  const { header, items } = content.capabilities;

  return (
    <section id="capabilities" className="bg-white py-16 md:py-24">
      <div className="max-content-width">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 md:mb-16 flex justify-center"
        >
          <h2 className="text-navy-deep text-3xl md:text-5xl font-display leading-[1.1] uppercase text-center max-w-4xl tracking-tight">
            {header}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((capability, index) => (
            <motion.a
              href={capability.link}
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col group block bg-navy-deep relative overflow-hidden square-edges min-h-[500px]"
            >
              <div className="absolute inset-0 z-0 h-[70%]">
                <img 
                  src={capability.image} 
                  alt={capability.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-80"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-deep/50 to-navy-deep" />
              </div>
              
              <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10 pt-40 mt-auto bg-gradient-to-t from-navy-deep via-navy-deep to-transparent">
                <div className="text-center transition-transform duration-500 group-hover:-translate-y-4">
                  <p className="text-gray-300 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4">
                    {capability.description}
                  </p>
                  
                  <h3 className="text-white text-2xl md:text-3xl font-display uppercase tracking-tight mb-8">
                    {capability.title}
                  </h3>
                  
                  <div className="flex justify-center">
                    <div className="w-8 h-8 flex items-center justify-center border border-white/20 rounded-full opacity-60 group-hover:opacity-100 group-hover:bg-white group-hover:text-navy-deep transition-all duration-300">
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
