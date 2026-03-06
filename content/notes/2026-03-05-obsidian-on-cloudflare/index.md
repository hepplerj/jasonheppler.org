---
title: The Obsidian-Hugo Workflow
date: 2026-03-05
draft: false
lede: Setting up Obsidian, Hugo, and Cloudflare for my website.
tags:
  - tech-life
---
I wanted to jot down my current workflow for this website. I mentioned in my recent post on the redesign of this site that I have a new workflow in place where I can do everything right from the comfort of Obsidian. To get this to work I had a few things to set up first. 

While the following might seem slightly complicated (and certainly it is more techy than just running a WordPress website), it's really just three pieces: an Obsidian vault that just opens my Hugo folder; GitHub for the files; Cloudflare for the deployment and hosting. 

> Obsidian → GitHub → Cloudflare

## Setting up the Vault

To get this system to play nicely with Hugo, I had a few things to adjust. In settings:

1. Under **Files and Links**, toggle off wikilinks so you can use standard markdown links. 
2. The **New link format** should be set to "Path from current file."
3. Install the [Git plugin](https://github.com/Vinzent03/obsidian-git). Make sure git is active in your site's folder. 
4. I use Hugo page bundling to keep images with posts (and take advantage of Hugo's image processing should I need it). In Obsidian, I set the **Default location for new attachments** to "Same folder as current file" to make this work.

To keep git (and Hugo) happy, `.obsidian/` should be included in your `.gitignore`. That directory churns constantly and you don't want git to clobber what's there. Similarly, adding `.obsidian` to Hugo's `ignoreFiles` configuration means `hugo server` doesn't try and constantly render changes in that directory when watching for file changes. If you wanted, you could also exclude some of the other Hugo directories that don't deal with content. For example, you might set Obsidian to exclude `layouts/`, `assets/`, `static/`, and other Hugo directories from the file browser so the vault feels like a writing environment rather than a code project.

The other change is I had to bulk update all of my tags to use kebab-case since Obsidian doesn't accept tags with spaces in them. This actually works great: I get the auto-complete of Obsidian so I don't duplicate tags, and in the front end of Hugo I can still render the tags with spaces in them. 
## GitHub and Cloudflare 

This couldn't be easier. The Cloudflare integration with GitHub is fantastic. It's just a matter of setting up [Cloudflare Pages](https://pages.cloudflare.com/) and directing it to the correct repository. To build the site I pass `hugo` as a build command within Cloudflare's Pages settings. Cloudflare does the rest. And Cloudflare fits with one of [my other goals](/2026/03/02/a-new-design-for-readability/), which was driving down the carbon output of this website. Since Cloudflare is [committed to running their systems on 100% renewable energy](https://blog.cloudflare.com/understand-and-reduce-your-carbon-impact-with-cloudflare/), this helps my goal considerably.

One of the most satisfying parts of this whole setup is I can publish new posts straight from Obsidian. The Git plugin means I can hit ⌘ + P and choose **Git: Commit** to prepare a post for deployment, and similarly ⌘ + P and choose **Git: Push** after a commit to run the actual deployment (or, more simply if I'm just ready for a post to go right away, **Git: Commit-and-sync**). All from the comfort of my Obsidian vault. No terminals, no rsync, no VS Code. 

The slightly scary part of this was moving my DNS records---especially since my email is tied to my domain, I really didn't want to screw that up. I had to have some conversations with [Claude](https://claude.ai) to make sure I understood it all, but it didn't lead me astray and even helped troubleshoot a mistake I made. 

**Update**: One additional thing I'd meant to mention is each of the components of my website that I update exist as their own Hugo folder. So, essays are inside a `/blog/` folder, my shorter notes exist in a `/notes/` folder, commonplace in my `/links/` folder, and my reading log is in my `/books/` folder. The books content is quite simple and, really, only reads the YAML content contained in the markdown files unless I've indicated there exists a review inside the file (in which case, a book gets a `reviewed` tag and either points to the external review or opens the page here on the site to read a review.) Treating my Hugo website folder as an Obsidian vault also means I can access all other other pages: my about page, publications, teaching, and so on are all accessible within Obsidian as well. 