---
date: 2011-01-07T14:16:47Z
categories:
- programming
- ruby
series: "Rubyist Historian"
title: 'The Rubyist Historian: Working With Advanced Data'
url: /2011/01/07/the-rubyist-historian-working-with-advanced-data/
wordpress_id: 1090
wordpress_url: http://www.jasonheppler.org/?p=1090
---

In this section, a whole new world of programing is about to open before your eyes. So far, we've been working with simple data inputs through the use of .gets(), but the method only allows us to call upon a single data entry.  What would be infinitely more useful would be the ability to read files outside the program. We can do this with Ruby's <code>File</code> class.<!--more-->

<h4>Input/Output</h4>

When working with files, you have some options about how you want to access them.  These are called <strong>mode specifiers</strong> and describes read/write characteristics of the file: <code> r+</code> (read/write text, or append data), <code>r</code> (read only), <code>w</code> (write only), and <code>w+</code> (read/write, but destructive because it destroys whatever existed in the file previously).

Imagine we have a primary source document we would like to read.  You can <a href="https://github.com/hepplerj/rubyist-historian/blob/master/04-ArraysHashes/letter.txt">download this file</a> from Github to your local disk for something to work with (this is a letter from a Civil War soldier).  We're going to ask Ruby to read the file and print the results to the screen:

{{< highlight ruby >}}
File.open("letter.txt", "r") do |file|
    lines = file.readlines
    puts lines
end
{{< / highlight >}}

We could also print out specific lines of the array:

{{< highlight ruby >}}
File.open("letter.txt", "r") do |file|  # open the file and assign to variable 'file'
    
    line_array = file.readlines

    puts line_array[3]
    puts line_array[5]
    puts line_array[9]
end

# Since we used the "r" specifier, Ruby will automatically close the
# file.  Otherwise, you will need to exit the file using file.close().
{{< / highlight >}}

The program will print the specified lines to the screen.

We can also write to files using <code>File.new</code>:

{{< highlight ruby >}}
file = File.new("my_file.txt", "w")

file.write("Hello, world!")
file.write("\n")
file.write("I'm learning Ruby!")

file.close()
{{< / highlight >}}

After running the program. it will will create the file <code>my_file</code> in the directory you are working in.  The file should contain the contents we wrote.

You now know how to read and write files.  A whole new world of programming should be opening before you.

<h4>Additional Resources</h4>
<ul>
<li><a href="http://www.codingfriends.com/index.php/2009/07/28/readwrite-files-3/">Read/Write Files</a>, Coding Friends</li>
<li><a href="http://www.techotopia.com/index.php/Working_with_Files_in_Ruby">Working with Files in Ruby</a>, Techtopia</li>
<li><a href="Ruby File Manipulation Basics">Ruby File Manipulation Basics</a>, Ben Woodall</li>
</ul>

<em>Visit the Rubyist Historian <a href="http://www.jasonheppler.org/the-rubyist-historian-the-series.html">Table of Contents</a> for more sections, and check out the <a href="https://github.com/hepplerj/rubyist-historian">Github repository</a> for an archive of all the code examples.</em>

<em>See something that's wrong?  Examples that don't work?  Explanations that are unclear or confusing?  Embarrassing typographic errors?  Drop me an email at jason.heppler+feedback at gmail and I'll fix things right up!</em>

<em>Topic structure, examples, and explanations for the Rubyist Historian are inspired by, credited to, and drawn from Stephen Ramsay and his course Electronic Text.</em>
