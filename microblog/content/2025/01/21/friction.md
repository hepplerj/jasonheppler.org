---
layout: post
title: "Friction"
microblog: false
guid: http://jaheppler.micro.blog/2025/01/21/friction/
post_id: 4832965
custom_summary: true
summary: "Migrating to Micro.blog made writing easier and more productive."
date: 2025-01-21T09:36:28-0600
lastmod: 2026-01-07T16:28:41-0600
type: post
categories:
- "tech life"
- "writing"
- "indie web"
- "Longform"
books:
- "search"
url: "/2025/01/21/friction/"
---
<img src="https://cdn.micro.blog/books/search/cover.jpg" align="left" class="microblog_book" style="max-width: 60px; margin-right: 20px; margin-top: 0px; padding-top: 0px;">

When it comes to types of work I do, I like a certain amount of friction—what Alan Jacobs calls “[constructive friction](https://blog.ayjay.org/smooth-things-and-rough-ground/).” The friction I mean here are the tools I use and how they can introduce the kind of friction that I find useful. Usually this means I tend to prefer tools that do _less_—it’s one of the reasons [I often stick to default apps](https://writing.jasonheppler.org/2023/11/29/default-apps-for/). Sure, I could (and once did, for a _long_ time) use Omnifocus to set up the perfect GTD environment loaded with perspectives for any possible slicing and dicing I could think of among my task list. But at some point that just became _fiddling_, not _doing_. I have a similar relationship with [Drafts](https://getdrafts.com/), an app I love using but also has a degree of non-friction that often means the things I put there are often lost in the bucket of, er, drafts.

One place where I felt friction getting in the way of what I wanted to do was blogging.

I moved my website to Hugo years ago; before that it ran on Jekyll, and before that Wordpress. But something happened along the way: my writing in that space dwindled, and you can see it looking over my yearly archives. There are lots of likely reasons: life became busier, especially after having children; social media sucked up time and attention in a way that was detrimental; I had other writing outlets, or other kinds of writing I had to finish (like a dissertation or [book](https://www.oupress.com/9780806193748/silicon-valley-and-the-environmental-inequalities-of-high-tech-urbanism/)) that took my attention. But I’ve come to realize lately that the tool itself was also getting in my way.

I’m someone who spends at least 70% of his workday in the command line. In the process of [building digital history](https://rrchnm.org/) I’m doing almost everything there: using [vim](https://neovim.io/) for code editing, [managing](https://github.com/jesseduffield/lazygit) GitHub Issues and commits, even [email](https://neomutt.org/). I like working from the command line: it’s efficient, it gets out of the way, and it’s powerful. And often, the more I can do from there using just a keyboard the better. But blogging from the command line became one of those things that had more friction than necessary.

This isn’t to say Hugo is a bad static site generator. We use it at [RRCHNM](https://rrchnm.org) for any static site; I continue to use it for my main website and don’t plan on moving anytime soon. But I found myself bumping up against a couple things.

First: The whole process felt clunky. Or maybe I've just lost my patience with it. If I had an idea for a post, I had to navigate to my website directory on my computer. Then I had to fire off the bash script I wrote to generate a new markdown file (with some basic YAML metadata). Then I had to open that file, make a few changes to the metadata, and then I could start writing. Once I felt like the draft reached a state of publishable, I removed a `draft` flag from the metadata, built the site locally to test things out, then pushed the change to GitHub, *then* fired off another custom script that used `rsync` to update the live site.

That’s a lot of steps for one post. And if I was writing more than one thing in a week—let alone in a day—that was a lot of steps to have to repeat.

I also had a tendency to fiddle—to tweak some aspect of my site design or layout that distracted from actually writing.

Hugo, in this case, was getting in my way.

Second: I wanted to be able to write from more than just my laptop. I’m a pretty frequent user of a keyboard and my iPad, but writing for my blog from the iPad was a difficult task. I explored some ways to get around this—things like using GitHub Actions or Netlify to have my website rebuild and redeploy anytime I pushed a change up to GitHub. But, again, that started to feel like a lot of steps just to write a blog post. I wanted to write, not set up technical infrastructure to write.

So, Hugo from the command line became less of a space for me to write. It was <mark>un-constructive friction</mark>.

---

Over the holidays, I [migrated](https://writing.jasonheppler.org/2025/01/06/over-the-weekend-i-finished/) my blog to Micro.blog. It’s been the perfect remedy: I can use mb’s web editor, or I can write in my preferred text editor, or MarsEdit, or Obsidian. For the first time in a while, I feel _compelled_ to blog and I can only credit the *ease* at which I can now write and publish as the key shift. It's a nice feeling.Micro.blog comes with all sorts of other advantages, including handling things I use to handle on my own:

1. I continue to own my own turf. While it’s not on my server anymore, the blog does live under my domain. And [Manton](https://www.manton.org/) has done a terrific job making it very easy to export the data if I ever decide to move elsewhere or return to Hugo.
2. One of the things Micro.blog handles really well is different kinds of post. It handles tweet-length posts with ease, but over 300 characters gives you a title form to turn a short-form piece into something longer.
3. It’s a great community, and Micro.blog makes it super simple to find communities. The [Discover](https://micro.blog/discover) page is a great way to find folks with similar interests, thanks especially to its emoji system of tagging those interest (🍿 for movies, 📷 for photography, 📚 for books, and more).
4. In addition to blogging, Micro.blog supports [microcasts](https://www.manton.org/2018/04/12/wavelength-for-microblog.html) for short-form podcasts and, recently, introduced a concept of photo collections to easily make photo grids in posts. If you’re looking for an Instagram replacement, mb has you covered.
5. Micro.blog lacks the incentive to shitpost, build your brand, troll, be toxic, or otherwise do things that our algorithmically-driven feeds have amplified on the web.
6. Micro.blog has a built-in [reading tracker](https://micro.blog/books/search) that allows you to track your reading. But, since these are just posts, you can also easily expand these into long-form thoughts or review of a book.
7. Micro.blog has some nice simple apps for working with the service. There’s the [official app](https://help.micro.blog/t/third-party-apps/46) itself, but also [Epilogue](https://epilogue.micro.blog/) for working with book tracking or [Sunlit](https://sunlit.io/) for just scrolling through photos.
8. There’s no likes, no follower counts, no re-posts, no algorithms. When folks reply on micro.blog, it’s much more thoughtful and well-intentioned than any comment section you’ll find on the web.

Micro.blog as a place, then, is the right kind of constructive friction: ease of use for me, but also by design discourages the kind of toxicity the web has become. It has removed a piece of un-constructive friction in my digital life: including this piece, I have written three longer-form posts since the start of the year. In all of 2024 on my old blog, I only wrote five things. The ease of writing and the ease of handling different post lengths, at least so far, has helped unlock an outlet for my writing.
