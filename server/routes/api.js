var express = require('express');
var router = express.Router();
var path = require('path');
var data = require('../data/data');

router.get('/', function(req, res, next) {
  res.send(data.test());
});

module.exports = router;