const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  
  if (arguments.length == 0) return 'Unable to determine the time of year!';
  if (!(date instanceof Date)) throw new Error();
  if (isNaN(date.getTime())) throw new Error();
  
  switch (date.getMonth()) {
    case 0 || 1 || 11: return 'winter';
    case 2 || 3 || 4: return 'spring';
    case 5 || 6 || 7: return 'summer';
    case 8 || 9 || 10: return 'fall';
  }

};
