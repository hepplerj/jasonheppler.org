---
layout: post
title: "Using Text Expansion in My Research Workflow"
microblog: false
guid: http://jaheppler.micro.blog/2012/12/07/using-text-expansion-in-my/
post_id: 4570984
custom_summary: false
summary: ""
date: 2012-12-07T02:00:00-0600
lastmod: 2025-01-03T19:09:20-0600
type: post
categories:
- "tech life"
- "Longform"
images:
- https://cdn.uploads.micro.blog/2634/2025/87dc88fa16.jpg
- https://cdn.uploads.micro.blog/2634/2025/858025624b.jpg
- https://cdn.uploads.micro.blog/2634/2025/5e54770038.jpg
- https://cdn.uploads.micro.blog/2634/2025/d120675c12.jpg
- https://cdn.uploads.micro.blog/2634/2025/c8080eff8e.jpg
- https://cdn.uploads.micro.blog/2634/2025/0cef1fbfb7.jpg
- https://cdn.uploads.micro.blog/2634/2025/58572727f8.jpg
- https://cdn.uploads.micro.blog/2634/2025/e68cd5cb16.jpg
photos:
- https://cdn.uploads.micro.blog/2634/2025/87dc88fa16.jpg
- https://cdn.uploads.micro.blog/2634/2025/858025624b.jpg
- https://cdn.uploads.micro.blog/2634/2025/5e54770038.jpg
- https://cdn.uploads.micro.blog/2634/2025/d120675c12.jpg
- https://cdn.uploads.micro.blog/2634/2025/c8080eff8e.jpg
- https://cdn.uploads.micro.blog/2634/2025/0cef1fbfb7.jpg
- https://cdn.uploads.micro.blog/2634/2025/58572727f8.jpg
- https://cdn.uploads.micro.blog/2634/2025/e68cd5cb16.jpg
photos_with_metadata:
- url: https://cdn.uploads.micro.blog/2634/2025/87dc88fa16.jpg
- url: https://cdn.uploads.micro.blog/2634/2025/858025624b.jpg
- url: https://cdn.uploads.micro.blog/2634/2025/5e54770038.jpg
- url: https://cdn.uploads.micro.blog/2634/2025/d120675c12.jpg
- url: https://cdn.uploads.micro.blog/2634/2025/c8080eff8e.jpg
- url: https://cdn.uploads.micro.blog/2634/2025/0cef1fbfb7.jpg
- url: https://cdn.uploads.micro.blog/2634/2025/58572727f8.jpg
- url: https://cdn.uploads.micro.blog/2634/2025/e68cd5cb16.jpg
url: "/2012/12/07/using-text-expansion-in-my/"
---

