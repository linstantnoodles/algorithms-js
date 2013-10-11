var list = [8,7,3,4,1,1,1,1,1,1,3];

function quickSort(list, lo, hi) {

  if (lo > hi) {
    return;
  }

  var lt = i = lo;
  var gt = hi;

  while (i <= gt) {

    if (list[i] < list[lt]) {
      var temp = list[i];
      list[i] = list[lt];
      list[lt] = temp;
      i++;
      lt++;
    } else if (list[i] > list[lt]) {
      var temp = list[i];
      list[i] = list[gt];
      list[gt] = temp;
      gt--;
    } else {
      i++;
    }

  }

  quickSort(list, lo, lt - 1);
  quickSort(list, gt + 1, hi);

}

console.log(list);
quickSort(list, 0, list.length - 1);
console.log(list);
