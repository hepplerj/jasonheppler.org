# jasonheppler.org — Next Steps & Outstanding Work

_Last updated: 2026-02-27_

---

## Branch Status

Active branch: `tailwind-migration`
Ready to merge into `main` — all polish items below are incremental improvements, not blockers.

---

## 1. Content / Pages to Finish

- **Colophon** (`content/colophon.md`) — stub; needs content
- **Style Guide** (`content/style-guide.md`) — stub; needs content
- **Search** (`content/search.md`) — ✓ done via Pagefind
- **Blogroll** (`content/blogroll.md`) — basic list; expand over time

---

## 2. Design / UX Polish

- **Tag consolidation** — lots of tags/categories on blog posts; worth auditing and pruning
- **Notes section** — content type exists; keep adding to it

---

## 3. Performance

- **Self-host fonts** — ✓ fixed; Inter, Source Serif 4, iA Writer Duospace now self-hosted via `@font-face`; Google Fonts CDN removed; unused font files purged
- **Webmention script** — ✓ fixed; added `defer`
- **Duplicate meta tags** — ✓ fixed; removed duplicate og: block, duplicate viewport, hardcoded URLs, empty dc:title/citation_title
- **Image audit** — ✓ fixed; `loading="lazy" decoding="async"` added to all layout img tags; check file sizes/author photo still worth doing

---

## 4. Book Backfill

- Run `python scripts/backfill-books.py` (dry run first, then `--write`) to fill in missing `isbn`, `pub_year`, `publisher` for 2018+ books and rename `year:` → `pub_year:`

---

## 5. Stack Reference

- Hugo v0.151.0+extended
- Tailwind CSS v4.x via `@tailwindcss/postcss` PostCSS plugin
- `postcss-cli` required
- Node 24 / npm 11
- ES module project (`"type": "module"` in `package.json`)
- `make serve` to run locally
- CSS: `assets/stylesheets/main.css`
- JS: `assets/javascripts/hepp.js`
- Dark mode: `data-site-theme` on `<html>`, driven by Apple-style toggle switch in nav panel
- Font size: `--reader-font-size` CSS custom property; sizes `[22, 25, 28]px`, default index 1

---

## 6. Keyboard Shortcuts

| Shortcut | Destination |
|----------|-------------|
| `⌘E` | `/blog/` (Essays) |
| `⌘J` | `/notes/` (Notes) |
| `⌘I` | `/publications/` (Publications) |
| `⌘Y` | `/research/` (Digital History) |
| `⌘B` | `/books/` (Bookshelf) |
| `⌘/` | `/about/` (About) |
| `⌘K` | `/search/` (Search) |
| `/` | Opens nav panel |

---

## 7. Tailwind Migration — Residual CSS

These classes stay as authored CSS (appear in raw HTML inside markdown content files):

- `.intro-section`, `.two-column` — used in some content files
- `.noted` — about page sidebar paragraphs
- `.footnotes` — Hugo goldmark-generated sidenote layout
- `.category-pill`, `.toc` — stateful/JS-managed
- `.footnote-ref`, `.footnote-backref` — Hugo goldmark-generated
