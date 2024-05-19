// Converting Strings to Numbers :  -Question 89

// this function converts a string representing a number into actual number
function convertsStringNumber(str: string) {
	// return parsedInt if the given string is representing a number otherwise 0;
	return Number.isNaN(parseFloat(str)) ? 0 : parseFloat(str);
}

console.log(convertsStringNumber("100")); // output : 100
console.log(convertsStringNumber("2.5")); // output : 2.5

// try to convert an incompitible string to number typets
console.log(convertsStringNumber("f100.5n")); // output : 0
