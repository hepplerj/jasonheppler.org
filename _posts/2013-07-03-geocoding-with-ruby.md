---
layout: post
title: Geocoding with Ruby
description: 
date: 2013-07-03 10:27:48
categories:
- Programming
tags:
- Ruby
- geocoding
---
Lately I've been helping some people geocoding some data for plotting visualizations.

{% highlight ruby %}
#!/usr/bin/env ruby

# == Synopsis
#   This tool will geocode a list of CITY, STATE locations by returning
#   the coordinates of the location. 
#
#   To geocode the correct columns in your csv file, you'll need to edit
#   the `address` line below by replacing `:destinationcity` and 
#   `:destinationstate` with the appropriate column headings. These 
#   *must be lower case* even if the csv file is formatted otherwise.
#
#   Geocoder requires the `csv` and `geocoder` Ruby gems.
# 
# == Usage
#   geocoder.rb path/to/file > output.csv
#
# == Author
#   Jason A. Heppler | jason.heppler@gmail.com
#
# == Copyright
#   Copyright (c) 2013 Jason A. Heppler. Licensed under the MIT License:
#   http://heppler.mit-license.org

require 'rubygems'
require 'geocoder'
require 'csv'
 
LOCATIONS = ARGV[0]
 
CSV.foreach(LOCATIONS, :headers => true, :header_converters => :symbol) do |line|
  address = "#{line[:destinationcity]}, #{line[:destinationstate]}, #{line[:destinationcountry]}"
  location = Geocoder.search(address).first
  unless location.nil?
    lat = location.latitude
    lon = location.longitude
  end

  puts "#{lat}, #{lon}"
end
{% endhighlight %}