var defaultMargin =   {
  "hightemp": 5,
  "lowtemp": 5,
  "clouds": 0.2*100,
  "rain": 0.2*100,
  "wind": 5
}

var defaultUnits = {
  "hightemp": "°F",
  "lowtemp": "°F",
  "clouds": "%",
  "rain": "%",
  "wind": " mph" 
}

var attributes = Object.keys(defaultMargin);

var defaultPrefs =   {
  "hightemp": {"ideal": 70,
               "weight": 1},
  "lowtemp": {"ideal": 50,
               "weight": 0},
  "clouds": {"ideal": 20,
               "weight": 1},
  "rain": {"ideal": 20,
               "weight": 3},
  "wind": {"ideal": 0,
               "weight": 1}
}

var testPrefs =   {
  "hightemp": {"ideal": 70,
               "weight": 3},
  "lowtemp": {"ideal": 50,
               "weight": 0.1},
  "clouds": {"ideal": 20,
               "weight": 1},
  "rain": {"ideal": 0.0,
               "weight": 3},
  "wind": {"ideal": 0,
               "weight": 0.1}
}

var days = ['Su', 'Mo','Tu','We','Th','Fr', 'Sa']
