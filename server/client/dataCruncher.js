var samplePref = {
      "hightemp": 70,
      "lowtemp": 50,
      "clouds": 0.5,
      "rain": .2 };

var sample2 = {
  "clouds": 0
}


var goodnessAsProb = function(prefs, data) {

  var total = 0;
  var maximum = 0;
  for (var key in prefs) {
    if (key in data) {
      maximum++;
      total += (1 - ( Math.abs(prefs[key] - data[key]) / ((prefs[key] + data[key]) || 1)));
    }
  }
  return total/maximum;
}