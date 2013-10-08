var list = [8,7,3,4,1,1,1,1,1,1,3];

function partition(list, left, right) {
  var lo = left + 1;
  var hi = right;

  console.log("========================= BEGIN [Before partition]" + left + "," + right);
  console.log(list);
  console.log("Using [" + list[left] + "] @ " + left);
  while (1) {
    while (list[lo] < list[left] && lo < right) {
      console.log("decrementing lo");
      lo++;
    }

    while (list[hi] > list[left]) {
      console.log("decrementing hi");
      hi--;
    }

    if (lo < hi) {
      console.log("Swapping ["+list[lo]+"] with [" + list[hi] + "]");
      var temp = list[hi];
      list[hi] = list[lo];
      list[lo] = temp;
      lo++;
      hi--;
    } else {
      break;
    }

  }



  var temp = list[hi];
  list[hi] = list[left];
  list[left] = temp;

  console.log("After partition with P value of : " + list[hi] + "@ " + hi);
  console.log(list);
  console.log("========================= END");
  return hi;
}


function quickSort(list, left, right) {
  if (left >= right) {
    return;
  }
  console.log("Calling partition");
  var p = partition(list, left, right);
  quickSort(list, left, p - 1);
  quickSort(list, p + 1, right);

  return;
}

console.log(list);
quickSort(list, 0, list.length - 1);
console.log(list);
