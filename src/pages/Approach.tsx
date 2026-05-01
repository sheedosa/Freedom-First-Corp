import { motion } from 'motion/react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { content } from '../content';

export const Approach = () => {
  const { hero } = content.approachPage;
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);

  return (
    <div className="flex-grow">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-40 pb-16 overflow-hidden bg-navy-deep">
        {/* Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy-deep/80 to-navy-deep opacity-90" />
          
          {/* Brand Blue Blobs */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-freedom/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-freedom/10 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

          <div 
            className="absolute inset-0 opacity-20"
            style={{ 
              backgroundImage: 'radial-gradient(circle, #134377 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }} 
          />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 mb-3">
                <div className="w-10 h-[1px] bg-red-freedom" />
                <span className="text-xs font-mono tracking-[0.3em] text-red-freedom uppercase">
                  Our Approach
                </span>
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white uppercase leading-[1.05] tracking-tight mb-8">
                Delivering <span className="text-blue-400 drop-shadow-[0_0_25px_rgba(96,165,250,0.4)]">Output in Barrels</span>, Capability for the People and Value for the Nation.
              </h1>
              
              <p className="text-off-white/80 text-lg md:text-2xl leading-relaxed font-medium max-w-2xl">
                {hero.subtitle}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-freedom/30 to-transparent" />
      </section>

      {/* Detailed Approach Sections */}
      {[
        { 
          id: 'direct-to-asset', 
          title: 'Built to Deliver in Demanding Environments without Delay', 
          eyebrow: 'Direct-to-Asset Execution',
          desc: "Reaching the world's most remote energy assets requires a mastery of complex international logistics. Freedom First is built to move specialized U.S. engineering teams, heavy equipment, and advanced technology in and out of the hardest-to-reach locations. By controlling the logistics straight to the wellhead, we are able to move with the speed and agility required to solve bottlenecks in real time, apply proven methodologies, and get stalled production moving again without delay.",
          image: 'https://images.unsplash.com/photo-1544256718-3bcf237f3974?q=80&w=2000&auto=format&fit=crop',
          subHeader: 'Our Execution Edge',
          points: [
            { 
              title: 'Agile Deployment', 
              text: 'Mobilizing specialized engineering talent and supply chains straight to the field, eliminating middleman delays.' 
            },
            { 
              title: 'Field-Tested Solutions', 
              text: 'Applying tried-and-tested methodologies to overcome the most complex surface and subsurface challenges.' 
            },
            { 
              title: 'Uninterrupted Momentum', 
              text: 'Leading with seasoned management to ensure work progresses on schedule and on budget to accelerate production timelines.' 
            }
          ]
        },
        {
          id: 'hse-capability',
          title: 'Structured for Safe Execution and Sustained Knowledge Transfer',
          eyebrow: 'HSE & Local Capability',
          desc: 'True sustainability requires protecting the people, the asset, and the environment. Freedom First brings U.S. Health, Safety, and Environment (HSE) standards and a strict culture of compliance to every site we operate. Simultaneously, we structure every project as a platform for knowledge transfer. We work side-by-side with local teams to build the technical capability required so the host nation can independently operate and sustain the assets long after the initial intervention.',
          subHeader: 'Our Operational Standard',
          points: [
            { 
              title: 'Uncompromising Safety (HSE)', 
              text: 'Implementing operational protocols from day one to protect personnel, mitigate risk and ensure uninterrupted, safe field operations.' 
            },
            { 
              title: 'Asset Protection', 
              text: 'Managing legacy infrastructure with strict technical integrity to ensure interventions maximize production without jeopardizing reservoir health.' 
            },
            { 
              title: 'Hands-On Knowledge Transfer', 
              text: 'Upskilling the local workforce through structured training, embedding them into established systems for long-term operational continuity.' 
            }
          ]
        },
        {
          id: 'commercial-alignment',
          title: 'Anchored by Shared Risk and Production-Driven Reward',
          eyebrow: 'Commercial Alignment',
          desc: 'We engage as true production partners, fully prepared to back our operational expertise with direct capital investment. Rather than relying on traditional service models that capitalize on existing output, we bring the flexibility to share the risk. Confident in our execution, we are willing to invest our own capital and earn solely on the incremental barrels we produce. This directly aligns our returns with your national goals: increasing output, controlling costs and securing long-term asset value.',
          subHeader: 'Our Ideal Structure',
          points: [
            { 
              title: 'Performance-Driven Returns', 
              text: 'Backing our operational confidence with commercial agreements tied exclusively to the asset’s incremental production growth.' 
            },
            { 
              title: 'Direct Local Investment', 
              text: 'Bringing private capital directly to neglected or stalled fields to unlock their energy potential without adding to national debt.' 
            },
            { 
              title: 'National Goal Alignment', 
              text: 'Structuring every project to directly support the host country\'s broader objectives of economic self-sufficiency and stability.' 
            }
          ]
        }
      ].map((section: any, index) => {
        const isDark = index === 1;
        const isPointsFocus = section.id === 'direct-to-asset' || section.id === 'hse-capability' || section.id === 'commercial-alignment';
        
        return (
          <section 
            key={section.id} 
            id={section.id} 
            className={`relative py-32 overflow-hidden ${isDark ? 'bg-navy-deep text-white' : index % 2 === 1 ? 'bg-off-white' : 'bg-white'}`}
          >
            {isDark && (
              <div 
                className="absolute inset-0 opacity-10"
                style={{ 
                  backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
                  backgroundSize: '40px 40px' 
                }} 
              />
            )}
            <div className="container relative z-10 px-6 mx-auto">
              <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse items-start' : 'lg:flex-row items-start'} gap-16 lg:gap-24`}>
                <div className="w-full lg:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-mono font-bold text-red-freedom tracking-[0.3em] uppercase py-1 px-3 border border-red-freedom/30 rounded-sm bg-red-freedom/5">
                        {section.eyebrow}
                      </span>
                    </div>
                    <h2 className={`text-3xl md:text-4xl lg:text-5xl font-sans font-medium mb-8 uppercase tracking-tight leading-tight ${isDark ? 'text-white' : 'text-navy-deep'}`}>
                      {section.title}
                    </h2>
                    <p className={`leading-relaxed mb-10 text-lg ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
                                  <span className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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
                    transition={{ duration: 0.8 }}
                    className="relative"
                  >
                    {isPointsFocus ? (
                      <div className={`border p-8 md:p-12 rounded-3xl ${isDark ? 'bg-white/5 border-white/10' : 'bg-off-white/50 border-gray-100'}`}>
                        {section.subHeader && (
                          <h3 className={`text-xl font-sans font-medium mb-12 uppercase tracking-tight flex items-center gap-4 ${isDark ? 'text-white' : 'text-navy-deep'}`}>
                            <div className="w-8 h-[1px] bg-red-freedom" />
                            {section.subHeader}
                          </h3>
                        )}
                        <ul className="space-y-10">
                          {section.points.map((point: any, i: number) => (
                            <li key={i} className="flex items-start gap-6 group">
                              <div className={`w-10 h-10 rounded-full border flex items-center justify-center flex-shrink-0 group-hover:bg-red-freedom group-hover:text-white transition-all ${isDark ? 'border-white/20 text-gray-400' : 'border-red-freedom/20 text-navy-deep'}`}>
                                <span className="font-mono text-xs">0{i + 1}</span>
                              </div>
                              <div className="flex flex-col gap-2">
                                <span className={`font-mono text-sm font-bold tracking-wider uppercase ${isDark ? 'text-white' : 'text-navy-deep'}`}>
                                  {point.title}
                                </span>
                                <span className={`text-sm leading-relaxed ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
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

      {/* Final CTA Section */}
      <section className="py-24 bg-navy-deep text-white text-center relative overflow-hidden">
        {/* Decorative Glows */}
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-freedom/10 blur-[100px] rounded-full translate-x-1/4 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-red-freedom/5 blur-[80px] rounded-full -translate-x-1/4 translate-y-1/2" />
        
        <div 
          className="absolute inset-0 opacity-10"
          style={{ 
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', 
            backgroundSize: '30px 30px' 
          }} 
        />
        
        <div className="container px-6 mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-sans font-medium mb-8 uppercase tracking-tight leading-tight">
              Execute with a Fully Aligned <span className="text-blue-400">Production Partner</span>.
            </h2>
            <p className="text-lg md:text-xl text-blue-50/70 mb-12 leading-relaxed">
              Bring American field execution directly to your asset. Connect with our team to build a partnership engineered for output.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/#partnerships" 
                className="w-full sm:w-auto px-12 py-5 bg-white text-navy-deep text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-blue-50 transition-all hover:shadow-xl"
              >
                Who We Work With
              </a>
              <a 
                href="/#contact" 
                className="w-full sm:w-auto px-12 py-5 bg-red-freedom text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-red-700 transition-all hover:shadow-2xl hover:shadow-red-freedom/30"
              >
                Contact Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
