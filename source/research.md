---
layout: page
title: Research & Digital History
permalink: /research/
---

My work broadly centers on twentieth century political and environmental American history. My work ranges from political and cultural change, urban and environmental history, political culture, historical memory, and the North American West. Posts collected here are items related to my research projects. See <a href="{{ site.owner.vita }}">my vita</a> for more information about my research and community engagement.

As a public historian, I find ways to make academically-oriented history
accessible to the general public and involve communities in their local
histories. My belief in the importance of public history enhances my
approach to digital history. As a digital historian, I collaborate with
colleagues, students, and the community to create digital projects. I am
interested in exploring how digital history can intersect with public
history and generate projects that conserve and interpret the past.

I serve on the editorial board of *[The Middle West Review](https://uimiddle.wordpress.com/)*, a
peer-reviewed journal of Midwestern history, and serve on the digital
content advisory board for *[The American Yawp](http://www.americanyawp.com/)*, an online, free,
collaboratively-written textbook of American History.

I'm also something of a scholar-hacker. I prefer plain text where ever
possible and write scripts to make my workflow fit my needs. The posts
here reflect my attempt to integrate plain text into my academic
workflow, discuss programming in the humanities and its application to
research, and digital history methods generally. Digital history
provides historians new ways to think about historical causation and
events through new research methods and visualizations.

## Select Books, Articles, Book Chapters

{% for project in site.data.projects.published %}
<i class="fa fa-file" style="color:#03396c;font-size:80%;padding-top:6px;"></i> [{{ project.title }}]({{ project.url }}) ({{ project.date }}) &middot; {{ project.snippet }}
{% endfor %}

## Select Digital Projects

{% for project in site.data.projects.dh %}
<i class="fa fa-file-code-o" style="color:#03396c;font-size:80%;padding-top:6px;"></i> [{{ project.title }}]({{ project.url }}) ({{ project.date }}) &middot; {{project.snippet | markdownfiy}} 
{% endfor %}

## Select Research

{% for project in site.data.projects.other %}
<i class="fa fa-pencil" style="color:#03396c;font-size:80%;padding-top:6px;"></i> [{{ project.title }}]({{ project.url }}) ({{ project.date }}) &middot; {{ project.snippet }}
{% endfor %}

## Research Posts

<ul class="list-items">
{% for post in site.categories.research %}
    <li>
        <span>{{ post.date | date: "%B %e, %Y" | ordinalize  }}</span>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>

## Digital History Posts

<ul class="list-items">
{% for post in site.categories.hacks %}
    <li>
        <span>{{ post.date | date: "%B %e, %Y" | ordinalize  }}</span>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
