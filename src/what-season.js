const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  if (Object.keys(date).length !== 0
  || typeof date === 'number'
  || typeof date.valueOf() !== 'number') throw new Error('Invalid date!');

  const seasons = {
    winter: [11, 0, 1],
    spring: [2, 3, 4],
    summer: [5, 6, 7],
    autumn: [8, 9, 10]
  }
  const month = date.getMonth();
  let res;
  Object.keys(seasons).forEach(season => {if (seasons[season].includes(month)) res = season});
  return res;
}

module.exports = {
  getSeason
};
