# Trailhead

Split-screen "Index / catalogue raisonné" theme for jasonheppler.org. Fixed
identity pane on the left (name, bio, site TOC with live counts, social
links); a single scrolling chronological ledger on the right. Below ~900px
the pane un-fixes and stacks above the content column.

Status: **complete, paused.** Every section of the site has a template here
(home, archive, blog, microblog, publications, books, research, teaching,
about, blogroll, tags, tweets, 404). Jason is deciding between this and
`themes/sagebrush` (currently live) / `themes/pine` (also parked) as the
site's long-term direction — nothing further is planned here until that's
decided.

**Jason hand-edits files in this theme directly.** If you're an agent
picking this up, re-read the actual files before changing anything — this
doc and `THEME-NOTES.md` describe the state as of the last audit, not a
spec the files are guaranteed to match. Where you find drift, trust the
files and fix the docs, not the other way around.

## Design DNA

- Palette: paper `#efe8db`, paper-raised `#e7ddc9`, ink `#15130e`, accent
  green `#1e4d3b`. Hairline rules in warm grays. No dark mode (consistent
  with the rest of the site — deferred everywhere, not just here).
- Type: **National Park** (label/structural face — eyebrows, TOC labels,
  column headers, type tags; always uppercase), **Public Sans** (body copy,
  titles, prose), **Space Mono** (numerals only — years, counts, tallies).
- Layout: `.th-pane` (fixed left, 50% width) + `.th-content` (scrolling
  right, `margin-left: 50%`). A hairline `.th-spine` divider with the
  accent color runs down the middle. Collapses to a stacked single column
  below 900px (`.th-pane` becomes `position: static`, `.th-content` loses
  its margin).
- Same idea as a museum/library catalogue card: every piece of writing —
  essay, note, book, article, talk — is a dated row in one ledger, not
  segregated into separate "blog" vs. "publications" visual languages.

## Preview / activate

No config change needed to preview:

```
hugo server --theme trailhead
```

To switch the live site over, set in `config.yaml`:

```yaml
theme: trailhead
```

