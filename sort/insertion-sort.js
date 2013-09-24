var list = [12,2,5,2,1,5,6];

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
}

console.log(list);
insertionSort(list);
console.log(list);


