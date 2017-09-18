---
layout: page
title: Archives
permalink: /archives/
---

<div id="blog-archives">

{% capture totals %} {% posts_word_count total %}{% endcapture %}
{% capture average %} {% posts_word_count average %}{% endcapture %}
{% capture longest %} {% posts_word_count longest %}{% endcapture %}

I've written <strong>{{ totals | thousands_separated }}</strong> words here since 2008, averaging around <strong>{{ average }}</strong> per post. The longest post is <strong>{{ longest | thousands_separated }}</strong> words.

<ul class="list-items">
  {% for post in site.posts %}
    {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
    {% capture next_year %}{{ post.next.date | date: '%Y' }}{% endcapture %}
    {% if year != next_year %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% endif %}

  <li><span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot;

  <a href="{{ post.url }}">{{ post.title }}</a></li>
  {% endfor %}
</ul>
</div>
