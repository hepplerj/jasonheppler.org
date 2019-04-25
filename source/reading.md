---
layout: page
title: Reading List
permalink: /reading/
---

An occasionally-updated list of books I've read. By no means is this meant to be comprehensive; a more complete list of books and articles can be found in [my Zotero library](http://zotero.org/hepplerj).

<div class="books">
    <div>
        <div><strong>Title</strong></div>
        <div><strong>Author</strong></div>
        <div><strong>Subject</strong></div>
    </div>
{% assign books = site.data.reading %}
{% for book in books %}
    <div itemprop="mainEntity" itemscope itemtype="http://schema.org/Book">
        <div itemprop="name"><em>{{ book.title }}</em></div>
        <div itemprop="author">{{ book.author }}</div>
        <div itemprop="about"><span class="cat">{% if book.subject %}{{ book.subject }}{% endif %}</span></div>
    </div>
{% endfor %}
</div>