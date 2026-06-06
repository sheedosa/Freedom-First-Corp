import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Briefcase, Quote } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useContent } from '../i18n';
import { Seo, breadcrumbLd, webPageLd } from '../seo';

export const About = () => {
  const content = useContent();
  const { hero, content: pageContent, leadership, dataStrip, advisors, ceoMessage, finalCta } = content.about;

  type Person = {
    name: string;
    role: string;
    summary: string;
    expandedBio: string;
    bullets?: string[];
  };

  const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    }
  }, [location.hash]);

  return (
    <div>
      <Seo
        path="/about"
        title={content.seo.about.title}
        description={content.seo.about.description}
        jsonLd={[
          webPageLd('About | Freedom First Global', 'Freedom First Global is a technical production partner built for the field, bringing American energy expertise to emerging markets.', '/about'),
          breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'About', path: '/about' }]),
        ]}
      />
      {/* Hero Section */}
      <section className="relative min-h-[56vh] flex items-center pt-32 pb-12 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0">
          <img src={hero.image} alt="Freedom First Global leadership reviewing operations at an energy facility" className="absolute inset-0 w-full h-full object-cover opacity-50" />
          <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-navy-deep via-navy-deep/70 to-navy-deep/40" />
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
                <span className="text-xs font-mono tracking-[0.3em] text-white uppercase">{content.ui.aboutMissionOrigin}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white uppercase leading-[1.0] tracking-[-0.02em] mb-8">
                {hero.title}
              </h1>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-freedom/30 to-transparent" />
      </section>

      {/* Content Section */}
      <section id="who-we-are" className="bg-white py-14 md:py-24 scroll-mt-24">
        <div className="max-content-width">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="lg:w-1/3"
            >
              <div className="sticky top-32">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2 h-2 bg-red-freedom" />
                  <span className="text-red-freedom font-bold uppercase tracking-[0.3em] text-[10px]">{content.ui.aboutTechnicalPartner}</span>
                </div>
                <h2 className="text-navy-deep text-3xl md:text-4xl font-display uppercase tracking-tight mb-6 leading-tight">
                  {pageContent.title}
                </h2>
                <div className="w-20 h-1 bg-navy-deep/10" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className="lg:w-2/3 space-y-8"
            >
              {pageContent.paragraphs.map((para, i) => (
                <p
                  key={i}
                  className="text-navy-deep text-lg md:text-xl leading-relaxed"
                >
                  {para}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Principles Section */}
      <section className="py-16 md:py-20 text-white relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #002341 0%, #002f55 50%, #001428 100%)' }}>
        <div className="absolute inset-0 opacity-[0.06] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #4a9eff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-freedom/15 blur-[140px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-freedom/5 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-content-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-12 md:mb-16 max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[1px] bg-red-freedom" />
              <span className="text-white font-bold text-[10px] tracking-[0.3em] uppercase">{content.ui.aboutCoreValues}</span>
            </div>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-display leading-[0.95] uppercase tracking-[-0.02em]">
              {content.about.principles.header}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 mb-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-red-freedom" />
                <h3 className="text-white font-display text-xl uppercase tracking-tight">
                  {content.about.principles.vision.title}
                </h3>
              </div>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed font-medium">
                {content.about.principles.vision.text}
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-red-freedom" />
                <h3 className="text-white font-display text-xl uppercase tracking-tight">
                  {content.about.principles.mission.title}
                </h3>
              </div>
              <p className="text-white/90 text-lg md:text-xl leading-relaxed font-medium">
                {content.about.principles.mission.text}
              </p>
            </motion.div>
          </div>

          {/* Principles */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, delay: 0.3, ease: "easeOut" }}
            className="pt-16 border-t border-white/10"
          >
            <div className="flex flex-col gap-12">
              <div className="space-y-4 max-w-2xl">
                <h3 className="text-white font-display text-2xl uppercase tracking-tight">
                  {content.about.principles.principles.title}
                </h3>
                <p className="text-white/90 text-base leading-relaxed">
                  {content.about.principles.principles.intro}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {content.about.principles.principles.items.map((item, i) => (
                  <div key={i} className="group p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/[0.08] hover:border-red-freedom/30 transition-all duration-300">
                    <div className="flex gap-4 mb-4">
                      <div className="w-1.5 h-1.5 bg-red-freedom rounded-full shrink-0 mt-2" />
                      <span className="block font-bold text-white uppercase text-sm tracking-widest leading-relaxed">
                        {item.label}
                      </span>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Leadership Section */}
      <section id="leadership" className="py-14 md:py-24 relative overflow-hidden scroll-mt-24" style={{ background: '#F5F3EF' }}>
        <div className="max-content-width">
          <div className="flex items-center gap-4 mb-12 md:mb-16">
            <div className="w-10 h-[1px] bg-red-freedom" />
            <span className="text-red-freedom font-bold text-[10px] tracking-[0.3em] uppercase">{content.ui.aboutLeadership}</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {leadership.members.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.1, 0.3), ease: "easeOut" }}
                className="group bg-white rounded-2xl p-8 md:p-10 shadow-sm border border-navy-deep/5 hover:shadow-xl hover:shadow-navy-deep/5 transition-[background-color,border-color,box-shadow] duration-500 flex flex-col h-full"
              >
                <div className="flex items-start justify-between gap-6 mb-8 pb-8 border-b border-navy-deep/5">
                  <div className="space-y-1">
                    <h3 className="text-navy-deep text-2xl md:text-3xl font-display uppercase tracking-tight group-hover:text-red-freedom transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-red-freedom font-bold uppercase tracking-widest text-xs">
                      {member.role}
                    </p>
                  </div>
                  <div className="bg-navy-deep/5 p-3 rounded-2xl group-hover:bg-red-freedom/10 transition-colors shrink-0">
                    <Briefcase className="w-5 h-5 text-navy-deep group-hover:text-red-freedom transition-colors" />
                  </div>
                </div>

                <div className="space-y-4 flex-grow">
                  {member.paragraphs.map((para, i) => (
                    <p key={i} className="text-navy-deep/70 text-sm md:text-[15px] leading-relaxed">
                      {para}
                    </p>
                  ))}
                  {'bullets' in member && member.bullets && (
                    <ul className="space-y-3 pt-2">
                      {member.bullets.map((bullet, i) => (
                        <li key={i} className="flex gap-3">
                          <div className="w-1.5 h-1.5 bg-red-freedom rounded-full shrink-0 mt-2" />
                          <p className="text-navy-deep/70 text-sm md:text-[15px] leading-relaxed">
                            {bullet}
                          </p>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Horizontal Data Strip Section */}
      <section className="bg-red-freedom py-12 relative overflow-hidden">
        <div className="max-content-width py-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-6">
            <div className="lg:w-1/3 text-center lg:text-start rtl:text-right">
              <h2 className="text-white text-2xl md:text-3xl font-display uppercase tracking-tight leading-tight">
                {dataStrip.header}
              </h2>
            </div>
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full">
              {dataStrip.stats.map((stat, i) => (
                <div key={i} className="text-center md:text-start space-y-1 border-white/20 md:border-s md:ps-8 first:border-0 first:ps-0">
                  <span className="block text-white/60 text-[10px] font-bold uppercase tracking-[0.2em]">
                    {stat.label}
                  </span>
                  <div className="flex flex-col">
                    <span className="text-white text-3xl md:text-4xl font-display uppercase tracking-tighter">
                      {stat.value}
                    </span>
                    <span className="text-white/80 text-xs font-medium italic">
                      {stat.sublabel}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Advisors Section — HIDDEN per client request. Keep code intact in case it returns. */}
      {false && (
      <section id="advisors" className="py-14 md:py-24 relative overflow-hidden" style={{ background: 'linear-gradient(160deg, #001428 0%, #002341 40%, #002f55 100%)' }}>
        <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #4a9eff 1px, transparent 1px)', backgroundSize: '44px 44px' }} />
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-blue-freedom/10 blur-[160px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[200px] h-[200px] bg-red-freedom/5 blur-[80px] rounded-full pointer-events-none" />
                <div className="max-content-width relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mb-16 md:mb-20 text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-red-freedom" />
              <span className="text-white font-bold text-[10px] tracking-[0.3em] uppercase">{content.ui.counsel}</span>
              <div className="w-12 h-[1px] bg-red-freedom" />
            </div>
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-display leading-[0.95] uppercase tracking-[-0.02em]">
              {advisors.header}
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {advisors.members.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.1, 0.3), ease: "easeOut" }}
                className="group bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10 hover:bg-white/10 transition-[background-color,border-color] duration-500"
              >
                <div className="space-y-6">
                  <div className="space-y-1">
                    <h3 className="text-white text-2xl md:text-3xl font-display uppercase tracking-tight group-hover:text-red-freedom transition-colors">
                      {advisor.name}
                    </h3>
                    <p className="text-red-freedom font-bold uppercase tracking-widest text-xs">
                      {advisor.role}
                    </p>
                  </div>
                  <p className="text-white/70 text-lg leading-relaxed font-medium line-clamp-4">
                    {advisor.summary}
                  </p>
                  <button 
                    onClick={() => setSelectedPerson(advisor)}
                    className="flex items-center gap-2 text-white font-bold uppercase text-[10px] tracking-[0.2em] group/btn pt-4"
                  >
                    {content.ui.readMore}
                    <ChevronRight className="w-4 h-4 text-red-freedom group-hover/btn:translate-x-1 transition-transform rtl:-scale-x-100" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      )}

      {/* CEO Message Section */}
      <section id="ceomessage" className="bg-white py-14 md:py-24 relative overflow-hidden scroll-mt-24">
        <div className="max-content-width">
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="lg:w-2/5 relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden transition-all duration-700 shadow-2xl bg-navy-deep flex items-center justify-center aspect-[4/5] p-12" style={{ background: 'linear-gradient(135deg, #002341 0%, #001828 60%, #002f55 100%)' }}>
                <img
                  src="/images/logo.png"
                  alt="Freedom First Global"
                  className="w-2/3 max-w-[240px] h-auto brightness-0 invert"
                />
              </div>
              <div className="absolute -bottom-6 -end-6 w-32 h-32 bg-red-freedom rounded-full flex items-center justify-center z-20">
                <Quote className="w-12 h-12 text-white opacity-40" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
              className="lg:w-3/5 space-y-8"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-[1px] bg-red-freedom" />
                  <span className="text-red-freedom font-bold uppercase tracking-[0.3em] text-[10px]">{ceoMessage.header}</span>
                </div>
                <h2 className="text-navy-deep text-3xl md:text-4xl font-display uppercase tracking-tight leading-tight">
                  {ceoMessage.subheader}
                </h2>
              </div>
              
              <div className="relative">
                <span className="absolute -start-6 -top-4 text-8xl text-navy-deep opacity-[0.03] font-serif leading-none">“</span>
                <p className="text-navy-deep/80 text-lg md:text-xl leading-relaxed italic relative z-10 whitespace-pre-line">
                  {ceoMessage.quote}
                </p>
              </div>

              <div className="pt-6 border-t border-navy-deep/5 flex items-center justify-between">
                <div>
                  <h4 className="text-navy-deep font-display text-xl uppercase tracking-tight">{ceoMessage.author}</h4>
                  <p className="text-red-freedom font-bold uppercase tracking-widest text-[10px]">{ceoMessage.authorTitle}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Final CTA Section — slim white panel before the navy footer */}
      <section className="bg-white py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6 text-center rtl:text-right">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
          >
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-red-freedom" />
              <span className="text-red-freedom font-mono text-[10px] tracking-[0.3em] uppercase">
                {content.ui.aboutNextStep}
              </span>
              <span className="w-8 h-[1px] bg-red-freedom" />
            </div>

            <h2 className="text-navy-deep text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-[-0.02em] leading-[0.95] mb-5">
              {finalCta.header}
            </h2>

            <p className="text-navy-deep/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto rtl:mr-0">
              {finalCta.message}
            </p>

            <Link
              to={finalCta.ctaLink}
              className="group inline-flex items-center gap-3 bg-red-freedom text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-red-700 transition-all duration-300 hover:shadow-xl hover:shadow-red-freedom/20"
            >
              {finalCta.ctaLabel}
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Person Bio Modal */}
      <AnimatePresence>
        {selectedPerson && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedPerson(null)}
              className="fixed inset-0 bg-navy-deep/90 backdrop-blur-sm z-[100]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-3xl bg-white z-[101] rounded-2xl md:rounded-2xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="relative p-6 md:p-10 border-b border-navy-deep/5 bg-off-white shrink-0">
                <button 
                  onClick={() => setSelectedPerson(null)}
                  className="absolute top-6 end-6 p-2 rounded-full hover:bg-navy-deep/5 transition-colors group"
                >
                  <X className="w-5 h-5 text-navy-deep group-hover:rotate-90 transition-transform duration-300" />
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-[1px] bg-red-freedom" />
                  <span className="text-red-freedom font-bold uppercase tracking-[0.3em] text-[10px]">{content.ui.background}</span>
                </div>
                
                <h2 className="text-2xl md:text-4xl font-display text-navy-deep uppercase tracking-tight mb-1">
                  {selectedPerson.name}
                </h2>
                <p className="text-red-freedom font-bold uppercase tracking-widest text-[10px]">
                  {selectedPerson.role}
                </p>
              </div>

              <div className="flex-1 overflow-y-auto p-6 md:p-10">
                <div className="prose prose-navy max-w-none">
                  <div className="space-y-6">
                    <p className="text-navy-deep font-medium text-lg italic leading-relaxed">
                      "{selectedPerson.summary}"
                    </p>
                    
                    {selectedPerson.bullets && selectedPerson.bullets.length > 0 && (
                      <ul className="space-y-3">
                        {selectedPerson.bullets.map((bullet: string, i: number) => (
                          <li key={i} className="flex gap-3">
                            <div className="w-1.5 h-1.5 bg-red-freedom rounded-full shrink-0 mt-2" />
                            <p className="text-navy-deep/70 text-sm leading-relaxed">
                              {bullet}
                            </p>
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="pt-6 border-t border-navy-deep/5">
                      <p className="text-navy-deep/80 text-base md:text-lg leading-relaxed whitespace-pre-wrap font-body">
                        {selectedPerson.expandedBio}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-8 border-t border-navy-deep/5 bg-off-white text-end shrink-0">
                <button 
                  onClick={() => setSelectedPerson(null)}
                  className="text-navy-deep font-bold uppercase text-xs tracking-widest hover:text-red-freedom transition-colors"
                >
                  {content.ui.close}
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

