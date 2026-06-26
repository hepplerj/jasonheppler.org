# "Big Sky" Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement the "Big Sky" frontier-modern redesign of jasonheppler.org — warm sandstone palette, serif-forward typography, generous whitespace, new navigation, and unified writing archive.

**Architecture:** Replace the current design system (Inter/Source Serif/slide-out nav panel) with the Big Sky design (Marcellus/Spectral/top bar nav) while preserving Hugo content structure and all existing URLs. Tailwind CSS v4 remains as the PostCSS build tool; design tokens and component styles are fully rewritten. No dark mode in this phase.

**Tech Stack:** Hugo v0.151.0+extended, Tailwind CSS v4 (PostCSS pipeline only), vanilla JS for interactive filtering, self-hosted Google Fonts (WOFF2).

## Global Constraints

- All fonts self-hosted as WOFF2 in `static/assets/fonts/` (no Google Fonts CDN)
- All existing URLs must be preserved — no content directory restructuring
- No dark mode (deferred to future phase)
- No `support.js` from prototypes — all interactivity is new vanilla JS
- Design prototypes in `design_handoff_author_site/designs/*.dc.html` are the visual source of truth
- Asset images from `design_handoff_author_site/designs/uploads/` must be copied to `static/assets/images/`
- `just serve` for local dev verification
- Commit after each task

---

## Task 1: Font Infrastructure

**Files:**
- Create: `static/assets/fonts/Marcellus-Regular.woff2`
- Create: `static/assets/fonts/Spectral-Light.woff2`
- Create: `static/assets/fonts/Spectral-LightItalic.woff2`
- Create: `static/assets/fonts/Spectral-Regular.woff2`
- Create: `static/assets/fonts/Spectral-RegularItalic.woff2`
- Create: `static/assets/fonts/Spectral-Medium.woff2`
- Create: `static/assets/fonts/SpectralSC-Regular.woff2`
- Create: `static/assets/fonts/SpectralSC-Medium.woff2`
- Create: `static/assets/fonts/HankenGrotesk-Variable.woff2`
- Create: `static/assets/fonts/IBMPlexMono-Regular.woff2`
- Create: `static/assets/fonts/IBMPlexMono-Medium.woff2`
- Modify: `assets/stylesheets/main.css` (replace @font-face block)
- Remove old fonts: Delete `Inter-roman.var.woff2`, `Inter-italic.var.woff2`, `SourceSerif4-*`, `iAWriterDuospace-*` from `static/assets/fonts/`

**Interfaces:**
- Produces: CSS custom properties `--font-display`, `--font-body`, `--font-body-sc`, `--font-ui`, `--font-mono` available globally

**Notes on font acquisition:** Download WOFF2 files from Google Fonts using the google-webfonts-helper API or directly from `fonts.google.com`. Hanken Grotesk is a variable font — a single WOFF2 file covers all weights. Spectral and Spectral SC are static fonts requiring individual weight files.

- [ ] **Step 1: Download fonts**

```bash
# Create a temporary download script
cd /Users/jheppler/work/jasonheppler.org

# Use google-webfonts-helper API to get WOFF2 URLs, or download manually.
# For Hanken Grotesk (variable font), download from:
#   https://fonts.google.com/specimen/Hanken+Grotesk
# For Marcellus (400 only):
#   https://fonts.google.com/specimen/Marcellus
# For Spectral (300, 400, 500 + italics):
#   https://fonts.google.com/specimen/Spectral
# For Spectral SC (400, 500):
#   https://fonts.google.com/specimen/Spectral+SC
# For IBM Plex Mono (400, 500):
#   https://fonts.google.com/specimen/IBM+Plex+Mono

# Download each font family. The simplest method:
# 1. Go to fonts.google.com for each family
# 2. Select the needed weights
# 3. Download the family ZIP
# 4. Extract .ttf files
# 5. Convert to WOFF2 using: npx fonttools woff2compress Font.ttf
#    Or use https://cloudconvert.com/ttf-to-woff2

# Alternative: use the google-webfonts-helper API
# curl "https://gwfh.mranftl.com/api/fonts/marcellus?subsets=latin" | jq '.variants[].woff2'
```

Place all WOFF2 files in `static/assets/fonts/`.

- [ ] **Step 2: Remove old font files**

```bash
cd /Users/jheppler/work/jasonheppler.org/static/assets/fonts
rm -f Inter-roman.var.woff2 Inter-italic.var.woff2
rm -f SourceSerif4-*.woff2
rm -f iAWriterDuospace-*.woff2
```

Verify only the new Big Sky font files remain:
```bash
ls static/assets/fonts/
```

- [ ] **Step 3: Replace @font-face declarations in main.css**

Replace the existing `@font-face` block (lines 1-66 approximately) in `assets/stylesheets/main.css` with:

```css
/* ── Big Sky Font Stack ──────────────────────────────────────────────── */

/* Marcellus — Display serif (headlines, titles, wordmark) */
@font-face {
  font-family: 'Marcellus';
  src: url('/assets/fonts/Marcellus-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}

/* Spectral — Body serif (prose, lead paragraphs, citations) */
@font-face {
  font-family: 'Spectral';
  src: url('/assets/fonts/Spectral-Light.woff2') format('woff2');
  font-weight: 300;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Spectral';
  src: url('/assets/fonts/Spectral-LightItalic.woff2') format('woff2');
  font-weight: 300;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Spectral';
  src: url('/assets/fonts/Spectral-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Spectral';
  src: url('/assets/fonts/Spectral-RegularItalic.woff2') format('woff2');
  font-weight: 400;
  font-style: italic;
  font-display: swap;
}
@font-face {
  font-family: 'Spectral';
  src: url('/assets/fonts/Spectral-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

/* Spectral SC — Small-caps serif (eyebrows, section kickers) */
@font-face {
  font-family: 'Spectral SC';
  src: url('/assets/fonts/SpectralSC-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'Spectral SC';
  src: url('/assets/fonts/SpectralSC-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}

/* Hanken Grotesk — Sans UI (nav, buttons, labels, dates, chips) */
@font-face {
  font-family: 'Hanken Grotesk';
  src: url('/assets/fonts/HankenGrotesk-Variable.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap;
}

/* IBM Plex Mono — Code (inline code blocks) */
@font-face {
  font-family: 'IBM Plex Mono';
  src: url('/assets/fonts/IBMPlexMono-Regular.woff2') format('woff2');
  font-weight: 400;
  font-style: normal;
  font-display: swap;
}
@font-face {
  font-family: 'IBM Plex Mono';
  src: url('/assets/fonts/IBMPlexMono-Medium.woff2') format('woff2');
  font-weight: 500;
  font-style: normal;
  font-display: swap;
}
```

- [ ] **Step 4: Verify fonts load**

Run `just serve` and open http://localhost:1313. Check the Network tab in dev tools — all font files should load with 200 status. The page will look broken (old styles referencing old font vars) but fonts should download successfully.

- [ ] **Step 5: Commit**

```bash
git add static/assets/fonts/ assets/stylesheets/main.css
git commit -m "feat: replace font stack with Big Sky fonts (Marcellus, Spectral, Hanken Grotesk, IBM Plex Mono)"
```

---

## Task 2: Design Tokens & Base CSS

**Files:**
- Modify: `assets/stylesheets/main.css` (rewrite @theme block, base layer, and shared component classes)

**Interfaces:**
- Consumes: Font families from Task 1
- Produces: All CSS custom properties, base element styles, and reusable component classes (`.bs-eyebrow`, `.bs-btn`, `.bs-btn-outline`, `.bs-chip`, `.bs-section`, `.bs-hairline`, `.prose`)

**Important:** This task rewrites the `@theme` block and `@layer base` / `@layer components` sections of `main.css`. The file is ~3,255 lines. The approach is to replace the theme tokens and base styles while keeping Tailwind's `@import "tailwindcss"` and `@source` directives at the top. Page-specific component styles will be written in later tasks.

- [ ] **Step 1: Replace the @theme block**

Find the existing `@theme` block in `main.css` (around lines 74-107) and replace it with Big Sky design tokens:

```css
@theme {
  /* ── Colors ── */
  --color-paper: #efe7d6;
  --color-paper-alt: #e7dcc6;
  --color-ink: #241d13;
  --color-ink-display: #1f1810;
  --color-terracotta: #9a3b25;
  --color-gold: #d99a6c;
  --color-muted: #6b5a3e;
  --color-faint: #9a8a6c;
  --color-prose: #2c2519;
  --color-on-dark: #f1e6d2;
  --color-on-dark-alt: #e7dcc6;
  --color-on-dark-muted: #c4b89c;
  --color-hairline: rgba(36, 29, 19, 0.14);
  --color-hairline-strong: rgba(36, 29, 19, 0.18);
  --color-link-underline: rgba(154, 59, 37, 0.4);

  /* ── Typography ── */
  --font-display: 'Marcellus', serif;
  --font-body: 'Spectral', serif;
  --font-body-sc: 'Spectral SC', serif;
  --font-ui: 'Hanken Grotesk', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;

  /* ── Spacing ── */
  --content-max: 1140px;
  --content-narrow: 1000px;
  --reading-max: 720px;
  --gutter: 40px;
  --gutter-mobile: 22px;
  --section-pad: 78px;
}
```

- [ ] **Step 2: Rewrite base element styles**

Replace the existing `@layer base` block with:

```css
@layer base {
  *, *::before, *::after { box-sizing: border-box; }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    margin: 0;
    background: var(--color-paper);
    color: var(--color-ink);
    font-family: var(--font-body);
    font-size: 19px;
    line-height: 1.7;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  img {
    max-width: 100%;
    height: auto;
  }

  h1, h2, h3, h4 {
    font-family: var(--font-display);
    font-weight: 400;
    color: var(--color-ink-display);
    line-height: 1.08;
    text-wrap: balance;
  }
}
```

- [ ] **Step 3: Write shared component classes**

Add these to the `@layer components` block (replace old component styles):

