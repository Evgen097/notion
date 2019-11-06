'use strict';
// Return an array consisting of the largest number from
// each provided sub-array. For simplicity, the provided
// array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a
// simple for loop, and access each member with array syntax arr[i].

const largestOfFour = arr => {
  const largestElems = arr.map(elem => Math.max(...elem));
  return largestElems;
};

const arr = [
  [13, 27, 18, 26],
  [4, 5, 1, 3],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]];
// console.log(largestOfFour(arr));

module.exports = { largestOfFour };
