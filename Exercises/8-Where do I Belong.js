'use strict';

const getIndexToIns = (arr, num) => {
  // Find my place in this sorted array.
  const sortedArr = arr.sort((a, b) => a - b);
  let index = 0;
  while (index < arr.length && num > sortedArr[index]) index++;
  return index;
};


console.log(
  // getIndexToIns(  [10, 20, 30, 40, 50], 30  )
);

module.exports = { getIndexToIns };
