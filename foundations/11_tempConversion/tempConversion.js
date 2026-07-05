const convertToCelsius = function(temp) {
  return (temp - 32) * (5 / 9).toFixed(1);
};

const convertToFahrenheit = function(temp) {
  return (temp + 32) * (9 / 5).toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
