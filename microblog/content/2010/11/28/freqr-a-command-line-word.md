---
layout: post
title: "FREQr, a Command Line Word Frequency Generator"
microblog: false
guid: http://jaheppler.micro.blog/2010/11/28/freqr-a-command-line-word/
post_id: 4570887
custom_summary: false
summary: ""
date: 2010-11-28T04:05:47-0600
lastmod: 2025-01-03T19:09:16-0600
type: post
categories:
- "programming"
- "ruby"
- "text analysis"
- "Longform"
url: "/2010/11/28/freqr-a-command-line-word/"
---

I wrote this simple Ruby program while enrolled in Prof. Steve Ramsay's Electronic Text course.  I'm releasing it into the wild for anyone that might find it useful.  You'll need to have Ruby installed on your machine to run the program.  Simply pass the program a file name and it will output to the screen a numerically-sorted list of word frequencies.

{{< highlight ruby >}}
#!/usr/bin/ruby -w

# FREQr.rb
#
# Basic word frequency generator.
#
# Written by Jason Heppler
#
# Last Modified: Wed Nov 3 23:53:52 CDT 2010

# Pass the program a file to open
# e.g., $ ruby freqr.rb poe.txt
filename = File.new(ARGV[0]).read().downcase().scan(/[\w']+/)
frequency = Hash.new(0)
words.each { |word| frequency[word] +=1 }
frequency.sort_by { |x,y| y }.reverse().each{ |w,f| puts "#{f}, #{w}" }
{{< / highlight >}}

If you wish to make changes to the tool or download a copy, you can find it in my <a href="https://github.com/hepplerj/FREQr">Github repository</a>.
