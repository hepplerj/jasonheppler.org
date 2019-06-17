---
date: 2010-12-31T07:30:51Z
categories:
- programming
- ruby
series: "Rubyist Historian"
title: 'The Rubyist Historian: Methods and Classes'
url: /2010/12/31/the-rubyist-historian-more-basics-methods/
wordpress_id: 587
wordpress_url: http://www.jasonheppler.org/?p=587
---

In our last section I introduced some Ruby programming basics. Now we're moving in to methods and classes. <!--more-->

<h4>Methods</h4>

Notations like <code>gets()</code> and <code>chomp()</code> are called <strong>methods</strong>.  In our above example, <code>gets()</code> accepts a single line of data from the user and assigns the string to <code>name</code>. So how can we know what methods are available to us as programmers?  The all-knowing, all-powerful <a href="http://www.ruby-doc.org/">Ruby Docs</a>.  <code>gets</code> and <code>chomp</code> barely scratch the surface.  We can do things like count the number of characters or lines in a string or file, reverse the lines of a string or file, cut a string apart and join it in alphabetical order, or operate all methods on it at once.  For example:

{{< highlight ruby >}}
puts "I am a Rubyist Historian".length() #=> 24
puts "Learning some Ruby-fu".reverse() #=> uf-ybuR emos gninraeL
puts "Ruby is fracking awesomesauce.".split("").sort().join() #=>    .Raaabcceeefgiikmnorsssuuwy
{{< / highlight >}}

Run this in the terminal and you should get the commented results.  For the first example, we would technically say that we are <em>invoking the length method on object "I am a Rubyist Historian."</em> (Or, even more abstractly, "I am a Rubyist Historian" is an <em>object of type string</em>.) Everything before the period is the <strong>receiver</strong> while everything after the period indicates the <strong>method(s)</strong> you wish to invoke upon the object.

We can also create methods.  We'll return to our original "hello, name" program.  But this time we're going to write our own method and invoke it.  Methods are defined with the keyword <code>def</code> followed by the method name and the method's parameters between parentheses (parentheses here are optional, but I use them for readability's sake.  Remember, if you do not use parentheses you need to have a single space in its place, e.g., <code>name hello</code> is the same as <code>name(hello)</code>).  So to build a new "hello, name" program using a defined method, we could write:

{{< highlight ruby >}}
# defining function 'hello' to ask
# for parameter 'name'
def hello(name)
    'Hello ' + name
end

puts "Please enter your name: "
name = gets.chomp

puts hello(name)
{{< / highlight >}}

NB: Indentations does not matter to Ruby, but for readability's sake, we include them.

Become very familiar with defining functions. This allows us to define functions for later use and set code apart to keep the program organized (as Prof. Steve Ramsay persistently reminded us in his course, programs are designed for <em>people</em> to read, not just computers).  You also want to avoid redundancy.  As a final note, what happens inside of functions is not visible outside the function.  We can make things visible by using the global variable (adding $ to the beginning of the variable you want visible, e.g., <code>$result</code>) but, as Prof. Ramsay warned us: <strong>global variables are evil</strong>.  No, really, <strong>they are</strong>.  The last thing you'll want is a global variable to plague parts of your code without your knowledge.

<h4>Classes</h4>

Similarly to methods, we can define classes in Ruby. Recall that Ruby is an object oriented programming language. By using classes, we're fully entering the realm of OOP and learning how to create our own objects. We know that objects are closely allied with a type (object of type string, for example) and that certain behaviors go with certain objects. Objects are a data structure and a state, and also have behaviors that we call methods. 

Ruby classes are templates for creating new kinds of objects.  Classes are created by using the <code>class</code> keyword, and take note that classes are capitalized and methods are lowercase.  By using OOP we are making data central through what's called <strong>procedural programming</strong> where we're defining relationships between and among objects.  

Let's say you wanted a program that allowed you to input author names and ISBNs.  First we define the class starting off the definition with <code>class</code> followed by the class name, capitalized:

{{< highlight ruby >}}
class Books
    # . . .
end
{{< / highlight >}}

We'll use the <code>initialize</code> method here, which allows programmers to set the state of constructed objects.  We store these as <strong>instance variables</strong> inside the object, which we incidate through the use of the <code>@</code> symbol. This makes variables visible within a class -- this is <strong>not</strong> a global variable.  But the instance variables means we can allow each object to have its own unique state.  <code>initialize</code> is a special method in Ruby.  Ruby allocates memory to hold <code>uninitialized</code> objects and then calls the object's <code>initialize</code> method.  The method passes any parameters that were passed to <code>new</code>.  

Enough talk, let's write the code and explain things further:

{{< highlight ruby >}}
class Books

    attr_accessor :fname, :lname, :isbn

    def initialize( fname, lname, isbn )
        @fname = fname
        @lname = lname
        @isbn = isbn
    end

    def to_s
        @lname + ", " + @fname + ", ISBN: " + @isbn
    end

end

author = Books.new("Walt", "Whitman", "1234567890")
puts author
{{< / highlight >}}

What we've done here is passed the instance variables <code>@fname</code>, <code>@lname</code>, and <code>@isbn</code> a string by calling the class constructor <code>Books</code> (<code>Books.new("Walt", "Whitman", "1234567890")</code>). We could just as easily said <code>Books.new("William", "Shakespeare", "1234567890")</code>. Note that <code>attr_accessor</code> is not declaring an instance variable, it's only creating the accessor methods.  Ruby decouples instance variables and accessor methods.

The class <code>Books</code> takes three variables, <code>fname</code>, <code>lname</code>, and <code>isbn</code>. These parameters act like local variables within the method and follow the same lowercase naming convention. Yet, if we kept them as local variables they would vanish once <code>initialize</code> returned.  So, we use an accessor to keep the variables usable throughout the class.

Note also that we redefined the <code>to string (.to_s)</code> type cast as well. By default, when Ruby uses <code>puts</code> it calls on the <code>.to_s</code> type cast to convert data into a string. But we want <code>.to_s</code> to be more useful. We can override the default implementation to display whatever we'd like it to display.

<h4>Additional Resources</h4>
<ul>
<li><a href="http://juixe.com/techknow/index.php/2007/01/22/ruby-class-tutorial/">Ruby Class Tutorial</a>, Juixe Techknow</li>
</ul>

<em>Visit the Rubyist Historian <a href="http://www.jasonheppler.org/the-rubyist-historian-the-series.html">Table of Contents</a> for more sections, and check out the <a href="https://github.com/hepplerj/rubyist-historian">Github repository</a> for an archive of all the code examples.</em>

<em>See something that's wrong?  Examples that don't work?  Explanations that are unclear or confusing?  Embarrassing typographic errors?  Drop me an email at jason.heppler+feedback at gmail and I'll fix things right up!</em>

<em>Topic structure, examples, and explanations for the Rubyist Historian are inspired by, credited to, and drawn from Stephen Ramsay and his course Electronic Text.</em>
