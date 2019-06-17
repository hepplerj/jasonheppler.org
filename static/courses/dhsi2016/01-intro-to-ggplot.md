---
title       : Introduction to ggplot
subtitle    : Visualization in the Humanities
author      : Jason A. Heppler
job         : Stanford University
framework   : io2012        # {io2012, html5slides, shower, dzslides, ...}
highlighter : highlight.js  # {highlight.js, prettify, highlight}
hitheme     : tomorrow_night 
widgets     : []            # {mathjax, quiz, bootstrap}
mode        : selfcontained # {standalone, draft}
knit        : slidify::knit2slides
---



## Visualization Design

Edward Tufte suggests that graphical excellence is defined by "that which gives the viewer the **greatest number of ideas**, in the **shortest time**, with the **least ink**, the **smallest space**, and which **tells the truth about data**."

<span id="smaller">
Edward Tufte, *The Visual Display of Quantitative Information* (Graphics Press, 1983).
</span>

---

## Visualization Design

##### **truth** & **data**

---

## Visualization Design

Edward Tufte suggests that graphical excellence is defined by "that which gives the viewer the **greatest number of ideas**, in the **shortest time**, with the **least ink**, the **smallest space**, and which **tells the truth about data**."

<span id="smaller">
Edward Tufte, *The Visual Display of Quantitative Information* (Graphics Press, 1983).
</span>

---


## Population Data


```r
library(historydata)
data(us_state_populations)

# Let's look at the first five rows
library(dplyr)
us_state_populations %>% head(5)
```

```
## Source: local data frame [5 x 4]
## 
##   GISJOIN  year         state population
##     (chr) (int)         (chr)      (int)
## 1    G090  1790   Connecticut     237655
## 2    G100  1790      Delaware      59096
## 3    G130  1790       Georgia      82548
## 4    G240  1790      Maryland     319728
## 5    G250  1790 Massachusetts     475199
```

---

## Plotting Population Data

A ridiculous example.

<img src="assets/fig/unnamed-chunk-2-1.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" style="display: block; margin: auto;" />

---

## The Grammar of Graphics

A visualization concept created by Leland Wilkinson (1999) to **define** the elements of statistical graphics:

> "... describes the meaning of what we do when we construct statistical graphics ... More than a taxonomy ... Computational system based on the underlying mathematics of representing statistical functions of data."

Adapted by the creator of `ggplot`, Hadley Wickham, in 2009. `ggplot` offers a:
> 1. **consistent and simple syntax** for 
> 2. **describing statistical graphics**, and is
> 3. **highly modular** to break graphs into 
> 4. **semantic components**. 

<span id="smaller">
*See* Hadley Wickham, "A Layered Grammar of Graphics," *Journal of Computational and Graphical Statistics* vol. 19 no. 1 (2010): 3--28 <http://vita.had.co.nz/papers/layered-grammar.pdf>.
</span>

---

## The Grammar of Graphics

Let's break down what we did with the `ggplot` code. The code for our previous bar chart looked like:


```r
ggplot(data = us_state_populations, aes(x = year, y = population)) +
  geom_bar(aes(fill = state), stat="identity") +
  ggtitle("U.S. Historical State Populations") +
  theme(legend.position="none") +
  labs(x = "Year", y = "Population")
```

---

## The Grammar of Graphics

Let's break down what we did with the `ggplot` code. The code for our previous bar chart looked like:


```r
ggplot(data = us_state_populations, aes(x = year, y = population)) +
  geom_bar(aes(fill = state), stat="identity")
```

---

## The Grammar of Graphics

Let's break down what we did with the `ggplot` code. The code for our previous bar chart looked like:


```r
ggplot(data = us_state_populations, aes(x = year, y = population)) +
  geom_bar(aes(fill = state), stat="identity")
```

`ggplot` needs:

> 1. mapping of **data**
> 2. to **aesthetic attributes**
> 3. using **geometric objects**
> 4. with data **statistically transformed**
> 5. and, if needed, mapped onto a **facet** or **coordinate system**

