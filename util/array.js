/**
 * Array utility functions
 */

var Utility = {};

/**
 * Return an array of unique random numbers within interval [0, range)
 *
 * @param size {Number} size of array
 * @param range {Number} range of random values
 * @param sort {Boolean} whether to sort the array
 * @return {Array}
 */

Utility.randomNumbers = function(size, range, sort) {
  var size = size || 100;
  var range = range || 100;
  var comparator = function(a, b) { return a - b; };
  var list = [];
  while (list.length !== size) {
    var newNum = Math.floor(Math.random() * range);
    // Add if it doesn't already exists
    if (list.indexOf(newNum) < 0) {
      list.push(newNum);
    }
  }

  return (sort) ? list.sort(comparator) : list;
}

/**
 * Copy a list
 *
 * @param {Array} list
 * @return {Array}
 */

Utility.copy = function(list) {
  return [].concat(list);
}

module.exports = Utility;

