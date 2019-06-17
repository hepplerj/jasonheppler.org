---
date: 2012-10-10T23:43:21Z
categories:
- productivity
- digital history
title: Building Your Own Memex
url: /2012/10/10/building-your-own-memex/
---

*[This post originally appeared at [Gradhacker](http://www.gradhacker.org/2012/10/10/building-your-own-memex/) on 2012-10-10]*

Albert Einstein is said to have explained that he didn't memorize things that could be easily looked up. "[I do not] carry such information in my mind since it is readily available in books," he said. "The value of a college education is not the learning of many facts but the training of the mind to think." I cannot remember something unless I've written it down. Therefore, having <a href="http://zenhabits.net/tips-for-gtds-ubiquitous-capture/">ubiquitous capture</a> is key to my everyday life. A key part of my ubiquitous capture system includes a reference bank where I can draw on previously found, researched, or created items and integrate them into my workflow. I refer to this as my "memex."

### A What?

In an article in the <em>Atlantic Monthly</em> in 1945 titled "<a href="http://www.theatlantic.com/magazine/archive/1945/07/as-we-may-think/303881/">As We May Think</a>," the brilliant engineer Vannevar Bush theorized a proto-hypertext system he called the "memex" -- a mashup of "memory" and "index" -- where people could store all their books, records, communications, notes, and research where it could be "mechanized so that it may be consulted with exceeding speed and flexibility." The memex would "supplement one's memory," he wrote, allowing individuals to follow associative trails of links among notes, topics, and objects. (It should come as no surprise that the idea of the memex influenced the early development of hypertext).

My memex is contained within Notational Velocity. I've written about Notational Velocity (and the fork I actually use, nvALT) <a href="http://www.jasonheppler.org/2011/07/22/using-notational-velocity.html">previously</a>, as well as the taxonomy/tagging I use to access material. To briefly summarize here, I have a taxonomy system of naming plain text files so I can quickly locate material. My memex is simply a large collection of plain text files, some with just a single line of text, others with a few paragraphs, and others with snippets of code I reuse frequently. Each of these text files are named after a topic or question I am likely to think up ("Add all new files to Subversion" would be the filename, for example) and inside the file itself is the material I'm after. I preface each filename string with a "tag," in this case I use "refx" -- "ref" being short for "reference," and the "x" serving as a metacharacter that helps narrow down results quickly. So, the full filename in the above example would be "refx Adding all new files to Subversion".

I have three methods for accessing this material. The first is within Notational Velocity itself. The application has an excellent and fast incremental search that helps me locate the files I want quickly. Typing "refx" shows me all the files I that contains that string, which I can then scan and locate what I'm looking for. A second way to access these files, since these are all plain text files and indexed by my operating system, is through launching Spotlight and searching "refx" for my reference files. My final, and most recent, way to access reference material is with Brett Terpstra's bash script he calls <a href="http://ttscoff.github.com/QuickQuestion/">QuickQuestion</a>. I use QuickQuestion from the command line, and Brett has built in partial string matching that makes it easy to search only parts of filenames and still locate what you're looking for. So, from the command line I can type "qq subversion update" and get files that relate to the words "subversion" and "update." Check out Brett's <a href="http://ttscoff.github.com/QuickQuestion/">Github page for QuickQuestion</a> for a better explanation of how the platform works and more examples of how to use it.

My memex contains small bits of information, many related to tech material but also common things I frequently need to use but don't bother trying to memorize.

Why use this system instead of an everything bucket or knowledge base platform like Evernote or DEVONthink? I like the freedom and flexibility of plain text, and so this system works better for me to locate information I need quickly and efficiently with minimal mental exertion. There's no complicated tagging schemas to remember, no platform quirks to toy with, and no lock-in into a single application.
