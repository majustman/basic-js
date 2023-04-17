const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

class VigenereCipheringMachine {
  constructor(direct) {
    if (direct === undefined) this.direct = true
    else this.direct = direct;
  }
  encrypt(input, key) {
    if (input === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const msg = input.split(' ').join('').toUpperCase();
    while (msg.length > key.length) {
      key += key;
    };
    key = key.slice(0, msg.length).toUpperCase();
    let res = '';
    for (let i = 0; i < msg.length; i++) {
      const mi = a.indexOf(msg[i]);
      const ki = a.indexOf(key[i]);
      let ci = '';
      if (mi === -1) ci = msg[i]
      else ci = a[(((mi + ki) % a.length))];
      res += ci;
    };
    let tmp = res;
    res = '';
    let index = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') res += ' '
      else {
        res += tmp[index];
        index++;
      };
    }
    if (!this.direct) return res.split('').reverse().join('');
    return res;
  }
  decrypt(input, key) {
    if (input === undefined || key === undefined) throw new Error('Incorrect arguments!');
    const cphr = input.split(' ').join('').toUpperCase();
    while (cphr.length > key.length) {
      key += key;
    };
    key = key.slice(0, cphr.length).toUpperCase();
    let res = '';
    for (let i = 0; i < cphr.length; i++) {
      let ci = a.indexOf(cphr[i]);
      let ki = a.indexOf(key[i]);
      let mi = '';
      if (ci === -1) mi = cphr[i]
      else mi = a[(((a.length + ci - ki) % a.length))];
      res += mi;
    };
    let tmp = res;
    res = '';
    let index = 0;
    for (let i = 0; i < input.length; i++) {
      if (input[i] === ' ') res += ' '
      else {
        res += tmp[index];
        index++;
      };
    }
    if (!this.direct) return res.split('').reverse().join('');
    return res;
  }
}

module.exports = {
  VigenereCipheringMachine
};
