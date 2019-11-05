/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { factorialize } = require(path.resolve(__dirname, fileName));

describe('1-remove', () => {
  const cases = [
    [ 5, 120 ],
    [ 10, 3628800 ],
    [ 20, 2432902008176640000 ],
    [ 0, 1 ]
  ];
  it('should  convert from Celsius to Fahrenheit', () => {
    for (const item of cases){
      expect(factorialize(item[0])).toEqual(item[1])
    }
  });

})









