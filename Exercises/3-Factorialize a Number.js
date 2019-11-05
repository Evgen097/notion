'use strict';
// Reverse the provided string.
//You may need to turn the string into an array before
// you can reverse it.
//   Your result must be a string.
const factorialize = num => {
  let factorial = 1;
  let counter = 1;
  while (counter++ < num) {
    factorial *= counter;
  }
  return factorial;
};

// console.log(factorialize(5));

module.exports = { factorialize };
