var list = [12,2,5,2,1,5,6,12,35,56,55,32,1,3,43,1];

function getPrevSeq(val) {
  return Math.floor((val - 1) / 3);
}

function shellSort(list) {
  var listLen = list.length;
  // Knuths 3n + 1 sequence
  var seq = 3 * getPrevSeq(listLen - 1) + 1;
  while (seq > 0) {
    console.log("Seq: " + seq);
    for (var i = seq; i < listLen; i+=seq) {
      var j = i;
      while (list[j] < list[j-seq]) {
        var temp = list[j];
        list[j] = list[j-seq];
        list[j-seq] = temp;
        j-=seq;
      }
    }
    seq = getPrevSeq(seq);
  }
}

console.log(list);
shellSort(list);
console.log(list);


