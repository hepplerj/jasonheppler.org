var width = 960,
    height = 500;

var projection = d3.geo.albersUsa()
    .scale(1000)
    .translate([width / 2, height / 2]);

var path = d3.geo.path()
    .projection(null);

var svg = d3.select("#chart").append("svg")
    .attr("width", width)
    .attr("height", height);

d3.json("fedland.json", function(error, us) {
  if (error) throw error;

  var fedland = topojson.feature(us, us.objects.fedland);
  var states = topojson.feature(us, us.objects.states);

  var admins = d3.nest()
      .key(function(d) { return d.properties.type; })
      .rollup(function(leaves) { return leaves.length; })
      .entries(fedland.features)

  // svg.append('g')
  //   .attr('class', 'admins')
  //   .selectAll('.types')
  //   .data(admins)
  //   .enter()
  //   .append('text')
  //   .attr('class', 'types')
  //   .attr('x', 15)
  //   .attr('y', function(d, i) { return i * 15 + 15; })
  //   .text(function(d) { return d.key; })
  //   .on('mouseover', function(d) { return d3.selectAll('.'+d.key).style('fill', '#003A63'); })
  //   .on('mouseout', function(d) { return d3.selectAll('.'+d.key).style('fill', '#007D68'); });

  svg.append("g")
    .selectAll("path")
    .data(states.features)
    .enter()
    .append("path")
    .attr('class', 'state')
    .attr("d", path);

  svg.append('g')
    .append('path')
    .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; }))
    .attr('class', 'state-boundary')
    .attr('d', path);

  svg.append('g')
    .append('path')
    .datum(topojson.mesh(us, us.objects.states, function(a, b) { return a === b; }))
    .attr('class', 'national-boundary')
    .attr('d', path);

  svg.append("g")
    .selectAll("path")
    .data(fedland.features)
    .enter()
    .append("path")
    .attr('class', function(d) { return "fedland " + d.properties.type; })
    .attr("d", path);

});
