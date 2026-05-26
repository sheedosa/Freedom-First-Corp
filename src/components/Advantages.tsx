import { motion } from 'motion/react';
import { content } from '../content';

export const Advantages = () => {
  const { header, message, items } = content.advantages;

  return (
    <section id="advantages" className="bg-off-white py-14 md:py-24 relative overflow-hidden">
      <div className="max-content-width relative z-20">
        <div className="flex flex-col items-start mb-12 md:mb-16 max-w-3xl">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-10 h-[1px] bg-red-freedom" />
            <span className="text-navy-deep/50 font-mono text-[10px] tracking-[0.3em] uppercase">Advantages</span>
          </div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-navy-deep text-3xl sm:text-4xl md:text-5xl font-display leading-[0.95] uppercase tracking-[-0.02em] mb-5"
          >
            {header}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
            className="text-navy-deep/60 text-base md:text-lg font-medium leading-relaxed max-w-2xl"
          >
            {message}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {items.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06, ease: "easeOut" }}
              whileHover={{ y: -4 }}
              className="group h-full"
            >
              <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden transition-shadow duration-300 ease-out border border-navy-deep/5">
                <div className="relative aspect-[4/3] overflow-hidden bg-navy-deep/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <h3 className="text-navy-deep text-base md:text-lg font-display uppercase tracking-tight leading-[1.2] mb-3">
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
      </div>
    </section>
  );
};
