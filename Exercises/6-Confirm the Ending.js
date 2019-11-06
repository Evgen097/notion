'use strict';
// Return an array consisting of the largest number from
// each provided sub-array. For simplicity, the provided
// array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a
// simple for loop, and access each member with array syntax arr[i].

const confirmEnding = (str, target) => {
  const reg = new RegExp(`${target}$`);
  return reg.test(str);
};

// const str = 'Bastian';
// const target = 'n';
// console.log(confirmEnding(str, target));

module.exports = { confirmEnding };
