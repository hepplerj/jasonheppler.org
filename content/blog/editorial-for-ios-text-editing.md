---
date: 2014-06-30T21:18:49Z
description: null
image:
  feature: null
  thumb: null
post_type: Essay
categories:
- Editorial
- iOS
- review
title: Editorial is a Powerful, Flexible iOS App for Text Editing
url: /2014/06/30/editorial-for-ios-text-editing/
---

*[This post originally appeared at [ProfHacker](http://chronicle.com/blogs/profhacker/editorial-ios-text-editing/57431) on 2014-06-30.]*

![The overall view of Editorial for iPad](/assets/images/overall.png)

There are a plethora of text editors on iOS. Just once glance at [Brett Terpstra's list of markdown editors](http://brettterpstra.com/ios-text-editors/) can attest to the range of offerings available on the platform. 

Editorial stands above the rest. Combined with a well designed interface and incredibly powerful workflows built on Python and snippets, Editorial redefined the way I edit text on the iPad. More and more I find myself reaching for Editorial for text editing over anything else, including any apps on my Mac. And pairing it with a Bluetooth keyboard has, with the exception of Scrivener, made Editorial the most productive writing environment I've used. Editorial changed how I thought about my iPad. It had largely been about consumption -- gaming, reading books and PDFs, catching up on RSS -- but Editorial made the iPad a production device for me as well. 

![Previewing the Markdown of this document](/assets/images/markdown_preview.png)

Editorial is the brainchild of Ole Zorn, who was also behind the stellar [Pythonista](http://omz-software.com/pythonista/) iOS app. Pythonista is a Python interpreter for iOS that takes advantage of iOS's built-in functionality all while working with Python.  Zorn has an eye for design and really seems to test the boundaries of what can be done on iOS. This shines through with Editorial. He leverages the same Pythonista environment combined with an [Automator](http://support.apple.com/kb/HT2488)-like GUI that allow for building incredibly powerful workflows for writers. 

![The left-side navigation of Editorial](/assets/images/navigation.png)

Editorial is a Markdown text editor that supports Dropbox syncing, a built-in browser, a Markdown previewer, a Python console, and TextExpander-like snippets that allows you to automate tasks within the app. The interface is excellent. To the left is a sidebar for viewing local files and Dropbox synced files. Along the top is a bookmark bar for quick access to Workflows, and the wrench icon gives you access to the Workflow menu. Tapping the left arrow in the upper right gives you access to the browser, Markdown previewer, and Python console. The keyboard also comes with an extra bar along the top for accessing snippets, an undo button, and common Markdown characters.

![They keyboard interface includes access to undo, snippets, and common Markdown characters](/assets/images/keyboard.png) 

The editing interface can be tweaked to your liking. Editorial comes with a light and dark theme, and you have control over font family, font size, line spacing, and text width. You can also display a live word count in the upper right. 

![Comparison between the light and dark theme](/assets/images/theme_compare.png)

## Snippets

![The list of snippets installed in my Editorial](/assets/images/snippet_list.png)

Editorial comes with support for custom snippets that act much like TextExpander. Following my preference of appending snippets with special characters (on Mac I use a semicolon, on iOS I use a comma because it's easier to access), the snippet will pop in the text I want to call up. Editorial also has a useful completion bubble that appears when you begin to type a snippet, allowing you to touch and complete a snippet. 

![The auto-complete bubbles for snippets](/assets/images/snippet_bubble.png)

## Sync

Editorial can store files in two locations. First, they can be stored locally. I often use local storage for scrap notes and temporary files. Second, files can be synced through Dropbox. I've never had any problem with sync, and it has always seemed quite fast. Sync happens automatically, and within the Dropbox menu you can select multiple files or sort files by date or name. 

![Viewing the list of versions in Editorial](/assets/images/version_list.png)

Because it uses Dropbox sync, Editorial also provides document versioning. You can select a Dropbox version from a drop down menu to compare a past version with the current version, restore a document to a previous version, or restore only segments of text. 

## TaskPaper Mode

I'm a devoted [OmniFocus](https://www.omnigroup.com/omnifocus) user, but those who use [Jesse Grosjean's TaskPaper](http://www.hogbaysoftware.com/products/taskpaper) will be delighted to see Editorial's new TaskPaper mode. I'm not a TaskPaper user and can't point to any workflows that integrate with this, but the mode reads a .taskpaper extension and enters a custom mode that provides checkboxes for tasks, highlights projects and tags, supports drag and drop of tasks, due dates, and done tags. You can adjust the coloring of tags within Editorial's settings. If you're looking for a lightweight plain text to-do system, I would check it out.

![TaskPaper mode in Editorial allows for plain text task management](/assets/images/taskpaper.png)

## iPhone App

Another big update that came with Editorial 1.1 released at the end of May was an iPhone version of the app. Far from just a simple port of the iPad version to the iPhone, the implementation feels well-designed for the smaller screen. The layout is familiar to those using Editorial on the iPad, whether editing text or working with Workflows, and uses the three pane navigation of the iPad version. There are some limitations due to the smaller screen, such as the lack of a bookmarks bar, but accessing Workflows and snippets are still relatively smooth. For me, the iPhone app was among the most exciting new features -- I can edit text within my favorite editor from anywhere. That, to me, is the benefit of a writing workflow that revolves around iOS. Anytime the Muse strikes, I can write.

![Previewing the iPhone home screen icon, text editing pane, and navigation pane](/assets/images/iPhone_preview.png)

## Workflows

I hope I've made the case that, up to this point, Editorial is already incredibly useful and powerful. But it gets better.

![The user interface for building Workflows](/assets/images/workflow_view.png)

At the heart of Editorial is Workflows. Workflows are sequences of actions run from top to bottom -- similar to OS X's Automator -- and completely customizable for the user. Most of the actions built into Editorial are meant to work with text, but you don't need to. You could build Workflows to upload images, access Evernote tags and notebooks, open URLs, or augment any of this with custom Python scripting. There's no need to know Python to get started with Workflows -- the number of actions available means you can begin crafting workflows easily. Editorial makes automation on iOS a breeze. 

![Accessing all installed Workflows from the wrench icon](/assets/images/workflow_list_editorial.png)

With the release of Editorial 1.1 at the end of May, Workflows got even more powerful. The app now includes sub-workflows and [x-callback-url](http://x-callback-url.com/) actions. What this means is if you execute a workflow that contains a sub-workflow, the workflow will pause at the sub-workflow and call up *another* workflow, run it, and carry the results back to the main workflow. Frederico Vittici [explains sub-workflows in more detail](http://www.macstories.net/reviews/editorial-1-1/#sub-workflowsandx-callback-url) and uses a demonstration with Evernote to help make things clearer. 

Workflows you create can be easily shared to [Editorial's workflow directory](http://www.editorial-workflows.com/). Several workflows exist that help me in automating scholarly tasks in Editorial. A while ago I created a workflow for [accessing a list of BibTeX citekeys](http://jasonheppler.org/2013/08/21/using-editorial-and-bibkeys-together/) for generating Pandoc citations. Matt Burton has [created two workflows](https://forums.zotero.org/discussion/34960/zotero-workflow-for-editorial-app-on-the-ipad/) for inserting BibTeX citations and another for searching your Zotero library. Caleb McDaniel has created a workflow for [sending documents to Docverter](http://www.editorial-workflows.com/workflow/5608504794546176/Yrcflwk7t5I) to convert documents to Markdown, LaTeX, PDF, EPUB, or DOCX. There are many workflows out there already. Spend some time with the [Editorial workflows site](http://www.editorial-workflows.com/) to see what's available. 

## Conclusion

There are many more features within Editorial, including new features with Editorial 1.1 such as the new user interface Python module for creating custom UI within workflows (see, for example, [Frederico Viticci's reminders workflow](http://www.macstories.net/reviews/editorial-1-1/#ontheuieditor)). For a deeper look at Editorial's capabilities, I would recommend reading [Gabe Weatherhead's](http://www.macdrifter.com/2013/08/editorial-for-ipad-a-landmark-in-ios-text-editors.html) and [Frederico Vittici's](http://www.macstories.net/reviews/editorial-1-1/) reviews of Editorial. 

Editorial has become my go-to app for working with text on iOS and has changed the way I think about automation, production, and consumption on my devices. If you're considering a mobile-centric writing workflow, give Editorial a shot!
