// Swapping Variables :     - Question74

// starting
let a: number = 5;
let b: number = 10;

console.log("\nBefore Swapping\n");

console.log(`Value of a is: ${a}`);
console.log(`Value of b is: ${b}`);

// Swapping

let c: number = a; // variable c holds value of one variable for temporarily

a = b; // set's a to b value
b = c; // set's og value of a variable which is stored in variable c

console.log("\nAfter Swapping\n");

console.log(`Value of a is: ${a}`);
console.log(`Value of b is: ${b}`);
