d3.select(".local")
      .selectAll("p")
      .data(["Hello World!"])
      .enter()
      .append("p")
      .text(function(d) {return d;});