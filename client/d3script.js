var constants = {
  r:30
};

var localData = [{},{},{},{},{},{},{}];
var first = true;
var textColor = 'grey';

var getData = function() {
  d3.json('api/'+d3.select('.zip input').node().value, function(error, data) {
    if (error) {
      console.log(error);
    } else{
      localData = data;
      textColor = "black";
      updateLocal(defaultPrefs);
    }
  });
};



d3.select('.getData').on('click', getData);

var init = function(prefs){

  d3.select('svg')
        .attr({'width':(2*constants.r + 5)*7,
                'height': constants.r * 8
                });

  d3.select(".local")
        .selectAll("circle")
        .data(localData)
        .enter()
        .append("circle")
        .attr("cx", function(d, i){
          return (2*constants.r+2)*i + constants.r;
        })
        .attr("cy", constants.r)
        .attr("r", constants.r)
        .attr('fill', function(d){
          var g = Math.ceil(255*goodnessAsProb(prefs, d, defaultMargin));
          return "rgb(0,0,0)";
        })

  d3.select(".local")
        .selectAll("text")
        .data(days)
        .enter()
        .append("text")
        .text(function(d, i){
          return days[(new Date().getDay() + i)%7];
        })
        .attr("fill", textColor)
        .attr("x", function(d, i){
          return (2*constants.r+2)*i + constants.r - this.offsetWidth/2;
        })
        .attr("y", function() {
          return constants.r + this.offsetHeight/4;
        })
        .attr("font-family","Helvetica Neue, Helvetica, Sans-Serif")

  d3.select(".options")
        .selectAll("div")
        .data(attributes)
        .enter()
        .append("div")
        .text(function(d, i){
          return d + ': ' + defaultPrefs[d].ideal ;
        })
        .on('click', function(d, i) {
          defaultPrefs[d].ideal = prompt('Enter your preference for ' + d);
          updateLocal(defaultPrefs);
        })

};

var updateLocal = function(prefs){
  d3.select(".local")
        .selectAll("circle")
        .data(localData)
        .transition()
        .attr('fill', function(d){
          var g = Math.ceil(255*goodnessAsProb(prefs, d, defaultMargin));
          return "rgb("+(255-g)+","+g+","+g+")";
        })
  d3.select(".local")
        .selectAll("text")
        .data(localData)
        .transition()
        .attr('fill', textColor);

  d3.select(".options")
        .selectAll("div")
        .data(attributes)
        .text(function(d, i){
          return d + ': ' + defaultPrefs[d].ideal ;
        })


};


init(defaultPrefs);
