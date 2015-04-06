d3.select("body")
      .selectAll("p")
      .data(["Hello World!"])
      .enter()
      .append("p")
      .text(function(d) {return d;});