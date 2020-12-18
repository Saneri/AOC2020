const assert = require('assert');
const _ = require('lodash');

const utils = require('../utils');

const rowBlock = 7;
const columnBlock = 3;

function solver(input) {
  let maxValue = 0;
  input.forEach((binaryPartition) => {
    const row = binaryPartition.slice(0, rowBlock);
    const column = binaryPartition.slice(rowBlock, rowBlock + columnBlock);
    const seatId = decode(row, 'F', 'B') * 8 + decode(column, 'L', 'R');
    if (seatId > maxValue) maxValue = seatId;
  });
  return maxValue;
}

function decode(str, lowerKey, upperKey) {
  const nOfLetters = str.length;
  let upper = Math.pow(2, nOfLetters);
  let lower = 0;
  for (let char of str) {
    const average = (lower + upper) / 2;
    if (char === lowerKey) {
      upper = average;
    } else if (char === upperKey) {
      lower = average;
    } else {
      throw 'invalid character in str';
    }
  }
  if (lower != upper - 1) {
    throw 'Calculation error';
  }
  return lower;
}

assert(decode('FBFBBFF', 'F', 'B') === 44);
assert(decode('RLR', 'L', 'R') === 5);
assert(solver(['FBFBBFFRLR']) === 357);

async function main() {
  const input = await utils.readInput('day5/input.txt', utils.types.STRING);
  console.log(solver(input));
}

main();
