/* eslint-disable */
'use strict';

const path = require('path');
const fileName = path.basename(__filename).replace('-Spec', '');

const { truncateString } = require(path.resolve(__dirname, fileName));

describe('7-truncateString', () => {
  const cases = [
    [ "A-tisket a-tasket A green and yellow basket", 8, "A-tisket..." ],
    [ "Peter Piper picked a peck of pickled peppers", 11, "Peter Piper..." ],
    [ "A-tisket a-tasket A green and yellow basket",
      "A-tisket a-tasket A green and yellow basket".length,
      "A-tisket a-tasket A green and yellow basket"],
    [ "A-tisket a-tasket A green and yellow basket",
      "A-tisket a-tasket A green and yellow basket".length + 2,
      "A-tisket a-tasket A green and yellow basket"],
    [ "A-", 1, "A..."],
    [ "Absolutely Longer", 2, "Ab..."],
    [ "Abs", 3, "Abs"],
    [ "Abs", 4, "Abs"]
  ];
  it('should  Truncate a string', () => {
    for (const item of cases){
      expect(truncateString(item[0], item[1])).toEqual(item[2])
    }
  });

})









