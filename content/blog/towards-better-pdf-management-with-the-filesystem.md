---
date: 2012-08-13T08:30:09Z
post-type: full
categories:
- productivity
title: Towards Better PDF Management with the Filesystem
url: /2012/08/13/towards-better-pdf-management-with-the-filesystem/
---

*[This post originally appeared at [Gradhacker](http://www.gradhacker.org/2012/08/13/towards-better-pdf-management-with-the-filesystem/) on 2012-08-13]*

It starts innocently enough. We save a PDF file to our desktop or in a folder. After some more work we suddenly have a folder stuffed with files and we lose the sense of structure that ties the work together. Folders and subfolders appear to try and capture structure, filenames no longer carry any meaning, and the mass of files and folders loses meaning. Then the process repeats itself.

This process doesn't help us retrieve the information we want to access, which is why the files were originally collected.

I've tried different systems over the years. In college I used topic folders, only to be frustrated that they didn't help me locate information when I wanted it. My next step was to use Evernote and then DEVONthink databases to organize my research. But each of these systems required attention to particular quirks, and I had to rely on these systems and their specific methods for tagging, sorting, and organizing material.

My solution was to stop using the everything buckets and rely on the filesystem. All of my PDFs are now stored in a master folder (simply called "papers") and the filenames follow the Zotero naming template of the author's last name, year of publication, and short title (e.g., "O'Mara - 2006 - Cold War Politics and Scientific Communities").

To add additional ease in locating material, I use the [OpenMeta](http://code.google.com/p/openmeta/) tagging standard. It's not exactly interoperable and Apple may break it in the future, but the system works well for me. I use [Tagger](http://hasseg.org/tagger/) by Ali Rantakari to tag documents. Tagger allows me to search through Spotlight to find the items I am looking for. I also use smart folders to track specific tags, such as "toread" or "dissertation." You'll want to use a system that remembers tags you've used so you are not duplicating your efforts (for example, "to read," "toread," "todo," etc.).

This system allows me to define a tagging system that works for me, where documents are categorized by content, topic, or interests without the rigidity of a single folder. The additional advantage of this system is that I'm not tied to the "features" of a single app. By using the filesystem, and augmenting it with Tagger, I can leverage the power of an app of my choosing without being tied to them.

Which brings us to DEVONthink. There are a few ways to locate material once it's been tagged. The easiest is to use Spotlight, which is compatible with OpenMeta. Simply typing "tag:dissertation" or "tag:digital humanities" into Spotlight lets me find everything related to those tags. I can also chain together queries, such as "tag:dissertation tag:toread" to find everything I need to read that's related to my dissertation research. Ali Rantakari has also created another app called [TagLists](http://hasseg.org/tagLists/) that tracks the OpenMeta tags you've applied to documents, and you can likewise chain together tags to get finely grained results.

Finally, I use DEVONthink to index the master folder of articles (using "File > Index..." and selecting the "papers" folder). I don't store the files in DEVONthink's database because it prevents me from accessing PDFs in other ways. DEVONthink recognizes the OpenMeta tagging and uses them in its index. Using it to index the files also allows me to leverage its incredibly powerful search and categorization features without getting locked into its database (check out [Chad Black's post on DEVONthink](http://parezcoydigo.wordpress.com/2008/12/18/posts-on-devonthink/) to get a sense of the app's power in searching and categorization). When it comes to finally reading PDFs, I use Skim for reading and annotation. For tracking bibliographic information I use Zotero.

The system isn't perfect, but it's helped me achieve a sense of order in my research material.
