---
layout: default
title: Teaching
permalink: /teaching/
---

For more teaching information, see <a href="{{ site.url }}/cv/">my vita</a>.

## Courses

### Digital History: Sources, Methods, Problems

[Course Website](/teaching/hist205f.2014/), Stanford University, Fall 2014

> This is a hands-on course that introduces students to the use of digital tools
and sources to conduct original historical research, analyze and interpret
findings, and communicate results. Digital history is an interdisciplinary
approach that seeks to bring digital technology into conversation with
humanities disciplines and, specifically, seeks to analyze, synthesize, and
present knowledge through computational media. Digital historians create digital archival collections, databases, digitize objects, analyze humanistic
material in digital form, and addresses scholarly questions often difficult, if not
impossible, to ask using non-computational methods.

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
