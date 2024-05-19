// this function logs untill he found the first vowel in given str
function logUntillVowel(str) {
    var vowels = "aeiouAEIOU";
    // loop that iterating through a string
    for (var _i = 0, str_1 = str; _i < str_1.length; _i++) {
        var char = str_1[_i];
        if (vowels.includes(char)) {
            console.log("The first vowel found is: ".concat(char));
            break; // stops the loop when charac is a vowel
        }
        console.log(char); // logs untill encounter a vowel
    }
}
logUntillVowel("hello"); // the first vowel found is:e
console.log("sys");
