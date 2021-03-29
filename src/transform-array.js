const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {

  if (!Array.isArray(arr)) throw new Error();
  
  let resultArr = [];
  let arrLength = arr.length;

  for (let i = 0; i < arrLength; i++) {
    switch (arr[i]) {
      case '--discard-next': 
        i++;
        break;
      case '--discard-prev':
        if (resultArr.length > 0 && Object.is(resultArr[resultArr.length-1], arr[i-1])) resultArr.pop();
        break;
      case '--double-next':
        if (i + 1 < arrLength) resultArr.push(arr[i+1]);
        break;
      case '--double-prev':
        if (resultArr.length > 0 && Object.is(resultArr[resultArr.length-1], arr[i-1])) resultArr.push(arr[i-1]);
        break;
      default:
        resultArr.push(arr[i]);
        break;
    }
  }
  
  return resultArr;
};
