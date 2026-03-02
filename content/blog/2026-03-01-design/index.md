---
title: A New Design for Readability
lede: Design updates for 2026
date: 2026-03-02
tags:
  - personal
  - indie-web
draft: false
---
My website just went through a big re-design and I wanted to document some of the changes here. I entered this design work with some self-imposed constraints: 

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

Much of this design work was inspired by some of my favorite sites, like [V.H. Belvadi](https://vhbelvadi.com/) (whose sidebar navigation inspired my own), [Maggie Appleton](https://maggieappleton.com), [Lincoln Mullen](https://lincolnmullen.com), [Robin Rendle](https://robinrendle.com), [Manuel Moreale](https://manuelmoreale.com/?ref=jasonheppler.org), [Jim Nielsen](https://blog.jim-nielsen.com/?ref=jasonheppler.org), [Gwern](https://gwern.net/?ref=jasonheppler.org), [A Working Library](https://aworkinglibrary.com/), and [Gina Trapani](https://notetoself.studio). The big purpose of the redesign, aside from major code cleanup, is *readability*. This site has gone through several major redesigns (I believe this is Version 9) since its inception nearly twenty years ago, along with countless fiddling and tweaking.[^1] I wanted to simplify all of this so that the thing that matters for readers arriving on the site is the *content*. Everything else gets out of the way: navigation is tucked away in a slide-out rather than in a navigation bar, keyboard shortcuts help users move around easily, and text takes the primary viewing area on all screen sizes. 

The cleanup of CSS and images was a major help. The CSS cleanup was particularly useful: not only cleaning out a bunch of dead rules I was no longer using that lingered from past redesigns, but I also migrated over to a modern tooling stack (Tailwind) to make layouts and maintenance easier. I also took steps to ensure that any Javascript usage is a progressive enhancement: the site works perfectly well even if `noscript` is running in a reader's browser. I reduced the CSS file by a few thousand lines (why I had something like twenty different color variables I'm not sure.) As for images, I converted all of them from `png` / `jpg` to `webp` for performance/sustainability. And, to help with performance more generally, I put all of the Hugo posts into page bundles which allows me to use [Hugo's image processing tools](https://gohugo.io/content-management/image-processing/) on any image asset on the site. 

I also migrated long-form posts back over from micro.blog after [a year-long experiment](/2025/01/21/friction/). I'll still be doing micro posts at micro.blog, and the main reason for leaving isn't micro.blog at all---it's a terrific service and I love the work [Manton](https://www.manton.org) has done in creating the platform. I'll still be spending a lot of time there. But I wanted a bit more control over the look and feel of my website, and while I developed a micro.blog theme to mimic my old site design it felt a bit clunky to have two themes. It meant any change I made to my main website I had to go and figure out in a micro.blog theme as well (or vice versa), which was just too much overhead. Maintaining two themes for different platforms is, admittedly, a self-imposed headache---but, I like having a consistent interface for readers. So I've moved all my content (except microposts) back into my website. Back home.

[^1]: One of these days I'll try and compile a list of these design changes with the aid of the Internet Archive.

Alongside readability became ease of moving around the site. I added a few keyboard shortcuts to the site that allows you to jump to different pages on the site. These shortcuts should avoid any existing browser shortcuts, but I may have to tweak these a little over time.

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

The climate goal was a tough one, made all the harder because I wasn't using a 100% renewable web host. Despite how much I love Reclaim Hosting, I decided to move this website to Cloudflare and [their sustainability goals](https://www.cloudflare.com/impact/). The reduction of file sizes, DOM elements on the page, minimizing energy emitted by your device when visiting my site, and web-friendly images all have a positive impact. I'm not quite hitting my 0.185g goal, but I did significantly reduce what this site was measuring before the redesign: I cut this by 80% with these changes. My measurement according to Digital Beacon went from 2.4g to 0.479g. I'll still be working on ways to get that number lower.

With readability as a key focus came a different way of thinking about the content I have on this site. For a while now I've felt a kind of constraint over the kinds of things I *should* blog about versus using this space as something that can accept any kind of writing. So now this site has three main areas: [Essays](/blog/) for longer-form, argument-driven pieces; [Notes](/notes/) for shorter form pieces, or incomplete thoughts or ideas; and [Commonplace](/links/) as a way to simply collect things I find interesting. The RSS feed currently provides all of these areas in a single stream. One outstanding task is to implement [POSSE](https://indieweb.org/POSSE) so posts end up broadcasted out on the fediverse. 

The other big change is the workflow I have now for Obsidian and Hugo. This has been delightful. I mentioned above that I've migrated this site to Cloudflare, which has a really great integration with Github. In short, what happens is that Cloudflare watches for changes in my `main` branch. If it detects a change, Cloudflare will automatically rebuild the site without my having to intervene at all. So when I'm writing, it now looks something like this: I've opened my website folder as its own Obsidian vault, giving me access to all of my posts and pages. Using the [Templater plugin](https://github.com/SilentVoid13/Templater), I create a new post with the structure that Hugo expects and set the draft status to true. When I have a draft post ready to go, I toggle the draft status to false and use the [Obsidian Git plugin](https://github.com/Vinzent03/obsidian-git) to run a `git commit` then `git push` into my `main` branch. Cloudflare picks up the commit and deploys the site. All without having left Obsidian. No terminals. No VSCode. No direct git usage. I can do everything right inside of Obsidian (and if I need to preview anything first, running a `localhost` side by side with the content I'm writing or editing and having it instantly refresh is really nice.)[^2] I've been working with websites for over twenty years and this is maybe the easiest time I've ever had in creating content for a website.

[^2]: I have a few settings turned on in Obsidian to make the editing environment more Hugo-friendly. I'll write this up in the future note.

[Claude Code](https://code.claude.com/docs/en/overview) was amazingly helpful in all of this. Like any generative AI, it needs a human. But, like other computational tools we use, it's very good at mechanical or repetitive tasks. Helping me work through converting 200+ images to `wepb`, renaming hundreds of files, and massive CSS and HTML auditing is all work that would've taken me a considerable amount of time. I first thought this redesign and new deployment process would take me at least a month; I finished it in a weekend. It's also much more disciplined about writing good git commits than I am. Yet as I note in the footer to this site, nothing here is AI-generated: by which I mean, the words, thoughts, ideas, philosophies, and research all come from me and it remains so. Same with the design: it took a lot of back and forth with a coding agent to get things how I envisioned them. That all required human judgment, it was never given over to the agentic system to devise on its own. 

I'm really pleased and delighted with the results. As with any of these redesigns, certainly there are things that broke or don't look quite right despite my effort to make sure everything is working and looks good on various screen sizes. If you spot an issue, it'd be swell if you'd let me know. Find [my email](/about/) or [hit me up on bsky](https://bsky.app/profile/jasonheppler.org) or [micro.blog](https://social.jasonheppler.org). 