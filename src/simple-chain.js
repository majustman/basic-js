const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: '',
  length: 0,
  getLength() {
    return this.length;
  },
  addLink(value) {
    if (value === undefined) value = '';
    if (this.chain) this.chain += '~~';
    this.chain += `( ${value} )`;
    this.length++;
    return this;
  },
  removeLink(position) {
    if (!position
      || typeof position !== 'number'
      || !Number.isInteger(position)
      || position < 1
      || position > this.length) {
        this.chain = '';
        this.length = 0;
        throw new Error('You can\'t remove incorrect link!')
      };
    this.chain = this.chain.split('~~').filter((item, index) => {if (index !== position - 1) return item}).join('~~');
    return this;
  },
  reverseChain() {
    this.chain = this.chain.split('~~').reverse().join('~~');
    return this;
  },
  finishChain() {
    const res = this.chain;
    this.chain = '';
    this.length = 0;
    return res;
  }
};

module.exports = {
  chainMaker
};
