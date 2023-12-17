---
title: "Weekend Update"
date: "2023-03-19T13:00:30-05:00"
slug: "weekend-update"
lede: "Some design updates and a new dark mode switcher!"
tags: [design, personal]
---

This afternoon I pushed up a few updates I've been working on for the site. First, the homepage has gotten a slight facelift: more prominent placement of recent written work, recent digital scholarship, and recent collaborations. I should probably just collapse the homepage and the [about page](/about/), but I sort of like the about page's layout and can't bring myself---yet---to let it go.

<!--more-->

I've also added a ⚡️theme switcher⚡️ to the footer of the site. You can now toggle between a light theme, a dark theme, or have your browser automatically toggle between them depending on the time of day (assuming your browser supports this). As part of this process, I took the opportunity to dig through my CSS. I cleaned up a bunch of color codes I was no longer using and implemented some new theme-specific CSS tokens. I've been thinking about breaking the CSS up into more managable components (a file for base settings, another for typography, etc.), but I'll save that for another time. I've also consolidated the site's color palette down to a few shades of greens and off-whites---with a few pops of red---that I'm pretty happy with. This is evident in both the light and dark theme. There's a few things to clean up yet with this shift---my `mark` <mark>highlight</mark> doesn't look great in dark mode---but these small tweaks are always around to fiddle with.

The navigation bar now gets out of the way when you scroll down (and returns when you scroll up), thanks to [headroom.js](https://wicky.nillia.ms/headroom.js/). This lets you focus on text and hides anything you don't need to see all the time. I've also moved footnotes to [littlefoot.js](https://littlefoot.js.org) so they're always just a click-and-popup away.

Finally, the blog page (now "[Posts](/blog/)") has gotten an overhaul. Instead of just a list of post titles and dates like I had, I now include a short lede for each post and group posts together by year. This took the longest among the updates---I went back through each thing I've written here to ensure it had a description and, if it didn't, I provided one. I also collapsed my inconsistent use of tags and categories into just tags, along the way ensuring that these were regularized across all posts.

All in all, some nice [commons tending](http://ayjay.org/Tending.pdf). I'm sure there's a few crumbs to clean up yet. If you spot any issues, it'd be swell if you dropped me a [note](mailto:jason@jasonheppler.org).
