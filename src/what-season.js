const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if (arguments.length == 0) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error();
  if (isNaN(date.getTime())) throw new Error();
  
  switch (date.getMonth()) {
    case 0: return 'winter';
    case 1: return 'winter';
    case 2: return 'spring';
    case 3: return 'spring';
    case 4: return 'spring';
    case 5: return 'summer';
    case 6: return 'summer';
    case 7: return 'summer';
    case 8: return 'fall';
    case 9: return 'fall';
    case 10: return 'fall';
    case 11: return 'winter';
  }

};
