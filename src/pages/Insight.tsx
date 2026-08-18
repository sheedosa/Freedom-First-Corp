import { motion } from 'motion/react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useContent, useLanguage } from '../i18n';
import { Seo, SITE_URL, SITE_NAME, canonicalFor, breadcrumbLd } from '../seo';
import { ArticleHero } from '../components/ArticleHero';
import { getArticle } from '../content/articles';

/**
 * One route for every insight article, replacing the four near-identical page
 * components this used to need. The slug comes from the URL and maps straight to
 * a markdown file, so publishing an article is a content change only.
 */
export const Insight = () => {
  const { slug = '' } = useParams();
  const content = useContent();
  const { locale } = useLanguage();
  const ip = content.insightsPage;
  const article = getArticle(locale, slug);

  // Unknown slug — send the visitor to the index rather than a blank page.
  if (!article || !article.published || !article.hasBody) return <Navigate to="/insights" replace />;

  const path = `/insights/${article.slug}`;
  const categoryLabel = ip.categories[article.category] ?? article.category;

  const articleLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.seoDescription,
    image: `${SITE_URL}${article.banner || article.image}`,
    articleSection: categoryLabel,
    inLanguage: locale,
    ...(article.date ? { datePublished: article.date } : {}),
    url: canonicalFor(path),
    mainEntityOfPage: canonicalFor(path),
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
        path={path}
        title={article.seoTitle}
        description={article.seoDescription}
        jsonLd={[
          articleLd,
          breadcrumbLd([
            { name: 'Home', path: '/' },
            { name: 'Insights', path: '/insights' },
            { name: article.title, path },
          ]),
        ]}
      />
      <ArticleHero
        image={article.banner}
        backLabel={ip.backToInsights}
        category={categoryLabel}
        title={article.title}
      />

      {/* Article Body */}
      <section className="py-14 md:py-20 bg-white flex-grow">
        <div className="container px-6 mx-auto max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: 0.1 }}
          >
            {/* Body HTML is compiled from markdown committed to this repository —
                authoring it already requires repo write access, so there is no
                lower-trust input being injected here. */}
            <div
              className="article-body"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{ __html: article.html }}
            />
          </motion.div>

          {/* Divider & Back */}
          <div className="mt-10 md:mt-16 pt-8 md:pt-12 border-t border-navy-deep/10">
            <Link
              to="/insights"
              className="inline-flex items-center gap-2 text-navy-deep font-bold text-xs uppercase tracking-widest hover:text-red-freedom transition-colors"
            >
              <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
              {ip.allInsights}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
