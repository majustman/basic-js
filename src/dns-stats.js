const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const res = {};
  domains.forEach(str => {
    const arr = str.split('.').map(item => '.' + item);
    let tmp = '';
    while (arr.length > 0) {
      tmp += arr.pop();
      if (res[tmp]) res[tmp]++
      else res[tmp] = 1;
    }
  })
  return res;
}

module.exports = {
  getDNSStats
};
