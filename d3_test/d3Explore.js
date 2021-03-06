//'use strict'

var d3 = require("d3@5");
var data = [4, 8, 15, 16, 23, 42];



{return newFunction();
  
}

function newFunction() {
    const div = d3.create("div")
        .style("font", "10px sans-serif")
        .style("text-align", "right")
        .style("color", "white");
    div.selectAll("div")
        .data(data)
        .join("div")
        .style("background", "steelblue")
        .style("padding", "3px")
        .style("margin", "1px")
        .style("width", d => `${d * 10}px`)
        .text(d => d);
    return div.node();
}
