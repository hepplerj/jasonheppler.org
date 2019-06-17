---
date: 2013-11-17T21:14:44Z
categories:
- bash
- Omeka
title: Using Omekadd and Bash Together
url: /2013/11/17/omekadd/
---

I found some time this weekend to play around with [Caleb McDaniel's](http://wcm1.web.rice.edu) Python script [Omekadd](https://github.com/wcaleb/omekadd), which uses the Omeka API to change properly formatted YAML documents into JSON strings to post as Omeka items. In the short amount of time I've used it, I've already found Omekadd to be a big time-saver for me. It's faster for me to jump into vim or Sublime, hit my TextExpander snippet to autofill some of the basic YAML information, add the details, description, and transcription if necessary, and finally jump back to the command line to run the script and send everything to the server. 

My normal routine for Omeka had been to use the [Dropbox plugin](http://omeka.org/codex/Plugin_API) to throw all of my PDFs, images, and so on onto my server, then use Dropbox's file selection and fill out all the relevant information using Omeka's web interface. But the process was a bit clunky for me -- I had to jump back and forth frequently between the browser, the original source to look up details, and click around the web interface to fill out all the appropriate information. The process was time consuming, made all the more real after a research trip this weekend where I came home with a few hundred photographs I needed to start processing. Using the web interface among hundreds of documents would've required a huge investment of time. 

Omekadd seems to resolve much of this for me. Rather than the web interface, I popped open Sublime Text alongside my PDF images so I could easily reference the primary source. Using TextExpander, I type `;omekadd` and, *ding*, the template is ready for me to add information. My `;omekadd` template looks like this:

{{< highlight console >}}
---
Title: 
Source: 
Publisher: Published here by Jason A. Heppler.
Date: 
Rights: This item is published solely for personal research and nonprofit educational use under the terms of fair use. No copyright in the item is asserted or implied by its publication here.
Format: 
Language: English
Type: Text
Description: |
    markdown> 
Text: |
    markdown> 
{{< / highlight >}}

While this method of working with Omeka sped up my use of the platform, I felt I could squeeze a bit more efficiency out of my use case. Ideally, my workflow would be to finish processing a batch of YAML documents before I have to jump over to the command line and call up the script. To resolve this issue, I wrote up a *very* basic bash script that gets the job done. 

The script is only four lines of code, and comes with a few caveats:

1) If you're iterating through a lot of files all at once, be alert of any upload limits you might hit with your host. I don't know that this will really be a problem, but it's worth being aware.

2) The script is tailored to my specific use case and serves more as a proof of concept, so will probably need some editing if you choose to use it. For example, the script assumes that the YAML file and the PDF share the same filename (e.g., `item0001.yaml` and `item0001.pdf` belong together). You may not wish to rename files this way, or you may be working with other file formats instead of PDF. 

3) Don't forget to adjust the path to Omekadd.

4) The regex looks for a filename that's exactly as long as the filenames I am using (in this case, e.g., item0001, item0002, etc.). If you want to make sure everything is working before you start calling up Omekadd, just comment out the `upload` line and `echo` some results first to make sure you're getting what you want. 

5) The script doesn't seek to very robust. There's no error checking, no special switches, and makes no guarantee that your data is safe. I haven't run into any problems yet, but you may. Suggestions? Problems? Questions? Let me know!

And now, to the script:

{{< highlight bash >}}
#!/bin/bash
 
# Written by Jason A. Heppler
# Iterate through the base directory, find all .yaml files and .pdf files, and
# upload these files to Omeka. For use with Caleb McDaniel's Omekadd Python 
# script: https://github.com/wcaleb/omekadd
#
# Last Modified: 2013-11-17
 
 # The script assumes the .yaml and .pdf share the same filename, so the two can
 # be matched together for upload (e.g., item001.yaml belongs with item001.pdf).
 
for i in *.yaml ; do
 
  # the pdf file will have the same filename as the yaml file
  filename_pdf=${i/%?????/}.pdf
 
  # upload to Omeka
  python /Users/jheppler/git/omekadd/omekadd.py $i -u $filename_pdf
 
done
{{< / highlight >}}

The script iterates through a directory of YAML documents, finds the PDF with the matching filename, and uploads all the information to my Omeka archive. 

Simple, and so far for my purposes, it gets the job done. 
