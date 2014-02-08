var binarySearch = {};

/**
 * Iterative binary search
 *
 * @param {Array} list
 * @param {Number} target
 * @return {Null | Number}
 */

binarySearch.iterative = function(list, target) {
  var l = 0;
  var r = list.length - 1;
  while (l <= r) {
    var mid = Math.floor((l + r) / 2);
    if (target < list[mid]) {
      r = mid - 1;
    } else if (target > list[mid]) {
      l = mid + 1;
    } else {
      return mid
    }
  }
  return null;
}

/**
 * Recursive binary search
 *
 * @param {Array} list
 * @param {Number} target
 * @param {Number} l left pointer
 * @param {Number} r right pointer
 * @return {Null | Number}
 */

binarySearch.recursive = function(list, target, l, r) {
  if (l > r) return null;
  var mid = Math.floor((l + r) / 2);
  if (target < list[mid]) {
    return binarySearch.recursive(list, target, l, mid - 1);
  } else if (target > list[mid]) {
    return binarySearch.recursive(list, target, mid + 1, r);
  } else {
    return mid;
  }
}

module.exports = binarySearch;

