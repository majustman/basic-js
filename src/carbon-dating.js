const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(...sampleActivities) {
  if (sampleActivities.length !== 1) return false;
  const data = sampleActivities[0];
  if (typeof data !== 'string') return false;
  if (typeof Number(data) !== 'number' || Number(data) * 0 !== 0) return false;
  if (Number(data) < 0 || Number(data) > HALF_LIFE_PERIOD) return false;
  const res = Math.ceil((HALF_LIFE_PERIOD / 0.693) * Math.log(MODERN_ACTIVITY / Number(data)));
  if (res < 0 || res === Infinity) return false;
  return res;
}

module.exports = {
  dateSample
};
