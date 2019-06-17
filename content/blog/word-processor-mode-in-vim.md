---
date: 2012-12-05T22:48:56Z
categories:
- vim
- writing
title: Word Processor Mode in Vim
url: /2012/12/05/word-processor-mode-in-vim/
---

One of my favorite functions I have added to
my .vimrc file recently is Word Processor Mode inspired by [Seth
Brown](http://www.drbunsen.org/writing-in-vim.html). When I am writing
code I do not usually care to have wrapping on by default, but when I
am writing prose I want lines to wrap as I write. To work around this
the Word Processor function calls up line wraps as well as a few other
features that can be useful in writing. The function looks like this:

{{< highlight vim >}}
func! WordProcessorMode()
    setlocal formatoptions=t1
    setlocal textwidth=80
    map j gj
    map k gk
    setlocal smartindent
    setlocal spell spelllang=en_us
    setlocal noexpandtab
endfu
com! WP call WordProcessorMode()
{{< / highlight >}}

Now when working in Vim, I type <code>:WP</code> and the environment changes for me to write. 
The function wraps lines at column 80, I mapped <code>j</code> and <code>k</code> 
to make paragraph navigation easier, and enabled spell check. A
handy function to have in your toolkit when you do your writing in Vim.

Incidentally, Chad Black wrote [the first in a series of posts today](http://parezcoydigo.wordpress.com/2012/12/05/vim-scrivener/) about "Vim Scrivener" that I will be following
closely as well. Like Chad, I love Scrivener for writing but I get nervous about
storing everything inside their database and tying things to a proprietary
application. Almost everything I work with is
plaintext and Markdown, and in some ways Scrivener is overkill for my needs.
Word Processor Mode is the start of my own explorations into going back to Vim
for my writing needs, so Chad's posts will be quite useful as I look into
	customizing Vim for writing.
