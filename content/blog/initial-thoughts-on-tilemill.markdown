---
date: 2011-03-15T08:00:11Z
categories:
- spatial humanities
- review
- research
title: Initial Thoughts on TileMill
url: /2011/03/15/initial-thoughts-on-tilemill/
---

<a href="http://mapbox.com/">MapBox</a> has recently announced the release of their open source mapping studio called <a href="http://tilemill.com/">TileMill</a>. TileMill allows users to easily create maps through the open-source rendering library Mapnik, the same software used by <a href="http://www.openstreetmap.org/">OpenStreetMap</a> and <a href="http://www.mapquest.com">MapQuest</a>. Maps can be created with TileMill and displayed using the Google Maps API, OpenLayers, and many other projects. TileMill can also be exported through SQLite MBTiles.

<h4>Setup</h4>
At the moment, installing and running TileMill involves a bit of geekery. Currently, TileMill is available only on Mac and Linux and requires some Unix knowledge. I won't walk through the installation here -- <a href="http://tilemill.com/index.html">TileMill has the steps</a> necessary for your system. TileMill runs as a web application, but is installed locally and accessed through Firefox or Chrome. TileMill will access data files stored locally in order to place layers on top of the map projection. 

<h4>Using TileMill</h4>
Using TileMill is fairly simple. The interface is arranged with the map and layers on the left side, and the stylesheet editor on the right. The map interface is much like using Google Maps, complete with drag-and-move, zoom levels, and full-screen viewing. The map starts out in a global view, but you can zoom in and limit the final scope of your project.

<a href="http://www.jasonheppler.org/wp-content/uploads/2011/03/tilemill_new.png"><img src="http://www.jasonheppler.org/wp-content/uploads/2011/03/tilemill_new-300x168.png" alt="" title="tilemill_new" width="300" height="168" class="aligncenter size-medium wp-image-1373" /></a>

The styling of the map is based on a syntax called MSS. Those familiar with CSS will instantly be comfortable working with MSS code. MSS styles opens with one default style called <code>Map</code> that allows you to set the background color (e.g., color of the oceans). TileMill also defaults a <code>world</code> layer that sets up some useful starting points and sensible color scheme. Everything else is built around layers. These data layers are added on top of the map template, and data includes point data, lines, polygonal shapes, and raster images that you can reorder or stack any way you choose. Each layer is automatically given a unique identification so you can set MSS styling specific to each. 

One great feature of TileMill is its simplicity: you are offered a single type of projection (Web Mercator) and requires you convert data into a handful of GIS formats that makes assumptions about certain factors. You cannot do transformations like cartograms, but TileMill offers a way to render data on simple maps, control its design and presentation, and export to a couple of choice formats.

So, let's say we wanted to focus on the United States. We can reposition our map and zoom in a bit to get a better view of where we're working. We'll start off by defining some global colors that we can access throughout the stylesheet. Starting off with the <code>Map</code> background, we'll use a blue color to shade the oceans. We define global variables using the @ symbol, so we could write <code>@blue</code> and use, say, the hexidecimal code <code>#93b5cc</code> (so our final styling looks like <code>@blue: #93b5cc;</code>). We can set up the background color as:

{{< highlight css >}}
@blue: #93b5cc;

Map {
  background-color: @blue;
}
{{< / highlight >}}

Let's also do some styling so the United States and country borders stand out a bit more, and fade out the focus on international countries. We'll take our world identification, add another global color we'll call @brown, and make the necessary changes under world to restyle country polygons:

{{< highlight css >}}
@blue: #93b5cc;
@brown: #a38e72;

Map {
  background-color: @blue;
}

#world {
  line-color: #ccc;
  line-width: 0.5;
  polygon-fill: @brown;
}
{{< / highlight >}}

Now let's have the United States stand out. TileMill uses unique country identification codes that allow you to apply specific MSS styling to countries:

