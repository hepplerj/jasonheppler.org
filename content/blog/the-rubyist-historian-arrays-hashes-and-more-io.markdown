---
date: 2011-01-04T07:30:52Z
categories:
- programming
- ruby
series: "Rubyist Historian"
title: 'The Rubyist Historian: Arrays and Hashes'
url: /2011/01/04/the-rubyist-historian-arrays-hashes-and-more-io/
wordpress_id: 715
wordpress_url: http://www.jasonheppler.org/?p=715
---

To review, we've learned how to create functions, call upon methods, create classes, and generate basic programs in Ruby.  We'll now be moving into creating arrays and hashes. <!--more-->

<h4>Arrays</h4>

Ruby arrays and hashes are indexed collections that store objects.  Arrays and hashes can contain different object types: strings, integers, and floating-point numbers.  Arrays tend to be more efficient in accessing elements, but hashes provide greater flexibility.

Arrays are initiated between square brackets.  Inside of an array you can access individual elements by calling upon its index.  Note that Ruby begins its index with zero.

{{< highlight ruby >}}
my_array = ["Ambrose", "White", "Worster"]

# print the items in the array by calling
# their index
puts my_array[0] # => Ambrose
puts my_array[1] # => White
puts my_array[2] # => Worster
{{< / highlight >}}

There is no practical limit as to how many things an array can hold.  And, as mentioned above, there is no problem with mixing types of array elements.  You could just as easily write:

{{< highlight ruby >}}
my_array = [ 42, "books", 3.14 ]
puts my_array[0] # => 42
puts my_array[1] # => books
puts my_array[2] # => 3.14
{{< / highlight >}}

Note that strings must be enclosed in single or double quotes.

Arrays also include two operators.  The first is <code>pop</code>, which removes the item on the right side (or, the end of the array).  The other is <code>shift</code>, which removes items on the left side (beginning) of the array.

{{< highlight ruby >}}
my_array = ["Ambrose", "White", "Worster"]

array_change = puts my_array.pop
array_change2 = puts my_array.shift

puts array_change # => Worster
puts array_change2 # => Ambrose
{{< / highlight >}}

We can also add things to the array by using the <code>push</code> and <code>unshift</code> methods.  The <code>push</code> method adds items to the end (or right side of) the array while the <code>unshift</code> method adds things to the beginning of (or left side of) the array.

{{< highlight ruby >}}
my_array = ["Ambrose", "White", "Worster"]

array_new = my_array.push("Ulrich")
array_new = my_array.unshift("West")

puts "The array contains #{array_new.inspect}"
{{< / highlight >}}

Arrays can also be created much more simply by using the shortcut <code>%w</code>, which removes the need for all those quotes and commas:

{{< highlight ruby >}}
# array-shortcut.rb

a = [ 'Apple', 'Microsoft', 'Linux', 'Solaris' ]
a[0] # => "Apple"
a[1] # => "Microsoft"

# we can achieve the same thing by using:

a = %w{ Apple Microsoft Linux Solaris }
a[0] # => "Apple"
a[1] # => "Microsoft"
{{< / highlight >}}

We can create an empty array by calling <code>Array.new</code>.  The array is defining what objects must look like.  Remember that every class has a special method called <code>new</code>, and <code>new</code> is a special method called a <strong>constructor</strong>.  By calling <code>Array.new</code>, we're asking Ruby to create an empty object.  So, lets create an empty array and populate it with data:

{{< highlight ruby >}}
authors = Array.new

authors.push("Hemingway")
authors.push("Faulkner")
authors.push("Whitman")

puts authors
{{< / highlight >}}

The program should print the contents of the array to the screen.

<h4>Hashes</h4>

Ruby hashes share similarities with arrays but operate differently and have different syntaxes.  Hashes use braces rather than brackets.  Most importantly hashes must provide two objects for every entry, one for the <strong>key</strong> and one for the <strong>value</strong>.  The key and the value are separated by a <code>=></code>.

So, lets say we wanted to map author ratings. The hash setup would look like this:

{{< highlight ruby >}}
authors = {
    'Hemingway'     =>   'five_stars',
    'Stephenson'    =>   'four_stars',
    'Heppler'       =>   'one_star',
    'Whitman'       =>   'five_stars',
    # key           =>    value
}
{{< / highlight >}}

The item to the left of <code>=></code> is the <strong>key</strong> while item on the right is its corresponding <strong>value</strong>.  Keys in a hash must be unique (we cannot have two "Stephenson," for example) but values can repeat.  Hashes are indexed with the same square brackets as arrays.  To print results from the above hash, we could write:

{{< highlight ruby >}}
puts authors['Whitman'] # => five_stars
puts authors['Stephenson'] # => four_stars
{{< / highlight >}}

Also, like arrays, you can create an empty hash with <code>Hash.new</code> and inject data into it.  For example:

{{< highlight ruby >}}
my_hash = Hash.new()

hash['Dickenson'] = 'three_stars'
{{< / highlight >}}

Hashes have one significant advantage over arrays: they use any object as an index.  And, if you're using Ruby 1.9, Ruby also remembers the order in which you add items to the hash.  When you iterate over entries, Ruby will return them in the correct order.  Hashes are a frequently used data structure in Ruby.

<h4>Additional Resources</h4>
<ul>
<li><a href="http://thinkvitamin.com/code/ruby-arrays/">The Basics of Ruby Arrays</a>, Geoff Grosenbach</li>
<li><a href="http://carlosgabaldon.com/ruby/ruby-arrays/">Ruby Arrays</a>, Carlos Gabaldon</li>
<li><a href="http://blog.devinterface.com/2011/01/ruby-enumerables-hashes/">Ruby Enumerables: Hashes</a>, DevInterface</li>
<li><a href="http://kpumuk.info/ruby-on-rails/memo-3-advanced-usage-of-ruby-hashes-and-arrays/">Memo #3: Advanced usage of Ruby hashes and arrays</a>, Dmytro Shteflyuk</li>
<li><a href="http://programmingbulls.com/ruby-hash">Ruby Hash</a>, Programming Bulls</li>
</ul>

<em>Visit the Rubyist Historian <a href="http://www.jasonheppler.org/the-rubyist-historian-the-series.html">Table of Contents</a> for more sections, and check out the <a href="https://github.com/hepplerj/rubyist-historian">Github repository</a> for an archive of all the code examples.</em>

<em>See something that's wrong?  Examples that don't work?  Explanations that are unclear or confusing?  Embarrassing typographic errors?  Drop me an email at jason.heppler+feedback at gmail and I'll fix things right up!</em>

<em>Topic structure, examples, and explanations for the Rubyist Historian are inspired by, credited to, and drawn from Stephen Ramsay and his course Electronic Text.</em>
