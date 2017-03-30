---
layout: page
title: Research
permalink: /research/
---

My work broadly centers on twentieth century political and environmental American history. My work ranges from political and cultural change, urban and environmental history, political culture, historical memory, and the North American West. Posts collected here are items related to my research projects. Material relating to research workflows and programming can be found in the [Digital History]({{ site.url }}/digital/) section. See also <a href="{{ site.owner.vita }}">my vita</a> for more academic information.

<ul class="list-items">
  <li><a href="#in-progress">In Progress</a></li>
  <li><a href="#books-articles-book-chapters">Books, Articles, Book Chapters</a></li>
  <li><a href="#digital-research-and-scholarship">Digital Research and Scholarship</a></li>
  <li><a href="#posts">Related Posts</a></li>
</ul>

## In Progress

### 2016

<i class="fa fa-file-o" style="color:#03396c;font-size:80%;padding-top:6px;"></i> “Green Dreams, Toxic Legacies: The Digital Political Ecology of Silicon Valley” &middot; Forthcoming in the *International Journal of Humanities and Arts Computing*.

<i class="fa fa-file-o" style="color:#03396c;font-size:80%;padding-top:6px;"></i> “Humanistic Approaches to Data Visualization” &middot; Forthcoming in *The Companion to Digital History*, ed. David Staley. Hoboken: Wiley and Sons.

## Books, Articles, Book Chapters

### 2016

<i class="fa fa-pencil" style="color:#03396c;font-size:80%;padding-top:6px;"></i> “[Machines in the Valley: Community, Urban Change, and Environmental Politics in Silicon Valley, 1945-1990](http://digitalcommons.unl.edu/historydiss/86/)."

### 2015

<i class="fa fa-file" style="color:#03396c;font-size:80%;padding-top:6px;"></i> “A National Monument.” Published in *The Companion to Custer and the Little Big Horn*, edited by Brad Lookingbill (Hoboken: Wiley and Sons). [PDF preprint](https://www.academia.edu/15865723/A_National_Monument)

<i class="fa fa-file" style="color:#03396c;font-size:80%;padding-top:6px;"></i> “[Crowdsourcing Public Digital History](http://tah.oah.org/content/crowdsourcing-digital-public-history/),” *The American Historian*.

### 2012

<i class="fa fa-file" style="color:#03396c;font-size:80%;padding-top:6px;"></i> Jason Heppler, Alex Galarza, and Doug Seefeldt, “[A Call to Redefine Historical Scholarship in the Digital Turn](http://journalofdigitalhumanities.org/1-4/a-call-to-redefine-historical-scholarship-in-the-digital-turn/)” *The Journal of Digital Humanities* vol. 1 no. 4 (Fall 2012).

<i class="fa fa-book" style="color:#03396c;font-size:80%;padding-top:6px;"></i> [The Rubyist Historian: Ruby Fundamentals for Humanist Scholars](http://hepplerj.github.io/rubyist-historian/).

### 2011

<i class="fa fa-file" style="color:#03396c;font-size:80%;padding-top:6px;"></i> “[The American Indian Movement and South Dakota Politics](http://www.sdshspress.com/index.php?&id=236&action=912)." Published in *The Plains Political Tradition*, edited by Jon Lauck, John E. Miller, and Donald Simmons (Pierre, SD: South Dakota State Historical Society Press).

### 2009

<i class="fa fa-pencil" style="color:#03396c;font-size:80%;padding-top:6px;"></i> “[Framing Red Power: The American Indian Movement, the Trail of Broken Treaties, and the Politics of Media](http://digitalcommons.unl.edu/historydiss/21/).”

## Digital Research and Scholarship

### 2016

<i class="fa fa-file-code-o" style="color:#03396c;font-size:80%;padding-top:6px;"></i> “[Machines in the Valley: Growth, Conflict, and Environmental Politics in Silicon Valley](http://dissertation.jasonheppler.org/).”

### 2015

<i class="fa fa-file-code-o" style="color:#03396c;font-size:80%;padding-top:6px;"></i> “[What is Digital Humanities?](http://whatisdigitalhumanities.org)”

### 2014

<i class="fa fa-file-code-o" style="color:#03396c;font-size:80%;padding-top:6px;"></i> “[Geography of the Post](http://cameronblevins.org/gotp/).” 

### 2012

<i class="fa fa-file-code-o" style="color:#03396c;font-size:80%;padding-top:6px;"></i> “['Self-sustaining and a good citizen': William F. Cody and the Progressive Wild West](http://www.codystudies.org/showindians/).”

### 2009

<i class="fa fa-file-code-o" style="color:#03396c;font-size:80%;padding-top:6px;"></i> “[Framing Red Power: The Trail of Broken Treaties, the American Indian Movement, and the Politics of Media](http://www.framingredpower.org/)."

## Posts

<ul class="list-items">
{% for post in site.categories.research %}
    <li>
        <span>{{ post.date | date: "%B %e, %Y" | ordinalize  }}</span>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
