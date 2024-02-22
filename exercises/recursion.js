let list = { value: 1 };
list.next = { value: 2 };
list.next.next = { value: 3 };
list.next.next.next = { value: 4 };

//console.log(list);

// prepend the new value to the list
list = { value: "new item", next: list };

//console.log(list);

// Exercise 1 - Sum all numbers till the given one
function sumTo (n) {
    if (n == 1) {
        return n;
    } else {
        return n + sumTo(n - 1);
    }
}

// console.log(sumTo(1)); // 1
// console.log(sumTo(2)); // 3
// console.log(sumTo(3)); // 6
// console.log(sumTo(4)); // 10
// console.log(sumTo(100)); // 5050

//Arithmetic progression formula
function ariProg (n) {
    return n * (1 + n) / 2;
}

// console.log(ariProg(1)); // 1
// console.log(ariProg(2)); // 3
// console.log(ariProg(3)); // 6
// console.log(ariProg(4)); // 10
// console.log(ariProg(100)); // 5050


//Exercise 2: Calculate factorial

function factorial (n) {
    if (n == 1) {return n}
    return n * factorial(n-1);
}

// console.log(factorial(5)) // 120


//Exercise 3: Fibonacci 
function fibRec (n) {
    if (n <= 1) {return n}
    return fibRec(n - 1) + fibRec(n - 2);
}

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757
// ^ This would take a VERY long time if it doesn't crash things.
//Alternative version using loops:

function fib (n) {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b;
}

// console.log(fib(3)); // 2
// console.log(fib(7)); // 13
// console.log(fib(77)); // 5527939700884757

// function printList(list) {

//     alert(list.value); // output the current item
  
//     if (list.next) {
//       printList(list.next); // do the same for the rest of the list
//     }
  
// }

// let list = {
//     value: 1,
//     next: {
//       value: 2,
//       next: {
//         value: 3,
//         next: {
//           value: 4,
//           next: null
//         }
//       }
//     }
//   };

// printList(list);


//

function printChildrenRecursive (t) {
    if (t.children.length === 0) {
        return
    }

    t.children.forEach(child => {
        console.log(child.name);
        printChildrenRecursive(child);
    });
}

const tree = {
    name: 'John',
    children: [
        {
            name: 'Jim',
            children: []
        },
        {
            name: 'Zoe',
            children: [
                { name: 'Kyle', children: [] },
                { name: 'Sophia', children: [] },
            ]
        }
    ]
}

printChildrenRecursive(tree);


// Collatz:
// If n is 1, stop
// Otherwise, if n is even, repeat this process on n/2
// Otherwise, if n is odd, repeat this process on 3n + 1
let counter = 0;
function collatz (n) {
    if (n === 1) return;
    counter++;
    if (n % 2 === 0) { //Even
        collatz (n / 2);
    } else { //Odd
        collatz (3 * n + 1);
    }
    console.log('Number of moves: ' + counter);
}

collatz(50);

