/**
 * Selection sort
 *
 * O(n^2)
 * @param {Array} list
 * @return {Array}
 */

function selectionSort(list) {
  var minIndex;
  var listLen = list.length;
  // Last element will be in correct pos
  for (var i = 0; i < listLen - 1; i++) {
    minIndex = i;
    for (var j = i + 1; j < listLen; j++) {
      if (list[j] < list[i]) {
        minIndex = j;
      }
    }

    if (minIndex !== i) {
      var temp = list[i];
      list[i] = list[minIndex];
      list[minIndex] = temp;
    }
  }

  return list;
}

module.exports = selectionSort;

