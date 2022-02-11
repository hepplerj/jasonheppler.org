---
title: 'Developer Notes: Converting Filenames to Metadata'
date: 2022-02-11T13:36:35-06:00
slug: 'filenames-as-metadata'
series:
- developer-notes
draft: true
---

<aside>
I'm starting up a new series called <em>Developer Notes</em>, which are one-off project updates, tasks, or solutions to things I'm working on.
</aside>

This past week, we had a need to convert a directory of filesnames into some bare-bones metadata. The filenames themselves contained the metadata we wanted, and generally followed a pattern that looked like this: `BoxNameYear-001` --- or, the name of a box, a four-digit year, and a unique identifier appended by a dash. 

It turned out to be simple enough to solve this with bash. The script I came up with was: 

```
#!/usr/bin/bash 

re='[[:alpha:]]+|[0-9]+'

echo "box,year,no,filetype"
for f in *.tiff; do 
    [[ ! -e $f ]] && continue
    grep -Eo $re <<< "$f" | sed 's/ \n/,/g;/^$/d' | paste -d, - - - -
done
```

The script takes a directory of files that follows this naming convention and generates a CSV file. We set up the structure with the `echo`, then loop through the files and look for any file with the appropriate extension (in this case, a `.tiff`). Then, simply enough, we use `grep` to match our regular expression against the file name, `sed` to do some in-line editing and add a comma as a separator to each line, and finally use `paste -d` to convert the newline output into a single line. 

Let's imagine a set of filenames that look like this: 

```
JoeSmith1950-001.tiff
JoeSmith1950-028.tiff
JoeSmith1950-033.tiff
JoeSmith1950-046.tiff
```

We can run our script from the command line (`sh filemetadata.sh > metadata.csv`) and we'll be left with a CSV file that looks like this:

```
box,year,no,filetype
JoeSmith,1950,001,tiff
JoeSmith,1950,028,tiff
JoeSmith,1950,033,tiff
JoeSmith,1950,046,tiff
```

It had been a while since I'd done bash scripting, and I have to say I'm
pretty pleased with how simple the solution turned out to be. If you have a
need for something similar, some minor tweaks to the script above should get
you started as well.
