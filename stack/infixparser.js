// Test
// (5+2) * (4*2) + 6 * 5
var stack = [5,'*',6,'+',')',2,'*',4,'(','*',')',2, '+', 5, '('];

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

// right lookahead
// left lookahead
// if both operators
  // if right larger
    // perform right
  // else if left larger
    // perform left
// if left operator greater
    // perform left
// if right operator greater
    // perform right
// else
  // perform normal

function parse(stack) {
  var temp = [];
  while (stack.length > 0) {
    var val = stack.pop();
    if (isOperator(val)) {
      // Lookahead
      var num = stack.pop();
      var op = stack.pop();
      if (num == '(') {
        temp.push(val);
        stack.push(op);
      } else if (op == ')') {
        temp.push(performOp(temp.pop(), num, val));
      } else if (!(op || isOperator(op))) {
        temp.push(performOp(temp.pop(), num, val));
      } else {
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
