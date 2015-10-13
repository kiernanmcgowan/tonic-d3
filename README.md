tonic-d3
===

A micromodule to make it easier to work with d3 inside of a tonic notebook.

```
var td3 = require('tonic-d3')

var d3Fn = td3(function(data, svg, d3) {
  console.log(data);
  // {foo: 'bar'}

  svg.selectAll('line')
    .data(data).enter()
    .append(line)
    .attr('x1', function(d) { return d.x1; })
    .attr('x2', function(d) { return d.x2; })
    .attr('y1', function(d) { return d.y1; })
    .attr('y2', function(d) { return d.y2; });

});

d3Fn([
  {
    x1: 0,
    x2: 100,
    y1: 100,
    y2: 200
  }
]);

```

LICENSE
---

MIT