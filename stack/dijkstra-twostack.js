var stack = [')',8,'*',7,'('];

function isOperator(op) {
  return (op == '*' || op == '/' || op == '+' || op == '-');
}

function performOp(a,b,op) {
  console.log("Operation: " + a + op + b);
  switch (op) {
    case '*': return a * b; break;
    case '/': return a / b; break;
    case '+': return a + b; break;
    case '-': return a - b; break;
  }
  return 0;
}

// Dijkstras two stack infix parser
function parse(stack) {
  var numStack = []; // Number stack
  var opStack = []; // Operator stack
  while (stack.length > 0) {
    var val = stack.pop();
    if (isOperator(val)) {
      opStack.push(val);
    } else if (typeof val == 'number') {
      numStack.push(val);
    } else if (val == ')') {
      var b = numStack.pop();
      var a = numStack.pop();
      var op = opStack.pop();
      numStack.push(performOp(a, b, op));
    }
  }
  console.log(numStack);
}

parse(stack);
