# Fog & Pine Theme Migration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Promote the isolated "Fog & Pine" minimal prototype (currently under `/lab/`) to be the real site theme, replacing "Big Sky" across all page types while preserving SEO, feeds, analytics, IndieWeb, ⌘K search, keyboard shortcuts, and the carbon badge.

**Architecture:** Introduce a shared `_default/baseof.html` plus `min/` partials (head, topbar, footer, scripts) that carry the full `<head>` machinery from Big Sky's `head.html` but render the minimal chrome and link the system-font minimal stylesheet. Convert each real template to `{{ define "main" }}` block form, one page type per task, verifying with `hugo` build + browser preview after each. Big Sky CSS/partials/JS/fonts are retired only in the final cleanup phase, so the site stays buildable throughout.

**Tech Stack:** Hugo v0.160+, plain hand-written CSS (no Tailwind for the new theme), system font stack, vanilla JS (theme toggle, ⌘K fast search, hepp.js shortcuts).

## Global Constraints

- Branch: `experiment/fog-and-pine-minimal` (already checked out). Disposable.
- Palette (CSS custom properties, light): `--paper #f2f3f1`, `--ink #22251f`, `--pine #2f5d50`, `--pine-deep #244a40`, `--muted #5a615a`. Dark variants already defined in the stylesheet.
- Typography: system font stack only. No self-hosted web fonts in the new theme.
- All new component classes use the `lm-` prefix (matches the prototype).
- Keep: SEO/OG/Twitter/Scholar/RDFa meta, all `rel=me` links, RSS (`/feed.xml`) + JSON (`/feed.json`) autodiscovery, Plausible analytics, canonical/home links, favicon, webmention.io *endpoint* (receiving), ⌘K fast search, keyboard shortcuts, carbon badge.
- Drop: self-hosted fonts, webmention *display* (`webmention.min.js` + `#webmentions`), Big Sky `bs-` chrome.
- Verification per task: `hugo --quiet --destination /tmp/mig --buildFuture` exits 0, then preview the affected route(s) and confirm visually. Commit after each task.
- No dark mode regressions: every new color must reference a theme variable, never a hardcoded hex (except inside the `:root`/dark blocks).

---

## Phase 1 — Foundation

### Task 1: Promote the stylesheet into the assets pipeline

**Files:**
- Create: `assets/stylesheets/minimal.css` (move of `static/css/lab-minimal.css`)
- Modify: `layouts/partials/lab/head.html` (repoint to pipelined asset)
- Delete: `static/css/lab-minimal.css`

**Steps:**
- [ ] Move `static/css/lab-minimal.css` to `assets/stylesheets/minimal.css` (`git mv`).
- [ ] In `layouts/partials/lab/head.html`, replace the static `<link ... href="/css/lab-minimal.css?v=...">` with a pipelined version:
  ```go-html-template
  {{ $css := resources.Get "stylesheets/minimal.css" | resources.Minify | resources.Fingerprint "sha512" }}
  <link rel="stylesheet" href="{{ $css.RelPermalink }}">
  ```
- [ ] Build: `hugo --quiet --destination /tmp/mig --buildFuture` → exit 0.
- [ ] Preview `/lab/minimal/` → confirm styling intact (mark, palette, theme toggle).
- [ ] Commit: `migrate: move minimal stylesheet into assets pipeline`.

### Task 2: Create the shared `min/` partials

**Files:**
- Create: `layouts/partials/min/head.html`
- Create: `layouts/partials/min/topbar.html`
- Create: `layouts/partials/min/footer.html`
- Create: `layouts/partials/min/scripts.html`

**Interfaces:**
- `min/head.html` is called as `{{ partial "min/head.html" . }}` from `baseof.html` and renders everything inside `<head>`. It computes `<title>`/`<meta description>` from the page (`.IsPage`, `.Title`, `.Description`, `.Summary`).
- `min/topbar.html`, `min/footer.html`, `min/scripts.html` take the page context `.`.

