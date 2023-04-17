const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let res = String(str) + additionRepeater(options);
  let rep = res;
  let sep = options.separator || '+';
  if (options.repeatTimes && typeof options.repeatTimes === 'number') {
    for (let i = 2; i <= options.repeatTimes; i++) { res += sep + rep; };
  };
  return res;
}

function additionRepeater(options) {
  if (options.addition === undefined) return "";
  let res = String(options.addition);
  let rep = res;
  let sep = options.additionSeparator || '|';
  if (options.additionRepeatTimes && typeof options.additionRepeatTimes === 'number') {
    for (let i = 2; i <= options.additionRepeatTimes; i++) { res += sep + rep };
  };
  return res
}

module.exports = {
  repeater
};
