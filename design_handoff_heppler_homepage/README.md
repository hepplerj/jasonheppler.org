# Handoff: Jason Heppler — Homepage Redesign

## Overview
A redesign of the homepage for Jason A. Heppler, a historian of the North American West and Great Plains. The goal was a more distinctive identity that foregrounds his scholarship (books + chapters) and his flagship digital-history project, with a warm "sense of place" tied to the American West. The chosen direction leads with his **latest book as the hero**, then carries the rest of his work, an "about" section, and his writing.

## About the Design Files
The files in this bundle are **design references created in HTML** — a prototype showing the intended look, layout, type, color, and content. They are **not** production code to copy line-for-line. The task is to **recreate this design in the target codebase's environment** using its established patterns and component library. Jason's current site is built with **Hugo** (static site generator); if implementing there, build it as Hugo templates/partials + CSS. If starting fresh, any modern static or component framework is fine.

The primary reference is `heppler-homepage-reference.html` — open it in a browser. It includes a **"Toggle Designed / System fonts"** button (top-right) to preview both typographic options (see Typography).

## Fidelity
**High-fidelity.** Final colors, type scale, spacing, and content are specified below and present in the reference HTML. Recreate it closely. Two intentional placeholders remain (call them out to the client before launch):
1. The **review blurb** in the praise band is placeholder copy (attribution reads "ADD A REAL BLURB"). Swap in a real published review of *Silicon Valley*.
2. The **Governing Ground** image is a CSS gradient placeholder. Replace with a real project image (e.g. a Western rangeland / federal-lands photo).

## Page Structure (top → bottom)
Single column, content max-width **1180px**, centered. Horizontal padding **56px** on all full-width sections. Light "paper" background `#efe8da` with two dark "Western" bands for rhythm.

1. **Header** — name (left) + nav (right), one line, 1px bottom hairline.
2. **Hero — Featured Book** — two-column: left = eyebrow + title + pitch + CTA; right = the book cover rendered as an angled 3D hardcover.
3. **Praise band** (dark) — centered italic pull-quote + attribution, with a soft gold radial glow.
4. **Governing Ground** (own section) — section eyebrow + a 2-up card: image tile (left) + description & CTA (right).
5. **Books & Chapters** — 3-column grid of cover thumbnails with tag / title / press.
6. **Meet Jason** (dark) — portrait (left) + heading + bio + CTA (right).
7. **Essays & Recent Writing** (light) — two columns of linked lists.
8. **Footer** (dark) — centered name between hairlines + colophon line.

## Components (exact specs)

### Header
- Container: `display:flex; justify-content:space-between; align-items:center; padding:28px 56px; border-bottom:1px solid rgba(41,35,24,.14)`.
- Name: serif (`var(--bf-serif)`), 21px, weight 500, letter-spacing .01em.
- Nav: `display:flex; gap:30px`. Items in **IBM Plex Mono** 12.5px, color `#5a5244`, letter-spacing .02em. Items: Writing, Publications, Digital History, Bookshelf, About.

### Hero (Featured Book)
- Grid: `grid-template-columns:1fr 360px; gap:64px; align-items:center; padding:62px 56px 64px`.
- Eyebrow: IBM Plex Mono 12px, letter-spacing .2em, color `#8a6a2e` ("THE LATEST BOOK — 2024").
- Title `<h1>`: serif, 52px, weight 500, line-height 1.07, letter-spacing -.01em, `max-width:15ch`. Text: "Silicon Valley and the Environmental Inequalities of High-Tech Urbanism".
- Lead paragraph: serif 20px, line-height 1.55, max-width 46ch.
- Sub paragraph: serif 18px, line-height 1.6, color `#3d3526`, max-width 48ch.
- CTA button: IBM Plex Mono 13px, color `#fdf8ee`, background `#2f5a43`, padding 14px 26px, border-radius 5px, letter-spacing .04em. Label "Read more →".
- Press caption next to CTA: IBM Plex Mono 12.5px, color `#8a6a2e`.
- **3D book**: wrapper `perspective:1700px`. Cover box `width:312px; height:471px; transform:rotateY(-15deg); box-shadow:36px 32px 64px rgba(41,35,24,.32)`. Cover `<img>` fills it (`object-fit:cover`). Fore-edge "pages": 10px strip on the right, `linear-gradient(90deg,#cfc4ac,#f3ecd9)`. Spine shadow: 10px strip on the left, `linear-gradient(90deg,rgba(0,0,0,.3),transparent)`.

