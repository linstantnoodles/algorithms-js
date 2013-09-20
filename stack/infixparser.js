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
  while (stack.length > 0) {
    var val = stack.pop();
    if (isOperator(val)) {
      // Lookahead
      var valB = stack.pop();
      var opB = stack.pop();
      if (!(opB || isOperator(opB))) {
        temp.push(performOp(temp.pop(), valB, val));
      } else {
        if (precedence(opB) <= precedence(val)) {
          stack.push(opB);
          temp.push(performOp(temp.pop(), valB, val));
        } else {
          // Pushback
          temp.push(val);
          stack.push(opB);
          stack.push(valB);
        }
      }
    } else {
      temp.push(val);
    }
  }
  // Recurse on remaining numbers
  if (temp.length > 1) {
    parse(temp);
  } else {
    console.log(temp);
  }
}

parse(stack);
