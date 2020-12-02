const assert = require('assert');
const fs = require('fs');

const wantedNumber = 2020;

function solver(input) {
    for (let i = 0; i < input.length; i++) {
        for (let j = 0; j < input.length; j++) {
            if (i != j && input[i] + input[j] === wantedNumber) {      
                return input[i] * input[j];
            }
        }
    }
}

assert(solver([1721,979,366,299,675,1456]) == 514579);

fs.readFile('./day1/input.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return
    }
    const input = data.split('\r\n').map(x => parseInt(x));
    console.log(solver(input));
})

