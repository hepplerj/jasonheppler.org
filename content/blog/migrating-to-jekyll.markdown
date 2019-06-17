---
date: 2011-04-19T11:53:16Z
categories:
- writing
- blogging
title: Migrating to Jekyll
url: /2011/04/19/migrating-to-jekyll/
---

During some free time over the course of the semester, I began learning about Jekyll, a simple static site generator. I've done away with the CMS format of blogging -- no more admin panel to edit and manage posts, no need to run frequent updates, no need at all for a database. I write in the editor of my choice (vim, TextMate, gEdit, and so on) in a syntax called [markdown](http://daringfireball.net/projects/markdown/). Once things are ready to go, I can run <code>jekyll</code> in the command line and it will create static, flat HTML files. Good bye, MySQL.

### Why the Move?

I actually have no problem with Wordpress. I think the platform is still one of the best out there for hosting blogs. Plus, the community around Wordpress means any problems you come across or features you want to implement are easily within reach. But I made a decision recently that I really [wanted to focus more on content](http://www.jasonheppler.org/refocusing-on-content.html) on my site. I'm still debating about adding a section called "Shorts" for smaller pieces or sharing things I find interesting, and keeping blog posts separate for full-form writing. But either way, I decided to try something new. And, as a hacker/geek, I love learning new tools for the sake of learning.

Plus, I've been making a switch recently to move many of my notes, research papers, essays, and any other manner of textual stuff produced by me into plain text. I love plain text. It's sort of a nerd/geek thing, but nothing else out there that we've created so far is more portable, sustainable, and readable than plain text files. My content no longer resides on some database out on a server, but rather things exist locally, backed up to Github, and pushed to my server. Distributed web FTW.

Plus, we can do cool and functional things with flat files. I can run word counts to learn which of my posts have the highest number of words, for example (<code>wc -w * | sort | tail -n6</code>) or grep for words or phrases. In short, I love plain text for the same reasons I love unix. To adopt [Steve Ramsay's words](http://lenz.unl.edu/wordpress/?p=415), plain text and unix is "faster, easier to understand, easier to integrate, more scalable, more portable, more sustainable, more consistent, and many, many times more flexible." I also find plain text to just *work* so well for most of the things I do. It's what we geeks like: if a system can be proven to aid my productivity more than my current setup, I have no problem making the switch. I didn't come to this decision lightly -- as a historian I spend the majority of my time working with text (reading it or writing it), so deciding to drop Microsoft Word for [MultiMarkdown](http://fletcherpenney.net/multimarkdown/) and Wordpress for markdown/Jekyll was a big leap. Taking notes or jotting thoughts/ideas/reminders in [Notational Velocity](http://notational.net/) rather than on legal pads, random sticky notes, or Google Docs has proven to be a much better system for me based on my system of organizing plain text notes (which is starting to number around 183, many of which may just be a single line. Perhaps a post on using Notational Velocity is in my future...). 

### Jekyll

So, I joined a [growing number of hackers](https://github.com/mojombo/jekyll/wiki/sites) making the switch to Jekyll. Jekyll is the brainchild of Tom Preston-Werner, the cofounder of [Github](http://github.com). In 2008 Preston-Werner wrote about [Blogging Like a Hacker](http://tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html) and explained his reasoning behind building the tool. Tired of complicated blogging engines, templates, moderating comments, and keeping up with software releases, he looked to build something new. I started by forking [Tom Preston-Werner's blog repo](https://github.com/mojombo/tpw), removed content owned by him, and started poking around at other Jekyll sites to get an idea of how people used the system. I downloaded the Jekyll gem and began hacking.

In theory, static sites have almost no security holes because there is no server-side scripting handling the transfer of data. Another reason I loved Jekyll was because it was written in Ruby, a language [I'm becoming very familiar with](http://www.jasonheppler.org/the-rubyist-historian-the-series.html). I don't need a full-fledged CMS to handle my content. Jekyll is perfect for my needs.

### Migrating from Wordpress

The process of migrating, for me, was the hardest part, only because MySQL on the Mac can sometimes be wonky. I eventually decided to use Ubuntu and had my Wordpress .sql file playing nicely with the Jekyll migration script to convert all my posts into markdown. I followed [these steps](wiki.github.com/mojombo/jekyll/install) from the Jekyll documentation (there are several [blog migration scripts](wiki.github.com/mjombo/jekyll/blog-migrations) that come with Jekyll). For syntax highlighting, I'm using [Pygments](http://pygments.org). 

I don't currently have commenting on my blog, but many users migrating to Jekyll have [found Disqus](http://paulstamatiou.com/how-to-wordpress-to-jekyll) to be an excellent solution.

### Deploying Jekyll

I didn't want to mess with having the Jekyll gem on my server and preferred to do all my work locally. After looking around at [some deployment solutions](https://github.com/mojombo/jekyll/wiki/Deployment), I decided to use a Rakefile that would push updates to my server via rsync. After I've written a post, I simply need to run <code>rake deploy</code> and my site is updated. Simple.

I also push (most) of my site to Github as a way to backup everything. 

### Thoughts

So far, I'm totally pleased with Jekyll and love that I'm serving up flat files now. This setup is certainly not for everyone. If you're comfortable working with git, rsync, Ruby, Liquid, and the command line, give it a shot. It feels a bit strange to move from dynamic blogging to static blogging, but the system *works* for me. Although I'm fixing up a few issues here and there and may add or adopt things as I learn about them, Jekyll is set up to my liking. I have no updates to worry about and no security issues to fuss with. I couldn't be happier.

### Resources

I consulted *many* sites and visited several Github repos in learning about Jekyll. Here a few of the best sites:

* [Paul Stamatiou](http://paulstamatiou.com/how-to-wordpress-to-jekyll)

* [Paul Craciunoiu](embrangler.com/2010/03/embrangler-moving-to-jekyll/)

* [Tom Preston-Werner](tom.preston-werner.com/2008/11/17/blogging-like-a-hacker.html)

* [Hardik Ruparel](blog.hardikr.com)

* [Chris Dzombak](chris.dzombak.name/blog/2011/02/moving-from-wordpress-to-jekyll)

* [Recursive Design](recursive-design.com/blog/2010/10/12/static-blogging-the-jekyll-way)
