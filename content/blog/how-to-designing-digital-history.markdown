---
date: 2008-11-29T12:12:29Z
categories:
- design
- digital humanities
- teaching
title: 'How To: Designing Digital History'
url: /2008/11/29/how-to-designing-digital-history/
---

Our digital history seminar  is currently in the midst of designing  our digital projects and has gotten me thinking about how to design  digital scholarship and the tools that are available for helping in the  construction of projects.  Beginners to digital history are somewhat  daunted by the design process.  The lingo of web design - HTML, CSS,  Javascript, XML, metadata, hypertext - seems like an endless alphabet of  ambiguous elements in the digital environment. This post means to  highlight some tools and resources digital humanists might find useful  in constructing their own projects, as well as impart some of my  first-hand experience thus far in the design process.

Like it or  not, the truth is that <a href="http://chnm.gmu.edu/digitalhistory/designing/" target="_blank">good design matters</a>.  Dan Cohen <a href="http://www.dancohen.org/2008/11/12/design-matters/" target="_blank">points out </a>that digital history must be useful and  used -- useful because users can explore and learn from digital  projects, and used because users utilize the resource and spread the  word about the project.  We've all probably stumbled upon poor websites  with eye-straining backgrounds, flashing items, text and images spread  everywhere, and a lack of a coherent layout or navigation (check out  some of the pages featured on <a href="http://www.webpagesthatsuck.com/" target="_blank">Web Pages that Suck</a>).

The most basic element of web design is <a href="http://www.w3schools.com/html/default.asp" target="_blank">HTML</a>,  and making things look good on the user's end may require some use of <a href="http://www.w3schools.com/css/default.asp" target="_blank">CSS</a>,  which defines how HTML elements are displayed in web browsers.  In  addition to understanding how web elements work, historians can also use  the help of library sciences and computer sciences to assist them in  web design (thank you!).  Several open source tools are also available  to help historians design their own projects.

<strong>Tools</strong>:

<a href="http://www.mozilla.com/en-US/firefox/" target="_blank">FIrefox</a> web browser:  If you're not using Firefox, you should be.  For  starters, Firefox is far more secure and is good at blocking spyware and  mal-ware from installing on your computer.  Users can also install  extensions and plugins to Firefox to add and improve features on the web  browser.  (Some day maybe I'll write up a post on all the plugins I use  on my Firefox browser).

<a href="https://addons.mozilla.org/en-US/firefox/addon/1843" target="_blank">Firebug</a>:  Firebug is a Firefox plugin that gives  users a host of web development tools.  With the tool, users can edit,  debug, and monitor web encoding (HTML, CSS, Javascript, etc.) live on  any page.  This allows you to make changes to a site without having to  re-upload the files and view the changes.  The tool also allows you to  inspect individual elements of a web page to see how they're  constructed.  If you find a site you like, you can use Firebug to view  the separate elements of a site and see how they're constructed and  relate to one another.

<a href="https://addons.mozilla.org/en-US/firefox/addon/60" target="_blank">Web Developer</a>:  Another Firefox plugin useful for  web development.  Web Developer allows users to view CSS, HTML source,  Javascript, disable elements in a website, and a whole lot more.

<a href="http://www.adobe.com/products/photoshop/photoshop/" target="_blank">Photoshop</a>:  Or its open-source and free alternative,  <a href="http://www.gimp.org/" target="_blank">GIMP</a>.  Photoshop/GIMP is a graphics editing software  package that allows users to author graphics, edit images, or convert  image formats.  Photoshop is far more powerful that GIMP, and GIMP isn't  necessarily a Photoshop clone.  But for basic image work, GIMP is an  excellent tool if one can't afford the pricetag on or have access to  Photoshop.

<a href="http://www.adobe.com/products/dreamweaver/" target="_blank">Dreamweaver</a>:  Or its open-source and free alternative, <a href="http://kompozer.net/" target="_blank">Kompozer</a>.  These  two programs are <a href="http://en.wikipedia.org/wiki/WYSIWYG" target="_blank">WYSIWYG</a> web authoring software packages.  The nice thing about WISIWYG-based  web authoring is it doesn't require coding knowledge to design sites.   The easiest and most common design is table-based layouts, which  Dreamweaver handles very well. For more advanced design, Dreamweaver can  handle <a href="http://www.w3schools.com/css/css_reference.asp" target="_blank">CSS</a>, <a href="http://www.w3schools.com/jsref/default.asp" target="_blank">Javascript</a>,  <a href="http://www.asp.net/" target="_blank">ASP.NET</a>, <a href="http://www.adobe.com/products/coldfusion/" target="_blank">ColdFusion</a>,  <a href="http://en.wikipedia.org/wiki/JavaServer_Pages" target="_blank">JavaServer  Pages</a>, and <a href="http://www.w3schools.com/php/php_ref_array.asp" target="_blank">PHP</a>.

