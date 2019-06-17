---
categories:
- research
date: 2012-04-24T15:45:43Z
categories:
- ruby
- scripting
- terminal
title: A Simple Ruby NGram Generator
url: /2012/04/24/a-simple-ruby-ngram-generator/
---

I was playing around with Ruby the other night and wrote a simple n-gram generator. In case anyone is interested, here is the script:

{{< highlight ruby >}}
#!/usr/bin/env ruby -w
# r_ngram.rb
# Generate a simple bi- and tri-gram, prints to STDOUT
# Usage: ruby ngram.rb file.txt
# To save the output to a file: ruby ngram.rb file.txt > output.txt

$words = File.read(ARGV[0]).downcase.scan(/[a-z]+/)

bi_grams = Hash.new(0)
tri_grams = Hash.new(0)

num = $words.length - 2
num.times {|i|
  bi = $words[i] + ' ' + $words[i+1]
  tri = bi + ' ' + $words[i+2]
  bi_grams[bi] += 1
  tri_grams[tri] += 1
}

puts "## -- bi-grams -- ##"
bg = bi_grams.sort{|a,b| b[1] <=> a[1]}
(num / 10).times {|i| puts "#{bg[i][0]} : #{bg[i][1]}"}
puts "\n"
puts "## -- tri-grams -- ##"
tg = tri_grams.sort{|a,b| b[1] <=> a[1]}
(num / 10).times {|i| puts "#{tg[i][0]} : #{tg[i][1]}"}
{{< / highlight >}}
