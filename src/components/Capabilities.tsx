import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../content';

const MotionLink = motion(Link);

// Tiny red L-shape pinned just inside each stage corner — industrial-blueprint
// accent that mirrors the bracket language used elsewhere on the site.
const Bracket = ({ position }: { position: 'tl' | 'tr' | 'bl' | 'br' }) => {
  const base = 'absolute pointer-events-none z-10';
  const offsets: Record<typeof position, string> = {
    tl: 'top-4 left-4',
    tr: 'top-4 right-4',
    bl: 'bottom-4 left-4',
    br: 'bottom-4 right-4',
  };
  // Horizontal bar
  const hBarPos: Record<typeof position, string> = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0',
    bl: 'bottom-0 left-0',
    br: 'bottom-0 right-0',
  };
  // Vertical bar
  const vBarPos: Record<typeof position, string> = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0',
    bl: 'bottom-0 left-0',
    br: 'bottom-0 right-0',
  };
  return (
    <div className={`${base} ${offsets[position]} w-6 h-6`}>
      <div className={`absolute ${hBarPos[position]} w-6 h-[2px] bg-red-freedom`} />
      <div className={`absolute ${vBarPos[position]} w-[2px] h-6 bg-red-freedom`} />
    </div>
  );
};

export const CapabilitiesSection = () => {
  const { header, items } = content.capabilitiesSection;

  return (
    <section id="capabilities" className="bg-white pt-16 pb-20 md:pt-24 md:pb-24 relative overflow-hidden fluid-section-transition">
      <div className="max-content-width relative z-10">
        {/* Heading block — sits above the stage */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className="mb-10 md:mb-14 flex flex-col items-start"
        >
          <div className="flex items-center gap-4 mb-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 40 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="h-[1px] bg-red-freedom"
            />
            <span className="text-red-freedom font-mono text-[10px] tracking-[0.3em] uppercase">Capabilities</span>
          </div>
          <h2 className="text-navy-deep text-3xl sm:text-4xl md:text-5xl font-display leading-[0.95] uppercase text-left max-w-3xl tracking-[-0.02em]">
            {header}
          </h2>
        </motion.div>

        {/* Stage — warm cream tonal panel that frames the card grid */}
        <div className="relative rounded-3xl overflow-hidden p-6 md:p-10 lg:p-14" style={{ background: '#F5F1EA' }}>
          {/* Ambient drifting dot pattern */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(0, 20, 40, 0.10) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />

          {/* Red L-bracket corners */}
          <Bracket position="tl" />
          <Bracket position="tr" />
          <Bracket position="bl" />
          <Bracket position="br" />

          {/* Card grid */}
          <div className="relative z-[5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 lg:gap-8">
            {items.map((capability, index) => {
              const fromLeft = index % 2 === 0;
              return (
                <MotionLink
                  to={capability.link}
                  key={capability.title}
                  initial={{ opacity: 0, y: 40, x: fromLeft ? -12 : 12 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                  whileHover={{ y: -8 }}
                  className="flex flex-col group block bg-navy-deep relative overflow-hidden rounded-2xl min-h-[340px] md:min-h-[420px] shadow-lg shadow-navy-deep/15 hover:shadow-2xl hover:shadow-navy-deep/30 transition-shadow duration-500 will-change-transform"
                >
                  <div className="absolute inset-0 z-0 h-full bg-navy-deep overflow-hidden">
                    <motion.img
                      src={capability.image}
                      alt={capability.title}
                      className="w-full h-full object-cover opacity-90"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      decoding="async"
                      animate={{ scale: [1, 1.04, 1] }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
                      whileHover={{ scale: 1.08, transition: { duration: 0.6, ease: 'easeOut' } }}
                    />
                    <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-transparent" />
                  </div>

                  <div className="relative z-10 flex flex-col h-full p-6 md:p-7">
                    <div className="mt-auto">
                      <span className="block w-8 h-[1px] bg-red-freedom mb-4" />

                      <h3 className="text-white text-2xl md:text-3xl font-display uppercase leading-[0.95] tracking-[-0.02em] min-h-[2.25rem] md:min-h-[2.5rem] mb-3">
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
