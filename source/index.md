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

**Hi. I'm Jason**. I am a historian of twentieth-century United States history, with a focus on digital and computational history, urban environmental politics and policy, and the North American West. I am the [Digital Engagement Librarian](http://www.unomaha.edu/criss-library/about-us/staff-directory/jason-heppler.php) and [Assistant Professor of History](http://www.unomaha.edu/college-of-arts-and-sciences/history/) at the [University of Nebraska at Omaha](http://unomaha.edu), where I lead initiatives in digital engagement and public history. I am also affiliated faculty with UNO's [Center for Urban Sustainability](https://www.unomaha.edu/sustainability/center-for-urban-sustainability/index.php) and a Researcher with Stanford University's [Spatial History Project](http://spatialhistory.stanford.edu). I often write [here on my blog](/archives) and contribute to the [BlogWest](http://blogwest.org) group blog.

I also work on bicycle advocacy projects both on campus and in the community, like [Omaha Bikes](https://omahabikes.org/), the [Omaha Bike Network](http://livewellomaha.org/), the [League of American Bicyclists](http://bikeleague.org/), [People for Bikes](http://peopleforbikes.org), and [Mode Shift Omaha](https://modeshiftomaha.org/).

To keep updated on my work, follow my [research](/research/), follow me on [Twitter](http://twitter.com/jaheppler) or [Github](http://github.com/hepplerj), or [subscribe](http://www.jasonheppler.org/feed.xml) to the blog. Feel free to email me at `jason@jasonheppler.org`.

### Recent Writings

<ul class="list-items">
  {% for post in site.posts limit: 5 %}
	<li><span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.url }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% endfor %}
  	<li><a href="{{site.url}}/archives/">There's {{ site.posts | size }} more in the archives...</a></li>
</ul>
