import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';

type Category = 'All' | 'Emerging Markets' | 'Field Execution' | 'Company Updates';

export const Insights = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Emerging Markets', 'Field Execution', 'Company Updates'];

  const articles = [
    {
      id: 1,
      title: 'Breaking Deadlocks in Mature Fields',
      category: 'Field Execution',
      image: '',
      href: '#', // Placeholder
    },
    {
      id: 2,
      title: 'Navigating New Opportunities in North Africa',
      category: 'Emerging Markets',
      image: '',
      href: '#', // Placeholder
    },
    {
      id: 3,
      title: 'Expanding Our Geographic Footprint',
      category: 'Company Updates',
      image: '',
      href: '#', // Placeholder
    }
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="flex-grow flex flex-col bg-off-white">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-16 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/90 via-navy-deep/80 to-navy-deep opacity-90" />
          
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-freedom/10 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-red-freedom/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/4" />

          <div 
            className="absolute inset-0 opacity-20"
            style={{ 
              backgroundImage: 'radial-gradient(circle, #134377 1px, transparent 1px)', 
              backgroundSize: '40px 40px' 
            }} 
          />
        </div>

        <div className="container relative z-10 px-6 mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center gap-3 mb-6">
                <div className="w-10 h-[1px] bg-red-freedom" />
                <span className="text-xs font-mono tracking-[0.3em] text-red-freedom uppercase">
                  Insights
                </span>
                <div className="w-10 h-[1px] bg-red-freedom" />
              </div>
              
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-display text-white uppercase leading-[1.05] tracking-tight mb-8">
                Field Perspectives on the Work, the Markets and What It Takes To Deliver
              </h1>
              
              <p className="text-off-white/80 text-lg md:text-2xl leading-relaxed font-medium max-w-3xl mx-auto">
                Freedom First shares insights from the field on moving hydrocarbon projects forward in demanding environments. From field execution to market developments and company updates, our perspective is shaped by the work itself.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="bg-white border-b border-gray-200 sticky top-[72px] md:top-[88px] z-40 shadow-sm">
        <div className="container px-6 mx-auto">
          <div className="flex flex-wrap justify-center overflow-x-auto gap-4 md:gap-12 hide-scrollbar">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`py-6 px-4 md:px-2 text-sm md:text-base font-bold uppercase tracking-wider transition-all relative whitespace-nowrap ${
                  activeCategory === category 
                    ? 'text-red-freedom' 
                    : 'text-navy-deep/60 hover:text-navy-deep'
                }`}
              >
                {category}
                {activeCategory === category && (
                  <motion.div 
                    layoutId="activeFilter"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-red-freedom"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-24 bg-off-white relative flex-grow">
        <div className="container px-6 mx-auto max-w-7xl">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => (
                <motion.div
                  key={article.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="group"
                >
                  <a href={article.href} className="block w-full h-full">
                    <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-xl relative cursor-pointer">
                      {/* Image */}
                      {article.image ? (
                        <img 
                          src={article.image} 
                          alt={article.title}
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-[#134377]/10 transform group-hover:scale-105 transition-transform duration-700">
                          <span className="text-navy-deep/40 font-mono text-sm tracking-widest uppercase">Image coming soon</span>
                        </div>
                      )}
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        {/* Tag */}
                        <div className="self-start">
                          <span className="inline-block bg-red-freedom text-white text-[10px] font-bold font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm">
                            {article.category}
                          </span>
                        </div>
                        
                        {/* Title & Link */}
                        <div>
                          <h3 className="text-2xl font-sans font-medium text-white mb-6 uppercase tracking-wide leading-snug group-hover:text-blue-50 transition-colors">
                            {article.title}
                          </h3>
                          <div className="flex items-center gap-3 text-red-freedom font-mono text-sm uppercase tracking-widest font-bold">
                            <span className="relative overflow-hidden">
                              <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">Read More</span>
                              <span className="absolute top-0 left-0 inline-block transition-transform duration-300 translate-y-full group-hover:translate-y-0 text-white">Read More</span>
                            </span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">No articles found for this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-navy-deep text-white text-center relative overflow-hidden">
        {/* Decorative Glows */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-freedom/10 blur-[120px] rounded-full pointer-events-none" />
        
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl md:text-5xl font-sans font-medium mb-8 uppercase tracking-tight leading-tight">
              For Projects That Demand More Than a <span className="text-blue-400">Standard Approach</span>.
            </h2>
            <p className="text-lg md:text-xl text-blue-50/70 mb-12 leading-relaxed">
              Freedom First brings American-grade engineering directly to the asset, helping move difficult projects forward in demanding environments.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="/approach" 
                className="w-full sm:w-auto px-12 py-5 bg-white text-navy-deep text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-blue-50 transition-all hover:shadow-xl"
              >
                Our Approach
              </a>
              <a 
                href="/#contact" 
                className="w-full sm:w-auto px-12 py-5 bg-red-freedom text-white text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-red-700 transition-all hover:shadow-2xl hover:shadow-red-freedom/30"
              >
                Talk to Our Team
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};
