const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const res = [];
  let arr = [];
  matrix.forEach((item, i) => {
    if (i !== 0) {
      const tmp = [];
      item.forEach((el, j, arr2) => {
        if (arr[j]) tmp.push(el);
      });
      res.push(tmp);
    } else res.push(item);
    arr = item;
  })
  return res.reduce((acc, cv) => acc + cv.reduce((acc2, cv2) => acc2 + cv2, 0), 0);
}

module.exports = {
  getMatrixElementsSum
};
