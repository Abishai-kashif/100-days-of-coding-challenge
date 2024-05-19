// Combining Strings with Numbers :

// function that combines a string and a number
function merge(text: string, number: number): string {
	return text + number;
}

// calling the function with a string and a number & it returning a combined value
const mergedVal: string = merge("Roll-No : ", 1453);

console.log(mergedVal); //output: Roll-No : 1453;
