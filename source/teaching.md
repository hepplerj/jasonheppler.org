---
layout: page
title: Classes, Seminars, and Workshops
permalink: /teaching/
---

Some of the classes and workshops I have offered in recent years, including pointers to upcoming courses and other resources when available. For more teaching information, see <a href="{{ site.owner.vita }}">my vita</a>.

I currently run a few digital research workshops focused on network analysis, spatial analysis, and data visualization. If your company, university, institution, or lab could benefit from a full or half-day workshop on one of these topics, I'd love to help provide one! Workshops come full with practical examples, exercises, and insights that attendees can take away and apply immediately.

I would be honored to teach at your institution about **digital history**, **data visualization**, **spatial history**, **network analysis**, or **urban environmental history**. You can reach me at [@jaheppler](http://twitter.com/{{site.owner.twitter}}) or by [email](mailto:{{site.owner.email}}). Interested in having me come speak instead? Check out my [speaking](/speaking) page!

----

## Courses

{% assign courses = site.data.teaching.classes | sort: 'datestart' | reverse %}
{% for class in courses %}
<p>
{% if class.kind == "course" %}
<i class="fa fa-graduation-cap" style="color: #0336c; font-size: 80%; padding-top: 6px;"></i>
{% else %}
<i class="fa fa-users" style="color: #0336c; font-size: 80%; padding-top: 6px;"></i>
{% endif %}
{% if class.url %}
  <strong><a href="{{ class.url }}">{{ class.class }}</a></strong> &middot; <em>{{ class.location }}</em>
{% else %}
  <strong>{{ class.class }}</strong>
{% endif %}
<br>
{{ class.description }} &middot; <em>
{% if class.dateend %}
  {{ class.datestart | date: '%B %Y' }} - {{ class.dateend | date: '%B %Y' }}
{% else %}
  {{ class.datestart | date: '%B %Y' }}
{% endif %}</em>
</p>
{% endfor %}

## Workshops

{% assign workshops = site.data.teaching.workshops | sort: 'datestart' | reverse %}
{% for class in workshops %}
<p>
{% if class.kind == "course" %}
<i class="fa fa-graduation-cap" style="color: #0336c; font-size: 80%; padding-top: 6px;"></i>
{% else %}
<i class="fa fa-users" style="color: #0336c; font-size: 80%; padding-top: 6px;"></i>
{% endif %}
{% if class.url %}
  <strong><a href="{{ class.url }}">{{ class.class }}</a></strong> &middot; <em>{{class.location}}</em>
{% else %}
  <strong>{{ class.class }}</strong>
{% endif %}
<br>
{{ class.description }} &middot; <em>
{% if class.dateend %}
  {{ class.datestart | date: '%B %Y' }} - {{ class.dateend | date: '%B %Y' }}
{% else %}
  {{ class.datestart | date: '%B %Y' }}
{% endif %}</em>
</p>
{% endfor %}

## Posts

<ul class="list-items">
{% for post in site.categories.teaching %}
    <li>
        <span>{{ post.date | date: "%B %e, %Y" | ordinalize  }}</span>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
