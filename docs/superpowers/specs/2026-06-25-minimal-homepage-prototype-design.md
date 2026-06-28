# Minimal Homepage Prototype — "Fog & Pine"

**Date:** 2026-06-25
**Branch:** `experiment/fog-and-pine-minimal`
**Status:** Design approved, ready to build

## Purpose

A self-contained, disposable prototype testing a minimal, single-column homepage
direction inspired by Naz Hamid's site (nazhamid.com). The goal is to *interrogate*
whether a sparse, quiet layout fits Jason's content — not to ship a replacement yet.

It must not touch the existing "Big Sky" homepage or shared `main.css`, so both can
be viewed side by side during `just serve`.

## Decisions (from brainstorming)

- **Content density:** Lean but complete — intro, recent writing, books, newsletter.
  The other Big Sky homepage sections (featured project, weblog categories, on the
  road, recent reading) are dropped from this prototype.
- **Palette:** "Fog & Pine" — cool gray paper `#f2f3f1`, graphite ink `#22251f`,
  pine-green accent `#2f5d50`, muted gray `#5a615a`.
- **Layout:** Single centered ~640px column, generous vertical rhythm.
- **Typography:** System font stack (native sans throughout; system monospace for the
  footer). No web fonts loaded.
- **No dark mode** (consistent with the Big Sky decision).

## Architecture

Standalone and isolated — no shared partials, no shared CSS:

- **Page:** `content/lab/minimal.md` — front matter sets `layout: minimal`.
- **Template:** `layouts/lab/minimal.html` — a complete, self-contained HTML document
  (the repo has no `baseof.html`, so templates render directly). Does **not** include
  `head.html`, the Big Sky navbar, or footer partials.
- **Styles:** `static/css/lab-minimal.css` — plain CSS, linked directly. Palette tokens
  as CSS custom properties at `:root`.
- **Route:** `/lab/minimal/`.

## Page structure (top to bottom)

1. **Top bar** — small pine dot wordmark (links to `/`) on the left; quiet right-aligned
   text nav: Journal · Books · About. No CTA in the nav.
2. **Intro** — identity heading line + short bio paragraph (reused from the current
   homepage). Small inline *text* social links below (Email · Bluesky · Mastodon ·
   GitHub), pine on hover. No icon row.
3. **Recent writing** — quiet mono section label, then the latest ~7 posts as a unified
   `blog` + `notes` stream, sorted by date desc. Each row: title (links to post) +
   muted date. No excerpts.
4. **Books** — section label, compact text list of publications that have a cover image,
   newest first: title · publisher · year, each linking to its book page. "All
   publications →" link.
5. **Newsletter** — minimal inline form: one-line description + email input + pine
   button. Reuses the existing Buttondown endpoint
   (`https://buttondown.com/api/emails/embed-subscribe/plainsink`).
6. **Footer** — system-monospace, muted: copyright, last-updated, Colophon link
   (`/colophon/`), climate-friendly link (`/low-impact/`), and small RSS links
   (`/feed.xml`, `/feed.json`).

## Data sources (all existing — nothing new to maintain)

- Recent writing: `where site.RegularPages "Section" "in" (slice "blog" "notes")`,
  `.ByDate.Reverse`, `first 7`.
- Books: `where (where site.RegularPages "Section" "publications") ".Params.image" "ne" nil`,
  `.ByDate.Reverse`.
- Social: `site.Params.social.*`.
- Email: obfuscated via `data-name` / `data-domain` attributes + a small inline script
  in the template (so the prototype stays self-contained — does not depend on `hepp.js`).

## Out of scope

- Migrating other homepage sections.
- Inner page templates (post, list, about) — homepage only for now.
- Dark mode.
- Replacing the Big Sky homepage.

## Success criteria

- `/lab/minimal/` renders at `just serve` with the Fog & Pine palette and system fonts.
- The Big Sky homepage and shared CSS are untouched.
- All links and data pull from existing sources; no broken references.
- The single-column layout reads cleanly at desktop and mobile widths.
