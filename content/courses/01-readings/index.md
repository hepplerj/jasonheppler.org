---
instructor: Jason Heppler
title: "Getting Started: Readings"
toc: true
---

## Getting Started

1) Install a pre-compiled binary of R for your OS from here: <https://cloud.r-project.org>

Already have R installed? **This is a great time to make sure your R installation is current**. From the R or RStudio console, check your current version like so:

```{r}
R.version.string
## [1] "R version 3.5.3 (2019-03-11)"
```

2) Install RStudio Desktop.

Already have RStudio? **This is a great time to upgrade to the latest Preview version**. Download it here: <https://www.rstudio.com/products/rstudio/download/preview/>. Alternatively, you may opt to sign up for [rstudio.cloud](https://rstudio.cloud).

3) Update your R packages:

```{r}
update.packages(ask = FALSE, checkBuilt = TRUE)
```

Take the time to make sure everything is installed and up-to-date before the workshop. During workshops, there is limited time to troubleshoot R installations. Try to be sure that your R version isn’t more than two minor versions behind the current version (is your version 3.3, but the current version is 3.5.2? You’ll want to update.) Is your version of RStudio old? It might be good to use the Preview version of RStudio unless you have reason to prefer the regular release.

## Install Git

An essential component of working with R or any piece of code is version control. You’ll want to install Git on your machine. [Follow the instructions here](https://happygitwithr.com/install-git.html) for information on getting Git on your operating system.

## Install Essential Packages

To install the tidyverse and some additional useful packages, make sure you have an Internet connection and then launch R Studio. Type the following lines of code at R's command prompt, located in the window named "Console," and hit return. In the code below, the `<-` arrow is made up of two keystrokes, first `<` and then the short dash or minus symbol, `-`.

```{r}
my_packages <- c("tidyverse", "broom", "gapminder", "GGally", "ggraph", 
                 "ggrepel", "ggridges", "gridExtra", "here", 
                 "maps", "mapproj", "mapdata", "rlang", "scales", 
                 "survey", "srvyr", "sp", "usethis", "devtools")

install.packages(my_packages, repos = "http://cran.rstudio.com")
```

## What are packages?

Packages are free and open source add-ons for R. There are thousands of packages available for R that add in new functionality, ranging from new graphics capabilities, advanced regression techniques, text mining, mapping, predictive modeling, web servers, and interfaces with other languages. Packages are installed with the function install.packages('NAME'), or you can install a series of packages using the concatenate function install.packages(c('NAME1', 'NAME2')). You can update packages by running update.packages().

You can find packages from a variety of places:

- Official packages are found on CRAN (Comprehensive R A Network)
- Unofficial packages or beta packages can be found on GitHub or RForge
