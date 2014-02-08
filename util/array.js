/**
 * Array utility functions
 */

var Utility = {};

/**
 * Return an array of random numbers within interval [0, range]
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

  for (var i = 0; i < size; i++) {
    var newNum = Math.floor(Math.random() * range);
    list.push(newNum);
  }

  return (sort) ? list.sort(comparator) : list;
}

module.exports = Utility;

