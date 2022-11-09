#!/usr/bin/env bash
set -o errexit
set -o nounset
set -o pipefail

# Make a new post and open it in VS Code
# ./new-post post title

if [ -z "$1" ]
then
  echo "Provide a title."
  exit 1
fi

# Title will be provided by VS Code as an argument
title=$1
# The slug will be generated from the title
slug=`echo "$title" | sed -e 's/://g' -e 's/@//g' -e 's/[[:blank:]]/-/g' | tr '[:upper:]' '[:lower:]'`
date=`date "+%Y-%m-%d"`
# Use Hugo archetypes to do the heavy lifting in creating the new file
BLOG_TITLE="$title" hugo new --kind blog blog/$date-$slug
# Open the resulting file in VS Code
code "content/blog/$date-$slug/index.md"