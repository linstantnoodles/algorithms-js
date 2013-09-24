var list = [12,3,5,4,2,1];

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
    if (!swapped) {
      break;
    }
  }
}

console.log(list);
bubbleSort(list);
console.log(list);
