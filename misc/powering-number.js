/*
 * This is an efficient, recursive power algorithm that uses the divide and conquer approach
 * O(log n), assuming that n = p.
 */
function pow(b, p) {
    if (p == 0) return 1;
    // Smallest exponent
    if (p == 1) return b;
    // Divide exponent
    var res = pow(b, Math.floor(p / 2));
    // Multiply by itself
    var result = res * res;
    // If odd power, multiply by base
    return (p % 2 === 0) ? result : result * b;
}

// Here's a interative naive method
// O(n)
function powNaive(b, p) {
  var result = 1;
  for (var i = 0; i < p; i ++) {
    result*=b;
  }
  return result;
}

