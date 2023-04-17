const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(data) {
  return data.reduce((acc, v) => acc + v.filter(item => item === '^^').map(item => 1).reduce((acc2, v2) => acc2 + v2, 0), 0);
}

module.exports = {
  countCats
};
