# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
make serve    # Local dev server at localhost:1313 (drafts + future posts included)
make build    # Production build: Hugo minify + Pagefind search index
```

Deployment is automatic: any push to `main` triggers a Cloudflare Pages build.

Hugo requires v0.151.0+extended. CSS is processed through PostCSS/Tailwind — `make serve` handles this automatically via Hugo's asset pipeline.

## Architecture

**Hugo static site** (jasonheppler.org) with Tailwind CSS v4 and ES module JavaScript.

### Content sections
- `content/blog/` — essays (external posts use `source:` + `external:` frontmatter)
- `content/notes/` — shorter observations
- `content/links/` — commonplace/link posts (always have `external:` URL)
- `content/books/` — reading log (1000+ entries; pre-2018 on LibraryThing)
- `content/publications/`, `content/courses/` — academic outputs

All three date-based sections share the same permalink format: `/:year/:month/:day/:slug/`

### CSS system (`assets/stylesheets/main.css`)
Single large file (~2600 lines). Structure:
1. `@font-face` declarations (self-hosted Inter, Source Serif 4, iA Writer Duospace)
2. `@theme {}` — Tailwind palette tokens (colors, fonts)
3. Two `:root {}` blocks — semantic tokens (`--theme-text`, `--theme-background`, `--theme-links`, `--color-aside`, etc.) and font/spacing vars
4. `[data-fonts="system"]` — system font override (must come **after both `:root` blocks**; equal specificity means source order wins)
5. `@layer base {}` — element defaults
6. `@layer components {}` — reusable classes
7. Unlayered rules — post/content typography (these beat layered rules in the cascade)
8. Dark mode blocks at bottom: `@media (prefers-color-scheme: dark)` + `[data-site-theme="dark"]` attribute selector + `[data-site-theme="light"]` override

**Critical CSS cascade note**: Non-layered rules have higher cascade priority than `@layer components` rules. When a component style isn't applying, check whether a non-layered rule is winning. Similarly, `[data-fonts="system"]` and `:root` have equal specificity — source order is the tiebreaker.

### Dark mode
Driven by `hepp.js` which sets `data-site-theme="dark"|"light"` on `<html>` and persists to localStorage. A custom Tailwind variant `dark:` is tied to this attribute. Both the `@media` query block and the `[data-site-theme="dark"]` block must be kept in sync when changing dark mode variables. The `[data-site-theme="light"]` block must explicitly override any variable set in the media query block (e.g. `--color-aside-faded`) or forced-light users with a dark system preference will get the wrong value.

### JavaScript (`assets/javascripts/hepp.js`)
ES modules, no build step. Manages:
- Theme toggle (`data-site-theme` on `<html>`, persisted as `user-color-scheme` in localStorage)
- Font size controls (3 discrete sizes: 22/25/28px, persisted as `reader-font-size-index`)
- System font toggle (`data-fonts="system"` on `<html>`, persisted as `font-style`; an inline script in `head.html` applies it early to prevent flash)
- Slide-out settings panel
- Keyboard shortcuts (⌘+E/J/I/Y/B, `/` to open panel)

### Layout patterns
- Fixed nav: J.A.H. monogram above MENU button, grouped at top-right (`.nav-trigger-group`) → slide-out panel with theme/font controls and navigation
- `.site-container` — max-width 900px centered wrapper used on all pages
- `<aside>` elements get background/border automatically from the global `aside { }` rule using `--color-aside` / `--color-aside-faded`
- Blog posts use microformats2 (`h-entry`, `u-url`, `e-content`) and a hidden Bridgy publish link for Bluesky syndication
- Partials: `post-footer.html` (notes/links footer), `tags-badges.html` (pill badges), `book-entry.html` (book list rows)

### Images
Images live in `static/assets/images/YYYY/`. Always reference as `/assets/images/YYYY/filename.ext`. The `/uploads/` path is a legacy broken reference — do not use it.

### Feeds
- RSS: `/feed.xml` — template at `layouts/_default/rss.xml`
- JSON Feed 1.1: `/feed.json` — template at `layouts/_default/list.jsonfeed`
- Both filter to `blog + notes + links` content types only, 20 items, sorted by date descending
- Author config lives under `params.Author` in `config.yaml` (top-level `author:` key was removed in Hugo v0.124+)
- Autodiscovery `<link>` tags for both formats are in `head.html`

### Search
Pagefind — built during `make build`, not available in `make serve`.
