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

I am the [Digital Engagement Librarian](http://www.unomaha.edu/criss-library/about-us/staff-directory/jason-heppler.php) and [Assistant Professor of History](http://www.unomaha.edu/college-of-arts-and-sciences/history/) at the [University of Nebraska at Omaha](http://unomaha.edu), where I lead initiatives in digital engagement and public history with campus and community partners. I am also affiliated faculty with UNO's [Center for Urban Sustainability](https://www.unomaha.edu/sustainability/center-for-urban-sustainability/index.php) and a Researcher with Stanford University's [Spatial History Project](http://spatialhistory.stanford.edu).

I'm also a historian of the North American West, with particular interest in suburbanization, twentieth-century politics and political culture, and environmental history. My first book, tentatively titled *Suburban by Nature: Environmental Politics and the Imagining of Silicon Valley*, explores the postwar growth of the cities in Silicon Valley and the ways that their growth not only led to ecological disaster but introduced social inequality that fueled an environmental critique that shaped liberal, conservative, and environmental politics. *Suburban by Nature* looks at how local communities confronted environmental challenges and traces the shifts in political activism in the late 20th century U.S.

I believe the web is an important public resource, and take steps to defend the open web and open access. I've [signed the open access pledge](http://www.openaccesspledge.com/?page_id=2) and the [No Deal, No Review boycott](http://www.nodealnoreview.org/#statement), helped coordinate and run the new annual [Endangered Data Week](http://endangereddataweek.org), in 2017 hosted Mozilla's [Global Sprint](https://mozilla.github.io/global-sprint/) to promote open government data, signed the [Never Again Tech pledge](http://neveragain.tech/), and do much of my work [in the open](http://notebook.jasonheppler.org). It's on us to ensure the open internet.

I also work in bicycle advocacy projects both on campus and in the community, like [Omaha Bikes](https://omahabikes.org/), the [Omaha Bike Network](http://livewellomaha.org/), the [League of American Bicyclists](http://bikeleague.org/), [People for Bikes](http://peopleforbikes.org), and [Mode Shift Omaha](https://modeshiftomaha.org/).

To keep updated on my work, follow my [research](/research/), follow me on [Twitter](http://twitter.com/jaheppler) or [Github](http://github.com/hepplerj), or [subscribe](http://www.jasonheppler.org/feed.xml) to the blog. Feel free to email me at `jason@jasonheppler.org`.

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

