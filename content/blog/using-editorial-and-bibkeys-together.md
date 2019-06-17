---
date: 2013-08-21T10:43:15Z
description: Using Editorial with Bibkeys for citation management.
categories:
- Editorial
- iPad
title: Using Editorial and Bibkeys Together
url: /2013/08/21/using-editorial-and-bibkeys-together/
---

A few days go, [Editorial](http://omz-software.com/editorial/) for iPad was released. Created by [Pythonista](http://omz-software.com/pythonista/) developer Ole Zorn, Editorial is the latest markdown editor for the iPad and, quite frankly, is the best one available right now. There's been some excellent reviews of Editorial, notably from [Federico Viticci](http://www.macstories.net/stories/editorial-for-ipad-review/) and [Gabe Weatherhead](http://www.macdrifter.com/2013/08/editorial-for-ipad-a-landmark-in-ios-text-editors.html) that are well worth reading.

![Citation workflow](/assets/images/workflow_full.png)

I've spent the last week exclusively writing with Editorial and have been blown away by its features, especially the ability to build Workflows. Workflows are similar to [Automator](http://support.apple.com/kb/HT2488?viewlocale=en_US&locale=en_US) on Mac and allow you to construct ways to automate tasks (which includes running Python scripts).[^1] I do all of my writing in Markdown, including my dissertation, and I wanted a way to access my citations, which I maintain in a BibTeX database for citing in vim and processing with Pandoc. To call up citations in vim, I use Lincoln Mullen's [Bibkeys](https://github.com/lmullen/bibkeys) and his recommendation for vim dictionary completion. But for doing all of my writing in Editorial, I needed a different system. With Workflows, this turned out to be ridiculously easy.

You can grab the workflow [here](http://editorial-app.appspot.com/workflow/6470969526845440/dNU4HGyckGo). The one downfall at the moment is the `citekeys.txt` file needs to be in the root Dropbox folder (which might only be a problem for me since I keep my bibliography files in their own directory). The workflow is fairly straight forward and works by locating the text file, displaying a list of the file's entries, and selecting the entry you want. The text file must already exist; you can follow Lincoln's instructions for setting that up. In my case, I have a [Rake file](https://github.com/hepplerj/bib/blob/master/Rakefile) that handles everything for me.

![Source list.](/assets/images/workflow_list.png)

Creating citations needs just a little manual work. Selecting 'Citekeys' in my Editorial bookmark bar will run the Workflow and allow me to select the source I'm after. But since I'm using the [citeproc](http://gorgias.mine.nu/repos/citeproc-hs/) built into Pandoc, I need to do some prep for the citation to work correctly by inserting square brackets where the note will go. 

![Inserting brackets.](/assets/images/workflow_brackets.png)

Selecting a source will automatically put the '@' symbol in front of the source. I'll be adjusting the Workflow so it will smartly respond to page number inputs (if no numbers are provided, for example, it will ignore the page number input).

![Select pages.](/assets/images/workflow_pages.png)

![Full citation.](/assets/images/workflow_citation.png)

If you make any modifications to the Workflow, please let me know. I'm sure there are better ways to handle some of this. For now, this works great for my needs. 

[^1]: The fact that I can write and execute Python on iOS blows me away. That Pythonista and Editorial made it into the App Store is astounding.
