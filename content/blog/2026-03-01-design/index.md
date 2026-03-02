---
title: A New Design for Readability
lede: Design updates for 2026
date: 2026-03-02
tags:
  - personal
  - indie-web
draft: true
---
My website just went through a re-design and I wanted to document some of the changes here. One reason I wanted to do this was to do a major clean-up: I had many dead CSS rules, old images, a graveyard of unused fonts, unused Javascript, and generally some cleanup across posts and pages. Admittedly, I leveraged [Claude Code](https://claude.ai) for some of this work, but especially for processing old CSS and images, it completed work in a matter of minutes that in all likelihood would've taken me several hours. More on that in a minute.

I entered this design work with some self-imposed constraints: 

1. Reduce the carbon footprint to less than 0.185g of CO2.
2. Focus on functionality, get rid of everything else. 
3. Choose good, readable typefaces that evoke a book. As [Robin Sloan says](https://www.robinsloan.com), this site will aspire to the speed and privacy of the printed page.
4. Audit the entire codebase, use more modern tooling to help with maintenance. Cut a bunch of CSS I no longer need or use. 
5. Ensure functionality without Javascript. 
6. Use only three typefaces (serif, sans, and mono), ideally hosted locally. Fall back to system fonts.
7. Keep the navigation simple. 
8. Keep the color scheme simple (for some reason I had over twenty different colors defined in my `:root` rules before the redesign.)
9. Be consistent with headings, layouts, and unified design and typography. 
10. Set up a blogging environment that connects Obsidian and Hugo.

Much of this design work was inspired by some of my favorite sites, like [V.H. Belvadi](https://vhbelvadi.com/) (whose sidebar navigation inspired my own), [Maggie Appleton](https://maggieappleton.com), [Lincoln Mullen](https://lincolnmullen.com), [Robin Rendle](https://robinrendle.com), [Manuel Moreale](https://manuelmoreale.com/?ref=jasonheppler.org), [Jim Nielsen](https://blog.jim-nielsen.com/?ref=jasonheppler.org), and [Gwern](https://gwern.net/?ref=jasonheppler.org). The big purpose of the redesign, aside from some general code cleanup, is *readability*. This site has gone through several major redesigns (I believe this is Version 9) since its inception nearly twenty years ago, along with countless fiddling and tweaking.[^1] I wanted to simplify all of this so that the thing that matters for readers arriving on the site is the *content*. Everything else gets out of the way: navigation is tucked away in a slide-out rather than navigation bar, keyboard shortcuts help users move around easily, and text takes the primary viewing area on all screen sizes. 

The CSS work was particularly useful: not only cleaning out a bunch of old rules I was no longer using that lingered behind from past redesigns, but I also migrated over to a modern tooling stack to make layouts and maintenance easier. I also took steps to ensure that any Javascript usage is a progressive enhancement: the site works perfectly well even if `noscript` is running in a reader's browser. I reduced the CSS file by a few thousand lines (why I had something like twenty different color variables I'm not sure.)

As part of the cleanup overall, I converted all of my images from `png` / `jpg` to `webp` for performance/sustainability. And, to help with performance more generally, I put all of the Hugo posts into page bundles which allows me to use Hugo image processing tools on any image asset on the site. 

I also migrated back over from micro.blog after [a year-long experiment](/2025/01/21/friction/). I'll still be doing micro posts at micro.blog, and the main reason for leaving isn't micro.blog at all -- it's a terrific service and I love the work [Manton](https://www.manton.org) has done in creating the platform. I'll still be spending a lot of time there. But I wanted a bit more control over the look and feel of my website, and while I developed a micro.blog theme to mimic my old site design, it felt a bit clunky to have both themes -- it meant any change I made to my main website I had to go and figure out in a micro.blog theme as well, which was just too much overhead. Two themes for different platforms is, admittedly, a self-imposed headache---but, I like having a consistent interface for readers. So I've moved all my content (except microposts) back into my website. 

[^1]: One of these days I'll try and compile a list of these design changes with the aid of the Internet Archive.

| Keyboard Shortcut | Result                    |
| ----------------- | ------------------------- |
| `/`               | Open navigation menu      |
| `⌘ + E`           | Open Essays page          |
| `⌘ + J`           | Open Notes page           |
| `⌘ + I`           | Open Publications page    |
| `⌘ + Y`           | Open Digital History page |
| `⌘ + B`           | Open Bookshelf page       |
| `⌘ + /`           | Open About page           |
| `⌘ + K`           | Open Search page          |

The climate goal was a tough one, made all the harder because I wasn't using a 100% renewable web host---despite how much I love Reclaim Hosting, I decided to move this website to Cloudflare and [their sustainability goals](https://www.cloudflare.com/impact/). The reduction of file sizes, DOM elements on the page, minimizing energy emitted by your device when visiting my site, and web-friendly images all have a positive impact. I'm not quite hitting my 0.185g goal, but I did significantly reduce what this site was measuring before the redesign: I cut this by 80% with these changes. My measurement according to Digital Beacon went from 2.4g to 0.479g.

I've also divided out my posts into three areas. For a while now I've felt a kind of constraint over the kinds of things I *should* blog about versus using this space as something that can accept any kind of writing. So now this site has three main areas: Essays for longer-form, argument-driven pieces; Notes for shorter form and sometimes incomplete thoughts or ideas; and Commonplace as a way to simply collect things I find interesting. 

The other big change is the workflow I have now for Obsidian and Hugo. I've migrated this site to Cloudflare, which has a really great integration with Github. What this means now is any commit to `main` will automatically rebuild the site without my having to intervene. The work now looks something like this: I've opened my website folder as its own Obsidian vault, giving me access to all of my posts and pages. Using the Templater plugin, I can create a new post with the structure that Hugo expects. When I have a draft post ready to go, I toggle the draft status from true to false and use the Obsidian Git plugin to run a `git push` into my `main` branch. When git finishes, Cloudflare picks up the commit and deploys the site. All without having left Obsidian at all. No terminals. No VSCode. No direct git usage. I can do everything right inside of Obsidian (and if I need to preview anything first, running a `localhost` side by side with the content I'm writing or editing and having it instantly refresh is really nice.)

Claude Code was amazingly helpful in all of this. Like any generative AI, it needs a human. But, like other computational tools we use, it's very good at mechanical or repetitive tasks. Helping me work through converting 200+ images, renaming hundreds of files, and massive CSS auditing is all work that would've taken me a considerable amount of time. It's also much more disciplined about writing good git commits than I am. Yet as I note in the footer to this site, nothing here is AI-generated: by which I mean, the words, thoughts, ideas, philosophies, and research all come from me and it remains so. Same with the design: it took a lot of back and forth with a coding agent to get things how I envisioned them, all of which still required human judgment, but was never given over to the agentic system to devise on its own.

As with any of these redesigns, certainly there are things that broke or don't look quite right. If you spot an issue, it'd be swell if you'd let me know. Find [my email](/about/) or [hit me up on bsky](https://bsky.app/profile/jasonheppler.org). 