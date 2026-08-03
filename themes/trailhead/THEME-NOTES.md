# Trailhead — theme notes

Phase 1 built the scaffold + a real, data-driven homepage; Phase 2 filled in
every inner template (archive, blog/microblog, publications, books,
research, about, teaching, blogroll, tags, tweets, 404). The theme is now
**complete and paused** — Jason is deciding between this, `sagebrush`
(currently live), and `pine` as the site's long-term direction. Nothing
further is planned here until that's decided.

This file is the internals map for whoever edits the theme next (human or
agent): naming conventions, component/token internals, data-wiring
specifics, and known gotchas. For a template-by-template inventory and the
human-facing overview, see `README.md` in this directory.

**Jason hand-edits files in this theme tree directly.** Treat everything
below as "true as of the last audit," not a guarantee — re-check the actual
file before relying on a claim here, especially anything about `th-pane.html`
(see "Data sources" below — it's had at least one hand-edit since Phase 2
that this file didn't originally reflect).

## Naming convention

- **CSS classes**: prefix `th-` everywhere (`th-row`, `th-toc-list`, `th-label`…).
  One intentional exception: the email link carries `bs-email-link` (not
  `th-email-link`) — see "Gotchas" below for why.
- **Partials**: prefix `th-` (`th-pane.html`, `th-head.html`, `th-footer.html`,
  `th-scripts.html`). There's no root `layouts/partials/` in this repo today,
  so nothing actually collides yet, but keep the prefix — it's cheap
  insurance and matches the convention `themes/sagebrush` uses (`sb-*`,
  `min/*`) for the same reason.
- **Data attributes**: `data-type="book|essay|talk|article|chapter|review"`
  on `.th-row` drives the green "book" treatment in CSS (`.th-row[data-type="book"] …`).
  Add new types by adding a new attribute-selector block in
  `30-components.css`, not by inventing a new class.

## Design tokens (`00-tokens.css`)

All colors, fonts, and the split ratio are custom properties on `:root`:
`--th-paper`, `--th-paper-raised`, `--th-ink`, `--th-ink-soft`, `--th-ink-faint`,
`--th-accent-green`, `--th-rule`, `--th-rule-strong`, `--th-font-header`,
`--th-font-body`, `--th-font-mono`, `--th-split`, `--th-index-cols`,
`--th-index-cols-tablet`, `--th-space-1…7`, `--th-radius`. Never hardcode a
hex value or a one-off rem in a component file — add or reuse a token.

Font usage rule from the mockup, worth preserving: **National Park is a
label/structure face only** (eyebrows, TOC labels, column headers, type
tags) and is **always uppercase**. Public Sans is prose/titles. Space Mono
is reserved for numerals — years, counts, the tally line.

## How to add a new CSS file

The stylesheet pipeline in `layouts/_default/baseof.html` is a glob:

```
{{ $css := resources.Match "stylesheets/trailhead/*.css" }}
{{ $style := $css | resources.Concat "css/trailhead.css" | resources.Minify | resources.Fingerprint "sha512" }}
```

`resources.Match` returns files in lexical filename order, which is why
files are numbered `00-`, `05-`, `10-`, `20-`, `30-…`. To add Phase 2 files,
just drop a new file in `assets/stylesheets/trailhead/` with the next
number — `40-`, `50-`, `60-`, etc. **Keep the numeric prefix two digits.**
A three-digit prefix like `100-` would sort *before* `30-` lexically
(`"1" < "3"`), silently breaking cascade order.

Final numbering, for reference (Phase 2 landed slightly differently than
the original guess below — files ended up organized by content area, not
strictly by feature):

- `40-posts.css` — article/note reading pages, the promoted long-form
  `.th-prose`, post footer meta, author card, prev/next, related reading,
  microblog stream, the full archive (chips/search), tags, 404.
- `50-publications.css` — `/publications/` (list + book detail) and
  `/books/` bookshelf.
- `60-pages.css` — every other standalone page: About, Digital & Public
  History (research), Blogroll, Teaching, Twitter archive, and the Low
  Impact metrics panel.

If a new file is needed later, keep ordering intentional, keep the
two-digit prefix, and document the choice in the file's header comment the
way `00`–`60` all do.

## Existing components (`30-components.css`)

- **Identity pane**: `.th-eyebrow`, `.th-name` (+ `.th-name span`), `.th-bio`.
- **TOC with dotted leaders**: `.th-toc` → `.th-toc-plain` (the "About"
  link) + `.th-toc-list` → `<li><a><span class="th-toc-label">…<span class="th-toc-leader"></span><span class="th-toc-count">`.
  The leader is an empty span with `flex:1` and a dotted bottom border —
  don't put text in it.
- **Identity bottom**: `.th-identity-bottom` → `.th-tally` (mono, computed
  stat line — styled but currently unrendered, see "Data sources" below
  for the dead-computation note) + `.th-social` (flex row of links, plus a
  copyright `<p>` nested in the same container).
- **Ledger**: `.th-index-head` (sticky 3-col header: Year/Type/Work) +
  `.th-rows` → `.th-row` (3-col grid: `.th-col-year`, `.th-col-type`,
  a plain `<div>` holding `.th-row-title` + optional `.th-row-meta`).
  `.th-col-year.th-repeat` is the year-suppression treatment (faint,
  reduced opacity) — apply it whenever the row's year equals the previous
  row's year, computed in template logic (see `layouts/index.html` for the
  `$prevYear` pattern; it's a plain Go-template variable reassigned each
  loop iteration with `=`, which works fine in Hugo/Go templates despite
  looking like it shouldn't).
- **End-of-ledger CTA**: `.th-row-more` (centered, not a grid row).
- **Newsletter** (`.th-newsletter` — added in Phase 2, `layouts/index.html`
  only): end-of-scroll Buttondown embed styled as a spare colophon line
  (hairline rule, uppercase label, one line of copy, understated
  bordered input+button) — deliberately *not* a loud marketing band like
  sagebrush's terracotta `.bf-news-*`. Same Buttondown action URL/`email`
  field/button copy as sagebrush, different markup/classes.
- **Pane bio** (`.th-home-lede`, in `th-pane.html`): same measure/color as
  `.th-bio` but with the `.th-page-lede` link treatment so the RRCHNM/GMU/
  Great Plains links inside the bio paragraph read as clickable.
- **Generic inner-page header** (`.th-page-header` / `.th-page-title` /
  `.th-page-lede` — added in Phase 2, promoted here from being duplicated
  per-section): the shared title+lede component used by every non-homepage,
  non-article-single template — archive, publications, bookshelf, research,
  tags, 404, teaching. One title scale and title-to-lede gap site-wide
  instead of `.th-pub-page-title`/`.th-shelf-page-title`/etc. duplicates.
  Reference implementation: `layouts/courses/list.html`. Wraps only the
  title(+lede); wide ledger/grid content below (chips, tabs, rows) stays
  outside as a full-width sibling — see
  `layouts/_default/digital-history.html` for the pattern.
- **Related reading** (`.th-related`, `.th-related-row` — `blog/single.html`
  only): same hover-bar row idiom as `.th-row`/`.th-prevnext-row`. Sits
  between prev/next and the syndication link.
- **Generic**: `.th-label` (small green eyebrow, reusable on any inner
  page header), `.th-btn` (solid green button — still not used anywhere in
  a live template as of this audit; available if a future CTA needs it).
- **Fast search overlay**: `#fastSearch`, `.fast-search-box`, `#searchInput`,
  `#searchResults` — ids are fixed by `static/js/fastsearch.js` (shared,
  root-level, do not rename). Styled plainly with th- tokens; there's no
  mockup guidance here since the mockup only covers the homepage, so feel
  free to refine.
- **Prose**: `.th-prose` base rules live in `10-base.css` (generic
  typography: headings, links, lists) — Phase 2's `40-posts.css` now layers
  substantially on top (real heading scale, blockquote, code/pre, tables,
  footnotes, image sizing fix, masonry galleries, photo lightbox styling).
  `10-base.css`'s rules were never removed; cascade order means
  `40-posts.css` overrides where the two overlap. `60-pages.css` adds one
  more layer: `.th-page .th-prose { max-width: 62ch }` for prose nested in
  a `.th-page` wrapper.
- **Section-specific components added in Phase 2** (each namespaced to its
  own prefix per the convention below, defined in `50-publications.css` /
  `60-pages.css`): `.th-pub-*` (publications list + book detail),
  `.th-shelf-*` (bookshelf), `.th-about-*` (About page — roles, stats,
  link columns), `.th-dh-*` (Digital & Public History rows, including
  `.th-dh-body-thumb`/`.th-dh-thumb` grayscale→color project thumbnails),
  `.th-blogroll*`, `.th-course-*` (Teaching), `.th-tw-*` (Twitter archive),
  and the unnamespaced `.metrics_container`/`.metrics-left`/`.metrics-right`
  (targets raw HTML class names authored directly in
  `content/page/low-impact.md` — there's no dedicated template for that
  page, so this is the one place component CSS targets markdown-authored
  classes instead of template-authored ones).

## Shell (`20-shell.css`)

`.th-shell` → `.th-spine` (decorative divider, hidden ≤900px) + `.th-pane`
(fixed left identity, `position:fixed` down to 900px then becomes static
and stacks) + `.th-content` (scrolling right pane, `margin-left:50%` down
to 900px then `margin-left:0`).

**The left pane persists site-wide.** `baseof.html` includes
`th-pane.html` unconditionally for every page kind, so every template
under `layouts/` only needs to build whatever goes in `.th-content` — none
of them render the pane themselves.

`.th-reading-col` (in `20-shell.css`, widened/centered to 74ch by
`40-posts.css` — see that file's comment) is a prose-page container, used
by most single-column reading templates: `blog/single.html`,
`microblog/list.html` and `microblog/single.html`, `tags/list.html`,
`404.html`, and the `_default/single.html` and `_default/list.html`
fallbacks. Pages with wider grid/ledger content instead use `.th-page`
(`60-pages.css`, 46rem cap) so the content isn't squeezed to prose width.
The ledger itself uses neither — it wants the full `.th-content` width for
its 3-column grid.

`.th-footer` (component, not shell) is nested *inside* `.th-content` at
the bottom of `main` (see `baseof.html`) — it deliberately has no
`margin-left` of its own since it inherits the parent's offset. If you
ever move it outside `.th-content`, you'll need to re-add
`margin-left: var(--th-split)` (and the 900px override to reset it to 0).

## Data sources / how the homepage counts and ledger work

Both `th-pane.html` (site-wide TOC counts) and `layouts/index.html` (the
ledger) compute everything live from content and data files — nothing is
hardcoded. Sources:

| TOC row | URL | Count source |
|---|---|---|
| Essays | `/blog/` | `len (where site.RegularPages "Section" "blog")` |
| Notes | `/microblog/` | `len (where site.RegularPages "Section" "microblog")` |
| Publications | `/publications/` | book pages (`Section "publications"`) + `hugo.Data.essays_criticism` entries where `published != false` |
| Research | `/research/` | `len hugo.Data.dh_projects` |
| Bookshelf | `/books/` | `len (where site.RegularPages "Section" "books")` (all-time; the real `/books/` page filters to 2018+ for currently-reading UI, but the TOC count is the honest total) |
| Teaching | `/courses/` | **Hardcoded `23`, not computed.** Drift from the original Phase 1 plan (which was `len (where site.RegularPages "Section" "courses")`, still true for the other rows) — `th-pane.html` is now a file Jason hand-edits, and at some point the Teaching count was hand-set to a literal `23` instead of staying wired to the live count. If you're touching this file, either restore the live computation or leave the hardcode alone deliberately — don't assume it's a bug without checking with Jason, since he edits this file directly. |
| Archive | `/archive/` | Essays + Notes combined (matches `archive/single.html`'s `union` of blog+microblog) |

**Dead computation in `th-pane.html`**: the tally/year-span variables
(`$tallyTotal`, `$sortedYears`, `$minYear`, `$maxYear`) are still computed
at the top of the template (same four sources as the homepage ledger —
books, essays, data-file articles, talks) but **nothing in the rendered
`<aside>` uses them** — there's no `.th-tally` line in the markup, even
though `.th-tally` still exists as a styled class in `30-components.css`.
This is very likely deliberate hand-editing (Jason removed the visible
"An index of N entries, YYYY–YYYY" line but left the computation in place,
maybe to re-add later) rather than an oversight — don't delete the
computation to "clean up dead code" without checking; it costs nothing to
leave and may be wanted back.

The tally line's computation (in `th-pane.html`, currently unrendered —
see above) and the homepage ledger both draw from the **same four
sources**: books (`publications` section), essays (`blog` section),
articles (`hugo.Data.essays_criticism`, published only), talks
(`hugo.Data.on_the_road`). `$tallyTotal` is the *total* count across all
four (not capped); the visible ledger caps to 40 rows via
`first 40 $sorted`. If the tally line is ever re-added to the markup, the
values are already sitting there computed — no new logic needed, just a
`<p class="th-tally">` referencing `$tallyTotal`/`$minYear`/`$maxYear`.

**Book pages have no `date` front matter** — only a `year` param (string,
e.g. `"2024"`). Both `th-pane.html` and `index.html` synthesize a sort
date via `time (printf "%d-01-01" $yr)` and pull the display year from
`Params.year`, never from `.Date` (which would be the zero value / year 1
and silently corrupt the year-range calculation).

`hugo.Data.*` is used throughout (not `site.Data`) — matches the
already-migrated convention in `themes/sagebrush` (see its
`publications/list.html` and `digital-history.html`); `site.Data` is
deprecated as of Hugo 0.156.

## Gotchas

- **Hugo strips comments from inline `<script>` blocks.** Go's
  `html/template` elides both `//` and `/* */` JS comments inside inline
  `<script>` tags as part of script-context escaping — confirmed by
  isolated test, not a bug in any one template. This bit `archive/single.html`'s
  filter script (the year-suppression recompute logic needed explaining but
  any inline JS comment vanished from the build output). The fix used
  throughout Phase 2: put the explanation in the surrounding Hugo template
  comment (`{{/* ... */}}`) above the `<script>` block, not inside it. If
  you add a new inline script, keep this in mind — don't spend time
  debugging why your JS comments "disappeared" in prod output.
- **`static/js/archive-filter.js` and `static/js/bookshelf-filter.js`
  (root-level, outside this theme tree) are dead code as far as trailhead
  is concerned — this is intentional, not an oversight.** Both are
  leftovers from the parked `themes/big-sky` and target `bs-*`/
  `.bs-shelf-entry` selectors that don't exist anywhere in trailhead's
  markup. `archive/single.html` and `books/list.html` each ship their own
  small inline `<script>` instead, scoped to `th-*` ids/classes — the same
  precedent `sagebrush` follows (it doesn't wire up those root files
  either). Don't "fix" trailhead by pointing it at those scripts; don't
  delete those root files on trailhead's behalf either — they're shared
  root-level files, not trailhead's to remove, and only actually dead
  relative to the two themes people use.
- **`bs-email-link` is not a naming-convention violation, it's a reuse
  seam.** The site's shared root-level `assets/javascripts/hepp.js`
  (loaded via `th-scripts.html`, same `resources.Get "javascripts/hepp.js" | js.Build`
  call sagebrush uses) hardcodes the selector `.bs-email-link` for its
  click-to-mailto handler, and reads `data-name`/`data-domain` off it. To
  reuse that shared behavior without forking the script, the email link in
  `th-pane.html` keeps the `bs-email-link` class (undocumented-looking, but
  load-bearing) alongside normal `.th-social a` styling. If you ever want
  a pure `th-` version, you'd need to either edit `hepp.js` (outside this
  theme's directory) or add a small inline script in `th-scripts.html`
  that does the same thing for a `th-email-link` selector instead.
- **Lightbox selector mismatch.** `hepp.js`'s photo lightbox targets
  `.post-body img, .prose img, .lm-prose img`. Every real prose wrapper in
  the finished theme (`.th-prose` on blog/single, microblog list+single,
  about, blogroll, courses, publications body/research, etc.) carries
  `.lm-prose` alongside `.th-prose` for exactly this reason — confirmed
  present on all of them as of this audit. `40-posts.css` also had to add
  CSS for the `.photo-lightbox` overlay class the script emits (it was
  unstyled — inline, top-left, no dimming — until that was ported over
  from sagebrush). If you add a new prose wrapper, carry `.lm-prose` on it
  too, or the lightbox silently stops firing on that page.
- **Webmentions are receive-only.** `th-head.html` emits the
  `rel="webmention"`/`rel="pingback"` endpoint links (parity with
  sagebrush), but there's no display widget wired up anywhere in the
  finished theme — sagebrush doesn't render one either (its own
  `min/head.html` comment says so explicitly). If display is ever wanted,
  the old (parked) `themes/big-sky` theme has a working pattern using
  `static/assets/javascripts/webmention.min.js` + a `#webmentions` div in
  single templates — worth a look, not copied here.
- **`resources.Match` sorts lexically, not numerically past two digits.**
  See the CSS-file-numbering note above — don't go to three-digit prefixes.
- **Fonts are WOFF for National Park, WOFF2 for Public Sans/Space Mono.**
  That's not an inconsistency to "fix" — National Park's free release only
  ships `.woff`; Public Sans/Space Mono were pulled as `.woff2` from
  google-webfonts-helper. All six National Park weights are copied into
  `static/assets/fonts/` even though only Regular/SemiBold/Bold/ExtraBold
  are used by the current CSS — ExtraLight and Light remain unused through
  the end of Phase 2; leave them in place, they cost nothing and may be
  wanted for a future lighter-weight treatment.
- **`.th-row-title` not `.th-title`.** The mockup's CSS used a bare
  `.title` class for ledger row titles; it's renamed `.th-row-title` here
  (not just `th-` prefixed) specifically to leave `.th-title` free for a
  generic "page title" component later without a naming clash. That
  component was eventually added under a different name anyway
  (`.th-page-title`, see "Existing components" above) — `.th-title` is
  still unclaimed, but the naming choice held up fine regardless.
- **No `layouts/partials/` exists at repo root.** Unlike some Hugo setups,
  this project has zero root-level partials — sagebrush and trailhead are
  both fully self-contained theme trees. "Reuse root-level partials" in
  practice means "reuse root-level `assets/` and `static/` files" (JS,
  fonts-that-already-exist-for-other-themes, etc.), not actual `partial`
  template files.
