const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  const map1 = new Map();
  names.forEach(item => {
    if (map1.has(item)) map1.set(item, map1.get(item)+1)
    else map1.set(item, 1);
  });
  const res = [];
  const map2 = new Map();
  names.forEach(item => {
    if (res.includes(item)) {
      if (!map2.has(item)) map2.set(item, 1);
      res.push(item + `(${map2.get(item)})`);
      map2.set(item, map2.get(item)+1);
    } else {
      res.push(item);
      map2.set(item, 1);
      map1.set(item, map1.get(item)-1);
      if (map1.get(item) === 0) map1.delete(item);
    };
  });
  return res;
}

module.exports = {
  renameFiles
};
