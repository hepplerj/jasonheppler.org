---
layout: default
title: Home
---

## Hi. I'm Jason.

<img class="avatar" src="assets/images/me.jpg" height="150" width="150" align="left"/>

I am the [digital engagement librarian](http://library.unomaha.edu) at the University of Nebraska at Omaha, a [historian](#historian) of urban environmental politics and policy, [author](#current-writing), [teacher](#teaching), [editor at BlogWest](#blogwest), [public speaker](#upcoming-public-appearances), [cycling advocate](#cycling-advocacy), and [writer](#recently).

You can find me on [Twitter](https://twitter.com/jaheppler), [Github](https://www.github.com/hepplerj), and [Medium](https://medium.com/@jaheppler). Feel free to email me at `jason@jasonheppler.org`. If it's a sensitive email, you can <a href="https://jasonheppler.org/jasonheppler.asc">grab my public key</a> for that address. I’m also `jaheppler` on Keybase.

## Historian

I am a historian of twentieth-century United States history, with a focus on digital and computational history, urban environmental politics and policy, the North American West, and spatial methods. I am the [Digital Engagement Librarian](http://www.unomaha.edu/criss-library/about-us/staff-directory/jason-heppler.php) and [Assistant Professor of History](http://www.unomaha.edu/college-of-arts-and-sciences/history/) at the [University of Nebraska at Omaha](http://unomaha.edu), where I lead initiatives in digital engagement and public history with campus and community partners. I am also affiliated faculty with UNO's Center for Urban Sustainability and a Researcher with Stanford University's [Spatial History Project](http://spatialhistory.stanford.edu). You can read more about my academic work in [my vita](https://www.dropbox.com/s/cpbo7md7dooffg1/jah-cv.pdf?dl=0).

## Current Writing

I am currently completing my first book, *Suburban by Nature: Silicon Valley and the Transformation of American Environmental Politics*, under contract with the University of Oklahoma Press as part of their new Environment in Modern North America series. Few places symbolize the twentieth century like Silicon Valley. Stretching from the communities of San Jose to Palo Alto, the dense suburban region is home to nation’s high tech industrial corridor. In my book, I re-imagine the Silicon Valley's history not just as symbol of post-industrialism, but as an illustrative of the consequences of the post-war period’s uneven suburban growth in shaping 20th century environmental politics, concerns over social justice, and ideas of sustainability. I complicate the now familiar story of suburbanization's rapid transformation of post-war American cities by explaining how local activists linked social and environmental issues in creating a new form of politics. In doing so, I help place current debates over sustainability into a deeper historical context and problematize the post-war environmental movement as at once a movement of the white middle class, which gave rise to environmental and social justice movements of the latter half of the 20th century.

I am also working on two additional books. First, I'm working on an edited volume with Rebecca Wingo and Paul Schaudenwald called *Digital Community Engagement: Partnering Communities with the Academy*, which brings together case studies of partnerships between institutions of higher education and community partners to create born-digital projects.

Second, an edited volume with Lindsey Passenger Wieck that brings together the most current writing on the urban history of San Francisco and Silicon Valley. We seek to unite the postwar histories of these two places to create an unprecedented regional history. We seek to reveal not only what binds these specific urban spaces together, but also explore the national patterns that give rise to interconnected urban centers and suburban technological outskirts.

## Teaching

I teach a variety of classes and workshops. You can find a listing of the courses and workshops I've taught on my [teaching page](/teaching).

## BlogWest

[BlogWest](https://blogwest.org/) was started to provide thoughtful conversation about the history of the North American West. Edited by five historians of the West, we bring our own expertise to the site as well as collaborate with other historians, intellectuals, journalists, and others who write about and think about the West.

## Cycling Advocacy

I work on bicycle advocacy projects both on campus and in the Omaha community with amazing partners like [Omaha Bikes](https://omahabikes.org/), the [Omaha Bike Network](http://livewellomaha.org/), the [League of American Bicyclists](http://bikeleague.org/), [People for Bikes](http://peopleforbikes.org/), and [Mode Shift Omaha](https://modeshiftomaha.org/). My work on sustainability at the University of Nebraska at Omaha includes chairing the Triple Bottom Line Committee for UNO Libraries, where we are focused on building a community that is economically sound, environmentally responsible, and socially just.

## Upcoming Public Appearances

<ul class="list-items">
{% assign lectures = site.data.travel | sort: 'datestart' %}
{% for lecture in lectures limit:4 %}
<li>"<a href="{{lecture.url}}">{{ lecture.venue }}</a>" <br> {{ lecture.location }}  &middot; {{ lecture.datestart | date: '%b %Y'}}</li>
{% endfor %}
</ul>

## Recently

<ul class="list-items">
  {% for post in site.posts limit: 8 %}
  {% if post.medium %}
  <li><i class="fab fa-medium"></i> <span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.medium }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% elsif post.the_conversation %}
  <li><i class="far fa-comment"></i> <span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.the_conversation }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% elsif post.blogwest %}
  <li><i class="fab fa-wordpress"></i> <span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.blogwest }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% elsif post.newspaper %}
  <li><i class="far fa-newspaper"></i> <span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.newspaper }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% elsif post.published_elsewhere %}
  <li><i class="fas fa-pencil-alt"></i> <span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.published_elsewhere }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% elsif post.external-url %}
  <li><i class="fas fa-external-link-square-alt"></i> <span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.url }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% else %}
	<li><span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.url }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% endif %}
  {% endfor %}
  	<li><a href="{{site.url}}/archives/">There's {{ site.posts | size }} more in the archives...</a></li>
</ul>
