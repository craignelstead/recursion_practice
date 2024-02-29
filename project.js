//Assignment 1 --------------------------------------------

//Fibonacci sequence using iteration
//For each number, if it is the first or second iteration push 0 or 1 respectively
//(the first two numbers of the fib sequence)
//Otherwise, push the item in the array two indeces ago plus one index ago
function fibs (num) {
    let fibArray = [];
    for (let i = 0; i < num; i++) {
        if (i === 0 || i === 1) fibArray.push(i);
        else {
            let iMin1 = fibArray[i-1];
            let iMin2 = fibArray[i-2];
            fibArray.push(iMin1 + iMin2);
        }
    }
    return fibArray;
}

console.log('Fibs iteration: ' + fibs(8));
//[0, 1, 1, 2, 3, 5, 8, 13]

//Fibonacci sequence using recursion
//Default value of the array is [0,1] to denote the first two numbers in
//the sequence
//Base case: if num gets down to 2, return the default array [0,1]
//Otherwise, push the last occurrence plus the last last occurence
//Recursively call the function with num reduced by 1 and the updated array

function fibsRec (num, arr = [0,1]) {
    if (num <= 2) return arr;

    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);
    return fibsRec(num - 1, arr);
}

console.log('Fibs recursion: ' + fibsRec(8));
//[0, 1, 1, 2, 3, 5, 8, 13]


//Assignment 2 --------------------------------------------

//Merge sort
function mergeSort (arr) {
    if (arr.length <= 1) return arr;

    let mid = arr.length / 2;
    let left = [];
    let right = [];

    //Fill the left array
    for (let i = 0; i < mid; i++) {
        left[i] = arr[i];
    }
    //Fill the right array
    for (let i = mid; i < arr.length; i++) {
        right[i - mid] = arr[i];
    }
    //Could have acheived this with splice as well I suppose...

    //Divide left and right until they meet base case (length <= 1)
    left = mergeSort(left);
    right = mergeSort(right);

    return mergeTwoArrays(left, right);
}

//Take left and right, while they are not empty push lowest element into mergedArrs
//Return
function mergeTwoArrays (left, right) {
    let mergedArrs = [];

    while (left.length && right.length) {
        //If left is smaller, push the first element from left and remove it from left
        if (left[0] < right[0]) mergedArrs.push(left.shift());
        else mergedArrs.push(right.shift());
    }

    console.log('mergedArrs: ' + mergedArrs);
    console.log('left: ' + left);
    console.log('right: ' + right);

    return [...mergedArrs, ...left, ...right];
}

//

console.log('Merge sort 1: ' + mergeSort([3, 2, 1, 13, 8, 5, 0, 1]))
//[0, 1, 1, 2, 3, 5, 8, 13]

console.log('Merge sort 2: ' + mergeSort([105, 79, 100, 110]));
//[79, 100, 105, 110]
