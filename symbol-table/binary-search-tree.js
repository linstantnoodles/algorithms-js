// Node object
function Node(key, value) {
  this.left = null;
  this.right = null;
  this.key = key;
  this.value = value;
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

// In-order print
BST.prototype.print = function() {
  this.walk(this.root);
}

BST.prototype.walk = function(node) {
  if (node == null) {
    return;
  }

  this.walk(node.left);
  console.log("(K,V) = (" + node.key + "," + node.value + ")");
  this.walk(node.right);

  return;
}

var bst = new BST();
bst.insert(5, "Alan");
bst.insert(3, "Jane");
bst.insert(1, "Bob");
bst.insert(11, "Dave");
bst.print();
console.log(bst.get(3));
