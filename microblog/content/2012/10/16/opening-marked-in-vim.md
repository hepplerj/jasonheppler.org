---
layout: post
title: "Opening Marked in Vim"
microblog: false
guid: http://jaheppler.micro.blog/2012/10/16/opening-marked-in-vim/
post_id: 4570924
custom_summary: false
summary: ""
date: 2012-10-16T11:01:51-0600
lastmod: 2025-01-03T19:09:17-0600
type: post
categories:
- "tech life"
- "Longform"
url: "/2012/10/16/opening-marked-in-vim/"
---

I am a big fan of [Brett Terpstra's Marked.app](http://markedapp.com/) for previewing Markdown documents. I wanted a way to launch Marked from within vim so I can preview what I'm writing as I am working. The task is easy. In your <code>.vimrc</code> file, add the line:

{{< highlight vim >}}
:nnoremap <leader>ma :silent !open -a Marked.app '%:p'<cr>
{{< / highlight >}}

I have my <code>leader</code> mapped to <code>,</code> (comma), so if I want to launch Marked in a markdown file I'm writing, I just type <code>,ma</code> and it launches the app. 

<div class="update">
<p><strong>UPDATE 10/16/12</strong><br/>
<a href="http://www.lincolnmullen.com">Lincoln Mullen</a> points out that console vim does not redraw after <code>:silent</code> and modified the command slightly:</p>

{{< highlight vim >}}
:nnoremap <leader>ma :silent !open -a Marked.app '%:p' :redraw!<cr>
{{< / highlight >}}
</div>
