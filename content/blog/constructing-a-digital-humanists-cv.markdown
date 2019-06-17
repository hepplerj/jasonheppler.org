---
date: 2011-08-04T14:35:58Z
categories:
- career
title: Constructing a Digital Humanists' C.V.
url: /2011/08/04/constructing-a-digital-humanists-cv/
---

I've been thinking a lot lately about the best ways to represent or illustrate technical skill in the digital humanities. In developing my [C.V.](http://cv.jasonheppler.org), for example, I wanted something more illustrative than just a list of programming languages that I've had experience with our touched in some way. Just because I have some rudimentary knowledge of Python I picked up two years ago, that doesn't mean I'd feel comfortable getting hired as a Python expert (of course, I would hope the interview process would weed me out). Then again, there's truth to the claim that once you know one language it's fairly easy to pick up additional ones. So simply *having* knowledge of *some* sort of language will serve you well anyways. Plus, I get the sense that DH administrators expect a certain level of on-the-job training and are happy if you have demonstrated experience with a language because they know you'll likely pick up the skills as you need them. (If you're anything like me, you'll stay up half the night reading up on how to do such and such or lurking on Stack Overflow for a solution).

But I still want some way to visualize my knowledge of technical skills, both as a way to make clear my own confidence in my skills and hopefully set myself apart from a stack of CV's all vying for the same job. After doing some thinking I decided to try an experiment and visualize my technical knowledge base as a bar graph. 

There are many ways to represent knowledge of technical skill. You could, like LinkedIn, list out the years that you've been working with a programming language as well as specify your level of experience (beginner, intermediate, and expert). While this is useful, I feel like there's still a disconnect with knowledge and time. What exactly is "beginner" knowledge? Instead of just saying I was a beginner or writing out the amount of time I've been using a language (for example, I've been using Javascript for a while but by no means am I any good with it) I decided to find some way to visually represent both the duration of my skills and my confidence with the skill.

To start with, I built a simple timeline out of CSS to represent time. The far left of the bar graph would be the beginning of my technical skill. As you move right, new bar graphs are added to represent the initiation and duration of use for each skill through time:

![Skills timeline](http://cv.jasonheppler.org/image/timeline_shot.png)

I'm not sure this completely illustrates any key points. Part of the issue might be the lack of X and Y axis labels or milemarkers, but I'm also just not sure how useful the visualization is. But for the time being, I'm happy with it and think it does provide some idea of my technical timeline.

I achieved this through a brief piece of CSS code and some simple HTML markup.

CSS:

{{< highlight css >}}
ul.events {
    list-style-type: none;
    margin: 0;
    padding: 0 0 20px 0;
}

ul.events li {
    background: #eee;
    border: 1px solid #ddd;
    color: #707070;
    font-size: 1em;
    font-weight: bold;
    margin-bottom: 6px;
    padding: 3px 0;
    position: relative;
    text-align: center;
    line-height: 12px;
}

ul.events li em {
    color: #aaa;
    font-weight: normal;
    font-size: 0.9em;
}
{{< / highlight >}}

HTML:

{{< highlight html >}}
<h3>Timeline of Technical Skills</h3>
<div class="timeline">
<ul class="events">
  <li style="width: 13.5%; left: 86%;">Java <em>(2011)</em></li>
  <li style="width: 29.5%; left: 70%;">Ruby <em>(2010 - 2011)</em></li>
  <li style="width: 39.5%; left: 60%;">PHP <em>(2009 - 2011)</em></li>
  <li style="width: 39.5%; left: 60%;">MySQL <em>(2009 - 2011)</em></li>
  <li style="width: 49.5%; left: 50%;">Python <em>(2008 - 2011)</em></li>
  <li style="width: 49.5%; left: 50%;">Javascript <em>(2008 - 2011)</em></li>
  <li style="width: 99.5%; left: 0;">HTML &amp; CSS <em>(1998 - 2011)</em></li>
</ul> <!-- end .events -->
{{< / highlight >}}

The next idea was to continue with the bar graph theme to represent markup, query, and programming knowledge, along with application skills. I built this with a similar idea in mind: using CSS and envisioning a horizontal bar graph starting with 0% on the left and 100% on the right, I created a graph of my confidence and experience with various technical skills:

![Application skills](http://cv.jasonheppler.org/image/app_shot.png)

![Markup and query skills](http://cv.jasonheppler.org/image/markup_shot.png)

Again, this was accomplished through some CSS and HTML markup.

CSS:

{{< highlight css >}}
div.progress-container {
    width: 680px;
    margin: 2px 5px 2px 0;
    padding: 1px;
    float: left;
    background: #cccccc;
}

div.progress-container > div {
    background-color: #4183c4;
    height: 12px;   
}
{{< / highlight >}}

HTML:

{{< highlight html >}}
<h2>Technical Skills</h2>
  <h3>Application Skills</h3>
  <table cellspacing="3" cellpadding="3">
    <tbody>
      <tr>
        <td width="150">Photoshop CS5</td>
        <td><div class="progress-container"><div style="width: 40%"></div></div></td>
      </tr>
      <tr>
        <td>Terminal</td>
        <td><div class="progress-container"><div style="width: 80%"></div></div></td>
      </tr>
    </tbody>
  </table>
{{< / highlight >}}

The latest addition to the technical skills section of my CV is to demonstrate the application of these skills: rather than only communicate time and confidence, I also wanted to articulate in what capacity I've used these skills. At the moment I've simply listed these skills and related projects out, in a way that I think does a fair job of communication (although I'm still thinking about other ways to do this).

I feel that I've gotten a bit closer in trying to communicate technical knowledge, though with this much going on it almost overwhelms the CV. But in a field that's actively seeking knowledgeable, technically-minded individuals this seems like a useful experiment in visualizing knowledge.
