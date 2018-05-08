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
      <h2 class="inline-year"><span>{{ post.date | date: '%Y' }}</span></h2>
    {% endif %}
    <li class="clearfix {% if post.image.thumb %}featured{% endif %}">
      <header>
        <a href="{{ post.url }}" title="{{ post.title }}">
          <div class="archived">
          {% if post.image.thumb %}
          <div class="hero-wrap">
            <img class="hero-img" src="{{ post.image.thumb }}">
          </div>
          {% endif %}
            <h3 {% if post.external-url %}class="external-url" {% endif %}>{{ post.title }} {% if post.external-url %}<i class="fas fa-link"></i>{% endif %}</h3>
            {% unless post.external-url %}
            {% if post.excerpt %}
              <p class="oneliner">{{ post.excerpt | strip_html | truncatewords: 35 }}</p>
            {% endif %}
            {% endunless %}
          </div>
        </a>
      </header>
    </li>
    {% endfor %}
</ul>
</div>
