import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { content } from '../content';

export const CapabilitiesPage = () => {
  const { hero, subNav, sections, advantage, midMarket, cta } = content.capabilitiesPage;
  const { hash } = useLocation();

  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start center', 'end center']
  });
  const fillHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const smoothFillHeight = useSpring(fillHeight, { stiffness: 80, damping: 20 });

  const [activeSection, setActiveSection] = useState<string>(sections[0].id);
  const [passedSections, setPassedSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [hash]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            // Once a section has been seen, mark it as 'passed' permanently
            // so the dot stays red as the user continues scrolling
            setPassedSections((prev) => {
              if (prev.has(entry.target.id)) return prev;
              const next = new Set(prev);
              next.add(entry.target.id);
              return next;
            });
          }
        });
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sections]);

  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[56vh] flex items-center pt-32 pb-12 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/capabilities-hero.jpg"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/60 to-navy-deep/90" />
          <div className="absolute inset-0 opacity-[0.08]" style={{ backgroundImage: 'radial-gradient(circle, #134377 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-10 h-[1px] bg-red-freedom" />
                <span className="text-xs font-mono tracking-[0.3em] text-white uppercase">Capabilities</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white uppercase leading-[1.0] tracking-[-0.02em] mb-8">
                {hero.title}
              </h1>
              <p className="text-off-white/80 text-base md:text-lg leading-relaxed max-w-2xl opacity-90">
                {hero.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-freedom/30 to-transparent" />
      </section>

      {/* Sticky Sub-Nav */}
      <nav className="bg-white border-b border-navy-deep/10 sticky top-[64px] md:top-[88px] z-40 shadow-sm">
        <div className="max-content-width">
          <div className="flex flex-nowrap justify-start items-center gap-x-6 md:gap-x-12 lg:gap-x-16 overflow-x-auto hide-scrollbar py-4 px-1">
            {subNav.map((item) => {
              const id = item.href.replace('#', '');
              const isActive = activeSection === id;
              return (
                <button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className={`relative py-3 text-xs md:text-sm font-bold uppercase tracking-[0.25em] whitespace-nowrap transition-colors duration-300 ${
                    isActive ? 'text-red-freedom' : 'text-navy-deep/70 hover:text-navy-deep'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div
                      layoutId="capActiveTab"
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-red-freedom"
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Sections with Animated Timeline */}
      <div ref={timelineRef} className="relative">
        {/* Centered spine — visible md+. Animated red fill marks scroll progress
            from dot to dot through the capability sections. */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[3px] z-0 pointer-events-none">
          {/* Base track */}
          <div className="absolute inset-0 bg-navy-deep/15 rounded-full" />

          {/* Animated red fill — height follows scroll progress with a spring */}
          <motion.div
            style={{ height: smoothFillHeight }}
            className="absolute top-0 left-0 right-0 bg-red-freedom rounded-full origin-top shadow-[0_0_12px_rgba(213,41,40,0.45)]"
          />

          {/* Leading-edge glow — a small pulsing dot that rides the top of the fill */}
          <motion.div
            style={{ top: smoothFillHeight }}
            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-red-freedom shadow-[0_0_18px_4px_rgba(213,41,40,0.55)]"
          >
            <motion.span
              className="absolute inset-0 rounded-full bg-red-freedom"
              animate={{ scale: [1, 1.8, 1], opacity: [0.6, 0, 0.6] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut' }}
            />
          </motion.div>
        </div>

        {sections.map((section, index) => {
          const isEven = index % 2 === 0;
          return (
            <section
              key={section.id}
              id={section.id}
              className={`relative py-14 md:py-28 overflow-hidden scroll-mt-32 ${isEven ? 'bg-white' : 'bg-off-white'}`}
            >
              <div className="max-content-width">
                <div className="relative lg:grid lg:grid-cols-2 lg:gap-x-24 xl:gap-x-32">

                  {/* Centered dot — visible md+. States:
                      - Future: navy
                      - Passed (scrolled past): red, normal size
                      - Active: red, scaled up + ring glow
                  */}
                  {(() => {
                    const isActive = activeSection === section.id;
                    const isPassed = passedSections.has(section.id);
                    const isRed = isActive || isPassed;
                    return (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true, margin: '-20% 0px' }}
                        transition={{ duration: 0.45, ease: 'easeOut' }}
                        animate={{ scale: isActive ? 1.8 : 1 }}
                        className={`hidden md:block absolute left-1/2 -translate-x-1/2 top-2 w-5 h-5 rounded-full border-[3px] border-white shadow-lg z-20 transition-colors duration-300 ${
                          isRed ? 'bg-red-freedom' : 'bg-navy-deep'
                        } ${isActive ? 'shadow-[0_0_20px_4px_rgba(213,41,40,0.5)]' : ''}`}
                      />
                    );
                  })()}

                  {/* Intro block — left on even, right on odd */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className={`mb-12 lg:mb-0 lg:pt-10 ${isEven ? 'lg:pr-14' : 'lg:order-2 lg:pl-14'}`}
                  >
                    {/* Mobile dot */}
                    <div className="lg:hidden flex items-center gap-4 mb-8">
                      <div className="w-3 h-3 rounded-full bg-red-freedom shrink-0 shadow-md" />
                      <div className="flex-1 h-[1px] bg-gradient-to-r from-red-freedom/50 to-transparent" />
                    </div>

                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-10 h-[1px] bg-red-freedom" />
                      <span className="text-red-freedom font-bold text-[11px] md:text-xs tracking-[0.3em] uppercase">
                        {section.tag}
                      </span>
                    </div>
                    <h2 className="text-navy-deep text-3xl md:text-4xl lg:text-5xl font-display uppercase tracking-[-0.02em] leading-[0.95] mb-6">
                      {section.header}
                    </h2>
                    <p className="text-navy-deep/85 text-base md:text-lg leading-relaxed">
                      {section.message}
                    </p>
                  </motion.div>

                  {/* Deliverables — right on even, left on odd */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? 40 : -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.1, ease: 'easeOut' }}
                    className={`${isEven ? 'lg:pl-14' : 'lg:order-1 lg:pr-14'}`}
                  >
                    <div className={`grid grid-cols-1 gap-4 md:gap-5 ${section.deliverables.length > 5 ? 'sm:grid-cols-2' : ''}`}>
                      {section.deliverables.map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ duration: 0.4, delay: i * 0.06, ease: 'easeOut' }}
                          whileHover={{ y: -4 }}
                          className="group p-6 rounded-2xl text-white border border-white/5 hover:border-white/10 transition-colors duration-300 shadow-lg hover:shadow-xl" style={{ background: 'linear-gradient(135deg, #002341 0%, #001828 100%)' }}
                        >
                          {'text' in item ? (
                            <>
                              <div className="mb-3">
                                <h4 className="text-white font-display text-sm md:text-base uppercase tracking-tight leading-tight">
                                  {item.title}
                                </h4>
                              </div>
                              <p className="text-white/60 text-xs md:text-sm leading-relaxed">
                                {item.text}
                              </p>
                            </>
                          ) : (
                            <div className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-red-freedom mt-2 shrink-0" />
                              <p className="text-white/85 text-sm md:text-[15px] leading-snug">
                                {item.title}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>

                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Mid-Market Execution Advantage Section */}
      <section className="py-20 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(150deg, #001428 0%, #002341 40%, #002f55 70%, #001428 100%)' }}>
        <div className="absolute inset-0 bg-[url('/images/cap-advbg.jpg')] opacity-[0.05] grayscale mix-blend-overlay bg-cover bg-center" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-freedom/15 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-freedom/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="max-content-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="text-center max-w-4xl mx-auto mb-14 md:mb-20"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-red-freedom" />
              <span className="text-white font-bold text-[10px] tracking-[0.3em] uppercase">The Advantage</span>
              <div className="w-12 h-[1px] bg-red-freedom" />
            </div>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-display leading-[0.95] uppercase tracking-[-0.02em] mb-8">
              {advantage.header}
            </h2>
            <p className="text-white/70 text-sm md:text-base leading-relaxed font-medium max-w-3xl mx-auto">
              {advantage.message}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {midMarket.map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.45, delay: i * 0.1, ease: 'easeOut' }}
                className="group relative overflow-hidden rounded-2xl aspect-[3/4] md:aspect-[4/5] shadow-2xl"
              >
                {card.image ? (
                  <img
                    src={card.image}
                    alt={card.title}
                    className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <div className="absolute inset-0 bg-navy-deep" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/60 to-navy-deep/10" />
                <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-[1px] bg-red-freedom" />
                  </div>
                  <h3 className="text-white text-xl md:text-2xl font-display uppercase tracking-tight leading-[1.1] mb-4">
                    {card.title}
                  </h3>
                  <p className="text-white/80 text-sm md:text-base leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-14 md:py-24 relative overflow-hidden">
        <div className="max-content-width relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="lg:w-2/3 space-y-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-red-freedom" />
                <span className="text-red-freedom font-bold text-[10px] tracking-[0.3em] uppercase">Next Steps</span>
              </div>
              <h2 className="text-navy-deep text-3xl md:text-4xl lg:text-5xl font-display leading-[0.95] uppercase tracking-[-0.02em]">
                {cta.header}
              </h2>
              <p className="text-navy-deep/70 text-lg md:text-xl max-w-2xl">
                {cta.message}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
              className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4 w-full"
            >
              <Link
                to={cta.primary.href}
                className="group px-7 py-3.5 rounded-xl bg-red-freedom text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 hover:bg-red-700 hover:shadow-xl hover:shadow-red-freedom/20"
              >
                {cta.primary.label}
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={cta.secondary.href}
                className="group px-7 py-3.5 rounded-xl border border-navy-deep/10 text-navy-deep text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 hover:bg-navy-deep hover:text-white"
              >
                {cta.secondary.label}
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};
