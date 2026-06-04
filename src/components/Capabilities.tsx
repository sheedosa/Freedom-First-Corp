import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../content';

const MotionLink = motion(Link);

export const CapabilitiesSection = () => {
  const { header, items } = content.capabilitiesSection;

  return (
    <section id="capabilities" className="bg-white pt-16 pb-20 md:pt-24 md:pb-24 relative overflow-hidden">
      <div className="max-content-width relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-10 md:mb-14 flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-red-freedom" />
            <span className="text-red-freedom font-mono text-[10px] tracking-[0.3em] uppercase">Capabilities</span>
          </div>
          <h2 className="text-navy-deep text-3xl sm:text-4xl md:text-5xl font-display leading-[0.95] uppercase text-left max-w-3xl tracking-[-0.02em]">
            {header}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-6 lg:gap-5">
          {items.map((capability, index) => (
            <MotionLink
              to={capability.link}
              key={capability.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="flex flex-col group block bg-navy-deep relative overflow-hidden rounded-2xl min-h-[340px] md:min-h-[420px]"
            >
              <div className="absolute inset-0 z-0 h-full bg-navy-deep">
                <img
                  src={capability.image}
                  alt={capability.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-transparent" />
              </div>

              <div className="relative z-10 flex flex-col h-full p-6 md:p-7">
                <div className="mt-auto">
                  <span className="block w-8 h-[1px] bg-red-freedom mb-4" />

                  <h3 className="text-white text-2xl md:text-3xl lg:text-[1.35rem] font-display uppercase leading-[0.95] tracking-[-0.02em] min-h-[2.25rem] md:min-h-[2.5rem] mb-3">
                    {capability.title}
                  </h3>

                  <p className="text-white/70 text-[13px] leading-[1.5] min-h-[5.25rem] mb-5">
                    {capability.description}
                  </p>

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-white/60 group-hover:text-red-freedom transition-colors duration-300">
                    <span className="text-[10px] font-bold uppercase tracking-[0.25em]">Explore</span>
                    <ChevronDown className="w-4 h-4 -rotate-90 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            </MotionLink>
          ))}
        </div>
      </div>
    </section>
  );
};
