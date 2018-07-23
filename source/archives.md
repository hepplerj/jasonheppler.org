---
layout: page
title: Archives
permalink: /archives/
---

<div id="blog-archives">

{% capture totals %} {% posts_word_count total %}{% endcapture %}
{% capture average %} {% posts_word_count average %}{% endcapture %}
{% capture longest %} {% posts_word_count longest %}{% endcapture %}

<p>I've written <strong>{{ totals | thousands_separated }}</strong> words among <strong>{{ site.posts | size }}</strong> posts here since 2009, averaging around <strong>{{ average }}</strong> per post. The longest post is <strong>{{ longest | thousands_separated }}</strong> words.</p>

<form role = "search" class = "searchform" action="https://duckduckgo.com/">
  <input type="text" name="q" placeholder = "Search for programming, open data, history, leadership, or whatever.">
  <input type="hidden" name="sites" value="jasonheppler.org">
</form>

<br/>

<p>View as <strong>Chronological</strong> | <a href="/topics/">Topics</a></p>

<div class="home-archives">
<ul class="list-items">
  {% for post in site.posts %}
    {% capture year %}{{ post.date | date: '%Y' }}{% endcapture %}
    {% capture next_year %}{{ post.next.date | date: '%Y' }}{% endcapture %}
    {% if year != next_year %}
      <h3>{{ post.date | date: '%Y' }}</h3>
    {% endif %}

  <li>
    <a href="{{ post.url}}">
      <time class="date">{{ post.date | date: '%B %d'}}</time>
      </a>
      <span class="cat">
        <a href="/topics/#{{post.categories}}" rel="category tag">{{ post.categories }}</a>
      </span> <br/>
      <a href="{{ post.url }}">
        <span class="title">{{ post.title}}</span>
      </a>
  </li>

  {% endfor %}
</ul>
</div>
</div>