### Praise band (dark)
- Section: `background:#1d2a24; color:#ece4d2; padding:72px 56px; position:relative; overflow:hidden`.
- Glow: absolutely-positioned `560×300` ellipse, `radial-gradient(circle, rgba(176,138,58,.4), transparent 62%)`, centered, top:-120px.
- Quote: serif italic, 29px, line-height 1.45, color `#f1e9d6`, centered, max-width 840px.
- Attribution: IBM Plex Mono 11.5px, letter-spacing .18em, color `#c8a85a`.

### Governing Ground (own section)
- Section: `padding:60px 56px; border-bottom:1px solid rgba(41,35,24,.14)`.
- Section eyebrow: IBM Plex Mono 12px, .2em, uppercase, color `#5a5244` ("Digital History").
- Card: `border:1px solid rgba(41,35,24,.14); border-radius:8px; overflow:hidden; display:grid; grid-template-columns:1fr 1fr; background:#e7ddc9`.
- Image tile (left, placeholder): `min-height:300px`, vertical gradient `#cdd0c4 → #bcae8c → #a8884f → #8a6a36`, with a diagonal stripe overlay and a bottom dark scrim. Overlaid: "IN PROGRESS" (mono 10.5px, .16em, cream) + "Governing Ground" (serif 40px, weight 500, `#fdf8ee`). **Replace with a real image.**
- Right: padding 42px 46px; description serif 21px / line-height 1.5 (the word *Governing Ground* italicized); CTA button same style as hero ("View project →").

### Books & Chapters
- Section: `padding:56px 56px; border-bottom:1px solid rgba(41,35,24,.14)`.
- Header row: section eyebrow ("Books & Chapters", mono 12px .2em uppercase `#5a5244`) + right link "All publications →" (mono 12.5px, `#2f5a43`).
- Grid: `grid-template-columns:repeat(3,1fr); gap:40px`. Each item is a column (`display:flex; flex-direction:column; gap:14px`):
  - Cover `<img>`: `width:150px; height:227px; object-fit:cover; box-shadow:0 12px 28px rgba(41,35,24,.24)`.
  - Tag: IBM Plex Mono 10px, .16em, color `#8a6a2e`.
  - Title: serif 18px, weight 500, line-height 1.25.
  - Press: 13px italic, color `#8a8273`.
- Items:
  1. `dice.webp` — tag "EDITED VOLUME · 2020" — "Digital Community Engagement" — University of Cincinnati Press.
  2. `custer_companion.webp` — tag "CHAPTER" — "A Companion to Custer and the Little Bighorn Campaign" — Wiley Blackwell.
  3. `teaching_research_data.jpg` — tag "CHAPTER" — "Teaching Research Data Management" — ACRL.

### Meet Jason (dark)
- Section: `background:#16201a; color:#ece4d2; padding:70px 56px`.
- Inner grid: `grid-template-columns:330px 1fr; gap:56px; align-items:center; max-width:980px; margin:0 auto`.
- Portrait: `330×400`, border-radius 3px, `object-fit:cover; object-position:50% 18%`, `box-shadow:0 18px 44px rgba(0,0,0,.45)`.
- Eyebrow: IBM Plex Mono 13px, .22em, color `#9fc06a` ("MEET JASON").
- Lead: serif 21px / 1.6, name span colored `#c8a85a`.
- Body: serif 18px / 1.65, color `#cfc6b1`.
- CTA text link: IBM Plex Mono 13px, .06em, color `#c8a85a` ("READ MORE →").

### Essays & Recent Writing (light)
- Section: `display:grid; grid-template-columns:1fr 1fr; gap:56px; padding:54px 56px 56px`.
- Each column header: mono 11.5px, .16em, uppercase, with a 1px `rgba(41,35,24,.5)` bottom rule and a right "All →" / "Full archive →" link in `#2f5a43`.
- List rows: `display:flex; justify-content:space-between; padding:15px 0; border-bottom:1px solid rgba(41,35,24,.12)` (last row no border).
  - Title: serif 17.5–18px, weight 500, line-height 1.25.
  - Source (essays only): 13px italic, color `#8a8273`.
  - Date/year: IBM Plex Mono 12px, color `#8a8273`.
- Essays: Spoiled Fruits… (AHA Perspectives, 2023); Digital History Review of ClioVis (The Journal of American History, 2024); Digital Community Engagement in a Pandemic (History@Work, NCPH, 2021).
- Recent Writing: Restoring Old Digital History (Mar 24); Vibing Digital History (Mar 9); The Obsidian–Hugo Workflow (Mar 5).

