---
date: 2014-04-08T10:27:52Z
description: null
image:
  feature: null
  thumb: null
categories:
- digital humanities
- spatial history
title: 'Day of DH: The Spatial Historian'
url: /2014/04/08/day-of-dh-spatial-historian/
---

*[This post originally appeared at [Day of DH](http://dayofdh2014.matrix.msu.edu/jasonheppler/2014/04/08/the-spatial-historian/) on 2014-04-08]*

It's a sunny California day (after a week of much needed rain). I'm variously
spending time outside and in, drinking coffee, and, today, writing code. Welcome
to my day.

I'm in what I believe are the final stages of a visualization project. In
collaboration with Cameron Blevins, we are building a spatial history of the
U.S. Post Office in the nineteenth century. Cameron is interested in the ways
that the post office can be used as a proxy to understand the development of the
American West over the century by plotting the location of thousands of post
offices. The result of our work together has been a way for Cameron to ask new
questions about settlement patterns in geographic and temporal detail.

Roughly a year ago Cameron had asked me about methods for visualizing a very
large number of point data he had collected on the post offices. A variety of
mapping solutions exist for this, but for me it was a chance to add another tool
to my toolbox. Having been tossed into the viper’s nest of JavaScript and the
data visualization library D3.js, I thought it prudent to see if D3 could handle
what we wanted to get out of the visualizations.

I haven't been disappointed. Sure, plenty of tools exist that easily allow
Cameron to plot the data — Tableau or Google Earth Engine, for example, allows
him to quickly draw coordinate data — but the *customization* of the research
question has been key. The tools we use for humanities research, after all,
should conform to the shape of the research question, not the other way around.
Plugging in the post data gives Cameron one avenue for his research, but D3 has
helped build in other ways to ask question. Cameron, for example, wanted to
understand post offices in snapshots of time. Our solution has been the
implementation of a timeline that allows users to drag, resize, and move spans
of time in order to change the status of a post office for that particular time
range (either closed, opened, active throughout the time period, and so on).

![Geography of the Post](/assets/images/gotp_preview.png)

The project is nearly ready for a beta launch. Some of my morning time belongs
to my dissertation, but my day will likely be spent on D3: tracking down a few
bugs yet in Cameron’s code, and continuing work on a visualization plugin I'm
working on for [Palladio](http://palladio.designhumanities.org/). More on that later.

Today, I'm going to try and write on the various things I do -- giving you
a snapshot more akin to a Week of DH -- but things that make up my day-to-day
work.

