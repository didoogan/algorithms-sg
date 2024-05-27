// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let a = 0;
//     let b = 1;
//     let c;

//     const result = [a, b];

//     if (n <= 1) {
//         return result[n]; 
//     }

//     while (result.length < n+1) {
//         result.push(a + b);
//         c = a;
//         a = b;
//         b = c + b;
//     }

//     return result[n];
// }
// function fib(n) {
//     if (n <=1) {
//         return n;
//     }

//     return fib(n-2) + fib(n-1);
// }

function memoize(fn) {
    const cache = {};

    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        let result = fn.apply(this, args);
        cache[args] = result;
        return result;
    }
}

function slowFib(n) {
    if (n <=1) {
        return n;
    }

    return fib(n-2) + fib(n-1);
}

const fib = memoize(slowFib);

module.exports = fib;
