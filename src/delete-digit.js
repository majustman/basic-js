const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = String(n).split('');
  const index = getIndex(arr);
  return Number(arr.slice(0, index).concat(arr.slice(index+1)).join(''));
}

function getIndex(arr) {
  let max;
  let index = 0;
  arr.forEach((element, i, arr) => {
    if (i === 0) {
      max = Number(arr.slice(1).join(''));
    };
    const num = Number(arr.slice(0, i).concat(arr.slice(i+1)).join(''));
    if (num > max) {
      index = i;
      max = num;
    };
  });
  return index;
}

module.exports = {
  deleteDigit
};
