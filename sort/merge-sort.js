var list = [2,5,6,7,1,3,4];

function merge(list, leftLo, leftHi, rightLo, rightHi) {
  var sortedList = [];
  var left = leftLo;

  while (leftLo <= leftHi && rightLo <= rightHi) {
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

var len = list.length;
var mid = Math.floor(list.length / 2);
console.log(mid);
merge(list, 0, mid, mid + 1, len - 1);
console.log(list);
