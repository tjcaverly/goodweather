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
  var theURL = apiURL + latitude+','+longitude;

  var _res = res;


  request.get(theURL, function(error, response, body) {
    if (error) {
      console.log(error);
      _res.end(400);
    } else {
      console.log(body);
      _res.end(body);
    }
  });

});

module.exports = router;