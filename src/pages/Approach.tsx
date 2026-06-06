import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useContent } from '../i18n';
import { Seo, breadcrumbLd, webPageLd } from '../seo';

export const Approach = () => {
  const content = useContent();
  const { hero, stakeholderTabs, focus } = content.approachPage;
  const tabKeys = ['operators', 'host-nations', 'strategic-partners'] as const;
  type TabKey = typeof tabKeys[number];
  const [activeTab, setActiveTab] = useState<TabKey>('operators');
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      if ((tabKeys as readonly string[]).includes(id)) {
        setActiveTab(id as TabKey);
      }
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  const activeContent = stakeholderTabs.tabs[activeTab];

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative min-h-[56vh] flex items-center pt-32 pb-12 overflow-hidden bg-navy-deep">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <Seo
            path="/approach"
            title={content.seo.approach.title}
            description={content.seo.approach.description}
            jsonLd={[
              webPageLd('Our Approach | Freedom First Global', 'How Freedom First Global delivers output and value for host nations through direct-to-asset execution and aligned partnerships.', '/approach'),
              breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Approach', path: '/approach' }]),
            ]}
          />
          <img
            src="/images/approach-hero.jpg"
            alt="Freedom First Global team executing in a demanding field environment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/70 via-navy-deep/60 to-navy-deep/90" />
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
                <span className="text-xs font-mono tracking-[0.3em] text-white uppercase">
                  {content.ui.approachEyebrow}
                </span>
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

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-freedom/30 to-transparent" />
      </section>

      {/* Detailed Approach Sections */}
      {focus.map((section: any, index) => {
        const isDark = index === 1;
        const isPointsFocus = section.id === 'direct-to-asset' || section.id === 'hse-capability' || section.id === 'commercial-alignment';
        
        return (
          <section
            key={section.id}
            id={section.id}
            className={`relative py-14 md:py-24 overflow-hidden ${isDark ? 'text-white' : index % 2 === 1 ? 'bg-off-white' : 'bg-white'}`}
            style={isDark ? { background: 'linear-gradient(135deg, #001428 0%, #002341 45%, #002f55 100%)' } : undefined}
          >
            {isDark && (
              <>
                <div
                  className="absolute inset-0 opacity-[0.05] pointer-events-none"
                  style={{ backgroundImage: 'radial-gradient(circle, #4a9eff 1px, transparent 1px)', backgroundSize: '40px 40px' }}
                />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-freedom/10 blur-[140px] rounded-full pointer-events-none" />
              </>
            )}
            <div className="container relative z-10 px-6 mx-auto">
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse items-start' : 'lg:flex-row items-start'} gap-10 lg:gap-24`}>
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-mono font-bold text-red-freedom tracking-[0.3em] uppercase py-1 px-3 border border-red-freedom/30 rounded-sm bg-red-freedom/5">
                        {section.eyebrow}
                      </span>
                    </div>
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-display mb-6 uppercase tracking-[-0.02em] leading-[0.95] ${isDark ? 'text-white' : 'text-navy-deep'}`}>
                      {section.title}
                    </h2>
                    <p className={`leading-relaxed mb-10 text-lg ${isDark ? 'text-white/70' : 'text-navy-deep/80'}`}>
                      {section.desc}
                    </p>
                    
                    {!isPointsFocus && section.subHeader && (
                      <h3 className={`text-xl font-sans font-medium mb-6 uppercase tracking-tight ${isDark ? 'text-white' : 'text-navy-deep'}`}>
                        {section.subHeader}
                      </h3>
                    )}

                    {!isPointsFocus && (
                      <ul className="space-y-8 mb-10">
                        {section.points.map((point: any, i: number) => (
                          <li key={i} className="flex items-start gap-4 group">
                            <div className="w-2 h-2 bg-red-freedom rotate-45 mt-2 group-hover:scale-125 transition-transform flex-shrink-0" />
                            <div className="flex flex-col gap-1">
                              {typeof point === 'string' ? (
                                <span className={`font-mono text-sm tracking-wide ${isDark ? 'text-gray-300' : 'text-navy-deep/80'}`}>{point}</span>
                              ) : (
                                <>
                                  <span className={`font-mono text-sm font-bold tracking-wider uppercase ${isDark ? 'text-white' : 'text-navy-deep'}`}>
                                    {point.title}
                                  </span>
                                  <span className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-navy-deep/75'}`}>
                                    {point.text}
                                  </span>
                                </>
                              )}
                            </div>
                          </li>
                        ))}
                      </ul>
                    )}
                  </motion.div>
                </div>
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50, scale: isPointsFocus ? 1 : 0.95 }}
                    whileInView={{ opacity: 1, x: 0, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45 }}
                    className="relative"
                  >
                    {isPointsFocus ? (
                      <div className={`border p-6 md:p-12 rounded-2xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-off-white/50 border-gray-100'}`}>
                        {section.subHeader && (
                          <h3 className={`text-xl font-sans font-medium mb-12 uppercase tracking-tight flex items-center gap-4 ${isDark ? 'text-white' : 'text-navy-deep'}`}>
                            <div className="w-8 h-[1px] bg-red-freedom" />
                            {section.subHeader}
                          </h3>
                        )}
                        <ul className="space-y-10">
                          {section.points.map((point: any, i: number) => (
                            <li key={i} className="flex items-start gap-6 group">
                              <div className={`w-3 h-3 mt-2 rounded-full flex-shrink-0 transition-colors ${isDark ? 'bg-red-freedom' : 'bg-red-freedom'}`} />
                              <div className="flex flex-col gap-2">
                                <span className={`font-mono text-sm font-bold tracking-wider uppercase ${isDark ? 'text-white' : 'text-navy-deep'}`}>
                                  {point.title}
                                </span>
                                <span className={`text-sm leading-relaxed ${isDark ? 'text-white/70' : 'text-navy-deep/75'}`}>
                                  {point.text}
                                </span>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      <>
                        {/* Tactical Frame */}
                        <div className="absolute -inset-4 border border-red-freedom/20 pointer-events-none rounded-2xl" />
                        <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-red-freedom rounded-tl-xl" />
                        <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-red-freedom rounded-br-xl" />
                        
                        <div className="relative aspect-video lg:aspect-square rounded-xl overflow-hidden shadow-2xl grayscale hover:grayscale-0 transition-all duration-700">
                          <img 
                            src={section.image} 
                            alt={section.title} 
                            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-navy/20 mix-blend-multiply" />
                        </div>
                      </>
                    )}
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      {/* Stakeholder Tabs Section (moved from Stakeholders page) */}
      <section id="stakeholders" className="bg-off-white py-14 md:py-24 relative overflow-hidden scroll-mt-24">
        <div className="max-content-width">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-12 md:mb-16 text-center rtl:text-right max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center rtl:justify-end gap-4 mb-6">
              <div className="w-12 h-[1px] bg-red-freedom" />
              <span className="text-red-freedom font-bold text-[10px] tracking-[0.3em] uppercase">{content.ui.stakeholdersEyebrow}</span>
              <div className="w-12 h-[1px] bg-red-freedom" />
            </div>
            <h2 className="text-navy-deep text-3xl md:text-4xl lg:text-5xl font-display leading-[0.95] uppercase tracking-[-0.02em] mb-6">
              {stakeholderTabs.header}
            </h2>
            <p className="text-navy-deep/70 text-base md:text-lg leading-relaxed max-w-3xl mx-auto rtl:mr-0">
              {stakeholderTabs.message}
            </p>
          </motion.div>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-12 mb-12 border-b border-navy-deep/10">
            {tabKeys.map((key) => {
              const tab = stakeholderTabs.tabs[key];
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`py-5 px-2 text-sm md:text-base font-bold uppercase tracking-wider transition-all relative whitespace-nowrap ${
                    activeTab === key ? 'text-red-freedom' : 'text-navy-deep/60 hover:text-navy-deep'
                  }`}
                >
                  {tab.title}
                  {activeTab === key && (
                    <motion.div
                      layoutId="approachActiveTab"
                      className="absolute bottom-0 left-0 right-0 h-1 bg-red-freedom"
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-2xl md:rounded-2xl p-8 md:p-16 shadow-xl border border-navy-deep/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-red-freedom font-mono text-sm tracking-widest uppercase mb-4 block">
                    {activeContent.title}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-display text-navy-deep mb-6 leading-tight tracking-tight uppercase">
                    {activeContent.subtitle}
                  </h3>
                  <div className="w-16 h-1 bg-gradient-to-r rtl:bg-gradient-to-l from-red-freedom to-transparent mb-8" />
                  <p className="text-base md:text-lg text-navy-deep/70 leading-relaxed mb-6">
                    {activeContent.text}
                  </p>
                  <div className="bg-off-white p-6 md:p-8 rounded-2xl border border-navy-deep/5 mt-4">
                    <h4 className="font-bold text-navy-deep tracking-wider uppercase mb-3 text-xs">{content.ui.thePartnership}</h4>
                    <p className="text-navy-deep/70 leading-relaxed text-sm md:text-base">
                      {activeContent.partnership}
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 flex flex-col justify-center">
                  <div className="space-y-10">
                    {activeContent.points.map((point, index) => (
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        key={index}
                        className="flex gap-6 group"
                      >
                        <div className="flex-shrink-0 w-3 h-3 mt-2 rounded-full bg-red-freedom" />
                        <div>
                          <h4 className="text-lg font-bold text-navy-deep uppercase tracking-wide mb-2 group-hover:text-red-freedom transition-colors">
                            {point.title}
                          </h4>
                          <p className="text-navy-deep/70 leading-relaxed">
                            {point.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-12 border-t border-navy-deep/5">
                <div className="text-center rtl:text-right max-w-3xl mx-auto">
                  <h3 className="text-xl md:text-2xl font-display text-navy-deep uppercase tracking-tight mb-8">
                    {activeContent.ctaMsg}
                  </h3>
                  {activeTab !== 'host-nations' && (
                    <div className="flex justify-center rtl:justify-end">
                      <Link
                        to={activeContent.ctaHref}
                        className="px-7 py-3.5 bg-navy-deep text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-red-freedom transition-all shadow-lg text-center"
                      >
                        {activeContent.ctaText}
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
};
