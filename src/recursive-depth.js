const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr, level) {
    level = level || 0;
    if (!Array.isArray(arr)) throw new Error('You can\'t calculate on not array object!');
    level++;
    let depth = level;
    arr.forEach(item => {
      if (Array.isArray(item)) {
        const res = this.calculateDepth(item, level);
        if (depth < res) depth = res;
      }
    })
    return depth;
  }
}

module.exports = {
  DepthCalculator
};
