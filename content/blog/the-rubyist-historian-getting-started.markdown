---
date: 2010-12-29T07:30:49Z
categories:
- programming
- ruby
series: "Rubyist Historian"
title: 'The Rubyist Historian: Getting Started'
url: /2010/12/29/the-rubyist-historian-getting-started/
wordpress_id: 545
wordpress_url: http://www.jasonheppler.org/?p=545
---

The purpose of this ebook is to provide a brief overview of the Ruby programming language and consider ways Ruby (or any other programming language) can be applied to the day-to-day operations of humanities scholars.  Once you complete this book, you should have a good understanding of Ruby basics, be able to complete basic tasks with Ruby, and hopefully leave with a solid basis that will allow you to continue learning.  <!--more-->

The best way to learn Ruby is not by reading this book.  The best way to learn any programming language is by hands-on interaction.  As you read through the lessons and exercises, I encourage you to write the programs in your own text editor and run them; figure out how things fit together, try changing things in the program, learn what those changes break or improve and understand the reason behind it.  Some exercises in this book may seem trivial, others quite complex.  My goal is to provide a foundation to help those new to programming (or even those with basic or advanced experience) become comfortable with programming. And don't stop here. I'm barely touching the surface of what can be done with Ruby. I'll point out some additional resources to encourage the burgeoning Ruby enthusiast inside of you as we go along.

Before going any further, I want to thank <a href="http://english.unl.edu/faculty/profs/sramsay.html">Prof. Stephen Ramsay</a> at the University of Nebraska for being the inspiration for this series. The structure of these posts, the topics of discussion, and some of the examples are directly correlated with his course I took in the Fall of 2010, ENGL 4/878: Electronic Text. Thanks, Steve, for encouraging the hacker in all of us.

<h4>Why Ruby?</h4>
So why am I writing about Ruby? Why not some of the other languages I know, such as Python? Or web language like PHP?  I'm not suggesting here that Ruby is "the best" language but rather I hope to briefly sketch out the reasons why I think Ruby works as a beginner programming language.

All programming languages, like any foreign language, necessarily contain a learning curve.  For example, we could compare PHP with Ruby: they have similar structures, syntaxes, and the like, but PHP sometimes throws in syntaxes that require careful distinctions (the difference between <code>sprintf</code> and <code>printf</code>).  I believe that simplicity in the syntax of a language makes a huge difference in beginning programmers to grasp concepts.  I also greatly appreciate Ruby's simplicity.  I'm going to jump slightly ahead for the sake of making a comparison.  Let us say we wanted to create an array of authors for a bibliographic program.  In PHP, you might write:

{{< highlight php >}}
$authors = array("Hemingway" => 3, "Dickinson" => 1, "Whitman" => 2);
$keys = array_keys($authors);
sort($keys);
$sorted = array_slice($keys, 0, 3);
{{< / highlight >}}

We can achieve the same thing in Ruby much more simply:

{{< highlight ruby >}}
authors = { "Hemingway" => 3, "Dickinson" => 1, "Whitman" => 2 }
sorted = authors.keys().sort().slice(0,3)
{{< / highlight >}}

Don't worry so much here about what exactly is going on, we'll get to that later.  But notice how much easier this is to read.  This has something to do with Ruby being a pure OOP (object-oriented programming) language versus PHP's bolt-on functionality.  The result is Ruby code that is much more readable.  But we're getting ahead of ourselves.  The point here is to illustrate the simplicity of the Ruby language.

Ruby also handles blocks well.  Once again, lets compare PHP and Ruby.  Imagine we wanted to sort a list of authors.  In PHP, we would write:

{{< highlight php >}}
function sort_authors_by_count($a, $b)
  {
      if($a -> counts == $b -> counts)
      {
          return 0;
      }
      return($a -> counts > $b -> counts) ? +1 : -1;
  }

  usort($authors, "sort_authors_by_count");
{{< / highlight >}}

