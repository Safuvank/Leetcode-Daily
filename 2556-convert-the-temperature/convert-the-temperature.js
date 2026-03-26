/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let result = [];
    let kelvin = celsius + 273.15;
    let fahrenheit = celsius * 1.80 + 32.00
    result.push(kelvin,fahrenheit)
    return result
};