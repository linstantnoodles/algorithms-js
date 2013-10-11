var list = [2,5,6,7,1,3,4];

function merge(list, leftLo, leftHi, rightLo, rightHi) {
  var sortedList = [];
  var left = leftLo;

  while (leftLo <= leftHi && rightLo <= rightHi) {
    // Maintains stability by moving from left subarray for equal keys
    if (list[leftLo] <= list[rightLo]) {
      sortedList.push(list[leftLo++]);
    } else {
      sortedList.push(list[rightLo++]);
    }
  }

  while (leftLo <= leftHi) {
    sortedList.push(list[leftLo++]);
  }

  while (rightLo <= rightHi) {
    sortedList.push(list[rightLo++]);
  }

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
  merge(list, lo, mid, mid + 1, hi);
  return;
}

console.log(list);
mergeSort(list, 0, list.length - 1);
console.log(list);
