# Freedom First Global — website

Marketing site for Freedom First Global, live at
**<https://www.freedomfirstglobal.com>**.

Vite + React 19 + TypeScript + Tailwind CSS 4, built as a static single-page app
and deployed to GitHub Pages. Content is managed through a git-based CMS, so
non-technical editors publish by saving in a web editor rather than by opening a
pull request.

---

## Run locally

```bash
npm install      # Node 22+ (see .nvmrc)
npm run dev      # http://localhost:3000
```

| Script | Purpose |
| --- | --- |
| `npm run dev` | Dev server with HMR |
| `npm run build` | Production build to `dist/` (runs `prebuild` first) |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | `tsc --noEmit` — type-checks the app *and* the content JSON |
| `npm run seo` | Regenerate `public/sitemap.xml` and the `llms.txt` article list |
| `npm run cms:config` | Regenerate `.pages.yml` from the content JSON |

No environment variables or API keys are needed.

---

## Content architecture

All copy lives in `content/` as data, which is what makes it CMS-editable. Nothing
user-facing is hard-coded in components.

```
content/
├── en/  ar/  es/            One folder per locale, identical file set
│   ├── site.json            nav, footer, shared UI labels
│   ├── home.json            hero, capability cards, map, advantages, partnerships
│   ├── about.json           foundation, principles, leadership, stats, CEO message
│   ├── capabilities.json    the five capability sections
│   ├── approach.json        stakeholder tabs and focus areas
│   ├── insights.json        Insights page headings and filter labels
│   ├── contact.json         contact page copy
│   └── seo.json             per-page titles and meta descriptions
└── insights/
    └── en/  ar/  es/        One markdown file per article per locale
        └── <slug>.md        YAML frontmatter + markdown body
```

### How it reaches the components

`src/content/index.ts` imports the JSON statically and assembles the object that
`useContent()` returns, so Vite bundles it at build time — there is no runtime
fetch and no loading state.

Type safety is preserved without a hand-maintained interface:

```ts
export type Content = typeof contentEn;   // inferred from the English copy
export const contentAr: Content = ...     // Arabic must satisfy it
```

If a locale is missing a key that English has, `npm run lint` fails. Because
`tsconfig.json` includes `content`, that check covers the JSON itself.

### Insight articles

`src/content/articles.ts` loads `content/insights/*/*.md` via
`import.meta.glob(..., { eager: true })` and parses the frontmatter. Notable
behaviour:

- **The filename is the URL.** `content/insights/en/my-piece.md` publishes
  `/insights/my-piece`. One route (`/insights/:slug` → `src/pages/Insight.tsx`)
  serves every article, so a new article needs no code change.
- **English is the base locale.** An article with no Arabic or Spanish file falls
  back to English rather than 404ing, so editors can publish in one language and
  translate later.
- **Ordering is explicit** via each article's `order` field, ties broken by date
  then title. Category filtering uses a stable key (`emergingMarkets`,
  `fieldExecution`, `companyUpdates`) resolved to a translated label at render
  time, so it never depends on display strings.
- **Markdown is compiled lazily** through a memoised getter on `Article.html`, so
  the listing page renders cards without invoking the parser. Use `hasBody` for
  cheap "is there a body?" checks. Body styling is the `.article-body` block in
  `src/index.css` (there is no Tailwind typography plugin).
- **`published: false`** hides an article; frontmatter with an empty body renders
  as a non-clickable "Coming soon" card.

---

## The CMS

Editing runs on [Pages CMS](https://pagescms.org) — hosted, free, and
authenticated by a GitHub App, so there is no auth service to deploy alongside a
static site. Saving commits straight to `main`, which triggers the existing
deploy.

- **Editor guide:** [`docs/CMS-GUIDE.md`](docs/CMS-GUIDE.md) — hand this to the client.
- **Schema:** `.pages.yml`, **generated** by `scripts/generate-cms-config.mjs`
  from the content JSON, so every field is covered and the schema cannot drift
  from the data.

**After changing the shape of anything in `content/<locale>/*.json`, run
`npm run cms:config`.** A field missing from `.pages.yml` is not editable, and
the CMS may drop it on save. The article collections and the media block at the
top of the generator are maintained by hand.

---

## SEO

`scripts/generate-seo-files.mjs` runs automatically as `prebuild` and regenerates:

- `public/sitemap.xml` — static routes plus every published article
- `public/llms.txt` — the `## Notable insights` list at the end of the file

Both are committed so changes stay reviewable. Drafts and teaser articles are
excluded from both.

`lastmod` for static routes is declared in the script rather than derived from the
build date — stamping every page on each deploy would tell crawlers that
unchanged pages keep changing. Bump a date there when you meaningfully revise a
page. Article `lastmod` comes from the article's own `date` field.

The production domain appears in `src/seo.tsx` (`SITE_URL`),
`scripts/generate-seo-files.mjs`, `public/robots.txt`, `public/CNAME` and
`index.html`. Change all five together.

---

## Deployment

`.github/workflows/deploy.yml` builds and publishes to GitHub Pages on every push
to `main`, and can be run manually from the Actions tab. `dist/index.html` is
copied to `404.html` so client-side routes work on Pages. The custom domain comes
from `public/CNAME`.
