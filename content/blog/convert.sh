#!/usr/bin/bash 

# This script loops through a directory of markdown files and uses pandoc
# to re-write their footnotes in markdown.

# The script is designed to be run from the directory containing the
# markdown files. It will create a new directory called "footnotes" and
# write the new markdown files there.

# The script requires pandoc to be installed.
for file in *.md do
    pandoc -f markdown -t markdown -o footnotes/$file $file
done
