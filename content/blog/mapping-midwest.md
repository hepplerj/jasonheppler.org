---
title: "Mapping Midwest"
date: 2017-06-06
categories: 
- mapping 
- Midwest
---

<aside class="post">
The slides for my talk at the Midwestern History Association conference are <a href="http://jasonheppler.org/presentations/keynote_mha/">now online</a>.
</aside>

This week I am delivering a keynote address at the Midwestern History Association conference, where I'll be making the case for the creation of a Midwestern atlas.

There has been no published historical atlas of the Midwest that explores the region's history. There are some states of the Midwest that have been given focus in historical atlases, such as [Kansas](https://www.amazon.com/Historical-Atlas-Kansas-Homer-Socolofsky/dp/0806124857), [Nebraska](https://www.amazon.com/Atlas-Nebraska-J-Clark-Archer/dp/080324939X/ref=sr_1_1?s=books&ie=UTF8&qid=1496800454&sr=1-1&keywords=historical+atlas+nebraska), and [Minnesota](https://www.amazon.com/Minnesota-Map-Historical-David-Lanegran/dp/0873515935/ref=sr_1_4?s=books&ie=UTF8&qid=1496800473&sr=1-4&keywords=historical+atlas+midwest). And, depending on where you draw the boundary, overlapping regions (such as the *[Atlas of the Great Plains](http://www.unl.edu/plains/publications/atlas.shtml)*). But never has there been one developed about the Midwest.

It's time to publish one. And it needs to be digital.

The moment seems ripe for us to pursue this study. In the wake of the 2016 elections, President Trump overwhelmingly won Wisconsin, Michigan, Iowa, and Ohio, states that supported Barack Obama in 2008 and 2012. There's [no](https://fivethirtyeight.com/features/the-rust-belt-elevated-trump-but-its-electoral-power-is-dwindling/) [shortage](https://fivethirtyeight.com/features/its-not-all-about-clinton-the-midwest-was-getting-redder-before-2016/) of [ink](https://www.nytimes.com/2017/01/05/opinion/why-rural-america-voted-for-trump.html?mcubz=2&_r=0) [spilled](https://www.nytimes.com/interactive/2016/11/08/us/elections/how-trump-pushed-the-election-map-to-the-right.html?mcubz=2) exploring why this was the case, but the Midwest has become a central focus in trying to grapple with our modern politics. The contrast was remarkable: Michigan had not supported a Republican presidential candidate since 1988, Wisconsin not since 1984. Rural voters in particular -- those in counties outside of metropolitan areas -- overwhelmingly supported the Trump campaign.

We're in a political moment to explain the origins of these politics. The Midwest has frequently been the focus of political attention throughout the nation's history: Kansas represented a key part of the debate over slavery; several presidents and presidential candidates have hailed from midwestern states; Ohio has been a bellweather of presidential elections since John F. Kennedy's election in 1960; and Trump's victory again focused the nation's attention to the region. 

Towards that end, I've been working with the [Midwestern History Association](http://www.midwesternhistory.com/) to develop **[Mapping Midwest](http://165.227.4.129:3838/midwest/)**, an exploratory, pilot platform for mapping and visualizing population growth and demographic change in the region. The platform is currently built with R and RStudio's [Shiny](https://shiny.rstudio.com/) web application environment. There are some performance shortcomings, a bottleneck somewhere with Shiny Server and Leaflet I believe. Changing the demographic view takes a considerable amount of time, and makes it difficult to explore changes over time in a fluid way.[^1] 

But the map contains a fair bit of data: demographic information we've derived from [IPUMS' NHGIS project](https://www.nhgis.org/) and city population data compiled by [Stanford's Center for Spatial and Textual Analysis](https://github.com/cestastanford/historical-us-city-populations). What I'd like to see in the fu[ture for this project, and part of what I'll detail in the keynote, is how we can build [deep maps](https://en.wikipedia.org/wiki/Deep_map) to help us explore and explain the history of the region. I'd like to see a deep map that pairs narrative essays with place-stories of the region, allowing historians to work at multiple geographic scales across time. 

I hope you'll [check out the map](http://165.227.4.129:3838/midwest/). We're more than happy to [hear feedback](https://github.com/hepplerj/midwest-map-population), or if you want to help contribute to the project send me your pull requests! 

[^1]: There's a decent chance that I may re-write this in Javascript. 
