// tonic-d3 - index.js
// wrapper for d3 to make is easier to embed d3 charts in tonic
// based off of https://tonicdev.com/tonic/d3-graph

function wrap(d3Fn, options) {
  var d3Location = 'https://cdnjs.cloudflare.com/ajax/libs/d3/3.5.5/d3.min.js';
  options = options || {};
  options.width = options.width || 500;
  options.height = options.height || 500;
  var style = options.style || '';
  return function(d3Args) {
    return '<center>' +
          '<style>' + style + '</style>' +
          '<svg width = ' + options.width + ' height = ' + options.height + ' ></svg>' +
          '<script src="' + d3Location + '"></script>' +
          '<script>(' + d3Fn.toString() + ')(' + JSON.stringify(d3Args)+ ', d3.select("svg"), d3)</script>' +
          '</center>';
  };
}
module.exports = wrap;
