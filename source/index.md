---
layout: default
title: Home
---

<div id="intro=block">
<img class="avatar" src="assets/images/me.jpg" height="150" width="150" align="left"/>

<p class='size-2x'>Nice to meet you. I'm <a href="/about/">Jason</a>, an academic librarian, data scientist, designer, and open data advocate at the University of Nebraska where I lead initiatives in digital humanities and digital engagement.</p>
</div> 

You can find me on [Twitter](https://twitter.com/jaheppler), [Github](https://www.github.com/hepplerj), [LinkedIn](https://www.linkedin.com/in/jasonheppler/), and [Medium](https://medium.com/@jaheppler). Feel free to email me at `jason@jasonheppler.org`. If it's a sensitive email, you can <a href="https://jasonheppler.org/jasonheppler.asc">grab my public key</a> for that address or reach me at `jason.heppler@protonmail.com`. I’m also `jaheppler` on Keybase.

{% if site.data.travel %}
## Upcoming Public Appearances

{% assign lectures = site.data.travel | sort: 'datestart' %}
{% for lecture in lectures limit:5 %}
<p>"<a href="{{lecture.url}}">{{ lecture.venue }}</a>" &middot; {{ lecture.location }}: {{ lecture.datestart | date: '%B %Y'}}</p>
{% endfor %}
{% endif %}

## Recent Writing

<ul class="list-posts">
  {% for post in site.posts limit: 8 %}
  {% if post.medium %}
  <li><i class="fab fa-medium"></i> <span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.medium }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% elsif post.the_conversation %}
  <li><i class="far fa-comment"></i> <span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.the_conversation }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% elsif post.blogwest %}
  <li><i class="fab fa-wordpress"></i> <span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.blogwest }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% elsif post.newspaper %}
  <li><i class="far fa-newspaper"></i> <span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.newspaper }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% elsif post.published_elsewhere %}
  <li><i class="fas fa-pencil-alt"></i> <span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.published_elsewhere }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% elsif post.external-url %}
  <li><i class="fas fa-external-link-square-alt"></i> <span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.url }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% else %}
	<li><span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.url }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% endif %}
  {% endfor %}
  <li><a href="/archives/">And {{ site.posts | size }} more writings since 2008...</a></li>
</ul>

## Select Projects

Most of my work sits at the intersection of digital humanities, data science, and design. Below are a select few.

<div class="project-box">
{% assign sorted = site.data.work | sort: 'date' | reverse %}
{% for project in sorted %}
  <a class="project" href="{{ project.url }}">
    <img src="{{ project.preview }}" alt="{{ project.title }}"/>
    <strong>{{ project.title }}</strong> &middot; {{ project.snippet }}
  </a>
{% endfor %}
</div>

-----

Find lots more on [Github](http://github.com/hepplerj), [bl.ocks](https://bl.ocks.org/hepplerj), and [Observable](https://beta.observablehq.com/@hepplerj).
