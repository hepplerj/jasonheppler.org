#!/bin/sh
# Make a new post and open it in VS Code
# ./new-post post-title-slug

if [ -z "$1" ]
then
  echo "Provide a slug."
  exit 1
fi

date=`date "+%Y-%m-%d"`
name=$1
dir="content/books/$date-$name"
# Use Hugo archetypes to do the heavy lifting in creating the new file
hugo new "books/$date-$name.md"
# Open the resulting file in VS Code
vim "content/books/$date-$name.md"
