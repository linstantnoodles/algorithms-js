function primeFactors(n) {
  if (n == 1) return [];

  var divisor = 2;
  var primeFactors = [];

  while (n > 1) {
      if (n % divisor == 0) {
          n = n / divisor;
          primeFactors.push(divisor);
      } else {
          divisor++;
      }
  }

  return primeFactors;
}

// Test
for (var i = 1; i < 20; i++) {
  console.log(i + " : ");
  console.log(primeFactors(i));
}
