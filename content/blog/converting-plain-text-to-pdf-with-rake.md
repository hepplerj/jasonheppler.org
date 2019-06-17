---
date: 2013-10-30T21:43:53Z
description: null
categories:
- pandoc
- PDF
- bash
- plain text
- dissertation
title: Converting Plain Text to PDF with Bash
url: /2013/10/30/converting-plain-text-to-pdf-with-rake/
---

I've written in the past about [my love for Markdown](http://jasonheppler.org/2012/11/20/using-markdown-like-an-academic.html), especially in its relation to scholarly work. Some people have [written whole books with plain text](http://wcm1.web.rice.edu/my-academic-book-in-plain-text.html), and my dissertation is being written entirely in Markdown. But I often need the plain text converted to, well, a more commonly-used file format. My system ties together Markdown and Pandoc for converting plain text into PDF or .docx for distribution.

But I wanted a faster way to convert these files without having to remember the Pandoc string I wanted for controlling the layout, bibliography style, and output location. So, I wrote a bash script to output the files for me. The script takes in the file (`$ ./pub.sh chapter.md`), uses the template, bibliography, and bibliographic style I'd like for the document, and outputs the generated files in both PDF and .docx.  

{{< highlight bash >}}
#!/bin/bash
# pub.sh
# Take in a Markdown file and convert to PDF and .docx with Pandoc
# Usage: ./pub.sh file.md

# Version control information
echo "Updating revision information"
sh vc

file="$1"

echo "Generating PDF files"
pandoc $file \
	--bibliography=/Users/jheppler/Dropbox/research/bib/master.bib \
	--template xelatex.template \
	--csl=chicago-fullnote-bibliography-no-ibid.csl \
	--latex-engine=xelatex \
	-o drafts/$file.pdf

echo "Generating Word files"
pandoc $file \
	--bibliography=/Users/jheppler/Dropbox/research/bib/master.bib \
	--csl=chicago-fullnote-bibliography-no-ibid.csl \
	-o drafts/$file.docx

# hide the log
echo "Hiding log files"
mv "*.log" ".logged"

# delete all the junk files
echo "Removing temp files"
find . -name "*.log" -exec rm -rf {} \;
find . -name "*.aux" -exec rm -rf {} \;
find . -name "*.toc" -exec rm -rf {} \;
find . -name "*.blg" -exec rm -rf {} \;
find . -name "*.bbl" -exec rm -rf {} \;
find . -name "*.out" -exec rm -rf {} \;
find . -name "*.brf" -exec rm -rf {} \;
find . -name "*.tex-e" -exec rm -rf {} \;
find . -name "*.lof" -exec rm -rf {} \;
find . -name "*.lot" -exec rm -rf {} \;
find . -name "*.loa" -exec rm -rf {} \;
find . -name "*.bcf" -exec rm -rf {} \;
find . -name "*.gz" -exec rm -rf {} \;
find . -name "*.run.xml" -exec rm -rf {} \;
{{< / highlight >}}
