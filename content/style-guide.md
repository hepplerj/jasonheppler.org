---
title: Style Guide
date: 2026-08-19
description: A reference for the typography, patterns, and components that make up jasonheppler.org.
---

This page collects the typography, patterns, and components that make up the site. The current theme is one I developed called [Basalt](/colophon/), a [Craig Mod](https://craigmod.com/) inspired grayscale design with Flexoki accents, Literata for prose and headings, Hanken Grotesk for chrome, and IBM Plex Mono for code.

## Typography

Body copy is set in **Literata** at 19px with a 1.6 line height. Headings share the same family in semibold. The navigation, buttons, small labels are set in <span class="sg-ui"><strong>Hanken Grotesk</strong></span>. Code and monofonts are set in the fantastic <span class="sg-code"><strong>IBM Plex Mono</strong></span>.

### Headings

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
###### Heading 6

### Body text

This is a paragraph of body text at the base reading size. Good typography makes long-form reading comfortable and unhurried.

**Bold text.** *Italic text.* ~~Strikethrough.~~ `Inline code.` <mark>Highlighted text.</mark>

## Text elements

<div class="sg-elements">

<p>The <a href="#">a element</a>, <a href="https://wikipedia.com/">external a element</a>, and <a href="#" title="With a title">a element with title</a> examples</p>

<p>The <abbr>abbr element</abbr> and an <abbr title="HyperText Markup Language">abbr element with title</abbr> examples</p>

<p>The <b>b element</b> example</p>

<p>The <cite>cite element</cite> example</p>

<p>The <code>code element</code> example</p>

<p>The <data value="12345">data element</data> example</p>

<p>The <del>del element</del> example</p>

<p>The <dfn>dfn element</dfn> and <dfn title="Definition on hover">dfn element with title</dfn> examples</p>

<p>The <em>em element</em> example</p>

<p>The <i>i element</i> example</p>

<p>The <ins>ins element</ins> example</p>

<p>The <kbd>kbd element</kbd> example</p>

<p>The <mark>mark element</mark> example</p>

<p>The <q>q element</q> example</p>

<p>The <q>q element <q>inside a q element</q></q> example</p>

<p>The <s>s element</s> example</p>

<p>The <samp>samp element</samp> example</p>

<p>The <small>small element</small> example</p>

<p>The <span>span element</span> example</p>

<p>The <strong>strong element</strong> example</p>

<p>The sub<sub>script</sub> element example</p>

<p>The sup<sup>erscript</sup> element example</p>

<p>The <time datetime="2026-08-19">time element</time> example</p>

<p>The <u>u element</u> example</p>

<p>The <var>var element</var> example</p>

</div>

## Lists

### Unordered

- List item one
- List item two
- List item three
  - Nested item 3.1
  - Nested item 3.2
    - Deeply nested 3.2.1
    - Deeply nested 3.2.2
  - Nested item 3.3
- List item four
- List item five, which runs long enough to wrap, because these things need to look right when they wrap.

### Ordered

1. First item
2. Second item
3. Third item
   1. Nested 3.1
   2. Nested 3.2
      1. Deeply nested 3.2.1
      2. Deeply nested 3.2.2
   3. Nested 3.3
4. Fourth item
5. Fifth item, which runs long enough to wrap, because these things need to look right when they wrap.

## Blockquote

This is a standard paragraph. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est.

> This is a blockquote. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.
>
> &mdash; <cite>Someone worth quoting</cite>

This is another standard paragraph following the quote, to show how the return to body copy sits.

## Notices

<div class="notice">
  <p>This is a generic notice, providing some information. <strong>Strong text</strong> inside a notice draws the eye.</p>
  <p>And this is a second paragraph within the same notice.</p>
</div>

<div class="notice notice--draft">
  <p><strong>Draft.</strong> This is a draft notice used on posts that are still cooking.</p>
</div>

## Details & Summary

<details>
  <summary>Click to expand a detail block</summary>

  Inside the block, prose flows normally. This is where I stash long transcripts, tangents, and things worth having but not necessary to the flow of the rest of the text.

  A second paragraph confirms the spacing is right.
</details>

## Monospace & preformatted

Code block wrapped in `<pre><code>`:

```js
// Loop through divs.
const divs = document.querySelectorAll('div');
for (const div of divs) {
  div.style.color = 'green';
}
```

Monospace text wrapped in `<pre>` alone:

<pre>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam dignissim convallis est. Quisque aliquam. Donec faucibus. Nunc iaculis suscipit dui. Nam sit amet sem.</pre>

## Tables

| Column one       | Column two   | Column three |
|------------------|--------------|--------------|
| Division 1       | Division 2   | Division 3   |
| Division 1       | Division 2   | Division 3   |
| Division 1       | Division 2   | Division 3   |

## Media

{{< figure src="/assets/images/sj_ponds.webp" alt="Ponds at San José, California" attr="Photo by Jason Heppler" caption="A figure with caption. It sits full-measure and picks up the theme's rule and small-caps kicker." >}}

## Horizontal rule

Above the rule.

---

Below the rule.

## Flexoki accents

The site's accent colors borrow from Steph Ango's [Flexoki theme](https://stephango.com/flexoki) and can be swapped with a `data-accent` attribute on `<html>`. The 600 value is used on light paper; the 400 value on dark. The current default is the brand's warm red / gold pair. There's an Easter egg on a page on this site for the careful reader that wants to fiddle with the accent colors.

<div class="sg-swatches" aria-label="Flexoki accent palette">
  <div class="sg-swatch"><span class="sg-chip" style="background:#AF3029"></span><span class="sg-chip" style="background:#D14D41"></span><span class="sg-label">red</span></div>
  <div class="sg-swatch"><span class="sg-chip" style="background:#BC5215"></span><span class="sg-chip" style="background:#DA702C"></span><span class="sg-label">orange</span></div>
  <div class="sg-swatch"><span class="sg-chip" style="background:#AD8301"></span><span class="sg-chip" style="background:#D0A215"></span><span class="sg-label">yellow</span></div>
  <div class="sg-swatch"><span class="sg-chip" style="background:#24837B"></span><span class="sg-chip" style="background:#3AA99F"></span><span class="sg-label">cyan</span></div>
  <div class="sg-swatch"><span class="sg-chip" style="background:#205EA6"></span><span class="sg-chip" style="background:#4385BE"></span><span class="sg-label">blue</span></div>
  <div class="sg-swatch"><span class="sg-chip" style="background:#5E409D"></span><span class="sg-chip" style="background:#8B7EC8"></span><span class="sg-label">purple</span></div>
  <div class="sg-swatch"><span class="sg-chip" style="background:#A02F6F"></span><span class="sg-chip" style="background:#CE5D97"></span><span class="sg-label">magenta</span></div>
</div>

## Grayscale frame

The paper, ink, and rule tones that appear on every page. These flip with the theme, which you can see sampled below from the current mode.

<div class="sg-swatches sg-swatches--tokens">
  <div class="sg-swatch"><span class="sg-chip sg-chip--token" style="background:var(--ba-paper)"></span><span class="sg-label">paper</span></div>
  <div class="sg-swatch"><span class="sg-chip sg-chip--token" style="background:var(--ba-paper-2)"></span><span class="sg-label">paper-2</span></div>
  <div class="sg-swatch"><span class="sg-chip sg-chip--token" style="background:var(--ba-ink)"></span><span class="sg-label">ink</span></div>
  <div class="sg-swatch"><span class="sg-chip sg-chip--token" style="background:var(--ba-muted)"></span><span class="sg-label">muted</span></div>
  <div class="sg-swatch"><span class="sg-chip sg-chip--token" style="background:var(--ba-faint)"></span><span class="sg-label">faint</span></div>
  <div class="sg-swatch"><span class="sg-chip sg-chip--token" style="background:var(--ba-accent)"></span><span class="sg-label">accent</span></div>
</div>

<style>
  .sg-swatches {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 14px;
    margin: 1.4em 0 2em;
    padding: 0;
    list-style: none;
  }
  .sg-swatch {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
  }
  .sg-swatch > .sg-chip {
    display: block;
    width: 100%;
    aspect-ratio: 3 / 1;
    border-radius: 4px;
  }
  .sg-swatch > .sg-chip + .sg-chip {
    margin-top: -4px;
  }
  .sg-chip--token {
    aspect-ratio: 1 / 1;
    max-width: 64px;
    border: 1px solid var(--ba-hair);
  }
  .sg-label {
    font-family: var(--ui);
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--muted);
  }
  .sg-doodads {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    gap: 10px 16px;
    margin: 1.4em 0 2em;
  }
  .sg-doodads dt {
    font-size: 22px;
    line-height: 1;
    display: inline-block;
    margin-right: 8px;
  }
  .sg-doodads dd {
    display: inline;
    margin: 0;
    font-size: 12px;
    color: var(--muted);
  }
  .sg-doodads dt,
  .sg-doodads dd {
    vertical-align: middle;
  }
  .sg-doodads > dt + dd {
    display: inline-block;
  }
  .sg-doodads code {
    font-size: 11px;
  }

  .sg-elements {
    margin: 1.4em 0 2em;
  }
  .sg-elements p {
    margin: 0.4em 0;
  }

  /* Render a font's own name in its face (--ui = Hanken, --code = Plex Mono) */
  .sg-ui {
    font-family: var(--ui);
    font-size: 0.95em;
  }
  .sg-code {
    font-family: var(--code);
    font-size: 0.88em;
  }
</style>
