// Finding Length of a String:      - Question 82

// this func takes String and return its length

// creating string variable
let str: string = "Abishai";

function getStringLength(str: string): number {
	// getting length of string by using length property
	return str.length;
}

// calling the function
console.log(`The Length of ${str} is ${getStringLength(str)}`); // 7
