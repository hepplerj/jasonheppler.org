---
date: 2011-07-09T22:22:14Z
categories:
- Twitter
- terminal
title: Twitter from the Command Line
url: /2011/07/09/twitter-from-the-command-line/
---

I'm trying to incorporate Twitter into my workflow for [Jekyll](http://www.jasonheppler.org/migrating-to-jekyll.html) by allowing any new posts to the site to subsequently update Twitter. The script I've hacked together so far is very basic, and doesn't yet do the job, but I thought I'd share what I have thus far. 

Pretty easy to get this working. The script requires a couple of simple includes:

* twitter
* oauth

Then [register your app](https://dev.twitter.com) to authenticate your new Ruby command line Twitter script to use OAuth. Write down the consumer and access public and private keys; you'll need them to get things working. Once you're ready, simply plug in your keys into this script:

{{< highlight ruby >}}
# !/usr/bin/env ruby

# broadcastr.rb
# Simple Twitter updater built in Ruby
#
# Use: $ ruby broadcastr.rb "Tweeting with Ruby"
# 
# Created by Jason A. Heppler
#
# Last Modified: 2011-07-09

require "rubygems"
require "twitter"
require "oauth"

Twitter.configure do |config|
    config.consumer_key = 'INSERT_CONSUMER_KEY'
    config.consumer_secret = 'INSERT_CONSUMER_SECRET'
    config.oauth_token = 'INSERT_OAUTH_TOKEN'
    config.oauth_token_secret = 'INSERT_OAUTH_SECRET'
end

client = Twitter::Client.new

twttr_update = ARGV[0]

client.update(twttr_update)
{{< / highlight >}}

You can run this by calling up Ruby or make the script executable and edit your bash PATH in your .bashrc file (don't forget to refresh .bashrc after you modify it).

You can update Twitter by writing:

{{< highlight text >}}
$ ./broadcastr.rb "I'm tweeting from the command line, yo!"
{{< / highlight >}}