```css
@layer components {
  /* ── Layout containers ── */
  .bs-container {
    max-width: var(--content-max);
    margin: 0 auto;
    padding-left: var(--gutter);
    padding-right: var(--gutter);
  }
  .bs-container-narrow {
    max-width: var(--content-narrow);
    margin: 0 auto;
    padding-left: var(--gutter);
    padding-right: var(--gutter);
  }
  .bs-reading-col {
    max-width: var(--reading-max);
    margin: 0 auto;
    padding-left: var(--gutter);
    padding-right: var(--gutter);
  }

  /* ── Section spacing ── */
  .bs-section {
    padding-top: var(--section-pad);
    padding-bottom: var(--section-pad);
  }

  /* ── Eyebrow text ── */
  .bs-eyebrow {
    font-family: var(--font-body-sc);
    font-size: 13px;
    letter-spacing: 0.28em;
    text-transform: uppercase;
    color: var(--color-terracotta);
    margin-bottom: 20px;
  }

  /* ── Hairline dividers ── */
  .bs-hairline {
    height: 1px;
    background: var(--color-hairline);
  }

  /* ── Buttons ── */
  .bs-btn {
    display: inline-block;
    font-family: var(--font-ui);
    font-size: 13px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 14px 24px;
    border: none;
    cursor: pointer;
    transition: opacity 0.15s;
    text-decoration: none;
  }
  .bs-btn:hover { opacity: 0.85; }
  .bs-btn-solid {
    background: var(--color-ink-display);
    color: var(--color-paper);
  }
  .bs-btn-outline {
    background: transparent;
    color: var(--color-ink-display);
    border: 1px solid var(--color-ink-display);
  }
  .bs-btn-terracotta {
    background: var(--color-on-dark);
    color: var(--color-terracotta);
  }
  .bs-btn-gold {
    background: var(--color-gold);
    color: var(--color-ink-display);
  }

  /* ── Chips (filter buttons) ── */
  .bs-chip {
    display: inline-block;
    font-family: var(--font-ui);
    font-size: 12.5px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #4a3f2e;
    background: transparent;
    border: 1px solid rgba(36, 29, 19, 0.25);
    padding: 9px 16px;
    cursor: pointer;
    border-radius: 2px;
    transition: all 0.15s;
  }
  .bs-chip:hover { border-color: var(--color-ink-display); }
  .bs-chip.on {
    background: var(--color-ink-display);
    color: var(--color-paper);
    border-color: var(--color-ink-display);
  }
  .bs-chip .count { color: var(--color-faint); }
  .bs-chip.on .count { color: rgba(241, 230, 210, 0.65); }

  /* ── Type badges (essay/note/link) ── */
  .bs-tag {
    display: inline-block;
    font-family: var(--font-ui);
    font-size: 10.5px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    padding: 4px 9px;
    border-radius: 2px;
    white-space: nowrap;
  }
  .bs-tag-essay  { background: var(--color-terracotta); color: var(--color-on-dark); }
  .bs-tag-note   { background: var(--color-ink-display); color: var(--color-on-dark-alt); }
  .bs-tag-link   { background: var(--color-gold); color: #3a2412; }

  /* ── Prose styling (reading content) ── */
  .prose p {
    font-family: var(--font-body);
    font-weight: 400;
    font-size: 20px;
    line-height: 1.72;
    margin: 0 0 28px;
    color: var(--color-prose);
    text-wrap: pretty;
  }
  .prose a {
    color: var(--color-terracotta);
    text-decoration: none;
    border-bottom: 1px solid var(--color-link-underline);
  }
  .prose a:hover {
    border-bottom-color: var(--color-terracotta);
  }
  .prose li {
    font-family: var(--font-body);
    font-size: 19px;
    line-height: 1.6;
    margin-bottom: 9px;
    color: var(--color-prose);
  }
  .prose code {
    font-family: var(--font-mono);
    font-size: 0.86em;
    background: rgba(36, 29, 19, 0.06);
    padding: 1px 6px;
    border-radius: 3px;
  }
  .prose blockquote {
    border-left: 2px solid var(--color-terracotta);
    padding: 6px 0 6px 20px;
    margin: 0 0 28px;
  }
  .prose blockquote p {
    font-style: italic;
    font-size: 17px;
    line-height: 1.55;
    color: #5c5140;
  }
  .prose figure {
    margin: 36px 0;
  }
  .prose figcaption {
    font-family: var(--font-ui);
    font-size: 13px;
    line-height: 1.5;
    color: var(--color-muted);
    margin-top: 12px;
    text-align: center;
  }
  .prose h2 {
    font-size: 28px;
    margin: 48px 0 18px;
  }
  .prose h3 {
    font-size: 22px;
    margin: 36px 0 14px;
  }

  /* ── Responsive ── */
  @media (max-width: 860px) {
    .bs-container, .bs-container-narrow, .bs-reading-col {
      padding-left: var(--gutter-mobile);
      padding-right: var(--gutter-mobile);
    }
  }
}
```

- [ ] **Step 4: Remove old component styles**

