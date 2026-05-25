import { motion } from 'motion/react';
import { content } from '../content';

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
  const hBarPos: Record<typeof position, string> = {
    tl: 'top-0 left-0',
    tr: 'top-0 right-0',
    bl: 'bottom-0 left-0',
    br: 'bottom-0 right-0',
  };
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

export const Advantages = () => {
  const { header, message, items } = content.advantages;

  return (
    <section id="advantages" className="bg-off-white py-14 md:py-24 relative overflow-hidden">
      <div className="max-content-width relative z-20">
        {/* Stage — deep navy gradient that frames the WHOLE section (heading + cards) */}
        <div
          className="relative rounded-3xl overflow-hidden p-8 md:p-12 lg:p-16"
          style={{ background: 'linear-gradient(135deg, #001428 0%, #002341 45%, #002f55 100%)' }}
        >
          {/* Ambient drifting dot pattern */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.07) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
            animate={{ backgroundPosition: ['0px 0px', '40px 40px'] }}
            transition={{ duration: 60, repeat: Infinity, ease: 'linear' }}
          />

          {/* Soft glow accents */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-freedom/10 blur-[140px] rounded-full pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-freedom/5 blur-[100px] rounded-full pointer-events-none" />

          {/* Red L-bracket corners */}
          <Bracket position="tl" />
          <Bracket position="tr" />
          <Bracket position="bl" />
          <Bracket position="br" />

          {/* Watermark — huge outline word behind the heading */}
          <div
            className="absolute -top-4 md:-top-6 right-6 md:right-12 pointer-events-none select-none hidden md:block"
            aria-hidden
          >
            <span
              className="font-display uppercase leading-none tracking-[-0.05em] text-[8rem] lg:text-[12rem] xl:text-[14rem] whitespace-nowrap"
              style={{
                color: 'transparent',
                WebkitTextStroke: '1px rgba(255, 255, 255, 0.06)',
              }}
            >
              Advantages
            </span>
          </div>

          {/* Heading block — 2-column on lg+: title (left) + message + preview chips (right) */}
          <div className="relative z-[5] grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16 mb-12 md:mb-16">
            {/* Left: eyebrow + title */}
            <div className="lg:col-span-6 xl:col-span-7 flex flex-col items-start">
              <div className="flex items-center gap-4 mb-5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: 40 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="h-[1px] bg-red-freedom"
                />
                <span className="text-red-freedom font-mono text-[10px] tracking-[0.3em] uppercase">Advantages</span>
              </div>

              <motion.h2
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
                className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-[3.75rem] xl:text-7xl font-display leading-[0.92] uppercase tracking-[-0.03em]"
              >
                {header}
              </motion.h2>
            </div>

            {/* Right: message + preview chips */}
            <div className="lg:col-span-6 xl:col-span-5 lg:pl-10 xl:pl-12 lg:border-l lg:border-white/15 flex flex-col justify-end gap-6">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.1, ease: 'easeOut' }}
                className="text-white/75 text-base md:text-lg font-medium leading-relaxed"
              >
                {message}
              </motion.p>

              {/* Preview chips — small monospace tags listing the 4 advantages */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.2, ease: 'easeOut' }}
                className="flex flex-wrap gap-2"
              >
                {items.map((item, i) => (
                  <span
                    key={item.title}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/15 bg-white/[0.03] text-white/55 font-mono text-[10px] uppercase tracking-[0.2em] hover:bg-white/10 hover:text-white/85 hover:border-white/30 transition-colors duration-300"
                  >
                    <span className="w-1 h-1 rounded-full bg-red-freedom" />
                    <span className="text-white/40">0{i + 1}</span>
                    <span>{item.title}</span>
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* Card grid */}
          <div className="relative z-[5] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {items.map((item, index) => {
              const fromLeft = index % 2 === 0;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40, x: fromLeft ? -12 : 12 }}
                  whileInView={{ opacity: 1, y: 0, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: 'easeOut' }}
                  whileHover={{ y: -8 }}
                  className="group h-full will-change-transform"
                >
                  <div className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-white/5 shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-black/40 transition-shadow duration-500">
                    <div className="relative aspect-[4/3] overflow-hidden bg-navy-deep/5">
                      <motion.img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover pointer-events-none"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        decoding="async"
                        animate={{ scale: [1, 1.04, 1] }}
                        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
                        whileHover={{ scale: 1.08, transition: { duration: 0.6, ease: 'easeOut' } }}
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
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
