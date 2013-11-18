var list = [2,5,6,7,1,3,4];

function merge(list, lo, mid, hi) {
  var sortedList = [];
  var left = lo;
  var rightLo = mid + 1;

  while (lo <= mid && rightLo <= hi) {
    // Maintains stability by moving from left subarray for equal keys
    if (list[lo] <= list[rightLo]) {
      sortedList.push(list[lo++]);
    } else {
      sortedList.push(list[rightLo++]);
    }
  }
  // Push remaining values
  while (lo <= mid) {
    sortedList.push(list[lo++]);
  }

  while (rightLo <= hi) {
    sortedList.push(list[rightLo++]);
  }
  // Copy to original array
  while (sortedList.length > 0) {
    list[left++] = sortedList.shift();
  }
}

function mergeSort(list, lo, hi) {
  if (lo >= hi) {
    return;
  }

  var mid = Math.floor((lo + hi) / 2);
  mergeSort(list, lo, mid);
  mergeSort(list, mid + 1, hi);
  merge(list, lo, mid, hi);
  return;
}

console.log(list);
mergeSort(list, 0, list.length - 1);
console.log(list);
