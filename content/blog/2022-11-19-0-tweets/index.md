---
title: "0 Tweets"
date: "2022-11-19T21:26:33-06:00"
slug: "0-tweets"
categories:
- web
---

Tonight I wrote a small Go script to delete all of my tweets. There isn't much to stay about this except that Twitter has always been an ephemeral presence for me --- I've had a somewhat long-standing practice of deleting everything older than three years back (and of syncing tweets to a Google spreadsheet so I still have a copy of everything). 

But the truth is what I write here on my website is the historical record.

Twitter served a great purpose for me at one point in my career -- as a place to share my work, learn about others, and connect with a community. But I feel like that has become less of a sure thing anymore. As I wrote [yesterday](https://social.jasonheppler.org/2022/11/18/embracing-the-limits.html), Twitter -- and most social media -- doesn't feed what I want to focus on: thinking, writing, making.

So, the tweets are at 0. Here's how I did it: 

{{< highlight go >}}
package main

import (
	"fmt"
	"log"
	"strconv"

	"github.com/ChimeraCoder/anaconda"
)

func main() {
	// Set up the Twitter API
	api := anaconda.NewTwitterApiWithCredentials(
		"",      // Access Token
		"",      // Access Token Secret
		"",      // API Key
		"",      // API Secret
	)

    // Continue to fetch the timeline and delete tweets until there are no more tweets to delete
	for {
		// Fetch the timeline
		timeline, err := api.GetUserTimeline(nil)
		if err != nil {
			log.Fatal(err)
		}

		// If there are no tweets to delete, then we are done
		if len(timeline) == 0 {
			break
		}

		// Delete all of the tweets
		for _, tweet := range timeline {
			// Delete the tweet
			_, err := api.DeleteTweet(tweet.Id, true)
			if err != nil {
				log.Fatal(err)
			}

			// Print the tweet that was deleted
			fmt.Println("Deleted tweet: " + strconv.FormatInt(tweet.Id, 10))
		}
	}
}
{{< /highlight >}}