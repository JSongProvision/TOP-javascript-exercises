const add = function(num1,num2) {
	return num1 + num2;
};

const subtract = function(num1,num2) {
	return num1 - num2;
};

const sum = function(numArray) {
  let sum = 0;
	for (i=numArray.length -1 ; i >= 0; i--) {
    sum += numArray.shift();
  }
  return sum;
};

const multiply = function(numArray) {
  let sum = 1;
	for (i=numArray.length -1 ; i >= 0; i--) {
    sum *= numArray.shift();
  }
  return sum;
};

const power = function(num,power) {
  return num ** power;
};

const factorial = function(numToFactor) {
	let sum = 1;
	for (i=numToFactor; i > 0; i--) {
    sum *= numToFactor;
    numToFactor--;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
