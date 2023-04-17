const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let el = '';
  let num = 0;
  str.split('').forEach((item, i, arr) => {
    if (i === 0) {
      el = item;
      num++;
    };
    if (i !== 0 && i !== arr.length-1) {
      if (item === el) num++
      else {
        if (num > 1) res += num + el
        else res += el;
        el = item;
        num = 1;
      };
    };
    if (i === arr.length-1) {
      if (item === el) {
        num++;
        if (num > 1) res += num + el
        else res += el;
      } else {
        if (num > 1) res += num + el
        else res += el;
        res += item;
      }
    }
  });
  return res;
}

module.exports = {
  encodeLine
};
