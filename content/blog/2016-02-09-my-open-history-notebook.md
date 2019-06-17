---
title: "My Open History Notebook"
date: 2016-02-09
categories: 
- open notebook
- digital history
---

I've long advocated [open history](http://www.jasonheppler.org/2008/11/08/open-source-scholarship-and-why-history-should-be-open-source/) as something we should pursue as historians. Along those ends, I've been inspired by [Caleb McDaniel](http://wiki.wcaleb.rice.edu), [Lincoln Mullen](http://notebook.lincolnmullen.com), and [Shawn Graham](http://electricarchaeology.ca/2015/10/06/an-elegant-open-notebook/) and their use of open notebooks. Caleb, in particular, led me to try out [Gitit](http://gitit.net), a git-backed wiki platform written in Haskell and tightly integrated with my favorite command line tool, [pandoc](http://pandoc.org).

I loved using Gitit, but there were a few little things that bugged me about it.

So, like any sensible person, I [built my own wiki](http://notebook.jasonheppler.org).

Well, not exactly. It's built on top of ([what else?](http://jasonheppler.org/2011/04/19/migrating-to-jekyll/)) Jekyll, the same engine that's used for powering this website. And the real backbone is Github. Much of this is largely inspired by [Mark Madsen's notebook](http://notebook.madsenlab.org). So far, Jekyll fits almost every need and feature I liked about Gitit.

Not everything here is quite up to date with my private Gitit notebook. I have a notebook I've been using in Gitit, and I may or may not port that data over depending on the amount of time it'll take to move things over. But there will be traces of the dissertation in the new notebook, especially as my dissertation moves into its manuscript stage. But the notebook is also collecting information about other research projects and interests I have going, including some research I'm working on about the use of visualization in history and narrative. A few things related to the dissertation will be ported over, and I suspect there's more than a few things in the notebook that are currently broken. I'll fix those soon enough. 

The notebook tries to replicate a few of the things I liked about Gitit, things like version control that links out to Github commit messages for individual notes. The notebook isn't a true wiki, in the sense that I can create pages that don't already exist very easily and, thus, isn't quite as elegant as Gitit or any other wiki platform. But, since I'm pretty familiar with the ins-and-outs of Jekyll and Ruby, I can do things with the platform I simply can't (or don't choose to) in Gitit. I don't, for example, have a desire to learn Haskell, but in Jekyll I can build individual pages to collect all notes, or all notes related to a particular project or category, or group notes by both categories and tags (which I've never liked how Gitit handled). Plus, I can embed visualizations pretty easily now thanks to a simple workflow for converting `.Rmd` files into `.md` files with the [Rmarkdown library](http://rmarkdown.rstudio.com). 

Are there concerns? Sure, this could be [disastrous in a lot of ways](http://chronicle.com/blogs/profhacker/fork-the-academy/48935). The Big Question, in my mind, is the discipline's culture that values product more than process. I think we're having a [hard enough time](http://jasonheppler.org/2012/01/22/redefining_scholarship_in_the_digital_age/) getting the discipline to value digital history as a methodology, let alone see an open notebook as another form of public scholarly engagement. But I'm willing to run with this and see how it works out.

So, here's to the [Jekyll notebook experiment](http://notebook.jasonheppler.org). I may decide to come back to Gitit someday, but for now Jekyll seems to fit my needs.
