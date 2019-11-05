/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { findLongest } = require(path.resolve(__dirname, fileName));

describe('4-findLongest', () => {
  const cases = [
    [ "The quick brown fox jumped over the lazy dog", 6 ],
    [ "May the force be with you", 5 ],
    [ "Google do a barrel roll", 6 ],
    [ "What is the average airspeed velocity of an unladen swallow", 8 ],
    [ "What if we try a super-long word such as otorhinolaryngology", 19]
  ];
  it('should  convert from Celsius to Fahrenheit', () => {
    for (const item of cases){
      expect(findLongest(item[0])).toEqual(item[1])
    }
  });

})









