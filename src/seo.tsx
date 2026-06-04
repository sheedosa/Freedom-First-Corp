/**
 * SEO helper — uses React 19's native document-metadata hoisting.
 * Any <title>/<meta>/<link>/<script> rendered here is hoisted into <head>.
 *
 * ── CHANGE THE DOMAIN IN ONE PLACE ──────────────────────────────────────────
 * If the production domain differs from below, update SITE_URL here AND the
 * three static files that can't read JS: public/robots.txt, public/sitemap.xml,
 * and index.html (og:url / canonical fallback). They all use the same domain.
 */
export const SITE_URL = 'https://freedomfirstglobal.com';
export const SITE_NAME = 'Freedom First Global';

type SeoProps = {
  /** Page-specific title. Suffixed with " | Freedom First Global" unless noSuffix. */
  title: string;
  /** Meta description (~150–160 chars ideal). */
  description: string;
  /** Route path, e.g. "/about". Used for canonical + og:url. */
  path: string;
  /** Optional JSON-LD structured data (object or array of objects). */
  jsonLd?: object | object[];
  /** Set true to use `title` verbatim (no brand suffix) — used on the home page. */
  noSuffix?: boolean;
  /** Set true to keep the page out of search indexes (orphan/duplicate pages). */
  noindex?: boolean;
};

export const canonicalFor = (path: string) =>
  SITE_URL + (path === '/' ? '' : path.replace(/\/$/, ''));

export const Seo = ({ title, description, path, jsonLd, noSuffix, noindex }: SeoProps) => {
  const fullTitle = noSuffix ? title : `${title} | ${SITE_NAME}`;
  const url = canonicalFor(path);
  const blocks = jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [];

  return (
    <>
      {/* Google renders client-side JS and reads these per-page tags.
          OG/Twitter stay static (homepage) in index.html for no-JS social
          crawlers — rendering them here would only duplicate tags that OG
          parsers resolve to the first (static) one anyway. */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, follow" />}
      <link rel="canonical" href={url} />
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
};

/* ── Reusable JSON-LD builders ──────────────────────────────────────────── */

export const breadcrumbLd = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: canonicalFor(it.path),
  })),
});

export const webPageLd = (name: string, description: string, path: string) => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name,
  description,
  url: canonicalFor(path),
  isPartOf: { '@type': 'WebSite', name: SITE_NAME, url: SITE_URL },
  publisher: { '@type': 'Organization', name: SITE_NAME, url: SITE_URL },
});