<a href="http://www.oxygenxml.com/">Oxygen  XML Editor</a> or <a href="http://www.download.com/XML-Marker/3000-7241_4-10202365.html" target="_blank">XML Marker</a>:  eXtensible Markup Language (<a href="http://www.w3schools.com/xml/default.asp" target="_blank">XML</a>)  is designed for sharing and structuring data on the web that allows  users to define mark-up elements.  For example, a newspaper article of  mine looks like this (slightly abbreviated):

{{< highlight xml >}}
<?xml version="1.0" encoding="utf-8"?>
<sourceDesc>
<bibl>
<author n="Blair, William M.">William M. Blair</author>
<title level="a" type="main">"500 Indians Seize U.S. Building After Scuffle With Capital Police"</title>
<title level="j">New York Times</title>
<pubPlace>New York</pubPlace>
<date value="1972-11-03">03 November 1972</date>
<biblScope type="page">81</biblScope>
</bibl>
</sourceDesc>

<text>
<body>

<div1 type="body">

<head type="main">500 Indians Seize U.S. Building After Scuffle With Capital Police</head>
<p>About 500 American Indians protesting injustices, took control tonight of the Bureau of Indian Affairs....</p>
</div1>
</body>
</text>

{{< / highlight >}}

The document conforms to <a href="http://www.tei-c.org/index.xml" target="_blank">Text Encoding  Initiative</a> standards.  Most importantly, XML defines the elements  behind my newspaper article and preserves the original text.  My  editorial decisions for tagging elements has little impact on the text  itself.  My site makes the XML code freely available for users so they  can download the source files and edit them and use them as they need.

<strong>Resources</strong>:

<a href="http://www.w3schools.com/" target="_blank">W3 Schools</a>:   The W3 Schools provide online web building tutorials that conform to <a href="http://www.w3.org/" target="_blank">W3C</a> standards.  If you're looking for a good place to start learning about  web design, I would start here.

<a href="http://webstyleguide.com/" target="_blank">Web Style Guide</a>:  The web style guide is an indispensable resource for learning about web  design and thinking about design basics.  This is another must-have  resource as you design digital history projects.

Dan Cohen and Roy Rosenzweig, "<a href="http://chnm.gmu.edu/digitalhistory/designing/" target="_blank">Designing  for the History Web</a>":  Every beginning digital historian should  read <a href="http://chnm.gmu.edu/digitalhistory/index.php" target="_blank"><em>Digital  History</em></a> before starting their projects, but this chapter  especially is important for thinking about project design and  sustainability.  I haven't touched on sustainability in this post, which  is a topic Brent and/or I will probably visit soon.  If there's no  sustainability of a project, then pouring your energy into information  architecture is meaningless.  Nevertheless, this resource from two  historians is excellent for thinking about good design.

<strong>Concluding Thoughts</strong>

The design process is just that -- a process.  There is no single  framework that will apply to designing projects, and the design of a  site is likely to undergo several transformations and redesigns.  I like  the current design of my digital project, which you can <a href="http://segonku.unl.edu/~jheppler/index.htm" target="_blank">view  here on our developmental server</a>, though I doubt this is the final  draft of my design -- this is only what I've been able to put together  in the last four months (note the construction is still on-going, so not  everything works).  I'm also experimenting with some <a href="http://en.wikipedia.org/wiki/Web_2.0" target="_blank">Web 2.0</a> ideas that I would like to implement into my project so users can  query, search, and manipulate material.

Don't try and reinvent the wheel with digital history design.  At  this stage, I think the important thing is to get your digital  scholarship on the web without wasting time and money on design.  It  might also be time to start taking advantage of prior digital  scholarship and build off of projects that already exist.  For instance,  digital historians might find a new argument to make out of the  material at the <a href="http://valley.vcdh.virginia.edu/" target="_blank">Valley of  the Shadow</a>.

The best way to learn this stuff, I've found, is to experiment  through trial and error.  Embrace the technology and don't be afraid to  dive in.

Do you have any other advice on design or useful tools?  Leave a  note in the comments or drop me an <a href="mailto:jason.heppler@huskers.unl.edu">email</a>.
