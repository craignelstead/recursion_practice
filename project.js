//Assignment 1 --------------------------------------------

//Fibonacci sequence using iteration
//For each number, if it is the first or second iteration push 1 (the first two numbers of the fib sequence)
//Otherwise, push (i - 1) + (i - 2)
function fibs (num) {
    let fibArray = [];
    for (let i = 1; i <= num; i++) {
        if (i <= 2) fibArray.push(1);
        else {
            fibArray.push(i - 1 + i - 2);
        }
    }
    return fibArray;
}

console.log(fibs(8)); //[1, 1, 3, 5, 7, 9, 11, 13]

//Fibonacci sequence using recursion
//If the number is 1, add 1 to the array. If 2, add 1 and 1
//Otherwise, add (num - 1 + num - 2) to the array, then call the recursive
//function with num - 1
let fibsRecArray = [];

function fibsRec (num) {
    if (num === 1) {
        fibsRecArray.unshift(1);
        return fibsRecArray;
    }

    if (num <= 2) {
        fibsRecArray.unshift(1, 1);
        return fibsRecArray;
    }

    fibsRecArray.unshift(num - 1 + num - 2);

    return fibsRec(num - 1);
}

console.log(fibsRec(8)); //[1, 1, 3, 5, 7, 9, 11, 13]


//Assignment 2 --------------------------------------------