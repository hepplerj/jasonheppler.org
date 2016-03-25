---
layout: page
title: Research
permalink: /research/
---

My work broadly centers on twentieth century political and environmental American history. My work ranges from political and cultural change, urban and environmental history, political culture, historical memory, and the North American West. Posts collected here are items related to my research projects. Material relating to research workflows and programming can be found in the [Digital History]({{ site.url }}/digital/) section. See also my <a href="{{ site.url }}/cv/">curriculum vita</a> for more academic information.

## Dissertation

*Machines in the Valley: Growth, Conflict, and Environmental Politics in
Silicon Valley, 1945-1990*, University of Nebraska-Lincoln (expected 2015).

> My dissertation examines the environmental, economic, and cultural conflicts
> over the suburbanization and post-industrialization of California's Santa
> Clara Valley -- today known as Silicon Valley -- between 1940 and 2000. High
> technology industrialization emerged as a key component of economic and
> urban development in postwar era, particularly in western states seeking to
> diversify their economic activities. Industrialization produced thousands of
> new jobs, but development proved problematic when faced with competing views
> about land use. The natural allure that accompanied the thousands coming
> West gave rise to a modern environmental movement calling for strict
> limitations on urban growth, the preservation of open spaces, and pollution
> reduction. These views on land use lay at the center of these conflicts.
> Conflict over the Santa Clara Valley's land use tells the story not only of
> Silicon Valley's development, but Americans' changing understanding of
> nature and the environmental costs of urban and industrial development.

## Machines in the Valley

The digital components of my dissertation are being released at *Machines in the Valley*. Still a work in progress, the project includes evidence visualization, digital history, data, and narrative.

[Machines in the Valley](http://dissertation.jasonheppler.org)

![Superfund sites](/assets/images/diss_superfund.png)

## Geography of the Post

In collaboration with Cameron Blevins, we visualized 14,000 post offices in
the nineteenth century American West. [Read the blog
post](http://jasonheppler.org/2014/10/30/research-design-in-geography-of-the-post/) on how and why.

[Geography of the Post](http://cameronblevins.org/gotp/)

![Geography of the Post](/assets/images/gotp_final.png)

## Middle West Review

A new publication by the University of Nebraska Press focusing on the history
of the American Midwest, where I serve as the digital editor.

[Middle West Review](http://uimiddle.wordpress.com)

![Middle West Review](/assets/images/mwr_preview.png)

## William F. "Buffalo Bill" Cody

[Buffalo Bill's Wild West and the Progressive Image of American
Indians](http://segonku.unl.edu/~jheppler/showindian/): Digital history
analysis of Buffalo Bill's Wild West and the ways American Indian performers
were portrayed.

![Buffalo Bill Wild West](/assets/images/cody_prog2_preview.png)

["Self-sustaining and a good citizen": William F. Cody and the Progressive Wild West](http://codystudies.org/showindians/): The above project morphed into this
project for the Cody Studies platform, seeking to examine William F. Cody's
attitudes towards Native people and argues for thinking about Cody as a form
of progressive reformer.

![Progressive Wild West](/assets/images/cody_prog_preview.png)

[Cody Studies](http://codystudies.org/): This project
aims to collect documentary materials, create historical data and
visualizations, to explore, compare, query, and manipulate historical
information to advance scholarship on Cody's role in the making of the modern
American West.

![Cody Studies](/assets/images/cody_studies.png)

[William F. Cody Digital Archive](http://codyarchive.org): In January 2011 I
joined the [Center for Digital Research in the
Humanities](http://cdrh.unl.edu) (CDRH) at the University of
Nebraska-Lincoln, where I served as the project manager for the
Cody Archive, a joint project of CDRH and the Buffalo
Bill Center for the West in Cody, Wyoming.

![Cody Archive](/assets/images/cody_archive.png)

## American Indian Movement

I have done prior work on the American Indian Movement (AIM), a Native
American activist organization that started in the late 1960s. My Masters
thesis examined media coverage of AIM during the Trail of Broken Treaties
Caravan, which was a march on Washington D.C. in 1972 meant to draw attention
to issues facing reservation and urban Indians. My Masters thesis is available
as open access and can be [downloaded from UNL Digital
Commons](http://digitalcommons.unl.edu/historydiss/21/). I also contributed a
chapter to *[The Plains Political Tradition: Essays on South Dakota Political
Culture](http://www.sdshspress.com/index.php?&id=236&action=912)* about AIM's
influence upon South Dakota politics. The book was published in 2011 by the
South Dakota State Historical Society Press.

[Framing Red Power](http://www.framingredpower.org/): Digital history
analysis of the Trail of Broken Treaties and mass media.

![Framing Red Power](/assets/images/frp_preview.png)

## Publications

Douglas Seefeldt and Jason Heppler, "A National Monument," in *The Companion to Custer and the Little Big Horn*, ed. Brad D. Lookinbill (Wiley Blackwell, 2015), 462--484. [PDF preprint](https://www.academia.edu/15865723/A_National_Monument)

## Coding

In the course of my research, I rely on code and software for visualization
and analysis. Below, I have some of the software I've written. All of my code
projects can be found on [Github](http://github.com/hepplerj).

* [CSV to JSON](http://jasonheppler.org/2014/07/12/parsing-csv-to-json/) - a
Python script for converting CSV data into simply structured JSON.
* [Python parsing to JSON](https://gist.github.com/hepplerj/373f59d91bd101d5d5c2) - a Python script
for converting a string of characters into hierarchical JSON.
* [FREQr](https://github.com/hepplerj/FREQr) - a Ruby script for calculating word frequencies.
* [History Bibliography](https://github.com/hepplerj/bib) - a BibTeX database of citations in environmental,
urban, and North American West history.  
* [Dotfiles](https://github.com/hepplerj/dotfiles) - my Unix/Mac configuration files for ZSH, vim, Git, Ruby, and JavaScript.

## Posts

<ul class="listing">
{% for post in site.categories.research %}
    <li>
        <span>{{ post.date | date: "%B %e, %Y" | ordinalize  }}</span>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
