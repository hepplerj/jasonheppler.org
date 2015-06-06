---
layout: default
title: Archives
permalink: /archives/
---

<div id="blog-archives">
  {% for post in site.posts %}
  {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
  {% capture next_year %}{{ post.next.date | date: '%Y' }}{% endcapture %}
  {% if year != next_year %}
  <h3>{{ post.date | date: '%Y' }}</h3>
  {% endif %}
  <p>
  <time>
  {% assign m = post.date | date: "%B" %} 
  {% case m %}
    {% when 'April' or 'May' or 'June' or 'July' %}{{ m }}
    {% when 'September' %}Sept.
    {% else %}{{ post.date | date: "%b" }}.
  {% endcase %}
  {{ post.date | date: "%-d" }}
  </time>
  {% comment %}
  <span class="post-type">
    {% if post.external-url %}
      <a href="{{ post.link }}" title="Link post">&rarr;</a>
    {% else %}
      &nbsp;
    {% endif %}
  </span>
  {% endcomment %}
  <a href="{{ post.url }}">{{ post.title }}</a>
  </p>
  {% endfor %}
</div>