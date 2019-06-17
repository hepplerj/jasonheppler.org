---
date: 2012-06-07T19:18:08Z
categories:
- scripts
- bash
- research
title: A Few New Scripts
url: /2012/06/07/automating-tasks/
---

Here's a few nerdy bits I've been working on lately in my free time -- just a few scripts that I've been using to take care of things on my Mac automatically.

The first is a one-line bash script that will automatically delete items from my Downloads folder that are more than a week old:

{{< highlight bash >}}
#!/bin/bash

find /Users/hepplerj/Downloads/* -mtime +7 -exec rm -rf {} \;
{{< / highlight >}}

The only additional change I want to make to the script is to log what was deleted to a text file, but I'll work on that on another evening. I automate the script using <code>launchd</code> (the OS X version of <code>cron</code>). You can copy the code to a file called <code>com.yourusername.cleandownloads.plist</code> and save it under <code>~/Library/LaunchAgents/</code>. You'll either need to log out and log back in, or run <code>launchctl load ~/Library/LaunchAgents/com.yourusername.cleandownloads.plist</code> to get it started. The code as set up here will run at 11:50pm every Saturday night:

{{< highlight xml >}}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
    <key>Label</key>
    <string>com.hepplerj.cleandownloads</string>
    <key>ProgramArguments</key>
    <array>
        <string>/bin/bash</string>
        <string>/Users/hepplerj/scripts/cleandownloads.sh</string>
    </array>
    <key>StartCalendarInterval</key>
    <dict>
        <key>Weekday</key>
        <integer>7</integer>
        <key>Hour</key>
        <integer>23</integer>
        <key>Minute</key>
        <integer>50</integer>
    </dict>
</dict>
</plist>
{{< / highlight >}}

Perhaps not as elegant as <code>cron</code>, but it gets the job done.

I don't know if anyone will find this useful, but it's a nice method for me. I never remember (nor enjoy) having to comb through my Downloads. This will move everything to the Trash every week for me without having to think about it. It also puts something in the back of my mind that forces me to address a download immediately (e.g., if it's a PDF of an article I intend to keep it needs to get filed) rather than have it sit in the folder indefinitely. The next step I want to figure out is to have the Trash empty automatically.

The other script I'm loving lately is drawn from the incomparable [Brett Terpstra](http://brettterpstra.com/). Borrowing from Brett, I've added a command to [my <code>.bash_profile</code>](https://github.com/hepplerj/dotfiles/blob/master/.bash_profile) that allows me to log git commits to a text file. The script looks like this:

{{< highlight bash >}}
# wrapper for git to log commits to an nvALT note
# just an overall reminder of what I did all night
function ca(){
  note="/Users/hepplerj/Dropbox/notes/universalgitlog.txt"
  msg=$*
  path=$(pwd)
  before=$(cat "$note")
  echo "$(date '+%y-%m-%d %H:%M | ') (${path##*/}) $msg" > "$note"
  echo "$before" >> "$note"
  git commit -am "$msg"
}
{{< / highlight >}}

I send the log to my notes folder in Dropbox, which is the same directory that is indexed by nvALT. So, whenever I'm doing a new commit to git, I can just write <code>ca 'Here is my commit message'</code>, hit return, git will do its business and copy the commit message to the text file. A simple task, but a nice record of things I've completed for different projects.
