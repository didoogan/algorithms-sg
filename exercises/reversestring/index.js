// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// function reverse(str) {
//     const resultList = [];

//     for (let index = str.length -1; index >= 0; index--) {
//        resultList.push(str[index]); 
//     }
//     let result = resultList.join("");
//     return result
// }

// function reverse(str) {
//     const arr = str.split("")
//     arr.reverse()

//     return arr.join("")
// }

function reverse(str) {
    return str.split("").reduce((result, letter) => result.unshift(letter) && result, []).join("");
}

module.exports = reverse;

console.log(reverse("dich"));