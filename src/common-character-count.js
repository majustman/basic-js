const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let res = 0;
  let arr2 = s2.split('');
  s1.split('').forEach(item => {
    if (arr2.includes(item)) {
      res++;
      arr2 = arr2.slice(0, arr2.indexOf(item)).concat(arr2.slice(arr2.indexOf(item)+1));
    }
  });
  return res;
}

module.exports = {
  getCommonCharacterCount
};
