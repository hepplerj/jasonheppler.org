---
layout: post
title: Remove Multiple Open With Entries in Finder
external-url: http://simplicitybliss.com/blog/2012/11/multiple-open-with-entries-in-mac-os-x-finder
date: 2012-11-26 21:55:10
tags:
- personal
---
For reasons still unclear to me, the "Open With" in the context menu in Mountain Lion has a problem where several entries of the same application appear in the list over time. Sven Fechner [shares how to fix the problem](http://simplicitybliss.com/blog/2012/11/multiple-open-with-entries-in-mac-os-x-finder) by rebuilding the LaunchServices. Fire up the terminal and type:

{% highlight console %}
 /System/Library/Frameworks/CoreServices.framework/Frameworks/LaunchServices.framework/Support/lsregister -kill -r -domain local -domain system -domain user
{% endhighlight %}

As usual, run terminal commands at your own risk.