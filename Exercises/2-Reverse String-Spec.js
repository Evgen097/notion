/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { reverseString } = require(path.resolve(__dirname, fileName));

describe('1-remove', () => {
  const cases = [
    [ "hello", "olleh" ],
    [ "Howdy", "ydwoH" ],
    [ "Greetings from Earth", "htraE morf sgniteerG" ]
  ];
  it('should  convert from Celsius to Fahrenheit', () => {
    for (const item of cases){
      expect(reverseString(item[0])).toEqual(item[1])
    }
  });

})









