---
layout: post
title: "Teaching the tidyverse to R novices"
date: 2018-02-27 
image:
    feature:
    thumb:
categories: r
tags:
- technology
comments: false
medium: "https://medium.com/@jaheppler/teaching-the-tidyverse-to-r-novices-7747e8ce14e"
...

This semester I am [running my R workshops](https://github.com/endangereddataweek/resources) once again, and as always I start by teaching people the packagers of the `tidyverse`. As part of [Endangered Data Week](http://endangereddataweek.org/), I am teaching two workshops introducing beginner R programmers to data tidying/manipulation and data visualization.

I’ve taken this approach to using the `tidyverse` instead of base R for two primary reasons. First, learning how to manipulate data with dplyr and tidyr is easy to understand conceptually and often easier than learning the idiosyncrasies of R. When I show students two lines of code that achieve the same thing in base R and `dplyr`, I've always gotten the same answer: the `dplyr` way is much easier to read and understand.

![The ease of reading dplyr code vs. base R.]()

I’m not alone in my approach here — David Robinson has [made the same case](http://varianceexplained.org/r/teach-tidyverse/) in regard to `ggplot2`. My rationale largely follows his: that teaching students the basics of the `tidyverse` means they can be up and running with a powerful set of tools quickly. In the case of Endangered Data Week, that means introducing students to messy government data, tidying that data, working with data to produce new data, and drawing conclusions. I’m able to teach these concepts relatively quickly thanks to the power behind `dplyr` and `tidyr`. I don’t need to worry about teaching the syntax around `[[]]` or `$` or `c()`. If students need base R techniques or have questions, they can always get in touch with me for more pointers.

For our data manipulation exercises in our workshop, [we work off an RMarkdown worksheet together](https://github.com/unolibraries/workshops/tree/master/data-manipulation-r) during the session. I provide them with some population data I compiled for [a project I worked on last year](https://github.com/hepplerj/midwest-map-population) and we work through most of the functions available in `dplyr` and `tidyr`---and if we don’t get through it all, that’s fine; they have the worksheet to complete on their own time. (I make teaching these workshops a little easier for myself by also installing RStudio Server and the necessary packages on Digital Ocean so we can be up and running quickly.)

Second, students can be up and running with a good amount of knowledge about R, data manipulation, and visualization in a relatively short amount of time. After an hour-and-a-half together, even students who haven’t programmed previously are learning to work with the language. The grammar of data tidying allows these concepts to be grasped quickly since each step builds upon the previous one. Chaining together a series of tidyverse functions allows the students to see the steps necessary to reshape, clean, and explore a dataset. And those skills can be applied to any dataset, meaning students can take what they learn and use them towards other projects or classes. Likewise, I prize `tidyverse` methods for their consistency. I’ve seen some wild ways people have accessed or manipulated columns in a data frame (just spend some time on Stack Overflow), but anytime I read someone's `tidyverse` example the process clicks faster. That consistency, again, makes using, finding answers, and learning the language that much easier.

This isn’t to say I don’t teach any base R — even in the above workshops, students still learn about `sum()`, `slice()`, logical operators, and other base methods. But pairing some of the base R methods with the `tidyverse` makes for a powerful set of tools that can have students manipulating and visualizing data quickly.

This approach of teaching `tidyverse` with an interactive worksheet has worked well — students are up and running with R and applying new skills quickly. My goal is to help people to work with data, and the `tidyverse` provides a powerful way to get started.
