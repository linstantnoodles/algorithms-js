/**
 * Bubble sort
 *
 * O(n^2)
 * @param {Array} list
 * @return {Array}
 */

function bubbleSort(list) {
  var listLen = list.length;
  var swapped;
  for (var i = 0; i < listLen - 1; i++) {
    swapped = false;
    for (var j = 0; j < listLen - 1; j++) {
      if (list[j] > list[j+1]) {
        var temp = list[j];
        list[j] = list[j+1];
        list[j+1] = temp;
        swapped = true;
      }
    }
    // list already sorted
    if (!swapped) {
      break;
    }
  }

  return list;
}

module.exports = bubbleSort;

