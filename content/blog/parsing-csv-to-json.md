---
date: 2014-07-12T08:09:46Z
description: null
image:
  feature: null
  thumb: null
post_type: Essay
categories:
- Ruby
- D3js
- JSON
title: Simple Parsing CSV to JSON
url: /2014/07/12/parsing-csv-to-json/
---

I took a moment yesterday morning to start work on a Ruby script to convert CSV files to JSON. My main motivation for writing the script was to get data into a format that more easily works with [D3.js](http://d3js.org). 

D3 has two main ways to load data: JSON or CSV. Although CSV has its benefits, the data is [untyped](http://en.wikipedia.org/wiki/Programming_language#Typed_versus_untyped_languages). Because of that, D3 loads all the data as strings rather than differentiating between strings and integers. I could do the conversion on the fly with D3 pretty easily using built-in functions or coerce the data with JavaScript. But sometimes I like prepping data before I begin working with it.

The script builds JSON using the first line of the CSV file to determine the appropriate elements and the corresponding data, as well as checking that integers and strings are converted to their appropriate (typed) formats. And the script seems fairly robust; I noticed hardly a pause when throwing a 14,000-line CSV file at it. There are no built-in specifics to the data mapping; you'll need to handle that either by modifying the script or handling it in D3.

The script: 

{{< highlight ruby >}}
#!/usr/bin/env ruby

# Parse CSV files and convert them to JSON.
# Mostly used for preparing data for D3.js. I don't like using untyped
# CSV files, so this script begins to clean things up for me.

# Usage: ./parse.rb /path/to/input.csv /path/to/output.json

# Jason A. Heppler | jason@jasonheppler.org | jasonheppler.org
# MIT License <http://heppler.mit-license.org/>
#
# Created: 2014-07-10

require 'rubygems'
require 'json'
require 'csv'

def is_int(str)
  # Check if a string should be an integer
  return !!(str =~ /^[-+]?[1-9]([0-9]*)?$/)
end

lines = CSV.open(ARGV[0]).readlines
keys = lines.delete lines.first

File.open(ARGV[1], "w") do |f|
  data = lines.map do |values|
    is_int(values) ? values.to_i : values.to_s
    Hash[keys.zip(values)]
  end
  f.puts JSON.pretty_generate(data)
end
{{< / highlight >}}

Say I give it an input like this (postwar population of Bay Area cities):

{{< highlight console >}}
date,San Jose,Palo Alto,Sunnyvale,Mountain View,Santa Clara
1940,68457,16774,4373,3946,6650
1950,95280,25475,9829,6563,11702
1960,204196,52287,52898,30889,58880
1970,445779,55966,95408,51092,87717
1980,629442,55225,106618,58655,87746
1990,782225,55900,117229,67460,93613
2000,894943,58598,131760,70708,102361
2010,945942,64403,140081,72510,112466
{{< / highlight >}}

And in return I get this:

{{< highlight json >}}
[
  {
    "date": "1940",
    "San Jose": "68457",
    "Palo Alto": "16774",
    "Sunnyvale": "4373",
    "Mountain View": "3946",
    "Santa Clara": "6650"
  },
  {
    "date": "1950",
    "San Jose": "95280",
    "Palo Alto": "25475",
    "Sunnyvale": "9829",
    "Mountain View": "6563",
    "Santa Clara": "11702"
  },
  {
    "date": "1960",
    "San Jose": "204196",
    "Palo Alto": "52287",
    "Sunnyvale": "52898",
    "Mountain View": "30889",
    "Santa Clara": "58880"
  },
  {
    "date": "1970",
    "San Jose": "445779",
    "Palo Alto": "55966",
    "Sunnyvale": "95408",
    "Mountain View": "51092",
    "Santa Clara": "87717"
  },
  {
    "date": "1980",
    "San Jose": "629442",
    "Palo Alto": "55225",
    "Sunnyvale": "106618",
    "Mountain View": "58655",
    "Santa Clara": "87746"
  },
  {
    "date": "1990",
    "San Jose": "782225",
    "Palo Alto": "55900",
    "Sunnyvale": "117229",
    "Mountain View": "67460",
    "Santa Clara": "93613"
  },
  {
    "date": "2000",
    "San Jose": "894943",
    "Palo Alto": "58598",
    "Sunnyvale": "131760",
    "Mountain View": "70708",
    "Santa Clara": "102361"
  },
  {
    "date": "2010",
    "San Jose": "945942",
    "Palo Alto": "64403",
    "Sunnyvale": "140081",
    "Mountain View": "72510",
    "Santa Clara": "112466"
  }
]
{{< / highlight >}}

Note that the data transformation for this particular example probably isn't the best. A more useful JSON construction would group the data together with child nodes, for example:

{{< highlight json >}}
[
  {
    "name": "San Jose",
    "values": [
      {
        "date": 1940,
        "population": 945942
      },
      {
        "date": 1950,
        "population": 95280
      }
    ]
  }
]
{{< / highlight >}}

But if you need a simple CSV to JSON transformation, the script starts getting you there.
