'use strict';

const chunkArrayInGroups = (arr, size) => {
  const chunkedArr = [];
  let index = 0;
  let arrLength = Math.ceil(arr.length / size);
  while (arrLength--) chunkedArr.push([]);
  for (let i = 0; i < arr.length; i++) {
    if (i % size === 0 && i !== 0) index++;
    chunkedArr[index].push(arr[i]);
  }
  return chunkedArr;
};


console.log(
  // chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3)
);

module.exports = { chunkArrayInGroups };
