import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

type ArticleHeroProps = {
  /** Wide banner image (≈1500×450) shown behind the title. */
  image: string;
  /** Localized "Back to Insights" label. */
  backLabel: string;
  /** Localized category tag. */
  category: string;
  /** Article title rendered across the banner. */
  title: string;
};

/**
 * Insight-article hero: a full-bleed banner image with the back link, category
 * tag and title stacked over a darkening gradient. The back link and category
 * tag are block-level (own lines) so they never collide — the previous inline
 * markup let them share a line.
 */
export const ArticleHero = ({ image, backLabel, category, title }: ArticleHeroProps) => (
  <section className="relative min-h-[46vh] md:min-h-[56vh] flex items-end pt-32 pb-12 md:pb-16 overflow-hidden bg-navy-deep">
    {/* Banner image + legibility overlays (strongest at the bottom, where the text sits) */}
    <div className="absolute inset-0 z-0">
      <img src={image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/85 to-navy-deep/30" />
      <div className="absolute inset-0 bg-navy-deep/10" />
    </div>

    <div className="container relative z-10 px-6 mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <Link
          to="/insights"
          className="flex w-fit items-center gap-2 text-white/70 hover:text-white text-xs font-mono tracking-widest uppercase mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
          {backLabel}
        </Link>
        <div className="mb-5">
          <span className="inline-block bg-red-freedom text-white text-[10px] font-bold font-mono tracking-widest uppercase px-3 py-1.5 rounded-sm">
            {category}
          </span>
        </div>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-display text-white uppercase leading-[1.05] tracking-[-0.02em] [text-shadow:0_2px_24px_rgba(0,0,0,0.45)]">
          {title}
        </h1>
      </motion.div>
    </div>
  </section>
);
