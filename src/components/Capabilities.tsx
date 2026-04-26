import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { content } from '../content';

export const Capabilities = () => {
  const { header, items } = content.capabilities;

  return (
    <section id="capabilities" className="bg-white pt-10 pb-20 md:pt-20 md:pb-32 relative overflow-hidden fluid-section-transition">
      {/* Background Organic Shapes */}
      <div className="blob-bg -top-24 -left-48 opacity-[0.08] floating-element" />
      <div className="blob-bg top-1/2 -right-48 opacity-[0.05] rotate-180 floating-element" style={{ animationDelay: '-3s' }} />

      <div className="max-content-width relative z-10">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8 md:mb-12 flex flex-col items-start md:ml-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[1px] bg-red-freedom" />
            <span className="text-navy-deep/40 font-mono text-[10px] tracking-[0.3em] uppercase">Intelligence</span>
          </div>
          <h2 className="text-navy-deep text-3xl sm:text-4xl md:text-7xl font-display leading-[0.95] md:leading-[0.9] uppercase text-left max-w-4xl tracking-tighter">
            {header}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {items.map((capability, index) => (
            <motion.a
              href={capability.link}
              key={capability.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="flex flex-col group block bg-navy-deep relative overflow-hidden rounded-[2.5rem] min-h-[480px] md:min-h-[550px] shadow-2xl shadow-navy-deep/20 gpu-accel transition-transform duration-500 hover:scale-[1.01]"
            >
              <div className="absolute inset-0 z-0 h-full bg-navy-deep">
                <img 
                  src={capability.image} 
                  alt={capability.title} 
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/10 via-navy-deep/50 to-navy-deep" />
              </div>
              
              <div className="relative z-10 flex flex-col justify-end h-full p-8 md:p-10 mt-auto">
                <div className="text-center transition-transform duration-500 group-hover:-translate-y-6">
                  <p className="text-gray-300 font-mono text-[10px] md:text-xs uppercase tracking-widest mb-4">
                    {capability.description}
                  </p>
                  
                  <h3 className="text-white text-2xl md:text-3xl font-display uppercase tracking-tight mb-10">
                    {capability.title}
                  </h3>
                  
                  <div className="flex justify-center">
                    <div className="w-12 h-12 flex items-center justify-center border border-white/30 rounded-full opacity-60 group-hover:opacity-100 group-hover:bg-red-freedom group-hover:border-red-freedom group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
                      <ChevronDown className="w-5 h-5 -rotate-90 group-hover:rotate-0 transition-transform duration-300" />
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
