---
title: 'Towards a Stable Set of Tools'
date: 2022-01-12T21:43:28-06:00
slug: 'stable-tools'
categories: personal
---

I've spent the last couple of months thinking about the tools I use to do my work. 

Part of the impulse here is my day job. I'm a software developer who spends every day building web applications, APIs, interfaces, and interactive data visualizations. Which means I also spend every day working deeply in tech stacks and, sometimes, bang my head against the wall for a while trying to solve a problem. 

The last thing I want when it comes to other aspects of my work (namely, writing, note-taking, organizing sources, etc.) is to fuss with even more technical tools or, worse, things that simply block my ability to do work. 

For a long time I was exclusively a vim user. I wrote my dissertation in vim; I've written more than a few academic articles in vim; nearly every post on this site was written in vim. And I still use vim (and the terminal) every day for its more development-oriented tasks (although, I'll more likely open VS Code if I'm spending a day in a code editor).[^1] But more than that, I often used fiddly tools to manage everything else: I've tried almost every to-do list and task manager, research notes lived in a not-too-easy to install or maintain git-backed wiki environment, experiments with my own custom wiki system written in Hugo, the fiddlyness of Scrivener for writing, and countless other tools, systems, and processes that required a whole slew of libraries, apps, and languages.

But where these tools largely didn't exist is where I now write and work: on the iPad.

## The iPad as Primary

Unless I'm doing software development, almost every other task I do is done on the iPad. A key reason why is the cruft of a desktop gets out of the way: I'm not managing multiple windows, or even really feeling the temptation to jump over to a different piece of software, or answer that email, or glance at a notification. In its own ways, the iPad is a powerful and minimal environment for any of my needs. 