Remove or comment out all the old homepage-specific (`.hp-*`), settings panel (`.settings-*`), nav trigger (`.nav-trigger-group`), overlay, stats-grid, and other v9 component styles from main.css. These will be replaced by Big Sky styles in subsequent tasks. Keep the following sections intact for now (they'll be updated later):
- Fast search overlay styles (`.fast-search-box`, etc.)
- Print styles (`@media print`)
- Footnote/marginalia styles (if keeping accessible footnotes)

- [ ] **Step 5: Verify base styles**

Run `just serve`. The site will look incomplete (no nav, broken layout) but:
- Background should be warm sandstone (`#efe7d6`)
- Text should be dark ink (`#241d13`)
- Headings should render in Marcellus
- Body text should render in Spectral

- [ ] **Step 6: Commit**

```bash
git add assets/stylesheets/main.css
git commit -m "feat: replace design tokens with Big Sky palette and typography"
```

---

## Task 3: Navigation, Footer & Newsletter Partials

**Files:**
- Create: `layouts/partials/navbar.html`
- Create: `layouts/partials/newsletter-band.html`
- Create: `layouts/partials/site-footer.html`
- Modify: `layouts/partials/head.html` (remove old nav, remove font-style inline script, remove littlefoot.css)
- Modify: `layouts/partials/foot.html` (replace footer content, update JS loading)
- Modify: `layouts/partials/nav.html` (replace entirely with navbar include — or delete and update references)
- Modify: `assets/stylesheets/main.css` (add navbar, footer, newsletter CSS)
- Modify: `assets/javascripts/hepp.js` (remove panel/theme/font-size/font-style code, keep shortcuts + lightbox + footnotes)
- Modify: `config.yaml` (update menu items)

**Interfaces:**
- Consumes: Design tokens from Task 2
- Produces: `navbar.html` partial (included in head.html), `newsletter-band.html` partial, `site-footer.html` partial

### Step-by-step

- [ ] **Step 1: Create `layouts/partials/navbar.html`**

```html
<!-- Top bar nav — Big Sky design -->
<nav class="bs-navbar" aria-label="Site navigation">
  <div class="bs-navbar-inner">
    <a href="/" class="bs-wordmark">Jason A. Heppler</a>
    <div class="bs-nav-links">
      <a href="/blog/"{{ if eq .Section "blog" }} class="active"{{ end }}>Essays</a>
      <a href="/notes/"{{ if eq .Section "notes" }} class="active"{{ end }}>Notes</a>
      <a href="/publications/"{{ if eq .Section "publications" }} class="active"{{ end }}>Publications</a>
      <a href="/research/"{{ if or (eq .Section "projects") (eq .RelPermalink "/research/") }} class="active"{{ end }}>Digital History</a>
      <a href="/books/"{{ if eq .Section "books" }} class="active"{{ end }}>Bookshelf</a>
      <a href="/about/"{{ if eq .RelPermalink "/about/" }} class="active"{{ end }}>About</a>
    </div>
  </div>
</nav>
```

- [ ] **Step 2: Create `layouts/partials/newsletter-band.html`**

```html
<!-- Newsletter CTA band -->
<section class="bs-newsletter-band">
  <div class="bs-newsletter-inner">
    <span class="bs-newsletter-eyebrow">Newsletter</span>
    <h2 class="bs-newsletter-title">Tack &amp; Ink</h2>
    <p class="bs-newsletter-desc">Occasional writing on history, technology, and the digital humanities.</p>
    <form class="bs-newsletter-form" action="https://buttondown.com/api/emails/embed-subscribe/plainsink" method="post" target="_blank">
      <input type="email" name="email" placeholder="you@example.com" required aria-label="Email address">
      <button type="submit" class="bs-btn bs-btn-terracotta">Subscribe</button>
    </form>
  </div>
</section>
```

- [ ] **Step 3: Create `layouts/partials/site-footer.html`**

```html
<footer class="bs-footer">
  <div class="bs-footer-inner">
    <div class="bs-footer-brand">
      <div class="bs-footer-name">Jason A. Heppler</div>
      <div class="bs-footer-title">Environmental &amp; Digital Historian</div>
    </div>
    <div class="bs-footer-links">
      {{ with site.Params.social.bluesky }}<a href="{{ . }}">Bluesky</a>{{ end }}
      {{ with site.Params.social.mastodon }}<a href="{{ . }}" rel="me">Mastodon</a>{{ end }}
      <a href="https://github.com/hepplerj">GitHub</a>
      {{ with site.Params.social.microblog }}<a href="{{ . }}">Micro.blog</a>{{ end }}
      <a href="/feed.xml">RSS</a>
      <a href="/feed.json">JSON</a>
    </div>
    <div class="bs-footer-copy">
      <p>&copy; 2008&ndash;{{ now.Year }} Jason A. Heppler. My writing, photography, and the design of this website are <a href="https://www.copyright.gov/help/faq/faq-general.html#mywork">copyrighted</a>. Powered by <a href="https://gohugo.io">Hugo</a>. Made in <a href="https://en.wikipedia.org/wiki/Lincoln,_Nebraska">Lincoln, Nebraska</a>.</p>
    </div>
  </div>
</footer>
```

- [ ] **Step 4: Update `layouts/partials/head.html`**

Replace the current `head.html`. Key changes:
- Remove the inline `font-style` localStorage script (no more system font toggle)
- Remove `littlefoot.css` link (footnotes will be styled in main.css)
- Replace `{{ partial "nav.html" . }}` in the body with `{{ partial "navbar.html" . }}`
- Keep: all meta tags, webmention endpoint, stylesheets, Plausible, feed links, favicon

The `<body>` tag at the bottom of `head.html` should now include `{{ partial "navbar.html" . }}` instead of `{{ partial "nav.html" . }}`.

Remove these lines:
```html
<script>
  (function(){var f=localStorage.getItem('font-style');if(f==='system')document.documentElement.setAttribute('data-fonts','system');})();
</script>
```

And remove the littlefoot CSS link:
```html
{{ $littlefoot := resources.Get "stylesheets/littlefoot.css" | ... }}
<link rel="stylesheet" href="{{ $littlefoot.Permalink }}" />
```

- [ ] **Step 5: Update `layouts/partials/foot.html`**

Replace the old footer text with:
```html
{{ partial "site-footer.html" . }}
```

Keep the JS loading (hepp.js) and fast search overlay unchanged.

- [ ] **Step 6: Add navbar, footer, and newsletter CSS to main.css**

Add to `@layer components`:

```css
/* ── Navbar ── */
.bs-navbar {
  border-bottom: 1px solid var(--color-hairline);
}
.bs-navbar-inner {
  max-width: var(--content-max);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px var(--gutter);
}
.bs-wordmark {
  font-family: var(--font-display);
  font-size: 19px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-ink-display);
  text-decoration: none;
}
.bs-nav-links {
  display: flex;
  gap: 28px;
}
.bs-nav-links a {
  font-family: var(--font-ui);
  font-size: 13px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #4a3f2e;
  text-decoration: none;
  transition: color 0.15s;
}
.bs-nav-links a:hover,
.bs-nav-links a.active {
  color: var(--color-terracotta);
}

@media (max-width: 860px) {
  .bs-navbar-inner {
    flex-direction: column;
    gap: 14px;
    padding-left: var(--gutter-mobile);
    padding-right: var(--gutter-mobile);
  }
  .bs-nav-links {
    flex-wrap: wrap;
    justify-content: center;
    gap: 12px 18px;
  }
}

/* ── Newsletter Band ── */
.bs-newsletter-band {
  background: var(--color-terracotta);
  color: var(--color-on-dark);
  padding: 78px var(--gutter);
  text-align: center;
}
.bs-newsletter-inner {
  max-width: 560px;
  margin: 0 auto;
}
.bs-newsletter-eyebrow {
  display: block;
  font-family: var(--font-body-sc);
  font-size: 12px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: #e9c8a6;
  margin-bottom: 18px;
}
.bs-newsletter-title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 40px;
  margin: 0 0 14px;
  color: var(--color-on-dark);
}
.bs-newsletter-desc {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 19px;
  color: #ecd9c0;
  margin: 0 0 28px;
  text-wrap: pretty;
}
.bs-newsletter-form {
  display: flex;
  gap: 10px;
  justify-content: center;
}
.bs-newsletter-form input[type="email"] {
  font-family: var(--font-ui);
  font-size: 15px;
  background: transparent;
  border: 1px solid rgba(241, 230, 210, 0.5);
  color: #e3c6ab;
  padding: 15px 18px;
  border-radius: 2px;
  outline: none;
  width: 260px;
}
.bs-newsletter-form input::placeholder { color: rgba(241, 230, 210, 0.5); }

@media (max-width: 520px) {
  .bs-newsletter-form {
    flex-wrap: wrap;
  }
  .bs-newsletter-form input[type="email"],
  .bs-newsletter-form button {
    width: 100%;
    text-align: center;
  }
}

/* ── Footer ── */
.bs-footer {
  background: var(--color-ink-display);
  color: var(--color-on-dark-muted);
  padding: 60px var(--gutter);
}
.bs-footer-inner {
  max-width: var(--content-max);
  margin: 0 auto;
}
.bs-footer-name {
  font-family: var(--font-display);
  font-size: 18px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: var(--color-on-dark-alt);
  margin-bottom: 8px;
}
.bs-footer-title {
  font-size: 14px;
  color: #9a8f76;
  margin-bottom: 24px;
}
.bs-footer-links {
  display: flex;
  gap: 20px;
  margin-bottom: 24px;
}
.bs-footer-links a {
  font-family: var(--font-ui);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-on-dark-muted);
  text-decoration: none;
  transition: color 0.15s;
}
.bs-footer-links a:hover { color: var(--color-on-dark); }
.bs-footer-copy {
  margin-top: 24px;
}
.bs-footer-copy p {
  font-size: 13px;
  line-height: 1.7;
  color: #9a8f76;
  max-width: 680px;
}
.bs-footer-copy a {
  color: var(--color-on-dark-muted);
  text-decoration: none;
  border-bottom: 1px solid rgba(196, 184, 156, 0.3);
}
```

- [ ] **Step 7: Simplify `assets/javascripts/hepp.js`**

Remove the following functions and their calls:
- `initPanel()` (settings panel toggle)
- `applyFontSize()`, `initFontSize()` (font size control)
- `getSystemTheme()`, `getCurrentTheme()`, `applyTheme()`, `updateThemeIcons()` and theme toggle listener (dark mode)
- `applyFontStyle()`, `initFontStyle()` (system fonts toggle)

Keep:
- `import accessibleFootnotes` and `import enableFloatingFootnotes`
- `initKeyboardShortcuts()` — but update the `/` shortcut (no more panel to open; maybe remove or repurpose)
- `initLightbox()`

Update the `/` keyboard shortcut: since the panel is gone, pressing `/` should no longer try to open it. Remove the bare `/` handler. Keep `⌘/` → `/about/`.

The resulting `hepp.js` should be roughly:

```javascript
import accessibleFootnotes from "./accessibleFootnotes.js";
import enableFloatingFootnotes from "./marginalia.js";

accessibleFootnotes();
enableFloatingFootnotes();

// ─── Keyboard shortcuts ───────────────────────────────────────────────────────

function initKeyboardShortcuts() {
    const navShortcuts = {
        e: '/blog/',
        j: '/notes/',
        i: '/publications/',
        y: '/research/',
        b: '/books/',
        '/': '/about/',
    };

    document.addEventListener('keydown', (e) => {
        const tag = document.activeElement?.tagName.toLowerCase();
        if (tag === 'input' || tag === 'textarea' || document.activeElement?.isContentEditable) return;

        if (e.metaKey || e.ctrlKey) {
            const path = navShortcuts[e.key.toLowerCase()];
            if (path) {
                e.preventDefault();
                window.location.href = path;
            }
        }
    });
}

initKeyboardShortcuts();

// ─── Photo gallery lightbox ────────────────────────────────────────────────────

function initLightbox() {
    document.querySelectorAll('.post-body img, .prose img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', () => {
            const box = document.createElement('div');
            box.className = 'photo-lightbox';
            const full = document.createElement('img');
            full.src = img.dataset.microblogLightbox || img.src;
            full.alt = img.alt;
            box.appendChild(full);
            box.addEventListener('click', () => box.remove());
            document.addEventListener('keydown', function onKey(e) {
                if (e.key === 'Escape') { box.remove(); document.removeEventListener('keydown', onKey); }
            });
            document.body.appendChild(box);
        });
    });
}

initLightbox();
```

- [ ] **Step 8: Update `config.yaml` menu**

Replace the `menu.nav` section:
```yaml
menu:
  nav:
    - identifier: essays
      name: Essays
      url: /blog/
      weight: 1
    - identifier: notes
      name: Notes
      url: /notes/
      weight: 2
    - identifier: publications
      name: Publications
      url: /publications/
      weight: 3
    - identifier: digital-history
      name: Digital History
      url: /research/
      weight: 4
    - identifier: bookshelf
      name: Bookshelf
      url: /books/
      weight: 5
    - identifier: about
      name: About
      url: /about/
      weight: 6
```

- [ ] **Step 9: Delete old nav.html**

Replace `layouts/partials/nav.html` with a simple redirect to the new navbar:

```html
{{ partial "navbar.html" . }}
```

This ensures any templates still referencing `nav.html` will get the new navbar.

- [ ] **Step 10: Verify navigation**

Run `just serve`. Check:
- Top bar renders with wordmark left, nav links right
- Nav links highlight correctly on each section page
- Footer renders with dark band, links, copyright
- Newsletter band is available as partial (not yet shown on any page)
- Keyboard shortcuts still work (⌘E, ⌘J, etc.)
- No JS console errors

- [ ] **Step 11: Commit**

```bash
git add layouts/partials/ assets/stylesheets/main.css assets/javascripts/hepp.js config.yaml
git commit -m "feat: replace nav panel with Big Sky top bar, add footer and newsletter partials"
```

---

## Task 4: Homepage

**Files:**
- Modify: `layouts/index.html` (complete rewrite)
- Modify: `assets/stylesheets/main.css` (add homepage section styles)
- Copy: `design_handoff_author_site/designs/uploads/0C7A1451.webp` → `static/assets/images/portrait.webp`
- Copy: `design_handoff_author_site/designs/uploads/govground-preview.jpg` → `static/assets/images/govground-preview.jpg` (if not already there)

**Interfaces:**
- Consumes: `navbar.html`, `newsletter-band.html`, `site-footer.html` partials from Task 3; design tokens from Task 2
- Produces: Fully styled homepage with intro, featured project, books, writing categories, reading, newsletter

### Step-by-step

- [ ] **Step 1: Copy portrait image**

```bash
cp design_handoff_author_site/designs/uploads/0C7A1451.webp static/assets/images/portrait.webp
```

- [ ] **Step 2: Rewrite `layouts/index.html`**

Reference: `design_handoff_author_site/designs/Home.dc.html`

The homepage structure (top to bottom):
1. Head partial (includes navbar)
2. **Intro section** — grid: portrait left (360px), bio right (eyebrow, H1, bio text, CTAs, social links)
3. **Featured project** — dark band, grid: text left, image right
4. **Books section** — 3-up grid of publication covers
5. **Writing categories** — alt-band background, 3×2 grid of topic columns (6 topics, each with kicker + 3 recent posts + "N more")
6. **Recent Reading** — 2-col list of recent books
7. **Newsletter band** partial
8. Footer partial (includes foot.html for JS)

```html
{{ partial "head.html" . }}

<!-- Intro -->
<section class="bs-intro">
  <div class="bs-intro-inner bs-container">
    <div class="bs-intro-portrait">
      <img src="/assets/images/portrait.webp" alt="Jason A. Heppler" loading="eager">
    </div>
    <div class="bs-intro-text">
      <span class="bs-eyebrow">Environmental &amp; Digital Historian</span>
      <h1 class="bs-intro-h1">Researching the politics of land, environment, and technology in the American West.</h1>
      <p class="bs-intro-bio">I'm a historian at the <a href="https://rfrg.gmu.edu/">Roy Rosenzweig Center for History and New Media</a> at George Mason University. My research and writing sits at the intersection of environmental, urban, and digital history. I build things for the web and think about how digital tools change the way we understand the past.</p>
      <div class="bs-intro-ctas">
        <a href="/blog/" class="bs-btn bs-btn-solid">Read Essays</a>
        <a href="/about/" class="bs-btn bs-btn-outline">About Jason</a>
      </div>
      <div class="bs-intro-social">
        {{ with site.Params.social.bluesky }}<a href="{{ . }}">Bluesky</a>{{ end }}
        {{ with site.Params.social.mastodon }}<a href="{{ . }}" rel="me">Mastodon</a>{{ end }}
        <a href="https://github.com/hepplerj">GitHub</a>
        {{ with site.Params.social.microblog }}<a href="{{ . }}">Micro.blog</a>{{ end }}
      </div>
    </div>
  </div>
</section>

<!-- Featured Project -->
<section class="bs-featured">
  <div class="bs-featured-inner bs-container">
    <div class="bs-featured-text">
      <span class="bs-featured-eyebrow">Featured Project</span>
      <h2 class="bs-featured-title">Governing Ground</h2>
      <p class="bs-featured-desc">A digital history project exploring how American communities have governed their land — the fights over zoning, annexation, and development that shaped the modern metropolis.</p>
      <a href="https://governingground.org" class="bs-btn bs-btn-gold">View Project</a>
    </div>
    <a href="https://governingground.org" class="bs-featured-img">
      <img src="/assets/images/govground-preview.jpg" alt="Governing Ground project preview" loading="lazy" decoding="async">
    </a>
  </div>
</section>

<!-- Books -->
<section class="bs-section">
  <div class="bs-container">
    <h2 class="bs-section-h2">Books</h2>
    <div class="bs-books-grid">
      {{ $pubs := (where site.RegularPages "Section" "publications").ByDate.Reverse }}
      {{ range where $pubs ".Params.image" "ne" nil }}
      <a href="{{ .RelPermalink }}" class="bs-book-card">
        <img src="/assets/images/{{ .Params.image }}" alt="{{ .Title }}" loading="lazy" decoding="async">
        <span class="bs-book-title">{{ .Title }}</span>
        <span class="bs-book-meta">{{ with .Params.publisher }}{{ . }}{{ end }}{{ with .Params.year }} · {{ . }}{{ end }}</span>
      </a>
      {{ end }}
    </div>
    <p class="bs-section-more"><a href="/publications/">All publications &rarr;</a></p>
  </div>
</section>

<!-- Writing Categories -->
<section class="bs-writing-band">
  <div class="bs-container">
    <h2 class="bs-section-h2">Writing</h2>
    {{ $topics := slice
      (dict "slug" "digital-history" "name" "Digital History")
      (dict "slug" "environmental-history" "name" "Environmental History")
      (dict "slug" "artificial-intelligence" "name" "AI")
      (dict "slug" "programming" "name" "Programming")
      (dict "slug" "place" "name" "Place")
      (dict "slug" "personal" "name" "Personal")
    }}
    <div class="bs-writing-grid">
      {{ range $topics }}
        {{ $slug := .slug }}
        {{ $name := .name }}
        {{ $matching := where site.RegularPages ".Params.tags" "intersect" (slice $slug) }}
        {{ $sorted := $matching.ByDate.Reverse }}
        {{ $count := len $sorted }}
        {{ if gt $count 0 }}
        <div class="bs-writing-col">
          <h3 class="bs-writing-kicker">{{ $name }}</h3>
          {{ range first 3 $sorted }}
          <a href="{{ .RelPermalink }}" class="bs-writing-post">
            <span class="bs-writing-post-title">{{ .Title }}</span>
            <time datetime="{{ .Date.Format "2006-01-02" }}">{{ .Date.Format "Jan 2006" }}</time>
          </a>
          {{ end }}
          {{ if gt $count 3 }}
          <a href="/tags/{{ $slug }}/" class="bs-writing-more">{{ sub $count 3 }} more &rarr;</a>
          {{ end }}
        </div>
        {{ end }}
      {{ end }}
    </div>
  </div>
</section>

<!-- Recent Reading -->
<section class="bs-section">
  <div class="bs-container">
    <h2 class="bs-section-h2">Recent Reading</h2>
    <div class="bs-reading-grid">
      {{ range first 8 (where site.RegularPages "Section" "books") }}
      <div class="bs-reading-row">
        <div class="bs-reading-info">
          <span class="bs-reading-title">{{ .Title }}</span>
          <span class="bs-reading-author">{{ .Params.author }}</span>
        </div>
        <span class="bs-reading-year">{{ .Params.pub_year }}</span>
      </div>
      {{ end }}
    </div>
    <p class="bs-section-more"><a href="/books/">Bookshelf &rarr;</a></p>
  </div>
</section>

<!-- Newsletter -->
{{ partial "newsletter-band.html" . }}

<!-- Footer -->
{{ partial "foot.html" . }}
```

- [ ] **Step 3: Add homepage CSS to main.css**

Add these styles to `@layer components` in `main.css`. Reference `design_handoff_author_site/designs/Home.dc.html` for exact values:

```css
/* ── Homepage: Intro ── */
.bs-intro {
  background: var(--color-paper);
}
.bs-intro-inner {
  display: grid;
  grid-template-columns: 360px 1fr;
  gap: 64px;
  padding-top: 92px;
  padding-bottom: 90px;
}
.bs-intro-portrait img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  object-position: center 20%;
}
.bs-intro-h1 {
  font-size: 56px;
  line-height: 1.05;
  margin: 0 0 22px;
}
.bs-intro-bio {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 21px;
  line-height: 1.58;
  max-width: 600px;
  text-wrap: pretty;
  margin: 0 0 28px;
}
.bs-intro-bio a {
  color: var(--color-terracotta);
  text-decoration: none;
  border-bottom: 1px solid var(--color-link-underline);
}
.bs-intro-ctas {
  display: flex;
  gap: 12px;
  margin-bottom: 28px;
}
.bs-intro-social {
  display: flex;
  gap: 18px;
}
.bs-intro-social a {
  font-family: var(--font-ui);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.15s;
}
.bs-intro-social a:hover { color: var(--color-terracotta); }

@media (max-width: 860px) {
  .bs-intro-inner {
    grid-template-columns: 1fr;
    gap: 30px;
    padding-top: 56px;
    padding-bottom: 56px;
  }
  .bs-intro-portrait { max-width: 300px; margin: 0 auto; }
  .bs-intro-h1 { font-size: 40px; }
}

/* ── Homepage: Featured Project ── */
.bs-featured {
  background: var(--color-ink-display);
  color: var(--color-on-dark-alt);
}
.bs-featured-inner {
  display: grid;
  grid-template-columns: 1fr 1.05fr;
  gap: 60px;
  padding-top: 64px;
  padding-bottom: 64px;
}
.bs-featured-eyebrow {
  display: block;
  font-family: var(--font-body-sc);
  font-size: 12px;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 18px;
}
.bs-featured-title {
  font-size: 44px;
  line-height: 1.08;
  margin: 0 0 18px;
  color: var(--color-on-dark-alt);
}
.bs-featured-desc {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 20px;
  line-height: 1.6;
  color: #c9bda1;
  text-wrap: pretty;
  margin: 0 0 28px;
}
.bs-featured-img img {
  width: 100%;
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.35);
}

@media (max-width: 860px) {
  .bs-featured-inner {
    grid-template-columns: 1fr;
  }
  .bs-featured-text { padding: 52px 0 28px; }
  .bs-featured-img { min-height: 240px; margin-bottom: 52px; }
}

/* ── Homepage: Books ── */
.bs-section-h2 {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 28px;
  margin: 0 0 32px;
}
.bs-books-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.bs-book-card {
  text-decoration: none;
  display: block;
}
.bs-book-card img {
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  margin-bottom: 16px;
  box-shadow: 0 12px 26px rgba(0, 0, 0, 0.18);
}
.bs-book-title {
  display: block;
  font-family: var(--font-body);
  font-size: 20px;
  line-height: 1.3;
  color: var(--color-ink);
}
.bs-book-meta {
  display: block;
  font-family: var(--font-ui);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin-top: 8px;
}
.bs-section-more {
  margin-top: 24px;
}
.bs-section-more a {
  font-family: var(--font-ui);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.15s;
}
.bs-section-more a:hover { color: var(--color-terracotta); }

@media (max-width: 520px) {
  .bs-books-grid { grid-template-columns: 1fr 1fr; gap: 24px; }
}

/* ── Homepage: Writing Categories ── */
.bs-writing-band {
  background: var(--color-paper-alt);
  padding: var(--section-pad) 0;
}
.bs-writing-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 48px 56px;
}
.bs-writing-kicker {
  font-family: var(--font-body-sc);
  font-size: 12px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-terracotta);
  padding-bottom: 14px;
  border-bottom: 1px solid rgba(36, 29, 19, 0.25);
  margin: 0 0 6px;
}
.bs-writing-post {
  display: block;
  padding: 13px 0;
  border-bottom: 1px solid rgba(36, 29, 19, 0.12);
  text-decoration: none;
  transition: color 0.15s;
}
.bs-writing-post:hover .bs-writing-post-title { color: var(--color-terracotta); }
.bs-writing-post-title {
  display: block;
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 1.3;
  color: var(--color-ink);
}
.bs-writing-post time {
  display: block;
  font-family: var(--font-ui);
  font-size: 12px;
  color: var(--color-muted);
  margin-top: 3px;
}
.bs-writing-more {
  display: inline-block;
  margin-top: 14px;
  font-family: var(--font-ui);
  font-size: 11px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-terracotta);
  text-decoration: none;
}

@media (max-width: 860px) {
  .bs-writing-grid { grid-template-columns: 1fr 1fr; gap: 40px 44px; }
}
@media (max-width: 520px) {
  .bs-writing-grid { grid-template-columns: 1fr; }
}

/* ── Homepage: Recent Reading ── */
.bs-reading-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0 56px;
}
.bs-reading-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: baseline;
  padding: 16px 0;
  border-top: 1px solid var(--color-hairline);
}
.bs-reading-title {
  font-family: var(--font-body);
  font-size: 18px;
  color: var(--color-ink);
}
.bs-reading-author {
  font-family: var(--font-body);
  font-style: italic;
  color: var(--color-muted);
  margin-left: 6px;
}
.bs-reading-author::before { content: '— '; }
.bs-reading-year {
  font-family: var(--font-ui);
  font-size: 13px;
  color: var(--color-muted);
}

@media (max-width: 860px) {
  .bs-reading-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 4: Verify homepage**

Run `just serve`. Compare to `design_handoff_author_site/designs/Home.dc.html` opened in a browser. Check:
- Intro grid layout (portrait + bio)
- Featured project dark band
- Books 3-up grid
- Writing categories 3-col grid on alt-band
- Recent reading 2-col
- Newsletter band (terracotta)
- Footer (dark)
- Mobile responsiveness at 860px and 520px breakpoints

- [ ] **Step 5: Commit**

```bash
git add layouts/index.html assets/stylesheets/main.css static/assets/images/portrait.webp
git commit -m "feat: implement Big Sky homepage with intro, featured project, writing, and reading sections"
```

---

## Task 5: Essay Template (Blog Single)

**Files:**
- Modify: `layouts/blog/single.html` (complete rewrite)
- Modify: `layouts/partials/post-footer.html` (update for new design)
- Modify: `assets/stylesheets/main.css` (add essay page styles)

**Interfaces:**
- Consumes: `navbar.html`, `newsletter-band.html`, `site-footer.html` from Task 3; `.prose` styles from Task 2
- Produces: Fully styled single essay page with breadcrumb, eyebrow, reading column, post footer, prev/next

Reference: `design_handoff_author_site/designs/Essay.dc.html`

- [ ] **Step 1: Rewrite `layouts/blog/single.html`**

```html
{{ partial "head.html" . }}

<div class="bs-essay">
  <!-- Breadcrumb -->
  <div class="bs-reading-col">
    <a href="/blog/" class="bs-breadcrumb">&larr; Essays</a>
  </div>

  <!-- Article Header -->
  <header class="bs-reading-col bs-essay-header">
    <span class="bs-eyebrow">Essay{{ with .Params.tags }} · {{ index . 0 | humanize }}{{ end }}</span>
    <h1 class="bs-essay-title">{{ .Title }}</h1>
    {{ with .Params.lede }}
    <p class="bs-essay-standfirst">{{ . }}</p>
    {{ end }}
    <div class="bs-essay-meta">
      <time datetime="{{ .Date.Format "2006-01-02" }}">{{ .Date.Format "January 2, 2006" }}</time>
      <span class="bs-meta-dot"></span>
      <span>Jason Heppler</span>
      <span class="bs-meta-dot"></span>
      <span>{{ .ReadingTime }} min read</span>
    </div>
  </header>

  <!-- Optional lead image -->
  {{ with .Params.image }}
  <figure class="bs-essay-lead-image">
    <img src="/assets/images/{{ . }}" alt="{{ $.Title }}" loading="lazy" decoding="async">
  </figure>
  <div class="bs-reading-col"><div class="bs-hairline" style="margin:44px 0"></div></div>
  {{ end }}

  <!-- Prose body -->
  <article class="bs-reading-col prose e-content h-entry">
    {{ .Content }}
  </article>

  <!-- Footnotes divider (if content has footnotes) -->

  <!-- Tags -->
  <div class="bs-reading-col bs-essay-tags">
    {{ range .Params.tags }}
    <a href="/tags/{{ . | urlize }}/" class="bs-post-tag">{{ . | humanize }}</a>
    {{ end }}
  </div>

  <!-- Author card -->
  <div class="bs-reading-col bs-author-card">
    <div class="bs-author-info">
      <img src="/assets/images/portrait.webp" alt="Jason Heppler" class="bs-author-avatar">
      <div>
        <div class="bs-author-name">Jason A. Heppler</div>
        <div class="bs-author-role">Environmental &amp; Digital Historian</div>
      </div>
    </div>
    <div class="bs-author-links">
      {{ with site.Params.social.bluesky }}<a href="{{ . }}">Bluesky</a>{{ end }}
      {{ with site.Params.social.mastodon }}<a href="{{ . }}" rel="me">Mastodon</a>{{ end }}
      <a href="https://github.com/hepplerj">GitHub</a>
    </div>
  </div>

  <!-- Prev / Next -->
  {{ $pages := where site.RegularPages "Section" "blog" }}
  {{ $prev := $pages.Prev . }}
  {{ $next := $pages.Next . }}
  {{ if or $prev $next }}
  <nav class="bs-reading-col bs-prevnext">
    {{ with $prev }}
    <a href="{{ .RelPermalink }}" class="bs-prevnext-link">
      <span class="bs-prevnext-label">&larr; Previous</span>
      <span class="bs-prevnext-title">{{ .Title }}</span>
    </a>
    {{ else }}<div></div>{{ end }}
    {{ with $next }}
    <a href="{{ .RelPermalink }}" class="bs-prevnext-link bs-prevnext-right">
      <span class="bs-prevnext-label">Next &rarr;</span>
      <span class="bs-prevnext-title">{{ .Title }}</span>
    </a>
    {{ else }}<div></div>{{ end }}
  </nav>
  {{ end }}

  <!-- Webmentions -->
  <aside class="bs-reading-col">
    <div id="webmentions"></div>
  </aside>

  <!-- Bridgy publish -->
  <a href="https://brid.gy/publish/bluesky" class="u-syndication" hidden></a>
</div>

{{ partial "newsletter-band.html" . }}
{{ partial "foot.html" . }}
```

- [ ] **Step 2: Add essay page CSS**

Add to `@layer components` in `main.css`:

```css
/* ── Essay page ── */
.bs-essay {
  padding-top: 20px;
  padding-bottom: 48px;
}
.bs-breadcrumb {
  display: inline-block;
  font-family: var(--font-ui);
  font-size: 12px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  margin-bottom: 40px;
  transition: color 0.15s;
}
.bs-breadcrumb:hover { color: var(--color-terracotta); }

.bs-essay-header {
  margin-bottom: 48px;
}
.bs-essay-title {
  font-size: 52px;
  line-height: 1.08;
  margin: 0 0 0;
}
.bs-essay-standfirst {
  font-family: var(--font-body);
  font-style: italic;
  font-weight: 300;
  font-size: 22px;
  line-height: 1.5;
  color: #5c5140;
  margin: 22px 0 0;
}
.bs-essay-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: var(--font-ui);
  font-size: 13px;
  letter-spacing: 0.06em;
  color: var(--color-muted);
  margin-top: 24px;
}
.bs-meta-dot {
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background: #b09a72;
}
.bs-essay-lead-image {
  max-width: 1040px;
  margin: 0 auto;
  padding: 0 var(--gutter);
}
.bs-essay-lead-image img {
  width: 100%;
  aspect-ratio: 16/7;
  object-fit: cover;
  object-position: center 45%;
}

