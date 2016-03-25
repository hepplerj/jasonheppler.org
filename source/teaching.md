---
layout: page
title: Teaching
permalink: /teaching/
---

For more teaching information, see <a href="{{ site.owner.vita }}">my vita</a>.

## Courses

### Digital History: Sources, Methods, Problems

Stanford University, Fall 2016

> This class is about learning to do history using digital tools. The course
> teaches the fundamentals of information technology by applying them to
> historical problems. During the quarter, students will work on a research
> project in order to learn how to acquire, question, analyze, and interpret
> data; they will create visualizations of datasets; and present visual and
> textual material online. By learning through doing, students will gain
> digital skills and their application to historical research and thinking.

### Humanities+Design: Design and Digital Scholarship Publishing

Stanford University, Spring 2016

> How might visualization tools effect the way Humanities scholars work in the
> digital age? Humanities research relies increasingly on digitized source
> material and, consequently, on data visualization as an interface for
> organizing and assessing as well as analyzing information. We will explore
> different ways of thinking about data visually, using visualization software
> under development to discover themes, questions and relationships. In an age
> where visual forms hold the force of persuasion, data visualization skills
> not only shape arguments but also help researchers engage critically with the
> information behind their analyses. Humanities+Design investigates the role of
> the humanities in the challenges of interpreting and presenting
> data---especially "big data." Each student will participate in the design of
> visualization tools for humanities research, learning about the design
> process and design theory as it applies to digital humanities research.  

### Digital History: Sources, Methods, Problems

[Course Website](/teaching/hist205f.2014/), Stanford University, Fall 2014

> This is a hands-on course that introduces students to the use of digital
> tools and sources to conduct original historical research, analyze and
> interpret findings, and communicate results. Digital history is an
> interdisciplinary approach that seeks to bring digital technology into
> conversation with humanities disciplines and, specifically, seeks to analyze,
> synthesize, and present knowledge through computational media. Digital
> historians create digital archival collections, databases, digitize objects,
> analyze humanistic material in digital form, and addresses scholarly
> questions often difficult, if not impossible, to ask using non-computational
> methods.

## Workshops

### Teaching Digital History

[Missouri Valley History Conference](https://docs.google.com/document/d/11Efu9HDXd2ASVCDIGUtJxQE-JOlOCSw1G5V26TTOuNU/edit?usp=sharing), University of Nebraska-Omaha, March 2015

> In this workshop, we will discuss ways to integrate digital methods into
> history classrooms. These new approaches aid students, teachers, and
> professors in working with primary sources, crafting original arguments, and
> presenting historical work in a public venue.

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
> language. The first was in Prof. Stephen Ramsay's Electronic Text course
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
