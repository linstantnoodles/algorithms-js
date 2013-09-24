var numbers = [5,4,2,5,1,8];

function selectionSort(list) {
  console.log(list);
  var minIndex;
  var listLen = list.length;
  for (var i = 0; i < listLen; i++) {
    minIndex = i;
    for (var j = i + 1; j < listLen; j++) {
      if (list[j] < list[i]) {
        minIndex = j;
      }
    }
    var temp = list[i];
    list[i] = list[minIndex];
    list[minIndex] = temp;
  }
  console.log(list);
}

selectionSort(numbers);