*[This post originally appeared at [GradHacker](http://www.gradhacker.org/2012/12/07/using-text-expansion-software-in-your-workflow/) on 2012-12-06]*

Readers of [ProfHacker](http://chronicle.com/blogs/profhacker/new-and-simple-twists-on-text-expansion/42754) and [Lifehacker](http://lifehacker.com/5611210/how-to-use-text-expansion-to-save-yourself-hours-of-typing-every-day) will likely be aware of text expansion software. Brian Croxall, Ethan Watrall, Ryan Cordell, and Jason Jones have shared their tips for using software like TextExpander for Mac and PhraseExpress in Windows that have aided their workflow. 

Several of my snippets are used for research and writing, and rarely a day goes by where I don't use them. These are a few of my favorites:

<!--more-->

### Tables

Everything I write is written in Markdown or its more feature-rich variants, [MultiMarkdown](http://fletcherpenney.net/multimarkdown/) or [Pandoc-style](http://johnmacfarlane.net/pandoc/) (Pandown?). I mentioned in my last post on using Markdown that I keep a TextExpander snippet for creating a simple Markdown table that I can start working with. 

![Markdown table snippet](https://writing.jasonheppler.org/uploads/2025/87dc88fa16.jpg "Markdown table snippet")

Although it doesn't look so above, the script spits out a nicely formatted Markdown table in monospaced font that's ready for my input.

### Images

I use a snippet to embed Markdown images, taking advantage of TextExpander's fill-in forms to insert the image title and path. I type <code>mmimg</code> and it's ready for my input. 

![Markdown images](https://writing.jasonheppler.org/uploads/2025/858025624b.jpg "Markdown images")

### Autocorrection

I place many autocorrections into TextExpander to relieve me of having to remember how something has been stylized. For example, is the formatting THATCamp? ThatCamp? THATcamp? I have a snippet to input the correct format every time. Same for LaTeX (which is always difficult to type), MacBook, DEVONthink, and Van Hœt ([So.](https://twitter.com/karlvanhoet)).

![Markdown autocorrect](https://writing.jasonheppler.org/uploads/2025/5e54770038.jpg "Markdown autocorrect")

### Ipsum Text

I don't need lorem ipsum placeholder text very often, but when I do I use a script to generate random gibberish instead of using the Latin gibberish normally found in ipsum text. Inspired by [this script by Dr. Drang](http://www.leancrew.com/all-this/2011/12/mechanics-lipsum/), the snippet generates random ipsum text on the fly from Walter Benjamin's 1936 essay "[The Work of Art in the Age of Mechanical Reproduction](http://www.marxists.org/reference/subject/philosophy/works/ge/benjamin.htm)." It results in text that looks like this:

> XI The technical structure notes this can represent an apparatus of comparison nor S verin-Mars from a far-reaching liquidation of comparison with methods of thing. Panel painting filmed. Fascism sees its goal for their right to show the specially adjusted camera. Around 1900 technical reproducibility.
> 
> Today the spectator in no replica of prayer. One of a comparative look is possible. Alexandre Arnoux concludes his environment. As expert which Dadaism had heretofore usually branded as here described.

![Ipsum text](https://writing.jasonheppler.org/uploads/2025/d120675c12.jpg "Ipsum text")

### Code and Filesystem

I use TextExpander to made some areas of writing code and navigating the filesystem easier. You could add frequently used blocks of code or something as simple as hashbangs for programming languages, for example:

![Python hashbang](https://writing.jasonheppler.org/uploads/2025/c8080eff8e.jpg "Python hashbang")

Borrowing from Brett Terpstra, I also use snippets to make it easier to navigate the filesystem in the terminal. Instead of trying to remember the full path to Sublime Text packages, for example, I can just punch in <code>~st2</code> and have the path appear for me.

![Filesystem](https://writing.jasonheppler.org/uploads/2025/0cef1fbfb7.jpg "Filesystem")

### Notes and Metadata

I've recently begun using Gitit to organize research material, inspired by W. Caleb McDaniel's newest project. There are a few areas of using Gitit where I've decided to make it easier to insert metadata information. Gitit, for example, supports metadata in its pages. At the moment, the two metadata features I use are "table of contents" and "categories." To save me some typing, I created a snippet:

![Gitit](https://writing.jasonheppler.org/uploads/2025/58572727f8.jpg "Gitit")

I've also been moving my citation management to BibTeX. Most of my BibTeX material is exported from Zotero, but where I'm modifying or adding something new to my canonical BibTeX file I use a snippet and TextExpander fill-in to prompt me for inputs and complete the citation:

![BibTeX](https://writing.jasonheppler.org/uploads/2025/e68cd5cb16.jpg "BibTeX")

### Snippet Design

A final note: why do most of my snippets start with the semicolon? This comes down to personal preference (for example, Ryan Cordell uses capitalizations in places where there aren't usually capitals, Brett Terpstra uses double commas). I like the semicolon for two main reasons:

1. The semicolon is on the home row and makes the most sense for me to hit when typing.
2. The English language never has a time when semicolons are not followed by non-whitespace characters.

Text expansion has [many more options](http://vimeo.com/10125313) than I've outlined here. But these are a few ways that TextExpander has helped remove friction in my workflow or aided me in my daily work. 
