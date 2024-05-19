// Checking for Text Presence :     - Question 86

// this func checks if the text 'Javascript' exists in the given string
function findJS(str: string) {
	return str.includes("Javascript");
}

let str: string = "I love Javascript";

if (findJS(str)) {
	console.log("The Word 'Javascript' exist in the given string");
} else {
	console.log("not found");
}
