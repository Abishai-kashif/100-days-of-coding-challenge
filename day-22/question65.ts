// Determining the Remainder

// defining a func that take two nums & determines their remainder
function determineRemainder(num1: number, num2: number): number {
	const remainder: number = num1 % num2;
	return remainder;
}

// logs the returned remainder
console.log(determineRemainder(5, 2)); // output: 1
