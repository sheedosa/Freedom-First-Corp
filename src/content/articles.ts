/**
 * Insight-article collection.
 *
 * Each article is one markdown file per locale under
 * `content/insights/<locale>/<slug>.md` — the slug IS the URL segment, so
 * creating `content/insights/en/my-piece.md` publishes /insights/my-piece with
 * no code change. That is what makes the Insights section self-service.
 *
 * `import.meta.glob(..., { eager: true })` inlines every file into the bundle at
 * build time, so this stays a static site with no runtime fetching.
 *
 * English is the base locale: if an article has no Arabic or Spanish file yet,
 * that locale falls back to the English one rather than 404ing. The client can
 * publish in English and have translations follow later.
 */
import { marked } from 'marked';
import type { Locale } from '../i18n';

const RAW = import.meta.glob('../../content/insights/*/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

export type CategoryKey = 'emergingMarkets' | 'fieldExecution' | 'companyUpdates';

export type Article = {
  slug: string;
  title: string;
  category: CategoryKey;
  date: string;
  order: number;
  /** Square card thumbnail on /insights. Empty renders the "image coming soon" tile. */
  image: string;
  /** Wide banner behind the article title. Falls back to `image`. */
  banner: string;
  seoTitle: string;
  seoDescription: string;
  published: boolean;
  /** Raw markdown body, trimmed. Empty means the article is a teaser. */
  body: string;
  /** True when there is a body to read — cheap to check, unlike `html`. */
  hasBody: boolean;
  /**
   * Body compiled to HTML. Lazy and memoised: the listing page renders cards
   * without ever invoking the markdown parser, and only the article actually
   * being viewed gets compiled.
   */
  readonly html: string;
};

/**
 * Minimal YAML frontmatter reader — deliberately not a full YAML parser.
 * It handles exactly what `.pages.yml` can write for these fields: flat
 * `key: value` pairs, optionally double-quoted, plus booleans and numbers.
 */
const parseFrontmatter = (src: string): { data: Record<string, string | number | boolean>; body: string } => {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/.exec(src.replace(/^﻿/, ''));
  if (!match) return { data: {}, body: src };

  const data: Record<string, string | number | boolean> = {};
  for (const line of match[1].split(/\r?\n/)) {
    const kv = /^([A-Za-z0-9_]+)\s*:\s*(.*)$/.exec(line.trim());
    if (!kv) continue;
    const [, key] = kv;
    let value = kv[2].trim();

    if (/^"[\s\S]*"$/.test(value)) {
      data[key] = value.slice(1, -1).replace(/\\"/g, '"').replace(/\\n/g, '\n').replace(/\\\\/g, '\\');
    } else if (/^'[\s\S]*'$/.test(value)) {
      data[key] = value.slice(1, -1).replace(/''/g, "'");
    } else if (value === 'true' || value === 'false') {
      data[key] = value === 'true';
    } else if (value !== '' && !Number.isNaN(Number(value)) && /^-?\d+(\.\d+)?$/.test(value)) {
      data[key] = Number(value);
    } else {
      data[key] = value;
    }
  }
  return { data, body: match[2] };
};

const str = (v: unknown, fallback = '') => (typeof v === 'string' ? v : fallback);

const CATEGORIES: CategoryKey[] = ['emergingMarkets', 'fieldExecution', 'companyUpdates'];

const toArticle = (slug: string, src: string): Article => {
  const { data, body } = parseFrontmatter(src);
  const category = str(data.category) as CategoryKey;
  const image = str(data.image);
  const title = str(data.title, slug);
  const markdown = body.trim();
  let rendered: string | undefined;

  return {
    slug,
    title,
    category: CATEGORIES.includes(category) ? category : 'companyUpdates',
    date: str(data.date),
    order: typeof data.order === 'number' ? data.order : Number.MAX_SAFE_INTEGER,
    image,
    banner: str(data.banner) || image,
    seoTitle: str(data.seoTitle, title),
    seoDescription: str(data.seoDescription),
    // `published: false` hides an article from listings; absent means published,
    // so a file the CMS wrote without the field still goes live.
    published: data.published !== false,
    body: markdown,
    hasBody: markdown.length > 0,
    get html() {
      rendered ??= marked.parse(markdown, { async: false, gfm: true, breaks: false });
      return rendered;
    },
  };
};

/** locale -> slug -> Article, built once at module load. */
const BY_LOCALE: Record<string, Record<string, Article>> = {};

for (const [filePath, src] of Object.entries(RAW)) {
  const m = /\/content\/insights\/([^/]+)\/([^/]+)\.md$/.exec(filePath);
  if (!m) continue;
  const [, locale, slug] = m;
  (BY_LOCALE[locale] ??= {})[slug] = toArticle(slug, src);
}

const BASE_LOCALE = 'en';

/** Slugs that exist in the base locale, i.e. every article the site publishes. */
const baseSlugs = Object.keys(BY_LOCALE[BASE_LOCALE] ?? {});

/** One article in `locale`, falling back to English when untranslated. */
export const getArticle = (locale: Locale, slug: string): Article | undefined =>
  BY_LOCALE[locale]?.[slug] ?? BY_LOCALE[BASE_LOCALE]?.[slug];

/**
 * All published articles for a locale, in the display order the CMS controls
 * via each article's `order` field (ties broken by newest date, then title).
 */
export const listArticles = (locale: Locale): Article[] =>
  baseSlugs
    .map((slug) => getArticle(locale, slug))
    .filter((a): a is Article => Boolean(a) && a!.published)
    .sort((a, b) => a.order - b.order || b.date.localeCompare(a.date) || a.title.localeCompare(b.title));

/** Every published slug — used by the sitemap generator and route validation. */
export const allSlugs = (): string[] => listArticles(BASE_LOCALE).map((a) => a.slug);