/* ── Essay: Tags ── */
.bs-essay-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 32px 0;
  border-top: 1px solid var(--color-hairline);
  margin-top: 48px;
}
.bs-post-tag {
  font-family: var(--font-ui);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-terracotta);
  border: 1px solid var(--color-link-underline);
  padding: 7px 14px;
  text-decoration: none;
  border-radius: 2px;
  transition: all 0.15s;
}
.bs-post-tag:hover {
  background: var(--color-terracotta);
  color: var(--color-on-dark);
}

/* ── Essay: Author card ── */
.bs-author-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-top: 1px solid var(--color-hairline);
  border-bottom: 1px solid var(--color-hairline);
  margin-top: 16px;
}
.bs-author-info {
  display: flex;
  align-items: center;
  gap: 16px;
}
.bs-author-avatar {
  width: 52px;
  height: 52px;
  border-radius: 50%;
  object-fit: cover;
  object-position: center 22%;
}
.bs-author-name {
  font-family: var(--font-display);
  font-size: 17px;
}
.bs-author-role {
  font-size: 13px;
  color: var(--color-muted);
}
.bs-author-links {
  display: flex;
  gap: 16px;
}
.bs-author-links a {
  font-family: var(--font-ui);
  font-size: 12px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
  text-decoration: none;
  transition: color 0.15s;
}
.bs-author-links a:hover { color: var(--color-terracotta); }

