---
layout: page
title: Research
permalink: /research/
---

My work generally centers on twentieth century political and cultural American history. My work ranges from political and cultural change, urban and environmental history, political culture, historical memory, and the North American West. Posts collected here are items related to my research projects. Material relating to research workflows and programming can be found in the [Digital History]({{ site.url }}/digital/) section. See also my <a href="{{ site.owner.vita }}">curriculum vita</a> for more academic information.

### Dissertation

My dissertation research is looking at an urban and environmental study of Silicon Valley. Throughout it's history, humans have made environmental demands in Santa Clara Valley's land and water resources. The growing urban and industrial presence that defined the area after World War II exacerbated environmental demands, particularly water resources that were required for urban growth and semiconductor manufacturing. I look at how people came to understand their relationship to the natural world in Silicon Valley in the context of postindustrial change.

### William F. "Buffalo Bill" Cody

In January 2011 I joined the [Center for Digital Research in the Humanities](http://cdrh.unl.edu) to serve as the project manager on the [William F. Cody Digital Archive](http://codyarchive.org), a joint project of CDRH and the Papers of William F. Cody. Prior to joining CDRH, I served as a digital research editor and conducted original research and digitization that culminated in [Buffalo Bill's Wild West and the Progressive Image of American Indians](http://segonku.unl.edu/~jheppler/showindian/). The project is currently being reworked into a new project that will undergo peer review by an academic journal.

### American Indian Movement

I have done prior work on the American Indian Movement (AIM), a Native American activist organization that started in the late 1960s. My Masters thesis examined media coverage of AIM during the Trail of Broken Treaties Caravan, which was a march on Washington D.C. in 1972 meant to draw attention to issues facing reservation and urban Indians. My Masters thesis is available as open access and can be [downloaded from UNL Digital Commons](http://digitalcommons.unl.edu/historydiss/21/). I also contributed a chapter to *[The Plains Political Tradition: Essays on South Dakota Political Culture](http://www.sdshspress.com/index.php?&id=236&action=912)* about AIM's influence upon South Dakota politics. The book was published in 2011 by the South Dakota State Historical Society Press.

## Projects

* [Buffalo Bill's Wild West and the Progressive Image of American Indians](http://segonku.unl.edu/~jheppler/showindian/): Digital history analysis of Buffalo Bill's Wild West and the ways American Indian performers were portrayed.
* [The Buffalo Bill Project](http://buffalobillproject.unl.edu/): This project aims to collect documentary materials, create historical data and visualizations, to explore, compare, query, and manipulate historical information to advance scholarship on Cody's role in the making of the modern American West.
* [Framing Red Power](http://www.framingredpower.org/): Digital history analysis of the Trail of Broken Treaties and mass media.

## Posts

<ul class="listing">
{% for post in site.categories.research %}
    <li>
        <span>{{ post.date | date: "%B %e, %Y" | ordinalize  }}</span>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
