// Extracting a Substrings:    -Question 87

// this extracts first 10 characters from the given string
function firstTenCharacs(str: string) {
	let subString: string = str.substring(0, 10);
	return subString;
}

let message: string = "I am greatness, I love doing hard work";

console.log(
	`The first 10 characters of string are : ${firstTenCharacs(message)}`
);
