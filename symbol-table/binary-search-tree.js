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

// Return the min node
BST.prototype.min = function(node) {
  if (!node) {
    return null;
  }

  while (node.left != null) {
    node = node.left;
  }

  return node;
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

BST.prototype.delete = function(key) {
  this.root = this.remove(this.root, key);
}

BST.prototype.remove = function(node, key) {
  if (!node) {
    return null;
  }

  if (node.key < key) {
    node.right = this.remove(node.right, key);
  } else if (node.key > key) {
    node.left = this.remove(node.left, key);
  } else {
    if (node.left && node.right) {
      var newNode = this.min(node.right);
      newNode.left = node.left;
      newNode.right = node.right;
      node = newNode;
    } else if (node.left) {
      node = node.left;
    } else if (node.right) {
      node = node.right;
    } else {
      return null;
    }
  }

  node.count = 1 + this.size(node.left) + this.size(node.right);
  return node;
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
bst.insert(6, "Sto");
bst.insert(7, "Jack");
bst.insert(8, "Henry");
bst.insert(9, "Mark");
bst.insert(10, "Alan");
bst.insert(3, "Jane");
bst.insert(2, "Bob");
bst.insert(1, "Steve");
bst.insert(11, "Dave");
console.log("Printing tree");
bst.print();
console.log(bst.get(3));
console.log(bst.get(1));
console.log("Total at root: " + bst.root.count);
console.log(bst.rank(bst.root, 11));
console.log("Min : " + bst.min(bst.root.right).key);
console.log("Deleting");
bst.delete(4);
bst.delete(1);
bst.delete(8);
bst.print();
