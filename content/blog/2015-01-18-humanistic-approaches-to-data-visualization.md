---
title: "Humanistic Approaches to Data Visualization"
date: 2015-01-18
categories:
- visualization
- digital history
---

<aside class="post">
I delivered a version of these comments at the
<a href="http://www.meetup.com/BayAreaDH/events/219132485/">d3.digitalhumanities()</a> meetup in San Francisco on January 14, 2015.
A recording of the talk is <a href="https://www.youtube.com/watch?v=UIrSCg2MmX4">available on YouTube</a>.
</aside>

In March 2013, [Cameron Blevins](http://cameronblevins.org) came to me
with a question about how to visualize his research into the U.S. post
office. This presented a fantastic opportunity for both of us: as a
research collaboration and a chance to learn [d3.js](http://d3js.org).

![What do you do with 14000 post offices?](/assets/images/d3dh-p3.png)

DH likes to ask [what to do with a million books](http://www.dlib.org/dlib/march06/crane/03crane.html). I wanted to ask what to
do with 14,000 post offices. We wanted to know -- what insight could we
gain from visualizing the Post?

![White on visualization](/assets/images/d3dh-p4.png)

Visualization, as historian Richard White [argues](https://web.stanford.edu/group/spatialhistory/cgi-bin/site/pub.php?id=29), is a means of
doing research: of posing questions we otherwise could not ask without
the aid of computers; of identifying patterns that might otherwise go
undiscovered.

The design of the project went through [several iterations](http://jasonheppler.org/2014/10/30/research-design-in-geography-of-the-post/) as we tried to
solve a key question: how to present the data in a meaningful way.
Plotting points on a map is a simple enough exercise, and I find even
that process can be arresting---to see the massive network of the Post
and where communities tended to cluster in the West. But we wanted more
than just the presentation of points on a map---we wanted to represent
knowledge.

![Offices in Oregon](/assets/images/d3dh-p5.png)

Our iterations of the project were straightforward. Our
test case focused on Oregon, and we started plotting offices onto a
Google Map using the JavaScript library D3.js to begin understanding,
first, how the technology would work, and second, what sort of things
could we begin to do with the data. We experimented with alternative
views as well. Rather than viewing points on a map, could we put post
offices into a bin and get a sense of geographic concentrations?  We
tried with hex binning---a hexagonal grid for creating histograms that
allows us to interpolate values between point on the map. An interesting
view, perhaps, but does it help us answer or raise new questions? Such a
map help us visually understand geographical concentrations of post
offices, but our data let us ask an even more interesting question:
where are people going in the American West? We needed interactivity.

We had a lot of data -- complex, messy, incomplete data. The entire
dataset is 160,000 post offices for two centuries for the entire US --
we only focused on the latter half of the western US.

In some ways, the data we worked with didn't present a lot of
challenges: it's complex, yes, but the data is all the same. We were not
confronting, say, a digital archive of texts, all of which can be
radically dissimilar in their form and content: case files,
advertisements, newspapers, diaries. We didn't have to confront what
William G. Thomas has called the [document-type problem](http://railroads.unl.edu/blog/?p=616). But there were
other design challenges: for example, meshing  together datasets.
Cameron began the project with an already-massive dataset of post
offices, but roughly eight months ago he purchased another dataset from
a stamp collector that expanded the amount of evidence we worked with
massively. He now have data for the entire United States. Thus, we are
confronted with the architecture of our data. Then we had to ask the
really dangerous question: Where does the West begin?

![Where is the West?](/assets/images/d3dh-p9.png)

Part of our argument is that we can use the post office as a proxy for
understanding settlement patterns in the West. Many of these nineteenth
century towns died years ago; they don't exist on present-day maps. The
West is known for its ghost towns -- we can see a lot of them here.

**I want to make a case to you today about why we should think about the
Post as a proxy for communities, and the significance of visualizing
that process.**

There are, of course, many ways we could represent population figures
visually. One of the more popular techniques is [choropleths](http://bl.ocks.org/mbostock/4060606). But
there's a problem with the chropleth when it comes to the West: we have
what Cameron has called the West's "[county problem](http://www.cameronblevins.org/posts/the-county-problem-in-the-west/)."

![County problem](/assets/images/d3dh-p13.png)

The problem with western counties is that they're huge. Look at San
Bernardino in Southern California, which includes the metropolis of Los
Angeles. Lots of people, right? but the actual population is huddled
against the western edge of the county rather than evenly distributed
through the county. You get a visual representation, then, that can be
misleading. What you want is more granularity.

Let's focus on Colorado and New Mexico in 1870 -- keep these places in mind,
we'll return to them a few more times. We get a sense that there are
lots of people, a rough idea of where they're at in the states with the
choropleth. But it's hard to really know unless you compare this with
our map.

![Comparison](/assets/images/d3dh-p14.png)

Two things stand out to me here. One, these two things map onto each
other well. If we overlaid the population data with the post data, I
think we'd see that the shading of the counties would fit well with the
location of post offices. But, we also get a better sense of where
people are at. They're not distributed throughout these huge counties in
New Mexico; they follow a corridor north to south -- probably a railroad
line in New Mexico, and nestled against the Front Range in Colorado.

To me, this is significant. If my historical question is about the
settlement patterns of the western US, it matters a great deal to me to
know where exactly those communities are at. The Post
gives me a window into that process.

![Post as Proxy](/assets/images/d3dh-p15.png)

So, the Post becomes a proxy for a town. You wouldn't have a post office
where there's no town. This is the way people communicated in the
nineteenth century; oftentimes, these towns were not located next to
railroads. They needed the Post and its network of postal roads,
stagecoaches, and rail lines to distribute news and information. This
was your connection to the broader world. It was also a key part of the
national government's process of folding the West into the national.
Rather than an isolated region, it became integrated into a national
system of information. And this network connected the West to larger
social, economic, and political networks.

But maybe you don't believe me quite yet. Maybe you look at these
offices and say: this doesn't work. There's no story here. Let me give
you one more example; I have to give a shoutout to [Ben Schmidt](http://benschmidt.org/), a
historian at Northeastern, for alerting me to these maps.

![1915 Statistical Atlas](/assets/images/d3dh-p17.png)

In 1915, the U.S. Census Bureau published the Statistical Atlas of the
United States. It's a beautiful book filled with some stellar
visualizations. One set of visualizations sought to illustrate the
population density of the United States for 1870, 1880, and 1890.

I looked at these maps and thought: does the postal data map onto these.
In other words, can I really treat the post as a proxy for settlement?
If post offices happen to line up well with the Census bureau's own
statistics, to me that's further evidence that I can treat these as
indications of settlement. So, let's look.

![Colorado-New Mexico](/assets/images/d3dh-p18.png)

Here's our Colorado -- New Mexico corridor in 1870. I apologize that my
projection is different from that used by the Census Bureau, so you may
have to squint a bit to help. Looking at these side-by-side, I think
they pretty accurately map onto each other. Notice the small pocket of
post offices to the west of Denver; that same blob appears on the Census
map to the west of Denver. Notice the collection of offices in northern
New Mexico; the Census map distribution shows that same presence.

So, we have the West of 1890 -- heavy populations in California and the
Pacific Northwest; lots of people along the Rocky Mountains; empty areas
in Nevada and Utah and Montana. My map seems to map onto this pretty
well. Pay particular attention to WA, OR, CA -- my projection isn't the
same as the Census, so they don't map quite right. But they're pretty
close. And if I fixed the projection, I think they'd map onto each other
very closely.

So, comparing post offices to other maps and visualizations -- I'd say
that we can safely use the Post as a proxy for understanding
communities. **But the question is, why is that important?** Why did I
spend all this time trying to convince you that I can safely
treat the Post as a proxy for communities?

Because the story isn't just about the rise of communities; it's also
about their decline. You don't see this in the Census maps.

![Growth](/assets/images/d3dh-p20.png)

If we look at the progression of the maps from 1870 to 1890, the maps
tell a particular story: one of growth, one of progress. Let's return to
our Colorado - New Mexico corridor.  What you don't see in these is the communities that don't thrive.

![Decline](/assets/images/d3dh-p22.png)

Here's our corridor in the Southwest again; these are post offices that
close between 1870 and 1890.

If the story I'm interested in is the process by which communities grow
and decline in the West, it's these communities I want to examine.
Again, you don't see these places in the Census Maps. I would bet you
also wouldn't see these changes using population data for counties. But
the postal data we have can give us that.

And therein lies one of the great benefits that I think visualization
lends to the humanities. The Census maps are static, giving me snapshots
of particular moments in time. Our map lets you examine any moment in
time between 1848 and 1900. Maybe your curious about what's happening in
western settlement during the American Civil War? You can select those
years. Maybe you have a particular interest in western settlement as
conflicts with Native Americans are happening throughout the west in the
1870s and 1880s. You can select those years. You can look at places
where communities go away and where they spring up -- and that's key.

**What the map does is lead me to questions.** It leads me to places on a
map that may be overlooked by historians. Some of these places no longer
exist; they, quite literally, are removed from the historical record.
Some of these places are mining camps -- they exist only for a year
until the mines run dry, then they're off the map. What's happening is a
distant and close reading of a spatial experience. By stepping back and
looking at overall patterns, we can then zoom in closer -- track down
more sources, track down more information, give richness to the fabric
of historical experience.
