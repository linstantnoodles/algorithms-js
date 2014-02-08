/*
 * Array utility functions
 */

var Utility = {};

/*
 * @return Array random numbers [0, range)
 */
Utility.randomNumbers = function(size, range) {
  var size = size || 100;
  var range = range || 100;

  var list = [];

  for (var i = 0; i < size; i++) {
    var newNum = Math.floor(Math.random() * range);
    list.push(newNum);
  }

  return list;
}

module.exports = Utility;

