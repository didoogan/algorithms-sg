// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// function palindrome(str) {
//     const strLength = Math.floor(str.length);
//     const middle = Math.round(strLength) / 2;
//     const firstPart = str.substring(0, middle);

//     const secondPart = str.substring(middle + strLength % 2, strLength);

//     return firstPart === secondPart.split("").reverse().join("");
// }

// function palindrome(str) {
//     return str === str.split("").reverse().join("");
// }

// function palindrome(str) {
//     let lastIndex = str.length - 1;
//     let beginIndex = 0;

//     let list = str.split("");
//     let counter = 0;
//     while (counter <= Math.floor(str.length)) {
//         if (list[beginIndex] !== list[lastIndex]) {
//            return false; 
//         }
//         console.log("list[beginIndex]", list[beginIndex]);
//         console.log("list[lastIndex]", list[lastIndex]);

//         beginIndex++;
//         lastIndex--;
//         counter++;
//     }
//     return true;
// }

function palindrome(str) {
    return str.split("").every((el, index, array) => el == array[array.length - (index + 1)]);
}

console.log(palindrome("paap"));

module.exports = palindrome;
