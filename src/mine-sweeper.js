const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const res = [];
  matrix.forEach((el, i) => {
    const tmp = [];
    el.forEach((item, j, arr) => {
      if (item) tmp.push(1)
      else tmp.push(getNearyBybombsQuantity(matrix, i, j));
    })
    res.push(tmp);
  });
  return res;
}

function getNearyBybombsQuantity(matrix, i, j) {
  let cnt = 0;
  if (matrix[i-1]) {
    if (matrix[i-1][j-1]) cnt++;
    if (matrix[i-1][j]) cnt++;
    if (matrix[i-1][j+1]) cnt++;
  }
  if (matrix[i][j-1]) cnt++;
  if (matrix[i][j+1]) cnt++;
  if (matrix[i+1]) {
    if (matrix[i+1][j-1]) cnt++;
    if (matrix[i+1][j]) cnt++;
    if (matrix[i+1][j+1]) cnt++;
  }
  return cnt
}

module.exports = {
  minesweeper
};