---

## The Grammar of Graphics

**data**: data as an R data frame 

**coordinate system**: describe 2D space data is projected onto, such as Cartesian coordinates, polar coordinates, and map projections.

**geoms**: describe the geometric objects that represent data, such as points, lines, and polygons.

**aesthetics**: describe visual characteristics that represent data, such as position, size, color, and shape. 

**scales**: for each aesthetic, describe how visual characteristic is converted to display values, such as log scales, color scales, size scales, and shape scales.

**stats**: describe statistical transformations such as counts, means, medians, or regression lines.

**facets**: describe how data is split into small multiples.

---

## The Grammar of Graphics

Let's break down what we did with the `ggplot` code. The code for our previous bar chart looked like:


```r
ggplot(data = us_state_populations, aes(x = year, y = population)) +
  geom_bar(aes(fill = state), stat="identity")
```

### Mapping of **data**:


```r
data = us_state_populations
```

### to **aesthetic attributes**:


```r
aes(x = year, y = population)
```

---

## The Grammar of Graphics

Let's break down what we did with the `ggplot` code. The code for our previous bar chart looked like:


```r
ggplot(data = us_state_populations, aes(x = year, y = population)) +
  geom_bar(aes(fill = state), stat="identity")
```

### using **geometric objects**:


```r
geom_bar(aes(fill = state), stat="identity")
```