(Currently `config.yaml` has `theme: sagebrush` — that's the live site.)

## Fonts

All self-hosted, no CDN, no Google Fonts `<link>`. Files live in
`themes/trailhead/static/assets/fonts/` and are served from
`/assets/fonts/`; `@font-face` declarations are in
`assets/stylesheets/trailhead/05-fonts.css`.

| Family | Weights shipped | Weights used | Format | Source / license |
|---|---|---|---|---|
| National Park | ExtraLight 200, Light 300, Regular 400, SemiBold 600, Bold 700, ExtraBold 800 | Regular/SemiBold/Bold/ExtraBold | `.woff` | Free release, [nationalparktypeface.com](https://nationalparktypeface.com) — ExtraLight/Light are shipped but unused, kept in case a lighter treatment is wanted later |
| Public Sans | Regular 400, Italic 400, Medium 500, Bold 700 | all | `.woff2` | [USWDS Public Sans](https://public-sans.digital.gov/), OFL, pulled via google-webfonts-helper |
| Space Mono | Regular 400, Bold 700 | all | `.woff2` | Google Fonts, OFL |

The `.woff`-vs-`.woff2` split isn't an inconsistency to fix — National
Park's free release only ships `.woff`.

## CSS architecture

`assets/stylesheets/trailhead/` is a numbered-file system, loaded via a
`resources.Match` glob in `layouts/_default/baseof.html`:

```go-html-template
{{ $css := resources.Match "stylesheets/trailhead/*.css" }}
{{ $style := $css | resources.Concat "css/trailhead.css" | resources.Minify | resources.Fingerprint "sha512" }}
```

`resources.Match` returns files in **lexical filename order**, which is why
the cascade depends on numeric prefixes:

| File | Contents |
|---|---|
| `00-tokens.css` | All custom properties: color, font-family vars, layout (split ratio, ledger column widths), spacing scale, radius. Never hardcode a hex/rem in a component file — add or reuse a token. |
| `05-fonts.css` | `@font-face` declarations only. |
| `10-base.css` | Reset, base typography, links, selection/focus states, and the original generic `.th-prose` (superseded/layered-on by `40-posts.css`). |
| `20-shell.css` | The split-screen shell: `.th-shell`, `.th-spine`, `.th-pane`, `.th-content`, `.th-reading-col`, the 900px stacking breakpoint. |
| `30-components.css` | Identity pane text (`.th-eyebrow`, `.th-name`, `.th-bio`, `.th-home-lede`), TOC with dotted leaders, tally/social, the ledger primitives (`.th-index-head`, `.th-row` and its columns), end-of-ledger CTA, the newsletter block, the generic `.th-label` / `.th-page-header` / `.th-page-title` / `.th-page-lede` inner-page-header component (shared site-wide), `.th-btn`, the compact `.th-footer`, and the `#fastSearch` overlay. |
| `40-posts.css` | Phase 2: article/note reading pages, the promoted long-form `.th-prose` (headings, lists, blockquote, code, tables, footnotes, images, masonry galleries, photo lightbox), post footer meta (disclaimer + carbon badge + tags), author card, prev/next, related reading, microblog stream + pager, the full archive (chips, search, empty state), tags index, 404. |
| `50-publications.css` | `/publications/` (tabs, book cards, book detail "object block", praise/reviews quotes, ISBN lines) and `/books/` bookshelf (shelf rows, details/summary expando, year chips). |
| `60-pages.css` | Standalone pages: `.th-page` wrapper, About (roles, stats, link columns), Digital & Public History research rows (with grayscale→color thumbnails), Blogroll, Teaching (list + single), Twitter archive, and the Low Impact metrics panel (`.metrics_container`, targets raw markdown-authored class names — no dedicated template). |

**Rule: keep two-digit numeric prefixes.** A three-digit prefix like `100-`
sorts *before* `30-` lexically (`"1" < "3"`), silently breaking cascade
order. If a new file is needed, use the next free two-digit number in the
appropriate band (there's room between `30`/`40`/`50`/`60`).

## Template inventory

All templates live under `layouts/`; `layouts/_default/baseof.html` wraps
every page with `th-head.html` (meta/SEO/feeds), `th-pane.html` (identity
pane, rendered unconditionally on every page), the CSS glob, `{{ block
"main" }}`, and `th-scripts.html` (shared JS + fast-search markup).

| Template | Renders | Data source |
|---|---|---|
| `layouts/index.html` | Homepage ledger | Interleaves 5 sources — books (`content/publications/`), essays (`content/blog/`), microblog (`content/microblog/`), articles/chapters/essays/reviews (`data/essays_criticism.yaml`, `published != false`), talks (`data/on_the_road.yaml`) — normalizes each into a common shape, sorts by date desc, caps to 40 rows. Ends with a link to `/archive/` and an inline Buttondown newsletter form. |
| `layouts/archive/single.html` | `/archive/` | Union of `blog` + `microblog` sections, uncapped, same ledger grid as home. Filter chips (All/Essays/Microblog) + live title search via inline `<script>`; recomputes year-suppression (`.th-repeat`) client-side on every filter pass since server-rendered suppression assumes the full unfiltered list. |
| `layouts/blog/single.html` | Essay reading page | Front matter (`lede`, `image`, `tags`), post-footer carbon estimate (computed inline from `.WordCount`), author card, prev/next (`site.RegularPages "Section" "blog"`), related reading (tag-intersection first, backfilled from 8 most recent blog+microblog). |
| `layouts/microblog/list.html` | `/microblog/` stream | Paginated 10/page, full body per entry (not just titles), bundle-relative image path rewrite for lightbox/src. |
| `layouts/microblog/single.html` | Single note | Same footer meta pattern as blog/single, no lede/lead-image/prev-next/related (notes don't carry those fields). |
| `layouts/publications/list.html` | `/publications/` | Book cards from child pages with `.Params.image`; Articles/Chapters/Essays/Reviews grouped sections from `data/essays_criticism.yaml`, filtered `published != false`, grouped by `type`. |
| `layouts/publications/single.html` | Book detail (or fallback prose page if `.Params.image` is unset) | Book front matter: cover, author, publisher, year, `purchase_links`, `ebook_links` (dedupe-guarded against purchase URLs), `library_link`, ISBNs, `endorsements`, `reviews`. |
| `layouts/books/list.html` | `/books/` bookshelf | Currently-reading (`.Params.categories intersect "reading"`), reading log filtered to `.Date >= 2018-01-01`, year filter chips (inline `<script>`), ISBN `<details>` expando with WorldCat/Open Library/Bookshop links. |
| `layouts/_default/digital-history.html` | `/research/` | `hugo.Data.dh_projects`, numbered rows, optional grayscale→color-on-hover thumbnail per project (`image` field). |
| `layouts/_default/about.html` | `/about/` | Hardcoded role band; body from `content/about.md`; computed stats (years writing, post count, total word count, links-shared count, tag/topic count) from `site.RegularPages` + `site.Taxonomies.tags`; link columns reuse the TOC dotted-leader component. |
| `layouts/_default/blogroll.html` | `/blogroll/` | Just renders `.Content` (intro + markdown list) from `content/blogroll.md`; styling targets the emitted `ul`/`li`/`a` directly. |
| `layouts/courses/list.html` | `/courses/` | Renders `.Content` from `content/courses/_index.md`, which contains a hand-authored raw `<div class="teaching">` link+term grid (kept as raw HTML deliberately — many entries are external links with no page bundle). |
| `layouts/courses/single.html` | Individual course/workshop page | Course bundle front matter (`number`, `site`, `department`, `university`, `semester`, `year`, `instructor`, `instructorurl`, `email`, `office`, `officehours`) + body. |
| `layouts/tags/list.html` | `/tags/` | `site.Taxonomies.tags.ByCount`, rendered with the TOC dotted-leader component. |
| `layouts/tags/term.html` | Per-tag page | `.Pages.ByDate.Reverse` for that taxonomy term, same ledger grid as archive. |
| `layouts/page/tweets.html` | Twitter archive | `hugo.Data.tweets` (~8.6k entries) + `hugo.Data.microblog` month counts; Observable Plot histogram (loaded from CDN — the one external JS dependency in the theme), live search + hide-replies filter, year-jump nav. Ported near-verbatim from sagebrush. |
| `layouts/projects/single.html` | `/projects/*` leaf bundles | Renders `.Content` bare — no `define "main"`, so it bypasses the theme shell entirely. These pages ship their own `<html>`/styles/scripts. |
| `layouts/_default/single.html` | Fallback single (colophon, style-guide, `/page/*` stubs) | Reading column + `.th-prose`. |
| `layouts/_default/list.html` | Fallback list (`/page/`, `/newsletter/`, `/lab/`, etc.) | Reading column, `.Content`, then a simple ledger of `.Pages`. |
| `layouts/404.html` | 404 | Static copy, no data. |

## Features

- **Homepage ledger**: 40-row cap, straight chronological merge (no
  weighting) across books/essays/microblog/data-file articles/talks, ending
  in a link to `/archive/` and an inline Buttondown newsletter embed styled
  as a spare colophon line (not a marketing band — contrast with
  sagebrush's terracotta newsletter CTA).
- **`/archive/`**: full, uncapped, filterable ledger — type chips + live
  title search, both client-side (inline `<script>` in
  `archive/single.html`). Year-suppression (the faded repeated-year
  treatment) is recomputed on every filter/search pass rather than trusting
  the server-rendered class, since filtering can hide the row that "owns" a
  visible year.
- **Book cover thumbnails**: small covers replace the plain square marker
  in ledger rows when a book page has `.Params.image` (`.th-has-cover` /
  `.th-row-cover`).
- **Research page thumbnails**: grayscale at rest, full color on row hover
  (`.th-dh-thumb`), optional per-project via `data/dh_projects.yaml`'s
  `image` field.
- **Unified `.th-page-header` component**: title + lede scale shared by
  every non-homepage, non-article-single page (archive, publications,
  bookshelf, research, tags, 404, teaching) — one title rhythm across the
  whole site rather than per-section duplicates.
- **Low Impact metrics panel**: two-cell panel styled from raw HTML
  authored directly in `content/page/low-impact.md` (no dedicated
  template — targets `.metrics_container`/`.metrics-left`/`.metrics-right`
  class names the markdown emits).
- **Related reading**: on essay singles, up to 3 items — tag-intersection
  matches first, backfilled from the 8 most recent blog+microblog posts.
- **Masonry galleries + lightbox**: raw `.masonry-grid` HTML authored
  inside post bodies gets CSS-column gallery styling; images anywhere in
  `.lm-prose`/`.th-prose` get click-to-zoom via the shared root `hepp.js`.

## Integration seams with root-level site files

This theme tree is fully self-contained (its own `layouts/`, `assets/`,
`static/`) but deliberately reuses a few root-level, cross-theme files
rather than forking them:

- **`assets/javascripts/hepp.js`** (root, shared with sagebrush): loaded via
  `js.Build` in `th-scripts.html`. Two hardcoded selector conventions to
  preserve if you touch markup that relies on them:
  - `.bs-email-link` (not `.th-email-link`) — the email link in
    `th-pane.html` and `about.html` intentionally keeps this class (with
    `data-name`/`data-domain` attributes) so hepp.js's click-to-mailto
    handler fires without a hepp.js edit.
  - `.post-body img, .prose img, .lm-prose img` — the lightbox click
    handler's target selector. Trailhead's prose wrapper carries `.lm-prose`
    alongside `.th-prose` everywhere for this reason.
- **`static/js/fastsearch.js`** (root, shared): powers the ⌘K overlay.
  Markup ids (`#fastSearch`, `#searchInput`, `#searchResults`) are fixed by
  that script — do not rename them in templates.
- **Webmentions**: `th-head.html` emits the `rel="webmention"`/
  `rel="pingback"` endpoint links (receive-only, matching sagebrush). No
  display widget is wired up anywhere in this theme.

## Gotchas

- **Hugo strips comments from inline `<script>` blocks.** Go's
  `html/template` elides both `//` and `/* */` JS comments inside inline
  scripts as part of script-context escaping — confirmed by isolated test,
  not a bug in any one file. `archive/single.html`'s filter script has a
  substantial writeup of this; document script logic in the surrounding
  Hugo template comment (`{{/* ... */}}`), not inline in the `<script>`.
- **Book pages have no `.Date`.** Only a `Params.year` string (e.g.
  `"2024"`). `th-pane.html` and `index.html` both synthesize a sort date
  via `time (printf "%d-01-01" $yr)` and read the display year from
  `Params.year` — never `.Date`, which would be the zero value (year 1) and
  silently corrupt any year-range math.
- **`static/js/archive-filter.js` and `static/js/bookshelf-filter.js`
  (root-level) are dead code as far as this theme is concerned.** They're
  leftovers from the parked `themes/big-sky` and target `bs-*`/`bs-shelf-entry`
  selectors that don't exist in trailhead's markup. Trailhead deliberately
  uses small inline `<script>` blocks in `archive/single.html` and
  `books/list.html` instead of adopting those files — same precedent
  sagebrush follows (it doesn't use them either).
- **`resources.Match` sorts lexically, not numerically past two digits.**
  See "CSS architecture" above — don't add a three-digit-prefixed file.
- **`hugo.Data.*`, not `site.Data.*`.** `site.Data` is deprecated as of
  Hugo 0.156; every data-file reference in this theme already uses the
  migrated form, matching sagebrush's convention.

## Status / TODO

- Functional site-wide — every content section has a template, the theme
  builds clean, nothing is a stub.
- Logo mark: shelved. Tumbleweed candidates exist (mockup exploration) but
  nothing was chosen or implemented.
- Possible future work if this theme is picked up again: weighting/pinning
  specific entries within the homepage's 40-row cap (currently a straight
  chronological merge, so high-frequency microblog posts can dominate the
  top); deciding whether `/archive/` stays as a second, uncapped view of
  the same ledger or gets folded into something else.
- Dark mode: unaddressed, consistent with the rest of the site (deferred
  everywhere, not a trailhead-specific gap).

See `THEME-NOTES.md` for the more granular, agent-facing map of naming
conventions and component internals.
