---
title: Restoring Old Digital History
date: 2026-03-24
draft: false
lede: Using LLMs to clean up my early research projects
tags:
  - digital-history
  - development
---
If there's one thing I've come to appreciate about generative AI, it's the ability to automate routine things. One of my digital history sites---[the first one I ever made](http://framingredpower.org/)---broke at some point. It's an old site that really should've always been a static site, but static site generators were not quite a thing when I first made this project. Instead, I had a mix of HTML and PHP that assembled the site.

So a few weeks ago, I posed Claude a task: take this site and convert it into Hugo. That work finished within an hour---a task that most certainly would've taken me a few weeks to work through, and much of that work pretty tedious. I've since had Claude's help in converting all of my digital history projects into Hugo sites. They're now easier to maintain, easier to deploy (I've moved all of my sites to Cloudflare, which deploys from a GitHub commit), and should stick around a lot longer. 

Here are the sites I've updated in the past month.
## [Framing Red Power](https://framingredpower.org)

A companion website I created for my Master's thesis, Framing Red Power sought to analyze media coverage of the Trail of Broken Treaties protest in 1972 that culminated in Indigenous activists occupying the Bureau of Indian Affairs. With Claude's help I fixed up a number of things. 

First, the site had completely broken and was only providing unstyled HTML. As part of the Hugo conversion, I asked Claude to also add in a modern CSS framework and slightly modernized the design. The site, otherwise, remains exactly the same as it did when I launched it in 2009. 

The other big fix was to reconstitute text analysis tools that stopped working ages ago. At one point [Brian Pytlik Zillig](https://cdrh.unl.edu/person/brian-l-pytlik-zillig/) at the [Center for Digital Research in the Humanities](https://cdrh.unl.edu/) had developed a tool called TokenX ([for example](https://dh-abstracts.library.virginia.edu/works/751)) for running text analysis and building visualizations, but it's been offline for quite some time. So, [I rebuilt the text analysis section](https://framingredpower.org/sources/text-analysis/) of the site with Observable and recreated some of the visualizations that I'd long lost. I also updated [the map interface](https://framingredpower.org/sources/protestmap/), which once relied on Google My Maps but now is self-contained using Leaflet. I created [a methodologies page](https://framingredpower.org/sources/text-analysis-methods/) about creating these visualization as well. 

I consider Framing Red Power a completed research project.

## ["Self-sustaining and a good citizen":  William F. Cody and the Progressive Wild West](https://progressivewildwest.org/)

I was once the project manager for the [William F. Cody Archive](https://codyarchive.org) and a research affiliate with the [Buffalo Bill Center of the West](https://centerofthewest.org/) as Doug Seefeldt, Frank Christianson, Jeremy Johnston, and a few of my graduate school colleagues aimed to launch [Cody Studies](https://www.codystudies.org/) to examine the life and legacy of William F. Cody. In this role I pursued research on Indigenous peoples employed by his Wild West exhibition, resulting in the project above. I argued that while other scholars have suggested that employment with Cody allowed Indigenous peoples to continue practicing in cultural and religious traditions otherwise outlawed on reservations, Cody saw his exhibition nevertheless as a potential vehicle for the Progressive project of "civilizing" Native Americans. 

The first step here was getting the site converted to Hugo from Jekyll, which was pretty straightforward. The bigger task was to update a section of the site I called a [concept map of narrative themes](https://progressivewildwest.org/concept-map/): a way of visualizing [annotations](https://progressivewildwest.org/1913/07/28/letter-from-john-r.-brennan-to-cato-sells/) across primary sources that served to collect together pieces of evidence that drove my argument. Here's the kicker, though: this piece of scholarly work was two parts, where annotations existed in the transcribed sources and then the visualization was a hand-coded HTML page of those annotations. Nothing was automated, although that was always the idea; it was a tremendous amount of work. 

Hugo, however, has allowed me to finally automate this visualization. With Claude's assistance, I replaced all my hand annotations with Hugo shortcodes that handled the annotations in the documents and allowed me to derive that data via a Python script. I finally made this work the way I'd always wanted to (at the time I'd played with ideas of using XML and XSLT but never fully got around to it, thankfully). This has been a tremendously helpful thing to have.

The site currently exists exactly as it did when I published it in 2012, but I am returning to this project as I do fresh research. Having it in Hugo will make new additions much easier.

## [Machines in the Valley](https://machinesinthevalley.org)

Machines in the Valley is a companion website to my book. This one I hand-converted from Jekyll to Hugo myself a couple of years ago, but did turn to Claude recently to just have it do a once-over on the design and CSS work (which did fix a few things that I'd broke). 

When I converted this to Hugo in 2024 right as my book was published, I'd moved the CSS from Bootstrap to Tailwind in addition to getting things into a new static site generator. Doing that work also meant some slight layout changes that helped let the visualizations take over the browser window in a way that I felt gave readers a better viewport for working with the visualizations. I also took the time to clean up a few visualizations and create two new ones based on data I'd collected but never got around to publishing. 

I consider this project done. 

## [What Is Digital Humanities?](https://whatisdigitalhumanities.com/)

The most popular thing I've ever made, which takes definitions from past Day of DH events and presents a random definition each time you visit the page or ask for a new definition. Perpetual answers to the perpetual question, as I say. 

No real updates here from coding agents, just a note that a few years ago I rewrote some of the randomization scripts and added a button refresh to get new definitions on demand. This, also, is on Cloudflare now. I guess this project is done?

## [JasonHeppler.org](https://jasonheppler.org)

While we're at it, I'll reiterate that I've migrated this website to Cloudflare in addition to [a pretty major code audit](/2026/03/02/a-new-design-for-readability/). 

---

These updates weren't just about tidying up or fixing old projects, though---they're about the broader challenge of keeping digital work alive. Part of my interest here is related to my work at [RRCHNM](https://rrchnm.org)---we have, after all, thirty-plus years of projects and some subset of those projects are ones we are committed to sustaining. Among the hats I wear at the Center, one is aiding with our sustainability work. As part of that effort we've [tried to make sites static](https://sustainabledh.org/) so they remain accessible and usable: some of those are simple `wget` workflows that we lightly clean up and serve, but others are entire conversions from something database-driven like Omeka or Wordpress to Hugo. 

I want my digital history work to stick around, and plain old HTML is the most sustainable format we currently have for the Internet. Getting these old projects into a more modern shape feels great.