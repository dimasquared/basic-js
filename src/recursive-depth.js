const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let arrDepth = 1;
    if (arr.some(elem => Array.isArray(elem))) {
      arrDepth++;
      calculateDepth(arr.flat());
    } else return arrDepth;
  }
};