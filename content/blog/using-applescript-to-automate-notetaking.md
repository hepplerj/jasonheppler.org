---
date: 2012-11-24T09:19:18Z
categories:
- productivity
- Skim
- Applescript
title: Using AppleScript to Automate Notetaking
url: /2012/11/24/using-applescript-to-automate-notetaking/
---

On [a recent episode](http://www.70decibels.com/generational/2012/11/10/009-research-materials-and-tools-with-walton-jones.html) of [Gabe Weatherhead's](http://www.macdrifter.com) Generational podcast he spoke with [Walton Jones](http://drosophiliac.com), professor of Behavioral Neurobiology at Korea Advanced Institute of Science and Technology. They talk about Professor Jones' system for annotating and summarizing academic papers about twenty minutes into the podcast. He's further detailed his [academic workflow on his blog](http://drosophiliac.com/2012/09/an-academic-notetaking-workflow.html), so be sure to give his explanation a read.

I've noted before how I [manage my PDFs using the filesystem](http://www.jasonheppler.org/2012/08/13/towards-better-pdf-management-with-the-filesystem.html) and Open Meta tagging. I've tended to maintain my notes in plain text written directly into DEVONthink, but after listening to Weatherhead's talk with Jones and reading his post I've decided to adopt part of his system. 

As a scientist Jones spends much of his time synthesizing the latest research that normally comes to him as a PDF from journals. Where I became interested in his system was 1) his color coded annotations and 2) his method of extracting those annotations to plain text. His system uses colors for different notes, green for references, red for summaries, and so on. Where the system really inspired me was his AppleScript that can process the PDF he has marked up (either in [Skim](http://skim-app.sourceforge.net/) or [iAnnotate](http://www.branchfire.com/)) that scans the PDF and extracts notes based on his categorization using Markdown syntax. He then dumps the notes into Voodoo Pad. Be sure to [read his explanation](http://drosophiliac.com/2012/09/an-academic-notetaking-workflow.html) of his system as my summary doesn't do it complete justice.

The system relies on an AppleScript that looks for annotations in the PDF and extracts the text into Markdown-formatted plain text. I modified the script slightly for my own needs:

{{< highlight applescript >}}
(*

Script courtesy of Walton Jones, modified slightly 
http://drosophiliac.com/2012/09/an-academic-notetaking-workflow.html

Original script by John Sidiropoulos
http://www.organognosi.com/export-skim-notes-according-to-their-highlight-colors/

*)

tell application "Skim"
    set the clipboard to ""
    set numberOfPages to count pages of document 1
    
    activate
    set myColorCodes to my chooseColor()
    
    set firstPage to "1" as number
    set lastPage to numberOfPages
    set the clipboard to "# Notes #" & return & return
    
    repeat with currentPage from firstPage to lastPage
        set pageNotes to notes of page currentPage of document 1
        exportPageNotes(pageNotes, currentPage, myColorCodes) of me
    end repeat
    
end tell

on exportPageNotes(listOfNotes, pageForProcessing, myColorCodes)
    tell application "Skim"
        
        set currentPDFpage to pageForProcessing
        repeat with coloredNote in listOfNotes
            
            repeat with i from 1 to the count of myColorCodes
                if color of coloredNote is item i of myColorCodes then
                    set categoryColors to ({"Summary", "Methods", "Arguments", "Reference", "Thesis", "Question or connection"})
                    set noteColor to color of coloredNote as string
                    if noteColor is item i of myColorCodes as string then
                        set noteColor to item i of categoryColors
                    end if
                    set noteText to get text for coloredNote
                    set the clipboard to (the clipboard) & "**[" & noteColor & "]" & "(" & name of document 1 & "#page=" & pageForProcessing & ")**" & ":   " & return & noteText & return & return
                end if
            end repeat
        end repeat
        
    end tell
end exportPageNotes

on chooseColor()
    set selectedColors to ({"Summary", "Methods", "Arguments", "Reference", "Thesis", "Question or connection"})
    set colorCodes to {}
    set noteColor to ""
    repeat with noteCol in selectedColors
        set noteColor to noteCol as text
        if noteColor is "Summary" then
            set end of colorCodes to {64634, 900, 1905, 65535}
        else if noteColor is "Methods" then
            set end of colorCodes to {64907, 32785, 2154, 65535}
        else if noteColor is "Arguments" then
            set end of colorCodes to {65535, 65531, 2689, 65535}
        else if noteColor is "Reference" then
            set end of colorCodes to {8608, 65514, 1753, 65535}
        else if noteColor is "Thesis" then
            set end of colorCodes to {8372, 65519, 65472, 65535}
        else if noteColor is "Question or connection" then
            set end of colorCodes to {64587, 1044, 65481, 65535}
            
        end if
    end repeat
    
    return colorCodes
end chooseColor
{{< / highlight >}}

<div class="update">
<p><strong>UPDATE 11/29/12</strong><br/>
I was remiss in pointing out that the original AppleScript adapted by Walton Jones <a href="http://www.organognosi.com/export-skim-notes-according-to-their-highlight-colors/#codesyntax_1">came from John Sidiropoulos</a> at his blog <a href="http://www.organognosi.com/">OrganoGnosi</a>. His blog has lots of advice on using digital tools for academic research.</p>
</div>

I take my notes in Skim, which would result in something like:

![Skim notes](http://farm9.staticflickr.com/8339/8205161519_f4b08fcbe4.jpg "Skim notes")

When the script is run on a PDF, it results in a note formatted in Markdown that looks similar to this:

{{< highlight console >}}
# Notes #

**[Reference](file://example.pdf#page=3**:
Reference text would appear here extracted automatically from the PDF.
{{< / highlight >}}

That's where the other half of the magic comes in Jones's system. The note not only includes the text I wanted but also a hyperlink to the page of a particular reference. Transformed into Markdown, the note allows me to click on the reference and be taken back to the source. My notes use to appear similarly, often taking a form such as:

{{< highlight console >}}
[3] Noting the page number in brackets followed by my notes, thoughts, direct quotes, and so on from a PDF or book.
{{< / highlight >}}

As I mentioned, my notes were previously entered directly into DEVONthink. But with this new system I'll be keeping my notes in the same directory as the document I'm taking notes on. From there, DEVONthink will index the directory for easy searching and organizing.

<div class="update">
<p><strong>UPDATE 11/27/12</strong><br/>
ProfHacker has <a href="http://chronicle.com/blogs/profhacker/using-applescript-to-automate-notetaking/44422">graciously republished this entry</a> on their blog on 2012-11-27.</p>
</div>

<div class="update">
<p><strong>UPDATE 11/28/12</strong><br/>
Readers have pointed out that the hyperlinking to specific pages isn't working the way it should. The solution, near as I've been able to replicate the problem, points to just how unrobust this system is, unfortunately.</p>

<p>Walton Jones had to work around the problem by <a href="http://drosophiliac.com/2012/09/an-academic-notetaking-workflow.html">writing his own custom URL scheme</a>. You may need to adopt his system to get everything working. But Skim seems to handle page numbers without any problems, at least for me. There are a few things to bear in mind when using the script: 1) The notes <em>must</em> appear in the same directory as the PDF, and 2) the file must match exactly the text in the note (which the script should handle for you). So, for example, <code>example-article.pdf#page=3</code> must correspond exactly to <code>example-article.pdf</code> and reside in the same directory as the notes, otherwise it doesn't know where the file is located. Also, be sure that no spaces are included in the filename, otherwise the Markdown linking will not work.</p>

<p>The other area that makes the system tricky to use is the way I'm using it. When I transform the text notes into Markdown, I save the resulting markup as a PDF (either transformed in <a href="http://markedapp.com/">Marked.app</a> or fed through <a href="http://plessl.github.com/wkpdf/">wkpdf</a>). The PDF file of my notes is opened in Skim, which can handle linking back to the article because all of these actions are happening within the same application. In other words, if you are planning on using the hyperlinking system as I use it, you will need to contain all activity in Skim. Otherwise, you may need to look into Walton Jones's custom URL scheme.</p>
</div>

<div class="update">
<p><strong>UPDATE 11/29/12</strong><br/>
John Sidiropoulos, who wrote the original AppleScript to exract the colors from Skim documents adopted by Walton Jones and myself, has <a href="http://www.organognosi.com/its-all-about-hyperlinks/">a brilliant post on DEVONthink and hyperlinks</a> that nicely complements the update from yesterday. </p>
</div>