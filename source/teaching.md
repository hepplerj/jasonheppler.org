---
layout: page
title: Teaching
permalink: /teaching/
---

Some of the classes and workshops I have offered in recent years, including pointers to upcoming courses and other resources when available. For more teaching information, see <a href="{{ site.owner.vita }}">my vita</a>.

I would be honored to teach at your institution about **digital history**, **data visualization**, **spatial history**, **network analysis**, or **urban environmental history**. You can reach me at [@jaheppler](http://twitter.com/{{site.owner.twitter}}) or by [email](mailto:{{site.owner.email}}). 

## 2017

#### <i class="fa fa-graduation-cap" style="color: #0336c; font-size: 80%; padding-top: 6px;"></i> [DH Workshop: Network Analysis](http://jasonheppler.org/projects/aha-workshop/)  
This workshop emphasizes hands-on learning of working with network data and visualization. Historians working out the complex documentary relationships between people and institutions can often find surprising, or previously unexplored, connections by using network analysis and its visual representations. This workshop will help participants familiarize themselves with basic network-analysis vocabulary as well as using Gephi for network analysis and visualization. &middot; *American Historical Association*

## 2016

#### <i class="fa fa-graduation-cap" style="color: #0336c; font-size: 80%; padding-top: 6px;"></i> [Digital History: Concepts, Methods, Problems](http://jasonheppler.org/courses/dph.2016/)  
This course confronts the current and potential influence of digital media on the theory and practice of history. We will focus on resources enabling new forms of scholarship, looking at tools for visualization and text analysis for generating historical interpretations, and explore alternative forms of publishing, design, and research. The course covers a range of readings along with a critical engagement with tools and resources. Students will also contribute to a digital spatial exhibit on the history of Silicon Valley. &middot; *Stanford University*

#### <i class="fa fa-graduation-cap" style="color: #0336c; font-size: 80%; padding-top: 6px;"></i> [Maps and Networks in the Classroom](http://jasonheppler.org/projects/csu-workshop/)  
This seminar will emphasize the hands-on learning of working with geospatial and network data, with special attention paid to its application to the classroom. The workshop seeks to prep teachers to instruct their students in various approaches to digital humanities in their classes. &middot;  *Carl Bimson Humanities Seminar, Colorado State University*

#### <i class="fa fa-graduation-cap" style="color: #0336c; font-size: 80%; padding-top: 6px;"></i> [R, Interactive Graphics, and Data Visualization for the Humanities](https://github.com/hepplerj/dhsi2016-visualization)   
The visualization of historical and literary data has become a common practice in digital humanities, drawing on older traditions of visualizing in these disciplines. A variety of out-of-the-box tools exist for easily jumping in to data and information visualization, but when we use these tools we run the risk of research questions being wedged into a tool rather than the tool fitting the research. This course introduces students to humanities visualizations, using a programming language that let researchers prioritize their questions over the requirements of ready-made tools. &middot; *Digital Humanities Summer Institute*

## 2015

#### <i class="fa fa-graduation-cap" style="color: #0336c; font-size: 80%; padding-top: 6px;"></i> [Teaching Digital History](https://docs.google.com/document/d/11Efu9HDXd2ASVCDIGUtJxQE-JOlOCSw1G5V26TTOuNU/edit)  
In this workshop, we will discuss ways to integrate digital methods into history classrooms. These new approaches aid students, teachers, and professors in working with primary sources, crafting original arguments, and presenting historical work in a public venue. &middot; *Missouri Valley History Conference, University of Nebraska at Omaha*

## 2014

#### <i class="fa fa-graduation-cap" style="color: #0336c; font-size: 80%; padding-top: 6px;"></i> [Digital History: Sources, Methods, Problems](http://jasonheppler.org/teaching/hist205f.2014/)  
This is a hands-on course that introduces students to the use of digital tools and sources to conduct original historical research, analyze and interpret findings, and communicate results. Digital history is an interdisciplinary approach that seeks to bring digital technology into conversation with humanities disciplines and, specifically, seeks to analyze, synthesize, and present knowledge through computational media. Digital historians create digital archival collections, databases, digitize objects, analyze humanistic material in digital form, and addresses scholarly questions often difficult, if not impossible, to ask using non-computational methods. &middot; *Stanford University*

#### <i class="fa fa-graduation-cap" style="color: #0336c; font-size: 80%; padding-top: 6px;"></i> Doing Digital History  
This workshop series addresses a variety of digital methods for historians, including working with Zotero, Paper Machines, spatial humanities, databases, text analysis, topic modeling, and research management tools. The workshop allows faculty and graduate students to get hands-on with a variety of tools, including MALLET, Neatline, Omeka, Google Earth/Maps, DEVONThink, Zotero, and Paper Machines. &middot; *Stanford University*

## 2012

#### <i class="fa fa-graduation-cap" style="color: #0336c; font-size: 80%; padding-top: 6px;"></i> Programming in the Humanities  
At THATCamp AHA, I proposed this session. Over the course of my training as a digital historian, I have had two opportunities where classroom instruction involved learning a programming language. The first was in Prof. Stephen Ramsay’s Electronic Text course during the fall of 2010 where I formally learned Ruby. The other was this past fall in a digital humanities seminar with Prof. William Thomas where I self-taught myself Objective-C in a month to build an iOS application. I am, most broadly, interested in this idea of programming in the humanities as separate from Software Studies (Lev Manovich et al.), Critical Code Studies (Mark Marino et al.), and Platform Studies (Ian Bogost et al.) The digital humanities perspective on code is different, and perhaps this is an area for discussion. &middot; *THATCamp AHA, Chicago*

## Posts

<ul class="list-items">
{% for post in site.categories.teaching %}
    <li>
        <span>{{ post.date | date: "%B %e, %Y" | ordinalize  }}</span>
        <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
{% endfor %}
</ul>
