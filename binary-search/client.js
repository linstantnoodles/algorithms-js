function getRandomSortedArray() {
  var list = new Array(10);
  // Fill with rand numbers
  for (var i = 0; i < list.length; i++) {
    var rand = Math.floor(Math.random() * 100);
    list[i] = rand;
  }
  // Sort numerically
  list.sort(function(a, b) {
    return a - b;
  });
  return list;
}

var list = getRandomSortedArray();
var randTarget = list[Math.floor(Math.random() * list.length)];

console.log(list);
console.log(randTarget);

function binarySearch(list, target) {
  var l = 0;
  var r = list.length - 1;
  while (l <= r) {
    var mid = Math.floor((l + r) / 2);
    if (target < list[mid]) {
      console.log('Go left');
      r = mid - 1;
    } else if (target > list[mid]) {
      console.log('Go right');
      l = mid + 1;
    } else {
      console.log('Found at : ' + mid);
      return true;
    }
  }
  console.log("Not found");
  return false;
}

binarySearch(list, randTarget);
