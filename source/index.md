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

I am a historian of twentieth-century United States history, with a focus on digital and computational history, urban environmental politics, the North American West, and spatial methods. I am the [Digital Engagement Librarian](http://www.unomaha.edu/criss-library/about-us/staff-directory/jason-heppler.php) and [Assistant Professor of History](http://www.unomaha.edu/college-of-arts-and-sciences/history/) at the [University of Nebraska at Omaha](http://unomaha.edu), where I lead initiatives in digital engagement and public history with campus and community partners. I am also affiliated faculty with UNO's [Center for Urban Sustainability](https://www.unomaha.edu/sustainability/center-for-urban-sustainability/index.php) and a Researcher with Stanford University's [Spatial History Project](http://spatialhistory.stanford.edu). This website lists scholarship I can make available, including works in progress; a full listing can be found in my [CV]({{ site.owner.cv }}). I often write [here on my blog](/archives) and contribute to the [BlogWest](http://blogwest.org) group blog.

I also work on bicycle advocacy projects both on campus and in the community, like [Omaha Bikes](https://omahabikes.org/), the [Omaha Bike Network](http://livewellomaha.org/), the [League of American Bicyclists](http://bikeleague.org/), [People for Bikes](http://peopleforbikes.org), and [Mode Shift Omaha](https://modeshiftomaha.org/).

To keep updated on my work, follow my [research](/research/), follow me on [Twitter](http://twitter.com/jaheppler) or [Github](http://github.com/hepplerj), or [subscribe](http://www.jasonheppler.org/feed.xml) to the blog. Feel free to email me at `jason@jasonheppler.org`.

----

### Suburban by Nature: Environmental Politics and the Imagining of Silicon Valley

My first book, currently being revised and tentatively titled *Suburban by Nature: Environmental Politics and the Imagining of Silicon Valley*, explores the postwar growth of the cities in Silicon Valley and the ways that their growth not only led to ecological disaster but introduced social inequality that fueled an environmental critique that shaped liberal, conservative, and environmental politics. *Suburban by Nature* looks at how local communities confronted environmental challenges and traces the shifts in political activism in the late 20th century U.S.

### [Machines in the Valley: Urban Growth and Environmental Politics in Silicon Valley](http://dissertation.jasonheppler.org)

*Machines in the Valley* explores how urban growth shaped environmental politics in Silicon Valley during the post-World War II era. The digital project contains visualizations, data, and narrative stories that explores the historical relationship between the economic and urban development of Silicon Valley and the environmental reactions communities had to the reshaping of the region. The project serves as a digital companion to my book.

### [Geography of the Post](http://www.cameronblevins.org/gotp/)

*Spatial History Project, Stanford University*

The U.S. postal system was the nation's largest communications network in the nineteenth century. By the close of the century the U.S. Post had extended its reach into nearly every city, town, and hamlet in the country. No other public institution was so ubiquitous and so central to everyday life; dropping off a letter or checking for mail at the local post office was a ritual shared by millions of Americans from Connecticut to Colorado. This visualization maps the spread of the postal network on its western periphery by charting the opening and closing of more than 14,000 post offices west of the hundredth meridian. 

----

#### Upcoming Talks and Public Appearances

{% include travel.html %}

[Contact me about speaking at your institution!](/speaking)

#### Publications and Projects

{% for project in site.data.projects.published %}
[{{ project.title }}]({{ project.url }}). {{project.venue}} {% if project.publisher %} ({{project.publisher}}) {% endif %} ({{ project.date }})
{% endfor %}

[Find more of my publications and projects.](/research)

#### Software

"superfundr: Superfund Datasets." R package. 2017--. [Github](https://github.com/hepplerj/superfunds)

#### Teaching

{% include teaching.html %}

[Contact me about teaching a workshop at your institution!](/teaching)

#### Recent Writings

<ul class="list-items">
  {% for post in site.posts limit: 5 %}
	<li><span class="code"><time datetime="{{ post.date }}">{{ post.date | date: "%Y-%m-%d" }}</time></span> &middot; <a href="{{ post.url }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></li>
  {% endfor %}
  	<li><a href="{{site.url}}/archives/">There's {{ site.posts | size }} more in the archives...</a></li>
</ul>

