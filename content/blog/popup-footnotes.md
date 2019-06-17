---
date: 2012-06-06T09:26:20Z
categories:
- personal
- technology
title: Popup Footnotes
url: /2012/06/06/popup-footnotes/
---

After discovering [this post](http://www.leancrew.com/all-this/2010/05/a-small-popup-footnote-change/) by Dr. Drang about popup footnotes, I've added the feature to my blog. Now, thanks to some jQuery, when you hover your mouse over a footnote link you'll see a popup box.[^1]

What I like about the implementation is it improves readability. Rather than jumping to the bottom of the post, the footnote appears with the main body of the text and disappears when you're finished with it. 

The code is pretty straight forward:

{{< highlight javascript >}}
// this script requires jQuery
$(document).ready(function() {
    Footnotes.setup();
});

var Footnotes = {
    footnotetimeout: false,
    setup: function() {
        var footnotelinks = $("a[rel='footnote']")
        
        footnotelinks.unbind('mouseover',Footnotes.footnoteover);
        footnotelinks.unbind('mouseout',Footnotes.footnoteoout);
        
        footnotelinks.bind('mouseover',Footnotes.footnoteover);
        footnotelinks.bind('mouseout',Footnotes.footnoteoout);
    },
    footnoteover: function() {
        clearTimeout(Footnotes.footnotetimeout);
        $('#footnotediv').stop();
        $('#footnotediv').remove();
        
        var id = $(this).attr('href').substr(1);
        var position = $(this).offset();
    
        var div = $(document.createElement('div'));
        div.attr('id','footnotediv');
        div.bind('mouseover',Footnotes.divover);
        div.bind('mouseout',Footnotes.footnoteoout);

        var el = document.getElementById(id);
        div.html($(el).html());
        div.find("a[rev='footnote']").remove();
        
        div.css({
            position:'absolute',
            width:'20em',
            background:'#F7F6EE',
            padding:'0em 1em 0em 1em',
            border:'solid 1px',
            'font-size':'90%',
            'font-family': 'Helvetica, Sans-serif',
            'line-height':1.4,
            '-moz-border-radius':'.5em',
            '-webkit-border-radius':'.5em',
            'border-radius':'.5em',
            opacity:0.95
        });
        $(document.body).append(div);
        

        var left = position.left;
        if(left + 420  > $(window).width() + $(window).scrollLeft())
            left = $(window).width() - 420 + $(window).scrollLeft();
        var top = position.top+20;
        if(top + div.height() > $(window).height() + $(window).scrollTop())
            top = position.top - div.height() - 15;
        div.css({
            left:left,
            top:top
        });
    },
    footnoteoout: function() {
        Footnotes.footnotetimeout = setTimeout(function() {
            $('#footnotediv').animate({
                opacity: 0
            }, 600, function() {
                $('#footnotediv').remove();
            });
        },100);
    },
    divover: function() {
        clearTimeout(Footnotes.footnotetimeout);
        $('#footnotediv').stop();
        $('#footnotediv').css({
                opacity: 0.9
        });
    }
}
{{< / highlight >}}

I've also switched my Jekyll markdown conversion to [kramdown](https://github.com/gettalong/kramdown) (having previously used [rdiscount](https://github.com/rtomayko/rdiscount)), which handles the creation of footnotes and inserts the return character (↩) and hyperlinking between the number and the note.

[^1]: Like this!