In early 2020, I picked up the green iPad Air (though if I went back and did this again, there's a good chance I'd buy the 12.9" iPad Pro for the screen real estate alone). It's a fantastic machine: super portable, powerful, great battery life. The iPad really is the perfect work from *anywhere* machine.

The other half of the equation that made this work: the Magic Keyboard. Yes it's expensive, but it's also incredible.

But I've also taken steps to set up the iPad as my main writing machine. As I mentioned above, I once did most of my writing in vim and a bunch of Markdown files, paired with some scripts that would combine documents into an output (docx or PDF) when they were ready. Sometime after I finished graduate school, I migrated that work into Scrivener -- an incredibly good writing application that I really have no complaints against. Both the iOS/iPadOS and macOS versions of the software are very good, and for any large writing project I would wholeheartedly endorse using it. 

And yet. I found myself fiddling too much with Scrivener -- changing how I laid out documents, or adjusting fonts and font sizing, or digging too deep into some of its writing measurement and progress tracking tools. All of this, I told myself, would help me be a more productive writer: I just needed to chunk the writing out just right, or make sure I had these fonts I enjoyed using, or setting word-count goals I could watch fill up.

I wasn't *writing* consistently in Scrivener. It's no fault of theirs; I'm just picky about things, and apparently easily distracted (or, a really poor productive procrastinator). If anything was really rubbing me the wrong way in using Scrivener, it's that things were not in Markdown by default -- the file format I still prefer using since it's minimal, simple, and, for the most part, long-term. I wasn't always thrilled with how Scrivener exported documents into MultiMarkdown, and these small annoyances started to add up.

Where I landed was on Ulysses. It's not always perfect -- I think Ulysses is a bit *too* aggressive about hiding some of the raw markdown formatting (especially footnotes) that I'd prefer to just see. But it's a simple environment for writing, and still contains just a few of the writing tools I liked about Scrivener (like word count goals). And, it's all Markdown and easily exportable if I choose to leave the application for something else.[^2]

Now, all of my writing happens here: the book manuscript; blog posts are indexed from a folder on Dropbox; academic articles; book and project reviews. Everything now lives in one place. And this is key: it's in *one* place. To make this experience a bit more enjoyable (and prevent neck strain from the Magic Keyboard), I mount the iPad to a stand and use a bluetooth mechanical keyboard with it.

![iPadOS setup with the Keychron K3 mechanical keyboard.](/assets/images/ipados.png)

Just fantastic.

### What about Zotero? 

Ulysses doesn't play well with Zotero in the way it can with Word or Google Docs. But to be fair, it also didn't play well with Scrivener or vim. The good news is the iOS version of Zotero is coming, and in my testing with the beta version in TestFlight it's *very* good. There are two ways I can use Zotero and Ulysses together. 

1. Like the desktop version of Zotero, I can drag-and-drop a library entry into a document and have it pop the citation in for me. Super easy: just open Zotero and Ulysses side-by-side, and I'm good to go.
2. My preferred way of doing this, though, is through Shortcuts. I built [this Shortcut](https://www.icloud.com/shortcuts/3ca1233e1526483a835bf99ee260af43) to query the Zotero API for my library, and insert the BibTeX citation key using the BetterBibTeX plugin. There will be a second step here when it comes to export the document, using pandoc against my Zotero library as a `.bibtex` file to auto-insert citations -- but this is a workflow I was already using with vim, and it's trivial to keep it going here.

## Stock First

Something important happened a couple of versions ago across Apple's software ecosystem: their stock applications got considerably better. In particular, Notes and Reminders were much improved --- maybe not stellar, but definitely better. The applications did two things for me: 

1. Proved that they were enough for what I required. 
2. Their integration with Siri and Shortcuts made my life easier. 

Part of the reason for the move to Reminders was simply the friction I kept experiencing with non-system apps, and it boiled down to a very simple thing: I can tell the machine in front of me "Hey Siri, remind me about THIS on DATE." It's a powerful string: it might be a reminder to just go do something; or, it might be a reminder that links back to the email I'm looking at on my screen, or the webpage I have open in Safari. Reminders has a very small feature set, but I found myself liking its simplicity. 

I was an Omnifocus user for [years](https://jasonheppler.org/2012/11/26/omnifocus-workflow-and-notes/), before I migrated to Things 3 about five years ago. I have plenty of complaints about Omnifocus (I've longed despised the interface and, ironically, the difficulty of getting tasks into the software), but chief among them is that the software requires more time to use the tool than the tool saves by using it. And while I love most everything about Things 3, it forces a workflow that, if not followed, becomes hard to manage as tasks or projects grow.

I don't need most of the complexity these tools provide (and, frankly, I probably never did): I don't need start dates, or tags, or complex rules. All I need is a reminder of a task, and I'm good at getting my tasks done when I'm reminded of them. Things, Omnifocus, and a slew of other to-do apps exist for managing tasks, projects, and complexity -- these can be useful, but I found myself *managing* the tool more than being reminded of tasks from the tool. 

I just need a bucket, that has some small level of (very controlled) tagging and areas of responsability, and can tell me when something is due. That's it. 

I now divide my Reminders into about five lists: Work, Personal, Family (shared with my wife), Errands (shared with my wife), and Routines (e.g., when bills are due, or if this week recycling *and* trash go out or just trash, and so forth). I'm only about two months into this experiment, but so far I'm finding it a better experience.

### Project Management

Reminders, however, isn't the only place where I do work. Because almost all of my work at RRCHNM is collaborative, we also manage tasks in two places: GitHub Issues and Basecamp. Most of my development work is managed through GitHub Issues, but frankly I don't mind the disconnect between Reminders and Issues: the two spaces serve very different ends. In Issues, I can track what needs to be done, document changes or decisions, and tag collaborators into a conversation or question. I find all of this incredibly useful and, perhaps most important, *transparent* to my colleagues. Since I work remotely, I'm getting in the habit of *oversharing* what's on my plate: I want to be super clear with everyone about the work we're doing. 

Basecamp also factors into this workflow, but typically gathers things less connected to development work. Project management documentation typically lands here, which again provides a level of transparency and easier onboarding as students or other collaborators join our projects. Over the course of a week, I spend considerably less time in Basecamp than I do in Reminders or Issues.

## Note-taking

Given my love of Reminders, it won't be a surprise to learn that I'm basically all-in with Apple Notes. It's fantastic. 

Where I don't use Notes, though, is research or documentation. Notes exists almost exclusively as a space for note-taking from meetings. Most of the time these are typed up (either during the meeting itself, or transcribed from my [Field Notes](https://fieldnotesbrand.com)), but Notes can also capture any sketches, workflows, or other scribbles I draw with the Apple Pencil. But research notes, reading notes, project documentation, or just simply [building up a second brain](https://jasonheppler.org/2012/10/10/building-your-own-memex/) are entirely different kinds of writing and information. 

For handling research notes or documentation on projects, I've turned to Obsidian. I use to store a lot of these kinds of notes in a Git-backed wiki system called [Gitit](https://github.com/jgm/gitit), but I never really found the system particularly useful or easy to maintain and update. Obsidian, however, keeps things just as simple as I'd prefer -- meaning, everything is a Markdown file -- but can also layer in complexity as necessary. Thanks to some wonderfully powerful plugins like [Dataview](https://github.com/blacksmithgu/obsidian-dataview) I can build out data-driven interface in my notebooks, but also leverage Obsidian's built-in power to link notes together. Both the desktop software and the iOS software are fantastic.[^3]

---- 

So, as of January 2022, here is where my daily tools stand. Simple yet powerful, preferring stock applications for their integration into iOS/iPadOS and macOS, compatability among my different computing devices, and complexity and power when it comes to the research.

[^1]:	I also spent part of the Christmas break fiddling with emacs, in case anyone is worried I'm losing my technical chops.

[^2]:	A very close second is iaWriter, which I also adore as a writing environment. But I'd decided to go all-in on one piece of writing software, and Ulysses won out mainly because other writers I respect are also huge fans of Ulysses. Who knows, maybe I'll jump back to iaWriter some day (or even vim) -- that's the beauty of Markdown, it's easily transferrable to other text editors.

[^3]:	Have I told you about [Tropy](https://tropy.org)? I'm not all-in on Tropy, basically using it to store and organize my primary sources after abandoning DEVONthink. But I don't use it for taking notes. I have a different system in place within Obsidian that, for me, works effectively and I don't wish to upset that.