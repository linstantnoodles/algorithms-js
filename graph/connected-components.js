var Graph = require('./adj-list').Graph;
var GraphProcessor = require('./dfs');

var CC = function(graph) {
  this.graph = graph;
  this.component = [];
}

CC.prototype.init = function() {
  var componentId = 0;
  var numVertices = this.graph.numVertices();
  var graphProcessor = new GraphProcessor();
  // Set all to null
  for (var i = 0; i < numVertices; i++) {
    this.component[i] = null;
  }

  var unconnectedNode = this.getUnconnected();
  while (unconnectedNode === +unconnectedNode) {
    componentId++;
    graphProcessor.init(this.graph, unconnectedNode);

    for (var i = 0; i < numVertices; i++) {
      // If marked, set component id
      if (graphProcessor.marked[i]) {
        this.component[i] = componentId;
      }

    }
    // Get next node
    unconnectedNode = this.getUnconnected();
  }

}

// Finds unconnected nodes
CC.prototype.getUnconnected = function() {
  var numVertices = this.component.length;

  for (var i = 0; i < numVertices; i++) {
    if (!this.component[i]) return i;
  }

  return null;
}

CC.prototype.connected = function(a, b) {
  return this.component[a] === this.component[b]
}



console.log(Graph);

// Nodes [0 ... 4]
var graph = new Graph(7);
graph.addEdge(0,1);
graph.addEdge(0,3);
graph.addEdge(0,2);
graph.addEdge(2,4);
graph.addEdge(5,6);

var cc = new CC(graph);
cc.init();
console.log(cc.component);
