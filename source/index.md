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

### Hi. I'm Jason.

I am a [Digital Engagement Librarian](http://www.unomaha.edu/criss-library/about-us/staff-directory/jason-heppler.php) and [Assistant Professor of History](http://www.unomaha.edu/college-of-arts-and-sciences/history/) at the [University of Nebraska at Omaha](http://unomaha.edu). I am also affiliated faculty with UNO's [Center for Urban Sustainability](https://www.unomaha.edu/sustainability/center-for-urban-sustainability/index.php) and a Researcher with Stanford University's [Spatial History Project](http://spatialhistory.stanford.edu). I'm a historian of the North American West, with particular interest in industrialization and suburbanization, recreation, twentieth-century politics and political culture, and environmental history. I write here regularly on [my blog](/archives/), contribute to the [BlogWest](http://blogwest.org) group blog, and co-host the [Overanalyze](http://overanalyze.fireside.fm) podcast.

To keep updated on my work, follow me on [Twitter](http://twitter.com/jaheppler) or [Github](http://github.com/hepplerj), or [subscribe](http://www.jasonheppler.org/feed.xml) to the blog. Feel free to email me at `jason@jasonheppler.org`.

#### Upcoming Talks and Public Appearances

{% include travel.html %}

[Contact me about speaking at your institution!](/speaking)

#### Recent Writings

<ul class="list-items">
  {% for post in site.posts limit: 5 %}
	<li><time datetime="{{ post.date }}">{{ post.date | date: "%d %b %y" }}</time> &middot; <a href="{{ post.url }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% endfor %}
  	<li><a href="{{site.url}}/archives/">There's {{ site.posts | size }} more in the archives...</a></li>
</ul>

