---
date: 2012-10-12T14:17:15Z
categories:
- programming
- ruby
title: Better Web Scraping with Nokogiri
url: /2012/10/12/better-web-scraping-with-nokogiri/
---

When I wrote [The Rubyist Historian](http://hepplerj.github.com/rubyist-historian/) a year ago, I was still getting familiar with the ins and outs of Ruby (and, truth be told, I am still doing so -- it will [take a long time before](http://norvig.com/21-days.html) I, if ever, call myself a programmer). Looking back on the word count program I wrote at the end, I've realized a big error: I used regular expressions to parse a webpage.

There's a much more effective way to do it: with the Ruby library [Nokogiri](http://nokogiri.org/). Nokogiri is built for HTML, XML, and SAX parsing and includes features that allows you to search for specific CSS3 or XPath selectors. Install the package through Ruby gems (<code>sudo gem install nokogiri</code>) and you'll be good to go.

Let's say I wanted to do some text analysis on the books written by William F. Cody. On the [Cody Archive](http://www.codyarchive.org), we currently have three of these books digitized, edited, and ready to go. They're encoded with TEI standards and include metadata and information you might want for more sophisticated types of analysis. But to work with them, let's say I'd like to have three clean copies of the text on my local machine without any markup included -- just plain, clean, flat text files. Using Nokogiri, the process is pretty straightforward.

Fire up your text editor of choice, and write:

{{< highlight ruby >}}
#!/usr/bin/env ruby

# Name: grabtext.rb
# By: Jason Heppler
# Last Modified Fri Oct 12 14:43:58 2012
#
# This script uses Nokogiri to grab the text only between the 'text' tag
# in XML files. Modify as you need. 
# Usage: ./grabtext.rb path/to/file > output.txt

require 'rubygems'
require 'nokogiri'
require 'open-uri'

doc = Nokogiri::HTML(open(ARGV[0]))

doc.search('text').each do |link|
    puts link.content
end
{{< / highlight >}}

Now I can run it from the command line (don't forget to <code>chmod</code> the script):

{{< highlight text >}}
$ ./grabtext.rb http://codyarchive.org/texts/wfc.bks00007.xml > autobiography.txt
{{< / highlight >}}

For your own purposes, you may have to make some edits to the code. In my case, I'm parsing an XML file that includes the tag <code>text</code> and, therefore, I tell Nokogiri to look for that with <code>doc.search('text')</code>. [The XML file](http://codyarchive.org/texts/wfc.bks00007.xml) looks something like this:

{{< highlight xml >}}
<TEI xml:id="wfc.bks00007" xmlns="http://www.tei-c.org/ns/1.0">
<teiHeader>
...
</teiHeader>
<text> <!-- the script grabs the text from here... -->
<front>
<pb facs="wfc.bks00007.006"/>
<div1>
<figure n="illustration">
<p>Yours Sincerely, W. F. Cody</p>
</figure>
</div1>
<pb facs="wfc.bks00007.007"/>
<titlePage>
<docTitle>
<titlePart>THE LIFE OF
<lb/>
HON. WILLIAM F. CODY
<lb/>
KNOWN AS
<lb/>
BUFFALO BILL

...

<p>After a successful tour of six weeks on the Pacific Slope, thus ending the season of 1878-79, I am at my home at North Platte, Nebraska, for the summer; and thus ends the account of my career as far as it has gone.</p>
<ab>THE END.</ab>
</div1>
</body>
</text> <!-- ...down to here -->
</TEI>
{{< / highlight >}}

I don't want any of the TEI header information, so using Nokogiri I can grab everything between the <code>text</code> tag. This leaves me with the raw text of the XML file without any of the markup or header information.

I'm becoming more and more convinced that at least half of the work I do in digital history is cleaning up and preparing data so it can be usable. I find this little script to be handy for doing a quick grab of a site's contents, and because Nokogiri is incredibly powerful it can chug through web pages that aren't well-formed or valid markup. It's faster than <code>wget</code> and, unlike <code>wget</code>, leaves me with plain text that I can start to work with right away.

**UPDATE**: The program can be simplified slightly by changing the loop:
{{< highlight ruby >}}
#!/usr/bin/env ruby

require 'rubygems'
require 'nokogiri'
require 'open-uri'

doc = Nokogiri::HTML(open(ARGV[0])) #input
doc.search('text').each { |link| puts link.content } #plain text output
{{< / highlight >}}
