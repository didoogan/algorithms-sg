// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {

//     const str2obj = (str) => {
//         const charCount = {};

//         str = str.replace(/[^\w]/g, "").toLowerCase();

//         for (const char of str) {
//             if (charCount[char]) {
//                 charCount[char] += 1;
//             } else {
//                 charCount[char] = 1;
//             }
//         }

//         return charCount;
//     }

//     const objA = str2obj(stringA);
//     const objB = str2obj(stringB);

//     if (Object.keys(objA).length !== Object.keys(objB).length) {
//         return false;
//     }

//     for (const char in objA) {
//         if (objA[char] !== objB[char]) {
//             return false
//         }
//     }

//     return true;
// }

function anagrams(stringA, stringB) {
    return cleanStr(stringA) === cleanStr(stringB);
}

function cleanStr(str) {
    return str.replace(/[^\w]/g, "").split("").sort().join("");
}

module.exports = anagrams;
