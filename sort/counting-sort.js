var list = [5,7,2,1,9,5,2,2,2,1,0];

function countingSort(list) {
  var r = 11; // Radix + 1
  var count = [];
  var aux = [];
  // Initialize
  for (var i = 0; i < r; i++) count[i] = 0;
  // Count with offset 1
  for (var i = 0; i < list.length; i++) {
    count[list[i]+1]++;
  }
  // Cumulate
  for (var i = 1; i < count.length; i++) {
    count[i] += count[i-1];
  }
  // Sort
  for (var i = 0; i < list.length; i++) {
    aux[count[list[i]]++] = list[i];
  }
  // Copy
  for (var i = 0; i < list.length; i++) {
    list[i] = aux[i];
  }
}

countingSort(list);
console.log(list);
