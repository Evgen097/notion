'use strict';
// Return the length of the longest word in the provided sentence.
// Your response should be a number.
const findLongest = str => {
  const wordsArr = str.split(' ');
  const maxLengtWord = Math.max(...wordsArr.map(word => word.length));
  return maxLengtWord;
};

console.log(findLongest('The quick brown fox jumped over the lazy dog'));

module.exports = { findLongest };
