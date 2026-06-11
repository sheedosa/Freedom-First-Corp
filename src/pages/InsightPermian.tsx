import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useContent, useLanguage } from '../i18n';
import { Seo, SITE_URL, SITE_NAME, canonicalFor, breadcrumbLd } from '../seo';
import { ArticleHero } from '../components/ArticleHero';

export const InsightPermian = () => {
  const content = useContent();
  const { locale } = useLanguage();
  const art = content.insightPermian;
  const seo = content.seo.insightPermian;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: art.title,
    description: seo.description,
    image: `${SITE_URL}/images/article-3-permian.jpg`,
    articleSection: art.category,
    inLanguage: locale,
    url: canonicalFor('/insights/permian-basin-to-libya'),
    mainEntityOfPage: canonicalFor('/insights/permian-basin-to-libya'),
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
        path="/insights/permian-basin-to-libya"
        title={seo.title}
        description={seo.description}
        jsonLd={[
          articleLd,
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
            { name: art.title, path: '/insights/permian-basin-to-libya' },
          ]),
        ]}
      />
      <ArticleHero
        image="/images/article-3-permian-banner.jpg"
        backLabel={art.backToInsights}
        category={art.category}
        title={art.title}
      />

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
              {art.paragraphs.map((para, i) => (
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
              {art.allInsights}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
