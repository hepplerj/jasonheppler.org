---
layout: default
title: Home
---

<!-- <img class="avatar" src="assets/images/me.jpg" height="150" width="150" align="left"/> -->

<div class="about-intro">
    <figure>
        <img src="/assets/images/atxpo_2016-3703_1024.jpg"/>
        <figcaption>Photo by Carlos Seligo</figcaption>
    </figure>
</div>

## Nice to meet you. I'm Jason, an academic librarian, historian, data scientist, designer, and open data advocate at the University of Nebraska where I lead initiatives in digital engagement.

 I promote making openness the norm in innovation and research and am passionate about building deep creative partnerships that bring together diverse disciplines and expertise. I am an open project lead for [Endangered Data Week](http://endangereddataweek.org), and work with organizations like [Mode Shift Omaha](https://modeshiftomaha.org/), [UNO's Center for Urban Sustainability](https://jasonheppler.org/about/), [Stanford University's Spatial History Project](http://spatialhistory.stanford.edu/), [BlogWest](https://blogwest.org/), and [Data for Democracy](http://datafordemocracy.org).
 
 You can find me on [Twitter](https://twitter.com/jaheppler), [Github](https://www.github.com/hepplerj), [LinkedIn](https://www.linkedin.com/in/jasonheppler/), and [Medium](https://medium.com/@jaheppler). Feel free to email me at `jason@jasonheppler.org`. If it's a sensitive email, you can <a href="https://jasonheppler.org/jasonheppler.asc">grab my public key</a> for that address or reach me at `jason.heppler@protonmail.com`. I’m also `jaheppler` on Keybase.

### Upcoming Public Appearances

{% assign lectures = site.data.travel | sort: 'datestart' %}
{% for lecture in lectures limit:5 %}
<p>"<a href="{{lecture.url}}">{{ lecture.venue }}</a>" &middot; {{ lecture.location }}: {{ lecture.datestart | date: '%B %Y'}}</p>
{% endfor %}

### Recent Writing

<ul class="list-items">
  {% for post in site.posts limit: 10 %}
  {% if post.medium %}
  <li><i class="fab fa-medium"></i> <a href="{{ post.medium }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a> &middot; <span><time datetime="{{ post.date }}">{{ post.date | date: "%d/%m/%y" }}</time></span></li>
  {% elsif post.the_conversation %}
  <li><i class="far fa-comment"></i> <a href="{{ post.the_conversation }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a> &middot; <span><time datetime="{{ post.date }}">{{ post.date | date: "%d/%m/%y" }}</time></span></li>
  {% elsif post.blogwest %}
  <li><i class="fab fa-wordpress"></i> <a href="{{ post.blogwest }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a> &middot; <span><time datetime="{{ post.date }}">{{ post.date | date: "%d/%m/%y" }}</time></span></li>
  {% elsif post.newspaper %}
  <li><i class="far fa-newspaper"></i> <a href="{{ post.newspaper }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a> &middot; <span><time datetime="{{ post.date }}">{{ post.date | date: "%d/%m/%y" }}</time></span></li>
  {% elsif post.published_elsewhere %}
  <li><i class="fas fa-pencil-alt"></i> <a href="{{ post.published_elsewhere }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a> &middot; <span><time datetime="{{ post.date }}">{{ post.date | date: "%d/%m/%y" }}</time></span></li>
  {% elsif post.external-url %}
  <li><i class="fas fa-external-link-square-alt"></i> <a href="{{ post.url }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a> &middot; <span><time datetime="{{ post.date }}">{{ post.date | date: "%d/%m/%y" }}</time></span></li>
  {% else %}
	<li><a href="{{ post.url }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a> &middot; <span><time datetime="{{ post.date }}">{{ post.date | date: "%m/%d/%Y" }}</time></span></li>
  {% endif %}
  {% endfor %}
  	<li><a href="{{site.url}}/archives/">There's {{ site.posts | size }} more in the archives...</a></li>
</ul>

### Select Projects

{% assign sorted = (site.data.work | sort: 'date') | reverse %}
{% for project in sorted %}
<div class="row">
  <img src="{{ project.preview }}"/>
  <div class="text_small col">
    <span class="portfolio-date">{{ project.date }}</span> &middot; {{project.snippet | markdownfiy}} {% if project.url %}<a href="{{ project.url }}">→ Full project</a> {% endif %}
    <hr>
  </div>
</div>
{% endfor %}

Find more on [Github](http://github.com/hepplerj) and on [bl.ocks](https://bl.ocks.org/hepplerj).
