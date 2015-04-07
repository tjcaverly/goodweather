var constants = {
  r:10
};

var localData = [{},{},{},{},{},{},{}];
var first = true;

var getData = function() {
  d3.json('api/'+d3.select('.zip input').node().value, function(error, data) {
    if (error) {
      console.log(error);
    } else{
      localData = data;
      updateLocal(testPrefs);
    }
  });
};

d3.select('.getData').on('click', getData);

var createLocal = function(prefs){
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
          return "rgb("+(255-g)+","+g+",0)";
        })

};

var updateLocal = function(prefs){
  d3.select(".local")
        .selectAll("circle")
        .data(localData)
        .transition()
        .attr('fill', function(d){
          var g = Math.ceil(255*goodnessAsProb(prefs, d, defaultMargin));
          return "rgb("+(255-g)+","+g+",0)";
        })


};


createLocal({});
