import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useContent } from '../i18n';
import { Seo, breadcrumbLd, webPageLd } from '../seo';

// Non-translatable presentation/routing data, keyed by article id.
const ARTICLE_META: Record<number, { image?: string; href: string }> = {
  1: { image: '/images/article-1-libya.jpg', href: '/insights/rebuilding-libya' },
  2: { image: '/images/article-2-us-africa.jpg', href: '/insights/us-africa-energy-forum' },
  3: { image: '/images/article-3-permian.jpg', href: '/insights/permian-basin-to-libya' },
  4: { image: '/images/article-4-upstream.jpg', href: '/insights/upstream-energy-development' },
};

const CATEGORY_KEYS = ['all', 'emergingMarkets', 'fieldExecution', 'companyUpdates'] as const;
type CategoryKey = typeof CATEGORY_KEYS[number];

export const Insights = () => {
  const content = useContent();
  const ip = content.insightsPage;
  const [activeKey, setActiveKey] = useState<CategoryKey>('all');

  // Filter on a stable key, comparing display strings within the active locale —
  // so the selection survives a language switch.
  const filteredArticles = activeKey === 'all'
    ? ip.articles
    : ip.articles.filter((article) => article.category === ip.categories[activeKey]);

  return (
    <div className="flex-grow flex flex-col bg-off-white">
      {/* Hero Section */}
      <section className="relative min-h-[56vh] flex items-center pt-32 pb-12 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0">
          <Seo
            path="/insights"
            title={content.seo.insights.title}
            description={content.seo.insights.description}
            jsonLd={[
              webPageLd('Insights | Freedom First Global', 'Field perspectives on energy execution, emerging markets and company updates from Freedom First Global.', '/insights'),
              breadcrumbLd([{ name: 'Home', path: '/' }, { name: 'Insights', path: '/insights' }]),
            ]}
          />
          <img
            src="/images/insights-hero.jpg"
            alt="Energy field operations at dusk"
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
                <span className="text-xs font-mono tracking-[0.3em] text-white uppercase">{ip.eyebrow}</span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display text-white uppercase leading-[1.0] tracking-[-0.02em] mb-8">
                {ip.title}
              </h1>
              <p className="text-off-white/80 text-base md:text-lg leading-relaxed max-w-2xl opacity-90">
                {ip.subhead}
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
            {CATEGORY_KEYS.map((key) => (
              <button
                key={key}
                onClick={() => setActiveKey(key)}
                className={`py-6 px-4 md:px-2 text-sm md:text-base font-bold uppercase tracking-wider transition-all relative whitespace-nowrap ${
                  activeKey === key
                    ? 'text-red-freedom'
                    : 'text-navy-deep/60 hover:text-navy-deep'
                }`}
              >
                {ip.categories[key]}
                {activeKey === key && (
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
                const meta = ARTICLE_META[article.id];
                const image = meta?.image;
                const href = meta?.href ?? '#';
                const isLive = href !== '#';

                const card = (
                  <div className={`relative aspect-square rounded-2xl overflow-hidden mb-6 shadow-xl ${isLive ? 'cursor-pointer' : ''}`}>
                    {/* Image */}
                    {image ? (
                      <img
                        src={image}
                        alt={article.title}
                        className={`w-full h-full object-cover transition-transform duration-700 grayscale ${isLive ? 'transform group-hover:scale-105 group-hover:grayscale-0' : ''}`}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-[#134377]/10">
                        <span className="text-navy-deep/40 font-mono text-sm tracking-widest uppercase">{ip.imageComingSoon}</span>
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
                              <span className="md:inline-block md:transition-transform md:duration-300 md:group-hover:-translate-y-full">{ip.readMore}</span>
                              <span className="hidden md:absolute md:top-0 md:start-0 md:inline-block md:transition-transform md:duration-300 md:translate-y-full md:group-hover:translate-y-0 md:text-white">{ip.readMore}</span>
                            </span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300 rtl:-scale-x-100" />
                          </div>
                        ) : (
                          <div className="flex items-center gap-3 text-white/50 font-mono text-sm uppercase tracking-widest font-bold">
                            {ip.comingSoon}
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
                      <Link to={href} className="block w-full h-full">
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
              <p className="text-gray-500 font-mono text-sm uppercase tracking-widest">{ip.noArticles}</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
