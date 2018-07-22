---
layout: page
title: Classes, Seminars, and Workshops
permalink: /teaching/
---

Some of the classes and workshops I have offered in recent years, including pointers to upcoming courses and other resources when available. For more teaching information, see <a href="{{ site.owner.vita }}">my vita</a>.

I currently run digital research workshops focused on **network analysis**, **spatial analysis**, and **data visualization**. If your company, university, institution, or lab could benefit from a full or half-day workshop on one of these topics, I'd love to help provide one! Workshops come full with practical examples, exercises, and insights that attendees can take away and apply immediately.

### Term-length Courses

{% assign courses = site.data.teaching.classes | sort: 'datestart' | reverse %}
{% for class in courses %}
<ul class="list-posts">
{% if class.url %}
  <a href="{{ class.url }}">{{ class.class }}</a>, {{ class.location }}
{% else %}
  {{ class.class }}, {{ class.location }}
{% endif %}
  ({{ class.semester }})
</ul>
{% endfor %}

### Workshops

{% assign workshops = site.data.teaching.workshops | sort: 'datestart' | reverse %}
{% for class in workshops %}
<ul class="list-posts">
{% if class.url %}
  <a href="{{ class.url }}">{{ class.class }}</a>, {{class.location}}
{% else %}
  {{ class.class }}, {{ class.location}} 
{% endif %}
  ({{ class.semester }})
</ul>
{% endfor %}
