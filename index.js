var csv = require('csv');
var fs = require('fs')
var express = require('express')
var app = express();
var fuzzy = require('fuzzy')

var locations = require('./mars_gazetteer.js').features

var options = {
  extract: function(el) { return el.properties.Feature_Name; }
};

app.get('/:query', function(req,res){
  var searchTerm = req.params.query
  var results = fuzzy.filter(searchTerm, locations, options);

  res.json(results)
})
var port = process.env.PORT || 2298
var server = app.listen(port, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Mars geocoder listening at http://%s:%s', host, port);
});