**Steps:**
- [ ] Create `min/head.html`: copy the full contents between `<head>` and `</head>` from `layouts/partials/head.html` EXCEPT — (a) replace the Big Sky stylesheet block with the pipelined `stylesheets/minimal.css` block from Task 1; (b) remove the `webmention.min.js` `<script>` (keep the two `rel="webmention"`/`pingback` `<link>`s); (c) remove the keywords meta if desired (optional); (d) append the flash-free theme script:
  ```html
  <script>
    (function () {
      var mode = localStorage.getItem('lm-theme-mode') || 'auto';
      var root = document.documentElement;
      root.setAttribute('data-mode', mode);
      if (mode === 'light' || mode === 'dark') root.setAttribute('data-theme', mode);
    })();
  </script>
  ```
  Do NOT include `<!doctype>`, `<html>`, `<head>` tags themselves — baseof owns those. This partial outputs only the inner-head elements.
- [ ] Create `min/topbar.html`: copy `layouts/partials/lab/topbar.html`, then add active-state classes on the nav links keyed off section/permalink (mirror Big Sky `navbar.html` logic): Writing active when section ∈ blog/notes/links or permalink `/archive/`; Publications when section publications; Digital History when section projects or `/research/`; Bookshelf when section books; About when `/about/`. Active class: `class="lm-nav-active"`.
- [ ] Create `min/footer.html`: copy `layouts/partials/lab/site-footer.html` (newsletter band + minimal footer).
- [ ] Create `min/scripts.html`: copy `layouts/partials/lab/scripts.html` (email + theme toggle), then add the ⌘K search overlay markup and includes from `layouts/partials/foot.html` (`#fastSearch` dialog + `/js/fastsearch.js`), and the hepp.js module include for keyboard shortcuts:
  ```go-html-template
  {{ $js := resources.Get "javascripts/hepp.js" | js.Build | resources.Minify }}
  <script type="module" src="{{ $js.RelPermalink }}" async></script>
  ```
- [ ] Build → exit 0 (partials unused yet, just must parse).
- [ ] Commit: `migrate: add shared min/ partials (head, topbar, footer, scripts)`.

### Task 3: Create `_default/baseof.html`

**Files:**
- Create: `layouts/_default/baseof.html`

**Interfaces:**
- Templates that opt into the new theme use `{{ define "main" }}…{{ end }}`. Templates still using `{{ partial "head.html" . }}` (Big Sky, no blocks) are unaffected.

**Steps:**
- [ ] Create `layouts/_default/baseof.html`:
  ```go-html-template
  <!doctype html>
  <html lang="{{ .Site.LanguageCode | default "en" }}">
  <head>
    {{ partial "min/head.html" . }}
  </head>
  <body>
    <div class="lm-wrap">
      {{ partial "min/topbar.html" . }}
      {{ block "main" . }}{{ end }}
      {{ partial "min/footer.html" . }}
    </div>
    {{ partial "min/scripts.html" . }}
  </body>
  </html>
  ```
- [ ] Build → exit 0. Confirm existing Big Sky pages (e.g. `/`) still render Big Sky (baseof only affects block templates).
- [ ] Preview `/` (still Big Sky) and `/lab/minimal/` (still minimal) → both intact.
- [ ] Commit: `migrate: add _default/baseof.html for the minimal theme`.

---

## Phase 2 — Core pages

### Task 4: Migrate the homepage

**Files:**
- Modify: `layouts/index.html` (replace Big Sky homepage with minimal, block form)

**Steps:**
- [ ] Replace `layouts/index.html` with a `{{ define "main" }}…{{ end }}` body containing the intro/recent-writing/books/newsletter sections from `layouts/lab/minimal.html` (everything inside `.lm-wrap` EXCEPT the topbar and footer partials, which baseof now provides). Keep the data queries identical.
- [ ] Build → exit 0.
- [ ] Preview `/` at desktop + mobile, light + dark → matches the prototype homepage.
- [ ] Commit: `migrate: homepage to Fog & Pine`.

### Task 5: Migrate blog/notes/links single templates

**Files:**
- Modify: `layouts/blog/single.html`
- Modify: `layouts/notes/single.html`
- Modify: `layouts/links/single.html`
- Create (if needed): `layouts/partials/min/carbon-badge.html`

