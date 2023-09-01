---
department: Department of History and Art History
email: 'jheppler@gmu.edu'
instructor: Jason Heppler
instructorurl: 'https://jasonheppler.org'
office: Nebraska
officehours: 'By appointment'
room: Zoom
semester: Spring
title: "Digital Public History"
toc: true
university: George Mason University
year: 2024
---

# Description

This is the website for Digital Public History (Spring 2024), a six-week-long bootcamp introducing faculty, staff, and students to the R language at the [University of Nebraska at Omaha](https://unomaha.edu/). The bootcamp teaches you the how and why of data wrangling and visualization using modern R tools.

This bootcamp will do two things. First, it will teach you how to use modern tools to create insightful, beautiful, reproducible visualizations of data. Second, you will learn about the theory and practice of efforts to visualize data. We will think about different ways of looking at data, where data comes from, and the implications of choosing to represent it in different ways.

By the end of the workshop series you will

- Understand the basic principles behind effective data visualization.
- Have a practical sense for why some graphs and figures work well, while others may fail to inform or actively mislead.
- Know how to clean, manipulate, and save datasets in R using dplyr and tidyr.
- Know how to create a wide range of plots in R using ggplot2.
- Have an understanding of some issues surrounding the collection and representation of data.
- Have exposure to some basic data science methods in R.

# Essentials

You are always welcome to talk with me during office hours via Zoom. My [office hours page](/office-hours/) has instructions on how to book an appointment.

Since this year's workshop will not be running synchronously, I've divided out our usual weekly schedule into themes instead that you can complete at your own pace. For each area, there includes readings, extra resources, and interactive worksheets for you to work through. Short videos that dive into each of these topic areas will be available on Canvas and should be viewed before attempting the worksheets.

The online version of this syllabus is the only authoritative version and will be updated as necessary. Things may change significantly in response to the pandemic.

## Recommended Readings

I strongly recommend getting ahold of the following books. The online or draft versions are fine, don't feel like you must purchase them:

> Kieran Healy, *Data Visualization: A Practical Introduction* (Princeton: Princeton University Press, 2019), <http://socviz.co/>. [Draft version free online; print version at Amazon or other bookshops.]

> Hadley Wickham and Garrett Grolemund, *R for Data Science: Import, Tidy, Transform, Visualize, and Model Data* (Sebastopol, California: O’Reilly Media, 2017), <http://r4ds.had.co.nz/>. [Free online; print version at Amazon or other bookshops.]

> Claus E. Wilke, *Fundamentals of Data Visualization* (Sebastopol, California: O’Reilly Media, 2019), <https://serialmentor.com/dataviz/>. [Draft version free online; print version at Amazon or other bookshops.]

## Software

We will do all of our visualization work in this class using the programming language R. We will use RStudio to manage our code and projects. R and RStudio are widely used tools for data analysis in academia and industry.

You will need to install some software first. You can consult the [orientation material](https://jasonheppler.org/courses/bootcampr.2021/reading/01-reading/), but in brief here’s what to do:

1. Get the most recent version of R. R is free and available for Windows, Mac, and Linux operating systems. [Download the version of R compatible with your operating system](https://cloud.r-project.org). If you are running Windows or MacOS, you should choose one of the *precompiled binary* distributions (i.e., ready-to-run applications) linked at the top of the R Project's webpage.

2. Once R is installed, [download and install R Studio](https://rstudio.com). R Studio is an "Integrated Development Environment," or IDE. This means it is a front-end for R that makes it much easier to work with. R Studio is also free, and available for Windows, Mac, and Linux platforms.

3. Install the [tidyverse library](tidyverse.org) and several other add-on packages for R. These libraries provide useful functionality that we will take advantage of throughout the book. You can learn more about the tidyverse's family of packages at its website.

To install the tidyverse and some additional useful packages, make sure you have an Internet connection and then launch R Studio. Type the following lines of code at R’s command prompt, located in the window named "Console," and hit return. In the code below, the `<-` arrow is made up of two keystrokes, first `<` and then the short dash or minus symbol, `-`.

```{r}
my_packages <- c("tidyverse", "broom", "gapminder", "GGally", "ggraph", 
                 "ggrepel", "ggridges", "gridExtra", "here", 
                 "maps", "mapproj", "mapdata", "rlang", "scales", 
                 "sp", "usethis", "devtools")

install.packages(my_packages, repos = "http://cran.rstudio.com")
```

R Studio should then download and install these packages for you. It may take a little while to download everything. If anything in Step 3 seems difficult or confusing, please see the related Canvas videos on installing R packages.

You may, alternatively, choose to use [rstudio.cloud](https://rstudio.cloud/), which is currently free for use but I must also warn you that it’s alpha software and may not remain stable. RStudio Cloud is great for running RStudio in the browser, thus eliminating the need for you to install R and related software on your own machine.

# Topics

In lieu of weekly meetings, this workshop series will instead be organized by topics and themes. You may wish to consult [last year's syllabus](https://jasonheppler.org/courses/bootcampr.2020/) for extended material and topics not being covered this semester.

### Orientation and Setup

Never used R before? Don’t have RStudio installed? Need to know how to install libraries in R? This orientation session is here to help you learn the very basics of the software, tools, and methods in R that we'll be using.

*Content coming soon.*

[Readings](https://jasonheppler.org) | [Worksheet](https://jasonheppler.org) | [Exercises](https://jasonheppler.org) | [Slides](https://jasonheppler.org)

### R Basics

Learn the basics of base R and methods of the Tidyverse library. This workshop introduces general concepts of the R language how to do basic operations in R.

*Content coming soon.*

[Readings](https://jasonheppler.org) | [Worksheet](https://jasonheppler.org) | [Exercises](https://jasonheppler.org) | [Slides](https://jasonheppler.org)

### Intro to the Tidyverse

Learn and compare methods of the tidyverse library which will be used for the remainder of the workshop series.

*Content coming soon.*

[Readings](https://jasonheppler.org) | [Worksheet](https://jasonheppler.org) | [Exercises](https://jasonheppler.org) | [Slides](https://jasonheppler.org)

### Spark Joy with Data (Tidy data in R) 

Do you work with data that often needs cleaning up? Do you have a need to summarize or aggregate data within one source, or among multiple sources? This workshop introduces the dplyr and tidyr methods from the tidyverse library.

*Content coming soon.*

[Readings](https://jasonheppler.org) | [Worksheet](https://jasonheppler.org) | [Exercises](https://jasonheppler.org) | [Slides](https://jasonheppler.org)

### Making Graphs 

The visualization of data allows us to communicate effectively, spot patterns in large datasets, or simply look for issues with the underlying data. This workshop introduces best practices and principles for data visualization, and works hands-on with the ggplot library from the tidyverse.

*Content coming soon.*

[Readings](https://jasonheppler.org) | [Worksheet](https://jasonheppler.org) | [Exercises](https://jasonheppler.org) | [Slides](https://jasonheppler.org)

# Code of Conduct 

In the interest of fostering an open and welcoming environment, we as educators, students, contributors, and maintainers pledge to making participation in this workshop and our community a harassment-free experience for everyone, regardless of age, body size, disability, ethnicity, gender identity and expression, level of experience, nationality, personal appearance, race, religion, or sexual identity and orientation.

## Our Standards

Examples of behavior that contributes to creating a positive environment include:

- Using welcoming and inclusive language
- Being respectful of differing viewpoints and experiences
- Gracefully accepting constructive criticism
- Focusing on what is best for the community
- Showing empathy towards other community members

Examples of unacceptable behavior by participants include:

- The use of sexualized language or imagery and unwelcome sexual attention or advances
- Trolling, insulting/derogatory comments, and personal or political attacks
- Public or private harassment
- Publishing others’ private information, such as a physical or electronic address, without explicit permission
- Other conduct which could reasonably be considered inappropriate in a professional setting

## Our Responsibilities

I am responsible for clarifying the standards of acceptable behavior and am expected to take appropriate and fair corrective action in response to any instances of unacceptable behavior.

I have the right and responsibility to remove, edit, or reject comments, commits, code, wiki edits, issues, and other contributions that are not aligned to this Code of Conduct, or to ban temporarily or permanently any contributor for other behaviors that they deem inappropriate, threatening, offensive, or harmful.

## Scope

This Code of Conduct applies both within project spaces and in public spaces when an individual is representing the course or its community. Examples of representing a project or community include using an official project e-mail address, posting via an official social media account, or acting as an appointed representative at an online or offline event. Representation of this course may be further defined and clarified by me.

## Enforcement

Instances of abusive, harassing, or otherwise unacceptable behavior may be reported by contacting <jheppler@unomaha.edu>. I will review and investigate all complaints, and will respond in a way that I deem appropriate to the circumstances. I am obligated to maintain confidentiality with regard to the reporter of an incident.

Participants who do not follow or enforce the Code of Conduct in good faith may face temporary or permanent repercussions.

## Attribution

This Code of Conduct is adapted from the Contributor Covenant, version 1.4, available at http://contributor-covenant.org/version/1/4
