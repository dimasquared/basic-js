const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  
  let additionStr = "";
  let resultStr = "";
  
  if (options.hasOwnProperty("addition")) additionStr = String(options.addition);
  
  if (options.hasOwnProperty("additionRepeatTimes")) {
    for (let i = 2; i <= options.additionRepeatTimes; i++) {
      additionStr += (options.additionSeparator || "|") + String(options.addition);
    }
  }

  let strAdd = String(str) + additionStr;
  resultStr = strAdd;

  if (options.hasOwnProperty("repeatTimes")) {
    for (let i = 2; i <= options.repeatTimes; i++) {
      resultStr += (options.separator || "+") + strAdd;
    }
  }

  return resultStr;
};
  