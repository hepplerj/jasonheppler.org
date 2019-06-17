---
title       : Intermediate ggplot
author      : Jason A. Heppler
output:
  rmdshower::shower_presentation:
    self_contained: false
    katex: true
    ratio: 16x10
---



## Advanced ggplot

1.  Theming
2.  Labels and Annotation
3.  Network Visualization
4.  Mapping
5.  Reproducable Research

---

## Theming

Themes allow you to control the appearance of **non-data** elements. We can build graphics that are visually appealing through the modification, addition, or subtraction of titles, axis labels, tick marks, and legends. 

Consult the [theming documentation](http://docs.ggplot2.org/current/theme.html) to see all the available options.

---

## Theming

Let's look at a new data set.


```r
library(historydata)
data("early_colleges")
early_colleges %>% head(5)
```

```
## Source: local data frame [5 x 6]
## 
##                  college         original_name         city state
##                    (chr)                 (chr)        (chr) (chr)
## 1                Harvard                    NA    Cambridge    MA
## 2       William and Mary                    NA Williamsburg    VA
## 3                   Yale                    NA    New Haven    CT
## 4 Pennsylvania, Univ. of                    NA Philadelphia    PA
## 5              Princeton College of New Jersey    Princeton    NJ
## Variables not shown: established (int), sponsorship (chr)
```

---

## Theming


```r
ggplot(early_colleges, aes(x = state)) +
  geom_bar() +
  labs(title = "Early Colleges")
```

<img src="figure/unnamed-chunk-2-1.png" title="plot of chunk unnamed-chunk-2" alt="plot of chunk unnamed-chunk-2" style="display: block; margin: auto;" />

---

## Theming

`ggplot` comes with a few default themes:

Theme             | Description
-----             | -----------
theme_bw()        | A theme with white background and black gridlines.
theme_classic()   | A classic-looking theme, with x and y axis lines and no gridlines.
theme_gray()      | The default theme function.
theme_minimal()   | A minimal theme with white background and faint gridlines.
theme_linedraw()  | A theme for making line graphs have high contrast.

---

## Theming - Minimal


```r
ggplot(early_colleges, aes(x = state)) +
  geom_bar() +
  theme_minimal() +
  labs(title = "Early Colleges")
```

<img src="figure/unnamed-chunk-3-1.png" title="plot of chunk unnamed-chunk-3" alt="plot of chunk unnamed-chunk-3" style="display: block; margin: auto;" />

---

## Theming - Classic


```r
ggplot(early_colleges, aes(x = state)) +
  geom_bar() +
  theme_classic() +
  labs(title = "Early Colleges")
```

<img src="figure/unnamed-chunk-4-1.png" title="plot of chunk unnamed-chunk-4" alt="plot of chunk unnamed-chunk-4" style="display: block; margin: auto;" />

---

## ggthemes

We could also leverage the `ggthemes` package, which collects several theme options you can call upon for your visualizations.


```r
# install.packages('ggthemes')
library(ggthemes)
```

```
## Warning: package 'ggthemes' was built under R version 3.2.3
```

---

## ggthemes - The Economist


```r
ggplot(early_colleges, aes(x = state)) +
  geom_bar() +
  theme_economist() +
  labs(title = "Early Colleges")
```

<img src="figure/unnamed-chunk-6-1.png" title="plot of chunk unnamed-chunk-6" alt="plot of chunk unnamed-chunk-6" style="display: block; margin: auto;" />

---

## ggthemes - Stephen Few

Using Stephen Few's "[Practical Rules for Using Color in Charts](http://www.perceptualedge.com/articles/visual_business_intelligence/rules_for_using_color.pdf)."


```r
ggplot(early_colleges, aes(x = state)) +
  geom_bar() +
  theme_few() +
  labs(title = "Early Colleges")
```

<img src="figure/unnamed-chunk-7-1.png" title="plot of chunk unnamed-chunk-7" alt="plot of chunk unnamed-chunk-7" style="display: block; margin: auto;" />

---

## ggthemes - FiveThirtyEight


```r
ggplot(early_colleges, aes(x = state)) +
  geom_bar() +
  theme_fivethirtyeight() +
  labs(title = "Early Colleges")
```

<img src="figure/unnamed-chunk-8-1.png" title="plot of chunk unnamed-chunk-8" alt="plot of chunk unnamed-chunk-8" style="display: block; margin: auto;" />

---

## ggthemes - Edward Tufte


```r
ggplot(early_colleges, aes(x = state)) +
  geom_bar() +
  theme_tufte() +
  labs(title = "Early Colleges")
```

<img src="figure/unnamed-chunk-9-1.png" title="plot of chunk unnamed-chunk-9" alt="plot of chunk unnamed-chunk-9" style="display: block; margin: auto;" />

---

## Theming - Creating Your Own

For example:


```r
theme(
    axis.text = element_text(size = 14),
    legend.key = element_rect(fill = "navy"),
    legend.background = element_rect(fill = "white"),
    legend.position = c(0.14, 0.80),
    panel.grid.major = element_line(colour = "grey40"),
    panel.grid.minor = element_blank(),
    panel.background = element_rect(fill = "navy")
  )
```

---

## Theming

Let's modify our college counts chart. 

- apply the `ggplot` minimal theme
- make the x-axis labels bold
- rotate the x-asix labels to make them easier to read

---

## Theming


```r
# I'm adding a custom font to my theme
library(showtext)
font.add.google("Lato")

ggplot(early_colleges, aes(x = state)) +
  geom_bar(fill = "#007D68") +
  labs(title = "Early Colleges by State") +
  theme_minimal() +
  theme(
    plot.title = element_text(size = 15, face = "bold"),
    text = element_text(family="Lato", size=12),
    axis.text = element_text(face = "bold", size = 8),
    axis.text.x = element_text(angle = 90, hjust = 1)
   )
```

<img src="figure/unnamed-chunk-11-1.png" title="plot of chunk unnamed-chunk-11" alt="plot of chunk unnamed-chunk-11" style="display: block; margin: auto;" />

---

## Labels and Annotation


```r
data("judges_people")
# Remove rows with missing data
judges_sub <- judges_people[complete.cases(judges_people),]
judges_sub %>% head(5)
```

```
## Source: local data frame [5 x 13]
## 
##   judge_id name_first name_middle  name_last name_suffix birth_date
##      (int)      (chr)       (chr)      (chr)       (chr)      (int)
## 1     2705      James     Lindsay     Almond         Jr.       1898
## 2       58      Glenn       Leroy     Archer         Jr.       1929
## 3       87     Thomas      Austin Ballantine         Jr.       1926
## 4     3297    Lindley    Garrison  Beckworth         Sr.       1913
## 5      144      David        Owen      Belew         Jr.       1920
## Variables not shown: birthplace_city (chr), birthplace_state (chr),
##   death_date (int), death_city (chr), death_state (chr), gender (chr),
##   race (chr)
```

---

## Labels and Annotation


```r
judges.plot.death <- ggplot(judges_sub, aes(x = death_date,
                                            y = reorder(factor(name_last), death_date)))
judges.plot.death + geom_point() +
  labs(x = "", y ="",
       title = "Federal Judges, Death Date")
```

---

## Labels and Annotation


```r
judges.plot.death + geom_point() +
  geom_text(aes(x = death_date - 0.1, label = name_last, hjust = 1.2), size = 2) +
  labs(x = "", y ="",
       title = "Federal Judges, Death Date") +
  theme_minimal() +
  theme(
    panel.grid.major.y = element_blank(),
    axis.text.y = element_blank(),
    axis.ticks = element_blank()
  )
```

---

## Labels and Annotation


```r
judges.plot.lifespan <- ggplot(judges_sub, aes(x = death_date, 
                            y = reorder(factor(name_last), birth_date)))
judges.plot.lifespan + geom_segment(aes(yend = name_last, xend=birth_date)) + 
  geom_point() +
  theme_minimal() +
  labs( x="Year of Death", 
        y="",
        title="Lifespans of Appointed Judges") +
  theme(panel.grid.major.y=element_blank(), 
        axis.ticks=element_blank(),
        axis.title=element_text(size=8,face="bold"),
        axis.text.y = element_text(size=6)
        )
```

---

## Labels and Annotation


```
## Error in eval(expr, envir, enclos): object 'judges.plot.lifespan' not found
```

---

## Annotation




```r
ggplot(superfund.by.state, aes(St, count)) +
  geom_bar(stat="identity", aes(fill = count > 60)) +
  labs(title="Superfund Sites by State") +
  theme_minimal() + theme(legend.position='none') +
  labs(x = "State", y = "Count") +
  scale_fill_manual(values = c('#4C4C4C', '#8E001C'))
```

<img src="figure/unnamed-chunk-18-1.png" title="plot of chunk unnamed-chunk-18" alt="plot of chunk unnamed-chunk-18" style="display: block; margin: auto;" />

---

## ggrepel


```r
# install.packages('gapminder')
library(gapminder)
keepers <- subset(gap_with_colors,
                continent %in% c("Africa", "Europe") & year == 2007)
```

```
## Error in subset(gap_with_colors, continent %in% c("Africa", "Europe") & : object 'gap_with_colors' not found
```

```r
ggplot(keepers, aes(x = gdpPercap, y = lifeExp)) + 
  geom_jitter(position = position_jitter(width = 0.1, height = 0), alpha = 1/4) +
  geom_text(data = subset(keepers, gdpPercap > 30000), aes(label = country))
```

```
## Error in ggplot(keepers, aes(x = gdpPercap, y = lifeExp)): object 'keepers' not found
```

---

## ggrepel


```r
# install.packages('gapminder')
# install.packages('ggrepel')
library(gapminder)
library(ggrepel)
keepers <- subset(gap_with_colors,
                continent %in% c("Africa", "Europe") & year == 2007)
```

```
## Error in subset(gap_with_colors, continent %in% c("Africa", "Europe") & : object 'gap_with_colors' not found
```

```r
ggplot(keepers, aes(x = gdpPercap, y = lifeExp)) + 
  geom_jitter(position = position_jitter(width = 0.1, height = 0), alpha = 1/4) +
  geom_text_repel(data = subset(keepers, gdpPercap > 30000), aes(label = country))
```

```
## Error in ggplot(keepers, aes(x = gdpPercap, y = lifeExp)): object 'keepers' not found
```

---

## Network Analysis

`ggplot` does not come with a default method for visualizing networks, but communities of users are working to bring network visualization into the grammar of graphics.

Note that these are only for building network visualizations. If you need to do network analysis, you will need to leverage packages like [igraph](http://igraph.org/r/).

---

## Extending - geom_net


```r
# install.packages("geomnet")
library(geomnet)
library(historydata)
data('tudors')

tudors %>% head(5)
```

```
## Source: local data frame [5 x 3]
## 
##       person_1            person_2 relationship
##          (chr)               (chr)        (chr)
## 1    Henry VII   Elizabeth of York       spouse
## 2 Arthur Tudor Catharine of Aragon       spouse
## 3   Henry VIII Catharine of Aragon       spouse
## 4   Henry VIII         Anne Boleyn       spouse
## 5   Henry VIII        Jane Seymour       spouse
```

---

## Extending - geom_net


```r
tudor.network <- ggplot(data = tudors, aes(from_id = person_2, to_id = person_1))
tudor.network + geom_net(label = TRUE, linewidth=0.5, 
           fontsize = 3, size = 6,
           ecolour = ifelse(tudors$relationship == "child", "#a6cee3", "#b2df8a")) +
  theme_net() +
  labs(title = "Tudors")
```

<img src="figure/unnamed-chunk-22-1.png" title="plot of chunk unnamed-chunk-22" alt="plot of chunk unnamed-chunk-22" style="display: block; margin: auto;" />

---

## Extending - geom_net


```r
data("lesmis")
lesmisnet <- merge(lesmis$edges, lesmis$vertices, by.x="from", by.y="label", all=TRUE)
lemisnetwork <- ggplot(data=lesmisnet, aes(from_id=from, to_id=to))
lemisnetwork + geom_net(layout="fruchtermanreingold", label=TRUE, vjust=-0.5, aes(linewidth = degree/5)) + theme_net()
```

<img src="figure/unnamed-chunk-23-1.png" title="plot of chunk unnamed-chunk-23" alt="plot of chunk unnamed-chunk-23" style="display: block; margin: auto;" />

---

## Mapping

---

## Reproducable Research

---

##### Worksheet #2: Advanced ggplot
