---
layout: page
permalink: /teaching/
title: "Teaching"
description: "Courses and workshops that I've taught, created, or helped lead."
category: teaching
tags: [workshops]
---

For more teaching information, see <a href="{{ site.owner.vita }}">my vita</a>.

## Workshops

### Doing Digital History

Stanford University, Winter 2014

> This workshop series addresses a variety of digital methods for historians, 
> including working with Zotero, Paper Machines, spatial humanities, 
> databases, text analysis, topic modeling, and research management tools. The 
> workshop allows faculty and graduate students to get hands-on with a variety 
> of tools, including MALLET, Neatline, Omeka, Google Earth/Maps, DEVONThink, 
> Zotero, and Paper Machines.

### Programming in the Humanities

[THATCamp American Historical Association 
2012](http://aha2012.thatcamp.org/01/04/session-proposal-programming-in-the-humanities/), Chicago, IL, January 2012

> Over the course of my training as a digital historian, I have had two 
> opportunities where classroom instruction involved learning a programming 
> language. The first was in Prof. Stephen Ramsay’s Electronic Text course 
> during the fall of 2010 where I formally learned Ruby. The other was this 
> past fall in a digital humanities seminar with Prof. William Thomas where I 
> self-taught myself Objective-C in a month to build an iOS application.
> 
> I am, most broadly, interested in this idea of programming in the humanities 
> as separate from Software Studies (Lev Manovich et al.), Critical Code 
> Studies (Mark Marino et al.), and Platform Studies (Ian Bogost et al.) (hat 
> tip to Steve Ramsay for pointing out this distinction to me recently). The 
> digital humanities perspective on code is different, and perhaps this is an 
> area for discussion.

## Posts

<ul class="listing">
{% for post in site.categories.teaching %}
    <li>
        <span>{{ post.date | date: "%B %e, %Y" | ordinalize  }}</span>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
