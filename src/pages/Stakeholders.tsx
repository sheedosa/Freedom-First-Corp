import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation } from 'react-router-dom';

export const Stakeholders = () => {
  const [activeTab, setActiveTab] = useState<'operators' | 'host-nations' | 'strategic-partners'>('operators');
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const hash = location.hash.replace('#', '');
      if (['operators', 'host-nations', 'strategic-partners'].includes(hash)) {
        setActiveTab(hash as any);
        window.scrollTo({ top: 300, behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  const stakeholders = {
    'operators': {
      id: 'operators',
      title: 'Operators',
      subtitle: 'Asset Owners and Producers',
      text: 'We work with operators managing mature, legacy, or stalled assets where production is being held back by technical bottlenecks, execution challenges, or commercial constraints.',
      partnership: 'Freedom First brings the engineering, project leadership, and execution model needed to help move difficult projects forward. Where standard contractor models fall short, we step in to break deadlocks, improve field economics, and raise output.',
      points: [
        {
          title: 'Production-Driven Alignment',
          text: 'We structure our role around one objective: raising output and improving field economics.'
        },
        {
          title: 'Execution Where It Matters',
          text: 'We take on the operational, logistical, and subsurface challenges that keep production stuck.'
        },
        {
          title: 'Performance-Driven Model',
          text: 'We operate with a model designed to reward production progress, not just activity.'
        }
      ],
      ctaMsg: 'Bring Proven Execution to Your Toughest Fields.',
      cta1Text: 'Discuss Your Asset',
      cta1Href: '/#contact',
      cta2Text: 'See Our Capabilities',
      cta2Href: '/capabilities'
    },
    'host-nations': {
      id: 'host-nations',
      title: 'Host Nations',
      subtitle: 'Sovereigns and National Energy Planners',
      text: 'We work with governments and national energy institutions seeking to increase domestic production, strengthen local capability, and develop energy resources in line with national priorities.',
      partnership: 'Freedom First brings proven U.S. engineering, disciplined execution, and a partnership model built around long-term asset value. We work side by side with host nations to raise output, build stronger operating capability, and leave behind systems the local workforce can sustain long term.',
      points: [
        {
          title: 'Aligned with National Priorities',
          text: 'We structure projects to support production growth, long-term asset value, and broader national goals.'
        },
        {
          title: 'Local Workforce Integration',
          text: 'We work with and develop local talent as part of execution, embedding local teams into the systems and standards established.'
        },
        {
          title: 'Strict Standards in the Field',
          text: 'We apply strong HSE and operational standards to protect people, infrastructure, and continuity of operations.'
        }
      ],
      ctaMsg: 'Deliver American Engineering Directly to Your Sovereign Assets.',
      cta1Text: 'Meet the Executive Team',
      cta1Href: '/about#leadership',
      cta2Text: 'Engage Our Leadership',
      cta2Href: '/approach'
    },
    'strategic-partners': {
      id: 'strategic-partners',
      title: 'Strategic Partners',
      subtitle: 'In-Country Support Partners',
      text: 'We work with in-country service companies, supply-chain partners, and infrastructure providers who bring critical local access, operating knowledge, and last-mile execution capability.',
      partnership: 'We lead with specialized U.S. engineering, project management and direct capital investment and integrate that with trusted local footprints to keep work moving on the ground. We believe the strongest results come from combining technical depth with local capability, not working around it.',
      points: [
        {
          title: 'Field-Level Support',
          text: 'We work through local infrastructure, supply chains, and operating relationships to reduce delays and maintain momentum.'
        },
        {
          title: 'Shared Standards',
          text: 'We partner with local entities willing to operate under our compliance standards, helping to elevate operations to a tier-one level.'
        },
        {
          title: 'Long-Term Value',
          text: 'We build partnerships designed to create repeatable work, stronger execution, and sustained value for both sides.'
        }
      ],
      ctaMsg: 'See How Your Footprint Can Support Our Field Operations.',
      cta1Text: 'See How We Work',
      cta1Href: '/approach',
      cta2Text: 'Contact Our Team',
      cta2Href: '/#contact'
    }
  };

  const activeContent = stakeholders[activeTab];

  return (
    <div className="flex-grow flex flex-col bg-off-white">
      {/* Hero Section */}
      <section className="relative min-h-[56vh] flex items-center pt-32 pb-12 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy-deep/80 to-navy-deep opacity-90" />
          <div className="absolute inset-0 bg-[url('/images/hero-bg.jpg')] bg-cover bg-center mix-blend-overlay opacity-20" />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              <div className="inline-flex justify-center items-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-red-freedom" />
                <span className="text-xs font-mono tracking-[0.3em] text-white uppercase">
                  Stakeholders
                </span>
                <div className="w-10 h-[1px] bg-red-freedom" />
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white uppercase leading-[1.0] tracking-[-0.02em] mb-8">
                Partnerships Built to Move <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.4)]">Production Forward</span>.
              </h1>
              
              <p className="text-off-white/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
                Freedom First works with operators, host nations, and strategic partners to move hydrocarbon projects forward in hard environments through proven U.S. engineering, disciplined execution, and partnership models built for long-term value.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tabs Navigation */}
      <section className="bg-white border-b border-gray-200 sticky top-[72px] md:top-[88px] z-40 shadow-sm">
        <div className="container px-6 mx-auto">
          <div className="flex flex-nowrap justify-start overflow-x-auto gap-4 md:gap-12 hide-scrollbar px-2 md:px-0 md:justify-center">
            {Object.values(stakeholders).map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-3 md:px-2 text-sm md:text-base font-bold uppercase tracking-wider transition-all relative whitespace-nowrap ${
                  activeTab === tab.id 
                    ? 'text-red-freedom' 
                    : 'text-navy-deep/60 hover:text-navy-deep'
                }`}
              >
                {tab.title}
                {activeTab === tab.id && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-red-freedom"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-14 md:py-20 bg-off-white relative flex-grow">
        <div className="container px-6 mx-auto max-w-6xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl p-6 md:p-16 shadow-xl border border-gray-100"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-20">
                
                {/* Left Column - Intro */}
                <div className="lg:col-span-5 flex flex-col justify-center">
                  <span className="text-red-freedom font-mono text-sm tracking-widest uppercase mb-4 block">
                    {activeContent.title}
                  </span>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-display text-navy-deep mb-6 leading-[0.95] tracking-[-0.02em] uppercase">
                    {activeContent.subtitle}
                  </h2>
                  <div className="w-16 h-1 bg-gradient-to-r from-red-freedom to-transparent mb-8" />
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    {activeContent.text}
                  </p>
                  
                  <div className="bg-blue-50/50 p-6 md:p-8 rounded-2xl border border-blue-100/50 mt-4">
                    <h3 className="font-bold text-navy-deep tracking-wider uppercase mb-3 text-sm">The Partnership</h3>
                    <p className="text-gray-700 leading-relaxed">
                      {activeContent.partnership}
                    </p>
                  </div>
                </div>

                {/* Right Column - Points */}
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
                          <p className="text-gray-600 leading-relaxed">
                            {point.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Tab Specific CTA */}
              <div className="mt-10 md:mt-20 pt-10 md:pt-16 border-t border-gray-100">
                <div className="text-center max-w-3xl mx-auto">
                  <h3 className="text-2xl font-medium text-navy-deep uppercase tracking-tight mb-8">
                    {activeContent.ctaMsg}
                  </h3>
                  <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                      href={activeContent.cta1Href} 
                      className="px-7 py-3.5 bg-navy-deep text-white text-xs font-bold uppercase tracking-widest rounded-full hover:bg-red-freedom transition-all shadow-lg hover:shadow-red-freedom/30 text-center"
                    >
                      {activeContent.cta1Text}
                    </a>
                    <a 
                      href={activeContent.cta2Href} 
                      className="px-7 py-3.5 bg-white border border-gray-200 text-navy-deep text-xs font-bold uppercase tracking-widest rounded-full hover:bg-gray-50 transition-all text-center"
                    >
                      {activeContent.cta2Text}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Final Universal CTA Section */}
      <section className="py-14 md:py-20 text-white text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #001428 0%, #002341 45%, #002f55 100%)' }}>
        {/* Decorative Glows */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-freedom/10 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="container px-6 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display mb-6 uppercase tracking-[-0.02em] leading-[0.95]">
              Move Production Forward with Freedom First
            </h2>
            <p className="text-lg md:text-xl text-blue-50/70 mb-12 leading-relaxed">
              Whether you are operating the asset, shaping national priorities, or supporting delivery on the ground, Freedom First brings American-grade engineering directly to the wellhead and moves difficult projects forward in the toughest conditions.
            </p>
            
            <a 
              href="/#contact" 
              className="inline-block px-7 py-3.5 bg-red-freedom text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-red-700 transition-all hover:shadow-2xl hover:shadow-red-freedom/30"
            >
              Talk to Our Team
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
