var defaultMargin =   {
  "hightemp": 5,
  "lowtemp": 5,
  "clouds": 0.1,
  "rain": 0.2,
  "wind": 5
}

var attributes = Object.keys(defaultMargin);

var defaultPrefs =   {
  "hightemp": {"ideal": 70,
               "weight": 1},
  "lowtemp": {"ideal": 50,
               "weight": 1},
  "clouds": {"ideal": 0.2,
               "weight": 1},
  "rain": {"ideal": 0.0,
               "weight": 3},
  "wind": {"ideal": 0,
               "weight": 1}
}

var testPrefs =   {
  "hightemp": {"ideal": 70,
               "weight": 3},
  "lowtemp": {"ideal": 50,
               "weight": 0.1},
  "clouds": {"ideal": 0.2,
               "weight": 1},
  "rain": {"ideal": 0.0,
               "weight": 3},
  "wind": {"ideal": 0,
               "weight": 0.1}
}

var days = ['Su', 'Mo','Tu','We','Th','Fr', 'Sa']
