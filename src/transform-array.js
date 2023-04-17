const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  const res = [];
  let rmi = -1;
  let dbi = -1;
  arr.forEach((item, i, arr) => {
    switch (item) {
      case '--discard-next':
        rmi = i+1;
        break;
      case '--discard-prev':
        if (i !== 0 && (i-1) !== rmi) res.pop();
        break;
      case '--double-next':
        dbi = i+1;
        break;
      case '--double-prev':
        if (i !== 0 && rmi !== i-1) res.push(arr[i-1]);
        break;
      default:
        if (i === dbi) {
          res.push(item);
          res.push(item);
        } else if (i !== rmi) res.push(item);
        break;
    };
  });
  return res;
}

module.exports = {
  transform
};
