var stack = [2, '+' ,3, '*', 4, '*', 5,'+',6];

function isOperator(op) {
  return ((op == '*') || (op == '/') || (op == '+') || (op == '-'));
}

function precedence(op) {
  switch (op) {
    case '*': return 2; break;
    case '/': return 2; break;
    case '+': return 1; break;
    case '-': return 1; break;
  }
  return 0;
}

function performOp(a,b,op) {
  console.log("Perform op: " + a + "," + b + " using " + op);
  switch (op) {
    case '*': return a * b; break;
    case '/': return a / b; break;
    case '+': return a + b; break;
    case '-': return a - b; break;
  }
  return 0;
}

function parse(stack) {
  var temp = [];
  while(stack.length > 0) {
    var val = stack.pop();
    if (isOperator(val)) {
      console.log("Found op: " + val);
      // Perform look ahead
      var valB = stack.pop();
      var opB = stack.pop();
      if (opB && isOperator(opB)) {
        if (precedence(opB) > precedence(val)) {
          // Next op has greater precedence
          temp.push(val); // Push op on temp
          // Putback
          stack.push(opB);
          stack.push(valB);
          continue; // Jump to next iteration
        } else {
          temp.push(performOp(temp.pop(), valB, val));
        }
        stack.push(opB);
      } else {
        // Calculate and push back on stack
        temp.push(performOp(temp.pop(), valB, val));
      }
      // return the extra operator we popped
    } else {
      console.log("Found num: " + val);
      temp.push(val);
    }
  }
  console.log(temp);
  if (temp.length > 1) parse(temp);
}

parse(stack);
