---
title: Research Design and Geography of the Post
date: 2014-10-30
categories:
- Stanford
- research
---
*[Read this along with [Cameron Blevins's companion post](http://www.cameronblevins.org/posts/postal-geography-and-the-golden-west/).]*

After more than a year of work, [Geography of the Post is live](http://cameronblevins.org/gotp/). I wanted to take a moment at the project's launch to reflect back on the design decisions we made with the project and to document these changes.[^2]

The design of the project went through several iterations as we sought to solve two problems: The first, the most efficient way of presenting the material. Since we are dealing with such a large amount of information (our total dataset approaches 100,000 post offices), we ran into problems very early on with the performance of the map. Dragging, panning, and zooming the map became frustratingly slow -- a user experience you always hope to avoid. We built in manual zooming features to work around that problem.

Second, our bigger question revolved around how to present the information. We wanted to determine what sort of views we could present to users in order to ask interesting research questions. Our early design iterations focused on Oregon. We started by loading our data onto a Google map:

![Google map](/assets/images/gotp_google.png)

We experimented with alternative views, such as [hex binning](https://www.mapbox.com/blog/binning-alternative-point-maps/) visually understand geographic concentrations of post offices through histograms:

![Hex bin map](/assets/images/gotp_hex.png)

These were useful views, but we had considerations that we wanted to take into account with the offices that simply plotting points doesn't let us get at. It's interesting, in one sense, to see the concentrations of post offices. But these points don't represent much else. If we are using the post to understand something about the movement of people into the American West, we needed more interaction with the points in order for us to query the information with more granularity.

With the assistance of some amazing undergraduate research assistants -- 
Jocelyn Hickock and Tara Balakrishnan -- we created methods for determining the status of a post office at any point in time. Users are presented with two views. The first is what we called "Duration View," which uses transparency of the points in order to convey the "age" of a post office. These "ages" update according to the span of time that you draw on the timeline, or you can view the map as a whole and see areas of the West that have had the oldest (or youngest) post offices.

A second view of the post offices we built into the project is what we've called "Status View." This view shows us one of four statuses that a post office can be in during a given span of time: closed, opened, open throughout, or open and closed. The view gives us a chance to look for large areas of closings or openings in the context of surrounding post offices and raise questions about why those changes are occurring.

![Side by side comparison of current design](/assets/images/gotp_sideby.png)

Why document our design decisions? Part of my own goal in digital humanities 
generally is the reusability of approaches, methods, tools, code, and design 
in projects that may be far afield from my own work. But I also believe that 
we can make our work more methodologically transparent by presenting the 
artifacts and iterations of our design process. Not only because designs have 
implied and explicit arguments, but because sharing the process helps others 
in their design process. Furthermore, exposing our design and thought process has helped us to think more deeply about our own design decisions.[^3]

In other words, I am trying to answer Trevor Owens' call that we take "a few moments at the end of a project to reflect on what you wanted to accomplish, what actually happened, and what you learned from the process."[^1] Our goal at the outset was to determine what we could about the relationship between the U.S. Post and population growth in the American West. By and large, I think the project goes a long way in giving us an overall picture of population growth at specific areas in the West, a more granular view of populations than we can see in [choropleth maps](http://en.wikipedia.org/wiki/Choropleth_map) because of the [West's county problem](http://www.cameronblevins.org/posts/the-county-problem-in-the-west/). Since counties are so large in the West, a choropleth fails to really give us a sense of where people are at in space.

![The West's county problem, by Cameron Blevins](/assets/images/gotp_westcountyproblem.jpg)  
<small>Population in the West, 1870. Map by Cameron Blevins.</small>

But the choice of using post office points to surmise about the growth of population centers gives us a greater sense of where people are going in the West. To make that process more clear than a static map could convey, we designed a timeline feature that allows users to drag a span of time -- from a single year to the entire span of time contained in the dataset -- and visualize how these changes occur over the course of the century. You have a specific interest in the West during the Civil War? You can draw the timespan and see those offices between 1860 and 1865. More interested in the late nineteenth century? Select those years. Want to watch year-by-year how post offices grow in the West? Select a year, and drag across the timeline to watch places in the West expand.

There are elements of the map that I wish we had designed in from the beginning. I'd like to see this same information on a terrain map rather than a flat map -- to see how the landscape might have determined where post offices located. I would love to add layers to the map -- railroads, major roads, postal routes. Other quanifiable information might also be overlaid on the map -- population figures, salaries of postmasters, perhaps even voting patterns. We may have even built in more conceptual and experimental visualizations that could have allowed us to distort time and space (think cartograms) to speculate on the ways that the post shaped how people thought about space. In these ways, we could add more layers of information that may cause us to ask new kinds of questions.

Visualizations are provocations for interpretation. For those who approach the project -- researchers, teachers, students, the public -- my hope is that the visualization provokes questions and ideas. The sheer scale of the office network is arresting, but interacting with that network provides a chance to view it from different perspectives. The interactions with the research, I hope, give users a chance to ask different kinds of questions that a static map simply couldn't prompt because it lacks the ability to reshape the information easily. As an interactive scholarly work, Geography of the Post lets users explore the space of the Post and the growth of the American West.

[^1]: Trevor Owens, "[Please Write it Down: Design and Research in Digital Humanities](http://journalofdigitalhumanities.org/1-1/please-write-it-down-by-trevor-owens/)," *Journal of Digital Humanities* 1 (Winter 2011).
[^2]: I have also talked about the project and some of our design decisions on [The First Draft Podcast, episode 6](http://www.firstdraftpodcast.com/post/91733292838/s1e6-the-pragmatic-tyranny-of-building-digital).
[^3]: The code for this project is [available on Github](http://github.com/stanford-history/geographypost). I also have a desire to make this code cleaner and open to wider use by others. Parts of the code are fairly specific to Cameron's dataset, but I'd like the map to be able to handle any data dropped into it.
