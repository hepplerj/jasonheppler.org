---
title: How I Use Obsidian Redux
date: 2026-01-08T07:53:45-0600
lastmod: 2026-01-09T09:07:32-0600
tags:
- tech life
- academia
lede: An update on how I use Obsidian for historical research.
---

A little over a year ago [I wrote about](/2024/07/15/how-i-use-obsidian/) how I use Obsidian for historical research. While it hasn't changed substantially since I wrote that piece, there are some updates to the system I'd been wanting to write up. An email from a friend with questions about that piece, and this is basically the email I wrote back to him.

The core question my friend asked about was the separation between the two tools I use to manage sources: Tropy, for image management, and Obsidian, for note management (and Zotero, I suppose, for bibliographic management). After [my visit](https://writing.jasonheppler.org/2025/05/27/busy-week-at-the-archives/) to the American Heritage Center back in May, I came home with some 4,000-plus photographs to organize. To start, I spent my evenings after the archives closed for the day throwing everything into Tropy and organizing what I'd captured: metadata about where the source came from, dates, the type of item, as well as my quick note about what sorts of themes, people, or organizations appeared in these sources (which I used Tropy's tagging system to categorize). But I knew I didn't want to keep all of my notes in Tropy; I wanted those in Obsidian. A couple of months later, I realized how much friction I was feeling trying to keep these two systems in sync.

So I wrestled with the division between Tropy and Obsidian for a while, in part because it got to be a real chore to keep things up to date. In Obsidian, I use properties for primary sources that include metadata about the item (date, location in the archives, people, organizations, locations, themes I identify) and, for a time, kept an `item` property that was just a link to the item in Tropy (you can right click on an item in Tropy and copy that item's URL which is something like `tropy://tropy_item_path`). Then, if I needed to consult the actual source, I could open up that item in Tropy just by clicking a link.

That was useful, but the problem was I was trying to keep two sets of metadata: the material in Tropy, and the material in Obsidian. Since Obsidian is my note-taking space, it was there that I identified further details about a source---people that appeared or were mentioned or related, or themes I felt emerged from reading sources, and so on. I didn't have an easy way to get those back into Tropy to keep all of that data in sync. I played around with some scripting to keep them in sync, but it was more trouble than it was worth. I even made an attempt at writing an Obsidian plugin for Tropy. But then it dawned on me [three months ago](https://writing.jasonheppler.org/2025/09/17/it-dawned-on-me-that/) that I actually could do all of this *without* Tropy.[^1]

<img src="/assets/images/2025/screenshot-2025-12-16-at-8.55.47am.webp" width="600" height="390" alt="Obsidian displays metadata for a letter sent from Sherlock and Kleckner to Bush on November 30, 1988, including properties like author, recipient, and location.">

So what I do now is: I collect photographs of sources into a single PDF, which I can drag and drop into Obsidian. Obsidian allows you to set a central location for attachments---in my case, I created a `Miscellaneous/Attachments` folder in Obsidian for these. For that to work, in Obsidian's settings you can set the "Default location for new attachments" to "In the folder specified below" which, in my case, is the above folder. This also solves a second problem: occasionally I wanted to look at a source while on my iPad, and since Tropy has no iPad equivalent I couldn't do that. This system solves that problem since the attachments are part of Obsidian Sync. 

<img src="/assets/images/2025/screenshot-2025-12-16-at-8.55.53am.webp" width="600" height="390" alt="A letter addressed to then-Governor George Bush from the Coalition for Fiscal Responsability is displayed on a computer screen, with a network graph and file directory visible on the left side.">

I've also replaced many of the DataView plugin views I was using with Obsidian's new Bases for more easily sorting and filtering my sources (and, I suspect, is more future-proofed). Here, for example, are all correspondence sources sorted by date:

<img src="/assets/images/2025/screenshot-2025-12-23-at-8.38.56am.webp" width="600" height="379" alt="Obsidian Bases showing a chronologically sorted list of correspondence.">

Zotero has been a much easier thing to sync up with Obsidian, thanks to the [Zotero Integration plugin](https://github.com/mgmeyers/obsidian-zotero-integration). Using the plugin I can pull in data from Zotero to Obsidian very easily: the bibliographic information, a link to the Zotero item, and any notes I've taken in Zotero all get pulled into their own note Obsidian. I use Zotero's PDF reader to highlight material and take notes, all of which sync into Obsidian. This makes it quite nice for building up a historiographic synthesis and incorporating reading notes into the rest of my notes. 

Since folks might be curious, the theme I’m using is [Baseline](https://github.com/aaaaalexis/obsidian-baseline). The full list of plugins I'm currently using:

- [Better Word Count](https://github.com/lukeleppan/better-word-count)
- [Calendar](https://github.com/liamcain/obsidian-calendar-plugin)
- [CustomJS](https://github.com/saml-dev/obsidian-custom-js)
- [DataView](https://github.com/blacksmithgu/obsidian-dataview)
- [Enhanced Annotations](https://github.com/ycnmhd/obsidian-enhanced-annotations)
- [Excalidraw](https://github.com/zsviczian/obsidian-excalidraw-plugin)
- [Freeform](https://github.com/tmcw/obsidian-freeform)
- [Focus Mode](https://github.com/ryanpcmcquen/obsidian-focus-mode)
- [Git](https://github.com/Vinzent03/obsidian-git)
- [Longform](https://github.com/kevboh/longform)
- [Mapview](https://github.com/esm7/obsidian-map-view) (I'm considering replacing this with [the new Bases support for maps](https://help.obsidian.md/bases/views/map)---this lets me look at my sources in place)
- [Micro.publish](https://github.com/otaviocc/obsidian-microblog)
- [Multi State Checkbox Switcher](https://github.com/KubaMiszcz/MultiStateCheckBoxSwitcher)
- [Note Refactor](https://github.com/lynchjames/note-refactor-obsidian)
- [Novel Word Count](https://github.com/isaaclyman/novel-word-count-obsidian)
- [Omnisearch](https://github.com/scambier/obsidian-omnisearch)
- [Outliner](https://github.com/vslinko/obsidian-outliner)
- [Pandoc Plugin](https://github.com/OliverBalfour/obsidian-pandoc)
- [Stille](https://github.com/michaellee/stille)
- [Style Settings](https://github.com/mgmeyers/obsidian-style-settings)
- [Tasks](https://github.com/obsidian-tasks-group/obsidian-tasks)
- [Tidy Footnotes](https://github.com/charliecm/obsidian-tidy-footnotes)
- [Zotero Integration](https://github.com/mgmeyers/obsidian-zotero-integration)

[^1]: To be clear, this is not a criticism of Tropy. I think Tropy is a great piece of software (yes I'm affiliated with the research center that created it, but I had no hand in it---it pre-dates my time at RRCHNM). But for the way I work, Tropy fit uneasily into my workflow.