---
layout: default
title: Home
---

<div id="intro=block">
<img class="avatar" src="assets/images/me.jpg" height="150" width="150" align="left"/>

<p class='size-2x'>Hi, I'm <a href="/about/">Jason</a>, an academic librarian, data scientist, and digital humanities developer at the University of Nebraska where I lead initiatives in digital humanities and digital engagement.</p>
</div> 

You can find me on [Twitter](https://twitter.com/jaheppler), [Github](https://www.github.com/hepplerj), [LinkedIn](https://www.linkedin.com/in/jasonheppler/), and [Medium](https://medium.com/@jaheppler). Feel free to email me at `jason@jasonheppler.org`. If it's a sensitive email, you can <a href="https://jasonheppler.org/jasonheppler.asc">grab my public key</a> for that address or reach me at `jason.heppler@protonmail.com`. I’m also `jaheppler` on Keybase.

### Recent writing

<div class="writing">
	{% for post in site.posts limit:5 %}
    <div>
        <div><a href="{{ post.url }}">{{ post.title | markdownify | replace: "<p>", "" | replace: "</p>", "" | strip }}</a></div>
        <div>{{ post.date | date: "%Y-%m-%d" }}</div>
	</div>
    {% endfor %}
</div>

[See more...](/archives/)