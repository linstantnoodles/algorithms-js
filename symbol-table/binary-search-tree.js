// Node object
function Node(key, value) {
  this.left = null;
  this.right = null;
  this.key = key;
  this.value = value;
  this.count = null;
}

// Assume keys are integers
function BST() {
  this.root = null;
}

BST.prototype.insert = function(key, value) {
  this.root = this.put(this.root, key, value);
}

BST.prototype.put = function(curr, key, value) {
  if (!curr) {
    return new Node(key, value);
  }

  if (key < curr.key) {
    curr.left = this.put(curr.left, key, value);
  } else if (key > curr.key) {
    curr.right = this.put(curr.right, key, value);
  } else {
    curr.value = value;
  }
  // Update count on the way back
  curr.count = 1 + this.size(curr.left) + this.size(curr.right);

  return curr;
}

BST.prototype.get = function(key) {
  var curr = this.root;
  while (curr != null) {
    if (key < curr.key) {
      curr = curr.left; // Go left;
    } else if (key > curr.key) {
      curr = curr.right; // Go right
    } else {
      return curr.value;
    }
  }

  return null;
}

BST.prototype.size = function(node) {
  if (!node) {
    return 0;
  }
  return (node.count == null) ? 1 : node.count;
}

BST.prototype.rank = function(curr, key) {
  if (!curr) {
    return 0;
  }

  if (key < curr.key) {
    return this.rank(curr.left, key);
  } else if (key > curr.key) {
    return 1 + this.size(curr.left) + this.rank(curr.right, key);
  } else {
    return this.size(curr.left);
  }

}

// In-order print
BST.prototype.print = function() {
  var queue = [];
  this.inorder(this.root, queue);
  while (queue.length > 0) {
    var node = queue.shift();
    console.log("(K,V) = (" + node.key + "," + node.value + ")");
  }
}

BST.prototype.inorder = function(node, queue) {
  if (node == null) {
    return;
  }

  this.inorder(node.left, queue);
  queue.push(node);
  this.inorder(node.right, queue);

  return;
}

var bst = new BST();
bst.insert(5, "Alan");
bst.insert(3, "Jane");
bst.insert(1, "Bob");
bst.insert(11, "Dave");
console.log("Printing tree");
bst.print();
console.log(bst.get(3));
console.log(bst.get(1));
console.log("Total at root: " + bst.root.count);
console.log(bst.rank(bst.root, 11));
