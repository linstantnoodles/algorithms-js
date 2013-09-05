function QuickfindUF() {
  this.sites = [];
}

QuickfindUF.prototype.find = function(a, b) {
  // TODO: Add checks
  return this.sites[a] == this.sites[b];
}

QuickfindUF.prototype.union = function(a, b) {
  // value of b
  var vA = this.sites[a];
  var vB = this.sites[b];
  for (var i = 0; i < this.sites.length; i++) {
    if (this.sites[i] == vA) {
      this.sites[i] = vB;
    }
  }
}
QuickfindUF.prototype.numComponents = function() {
  var connectors = [];
  var count = 0;

  for (var i = 0; i < this.sites.length; i++) {
    if (!connectors[this.sites[i]]) {
      connectors[this.sites[i]] = true;
      count++;
    }
  }

  return count;
}

QuickfindUF.prototype.createSites = function(n) {
  for (var i = 0; i < n; i++) {
    this.sites[i] = i;
  }
}

QuickfindUF.prototype.init = function() {
  var _this = this;

  process.stdin.resume();
  process.stdin.setEncoding('utf8');
  process.stdin.on('data', function(chunk) {
    var elements = chunk.split('\n');
    if (elements.length < 1) {
      return;
    }

    _this.createSites(elements[0]);
    for (var i = 1; i < elements.length; i++) {
      if (elements[i]) {
        var pair = elements[i].split(' ');
        if (!_this.find(pair[0], pair[1])) {
          console.log("Connecting sites: " + pair[0] + ", " + pair[1]);
          _this.union(pair[0], pair[1]);
        }
      }
    }

    console.log("Num components: " + _this.numComponents());

  });
}

// Create a prototype for the subclass that inherist from the prototype
// of the superclass. We do this with the heir() function
function inheritFrom(p) {
  var fn = function() {}
  fn.prototype = p;
  return new fn;
}

// Our new constructor function
function QuickunionUF() {
  // Invokes constructor of QF as if it were method of object(this)
  QuickfindUF.call(this);
}

QuickunionUF.prototype = inheritFrom(QuickfindUF.prototype);

QuickunionUF.prototype.root = function(a) {
  while (this.sites[a] != a) {
    a = this.sites[a];
  }

  return a;
}

QuickunionUF.prototype.find = function(a, b) {
  return this.root(a) == this.root(b);
}

QuickunionUF.prototype.union = function(a, b) {
  this.sites[this.root(a)] = this.root(b);
}

QuickunionUF.prototype.numComponents = function() {
  var count = 0;
  for (var i = 0; i < this.sites.length; i++) {
    if (this.sites[i] == i) {
      count++;
    }
  }

  return count;
}

// Weighted quickunion
function WeightedQuickunionUF() {
  this.siteSize = [];
  QuickunionUF.call(this);
}

// Inherit from quickunion
WeightedQuickunionUF.prototype = inheritFrom(QuickunionUF.prototype);

WeightedQuickunionUF.prototype.union = function(a, b) {
  var rootA = this.root(a);
  var rootB = this.root(b);
  var sizeOfA = (this.siteSize[rootA]) ? this.siteSize[rootA] : 1;
  var sizeOfB = (this.siteSize[rootB]) ? this.siteSize[rootB] : 1;

  if (this.siteSize[rootA] < this.siteSize[rootB]) {
    this.sites[rootA] = rootB;
    this.siteSize[rootB] += this.siteSize[rootA];
  } else {
    this.sites[rootB] = rootA;
    this.siteSize[rootA] += this.siteSize[rootB];
  }
};

WeightedQuickunionUF.prototype.root = function(a) {
  // set nodes along path to the root (path compression)
  // set all node from a (including a) to root of a to be the root
  while (this.sites[a] != a) {
    this.sites[a] = this.sites[this.sites[a]];
    a = this.sites[a];
  }

  return a;
}


// Quickfind
// var quickfind = new QuickfindUF();
// quickfind.init();

// Quickunion
// var quickunion = new QuickunionUF();
// quickunion.init();

// Weighted quickunion
 var weightedquickunion = new WeightedQuickunionUF();
 weightedquickunion.init();

