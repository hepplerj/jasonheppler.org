---
layout: page
title: Topics 
permalink: /topics/
---

<div id="blog-archives">

{% capture totals %} {% posts_word_count total %}{% endcapture %}
{% capture average %} {% posts_word_count average %}{% endcapture %}
{% capture longest %} {% posts_word_count longest %}{% endcapture %}

<p>I've written <strong>{{ totals | thousands_separated }}</strong> words here since 2008, averaging around <strong>{{ average }}</strong> per post. The longest post is <strong>{{ longest | thousands_separated }}</strong> words.</p>

<p>View as <a href="/archives/">Chronological</a> | <strong>Topics</strong></p>

<h2>Posts about Digital Humanities</h2>

<p>Writing about the field of digital humanities.</p>

<ul class="list-items-dot">
{% for post in site.categories.hacks %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>

<h2>Posts about Decentralization / Privacy / Open Web</h2>

<p>Writing on decentralization, privacy, and Internet health.</p>

<ul class="list-items-dot">
{% for post in site.categories.security %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>


<h2>Posts about JavaScript</h2>

<p>My primary language for building interactive data visualizations.</p>

<ul class="list-items-dot">
{% for post in site.categories.javascript %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>

<h2>Posts about R</h2>

<p>My other go-to language for data science, exploration, and visualization.</p>

<ul class="list-items-dot">
{% for post in site.categories.r %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>

<h2>Posts about Maps</h2>

<p>Maps, geography, space, and place.</p>

<ul class="list-items-dot">
{% for post in site.categories.maps %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>

<h2>Posts about Data Visualization</h2>

<p>Projects and experiments in visualizing data.</p>

<ul class="list-items-dot">
{% for post in site.categories.dataviz %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>


<h2>Posts about Teaching</h2>

<p>Writing about teaching, workshops, syllabuses, and so on.</p>

<ul class="list-items-dot">
{% for post in site.categories.teaching %}
    <li>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>


</div>