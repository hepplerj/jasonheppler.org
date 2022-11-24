---
title: "Running my reading log"
date: "2022-11-23T22:09:04-06:00"
slug: "booklook-script"
categories:
- reading
- web
---

At various moments I've recorded my reading habits using LibraryThing and then Goodreads. I'm not particularly good at making sure everything gets recorded (especially since, as a scholar, I also dig into portions of books that I'm not sure _really_ rise to the level of "I've read this"). But I do like keeping this log of information, but I'm less keen to feed that information to Amazon or Google. 

Some time ago I started playing around with keeping my own reading log. I don't tend to include much in this log like reading notes or ratings, but it is nice to have the list of things I've read over the course of a year. Sadly I missed [this IndieWeb pop-up back in February about distributed libraries](https://events.indieweb.org/2022/02/personal-libraries-pop-up-session-Wax8N17zQuY0), but as I've [said before](https://jasonheppler.org/2019/11/30/indieweb/) I'm a big supporter of the IndieWeb's vision for the web: of owning your little parcel of digital space and taking ideas, values, and people seriously. 

So, [my reading log](/books/) is more a feed of things I read rather than a space for reviews or notes (those find themselves in Obsidian). Does anyone find that interesting? I suppose some might. (Don't worry if you don't, the book log isn't included in the main RSS feed -- there's now a separate RSS feed for just books). 

But at some point over the summer I stopped logging books here -- mainly because of the friction of getting book metadata by hand, but also because micro.blog's book search was so good and easy to use. I still use micro.blog's bookshelves a lot, but I also want to include that content here. So I needed to solve the friction of adding books to the log. I think I've come up with a reasonable way forward. 

The solution was [this node script](https://github.com/hepplerj/jasonheppler.org/blob/main/scripts/booklook.js) that asks for an ISBN or book title, fetches the data from the Google Books API, and writes a new markdown file with the appropriate metadata all in place for me. _Much_ less friction, easier to manage, and exists here on my space on the web. 

It's not an indie version of Goodreads, but a simpler thing. And that's enough.