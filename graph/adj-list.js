var Bag = function() {
  this.items = [];
}

Bag.prototype.getItems = function() {
  return this.items;
}

Bag.prototype.add = function(item) {
  this.items.push(item);
}

Bag.prototype.isEmpty = function() {
  return this.items.length == 0;
}

Bag.prototype.size = function() {
  return this.items.length;
}

Bag.prototype.toString = function() {
  return this.items.toString();
}

// @param v {number} vertices
var ALGraph = function(v) {
  this.e = 0;
  this.v = v;
  this.list = [];
  this.initialize(v);
}

ALGraph.prototype.initialize = function(v) {
  for (var i = 0; i < v; i++) {
    this.list[i] = new Bag();
  }
}

ALGraph.prototype.addEdge = function(a, b) {
  if (this.list[a] && this.list[b]) {
    this.list[a].add(b);
    this.list[b].add(a);
    this.e += 2;
  }
}

// Adjacent vertices
ALGraph.prototype.adj = function(a) {
  if (this.list[a]) {
    return this.list[a].getItems();
  }
}

ALGraph.prototype.toString = function() {
  var str = '';
  for (var i = 0; i < this.v; i++) {
    var items = this.adj(i);
    for (var j in items) {
      str += '(' + i +','+ items[j] + ')';
      str += "\n";
    }
  }

  return str;
}

ALGraph.prototype.numVertices = function() {
  return this.v;
}

ALGraph.prototype.numEdges = function() {
  return this.e;
}

// Tests
var graph = new ALGraph(5);
graph.addEdge(1,3);
graph.addEdge(2,4);
console.log(graph.list);
console.log(graph.toString());

module.exports.Graph = ALGraph;
