---
date: 2013-01-27T20:10:39Z
categories:
- ruby
title: Parsing CSV Data with Ruby
url: /2013/01/27/parsing-csv-data-with-ruby/
---

Computers offer us a wonderful opportunity to automate and ease some of
the tasks associated with data cleanup and preparation in the humanities. After a
conversation with a researcher at [CESTA](http://cesta.stanford.edu) on Friday, I thought about a
problem he was confronting with a spreadsheet of data he is collecting
that contains many thousands of rows. In particular, he is considering
some methods for data mining and text analysis. The research deals in
part regarding notes taken by a British consulate about freed slaves in the nineteenth
century and, in this case, he wanted a method for extracting the
consulate's notes based on criteria regarding the slaves he wrote about.
It would be simple enough to do some basic work like this within a
spreadsheet by sorting columns based on criteria like gender or
occupation, but adding those two together (e.g., where gender is
"male" and occupation is "farmhand") becomes a trickier task in a
spreadsheet. 

To work around this problem, I whipped up a couple of quick Ruby scripts
this afternoon. The first script does most of the heavy lifting by
iterating through a <code>csv</code> file and finding the matching options. Then,
out of those matches, I locate the column that contains the data I want
and tell the script to write to <code>STDOUT</code> (or pipe the output to a text
file). 

{{< highlight ruby >}}
#!/usr/bin/env ruby

require 'csv'

# Load file
csv_fname = 'file.csv'

# Key is the column to check, value is what to match
search_critera = { 'sex' => 'female', 
                   'race' => 'white' }

options = { :headers      =>  :first_row,
            :converters   =>  [ :numeric ] }

# Save `matches` and a copy of the `headers`
matches = nil
headers = nil

# Iterate through the `csv` file and locate where
# data matches the options.

CSV.open( csv_fname, "r", options ) do |csv|
  matches = csv.find_all do |row|
    match = true
    search_critera.keys.each do |key|
      match = match && ( row[key] == search_critera[key] )
    end
    match
  end
  headers = csv.headers
end

# Once matches are found, we print the results
# for a specific row. The row `row[8]` is
# tied specifically to a notes field.

matches.each do |row|
  row = row[8]
  puts row
end
{{< / highlight >}}

You'll have to play around with the script if you're looking to use it
for your own purposes. The script is very purpose built and not at all
robust or inter-operable.

The script begins by offering criteria to look for. The criteria are a key
- value pairing. The key corresponds to the <code>csv</code> header (in
  this case, `sex`) and looks for the string within that column (here,
  `female`). The options should be able to handle as many criteria as
  needed, but I have not tested this thoroughly. 

Then, the script opens the <code>csv</code> file and iterates through
the data to locate criteria and stores the results (either
<code>true</code> or <code>false</code>) inside <code>matches</code>.
Finally, the results stored within <code>matches</code> are run against
a row of data I want to collect (in this case, <code>row[8]</code>
contains the data that I want). Any place where <code>matches</code> is
equal to <code>true</code>, the script grabs the data from
<code>row[8]</code> and stores the results in <code>row</code>, which is
then output to the screen.

I suspect the script will become more complicated in the near future.
One problem I'm thinking about already has to do with the way the
researcher I mentioned at the beginning collected his spreadsheet data
regarding the occupation of a freed slave. For example, some occupations
are simply listed as "cook" while others contained a conjunction "cook
and farmhand." The problem with my script is it doesn't have built-in
[fuzzy finding](http://en.wikipedia.org/wiki/Approximate_string_matching) and looks for explicit strings ("cook" means "cook", not
"Cook" or "COOK"). As a quick fix for this, and as a way to check the
data for accuracy, I have a second script I put together that simply
counts the number of occurrences for a given row. 

{{< highlight ruby >}}
#!/usr/bin/env ruby

require 'csv'

# create an array to store the count data
unique_count = {}

# let's count!
CSV.foreach('file.csv', :headers => true) do |row|
  unique_count[row[3]] ||= 0
  unique_count[row[3]] += 1
end

# print!
unique_count.each do |val, count|
  puts "#{val}: #{count} time(s)"
end
{{< / highlight >}}

Nothing complicated here. The script starts by creating an empty array
then loads the data in. In this case, I want to check the data in
<code>row[3]</code>. The script iterates through each row in the
<code>csv</code> and stores a count for each unique item in the row. The
results are displayed as a value - count pairing. Running the script
gives something like this:

{{< highlight console >}}
female: 36 time(s)
male: 24 time(s)
{{< / highlight >}}

The script exists more as an aid for me as I think through the previous script: I can find unique occurrences of things like gender, occupation, street addresses, and so on, which also locates misspellings or inconsistent data. Furthermore, until I add fuzzy finding to the previous script, the counting script allows me to see unique strings that I can add as search criteria to ensure I'm collecting all the data I want.
