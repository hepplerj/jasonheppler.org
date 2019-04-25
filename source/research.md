---
layout: page
title: Work 
permalink: /research/
---

Most of my work sits at the intersection of digital humanities, history, data science, and design. Below are a select few. Find lots more on [Github](http://github.com/hepplerj), [bl.ocks](https://bl.ocks.org/hepplerj), and [Observable](https://beta.observablehq.com/@hepplerj).

<div class="project-box">
{% assign sorted = site.data.work | sort: 'date' | reverse %}
{% for project in sorted %}
  <a class="project" href="{{ project.url }}">
    <img src="{{ project.preview }}" alt="{{ project.title }}"/>
    <p class="small"><strong>{{ project.title }}</strong> {{ project.snippet }}</p>
  </a>
{% endfor %}
</div>

-----

My historical research broadly centers on twentieth century political and environmental American history. My work ranges from political and cultural change, urban and environmental history, political culture, historical memory, and the North American West. See <a href="{{ site.owner.vita }}">my vita</a> for a complete run-down of my research, teaching, and publications.

### Publications 

{% assign publications = site.data.projects.published | sort: 'date' | reverse %}

{% for project in publications %}
{{project.authors}} {{ project.title }} {{project.venue}} {% if project.publisher %} ({{project.publisher}}) {% endif %} ({{ project.published }}). {% if project.doi %}DOI: {{ project.doi }}.{% endif %} {% if project.url %}<span class="small"><a href="{{ project.url }}">link</a></span>{% endif %}
{% endfor %}

