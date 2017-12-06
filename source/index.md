---
layout: default
title: Home
---

### Recently

<ul class="list-items">
  {% for post in site.posts limit: 5 %}
	<li><span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.url }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% endfor %}
  	<li><a href="{{site.url}}/archives/">There's {{ site.posts | size }} more in the archives...</a></li>
</ul>

### Courses

{% assign courses = site.data.teaching.classes | sort: 'datestart' | reverse %}
<ul class="list-items">
{% for class in courses limit: 4 %}
{% if class.url %}
  <li><a href="{{ class.url }}">{{ class.class }}</a> &middot; <em>{{ class.location }}</em>
{% else %}
  <li>{{ class.class }} &middot; <em>{{ class.location }}</em>
{% endif %} &middot;
{% if class.dateend %}
  {{ class.datestart | date: '%b %Y' }} - {{ class.dateend | date: '%B %Y' }}
{% else %}
  {{ class.datestart | date: '%b %Y' }}
{% endif %}</li>
{% endfor %}
<li><a href="/teaching">And a few more...</a></li>
</ul>

### Workshops

{% assign courses = site.data.teaching.workshops | sort: 'datestart' | reverse %}
<ul class="list-items">
{% for class in courses limit:4 %}
{% if class.url %}
  <li><a href="{{ class.url }}">{{ class.class }}</a> &middot; <em>{{ class.location }}</em>
{% else %}
  <li>{{ class.class }} &middot; <em>{{ class.location }}</em>
{% endif %} &middot;
{% if class.dateend %}
  {{ class.datestart | date: '%b %Y' }} - {{ class.dateend | date: '%B %Y' }}
{% else %}
  {{ class.datestart | date: '%b %Y' }}
{% endif %}</li>
{% endfor %}
<li><a href="/teaching">There's more here...</a></li>
</ul>

### Projects

Superfundr &middot; R data package. [Github](https://github.com/hepplerj/superfundr)  
[Machines in the Valley](http://dissertation.jasonheppler.org) &middot; Digital history. [Github](https://github.com/hepplerj/machinesvalley)  
Historical city populations &middot; R data package. [Github](https://github.com/cestastanford/historical-us-city-populations)  
Mapping Midwest &middot; Digital history. [Github](https://github.com/hepplerj/midwest-map-population)  
[Geography of the Post](http://cameronblevins.org/gotp/) &middot; Digital history. [Github](https://github.com/hepplerj/geographypost)  
[What is Digital Humanities?](http://whatisdigitalhumanities.com) &middot; Perpetual answers to the perpetual question. [Github](https://github.com/hepplerj/whatisdigitalhumanities)  

[And a lot more...](http://github.com/hepplerj/)

### Speaking

<ul class="list-items">
{% assign lectures = site.data.travel | sort: 'datestart' | reverse %}
{% for lecture in lectures limit:4 %}
<li>"{{ lecture.venue }}" &middot; {{ lecture.location }}  &middot; {{ lecture.datestart | date: '%b %Y'}}</li>
{% endfor %}
<li><a href="/speaking">And more...</a></li>
</ul>
