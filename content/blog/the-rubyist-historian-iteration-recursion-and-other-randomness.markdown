---
date: 2011-01-08T14:50:41Z
categories:
- programming
- ruby
series: "Rubyist Historian"
title: 'The Rubyist Historian: Randomness'
url: /2011/01/08/the-rubyist-historian-iteration-recursion-and-other-randomness/
wordpress_id: 859
wordpress_url: http://www.jasonheppler.org/?p=859
---

We're entering the final leg of our journey.  We've covered a lot of topics in the last few sections, but I just have a couple of things to touch on before we move on to writing our first full program together.

<h4>Constant Variables</h4>

A variable that is in all caps cannot be reassigned anywhere in the program.  For example, if you were writing a program that used Pi in its calculations, you wouldn't want the program (or yourself or another programmer) to accidentally override the value of Pi.  To prevent this, Ruby allows for constant variables.  We would simply write this in all caps:

{{< highlight ruby >}}
PI = 3.141592
{{< / highlight >}}

We can now use the variable anywhere in the program without fear that it will be overridden by another variable.  For example, we could use Pi to calculate the area and circumference of a circle: 

{{< highlight ruby >}}
PI = 3.141592

puts "Enter a radius to calculate: "
radius = gets.chomp.to_f

area = PI * (radius**2)
area = "%.4f" % area
puts "The area of the circle is: #{area}"

circ = 2 * radius * PI
circ = "%.4f" % circ
puts "The circumference of the circle is: #{circ}"
{{< / highlight >}}

<h4>External Libraries</h4>

In the last section we talked about modules and the ability to avoid namespace conflicts.  The other great thing about modules is there are literally thousands of modules that exist outside the Ruby system, written and (theoretically) tested by other programmers, but available for your use.  You probably saw an early version of this when we first talked about modules and the use of <code>Trig.rb</code> and <code>Morals.rb</code>.  <strong>Libraries</strong> operate by prefacing the call with <code>require</code> and then tell Ruby what we want included:

{{< highlight ruby >}}
require 'rubygems'
{{< / highlight >}}

How do we know what's available to us as programmers?  By consulting either <a href="http://rubyforge.org/">RubyForge</a> or the <a href="http://raa.ruby-lang.org/">Ruby Application Archive</a> (see <a href="http://www.ruby-lang.org/en/libraries/">Ruby-Lang.org</a> for more). To use the libraries, you'll need to have a copy on your local system.  Many Ruby libraries are conveniently packaged under <a href="http://docs.rubygems.org/">Ruby Gems</a> and provides a standard formate for distributing Ruby programs and libraries.  Follow the <a href="http://www.ruby-lang.org/en/libraries/">instructions on Ruby-Lang.org</a> on how to download and install Ruby Gems.

Perhaps one of the most useful libraries that Prof. Ramsay pointed our class to was the <code><a href="http://deveiate.org/projects/Linguistics/">linguistics</a></code> library:

{{< highlight ruby >}}
# linguistics.rb

require 'rubygems'
require 'linguistics'

# tell linguistics to use English
Linguistics::use( :en )

puts 185934538450.en.numwords
# => one hundred and eighty-five billion, nine hundred and thirty-four million, five hundred and thirty-eight thousand, four hundred and fifty
{{< / highlight >}}

Or maybe you want to know what the plural of "goose" is:

{{< highlight ruby >}}
Linguistics::use( :en )
"goose".en.plural
# => "geese"
{{< / highlight >}}

Or maybe we have an array of farm animals:

{{< highlight ruby >}}
Linguistics::use( :en )
animals = %w{dog cow ox chicken goose goat cow dog rooster llama pig goat dog cat cat dog cow goat goose goose ox alpaca}
puts "The farm has: " + animals.en.conjunction
{{< / highlight >}}

This will print: 

{{< highlight ruby >}}
The farm has: four dogs, three cows, three goats, two oxen, two geese, two cats, a chicken, a rooster, a llama, a pig, and an alpaca
{{< / highlight >}}

You can <a href="http://deveiate.org/projects/Linguistics/wiki/English">do a lot</a> with <code>linguistics</code>.

Choose your external libraries carefully, but also don't reinvent the wheel if you can avoid it. Don't be afraid of scrapping an entire program or salvaging good code and throwing away the rest. In my experience, programming contains its headaches -- there will be failure, but there's always a learning opportunity in failure.

<h4>Commenting</h4>
Comment your code and comment it well.  We've already seen some of this in Ruby.  Commenting a single line in Ruby starts with a <code>#</code>.  But we can also write multi-line comments by putting our text between <code>=begin</code> and <code>=end</code>.  

