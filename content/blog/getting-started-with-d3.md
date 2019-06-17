---
date: 2013-08-06T22:14:20Z
description: Some resources for getting started with D3.js.
categories:
- Javascript
- D3
- programming
title: Getting Started with D3
url: /2013/08/06/getting-started-with-d3/
---

Over the last few months I have been learning [D3.js](http://d3js.org/), a Javascript library developed by [Mike Bostock](http://bost.ocks.org/mike/) designed for creating data-driven visualizations and the manipulation of DOM elements. Since I've started picking it up, I've also had the opportunity to work with two undergraduate research assistants and, inexplicably, I convinced a graduate school friend to learn Javascript. In helping introduce others to D3, I noticed I had a consistent set of resources, sites, people, and tutorials I pointed them towards. So, I thought I would bring all of this together into an annotated blog post that will be useful not only for me to point people to, but other readers might also find helpful.

### So, What Is D3?

D3 (Data Driven Documents) is a Javascript library that allows you to build amazing visualizations on the web, using the web standards established by HTML, CSS, and SVG. This means I have the option to port and scale visualizations around. Need a static visualization for a printed piece? We can resize the SVG without losing quality. Putting together an interactive visualization? We can scale up and down easily. 

D3 binds arbitrary data to a Document Object Model (DOM) and apply transformations to the document. Some tasks might be fairly simple, such as creating a table from an array of numbers. Let's say we have [this table of data](/d/fire_prop.csv) about high-risk property in places where western wildfires have the potential to do a lot of damage. We want to display the contents as an HTML table and can do so with something like this:

{{< highlight javascript >}}
var columns = ["perc_high_risk_prop",
  "avg_val_low_risk",
  "avg_val_high_risk",
  "state",
  "very_high_risk_properties"];

d3.csv("/d/fire_prop.csv", function(error, data) {
    // Print the table by placing a `div` with `id` of `container` 
    // below, e.g. <div id="container"></div>
    var table = d3.select("#container").append("table"),
        thead = table.append("thead"),
        tbody = table.append("tbody");

    thead.append("tr")
    .selectAll("th")
      .data(columns)
    .enter()
      .append("th")
      .text(function(column) { return column; });

    var rows = tbody.selectAll("tr")
      .data(data)
    .enter()
      .append("tr");

    var cells = rows.selectAll("td")
      .data(function(row) {
          return columns.map(function(column) {
              return {column: column, value: row[column]};
          });
      })
    .enter()
      .append("td")
      .text(function(d) { return d.value; });
  });
{{< / highlight >}}

The result is:

<div id="chart_container"></div>

Neat, huh? We can also do much more complex visualizations. Say, for example, I wanted to use the above data to visualize the relationship between wildfires and the number of high risk properties for each state. In the case below, the size of the dot indicates the number properties considered high risk (the larger the circle, the higher the risk), while color indicates the percentage of properties that are high risk (determined by [categorical coloring](https://github.com/mbostock/d3/wiki/Ordinal-Scales#categorical-colors)). 

<div id="fire_chart"></div>
<div class="attribution">Source: <a href="http://www.corelogic.com/about-us/news/new-corelogic-report-reveals-wildfires-pose-risk-to-more-than-740,000-western-u.s.-homes.aspx">CoreLogic</a> and <a href="http://www.ecowest.org/fires/wui-homes/">EcoWest</a></div>

We achieve that with something like this:

{{< highlight javascript >}}
var margin = {top: 20, right: 20, bottom: 30, left: 60},
    width = 620 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select("#fire_chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("/d/fire_prop.csv", function(error, data) {
  
  data.forEach(function(d) {
    d.avg_val_low_risk = +d.avg_val_low_risk;
    d.avg_val_high_risk = +d.avg_val_high_risk;
    d.very_high_risk_properties = +d.very_high_risk_properties;
  });

  x.domain(d3.extent(data, function(d) { return d.avg_val_low_risk; })).nice();
  y.domain(d3.extent(data, function(d) { return d.avg_val_high_risk; })).nice();

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Avg. Low Risk Property");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Avg. High Risk Property")

  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      // .attr("r", 3.5)
      .attr("cx", function(d) { return x(d.avg_val_low_risk); })
      .attr("cy", function(d) { return y(d.avg_val_high_risk); })
      .attr("r", function(d) {
        return Math.sqrt(parseInt(d.very_high_risk_properties) * 0.01);
      })
      .style("fill", function(d) { return color(d.perc_high_risk_prop); });

});
{{< / highlight >}}

No Excel. No Flash. No static images. Nothing proprietary. Just good, clean HTML.

### Useful Resources

I won't be going through what all of this code does line by line. There's a lot going on here, and going into detail about each element would result in a lengthy series of posts. Instead, want to point to several resources that I have found useful in learning D3 and that others might find useful as well. 

**[Mike Bostock](http://bost.ocks.org/mike/)**. Straight to the source. Mike is a computer science PhD student at Stanford University and now designs interactive graphics for the *New York Times*. Mike's site has several examples for using D3, so spend some time perusing his site. Especially useful are:

* [For Example](http://bost.ocks.org/mike/example/)
* [How Selections Work](http://bost.ocks.org/mike/selection/)
* [Let's Make a Map](http://bost.ocks.org/mike/map/)
* [Working with Transitions](http://bost.ocks.org/mike/transition/)
* [Nested Selections](http://bost.ocks.org/mike/nest/)
* [Thinking with Joins](http://bost.ocks.org/mike/join/)
* [Three Little Circles](http://mbostock.github.io/d3/tutorial/circle.html)

**[Bl.ocks](http://bl.ocks.org/)**. Built by Mike, bl.ocks is designed as a simple code viewer. Using Github Gists, examples can be coded up and then displayed through bl.ocks. There are lots and lots of examples here, and a lot of the things I've learned probably started here looking at code. See, for example, [Mike's blocks](http://bl.ocks.org/mbostock).

**[D3js.org](http://d3js.org)**. The official documentation for D3.js. See especially [the examples](https://github.com/mbostock/d3/wiki/Gallery). 

**[Scott Murray's tutorials](http://alignedleft.com/tutorials/d3)**. [Scott](http://xarts.usfca.edu/~shmurray/) is an assistant professor of design at the [University of San Francisco](http://usfca.edu/) and author of *[Interactive Data Visualization for the Web](http://shop.oreilly.com/product/0636920026938.do)*. The book started out as the online tutorials and serves as an excellent introduction to D3. There's also a [free online version of the book](http://chimera.labs.oreilly.com/books/1230000000345/index.html).

**[Jason Davies](http://www.jasondavies.com/)**. Jason is a consultant on data visualization and has many of examples on his site. He's also a [regular contributor](https://github.com/mbostock/d3/graphs/contributors) to the core functionality provided by D3.

**[Stack Overflow D3 tag]()**. Stack Overflow is your friend. Have a question about how to do something? Turn here first.

**[d3-js Google Group](https://groups.google.com/forum/#!forum/d3-js)**. Most questions should be directed to Stack Overflow, but the Google Group is fairly active and contains a lot of good information.

**[My D3 Pinboard bookmarks](https://pinboard.in/u:hepplerj/t:d3/)**. My Pinboard tags for D3 are ever-growing, and contain a lot of tutorials, examples, and references. You might find some of these useful too.

I could go on and on, and you can probably expect to find much more (and more interesting) here on the site regarding D3 visualizations. But in the meantime, I hope these resources are useful for anyone just starting out. 

<script>
var columns = ["perc_high_risk_prop",
"avg_val_low_risk",
"avg_val_high_risk",
"state",
"very_high_risk_properties"];

d3.csv("/data/fire_prop.csv", function(error, data) {
    // Print the table by placing a `div` with `id` of `container` 
    // below, e.g. <div id="container"></div>
    var table = d3.select("#chart_container").append("table"),
        thead = table.append("thead"),
        tbody = table.append("tbody");

    thead.append("tr")
    .selectAll("th")
      .data(columns)
    .enter()
      .append("th")
      .text(function(column) { return column; });

    var rows = tbody.selectAll("tr")
      .data(data)
    .enter()
      .append("tr");

    var cells = rows.selectAll("td")
      .data(function(row) {
          return columns.map(function(column) {
              return {column: column, value: row[column]};
          });
      })
    .enter()
      .append("td")
      .text(function(d) { return d.value; });
  });

// chart viz      
var margin = {top: 20, right: 20, bottom: 30, left: 60},
    width = 620 - margin.left - margin.right,
    height = 450 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .range([0, width]);

var y = d3.scale.linear()
    .range([height, 0]);

var color = d3.scale.category10();

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left");

var svg = d3.select("#fire_chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.csv("/data/fire_prop.csv", function(error, data) {
  data.forEach(function(d) {
    d.avg_val_low_risk = +d.avg_val_low_risk;
    d.avg_val_high_risk = +d.avg_val_high_risk;
    d.very_high_risk_properties = +d.very_high_risk_properties;
  });

  x.domain(d3.extent(data, function(d) { return d.avg_val_low_risk; })).nice();
  y.domain(d3.extent(data, function(d) { return d.avg_val_high_risk; })).nice();

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis)
    .append("text")
      .attr("class", "label")
      .attr("x", width)
      .attr("y", -6)
      .style("text-anchor", "end")
      .text("Avg. Low Risk Property");

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("class", "label")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Avg. High Risk Property")

  svg.selectAll(".dot")
      .data(data)
    .enter().append("circle")
      .attr("class", "dot")
      .attr("cx", function(d) { return x(d.avg_val_low_risk); })
      .attr("cy", function(d) { return y(d.avg_val_high_risk); })
      .attr("r", function(d) {
        return Math.sqrt(parseInt(d.very_high_risk_properties) * 0.01);
      })
      .style("fill", function(d) { return color(d.perc_high_risk_prop);
    });

});
</script>
