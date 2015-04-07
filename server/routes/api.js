var express = require('express');
var router = express.Router();
var path = require('path');
var data = require('../data/data');
var apiKey = require('../api_key');
var city = require('cities');
var request = require('request');
var fs = require('fs');

var apiURL = apiKey.url;

router.get('/:zip', function(req, res, next) {

  var cityParams = city.zip_lookup(req.params.zip);
  var latitude = cityParams.latitude;
  var longitude = cityParams.longitude;
  var cityName = cityParams.city;
  var theURL = apiURL + latitude+','+longitude;

  var _res = res;

  if (true){
    request.get(theURL, function(error, response, body) {
      if (error) {
        console.log(error);
        _res.end(400);
      } else {
        var theData = data.parseDarkcloud(body);
        var dataObject = {data:theData,
                          city: cityName};
        _res.end(JSON.stringify(dataObject));
      }
    });
  } else {
    var dataObject = {data:data.parsedData,
                      city: cityName};
    _res.end(JSON.stringify(dataObject));
  }

});

module.exports = router;