{{< highlight ruby >}}
# this is a single line comment

=begin
Multi-line comment

And another

Yet another
=end
{{< / highlight >}}

I frequently use single line comments for explaining what chunks of code are doing, while multi-line commenting is often useful for removing parts of code without actually deleting it.  This makes debugging much easier.  Be sure to use your commenting wisely by explaining what the code doesn't tell you.  When you define functions or classes or variables, it should be fairly clear what's going on.  But commenting on why you made the choices you made that will help you or another programmer better understand the code is worth including.  Remember: programming should be as much about readability as it is about its functionality.  Comment even if its code only you will be seeing.

<h4>Plan Ahead</h4>
I read somewhere recently that code is the crystallization of human thought (if I can find the comment, I'll attribute it).  Plan ahead in the programs you write, make sure the intent is clear, explain how you expect the code to work.  Diagram! Design mockups! Some of my best tools aren't digital: I keep a permanent marker and stack of paper handy for sketching out ideas.

<h4>Backup!</h4>
Keep backups of multiple versions.  Better yet, place your stuff under version control like Subversion or Github. 

<h4>Additional Resources</h4>
Now that you have the basics, you might want to learn more and start creating awesome stuff for the Internet.  Here are some additional resources to learn more about Ruby and other languages.

<strong>General Resources</strong>
<ul>
<li><a href="https://developer.mozilla.org/en/Web_Development">Mozilla Web Development Resources</a></li>
<li><a href="http://www.reddit.com/r/carlhprogramming">CarlHProgramming Lessons</a> on Reddit</li>
<li><a href="http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00-introduction-to-computer-science-and-programming-fall-2008/">MIT OpenCourseWare's Introduction to Computer Science and Programming</a></li>
</ul>

<strong>Ruby / Ruby on Rails</strong>
<ul>
<li><a href="http://pragprog.com/titles/rails3/agile-web-development-with-rails">Agile Web Development with Rails</a></li>
<li><a href="http://railsforzombies.org/">Rails for Zombies</a></li>
<li><a href="http://rubyonrails.org/screencasts">RubyOnRails.org's screencasts</a></li>
<li><a href="http://www.amazon.com/Programming-Ruby-1-9-Pragmatic-Programmers/dp/1934356085/ref=sr_1_1?ie=UTF8&qid=1296332983&sr=8-1">The Pragmatic Guide to Programming Ruby 1.9</a></li>
<li><a href="http://mislav.uniqpath.com/poignant-guide/book/">why's Poignant Guide to Ruby</a></li>
</ul>

<strong>JavaScript</strong>
<ul>
<li><a href="http://www.amazon.com/gp/product/0596101996?ie=UTF8&tag=gmgamzn-20&linkCode=as2&camp=1789&creative=390957&creativeASIN=0596101996">JavaScript: The Definitive Guide</a></li>
<li><a href="http://javascriptweblog.wordpress.com/">JavaScript, JavaScript</a> blog by Angus Croll</li>
<li><a href="http://ejohn.org/apps/learn/">Learn Advanced Javascript</a></li>
<li>Libraries like <a href="http://jquery.com/">jQuery</a>, <a href="http://dojotoolkit.org/">Dojo</a>, <a href="http://mootools.net/">MooTools</a>, and <a href="http://developer.yahoo.com/yui/">Yui</a>.</li>
</ul>

<strong>PHP</strong>
<ul>
<li>The official <a href="http://us.php.net/manual/en/index.php">PHP Manual </a></li>
<li>Zend offers <a href="http://devzone.zend.com/article/627">PHP for the Absolute Beginner</a></li>
</ul>

<strong>Mobile App Development</strong>
<ul>
<li><a href="http://itunes.apple.com/WebObjects/MZStore.woa/wa/viewPodcast?id=384233225">Stanford's iPhone Application Development</a></li>
<li><a href="http://developer.android.com/index.html">Android Developer</a> site</li>
</ul> 

Next up, we're writing a program together.  We're going to build a word frequency generator and begin working with the web.

<em>Visit the Rubyist Historian <a href="http://www.jasonheppler.org/the-rubyist-historian-the-series.html">Table of Contents</a> for more sections, and check out the <a href="https://github.com/hepplerj/rubyist-historian">Github repository</a> for an archive of all the code examples.</em>

<em>See something that's wrong?  Examples that don't work?  Explanations that are unclear or confusing?  Embarrassing typographic errors?  Drop me an email at jason.heppler+feedback at gmail and I'll fix things right up!</em>

<em>Topic structure, examples, and explanations for the Rubyist Historian are inspired by, credited to, and drawn from Stephen Ramsay and his course Electronic Text.</em>