/* ── Essay: Prev/Next ── */
.bs-prevnext {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 32px;
  padding-top: 24px;
}
.bs-prevnext-link {
  text-decoration: none;
  display: block;
}
.bs-prevnext-right { text-align: right; }
.bs-prevnext-label {
  display: block;
  font-family: var(--font-ui);
  font-size: 11px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--color-muted);
  margin-bottom: 8px;
}
.bs-prevnext-title {
  display: block;
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 1.3;
  color: var(--color-ink);
  transition: color 0.15s;
}
.bs-prevnext-link:hover .bs-prevnext-title { color: var(--color-terracotta); }

@media (max-width: 760px) {
  .bs-essay-title { font-size: 34px; }
  .bs-prevnext { grid-template-columns: 1fr; gap: 18px; }
  .bs-prevnext-right { text-align: left; }
}
```

- [ ] **Step 3: Verify essay page**

Run `just serve` and navigate to any blog post. Compare to `Essay.dc.html`. Check:
- Breadcrumb, eyebrow, title, standfirst, meta
- Prose typography (font, size, line-height, link colors)
- Tags and author card
- Prev/next navigation
- Newsletter band and footer below
- Mobile layout at 760px

- [ ] **Step 4: Commit**

```bash
git add layouts/blog/single.html assets/stylesheets/main.css
git commit -m "feat: implement Big Sky essay template with reading column and author card"
```

---

## Task 6: Writing Archive

**Files:**
- Modify: `layouts/_default/archive.html` (or create if it doesn't exist — check what `content/archive.md` uses with `layout: archive`)
- Create: `static/js/archive-filter.js`
- Modify: `assets/stylesheets/main.css` (add archive styles)

**Interfaces:**
- Consumes: Design tokens, navbar, footer from previous tasks
- Produces: Unified writing archive page at `/archive/` with filter chips, search, and type badges

Reference: `design_handoff_author_site/designs/Writing-Archive.dc.html`

- [ ] **Step 1: Create/update archive layout**

The `content/archive.md` uses `layout: archive` and `type: archive`. Create `layouts/archive/single.html` (Hugo looks for `layouts/<type>/<layout>.html`):

```html
{{ partial "head.html" . }}

<div class="bs-archive">
  <header class="bs-container-narrow bs-archive-header">
    <span class="bs-eyebrow">Writing</span>
    <h1 class="bs-archive-title">Essays, Notes &amp; Commonplace</h1>
    <p class="bs-archive-lead">The full archive of my writing — long-form essays, shorter notes, and links I've found worth sharing.</p>
  </header>

  <div class="bs-container-narrow">
    <!-- Controls -->
    <div class="bs-archive-controls">
      <div class="bs-archive-chips" id="archiveChips">
        <button class="bs-chip on" data-filter="all">All <span class="count" id="countAll"></span></button>
        <button class="bs-chip" data-filter="essay">Essays <span class="count" id="countEssay"></span></button>
        <button class="bs-chip" data-filter="note">Notes <span class="count" id="countNote"></span></button>
        <button class="bs-chip" data-filter="link">Commonplace <span class="count" id="countLink"></span></button>
      </div>
      <input type="search" class="bs-archive-search" id="archiveSearch" placeholder="Search titles…" aria-label="Search writing">
    </div>
    <div class="bs-archive-results" id="archiveResultCount"></div>

    <!-- Post list -->
    <div class="bs-archive-list" id="archiveList">
      {{/* Combine all three sections, sorted by date descending */}}
      {{ $blog := where site.RegularPages "Section" "blog" }}
      {{ $notes := where site.RegularPages "Section" "notes" }}
      {{ $links := where site.RegularPages "Section" "links" }}
      {{ $all := union $blog (union $notes $links) }}
      {{ range $all.ByDate.Reverse }}
      <a href="{{ .RelPermalink }}" class="bs-archive-row" data-type="{{ cond (eq .Section "blog") "essay" (cond (eq .Section "notes") "note" "link") }}" data-title="{{ .Title | lower }}">
        <span class="bs-tag bs-tag-{{ cond (eq .Section "blog") "essay" (cond (eq .Section "notes") "note" "link") }}">{{ cond (eq .Section "blog") "Essay" (cond (eq .Section "notes") "Note" "Link") }}</span>
        <div class="bs-archive-row-text">
          <span class="bs-archive-row-title">{{ .Title }}</span>
          {{ if and (eq .Section "links") .Params.external }}
          <span class="bs-archive-row-source">{{ .Params.external | replaceRE "^https?://(www\\.)?" "" | replaceRE "/.*$" "" }}</span>
          {{ end }}
        </div>
        <time datetime="{{ .Date.Format "2006-01-02" }}">{{ .Date.Format "Jan 2, 2006" }}</time>
      </a>
      {{ end }}
    </div>

    <!-- Empty state -->
    <div class="bs-archive-empty" id="archiveEmpty" style="display:none">No posts match your search.</div>
  </div>
</div>

{{ partial "newsletter-band.html" . }}
{{ partial "foot.html" . }}

