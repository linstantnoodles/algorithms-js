/**
 * Insertion sort
 *
 * O(n^2)
 * @param {Array} list
 * @return {Array}
 */

function insertionSort(list) {
  var listLen = list.length;
  for (var i = 1; i < listLen; i++) {
    var j = i;
    while (list[j] < list[j-1]) {
      var temp = list[j];
      list[j] = list[j-1];
      list[j-1] = temp;
      j--;
    }
  }

  return list;
}

module.exports = insertionSort;

