---
title: 'Superfund Package'
date: 2020-05-07T10:22:23-05:00
slug: 'superfund-data'
tags: [data, environment, superfund]
lede: "I'm releasing my in-progress dataset on Superfunds as an R package."
---

Mainly based on some of my own research, but also as a resource for teaching, I pulled together a small data package for R a little while ago called [SuperfundR](https://github.com/hepplerj/superfundr). It contains Superfund site data for the United States that pulls data from the Environmental Protection Agency, and does some normalization to keep things tidy. I plan to keep things up-to-date for a while, and if I have a chance maybe I'll write up a walkthrough on creating R data packages. 

The main table looks something like this. 

```r
library(tidyverse)
library(superfundr)

superfunds
#> # A tibble: 66,386 x 20
#>    site_name epa_id city  county state zipcode region npl_status
#>    <chr>     <chr>  <chr> <chr>  <chr> <chr>    <dbl> <chr>     
#>  1 ATLAS TA… MAD00… FAIR… BRIST… MA    02719        1 Currently…
#>  2 ATLAS TA… MAD00… FAIR… BRIST… MA    02719        1 Currently…
#>  3 ATLAS TA… MAD00… FAIR… BRIST… MA    02719        1 Currently…
#>  4 ATLAS TA… MAD00… FAIR… BRIST… MA    02719        1 Currently…
#>  5 ATLAS TA… MAD00… FAIR… BRIST… MA    02719        1 Currently…
#>  6 ATLAS TA… MAD00… FAIR… BRIST… MA    02719        1 Currently…
#>  7 ATLAS TA… MAD00… FAIR… BRIST… MA    02719        1 Currently…
#>  8 ATLAS TA… MAD00… FAIR… BRIST… MA    02719        1 Currently…
#>  9 ATLAS TA… MAD00… FAIR… BRIST… MA    02719        1 Currently…
#> 10 ATLAS TA… MAD00… FAIR… BRIST… MA    02719        1 Currently…
#> # … with 66,376 more rows, and 12 more variables:
#> #   superfund_agreement <chr>, federal_facility <chr>, op_unit_no <dbl>,
#> #   seq_id <dbl>, decision_type <chr>, completion_date <dttm>,
#> #   fiscal_year <dbl>, media <chr>, contaminant <chr>, address <fct>,
#> #   latitude <dbl>, longitude <dbl>
```

The data is structured just as it comes from the Environmental Protection Agency, which lists out each contaminant at each site. SuperfundR adds additional information from the EPA’s basic spreadsheet, including latitude and longitude coordinates and addresses, and converts data as necessary (title case for text, dates as date objects, etc).

This makes it easy to count the number of contaminants across sites.

```r
superfunds %>% 
  group_by(contaminant) %>% 
  tally(sort = TRUE)
#> # A tibble: 663 x 2
#>    contaminant           n
#>    <chr>             <int>
#>  1 ARSENIC            2667
#>  2 LEAD               2531
#>  3 TRICHLOROETHENE    2049
#>  4 BENZENE            1659
#>  5 TETRACHLOROETHENE  1645
#>  6 CHROMIUM           1589
#>  7 CADMIUM            1538
#>  8 ZINC               1380
#>  9 MANGANESE          1288
#> 10 TOLUENE            1268
#> # … with 653 more rows
```

Or do things like count the number of active or inactive sites. 

```r
superfunds %>% 
  distinct(site_name, .keep_all = TRUE) %>% 
  group_by(npl_status) %>% 
  tally(sort = TRUE)
#> # A tibble: 7 x 2
#>   npl_status                     n
#>   <chr>                      <int>
#> 1 Currently on the Final NPL  1141
#> 2 Deleted from the Final NPL   362
#> 3 Not on the NPL                32
#> 4 Proposed for NPL               3
#> 5 Removed from Proposed NPL      2
#> 6 Site is Part of NPL Site       2
#> 7 <NA>                           1
```

This is an open source project, so [I'd welcome any contributions](https://github.com/hepplerj/superfundr) folks would like to make.