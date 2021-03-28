const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  
  if (!Array.isArray(members)) return false;
  
  return members
            .filter(element => typeof element === "string" && /^\s*[a-zA-Z_]*\s*[a-zA-Z_]*\s*$/.test(element))
            .map(name => name.trim().slice(0,1).toUpperCase())
            .sort()
            .join('');
};
