const { strict } = require("assert");
const assert = require("assert");

const utils = require("../utils");

function solver(input) {
  let correctPassAmount = 0;
  input.forEach((element) => {
    const parts = [...element.matchAll("(\\d+)-(\\d+) (\\w): (\\w+)")][0];
    const lowBoundary = parseInt(parts[1]);
    const highBoundary = parseInt(parts[2]);
    const alphabet = parts[3];
    const pass = parts[4];

    const n = pass.split(alphabet).length - 1;
    if (lowBoundary <= n && n <= highBoundary) {
      correctPassAmount += 1;
    }
  });
  return correctPassAmount;
}

assert(solver(["1-3 a: abcde", "1-3 b: cdefg", "2-9 c: ccccccccc"]) === 2);

async function main() {
  const input = await utils.readInput("day2/input.txt", utils.types.STRING);
  console.log(solver(input));
}

main();
