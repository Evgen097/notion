/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { confirmEnding } = require(path.resolve(__dirname, fileName));

describe('5-largestOfFour', () => {
  const cases = [
    [ "Bastian", "n", true ],
    [ "Congratulation", "on", true ],
    [ "Connor", "n", false ],
    [ `Walking on water and developing software from a specification
    are easy if both are frozen`, "specification", false ],
    [ "He has to give me a new name", "name", true ],
    [ "Open sesame", "same", true ],
    [ "Open sesame", "pen", false ],
    [ "Open sesame", "game", false ],
    [ `If you want to save our world, you must hurry.
     We dont know how much longer we can withstand the nothing`, "mountain", false ],
    [ "Abstraction", "action", true ],
  ];
  it('should  Return an array consisting of the largest number', () => {
    for (const item of cases){
      expect(confirmEnding(item[0], item[1])).toEqual(item[2])
    }
  });

  it('should not use the built-in method .endsWith()', () => {
    const fn = confirmEnding.toString();
    const reg = /endsWith/;
    expect(reg.test(fn)).toEqual(false)
  });

})









