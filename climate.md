# Climate / Carbon Optimization Notes

Goal: get below 0.185g CO2 per page view (per digitalbeacon.co).

## Priority Fixes

### 1. Google Fonts (highest impact)
- Currently loading Inter + Source Serif 4 from Google Fonts CDN via `head.html` lines 113–115
- Two external DNS connections (fonts.googleapis.com + fonts.gstatic.com)
- Render-blocking CSS request
- Full variable font ranges loaded (opsz, wght 100–900, italic + non-italic) — very large payload
- **Fix:** self-host via `@fontsource/inter` and `@fontsource/source-serif-4` npm packages,
  importing only the weights actually used (likely 400, 500, 700 for Inter; 400, 700 for Source Serif 4)
  and referencing them in `main.css` via `@import`

### 2. Render-blocking webmention script (quick win)
- `webmention.min.js` loaded in `<head>` with no `defer` or `async` — blocks rendering
- **Fix:** add `async` or `defer` to the script tag in `head.html` line 104

### 3. Duplicate / empty meta tags (easy cleanup)
- Two `<meta name="viewport">` tags (lines 19 and 35) — remove one
- Two identical sets of OpenGraph tags (lines 65–69 and 77–82) — remove the duplicate block
- `<meta property="dc:title" content="">` and `<meta name="citation_title" content="">` are empty
- `<link rel="dns-prefetch" href="https://jasonheppler.org">` — prefetching own origin, remove it

### 4. Images (audit needed)
- Check all images in use across content and static dirs
- Convert to WebP where not already done
- Ensure lazy loading (`loading="lazy"`) on all non-hero images
- Check for any oversized images being scaled down in CSS

## Reference
- Test at: https://digitalbeacon.co/report/jasonheppler-org
- Target: < 0.185g CO2 / page view