{{< highlight css >}}
@blue: #93b5cc;
@brown: #a38e72;
@lightbrown: #ebdbc8;

Map {
  background-color: @blue;
}

#world {
  line-color: #ccc;
  line-width: 0.5;
  polygon-fill: @brown;
  [ISO2="US"]{
  polygon-fill: @lightbrown;
  }
}
{{< / highlight >}}

<a href="http://www.jasonheppler.org/wp-content/uploads/2011/03/tilemill_us.png"><img src="http://www.jasonheppler.org/wp-content/uploads/2011/03/tilemill_us-300x169.png" alt="" title="tilemill_us" width="300" height="168" class="aligncenter size-medium wp-image-1374" /></a>

Now we've got a good base projection set to start adding layers upon. Adding layers is as simple as clicking the "+" button, giving your layer a unique ID, and selecting its source data. Currently, TileMill imports ESRI shapefiles, KML, geoJSON, and geoTIFF data. There are, however, some limitations on this data. For example, ESRI shapefiles are constructed from three files (.shp, .dbf, and .shx) and TileMill expects to find all three under a single .zip archive. TileMill also only recognized line vector data from KML files, not points or polygons. Getting your data into a compatible format is currently a bit of a headache. I hope that TileMill will make it easier to add data formats in the future.

<a href="http://www.jasonheppler.org/wp-content/uploads/2011/03/tilemill_layer.png"><img src="http://www.jasonheppler.org/wp-content/uploads/2011/03/tilemill_layer-300x169.png" alt="" title="tilemill_layer" width="300" height="168" class="aligncenter size-medium wp-image-1375" /></a>

We can do cool things like add the location of lakes (by adding a <code>lake</code> layer and styling it) and the location of national parks (through a <code>national_park</code> layer).

<a href="http://www.jasonheppler.org/wp-content/uploads/2011/03/tilemill_lakes.png"><img src="http://www.jasonheppler.org/wp-content/uploads/2011/03/tilemill_lakes-300x168.png" alt="" title="tilemill_lakes" width="300" height="168" class="aligncenter size-medium wp-image-1376" /></a>

<a href="http://www.jasonheppler.org/wp-content/uploads/2011/03/tilemill_natlparks.png"><img src="http://www.jasonheppler.org/wp-content/uploads/2011/03/tilemill_natlparks-300x170.png" alt="" title="tilemill_natlparks" width="300" height="170" class="aligncenter size-medium wp-image-1389" /></a>

<h4>Verdict</h4>

This was a basic run-down of what TileMill currently offers. So, how can digital historians use this? Data import is probably the biggest draw-back. TileMill's goal at the moment is geospatial data rather than table-based data. If you have a spreadsheet of zipcodes, country identifications, or latitude/longitudes, you must make the data spatial by merging it with shapefiles or making styles based on the data. This means that scholars aren't going to be importing historical data quite yet, not to mention a lack of adding historical maps (unlike Google Earth / Maps, which allows for historical map overlays). Wrangling with CSV data into KML, ESRI, or geoJSON is a tough process at the moment, and there is no built-in or online help. Currently, the default data sets that come with TileMill are the easiest way to start playing with the app.

Data output is also a weak feature. Currently, I can only save outputs as PDF, PNG, or MBTile. As a digital historian, I prefer visualizations and data that can be used by readers and users themselves, not just presented as a static image by me. In this case, Google Maps / Earth wins. TileMill is still in early development (and can occasionally be buggy or crash, so beware. You can <a href="https://github.com/mapbox/tilemill/issues">submit issues to the issue tracker</a>), but development is continuous so I suspect input and output features to improve. Designing a map doesn't require much of a time investment or learning curve. 

MapBox currently has no plans to support Windows, so users are limited to Mac and Linux platforms (which you're using anyways, right?). 

Overall, a good start to what could be a very promising and user-friendly cartography program that scholars may find useful in spatial humanities.
