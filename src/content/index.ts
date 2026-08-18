/**
 * Locale content loader.
 *
 * Page copy lives in `content/<locale>/*.json` — the files the CMS writes to.
 * They are imported statically, so Vite bundles them at build time: there is no
 * runtime fetch and no loading state, exactly as when this copy lived in
 * `src/content.ts`.
 *
 * `Content` is inferred from the assembled English object, so the type follows
 * the JSON automatically — no hand-maintained interface to drift out of sync.
 * Annotating the Arabic and Spanish objects as `Content` makes `tsc` fail the
 * build if a locale is missing a key the English copy has.
 *
 * Insight articles are NOT here — they are a markdown collection, see
 * `./articles.ts`.
 */
import enSite from '../../content/en/site.json';
import enHome from '../../content/en/home.json';
import enAbout from '../../content/en/about.json';
import enCapabilities from '../../content/en/capabilities.json';
import enApproach from '../../content/en/approach.json';
import enInsights from '../../content/en/insights.json';
import enContact from '../../content/en/contact.json';
import enSeo from '../../content/en/seo.json';

import arSite from '../../content/ar/site.json';
import arHome from '../../content/ar/home.json';
import arAbout from '../../content/ar/about.json';
import arCapabilities from '../../content/ar/capabilities.json';
import arApproach from '../../content/ar/approach.json';
import arInsights from '../../content/ar/insights.json';
import arContact from '../../content/ar/contact.json';
import arSeo from '../../content/ar/seo.json';

import esSite from '../../content/es/site.json';
import esHome from '../../content/es/home.json';
import esAbout from '../../content/es/about.json';
import esCapabilities from '../../content/es/capabilities.json';
import esApproach from '../../content/es/approach.json';
import esInsights from '../../content/es/insights.json';
import esContact from '../../content/es/contact.json';
import esSeo from '../../content/es/seo.json';

/** Assembles the flat shape the components consume from the split CMS files. */
const assemble = <
  S, H, A, C, P, I, K, O,
>(site: S, home: H, about: A, capabilities: C, approach: P, insights: I, contact: K, seo: O) => ({
  ...(site as S & object),
  ...(home as H & object),
  about,
  capabilitiesPage: capabilities,
  approachPage: approach,
  insightsPage: insights,
  contactPage: contact,
  seo,
});

export const contentEn = assemble(
  enSite, enHome, enAbout, enCapabilities, enApproach, enInsights, enContact, enSeo,
);

/** The shape every locale must satisfy — derived from the English copy. */
export type Content = typeof contentEn;

export const contentAr: Content = assemble(
  arSite, arHome, arAbout, arCapabilities, arApproach, arInsights, arContact, arSeo,
);

export const contentEs: Content = assemble(
  esSite, esHome, esAbout, esCapabilities, esApproach, esInsights, esContact, esSeo,
);
