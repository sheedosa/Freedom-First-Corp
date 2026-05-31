import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Category = 'All' | 'Emerging Markets' | 'Field Execution' | 'Company Updates';

export const Insights = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Emerging Markets', 'Field Execution', 'Company Updates'];

  const articles = [
    {
      id: 1,
      title: 'Rebuilding Libya Will Depend on Execution, Not Statements',
      category: 'Emerging Markets',
      image: '/images/article-1-libya.jpg',
      href: '/insights/rebuilding-libya',
    },
    {
      id: 2,
      title: 'Freedom First CEO Joins Panel at the U.S. Africa Energy Forum',
      category: 'Company Updates',
      image: '/images/article-2-us-africa.jpg',
      href: '#', // TBD — body content pending from client
    },
    {
      id: 3,
      title: 'The Transferrable Lessons and Methods Learned in the Permian Basin',
      category: 'Field Execution',
      image: '/images/article-3-permian.jpg',
      href: '#', // TBD — body content pending from client
    }
  ];

  const filteredArticles = activeCategory === 'All' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  return (
    <div className="flex-grow flex flex-col bg-off-white">
      {/* Hero Section */}
      <section className="relative min-h-[56vh] flex items-center pt-32 pb-12 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/insights-hero.jpg"
            alt=""
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
                <span className="text-xs font-mono tracking-[0.3em] text-white uppercase">Insights</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white uppercase leading-[1.0] tracking-[-0.02em] mb-8">
                Field Perspectives on the Work, the Markets and What It Takes To Deliver
              </h1>
              <p className="text-off-white/80 text-base md:text-lg leading-relaxed max-w-2xl opacity-90">
                Freedom First shares insights from the field on moving hydrocarbon projects forward in demanding environments. From field execution to market and company updates, our perspective is shaped by the work itself.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-red-freedom/30 to-transparent" />
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
      <section className="py-20 bg-off-white relative flex-grow">
        <div className="container px-6 mx-auto max-w-7xl">
          <motion.div 
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredArticles.map((article) => {
                const isLive = article.href !== '#';

                const card = (
                  <div className={`relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-xl ${isLive ? 'cursor-pointer' : ''}`}>
                    {/* Image */}
                    {article.image ? (
                      <img
                        src={article.image}
                        alt={article.title}
                        className={`w-full h-full object-cover transition-transform duration-700 grayscale ${isLive ? 'transform group-hover:scale-105 group-hover:grayscale-0' : ''}`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#134377]/10">
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
                        <h3 className={`text-2xl font-sans font-medium text-white mb-6 uppercase tracking-wide leading-snug transition-colors ${isLive ? 'group-hover:text-blue-50' : ''}`}>
                          {article.title}
                        </h3>
                        {isLive ? (
                          <div className="flex items-center gap-3 text-red-freedom font-mono text-sm uppercase tracking-widest font-bold">
                            <span className="md:relative md:overflow-hidden">
                              <span className="md:inline-block md:transition-transform md:duration-300 md:group-hover:-translate-y-full">Read More</span>
                              <span className="hidden md:absolute md:top-0 md:left-0 md:inline-block md:transition-transform md:duration-300 md:translate-y-full md:group-hover:translate-y-0 md:text-white">Read More</span>
                            </span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 text-white/50 font-mono text-sm uppercase tracking-widest font-bold">
                            Coming Soon
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );

                return (
                  <motion.div
                    key={article.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className={`group ${isLive ? '' : 'opacity-80'}`}
                  >
                    {isLive ? (
                      <Link to={article.href} className="block w-full h-full">
                        {card}
                      </Link>
                    ) : (
                      <div className="block w-full h-full" aria-disabled="true">
                        {card}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </motion.div>
          
          {filteredArticles.length === 0 && (
            <div className="text-center py-20">
              <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">No articles found for this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