<script src="/js/archive-filter.js" defer></script>
```

- [ ] **Step 2: Create `static/js/archive-filter.js`**

```javascript
(function () {
  const chips = document.querySelectorAll('#archiveChips .bs-chip');
  const search = document.getElementById('archiveSearch');
  const rows = document.querySelectorAll('.bs-archive-row');
  const resultCount = document.getElementById('archiveResultCount');
  const emptyState = document.getElementById('archiveEmpty');

  let filter = 'all';
  let query = '';

  // Set initial counts
  const counts = { all: rows.length, essay: 0, note: 0, link: 0 };
  rows.forEach(r => { counts[r.dataset.type]++; });
  document.getElementById('countAll').textContent = counts.all;
  document.getElementById('countEssay').textContent = counts.essay;
  document.getElementById('countNote').textContent = counts.note;
  document.getElementById('countLink').textContent = counts.link;

  function update() {
    let visible = 0;
    const q = query.toLowerCase();
    rows.forEach(row => {
      const matchType = filter === 'all' || row.dataset.type === filter;
      const matchQuery = !q || row.dataset.title.includes(q);
      const show = matchType && matchQuery;
      row.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    resultCount.textContent = visible + ' post' + (visible !== 1 ? 's' : '');
    emptyState.style.display = visible === 0 ? '' : 'none';
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
      filter = chip.dataset.filter;
      update();
    });
  });

  search.addEventListener('input', () => {
    query = search.value;
    update();
  });

  update();
})();
```

- [ ] **Step 3: Add archive CSS**

Add to `@layer components` in `main.css`:

```css
/* ── Writing Archive ── */
.bs-archive-header {
  padding-top: var(--section-pad);
  padding-bottom: 30px;
}
.bs-archive-title {
  font-size: 52px;
  line-height: 1.06;
  max-width: 760px;
  margin: 0 0 18px;
}
.bs-archive-lead {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 21px;
  line-height: 1.55;
  color: #3a3122;
  text-wrap: pretty;
  margin: 0;
}
.bs-archive-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 18px;
  flex-wrap: wrap;
  padding-bottom: 18px;
}
.bs-archive-chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.bs-archive-search {
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--color-ink);
  background: transparent;
  border: 1px solid rgba(36, 29, 19, 0.25);
  padding: 10px 16px;
  width: 240px;
  border-radius: 2px;
  outline: none;
}
.bs-archive-search::placeholder { color: var(--color-ink); }
.bs-archive-results {
  font-family: var(--font-ui);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-faint);
  padding: 6px 0 0;
  margin-bottom: 12px;
}
.bs-archive-row {
  display: grid;
  grid-template-columns: 132px 1fr auto;
  gap: 24px;
  align-items: baseline;
  padding: 20px 0;
  border-top: 1px solid var(--color-hairline);
  text-decoration: none;
  transition: color 0.15s;
}
.bs-archive-row:hover .bs-archive-row-title { color: var(--color-terracotta); }
.bs-archive-row-text { min-width: 0; }
.bs-archive-row-title {
  display: block;
  font-family: var(--font-body);
  font-size: 20px;
  line-height: 1.32;
  color: var(--color-ink);
}
.bs-archive-row-source {
  display: block;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 14.5px;
  color: var(--color-muted);
  margin-top: 4px;
}
.bs-archive-row time {
  font-family: var(--font-ui);
  font-size: 13px;
  letter-spacing: 0.04em;
  color: var(--color-muted);
  white-space: nowrap;
}
.bs-archive-empty {
  padding: 60px 0;
  text-align: center;
  font-family: var(--font-body);
  font-style: italic;
  font-size: 19px;
  color: var(--color-muted);
}

@media (max-width: 860px) {
  .bs-archive-title { font-size: 42px; }
}
@media (max-width: 680px) {
  .bs-archive-row { grid-template-columns: 1fr; gap: 6px; }
  .bs-archive-row time { color: var(--color-faint); }
  .bs-archive-controls { flex-direction: column; align-items: stretch; }
  .bs-archive-search { width: 100%; }
}
```

- [ ] **Step 4: Verify archive page**

Run `just serve`, navigate to `/archive/`. Check:
- All posts from blog, notes, and links appear
- Filter chips toggle correctly (All/Essays/Notes/Commonplace)
- Search filters titles in real-time
- Type badges display with correct colors
- Result count updates
- Empty state shows when no matches
- Mobile layout at 680px

- [ ] **Step 5: Commit**

```bash
git add layouts/archive/ static/js/archive-filter.js assets/stylesheets/main.css
git commit -m "feat: implement unified Writing Archive with filter chips and search"
```

---

## Task 7: About Page

**Files:**
- Modify: `layouts/_default/about.html` (complete rewrite)
- Modify: `assets/stylesheets/main.css` (add about page styles)

**Interfaces:**
- Consumes: Design tokens, navbar, newsletter, footer from previous tasks
- Produces: Styled About page with portrait grid, roles, bio + sidebar, "By the Numbers" stats

Reference: `design_handoff_author_site/designs/About.dc.html`

- [ ] **Step 1: Rewrite `layouts/_default/about.html`**

```html
{{ partial "head.html" . }}

<div class="bs-about">
  <!-- Header with portrait -->
  <section class="bs-abouthead bs-container">
    <div class="bs-about-portrait">
      <img src="/assets/images/portrait.webp" alt="Jason A. Heppler">
    </div>
    <div class="bs-about-intro">
      <span class="bs-eyebrow">About</span>
      <h1 class="bs-about-title">Jason A. Heppler</h1>
      <p class="bs-about-lead">I'm an environmental and digital historian working at the intersection of the humanities and technology.</p>
      <div class="bs-about-ctas">
        <a href="/assets/files/jah-cv.pdf" class="bs-btn bs-btn-solid">View CV</a>
      </div>
    </div>
  </section>

  <!-- Roles -->
  <section class="bs-roles-band">
    <div class="bs-container">
      <div class="bs-roles-grid">
        <div class="bs-role">
          <h3 class="bs-role-title">Digital History Director</h3>
          <p class="bs-role-org">Roy Rosenzweig Center for History &amp; New Media</p>
        </div>
        <div class="bs-role">
          <h3 class="bs-role-title">Research Professor</h3>
          <p class="bs-role-org">George Mason University</p>
        </div>
        <div class="bs-role">
          <h3 class="bs-role-title">Author &amp; Historian</h3>
          <p class="bs-role-org">Environmental &amp; Western History</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Bio body -->
  <section class="bs-container bs-about-body">
    <div class="bs-about-body-grid">
      <div class="prose">
        {{ .Content }}
      </div>
      <!-- Sidebar: could add "Current Writing Projects" here -->
    </div>
  </section>

  <!-- By the Numbers -->
  {{ $posts := where site.RegularPages "Section" "in" (slice "blog" "notes" "links") }}
  {{ $scratch := newScratch }}
  {{ range $posts }}{{ $scratch.Add "wordcount" .WordCount }}{{ end }}
  {{ $postCount := len $posts }}
  {{ $wordCount := $scratch.Get "wordcount" }}
  {{ $firstYear := (index (last 1 $posts) 0).Date.Year }}
  {{ $yearsActive := sub now.Year $firstYear | add 1 }}

  <section class="bs-numband">
    <div class="bs-container">
      <div class="bs-stats-grid">
        <div class="bs-stat">
          <div class="bs-stat-num">{{ $yearsActive }}</div>
          <div class="bs-stat-label">Years Writing</div>
        </div>
        <div class="bs-stat">
          <div class="bs-stat-num">{{ $postCount | lang.FormatNumberCustom 0 }}</div>
          <div class="bs-stat-label">Posts</div>
        </div>
        <div class="bs-stat">
          <div class="bs-stat-num">{{ div $wordCount 1000 | lang.FormatNumberCustom 0 }}k</div>
          <div class="bs-stat-label">Words Written</div>
        </div>
        <div class="bs-stat">
          <div class="bs-stat-num">{{ len (where site.RegularPages "Section" "links") | lang.FormatNumberCustom 0 }}</div>
          <div class="bs-stat-label">Links Shared</div>
        </div>
        <div class="bs-stat">
          <div class="bs-stat-num">{{ len $.Site.Taxonomies.tags }}</div>
          <div class="bs-stat-label">Topics</div>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact / Links — moved from old nav panel -->
  <section class="bs-container bs-section">
    <div class="bs-about-links-grid">
      <div>
        <h3 class="bs-about-link-heading">Connect</h3>
        <ul class="bs-about-link-list">
          {{ with site.Params.Author.email }}<li><a href="mailto:{{ . }}">Email</a></li>{{ end }}
          {{ with site.Params.social.bluesky }}<li><a href="{{ . }}">Bluesky</a></li>{{ end }}
          {{ with site.Params.social.mastodon }}<li><a href="{{ . }}" rel="me">Mastodon</a></li>{{ end }}
          <li><a href="https://github.com/hepplerj">GitHub</a></li>
          <li><a href="https://www.linkedin.com/in/jasonheppler/">LinkedIn</a></li>
          {{ with site.Params.social.microblog }}<li><a href="{{ . }}">Micro.blog</a></li>{{ end }}
        </ul>
      </div>
      <div>
        <h3 class="bs-about-link-heading">Elsewhere</h3>
        <ul class="bs-about-link-list">
          <li><a href="/blogroll/">Blogroll</a></li>
          <li><a href="/courses/">Teaching</a></li>
          <li><a href="/uses/">Uses</a></li>
          <li><a href="https://www.tackandink.org/">Newsletter</a></li>
        </ul>
      </div>
      <div>
        <h3 class="bs-about-link-heading">Feeds</h3>
        <ul class="bs-about-link-list">
          <li><a href="/feed.xml">RSS</a></li>
          <li><a href="/feed.json">JSON Feed</a></li>
        </ul>
      </div>
    </div>
  </section>
</div>

{{ partial "newsletter-band.html" . }}
{{ partial "foot.html" . }}
```

- [ ] **Step 2: Add about page CSS**

Add to `@layer components` in `main.css`:

```css
/* ── About page ── */
.bs-abouthead {
  display: grid;
  grid-template-columns: 420px 1fr;
  gap: 64px;
  padding-top: 78px;
  padding-bottom: 72px;
}
.bs-about-portrait img {
  width: 100%;
  aspect-ratio: 4/5;
  object-fit: cover;
  object-position: center 20%;
}
.bs-about-title {
  font-size: 46px;
  margin: 0 0 18px;
}
.bs-about-lead {
  font-family: var(--font-body);
  font-weight: 300;
  font-size: 21px;
  line-height: 1.55;
  margin: 0 0 28px;
  text-wrap: pretty;
}
.bs-about-ctas {
  display: flex;
  gap: 12px;
}

/* Roles band */
.bs-roles-band {
  background: var(--color-paper-alt);
  padding: 48px 0;
}
.bs-roles-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.bs-role {
  border-top: 2px solid var(--color-ink-display);
  padding-top: 20px;
}
.bs-role-title {
  font-family: var(--font-display);
  font-size: 20px;
  margin: 0 0 6px;
}
.bs-role-org {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--color-muted);
  margin: 0;
}

/* Bio body */
.bs-about-body {
  padding-top: 56px;
  padding-bottom: 48px;
}

