/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { chunkArrayInGroups } = require(path.resolve(__dirname, fileName));

describe('9-chunkArrayInGroups', () => {
  const cases = [
    [ ["a", "b", "c", "d"], 2, [["a", "b"], ["c", "d"]] ],
    [ [0, 1, 2, 3, 4, 5], 3, [[0, 1, 2], [3, 4, 5]] ],
    [[0, 1, 2, 3, 4, 5], 2, [[0, 1], [2, 3], [4, 5]]],
    [ [0, 1, 2, 3, 4, 5, 6], 3, [[0, 1, 2], [3, 4, 5], [6]] ],
    [ [0, 1, 2, 3, 4, 5, 6, 7, 8], 4, [[0, 1, 2, 3], [4, 5, 6, 7], [8]] ],
    [ [0, 1, 2, 3, 4, 5, 6, 7, 8], 2, [[0, 1], [2, 3], [4, 5], [6, 7], [8]] ],
  ];
  it('should returns array as a two-dimensional array', () => {
    for (const item of cases){
      expect(chunkArrayInGroups(item[0], item[1])).toEqual(item[2])
    }
  });

})









