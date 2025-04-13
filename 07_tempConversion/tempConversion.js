const convertToCelsius = function(startTemp) {
  let convertedTemp = (startTemp - 32) * (5/9);
  return Math.round(convertedTemp*10)/10;
};

const convertToFahrenheit = function(startTemp) {
  let convertedTemp = startTemp * (9/5) + 32;
  return Math.round(convertedTemp*10)/10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
