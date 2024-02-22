//https://www.codingame.com/playgrounds/5422/js-interview-prep-recursion

//Question 1:

function sumRange (n) {
    if (n === 1) return n;
    return n + sumRange(n - 1);
}

console.log('Question 1:');
console.log(sumRange(3)); //6

//Question 2:

function power (base, exp) {
    if (exp === 0) return 1;
    return base * power(base, exp - 1);
}

console.log('Question 2:');
console.log(power(2, 4)); // 16
console.log(power(2, 3)); // 8
console.log(power(2, 2)); // 4 
console.log(power(2, 1)); // 2
console.log(power(2, 0)); // 1

//Question 3:

function factorial (n) {
    if (n == 1) {return n}
    return n * factorial(n-1);
}

console.log('Question 3:');
console.log(factorial(5));

//Question 4:

// let allAreLessThanSeven = all([1, 2, 9], function(num) {
//     return num < 7;
// });

// function all (arr, func) {
//     if (func === false) {return false}
//     while (arr) {
//         return
//     }
// }

// console.log('Question 4:');
// console.log(allAreLessThanSeven); // False

//Question 5:

function productOfArray (arr) {
    if (arr.length === 0) {return 1}

    let copyOfArr = arr.slice();
    
    return copyOfArr[copyOfArr.length-1] * productOfArray(copyOfArr.toSpliced(-1, 1));
}

// If the length of the array is 0, return 1 (so it multiplies by 1)
// Create a copy of the array using slice()
// Return the last number multiplied by the recursive function with the array (minus the last index) as a parameter
// So for sixty, the first run through will be 'return 10 * productOfArray([1, 2, 3])
// The last index is removed each time until there is nothing left
// Could also have done this using array.shift

let six = productOfArray([1, 2, 3]); // 6
let sixty = productOfArray([1, 2, 3, 10]); // 60

console.log('Question 5: ');
console.log(six);
console.log(sixty);

// Question 6

// function contains (obj, search) {
//     if (obj.hasOwnProperty(search) {

//     })
// }

// let nestedObject = {
//     data: {
//         info: {
//             stuff: {
//                 thing: {
//                     moreStuff: {
//                         magicNumber: 44,
//                         something: 'foo2'
//                     }
//                 }
//             }
//         }
//     }
// }

// let hasIt = contains(nestedObject, 44); // true
// let doesntHaveIt = contains(nestedObject, 'foo'); // false

// console.log('Question 6: ');
// console.log(hasIt);
// console.log(doesntHaveIt);

//Question 7:

let countInts = 0;

function totalIntegers (arr) {
    if (arr.length === 0) {return 0}

    let total = 0;
    let first = arr.shift();

    if (Array.isArray(first)) {
        total += totalIntegers(first);
    } else if (Number.isInteger(first)) {
        total += 1;
    }

    return total + totalIntegers(arr);
}

let seven = totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

//If the arrays length is 0, return 0 to end the recursion
//Set total to 0
//Get the first item in the array
//If the first item is an array, then the function is called again until it is not an array
//Once the first item is not an array, it is tested to see if it is an integer. If so, the total goes up by 1
//It returns the total plus the function with the new array

console.log('Question 7: ');
console.log(seven);

//Question 8

function SumSquares(arr) {
    if (arr.length === 0) {return 0}

    let total = 0;
    let first = arr.shift();

    if (Array.isArray(first)) {
        total += SumSquares(first);
    }

    return total + SumSquares(first * first);
}

let one = [1, 2, 3];

console.log('Question 8: ')
console.log(SumSquares(one));