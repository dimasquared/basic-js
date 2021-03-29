const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr, arrDepth = 1) {
    
    if (arr.some(elem => Array.isArray(elem))) {
      arrDepth++;
      let newArr = arr.flat();
      calculateDepth(newArr, arrDepth);
    } else return arrDepth;

  }
};