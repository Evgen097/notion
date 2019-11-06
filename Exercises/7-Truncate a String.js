'use strict';
// Return an array consisting of the largest number from
// each provided sub-array. For simplicity, the provided
// array will contain exactly 4 sub-arrays.
//
// Remember, you can iterate through an array with a
// simple for loop, and access each member with array syntax arr[i].

const truncateString = (str, num) => {
  if (num >= str.length) return str;
  const reg = new RegExp(`^(.{${num}})(.*)$`);
  const truncedStr = str.replace(reg, '$1...');
  return truncedStr;
};


console.log(
  truncateString('A-tisket green and yellow basket', 8)
);

module.exports = { truncateString };
