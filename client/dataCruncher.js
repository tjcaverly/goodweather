var goodnessAsProb = function(prefs, data, margins) {
  debugger;
  var total = 0;
  var maximum = 0;
  for (var key in prefs) {
    if (key in data) {
      var weight = prefs[key].weight;
      maximum += weight;
      total += weight * Math.min(1, Math.abs( (data[key] - prefs[key].ideal) ) / (10*margins[key]));
    }
  }
  return (maximum - total)/maximum;
}