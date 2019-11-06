/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { getIndexToIns } = require(path.resolve(__dirname, fileName));

describe('8-Lowest index', () => {
  const cases = [
    [ [10, 20, 30, 40, 50], 35, 3 ],
    [ [10, 20, 30, 40, 50], 30, 2 ],
    [ [40, 60], 50, 1 ],
    [ [3, 10, 5], 3, 0 ],
    [ [5, 3, 20, 3], 5, 2 ],
    [ [2, 20, 10], 19, 2 ],
    [ [2, 5, 10], 15, 3 ],
    [ [], 1, 0 ],
  ];
  it('Return the lowest index', () => {
    for (const item of cases){
      expect(getIndexToIns(item[0], item[1])).toEqual(item[2])
    }
  });

})









