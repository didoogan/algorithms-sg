// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

// function reverseInt(n) {
//     return parseInt(n.toString().split("").reverse().join("")) * Math.sign(n)
// }

function reverseInt(n) {
    let currentNumber = n * Math.sign(n);
    const numbers = [];

    while (currentNumber > 10) {
        numbers.push(currentNumber  % 10);
        currentNumber = Math.floor(currentNumber / 10);
    }
    numbers.push(currentNumber);
    return parseInt(numbers.join("")) * Math.sign(n);
}

module.exports = reverseInt;
