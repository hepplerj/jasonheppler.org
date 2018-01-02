---
layout: default
title: Home
---

<div class="about-intro">
    <figure>
        <img src="/assets/images/atxpo_2016-3703_1024.jpg"/>
        <figcaption>Photo by Carlos Seligo</figcaption>
    </figure>
</div>

## Hi. I'm [Jason]({{site.url}}/about/).

I am a historian of twentieth-century United States history, with a focus on digital and computational history, urban environmental politics and policy, the North American West, and spatial methods. I am the [Digital Engagement Librarian](http://www.unomaha.edu/criss-library/about-us/staff-directory/jason-heppler.php) and [Assistant Professor of History](http://www.unomaha.edu/college-of-arts-and-sciences/history/) at the [University of Nebraska at Omaha](http://unomaha.edu), where I lead initiatives in digital engagement and public history with campus and community partners. I am also affiliated faculty with UNO's Center for Urban Sustainability and a Researcher with Stanford University's [Spatial History Project](http://spatialhistory.stanford.edu). I often write here on [my blog](/blog/) and contribute to the [BlogWest group blog](http://blogwest.org).

To keep updated on my work, follow my [research](http://jasonheppler.org/research/), follow me on [Twitter](http://twitter.com/jaheppler) or [Github](http://github.com/hepplerj), or [subscribe](feed.xml) to the blog. Feel free to email me at `jason@jasonheppler.org`. If it's a sensitive email, you can <a href="https://jasonheppler.org/jasonheppler.asc">grab my public key</a> for that address. I’m also `jaheppler` on Keybase. *[More →]({{site.url}}/about/)*

## Upcoming Public Appearances

<ul class="list-items">
{% assign lectures = site.data.travel | sort: 'datestart' %}
{% for lecture in lectures limit:4 %}
<li>"<a href="{{lecture.url}}">{{ lecture.venue }}</a>" <br> {{ lecture.location }}  &middot; {{ lecture.datestart | date: '%b %Y'}}</li>
{% endfor %}
</ul>

## Recently

<ul class="list-items">
  {% for post in site.posts limit: 5 %}
	<li><span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.url }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% endfor %}
  	<li><a href="{{site.url}}/archives/">There's {{ site.posts | size }} more in the archives...</a></li>
</ul>