### Footer (dark)
- Section: `background:#16201a; color:#8fa593; padding:34px 56px; text-align:center`.
- Centered name "JASON A. HEPPLER": serif 18px, letter-spacing .24em, color `#9fb59a`, flanked by two 1px hairlines (`rgba(143,165,147,.3)`, max-width 200px each).
- Colophon: IBM Plex Mono 11.5px, color `#6f8475` — "© 2008–2026 Jason A. Heppler · Powered by Hugo and coffee · Made in Nebraska · RSS · JSON".

## Interactions & Behavior
- **Links / nav**: add a subtle hover (the brand green `#2f5a43`, or an underline). Not heavily specified — match the codebase's link conventions.
- **CTA buttons** ("Read more", "View project"): standard link buttons; on hover, darken the green slightly (~`#274d39`).
- **Cover thumbnails**: optional subtle lift on hover (translateY(-2px) + slightly stronger shadow).
- No required animations, loading, or error states — this is a static marketing homepage.
- **Responsive**: collapse all two/three-column grids to a single column under ~720px. Hero: book moves below the text. Nav: collapse to a menu or wrap. Type can scale down (hero `<h1>` ~36–40px on mobile).

## State Management
None required. Static content. (The font toggle in the reference is a demo aid, not a production feature.)

## Design Tokens

### Colors
- Paper background: `#efe8da`
- Card tint (Governing Ground): `#e7ddc9`
- Ink (primary text): `#292318`
- Ink (secondary): `#3d3526`
- Muted text / captions: `#8a8273`
- Brand green (links, CTAs): `#2f5a43`  (hover ~`#274d39`)
- Green-light (accents on dark): `#9fc06a`
- Clay / gold (eyebrows): `#8a6a2e`
- Gold on dark: `#c8a85a`
- Dark band (praise): `#1d2a24`
- Darkest band (Meet / footer): `#16201a`
- Cream text on dark: `#ece4d2`, quote `#f1e9d6`
- Footer sage: name `#9fb59a`, links `#8fa593`, colophon `#6f8475`
- Button text: `#fdf8ee`
- Hairline (light): `rgba(41,35,24,.14)`; stronger header rule `rgba(41,35,24,.5)`; row rule `rgba(41,35,24,.12)`
- Hairline (dark): `rgba(143,165,147,.3)`

### Typography
- **Body / display serif**: `Spectral` (Google Fonts), weights 400 & 500, italic used for emphasis & quotes. Routed through a single CSS var `--bf-serif`.
- **Labels / metadata / nav**: `IBM Plex Mono` (Google Fonts), weights 400–500, often uppercase with wide letter-spacing (.16–.28em). **Always monospace in both font modes.**
- **System-font option** (client approved): swap `--bf-serif` to `Georgia, 'Times New Roman', serif`. Keep IBM Plex Mono as-is. Toggle class `html.system-fonts` in the reference demonstrates this. Either is acceptable to ship.

### Type scale (px)
52 (hero h1) · 40 (Governing Ground title) · 29 (quote) · 21 (lead/GG body/meet lead) · 20 (hero lead) · 18 (sub/book title/meet body/writing) · 17.5 (essay title) · 13 (CTA/source) · 12.5 (nav/press) · 12 (eyebrow/date) · 11.5 (section labels) · 10–10.5 (tags).

### Spacing
- Section horizontal padding: 56px.
- Section vertical padding: 56–72px.
- Grid gaps: hero 64px · books 40px · essays/meet 56px.
- Border-radius: buttons 5px · cards 8px · portrait 3px.

## Assets
All in `assets/` (the client's own images; covers used at small size):
- `book_sv.webp` — *Silicon Valley…* cover (U. of Oklahoma Press, 2024).
- `dice.webp` — *Digital Community Engagement* cover (U. of Cincinnati Press, 2020).
- `custer_companion.webp` — *A Companion to Custer and the Little Bighorn Campaign* (Wiley Blackwell) — chapter contribution.
- `teaching_research_data.jpg` — *Teaching Research Data Management* (ACRL) — chapter contribution.
- `portrait.webp` — author portrait (photo by John Legg).
- **Missing:** a real Governing Ground project image (currently a CSS placeholder).
- Fonts loaded from Google Fonts (Spectral, IBM Plex Mono).

## Files
- `heppler-homepage-reference.html` — the high-fidelity reference (open in a browser; includes a font-mode toggle).
- `assets/` — all images used.
- `screenshots/` — rendered captures of the design (System-font variant + a Designed-font hero for comparison).

## Notes / Context
- This was the selected direction ("3a") from a set of explored homepage concepts. The full exploration lives in the project file `Heppler Homepage Directions.dc.html` (not required to implement; this README + reference are self-sufficient).
- Voice/content reflects the real current site (Hugo-powered). Keep nav labels and section names consistent with the existing IA.
