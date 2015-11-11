var express = require('express')
var app = express();
var fuzzy = require('fuzzy')

var locations = require('./mars_gazetteer.js').features

var options = {
  extract: function(el) { return el.properties.Feature_Name; }
};

app.get('/:query', function(req,res){
  var searchTerm = req.params.query
  var results = fuzzy.filter(searchTerm, locations, options).map(function(f){return f.original});
  var crs = {"type": "link", "properties": {"href": "http://spatialreference.org/ref/iau2000/49901/proj4/","type": "proj4"}}
  results   = { "type":"FeatureCollection", "crs":crs, "features": results}
  res.json(results)
})

var port = process.env.PORT || 2298

var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('Mars geocoder listening at http://%s:%s', host, port);
});
