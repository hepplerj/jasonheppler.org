---
categories:
- Original
date: 2010-11-24T17:30:08Z
categories:
- terminal
title: Pianobar, Your Command Line Pandora Client
url: /2010/11/24/pianobar-your-command-line-pandora-client/
wordpress_id: 421
wordpress_url: http://www.jasonheppler.org/?p=421
---

I'm an avid music listener.  Since I spend a lot of time either programming, designing, writing, or reading, I like to have background noise that usually takes the form of music.  But I'm also not a major consumer of music.  I don't buy much music to add to my iTunes library; instead, I spend most of my time using online music services that allow me to listen to great music and discover new things.  Most of my time is spent with <a href="http://www.pandora.com">Pandora</a>, though I often turn to <a href="http://www.hypem.com">The Hype Machine</a> for a different flavor of music. <!--more-->

However, I despise Pandora's web interface and their reliance on Flash (in fact, I've recently <a href="http://daringfireball.net/2010/11/flash_free_and_cheating_with_google_chrome">gone Flash-free</a> on my Mac).  So imagine my excitement when I discovered <a href="http://github.com/PromyLOPh/pianobar">Pianobar</a>, a command-line Pandora client that is rich with features without the bloat of Flash or Adobe Air.  All you need is <a href="http://www.macports.org/">MacPorts</a> or <a href="http://github.com/mxcl/homebrew">Homebrew</a> to install Pianobar.  With MacPorts, use these commands:

{{< highlight console >}}
$ sudo port install libao faad2 libmad cmake git-core
$ git clone git://github.com/PromyLOPh/pianobar.git
$ cd pianobar
$ cmake . &amp;&amp; make &amp;&amp; sudo make install
{{< / highlight >}}

Homebrew is even easier.  Just run:

{{< highlight console >}}
$ sudo brew install libao faad2 libmad cmake git
{{< / highlight >}}

And you're ready to go.  Just hit "?" if you need Pianobar's list of commands.

{{< highlight console >}}
+ love current song
– ban current song
a add music to current station
c create new station
d delete current station
e explain why this song is played
g add genre station
h song history
i print information about current song/station
j add shared station
m move song to different station
n next song
p pause/continue
q quit
r rename current station
s change station
t tired (ban song for 1 month)
u upcoming songs
x select quickmix stations
b bookmark song/artist
{{< / highlight >}}

Just another step towards going <a href="http://twitter.com/#!/jaheppler/status/24679139192">GUI-free</a>.

UPDATE: Reader David writes in to let me know that Pianobar is now part of MacPorts and is as easy to install by just using

{{< highlight console >}}
$ sudo port install pianobar
{{< / highlight >}}

Homebrew is just as easy.  Simply run

{{< highlight console >}}
$ sudo brew install pianobar
{{< / highlight >}}

Thanks, David!
