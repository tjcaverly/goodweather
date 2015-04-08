var constants = {
  r:30
};

var localData = [{},{},{},{},{},{},{}];
var first = true;
var textColor = 'grey';
var city;

var getData = function() {
  d3.json('api/'+d3.select('.zip input').node().value, function(error, data) {
    if (error) {
      console.log(error);
      city = "BAD ZIP";
      updateLocal(defaultPrefs);
    } else{
      localData = data.data;
      city = data.city;
      textColor = "black";
      updateLocal(defaultPrefs);
    }
  });
};



d3.select('.getData').on('click', getData);

var init = function(prefs){

  d3.select('.local')
        .attr({'width':(2*constants.r + 22)*7,
                'height': constants.r * 12
                })
        .attr('transform','translate(15,0)');
  d3.select('.container')
        .style({'width':(2*constants.r + 10)*7+100+'px'
                });

  d3.select('svg')
        .attr({'height': constants.r * 12});

  d3.select(".local")
        .selectAll("circle")
        .data(localData)
        .enter()
        .append("circle")
        .attr("cx", function(d, i){
          return (2*constants.r+20)*i + constants.r;
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
          return (2*constants.r+20)*i + constants.r - this.offsetWidth/2;
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
        .classed({"option":true})
        // .text(function(d, i){
        //   return d + ': ' + defaultPrefs[d].ideal ;
        // })
        // .on('click', function(d, i) {
        //   defaultPrefs[d].ideal = prompt('Enter your preference for ' + d) || defaultPrefs[d].ideal;
        //   updateLocal(defaultPrefs);
        // })

  d3.selectAll(".option")
        .selectAll('.ideal')
        .data(function(d,i){return [d];})
        .enter()
        .append('span')
        .text(function(d, i){
          return d + ': ' + defaultPrefs[d].ideal ;
        })
        .classed({"ideal":true})
        .on('click', function(d, i) {
          defaultPrefs[d].ideal = prompt('Enter your preference for ' + d) || defaultPrefs[d].ideal;
          updateLocal(defaultPrefs);
        })

  d3.selectAll(".option")
        .selectAll('.weight')
        .data(function(d,i){return [d];})
        .enter()
        .append('span')
        .text(function(d, i){
          return "How much I care about this: " + defaultPrefs[d].weight ;
        })
        .classed({"weight":true})
        .on('click', function(d, i) {
          defaultPrefs[d].weight = Number(prompt('Enter your weighting for: ' + d) || defaultPrefs[d].weight);
          updateLocal(defaultPrefs);
        })

  d3.select(".zip")
      .selectAll('div')
      .data(["City"])
      .enter()
      .append('div')
      .classed({'city':true})
      .text(function(d) {
        return d;
      });

};

var updateLocal = function(prefs){
  console.log(prefs);

  d3.select(".zip")
      .selectAll('div')
      .data([city])
      .text(city)

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
        .selectAll(".ideal")
        .data(attributes)
        .text(function(d, i){
          return d + ': ' + defaultPrefs[d].ideal;
        })

  d3.select(".options")
        .selectAll(".weight")
        .data(attributes)
        .text(function(d, i){
          return "How much I care about this: " + defaultPrefs[d].weight;
        })


};


init(defaultPrefs);