Ruby blocks are chunks of code between <code>do . . . end</code>.  The Ruby syntax would look like this:

{{< highlight ruby >}}
authors.sort do |a, b|
      a.counts <=> b.counts
end
{{< / highlight >}}

Once again, Ruby is much simpler.  Even if you're not exactly sure what is happening, it is much easier to look up the Ruby syntax of <code><=></code> rather than try and decipher <code>? +1 : -1</code>.

Finally, everything in Ruby is an object.  Ruby was designed as an object-oriented language, which makes writing programs much easier to create.  Having everything as an object also makes code easier to handle.  There's no need to check and see if something is an object and execute methods upon it.  You can simply execute a method.  Just as everything is an object, the results of manipulations on an object are also objects.  There will be more on this later.

We could also ask a broader question, related to the first: why program? Why should historians take the time to learn to program? My answer is in line with Douglas Rushkoff's general warning: <a href="http://www.orbooks.com/our-books/program/">program or be programmed</a>.  Using tools developed by others puts you at their mercy.  Much of our scholarly lives have already become digital: our sources are in digital form, we write in word processors, we communicate through e-mail and Twitter, we place lecture notes on Blackboard, we extend classrooms with blogs.  We use these tools without really understanding how they do what they do.  I'm offering a glimpse into this world and hopefully equipping you with a set of tools that will be readily useful in your scholarly work.

Wayne Graham has an <a href="http://www.scholarslab.org/slab-code/why-ruby/">entire list</a> of why Ruby makes a great beginner language that I would also recommend checking out.

<h4>The Setup</h4>

I'm writing this for people who have access to a UNIX environment.  If you are on Linux or Mac, you have this accessible to you already: simply fire up the terminal and you're ready to go.  Ruby comes preinstalled on most Linux distributions and on Mac OSX 10.5+.  On Windows, you'll want to download Cygwin, a UNIX-like environment for Microsoft Windows. UPDATE: Reader Gordon Thiesfeld recommends Windows users check out <a href="http://rubyinstaller.org/">RubyInstaller</a> over Cygwin.

You'll also need a good text editor that you know your way around in.  I work almost entirely in vim (or mvim).  You might check out emacs or nano, or do your programming outside the terminal using TextMate (Mac), gEdit (Linux), or Notepad++ (Windows), or any other number of text editors.  I would encourage you to find an editor that handles syntax highlighting, if only for making the code easier to read. And <a href="http://xkcd.com/378/">get ready for some battles</a>.

You could also set up an IDE, or integrated development environment.  I would follow the steps in William Turkel's [The Programming Historian](http://niche-canada.org/programming-historian) to install Komodo Edit (but ignore the extensions for Firefox), with a few changes for the appropriate programming language.  I can also highly recommend NetBeans as a really useful IDE system if you prefer this route.  I won't be going through that setup here -- if you really want the instructions, drop me an email.

<h4>Our First Program</h4>

Let's get started!  It is traditional to start programming in a new language by writing something that says "hello world" and terminates.  The language we are using is interpreted (as opposed to compiled), meaning that a special computer program known as an interpreter reads the instructions from Ruby and then runs the program.  There are two ways to run Ruby.  The first is by running Ruby interactively in the shell prompt.  Simply type <code>irb</code> into the command line to open the Ruby shell.  Simply type in Ruby code and it will return the value of expressions under evaluation.  Exit <code>irb</code> by typing <code>exit</code> or using the end-of-file character on your OS (normally Ctrl+D or Ctrl+Z).  Alternatively, you can write these programs as files to your local disk or to a server and run them through the terminal.  This is the preferred method for writing Ruby programs.  In my case, I'll be running these programs locally through the terminal.  I'll demonstrate briefly how <code>irb</code> works and looks, but all subsequent examples and programs will be written as files.

Continuing with our comparative approach, generating "hello world" is a fairly straightforward process in many languages.  In PHP, it looks like this:

{{< highlight php >}}
print("Hello world");
{{< / highlight >}}

Ruby operates similarly:

{{< highlight ruby >}}
puts "Hello world"
{{< / highlight >}}

If you're running this in the interactive Ruby shell, you should see something like this:

{{< highlight ruby >}}
irb(main):001:0> puts "Hello world"
Hello world
=> nil
{{< / highlight >}}

If you're running Ruby files off a server or local disk, save the file as <code>hello.rb</code> and in the terminal run:

{{< highlight console >}}
ruby hello.rb
{{< / highlight >}}

Note the lack of parens in my <code>puts</code> function.  Parentheses are absolutely accepted Ruby syntax, but you must make a choice between a parens or a space. <code>puts("Hello world")</code> and <code>puts "Hello world"</code> are the same thing, but you cannot do <code>puts ("Hello world")</code>. I tend to leave out parentheses unless I'm passing variables through a method.

It is common practice to also include the "shebang" notation (<code>#!</code>) in the first line of the program, followed by introductory comments that usually include the name of the file, a description of what the program does, who wrote it and for what, and when it was last modified.  Commented text is marked by <code>#</code>.  For example, a "hello world" program might look like this:

{{< highlight ruby >}}
#!/usr/bin/ruby -w

# helloworld.rb
#
# Basic "hello world" program
#
# Written by Jason A. Heppler for
# The Rubyist Historian ebook project
#
# Last modified: Tue Dec 28 21:21:43 -0600 2010

puts "Hello, world!"
puts "I became a Ruby programmer on #{Time.now}"
{{< / highlight >}}

Running <code>ruby helloworld.rb</code> in the terminal will return:

{{< highlight console >}}
Hello, world!
I became a Ruby programmer on Tue Dec 28 21:21:43 -0600 2010
{{< / highlight >}}

And there you have it, your first Ruby program!  But let's make things a little more interesting. Instead of just pushing static data, let's have Ruby work with data we give it through what's known as <a href="http://en.wikipedia.org/wiki/Standard_streams">standard streams</a>.  For this we're going to use the methods gets() and chomp():

{{< highlight ruby >}}
puts "Please enter your name: "
name = gets().chomp()

puts "I, #{name}, began learning Ruby code on #{Time.now}."
{{< / highlight >}}

This will print to the screen:

{{< highlight console >}}
I, Jason, began learning Ruby code on Tue Dec 28 21:21:43 -0600 2010.
{{< / highlight >}}

Note the new notation <code>#{}</code>.  By asking for an input we are using what is called <strong>interpolation</strong>, or passing a variable into a string.  Variables are enclosed in <code>#{<em>var</em>}</code>. Take note that strings can be marked off by single or double quotes, but there is a distinction between their use.  In order to interpolate, you must use double quotes.  Single quotes will not allow interpolation, which has to do with Ruby attempting to optimize the code and [redacted boring technical jargon].  

There you go! Your first Ruby program that works with user data. Up next, we're tackling methods and classes.

<h4>Additional Resources</h4>
<ul>
<li><a href="http://www.ruby-lang.org/en/documentation/quickstart/">Ruby in Twenty Minutes</a></li>
<li><a href="http://patcanella.com/post/2134954107/understanding-ruby-basics">Understanding Ruby Basics</a></li>
</ul>

<em>Visit the Rubyist Historian <a href="http://www.jasonheppler.org/the-rubyist-historian-the-series.html">Table of Contents</a> for more sections, and check out the <a href="https://github.com/hepplerj/rubyist-historian">Github repository</a> for an archive of all the code examples.</em>

<em>See something that's wrong?  Examples that don't work?  Explanations that are unclear or confusing?  Embarrassing typographic errors?  Drop me an email at jason.heppler+feedback at gmail and I'll fix things right up!</em>

<em>Topic structure, examples, and explanations for the Rubyist Historian are inspired by, credited to, and drawn from Stephen Ramsay and his course Electronic Text.</em>
