// this function logs untill he found the first vowel in given str
function logUntillVowel(str: string) {
	const vowels: string = "aeiouAEIOU";
	// loop that iterating through a string
	for (const char of str) {
		if (vowels.includes(char)) {
			console.log(`The first vowel found is: ${char}`);

			break; // stops the loop when charac is a vowel
		}
		console.log(char); // logs untill encounter a vowel
	}
}

logUntillVowel("hello"); // the first vowel found is:e
console.log("sys"); // no vowels