/* By the Numbers */
.bs-numband {
  background: var(--color-ink-display);
  color: var(--color-on-dark-alt);
  padding: 64px 0;
}
.bs-stats-grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  gap: 20px;
  text-align: center;
}
.bs-stat-num {
  font-family: var(--font-display);
  font-size: 48px;
  color: var(--color-on-dark-alt);
  margin-bottom: 8px;
}
.bs-stat-label {
  font-family: var(--font-ui);
  font-size: 11px;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--color-on-dark-muted);
}

/* Contact links */
.bs-about-links-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}
.bs-about-link-heading {
  font-family: var(--font-body-sc);
  font-size: 13px;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-terracotta);
  margin: 0 0 16px;
}
.bs-about-link-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.bs-about-link-list li {
  padding: 8px 0;
}
.bs-about-link-list a {
  font-family: var(--font-body);
  font-size: 17px;
  color: var(--color-ink);
  text-decoration: none;
  border-bottom: 1px solid var(--color-link-underline);
  transition: color 0.15s;
}
.bs-about-link-list a:hover { color: var(--color-terracotta); }

@media (max-width: 860px) {
  .bs-abouthead { grid-template-columns: 1fr; gap: 30px; padding-top: 56px; padding-bottom: 56px; }
  .bs-about-portrait { max-width: 340px; }
  .bs-about-title { font-size: 34px; }
  .bs-roles-grid { grid-template-columns: 1fr; gap: 24px; }
  .bs-stats-grid { grid-template-columns: repeat(2, 1fr); gap: 28px 20px; }
  .bs-about-links-grid { grid-template-columns: 1fr; gap: 30px; }
}
@media (max-width: 520px) {
  .bs-stat-num { font-size: 34px; }
}
```

- [ ] **Step 3: Verify about page**

Run `just serve`, navigate to `/about/`. Check:
- Portrait + bio grid layout
- Roles band with 3-up cards
- Bio prose text
- Stats dark band with big numbers
- Contact links section (replaces nav panel deep links)
- Mobile layout

- [ ] **Step 4: Commit**

```bash
git add layouts/_default/about.html assets/stylesheets/main.css
git commit -m "feat: implement Big Sky about page with portrait, roles, stats, and contact links"
```

---

## Task 8: Publications, Book Detail & Digital History

**Files:**
- Modify: `layouts/publications/single.html` (update for new design)
- Create: `layouts/research/list.html` (or modify existing Digital History template — check what `/research/` uses)
- Modify: `assets/stylesheets/main.css` (add publications and project styles)

**Interfaces:**
- Consumes: Design tokens, navbar, footer from previous tasks
- Produces: Styled publications page, book detail page, digital history project grid

References:
- `design_handoff_author_site/designs/Publications.dc.html`
- `design_handoff_author_site/designs/Publication-Silicon-Valley.dc.html`
- `design_handoff_author_site/designs/Digital-History.dc.html`

- [ ] **Step 1: Update `layouts/publications/single.html`**

Rewrite to match the Big Sky book detail design. The template already handles two cases (book with image vs. overview). Update the book-with-image case to use the new layout:

```html
{{ partial "head.html" . }}

<div class="bs-publication">
  {{ if .Params.image }}
  <!-- Book detail page -->
  <div class="bs-container-narrow">
    <a href="/publications/" class="bs-breadcrumb">&larr; Publications</a>
  </div>

  <section class="bs-bookhead bs-container-narrow">
    <div class="bs-bookhead-cover">
      <img src="/assets/images/{{ .Params.image }}" alt="{{ .Title }}" class="bs-cover-img" loading="lazy" decoding="async">
    </div>
    <div class="bs-bookhead-info">
      <span class="bs-eyebrow">Book{{ with .Params.year }} · {{ . }}{{ end }}</span>
      <h1 class="bs-bookhead-title">{{ .Title }}</h1>
      {{ with .Params.author }}<p class="bs-bookhead-author">by {{ . }}</p>{{ end }}
      <p class="bs-bookhead-publisher">{{ with .Params.publisher }}{{ . }}{{ end }}</p>

      <div class="prose">
        {{ .Content }}
      </div>

      {{ if .Params.purchase_links }}
      <div class="bs-bookhead-buy">
        {{ range .Params.purchase_links }}
        <a href="{{ .url }}" class="bs-btn {{ if eq .name "OU Press" }}bs-btn-solid{{ else }}bs-btn-outline{{ end }}">{{ .name }}</a>
        {{ end }}
      </div>
      {{ end }}
    </div>
  </section>

  {{ if or .Params.isbn_paperback .Params.isbn_hardcover .Params.isbn_ebook }}
  <section class="bs-container-narrow bs-isbn-section">
    {{ with .Params.isbn_paperback }}<p><strong>Paperback ISBN:</strong> {{ . }}</p>{{ end }}
    {{ with .Params.isbn_hardcover }}<p><strong>Hardcover ISBN:</strong> {{ . }}</p>{{ end }}
    {{ with .Params.isbn_ebook }}<p><strong>Ebook ISBN:</strong> {{ . }}</p>{{ end }}
  </section>
  {{ end }}

  {{ else }}
  <!-- Publications overview -->
  <section class="bs-container-narrow bs-section">
    <span class="bs-eyebrow">Research</span>
    <h1 class="bs-archive-title">{{ .Title }}</h1>
    <div class="prose">
      {{ .Content }}
    </div>
  </section>
  {{ end }}
</div>

{{ partial "newsletter-band.html" . }}
{{ partial "foot.html" . }}
```

- [ ] **Step 2: Add publication and project CSS**

Add to `@layer components`:

```css
/* ── Publication detail ── */
.bs-publication { padding-top: 20px; }
.bs-bookhead {
  display: grid;
  grid-template-columns: 320px 1fr;
  gap: 56px;
  padding-top: 40px;
  padding-bottom: 56px;
}
.bs-bookhead-cover {
  position: sticky;
  top: 80px;
  align-self: start;
}
.bs-cover-img {
  width: 100%;
  aspect-ratio: 2/3;
  object-fit: cover;
  box-shadow: 0 20px 44px rgba(0, 0, 0, 0.24);
}
.bs-bookhead-title {
  font-size: 44px;
  margin: 0 0 8px;
}
.bs-bookhead-author {
  font-family: var(--font-body);
  font-size: 19px;
  color: var(--color-muted);
  margin: 0 0 6px;
}
.bs-bookhead-publisher {
  font-family: var(--font-body);
  font-style: italic;
  font-size: 17px;
  color: var(--color-muted);
  margin: 0 0 24px;
}
.bs-bookhead-buy {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 24px;
}
.bs-isbn-section {
  padding: 24px 0 48px;
}
.bs-isbn-section p {
  font-family: var(--font-ui);
  font-size: 14px;
  color: var(--color-muted);
  margin: 4px 0;
}

@media (max-width: 860px) {
  .bs-bookhead { grid-template-columns: 1fr; gap: 32px; }
  .bs-bookhead-cover { position: static; max-width: 260px; }
  .bs-bookhead-title { font-size: 34px; }
}

/* ── Digital History project cards ── */
.bs-projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0;
}
.bs-project-card {
  display: block;
  padding: 28px 0;
  border-top: 1px solid var(--color-hairline);
  text-decoration: none;
}
.bs-project-card-header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}
.bs-project-card-title {
  font-family: var(--font-display);
  font-size: 20px;
  color: var(--color-ink);
  transition: color 0.15s;
}
.bs-project-card-arrow {
  font-size: 18px;
  color: var(--color-terracotta);
  opacity: 0;
  transition: all 0.15s;
  transform: translateX(0);
}
.bs-project-card:hover .bs-project-card-title { color: var(--color-terracotta); }
.bs-project-card:hover .bs-project-card-arrow { opacity: 1; transform: translateX(2px); }
.bs-project-card-desc {
  font-family: var(--font-body);
  font-size: 16px;
  line-height: 1.5;
  color: var(--color-muted);
  margin-top: 8px;
}
```

- [ ] **Step 3: Update Digital History page template**

Check what template `/research/` uses and update accordingly. The digital history page likely renders from `content/digital.md` or similar. Create or update the appropriate layout to show a project grid using the card pattern above. Each project in `content/projects/` should render as a card.

- [ ] **Step 4: Verify**

Run `just serve`. Check:
- Publications single pages (e.g., Silicon Valley book) show cover + info grid
- Book detail has sticky cover on wide screens
- Digital History page shows project cards in auto-fill grid
- Mobile layouts collapse correctly

- [ ] **Step 5: Commit**

```bash
git add layouts/publications/ layouts/research/ layouts/projects/ assets/stylesheets/main.css
git commit -m "feat: implement Big Sky publications detail and digital history project grid"
```

---

## Task 9: Bookshelf

**Files:**
- Modify: `layouts/books/list.html` (rewrite with year filtering)
- Create: `static/js/bookshelf-filter.js`
- Modify: `assets/stylesheets/main.css` (add bookshelf styles)

**Interfaces:**
- Consumes: Design tokens, navbar, footer from previous tasks
- Produces: Bookshelf page with "Currently Reading" strip and year-filterable log

Reference: `design_handoff_author_site/designs/Bookshelf.dc.html`

- [ ] **Step 1: Rewrite `layouts/books/list.html`**

```html
{{ partial "head.html" . }}

<div class="bs-bookshelf">
  <header class="bs-container-narrow bs-archive-header">
    <span class="bs-eyebrow">Reading</span>
    <h1 class="bs-archive-title">Bookshelf</h1>
    <p class="bs-archive-lead">What I'm reading and have read. For older reading logs, see <a href="https://www.librarything.com/profile/hepplerj" class="prose-link">LibraryThing</a>.</p>
  </header>

  <!-- Currently Reading -->
  {{ $reading := where (where site.RegularPages "Section" "books") ".Params.categories" "intersect" (slice "reading") }}
  {{ if $reading }}
  <section class="bs-currently-reading">
    <div class="bs-container-narrow">
      <h2 class="bs-section-h2">Currently Reading</h2>
      <div class="bs-currently-grid">
        {{ range $reading }}
        <div class="bs-currently-card">
          <div class="bs-currently-title">{{ .Title }}</div>
          <div class="bs-currently-meta">{{ .Params.author }}{{ with .Params.pub_year }} · {{ . }}{{ end }}</div>
        </div>
        {{ end }}
      </div>
    </div>
  </section>
  {{ end }}

  <!-- Reading Log -->
  <section class="bs-container-narrow bs-section">
    <div class="bs-archive-controls">
      <div class="bs-archive-chips" id="shelfChips">
        {{ $allBooks := where (where site.RegularPages "Section" "books") ".Date" "ge" (time "2018-01-01") }}
        {{ $years := slice }}
        {{ range $allBooks }}
          {{ $y := .Date.Format "2006" }}
          {{ if not (in $years $y) }}{{ $years = $years | append $y }}{{ end }}
        {{ end }}
        {{ range sort $years "value" "desc" }}
        <button class="bs-chip{{ if eq . (now.Format "2006") }} on{{ end }}" data-shelf="{{ . }}">{{ . }}</button>
        {{ end }}
        <button class="bs-chip" data-shelf="all">All</button>
      </div>
    </div>
    <div class="bs-shelf-count" id="shelfCount"></div>

    <div class="bs-shelf-list" id="shelfList">
      {{ range $allBooks.ByDate.Reverse }}
      <div class="bs-shelf-row" data-year="{{ .Date.Format "2006" }}">
        <div class="bs-shelf-info">
          <span class="bs-shelf-title">{{ .Title }}{{ if .Params.reviewed }} <span class="bs-reviewed-badge">Reviewed</span>{{ end }}</span>
          <span class="bs-shelf-meta">{{ .Params.author }}{{ with .Params.pub_year }} · {{ . }}{{ end }}</span>
        </div>
        <span class="bs-shelf-year">{{ .Date.Format "2006" }}</span>
      </div>
      {{ end }}
    </div>
  </section>
