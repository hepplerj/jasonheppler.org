---
layout: page
title: Digital &amp; Public History
permalink: /digital/
---

As a public historian, I find ways to make academically-oriented history
accessible to the general public and involve communities in their local
histories. My belief in the importance of public history enhances my
approach to digital history. As a digital historian, I collaborate with
colleagues, students, and the community to create digital projects. I am
interested in exploring how digital history can intersect with public
history and generate projects that conserve and interpret the past.

I serve on the editorial board of *[The Middle West Review][]*, a
peer-reviewed journal of Midwestern history, and serve on the digital
content advisory board for *[The American Yawp][]*, an online, free,
collaboratively-written textbook of American History.

I'm also something of a scholar-hacker. I prefer plain text where ever
possible and write scripts to make my workflow fit my needs. The posts
here reflect my attempt to integrate plain text into my academic
workflow, discuss programming in the humanities and its application to
research, and digital history methods generally. Digital history
provides historians new ways to think about historical causation and
events through new research methods and visualizations.

## Posts

<ul class="listing">
{% for post in site.categories.hacks %}
    <li>
        <span>{{ post.date | date: "%B %e, %Y" | ordinalize  }}</span>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>

[The Middle West Review]: https://uimiddle.wordpress.com/
[The American Yawp]: http://www.americanyawp.com/
