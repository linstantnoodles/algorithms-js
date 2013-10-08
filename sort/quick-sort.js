 var list = [8,7,3,4,1,1,1,1,1,1,3];
//var list = [8,7,9,4,1];

function partition(list, left, right) {
  var lo = left + 1;
  var hi = right;

  while (lo < hi) {
    while (list[lo] < list[left]) {
      lo++;
    }
    while (list[hi] > list[left]) {
      hi--;
    }
    if (lo < hi) {
      console.log("Swapping ["+list[lo]+"] with [" + list[hi] + "]");
      var temp = list[hi];
      list[hi] = list[lo];
      list[lo] = temp;
      lo++;
      hi--;
    }
  }

  var temp = list[hi];
  list[hi] = list[left];
  list[left] = temp;

  console.log("After partition: ");
  console.log(list);
  return hi;
}


function quickSort(list, left, right) {
  if (left >= right) {
    return;
  }

  var p = partition(list, left, right);
  console.log(" Using P: " + p);
  quickSort(list, left, p - 1);
  quickSort(list, p + 1, right);

  return;
}

console.log(list);
quickSort(list, 0, list.length - 1);
console.log(list);