**Steps:**
- [ ] Rewrite `layouts/blog/single.html` as `{{ define "main" }}` using the article structure from `layouts/lab/minimal-post.html` (header/lede/meta/prose/footnotes/tags/author/prev-next/related), but driven by the CURRENT page `.` instead of a fetched preview page (replace `$p` with `.`). Include the carbon badge in `.lm-article-footer` via a minimal `min/carbon-badge.html` (restyle from `layouts/partials/carbon-badge.html`, `lm-` classes).
- [ ] Create `layouts/notes/single.html` and `layouts/links/single.html` from the same structure, adjusting the post-type note text ("note" / "commonplace") and, for links, surfacing `.Params.external` as an outbound link. Notes/links omit prev/next per the current Big Sky behavior (or keep — match existing: notes/links currently have no prev/next).
- [ ] Build → exit 0.
- [ ] Preview a blog post, a note, and a link post → prose, footnotes, carbon badge, tags, author, prev/next, related all correct in light + dark.
- [ ] Commit: `migrate: blog/notes/links single templates to Fog & Pine`.

### Task 6: Migrate the archive

**Files:**
- Modify: `layouts/archive/single.html`
- Create: `static/js/archive-filter.js` already exists — keep, but the minimal page uses its own inline script; standardize on one. Decision: reuse the inline script from `layouts/lab/minimal-archive.html`.

**Steps:**
- [ ] Rewrite `layouts/archive/single.html` as `{{ define "main" }}` using the body of `layouts/lab/minimal-archive.html` (header + chips + search + list + inline filter script), minus the topbar/footer/scripts partials baseof provides. Keep the inline filter `<script>` at the end of the defined main block (or move to `min/scripts.html` conditionally).
- [ ] Build → exit 0.
- [ ] Preview `/archive/` → chips filter, search narrows, counts correct, light + dark.
- [ ] Commit: `migrate: archive to Fog & Pine`.

---

## Phase 3 — Secondary pages

### Task 7: Publications (list + single)

**Files:**
- Modify: `layouts/publications/list.html`
- Modify: `layouts/publications/single.html`

**Steps:**
- [ ] Rewrite both as `{{ define "main" }}`. List: books grid (reuse `.lm-book-grid`) + articles/essays from `data/essays_criticism.yaml` as `.lm-stream` rows. Single: cover, buy links, praise, reviews, ISBN grid — restyled with `lm-` classes and theme variables.
- [ ] Build → exit 0. Preview `/publications/` and one book detail in light + dark.
- [ ] Commit: `migrate: publications list + detail to Fog & Pine`.

### Task 8: Books / bookshelf

**Files:**
- Modify: `layouts/books/list.html`

**Steps:**
- [ ] Rewrite as `{{ define "main" }}`: currently-reading section + year-filtered log with ISBN details/summary and review links, `lm-` styled. Keep the year-filter JS (`static/js/bookshelf-filter.js`) or inline equivalent; verify the selector still matches.
- [ ] Build → exit 0. Preview `/books/`, exercise year filter, light + dark.
- [ ] Commit: `migrate: bookshelf to Fog & Pine`.

### Task 9: Research / digital history

**Files:**
- Modify: `layouts/_default/digital-history.html`

**Steps:**
- [ ] Rewrite as `{{ define "main" }}`: project cards from `data/dh_projects.yaml`, `lm-` styled.
- [ ] Build → exit 0. Preview `/research/` in light + dark.
- [ ] Commit: `migrate: research page to Fog & Pine`.

### Task 10: About

**Files:**
- Modify: `layouts/_default/about.html`

**Steps:**
- [ ] Rewrite as `{{ define "main" }}`: roles band, bio, stats, contact links, `lm-` styled, system fonts.
- [ ] Build → exit 0. Preview `/about/` in light + dark.
- [ ] Commit: `migrate: about page to Fog & Pine`.

### Task 11: Remaining list/section/taxonomy + misc templates

