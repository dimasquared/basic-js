const CustomError = require("../extensions/custom-error");

const chainMaker = {

  chainElements: [],

  getLength() {
    return this.chainElements.length;
  },
  addLink(value) {
    if (arguments.length > 0) this.chainElements.push(`( ${value} )`);
    else chainElements.push('(  )');
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) || position < 0 || position >= this.chainElements.length) {
      this.chainElements.splice(0, this.chainElements.length);
      throw new Error();
    } else this.chainElements.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chainElements.reverse();
    return this;
  },
  finishChain() {
    let chain = this.chainElements.join('~~');
    this.chainElements.splice(0, this.chainElements.length);
    return chain;
  }

};

module.exports = chainMaker;
