---
date: 2010-11-28T10:05:47Z
categories:
- ruby
- programming
- text analysis
title: FREQr, a Command Line Word Frequency Generator
url: /2010/11/28/freqr-a-command-line-word-frequency-generator/
wordpress_id: 498
wordpress_url: http://www.jasonheppler.org/?p=498
---

I wrote this simple Ruby program while enrolled in Prof. Steve Ramsay's Electronic Text course.  I'm releasing it into the wild for anyone that might find it useful.  You'll need to have Ruby installed on your machine to run the program.  Simply pass the program a file name and it will output to the screen a numerically-sorted list of word frequencies.  <!--more-->

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
