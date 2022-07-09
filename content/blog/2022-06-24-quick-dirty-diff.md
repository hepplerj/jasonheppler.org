---
title: 'Developer Notes: A quick and dirty text diff'
date: 2022-06-24T10:14:58-05:00
slug: 'quick-dirty-diff'
series:
- developer-notes
---

<aside>
This is part of an on-going series called <em>Developer Notes</em>, where I document one-off project updates, tasks, or solutions to things I'm working on.
</aside>

Sometimes it can be useful to do a quick comparison of text---whether that's code, prose, or otherwise---and several ways to tackle the task. There are some online tools to do this, as well as command line tools (like the built-in `diff` tool or even `vim -d file1.txt file2.txt`). But it turns out, you can do this with [VSCode](https://code.visualstudio.com) without the need of an extension, even.

1. Copy/paste to untitled document 1
2. Copy/paste to untitled document 2
3. Make sure your cursor is in the document you want to compare.
4. CMD + Shift + P and select "Compare active file with..." and select document 2.

![VSCode diff.](/assets/images/vscode.gif)