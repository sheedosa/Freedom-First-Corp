import { Suspense, lazy } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { Hero } from '../components/Hero';
import { CapabilitiesSection } from '../components/Capabilities';
import { Advantages } from '../components/Advantages';
import { Partnerships } from '../components/Partnerships';
import { useContent } from '../i18n';
import { Seo } from '../seo';

// ServiceMap pulls in react-simple-maps + d3-geo + countries-110m JSON (~210 KB
// across chunks). Lazy-load it so the rest of the homepage renders first; map
// hydrates as the user scrolls toward it.
const ServiceMap = lazy(() =>
  import('../components/ServiceMap').then((m) => ({ default: m.ServiceMap }))
);

const ServiceMapFallback = () => (
  <div
    aria-hidden
    className="w-full min-h-[60vh] md:min-h-[70vh]"
    style={{ background: 'linear-gradient(135deg, #001428 0%, #002341 45%, #002f55 100%)' }}
  />
);

const HomeCta = () => {
  const content = useContent();
  const { eyebrow, header, message, ctaLabel, ctaLink } = content.homeCta;
  return (
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
              {eyebrow}
            </span>
            <span className="w-8 h-[1px] bg-red-freedom" />
          </div>

          <h2 className="text-navy-deep text-3xl sm:text-4xl md:text-5xl font-display uppercase tracking-[-0.02em] leading-[0.95] mb-5">
            {header}
          </h2>

          <p className="text-navy-deep/70 text-base md:text-lg leading-relaxed mb-8 max-w-2xl mx-auto rtl:mr-0">
            {message}
          </p>

          <Link
            to={ctaLink}
            className="group inline-flex items-center gap-3 bg-red-freedom text-white px-8 py-4 text-xs font-bold uppercase tracking-[0.2em] rounded-full hover:bg-red-700 transition-all duration-300 hover:shadow-xl hover:shadow-red-freedom/20"
          >
            {ctaLabel}
            <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1 rtl:-scale-x-100" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export const Home = () => {
  const content = useContent();
  return (
    <>
      <Seo noSuffix path="/" title={content.seo.home.title} description={content.seo.home.description} />
      <Hero />
      <CapabilitiesSection />
      <Suspense fallback={<ServiceMapFallback />}>
        <ServiceMap />
      </Suspense>
      <Advantages />
      <Partnerships />
      <HomeCta />
    </>
  );
};
