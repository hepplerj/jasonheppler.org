---
layout: page
title: Talks
permalink: /speaking/
talks:
  - year: 2017
    text: "Talkback, The Man Who Shot Liberty Valance"
    place: Omaha Community Playhouse
    location: Omaha, Nebraska
    date: February 2017
    invited: true
  - year: 2017
    text: "Preserving Histories Digitally"
    place: KANEKO Library
    location: Omaha, Nebraska
    date: March 2017
    invited: true
  - year: 2017
    text: "'Don't Let Industry Do its Business In Our Water!!!': Urban Space and Environmental Politics in Silicon Valley"
    place: Ball State University
    location: Muncie, Indiana
    date: 12 April 2017
    invited: true
  - year: 2017
    text: "Keynote Address: Approaching a New Historical Atlas of Midwestern History with Deep Maps and Digital History"
    place: Midwestern History Association
    location: Grand Rapids, Michigan
    date: 06 June 2017
    invited: true
  - year: 2016
    text: "Using Maps and Metadata to Teach the History of Silicon Valley"
    place: Stanford University
    location: Stanford, California
    date: October 2016
    invited: false
  - year: 2015
    text: "Humanistic Approaches to Data Visualization"
    place: d3.digitalhumanities()
    location: San Francisco, California
    date: January 2015
    url: http://jasonheppler.org/2015/01/18/humanistic-approaches-to-data-visualization/
    invited: true
---

I would be honored to come and speak at your institution about **digital history**, **data visualization and spatial history**, **network analysis**, or **environmental and urban history**. You can reach me at [@jaheppler](http://twitter.com/{{site.owner.twitter}}) or by [email](mailto:{{site.owner.email}}). Find a more complete listing of talks and conference presentations in my [vita]({{site.owner.vita}}).

## Recent invited lectures

{% for lecture in page.talks %}
- **{{ lecture.text }}**, {{ lecture.place }}, {{ lecture.location }} ({{ lecture.date }})
{% endfor %}