const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  if (members.length === 0) return false;
  return members
    .map(name => typeof name === 'string' ? name : '')
    .map(name => name.trim())
    .map(name => name.toUpperCase())
    .map(name => name.slice(0, 1))
    .sort()
    .reduce((acc, v) => acc + v, "");
}

module.exports = {
  createDreamTeam
};
