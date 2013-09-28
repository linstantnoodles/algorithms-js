// Test
// (5+2) * (4*2) + 6 * 2
var stack = [2,'+',6,'+',')',2,'*',4,'(','*',')',2, '+', 5, '('];

function isOperator(op) {
  return (op == '*' || op == '/' || op == '+' || op == '-');
}

function precedence(op) {
  if (op == '*' || op == '/') return 2;
  if (op == '+' || op == '-') return 1;
  return 0;
}

// If a has higher precedence
function hasHigherPrecedence(a, b) {
  return precedence(a) > precedence(b);
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

function parse(stack) {
  var temp = [];
  while (stack.length > 0) {
    var val = stack.pop();
    if (isOperator(val)) {
      // Right lookahead
      var num = stack.pop();
      var op = stack.pop();
      // Left lookahead
      var numA = temp.pop();
      var opA = temp.pop();
      if (num == '(') {
        if (opA) temp.push(opA);
        if (numA) temp.push(numA);
        temp.push(val);
        stack.push(op);
      } else if (op && isOperator(op) && opA && isOperator(opA)) {
        // If right op > left op
        if (hasHigherPrecedence(op, opA)) {
            temp.push(opA);
            temp.push(numA);
          if (!hasHigherPrecedence(op, val)) {
            stack.push(op);
            temp.push(performOp(temp.pop(), num, val));
          } else {
            // Pushback
            temp.push(val);
            stack.push(op);
            stack.push(num);
          }
        } else {
          if (!hasHigherPrecedence(opA, val)) {
            stack.push(op);
            stack.push(num);
            temp.push(opA);
            temp.push(performOp(numA, stack.pop(), val));
          } else {
            if (op) stack.push(op);
            if (num) stack.push(num);
            stack.push(val);
            stack.push(numA);
            stack.push(opA);
          }
        }
      } else if (opA && isOperator(opA)) {
        if (!hasHigherPrecedence(opA, val)) {
            if (op) stack.push(op);
            if (num) stack.push(num);
            temp.push(opA);
            temp.push(performOp(numA, stack.pop(), val));
          } else {
            // Pushback
            if (op) stack.push(op);
            if (num) stack.push(num);
            stack.push(val);
            stack.push(numA);
            stack.push(opA);
          }
      } else if (op == ')') {
        if (opA) temp.push(opA);
        if (numA) temp.push(numA);
        temp.push(performOp(temp.pop(), num, val));
      } else if (!(op || isOperator(op))) {
        if (opA) temp.push(opA);
        if (numA) temp.push(numA);
        temp.push(performOp(temp.pop(), num, val));
      } else {
        if (opA) temp.push(opA);
        if (numA) temp.push(numA);
        if (!hasHigherPrecedence(op, val)) {
          stack.push(op);
          temp.push(performOp(temp.pop(), num, val));
        } else {
          // Pushback
          temp.push(val);
          stack.push(op);
          stack.push(num);
        }
      }
    } else if (typeof val == 'number') {
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
