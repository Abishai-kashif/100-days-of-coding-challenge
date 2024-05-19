// Function Expressions vs Function Declarations :    -  Question 78

//console.log(`calling function before declaration: ${squareOfNum(2)}`);// it works

// Function Declaration
function squareDeclaration(num: number): number {
	return num ** 2;
}

// Function Expression

// try to call the function expression before its assignment

// console.log(squareOfNum2(2)); // reference error

//function expression & assigns its to a variable
let squareExpression = function (num: number): number {
	return num ** 2;
};

// calling both functions with 4
console.log(`Function Declaration : ${squareDeclaration(4)}`); // output: 16
console.log(`Function Expression : ${squareExpression(4)}`); // output: 16

// main difference between function declaration and function expression:

// The regularFunction is hoisted, so calling it before its declaration works fine.
// The arrowFunction is not hoisted, and attempting to call it before its declaration will throw an error.
