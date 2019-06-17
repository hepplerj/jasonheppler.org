---
date: 2011-01-02T07:30:33Z
categories:
- programming
- ruby
series: "Rubyist Historian"
title: 'The Rubyist Historian: Loops and Control Structures'
url: /2011/01/02/the-rubyist-historian-flow-control/
wordpress_id: 651
wordpress_url: http://www.jasonheppler.org/?p=651
---

Our last segment introduced us to Ruby methods and classes.  This section will introduce you to expressions and loops. Loops are, put simply, a test of whether an expression is true or false. This is the basic way that computer's operate: continue following a set of instructions until the expression becomes true, then end or move on to the next set of instructions.<!--more-->

<h4>while . . . end</h4>

Let's say we needed a program that printed numbers until it reached five.  In this case, we want the program to print a number, evaluate whether that number is equal to five, if not add one and run the program again.  Once the number is equal to five, the program terminates.  We achieve this through the use of the <code>while . . . end</code> loop:

{{< highlight ruby >}}
num = 0

while num < 5
    puts num
    num += 1
end
{{< / highlight >}}

Running <code>ruby loop.rb</code> in the terminal will produce:

{{< highlight console >}}
0
1
2
3
4
{{< / highlight >}}

Note the <code>+=</code> above. This symbol is called an <strong>operator</strong>, which allow us to compare values.  

<strong>Example Operators</strong>
<table border="0" width="100%" cellpadding="3" cellspacing="3">
	<tr>
		<td>==</td>
		<td>Test for equal value.</td>
	</tr>
	<tr>
		<td width="20%"><, <=, >=, ></td>
		<td>Comparison operator for less than, less than or equal, greater than or equal, and grater than</td>
	</tr>
	<tr>
		<td><=></td>
		<td>Returns -1, 0, or +1 depending on whether the receiver is less than, equal to, or greater than its argument.</td>
	</tr>
	<tr>
		<td>-=</td>
		<td>Subtraction operator.</td>
	</tr>
	<tr>
		<td>*=</td>
		<td>Multiplication operator.</td>
	</tr>
        <tr>
		<td>!=</td>
		<td>Not equal to operator.</td>
	</tr>
</table>

<h4>if . . . elsif . . . else</h4>

The <code>if . . . else</code> loop allows us to evaluate several branches of code in the order we write it.  If the first branch is false, the program moves on to the next and the next and so on until the value is true and terminates the program.  We could write a program that evaluates what a user thinks about the quality of a book, for example:

{{< highlight ruby >}}
puts "Enter a rating between one and five: "

# we use .to_i to convert the string to an integer
rank = gets.chomp.to_i

if rank >= 4
    puts "The book was good!"
elsif rank == 3
    puts "The book was so-so."
elsif rank <= 2
    puts "The book stinks."
end
{{< / highlight >}}

Pro Tip: If you get stuck in a loop and the terminal won't quit printing to the screen, hit CTRL+C.  CTRL+C tells the terminal to stop whatever it's working on.

<h4>Iterators</h4>

So far we've looked at some pretty primitive versions of loop constructs.  Unlike Java, C, and C++, Ruby doesn't have a <code>for</code> loop.  Instead, it uses a less error-prone, built-in class functionality called <strong>iterators</strong>.  Let's say you just finished writing a section of a chapter and wanted some applause for your effort.  We could write a program to do that for you:

{{< highlight ruby >}}
3.times do 
   print "Clap! "
end
{{< / highlight >}}

Run the program from the terminal and it will produce:

{{< highlight console >}}
Clap! Clap! Clap!
{{< / highlight >}}

There, now you and your computer just shared a special moment.  A pretty simple block of code, right? You could read what the program is doing even if you didn't understand a single line of Ruby: print "Clap!" three times, no more, no less.  Simplicity.

We can also use iterators to loop through ranges.  Let's return to our number counter example above and write an iterator to print numbers between one and five:

{{< highlight ruby >}}
0.upto(5) do |x|
    print x, " "
end
{{< / highlight >}}

The most basic iterator in Ruby is simply <code>loop</code>, which will run the block forever until you break out of the loop:

{{< highlight ruby >}}
loop do
    print "85098357-198058903028340jj23u0280234itj3"
    # it's just like the Matrix!
end
{{< / highlight >}}

Hit CTRL+C to break the loop.

<h4>Blocks</h4>

Blocks contains a chunk of code normally enclosed between braces or within <code>do</code> and <code>end</code>.  The prevailing style is to use the braces for blocks that fit on a single line and <code>do . . . end</code> for multiple lines. Blocks are called only after the invocation of some method.  We could, for example, write a program that sums the squares of numbers inside of an array:

{{< highlight ruby >}}
sum = 0

[2, 4, 6, 8].each do |value|
    square = value * value
    sum += square
end 

puts sum
{{< / highlight >}}

In this example, the block is being called by the <code>each</code> method once for each element in the array.  The element passed as the parameter is <code>value</code>.  Note also that although <code>sum</code> is defined outside of the block, it is also being modified within the block and then passed on to <code>puts</code>.  If a variable is inside a block with the same name as a variable outside of the block the two are the same, but if a variable appears only inside a block than the variable is local to the block.

As extra reading, I would check out Steve Ramsay's <a href="http://etext.lib.virginia.edu/services/helpsheets/unix/regex.html">guide to regular expressions</a>. I won't be covering regular expressions, but they will eventually show up and be useful as part of your programmer toolkit. It's good to get familiar with them.

<h4>Additional Resources</h4>
<ul>
<li><a href="http://www.skorks.com/2009/09/a-wealth-of-ruby-loops-and-iterators/">A Wealth of Ruby Loops and Iterators</a>, Shorks</li>
<li><a href="http://www.rubyist.net/~slagell/ruby/control.html">Control Structures</a>, Rubyist</li>
</ul>

<em>Visit the Rubyist Historian <a href="http://www.jasonheppler.org/the-rubyist-historian-the-series.html">Table of Contents</a> for more sections, and check out the <a href="https://github.com/hepplerj/rubyist-historian">Github repository</a> for an archive of all the code examples.</em>

<em>See something that's wrong?  Examples that don't work?  Explanations that are unclear or confusing?  Embarrassing typographic errors?  Drop me an email at jason.heppler+feedback at gmail and I'll fix things right up!</em>

<em>Topic structure, examples, and explanations for the Rubyist Historian are inspired by, credited to, and drawn from Stephen Ramsay and his course Electronic Text.</em>

**UPDATE 2012-12-21**: Thanks to Brooke Lester for pointing out a typo in the final code example. The problem has been corrected.