/**
 * Arithmetic calculator using Dijkstras infamous stack algorithms
 */

// Token object
var Token = function(value) {
  this.value = value;
};

Token.prototype = {

  constructor: Token,

  isNumber: function() {
    return isFinite(this.value);
  },

  isOperator: function() {
    return (this.value == "+"
        || this.value == "*"
        || this.value == "-"
        || this.value == "/"
        || this.value == "^");
  },

  isLeftParen: function() {
    return (this.value == "(");
  },

  isRightParen: function() {
    return (this.value == ")");
  },

  isLeftAssoc: function() {
    return (this.value == "^") ? false : true;
  },

  precedence: function() {
    switch (this.value) {
      case "+": return 2;
      case "-": return 2;
      case "*": return 3;
      case "/": return 3;
      case "^": return 4;
      default: return null;
    }
  }
};

// Simple tokenizer
var tokenize = function(str) {
  return str.split("").map(function(val) {
    return new Token(val);
  });
};

/**
 * Dijkstra yard-shunting algorithm
 * Converts an infix, arithmetic expression into postfix
 *
 * @param {Object} tokens a list of token objects
 */

var toPostFix = function(tokens) {
  var values = [],
    operators = [];
  while (tokens.length > 0) {
    var tok = tokens.shift();
    if (tok.isNumber()) {
      values.push(tok);
    } else if (tok.isOperator()) {
      while (
        operators.length > 0
        && operators[operators.length - 1].isOperator()
        && (
          (
            tok.isLeftAssoc()
            && tok.precedence() <= operators[operators.length - 1].precedence()
          )
          || (tok.precedence() < operators[operators.length - 1].precedence())
          )
      ) {
        values.push(operators.pop());
      }
      operators.push(tok);
    } else if (tok.isLeftParen()) {
      operators.push(tok);
    } else if (tok.isRightParen()) {
      while (
        operators.length > 0
        && !operators[operators.length - 1].isLeftParen()
      ) {
        values.push(operators.pop());
      }
      // Pop left paren
      operators.pop();
    }
  }

  while (operators.length > 0) {
    values.push(operators.pop());
  }

  return values;
}

/**
 * Dijkstras two-stack algorithm variant
 * Evaluates a postfix expression
 *
 * @param {Object} tokens a list of token objects
 */

var calculate = function(tokens) {
  var values = [];
  while (tokens.length > 0) {
    var token = tokens.shift();
    if (token.isNumber()) {
      values.push(token);
    } else if (token.isOperator()) {
      var op1 = parseInt(values.shift().value, 10),
        op2 = parseInt(values.shift().value, 10),
        result;
      switch (token.value) {
        case "+":
          result = op1 + op2;
        break;
        case "-":
          result = op1 - op2;
        break;
        case "*":
          result = op1 * op2;
        break;
        case "/":
          result = op1 / op2;
        break;
        case "^":
          result = Math.pow(op1, op2);
        break;
      }
      values.push(new Token(result));
    }
  }
  return values.pop();
};

console.log(calculate(toPostFix(tokenize("2+2*3"))));
