var Graph = require('./adj-list').Graph;

// Graph
var GraphProcessing = function() {
  this.from = [];
  this.marked = [];
}

GraphProcessing.prototype.init = function(graph, v) {
  var numVertices = graph.numVertices();

  for (var i = 0; i < numVertices; i++) {
    this.marked[i] = false;
  }

  this.from[v] = v;
  this.dfs(graph, v);
}

// Recursive DFS
GraphProcessing.prototype.dfs = function(graph, v) {
  // Mark as visited
  this.marked[v] = true;
  var adjNodes = graph.adj(v);

  for (var i in adjNodes) {
    var node = adjNodes[i];
    // Have we visited?
    if (!this.marked[node]) {
      this.from[node] = v;
      this.dfs(graph, node);
    }
  }
}

GraphProcessing.prototype.pathTo = function(v) {
  var path = [];
  path.push(v);

  while (this.from[v] != v) {
    path.push(this.from[v]);
    v = this.from[v];
  }

  return path.reverse();
}

/*console.log(Graph);

// Nodes [0 ... 4]
var graph = new Graph(5);
graph.addEdge(0,1);
graph.addEdge(0,3);
graph.addEdge(0,2);
graph.addEdge(2,4);

var gp = new GraphProcessing();
gp.init(graph, 0);
console.log(gp.marked);
console.log(gp.from);
console.log(gp.pathTo(4));*/

module.exports = GraphProcessing;
