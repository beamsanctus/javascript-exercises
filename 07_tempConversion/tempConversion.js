const convertToCelsius = function (fahrenheit) {
  if (typeof (fahrenheit) === "number") {
    return Math.round((fahrenheit - 32) / 1.8 * 10) / 10;
  }
};

const convertToFahrenheit = function (celsius) {
  if (typeof (celsius) === "number") {
    return Math.round((32 + (celsius * 9 / 5)) * 10) / 10;
  }
};

console.log(convertToFahrenheit(-10))
console.log(convertToCelsius(-100))

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
