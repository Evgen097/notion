/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { convert } = require(path.resolve(__dirname, fileName));

describe('1-remove', () => {
  const cases = [
    [ -30, -22 ],
    [ -10, 14 ],
    [ 0, 32 ],
    [ 20, 68 ],
    [ 30, 86 ]
  ];
  it('should  convert from Celsius to Fahrenheit', () => {
    for (const item of cases){
      expect(convert(item[0])).toEqual(item[1])
    }
  });

})









