function operate(a, b, callback) {
    return callback(a, b);
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b){
  return a*b
}

function divide(a,b){
  return a/b
}

console.log("Addition:", operate(5, 3, add));       
console.log("Subtraction:", operate(5, 3, subtract)); 
console.log("multiply:", operate(7,4, multiply))
console.log("divide:", operate(10,3, divide))