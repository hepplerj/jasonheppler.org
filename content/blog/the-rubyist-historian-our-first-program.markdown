---
date: 2011-01-12T10:50:41Z
categories:
- programming
- ruby
series: "Rubyist Historian"
title: 'The Rubyist Historian: Our First Program'
url: /2011/01/12/the-rubyist-historian-our-first-program/
wordpress_id: 770
---

"Okay, Jason," you're asking yourself, "I'm tired of saying hello and counting numbers and doing mathematics. How can Ruby be applied to my work as a humanities scholar?"  I'm thrilled you asked! Because today, we're writing our first full program together.  I'll warn you, this might be a long read and a lot of writing.  But I'm hoping by doing this we experience the process of designing, planning, writing code, optimizing code, debugging, and finally using the program. 

We're going to write a program based off a homework example we completed in Prof. Steve Ramsay's class (To Steve's future students: don't copy this program. Your professor will know). We're going to take a word frequency generator and read a file off the Internet, strips the HTML or XML tagging out of the file, generate a word frequency, and print the frequency as a new HTML file. A lot will be happening, so I hope I can carefully and concisely explain the details of our program as we go along. 

One potential way to write our word frequency program is as such: 

{{< highlight ruby >}}
# frequency.rb

def separation(string)
    string().downcase().scan(/[\w']+/) # downcase and strip out white space
end

def word_count(elements)
    number = Hash.new(0)
    for word in elements
        number[word] += 1
    end

    number

end

text = File.read("text.txt")
elements = separation(text)
number = word_count(elements)
sorted_list = number.sort_by { |word, count| count }

most_to_fewest.each { |word, count| puts "#{count}  #{word}" }
{{< / highlight >}}

Our program takes in a file (<code>text</code>) and sends the file into our <code>separation</code> method to convert everything into a string, downcase the words for normalization, and scan for whitespace (hence the regex code <code>/[\w']+/</code>).  Once the program read the file and converted the text into individual words, it sends the file into our <code>word_count</code> method and enters the file into a hash.  Inside of <code>word_count</code>, the file counts the words and for each instance of a word adds an increment until the file has finished processing.  We return number and call the <code>sort</code> method and assign sort values (<code>word</code> and <code>count</code>) and print our results.

There are certainly several ways to achieve the results we're after.  If you have your own word frequency generator that you're comfortable working with, go ahead and use it.  I'll be using my own code:

{{< highlight ruby >}}
# frequency.rb

filename = File.new("text.txt", "r").read().downcase().scan(/[\w']+/)
frequency = Hash.new(0)
filename.each { |word| frequency[word] += 1 }
frequency.sort_by { |x,y| y }.reverse().each { |w,f| puts "#{f}, #{w}" }
{{< / highlight >}}

You should now have a working word frequency generator.  However, we want to be able to read HTML files from the web; this will make the program much more useful. To do this we're going to import a Ruby library called <code>open-uri</code> and use its methods to fetch web data. Let's first look at how we achieve the ability to have Ruby read web files before we integrate it into our frequency program.  I'll be using an XML newspaper file from one of my digital history projects -- feel free to use the same or select your own file:

{{< highlight ruby >}}
require 'open-uri'

uri_file = open("http://www.framingredpower.org/archive/newspapers/frp.wapo.19721102.xml").read()

puts uri_file
{{< / highlight >}}

The above file will read the URL and print to the screen. But you'll notice something that will inconvenience us if we try and generate a frequency: the output includes the HTML tags.  We need to get rid of all that junk.  There are a couple of ways to do that, but we're going to return to our good friend regex to look for HTML tags and strip out everything we don't want.  We'll use the <code>gsub</code> method and <a href="http://etext.lib.virginia.edu/services/helpsheets/unix/regex.html">regular expressions</a> to substitute HTML tags with empty lines.  We'll also use it to strip out punctuation marks and other HTML formatting (such as <code>&quot;</code>).  Make a small edit to your file:

{{< highlight ruby >}}
require 'open-uri'

# read a URL, strip out HTML tags, and assign the file to a variable
uri_file = open("http://www.framingredpower.org/archive/newspapers/frp.wapo.19721102.xml").read().gsub(/<\/?[^>]*>/, "").gsub(/&quot;*/, "\""/)

puts uri_file
{{< / highlight >}}

You should now be seeing just the text of the webpage we are having Ruby read.  Pretty cool, huh?  But we're not quite where we want to be yet.  Let's also get rid of punctuation and numbers as well as downcase all the text so we have a consistent word base:

{{< highlight ruby >}}
uri_file = open("http://www.framingredpower.org/archive/newspapers/frp.wapo.19721102.xml").read().gsub(/<\/?[^>]*>/, "").gsub(/&quot;*/, "").gsub(/[0-9]*/, "").gsub(/[(,?!\'":.)]/, '').downcase

puts uri_file
{{< / highlight >}}

Now let's add this to our frequency generator.  

{{< highlight ruby >}}
require 'open-uri'

uri_file = open("http://www.framingredpower.org/archive/newspapers/frp.wapo.19721102.xml").read.gsub(/<\/?[^>]*>/, "").gsub(/<\/?[^>]*>/, "").gsub(/&quot;*/, "").gsub(/[0-9]*/, "").gsub(/[(,?!\'":.)]/, '').downcase

filename = File.new("#{uri_file}","r").read.downcase.scan(/[\w']+/)
frequency = Hash.new(0)
filename.each { |word| frequency[word] += 1 }
frequency.sort_by { |x,y| y }.reverse.each { |w,f| puts "#{f}, #{w}" }
{{< / highlight >}}

Ok, run <code>ruby frequency.rb</code> and we should . . . wait, what happened?  If you run this, you should get an error.  Time to debug!

The issue is we're not reading a file, we're reading the contents of a variable.  So, there's no need for the <code>File.new</code> class.  We can get rid of that.  We also need to update the <code>each</code> method to read our URL variable:

{{< highlight ruby >}}
require 'open-uri'

uri_file = open("http://www.framingredpower.org/archive/newspapers/frp.wapo.19721102.xml").read.gsub(/<\/?[^>]*>/, "").gsub(/&quot;*/, "").gsub(/[0-9]*/, "").gsub(/[(,?!\'":.)]/, '').downcase

frequency = Hash.new(0)
uri_file.each { |word| frequency[word] += 1 }
frequency.sort_by { |x,y| y }.reverse.each { |w,f| puts "#{f}, #{w}" }
{{< / highlight >}}

All right, now we can run this. Type in <code>ruby frequency.rb</code> and . . . whoh.  Something still isn't right.  You should be outputting some sort of frequency counter, but the program is counting lines rather than individual words.  We forgot to split the words apart.  So, we'll add the <code>split</code> method:

{{< highlight ruby >}}
require 'open-uri'

uri_file = open("http://www.framingredpower.org/archive/newspapers/frp.wapo.19721102.xml").read.gsub(/<\/?[^>]*>/, "").gsub(/&quot;*/, "").gsub(/[0-9]*/, "").gsub(/[(,?!\'":.)]/, '').downcase.split(' ')

frequency = Hash.new(0)
uri_file.each { |word| frequency[word] += 1 }
frequency.sort_by { |x,y| y }.reverse().each { |w,f| puts "#{f}, #{w}" }
{{< / highlight >}}

Before we move on, let's clean things up a bit.  Let's move our URL reader into a method and rewrite some code.  The method should look like this:

{{< highlight ruby >}}
def readFile(url)
    
    # Strip out HTML tags, alphanumeric characters, and punctuation, lower-case 
    # all words, and split the words apart 
    uri_file = open(url).read().gsub(/<\/?[^>]*>/, "").gsub(/&quot;*/, "").gsub(/[0-9]*/, "").gsub(/[(,?!\'":.)]/, '').downcase.split(' ')

    return uri_file

end
{{< / highlight >}}

Now we can rewrite the URL input as:

{{< highlight ruby >}}
url = "http://www.framingredpower.org/archive/newspapers/frp.wapo.19721102.xml"
uri_file = readFile(url)
{{< / highlight >}}

Your file should now look similar to this:

{{< highlight ruby >}}
require 'open-uri'

def readFile(url)
    
    # Strip out HTML tags, alphanumeric characters, and punctuation, lower-case 
    # all words, and split the words apart 
    uri_file = open(url).read.gsub(/<\/?[^>]*>/, "").gsub(/&quot;*/, "").gsub(/[0-9]*/, "").gsub(/[(,?!\'""':.)]/, '').downcase.split(' ')

    return uri_file

end

# create a dictionary of n-grams

url = "http://www.framingredpower.org/archive/newspapers/frp.wapo.19721102.xml"
uri_file = readFile(url)

#print uri_file

frequency = Hash.new(0)
uri_file.each { |word| frequency[word] += 1 }
frequency.sort_by { |x,y| y }.reverse.each { |w,f| puts "#{f}, #{w}" }
{{< / highlight >}}

We're also going to add a new method of inputting files by using Ruby's ARGV method.  ARGV is a global array that allows us to pass command-line arguments after the filename.  So, we'll rewrite the code above a bit:

{{< highlight ruby >}}
require 'open-uri'

def readFile(url)
    
    # Strip out HTML tags, alphanumeric characters, and punctuation, lower-case 
    # all words, and split the words apart 
    uri_file = open(url).read.gsub(/<\/?[^>]*>/, "").gsub(/&quot;*/, "").gsub(/[0-9]*/, "").gsub(/[(,?!\'""':.)]/, '').downcase.split(' ')

    return uri_file

end

# create a dictionary of n-grams

url = ARGV[0]
uri_file = readFile(url)

#print uri_file

frequency = Hash.new(0)
uri_file.each { |word| frequency[word] += 1 }
frequency.sort_by { |x,y| y }.reverse().each { |w,f| puts "#{f}, #{w}" }
{{< / highlight >}}

You should now be able to run <code>ruby frequency.rb http://www.framingredpower.org/archive/newspapers/frp.wapo.19721102.xml</code> in the command line.  And there we have it! A working word frequency generator that can read HTML files or local files.  This may be as far as you want to go, but if you're like me, you'd love to have a program that not only generates frequencies but will also output a file that you can use.  In my case, when doing digital scholarship, I want files that can be read by a browser.  So, we're going to have the frequency list export as HTML.  For this, we'll be bringing back in our <code>File</code> I/O method:

{{< highlight ruby >}}
File.open("output.html", "w") do |output|
        frequency = Hash.new(0)
        uri_file.each { |word| frequency[word] += 1 }
        frequency.sort_by { |x,y| y }.reverse().each do |w,f| 
            output.write "<p>#{f}, #{w}</p>\n"
    end
end
{{< / highlight >}}

Let's also let the user know where the file was exported.  Add to the end of the file:

{{< highlight ruby >}}
puts "\nFile exported to #{Dir.pwd}.\n"
{{< / highlight >}}

So, you're program should now look like:

{{< highlight ruby >}}
require 'open-uri'

def readFile(url)
    
    # Strip out HTML tags, alphanumeric characters, and punctuation, lower-case 
    # all words, and split the words apart 
    uri_file = open(url).read.gsub(/<\/?[^>]*>/, "").gsub(/&quot;*/, "").gsub(/[0-9]*/, "").gsub(/[(,?!\'""':.)]/, '').downcase.split(' ')

    return uri_file

end

# create a dictionary of n-grams

url = ARGV[0]
uri_file = readFile(url)

# print output to HTML file

File.open("output.html", "w") do |output|
        frequency = Hash.new(0)
        uri_file.each { |word| frequency[word] += 1 }
        frequency.sort_by { |x,y| y }.reverse().each do |w,f| 
            output.write "<p>#{f}, #{w}</p>\n"
    end
end

puts "\nFile exported to #{Dir.pwd}.\n"
{{< / highlight >}}

You should now be set to write to the command line <code>ruby frequency.rb http://www.framingredpower.org/archive/newspapers/frp.wapo.19721102.xml</code>, which will compute the frequencies and output the results to an HTML file.

Neat, huh? Except . . . well, perhaps it isn't that useful yet.  I mean, is it really useful for us to know that the word "the" shows up 35 times?  Not really.  In fact, you've probably noticed that the majority of the highest frequencies in the list are common words (this is known as <a href="http://en.wikipedia.org/wiki/Zipf%27s_law">Zipf's Law</a>).  Let's get rid of those.

We'll start by creating an array of common words. Let's also make it a constant variable so we don't have to worry about override problems. Remember that we stripped out punctuation, so we need to maintain the words without apostrophes:

{{< highlight ruby >}}
STOPWORDS = %w{a about above across after again against all am an and any are arent as at be because been before being below between both but by cant cannot could couldnt did didnt do does doesnt doing dont down during each few for form further had hadnt has hasnt have havent having he her here heres hers herself him himself his how i id ill im ive if in into is isnt it its itself lets me more most mustnt my myself my myself no nor not of off on once only or other ought our ours ourselves out over own same shant she should shouldnt so some such than that the their theirs them themselves then there these they this those through to too under until up very was we were what when where which while who why with would you your yours yourself yourselves}
{{< / highlight >}}

Now we'll add this to our <code>readFile</code> method and tell Ruby to remove words that appear in the array:

{{< highlight ruby >}}
require 'open-uri'

STOPWORDS = %w{a about above across after again against all am an and any are arent as at be because been before being below between both but by cant cannot could couldnt did didnt do does doesnt doing dont down during each few for form further had hadnt has hasnt have havent having he her here heres hers herself him himself his how i id ill im ive if in into is isnt it its itself lets me more most mustnt my myself my myself no nor not of off on once only or other ought our ours ourselves out over own same shant she should shouldnt so some such than that the their theirs them themselves then there these they this those through to too under until up very was we were what when where which while who why with would you your yours yourself yourselves}

def readFile(url)
    
    # Strip out HTML tags, alphanumeric characters, and punctuation, lower-case 
    # all words, and split the words apart 
    uri_file = open(url).read.gsub(/<\/?[^>]*>/, "").gsub(/&quot;*/, "").gsub(/[0-9]*/, "").gsub(/[(,?!\'""':.)]/, '').downcase.split(' ') - STOPWORDS
    
    return uri_file

end
{{< / highlight >}}

The program should now remove words that appear inside of the <code>stopwords</code> array.  Now we have something a little more useful to us.  

So, the program in its entirety should now look like:

{{< highlight ruby >}}
#!/usr/bin/ruby -w

# FREQr.rb
#
# Written by Jason A. Heppler
#
# This program is free software.
# You can distribute/modify this program under the terms of
# the GNU Lesser General Public License version 2.1.
# 
# Last Modified: Mon Jan 10 23:15:08 CST 2011

require 'open-uri'

STOPWORDS = %w{a about above across after again against all am an and any are arent as at be because been before being below between both but by cant cannot could couldnt did didnt do does doesnt doing dont down during each few for form further had hadnt has hasnt have havent having he her here heres hers herself him himself his how i id ill im ive if in into is isnt it its itself lets me more most mustnt my myself my myself no nor not of off on once only or other ought our ours ourselves out over own same shant she should shouldnt so some such than that the their theirs them themselves then there these they this those through to too under until up very was we were what when where which while who why with would you your yours yourself yourselves}
            
# Strip out HTML tags, alphanumeric characters, and punctuation, then 
# lower-case all words, split the words apart, and remove stopwords 
def readFile(url)
    
    uri_file = open(url).read.gsub(/<\/?[^>]*>/, "").gsub(/&quot;*/, "").gsub(/[0-9]*/, "").gsub(/[(,?!\'""':.)]/, '').downcase.split(' ') - STOPWORDS
    
    return uri_file

end

# Create a dictionary of n-grams
url = ARGV[0]
uri_file = readFile(url)

# Save output to HTML
File.open("output.html", "w") do |output|
        frequency = Hash.new(0)
        uri_file.each { |word| frequency[word] += 1 }
        frequency.sort_by { |x,y| y }.reverse().each do |w,f| 
            output.write "<p>#{f}, #{w}</p>\n"
    end
end

# Give the user an exported-to message
puts "\nFile exported to #{Dir.pwd}.\n"
{{< / highlight >}}

Simply type in <code>ruby frequency.rb http://www.framingredpower.org/archive/newspapers/frp.wapo.19721102.xml</code> and the program will output an HTML file and confirm the successful completion of the program.  Congrats!  You now have your first full Ruby program. Do some hacking on this program.  Add a function or feature to it or optimize the code and see what you can accomplish.  Perhaps, for example, you want another method so you can output an HTML file that generates keywords in context or a word cloud.  Or, if you're really ambitious, maybe you can learn about <a href="http://rubyonrails.org/">Ruby on Rails</a> and make this program run as a webpage rather than the command line.

If you've stuck through reading <em>The Rubyist Historian</em> to the end, you should now have a working knowledge of the Ruby programming language.  I hope that I've been able to competently explain key concepts and ideas of Ruby.  But we've only touched the surface of Ruby.  There are several resources out there to continue learning about Ruby.  I would start with these:

<ul>
<li><a href="http://mislav.uniqpath.com/poignant-guide/">Why's (Poignant) Guide to Ruby</a></li>
<li><a href="http://www.rubyist.net/~slagell/ruby/">Ruby User's Guide</a></li>
<li><a href="http://www.sapphiresteel.com/The-Little-Book-Of-Ruby">The Little Book of Ruby</a></li>
</ul>

In <a href="http://norvig.com/21-days.html">about ten years</a> you can call yourself a programmer.

<em>Visit the Rubyist Historian <a href="http://www.jasonheppler.org/the-rubyist-historian-the-series.html">Table of Contents</a> for more sections, and check out the <a href="https://github.com/hepplerj/rubyist-historian">Github repository</a> for an archive of all the code examples.</em>

<em>See something that's wrong?  Examples that don't work?  Explanations that are unclear or confusing?  Embarrassing typographic errors?  Drop me an email at jason.heppler+feedback at gmail and I'll fix things right up!</em>

<em>Topic structure, examples, and explanations for the Rubyist Historian are inspired by, credited to, and drawn from Stephen Ramsay and his course Electronic Text.</em>
