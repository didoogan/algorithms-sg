// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//     const chunked = [];

//     // interate through array
//     for (let i of array) {
//         // get last chuned item
//         let last = chunked[chunked.length-1];

//         if (!last || last.length === size) {
//             chunked.push([i]);
//         } else {
//             last.push(i);
//         }

//     }

//     return chunked;
// }

function chunk(array, size) {
    const chunked = [];

    let index = 0;

    while (index < array.length) {
        let item = array.slice(index, index + size );
        chunked.push(item);
        index += size;
    }

    return chunked;
}

console.log(chunk([1, 2, 3, 4, 5], 2));

module.exports = chunk;
