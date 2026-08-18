# Editing the Freedom First website

This site's words and pictures live in this repository, and you edit them through
**Pages CMS** — a web editor that looks like a normal admin panel. You do not need
to install anything or understand any code.

**Saving publishes immediately.** There is no separate "publish" button and no
approval step: a save goes live on <https://www.freedomfirstglobal.com> in about
**two to three minutes**, once the site finishes rebuilding.

---

## 1. One-time setup

1. Create a free GitHub account if you don't have one, and ask the site
   administrator to add you to the `sheedosa/freedom-first-corp` repository with
   **Write** access.
2. Go to **<https://pagescms.org>** and click **Sign in with GitHub**.
3. Approve access for the `sheedosa/freedom-first-corp` repository when GitHub
   asks. (Grant it to that repository only.)
4. Pick the repository from your list, then choose the **`main`** branch.

Pages CMS reads the editing rules from the `.pages.yml` file already in the
repository, so the editor is ready to use straight away. Bookmark the page — that
is your CMS from now on.

---

## 2. What you can edit

The left sidebar has two kinds of entries.

### Insight articles

Three collections — **English**, **Arabic** and **Spanish**. These are the news
and opinion pieces on the [Insights](https://www.freedomfirstglobal.com/insights)
page, and this is the part you'll use most.

### Page content

Everything else on the site, grouped by language and page:

| Sidebar entry | What it controls |
| --- | --- |
| `EN · Home page` | Hero banner, the five capability cards, the world map and its country notes, the "Built for the Realities of the Field" panels, partnership blocks |
| `EN · About page` | Foundation text, principles, leadership and advisor biographies, the statistics bar, the CEO message |
| `EN · Capabilities page` | The five capability sections and their deliverables, the mid-market blocks |
| `EN · Approach page` | The stakeholder tabs (operators, host nations, strategic partners) and the focus areas |
| `EN · Insights page (labels)` | Heading and the filter-tab names on the Insights page — not the articles themselves |
| `EN · Contact page` | Contact headings, office details, form labels |
| `EN · Header, footer & shared labels` | Menu items and dropdowns, footer columns, offices, button labels used across the site |
| `EN · SEO titles & descriptions` | The titles and summaries that appear in Google results |

`AR ·` and `ES ·` repeat the same list for Arabic and Spanish. **Each language is
edited separately** — changing the English home page does not change the Arabic
one. If you only update English, the other two languages keep their current text.

---

## 3. Publishing a new article

1. In the sidebar, open **Insight articles — English** and click **Add entry**.
2. Fill in the fields:

   | Field | Notes |
   | --- | --- |
   | **Title** | Also becomes the article's web address, so write it before saving. |
   | **Category** | Choose one: Emerging Markets, Field Execution or Company Updates. This decides which filter tab it appears under. |
   | **Position in list** | Lower numbers come first. `1` is the top-left card on the Insights page. |
   | **Publication date** | Used by search engines. |
   | **Card image (square)** | The square thumbnail in the Insights grid. Leave empty and the card shows an "image coming soon" tile. |
   | **Banner image (wide)** | The wide image behind the article title. Roughly **1500 × 450** pixels works best. If you leave it empty, the card image is used. |
   | **Search-engine title** | What Google shows as the headline. Keep it under about 60 characters. |
   | **Search-engine description** | The grey summary text under the Google result. Aim for 150–160 characters. |
   | **Published** | Turn off to hide an article from the site without deleting it. |
   | **Article body** | The article itself. Write or paste your text here. |

3. Click **Save**. The article appears on the site within a few minutes, at
   `freedomfirstglobal.com/insights/your-title`.

You do not need to touch the sitemap, the Insights page, or anything else — the
new article is added to the listing, the site map and the search-engine files
automatically.

### Translating an article

Open **Insight articles — Arabic** (or Spanish) and add an entry **using the same
web address** as the English one. The quickest way is to look at the English
article's filename in the CMS and reuse it exactly.

Until you do this, readers who switch to Arabic or Spanish will see the English
version of that article rather than a missing page — so publishing in English
first is perfectly safe.

### Announcing an article before it's written

Create the entry, fill in the title, category and images, and **leave the article
body empty**. The card appears on the Insights page marked "Coming soon" and is
not clickable. Add the body later and it becomes a normal article.

### Removing an article

Switch **Published** off to take it off the site while keeping the text. Use
**Delete** in the CMS only if you want it gone for good.

---

## 4. Images

Use the **Media** section in the sidebar, or the image button on any image field,
to upload pictures. They are stored in `public/images`.

- Keep files under about **500 KB** so pages stay fast. Resize and compress large
  photos before uploading — [squoosh.app](https://squoosh.app) is a free tool for this.
- **Card images** are square, so anything important should be centred.
- **Banner images** are wide and the bottom half is darkened for the title text.
- Use `.jpg` for photographs and `.png` or `.svg` for logos and graphics.
- Give files descriptive names (`libya-refinery-2026.jpg`, not `IMG_4821.jpg`).

Deleting an image that a page still points to will leave a blank space on the
site, so replace the reference first.

---

## 5. Things to leave alone

Most fields are plain text and safe to change. A few are structural, and the CMS
shows a warning note on each of them:

- **Href / Link / Link target** — web addresses for menus and buttons. Changing
  the text is fine; changing these breaks navigation.
- **ID** — invisible anchors that menu links point at (`upstream`, `leadership`).
- **Language Code** (`EN`, `AR`, `ES`) — used by the language switcher.
- **Form field Name / Type** on the contact form — these make the form work.

If you change one by accident, tell the site administrator: every edit is saved
in the repository's history and can be undone exactly.

---

## 6. Good practice

- **Check your work.** Open the live page a few minutes after saving.
- **Save once, not repeatedly.** Each save triggers a rebuild.
- **Arabic reads right-to-left** and the site handles that automatically — type
  or paste Arabic normally.
- **Long headings wrap.** Very long titles can look cramped in the large display
  type, so preview them.
- **Write the search-engine description.** Left empty, Google invents its own.
- **Keep company names in Latin script** inside Arabic and Spanish text
  ("Freedom First", "Permian Basin") — that matches the existing translations.

---

## 7. If something looks wrong

1. **Wait five minutes** — rebuilds are not instant.
2. **Refresh with a hard reload** — `Ctrl`+`Shift`+`R` (Windows) or
   `Cmd`+`Shift`+`R` (Mac).
3. **Still wrong?** Contact the site administrator. Nothing is ever lost: every
   version is stored in the repository and any change can be reversed.

To see whether a rebuild finished, open the repository's **Actions** tab on
GitHub. A green tick means the site is live; a red cross means the build failed
and the previous version is still online.
