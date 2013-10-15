function Heap() {
  this.contents = [];
  this.curr = 1; // Position to insert
}

Heap.prototype.insert = function(n) {
  console.log("Before insert =========");
  console.log(this.contents);
  console.log("Inserting : " + n);
  this.contents[this.curr] = n;
  this.swim(this.curr++);
  console.log(this.contents);
  console.log("Insert complete =======");
}

Heap.prototype.swim = function(k) {
  var par = Math.floor(k/2);
  while (this.contents[k] > this.contents[par]) {
    console.log(this.contents[k] + " is bigger than its parent : " + this.contents[par]);
    var temp = this.contents[par];
    this.contents[par] = this.contents[k];
    this.contents[k] = temp;
    k = par;
    par = Math.floor(k/2);
  }
}

Heap.prototype.remove = function() {
  console.log("Before remove =====");
  console.log(this.contents);
  var max = this.contents[1];
  this.contents[1] = this.contents[this.curr - 1];
  this.curr--;
  this.sink(1);
  console.log(this.contents);
  console.log("End remove =====");
  return max;
}

Heap.prototype.greater = function(left, right) {
  left = Math.floor(left);
  right = Math.floor(right);
  return (this.contents[left] > this.contents[right]) ? left : right;
}

Heap.prototype.sink = function(k) {
  console.log("Sinking");
  var target = this.greater(k*2, k*2+1);
  while (this.contents[k] < this.contents[target]) {
    console.log(this.contents[k] + " is smaller than one of its subordinates : " + this.contents[target]);
    var temp = this.contents[target];
    this.contents[target] = this.contents[k];
    this.contents[k] = temp;
    k = target;
    target = this.greater(k*2, k*2+1);
  }
}

var hp = new Heap();
hp.insert(5);
hp.insert(3);
hp.insert(2);
hp.insert(9);
hp.insert(20);
hp.insert(1);
hp.remove();