<span id="smaller">
See the `ggplot` [`geom_bar` documentation](http://docs.ggplot2.org/current/geom_bar.html) for the differences in the `stat` flag. By default, `geom_bar` uses "stat='count'" which sets the height of the bar proportion to the number of cases in each group. Since we want the height of the bars to represent values in the data, we use "stat='identity'" to map a variable to the `y` aesthetic.
</span>

---

## The Grammar of Graphics

### with data **statistically transformed**

Name      | Description 
----      | -----------
bin       | Divide continuous range into bins, and count number of points in each
boxplot   | Compute statistics necessary for boxplot
contour   | Calculate contour lines
density   | Compute 1d density estimate
identity  | Identity transformation, f (x) = x
jitter    | Jitter values by adding small random value
qq        | Calculate values for quantile-quantile plot
quantile  | Quantile regression
smooth    | Smoothed conditional mean of y given x
summary   | Aggregate values of y for given x
unique    | Remove duplicated observations

### and, if needed, mapped onto a **facet** or **coordinate system**

---

## Simplicity

R makes the production of these graphics simple. Note that we were able to create a barchart with two lines of code. If I wanted to reproduce that example in JavaScript using the D3.js library, it would be something like this:

--- .smaller


```javascript
var margin = {top: 20, right: 20, bottom: 30, left: 40},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, width], .1);

var y = d3.scale.linear()
    .range([height, 0]);

var xAxis = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10, "%");

var svg = d3.select("body").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

d3.tsv("data.tsv", type, function(error, data) {
  if (error) throw error;

  x.domain(data.map(function(d) { return d.letter; }));
  y.domain([0, d3.max(data, function(d) { return d.frequency; })]);

  svg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + height + ")")
      .call(xAxis);

  svg.append("g")
      .attr("class", "y axis")
      .call(yAxis)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Frequency");

  svg.selectAll(".bar")
      .data(data)
    .enter().append("rect")
      .attr("class", "bar")
      .attr("x", function(d) { return x(d.letter); })
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.frequency); })
      .attr("height", function(d) { return height - y(d.frequency); });
});

function type(d) {
  d.frequency = +d.frequency;
  return d;
}
```

---

##### Simplicity

---

##### Let's look at another ridiculous example

---

## The ggplot Grammar


```r
ggplot(data = us_state_populations, aes(x=year, y=population)) + geom_point()
```

<img src="assets/fig/unnamed-chunk-12-1.png" title="plot of chunk unnamed-chunk-12" alt="plot of chunk unnamed-chunk-12" style="display: block; margin: auto;" />

---

## Scatterplot of Population


```r
populations <- ggplot(data = us_state_populations, 
                      aes(x = year, y = population, size=population, alpha=population))
populations + geom_point()
```

<img src="assets/fig/unnamed-chunk-13-1.png" title="plot of chunk unnamed-chunk-13" alt="plot of chunk unnamed-chunk-13" style="display: block; margin: auto;" />

---

## Scatterplot of Population - Smooth


```r
populations + geom_point() + geom_smooth(color="red")
```

<img src="assets/fig/unnamed-chunk-14-1.png" title="plot of chunk unnamed-chunk-14" alt="plot of chunk unnamed-chunk-14" style="display: block; margin: auto;" />

---

## Scatterplot of Population - Jitter


```r
populations + geom_jitter(alpha = 0.4)
```

<img src="assets/fig/unnamed-chunk-15-1.png" title="plot of chunk unnamed-chunk-15" alt="plot of chunk unnamed-chunk-15" style="display: block; margin: auto;" />

---

## Scatterplot of Population - Text Labels


```r
populations + geom_text(aes(label=state), size = 3)
```

<img src="assets/fig/unnamed-chunk-16-1.png" title="plot of chunk unnamed-chunk-16" alt="plot of chunk unnamed-chunk-16" style="display: block; margin: auto;" />

---

## Using Facets


```r
population_subset <- subset(us_state_populations, 
                        state %in% c("New Mexico", "Arizona", "Utah", "Colorado")) 
ggplot(population_subset, aes(x = year, y = population)) + 
  geom_bar(stat = "identity") +
  facet_grid(state ~ .)
```

<img src="assets/fig/unnamed-chunk-17-1.png" title="plot of chunk unnamed-chunk-17" alt="plot of chunk unnamed-chunk-17" style="display: block; margin: auto;" />

---

## Line Graph - Too Many Variables


```r
p <- ggplot(us_state_populations, aes(x = year, y = population))
p + geom_line(aes(color = state))
```

<img src="assets/fig/unnamed-chunk-18-1.png" title="plot of chunk unnamed-chunk-18" alt="plot of chunk unnamed-chunk-18" style="display: block; margin: auto;" />

---

## Facets to the Rescue!


```r
p + geom_line() +
  facet_wrap(~state, ncol = 12) +
  theme_linedraw()
```

<img src="assets/fig/unnamed-chunk-19-1.png" title="plot of chunk unnamed-chunk-19" alt="plot of chunk unnamed-chunk-19" style="display: block; margin: auto;" />

---

## Scales

Controlling scales means we can **control the mapping of data** (domain) to **aesthetics** (range).

Scales depend on the variable type: **discrete** (factor, logical, or character) or **continuous** (numeric).

Scale specifications have the form of `scale_<aesthetic>_<scalename>()`:

- *aesthetic*: x, y, color, size, or shape
- *scalename*: grey, gradient, hue, manual, or continuous

---

## Scales


```r
paulist_missions %>% head(5)
```

```
## Source: local data frame [5 x 11]
## 
##   mission_number                        church          city state
##            (int)                         (chr)         (chr) (chr)
## 1              1           St. Joseph's Church      New York    NY
## 2              2          St. Michael's Church       Loretto    PA
## 3              3             St. Mary's Church Hollidaysburg    PA
## 4              4 Church of St. John Evangelist     Johnstown    PA
## 5              5            St. Peter's Church      New York    NY
## Variables not shown: start_date (chr), end_date (chr), confessions (int),
##   converts (int), order (chr), lat (dbl), long (dbl)
```

---

## Scales

Let's start with what we know and look at population growth in the western U.S.


```r
western_subset <- subset(us_state_populations, 
                        state %in% c("Arizona", "California", "Colorado", "Idaho",
                                     "Montana", "Nevada", "New Mexico", "Oregon",
                                     "Utah", "Washington",  "Wyoming")) 
ggplot(data = western_subset, aes(x = year, y = population, fill=state)) + 
  geom_bar(stat="identity")
```

<img src="assets/fig/unnamed-chunk-21-1.png" title="plot of chunk unnamed-chunk-21" alt="plot of chunk unnamed-chunk-21" style="display: block; margin: auto;" />

---

## Scales

Setting a grey scale, for example:


```r
ggplot(western_subset, aes(x = year, y = population, fill = state)) +
  geom_bar(stat="identity") +
  scale_fill_grey()
```

<img src="assets/fig/unnamed-chunk-22-1.png" title="plot of chunk unnamed-chunk-22" alt="plot of chunk unnamed-chunk-22" style="display: block; margin: auto;" />

---

## Scales


```r
ggplot(western_subset, aes(x = year, y = population, fill = state)) +
  geom_bar(stat="identity") +
  scale_fill_discrete(name = "State", label = c("AZ", "CA", "CO", "ID",
                                                "MT", "NV", "NM", "OR", 
                                                "UT", "WA", "WY")) +
  scale_x_continuous(name = "Year")
```

<img src="assets/fig/unnamed-chunk-23-1.png" title="plot of chunk unnamed-chunk-23" alt="plot of chunk unnamed-chunk-23" style="display: block; margin: auto;" />

---

## Scales - Changing Fill Scale


```r
ggplot(western_subset, aes(x = year, y = population, fill = state)) +
  geom_bar(position = "dodge", stat = "identity") +
  scale_fill_brewer(palette = "Paired") +
  theme_minimal()
```

<img src="assets/fig/unnamed-chunk-24-1.png" title="plot of chunk unnamed-chunk-24" alt="plot of chunk unnamed-chunk-24" style="display: block; margin: auto;" />

---

## Scales - Y-Reversed

Let's look at a new set of data.


```r
data(paulist_missions)
paulist_missions %>% head(5)
```

```
## Source: local data frame [5 x 11]
## 
##   mission_number                        church          city state
##            (int)                         (chr)         (chr) (chr)
## 1              1           St. Joseph's Church      New York    NY
## 2              2          St. Michael's Church       Loretto    PA
## 3              3             St. Mary's Church Hollidaysburg    PA
## 4              4 Church of St. John Evangelist     Johnstown    PA
## 5              5            St. Peter's Church      New York    NY
## Variables not shown: start_date (chr), end_date (chr), confessions (int),
##   converts (int), order (chr), lat (dbl), long (dbl)
```

---
    
## Scales - Y-Reversed
  

```r
ggplot(paulist_missions, aes(x = confessions, y = converts)) +
  geom_point(alpha = 0.5, shape = 1) +
  labs(title = "Paulist Missions",
       x = "Confessions",
       y = "Converts") 
```

<img src="assets/fig/unnamed-chunk-26-1.png" title="plot of chunk unnamed-chunk-26" alt="plot of chunk unnamed-chunk-26" style="display: block; margin: auto;" />

---

## Scales - Y-Reversed
  

```r
ggplot(paulist_missions, aes(x = confessions, y = converts)) +
  geom_point(alpha = 0.5, shape = 1) +
  labs(title = "Paulist Missions",
       x = "Confessions",
       y = "Converts") + 
  scale_y_reverse()
```

<img src="assets/fig/unnamed-chunk-27-1.png" title="plot of chunk unnamed-chunk-27" alt="plot of chunk unnamed-chunk-27" style="display: block; margin: auto;" />

---

## Same Data, Plotted Differently


```r
ggplot(paulist_missions,
       aes(x = state, y = confessions, size = converts)) +
  geom_jitter(position = position_jitter(w=.2, h=.1), shape = 21) +
  scale_size_area(max_size = 10) +
  theme(
    axis.text.x = element_text(angle = 90, hjust = 1) 
  )
```

<img src="assets/fig/unnamed-chunk-28-1.png" title="plot of chunk unnamed-chunk-28" alt="plot of chunk unnamed-chunk-28" style="display: block; margin: auto;" />

---

##### Worksheet #1: Introduction to ggplot
