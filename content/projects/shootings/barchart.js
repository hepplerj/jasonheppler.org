var barchart_margin = {top: 20, right: 20, bottom: 30, left: 40},
    barchart_width = 960 - barchart_margin.left - barchart_margin.right,
    barchart_height = 400 - barchart_margin.top - barchart_margin.bottom;

var x = d3.scale.ordinal()
    .rangeRoundBands([0, barchart_width], 0.1);

var y = d3.scale.linear()
    .rangeRound([barchart_height, 0]);

var color = d3.scale.ordinal()
    .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56", "#d0743c", "#ff8c00"]);

var xAxisBarchart = d3.svg.axis()
    .scale(x)
    .orient("bottom");

var yAxisBarchart = d3.svg.axis()
    .scale(y)
    .orient("left");

var barchartSvg = d3.select("#barchart").append("svg")
    .attr("width", barchart_width + barchart_margin.left + barchart_margin.right)
    .attr("height", barchart_height + barchart_margin.top + barchart_margin.bottom)
  .append("g")
    .attr("transform", "translate(" + barchart_margin.left + "," + barchart_margin.top + ")");

d3.json("data.json", function(error, data) {
  if (error) throw error;

  color.domain(d3.keys(data[0]).filter(function(key) { return key !== "id" && key !== "Article" && key !== "Shooter" && key !== "Location" && key !== "Date"; }));

  data.forEach(function(d) {
    var y0 = 0;
    d.shootings = color.domain().map(function(name) { return {name: name, y0: y0, y1: y0 += +d[name]}; });
    d.total = d.shootings[d.shootings.length - 1].y1;
  });

  // data.sort(function(a, b) { return b.Date - a.Date; });

  x.domain(data.map(function(d) { return d.Date; }));
  y.domain([0, d3.max(data, function(d) { return d.total; })]);

  barchartSvg.append("g")
      .attr("class", "x axis")
      .attr("transform", "translate(0," + barchart_height + ")")
      .call(xAxisBarchart)
      .selectAll("text")
    .attr("y", 0)
    .attr("x", 9)
    .attr("dy", ".35em")
    .attr("transform", "rotate(90)")
    .style("text-anchor", "start");

  barchartSvg.append("g")
      .attr("class", "y axis")
      .call(yAxisBarchart)
    .append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 6)
      .attr("dy", ".71em")
      .style("text-anchor", "end")
      .text("Victims");

  var state = barchartSvg.selectAll(".state")
      .data(data)
    .enter().append("g")
      .attr("class", "g")
      .attr("transform", function(d) { return "translate(" + x(d.Date) + ",0)"; });

  state.selectAll("rect")
      .data(function(d) { return d.shootings; })
    .enter().append("rect")
      .attr("width", x.rangeBand())
      .attr("y", function(d) { return y(d.y1); })
      .attr("height", function(d) { return y(d.y0) - y(d.y1); })
      .style("fill", function(d) { return color(d.name); });

  var legend = barchartSvg.selectAll(".legend")
      .data(color.domain().slice().reverse())
    .enter().append("g")
      .attr("class", "legend")
      .attr("transform", function(d, i) { return "translate(0," + i * 20 + ")"; });

  legend.append("rect")
      .attr("x", barchart_width - 18)
      .attr("width", 18)
      .attr("height", 18)
      .style("fill", color);

  legend.append("text")
      .attr("x", barchart_width - 24)
      .attr("y", 9)
      .attr("dy", ".35em")
      .style("text-anchor", "end")
      .text(function(d) { return d; });

});