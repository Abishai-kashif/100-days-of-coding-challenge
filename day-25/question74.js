// Swapping Variables :     - Question74
// starting
var a = 5;
var b = 10;
console.log("\nBefore Swapping\n");
console.log("Value of a is: ".concat(a));
console.log("Value of b is: ".concat(b));
// Swapping
var c = a; // variable c holds value of one variable for temporarily
a = b; // set's a to b value
b = c; // set's og value of a variable which is stored in variable c
console.log("\nAfter Swapping\n");
console.log("Value of a is: ".concat(a));
console.log("Value of b is: ".concat(b));
