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
  console.log(daysObj);
  for (var i = 0; i<7; i++) {
    days.push({"hightemp": daysObj[i].apparentTemperatureMax,
                "rain": daysObj[i].precipProbability,
                "lowtemp": daysObj[i].temperatureMin,
                "clouds": daysObj[i].cloudCover,
                "wind": daysObj[i].windSpeed 
              })
  }
  return days;

}

exports.parsedData = [{"hightemp":39.43,"rain":0.69,"lowtemp":29.16,"clouds":0.82,"wind":3.18},
{"hightemp":32.28,"rain":0.52,"lowtemp":22.13,"clouds":0.65,"wind":5.05},
{"hightemp":31.21,"rain":0.76,"lowtemp":28.61,"clouds":1,"wind":7.13},
{"hightemp":44.28,"rain":1,"lowtemp":31.45,"clouds":1,"wind":3.77},
{"hightemp":52.29,"rain":0.12,"lowtemp":38,"clouds":0.34,"wind":10.22},
{"hightemp":58.78,"rain":0.01,"lowtemp":34.91,"clouds":0.08,"wind":7.48},
{"hightemp":68.52,"rain":0,"lowtemp":35.66,"clouds":0.29,"wind":5.95}]

