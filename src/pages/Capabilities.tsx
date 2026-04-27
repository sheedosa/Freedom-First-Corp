import { motion } from 'motion/react';
import { ChevronRight, Briefcase, Truck, ShieldCheck, Target, Zap, Activity, ArrowUpCircle, Wrench, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';
import { content } from '../content';

const getIcon = (sectionId: string, index: number) => {
  if (sectionId === 'greenfield') {
    if (index === 0) return <Briefcase className="w-6 h-6 text-white" />;
    if (index === 1) return <Truck className="w-6 h-6 text-white" />;
    if (index === 2) return <ShieldCheck className="w-6 h-6 text-white" />;
  }
  if (sectionId === 'optimization') {
    if (index === 0) return <Target className="w-6 h-6 text-white" />;
    if (index === 1) return <Zap className="w-6 h-6 text-white" />;
    if (index === 2) return <Activity className="w-6 h-6 text-white" />;
  }
  if (sectionId === 'recovery') {
    if (index === 0) return <ArrowUpCircle className="w-6 h-6 text-white" />;
    if (index === 1) return <Wrench className="w-6 h-6 text-white" />;
    if (index === 2) return <Layers className="w-6 h-6 text-white" />;
  }
  return <Briefcase className="w-6 h-6 text-white" />;
};

export const CapabilitiesPage = () => {
  const { hero, sections, advantage, cta } = content.capabilitiesPage;

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 md:pt-32 pb-20 md:pb-32 min-h-[70vh] flex items-center bg-navy-deep overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1544062839-4467d022ec10?auto=format&fit=crop&q=80" 
            alt="Oil field landscape" 
            className="w-full h-full object-cover opacity-30 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/80 to-transparent" />
        </div>

        <div className="max-content-width relative z-10 py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-red-freedom" />
              <span className="text-white font-bold text-[10px] tracking-[0.3em] uppercase">Capabilities</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white uppercase leading-[1.05] tracking-tight mb-8">
              {hero.title}
            </h1>
            <p className="text-off-white/80 text-lg md:text-2xl leading-relaxed font-medium max-w-2xl">
              {hero.subtitle}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Sections */}
      {sections.map((section, index) => (
        <section 
          key={section.id} 
          id={section.id}
          className={`py-24 md:py-32 relative overflow-hidden ${index % 2 === 0 ? 'bg-white' : 'bg-off-white'}`}
        >
          <div className="max-content-width">
            <div className={`flex flex-col lg:flex-row gap-16 lg:gap-24 items-start ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div 
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="lg:w-1/2 space-y-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-[1px] bg-red-freedom" />
                    <span className="text-red-freedom font-bold text-[10px] tracking-[0.3em] uppercase">
                      {section.tag}
                    </span>
                  </div>
                  <h2 className="text-navy-deep text-3xl md:text-5xl font-display uppercase tracking-tight leading-[1.1]">
                    {section.header}
                  </h2>
                </div>
                <p className="text-navy-deep/70 text-lg md:text-xl leading-relaxed">
                  {section.message}
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="lg:w-1/2 w-full"
              >
                <div className="grid gap-6">
                  {section.deliverables.map((item, i) => (
                    <div 
                      key={i} 
                      className="group p-8 rounded-[2rem] bg-navy-deep text-white border border-white/5 hover:bg-navy-deep/95 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <div className="flex gap-6">
                        <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center shrink-0 group-hover:bg-red-freedom transition-colors">
                          {getIcon(section.id, i)}
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-white font-display text-lg uppercase tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-white/60 text-sm leading-relaxed">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      {/* Execution Advantage Section */}
      <section className="bg-navy-deep py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80')] opacity-[0.05] grayscale mix-blend-overlay" />
        <div className="max-content-width relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-red-freedom" />
              <span className="text-white font-bold text-[10px] tracking-[0.3em] uppercase">The Advantage</span>
              <div className="w-12 h-[1px] bg-red-freedom" />
            </div>
            <h2 className="text-white text-4xl md:text-6xl font-display leading-[1.1] uppercase tracking-tight">
              {advantage.header}
            </h2>
            <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-medium">
              {advantage.message}
            </p>
            <div className="pt-12">
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-red-freedom/20 blur-3xl rounded-full" />
                <img 
                  src="https://lh3.googleusercontent.com/d/1w9B5vFJRJf6ZtD3drpgj1Kz763cMRUNH" 
                  alt="U.S. Industrial Roots" 
                  className="relative z-10 rounded-[3rem] w-full max-w-2xl mx-auto shadow-2xl grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-white py-24 md:py-32 relative overflow-hidden">
        <div className="max-content-width relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:w-2/3 space-y-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-[1px] bg-red-freedom" />
                <span className="text-red-freedom font-bold text-[10px] tracking-[0.3em] uppercase">Next Steps</span>
              </div>
              <h2 className="text-navy-deep text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] uppercase tracking-tight">
                {cta.header}
              </h2>
              <p className="text-navy-deep/70 text-lg md:text-xl max-w-2xl">
                {cta.message}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="lg:w-1/3 flex flex-col sm:flex-row lg:flex-col gap-4 w-full"
            >
              <Link
                to={cta.primary.href}
                className="group px-8 py-5 rounded-xl bg-red-freedom text-white text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 hover:bg-red-700 hover:shadow-xl hover:shadow-red-freedom/20"
              >
                {cta.primary.label}
                <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to={cta.secondary.href}
                className="group px-8 py-5 rounded-xl border border-navy-deep/10 text-navy-deep text-xs font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-3 hover:bg-navy-deep hover:text-white"
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