**Files:**
- Modify: `layouts/_default/list.html`
- Modify: `layouts/_default/single.html`
- Create/Modify: taxonomy templates for `/tags/` (`layouts/_default/terms.html`, `layouts/_default/taxonomy.html` if absent)
- Modify: `layouts/courses/list.html`, `layouts/courses/single.html`
- Modify: `layouts/_default/blogroll.html`
- Review: `colophon.md`, `style-guide.md`, `low-impact` rendering

**Steps:**
- [ ] Rewrite each as `{{ define "main" }}` with minimal styling. The generic `_default/list.html` and `_default/single.html` are the safety net so any unmigrated content type still renders in the new theme.
- [ ] Add `layouts/_default/taxonomy.html` + `terms.html` so `/tags/<x>/` and `/tags/` render minimally (used by post tag links + archive).
- [ ] Build → exit 0. Preview `/tags/`, a `/tags/<tag>/` page, `/teaching/` (courses), `/blogroll/`, `/colophon/`, `/low-impact/` in light + dark.
- [ ] Commit: `migrate: list/single/taxonomy/courses/blogroll/misc to Fog & Pine`.

---

## Phase 4 — Cleanup

### Task 12: Restyle the ⌘K search overlay + verify shortcuts/search

**Files:**
- Modify: `assets/stylesheets/minimal.css` (add `.fast-search-box`, `#fastSearch`, `#searchResults` minimal styles, theme-aware)
- Verify: `static/js/fastsearch.js`, home `index.json` output

**Steps:**
- [ ] Add minimal theme-aware styles for the search overlay (paper/ink/pine, hairlines, mono labels).
- [ ] Confirm `config.yaml` home output includes the JSON index fastsearch needs; if not, add the output and `layouts/_default/index.json` already exists.
- [ ] Build → exit 0. Preview any page: press ⌘K → overlay opens, search returns results; test a keyboard shortcut (e.g. ⌘E → /blog/).
- [ ] Commit: `migrate: minimal ⌘K search overlay + verify shortcuts`.

### Task 13: Retire Big Sky + lab scaffolding

**Files:**
- Delete: `layouts/lab/` (minimal, minimal-post, minimal-archive), `content/lab/`
- Delete: Big Sky partials no longer referenced (`navbar.html`, `newsletter-band.html`, `site-footer.html`, `foot.html`, `carbon-badge.html` if replaced, old `head.html`)
- Delete: `assets/stylesheets/main.css` (Big Sky/Tailwind) once nothing references it; remove `@tailwindcss/postcss` from `package.json` if Tailwind is fully unused
- Delete: self-hosted font files in `static/assets/fonts/` and their `@font-face` rules (none remain in minimal.css; just remove files)
- Modify: `.claude/launch.json` may stay

**Steps:**
- [ ] Grep for references to each Big Sky partial/asset before deleting (`grep -rn "head.html\|navbar.html\|main.css\|carbon-badge" layouts/`). Delete only when unreferenced.
- [ ] Remove font files and confirm no `@font-face` or `/assets/fonts/` references remain.
- [ ] Build → exit 0. Crawl key routes in preview (`/`, `/blog/<post>/`, `/notes/<post>/`, `/archive/`, `/publications/`, `/books/`, `/research/`, `/about/`, `/tags/<t>/`) → all render in Fog & Pine, light + dark.
- [ ] Update `MEMORY.md` / project memory to reflect the new theme as the site default.
- [ ] Commit: `migrate: retire Big Sky chrome, fonts, and lab scaffolding`.

---

## Self-Review Notes

- **Spec coverage:** Foundation (baseof + partials + CSS) → Tasks 1–3. Core pages → 4–6. Secondary → 7–11. Preserved features: ⌘K search + shortcuts (Task 12), carbon badge (Task 5), feeds/SEO/analytics/rel-me (Task 2 head). Dropped: fonts + webmention display (Tasks 2, 13).
- **Risk:** during Phases 2–3 the site is mixed Big Sky + Fog & Pine; acceptable on a disposable branch and each page is independently verifiable.
- **Open item:** confirm `config.yaml` home outputs include the JSON search index before relying on ⌘K (Task 12 checks this).
