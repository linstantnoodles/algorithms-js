var Graph = require('./adj-list').Graph;

// Graph
var GraphProcessing = function() {
  this.edgeTo = [];
  this.marked = [];
}

GraphProcessing.prototype.init = function(graph) {
  var numVertices = graph.numVertices();

  for (var i = 0; i < numVertices; i++) {
    this.marked[i] = false;
  }

  this.bfs(graph, 0);
}

GraphProcessing.prototype.bfs = function(graph, v) {
  this.edgeTo[v] = v;
  this.marked[v] = true;
  var queue = [];
  queue.push(v);

  while (queue.length > 0) {
    var v = queue.shift(); // Dequeue
    var adjNodes = graph.adj(v);

    for (var i in adjNodes) {
      var node = adjNodes[i];

      if (!this.marked[node]) {
        this.marked[node] = true;
        this.edgeTo[node] = v;
        queue.push(node);
      }

    }

  }

}

GraphProcessing.prototype.pathTo = function(v) {
  var path = [];
  path.push(v);

  while (this.edgeTo[v] != v) {
    path.push(this.edgeTo[v]);
    v = this.edgeTo[v];
  }

  return path.reverse();
}


// Nodes [0 ... 4]
var graph = new Graph(5);
graph.addEdge(0,1);
graph.addEdge(0,3);
graph.addEdge(0,2);
graph.addEdge(2,4);

var gp = new GraphProcessing();
gp.init(graph);
console.log(graph.list);
console.log(gp.marked);
console.log(gp.edgeTo);
console.log(gp.pathTo(4));
