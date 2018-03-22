/*
  Criminal Crumb Catcher - Charles Weng, Talor Wong
  SoftDev2   pd7
  K  #13: Scattered... or: Smothered, Covered, Chunked, Diced, Peppered, Capped, Topped & Country
  2018-3-21
*/

/*
  ==============================================================================
                                  Variables/Initiation
  ==============================================================================
*/

// the svg element
var pic = d3.select('svg');
var data = {
  xLabel: "Deaths by Bedsheet Entanglement",
  yLabel: "Cheese Consumption",
  info : [[327, 29.8], [456, 30.1], [509, 30.5], [497, 30.6], [596, 31.3], [573, 31.7]
          , [661, 32.6], [741, 33.1], [809, 32.7], [717, 32.8]]
};
// [margins, graph]
var spacing = [[100, 100], [700, 500]];

/*
  ==============================================================================
                                  Functions
  ==============================================================================
*/

// clear function
const clear = function(){
  // while there are children, remove a child
  while(pic.children.length)
    pic.firstChild.remove();
}

// draw scatter plot
const draw = function(){
  var xy = pic.selectAll("text").data(data.info).enter();
  // x-axis
  xy.append("text")
    .attr("x", function(d){return d[0] - 200}).attr("y", 400)
    .text(function(d){return d[0];});
  // y-axis
  xy.append("text")
    .attr("x", 0)                             .attr("y", function(d){return 2400 - d[1] * 70;})
    .text(function(d){return d[1];});

  // x-axis label
  pic.append("text")
    .attr("x", 300)                           .attr("y", 500)
    .text(data.xLabel);
  // y-axis label
  pic.append("text")
    .attr("x", 0)                             .attr("y", 20)
    .text(data.yLabel);


  // points
  var points = d3.select("svg").selectAll("circle").data(data.info).enter();
  points.append("circle")
  .attr("cx", function(d){return d[0] - 200}) .attr("cy", function(d){return 2400 - d[1] * 70;})
  .attr("r", 5)
  .attr("fill", "red")
}

/*
  ==============================================================================
                                  Button Stuff
  ==============================================================================
*/

pic.attr('height', spacing[0][1] + spacing[1][1]);
pic.attr('width', spacing[0][0] + spacing[1][0]);
draw();