</div>

{{ partial "newsletter-band.html" . }}
{{ partial "foot.html" . }}

<script src="/js/bookshelf-filter.js" defer></script>
```

- [ ] **Step 2: Create `static/js/bookshelf-filter.js`**

```javascript
(function () {
  const chips = document.querySelectorAll('#shelfChips .bs-chip');
  const rows = document.querySelectorAll('.bs-shelf-row');
  const countEl = document.getElementById('shelfCount');
  const currentYear = new Date().getFullYear().toString();

  let shelf = currentYear;

  function update() {
    let visible = 0;
    rows.forEach(row => {
      const show = shelf === 'all' || row.dataset.year === shelf;
      row.style.display = show ? '' : 'none';
      if (show) visible++;
    });
    countEl.textContent = visible + ' book' + (visible !== 1 ? 's' : '');
  }

  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('on'));
      chip.classList.add('on');
      shelf = chip.dataset.shelf;
      update();
    });
  });

  update();
})();
```

- [ ] **Step 3: Add bookshelf CSS**

Add to `@layer components`:

```css
/* ── Bookshelf ── */
.bs-currently-reading {
  background: var(--color-paper-alt);
  padding: 48px 0;
}
.bs-currently-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 24px;
}
.bs-currently-card {
  border-top: 3px solid var(--color-terracotta);
  padding-top: 16px;
}
.bs-currently-title {
  font-family: var(--font-body);
  font-size: 18px;
  font-weight: 500;
  color: var(--color-ink);
  margin-bottom: 6px;
}
.bs-currently-meta {
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--color-muted);
}
.bs-shelf-count {
  font-family: var(--font-ui);
  font-size: 12px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--color-faint);
  padding: 6px 0 12px;
}
.bs-shelf-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: baseline;
  padding: 16px 0;
  border-top: 1px solid var(--color-hairline);
}
.bs-shelf-title {
  display: block;
  font-family: var(--font-body);
  font-size: 18px;
  color: var(--color-ink);
}
.bs-shelf-meta {
  display: block;
  font-family: var(--font-body);
  font-size: 15px;
  color: var(--color-muted);
  margin-top: 3px;
}
.bs-shelf-year {
  font-family: var(--font-ui);
  font-size: 13px;
  color: var(--color-muted);
  white-space: nowrap;
}
.bs-reviewed-badge {
  font-family: var(--font-ui);
  font-size: 10px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--color-muted);
  border: 1px solid rgba(36, 29, 19, 0.25);
  padding: 2px 7px;
  border-radius: 2px;
  vertical-align: middle;
  margin-left: 6px;
}
.prose-link {
  color: var(--color-terracotta);
  text-decoration: none;
  border-bottom: 1px solid var(--color-link-underline);
}

@media (max-width: 860px) {
  .bs-currently-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Step 4: Verify bookshelf**

Run `just serve`, navigate to `/books/`. Check:
- Currently Reading section at top
- Year filter chips with current year selected by default
- Book count updates when filtering
- All chip shows all books
- Mobile layout

- [ ] **Step 5: Commit**

```bash
git add layouts/books/list.html static/js/bookshelf-filter.js assets/stylesheets/main.css
git commit -m "feat: implement Big Sky bookshelf with currently-reading and year filtering"
```

---

## Task 10: Section Lists, Singles & Cleanup

**Files:**
- Modify: `layouts/blog/list.html` (restyle for Big Sky)
- Modify: `layouts/notes/list.html` (restyle for Big Sky)
- Modify: `layouts/notes/single.html` (if exists — restyle to match essay template)
- Modify: `layouts/links/list.html` (restyle for Big Sky)
- Modify: `layouts/links/single.html` (if exists — restyle to match essay template)
- Modify: `assets/stylesheets/main.css` (final cleanup of old styles)
- Modify: `layouts/partials/head.html` (final cleanup)

**Interfaces:**
- Consumes: All previous tasks
- Produces: Consistently styled section list pages and single pages

- [ ] **Step 1: Restyle `layouts/blog/list.html`**

Update to use Big Sky design language — page header with eyebrow, posts grouped by year, each post as a row with title and date. Follow the same pattern as the Writing Archive rows but without filter chips.

```html
{{ partial "head.html" . }}

<div class="bs-section-list">
  <header class="bs-container-narrow bs-archive-header">
    <span class="bs-eyebrow">Writing</span>
    <h1 class="bs-archive-title">Essays</h1>
    <p class="bs-archive-lead">Long-form writing on history, technology, and the places where they meet.</p>
  </header>

  <div class="bs-container-narrow">
    {{ $pages := .Pages.ByDate.Reverse }}
    {{ range $pages.GroupByDate "2006" }}
    <div class="bs-year-group">
      <h2 class="bs-year-heading">{{ .Key }}</h2>
      {{ range .Pages }}
      <a href="{{ .RelPermalink }}" class="bs-list-row">
        <span class="bs-list-row-title">{{ .Title }}</span>
        <time datetime="{{ .Date.Format "2006-01-02" }}">{{ .Date.Format "Jan 2" }}</time>
      </a>
      {{ end }}
    </div>
    {{ end }}
  </div>
</div>

{{ partial "foot.html" . }}
```

- [ ] **Step 2: Restyle `layouts/notes/list.html`**

Same pattern as blog list but with "Notes" eyebrow and heading.

- [ ] **Step 3: Restyle `layouts/links/list.html`**

Same pattern but with "Commonplace" eyebrow. For links, show the external URL domain as secondary text.

- [ ] **Step 4: Update notes/single.html and links/single.html**

Make these match the essay template structure (breadcrumb, eyebrow, reading column, prose) but with appropriate labels ("Note" instead of "Essay", "Commonplace" for links).

- [ ] **Step 5: Add section list CSS**

Add to `@layer components`:

```css
/* ── Section lists (blog, notes, links) ── */
.bs-year-group {
  margin-bottom: 32px;
}
.bs-year-heading {
  font-family: var(--font-display);
  font-size: 24px;
  color: var(--color-ink-display);
  margin: 0 0 8px;
  padding-top: 24px;
}
.bs-list-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 24px;
  align-items: baseline;
  padding: 14px 0;
  border-top: 1px solid var(--color-hairline);
  text-decoration: none;
}
.bs-list-row-title {
  font-family: var(--font-body);
  font-size: 18px;
  line-height: 1.3;
  color: var(--color-ink);
  transition: color 0.15s;
}
.bs-list-row:hover .bs-list-row-title { color: var(--color-terracotta); }
.bs-list-row time {
  font-family: var(--font-ui);
  font-size: 13px;
  color: var(--color-muted);
  white-space: nowrap;
}
```

- [ ] **Step 6: Final CSS cleanup**

Remove any remaining old component styles that are no longer used:
- `.site-container` (replaced by `.bs-container`)
- `.body`, `.content`, `.homepage` (old wrapper classes)
- `.hp-*` (old homepage classes)
- `.settings-*`, `.nav-trigger-group`, `.panel-trigger`, `.overlay`, `.home-mark` (old nav)
- `.stat-block`, `.stat-value`, `.stat-label` (old stats)
- `.writing` (old writing section)
- `.noscript-nav` (old noscript nav — replace with new noscript using Big Sky nav links)
- Old dark mode custom variant (`@custom-variant dark ...`)
- `data-fonts="system"` override rule
- `.font-size-opt`, `.font-style-toggle`, `.theme-switch` related styles

Keep:
- Fast search overlay styles
- Print styles
- Footnote/marginalia styles
- Lightbox styles
- Webmention styles

- [ ] **Step 7: Remove littlefoot if unused**

If littlefoot.css is no longer imported (removed in Task 3), delete the file from `assets/stylesheets/`. If footnote styling is needed, ensure it's handled in the prose styles.

- [ ] **Step 8: Verify all pages**

Run `just serve` and check every major page:
- Homepage (`/`)
- An essay (`/blog/` → click any post)
- Blog list (`/blog/`)
- Notes list (`/notes/`)
- Links list (`/links/`)
- Archive (`/archive/`)
- About (`/about/`)
- Publications (overview + book detail)
- Digital History (`/research/`)
- Bookshelf (`/books/`)

Check mobile at 860px and 520px. Verify no broken layouts, missing styles, or console errors.

- [ ] **Step 9: Commit**

```bash
git add layouts/ assets/stylesheets/main.css
git commit -m "feat: restyle section lists and singles, clean up old CSS"
```

---

## Summary of Files Changed

### New Files
| File | Purpose |
|------|---------|
| `layouts/partials/navbar.html` | Top bar navigation |
| `layouts/partials/newsletter-band.html` | Reusable newsletter CTA |
| `layouts/partials/site-footer.html` | Dark footer band |
| `layouts/archive/single.html` | Unified Writing Archive |
| `static/js/archive-filter.js` | Archive filter/search JS |
| `static/js/bookshelf-filter.js` | Bookshelf year filter JS |
| `static/assets/fonts/*` | 11 new font files |
| `static/assets/images/portrait.webp` | Author portrait |

### Modified Files
| File | Change |
|------|--------|
| `assets/stylesheets/main.css` | Complete rewrite of tokens, base, and components |
| `assets/javascripts/hepp.js` | Stripped to shortcuts + lightbox + footnotes |
| `layouts/partials/head.html` | New nav, removed old scripts |
| `layouts/partials/foot.html` | New footer partial |
| `layouts/partials/nav.html` | Replaced with navbar redirect |
| `layouts/index.html` | Complete homepage rewrite |
| `layouts/blog/single.html` | Essay template rewrite |
| `layouts/blog/list.html` | Restyled for Big Sky |
| `layouts/notes/list.html` | Restyled for Big Sky |
| `layouts/links/list.html` | Restyled for Big Sky |
| `layouts/books/list.html` | Rewritten with year filtering |
| `layouts/_default/about.html` | Complete rewrite |
| `layouts/publications/single.html` | Updated for Big Sky |
| `config.yaml` | Updated menu items |

### Removed Files
| File | Reason |
|------|--------|
| `static/assets/fonts/Inter-*` | Replaced by Marcellus/Hanken Grotesk |
| `static/assets/fonts/SourceSerif4-*` | Replaced by Spectral |
| `static/assets/fonts/iAWriterDuospace-*` | Replaced by IBM Plex Mono |
