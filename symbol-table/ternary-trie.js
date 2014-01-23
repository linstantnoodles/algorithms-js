(function() {

  var root = this;

  // Private node constructor
  function Node() {
    this.v = null; // Value
    this.c = null; // Char code
    this.left = null;
    this.right = null;
    this.mid = null;
  }

  function Trie() {
    this.root = null;
  }

  Trie.prototype.put = function(k, v, opt) {
    // Mimic method overloading
    if (!opt) {
      this.root = this.put(k, v, {i: 0, node: null});
      return;
    }

    var i = opt["i"];
    var node = opt["node"];
    var c = k.charCodeAt(i);

    if (node == null) {
      node = new Node();
      node.c = c;
    }

    if (node.c < c) {
      node.right = this.put(k, v, {i: i+1, node: node.right});
    } else if (node.c > c) {
      node.left = this.put(k, v, {i: i+1, node: node.left});
    } else if (i < k.length - 1) {
      node.mid = this.put(k, v, {i: i+1, node: node.mid});
    } else {
      node.v = v;
    }

    return node;
  };

  Trie.prototype.get = function(k, opt) {
    if (!opt) {
      return this.get(k, {i: 0, node: this.root});
    }

    var i = opt["i"];
    var node = opt["node"];
    var c = k.charCodeAt(i);

    if (node == null) return null;

    if (node.c < c) {
      return this.get(k, {i: i+1, node: node.right});
    } else if (node.c > c) {
      return this.get(k, {i: i+1, node: node.left});
    } else if (i < k.length - 1) {
      return this.get(k, {i: i+1, node: node.mid});
    } else {
      return node.v;
    }

  };

  root.Trie = Trie;

})();

var a = new Trie();
a.put("alan", 5);
console.log(a.get("alan"));
