import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useContent, useLanguage } from '../i18n';
import { Seo, SITE_URL, SITE_NAME, canonicalFor, breadcrumbLd } from '../seo';

export const InsightLibya = () => {
  const content = useContent();
  const { locale } = useLanguage();
  const lib = content.insightLibya;
  const seo = content.seo.insightLibya;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: lib.title,
    description: seo.description,
    image: `${SITE_URL}/images/article-1-libya.jpg`,
    articleSection: lib.category,
    inLanguage: locale,
    url: canonicalFor('/insights/rebuilding-libya'),
    mainEntityOfPage: canonicalFor('/insights/rebuilding-libya'),
    author: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/images/logo.png` },
    },
  };

  return (
    <div className="flex-grow flex flex-col bg-off-white">
      <Seo
        path="/insights/rebuilding-libya"
        title={seo.title}
        description={seo.description}
        jsonLd={[
          articleLd,
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
            { name: 'Rebuilding Libya', path: '/insights/rebuilding-libya' },
          ]),
        ]}
      />
      {/* Hero */}
      <section className="relative min-h-[50vh] flex items-end pt-32 pb-16 overflow-hidden bg-navy-deep">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: 'radial-gradient(circle, #134377 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="absolute inset-0 bg-gradient-to-b from-navy-deep/60 to-navy-deep" />
        </div>
        <div className="container relative z-10 px-6 mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
          >
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-white/50 hover:text-white text-xs font-mono tracking-widest uppercase mb-10 transition-colors"
            >
              <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
              {lib.backToInsights}
            </Link>
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="inline-block bg-red-freedom text-white text-[10px] font-bold font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm">
                {lib.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-white uppercase leading-[1.0] tracking-[-0.02em]">
              {lib.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Article Body */}
      <section className="py-14 md:py-20 bg-white flex-grow">
        <div className="container px-6 mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-7 text-navy-deep/80 text-lg leading-relaxed">
              {lib.paragraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </motion.div>

          {/* Divider & Back */}
          <div className="mt-10 md:mt-16 pt-8 md:pt-12 border-t border-navy-deep/10">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-navy-deep font-bold text-xs uppercase tracking-widest hover:text-red-freedom transition-colors"
            >
              <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
              {lib.allInsights}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
