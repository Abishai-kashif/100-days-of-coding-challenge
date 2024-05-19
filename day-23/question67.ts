// Arithmetics with Mixed Types :   - Question 67

// writing a function that gets a number & a string that represents string & returns number
function addNumberAndString(number: number, numberString: string): number {
	// explicitly coirce the type of text representing number to number & add it to number
	return number + Number(numberString);
}

// calling the function with number & string
console.log(addNumberAndString(5, "5")); // output: 10
