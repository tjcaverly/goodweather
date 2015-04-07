city = require('cities');

exports.test = function() {
  return [
    {
      "hightemp": 70,
      "lowtemp": 50,
      "clouds": 0.5,
      "rain": .2 
    },
    {
      "hightemp": 60,
      "lowtemp": 30,
      "clouds": 0.8,
      "rain": .1
    },
    {
      "hightemp": 80,
      "lowtemp": 50,
      "clouds": 0.0,
      "rain": 0.0
    },
    {
      "hightemp": 60,
      "lowtemp": 50,
      "clouds": 1,
      "rain": 1
    },
    {
      "hightemp": 60,
      "lowtemp": 50,
      "clouds": .7,
      "rain": .3
    },
    {
      "hightemp": 60,
      "lowtemp": 50,
      "clouds": .3,
      "rain": .3
    },
    {
      "hightemp": 60,
      "lowtemp": 50,
      "clouds": .5,
      "rain": .3
    }
  ]
}

exports.city = function(zipcode) {
  return city.zipLookup(zipcode);
}

exports.parseDarkcloud = function(data) {
  var days = [];
  jData = JSON.parse(data);
  var daysObj = jData.daily.data
  for (var i = 0; i<7; i++) {
    days.push({"hightemp": daysObj[i].apparentTemperatureMax,
                "rain": daysObj[i].chancePrecip})
  }
  return days;

}

