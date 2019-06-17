---
date: 2012-05-21T21:21:30Z
categories:
- ruby
- programming
title: Forking the Rubyist Historian
url: /2012/05/21/open-publishing-the-rubyist-historian/
---

In early 2011 I wrote a [series of blog posts](http://www.jasonheppler.org/2010/12/29/the-rubyist-historian-getting-started.html) based off of [Steve Ramsay's](http://lenz.unl.edu/) course on electronic text and Ruby programming, where part of our goal was to think about ways we could apply programming to humanistic data. The course became something of a pivot point for me. Although I've long been a computer geek, programming was something I never deeply used and hadn't touched any computer language since high school (and even then, it was BASIC and Visual Basic). But Ramsay's course made me realize the power that programming can offer researchers. The digitization of our cultural heritage means we have a growing abudance of material being released electronically by libraries, museums, archives, and digital centers, leaving us with a vast array of material that can be manipulated, queried, browsed, and visualized through computational methods. When the course was finished, I decided to write a series of blog posts for others who might be interested in applying Ruby to humanistic inquery. The result was The Rubyist Historian.[^rubyfork]

When I originally wrote the first post kicking off the series, I promised the release of an electronic book. At the time I was running WordPress and the plugin [Anthologize](http://anthologize.org/) had recently been released. I wanted to test it out, and thought some of the things I was doing would also generate some good feedback for the Anthologize team. Shortly after, however, I switched my blog platform to Jekyll and, as other projects demanded my attention, I never got around to publishing the material into a format beyond my blog posts.

That changes today. 

I had a new idea. Instead of pushing a static project as a PDF or epub format I decided to build something dynamic. After all, the electronic medium offers me a much easier way of updating material over time. So, this afternoon I pushed the seven posts to Github [under a single file](https://github.com/hepplerj/rubyist-historian/blob/master/fulltext.md), and [pushed that file to Github pages](http://hepplerj.github.com/rubyist-historian/). This offers two advantages: 1) Anyone interested can now download a copy of the Rubyist Historian and all example code to use, 2) Any updates I make can also be pushed to the page, as well as tracked in version history.

But I want more. As a bit of an experiment in open publishing, I've decided to open source The Rubyist Historian for public contributions. I take my inspiration from William Turkel and Alan MacEachern's [The Programming Historian](http://www.niche-canada.org/programming-historian), which used a wiki to allow public suggestions and contributions to the book. I hope to offer the same through a different venue in using Github pages and version control.

People are free to fork The Rubyist Historian and offer corrections, clear (or better, or more) examples, and overall contribute to what I hope can become a collaborative project and reference for humanities scholars looking to get started in Ruby programming. The text could also be extended in other ways, such as rewriting parts that would make more sense for Windows users (the text, as it exists, is meant primarily for *nix environments), or porting the examples to other languages (someone should do Lisp, just for fun), or add "homework" exercises, or new lessons. Or new examples could push beyond the text analysis I offer and explore different computational methods over different sets of data. Or perhaps you'd like to see a PDF or epub format for Rubyist. There are no limitations to the ideas that could be offered and incorporated.

### How to Contribute

My current idea and workflow for contributions will operate as follows:

1. If you want to make contributions, make a fork of the project in your Github repository.
2. Changes you make should be made to the <code>fulltext.md</code> file. Then changes can be pushed back to my repository.
3. If new lessons are offered, a corresponding directory for code examples should accompany the lesson. Discussions of new lessons can be had on the [Github wiki page](https://github.com/hepplerj/rubyist-historian/wiki). 
4. As changes are merged into the full text, the Github page will be manually updated by me (this appears to be the only way to do this right now.)

This may undergo some evolution -- as I mentioned, this is an experiment and I haven't fully thought through how everything will work. I'll work out issues as time goes on.

So, go check out the [new Rubyist Historian page](http://hepplerj.github.com/rubyist-historian/) and [start forking](https://github.com/hepplerj/rubyist-historian/).

[^rubyfork]: The other pivot point, which the course also contributed to, was a switch in my research agenda towards the history of computers. More on this in an upcoming post.
