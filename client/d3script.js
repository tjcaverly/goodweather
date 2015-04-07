var constants = {
  r:10
};

var defaultPrefs =   {
  "hightemp": 60,
  "lowtemp": 50,
  "clouds": 0,
  "rain": 0.2
}

var localData = [];

var getData = function() {
  d3.json('api/'+d3.select('.zip input').node().value, function(error, data) {
    if (error) {
      console.log(error);
    } else{
      localData = data;
      console.log(data);
      updateLocal(defaultPrefs);
    }
  });
};

d3.select('.getData').on('click', getData);

var updateLocal = function(prefs){
  d3.select(".local")
        .selectAll("p")
        .data(localData)
        .enter()
        .append("circle")
        .attr("cx", function(d, i){
          return (2*constants.r+2)*i + constants.r;
        })
        .attr("cy", constants.r)
        .attr("r", constants.r)
        .attr('fill', function(d){
          var g = Math.ceil(255*goodnessAsProb(prefs, d));
          return "rgb("+(255-g)+","+g+",0)";
        })

};