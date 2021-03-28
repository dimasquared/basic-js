const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return chain.length;
  },
  addLink(value) {
    if (arguments.length != 0) chain.push(`( ${value} )`);
    else chain.push('( )');
    return chain;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 0 || position > chain.length) throw new Error();
    else return chain.splice(position, 1);
  },
  reverseChain() {
   return chain.reverse();
  },
  finishChain() {
    return chain.join('~~');
  }
};

module.exports = chainMaker;
