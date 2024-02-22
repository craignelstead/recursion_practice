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
    console.log(fibArray);
}

fibs(8); //[1, 1, 3, 5, 7, 9, 11, 13]

//Fibonacci sequence using recursion
function fibsRec (num) {

}